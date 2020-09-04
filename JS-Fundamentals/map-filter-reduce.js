function createSuspect(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak() {
      console.log("my name is", name);
    },
  };
}

const suspects = ["Miss Scarlet", "Colonel Mustard", " Mr. White"];

const _ = {};

(_.each = (list, callback) => {
  if (Array.isArray(list)) {
    for (let i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else {
    for (let key in list) {
      callback(list[key], key, list);
    }
  }
}),
  (_.map = (list, callback) => {
    let storage = [];

    const mapCallback = (val, i, list) => {
      storage.push(callback(v, i, list));
    };

    _.each(list, mapCallback);

    return storage;
  });

_.filter = (list, callback) => {
  const storage = [];

  const filterCallback = (val, i, list) => {
    if (callback(list[i], i, list)) {
      storage.push(list[i]);
    }
  };

  _.each(list, filterCallback);

  return storage;
};

console.log(
  _.filter(suspects, function (suspect) {
    if (suspect === "Miss Scarlet") {
      return true;
    }
  })
);
