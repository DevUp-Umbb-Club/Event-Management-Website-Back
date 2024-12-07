const express = require('express');
const cors = require('cors');
const principalRoutes = require('./src/api/routes/index');
const app = express();
const port = 3000;

require('./src/config/connectDb');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use('/api/v1', principalRoutes);

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
