const { dirname } = require('path');
const path = require('path');

file=path.basename("nik.json")
file=path.dirname("prog/nik.json")
file=path.isAbsolute("prog/nik.json")
let dir="prog"
file=path.join("C:",dir,'text.json')
file=path.parse('C/text.json')
file=path.resolve('C/text.json')
console.log(file);