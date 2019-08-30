<template>
    <div class="wp-skill-box">
      <header class="wp-skill-box__header wp-skill-box-header">
        <h2 class="wp-skill-box-header__title">{{ boxTitle }}</h2>
      </header>
      <main class="wp-skill-box__content wp-skill-box-content">
      <input
        class="wp-skill-box-content__search"
        placeholder="Suchen..." />
        <!-- v-model="searchTerm" /> -->
      <ul>
        <li class="wp-skill-box-content__items">
          Beratung
          <i class="wp-skill-box-content__caret fab fa-caret-right" />
          </li>
        <li class="wp-skill-box-content__items">
          Projektmanagement
          <i class="wp-skill-box-content__caret fab fa-caret-right" />
        </li>
        <li class="wp-skill-box-content__items">
          nP Produkte
          <i class="wp-skill-box-content__caret fab fa-caret-right" />
        </li>
        <li class="wp-skill-box-content__items">
          EDV-Kenntnisse
          <i class="wp-skill-box-content__caret fab fa-caret-right" />
          </li>
        <li class="wp-skill-box-content__items">
          Programmierung
          <i class="wp-skill-box-content__caret fab fa-caret-right" />
        </li>
        <li class="wp-skill-box-content__items">
          nP Tools
          <i class="wp-skill-box-content__caret fab fa-caret-right" />
        </li>
        <li class="wp-skill-box-content__items">
          Arbeitstools
          <i class="wp-skill-box-content__caret fab fa-caret-right" />
        </li>
      </ul>
      </main>
    </div>
</template>

<script>
export default {
  name: 'SkillBox',
  components: {
  },

  props: {
    boxTitle: String
  },

  data() {
    return {
    };
  },

  created() {
    console.log('SkillBox::created()', this.newsItems);
  },
};
</script>

<style lang="scss">
@import '../styles/variables';

.wp-skill-box-header {
  color: $color-text-active;
  font-weight: inherit;

  &__title {
    font-weight: 400;
  }
}

.wp-skill-box-content {
  background-color: white;
  align-items: center;
  font-weight: inherit;
  color: $color-text;
  list-style: none;
  color: $color-text;

  &__items {
    display: flex;
    justify-content: space-between;
    color: $color-text;
    list-style: none;
    //border-bottom: 1px solid grey;
    padding: 1rem 0;
    color: $color-text;

    &:not(:last-of-type) {
      border-bottom: 1px solid grey;
    }
  }
  &__search {
    width: 100%;
    border: 1px solid $color-text;
    border-radius: 10px;
    padding: 0.6rem 1rem;

    &::placeholder {
      color: rgb(184, 184, 184)
    }

    &:focus {
      outline: none;
    }
  }
}

.wp-skill-box {
  background-color: white;
  align-items: center;
  font-weight: inherit;
  padding: 0 1rem;

  &__header {
    color: $color-text-active;
    font-weight: 400;
    padding: 1rem 0;
  }
}

</style>
