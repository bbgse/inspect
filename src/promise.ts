import inspect from "./index.js";
import type { Options } from "./types.js";

type PromiseState = "fulfilled" | "rejected" | "pending";

type GetPromiseStateResult<T> = {
  status: PromiseState;
  value?: Awaited<T>;
};

const initial: GetPromiseStateResult<unknown> = { status: "pending" };
function resolver<T>(
  v: GetPromiseStateResult<unknown> | Awaited<T>
): GetPromiseStateResult<T> {
  return v === initial
    ? { status: "pending" }
    : { status: "fulfilled", value: v as Awaited<T> };
}
function rejector(reason: any): GetPromiseStateResult<any> {
  return { status: "rejected", value: reason };
}

function getPromiseState<T = unknown>(
  promise: Promise<T>
): Promise<GetPromiseStateResult<T>> {
  return Promise.race([promise, initial]).then(resolver, rejector);
}

type GetPromiseValue = (
  value: Promise<unknown>,
  options: Options
) => Promise<string> | string;

let getPromiseValue: GetPromiseValue = () => "Promise{…}";

try {
  getPromiseValue = async (promise: Promise<unknown>, options: Options) => {
    const { truncate } = options;
    const { status, value } = await getPromiseState(promise);
    if (status === "pending") {
      return "Promise{<pending>}";
    }
    if (status === "rejected") {
      throw `Promise{<rejected> ${inspect(value, options)}}`;
    }

    if (value) {
      return `Promise{${inspect(value, { ...options, truncate: truncate - 9 })}}`;
    }

    return "Promise{…}";
  };
} catch (_) {
  /* ignore */
}

export default getPromiseValue;
