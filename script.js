// Sample Product Data
const products = [
    // TODO: Add local product images to /assets/images/products/
    { id: 1, name: "MacBook Pro 14\"", brand: "Apple", category: "Laptops", price: 1999, oldPrice: 2399, rating: 4.8, image: "/assets/images/products/macbook-pro.jpg", fallback: "https://via.placeholder.com/300x220/1a1a2e/00ff88?text=MacBook+Pro", discount: 17 },
    { id: 2, name: "Dell XPS 13", brand: "Dell", category: "Laptops", price: 1299, oldPrice: 1599, rating: 4.6, image: "/assets/images/products/dell-xps.jpg", fallback: "https://via.placeholder.com/300x220/1a1a2e/00ff88?text=Dell+XPS", discount: 19 },
    { id: 3, name: "iPhone 15 Pro", brand: "Apple", category: "Phones", price: 1099, oldPrice: 1199, rating: 4.9, image: "/assets/images/products/iphone-15.jpg", fallback: "https://via.placeholder.com/300x220/1a1a2e/00ff88?text=iPhone+15", discount: 8 },
    { id: 4, name: "Samsung Galaxy S24", brand: "Samsung", category: "Phones", price: 899, oldPrice: 999, rating: 4.7, image: "/assets/images/products/galaxy-s24.jpg", fallback: "https://via.placeholder.com/300x220/1a1a2e/00ff88?text=Galaxy+S24", discount: 10 },
    { id: 5, name: "Sony WH-1000XM5", brand: "Sony", category: "Headphones", price: 399, oldPrice: 499, rating: 4.8, image: "/assets/images/products/sony-xm5.jpg", fallback: "https://via.placeholder.com/300x220/1a1a2e/00ff88?text=Sony+XM5", discount: 20 },
    { id: 6, name: "AirPods Pro Max", brand: "Apple", category: "Headphones", price: 549, oldPrice: 649, rating: 4.7, image: "/assets/images/products/airpods-max.jpg", fallback: "https://via.placeholder.com/300x220/1a1a2e/00ff88?text=AirPods+Max", discount: 15 },
    { id: 7, name: "iPad Pro 12.9\"", brand: "Apple", category: "Accessories", price: 1299, oldPrice: 1499, rating: 4.8, image: "/assets/images/products/ipad-pro.jpg", fallback: "https://via.placeholder.com/300x220/1a1a2e/00ff88?text=iPad+Pro", discount: 13 },
    { id: 8, name: "Samsung Monitor 34\"", brand: "Samsung", category: "Accessories", price: 599, oldPrice: 799, rating: 4.5, image: "/assets/images/products/samsung-monitor.jpg", fallback: "https://via.placeholder.com/300x220/1a1a2e/00ff88?text=Monitor", discount: 25 },
    { id: 9, name: "ASUS ROG Laptop", brand: "ASUS", category: "Laptops", price: 1899, oldPrice: 2199, rating: 4.7, image: "/assets/images/products/asus-rog.jpg", fallback: "https://via.placeholder.com/300x220/1a1a2e/00ff88?text=ASUS+ROG", discount: 14 },
    { id: 10, name: "Google Pixel 8", brand: "Google", category: "Phones", price: 799, oldPrice: 899, rating: 4.6, image: "/assets/images/products/pixel-8.jpg", fallback: "https://via.placeholder.com/300x220/1a1a2e/00ff88?text=Pixel+8", discount: 11 },
    { id: 11, name: "Logitech MX Master", brand: "Logitech", category: "Accessories", price: 99, oldPrice: 129, rating: 4.8, image: "/assets/images/products/mx-master.jpg", fallback: "https://via.placeholder.com/300x220/1a1a2e/00ff88?text=MX+Master", discount: 23 },
    { id: 12, name: "Beats Studio Pro", brand: "Apple", category: "Headphones", price: 399, oldPrice: 499, rating: 4.6, image: "/assets/images/products/beats-studio.jpg", fallback: "https://via.placeholder.com/300x220/1a1a2e/00ff88?text=Beats+Studio", discount: 20 },
];

