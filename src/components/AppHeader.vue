<template>
  <header class="wp-header">
    <img src="../assets/np-logo.png" class="wp-header__logo" />
      <ul class="wp-header__menu wp-menu">
        <li class="wp-menu__item wp-menu-item">
          <router-link
            class="wp-menu-item__link"
            to="/news"
            active-class="wp-menu-item__link--active"
            exact>
            News
          </router-link>
        </li>
        <li class="wp-menu__item wp-menu-item">
          <router-link
            class="wp-menu-item__link"
            to="/blog"
            active-class="wp-menu-item__link--active"
            exact>
            Blog
          </router-link>
        </li>
        <li class="wp-menu__item wp-menu-item">
          <router-link
            class="wp-menu-item__link"
            to="/knowledge"
            active-class="wp-menu-item__link--active"
            exact>
            Wissen
          </router-link>
        </li>
        <li class="wp-menu__item wp-menu-item">
          <router-link
            class="wp-menu-item__link"
            to="/skills"
            active-class="wp-menu-item__link--active"
            exact>
            Skills
          </router-link>
        </li>
        <li class="wp-menu__item wp-menu-item">
          <router-link
            class="wp-menu-item__link"
            to="/company"
            active-class="wp-menu-item__link--active"
            exact>
            Unternehmen
          </router-link>
        </li>
        <li class="wp-menu__item wp-menu-item">
          <router-link
            class="wp-menu-item__link"
            to="/hub"
            active-class="wp-menu-item__link--active"
            exact>
            HUB
          </router-link>
        </li>
      </ul>
    <div class="wp-header__icons wp-header-icons">
      <i class="wp-header-icons__item fab fa-search" @click="showSearchPopup"></i>
      <router-link
        class="wp-header-icons__item fab fa-user"
        to="/user"
        tag="i"
        exact>
      </router-link>
    </div>
    <div class="wp-header__search-popup wp-search-popup">
      <div
        class="wp-search-popup__backdrop"
        :class="{ 'wp-search-popup__backdrop--show': isSearchPopupOpen }"></div>
      <div
        class="wp-search-popup__dialog wp-search-popup-dialog"
        :class="{ 'wp-search-popup-dialog--show': isSearchPopupOpen }">
        <input class="wp-search-popup-dialog__input"
          type="text"
          placeholder="Suchbegriff"
          v-model="searchTerm" />
        <button class="wp-search-popup-dialog__button" @click="search">Suchen</button>
        <i class="wp-search-popup-dialog__close fab fa-close" @click="closeSearchPopup"></i>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  components: {

  },
  data() {
    return {
      isSearchPopupOpen: false,
      searchTerm: ''
    };
  },

  created() {
    console.log('AppHeader::created()');
  },

  methods: {
    closeSearchPopup() {
      console.log('AppHeader::closeSearchPopup()');

      this.searchTerm = '';
      this.isSearchPopupOpen = false;
    },

    search() {
      console.log('AppHeader::search()', this.searchTerm);

      // TODO search
    },

    showSearchPopup() {
      console.log('AppHeader::showSearchPopup()');

      this.isSearchPopupOpen = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../styles/variables';

$_color-text-active: rgb(24, 119, 184);
$_color-text: rgb(103, 109, 113);

.wp-menu{
  display: flex;
  list-style: none;
}

.wp-menu-item{
  padding: 1rem 0.4rem;
  &__link {
    text-decoration: none;
    text-transform: uppercase;
    color: $_color-text;
    font-weight: 500;
    font-size: 14px;

    &:hover {
      color: $_color-text-active;
    }

    &--active {
      color: $_color-text-active;
    }
  }
}

.wp-header-icons {
  color: $color-items;

  &__item {
    font-size: 1.3rem;
    padding-left: 1.5rem;
  }
}

.wp-search-popup-dialog {
  &__backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0;
    pointer-events: none;
    z-index: 100;

    &--show {
      opacity: 0.6;
    }
  }
}

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

  &__menu {
    display: none;

    @media screen and (min-width: $breakpoint-mobile) {
      display: flex;
      }
  }

  &__search-popup {
    position: fixed;
    top: -4rem;
    left: 1rem;
    right: 1rem;
    background-color: white;
    padding: 1rem;
    transition: top .5s ease-in-out;
    z-index: 100;

    &--show {
      top: 0;

    }
  }
}
</style>
