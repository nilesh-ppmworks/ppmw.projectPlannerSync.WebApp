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
  IDropdownOption
} from "office-ui-fabric-react";
import axios from "axios";
import {LeftNav} from "./navigation";

const apiUrl = "https://projectplannersyncazurefn.azurewebsites.net/api/SaveTokenFn?FuncName=GetLogs&code=a1aveUiShlFaOFsDAW/NJJXFIQKeDMNU7LXatOZpAMExIrPY9nC/3g==";

const exampleChildClass = mergeStyles({
  display: "block",
  marginBottom: "10px",
  fontFamily: "Segoe UI",
  fontSize: "15px",
  fontWeight: "bold",
  color: "rgb(100,100,100)"
});

export const LogDetails: React.FunctionComponent = () => {
  return (
    <div style={{padding:"20px 20px",height:"600px", backgroundColor:"rgb(237, 235, 233)"}}>
          
      <LogDetailsList />
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

class LogDetailsList extends React.Component<{}, ILogDetailsListState> {
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
      items: [], //this._allItems,

      isLoading: false,
    };
  }

  public render(): JSX.Element {
    const { items, isLoading } = this.state;

    return (
      <Fabric style={{ maxHeight: "400px" }}>
        {isLoading && (
          <Spinner
            size={SpinnerSize.large}
            className="spinnerLoaderClass"
          ></Spinner>
        )}

        <DetailsList
          compact={true}
          items={items}
          columns={this._columns}
          setKey="set"
          layoutMode={DetailsListLayoutMode.fixedColumns}
          selectionMode={SelectionMode.none}
          selectionPreservedOnEmptyClick={true}
          ariaLabelForSelectionColumn="Toggle selection"
          ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          checkButtonAriaLabel="Row checkbox"
          //onItemInvoked={this._onItemInvoked}
          isHeaderVisible={true}
        />
      </Fabric>
    );
  }

  componentDidMount() {
  
    var syncId = localStorage.getItem("syncid");
    if (syncId) {
      this._getData(syncId);
    } else { 
      alert('Please select a sync account from Settings');
      window.location.href = "/#/settings";
    }
  }

  private  handleChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption|undefined): void => {
    debugger;  
    if (item) {
        //item.key;
        localStorage.setItem("syncid", item.key.toString());
        //localStorage.getItem("syncid")
      }
    };

  private _onClick() {
    this.setState({ isLoading: true });
    axios
      .post(
        apiUrl,
        '{"SyncId":"9b51f53e-0412-4200-90ff-6ee27b75c84c","Page":1,"Size":20}'
      )
      .then(
        (res) => {
          debugger;
          this.setState({
            items: [],
          });
          this.setState({
            items: res.data.Logs,
          });
          console.log(res);
          console.log(res.data);
        },
        (error) => {
          debugger;
          console.log(error);
        }
      );
  }

  private _getData(syncId: string) {
     this.setState({ isLoading: true });

    axios.post(apiUrl, '{"SyncId":"' + syncId + '","Page":1,"Size":20}').then(
      (res) => {
        debugger;
        this.setState({ isLoading: false });
        this.setState({
          items: [],
        });
        this.setState({
          items: res.data.Logs,
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
}
