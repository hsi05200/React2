//import logo from './logo.svg';
import React from 'react';
import "./App.css";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      desc: ''
    };
  }
  render() {            
    return (                
      <div>
        <button onClick={
          ()=>{this.setState((state, props) => {
              return {
                name:'황성일',
                desc:'React 학습에 오신걸 환영합니다.'
              }
            });
          }}>클릭
        </button>        
        <h1>안녕하세요! {this.state.name}님!</h1>        
        <div className="div">{this.state.desc}</div>
      </div >
   
    );
  }
}

export default App;
