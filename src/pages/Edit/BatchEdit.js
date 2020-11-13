import React from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
//import Globalize from 'globalize';

//import { FunctionField } from 'react-admin';
import DataGrid, {
  Column,
  Editing,
  Paging,
  Grouping,
  GroupPanel,
  SearchPanel, Selection, Summary, GroupItem, SortByGroupSummaryInfo, TotalItem, LoadPanel
  // Lookup
} from 'devextreme-react/data-grid';
import query from 'devextreme/data/query';
//import CheckBox from 'devextreme-react/check-box';
//import SelectBox from 'devextreme-react/select-box';
// import service from '../Estimates/data.js';

class BatchEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectTextOnEditStart: true,
      startEditAction: 'click',
      collapsed: false
    };
    this.onSelectTextOnEditStartChanged = this.onSelectTextOnEditStartChanged.bind(this);
    this.onStartEditActionChanged = this.onStartEditActionChanged.bind(this);
    //
    this.state = {
      expanded: true,
      totalCount: this.getGroupCount('positions')
    };
    this.onToolbarPreparing = this.onToolbarPreparing.bind(this);
    this.toolbarItemRender = this.toolbarItemRender.bind(this);
    this.dataGrid = null;
    //

  }
  onSelectTextOnEditStartChanged(args) {
    this.setState({
      selectTextOnEditStart: args.value
    });
  }
  onStartEditActionChanged(args) {
    this.setState({
      startEditAction: args.value
    });
  }

  euros = { style: 'currency', currency: 'EUR', useGrouping: true, minimumSignificantDigits: 3 };
  //customizeDate(total) {
  // return `First: ${ Globalize.formatDate(total.value, { date: 'medium' })}`;
  //}



  getGroupCount(groupField) {
    return query(this.props.positions.positions)
      .groupBy(groupField)
      .toArray().length;
  }
  toolbarItemRender() {
    return (
      <div className="informer">
        <h2 className="count">{this.state.totalCount}</h2>
        <span className="name">Total Count</span>
      </div>
    );
  }
  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift({
      location: 'before',
      template: 'totalGroupCount'
    }, {
      location: 'before',
      widget: 'dxSelectBox',
      options: {
        width: 200,
        items: [{
          value: 'positions',
          text: 'Grouping by State'
        }, {
          value: 'Employee',
          text: 'Grouping by Employee'
        }],
        displayExpr: 'text',
        valueExpr: 'value',
        value: 'positions',
        onValueChanged: this.groupChanged.bind(this)
      }
    }, {
      location: 'before',
      widget: 'dxButton',
      options: {
        width: 136,
        text: 'Collapse All',
        onClick: this.collapseAllClick.bind(this)
      }
    }, {
      location: 'after',
      widget: 'dxButton',
      options: {
        icon: 'refresh',
        onClick: this.refreshDataGrid.bind(this)
      }
    });
  }
  groupChanged(e) {
    this.dataGrid.instance.clearGrouping();
    this.dataGrid.instance.columnOption(e.value, 'groupIndex', 0);
    this.setState({
      totalCount: this.getGroupCount(e.value)
    });
  }
  collapseAllClick(e) {
    let newValue = !this.state.expanded;
    e.component.option('text', newValue ? 'Collapse All' : 'Expand All');
    this.setState({
      expanded: newValue
    });
  }
  refreshDataGrid() {
    this.dataGrid.instance.refresh();
  }


  render() {
    return (
      <div id="data-grid-demo">
        <DataGrid
          dataSource={this.props.positions.positions}
          allowColumnRepositionsing={true}
          allowColumnResizing={true}
          columnAutoWidth={true}
          keyExpr="ID"
          showBorders={true}
          onContentReady={this.onContentReady}
          headerFilter={{ visible: true }}
          filterPanel={{ visible: true }}
          filterRow={{ visible: false }}
        >
          <GroupPanel visible={true} />
          <SearchPanel visible={true} highlightCaseSensitive={true} />
          <Grouping autoExpandAll={false} />
          <Paging enabled={false} />
          <Editing
            mode="batch"
            allowUpdating={true}
            selectTextOnEditStart={this.state.selectTextOnEditStart}
            startEditAction={this.state.startEditAction} />
          <Column dataField="project" width={130} caption="Ventspils iela 53, Rīga" />

          <Column dataField="system" groupIndex={0} caption="Sistēma" />
          <Column dataField="ID" caption="Nr.p.k." width={50} />
          <Column dataField="description" caption="Būvdarbu nosaukums" width={160} />
          <Column dataField="info" caption="Papildus info" width={160} />
          <Column dataField="unit" caption="Mērvienība" width={50} />
          <Column dataField="quantity" caption="Daudzums" color="red" width={50} alignment="right" />
          <Column dataField="quantity_" caption="Fakt. Daudzums" width={50} alignment="right" />
          <Column caption="Vienības izmaksas">

            <Column dataField="timerate" caption="Laika norma (c/h)" alignment="right" format={this.euros} />
            <Column dataField="workrate" caption="Darba samaksas likme (EUR)" alignment="right" format={this.euros} />
            <Column dataField="jobsalary" caption="Darba alga (EUR)" alignment="right" format={this.euros} />


            <Column dataField="meh" caption="Mehānismi (EUR)" alignment="right" format={this.euros} />

            <Column dataField="job_mat_meh" caption="Kopā  (EUR)" alignment="right" format={this.euros} />
          </Column>
          <Column caption="Kopā uz visu apjomu">
            <Column dataField="workload_sum" caption="Darba ietilpība (c/h)" alignment="right" format={this.euros} />
            <Column dataField="jobsalary_sum" caption="Darba alga (EUR)" alignment="right" format={this.euros} />
            <Column dataField="materials_sum" caption="Būvizstrādajumi (EUR)" alignment="right" format={this.euros} />
            <Column dataField="meh_sum" caption="Mehānismi (EUR)" alignment="right" format={this.euros} />
            <Column dataField="total" caption="Kopā  (EUR)" alignment="right" format={this.euros} />
          </Column>
          <Summary>
            <GroupItem
              column="description"
              summaryType="count"
              displayFormat={'{0} skaits'} />
            <GroupItem
              column="jobsalary_sum"
              summaryType="sum"
              format={this.euros}
              showInGroupFooter={false}
              displayFormat={' {0}'}
              alignment="right"
              valueFormat="currency"
              alignByColumn={true} />
            <GroupItem
              column="materials_sum"
              summaryType="sum"
              displayFormat={' {0}'}
              alignment="right"
              valueFormat="currency"
              showInGroupFooter={false}
              alignByColumn={true} />
            <GroupItem
              column="meh_sum"
              summaryType="sum"
              format={this.meh_sum}
              showInGroupFooter={false}
              displayFormat={' {0}'}
              alignment="right"
              valueFormat="currency"
              alignByColumn={true} />
            <GroupItem
              column="total"
              summaryType="sum"
              alignByColumn={true}
              showInGroupFooter={false}

              alignment="right"
              displayFormat={' {0}'}
              alignment="right"
              valueFormat="currency"
            />
            <TotalItem
              column="materials_sum"
              summaryType="sum"
              displayFormat={' {0}'}
              alignment="right"
              valueFormat="currency" />
            <TotalItem
              column="meh_sum"
              summaryType="sum"
              displayFormat={' {0}'}
              alignment="right"
              valueFormat="currency"
            />
            <TotalItem
              column="total"
              summaryType="sum"
              displayFormat={' {0}'}
              alignment="right"
              valueFormat="currency" />

          </Summary>
        </DataGrid>

      </div>
    );
  }
}

export default BatchEdit;
