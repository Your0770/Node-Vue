// 11_class.js

// 생성자 함수
function User(name, age, city){
  this.name = name;
  this.age = age;
  this.city = city;
  this.getInfo = () => {
    return `${this.name}, ${this.age}, ${this.city}`;
  }
}

let hong = new User("Hong", 30, "Daegu");
console.log(hong.getInfo());

let Kim = new User("Kim", 25, "Jeju");
console.log(Kim.getInfo());

// class
class Emp {
  constructor(id, name, dept){
    // 해당  클래스가 가지는 필드를 생성자 함수에 등록
    // 필드 앞에 _ 가 붙으면 private 속성을 가지는 것으로 암묵적 약속
    this._id = id;
    this._name = name;
    this._dept = dept;
  }

  get id(){
    return this.id;
  }
  set name(name){
    this._name = name;
  }
  get name(){
    return this._name;
  }
  setDept(dept){
    this._dept = dept;
  }
  getDept(){
    return this._dept;
  }
}

let kang = new Emp(100, "Kang", "Sales");
kang._id = 500;
kang.id = 200;  // set이 없기 때문에 바꿀 권한 X
kang.name = "King"
kang.setDept("Marketing");
console.log(kang);