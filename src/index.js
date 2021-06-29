import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const myName = 'Nguyen Tien Manh';
const myAge = 20;
const myStatus = true;
function total(a,b){
  return a + b;
}
const person = {
  name: 'Nguyen Tien Manh',
  age: 18,
  status: false
}
const a =10;
const b=12;
function total1(giatriA,giatriB){
  return giatriA + giatriB
}
const element =  <h1>Tổng là: {total1(a,b)} </h1> // {total1(a,b)} --> Là 1 biểu thức

ReactDOM.render(
  // myName,
  // myAge,
  // myStatus ? 'Married' : 'Single',
  // total(4,7),
  // person.name,
  element,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); 
