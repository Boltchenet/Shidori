const catalogueData = {
    entrees: [
        { id: 1, name: "Edamame", desc: "Fèves de soja fraîches légèrement salées", price: 5.5, image: "https://medias.cotesushi.com/products/216/large_76211.webp" },
        { id: 2, name: "Gyoza", desc: "Raviolis japonais croustillants fourrés au porc", price: 7.5, image: "https://www.giallozafferano.fr/images/74-7419/raviolis-de-viande-japonais-gyoza_1200x800.jpg" },
        { id: 3, name: "Salade Wakame", desc: "Algues marinées au sésame", price: 6.5, image: "https://img.cuisineaz.com/660x660/2022/07/13/i184681-32-salade-d-algues-wakame.jpeg" },
        { id: 4, name: "Tataki de Thon", desc: "Thon légèrement saisi, mariné au citron", price: 12.5, image: "https://www.lamaisonnordique.com/wp-content/uploads/2014/04/TATAKI_019.jpg" }
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
    desserts: [
        { id: 34, name: "Mochi", desc: "Pâtisserie japonaise à base de riz gluant", price: 5.5, image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 35, name: "Dorayaki", desc: "Petites crêpes fourrées à la pâte de haricots rouges", price: 6.5, image: "https://images.unsplash.com/photo-1587241321921-91a834d6d191?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { id: 36, name: "Matcha Ice Cream", desc: "Glace au thé vert matcha", price: 7.5, image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
    ]
};

document.addEventListener('DOMContentLoaded', function () {
    loadCategory('entrees');
    loadCategory('sushis');
    loadCategory('plats-chauds');
    loadCategory('desserts');
});

function loadCategory(category) {
    const section = document.getElementById(`${category}-section`);
    if (!section) return;

    const sortedDishes = [...catalogueData[category]].sort((a, b) => a.price - b.price);

    sortedDishes.forEach
