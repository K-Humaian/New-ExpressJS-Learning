const express = require('express')
const app = express();
const port = 4000;


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


