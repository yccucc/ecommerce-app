const form = document.getElementById('productForm');
const productList = document.getElementById('productList');

// Function to fetch and display products
const fetchProducts = async () => {
    const response = await fetch('http://localhost:3000/api/products');
    const products = await response.json();
    productList.innerHTML = ''; // Clear the list before displaying
    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - ${product.description} - $${product.price}`;
        productList.appendChild(li);
    });
};

// Event listener for form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;

    const response = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, price }),
    });

    if (response.ok) {
        fetchProducts(); // Refresh the product list
        form.reset(); // Clear the form
    } else {
        console.error('Failed to add product');
    }
});

// Initial fetch to display products on page load
fetchProducts();
