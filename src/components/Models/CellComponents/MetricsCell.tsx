import { Cell, CellProps } from 'fixed-data-table-2';
import { Model } from 'models/Model';
import * as React from 'react';

interface IModelsProps {
  models: Model[];
}
type ModelsCellProps = CellProps & IModelsProps;

export class MetricsCell extends React.PureComponent<ModelsCellProps> {
  public render() {
    const { models, rowIndex, columnKey, ...props } = this.props;
    const definedRowIndex = rowIndex || 0;

    let metricString = '';
    models[definedRowIndex].ModelMetric.forEach((value: string, key: string) => {
      metricString = `${key}: ${value}`;
    });

    return <Cell {...props}>{models[definedRowIndex].ModelMetric ? metricString : ''}</Cell>;
  }
}
