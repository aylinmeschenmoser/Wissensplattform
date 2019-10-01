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
        data-height="600"
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

  mounted() {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v4.0');
    script.setAttribute('crossOrigin', 'anonymous');
    script.setAttribute('id', 'facebook-widget');
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  },

  beforeDestroy() {
    const element = document.getElementById('facebook-widget');
    document.body.removeChild(element);
  }

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
