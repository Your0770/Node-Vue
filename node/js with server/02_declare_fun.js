// 02__declare_fun.js

// 1) 함수선언문 => var(not undifined)

/* 호이스팅
var plus = function(x,y,z){
  return (x+y+z);
}
*/

function plus(x,y){
  return (x+y);
} // 죽은 코드
console.log(plus(1,2,3));

function plus(x,y,z){
  return (x+y+z);
}
console.log(plus(1,2,3));

// 2) 함수표현식 => let, const  함수 선언
const printMsg = function(keyword){
  return "result : " + keyword;
}

console.log(printMsg("aaaa"));

// 3) 화살표함수 => () => {}    //[java] () -> {}
let array = [1, 2, 3, 4, 5];
array.forEach( val => console.log(val) );

array.forEach((val, idx, aray) => {
  let msg = `${idx} : ${val}, ${aray}`; // template literal
  console.log(msg);
})

const multi = (x,y) => x*y;
console.log(multi(2,6));