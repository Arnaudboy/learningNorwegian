import en from "./en.js";
import nk from "./nk.js";

console.log(en[`${process.argv.slice(2).join("")}`]);
console.log(nk[`${process.argv.slice(2).join("")}`]);
