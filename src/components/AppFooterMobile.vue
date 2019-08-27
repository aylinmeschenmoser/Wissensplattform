<template>
  <ul class="wp-footer-mobile">
    <li class="wp-footer-mobile__item wp-menu-item">
      <router-link
        class="wp-menu-item__link"
        to="/news"
        title="News"
        active-class="wp-menu-item__link--active"
        exact>
        <i class="wp-menu-item__news fab fa-newspaper-o"></i>
      </router-link>
    </li>
    <li class="wp-footer-mobile__item wp-menu-item">
      <router-link
        class="wp-menu-item__link"
        to="/blog"
        title="Blog"
        active-class="wp-menu-item__link--active"
        exact>
        <i class="wp-menu-item__blog fab fa-th-large"></i>
      </router-link>
    </li>
    <li class="wp-footer-mobile__item wp-menu-item">
      <router-link
        class="wp-menu-item__link"
        to="/knowledge"
        title="Wissen"
        active-class="wp-menu-item__link--active"
        exact>
        <i class="wp-menu-item__knowledge fab fa-book"></i>
      </router-link>
    </li>
    <li class="wp-footer-mobile__item wp-menu-item">
      <router-link
        class="wp-menu-item__link"
        to="/skills"
        title="Skills"
        active-class="wp-menu-item__link--active"
        exact>
        <i class="wp-menu-item__skills fab fa-lightbulb-o"></i>
      </router-link>
    </li>
    <li class="wp-footer-mobile__item wp-menu-item">
      <router-link
        class="wp-menu-item__link"
        to="/company"
        title="Unternehmen"
        active-class="wp-menu-item__link--active"
        exact>
        <i class="wp-menu-item__company fab fa-building"></i>
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

$_color-text: rgb(103, 109, 113);
$_color-text--active: rgb(0, 167, 229);

// helper block
.wp-menu-item {
  &__link {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    font-weight: 400;
    font-size: 14px;

    &--active {
      color: $_color-text--active;
    }
  }
}

// main block
.wp-footer-mobile {
  background: $_color-text;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0 1rem;
  align-items: center;
  box-shadow: 0 -1px 4px 0 rgba(0, 0, 0, .3);
}
</style>
