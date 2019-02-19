<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<script>

export default {
  name: 'App',
};
</script>


<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0;
}

h1 {
  margin-bottom: 40px;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
