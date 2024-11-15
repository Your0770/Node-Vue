
const express = require('express');
const app = express();
const mysql = require('./database/mapper.js');

// content-type : application/json
app.use(express.json());

app.listen(3000, ()=>{
  console.log('Server Start');
  console.log('http://localhost:3000');
});
app.get('/', (req, res) => {
  res.send('sdsd');
})


// 전체조회
app.get('/users', async (req, res) => {
  let list = await mysql.query('userList');
  res.send(list);
});

// 단건조회
app.get('/users/:no', async (req, res) => {
  let selected = req.params.no;
  let info = await mysql.query('userInfo', selected );
  let result = info[0];
  res.send(result);
});

// 등록
app.post('/users', async (req, res) => {
  let data = req.body;
  console.log(newObj);
  let ins = await mysql.query('userInsert', data );
  res.send(ins); 
});

// 수정
app.put('/users/:no', async (req, res) => {
  let data = req.body;
  let selected = req.params.no;
  let upd = await mysql.query('userUpdate', [data, selected] );
  res.send(upd);
});

// 삭제
app.delete('/users/:no', async (req, res) => {
  let selected = req.params.no;
  let del = await mysql.query('userDelete', selected );
  res.send(del);
});