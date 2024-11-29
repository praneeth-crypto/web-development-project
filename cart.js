// Function to update the cart on the cart page
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Clear the cart items container
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    // Loop through each item in the cart and display it
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;

        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        cartItemDiv.innerHTML = `
            <div class="cart-item-details">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>$${item.price.toFixed(2)}</p>
                    <input type="number" value="${item.quantity}" class="quantity-input" data-name="${item.name}">
                </div>
                <button class="remove-item" data-name="${item.name}">Remove</button>
            </div>
        `;

        // Update the cart when quantity changes
        cartItemDiv.querySelector('.quantity-input').addEventListener('change', (e) => {
            updateQuantity(e.target);
        });

        // Remove item from cart when "Remove" button is clicked
        cartItemDiv.querySelector('.remove-item').addEventListener('click', () => {
            removeFromCart(item.name);
        });

        cartItemsContainer.appendChild(cartItemDiv);
    });

    // Update the total price in the cart summary
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;

    // If the cart is empty, display a message
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        document.getElementById('checkout-btn').style.display = 'none';
    } else {
        document.getElementById('checkout-btn').style.display = 'block';
    }
}

// Update the quantity of an item in the cart
function updateQuantity(input) {
    const productName = input.dataset.name;
    const newQuantity = parseInt(input.value);

    if (newQuantity <= 0) {
        removeFromCart(productName);
    } else {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const product = cart.find(item => item.name === productName);
        if (product) {
            product.quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }
    }
}

// Remove an item from the cart
function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

// Initialize the cart when the page loads
updateCart();
