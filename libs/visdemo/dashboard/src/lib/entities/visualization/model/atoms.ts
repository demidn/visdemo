import { atom } from 'jotai';
import { splitAtom } from 'jotai/utils';
import { focusAtom } from 'jotai-optics';
import { Visualization } from './Visualization';

export const visualizationAtom = atom<Visualization>({
  widgets: [],
});

export const widgetsAtom = focusAtom(visualizationAtom, (optic) => optic.prop('widgets'));
export const widgetAtomsAtom = splitAtom(widgetsAtom);
