const data = {
    Name: 'Md. Humaian Kabir',
    Age: 25,
    Address: {
        Street: "South Patenga Bijoy Nagar",
        City: "Chattogram",
        Country: "Bangladesh"
    },
    city: "Chattogram",
    postalCode: 4205,

    print: function () {
        console.log(this.Name);
    },

    print2: function (){
        console.log(this.Address.Street, this.Address.City, this.Address.Country);
    }
}

data.print();
data.print2();