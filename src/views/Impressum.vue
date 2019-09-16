<template>
  <div>
    IMPRESSUM
    <button @click="handleClick">Klick mich!</button>
    <span class="span">{{ countClick }}</span>
  </div>
</template>

<script>
export default {
  name: 'ImpressumView',

  data() {
    return {
      countClick: 0
    };
  },

  methods: {
    handleClick() {
      this.countClick = this.countClick + 1;
      console.log('Hallo', this.countClick);
    }
  }
}
</script>

<style lang="scss" scoped>
  .span {
    background-color: white;
  }
</style>
