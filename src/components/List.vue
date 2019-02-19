<template>
  <ul class="list">
    <li v-for="(item, index) in items" :key="index" class="list-item">
      <component :is="itemComponent" v-bind="item" :route="itemRoute(item, index)" />
    </li>
  </ul>
</template>


<script>
export default {
  name: 'Starship-List',

  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
    itemComponent: {
      type: String,
      default: 'Card',
    },
    itemRoute: {
      type: Function,
      default: () => {}, // => ()
    },
  },
};
</script>


<style lang="scss">
.list {

  &-item {
    width: calc(100% / 3);
    margin-bottom: 10px;
  }
}
</style>
