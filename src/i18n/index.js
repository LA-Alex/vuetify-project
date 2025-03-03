import { createI18n } from 'vue-i18n'
import zhHant from './zhHant'
import en from './en'
import jp from './jp'
import ko from './ko'
import fr from './fr'
import ar from './ar'

const i18n = createI18n({
  locale: 'zhHant',
  fallback: 'zhHant',
  legacy: false,
  messages: {
    zhHant,
    en,
    jp,
    ko,
    fr,
    ar,
  },
})

export default i18n
