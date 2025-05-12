// Données des plats
const menuData = {
    entrees: [
        { id: 1, name: "Edamame", desc: "Fèves de soja fraîches légèrement salées", price: 5.5, image: "https://medias.cotesushi.com/products/216/large_76211.webp" },
        { id: 2, name: "Gyoza", desc: "Raviolis japonais croustillants fourrés au porc", price: 7.5, image: "https://www.giallozafferano.fr/images/74-7419/raviolis-de-viande-japonais-gyoza_1200x800.jpg" },
        { id: 3, name: "Salade Wakame", desc: "Algues marinées au sésame", price: 6.5, image: "https://img.cuisineaz.com/660x660/2022/07/13/i184681-32-salade-d-algues-wakame.jpeg" },
        { id: 4, name: "Tataki de Thon", desc: "Thon légèrement saisi, mariné au citron", price: 12.5, image: "https://www.lamaisonnordique.com/wp-content/uploads/2014/04/TATAKI_019.jpg" }
    ],
    sashimis: [
        { id: 5, name: "Sashimi de Saumon", desc: "6 pièces de saumon frais", price: 14.5, image: "https://capdhagsushi.com/wp-content/uploads/2020/01/Sashimi_Saumon_Cap_d_hag_haguenau.jpg" },
        { id: 6, name: "Sashimi Mixte", desc: "Assortiment de 12 pièces", price: 22.5, image: "https://sushismaki.pl/wp-content/uploads/2018/10/Sashimi-Mix-24-szt.jpg" },
        { id: 7, name: "Sashimi de Thon Rouge", desc: "6 pièces de thon rouge premium", price: 18.5, image: "https://medias.cotesushi.com/products/178/large_d86d1.webp" }
    ],
    sushis: [
        { id: 8, name: "Nigiri Saumon", desc: "2 pièces de sushi au saumon", price: 6.5, image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 9, name: "Maki California", desc: "6 pièces de maki au crabe et avocat", price: 8.5, image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 10, name: "Uramaki Spicy Tuna", desc: "8 pièces de sushi inversé au thon épicé", price: 11.5, image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
    ],
    'plats-chauds': [
        { id: 16, name: "Ramen Tonkotsu", desc: "Nouilles dans un bouillon de porc crémeux", price: 14.5, image: "https://images.unsplash.com/photo-1617093727343-374698b1b188?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 17, name: "Wagyu A5", desc: "Bœuf wagyu de grade A5, 150g", price: 65.0, image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 18, name: "Teriyaki Saumon", desc: "Saumon grillé avec sauce teriyaki", price: 18.5, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 19, name: "Donburi Poulet", desc: "Bol de riz avec poulet et œuf", price: 12.5, image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 20, name: "Udon Tempura", desc: "Nouilles épaisses avec tempura de crevette", price: 15.5, image: "https://images.unsplash.com/photo-1632818924360-68d4994cfdb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 21, name: "Yakitori Mix", desc: "Brochettes de poulet (4 pièces)", price: 11.5, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
    ],
    alcool: [
        { id: 11, name: "Saké Junmai", desc: "Saké traditionnel, 180ml", price: 8.5, image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 12, name: "Saké Nigori", desc: "Saké non filtré, 180ml", price: 9.5, image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 13, name: "Bière Asahi", desc: "Bière japonaise, 33cl", price: 6.5, image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 14, name: "Umeshu", desc: "Liqueur de prune japonaise, 50ml", price: 7.5, image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 15, name: "Whisky Japonais", desc: "Hibiki Harmony, 50ml", price: 12.5, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
    ],
    'brochettes': [
        { id: 22, name: "caca", desc: "Nouilles dans un bouillon de porc crémeux", price: 14.5, image: "https://images.unsplash.com/photo-1617093727343-374698b1b188?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 23, name: "pipi", desc: "Bœuf wagyu de grade A5, 150g", price: 65.0, image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 24, name: "Teriyaki Saumon", desc: "Saumon grillé avec sauce teriyaki", price: 18.5, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 25, name: "Donburi Poulet", desc: "Bol de riz avec poulet et œuf", price: 12.5, image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 26, name: "Udon Tempura", desc: "Nouilles épaisses avec tempura de crevette", price: 15.5, image: "https://images.unsplash.com/photo-1632818924360-68d4994cfdb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 27, name: "Yakitori Mix", desc: "Brochettes de poulet (4 pièces)", price: 11.5, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
    ],
'boissons': [
        { id: 28, name: "caca", desc: "Nouilles dans un bouillon de porc crémeux", price: 14.5, image: "https://images.unsplash.com/photo-1617093727343-374698b1b188?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 29, name: "pipi", desc: "Bœuf wagyu de grade A5, 150g", price: 65.0, image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 30, name: "Teriyaki Saumon", desc: "Saumon grillé avec sauce teriyaki", price: 18.5, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 31, name: "Donburi Poulet", desc: "Bol de riz avec poulet et œuf", price: 12.5, image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 32, name: "Udon Tempura", desc: "Nouilles épaisses avec tempura de crevette", price: 15.5, image: "https://images.unsplash.com/photo-1632818924360-68d4994cfdb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 33, name: "Yakitori Mix", desc: "Brochettes de poulet (4 pièces)", price: 11.5, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
    ],
'desserts': [
        { id: 34, name: "caca", desc: "Nouilles dans un bouillon de porc crémeux", price: 14.5, image: "https://images.unsplash.com/photo-1617093727343-374698b1b188?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 35, name: "pipi", desc: "Bœuf wagyu de grade A5, 150g", price: 65.0, image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 36, name: "Teriyaki Saumon", desc: "Saumon grillé avec sauce teriyaki", price: 18.5, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 37, name: "Donburi Poulet", desc: "Bol de riz avec poulet et œuf", price: 12.5, image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 38, name: "Udon Tempura", desc: "Nouilles épaisses avec tempura de crevette", price: 15.5, image: "https://images.unsplash.com/photo-1632818924360-68d4994cfdb2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 39, name: "Yakitori Mix", desc: "Brochettes de poulet (4 pièces)", price: 11.5, image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
    ],

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
            <div class="dish-image" style="background-image: url('${dish.image}')"></div>
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