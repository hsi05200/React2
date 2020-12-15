import React from 'react';
import Contactinfo from './Contactinfo';
import ContactDetails from './ContactDetails';
import update from 'react-addons-update';

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKey: -1,
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
    this.choiceChange = this.choiceChange.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  keywordChange(e) {
    this.setState({
      keyword:e.target.value
    });
  }
  
  choiceChange(key) {
    this.setState({
      selectedKey: key
    });
    console.log(key, '번이 선택되었습니다!');
  }

  handleCreate(contact) {
    this.setState({
      contactData: update(this.state.contactData,
         {$push: [contact]}
        )
    });
  }

  handleRemove() {
    this.setState({
      contactData: update(this.state.contactData,
        { $splice: [[this.state.selectedKey, 1]]}  
      ), 
      selectedKey: -1
    });
  }

  handleEdit(name, phone, address) {
    this.setState({
      contactData: update(this.state.contactData, 
        {
          [this.state.selectedKey]: {
            name: { $set: name},
            phone: { $set: phone},
            address: { $set: address}
          }
        }  
      )
    });
  }

  render() {  
    
    // 시작 : 콜백함수를 이용한 배열의 재정의(반복문 효과와 동일)
    const mapToComponent = (data) => {
      data.sort();
      data = data.filter(
        (contact) => {
          return contact.name.toLowerCase()
                .indexOf(this.state.keyword.toLowerCase()) > -1;
        }
      );
      return data.map((contact, i) => {
        return (<Contactinfo 
                  contact={contact}
                  key={i}
                  onClick={() => this.choiceChange(i)}
              />);
      });
    };
    // 끝

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
        <ContactDetails 
            isSelected={this.state.selectedKey != -1}
            contact={this.state.contactData[this.state.selectedKey]}
        />
      </div>
    );
  };
}

export default Contact;