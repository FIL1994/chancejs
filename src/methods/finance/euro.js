import { dollar } from ".";

export default options => Number(dollar(options).replace("$", "")).toLocaleString() + "€";