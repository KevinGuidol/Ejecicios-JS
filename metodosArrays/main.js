class product {
    constructor (name, price, releaseYear, brand, typeOfProd) {
        this.id = products.length+1;
        this.name = name;
        this.price = price;
        this.releaseYear = releaseYear;
        this.brand = brand;
        this.typeOfProd = typeOfProd;
    }
} 

const products = []

products.push(
    new product ('XFX Radeon RX 9060XT 16GB', 1000000, '2025', 'AMD', 'GAMING')    
)
products.push(
    new product ('Ryzen 7 5700x', 500000, '2022', 'AMD', 'GAMING')    
)
console.table(products);

const sectProductList = document.querySelector("#sectProductList")

sectProductList.innerHTML = ``

for (product of products) {
    sectProductList.innerHTML += `
<article class="productCard">
<h2>${product.name}<h2/>
<h3>${product.brand}<h3/>
<h3>$${product.price} ARS<h3/>
<h4>${product.releaseYear}<h4/>
<h4 style="color: blue">${product.typeOfProd}<h4/>
<article/>
`}