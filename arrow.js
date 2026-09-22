

const express = require('express')
const app = express();
const port = 4000;

app.get('/home', (req, res) => {

    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((result) => {
            return result.json(result);
        })
        .then((data) => {
            console.log(data);
            res.json(data)

        })
        .catch((error) => {
            console.error(error)
        })
})

app.get('/user', async (req, res) => {
    try {
        const result = await fetch("http://localhost:3000/myinfo")
        const data = await result.json();
        res.json(data);
        console.log(data);
    } catch (error) {
        console.error(error);
    }

})
app.listen(port, () => {
    console.log(`Server is running on port ${port} ...`)
})


