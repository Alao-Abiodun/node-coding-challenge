const express = require('express');
const app = express();
const PORT = 1000;
const chatbot = require('./Routes/routes');

app.use(express.json({ extended: true}));
app.use(chatbot);

const log = () => {
    console.log(`Server is running on Port ${PORT}`);
}

const server = app.listen(PORT, log);

const io = require('./socket').init(server);
io.on('connection', socket => {
    console.log("Client Connected");
})

//Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err}`);
    server.close(() => process.exit(1));
  });
  