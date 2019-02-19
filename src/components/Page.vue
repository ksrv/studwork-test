<template>
  <pulse-loader v-if="pending" :loading="pending" />

  <main v-else class="page">
    <h1 v-if="title" class="page-title">{{ title }}</h1>
    <slot />
  </main>
</template>


<script>
import PulseLoader from 'vue-spinner/src/PulseLoader';

export default {
  name: 'Page',

  components: {
    PulseLoader,
  },

  props: {
    pending: {
      type: Boolean,
      default: false,
    },

    title: {
      type: String,
      default: null,
    },
  },
};
</script>


<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}
</style>
