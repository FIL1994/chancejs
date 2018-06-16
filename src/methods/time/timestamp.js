import { natural } from "../.."
export default () => natural({min: 1, max: parseInt(new Date().getTime() / 1000, 10)});