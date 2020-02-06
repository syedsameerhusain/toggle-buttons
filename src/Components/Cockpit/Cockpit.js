import React, { useEffect, useRef, useContext } from 'react';
import Root from './Cockpit.css';
import AuthContext from '../../context/auth-context';
const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  console.log(authContext.authenticated);
  useEffect(() => {
    console.log('Cockpit useEffect...');
    toggleBtnRef.current.click();
    // setTimeout(() => {
    //   alert('data is saved in cloud');
    // }, 1000);
    return () => {
      console.log('Cockpit.js cleanup work in useEffect');
    };
  }, [props.persons]);
  useEffect(() => {
    console.log('Cockpit useEffect... 2');
    return () => {
      console.log('Cockpit.js cleanup work in 2nd useEffect');
    };
  });
  const classes = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = Root.Red;
  }
  if (props.personsLength <= 1) {
    classes.push(Root.red);
  }
  if (props.personsLength <= 2) {
    classes.push(Root.bold);
  }
  return (
    <div className={Root.Cockpit}>
      <h1>{props.heading}</h1>
      <p className={classes.join(' ')}>This is really Working !</p>
      <button className={btnClass} onClick={props.clicked}>
        Switch Name
      </button>
      <button onClick={authContext.logIn}>Log In</button>
    </div>
  );
};

export default React.memo(Cockpit);
