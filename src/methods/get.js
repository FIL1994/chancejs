import { copyObject } from "../helpers";
//@ts-ignore
import data from "../data";

/** @param {string} name name of data to grab from json */
const get = name => data[name];

export default get;
