import React from 'react';
import { Fieldset as HeadlessFieldset, Field as HeadlessField, Label as HeadlessLabel } from '@headlessui/react';
import { PropsWithClassNameAndChildren } from './props';
import clsx from 'clsx';

function FieldsetBase({ className, children }: PropsWithClassNameAndChildren): React.JSX.Element {
  return <HeadlessFieldset className={clsx('flex flex-col gap-[15px] rounded-xl bg-white/5 p-[25px]', className)}>{children}</HeadlessFieldset>;
}

function Field({ className, children }: PropsWithClassNameAndChildren) {
  return <HeadlessField className={clsx('shrink-0', className)}>{children}</HeadlessField>;
}

function Label({ className, children }: PropsWithClassNameAndChildren) {
  return <HeadlessLabel className={clsx('text-sm/6 font-medium text-white', className)}>{children}</HeadlessLabel>;
}

export const Fieldset = Object.assign(FieldsetBase, { Field, Label });
