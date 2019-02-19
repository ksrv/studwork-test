<template>
  <div class="pagination">
    <router-link v-if="page > 1" :to="routePrev" class="pagination-link">&lt;</router-link>
    <span v-else class="pagination-link"></span>

    <span class="pagination-link">{{ page }}</span>

    <router-link :to="routeNext" class="pagination-link">&gt;</router-link>
  </div>
</template>


<script>
export default {
  name: 'Pagination',

  props: {
    page: {
      type: [String, Number],
      default: 1,
    },
  },

  computed: {
    prevPage() {
      return Number(this.page) - 1;
    },

    nextPage() {
      return Number(this.page) + 1;
    },

    routePrev() {
      return { name: 'Home', params: { page: this.prevPage } };
    },

    routeNext() {
      return { name: 'Home', params: { page: this.nextPage } };
    },
  },
};
</script>


<style lang="scss">
.pagination {
  display: flex;
  width: calc(100% / 3);
  justify-content: space-between;
  margin-top: 20px;

  &-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-width: 1px;
    border-style: solid;
    border-color: #cdcdcd;
    border-radius: 50%;
    font-size: 18px;
    &, &:active, &:visited {
      text-decoration: none;
      color: #2c3e50;
    }
    &:hover {
      color: #3eaf7c;
      border-color: #ababab;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
