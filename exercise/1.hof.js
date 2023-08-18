// forEach
const arr = [1, 2, 3, 4, 5];
arr.forEach(function (item) {
  console.log(item);
});

// Map
const arr2 = [1, 2, 3, 4, 5];
const doubled = arr.map((item) => {
  return item * 2;
});

console.log(doubled);

// filter
const arr3 = [1, 2, 3, 4, 5];
const evenNumbers = arr3.filter(function (item) {
  return item % 2 === 0;
});

console.log(evenNumbers);

// reduce
const arr4 = [1, 2, 3, 4, 5];
const sum = arr4.reduce(function (total, item) {
  return total + item;
});

// callback

function hello() {
  console.log("hello, world");
}

function goodbye() {
  console.log("goodbye, world");
}

function print(callback) {
  callback();
}

print(hello);
print(goodbye);

//  custom hof that return another function
function multiplyBY(n) {
  return function (x) {
    return x + n;
  };
}

const double = multiplyBY(2);
console.log(double(5));

// custom hof iplement callbacks
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function logNumber(n) {
  console.log(`the number is ${n}`);
}

repeat(3, logNumber);
