<template>
  <page :pending="isPagePending" title="Список кораблей">
    <search @focus="search = true" @blur="search=false" />
    <list :items="list" :item-route="itemRoute" />
    <pagination :page="page" :count="count" />
  </page>
</template>


<script>
import { get, call } from 'vuex-pathify';

export default {
  name: 'Home',

  props: {
    page: {
      type: [String, Number],
      default: 1,
    },
  },

  data: ()  => ({
    search: false
  }),

  computed: {
    pending: get('Starships/loading_list'),
    count: get('Starships/count'),
    list: get('Starships/list'),
    isPagePending () {
      if (this.search) {
        return false;
      }
      return this.pending;
    }
  },

  methods: {
    callStarshipsLoad: call('Starships/load'),

    itemRoute(item, index) {
      const ids = item.url.split('/').splice(-2);
      const id = ids[1] || ids[0];
      return { name: 'Item', params: { id } };
    },

    async load() {
      try {
        await this.callStarshipsLoad(this.page);
      } catch (error) {
        console.error(error);
      }
    },
  },

  watch: {
    page(newValue, oldValue) {
      if (newValue != oldValue) {
        this.load();
      }
    },
  },

  created() {
    this.load();
  },
};
</script>
