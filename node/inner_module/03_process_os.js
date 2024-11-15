// 03_process_os.js

const process = require('process');
const os = require('os');

console.log(process.env.path);

// console.log(os.cpus());     //CPU 코어정보
console.log(os.tmpdir());   //임시 저장 경로
console.log(os.totalmem());   //총 메모리
