<template>
  <div class="wp-skills">
    <div class="wp-skills__contrainer wp-skills-container">
      <skill-box box-title="Skills" class="wp-skills-container__item"/>
    </div>
  </div>
</template>
<script>
import SkillBox from '../components/SkillBox.vue';
export default {
  name: 'wp-skills',
  components: {
    SkillBox
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
.wp-skills-container {
  background-color: white;
}
</style>
