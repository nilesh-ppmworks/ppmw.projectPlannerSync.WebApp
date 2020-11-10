import React from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import {Login} from "./login";
import {LogDetails} from "./logDetails";
import {Settings} from "./settings";
import {Users} from "./users";

import { ComboBox,  initializeIcons,  mergeStyles, } from "office-ui-fabric-react";
import { IStackTokens, Stack } from 'office-ui-fabric-react/lib/Stack';
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';

import { LeftNav } from "./navigation";
initializeIcons();
const exampleChildClass = mergeStyles({
  display: "block",
  fontFamily: "Segoe UI",
  fontSize: "15px",
  fontWeight: "bold",
  color: "rgb(100,100,100)",
  backgroundColor:"#f8f9fb",
  padding: "20px",
 // margin: "0px 20px 20px 20px"
});



export const App: React.FunctionComponent = () => {

 

  return (
    <Router>
        <Switch>
        <Route path="/login" component={Login} />
    <Stack>
    
      <Stack horizontal className={exampleChildClass}>
    <span style={{color: '#004A86', fontSize: '32px', fontWeight: 'normal'}} >Project-Planner Sync </span>
    
          </Stack>
    <Stack horizontal>
      <LeftNav />         
          <Route path="/logdetails" component={LogDetails} />
          <Route path="/settings" component={Settings} />
          <Route path="/users" component={Users} />        
    </Stack>
    </Stack>
    </Switch>
      </Router>
  );
};
