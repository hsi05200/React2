import React from 'react';
import ContactInfo from './Contactinfo';
import ContactDetails from './ContactDetails';
import './css/Contact.css';

class Contact extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: -1,
      keyword: '',
      contactData: [
        {name: 'Abet', phone: '010-0000-0001'},
        {name: 'Betty', phone: '010-0000-0002'},
        {name: 'Charlie', phone: '010-0000-0003'},
        {name: 'David', phone: '010-0000-0004'}
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      keyword: e.target.value
    });
  }

  handleClick(key) {
    this.setState({     
      selectedKey: key     
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
          return (<ContactInfo
                    contact={contact}
                    key={i}
                    onClick={() => this.handleClick(i)}
                  />);
      });
    };
    
    return (
      <div>
          <h1 className="Title">
            <a href="http://localhost:3000">Contacts</a>
          </h1>
          <input
            className="Keyword"
            name="keyword"
            placeholder="검색"
            value={this.state.keyword}
            onChange={this.handleChange}
          />
          <div className="ContactsList">{mapToComponents(this.state.contactData)}</div>
          <ContactDetails 
            isSelected={this.state.selectedKey != -1}
            contact={this.state.contactData[this.state.selectedKey]}
          />
      </div>
    );
  }
}

ContactDetails.defaultProps = {
  contact: {
    name: '',
    phone: ''
  }
};

export default Contact;