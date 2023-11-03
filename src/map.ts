import { inspectList } from "./helpers.js";
import { InspectFn, Options } from "./options.js";

function inspectMapEntry(
  [key, value]: [unknown, unknown],
  options: Options
): string {
  options.truncate -= 4;
  key = options.inspect!(key, options);
  options.truncate -= (key as string).length;
  value = options.inspect!(value, options);
  return `${key} => ${value}`;
}

// TODO: remove
function mapToEntries<K, V>(map: Map<K, V>): Array<[K, V]> {
  const entries: Array<[K, V]> = [];
  map.forEach((value, key) => {
    entries.push([key, value]);
  });
  return entries;
}

const inspectMap: InspectFn<Map<unknown, unknown>> = (map, options) => {
  const size = map.size - 1;
  if (size <= 0) {
    return "Map(0) {}";
  }
  options.truncate -= 7;

  // TODO: colorize?
  return `Map(${map.size}) { ${inspectList(
    mapToEntries(map),
    options,
    inspectMapEntry as InspectFn
  )} }`;
};

export default inspectMap;