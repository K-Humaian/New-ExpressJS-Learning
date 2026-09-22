// From Server 3, we wil call server 1 and server 2


const express = require('express')
const app = express()

const port = 5000

const axios = require('axios')

app.get('/thirdUser', (req, res) => {

    const Url = 'http://localhost:3000/getUser'
    axios.get(Url)

        .then(response => {
            console.log('Response from backend server 2: ', response.data)
        })
        .catch(error => {
            console.log('Error fetching data: ', error.message)
        })

        res.send('Third server is okay')
})


app.listen(port, () =>{
    console.log(`Server is running on ${port}....`)
})