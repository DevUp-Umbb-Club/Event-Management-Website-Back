const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const principalRoutes = require('./src/api/routes/index');
const app = express();
const port = 3000;

require('./src/config/connectDb');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use('/', principalRoutes);

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
