if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

//mongodb
const mongoose = require('mongoose');

//express
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routers');
const errorHandler = require('./middlewares/errorHandler');

//socket.io
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

app.use(errorHandler);

//mongodb connection
const mongooDb = process.env.MONGO_DB_URI;

mongoose.connect(mongooDb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to database'));

//socket.io server
io.on('connection', (socket) => {
  console.log('a user connected');
});

const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
  console.log(`Server & Socket.IO are running on port ${PORT}`);
});
