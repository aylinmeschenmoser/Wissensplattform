<template>
<div class="wp-news-box-entry">
    <h3 class="wp-news-box-entry__title" v-if="title">{{ title }}</h3>
    <p class="wp-news-box-entry__content">{{ text }}<p>
    <div class="wp-news-box-entry__footer wp-news-box-entry-footer">
        <span class="wp-news-box-entry-footer__autor">{{ author }}</span>
        <span class="wp-news-box-entry__date">{{ date }}</span>
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
    date: String,
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
@import '../styles/variables';

.wp-news-box-entry-footer {
    display:flex;
    justify-content: space-between;
    font-size: 0.75rem;
    color: grey;
}

.wp-news-box-entry {
    padding: 0.5rem 0;

    &__title {
        color: rgb(41, 41, 41);
    }

    &__content {
        margin-top: 0.5rem;
        color: rgb(41, 41, 41);
    }

    &__footer {
        margin-top: 0.8rem;
    }
}

</style>
