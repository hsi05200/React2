import React from 'react';
import Contactinfo from './Contactinfo';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword:'',
      contactData:[
        {name:'Abet', phone:'010-0000-0001', address:'통영시'},
        {name:'Betty', phone:'010-0000-0002', address:'거제시'},
        {name:'Charlie', phone:'010-0000-0003', address:'고성시'},
        {name:'David', phone:'010-0000-0004', address:'거제시'},
        {name:'Eleanor', phone:'010-0000-0005', address:'통영시'}
      ]
    };
    this.keywordChange = this.keywordChange.bind(this);
  }

  keywordChange(e) {
    this.setState({
      keyword:e.target.value
    });
  }
  
  render() {  
    
    const mapToComponent = (data) => {
      data.sort();
      data = data.filter(
        (contact) => {
          return contact.name.toLowerCase().indexOf(this.state.keyword) > -1;
        }
      );
      return data.map((contact, i) => {
        return (<Contactinfo contact={contact} key={i}/>);
      });
    };

    return (
      <div>
        <h1>Contacts</h1>
        <input           
          name="keyword"
          placeholder="검색"
          value={this.state.keyword}
          onChange={this.keywordChange}
        />
        <div>{mapToComponent(this.state.contactData)}</div>    
      </div>
    );
  };
}

export default Contact;