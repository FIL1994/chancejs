import { string } from "../basics";

export default () => {
    return "APA91" + string({ pool: "0123456789abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_", length: 178 });    
}