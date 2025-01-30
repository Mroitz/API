const express = require("express")

const app = express();
const port = 3000;

const data = [
    { name: "hans", age: 17 },
    { name: "egon", age: 17 },
    { name: "peter", age: 17 },
    { name: "gurli", age: 17 },
    { name: "hans", age: 17 },
]

app.get('/', (req, res) => {
    res.send(data);
});

app.listen(port, () => {
    console.log("Server running on port " + port)
})
