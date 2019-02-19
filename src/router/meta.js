const brand = 'Звездные войны';

// meta-информация для некоторых страниц, вставляется в <head />
export default {
  Home: {
    title: `${brand}: Эпизод "Список"`,
    metaTags: [
      {
        name: 'description',
        content: 'содержимое мета-тега',
      },
      {
        name: 'keywords',
        content: 'тестовое задание',
      },
    ],
  },
  Item: {
    title: `${brand}: Эпизод "Корабля"`,
    metaTags: [
      {
        name: 'description',
        content: 'содержимое мета-тега',
      },
      {
        name: 'keywords',
        content: 'тестовое задание',
      },
    ],
  },

};
