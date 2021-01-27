import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClasses from '../../../hoc/withClasses'
import AuthContext from '../../../context/auth-context'
/* This is an arrow function. ES6 --> Version of JS*/

class Person extends Component{
  constructor(props){
    super(props);
    this.inputElementRef = React.createRef(); //https://reactjs.org/docs/refs-and-the-dom.html basically gives you access to DOM element. 
  }
  componentDidMount(){
    this.inputElementRef.current.focus(); //https://reactjs.org/docs/refs-and-the-dom.html
  }
  render()
  {
    console.log('[Person.js] rendering...');
    return (
      //<div className={classes.Person}> 
      //Aux component allows to have multiple adjacent elements e.g <div> because it only returns props.children refer to Aux.js
      // React.Fragment component achieves the same behavior as Aux. Fragment component is built into react 16.2 so no need to create fragment.js file. 
      <Aux>
        <AuthContext.Consumer>
          {context =>
            context.authenticated?<p>authenticated</p>:<p>Please Log In</p>
          }
        </AuthContext.Consumer>
        <p onClick={this.props.click}>My name is {this.props.name} and I am {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input       
        ref={this.inputElementRef} // Refer to https://reactjs.org/docs/refs-and-the-dom.html
        onChange={this.props.change}
        value={this.props.name}/>
      </Aux>
      //</div>
    );
  }
}

//PropTypes is a react library which validates the props passed to the component. If the props passed to the component doesnt match the type define below it will through an error (Console error).Read more on google. 
Person.propTypes ={
  click:PropTypes.func,
  name:PropTypes.string,
  age:PropTypes.number,
  change:PropTypes.func,
  value:PropTypes.string

};
//withClasses is resusable function that takes two parameter value and wraps the content in a div and apply css based on the className passed 
export default withClasses(Person,classes.Person);
