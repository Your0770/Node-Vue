const fs = require('fs');
const express = require('express');
const server = express();

const userRouter = require('./router/user.js');
server.use('/user', userRouter);

server.use('/img', express.static('./images'));

server.use(function(err, req, res, next){
  res.status(500).json({ statusCode : res.statusCode,
                         errMessage : err.message });
});

server.get('/error', (req, res, next) => {
  next(new Error('Process Fail! Check Data!'));
});

// 미들웨어 등록
server.use(express.json());

// DB 설정
const jsonFile = fs.readFileSync('data.json');
const jsonData = JSON.parse(jsonFile);

const query = (crud, target, where = null)=>{
  let result = null;

  let emps = jsonData;
  switch(crud){
  // 조회
  case 'SELECT' :
    result = (where == null) ? emps :  emps.filter(emp => {
      return findEmp(emp, where);
    });
    break;  

  // 등록
  case 'INSERT' :
    emps.push(target);
    break;
  // 수정
  case 'UPDATE' :
    emps.forEach(emp => {
      if(findEmp(emp, where)){
        for(let field in target){
          emp[field] = target[field];
        }
      }
    });
    break;
  // 삭제
  case 'DELETE' :
    let selected = null;
    emps.forEach((emp, idx) => {
      if(findEmp(emp, where)){
        selected = idx;
      }
    });

    emps.splice(selected, 1);
    break;
  }
  return result;
};

function findEmp(emp, where){
  let fieldNum = 0; // 총 검색조건 개수
  let selected = 0; // true인 검색 조건 개수
  for(let field in where){
    fieldNum++;
    if(emp[field] == where[field]){
      selected++;
    }
  }
  return (fieldNum == selected);
}

server.listen(3000, () => {
  console.log('Server Start');
  console.log('http://localhost:3000');
});

// 루트 경로
server.get('/', (req, res) => {
  // res.send('Server Connect!');
  res.sendFile('./그리드385.html', { root : __dirname});
});

// 전체조회 : get, emps 
server.get('/emps', (req, res) => {
  // res.send(jsonData);
  res.send(query('SELECT'));
});

/*
  req.params => pathvariable => content-type : X
  req.body => JSON => application/json : {} or []
  req.query(get) => req.body(post) => QueryString(질의문자열) => application/x-www-urlencoded : key=value&key=value&...
*/

// 단건조회 : get, emps/:id(값을 받는 위치) => pathvariable(경로에 붙는 변수)
server.get('/emps/:id', (req, res) => {
  // res.send('Emp Info');
  res.send(query('SELECT', null, {id : req.params.id }));
})
// 등록 : post, emps
server.post('/emps', (req, res) => {
  console.log(req.body);
  // res.send('Emp Insert');
  res.send(query('INSERT',req.body));
});
// 수정 : put, emps/:id
server.put('/emps/:id', (req, res) => {
  // res.send('Emp Update');
  res.send(query('UPDATE', req.body, { id : req.params.id }));
});
// 삭제 : delete, emps/:id
server.delete('/emps/:id', (req, res) => {
  // res.send('Emp Delete');
  res.send(query('DELETE', null, { id : req.params.id }));
});