import { ColorizeFn, colorize } from "./colors";

export type InspectFn<T = any, TOptions = Options> = (
  value: T,
  options: TOptions,
) => string;

export interface Options {
  // util.inspect options
  showHidden: boolean;
  depth: number;
  colors: boolean;
  customInspect: boolean;
  showProxy: boolean;
  maxArrayLength: number;
  maxStringLength: number;
  breakLength: number;
  compact: boolean | number;
  sorted: boolean | Function;
  getters: boolean | string;
  numericSeparator: boolean;

  // non standard
  colorize: ColorizeFn;
  inspect?: InspectFn;
  truncate: number;
  seen: unknown[];
}

const noColor: ColorizeFn = (value, _) => String(value);

const defOpts: Options = {
  showHidden: false,
  depth: 2,
  colors: false,
  customInspect: false,
  showProxy: false,
  maxArrayLength: 100,
  maxStringLength: 10000,
  breakLength: 80,
  compact: 3,
  sorted: false,
  getters: false,
  numericSeparator: false,

  colorize: noColor,
  truncate: Infinity,
  seen: [],
};

export const mergeOptions = (options: Partial<Options>) => {
  if (options.colors) {
    options.colorize = colorize;
  }

  return { ...defOpts, ...options };
};
