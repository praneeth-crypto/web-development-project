// Function to add product to the cart
function addToCart(product) {
    const productName = product.dataset.name;
    const productPrice = parseFloat(product.dataset.price);
    const productImage = product.dataset.image;

    // Get existing cart from localStorage or create an empty array if none exists
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(item => item.name === productName);

    if (existingProductIndex !== -1) {
        // If product already exists, increase quantity
        cart[existingProductIndex].quantity += 1;
    } else {
        // If it's a new product, add it to the cart
        cart.push({
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}
