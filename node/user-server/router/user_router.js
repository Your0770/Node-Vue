// router/user_router.js

const express = require('express');
const router = express.Router();
const userService = require('../service/user_service.js');

// 전체조회
router.get('/users', async (req, res) => {
  /*
  let userList = await userService.findAll();
  res.send(userList);
  */

  userService                                   //Promise
    .findAll()
    .then(list => {
     res.send(list);
    })
    .catch(err => {
     res.status(500).send('Fail Process');      //err코드 숨기기
    })

});

// 단건조회
router.get('/users/:no', async (req, res) => {
  let userNo = req.params.no;

  userService
    .findByUserNo(userNo)
    .then(info => {
      res.send(info);
    })
    .catch(err => {
      res.status(500).send('Fail Process');
    })

});
// 라우팅 = 사용자의 요청(URL + METHOD) + Service + View

// 등록
router.post('/users', async (req, res) => {
  let data = req.body;

  userService
    .createNewUser(data)
    .then(info => {
      res.send(info);
    })
    .catch(err => {
      res.status(500).send('Fail Process');
    })

});

// 수정
router.put('/users/:no', async (req, res) => {
  let userNo = req.params.no;
  let data = req.body;

  userService
    .updateUserInfo(data, userNo)
    .then(info => {
      res.send(info);
    })
    .catch(err => {
      res.status(500).send('Fail Process');
    })

});

// 삭제
router.delete('/users/:no', async (req, res) => {
  let userNo = req.params.no;

  userService
    .delUserInfo(userNo)
    .then(info => {
      res.send(info);
    })
    .catch(err => {
      res.status(500).send('Fail Process');
    })

});


module.exports = router;