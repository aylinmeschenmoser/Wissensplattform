<template>
  <div class="wp-newsfeed-box">
    <header class="wp-newsfeed-box__header wp-newsfeed-box-header">
        <h2 class="wp-newsfeed-box-header__title">Newsfeed (extern)</h2>
    </header>
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

.wp-newsfeed-box{
  @include news-box;
}

</style>
