const increment = (n) => n + 1;
const square = (n) => n * n;
const doMathSoIDontHaveTo = (n, func) => func(n);
console.log(doMathSoIDontHaveTo(5, square));
console.log(doMathSoIDontHaveTo(4, increment));

const _ = {};

const myReduce = (collection, reducer, initialValue) => {
  let memo;

  if (initialValue) {
    memo = initialValue;
  } else {
    const first = collection.pop();
    memo = first;
  }

  collection.forEach((val) => reducer(val, (memo += val)));
  return memo;
};

_.reduce = myReduce;

const array1 = [1, 2, 3, 4];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

const myReduceResult = _.reduce(array1, reducer, 10);

console.log("hi hey there");
console.log(myReduceResult);
