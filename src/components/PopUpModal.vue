<template>
  <div class="wp-pop-up-modal" v-if="isOpen">
      <div class="wp-pop-up-modal__backdrop"></div>
      <div class="wp-pop-up-modal__box wp-pop-up-modal-box">
      <header class="wp-pop-up-box-header">
        <i class="wp-pop-up-box-header__close fab fa-close" @click="closeModal"/>
      </header>
      <main class="wp-pop-up-modal-box__body">
        <slot name="content">
        </slot>
      </main>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PopUpModal',

  components: {

  },

  props: {
    isOpen: Boolean
  },

  data() {
    return {

    };
  },

  created() {
    console.log('wp-news::created()');
  },

  methods: {
    closeModal() {
      console.log('PopUpModal::closeModal()');
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss">
@import '../styles/variables';

.wp-pop-up-box-header {
  &__close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
}

.wp-pop-up-modal {
  &__backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    background-color: black;
    opacity: 0.7;
  }

  &__box {
    border-radius: 5px;
    position: fixed;
    z-index: 101;
    background-color: white;
    top: 80px;
    right: 10px;
    left: 10px;
    bottom: 55px;

    @media screen and (min-width: $breakpoint-tablet) {
      top: 100px;
      right: 10px;
      left: 10px;
      bottom: 300px;
    }

    @media screen and (min-width: $breakpoint-desktop) {
      top: 100px;
      right: 300px;
      left: 300px;
      bottom: 400px;
    }
  }
}

</style>
