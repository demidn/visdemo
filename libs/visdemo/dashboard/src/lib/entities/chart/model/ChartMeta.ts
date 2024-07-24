import { FC } from 'react';
import { IconProps } from '@xemida/ui/icons';

export enum ChartTypeEnum {
  line = 'line',
  bar = 'bar',
  pie = 'pie',
  stream = 'stream',
}

export interface ChartMeta {
  name: string;
  type: ChartTypeEnum;
  icon: FC<IconProps>;
  properties: string[];
}
