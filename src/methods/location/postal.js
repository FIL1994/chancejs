import { character, natural } from "../basics";

export default () => {
    // Postal District
    var pd = character({pool: "XVTSRPNKLMHJGECBA"});
    // Forward Sortation Area (FSA)
    var fsa = pd + natural({max: 9}) + character({alpha: true, casing: "upper"});
    // Local Delivery Unit (LDU)
    var ldu = natural({max: 9}) + character({alpha: true, casing: "upper"}) + natural({max: 9});

    return fsa + " " + ldu;    
}