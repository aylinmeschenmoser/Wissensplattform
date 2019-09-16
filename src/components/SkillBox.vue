<template>
    <div class="wp-skill-box">
      <main class="wp-skill-box__content wp-skill-box-content">
        <div class="wp-skill-box-content__filter wp-filter">
          <div class="wp-filter__searches wp-filter-searches">
            <input
              class="wp-filter-searches__search"
              placeholder="Suchen" />
            <button class="wp-filter-searches__delete">Filter löschen</button>
          </div>
          <ul class="wp-filters">
            <li
              class="wp-filters__category wp-filter-category"
              v-for="filter in skillFilters"
              :key="filter.category">

              <span @click="toggleFilter(filter)" class="wp-filter-category__label">
                <span>{{ filter.category }}</span>
                <i class="fa-caret-right"></i>
              </span>
              <ul
                class="wp-filter-category__skills wp-filter-skills"
                :class="{
                  'wp-filter-skills--active': !!filter.active
                }">
                <li
                  class=""
                  v-for="skill in filter.skills"
                  :key="skill">
                  <input type="checkbox" class="">{{ skill }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="wp-skill-box-content__users wp-users">
          <div class="wp-users__entry wp-users-entry">
            <img class="wp-users-entry__img" src="../assets/user-img.png">
            <label class="wp-users-entry__name">Tanja Gmelin</label>
            <label class="wp-users-entry__department">Technik</label>
            <hr class="wp-users-entry__spacing" width="50%" align="center" />
            <div class="wp-users-entry__buttons wp-users-entry-buttons">
              <button class="wp-users-entry-buttons__number"><i class="fas fa-phone"></i>-204</button>
              <button class="wp-users-entry-buttons__eMail"><i class="fas fa-mail-reply"></i>E-Mail</button>
            </div>
          </div>
          <div class="wp-users__entry wp-users-entry">
            <img class="wp-users-entry__img" src="../assets/user-img.png">
            <label class="wp-users-entry__name">Marius Hetterich</label>
            <label class="wp-users-entry__department">Projekte</label>
            <hr class="wp-users-entry__spacing" width="50%" align="center" />
            <div class="wp-users-entry__buttons wp-users-entry-buttons">
              <button class="wp-users-entry-buttons__number"><i class="fas fa-phone"></i>-214</button>
              <button class="wp-users-entry-buttons__eMail"><i class="fas fa-mail-reply"></i>E-Mail</button>
            </div>
          </div>
          <div class="wp-users__entry wp-users-entry">
            <img class="wp-users-entry__img" src="../assets/user-img.png">
            <label class="wp-users-entry__name">Lena Beßler</label>
            <label class="wp-users-entry__department">Trainee</label>
            <hr class="wp-users-entry__spacing" width="50%" align="center" />
            <div class="wp-users-entry__buttons wp-users-entry-buttons">
              <button class="wp-users-entry-buttons__number"><i class="fas fa-phone"></i>-211</button>
              <button class="wp-users-entry-buttons__eMail"><i class="fas fa-mail-reply"></i>E-Mail</button>
            </div>
          </div>
          <div class="wp-users__entry wp-users-entry">
            <img class="wp-users-entry__img" src="../assets/user-img.png">
            <label class="wp-users-entry__name">Dominik Kaps</label>
            <label class="wp-users-entry__department">Trainee</label>
            <hr class="wp-users-entry__spacing" width="50%" align="center" />
            <div class="wp-users-entry__buttons wp-users-entry-buttons">
              <button class="wp-users-entry-buttons__number"><i class="fas fa-phone"></i>-208</button>
              <button class="wp-users-entry-buttons__eMail"><i class="fas fa-mail-reply"></i>E-Mail</button>
            </div>
          </div>
          <div class="wp-users__entry wp-users-entry">
            <img class="wp-users-entry__img" src="../assets/user-img.png">
            <label class="wp-users-entry__name">Kim Jungbeck</label>
            <label class="wp-users-entry__department">Technik</label>
            <hr class="wp-users-entry__spacing" width="50%" align="center" />
            <div class="wp-users-entry__buttons wp-users-entry-buttons">
              <button class="wp-users-entry-buttons__number"><i class="fas fa-phone"></i>-203</button>
              <button class="wp-users-entry-buttons__eMail"><i class="fas fa-mail-reply"></i>E-Mail</button>
            </div>
          </div>
          <div class="wp-users__entry wp-users-entry">
            <img class="wp-users-entry__img" src="../assets/user-img.png">
            <label class="wp-users-entry__name">Jahn Kuppinger</label>
            <label class="wp-users-entry__department">Technik</label>
            <hr class="wp-users-entry__spacing" width="50%" align="center" />
            <div class="wp-users-entry__buttons wp-users-entry-buttons">
              <button class="wp-users-entry-buttons__number"><i class="fas fa-phone"></i>-222</button>
              <button class="wp-users-entry-buttons__eMail"><i class="fas fa-mail-reply"></i>E-Mail</button>
            </div>
          </div>
          <div class="wp-users__entry wp-users-entry">
            <img class="wp-users-entry__img" src="../assets/user-img.png">
            <label class="wp-users-entry__name">Tanja Moormann-Schulz</label>
            <label class="wp-users-entry__department">Lektorat / interner Ansprechpartner</label>
            <hr class="wp-users-entry__spacing" width="50%" align="center" />
            <div class="wp-users-entry__buttons wp-users-entry-buttons">
              <button class="wp-users-entry-buttons__number"><i class="fas fa-phone"></i>-7002</button>
              <button class="wp-users-entry-buttons__eMail"><i class="fas fa-mail-reply"></i>E-Mail</button>
            </div>
          </div>
          <div class="wp-users__entry wp-users-entry">
            <img class="wp-users-entry__img" src="../assets/user-img.png">
            <label class="wp-users-entry__name">Nadine Dottermosch</label>
            <label class="wp-users-entry__department">Technik / interner Ansprechpartner / Supervision Technik</label>
            <hr class="wp-users-entry__spacing" width="50%" align="center" />
            <div class="wp-users-entry__buttons wp-users-entry-buttons">
              <button class="wp-users-entry-buttons__number"><i class="fas fa-phone"></i>-79</button>
              <button class="wp-users-entry-buttons__eMail"><i class="fas fa-mail-reply"></i>E-Mail</button>
            </div>
          </div>
        </div>
      </main>
    </div>
</template>

<script>
export default {
  name: 'SkillBox',
  components: {
  },

  props: {
    boxTitle: String
  },

  data() {
    return {
      skillFilters: [{
        active: false,
        category: 'Arbeitstools',
        skills: [
          'Bilddatenbanken',
          'CLM-Portal',
          'CMS'
        ]
      }, {
        active: false,
        category: 'Bildbearbeitung',
        skills: [
          'CGI',
          'Colormanagment',
          'Packaging'
        ]
      }]
    };
  },

  methods: {
    toggleFilter(filter) {
      console.log('SkillBox::toggleFilter()');
      filter.active = !filter.active;
    }
  },

  created() {
    console.log('SkillBox::created()', this.newsItems);
  },
};
</script>

<style lang="scss">
@import '../styles/variables';

.wp-skill-box-content {
  height: calc(100vh - 9.75rem);
  display: flex;
  justify-content: space-between;

  &__filter {
    //margin: 1rem;
    background-color: white;
    width: 25%;
    margin-right: 5rem;
  }
  &__users {
    justify-content: space-between;
    //margin: 1rem;
    //background-color: white;
    width: 75%;
  }
}

.wp-filter-searches {
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  margin-bottom: 0.5rem;

  &__search {
    margin-top: .75rem;
    width: 100%;
    border: 1px solid $color-text;
    border-radius: 10px;
    padding: 0.75rem 0.7rem;

    &::placeholder {
      color: rgb(184, 184, 184)
    }

    &:focus {
      outline: none;
    }
  }

  &__delete {
    text-align: left;
    margin-top: 1rem;
    margin-left: 0.75rem;
    background: none;
    border: none;
    color: $color-text-active;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      outline: none;
    }
  }
}

