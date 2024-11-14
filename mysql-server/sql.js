// sql.js

// 전체조회
const customerList = 
`SELECT id
        , name
        , email
        , phone
        , address
FROM customers
ORDER BY id`;

// 단건조회
const customerInfo = 
`SELECT id
        , name
        , email
        , phone
        ,address
 FROM customers
 WHERE id = ?`;

// 등록
const customerInsert = 
`INSERT INTO customers
 SET ?`;  // { 'name' = 'Hong', 'phone' = '010-1234-1234' }

// 수정
const customerUpdate = 
`UPDATE customers
 SET ?
 WHERE id = ?`;
 /*
SET ? 인 이유=> <choose/><when/> 같은 선택할수 있는 방법이 없어서
 */
// 삭제
const customerDelete = 
`DELETE FROM customers
 WHERE id = ?`;

/*
1) ? 갯수
1-1) 1개 : 단일값
1-2) 2개 이상 : 배열([ , ])

2) ? 앞의 컬럼의 유무
2-1) 컬럼 : 그에 맞는 데이터 타입(문자, 숫자, 날짜 등)
2-2) !컬럼 : 객체({ : })
*/

module.exports ={
  customerList,
  customerInfo,
  customerInsert,
  customerUpdate,
  customerDelete
};