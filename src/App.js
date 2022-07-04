import React from "react";
import './App.css';


const HelloWord = (props:{name:String, age: numer})=> {
  return (
      <a
      className= 'App-link'
      href= 'https://reactjs.org'
      target= '_blank'
      rel='noopener noreferrer'
      >
          Hello World - { props.name}: { props.age}
      </a>
  )
}
const App: React.Fc =() => {
  const [age, setAge ]  =React.useState (20)
  return(
      <div className='App'>
          <header className='App-header'>
          <HelloWord name={'@Ron'}  age={age}/>
          <button className='button'onClick={()=> {
               console.log('CLICK') 
               setAge (age+1)
              }}>
              contador
          </button>
          </header>
      </div>
  );
};
export default App;
