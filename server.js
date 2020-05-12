const express = require('express');
const app = express();
const PORT = 1000;
const chatbot = require('./Routes/routes');

app.use(express.json({ extended: true}));


app.use(chatbot);

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})

//Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err}`);
    server.close(() => process.exit(1));
  });
  