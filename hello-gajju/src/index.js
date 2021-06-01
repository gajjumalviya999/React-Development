import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// class Hello extends React.Component{
//   render(){
//     return React.createElement(
//       'div',
//       {},
//       'Hello Gajju'
//     );
//   }
// }

// const ele=document.getElementById("root");
// ReactDOM.render(React.createElement(Hello),ele);

// ReactDOM.render((<h1>Hello Gajju from JSX</h1>),ele);

// class Task2 extends React.Component{
//   render(){
//     return React.createElement(
//       'div',
//       null,
//       React.createElement(
//           'label',
//           {
//             className:'label',
//             htmlFor:"name"
//           },
//           "Enter Name:"
//       ),
//       React.createElement(
//         'input',
//         {
//           id:"name",
//           type:"text",
//           style:{
//             width:"90%"
//           }
//         }
//       ),
//       React.createElement(
//         'button',
//         {
//           style:{
//             background:"red",
//             color:"white",
//           }
//         },
//         "Button"
//       )
//       );
//   }
// }

// ReactDOM.render(React.createElement(Task2),ele);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
