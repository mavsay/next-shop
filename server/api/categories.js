const categoriesData = [
  {
    name: 'Смартфоны',
    src: 'phones.jpg',
    link: 'phones'
  },
  {
    name: 'Наушники',
    src: 'headPhones.jpg',
    link: 'headphones'
  },
  {
    name: 'Умные Часы',
    src: 'watch.jpg',
    link: 'smartwatches'
  },
  {
    name: 'Фото техника',
    src: 'camera.jpg',
    link: 'photos'
  }
];



module.exports = async (name) => {
  return {
    name,
    categories: categoriesData
  }
}