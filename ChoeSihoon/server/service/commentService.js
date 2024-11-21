const mysql = require('../database/mapper.js');

const commentByBoardNo = async (commentNo) => {
  let list = await mysql.queryComment('commentList', commentNo);
  return list;
};

module.exports ={
  commentByBoardNo,
  }