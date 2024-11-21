const express = require('express');
const router = express.Router();
const commentService = require('../service/commentService.js');

router.get('/comments/:no', async (req, res) => {
  let commentNo = req.params.no;
  commentService
    .commentByBoardNo(commentNo)
    .then(info => {
      res.send(info);
    })
    .catch(err => {
      res.status(500).send('Fail Process');
    })
});

module.exports = router;