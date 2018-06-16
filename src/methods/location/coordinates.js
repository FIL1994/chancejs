import { latitude, longitude } from ".";

export default options => `${latitude(options)}, ${longitude(options)}`