import React from 'react';
import ContactInfo from './Contactinfo';

class Contact extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      contactData: [
        {name: 'Abet', phone: '010-0000-0001'},
        {name: 'Betty', phone: '010-0000-0002'},
        {name: 'Charlie', phone: '010-0000-0003'},
        {name: 'David', phone: '010-0000-0004'}
      ]
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      keyword: e.target.value
    });
  }

  render() {
    const mapToComponents = (data) => {
      data.sort();
      data = data.filter(
        (contact) => {
          return contact.name.toLowerCase() // toLowerCase() : 대소문자 상관없이 검색
          .indexOf(this.state.keyword) > -1; // 검색대상문자열.indexOf(검색문자) : 검색대상문자열에서 검색문자를 반환한다. 없을시 -1을 반환          
        }
      )
      return data.map((contact, i) => {
          return (<ContactInfo contact={contact} key={i}/>);
      });
    };
    
    return (
      <div>
          <h1>Contacts</h1>
          <input
            name="keyword"
            placeholder="검색"
            value={this.state.keyword}
            onChange={this.handleChange}
          />
          <div>{mapToComponents(this.state.contactData)}</div>
      </div>
    );
  }
}

export default Contact;