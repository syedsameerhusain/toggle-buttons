import React, { Component } from 'react';
import withclass from '../hoc/withclass';
import AuthContext from '../context/auth-context';
// import logo from './logo.svg';
//import Radium, { StyleRoot } from 'radium';
import Root from './App.css';
//import styled from 'styled-components';
//import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Cockpit from '../Components/Cockpit/Cockpit';
import Auxi from '../hoc/Auxi';
class App extends Component {
  constructor() {
    super();
    console.log('App constructor');
  }
  state = {
    persons: [
      { id: 'utfr12', name: 'Raj', age: 28 },
      { id: 'utfr13', name: 'Ankush', age: 9 },
      { id: 'utfr14', name: 'Vish', age: 20 }
    ],
    offices: {
      'Head Office': 'batla house',
      'Branch Office': 'Zakirnagar'
    },
    showPersons: false,
    showCockpit: true,
    authenticated: false
  };
  deletePersonHandler = PersonIndex => {
    const persons = [...this.state.persons];
    persons.splice(PersonIndex, 1);
    this.setState({ persons: persons });
  };
  loginHandler = () => {
    this.setState({
      authenticated: true
    });
  };
  nameChangeHandler = (event, id) => {
    const PersonIndex = this.state.persons.findIndex(p => p.id === id); //PersonIndex=id
    const person = { ...this.state.persons[PersonIndex] }; //person with help of PersonIndex
    person.name = event.target.value; //changed the value
    const Persons = [...this.state.persons];
    Persons[PersonIndex] = person;

    this.setState({ persons: Persons });
  };
  togglePersonHandler = () => {
    const right = this.state.showPersons;
    this.setState({ showPersons: !right });
  };
  static getDerivedStateFromProps(props, state) {
    console.log('App this is getDerivedStateFromProps', props);
    return state;
  }
  // componentWillMount() {
  //   console.log('App this is componentWillMount');
  // }
  static contextType = AuthContext;
  componentDidMount() {
    console.log('App.js this is componentDidMount');
    console.log(this.context.authenticated);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.js shouldComponentUpdate');
    return true;
  }
  componentDidUpdate() {
    console.log('App.js this is componentDidUpdate');
  }
  render() {
    console.log('App render');
    let person = null;
    if (this.state.showPersons) {
      person = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Auxi classess={Root.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Clear Screen
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            logIn: this.loginHandler
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              heading={this.props.title}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonHandler}
            />
          ) : null}
          {person}
        </AuthContext.Provider>
      </Auxi>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,null))
  }
}

export default withclass(App, Root.App);
