import React from 'react';

import DataGrid, { Column, Editing, Lookup } from 'devextreme-react/data-grid';
import service from './data.js';

class Assign extends React.Component {
  constructor(props) {
    super(props);
    this.dataSource = service.getEmployees();
    this.states = service.getStates();
  }
  getFilteredCities(options) {
    return {
      store: this.cities,
      filter: options.data ? ['StateID', '=', options.data.StateID] : null
    };
  }

 
  render() {
    return (
      <div id="data-grid-demo">
        <DataGrid
          dataSource={this.dataSource}
          keyExpr="ID"
          showBorders={true}
          onEditorPreparing={this.onEditorPreparing}
        >
          <Editing
            mode="row"
            allowUpdating={true}
            allowAdding={true}>
          </Editing>
          <Column dataField="FirstName" caption="N.p.k." width={50}/>
          <Column dataField="LastName" caption="Sistēma"  width={350}/>
          <Column dataField="StateID" caption="Sistēma" width={150} setCellValue={this.setStateValue}>
            <Lookup dataSource={this.states} displayExpr="Name" valueExpr="ID" />
          </Column>
          <Column dataField="DateFrom" caption="No"  width={100}/>
          <Column dataField="DateTo" caption="Līdz"  width={100}/>
        </DataGrid>
      </div>
    );
  }
}

export default Assign;
