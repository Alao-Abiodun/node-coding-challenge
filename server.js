const express = require('express');
const app = express();
const PORT = 1000;

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.json("Chat bot is initialized");
})

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
})
