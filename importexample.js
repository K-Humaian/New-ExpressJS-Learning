import express from 'express'
const app = express()
const port = 3000
let data;

app.get('/home', async (req, res) => {
    data = await going();
    console.log(data);
    res.json(data);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
})

export async function going() {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    data = await result.json()
    // console.log(data)
    return data;
}