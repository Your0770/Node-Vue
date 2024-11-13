// router/user.js

const express = require('express');
const router = express.Router();

//  /user + /
router.get('/', (req, res)=>{
  res.send('회원 정보 조회');
});

//  /user + /insert
router.post('/insert', (req, res) => {
  res.send('회원등록');
})

module.exports = router;  //모듈식 라우터 뒤에 작성하는 코드는 죽은코드