// Blog Data
// TODO: Add local blog images to /assets/images/blog/
const blogPosts = [
    {
        id: 1,
        title: "Best Laptops for 2024",
        excerpt: "Discover the top laptops of 2024 that balance performance, design, and portability.",
        image: "/assets/images/blog/best-laptops.jpg",
        fallback: "https://via.placeholder.com/500x300/1a1a2e/00ff88?text=Best+Laptops",
        date: "Jan 20, 2024",
        category: "Guides"
    },
    {
        id: 2,
        title: "Wireless Earbuds Comparison",
        excerpt: "Compare the latest wireless earbuds to find the perfect audio companion for your lifestyle.",
        image: "/assets/images/blog/earbuds-comparison.jpg",
        fallback: "https://via.placeholder.com/500x300/1a1a2e/00ff88?text=Earbuds",
        date: "Jan 18, 2024",
        category: "Reviews"
    },
    {
        id: 3,
        title: "5G Phones Worth Your Money",
        excerpt: "Explore the best 5G smartphones that offer incredible speeds and advanced features.",
        image: "/assets/images/blog/5g-phones.jpg",
        fallback: "https://via.placeholder.com/500x300/1a1a2e/00ff88?text=5G+Phones",
        date: "Jan 15, 2024",
        category: "Tech News"
    },
    {
        id: 4,
        title: "Gaming Setup Guide 2024",
        excerpt: "Complete guide to building the ultimate gaming setup with the best components.",
        image: "/assets/images/blog/gaming-setup.jpg",
        fallback: "https://via.placeholder.com/500x300/1a1a2e/00ff88?text=Gaming+Setup",
        date: "Jan 12, 2024",
        category: "Guides"
    },
    {
        id: 5,
        title: "Monitor Features Explained",
        excerpt: "Understand refresh rates, resolution, and panel types for optimal monitor selection.",
        image: "/assets/images/blog/monitor-features.jpg",
        fallback: "https://via.placeholder.com/500x300/1a1a2e/00ff88?text=Monitors",
        date: "Jan 10, 2024",
        category: "Educational"
    },
    {
        id: 6,
        title: "Keyboard Switches Deep Dive",
        excerpt: "Everything you need to know about mechanical keyboard switches and how they differ.",
        image: "/assets/images/blog/keyboard-switches.jpg",
        fallback: "https://via.placeholder.com/500x300/1a1a2e/00ff88?text=Keyboards",
        date: "Jan 8, 2024",
        category: "Guides"
    }
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Dark/Light Mode
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'dark';

// Initialize Theme
function initializeTheme() {
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Search Functionality with Autocomplete
const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');

searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    
    if (value.length === 0) {
        searchSuggestions.classList.remove('active');
        return;
    }

    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(value) || 
        p.brand.toLowerCase().includes(value)
    );

    if (filtered.length > 0) {
        searchSuggestions.innerHTML = filtered.map(p => `
            <div class="search-suggestion" onclick="searchProduct('${p.name}')">
                <div><strong>${p.name}</strong></div>
                <small>${p.brand} - $${p.price}</small>
            </div>
        `).join('');
        searchSuggestions.classList.add('active');
    } else {
        searchSuggestions.classList.remove('active');
    }
});

