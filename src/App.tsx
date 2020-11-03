import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import {Login} from "./login";
import {LogDetails} from "./logDetails";




export const App: React.FunctionComponent = () => {
  return (    
    <Router>
      
      <Switch>              
        <Route path="/login" component={Login} />
        <Route path="/logdetails" component={LogDetails} />
        </Switch>
        </Router>
  );
};
