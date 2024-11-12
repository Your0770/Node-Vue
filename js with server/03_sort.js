// 03_sort.js

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);  //"Apple", "Banana", "Mango", "Orange"

let points = [40, 100, 1, 5, 25, 10];
points.sort();
console.log(points);
points.sort(function(a,b){
  return a - b;
});
console.log(points);  // 1, 5, 10, 25, 40, 100

let emps = [
  {
    eid : 200,
    name : "King"
  },
  {
    eid : 100,
    name : "Edward"
  },
  {
    eid : 300,
    name : "Han"
  }
];
emps.sort((pre, next) => {
  return pre.eid - next.eid;
});
console.log(emps);

