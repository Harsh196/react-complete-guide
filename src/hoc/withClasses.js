import React from 'react';
//Below is a normal function and not a functional component
//https://reactjs.org/docs/higher-order-components.html This is a higher order component(HOC) 
const withClasses =(WithComponent, className)=>{
    return props =>(
        <div className={className}>
            <WithComponent {...props}/>
        </div>
    );
};

export default withClasses;