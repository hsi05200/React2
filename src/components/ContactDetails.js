import React from 'react';

class ContactDetails extends React.Component {
  render() {

    const details = (
      <div>
        <p style={{marginBottom:-10}}>{this.props.contact.name}</p>
        <p>{this.props.contact.phone}</p>
      </div>
    );
    const blank = (
      <div style={{marginTop:10}}>
        수정내용을 선택하세요.
      </div>
    );

    return (
      <div style={{marginTop:10}}>
        <h2 style={{margin:'10px 0 -5px'}}>Details</h2>
        {this.props.isSelected
          ? details
          : blank
        }
      </div> 
    );
  }
}

export default ContactDetails;