const products = [
  {
    image:
      'https://freepngimg.com/thumb/gun/39-glock-handgun-png-image-thumb.png',
    name: 'Glock 17',
    type: 'Pistola',
    caliber: '9mm',
    capacity: '17',
    price: 559,
    seller: 'GunBroker'
  },
  {
    image:
      'https://www.gricegunshop.com/media/catalog/product/cache/24706b4065b78b7a6f77e0c515c9a9b7/8/1/81076-870-sps-super-mag-turkey-angle.png',
    name: 'Remington 870',
    type: 'Escopeta',
    caliber: '12',
    capacity: '4+1',
    price: 399,
    seller: 'Bass Pro Shops'
  },
  {
    image:
      'https://clipart-library.com/images_k/ar-15-silhouette-png/ar-15-silhouette-png-20.png',
    name: 'AR-15',
    type: 'Rifle de Asalto',
    caliber: '5.56mm',
    capacity: '30',
    price: 699,
    seller: 'Cheaper Than Dirt'
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/d7/Berretta_M9_Sideview.png',
    name: 'Beretta M9',
    type: 'Pistola',
    caliber: '9mm',
    capacity: '15',
    price: 499,
    seller: 'GunBroker'
  },
  {
    image:
      'https://static.vecteezy.com/system/resources/previews/024/725/105/original/gun-ak-47-transparent-background-gun-transparent-background-ai-generated-free-png.png',
    name: 'AK-47',
    type: 'Rifle de Asalto',
    caliber: '7.62mm',
    capacity: '30',
    price: 799,
    seller: 'Cheaper Than Dirt'
  },
  {
    image:
      'https://www.smith-wesson.com/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-c7gr8wg3cg%2Fproducts%2F209%2Fimages%2F2001%2F12437-mp-OnWhite-3Q-right__81652.1675178438.1280.1280.png%3Fc%3D1&w=3840&q=75',
    name: 'Smith & Wesson M&P',
    type: 'Pistola',
    caliber: '9mm',
    capacity: '8',
    price: 299,
    seller: 'Lucky Gunner'
  },
  {
    image:
      'https://i0.wp.com/www.sticksandstonesarms.com/wp-content/uploads/2019/05/M1014-LTD1.png?fit=1004%2C353&ssl=1',
    name: 'Benelli M4',
    type: 'Escopeta',
    caliber: '12',
    capacity: '5+1',
    price: 899,
    seller: 'Gander Outdoors'
  },
  {
    image:
      'https://cdn11.bigcommerce.com/s-1kqh9qmybo/images/stencil/640w/products/31228/174838/SSI3410__29802.1622146832.png?c=2',
    name: 'SIG Sauer SIG716',
    type: 'Rifle de Asalto',
    caliber: '7.62mm',
    capacity: '20',
    price: 449,
    seller: 'Lucky Gunner'
  },
  {
    image:
      'https://www.historicalarmory.com/cdn/shop/products/mercer-county-ohio-engraved-ruger-1911-right.png?v=1583780496',
    name: 'Ruger SR1911',
    type: 'Pistola',
    caliber: '.45 ACP',
    capacity: '8',
    price: 599,
    seller: 'GunBroker'
  },
  {
    image:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bb7c747-20e6-412c-bd48-7d02131c61ab/dbqsonq-8af0fa3f-d670-46c3-8a5b-beafd52b9679.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNiYjdjNzQ3LTIwZTYtNDEyYy1iZDQ4LTdkMDIxMzFjNjFhYlwvZGJxc29ucS04YWYwZmEzZi1kNjcwLTQ2YzMtOGE1Yi1iZWFmZDUyYjk2NzkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.k7B5ydwzNdIvTeZVm_D3fW5uIEhznOg4M8GR_Ij7Bfg',
    name: 'Mossberg 500',
    type: 'Escopeta',
    caliber: '12',
    capacity: '5+1',
    price: 999,
    seller: 'Lucky Gunner'
  }
];
const PRODUCTS = document.querySelector('.products');

//! SECCIÓN DE PRODUCTOS
const showProducts = (products) => {
  PRODUCTS.innerHTML = '';

  for (const product of products) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;

    const name = document.createElement('h2');
    name.textContent = product.name;

    const price = document.createElement('h3');
    price.textContent = `${product.price} €`;

    const details = document.createElement('div');
    details.classList.add('details');

    const type = document.createElement('p');
    type.textContent = `Type: ${product.type}`;

    const caliber = document.createElement('p');
    caliber.textContent = `Caliber: ${product.caliber}`;

    const capacity = document.createElement('p');
    capacity.textContent = `Capacity: ${product.capacity}`;

    const seller = document.createElement('h4');
    seller.textContent = `Sold by: ${product.seller}`;

    productCard.appendChild(image);
    productCard.appendChild(name);
    productCard.appendChild(price);
    details.appendChild(type);
    details.appendChild(caliber);
    details.appendChild(capacity);
    productCard.appendChild(details);
    productCard.appendChild(seller);

    PRODUCTS.appendChild(productCard);
  }
};

//! MENU DESPLEGABLE
const filterButton = document.createElement('div');
filterButton.classList.add('filter-button');
const filterButtonImagen = document.createElement('img');
filterButtonImagen.src =
  'https://static.vecteezy.com/system/resources/previews/001/198/883/original/gun-png.png';
filterButtonImagen.alt = 'Menu hambuguesa';

const bala = document.createElement('img');
bala.classList.add('bala');
bala.src = 'https://cdn-icons-png.flaticon.com/512/39/39838.png';
bala.alt = 'Bala icon';

filterButton.appendChild(filterButtonImagen);
document.body.appendChild(filterButton);
document.body.appendChild(bala);
filterButton.addEventListener('click', () => {
  PRODUCTS.classList.toggle('clicked');
  filters.classList.toggle('open');
  filterButton.classList.add('fired');
  bala.classList.add('open-bala');
  filterButton.addEventListener(
    'animationend',
    () => {
      filterButton.classList.remove('fired');
      bala.classList.remove('open-bala');
    },
    { once: true }
  );

  const brand = document.getElementById('brand');
  brand.classList.toggle('ifOpen');
});

showProducts(products);
