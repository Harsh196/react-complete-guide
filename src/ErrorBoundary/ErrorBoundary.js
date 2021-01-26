import React, { Component } from 'react';

class ErrorBoundary extends React.Component{

  state={
    hasError:false,
    errorMessage:''
  }
  componentDidCatch=(error, errorinfo)=>{
    this.setState({hasError:true, errorMessage:error});
  }
  render(){
    if(this.setState.hasError){
      return <h1>{this.State.errorMessage}</h1>;
    }else{
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
