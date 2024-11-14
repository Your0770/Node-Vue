// middleApp.js

const express = require('express');
const cors = require('cors');
const session = require('express-session');

const app = express();

// 모든 요청에 응답
// app.use(cors());

// 지정한 요청에 대해서만 응답
const corsOptions = {
  origin : 'http://192.168.0.25:5500',
  optionsSuccessStatus : 200
};

app.use(cors(corsOptions));

// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended : false }));

app.post('/info', (req, res) => {
  res.send(`keyword : ${req.body.search}`);
});

app.listen(3000, () => {
  console.log('http://localhost:3000');
})

let sessionSetting = session({
  secret : 'secret key',  //암호화 키
  resave : false,
  saveUninitialized : true,
  cookie : {
    httpOnly : true,
    secure : false,
    maxAge : 60000
  }
});
app.use(sessionSetting);

app.post('/login', (req, res) => {
  const {id, pwd} = req.body;
  req.session.user = id;
  req.session.pwd = pwd;
  req.session.save(function(err){
    if (err) throw err;
    res.redirect('/');
  })
})

app.get('/', (req, res) => {
  res.send(req.session);
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
})