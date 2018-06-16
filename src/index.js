import * as MT from "mersenne-twister-es";
export const random = () => {
  MT.init();
  return MT.random();
};

export * from "./methods";