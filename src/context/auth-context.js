import React from 'react';

//Context are used to bypass the props forward chain. By using context component you can directly pass props from Component A to D by skipping b, c
const authContext = React.createContext({
    authenticated:false, 
    login: () => {}
});

export default authContext;