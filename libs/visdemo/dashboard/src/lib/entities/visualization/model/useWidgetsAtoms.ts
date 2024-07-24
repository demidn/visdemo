import { PrimitiveAtom, useAtom } from 'jotai';
import { widgetAtomsAtom, widgetsAtom } from './atoms';
import { WidgetMeta } from '../../widget/@x/visualization';

interface WidgetAtomsService {
  widgetAtoms: PrimitiveAtom<WidgetMeta>[];
  uids: string[];
}
export function useWidgetAtoms(): WidgetAtomsService {
  const [widgetAtoms] = useAtom(widgetAtomsAtom);
  const [widgets] = useAtom(widgetsAtom);

  const uids = widgets.map((w) => w.uid);

  return {
    widgetAtoms,
    uids,
  };
}
