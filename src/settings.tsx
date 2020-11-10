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

const apiUrl = "https://ppmwprojplansync.azurewebsites.net/api/SaveTokenFn?FuncName=CreateCustomFields&code=2BCbhDUhdyoOvDDErQcTCmKGhDJzUhYcVYjNaZS3jFvMA3E39om/Rg==";

const exampleChildClass = mergeStyles({
  display: "block",
  marginBottom: "10px",
  fontFamily: "Segoe UI",
  fontSize: "15px",
  fontWeight: "bold",
  color: "rgb(100,100,100)"
});

export const Settings: React.FunctionComponent = () => {
  return (
    <div style={{padding:"20px 20px",height:"600px", width:"1050px", backgroundColor:"rgb(237, 235, 233)"}}>
          
     <SettingsDetails />
    </div>
  );
};


interface ISettingsDetailsState {
  isLoading:boolean;
}

class SettingsDetails extends React.Component<{}, ISettingsDetailsState> {
  //private _allItems: IRegionListItem[];
  private _columns: IColumn[];

  constructor(props: {}) {
    super(props);

    this._columns = [
      {
        key: "SyncId",
        name: "SyncId",
        fieldName: "SyncId",
        minWidth: 100,
        maxWidth: 150,
        isResizable: true,
      },
      {
        key: "CorrelationId",
        name: "CorrelationId",
        fieldName: "CorrelationId",
        minWidth: 100,
        maxWidth: 150,
        isResizable: true,
      },
      {
        key: "JobType",
        name: "JobType",
        fieldName: "JobType",
        minWidth: 60,
        maxWidth: 60,
        isResizable: true,
      },
      {
        key: "PlanId",
        name: "PlanId",
        fieldName: "PlanId",
        minWidth: 50,
        maxWidth: 50,
        isResizable: true,
      },
      {
        key: "ProjectId",
        name: "ProjectId",
        fieldName: "ProjectId",
        minWidth: 100,
        maxWidth: 150,
        isResizable: true,
      },
      {
        key: "Status",
        name: "Status",
        fieldName: "Status",
        minWidth: 40,
        maxWidth: 40,
        isResizable: true,
      },
      {
        key: "LogLevel",
        name: "LogLevel",
        fieldName: "LogLevel",
        minWidth: 60,
        maxWidth: 60,
        isResizable: true,
      },
      {
        key: "Message",
        name: "Message",
        fieldName: "Message",
        minWidth: 100,
        maxWidth: 150,
        isResizable: true,
      },
      {
        key: "Timestamp",
        name: "Timestamp",
        fieldName: "Timestamp",
        minWidth: 100,
        maxWidth: 100,
        isResizable: true,
      },
    ];

    this.state = {     
      isLoading: false,
    };
  }

  public render(): JSX.Element {
    const { isLoading } = this.state;

    return (
      <Fabric style={{ maxHeight: "400px" }}>
        {isLoading && (
          <Spinner
            size={SpinnerSize.large}
            className="spinnerLoaderClass"
          ></Spinner>
        )}       
        <div>
        < DefaultButton  onClick={this._onClick.bind(this)}>
        Create Custom Fields
          </ DefaultButton>
          </div>
        
      </Fabric>
    );
  }

  componentDidMount() {
   // this.getSyncs();
    //this._getData("9B51F53E-0412-4200-90FF-6EE27B75C84C");
  }
 

  private _onClick() {
    this.setState({ isLoading: true });
    axios
      .post(
        apiUrl,
        '{"syncId":"9b51f53e-0412-4200-90ff-6ee27b75c84c"}'
      )
      .then(
        (res) => {
          debugger;
          this.setState({
           //Add message
          });
          
          console.log(res);
        },
        (error) => {
          debugger;
          console.log(error);
        }
      );
  }
}

  



