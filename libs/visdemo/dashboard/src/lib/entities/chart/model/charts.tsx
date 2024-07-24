import { ChartMeta, ChartTypeEnum } from './ChartMeta';
import { BarChartIcon, IconProps, LineChartIcon, PieChartIcon, StreamLineChartIcon } from '@xemida/ui/icons';
import React from 'react';

export const CHARTS: ChartMeta[] = [
  {
    name: 'Bar',
    type: ChartTypeEnum.bar,
    icon: ({ width, height }: IconProps) => <BarChartIcon width={width} height={height} />,
    properties: ['X', 'Y1', 'Y2'],
  },
  {
    name: 'Pie',
    type: ChartTypeEnum.pie,
    icon: ({ width, height }: IconProps) => <PieChartIcon width={width} height={height} />,
    properties: ['ID', 'Value'],
  },
  {
    name: 'Line',
    type: ChartTypeEnum.line,
    icon: ({ width, height }: IconProps) => <LineChartIcon width={width} height={height} />,
    properties: ['X', 'Y'],
  },
  {
    name: 'Stream',
    type: ChartTypeEnum.stream,
    icon: ({ width, height }: IconProps) => <StreamLineChartIcon width={width} height={height} />,
    properties: ['X', 'Y'],
  },
];
