// Currying

const abc = function (a, b, c) {
  return [a, b, c];
};

const _ = {};

const curry = (func) => (a) => (b) => (c) => func(a, b, c);

_.curry = curry;

const curried = _.curry(abc);

curried(1)(2)(3);

// Compose

const condi