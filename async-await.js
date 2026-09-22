const express = require('express')
const app = express();
const port = 3000;


const userinfo = {
    Name: 'Md. Humaian',
    ID: 'C221134',
    Dept: 'Computer Science and Engineering',
    PassingYear: '2026',
    University: 'International Islamic University Chittagong'
}

app.get('/home', (req, res) => {

    async function fetching() {
        const result = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const data = await result.json()
        console.log(data);
        res.json(data)
    }
    fetching();
})


app.get('/user', async (req, res) => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts/2')
    const data = await result.json();
    console.log(data);
    res.json(data);
})

app.get('/myinfo', (req, res) => {
    res.json(userinfo);
})
app.listen(port, () => {
    console.log(`Server is running on port ${port} ...`)
})


