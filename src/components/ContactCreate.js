import React from 'react';

class ContactCreate extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      address: ''
    };    
  }

  handleChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleClick = () => {
    const contact = {
      name: this.state.name,
      phone: this.state.phone,
      address: this.state.address
    }

    this.props.onCreate(contact);

    this.setState({
      name: '',
      phone: '',
      address: ''
    });
  }

  render() {
    return (
      <div>
        <h2>Contact 추가</h2>
        <p className="CreateForm">
          <input 
            type="text"
            name="name"
            placeholder="이름"
            value={this.state.name}
            onChange={ (e) => this.handleChange(e) }
          /><br/>

          <input 
            type="text"
            name="phone"
            placeholder="전화번호"
            value={this.state.phone}
            onChange={ (e) => this.handleChange(e) }
            /><br/>

          <input 
            type="text"
            name="address"
            placeholder="주소"
            value={this.state.address}
            onChange={ (e) => this.handleChange(e) }
            />
        </p>
        <button onClick={() => this.handleClick()}>추가 +</button>
      </div>
    )
  }
}

export default ContactCreate;