function searchProduct(name) {
    searchInput.value = name;
    searchSuggestions.classList.remove('active');
    const element = document.querySelector(`[data-product-name="${name}"]`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Close suggestions when clicking outside
document.addEventListener('click', (e) => {
    if (e.target !== searchInput && e.target !== searchSuggestions) {
        searchSuggestions.classList.remove('active');
    }
});

// Product Slider
let currentSlide = 0;
const sliderTrack = document.getElementById('sliderTrack');
const sliderDots = document.getElementById('sliderDots');
const sliderPrev = document.getElementById('sliderPrev');
const sliderNext = document.getElementById('sliderNext');

function initializeSlider() {
    // Get top 4 products for slider
    const topProducts = products.slice(0, 4);
    
    sliderTrack.innerHTML = topProducts.map((product, index) => `
        <div class="slider-item">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='${product.fallback}'">
            <div class="slider-item-info">
                <div class="slider-item-name">${product.name}</div>
                <div class="slider-item-price">$${product.price}</div>
                <button class="btn btn-primary btn-small" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');

    // Create dots
    sliderDots.innerHTML = topProducts.map((_, index) => `
        <div class="dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></div>
    `).join('');
}

function updateSliderPosition() {
    const offset = currentSlide * -100;
    sliderTrack.style.transform = `translateX(${offset}%)`;
    
    // Update active dot
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function goToSlide(index) {
    currentSlide = index;
    updateSliderPosition();
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.slider-item').length;
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSliderPosition();
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.slider-item').length;
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSliderPosition();
}

sliderNext.addEventListener('click', nextSlide);
sliderPrev.addEventListener('click', prevSlide);

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Countdown Timer
function updateCountdown() {
    const endTime = new Date().getTime() + (3 * 60 * 60 * 1000); // 3 hours from now
    
    setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;
        
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            countdownElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }, 1000);
}

// Product Grid Rendering
const productsGrid = document.getElementById('productsGrid');

function renderProducts(productsToRender = products) {
    productsGrid.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-product-name="${product.name}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='${product.fallback}'">
                ${product.discount ? `<div class="product-badge">${product.discount}% OFF</div>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-brand">${product.brand}</div>
                <div class="product-rating">
                    <span class="stars">${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 > 0 ? '☆' : ''}</span>
                    <span>(${product.rating})</span>
                </div>
                <div class="product-footer">
                    <div>
                        <div class="product-price">$${product.price}</div>
                        ${product.oldPrice ? `<span class="product-price-old">$${product.oldPrice}</span>` : ''}
                    </div>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filtering and Sorting
const categoryCheckboxes = document.querySelectorAll('input[name="category"]');
const brandCheckboxes = document.querySelectorAll('input[name="brand"]');
const priceRange = document.getElementById('priceRange');
const sortSelect = document.getElementById('sortSelect');
const resetFilters = document.getElementById('resetFilters');
const priceDisplay = document.getElementById('priceDisplay');

function applyFilters() {
    let filtered = [...products];

    // Category filter
    const selectedCategories = Array.from(categoryCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    if (selectedCategories.length > 0 && !selectedCategories.includes('all')) {
        filtered = filtered.filter(p => selectedCategories.includes(p.category));
    }

    // Brand filter
    const selectedBrands = Array.from(brandCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    if (selectedBrands.length > 0) {
        filtered = filtered.filter(p => selectedBrands.includes(p.brand));
    }

    // Price filter
    const maxPrice = parseInt(priceRange.value);
    filtered = filtered.filter(p => p.price <= maxPrice);

    // Sorting
    const sortValue = sortSelect.value;
    switch(sortValue) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'popularity':
        default:
            filtered.sort((a, b) => b.id - a.id);
    }

    renderProducts(filtered);
}

// Add event listeners for filters
categoryCheckboxes.forEach(cb => cb.addEventListener('change', applyFilters));
brandCheckboxes.forEach(cb => cb.addEventListener('change', applyFilters));
sortSelect.addEventListener('change', applyFilters);

priceRange.addEventListener('input', (e) => {
    priceDisplay.textContent = e.target.value;
    applyFilters();
});

resetFilters.addEventListener('click', () => {
    categoryCheckboxes.forEach(cb => {
        cb.checked = cb.value === 'all';
    });
    brandCheckboxes.forEach(cb => cb.checked = false);
    priceRange.value = 3000;
    priceDisplay.textContent = 3000;
    sortSelect.value = 'popularity';
    renderProducts();
});

// Cart Functionality
const cartCount = document.getElementById('cartCount');

function updateCartCount() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
    updateCartCount();
}

function updateCartItemQuantity(productId, quantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            saveCart();
            renderCart();
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started!</p>
                <a href="#shop" class="btn btn-primary">Continue Shopping</a>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" onerror="this.src='${item.fallback}'">
                </div>
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">$${item.price}</div>
                    <div class="quantity-control">
                        <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})" title="Remove">✕</button>
            </div>
        `).join('');
    }

    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? (subtotal > 500 ? 0 : 10) : 0;
    const tax = subtotal * 0.1;
    const total = subtotal + shipping + tax;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Blog Section
const blogGrid = document.getElementById('blogGrid');

function renderBlog() {
    blogGrid.innerHTML = blogPosts.map(post => `
        <div class="blog-card">
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}" onerror="this.src='${post.fallback}'">
            </div>
            <div class="blog-content">
                <div class="blog-meta">${post.category} • ${post.date}</div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="#" class="read-more">Read More →</a>
            </div>
        </div>
    `).join('');
}

// Contact Form
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;

    // Simulate form submission
    formMessage.textContent = 'Message sent successfully! We\'ll get back to you soon.';
    formMessage.classList.remove('error');
    formMessage.classList.add('success');

    contactForm.reset();
    
    setTimeout(() => {
        formMessage.classList.remove('success');
    }, 5000);
});

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #00ff88, #00d4ff);
        color: #0a0e27;
        padding: 15px 20px;
        border-radius: 8px;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Checkout Button
const checkoutBtn = document.querySelector('.btn-checkout');
checkoutBtn.addEventListener('click', () => {
    if (cart.length > 0) {
        showNotification('Proceeding to checkout... This is a demo.');
        setTimeout(() => {
            cart = [];
            saveCart();
            updateCartCount();
            renderCart();
        }, 1500);
    }
});

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initializeSlider();
    renderProducts();
    renderBlog();
    renderCart();
    updateCartCount();
    updateCountdown();
});
