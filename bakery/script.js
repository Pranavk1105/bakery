// Product data
const products = [
    {
        name: 'Chocolate Cake',
        price: 29.99,
        image: 'https://source.unsplash.com/800x600/?chocolate-cake',
        description: 'Rich and moist chocolate cake'
    },
    {
        name: 'Croissant',
        price: 3.99,
        image: 'https://source.unsplash.com/800x600/?croissant',
        description: 'Buttery and flaky croissant'
    },
    {
        name: 'Sourdough Bread',
        price: 6.99,
        image: 'https://source.unsplash.com/800x600/?sourdough-bread',
        description: 'Traditional sourdough bread'
    },
    {
        name: 'Cupcakes',
        price: 4.99,
        image: 'https://source.unsplash.com/800x600/?cupcake',
        description: 'Assorted flavored cupcakes'
    },
    {
        name: 'Apple Pie',
        price: 19.99,
        image: 'https://source.unsplash.com/800x600/?apple-pie',
        description: 'Classic American apple pie'
    },
    {
        name: 'Cookies',
        price: 2.99,
        image: 'https://source.unsplash.com/800x600/?cookies',
        description: 'Freshly baked cookies'
    }
];

// Load products
function loadProducts() {
    const productGrid = document.querySelector('.product-grid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">$${product.price.toFixed(2)}</p>
            </div>
        `;
        
        productGrid.appendChild(productCard);
    });
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Load products when the page loads
window.addEventListener('load', loadProducts); 