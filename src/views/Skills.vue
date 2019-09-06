<template>
  <div class="wp-skills">
    <div class="wp-skills__skillBox wp-skillBox-container">
      <skill-box box-title="Skills" class="wp-skillBox-container__item"/>
    </div>
    <div class="wp-skills__skillBoxMobile wp-skillBoxMobile-container">
      <skill-box-mobile box-title="Skills" class="wp-skillBoxMobile-container__item"/>
    </div>
  </div>
</template>

<script>
import SkillBox from '../components/SkillBox.vue';
import SkillBoxMobile from '../components/SkillBoxMobile.vue';

export default {
  name: 'wp-skills',

  components: {
    SkillBox,
    SkillBoxMobile
  },

  data() {
    return {
    };
  },

  created() {
    console.log('wp-skills::created()');
  }
};
</script>

<style lang="scss">
@import '../styles/variables';

// .wp-skills-container {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// }

.wp-skills {
  @media screen and (min-width: $breakpoint-desktop) {
    margin-left: 10rem;
    margin-right: 10rem;
  }

  &__skillBox {
    display: none;
    @media screen and (min-width: $breakpoint-desktop) {
      display: block;
    }
  }

  &__skillBoxMobile {
    display: none;
    @media screen and (max-width: $breakpoint-tablet) {
      display: block;
    }
  }
}
</style>
