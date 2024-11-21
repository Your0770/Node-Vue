const mysql = require('../database/mapper.js');

const findAll = async () => {
  let list = await mysql.query('boardList');
  return list;
};

const findByBoardNo = async (boardNo) => {
  let list = await mysql.query('boardInfo', boardNo);
  let info = list[0];
  return info;
};

const createNewBoard = async (boardInfo) => {
  let info = await mysql.query('boardInsert', boardInfo);
  if(info.affectedRows == 1 && info.changedRows == 0 && info.insertId > 0 ){
    return { "result" : "success", "board_no" : info.insertId , "board_info" : boardInfo };
  } else {
    return { "result" : "fail" };
  }
};

const updateBoardInfo = async (updateInfo, boardNo) => {
  let data = [updateInfo, boardNo];
  let info = await mysql.query('boardUpdate', data);
  let returnData = {};
  if(info.affectedRows == 1 && info.changedRows == 1 ){
    returnData.target = { "board_no" : boardNo };
    returnData.result = true;
  } else {
    returnData.result = false;
  }
  return returnData;
};

const delBoardInfo = async (boardNo) => {
  let info = await mysql.query('boardDelete', boardNo);
  if(info.affectedRows == 1 && info.changedRows == 0){
    return { "result" : "success", "board_no" : boardNo };
  } else {
    return { "result" : "fail" };
  }
};

module.exports ={
  findAll,
  findByBoardNo,
  createNewBoard,
  updateBoardInfo,
  delBoardInfo
}