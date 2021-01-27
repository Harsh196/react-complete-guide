import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component{
 
  // class Persons extends PureComponent will evaluate shouldComponentUpdate check so you dont have to write that function
  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps', props, state);
  //     return state;
  // }

  
  
  shouldComponentUpdate(nextProps, nextStates){
    console.log('[Persons.js] shouldComponentUpdate');
    if(nextProps.persons !== this.props.persons){
      return true;
    }else{
      return false;
    }
  }
  getSnapshotBeforeUpdate(prevProps, prevStates){
    console.log('[Persons.js] getSnapshotBeforeUpdate', prevProps, prevStates);
    return null;
  }
  componentDidUpdate(){
    console.log('[Persons.js] componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }
  render(){
    console.log('[persons.js] is rendering...')
    return this.props.persons.map( (person,index) => <Person
      key={person.id}
      click={() => this.props.clicked(index)}
      name={person.name}
      age={person.age}
      change={(event) => this.props.changed(event, person.id)} />);

  }

};

export default Persons;
