import { truncate } from "./helpers.js";
import { InspectFn } from "./options.js";

const inspectDate: InspectFn<Date> = (value, options) => {
  const stringRepresentation = value.toJSON();

  if (stringRepresentation === null) {
    return "Invalid Date";
  }

  const split = stringRepresentation.split("T");
  const date = split[0];
  // If we need to - truncate the time portion, but never the date
  return options.colorize(
    `${date}T${truncate(split[1], options.truncate - date.length - 1)}`,
    "date"
  );
};

export default inspectDate;
