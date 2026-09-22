// Calling a Backend from another Backend

const express = require('express')
const app = express()
const port = 3000

const axios = require('axios')


app.get('/getUser', (req, res) => {

    const Url = 'http://localhost:4000/user?id=221134'

    axios.get(Url)
        .then(response => {
            const info = response.data
            console.log('Response from backend:', response.data)
            res.send(info)
            console.log("Server is running good...")
        })

        .catch(error => {
            console.log('Error fetching data:', error.message)
             res.status(404).send('Internal server error')
        })
       
})

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}...`)
})