class product {
  constructor(name, price, moneda, releaseYear, brand, typeOfProd) {
    this.id = products.length + 1;
    this.name = name;
    this.price = price;
    this.moneda = moneda;
    this.releaseYear = releaseYear;
    this.brand = brand;
    this.typeOfProd = typeOfProd;
  }
    obtenerMoneda() {
    const m = this.moneda.trim().toLowerCase();
    if (m === "peso") return "ARS";
    if (m === "dolar") return "USD";
    return "";
  }
}

const products = [];
const queMoneda = () => {
  if ((this.moneda === "peso")) {
    return "ARS";
  } else if ((this.moneda === "dolar")) {
    return "USD";
  }
};
products.push(
  new product("XFX Radeon RX 9060XT 16GB", 1000000, "peso" , "2025", "AMD", "GAMING"),
);
products.push(new product("Ryzen 7 5700x", 500000, "peso" , "2022", "AMD", "GAMING"));
products.push(new product("Ryzen 7 5700x", 500000, "dolar", "2022", "AMD", "GAMING"));
products.push(new product("Ryzen 7 5700x", 500000, "dolar", "2022", "AMD", "GAMING"));
products.push(new product("Ryzen 7 5700x", 500000, "peso", "2022", "AMD", "GAMING"));
products.push(new product("Ryzen 7 5700x", 500000, "dolar", "2022", "AMD", "GAMING"));
products.push(new product("Ryzen 7 5700x", 500000, "peso", "2022", "AMD", "GAMING"));
products.push(
  new product("Paloma", "Invaluable"," peso", "2004", "Marin", "Ingeniera"),
);
console.table(products);

const sectProductList = document.querySelector("#sectProductList");

sectProductList.innerHTML = ``;

for (const item of products) {
  sectProductList.innerHTML += `
<article class="productCard">
<h2>${item.name}<h2/>
<h3>${item.brand}<h3/>
<h3>${item.price} ${item.obtenerMoneda()}<h3/>
<h4>${item.releaseYear}<h4/>
<h4 style="color: blue">${item.typeOfProd}<h4/>
<article/>
`;
}
