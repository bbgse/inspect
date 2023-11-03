import { InspectFn } from "./options";

const inspectSymbol: InspectFn<Symbol> = (value, options) => {
  if ("description" in Symbol.prototype) {
    return value.description ? `Symbol(${value.description})` : "Symbol()";
  }
  return value.toString();
};

export default inspectSymbol;
