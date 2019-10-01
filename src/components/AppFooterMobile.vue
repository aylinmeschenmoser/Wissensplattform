<template>
    <ul class="wp-footer-mobile">
      <li class="wp-footer-mobile__item wp-menu-item">
        <router-link
        class="wp-menu-item__link"
        to="/news"
        titel="News"
        active-class="wp-menu-item__link--active"
        exact>
        <i class="wp-menu-item__news fab fa-newspaper-o"></i>
        </router-link>
      </li>
      <li class="wp-footer-mobile__item wp-menu-item">
        <router-link
        class="wp-menu-item__link"
        to="/blog"
        titel="Blog"
        active-class="wp-menu-item__link--active"
        exact>
        <i class="wp-menu-item__blog fab fa-th-large"></i>
        </router-link>
      </li>
      <li class="wp-footer-mobile__item wp-menu-item">
        <router-link
        class="wp-menu-item__link"
        to="/knowledge"
        titel="Wissen"
        active-class="wp-menu-item__link--active"
        exact>
        <i class="wp-menu-item__knowledge fab fa-book"></i>
        </router-link>
      </li>
      <li class="wp-footer-mobile__item wp-menu-item">
        <router-link
        class="wp-menu-item__link"
        to="/company"
        titel="Unternehmen"
        active-class="wp-menu-item__link--active"
        exact>
        <i class="wp-menu-item__company fab fa-building"></i>
        </router-link>
      </li>
      <li class="wp-footer-mobile__item wp-menu-item">
        <router-link
        class="wp-menu-item__link"
        to="/hub"
        titel="HUB"
        active-class="wp-menu-item__link--active"
        exact>
        <i class="wp-menu-item__company fab fa-lightbulb-o"></i>
        </router-link>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'AppFooterMobile',

  data() {
    return {

    };
  },

  created() {
    console.log('AppFooterMobile::created()');
  }
};
</script>

<style lang="scss">
@import '../styles/variables';
$_color-text-active: rgb(24, 119, 184);
$_color-text: rgb(103, 109, 113);

.wp-menu-item {
  &__link {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;

    &--active {
      color: rgb(0, 167, 229);
    }
  }
}

.wp-footer-mobile {
  background-color: $_color-text;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0 1rem;
  align-items: center;
  box-shadow: 1px 0px 5px 0px rgba(0,0,0,0.3);
  }

</style>
