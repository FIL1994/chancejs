import { string } from "../basics";

export default () => {
    var idn_pool="0123456789";
    var idn_chrs="ABCDEFGHIJKLMNOPQRSTUVWXYXZ";
    var idn="";
      idn += string({pool:idn_pool,length:6});
      idn += string({pool:idn_chrs,length:2});
      return idn;    
}