// 154. Write a JavaScript program to create an object composed of the properties the given function returns false for. The function is invoked with two arguments: (value and key).

//#Source https://bit.ly/2neWfJ2 
const omitBy = (obj, fn) =>
  Object.keys(obj)
    .filter(k => !fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

console.log(omitBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'));  
 