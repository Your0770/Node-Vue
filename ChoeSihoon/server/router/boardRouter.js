const express = require('express');
const router = express.Router();
const boardService = require('../service/boardService.js');

router.get('/boards', async (req, res) => {
  boardService
    .findAll()
    .then(list => {
     res.send(list);
    })
    .catch(err => {
     res.status(500).send('Fail Process');
    })
});

router.get('/boards/:no', async (req, res) => {
  let boardNo = req.params.no;
  boardService
    .findByBoardNo(boardNo)
    .then(info => {
      res.send(info);
    })
    .catch(err => {
      res.status(500).send('Fail Process');
    })
});

router.post('/boards', async (req, res) => {
  let data = req.body;
  boardService
    .createNewBoard(data)
    .then(info => {
      res.send(info);
    })
    .catch(err => {
      res.status(500).send('Fail Process');
    })
});

router.put('/boards/:no', async (req, res) => {
  let boardNo = req.params.no;
  let data = req.body;
  boardService
    .updateBoardInfo(data, boardNo)
    .then(info => {
      res.send(info);
    })
    .catch(err => {
      res.status(500).send('Fail Process');
    })
});

router.delete('/boards/:no', async (req, res) => {
  let boardNo = req.params.no;

  userService
    .delUserInfo(boardNo)
    .then(info => {
      res.send(info);
    })
    .catch(err => {
      res.status(500).send('Fail Process');
    })

});

module.exports = router;