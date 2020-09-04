const increment = (n) => n + 1;
const square = (n) => n * n;
const doMathSoIDontHaveTo = (n, func) => func(n);
// console.log(doMathSoIDontHaveTo(5, square));
// console.log(doMathSoIDontHaveTo(4, increment));

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

const newDevelopment = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": true },
      { "billiard room": false },
      { library: true },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": true },
      { "billiard room": false },
      { library: false },
    ],
  },
];

const emptyRoom = (newDevelopment) => {
  let emptyRooms = [];
  const occupiedRooms = [];

  newDevelopment
    .map((suspect) => suspect.rooms)
    .flat()
    .forEach((room) => {
      const key = Object.keys(room)[0];

      if (!emptyRooms.includes(key) && !room[key]) {
        emptyRooms.push(key);
      } else if (room[key]) {
        occupiedRooms.push(key);
      }
    });

  return emptyRooms.filter((room) => !occupiedRooms.includes(room));
};

emptyRoom(newDevelopment);
