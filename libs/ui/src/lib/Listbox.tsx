import React, { ComponentProps, useMemo } from 'react';
import { Listbox as HeadlessListbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import clsx from 'clsx';

type KeyGetter<Value> = (option: Option<Value>, index: number) => string | number;

export interface Option<Value> {
  value: Value;
  label: string;
}

interface ListboxProps<Value> {
  options: Option<Value>[];
  value: Value;
  keyGetter?: KeyGetter<Value>;
  onChange: React.ChangeEventHandler;
}

export function defaultKeyGetter<Value>(option: Option<Value>, index: number): string {
  return `${option.label}${index}`;
}

export function getKey<Value>(option: Option<Value>, index: number, keyGetter?: KeyGetter<Value>) {
  return typeof option.value === 'number' || typeof option.value === 'string'
    ? option.value
    : keyGetter !== undefined
    ? keyGetter(option, index)
    : defaultKeyGetter(option, index);
}

export function Listbox<Value>({
  options,
  value,
  keyGetter,
  className,
  ...props
}: ComponentProps<typeof HeadlessListbox> & ListboxProps<Value>): React.JSX.Element {
  const selected = useMemo(() => {
    return options.find((opt) => opt.value === value);
  }, [value, options]);

  return (
    <HeadlessListbox {...props}>
      <div className={clsx('relative text-gray-200', className)}>
        <ListboxButton className="flex w-full items-center h-[30px] px-[12px] rounded-[6px] bg-gray-800">
          {selected?.label}
          <ChevronDownIcon className="w-[20px] h-[20px] ml-auto" />
        </ListboxButton>
        <ListboxOptions className="absolute w-full bg-gray-800 z-[5000]">
          {options.map((option, index) => (
            <ListboxOption
              className="flex items-center pl-[13px] h-[30px] cursor-pointer"
              key={getKey(option, index, keyGetter)}
              value={option.value}
            >
              {option.label}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </HeadlessListbox>
  );
}
