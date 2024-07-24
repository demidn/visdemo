import { LineChart } from './LineChart';
import { StreamLineChart } from './StreamLineChart';
import { BarChart } from './BarChart';
import { FC } from 'react';
import { DatasourceComponent } from '../../datasource/model/DatasourceComponent';
import { PieChart } from './PieChart';
import { ChartTypeEnum } from '../model/ChartMeta';

const COMPONENTS_MAP : Record<ChartTypeEnum, FC<DatasourceComponent<Record<string, unknown>>>> = {
  line: LineChart,
  stream: StreamLineChart,
  bar: BarChart,
  pie: PieChart
}
export function getChartComponent(type: ChartTypeEnum) {
  return COMPONENTS_MAP[type];
}
