import React from 'react';

class ContactDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      name: '',
      phone: '',
      address: ''
    };    
  }

  handleToggle = () => {
    if(!this.state.isEdit) {
      this.setState({
        name: this.props.contact.name,
        phone: this.props.contact.phone,
        address: this.props.contact.address
      });
    } else {
      this.handleEdit();
    }
    
      this.setState({
        isEdit: !this.state.isEdit
      });       
  }

  handleChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  handleEdit = () => {
    this.props.onEdit(
      this.state.name,
      this.state.phone,
      this.state.address
    );
  }

  handleKeyPress = (e) => {
    if(e.charCode === 13) {
      this.handleToggle();
    };
  }

  render() {
    const details = (
      <div className="DetailsView">
        <p style={{marginBottom:-10}}>
          <label>이름</label>
          <span>{this.props.contact.name}</span>
        </p>
        <p style={{marginBottom:-12}}>
          <label>전화번호</label>
          <span>{this.props.contact.phone}</span>
        </p>
        <p>
          <label>주소</label>
          <span>{this.props.contact.address}</span>
        </p>
      </div>
    );
    
    const edit = (
      <div className="CreateForm">
        <div>
          <span>이름</span>
          <input 
            type="text"
            name="name"
            placeholder="이름"
            value={this.state.name}
            onChange={ (e) => this.handleChange(e) }
            onKeyPress={ (e) => this.handleKeyPress(e) }
          />
        </div>

        <div>
          <span>전화번호</span>
          <input 
            type="text"
            name="phone"
            placeholder="전화번호"
            value={this.state.phone}
            onChange={ (e) => this.handleChange(e) }
            onKeyPress={ (e) => this.handleKeyPress(e) }
          />
        </div>

        <div>
          <span>주소</span>
          <input 
            type="text"
            name="address"
            placeholder="주소"
            value={this.state.address}
            onChange={ (e) => this.handleChange(e) }
            onKeyPress={ (e) => this.handleKeyPress(e) }
          />
        </div>
      </div>
    );

    const view = this.state.isEdit ? edit : details;

    const blank = (
      <div style={{margin:'10px 0 5px'}}>
        수정내용을 선택하세요.
      </div>
    );

    return (
      <div style={{marginTop:15}}>
        <h3>상세정보보기</h3>
        {this.props.isSelected ? view : blank}
        <button onClick={ () => this.handleToggle() } style={{marginRight:5}}>
          {this.state.isEdit ? "수정하기" : "수정"}
        </button>
        <button onClick={() => this.props.onRemove()}>삭제</button>        
      </div> 
    );
  }
}

ContactDetails.defaultProps = {
  contact: {
    name: '',
    phone: '',
    address: ''
  },
  onRemove: () => { console.error('onRemove not defined'); },
  onEdit: () => { console.error('onEdit not defined'); }
};

export default ContactDetails;