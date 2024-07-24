import { ChartMeta } from '../../chart/@x/visualization';
import { WidgetMeta } from '../../widget/@x/visualization';
import { useWidgets } from './useWidgets';

interface AddWidgetService {
  addWidget: (chartMeta: ChartMeta) => void;
}

const DEFAULT_HEIGHT = 300;
const DEFAULT_WIDTH = 300;
const DEFAULT_X = 50;
const DEFAULT_Y = 50;

export function useAddWidget(): AddWidgetService {
  const [widgets, setWidgets] = useWidgets()

  const addWidget = (chartMeta: ChartMeta) => {
    const widget: WidgetMeta = {
      chartMeta,
      dsUid: undefined,
      height: DEFAULT_HEIGHT,
      name: chartMeta.name,
      uid: crypto.randomUUID(),
      width: DEFAULT_WIDTH,
      propertiesToColumns: {},
      dsProperties: {},
      x: DEFAULT_X,
      y: DEFAULT_Y,
    }

    setWidgets([...widgets, widget]);
  };

  return { addWidget };
}
