// mapper.js

const mysql = require('mysql');
const sql = require('./sqls/sql.js');

const pool = mysql.createPool({
  host : process.env.MYSQL_HOST,
  port : process.env.MYSQL_PORT,
  user : process.env.MYSQL_USER,
  password : process.env.MYSQL_PWD,
  database : process.env.MYSQL_DB,
  connectionLimit : process.env.MYSQL_LIMIT
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