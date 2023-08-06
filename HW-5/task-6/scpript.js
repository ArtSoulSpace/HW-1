let str = 'hello';

const capitalize = str => str.slice(0,2).toUpperCase() + str.slice(2).toLowerCase()
console.log(capitalize(str));
