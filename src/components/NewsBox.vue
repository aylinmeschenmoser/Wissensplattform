<template>
    <div class="wp-news-box">
      <header class="wp-news-box__header wp-news-box-header">
        <h2 class="wp-news-box-header__title">{{ boxTitle }}</h2>
        <a class="wp-news-box-header__add" @click="add">+</a>
      </header>
      <main class="wp-news-box__content wp-news-box-content">
        <input
          class="wp-news-box-content__search"
          placeholder="Infos durchsuchen..."
          v-model="searchTerm" />
        <news-box-entry
          class="wp-news-box-content__entry"
          v-for="(newsItem, index) in visibleNewsItems"
          :key="index"
          :text="newsItem.text"
          :author="newsItem.author"
          :date="newsItem.date" />
      </main>
      <footer class="wp-news-box__footer wp-news-box-footer">
        <button
          class="wp-news-box-footer__load-more"
          v-if="hasMoreEntries"
          @click="loadMoreEntries">
          Mehr laden...
        </button>
      </footer>
      <pop-up-modal
        class="wp-news-box__pop-up-modal wp-news-box-pop-up-modal"
        :is-open="modalIsOpen"
        @close="modalIsOpen =false">
          <template v-slot:content>
            <div class="wp-news-box-pop-up-modal__content wp-news-box-pop-up-modal-content" >
              <h1 class="wp-news-box-pop-up-modal-content__heading">Schnelle Info</h1>
              <textarea
                class="wp-news-box-pop-up-modal-content__entry"
                value="Kurztext schreiben"
                rows="10"
                v-model="userInput"
                @input="countCharacters">
              </textarea>
              <p class="wp-news-box-pop-up-modal-content__characters">{{ userInputLength }} von max. {{ maxInputLength }} Zeichen</p>
              <input
                class="wp-news-box-pop-up-modal-content__submit"
                type="button"
                value="Absenden"
                :disabled="userInputLength === 0"
                @click="saveUserInput">
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
      maxInputLength: 320,
      modalIsOpen: false,
      numberOfVisibleEntries: 4,
      userInput: '',
      userInputLength: 0
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

    countCharacters() {
      console.log('NewsBox::countCharacters()');

      if (this.userInput.length > this.maxInputLength) {
        this.userInput = this.userInput.slice(0, this.maxInputLength);
      }

      this.userInputLength = this.userInput.length;
    },

    loadMoreEntries() {
      console.log('NewsBox::loadMoreEntries()');

      this.numberOfVisibleEntries += 10;
    },

    saveUserInput() {
      console.log('NewsBox::saveUserInput()');

      this.$emit('user-input', this.userInput);
      this.userInput = '';
      this.modalIsOpen = false;
    }
  }
};
</script>

<style lang="scss">
@import '../styles/variables';

$_news-box-header: rgb(240, 240, 241);
$_news-box-add-size: 1.5rem;

//helper blocks
.wp-news-box-header {
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
  }
}

.wp-news-box-content {
  &__entry {
    &:not(:last-of-type) {
      border-bottom: 1px solid grey;
    }
  }

  &__search {
    width: 100%;
    border: 1px solid $color-text;
    border-radius: 10px;
    padding: 0.6rem 1rem;
    margin: 1rem 0;

    &::placeholder {
      color: rgb(184, 184, 184)
    }

    &:focus {
      outline: none;
    }
  }
}

.wp-news-box-footer {
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

.wp-news-box-pop-up-modal-content {
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
    font-family: 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: .5rem;

    &:focus {
      outline:none;
    }
  }

  &__characters {
    font-size: 0.6rem;
  }

  &__submit {
    margin-top: 1rem;
    border-radius: 10px;
    background: $color-text-active;
    color: white;
    padding: 0.5rem .8rem;
    border: 1px solid $color-text-active;
    cursor: pointer;

    &:hover {
      background: white;
      color: $color-text-active;
      border: 1px solid $color-text-active;
    }

    &:focus {
      outline: none;
    }

    &:disabled {
      opacity: .5;
      cursor: default;

      &:hover {
        background: $color-text-active;
        color: white;
      }
    }
  }
}

.wp-news-box {
    background-color: #fff;
    padding: 1rem;
}
</style>
