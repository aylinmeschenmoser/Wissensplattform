<template>
  <div class="wp-news">
    <div class="wp-news__contrainer wp-news-container">
      <news-box
        box-title="Schnelle Info"
        :news-items="quickNews"
        class="wp-news-container__item"
        @user-input="saveUserInput"
        />
      <blog-box box-title="Blog" class="wp-news-container__item"/>
      <news-box box-title="Neustes Wissen" class="wp-news-container__item"/>
      <news-box box-title="HUB" class="wp-news-container__item"/>
      <news-box box-title="Facebook" class="wp-news-container__item"/>
      <news-box box-title="Newsfeed (extern)" class="wp-news-container__item"/>
    </div>
  </div>
</template>

<script>
import NewsBox from '../components/NewsBox.vue';
import BlogBox from '../components/BlogBox.vue';

export default {
  name: 'wp-news',

  components: {
    NewsBox,
    BlogBox
  },

  methods: {
    saveUserInput(userInput) {
      console.log('News::saveUserInput()', userInput);
      this.quickNews.unshift({
        text: userInput,
        author: 'Aylin',
        date: '27.08.2019'
      });
    }
  },

  data() {
    return {
      quickNews: [{
        text: 'Team-Einladung PE News Feed Zoom (Berlin/Stgt). Hallo liebe PE’ler.Wie vorhin im Zoom angekündigt habe ich nun alle zu Team eingeladen. Ich hoffe, dass ich keinen vergessen habe. Falls doch, bitte kurz Bescheid geben. Dann füge ich euch noch hinzu. 🙂 Das Trelloboard werden wir dann schließen.Liebe Grüße Nadine',
        author: 'Nadine Bierbaum',
        date: '26. August 2019',
      }, {
        text: '++ News Personal ++ Eine junge Schülerin - Louisa Kulle - macht diese Woche in Stuttgart ein Praktikum um den Beruf des Mediengestalters kennen zu lernen.',
        author: 'Margit Zehner',
        date: '26. August 2019',
      }, {
        text: 'Poster für Augen, Ohren, Finger:',
        author: 'Claudia Fritz',
        date: '22. August 2019',
      }, {
        text: 'PE News Feed Zoom (Berlin/Stuttgart) 26.08.2019 Liebe PE-ler, am Montag findet wieder unser großer PE Austausch statt. Stellt gerne noch fleißig Karten ins Trelloboard rein, damit wir wieder einen regen Austausch über diese Plattform haben. 🙂',
        author: 'Nadine Bierbaum',
        date: '22. August 2019',
      }, {
        text: 'Sascha ist doof',
        author: 'Aylin Meschenmoser',
        date: '02. Jul 2019',
      }, {
        text: 'Hallo Welt',
        author: 'Sascha Gros',
        date: '12. Aug 2019',
      }, {
        text: 'Sascha ist doof',
        author: 'Aylin Meschenmoser',
        date: '02. Jul 2019',
      }, {
        text: 'Hallo Welt',
        author: 'Sascha Gros',
        date: '12. Aug 2019',
      }, {
        text: 'Sascha ist doof',
        author: 'Aylin Meschenmoser',
        date: '02. Jul 2019',
      }, {
        text: 'Hallo Welt',
        author: 'Sascha Gros',
        date: '12. Aug 2019',
      }, {
        text: 'Sascha ist doof',
        author: 'Aylin Meschenmoser',
        date: '02. Jul 2019',
      }, {
        text: 'Hallo Welt',
        author: 'Sascha Gros',
        date: '12. Aug 2019',
      }, {
        text: 'Sascha ist doof',
        author: 'Aylin Meschenmoser',
        date: '02. Jul 2019',
      }, {
        text: 'Hallo Welt',
        author: 'Sascha Gros',
        date: '12. Aug 2019',
      }, {
        text: 'Sascha ist doof',
        author: 'Aylin Meschenmoser',
        date: '02. Jul 2019',
      }, {
        text: 'Hallo Welt',
        author: 'Sascha Gros',
        date: '12. Aug 2019',
      }, {
        text: 'Sascha ist doof',
        author: 'Aylin Meschenmoser',
        date: '02. Jul 2019',
      }, {
        text: 'Hallo Welt',
        author: 'Sascha Gros',
        date: '12. Aug 2019',
      }, {
        text: 'Sascha ist doof',
        author: 'Aylin Meschenmoser',
        date: '02. Jul 2019',
      }, {
        text: 'Hallo Welt',
        author: 'Sascha Gros',
        date: '12. Aug 2019',
      }, {
        text: 'Sascha ist doof',
        author: 'Aylin Meschenmoser',
        date: '02. Jul 2019',
      }, {
        text: 'Hallo Welt',
        author: 'Sascha Gros',
        date: '12. Aug 2019',
      }, {
        text: 'Sascha ist doof',
        author: 'Aylin Meschenmoser',
        date: '02. Jul 2019',
      }, {
        text: 'Hallo Welt',
        author: 'Sascha Gros',
        date: '12. Aug 2019',
      }, {
        text: 'Sascha ist doof',
        author: 'Aylin Meschenmoser',
        date: '02. Jul 2019',
      }, {
        text: 'Hallo Welt',
        author: 'Sascha Gros',
        date: '12. Aug 2019',
      }, {
        text: 'Sascha ist doof',
        author: 'Aylin Meschenmoser',
        date: '02. Jul 2019',
      }, {
        text: 'Hallo Welt',
        author: 'Sascha Gros',
        date: '12. Aug 2019',
      }, {
        text: 'Sascha ist doof',
        author: 'Aylin Meschenmoser',
        date: '02. Jul 2019',
      }]
    };
  },

  created() {
    console.log('wp-news::created()');
  }
};
</script>

<style lang="scss">
@import '../styles/variables';

.wp-news-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: $breakpoint-desktop) {
    margin-left: 10rem;
    margin-right: 10rem;
    }

  &__item {
    flex: 1 1 100%;
    margin-bottom: 1rem;
    min-height: 30vh;

    &:not(:first-of-type) {
      display: none;
    }

    @media screen and (min-width: $breakpoint-mobile) {
      flex: 0 1 49%;

      &:not(:first-of-type) {
      display: block;
      }
    }

    @media screen and (min-width: $breakpoint-tablet) {
      flex: 0 1 32%;
    }
  }
}
</style>
