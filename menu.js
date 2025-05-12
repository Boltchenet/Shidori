// Données des plats (sans prix)
const menuData = {
    entrees: [
        { id: 1, name: "Edamame", desc: "Fèves de soja fraîches légèrement salées", image: "https://medias.cotesushi.com/products/216/large_76211.webp" },
        { id: 2, name: "Gyoza", desc: "Raviolis japonais croustillants fourrés au porc", image: "https://www.giallozafferano.fr/images/74-7419/raviolis-de-viande-japonais-gyoza_1200x800.jpg" },
        { id: 3, name: "Tataki de Thon", desc: "Thon légèrement saisi, mariné au citron et gingembre", image: "https://www.lamaisonnordique.com/wp-content/uploads/2014/04/TATAKI_019.jpg" },
        { id: 4, name: "Ebi Mayo", desc: "Crevettes tempura avec sauce mayonnaise épicée", image: "https://tokyorestaurant.ro/wp-content/uploads/2020/06/Ebi-mayo-maki.jpg" },
        { id: 5, name: "Sashimi de Hamachi", desc: "5 pièces de sashimi de jaune (hamachi)", image: "https://takeaway.chahouse-ede.nl/wp-content/uploads/2020/11/20521-003.jpg" }
    ],
    sashimis: [
        { id: 6, name: "Sashimi de Saumon", desc: "8 pièces de saumon frais", image: "https://capdhagsushi.com/wp-content/uploads/2020/01/Sashimi_Saumon_Cap_d_hag_haguenau.jpg" },
        { id: 7, name: "Sashimi Mixte Premium", desc: "12 pièces (thon, saumon, hamachi, madai)", image: "https://sushismaki.pl/wp-content/uploads/2018/10/Sashimi-Mix-24-szt.jpg" },
        { id: 8, name: "Sashimi de Thon Rouge", desc: "6 pièces de thon rouge d'Oma", image: "https://medias.cotesushi.com/products/178/large_d86d1.webp" },
        { id: 9, name: "Sashimi de Otoro", desc: "5 pièces de ventrèche de thon premium", image: "https://img.freepik.com/photos-premium/sashimi-thon-japonaise_127090-66.jpg" }
    ],
    sushis: [
        { id: 10, name: "Nigiri Saumon", desc: "2 pièces de sushi au saumon", image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 11, name: "Maki California", desc: "6 pièces de maki au crabe et avocat", image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 12, name: "Uramaki Spicy Tuna", desc: "8 pièces de sushi inversé au thon épicé", image: "https://www.justonecookbook.com/wp-content/uploads/2021/07/Spicy-Tuna-Roll-6882-I.jpg" },
        { id: 13, name: "Assortiment Chef", desc: "10 pièces (nigiri et maki sélectionnés)", image: "https://www.sushisan.com/wp-content/uploads/2020/05/chefs-special-sushi-platter.jpg" },
        { id: 14, name: "Temaki Uni", desc: "Cône main à l'oursin de Hokkaido", image: "https://www.justonecookbook.com/wp-content/uploads/2021/12/Uni-Temaki-8284-I.jpg" }
    ],
    'plats-chauds': [
        { id: 15, name: "Ramen Tonkotsu", desc: "Nouilles dans un bouillon de porc crémeux 48h", image: "https://images.unsplash.com/photo-1617093727343-374698b1b188?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 16, name: "Wagyu A5 Miyazaki", desc: "Bœuf wagyu de grade A5, 150g", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 17, name: "Teriyaki Saumon", desc: "Saumon grillé avec sauce teriyaki maison", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 18, name: "Unagi Don", desc: "Bol de riz avec anguille grillée sauce kabayaki", image: "https://www.justonecookbook.com/wp-content/uploads/2021/12/Unagi-Don-8293-I.jpg" },
        { id: 19, name: "Katsu Curry", desc: "Porc pané avec curry japonais et riz", image: "https://www.justonecookbook.com/wp-content/uploads/2021/12/Japanese-Curry-8289-I.jpg" }
    ],
    alcool: [
        { id: 20, name: "Saké Daiginjo", desc: "Saké premium Dassai 23, 180ml", image: "https://www.tippsysake.com/wp-content/uploads/2020/06/Dassai-23-720ml-1.jpg" },
        { id: 21, name: "Saké Nigori", desc: "Saké non filtré Shirakabegura, 180ml", image: "https://www.sake-talk.com/wp-content/uploads/2021/05/shirakabegura-mio-sparkling-nigori-sake.jpg" },
        { id: 22, name: "Bière Premium Yebisu", desc: "Bière japonaise artisanale, 33cl", image: "https://www.japancentre.com/images/products/contents/1175/yebisu-beer-japanese-beer.jpg" },
        { id: 23, name: "Umeshu Premium", desc: "Liqueur de prune vieillie Choya, 50ml", image: "https://www.choya.com/wp-content/uploads/2020/06/umeshu-premium-1.jpg" },
        { id: 24, name: "Whisky Yamazaki 18 ans", desc: "Single malt japonais, 50ml", image: "https://www.thewhiskyexchange.com/content/images/bottles/sgz/YAMAZAKI-18-YEAR-OLD.jpg" }
    ],
    brochettes: [
        { id: 25, name: "Brochettes de Wagyu", desc: "2 brochettes de bœuf wagyu A5", image: "https://www.justonecookbook.com/wp-content/uploads/2021/12/Wagyu-Beef-Kushiyaki-8287-I.jpg" },
        { id: 26, name: "Tsukune", desc: "Brochettes de boulettes de poulet", image: "https://www.justonecookbook.com/wp-content/uploads/2021/12/Tsukune-8286-I.jpg" },
        { id: 27, name: "Brochettes d'anguille", desc: "Unagi grillé sauce kabayaki", image: "https://www.justonecookbook.com/wp-content/uploads/2021/12/Unagi-Kushiyaki-8285-I.jpg" }
    ],
    boissons: [
        { id: 28, name: "Thé vert Matcha", desc: "Thé vert japonais en poudre", image: "https://www.justonecookbook.com/wp-content/uploads/2021/12/Matcha-Green-Tea-8291-I.jpg" },
        { id: 29, name: "Ramune Original", desc: "Boisson gazeuse japonaise à la lime", image: "https://www.japancentre.com/images/products/contents/1175/ramune-japanese-soda.jpg" },
        { id: 30, name: "Calpico", desc: "Boisson lactée japonaise rafraîchissante", image: "https://www.japancentre.com/images/products/contents/1175/calpis-water-japanese-drink.jpg" },
        { id: 31, name: "Yuzu Soda", desc: "Soda au yuzu frais", image: "https://www.justonecookbook.com/wp-content/uploads/2021/12/Yuzu-Soda-8290-I.jpg" }
    ],
    desserts: [
        { id: 32, name: "Mochi Glacé", desc: "3 pièces (matcha, fraise, mangue)", image: "https://www.justonecookbook.com/wp-content/uploads/2021/12/Mochi-Ice-Cream-8288-I.jpg" },
        { id: 33, name: "Dorayaki", desc: "Pancakes fourrés à la pâte de haricots rouges", image: "https://www.justonecookbook.com/wp-content/uploads/2021/12/Dorayaki-8283-I.jpg" },
        { id: 34, name: "Matcha Tiramisu", desc: "Tiramisu au thé matcha", image: "https://www.justonecookbook.com/wp-content/uploads/2021/12/Matcha-Tiramisu-8282-I.jpg" },
        { id: 35, name: "Parfait Matcha", desc: "Dessert glacé multi-couches", image: "https://www.justonecookbook.com/wp-content/uploads/2021/12/Matcha-Parfait-8281-I.jpg" }
    ]
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
        cartItem.innerHTML = `<span>${item.name}</span>`;
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
    }
}