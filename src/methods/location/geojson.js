import { latitude, longitude, altitude } from "./";

export default options => `${latitude(options)}, ${longitude(options)}, ${altitude(options)}`