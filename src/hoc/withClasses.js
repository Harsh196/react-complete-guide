import React from 'react';
//Below is a normal function and not a functional component
const withClasses =(WithComponent, className)=>{
    return props =>(
        <div className={className}>
            <WithComponent {...props}/>
        </div>
    );
};

export default withClasses;