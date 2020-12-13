import React from 'react';

class ContactDetails extends React.Component {
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
    const blank = (
      <div style={{marginTop:10}}>
        수정내용을 선택하세요.
      </div>
    );

    return (
      <div style={{marginTop:10}}>
        <h3>상세정보보기</h3>
        {this.props.isSelected
          ? details
          : blank
        }
      </div> 
    );
  }
}

ContactDetails.defaultProps = {
  contact: {
    name: '',
    phone: '',
    address: ''
  }
};

export default ContactDetails;