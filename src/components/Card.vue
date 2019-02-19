<template>
  <div class="card">
    <div class="card-body">
      <h6 class="card-title">{{ name }}</h6>
        <ul class="card-details">
          <li class="card-details-item">
            <span class="_name">class</span>
            <span class="_value">{{ starship_class }}</span>
          </li>
        </ul>
    </div>
    <router-link :to="route">
      <svg-arrow width="24" height="24"/>
    </router-link>
  </div>
</template>


<script>
import SvgArrow from '@/components/icons/Arrow';

export default {
  name: 'Card',

  inheritAttrs: false,

  components: {
    SvgArrow,
  },

  props: {
    name: {
      type: String,
      default: '',
    },
    starship_class: {
      type: String,
      default: '',
    },
    route: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>


<style lang="scss">
.card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: #cdcdcd;
  border-radius: 4px;
  padding: 10px 15px;

  &:hover {
    border-color: #ababab;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  }

  &-title {
    font-size: 18px;
  }

  &:hover &-title {
    color: #3eaf7c;
  }

  &-details {
    font-size: 14px;
    &-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
</style>
