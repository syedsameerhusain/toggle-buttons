import React, { PureComponent } from 'react';
import Person from './Person/Person';
class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('persons this is getDerivedStateFromProps');
  //   return state;
  // }
  // componentWillReceiveProps(props) {
  //   console.log('Persons.js this is componentWillReceiveProps', props);
  // }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('persons this is shouldComponentUpdate');
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.clicked !== this.props.clicked ||
  //     nextProps.changed !== this.props.changed
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   //return true;
  // }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('persons this is getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }
  // componentWillUpdate() {

  // }
  componentDidUpdate(prevProps, prevState, Snapshot) {
    console.log('this is componentDidUpdate');
    console.log(Snapshot);
  }
  componentWillUnmount() {
    console.log('Persons.js component will unmount');
  }
  render() {
    console.log('Persons : rendering');
    return this.props.persons.map((person, index) => (
      <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={event => this.props.changed(event, person.id)}
        isAuth={this.props.isAuthenticated}
      />
    ));
  }
}

export default Persons;
