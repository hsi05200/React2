import React from 'react';
import "../App.css";

class ButtonColor extends React.Component {    

  constructor(props) {
    super(props);
    this.state = {
      Click1:'',
      Click2:'',
      Click3:'',
      Click4:'',
      BtnName1:'ClickBtn',
      BtnName2:'ClickBtn',
      BtnName3:'ClickBtn',
      BtnName4:'ClickBtn',
    }
  }

  ChangeColor1 = () => {
    this.setState({Click1:'true',Click2:'false',Click3:'false',Click4:'false',});
    this.setState({BtnName1:'ClickBtnOn',BtnName2:'ClickBtn',BtnName3:'ClickBtn',BtnName4:'ClickBtn'})
  }

  ChangeColor2 = () => {
    this.setState({Click1:'false',Click2:'true',Click3:'false',Click4:'false',});
    this.setState({BtnName1:'ClickBtn',BtnName2:'ClickBtnOn',BtnName3:'ClickBtn',BtnName4:'ClickBtn'})
  }

  ChangeColor3 = () => {
    this.setState({Click1:'false',Click2:'false',Click3:'true',Click4:'false',});
    this.setState({BtnName1:'ClickBtn',BtnName2:'ClickBtn',BtnName3:'ClickBtnOn',BtnName4:'ClickBtn'})
  }

  ChangeColor4 = () => {
    this.setState({Click1:'false',Click2:'false',Click3:'false',Click4:'true',});
    this.setState({BtnName1:'ClickBtn',BtnName2:'ClickBtn',BtnName3:'ClickBtn',BtnName4:'ClickBtnOn'})
  }

  render() {      
  
    return (
      <div style={{marginTop:10, display: 'flex'}}>
        <div className={this.state.BtnName1} onClick={ () => this.ChangeColor1()}>클릭1</div>
        <div className={this.state.BtnName2} onClick={ () => this.ChangeColor2()}>클릭2</div>
        <div className={this.state.BtnName3} onClick={ () => this.ChangeColor3()}>클릭3</div>
        <div className={this.state.BtnName4} onClick={ () => this.ChangeColor4()}>클릭4</div>        
      </div>
    );
  }
}

export default ButtonColor;

