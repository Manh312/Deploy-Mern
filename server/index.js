const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const employeeModel = require('./models/Employee');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser'); 

const app = express();
app.use(express.json());
app.use(cors({
  origin: ['https://tdeploy-mern-api-beta.vercel.app'], 
  methods: ['GET', 'POST'],
  credentials: true 
}));
app.use(cookieParser());

mongoose.connect('mongodb+srv://mern-vercel:manh11092002@cluster0.qa1t2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json('The token was not available');
  } else {
    jwt.verify(token, 'jwt-secret-key', (err, decoded) => {
      if (err) return res.json('Token is wrong');
      next(); 
    })
  }
};

app.get('/', (req, res) => {
  res.json('Hello');
})

app.get('/home', verifyUser, (req, res) => {
  return res.json('Success');
})

app.post('/login', (req, res) => {
  const {email, password} = req.body;
  employeeModel.findOne({email: email})
  .then(user => {
    if (user) {
      bcrypt.compare(password, user.password, (err, response) => {
        if (response) {
          const token = jwt.sign({email: user.email}, 'jwt-secret-key', {expiresIn: '1d'});
          res.cookie('token', token);
          res.json('Success');
        } else {
          return res.json('The password is incorrect');
        };
      });
    } else {
      res.json('No user exist');
    };
  });
});

app.post('/register', (req, res) => {
  const {name, email, password} = req.body;
  bcrypt.hash(password, 10)
  .then(hash => {
    employeeModel.create({name, email, password: hash})
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
  }).catch(err => console.log(err.message))
});

app.listen(3000, () => {
  console.log('Server is running');
});
