import React from 'react';
// import { Card } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

class Accordion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicEvent:'true',
      Container1:'',
      Container2:'',
      Container3:'',
      Container4:'',
      ContentName1:'accordionContent',
      ContentName2:'accordionContent',
      ContentName3:'accordionContent',
      ContentName4:'accordionContent',
    };
  }
  changeContent1 = () => {
    this.setState({
      Container1:'true', Container2:'false', Container3:'false', Container4:'false'
    });
    this.setState({
      ContentName1:'accordionContentOn', ContentName2:'accordionContent', ContentName3:'accordionContent', ContentName4:'accordionContent'
    });
  }

  changeContent2 = () => {
    this.setState({
      Container1:'false', Container2:'true', Container3:'false', Container4:'false'
    });
    this.setState({
      ContentName1:'accordionContent', ContentName2:'accordionContentOn', ContentName3:'accordionContent', ContentName4:'accordionContent'
    });
  }

  changeContent3 = () => {
    this.setState({
      Container1:'false', Container2:'false', Container3:'true', Container4:'false'
    });
    this.setState({
      ContentName1:'accordionContent', ContentName2:'accordionContent', ContentName3:'accordionContentOn', ContentName4:'accordionContent'
    });
  }

  changeContent4 = () => {
    this.setState({
      Container1:'false', Container2:'false', Container3:'false', Container4:'true'
    });
    this.setState({
      ContentName1:'accordionContent', ContentName2:'accordionContent', ContentName3:'accordionContent', ContentName4:'accordionContentOn'
    });
  }

  render() {
    
    return (
      <div className="accordion">
        <div className="accordionHeader">
          <div className="container">
            <p>질문1</p>
            <div onClick={() => this.changeContent1()}>
              {this.state.clicEvent === this.state.Container1 ? '≡' : '▼'}
            </div>
          </div>
        </div>
        <div className={this.state.ContentName1}>
          <p>질문1에 대한 답변1의 내용입니다.</p>
        </div>

        <div className="accordionHeader">
          <div className="container">
            <p>질문2</p>
            <div onClick={() => this.changeContent2()}>
              {this.state.clicEvent === this.state.Container2 ? '≡' : '▼'}
            </div>
          </div>
        </div>
        <div className={this.state.ContentName2}>
          <p>질문2에 대한 답변2의 내용입니다.</p>
        </div>

        <div className="accordionHeader">
          <div className="container">
            <p>질문3</p>
            <div onClick={() => this.changeContent3()}>
              {this.state.clicEvent === this.state.Container3 ? '≡' : '▼'}
            </div>
          </div>
        </div>
        <div className={this.state.ContentName3}>
          <p>질문3에 대한 답변3의 내용입니다.</p>
        </div>

        <div className="accordionHeader">
          <div className="container">
            <p>질문4</p>
            <div onClick={() => this.changeContent4()}>
              {this.state.clicEvent === this.state.Container4 ? '≡' : '▼'}  
            </div>
          </div>
        </div>
        <div className={this.state.ContentName4}>
          <p>질문4에 대한 답변4의 내용입니다.</p>
        </div>
      </div>      
    )
  }
}

export default Accordion;