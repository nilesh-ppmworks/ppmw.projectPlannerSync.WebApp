import React from "react";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";

import {
  IColumn,
  DetailsList,
  DetailsListLayoutMode,
  Selection,
  SelectionMode,
  IDetailsRowProps,
  IDetailsRowStyles,
  DetailsRow
} from "office-ui-fabric-react/lib/DetailsList";
import {
  Stack,
  DefaultButton,
  TextField,
  SpinnerSize,
  Spinner,
  Toggle,
  Checkbox,
  ComboBox
} from "office-ui-fabric-react";
import axios from "axios";
import {LeftNav} from "./navigation";

const apiUrl = "https://ppmwprojplansync.azurewebsites.net/api/SaveTokenFn?FuncName=GetLogs&code=2BCbhDUhdyoOvDDErQcTCmKGhDJzUhYcVYjNaZS3jFvMA3E39om/Rg==";

const exampleChildClass = mergeStyles({
  display: "block",
  marginBottom: "10px",
  fontFamily: "Segoe UI",
  fontSize: "15px",
  fontWeight: "bold",
  color: "rgb(100,100,100)"
});

export const Users: React.FunctionComponent = () => {
  return (
    <div style={{padding:"20px 20px",height:"600px", width:"1050px", backgroundColor:"rgb(237, 235, 233)"}}>
          
      
    </div>
  );
};

interface ILogDetailsListItem {    
  SyncId: string;
  CorrelationId: string;
  JobType: string;
  PlanId:string;
  ProjectId:string;
  Status:number;
  LogLevel:number;
  Message: string;
  Timestamp:string;
}

interface ILogDetailsListState {
  items: ILogDetailsListItem[];
  isLoading:boolean;
}


