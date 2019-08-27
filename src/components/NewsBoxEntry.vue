<template>
  <div class="wp-news-box-entry">
    <h3 class="wp-news-box-entry__title" v-if="title">{{ title }}</h3>
    <p class="wp-news-box-entry__content">{{ text }}</p>
    <div class="wp-news-box-entry__footer wp-news-box-entry-footer">
      <span class="wp-news-box-entry-footer__author">{{ author }}</span>
      <span class="wp-news-box-entry-footer__date">{{ date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsBoxEntry',

  props: {
    title: String,
    text: String,
    author: String,
    date: String
  },

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
// helper blocks
.wp-news-box-entry-footer {
  display: flex;
  justify-content: space-between;
  font-size: .75rem;
  color: grey;
}

// main block
.wp-news-box-entry {
  padding: .5rem 0;

  &__title {
    color: rgb(54, 54, 54);
  }

  &__content {
    margin-top: .5rem;
    color: rgb(41, 41, 41);
  }

  &__footer {
    margin-top: .8rem;
  }
}
</style>
