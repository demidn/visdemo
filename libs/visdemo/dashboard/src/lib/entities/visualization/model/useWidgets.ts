import { useAtom } from 'jotai';
import { widgetsAtom } from './atoms';

export function useWidgets() {
  return useAtom(widgetsAtom);
}
