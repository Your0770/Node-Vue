// 04_filter_map.js

let persons = [
  {
    name : "유재석",
    point : 78,
    city: "서울"
  },
  {
    name : "김종국",
    point : 92,
    city: "서울"
  },
  {
    name : "양세찬",
    point : 76,
    city: "제주"
  },
  {
    name : "하하",
    point : 81,
    city: "제주"
  }
];
// 1) filter, 원본배열이 가지는 데이터 타입과 같음, 배열의 크기가 줄어들 가능성 있음
let scores = persons.filter(function(val, idx){
  return val.point > 80;    // boolean 타입
});
console.log(scores);

// 2) map, 원본배열과 데이터 타입이 다를 수 있음, 배열의 크기는 동일
let newList = persons.map(function(val, idx){
  return {
          no : ((idx+1) * 100),
          name : val.name,
          city : val.city
          };    // 새로운 배열이 가지는 값
});
console.log(newList);
