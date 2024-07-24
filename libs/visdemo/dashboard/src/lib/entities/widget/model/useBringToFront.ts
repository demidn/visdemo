import { useAtom } from 'jotai';
import { widgetsAtom } from '../../visualization/@x/widget';
import { WidgetMeta } from './WidgetMeta';

interface BringToFrontService {
  bringToFront: (widget: WidgetMeta) => void;
}
export function useBringToFront(): BringToFrontService {
  const [widgets, setWidgets] = useAtom(widgetsAtom);

  const bringToFront = (widget: WidgetMeta) => {
    const index = widgets.indexOf(widget);
    if (index === -1 || index === widgets.length - 1) {
      return;
    }

    setWidgets([...widgets.filter(w => w !== widget), widget]);
  };

  return {
    bringToFront
  };
}
