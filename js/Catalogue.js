document.addEventListener('DOMContentLoaded', function() {
    if (typeof menuData === 'undefined') {
        console.error('Erreur: menuData non chargé.');
        return;
    }

    loadCategory('entrees');
    loadCategory('sushis');
    loadCategory('plats-chauds');
    loadCategory('desserts');
});

function loadCategory(category) {
    const section = document.getElementById(`${category}-section`);
    if (!section || !menuData[category]) return;

    // Afficher sans trier par prix
    section.innerHTML = menuData[category].map(dish => `
        <div class="catalogue-dish">
            <img src="${dish.image}" alt="${dish.name}" class="catalogue-image" loading="lazy">
            <div class="catalogue-dish-info">
                <h3 class="catalogue-dish-name">${dish.name}</h3>
                <p class="catalogue-dish-desc">${dish.desc}</p>
                <!-- Supprimez la ligne du prix ou remplacez par un texte fixe -->
                <p class="catalogue-dish-price">Prix sur demande</p>
            </div>
        </div>
    `).join('');
}