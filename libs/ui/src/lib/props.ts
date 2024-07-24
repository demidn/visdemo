import { PropsWithChildren } from 'react';

export type PropsWithClassName<T = unknown> = T & { className?: string };
export type PropsWithClassNameAndChildren<T = unknown> = PropsWithChildren<
  PropsWithClassName<T>
>;

export interface FormFieldProps<T = string> {
  name?: string;
  value: T;
  onChange: (value: T) => void;
}
