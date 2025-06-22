const products = [
  {
    name: "Smartwatch",
    category: "electronics",
    price: 2999,
    rating: 4.4,
    image: "https://www.gonoise.com/cdn/shop/files/7_1_6adc4a64-403a-4c83-a092-ff4482c43802.png?v=1692267270"
  },
  {
    name: "Graphic Hoodie",
    category: "fashion",
    price: 1499,
    rating: 4.2,
    image: "https://i.etsystatic.com/7466581/r/il/301505/5966035521/il_1080xN.5966035521_e2c1.jpg"
  },
  {
    name: "Wireless Earbuds",
    category: "electronics",
    price: 1899,
    rating: 4.5,
    image: "https://www.portronics.com/cdn/shop/files/portronics_harmoncis_twins_s19_bluetooth_earbuds_online.jpg?v=1742469927"
  },
  {
    name: "Denim Jeans",
    category: "fashion",
    price: 1199,
    rating: 4.1,
    image: "https://5.imimg.com/data5/HQ/VJ/MY-21970292/men-s-denims-jeans-500x500.jpeg"
  },
  {
    name: "Bluetooth Speaker",
    category: "electronics",
    price: 2599,
    rating: 4.3,
    image: "https://avstore.in/cdn/shop/products/AVStore2_5b8df373-b1bf-4a36-a29d-71412e9651bb.jpg?v=1615287415"
  },
  {
    name: "Running Shoes",
    category: "fashion",
    price: 1699,
    rating: 4.6,
    image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/3138c8f0-5929-48d7-8c58-9126f53d8463/NIKE+INTERACT+RUN+EASYON.png"
  },
];

const productGrid = document.getElementById("productGrid");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortOption = document.getElementById("sortOption");

function displayProducts(list) {
  productGrid.innerHTML = "";
  list.forEach(p => {
    productGrid.innerHTML += `
      <div class="card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <p>Rating: ${p.rating}</p>
        <p>Category: ${p.category}</p>
      </div>`;
  });
}

function filterAndSortProducts() {
  let filtered = [...products];

  // Filter by category
  const category = categoryFilter.value;
  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  // Filter by price (updated ranges)
  const price = priceFilter.value;
  if (price !== "all") {
    if (price === "0-1499") {
      filtered = filtered.filter(p => p.price < 1500);
    } else if (price === "1500-2499") {
      filtered = filtered.filter(p => p.price >= 1500 && p.price < 2500);
    } else if (price === "2500") {
      filtered = filtered.filter(p => p.price >= 2500);
    }
  }

  // Sort
  const sort = sortOption.value;
  if (sort === "priceLow") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHigh") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

// Event listeners
categoryFilter.addEventListener("change", filterAndSortProducts);
priceFilter.addEventListener("change", filterAndSortProducts);
sortOption.addEventListener("change", filterAndSortProducts);

// Initial load
displayProducts(products);
