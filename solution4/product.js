const productLIst = document.querySelector("#product-list");
const productSearch = document.querySelector("#product-search");
const productDetails = document.querySelector("#product-details");


const products = [
{ id: 1, name: "Laptop", price: 350000 },
{ id: 2, name: "Phone", price: 180000 },
{ id: 3, name: "Headphones", price: 25000 },
{ id: 4, name: "Keyboard", price: 15000 },
{ id: 5, name: "Monitor", price: 120000 }
];


function renderProducts(){
    const searchTerm = productSearch.value.trim().toLowerCase();

    let visibleProducts = products.filter(function(product){
        return product.name.toLowerCase().includes(searchTerm);
    })

    visibleProducts.forEach(function (product){
        const card = document.createElement("div");
        card.className = "product-card";
        const name = document.createElement("h2");
        name.textContent = product.name;
    })
}
