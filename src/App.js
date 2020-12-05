//import logo from './logo.svg'; 이미지를 불러오는 방법

import React from 'react';
import "./App.css";
import Contact from './components/Contact'

class App extends React.Component {  
  render() {            
    return (                
      <div>
        <Contact/>
      </div >   
    );
  }
}

export default App;
