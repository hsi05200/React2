import React from 'react';
class ContactInfo extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.number}</h2>
        <div>{this.props.desc}</div>
      </div>
    );
  }
}

// props의 기본값을 설정할 때
// ContactInfo.defaultProps = {
//   name: 'Unknown'
// };

// props의 Type을 설정할 때 
// ContactInfo.propsTypes = {
//   name:React.propsTypes.string,  
//   desc:React.propsTypes.string, 
//   number:React.propsTypes.number.isRequired
// };

export default ContactInfo;