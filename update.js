const prompt = require('prompt-sync')()
let checking = false;

fruits = ["apple", "jackfruit", "mango", "pinapple", "guaba"]
let product = 100;



let search_fruit = prompt("Enter the name of the fruit: ")
const inventory = () => {
    return new Promise((resolve, reject) => {
        for (i = 0; i < fruits.length; i++)
            if (fruits[i] === search_fruit) {
                checking = true;
                break;
            }


        // After searching
        setTimeout(() => {
            if (checking)
                resolve("Item found...");
            else
                reject("Item not found...!!!");
        }, 2000);
    })
}

let quantity = Number(prompt("Enter the quatity: "))
const price = product * quantity;
let youhave = Number(prompt("Enter your purchase limit: "))

const payment = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (youhave >= price)
                resolve("Payment done")

            else
                reject("You do not have to enough amount to purchase...!!!")
        }, 2000);

    })
}



async function project() {
    try {
        let result1 = await inventory();
        console.log(result1)

        let result2 = await payment();
        console.log(result2);
    } catch (error) {
        console.error("Error: ", error)
    }
}

project();