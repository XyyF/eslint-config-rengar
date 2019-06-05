let bar = {
  double: num => num * 2,
  meta: {},
};

let bar1 = {
  meta: {},
  double: num => num * 2
};

bar = 1
bar1 = 1
bar = bar1
bar1 = bar