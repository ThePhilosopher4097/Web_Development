console.log("Namaste India\n");
console.log("Welcome to MIT");

num1 = 123;
var str = "ABCd"
var toggle = true
console.log(num1)

function F1(n1,n2){
    console.log(typeof(n1), typeof(n2))
    console.log("Hello friends !\n", n1, "+", n2, " = ", n1+n2)
}
F1(10)

var data = (num1,num2) => console.log(num1+num2)
data(20,30)

var players = [ 
        {id:7, Name:"MS Dhoni"},
        {id:18, Name:"Virat Kohli"},
        {id:8, Name:"Ravindra Jadeja"}
    ]

for (let i=0;i<players.length;i++){
    console.log(players[i].id, players[i].Name);
} console.log("\n")
for (let player in players){
    console.log(player, players[player].Name)
}

players.forEach(
    function(p){
        console.log(p.id, p.Name)
    }
)


products = [
    {id:1, category:"Electronics", price:500, Name:"Laptop"},
    {id:1, category:"Cloths", price:800, Name:"Shirt"},
    {id:1, category:"Gym", price:700, Name:"Dumbell"},
    {id:1, category:"Electronics", price:600, Name:"Earbuds"},
    {id:1, category:"Gym", price:300, Name:"Wrist Band"},
    {id:1, category:"Cloths", price:1000, Name:"Jeans"},
] 
cloth = []; gym = []; electronics = [];

products.forEach(
    function (products){
        if (products.category === "Electronics"){
            electronics.push(products)
        }
        else if (products.category === "Cloths"){
            cloth.push(products)
        }
        else if (products.category === "Gym"){
            gym.push(products)
        }
    }
)
console.log("\nElectronics Products : \n")
for(let i=0;i<electronics.length;i++){
    console.log(electronics[i])
}
console.log("\nClothing Products : \n")
for(let i=0;i<cloth.length;i++){
    console.log(cloth[i])
}
console.log("\nGym Products : \n")
for(let i=0;i<gym.length;i++){
    console.log(gym[i])
}