<template>
  <div class="wp-facebook-box">
    <header class="wp-facebook-box__header wp-facebook-box-header">
        <h2 class="wp-facebook-box-header__title">Facebook</h2>
    </header>
    <main>
      <div
        class="wp-facebook-box-content__page"
        data-href="https://de-de.facebook.com/netzwerkp/?ref=page_internal"
        data-tabs="timeline, event, messages"
        data-width=""
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true">
        <blockquote cite="https://de-de.facebook.com/netzwerkp/?ref=page_internal" class="fb-xfbml-parse-ignore">
          <a href="https://de-de.facebook.com/netzwerkp/?ref=page_internal">Facebook</a>
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
<script>
  window.fbAsyncInit = function() {
      FB.init({
        appId            : 'your-app-id',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v4.0'
      });
    };
</script>
<style lang="scss">
@import '../styles/mixins';

.wp-facebook-box{
  @include news-box;
}

</style>
