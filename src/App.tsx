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
const DropdownErrorExampleOptions:IDropdownOption[] = [
  { key: '9B51F53E-0412-4200-90FF-6EE27B75C84C', text: 'Beta m365x569312' },
];


export const App: React.FunctionComponent = () => {

 const onChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption|undefined): void => {
  debugger;  
  if (item) {
      //item.key;
      localStorage.setItem("syncid", item.key.toString());
      //localStorage.getItem("syncid")
    }
  };

  return (
    <Stack>
      <Stack horizontal className={exampleChildClass}>
    <span style={{color: '#004A86', fontSize: '32px', fontWeight: 'normal'}} >Project-Planner Sync </span>
    <Dropdown
            //autoComplete="on"
            //allowFreeform={true}
            placeholder="Select Sync"
            options={DropdownErrorExampleOptions}
            style={{ width: 200, float:"right" }}
            onChange={onChange}
            //text={this.state.newLastQuartersVal}
            //selectedKey={this.state.newLastQuartersVal}
          />
          </Stack>
    <Stack horizontal>
      <LeftNav />
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/logdetails" component={LogDetails} />
          <Route path="/settings" component={Settings} />
          <Route path="/users" component={Users} />

        </Switch>
      </Router>
    </Stack>
    </Stack>
  );
};
