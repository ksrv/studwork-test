<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z"/>
    <path :fill="fill" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
  </svg>
</template>


<script>
export default {
  name: 'Arrow',
  props: {
    fill: {
      type: String,
      default: '#3eaf7c',
    },
  },
};
</script>
