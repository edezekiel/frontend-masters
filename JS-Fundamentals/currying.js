// Currying

const abc = function (a, b, c) {
  return [a, b, c];
};

const _ = {};

const curry = (func) => (a) => (b) => (c) => func(a, b, c);

const curry2 = (func) => {
  console.log(...args);
};

_.curry = curry;

_.curry2 = curry2;

const curried = _.curry(abc);

const curried2 = _.curry2(abc);

curried(1)(2)(3);

curried2(1)(2)(3);

// Compose

const compose = (func1, func2) => (arg) => func1(func2(arg));

_.compose = compose;

const consider = (name) => {
  return `I think it could be ... ${name}`;
};

const exclaim = (statement) => {
  return `${statement.toUpperCase()}!`;
};

const blame = _.compose(consider, exclaim);

blame("you");
