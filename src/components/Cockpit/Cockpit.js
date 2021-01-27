import React,{ useEffect,useRef } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef=useRef(null);

  useEffect(()=>{
    console.log('[Cockpit.js] useEffect');
    // setTimeout(()=>{
    //   alert('This is an alert!!');
    // },1000);
    toggleBtnRef.current.click();
    return ()=>{
      
      console.log('[Cockpit.js] Clean up work in process');
    };
    }, []); //if you pass and empty arry [] as second parameter it will only excute when the component is mounted and unMounted

  useEffect(()=>{
    console.log('[Cockpit.js] Clean up work 2nd in process');
  }); //if you dont pass the second argument this will run after every render
  const assignedClasses=[];
  let btnClass='';
  if(props.showPersons){
    //style.backgroundColor='red'
    btnClass=classes.Red;
  }
  if (props.personsLength<=2){
    assignedClasses.push(classes.red);
  }
  if (props.personsLength<=1){
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!!!</p>
      <button
      ref={toggleBtnRef}
      className={btnClass}
      onClick={props.clicked}>
      Toggle Person
      </button>
      <AuthContext.Consumer>
        {context=>      
          <button onClick={context.login}>Login</button>
        } 
      </AuthContext.Consumer>
    </div>
  );}

  //React.memo basically only renders cockpit component if its props has changed. 
export default React.memo(cockpit);
