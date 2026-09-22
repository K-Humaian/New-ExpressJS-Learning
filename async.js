// Synchronous and asynchronous nature of Javascript

// const { error } = require('console');
const fs = require('fs')

fs.readFile('app.txt', 'utf8', (error, data) => {
    if (error) {
        console.error("Error in reading the file content:", error)
    }
    else
        console.log("File content:", data)
})

setTimeout(() => {
    console.log("I have been waited for 5000 ms......")
}, 5);


for (let i = 0; i < 100; i++) {
    console.log(i)
}