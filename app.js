//import packages
require('dotenv').config();
const express = require('express');
const multer = require('multer');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')

const authRoutes = require("./src/routes/auth.routes");
const userRoutes = require("./src/routes/user.routes");

const app = express();
const upload = multer();

const PORT = 3000;

//parse application/json
app.use(express.json());

//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//parse application/multipart-form
app.use(upload.any());

//log HTTP
app.use(morgan('common'));

app.use(cookieParser())

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.listen(PORT, () => console.log(`server running: http://localhost:${PORT}`));