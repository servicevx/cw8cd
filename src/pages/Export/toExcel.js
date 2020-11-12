import React from 'react';
import DataGrid, { Column, Export, Selection, GroupPanel, Grouping } from 'devextreme-react/data-grid';
import ExcelJS from 'exceljs';
import saveAs from 'file-saver';
/*
  // Use this import for codeSandBox
  import FileSaver from 'file-saver';
*/
import { exportDataGrid } from 'devextreme/excel_exporter';

import { positions } from '../data.js';


class toExcel extends React.Component {
 /* constructor(props) {
    super(props);
    this.employees = service.getEmployees();
    this.onExporting = this.onExporting.bind(this);
  }
*/
  render() {
    return (
      <DataGrid
        id="gridContainer"
        dataSource={positions}
        showBorders={true}
        onExporting={this.onExporting}>

        <Selection mode="multiple" />
        <GroupPanel visible={true} />
        <Grouping autoExpandAll={true} />

        <Column dataField="system" groupIndex={0} caption="Sistēma"/>
          <Column dataField="ID" caption="Nr.p.k." width={50}/>    
          <Column dataField="description" caption="Būvdarbu nosaukums" width={160}/>
          <Column dataField="info" caption="Papildus info" width={160}/>
             <Column dataField="unit" caption="Mērvienība" width={50} />
          <Column dataField="quantity" caption="Daudzums" color="red" width={50} alignment="right"  />
          <Column dataField="quantity" caption="Daudzums"  width={50} alignment="right"  />         
          <Column dataField="timerate" caption="Laika norma (c/h)"  alignment="right"  />
          <Column dataField="workrate" caption="Darba samaksas likme (EUR)"  alignment="right"  />
          <Column dataField="jobsalary" caption="Darba alga (EUR)" alignment="right"  />
  

          <Column dataField="meh" caption="Mehānismi (EUR)"  alignment="right"  />
          <Column dataField="job_mat_meh" caption="Kopā  (EUR)" alignment="right"  />
          <Column dataField="workload_sum" caption="Darba ietilpība (c/h)"  alignment="right"  />
          <Column dataField="jobsalary_sum" caption="Darba alga (EUR)"  alignment="right"  />
          <Column dataField="materials_sum" caption="Būvizstrādajumi (EUR)" alignment="right"  />
          <Column dataField="meh_sum" caption="Mehānismi (EUR)"  alignment="right"  />
          <Column dataField="total" caption="Kopā  (EUR)"  alignment="right"  />

        <Export enabled={true} allowExportSelectedData={true} />
      </DataGrid>
    );
  }

  onExporting(e) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Main sheet');

    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true
    }).then(() => {
      // https://github.com/exceljs/exceljs#writing-xlsx
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Tame.xlsx');
      });
    });
    e.cancel = true;
  }
}

export default toExcel;
