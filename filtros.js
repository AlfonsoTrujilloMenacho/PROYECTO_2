//! PRICE FILTER
const filters = document.querySelector('.filter');

const priceFilter = document.createElement('div');
priceFilter.classList.add('price-filter');
const priceInput = document.createElement('input');
priceInput.setAttribute('type', 'number');
priceInput.placeholder = 'Type a price';
const priceButton = document.createElement('button');
const searchImage = document.createElement('img');
searchImage.src = 'https://cdn-icons-png.flaticon.com/512/2531/2531409.png';
searchImage.alt = 'Search icon';

priceButton.appendChild(searchImage);
priceFilter.appendChild(priceInput);
priceFilter.appendChild(priceButton);
filters.appendChild(priceFilter);

//! SELLER FILTER
const sellerFilter = document.createElement('div');
sellerFilter.classList.add('seller-filter');
const sellerh3 = document.createElement('h3');
sellerh3.textContent = 'Choose a seller';
const sellerSelect = document.createElement('select');
const option1 = document.createElement('option');
option1.textContent = 'All';
option1.value = 'All';

sellerSelect.appendChild(option1);
sellerFilter.appendChild(sellerh3);
sellerFilter.appendChild(sellerSelect);
filters.appendChild(sellerFilter);

//! TYPE FILTER
const typeFilter = document.createElement('div');
typeFilter.classList.add('type-filter');
const typeh3 = document.createElement('h3');
typeh3.textContent = 'Choose a type';
const typeSelect = document.createElement('select');
const option1$ = document.createElement('option');
option1$.textContent = 'All';
option1$.value = 'All';

typeSelect.appendChild(option1$);
typeFilter.appendChild(typeh3);
typeFilter.appendChild(typeSelect);
filters.appendChild(typeFilter);

//!  MOSTRAMOS OPTIONS DE LOS SELECTS
const showSellerOptions = () => {
  const Sellers = [...new Set(products.map((product) => product.seller))];
  Sellers.forEach((seller) => {
    const option = document.createElement('option');
    option.textContent = seller;
    option.value = seller;
    sellerSelect.appendChild(option);
  });
};

const showTypeOptions = () => {
  const Types = [...new Set(products.map((product) => product.type))];
  Types.forEach((type) => {
    const option = document.createElement('option');
    option.textContent = type;
    option.value = type;
    typeSelect.appendChild(option);
  });
};

//! CLEAN BUTTON
const cleanButton = document.createElement('button');
cleanButton.classList.add('clean-button');
const deleteImage = document.createElement('img');
deleteImage.src = 'https://cdn-icons-png.flaticon.com/512/3221/3221803.png';
deleteImage.alt = 'Imagen de borrado';
cleanButton.appendChild(deleteImage);
filters.appendChild(cleanButton);

//! APLICAMOS FILTROS
const applyFilters = () => {
  let filteredProducts = products;

  //? PRICE FILTER
  if (priceInput.value !== '') {
    filteredProducts = filteredProducts.filter(
      (product) => product.price <= parseInt(priceInput.value)
    );
  }
  //? SELLER FILTER
  if (sellerSelect.value === 'All') {
    showProducts(products);
  } else {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.seller.toLowerCase() === sellerSelect.value.toLowerCase()
    );
  }

  //? TYPE FILTER
  if (typeSelect.value === 'All') {
    showProducts(products);
  } else {
    filteredProducts = filteredProducts.filter(
      (product) => product.type.toLowerCase() === typeSelect.value.toLowerCase()
    );
  }

  //? MOSTRAMOS PRODUCTOS FILTRADOS
  showProducts(filteredProducts);
};

//! AÑADIMOS ESCUCHADORES DE EVENTOS
priceButton.addEventListener('click', () => {
  applyFilters();
});
window.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    applyFilters();
  }
});
sellerSelect.addEventListener('change', applyFilters);
typeSelect.addEventListener('change', applyFilters);

cleanButton.addEventListener('click', () => {
  showProducts(products);
  priceInput.value = '';
  sellerSelect.value = option1.value;
  typeSelect.value = option1$.value;
});

showProducts(products);
showSellerOptions();
showTypeOptions();
