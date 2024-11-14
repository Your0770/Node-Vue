const multer = require('multer');
const path = require('path');

const express = require('express');
const app = express();

const storage = multer.diskStorage({  //디스크 저장소 정의
  destination : function(req, file, cb){
    cb(null, 'uploads/');   //cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename : function(req, file, cb){   //파일이름 정의
    //파일 한글 깨짐 현상 
    // Buffer => 파일을 읽어드리는 것 
    file.originalname = Buffer.from(file.originalname, 'latin1').toString('utf8');
    cb(null, new Date().valueOf() + path.basename(file.originalname));  // cb 콜백 함수를 통해 전송된 파일 이름 설정
  }
});

const upload = multer({ storage : storage });

app.post('/profile', upload.single('avatar'), (req, res)=>{
  console.log(req.file);
  console.log(req.body);
});

app.post('/photos', upload.array('photos', 12), (req,res)=>{
  for(let file of req.files){
    console.log(file);
  }
})

app.listen(5000, ()=>{
  console.log('Server Start!!');
})