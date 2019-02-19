<template>
  <page :pending="pending" title="Список кораблей">
    <list :items="list" :item-route="itemRoute" />
    <pagination :page="page" />
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

  computed: {
    pending: get('Starships/loading_list'),
    list: get('Starships/list'),
  },

  methods: {
    callStarshipsLoad: call('Starships/load'),

    itemRoute(item, index) {
      return { name: 'Item', params: { id: index } };
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
