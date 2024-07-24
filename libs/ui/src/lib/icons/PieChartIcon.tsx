import React from 'react';
import { DEFAULT_HEIGHT, DEFAULT_WIDTH, IconProps } from './IconProps';

export function PieChartIcon({ width, height }: IconProps): React.JSX.Element {
  return (
    <svg width={width ?? DEFAULT_WIDTH} height={height ?? DEFAULT_HEIGHT} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.5 8.5C1.5 5.35472 3.92049 2.7743 7 2.52051V8C7 8.55229 7.44772 9 8 9H13.4795C13.2847 11.3637 11.7185 13.3408 9.57692 14.131C8.93041 14.3695 8.23101 14.5 7.5 14.5C6.20449 14.5 5.00624 14.09 4.02598 13.3926C2.4962 12.3042 1.5 10.5184 1.5 8.5Z"
        stroke="#BFBFBF"
      />
      <path d="M9 1.52051C11.9146 1.76071 14.2393 4.08541 14.4795 7H9V1.52051Z" stroke="#C650DA" />
    </svg>
  );
}
