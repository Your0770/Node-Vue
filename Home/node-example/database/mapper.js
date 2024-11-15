const mysql = require('mysql');
const sql = require('./sqls/sql.js');

const pool = mysql.createPool({
  host : `localhost`,
  port : `3306`,
  user : `dev01`,
  password : `1234`,
  database : `dev`,
  connectionLimit : 10
});

const query = (alias, values)=>{     //return -> await
  return new Promise((resolve, reject) => {

    let excuteSql = sql[alias];
    console.log(excuteSql);

    pool.query(excuteSql, values, (err, results)=>{
      // 실제로 실행한 결과를 반환
      if(err){
        console.log(err);
        reject({err});
      }else{
        resolve(results);
      }
    });
  });
}

module.exports = {
  query
}