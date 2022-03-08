import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
import HelloComponent from './component/HelloComponent';
import Login from './Login';
import Register from './Register';
import reportWebVitals from './reportWebVitals';

// function HelloComponent(){
//   return HelloComponent
// ReactDOM.render(<HelloComponent />, document.getElementById('root'));  
// }

class StateFullComponent extends React.Component {
  render() {
    return<p>StateFullComponent</p>
  }
}

ReactDOM.render(
  <Login />,  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
