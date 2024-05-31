let cards = document.querySelector(".cards")


fetch('https://fakestoreapi.com/products?limit=10')
    .then(response => response.json())
    .then(data => createCards(data))
    .catch(error => console.error('Error fetching data:', error));

function createCards(products) {
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'user-card';
        // Add user information to the card
        const id = document.createElement('h2');
        id.classList.add("idNumber")
        id.textContent = `id: ${product.id}`;
        const titleProduct = document.createElement('h2');
        titleProduct.classList.add("title")
        titleProduct.textContent = `title: ${product.title}`;
        const descriptionProuduct = document.createElement('p');
        descriptionProuduct.classList.add("description")
        descriptionProuduct.textContent = `description: ${product.description}`;
        const price = document.createElement('p');
        price.classList.add("price")
        price.textContent = `price: ${product.price}`;
        // Append elements to the card card.appendChild(name);
        card.append(id, titleProduct, descriptionProuduct, price)
        // Append the card to the container
        cards.appendChild(card);
    });
}
