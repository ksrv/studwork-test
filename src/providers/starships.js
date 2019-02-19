import API from '@/services/api';
import { GET } from '@/services/api';
import log from '@/services/log';

import starships from './starships.json';


const requestParams = {
  load: page => ({
    url: page ? `/?page=${page}` : '/',
    method: GET,
  }),

  loadById: ID => ({
    url: `/${ID}`,
    method: GET,
  }),
};


// Тут абсолютно рабочий код,
// но CORS не дает работать с апи
//
// async function load (page) {
//   const name = 'Starships.load';
//   try {
//     const { url, method } = requestParams.load(page);
//     const { status, data } = await API[method](url);
//     log(name, null, { status, data });
//     if (status != 200) throw `Bad status (${ status })`;
//     return data;
//   } catch (error) {
//     console.error(name, error);
//     throw error;
//   }
// }


// заглушка
function load() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(starships);
    }, 300);
  });
}


// Тут абсолютно рабочий код,
// но CORS не дает работать с апи

// async function loadById (ID) {
//   const name = 'Starships.loadById';
//   try {
//     const { url, method } = requestParams.loadById(ID);
//     const { status, data } = await API[method](url);
//     log(name, { ID }, { status, data });
//     if (status != 200) throw `Bad status (${ status })`;
//     return data;
//   } catch (error) {
//     console.error(name, error);
//     throw error;
//   }
// }

function loadById(ID) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ID <= starships.results.length - 1) resolve(starships.results[ID]);
      else reject(new Error(404, 'Not found'));
    }, 400);
  });
}

export default {
  load,
  loadById,
};
