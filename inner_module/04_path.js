// 04_path.js

// 전역변수, 절대 경로
console.log(__filename);
console.log(__dirname);

const path = require('path');

console.log('폴더정보 : %s', path.dirname(__filename));
console.log('실제 파일명 : %s', path.basename(__filename));
console.log('확장자 : %s', path.extname(__filename));
