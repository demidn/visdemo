import { useWidgets } from './useWidgets';

interface AddWidgetService {
  removeWidget: (uid: string) => void;
}

export function useRemoveWidget(): AddWidgetService {
  const [widgets, setWidgets] = useWidgets()

  const removeWidget = (uid: string) => {
    setWidgets(widgets.filter(w => w.uid !== uid));
  };

  return { removeWidget };
}
