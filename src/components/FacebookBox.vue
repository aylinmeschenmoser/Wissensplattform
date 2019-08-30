<template>
  <div class="wp-facebook-box">
    <header class="wp-facebook-box__header wp-facebook-box-header">
        <h2 class="wp-facebook-box-header__title">Facebook</h2>
    </header>
  </div>
</template>

<script>

export default {
  name: 'FacebookBox',
  components: {
  },
};
</script>

<style lang="scss">
@import '../styles/mixins';

.wp-facebook-box{
  @include news-box;
}

</style>
