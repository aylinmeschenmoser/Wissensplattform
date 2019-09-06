<template>
    <div class="wp-skill-box">
      <main class="wp-skill-box__content wp-skill-box-content">
        <div class="wp-skill-box-content__filter wp-filter">
          <div class="wp-filter__searches wp-filter-searches">
            <input
              class="wp-filter-searches__search"
              placeholder="Suchen"
              v-model="searchTerm" />
            <button class="wp-filter-searches__delete">Filter löschen</button>
          </div>
          <ul class="wp-filters">
            <span @click="showFilters" class="wp-filters__label wp-filters-label">
              <span>Arbeitstools</span>
              <i class="wp-filters-label__fas fa-caret-right"></i>
            </span>
            <ul class="wp-filters__categories wp-filters-categories">
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Bilddatenbanken</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">CLM-Portal</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">CMS</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">easyJob</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Eclipse</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">InCatalog</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">KanbanBoard</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Konfigurator</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">MAM</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Mellow Colour</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">One2Edit</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Slack</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Trello</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Wyfiles</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">XML</li>
            </ul>
            <span class="wp-filters__label wp-filters-label">
              <span>Bildbearbeitung</span>
              <i class="wp-filters-label__fas fa-caret-right"></i>
            </span>
            <ul class="wp-filters__categories wp-filters-categories">
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">CGI</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Colormanagement</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Packaging</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Retuche</li>
            </ul>
            <span class="wp-filters__label wp-filters-label">
              <span>Beratung</span>
              <i class="wp-filters-label__fas fa-caret-right"></i>
            </span>
            <ul class="wp-filters__categories wp-filters-categories">
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Kundenberatung</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Kundenpräsentation</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Schulung / Workshop</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">strategische Beratung</li>
            </ul>
            <span class="wp-filters__label wp-filters-label">
              <span>EDV-Kenntnisse</span>
              <i class="wp-filters-label__fas fa-caret-right"></i>
            </span>
            <ul class="wp-filters__categories wp-filters-categories">
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Asobe (Allgemein)</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">CAD</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Cheetah</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Cinema 4D</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Datev</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Enfocus PitStop</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Excel</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Joomla</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Logic Pro Audio</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Mac OS</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Outlook</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">PowerPoint</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">SAP</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Selenium Plugin</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Sketch / Book</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Takondi</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Visio</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Word</li>
            </ul>
            <span class="wp-filters__label wp-filters-label">
              <span>Fotografie</span>
              <i class="wp-filters-label__fas fa-caret-right"></i>
            </span>
            <ul class="wp-filters__categories wp-filters-categories">
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Allgemein</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Food</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">People</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Produkte</li>
            </ul>
            <span class="wp-filters__label wp-filters-label">
              <span>Fremdsprachen</span>
              <i class="wp-filters-label__fas fa-caret-right"></i>
            </span>
            <ul class="wp-filters__categories wp-filters-categories">
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Englisch</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Französisch</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Griechisch</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Italienisch</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Niederländisch</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Russisch</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Spanisch</li>
            </ul>
            <span class="wp-filters__label wp-filters-label">
              <span>Gestaltung / Datenerstellung</span>
              <i class="wp-filters-label__fas fa-caret-right"></i>
            </span>
            <ul class="wp-filters__categories wp-filters-categories">
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">App-Design</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">CI-Konformität</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Druckvorstufe</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Film</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Layout</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Online-Medien</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Packaging</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Postproduction</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Reinzeichnung / Satz</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Scribble</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Typografie</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Webdesign</li>
            </ul>
            <span class="wp-filters__label wp-filters-label">
              <span>Marketing</span>
              <i class="wp-filters-label__fas fa-caret-right"></i>
            </span>
            <ul class="wp-filters__categories wp-filters-categories">
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Marketing allgemein</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Onlinemarketing</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Personalmarketing</li>
            </ul>
            <span class="wp-filters__label wp-filters-label">
              <span>nP Skills</span>
              <i class="wp-filters-label__fas fa-caret-right"></i>
            </span>
            <ul class="wp-filters__categories wp-filters-categories">
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Brainstorming / Ideenfinder</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Ausbilder</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Konzeption</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Korrektorat / Lektorat</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Mentoring</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">NewBusiness</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Organisation / Struktur</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Schulung / Workshop</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Social-Media-Plattformen</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Technischer Support</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Text / Formulierung / Gestaltung</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Unternehmensberatung</li>
            </ul>
            <span class="wp-filters__label wp-filters-label">
              <span>nP Tools</span>
              <i class="wp-filters-label__fas fa-caret-right"></i>
            </span>
            <ul class="wp-filters__categories wp-filters-categories">
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Checkflow</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Imageflow</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Mediaflow</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Onlineshop Magento</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Orderflow</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Statusflow</li>
            </ul>
            <span class="wp-filters__label wp-filters-label">
              <span>Produkte nP</span>
              <i class="wp-filters-label__fas fa-caret-right"></i>
            </span>
            <ul class="wp-filters__categories wp-filters-categories">
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">[nP]analytics</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">[nP]connect</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">[nP]creator</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">[nP]enriched media</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">[nP]pocket</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">[nP]vision</li>
            </ul>
            <span class="wp-filters__label wp-filters-label">
              <span>Programmierung</span>
              <i class="wp-filters-label__fas fa-caret-right"></i>
            </span>
            <ul class="wp-filters__categories wp-filters-categories">
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Chili</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">CMS</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">CSS</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">HTML</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">JavaScript</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">PHP</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Wordpress</li>
            </ul>
            <span class="wp-filters__label wp-filters-label">
              <span>Projektmanagement</span>
              <i class="wp-filters-label__fas fa-caret-right"></i>
            </span>
            <ul class="wp-filters__categories wp-filters-categories">
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Allgemein</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Digitale Medien</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Druck- / Werbetechnik</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Einkauf</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Give-Aways</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Logistik</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Mailing</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Messe & Event</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Multichanelmangement</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">POS / 3D-Werbemittel</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">QMS</li>
            </ul>
            <span class="wp-filters__label wp-filters-label">
              <span>Softskills</span>
              <i class="wp-filters-label__fas fa-caret-right"></i>
            </span>
            <ul class="wp-filters__categories wp-filters-categories">
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Einfühlsvermögen (Personal)</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Konfliktmanagement</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Meditation</li>
            </ul>
            <span class="wp-filters__label wp-filters-label">
              <span>Video</span>
              <i class="wp-filters-label__fas fa-caret-right"></i>
            </span>
            <ul class="wp-filters__categories wp-filters-categories">
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Equipment</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Produktion</li>
              <li class="wp-filters-categories__item wp-filters-categories-item">
                <input type="checkbox" class="wp-filters-categories-item__checkbox">Schnitt</li>
            </ul>
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
    };
  },

  methods: {
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
