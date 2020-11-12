import React from 'react';

import PieChart, {
  Legend,
  Series,
  Export,
  Label,
  SmallValuesGrouping,
  Connector
} from 'devextreme-react/pie-chart';

import { internetLanguages } from './PieData.js';

class PieChartApp extends React.Component {
  render() {
    return (
      <PieChart
        id="pie"
        type="doughnut"
        title="Kopsavilkuma aprēķins Nr.1 "
        palette="Soft Pastel"
        dataSource={internetLanguages}
      >
        <Series argumentField="language" valueField="percent">
          <SmallValuesGrouping mode="topN" topCount={7} />
          <Label
            visible={true}
            format="fixedPoint"
            customizeText={this.customizeLabel}
          >
            <Connector visible={true} width={1} />
          </Label>
        </Series>
        <Export enabled={true} />
        <Legend horizontalAlignment="center" verticalAlignment="bottom" />
      </PieChart>
    );
  }

  customizeLabel(point) {
    return `${point.argumentText }: ${ point.valueText }%`;
  }
}

export default PieChartApp;
