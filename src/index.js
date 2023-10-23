import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Square extends React.Component{
  render(){
    return (
      <button className='square' onClick={()=>console.log('click')}>{this.props.value}</button>
    )
  }
}

class Board extends React.Component{
  renderSquare(i){
    return <Square value={i}></Square>
  }
}

class Game extends React.Component{
 
  render(){
    const status='Next Player X';
    return{
     

    }
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
