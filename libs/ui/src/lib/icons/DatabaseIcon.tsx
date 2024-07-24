import React from 'react';
import { DEFAULT_HEIGHT, DEFAULT_WIDTH, IconProps } from './IconProps';
import { PropsWithClassName } from '../props';

export function DatabaseIcon({ className, width, height }: PropsWithClassName<IconProps>): React.JSX.Element {
  return (
    <svg
      className={className ?? ''}
      width={width ?? DEFAULT_WIDTH}
      height={height ?? DEFAULT_HEIGHT}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.59998 3.80001V3.79999C3.59998 3.79665 3.59997 3.77889 3.62341 3.74111C3.64886 3.70008 3.69866 3.64164 3.78862 3.57148C3.97143 3.42889 4.26712 3.27874 4.67715 3.14347C5.49188 2.8747 6.64904 2.70001 7.94998 2.70001C9.25091 2.70001 10.4081 2.8747 11.2228 3.14347C11.6328 3.27874 11.9285 3.42889 12.1113 3.57148C12.2013 3.64164 12.2511 3.70008 12.2765 3.74111C12.3 3.77889 12.3 3.79665 12.3 3.79999V3.80001V7.95001V12.1C12.3 12.1033 12.3 12.1211 12.2765 12.1589C12.2511 12.1999 12.2013 12.2584 12.1113 12.3285C11.9285 12.4711 11.6328 12.6213 11.2228 12.7566C10.4081 13.0253 9.25091 13.2 7.94998 13.2C6.64904 13.2 5.49188 13.0253 4.67715 12.7566C4.26712 12.6213 3.97143 12.4711 3.78862 12.3285C3.69866 12.2584 3.64886 12.1999 3.62341 12.1589C3.59997 12.1211 3.59998 12.1034 3.59998 12.1V12.1V7.95001V3.80001Z"
        stroke="#BFBFBF"
      />
      <circle cx="5.6" cy="7.19998" r="0.6" fill="#C650DA" />
      <circle cx="5.6" cy="11.2" r="0.6" fill="#C650DA" />
    </svg>
  );
}
