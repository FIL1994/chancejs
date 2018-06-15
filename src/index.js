import * as MT from "mersenne-twister-es";
import {
  bool,
  animal,
  character,
  floating,
  integer,
  natural,
  hex,
  letter,
  buffer,
  string
} from "./methods";

/** @type {number} */
let seed;

/**
 * @returns {number}
 */
const random = () => {
  MT.init();
  return MT.random();
};

export {
  random,
  bool,
  animal,
  character,
  floating,
  integer,
  natural,
  hex,
  letter,
  buffer,
  string
};
