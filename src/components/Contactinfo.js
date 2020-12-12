import React from 'react';

class Contactinfo extends React.Component {
  render() {   
    return (      
        <div>          
          {this.props.contact.name}<span style={{padding:10}}/>
          {this.props.contact.phone}<span style={{padding:10}}/>
          {this.props.contact.address}
        </div>
    );
  }
}

export default Contactinfo;