<template>
    <div class="wp-blog-box">
      <header class="wp-blog-box__header wp-blog-box-header">
        <h2 class="wp-blog-box-header__title">{{ boxTitle }}</h2>
        <a class="wp-blog-box-header__add" @click="add">+</a>
      </header>
      <main class="wp-blog-box__content wp-blog-box-content">
        <h3 class="wp-blog-box-content__title">Titel des Blogeintrages</h3>
        <news-box-entry class="wp-blog-box-content__entry"/>
      </main>
      <footer class="wp-blog-box__footer wp-blog-box-footer">
        <button
          class="wp-blog-box-footer__load-more"
          v-if="hasMoreEntries"
          @click="loadMoreEntries">
          Mehr laden...
        </button>
      </footer>
      <pop-up-modal
        class="wp-blog-box__pop-up-modal wp-blog-box-pop-up-modal"
        :is-open="modalIsOpen"
        @close="modalIsOpen =false">
          <template v-slot:content>
            <div class="wp-blog-box-pop-up-modal__content wp-blog-box-pop-up-modal-content" >
              <h1 class="wp-blog-box-pop-up-modal-content__heading">Schnelle Info</h1>
              <textarea
                class="wp-blog-box-pop-up-modal-content__entry"
                value="Kurztext schreiben"
                id="text"
                cols="40"
                rows="10">
                </textarea>
              <p class="wp-blog-box-pop-up-modal-content__sign">0 von max. 320 Zeichen</p>
              <input
                class="wp-blog-box-pop-up-modal-content__submit"
                type="submit"
                value="Absenden">
              <!-- hier kann man Komponenten fürs Popup anlege, wie divs, etc. -->
            </div>
          </template>
      </pop-up-modal>
    </div>
</template>

<script>
import NewsBoxEntry from './NewsBoxEntry.vue';
import PopUpModal from './PopUpModal.vue';

export default {
  name: 'NewsBox',
  components: {
    NewsBoxEntry,
    PopUpModal
  },

  props: {
    newsItems: Array,
    boxTitle: String
  },

  data() {
    return {
      searchTerm: '',
      modalIsOpen: false,
      numberOfVisibleEntries: 4,
    };
  },

  computed: {
    filteredNewsItems() {
      if (!this.newsItems) {
        return [];
      }
      return this.newsItems.filter((newsItem) => {
        if (newsItem.text.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      });
    },

    visibleNewsItems() {
      return this.filteredNewsItems.slice(0, this.numberOfVisibleEntries);
    },

    hasMoreEntries() {
      return this.numberOfVisibleEntries <= this.filteredNewsItems.length;
    },
  },

  created() {
    console.log('NewsBox::created()', this.newsItems);
  },

  methods: {
    add() {
      console.log('NewsBox::add()');

      this.modalIsOpen = true;
    },

    loadMoreEntries() {
      this.numberOfVisibleEntries += 10;
      console.log('Mehr Einträge wurden geladen');
    },
  }
};
</script>

<style lang="scss">
@import '../styles/variables';

$_news-box-header: rgb(240, 240, 241);
$_news-box-add-size: 1rem;

//helper blocks
.wp-blog-box-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $color-text-active;
  font-weight: inherit;

  &__title {
    font-weight: 400;
  }

  &__add {
    display: block;
    border-radius: 50%;
    height: $_news-box-add-size;
    width: $_news-box-add-size;
    background-color: $color-text-active;
    color: white;
    text-align: center;
    line-height: .8rem;
  }
}

.wp-blog-box-content {
  &__entry {
    &:not(:last-of-type) {
      border-bottom: 1px solid grey;
    }
  }

  &__title {
    margin: 1rem 0;
    color: $color-box-content-title;
    font-size: 1rem;

    &::placeholder {
      color: rgb(184, 184, 184)
    }

    &:focus {
      outline: none;
    }
  }
}

.wp-blog-box-footer {
  display: flex;
  justify-content: center;

  &__load-more {
    padding: 0.4rem;
    border-radius: 10px;
    margin-top: 1rem;
    background: none;
    border: none;
    background-color: $color-text-active;
    color: white;
    font-size: 0.85rem;

    &:focus {
      outline:none;
    }

    @media screen and (min-width: $breakpoint-tablet) {
      display: none;
    }
  }
}

.wp-blog-box-pop-up-modal-content {
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;

  @media screen and (min-width: $breakpoint-tablet) {
    margin-left: 2rem;
    margin-right: 2rem;
  }

  &__heading {
    color: $color-text;
  }

  &__entry {
    width: 100%;
    background-color: $color-news-box-header;
    resize: none;
    margin-top: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    &:focus {
      outline:none;
    }
  }

  &__sign {
    font-size: 0.6rem;
  }

  &__submit {
    margin-top: 1rem;
    border-radius: 10px;
    background: $color-text-active;
    color: white;
    padding: 0.2rem;
    border: 1px solid $color-text-active;

    &:hover {
      cursor: pointer;
      background: white;
      color: $color-text-active;
      border: 1px solid $color-text-active;

    }

    &:focus {
      outline:none;
    }
  }
}

.wp-blog-box {
    background-color: #fff;
    padding: 1rem;
}
</style>
