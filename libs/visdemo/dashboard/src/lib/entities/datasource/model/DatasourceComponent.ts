import { WidgetMeta } from '../../widget/@x/datasource';

export interface DatasourceComponent<T> {
  data: T[];
  loading: boolean;
  widgetMeta: WidgetMeta
}
