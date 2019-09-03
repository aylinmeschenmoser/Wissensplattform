<template>
  <div class="wp-newsfeed-box">
    <header class="wp-newsfeed-box__header wp-newsfeed-box-header">
        <h2 class="wp-newsfeed-box-header__title">Newsfeed (extern)</h2>
    </header>
    <main>
      <ul class="wp-newsfeed-box__categories wp-newsfeed-box-categories">
        <li
          class="wp-newsfeed-box-categories__item tab-link"
          onclick="openCategory(event, 'category-1')">
          t3n</li>
        <li
          class="wp-newsfeed-box-categories__item tab-link"
          onclick="openCategory(event, 'category-2')">
          WiWo</li>
        <li
          class="wp-newsfeed-box-categories__item tab-link"
          onclick="openCategory(event, 'category-3')">
          heise</li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  name: 'NewsfeedBox',

  data() {
    return {

    };
  },

  created() {
    console.log('NewsBoxEntry::created()');
  },

  methods: {}
};
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/mixins';

.wp-newsfeed-box-categories {
  display: flex;
  list-style: none;
  //margin-left: 1rem;

  &__item {
    flex: 1 0 auto;
  }
}

.tab-link {
  background-color: $color-news-box-header;
  padding: 1rem;
  margin-bottom: -0.1rem;
  //border-width: 0.1rem;
  color: $color-text;
  //border-color: black;
  // border-top-style: solid;
  // border-left-style: solid;
  // border-right-style: solid;

  &--active {
    background-color: white;
    color: black;
  }
}

.wp-newsfeed-box{
  @include news-box;
}

</style>
