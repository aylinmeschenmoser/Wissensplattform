<template>
  <header class="wp-header">
    <img src="../assets/np-logo.png" class="wp-header__logo" />
  </header>
</template>

<script>
export default {
  name: 'AppHeaderLogin',
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';

//main block muss ganz nach unten
.wp-header {
  height: 5rem;
  padding: 0 1rem;
  position: relative;
  z-index: 10;
  display: flex;
  background-color: $color-news-box-header;
  align-items: center;
  justify-content: space-between;
  -webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.3);
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.3);

  &__logo {
    width: 3rem;
    height: auto;
  }
}
</style>
