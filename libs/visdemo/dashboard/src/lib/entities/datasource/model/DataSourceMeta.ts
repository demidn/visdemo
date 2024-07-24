interface ListProperty {
  uid: string;
  type: 'list'
  name: string;
  options: {value: string, label: string}[]
}

interface TextProperty {
  uid: string
  type: 'text'
  name: string;
  text: string
}

export type Property = TextProperty | ListProperty;

export type CustomDataSourceMeta = {
  uid: string;
  name: string;
  columns: string[];
  properties: Property[]
  type: 'custom'
  factory: string
}

export type SimpleDataSourceMeta = {
  uid: string;
  name: string;
  columns: string[];
  properties: Property[]
  type: 'simple'
  url: string;
}

export type StreamDataSourceMeta = {
  uid: string;
  name: string;
  columns: string[];
  properties: Property[]
  type: 'stream'
  url: string;
}

export type DataSourceMeta = CustomDataSourceMeta | SimpleDataSourceMeta | StreamDataSourceMeta;
