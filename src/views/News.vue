<template>
  <div class="wp-news">
    <div class="wp-news__container wp-news-container">
      <news-box box-title="Schnelle Info" :news-items="quickNews" class="wp-news-container__item" />
      <news-box box-title="Blog" class="wp-news-container__item" />
      <news-box box-title="Neuestes Wissen" class="wp-news-container__item" />
    </div>
  </div>
</template>

<script>
import NewsBox from '../components/NewsBox.vue';

export default {
  name: 'News',

  components: {
    NewsBox
  },

  data() {
    console.log();

    return {
      quickNews: Array.apply(null, Array(25)).map((_, index) => ({
        text: `Bla ${index}`,
        author: 'Jasmin',
        date: '12.07.2020'
      }))
    };
  },

  created() {
    console.log('News::created()');
  }
};
</script>

<style lang="scss">
@import '../styles/variables';

.wp-news-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  &__item {
    flex: 0 1 100%;
    margin-bottom: 1rem;
    min-height: 30vh;

    &:not(:first-of-type) {
      display: none;
    }

    @media screen and (min-width: $breakpoint-mobile) {
      flex: 0 1 49%;

      &:not(:first-of-type) {
        display: block;
      }
    }

    @media screen and (min-width: $breakpoint-tablet) {
      flex: 0 1 32%;
    }
  }
}
</style>
