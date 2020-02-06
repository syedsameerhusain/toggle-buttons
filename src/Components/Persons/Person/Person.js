import React, { useEffect } from 'react';
//import Root from './Person.css';
import PropTypes from 'prop-types';
import Auxi from '../../../hoc/Auxi';
import withclass from '../../../hoc/withclass';
import classes from './Person.css';
//import styled from 'styled-components';
//import Radium from 'radium';
import AuthContext from '../../../context/auth-context';
const Person = props => {
  // const Styled = styled.div`
  //   width: 60%;
  //   text-align: center;
  //   border: 1px solid #eee;
  //   margin: 16px auto;
  //   box-shadow: 0 2px 3px #ccc;
  //   padding: 16px;

  //   @media (min-width: 500px) : {
  //     width: '450px';
  //   }
  // `;
  // const style = {
  //   '@media (min-width:500px)': {
  //     width: '450px'
  //   }
  // };

  console.log('[Person.js] rendering...');
  let inputElement = React.createRef();
  useEffect(() => {
    // inputElement.focus();
    inputElement.current.focus();
  }, [inputElement]);
  return (
    // <div className='Person'>
    <Auxi>
      <AuthContext.Consumer>
        {context =>
          context.authenticated ? <p>Authenticated !</p> : <p>Please log In</p>
        }
      </AuthContext.Consumer>

      <p onClick={props.click}>
        Hi {props.name} , I am {props.age} year old.
      </p>
      <p>{props.children}</p>
      <input
        key='i3'
        // ref={inputEle => {
        //   inputElement = inputEle;
        // }}
        ref={inputElement}
        type='text'
        onChange={props.changed}
        value={props.name}
      />
    </Auxi>
    // </div>
  );
};
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};
export default withclass(Person, classes.Person);
