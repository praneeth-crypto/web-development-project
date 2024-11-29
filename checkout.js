// checkout.js

// Function to update the checkout page
function updateCheckout() {
    const checkoutSummary = document.getElementById('checkout-summary');
    const submitOrderButton = document.getElementById('submit-order');

    // Get cart data from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Clear checkout summary
    checkoutSummary.innerHTML = '';

    let totalPrice = 0;

    // Loop through the cart items and display them
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;

        const checkoutItemDiv = document.createElement('div');
        checkoutItemDiv.classList.add('checkout-item');

        checkoutItemDiv.innerHTML = `
            <div class="checkout-item-details">
                <img src="${item.image}" alt="${item.name}" class="checkout-item-image">
                <div class="checkout-item-info">
                    <h3>${item.name}</h3>
                    <p>$${item.price.toFixed(2)}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Subtotal: $${(item.price * item.quantity).toFixed(2)}</p>
                </div>
            </div>
        `;

        checkoutSummary.appendChild(checkoutItemDiv);
    });

    // Display total price
    const totalPriceDiv = document.createElement('div');
    totalPriceDiv.classList.add('total-price');
    totalPriceDiv.innerHTML = `<h3>Total: $${totalPrice.toFixed(2)}</h3>`;
    checkoutSummary.appendChild(totalPriceDiv);
}

// Handle form submission
document.getElementById('checkout-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('payment').value;

    if (name && address && paymentMethod) {
        // Here you can integrate real payment APIs (e.g., Stripe, PayPal)
        alert(`Order Placed!\nName: ${name}\nAddress: ${address}\nPayment Method: ${paymentMethod}`);
        // Clear the cart
        localStorage.removeItem('cart');
        window.location.href = 'index.html'; // Redirect to home page after order is placed
    } else {
        alert('Please fill in all the fields.');
    }
});

// Initialize the checkout page with cart details
updateCheckout();