.wp-filters {
  display: flex;
  flex-direction: column;
  font-weight: inherit;
  color: $color-text-active;
  margin: 0 0.75rem;

  @media screen and (min-width: $breakpoint-tablet) {
      overflow-y: scroll;
  }

  &__label {
    display: flex;
    justify-content: space-between;

    // &:not(:last-of-type) {
    //   border-bottom: 1px solid grey;
    // }
  }
}

.wp-filters-label {
  list-style: none;
  padding: 0.5rem 0.75rem;
  font-weight: 600;
  background-color: $color-news-box-header;
  margin-bottom: 0.45rem;
  margin-right: 0.5rem;

  &:hover {
    cursor: pointer;
  }

  &__fas {
    font-weight: 100;
  }
}

.wp-filters-categories {
  display: none;

  &--active {
    display: block;
  }
  &__item {
    color: $color-text;
    list-style: none;
  }
}

.wp-filters-categories-item {
  &__checkbox {
    margin: 0 0.5rem;
  }
}

.wp-users {
  display:flex;
  flex-wrap: wrap;
}

.wp-users-entry {
  width: 250px;
  height: 325px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;
  background-color: white;
  // &:not(:last-of-type) {
  //   margin-right: 2rem;
  // }

  &__img {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  &__name {
    color: $color-text-active;
    font-weight: 500;
    margin-bottom: 0.75rem;
  }

  &__department {
    text-align: center;
    color: $color-skill-items-darkgrey;
    margin-bottom: 1rem;
    font-size: 0.75rem;
    width: 50%;
  }

  &__spacing {
    margin-bottom: 1rem;
    color: $color-text-active;
  }
}

.fas {
  margin-right: 0.3rem;
}

.wp-users-entry-buttons {
  display: flex;

  &__number {
    border: none;
    padding: 0.5rem;
    border-radius: 10px;
    color: $color-skill-items-darkgrey;
    background-color: $color-news-box-header;
    margin-right: 0.5rem;

    &:focus {
      outline: none;
    }
  }

  &__eMail {
    border: none;
    padding: 0.5rem;
    border-radius: 10px;
    color: $color-skill-items-darkgrey;
    background-color: $color-news-box-header;

    &:hover {
      cursor: pointer;
      color: $color-news-box-header;
      background-color: $color-skill-items-darkgrey;
    }

    &:focus {
      outline: none;
    }
  }
}

// .wp-skill-box {
//   background-color: $color-news-box-header;
// }
</style>
