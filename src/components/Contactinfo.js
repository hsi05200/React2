import React from 'react';

class Contactinfo extends React.Component {
  render() {   
    return (      
        <div className="ContactsList" onClick={this.props.onClick}>          
          <span style={{width:70}}>{this.props.contact.name}</span>
          <span style={{width:120}}>{this.props.contact.phone}</span>
          <span>{this.props.contact.address}</span>
        </div>
    );
  }
}

export default Contactinfo;