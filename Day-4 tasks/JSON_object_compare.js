const obj1={name:"Person 1", age:5};
const obj2={age:5, name:"Person 1"};
var gg=(JSON.stringify(obj1)===JSON.stringify(obj2));
console.log(gg);
