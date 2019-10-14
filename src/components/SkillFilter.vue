<template>
  <div class="wp-skill-filter">
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
        <span @click="toggleFilter(filter)">
          <span class="wp-filter-category__label">{{ filter.category }}</span>
          <i class="wp-filter-category__icon fa-caret-right"></i>
        </span>
        <ul class="wp-filter-category__skills wp-filter-skills"
          :class="{
            'wp-filter-skills--active': !!filter.active
          }">
          <li
            class="wp-filter-skills__item wp-filter-skills-item"
            v-for="skill in filter.skills"
            :key="skill">
            <input type="checkbox" class="wp-filter-skills-item__checkbox">{{ skill }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SkillFilter',

  data() {
    return {
      skillFilters: [{
        active: false,
        category: 'Arbeitstools',
        skills: [
          'Bilddatenbanken',
          'CLM-Portal',
          'CMS',
          'easyJob',
          'Eclipse',
          'InCatalog',
          'Kanbanboard',
          'Konfigurator',
          'MAM',
          'Mellow Colour',
          'One2Edit',
          'Slack',
          'Trello',
          'Wyfiles',
          'XML',
        ]
      }, {
        active: false,
        category: 'Beratung',
        skills: [
          'Kundenberatung',
          'Kundenpräsentation',
          'Schulung / Workshop',
          'strategische Beratung'
        ]
      }, {
        active: false,
        category: 'Bildbearbeitung',
        skills: [
          'CGI',
          'Colormangement',
          'Packaging',
          'Retusche'
        ]
      }, {
        active: false,
        category: 'EDV-Kenntnisse',
        skills: [
          'Adobe Acrobat Pro',
          'Adobe After Effects',
          'Adobe Bridge',
          'Adobe Encore',
          'Adobe Illustrator AI',
          'Adobe InDesign InDD',
          'Adobe Lightroom',
          'Adobe Photoshop',
          'Adobe Premiere Pro',
          'Adobe Suite',
          'CAD',
          'Cheetah',
          'Cinema 4D',
          'Datev',
          'Enfocus PitStop',
          'Excel',
          'Garageband',
          'Joomla',
          'Logic Pro Audio',
          'MAC OS',
          'Outlook',
          'PowerPoint PPT',
          'SAP',
          'Selenium Plugin',
          'Sketch/Book',
          'Takondi',
          'Visio',
          'Word',
        ]
      }, {
        active: false,
        category: 'Fotografie',
        skills: [
          'Allgemein',
          'Food',
          'People',
          'Produkte',
        ]
      }, {
        active: false,
        category: 'Fremdsprachen',
        skills: [
          'Englisch',
          'Französisch',
          'Griechisch',
          'Italienisch',
          'Niederländisch',
          'Russisch',
          'Spanisch',
        ]
      }, {
        active: false,
        category: 'Gestaltung / Datenerstellung',
        skills: [
          'Appdesign',
          'CI-Konform',
          'Druckvorstufe',
          'Film',
          'Layout',
          'Online-Medien',
          'Packaging',
          'Postproduction',
          'RZ/Satz',
          'Scribble',
          'Typografie',
          'Webdesign',
        ]
      }, {
        active: false,
        category: 'Marketing',
        skills: [
          'Marketing allgemein',
          'Onlinemarketing',
          'Personalmarketing',
        ]
      }, {
        active: false,
        category: 'nP Skills',
        skills: [
          'Ausbilder',
          'Ideenfindung/Brainstorming',
          'Konzeption',
          'Lektorat/Korrektorat',
          'Mentoring',
          'NewBusiness',
          'Organisation/Struktur',
          'Schulung/Workshop',
          'Social-Media-Plattformen (Arbeitstools)',
          'Technischer Support',
          'Text/Formulierung/Gestaltung',
          'Unternehmensberatung',
        ]
      }, {
        active: false,
        category: 'nP Tools',
        skills: [
          'Checkflow',
          'Imageflow',
          'Mediaflow',
          'Onlineshop Magento',
          'Orderflow',
          'Statusflow',
        ]
      }, {
        active: false,
        category: 'Produkte nP',
        skills: [
          '[nP]analytics',
          '[nP]connect',
          '[nP]creator',
          '[nP]enriched media',
          '[nP]pocket',
          '[nP]vision',
        ]
      }, {
        active: false,
        category: 'Programmierung',
        skills: [
          'Chili',
          'CMS',
          'CSS',
          'HTML',
          'Javascript',
          'PHP',
          'Wordpress',
        ]
      }, {
        active: false,
        category: 'Projektmanagement',
        skills: [
          'Allgemein',
          'Digitale Medien',
          'Druck-/Werbetechnik',
          'Einkauf',
          'Give-Aways',
          'Logistik',
          'Mailing',
          'Messe & Event',
          'Multichannel-Management',
          'POS/3D-Werbemittel',
          'QMS',
        ]
      }, {
        active: false,
        category: 'Softskills',
        skills: [
          'Einfühlungsvermögen (Personal)',
          'Konfliktmanagement',
          'Meditation',
        ]
      }, {
        active: false,
        category: 'Video',
        skills: [
          'Equipment',
          'Produktion',
          'Schnitt',
        ]
      }]
    };
  },
  methods: {
    toggleFilter(filter) {
      filter.active = !filter.active;
    }
  },
  created() {

  }
};


</script>

<style lang="scss" scoped>
@import '../styles/variables';

.wp-filter-searches {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  &__search {
    height: 2rem;
    border-radius: 10px;
    padding: 0.5rem;
    margin: 1rem 0 0.5rem 0;

    &:focus {
      outline: none;
    }
  }

  &__delete {
    color: $color-text-active;
    text-align: left;
    border: none;
    background-color: white;

  }
}

.wp-filter-category {
  list-style: none;
  margin-bottom: 1rem;

  &__label {
    color: $color-text-active;
    font-weight: 500;
    margin-right: 1rem;
  }

  &__icon {
    color: $color-text-active;
  }
}

.wp-filter-skills {
  margin-top: 0.5rem;
  list-style: none;
  font-size: 0.8rem;
}

.wp-filter-skills-item {
  &__checkbox {
    margin-right: 0.5rem;
  }
}

.wp-skill-filter {
  background-color: white;
  padding: 1rem;
}
</style>
