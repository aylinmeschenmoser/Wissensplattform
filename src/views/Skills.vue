<template>
  <div class="wp-skills">
    <skill-filter class="wp-skills__filters" />
    <div class="wp-skills__results">
      <skill-box
        v-for="employee in employees"
        :key="employee.id"
        :employee="employee"
      />
    </div>
  </div>
</template>

<script>
import SkillFilter from '../components/SkillFilter.vue';
import SkillBox from '../components/SkillBox.vue';

export default {
  name: 'SkillsView',

  components: {
    SkillFilter,
    SkillBox
  },

  data() {
    return {
      employees: [{
        id: 1,
        name: 'Tanja Gmelin',
        department: 'Technik',
        phone: '-204',
        email: 'tanja.gmelin@netzwerk-p.com'
      }, {
        id: 2,
        name: 'Marius Hetterich',
        department: 'Projekte',
        phone: '-214',
        email: 'tanja.gmelin@netzwerk-p.com'
      }, {
        id: 3,
        name: 'Lena Beßler',
        department: 'Technik',
        phone: '-204',
        email: 'tanja.gmelin@netzwerk-p.com'
      }]
    };
  },

  created() {
    console.log('Skills::created()');
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
    display: flex;
    flex-direction: row;
  }

  @media screen and (max-width: $breakpoint-tablet) {
    display: flex;
    flex-direction: row;
  }

  &__filters {
    @media screen and (min-width: $breakpoint-tablet) {
      margin-right: 2rem;
    }
  }

  &__skillBox {
    display: none;
    @media screen and (min-width: $breakpoint-desktop) {
      display: block;
    }
  }
}
</style>
