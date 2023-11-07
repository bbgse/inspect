import inspect from "./index.js";
import { Options } from "./options.js";

type PromiseState = "fulfilled" | "rejected" | "pending";

type GetPromiseStateResult<T> = {
  status: PromiseState;
  value?: Awaited<T>;
};

const initial: GetPromiseStateResult<unknown> = { status: "pending" };

function getPromiseState<T = unknown>(
  promise: Promise<T>,
): Promise<GetPromiseStateResult<T>> {
  return Promise.race([promise, initial]).then(
    (value) => {
      return value === initial
        ? { status: "pending" }
        : { status: "fulfilled", value: value as Awaited<T> };
    },
    (reason) => {
      return {
        status: "rejected",
        value: reason,
      };
    },
  );
}

type GetPromiseValue = (
  value: Promise<unknown>,
  options: Options,
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
      return `Promise{<rejected> ${inspect(value, options)}}`;
    }

    if (value) {
      return `Promise{${inspect(value, {
        ...options,
        truncate: truncate - 9,
      })}}`;
    }

    return "Promise{…}";
  };
} catch (_) {
  /* ignore */
}

export default getPromiseValue;
