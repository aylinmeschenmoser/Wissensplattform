<template>
    <div class="wp-skill-box">
      <img class="wp-skill-box__img" src="../assets/user-img.png">
      <label class="wp-skill-box__name">{{ employee.name }}</label>
      <label class="wp-skill-box__department">{{ employee.department }}</label>
      <hr class="wp-skill-box__spacing" />
      <div class="wp-skill-box__buttons wp-skill-box-buttons">
        <button class="wp-skill-box-buttons__number"><i class="fas fa-phone"></i>{{ employee.phone }}</button>
        <button class="wp-skill-box-buttons__email"><i class="fas fa-mail-reply"></i>E-Mail</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SkillBox',

  props: {
    employee: Object
  },

  created() {
    console.log('SkillBox::created()');
  },
};
</script>

<style lang="scss">
@import '../styles/variables';

.wp-skill-box {
  height: 5rem;

  // @media screen and (min-width: $breakpoint-tablet) {
  //   display: flex;
  //   flex-direction: column;
  // }

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
  &__img {
    width: 5rem;
    height: 5rem;
  }
}
</style>
