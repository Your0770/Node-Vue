// service/user_service.js

const mysql = require('../database/mapper.js')

// 전체조회
const findAll = async () => {
  let list = await mysql.query('userList');
  return list;
  // 결제 API 호출
  // DB에 저장
};

// 단건조회
const findByUserNo = async (userNo) => {
  let list = await mysql.query('userInfo', userNo);
  let info = list[0];
  return info;
};

// 등록
const createNewUser = async (userInfo) => {
  let info = await mysql.query('userInsert', userInfo);
  if(info.affectedRows == 1 && info.changedRows == 0 && info.insertId > 0 ){
    return { "result" : "success", "user_no" : info.insertId , "user_info" : userInfo };
  } else {
    return { "result" : "fail" };
  }
};

// 수정
const updateUserInfo = async (updateInfo, userNo) => {
  let data = [updateInfo, userNo];
  let info = await mysql.query('userUpdate', data);
  let returnData = {};
  if(info.affectedRows == 1 && info.changedRows == 1 ){
    // returnData.target = { "result" : "success", "user_no" : userNo, "user_info" : updateInfo };
    returnData.target = { "user_no" : userNo };
    returnData.result = true;
  } else {
    returnData.result = false;
  }
  return returnData;
};

// 삭제
const delUserInfo = async (userNo) => {
  let info = await mysql.query('userDelete', userNo);
  if(info.affectedRows == 1 && info.changedRows == 0){
    return { "result" : "success", "user_no" : userNo };
  } else {
    return { "result" : "fail" };
  }
};

module.exports ={
  findAll,
  findByUserNo,
  createNewUser,
  updateUserInfo,
  delUserInfo
}