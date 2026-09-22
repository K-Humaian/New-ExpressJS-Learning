const express = require('express')
const app = express()
const port = 4000

const user = {
    MyName: 'Md. Humaian Kabir',
    Age: 22,
    Address: "South Patenga Bijoy Nagar, Chattogram, Bangladesh",
    city: "Chattogram",
    postalCode: 4205
}


const user1 = {
    Myname: 'Eham',
    Age: 25,
    Address: "Dhaka, Bangladesh",
    city: "Dhaka",
    postalCode: 1205
}

app.get('/home', (req, res) => {
    res.send('This is the home page')
})

// Query Parameter
app.get('/user', (req, res) => {

    const requestedID = req.query.id

    if (requestedID === '221134') {
        console.log('User ID is valid...')
        console.log("User ID:" + requestedID)

        res.status(200).json({
            message: requestedID + ' User ID is valid',
            userID: user
        })
        // res.send(user)
    }
    else {
        console.log('User ID is invalid')
        res.status(404).json({
            message: requestedID + ' User ID is Invalid'
        })
    }

})


// Route Parameter

app.get('/user1/:id', (req, res) => {
    // console.log(req.params.id)

    const requestedID = req.params.id

    if (requestedID === '221134') {
        console.log('User ID is valid...')
        console.log("User ID:" + requestedID)
        res.json({
            message: requestedID + ' User ID is valid',
            userID: user1
        })
    } else {

        console.log('User ID is invalid')

        res.status(404).json({
            message: requestedID + ' User ID is Invalid'
        })
    }
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}...`)
})



