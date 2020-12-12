//import logo from './logo.svg'; 이미지를 불러오는 방법
import React from 'react';
//import Contact from './components/Contact';
//import ContactInfo from './components/Contactinfo';
// import Counter from './components/Counter';
import Contact from './components/Contact.js';
import './App.css';

class App extends React.Component {
  render() {
    //let text = "React에 오신걸 환영합니다!";
    // let textcss = {
    //   color: 'blue',
    //   background: '#f3f3f3'
    // };

    return (
      <div>
        {/* <Counter/> */}
        {/* <ContactInfo name={this.props.name} desc={this.props.desc}/> */}
        <Contact/>
      </div>      
    );
  }
}

export default App;

