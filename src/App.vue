<template>
  <div class="wp-app">
    <app-header class="wp-app__header"/>
    <router-view class="wp-app__content-wrapper" />
    <app-footer-mobile class="wp-app__footer-mobile"/>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooterMobile from './components/AppFooterMobile.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooterMobile
  },
  data() {
    return {

    };
  },

  created() {
    console.log('App::created()');
  }
};
</script>

<style lang="scss">
@import '../node_modules/font-awesome/css/font-awesome.css';
@import './styles/variables';

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
i{
  font-family: FontAwesome;
  font-style: normal;
}
body{
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#01152e+0,0f6cb2+100 */
  background: #01152e; /* Old browsers */
  background: -moz-linear-gradient(-45deg,  #01152e 0%, #0f6cb2 100%);
  background: -webkit-linear-gradient(-45deg,  #01152e 0%,#0f6cb2 100%);
  background: linear-gradient(135deg,  #01152e 0%,#0f6cb2 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(
    startColorstr='#01152e', endColorstr='#0f6cb2',GradientType=1 );
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
  'Open Sans', 'Helvetica Neue', sans-serif;
}

.wp-app {
  padding-bottom: 3rem;
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: $breakpoint-mobile) {
      padding-bottom: 0;
    }

  &__header {
    flex: 0 0 auto;
  }

  &__content-wrapper {
    flex: 1 0 auto;


    @media screen and (min-width: $breakpoint-mobile) {
      padding: 1rem
    }
    @media screen and (min-width: $breakpoint-desktop) {
      padding: 1.5rem 0;
    }
  }

  &__footer-mobile {
    position: fixed;
    height: 3rem;
    left: 0;
    right: 0;
    bottom: 0;

    @media screen and (min-width: $breakpoint-mobile) {
      display:none;
    }
  }
}
</style>
