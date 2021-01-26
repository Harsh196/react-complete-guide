import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


class App extends Component {
  /*** React life Cycle hooks */

  /*The constructor() method is called before anything else, when the component is initiated,
   and it is the natural place to set up the initial state and other initial values.
  The constructor() method is called with the props, as arguments, and you should always
  start by calling the super(props) before anything else, this will initiate the parent's
  constructor method and allows the component to inherit methods from its parent (React.Component). */

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps',state.showPersons, props);
    return state;
  }
  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }
  shouldComponentUpdate(nextProps, nextStates){
    console.log('[App.js] shouldComponentUpdate', nextProps, nextStates);
    return true;
  }
  componentDidUpdate(){
    console.log('[App.js] componetDidUpdate');
  }
  state={
    persons:[
      {id:'ashj1', name:'Harsh', age:'23'},
      {id:'ashj2', name:'Mark', age:'31'},
      {id:'ashj3', name:'John', age:'40'},
    ],
    showPersons:false
  }

  togglePersonsHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState(
      {
        showPersons:!doesShow
      }
    )
  }
  deletePersonHandler=(personindex)=>{
    //const persons = this.state.persons; --> Dont use this method as it will change the original state object
    //const persons = this.state.persons.splice(); --> Alernate way to copy an array.
    const persons= [...this.state.persons]; //This is a spread operation which copies this.state.person array into const persons
    persons.splice(personindex,1); //persons.splice(indexStart,how many to remove, add item1, add item 2...)
    this.setState({persons:persons});
    console.log(persons);
    console.log(this.state.persons);
  }
  nameChangedHandler=(event,id)=>{
    const pIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });
    const person = {...this.state.persons[pIndex]};
    person.name=event.target.value;
    console.log(person);

    const persons=[...this.state.persons];
    persons[pIndex]= person;

   this.setState({persons:persons});
  }
  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons){
      persons= <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>;
    }



    return (
      <div className={classes.App}>
        <Cockpit
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
    //return React.createElement('div',{class:'App'},React.createElement('h1',null,'This is my first React App'));
  }
}

export default App;
