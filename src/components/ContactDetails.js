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
      <div style={{margin:'10px 0 5px'}}>
        수정내용을 선택하세요.
      </div>
    );

    return (
      <div style={{marginTop:10}}>
        <h3>상세정보보기</h3>
        {this.props.isSelected ? details : blank}
        <button style={{marginRight:5}}>수정</button>
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
  onRemove: () => { console.error('입력된 값이 없습니다.'); }
};

export default ContactDetails;