
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from 'react';
import DataGrid, { Column, Selection, Summary, GroupItem, SortByGroupSummaryInfo } from 'devextreme-react/data-grid';
import { positions } from '../data.js';

class GridGroup extends React.Component {
 // constructor(props) {
//    super(props);
 //   this.orders = service.getOrders();
//  }
  render() {
    return (
      <React.Fragment>
        <DataGrid
          id="gridContainer"
          dataSource={positions}
          keyExpr="ID"
          showBorders={true}>
          <Selection mode="single" />
          <Column dataField="project" width={130} caption="Ventspils iela 53, Rīga" />                  
          <Column dataField="system" groupIndex={0} caption="Sistēma"/>
          <Column dataField="ID" caption="Nr.p.k." width={50}/>    
          <Column dataField="description" caption="Būvdarbu nosaukums" width={160}/>
          <Column dataField="info" caption="Papildus info" width={160}/>
             <Column dataField="unit" caption="Mērvienība" width={50} />
          <Column dataField="quantity" caption="Daudzums" color="red" width={50} alignment="right"  />
          <Column dataField="quantity_" caption="Daudzums"  width={50} alignment="right"  />         
          <Column dataField="timerate" caption="Laika norma (c/h)"  alignment="right"  />
          <Column dataField="workrate" caption="Darba samaksas likme (EUR)"  alignment="right"  />
          <Column dataField="jobsalary" caption="Darba alga (EUR)" alignment="right"  />
          <Column dataField="materials" caption="Būvizstrādājumi (EUR)"  alignment="right"  />
          
          <Column dataField="meh" caption="Mehānismi (EUR)"  alignment="right"  />
          <Column dataField="job_mat_meh" caption="Kopā  (EUR)" alignment="right"  />
          <Column dataField="workload_sum" caption="Darba ietilpība (c/h)"  alignment="right"  />
          <Column dataField="jobsalary_sum" caption="Darba alga (EUR)"  alignment="right"  />
          <Column dataField="materials_sum" caption="Būvizstrādajumi (EUR)" alignment="right"  />
          <Column dataField="meh_sum" caption="Mehānismi (EUR)"  alignment="right"  />
          <Column dataField="total" caption="Kopā  (EUR)"  alignment="right"  />
          <Summary>
            <GroupItem
              column="OrderNumber"
              summaryType="count"
              displayFormat={'{0} orders'} />
            <GroupItem
              column="SaleAmount"
              summaryType="max"
              valueFormat="currency"
              showInGroupFooter={false}
              alignByColumn={true} />
            <GroupItem
              column="TotalAmount"
              summaryType="max"
              valueFormat="currency"
              showInGroupFooter={false}
              alignByColumn={true} />
            <GroupItem
              column="TotalAmount"
              summaryType="sum"
              valueFormat="currency"
              displayFormat={'Total: {0}'}
              showInGroupFooter={true} />
          </Summary>
          <SortByGroupSummaryInfo summaryItem="count" />
        </DataGrid>
      </React.Fragment>
    );
  }
}

export default GridGroup;
