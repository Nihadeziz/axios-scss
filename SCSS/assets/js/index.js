
    
//     const customers = document.getElementById("customers");
// const cartButton = document.querySelector('.cartButton')

let card = document.getElementById(customers)

axios.get('https://dummyjson.com/products')
.then(res => {
    db = res.data.products;
    console.log(db);
    db.map((item) => {
        let card = document.createElement('div');
        card.className = "cardBox";
        card.innerHTML = `
            <img src="${item.thumbnail}" alt="">
            <div class="cardTextBox">
                <p>${item.price} $</p>
            </div>
            <button onclick="addToCart(${item.id})">Add to cart</button>
        `;
        customers.appendChild(card);
    });
});
