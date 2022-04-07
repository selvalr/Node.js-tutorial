const _=require('lodash');

console.log(_.isString('abc'));
console.log(_.isString(123));
var person=_.uniq(["selvan",1,1,1,2,3,4,4,5,6,"selva"]);
console.log(person);
var person2=_.chunk(['a', 'b', 'c', 'd'], 2);
console.log(person2);