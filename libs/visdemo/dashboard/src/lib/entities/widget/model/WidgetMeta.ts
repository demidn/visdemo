import { ChartMeta } from '../../chart/@x/widget';

export const DEFAULT_WIDTH = 400;
export const DEFAULT_HEIGHT = 200;

export interface WidgetMeta {
  uid: string;
  name: string;

  // position on visualization
  x: number;
  y: number;

  // sizes
  width: number;
  height: number;

  chartMeta: ChartMeta;

  // Chart props mapping to datasource fields
  propertiesToColumns: Record<string, string>;
  dsProperties: Record<string, string>;

  dsUid: string | undefined;
}
