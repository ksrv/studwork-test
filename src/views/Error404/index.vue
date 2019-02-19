<template>
  <main class="error">
    <header class="error-header">
      <h1 class="error-title">404</h1>
      <h2 class="error-subtitle">Страница не найдена</h2>
    </header>
    <router-link :to="{ name: 'Home' }" class="error-link">
      Вернуться на главную
    </router-link>
  </main>
</template>


<style lang="scss">
.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  &-title {
    font-size: 100px;
    text-align: center;
    margin-bottom: 50px;
  }
  &-subtitle {
    font-size: 30px;
    text-align: center;
    margin-bottom: 30px;
  }
  &-link {
    &, &:active, &:hover, &:visited {
      text-decoration: none;
      color: #3eaf7c;
    }
  }
}
</style>
