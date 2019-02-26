import { make } from 'vuex-pathify';
import providers from '@/providers';

const namespaced = true;


const state = () => ({
  loading_list: false,
  loading_current: false,
  page: 1,
  count: 0,
  list: [],
  current: {},
});


const getters = {
  ...make.getters(state),
};


const mutations = {
  ...make.mutations(state),
};


const actions = {
  ...make.actions(state),

  /**
   * Загрузка списка
   */
  async load({ commit }, page = 1) {
    try {
      commit('SET_LOADING_LIST', true);
      const { count, results } = await providers.starships.load(page);
      commit('SET_PAGE', page);
      commit('SET_COUNT', count);
      commit('SET_LIST', results);
    } finally {
      commit('SET_LOADING_LIST', false);
    }
  },

  /**
   * Загрузка информации по кораблю
   *
   * @param {String} ID ID корабля
   */
  async loadById({ commit }, ID) {
    try {
      commit('SET_LOADING_CURRENT', true);
      const current = await providers.starships.loadById(ID);
      commit('SET_CURRENT', current);
    } finally {
      commit('SET_LOADING_CURRENT', false);
    }
  },

  /**
   * Поиск
   * 
   * @param {String} search 
   */
  async search({ commit }, search) {
    try {
      commit('SET_LOADING_LIST', true);
      const { count, results } = await providers.starships.search(search);
      // commit('SET_PAGE', 1);
      commit('SET_COUNT', count);
      commit('SET_LIST', results);
    } finally {
      commit('SET_LOADING_LIST', false);
    }
  }
};


export default {
  namespaced, state, getters, mutations, actions,
};
