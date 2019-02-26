<template>
  <div class="search">
    <input
      v-model="form.search"
      :diabled="disabled"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
      placeholder="Поиск"
      type="text"
      class="control"
      />
  </div>
</template>


<script>
import { get, call } from 'vuex-pathify';

export default {
  name: 'Search',

  data () {
    return {
      form: {
        search: ''
      }
    };
  },

  computed: {
    disabled: get('Starships/loading_list'),
  },

  methods: {
    callSearch: call('Starships/search'),
    callLoad: call('Starships/load'),
  },

  watch: {
    'form.search' (value) {
      if (value.length) {
        this.callSearch(value);
      } else {
        this.callLoad();
      }
    }
  }
}
</script>


<style lang="scss">
.search {
  width: calc(100% / 3);
  margin-bottom: 20px;

  .control {
    width: 100%;
    padding: 10px 15px;
    border-width: 1px;
    border-style: solid;
    border-color: #cdcdcd;
    border-radius: 4px;
    &:focus, &:active {
      outline: none;
      box-shadow: 0 0 4px 0 rgba(#3eaf7c, 0.5);
    }
  }
}
</style>
