import type { Color, Colorette } from "colorette";
import * as color from "colorette";

type ValidColor = keyof Colorette;
type ValueType =
  | "special"
  | "number"
  | "bigint"
  | "boolean"
  | "undefined"
  | "null"
  | "string"
  | "symbol"
  | "date"
  | "regexp";

const colors: Record<ValueType, ValidColor> = {
  special: "cyan",
  number: "yellow",
  bigint: "yellow",
  boolean: "yellow",
  undefined: "gray",
  null: "bold",
  string: "green",
  symbol: "green",
  date: "magenta",
  regexp: "red",
};

export type ColorizeFn = (value: string | number, type: ValueType) => string;

export const colorize: ColorizeFn = (value, type) => {
  if (!color.isColorSupported) return String(value);

  const fn: Color = color[colors[type]];
  return fn ? fn(value) : String(value);
};
