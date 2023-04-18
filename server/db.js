const products = [
  {
    id: 1,
    name: 'Apple iPhone 14 Pro Max',
    image: '18503-63Deeppurple.jpg',
    price: 114990,
    description: 'Apple iPhone 14 Pro Max 128GB (Тёмно-фиолетовый | Deep Purple)',
    link: '/apple-iphone-14-pro-max-128gb-deep-purple',
    isFavorite: false,
    isAdded: false,
    category: 'phones'
  },
  {
    id: 2,
    name: 'Apple iPhone 13 mini',
    image: '14677-597Pink.jpg',
    price: 70990,
    description: 'Apple iPhone 13 mini 128GB (Розовый | Pink)',
    link: '/apple-iphone-13-mini-128gb-pink',
    isFavorite: false,
    isAdded: false,
    category: 'phones'
  },
  {
    id: 3,
    name: 'Apple iPhone 12 Pro',
    image: '12454-787bigeek_image1.jpg',
    price: 78990,
    description: 'Apple iPhone 12 Pro Max 128GB (Графитовый | Graphite)',
    link: '/apple-iphone-12-pro-max-128gb-graphite',
    isFavorite: false,
    isAdded: false,
    category: 'phones'
  },
  {
    id: 4,
    name: 'Apple iPhone 14 Pro Max',
    image: '18503-63Deeppurple.jpg',
    price: 114990,
    description: 'Apple iPhone 14 Pro Max 128GB (Тёмно-фиолетовый | Deep Purple)',
    link: '/apple-iphone-14-pro-max-128gb-deep-purple',
    isFavorite: false,
    isAdded: false,
    category: 'headphones'
  },
  {
    id: 5,
    name: 'Apple iPhone 13 mini',
    image: '14677-597Pink.jpg',
    price: 70990,
    description: 'Apple iPhone 13 mini 128GB (Розовый | Pink)',
    link: '/apple-iphone-13-mini-128gb-pink',
    isFavorite: false,
    isAdded: false,
    category: 'headphones'
  },
  {
    id: 6,
    name: 'Apple iPhone 12 Pro',
    image: '12454-787bigeek_image1.jpg',
    price: 78990,
    description: 'Apple iPhone 12 Pro Max 128GB (Графитовый | Graphite)',
    link: '/apple-iphone-12-pro-max-128gb-graphite',
    isFavorite: false,
    isAdded: false,
    category: 'phones'
  }
];

const categoriesData = [
  {
    name: 'Смартфоны',
    src: 'static/phones.jpg',
    link: 'phones'
  },
  {
    name: 'Наушники',
    src: 'static/headPhones.jpg',
    link: 'headphones'
  },
  {
    name: 'Умные Часы',
    src: 'static/watch.jpg',
    link: 'smartwatches'
  },
  {
    name: 'Фото техника',
    src: 'static/camera.jpg',
    link: 'photos'
  }
];

module.exports = { products, categoriesData }