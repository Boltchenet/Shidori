// Données des plats
const menuData = {
    entrees: [
        { id: 1, name: "Edamame", desc: "Fèves de soja fraîches légèrement salées", price: 5.5 },
        { id: 2, name: "Gyoza", desc: "Raviolis japonais croustillants fourrés au porc", price: 7.5 },
        { id: 3, name: "Salade Wakame", desc: "Algues marinées au sésame", price: 6.5 },
        { id: 4, name: "Tataki de Thon", desc: "Thon légèrement saisi, mariné au citron", price: 12.5 }
    ],
    sashimis: [
        { id: 5, name: "Sashimi de Saumon", desc: "6 pièces de saumon frais", price: 14.5 },
        { id: 6, name: "Sashimi Mixte", desc: "Assortiment de 12 pièces", price: 22.5 },
        { id: 7, name: "Sashimi de Thon Rouge", desc: "6 pièces de thon rouge premium", price: 18.5 }
    ],
    sushis: [
        { id: 8, name: "Nigiri Saumon", desc: "2 pièces de sushi au saumon", price: 6.5 },
        { id: 9, name: "Maki California", desc: "6 pièces de maki au crabe et avocat", price: 8.5 },
        { id: 10, name: "Uramaki Spicy Tuna", desc: "8 pièces de sushi inversé au thon épicé", price: 11.5 }
    ],
    alcool: [
        { id: 11, name: "Saké Junmai", desc: "Saké traditionnel, 180ml", price: 8.5 },
        { id: 12, name: "Saké Nigori", desc: "Saké non filtré, 180ml", price: 9.5 },
        { id: 13, name: "Bière Asahi", desc: "Bière japonaise, 33cl", price: 6.5 },
        { id: 14, name: "Umeshu", desc: "Liqueur de prune japonaise, 50ml", price: 7.5 },
        { id: 15, name: "Whisky Japonais", desc: "Hibiki Harmony, 50ml", price: 12.5 }
    ]
    // ... autres catégories avec leurs plats
};

// Variables d'état
let currentCategory = 'entrees';
let cart = [];
let remainingItems = 20;
let currentRound = 1;
const maxRounds = 5;

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    loadCategory(currentCategory);
    setupEventListeners();
    updateCartSummary();
});

// Charger les plats d'une catégorie
function loadCategory(category) {
    const dishesList = document.getElementById('dishes-list');
    dishesList.innerHTML = '';
    
    document.querySelector('.category-title').textContent = 
        category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
    
    menuData[category].forEach(dish => {
        const dishCard = document.createElement('div');
        dishCard.className = 'dish-card';
        dishCard.innerHTML = `
            <div class="dish-image"></div>
            <h3 class="dish-name">${dish.name}</h3>
            <p class="dish-desc">${dish.desc}</p>
            <p class="dish-price">${dish.price.toFixed(2)}€</p>
            <button class="add-to-cart" data-id="${dish.id}">Ajouter</button>
        `;
        dishesList.appendChild(dishCard);
    });
}

// Gestion des événements
function setupEventListeners() {
    // Catégories
    document.querySelectorAll('.category-list li').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelector('.category-list li.active').classList.remove('active');
            this.classList.add('active');
            currentCategory = this.dataset.category;
            loadCategory(currentCategory);
        });
    });
    
    // Ajout au panier
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const dishId = parseInt(e.target.dataset.id);
            addToCart(dishId);
        }
    });
    
    // Validation du tour
    document.getElementById('validate-btn').addEventListener('click', validateRound);
}

// Ajouter un plat au panier
function addToCart(dishId) {
    if (remainingItems <= 0) return;
    
    let dish;
    for (const category in menuData) {
        dish = menuData[category].find(item => item.id === dishId);
        if (dish) break;
    }
    
    if (dish) {
        cart.push(dish);
        remainingItems--;
        updateCartSummary();
        updateCartItems();
    }
}

// Mettre à jour le résumé du panier
function updateCartSummary() {
    document.getElementById('total-items').textContent = cart.length;
    document.getElementById('remaining-items').textContent = remainingItems;
    document.getElementById('current-round').textContent = currentRound;
}

// Mettre à jour la liste des articles du panier
function updateCartItems() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>${item.price.toFixed(2)}€</span>
        `;
        cartItems.appendChild(cartItem);
    });
}

// Valider le tour
function validateRound() {
    if (cart.length === 0) return;
    
    if (currentRound < maxRounds) {
        currentRound++;
        remainingItems = 20;
        cart = [];
        updateCartSummary();
        updateCartItems();
        alert(`Tour ${currentRound-1} validé ! Prêt pour le tour ${currentRound}`);
    } else {
        alert('Commande finale validée ! Merci pour votre commande.');
        // Ici vous pourriez ajouter la logique pour envoyer la commande
    }
}