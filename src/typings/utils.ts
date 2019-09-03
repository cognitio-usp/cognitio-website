export type obj<T = any> = {
  [key: string]: T;
};

export type genericFunction = {
  (...params: any): any;
};

export type ObjectWithKey<K extends string, V = any> = { [P in K]: V };

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
