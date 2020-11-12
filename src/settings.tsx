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
  ComboBox,
  Dropdown,
  IDropdownOption
} from "office-ui-fabric-react";
import axios from "axios";
import {LeftNav} from "./navigation";

const apiUrl = "https://projectplannersyncazurefn.azurewebsites.net/api/SaveTokenFn?FuncName=CreateCustomFields&code=a1aveUiShlFaOFsDAW/NJJXFIQKeDMNU7LXatOZpAMExIrPY9nC/3g==";

const exampleChildClass = mergeStyles({
  display: "block",
  marginBottom: "10px",
  fontFamily: "Segoe UI",
  fontSize: "15px",
  fontWeight: "bold",
  color: "rgb(100,100,100)"
});
const SyncOptions:IDropdownOption[] = [
  { key: '9B51F53E-0412-4200-90FF-6EE27B75C84C', text: 'Beta m365x569312' },
];

export const Settings: React.FunctionComponent = () => {
  return (
    <div style={{padding:"20px 20px",height:"600px", width:"1050px", backgroundColor:"rgb(237, 235, 233)"}}>
          
     <SettingsDetails />
    </div>
  );
};


interface ISettingsDetailsState {
  selectedSync:string;
  syncList:IDropdownOption[];
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
      selectedSync:'',  
      syncList:[],      
      isLoading: false,
    };
  }

  public render(): JSX.Element {
    const { isLoading } = this.state;

    const onChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption|undefined): void => {
      debugger;  
      if (item) {
          //item.key;
          localStorage.setItem("syncid", item.key.toString());
          //localStorage.getItem("syncid")
        }
      };
    return (
      <Fabric style={{ maxHeight: "400px" }}>
        {isLoading && (
          <Spinner
            size={SpinnerSize.large}
            className="spinnerLoaderClass"
          ></Spinner>
        )}       
        <div>
        <Dropdown
            id = "ddlSync"
            //autoComplete="on"
            //allowFreeform={true}
            placeholder="Select Sync"
            options={this.state.syncList}
            style={{ width: 200 }}
            onChange={onChange}
            //text={this.state.newLastQuartersVal}
            selectedKey={this.state.selectedSync}
          />

          <br></br>
        < DefaultButton  onClick={this._onClick.bind(this)}>
        Create Custom Fields
          </ DefaultButton>
          </div>
        
      </Fabric>
    );
  }

  componentDidMount() {
    debugger;
    var user = localStorage.getItem("userid");
    if (user) {
      this._getData(user);
    } else { 
      window.location.href = "/#/login";
    }


    var syncId = localStorage.getItem("syncid");
    if (syncId) {
      this.setState({ selectedSync: "" });
    } 
  }

  private _getData(userId: string) {
    this.setState({ isLoading: true });

   axios.post("https://projectplannersyncazurefn.azurewebsites.net/api/SaveTokenFn?FuncName=GetSyncsByUserId&code=a1aveUiShlFaOFsDAW/NJJXFIQKeDMNU7LXatOZpAMExIrPY9nC/3g==", 
    '{"userId":"' + userId + '"}').then(
     (res) => {
       debugger;
       this.setState({ isLoading: false });
       this.setState({
         syncList: [],
       });
       this.setState({         
        syncList: res.data,
       });
       console.log(res);
       console.log(res.data);
     },
     (error) => {
       this.setState({ isLoading: false });
       debugger;
       console.log(error);
     }
   );
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

  



