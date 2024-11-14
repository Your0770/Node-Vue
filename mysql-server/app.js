// app.js

const express = require('express');
const app = express();
const mysql = require('./mapper.js');

// content-type : application/json
app.use(express.json());

app.listen(3000, ()=>{
  console.log('Server Start');
  console.log('http://localhost:3000');
});

// 전체조회
app.get('/customers', async (req, res) => {
  let list = await mysql.query('customerList');
  res.send(list);
});

// 단건조회
app.get('/customers/:id', async (req, res) => {
  let selected = req.params.id;
  let info = await mysql.query('customerInfo', selected );
  let result = info[0];
  res.send(result);
});

// 등록
app.post('/customers', async (req, res) => {
  let newObj = req.body;
  console.log(newObj);
  let ins = await mysql.query('customerInsert', newObj );
  res.send(ins); 
});

// 수정
app.put('/customers/:id', async (req, res) => {
  let newObj = req.body;
  let selected = req.params.id;
  let upd = await mysql.query('customerUpdate', [newObj, selected] );
  res.send(upd);
});

// 삭제
app.delete('/customers/:id', async (req, res) => {
  let selected = req.params.id;
  let del = await mysql.query('customerDelete', selected );
  res.send(del);
});