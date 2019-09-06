<template>
  <div class="wp-facebook-box">
    <header class="wp-facebook-box__header wp-facebook-box-header">
        <h2 class="wp-facebook-box-header__title">Facebook</h2>
    </header>
    <main>
      <div
        class="fb-page"
        data-href="https://www.facebook.com/netzwerkp/"
        data-tabs="timeline"
        data-width="512"
        data-height="500"
        data-small-header="true"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="false">
        <blockquote
          cite="https://www.facebook.com/netzwerkp/"
          class="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/netzwerkp/">netzwerk P</a>
        </blockquote>
      </div>
    </main>
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

.fb-page {
  padding: 0 1rem 1rem 1rem;
}
.wp-facebook-box{
  @include news-box;
}
</style>
