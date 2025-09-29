const { zain, ali } = require('./4-names');
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavors');
console.log(data);
sayHi(zain);
sayHi(ali);
sayHi(names.zain);
sayHi(names.ali);