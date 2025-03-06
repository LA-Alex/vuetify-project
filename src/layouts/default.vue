<template>
  <v-row>
    <v-col cols="2">
      <v-app-bar class="bar">
        <v-container class="d-flex">
          <v-btn to="/" :active="false">
            <v-icon class="mr-5" size="30px"> mdi-moon-waxing-crescent</v-icon>
          </v-btn>

          <v-spacer />

          <v-btn v-if="user.isLoggedIn" prepend-icon="mdi-account-arrow-right" @click="logout">{{
            $t('nav.logout')
          }}</v-btn>
          <v-btn to="/login" v-if="!user.isLoggedIn">
            {{ $t('nav.login') }}
          </v-btn>
          <v-menu>
            <template #activator="{ props }">
              <v-btn v-bind="props">
                <v-icon icon="mdi-translate"></v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="lang in langs"
                :key="lang.value"
                @click="$i18n.locale = lang.value"
              >
                {{ lang.text }}
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn icon @mouseover="drawer = true" @mouseleave="closeDrawerAfterDelay">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </v-container>
      </v-app-bar>
    </v-col>
  </v-row>

  <v-navigation-drawer v-model="drawer" app temporary location="right">
    <v-list>
      <v-list-item v-for="nav in navs" :key="nav.to">
        <v-list-item-content>
          <v-btn
            v-if="nav.show"
            :to="nav.to"
            :prepend-icon="nav.icon"
            color="rgb(201, 172, 6)"
            style="display: flex"
          >
            {{ nav.text }}
            <v-badge v-if="nav.to === '/cart'" :content="user.cart" floating color="red"></v-badge>
          </v-btn>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-main class="main">
    <router-view></router-view>
  </v-main>

  <a
    href="https://www.instagram.com/fantastic_ie2?igsh=aWFzamptamRxc3lz"
    target="_blank"
    ref="draggableImage"
    id="draggable-image"
  >
    <img src="../assets/LIght Tarot (1).png" alt="aceofcups.jpeg" width="150px" class="light" />
  </a>

  <v-footer class="footer">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        class="mx-2 btn"
        color="white"
        rounded="xl"
        variant="text"
        :href="link.href"
      >
        {{ link.name }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>光芒塔羅擁有</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/stores/user'
import { useAxios } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const user = useUserStore()
const { apiAuth } = useAxios()
const createSnackbar = useSnackbar()
const router = useRouter()

// 控制側邊抽屜
const drawer = ref(false)

// 導覽列項目
const navs = computed(() => {
  return [
    { to: '/tarot', icon: 'mdi-store', text: t('nav.shop'), show: true },

    { to: '/cart', icon: 'mdi-cart', text: t('nav.cart'), show: user.isLoggedIn },

    {
      to: '/save',
      icon: 'mdi-star',
      text: t('nav.save'),
      show: user.isLoggedIn,
    },
    { to: '/admin', text: t('nav.admin'), icon: 'mdi-cog', show: user.isLoggedIn && user.isAdmin },
  ]
})

const links = computed(() => {
  return [
    { name: 'Home', href: '/vuetify-project/' },

    { name: 'Instagram', href: 'https://www.instagram.com/fantastic_ie2?igsh=aWFzamptamRxc3lz' },
  ]
})

const langs = [
  { text: '繁體中文', value: 'zhHant' },
  { text: 'English', value: 'en' },
  { text: '日本語', value: 'jp' },
  { text: '한국어', value: 'ko' },
  { text: 'Bonjour ', value: 'fr' },
  { text: 'ٱلسَّلَامُ عَلَيْكُم ', value: 'ar' },
]

const logout = async () => {
  try {
    await apiAuth.delete('/user/logout')
  } catch (error) {
    console.log(error)
  }
  user.logout()
  createSnackbar({
    text: t('logout.success'),
    snackbarProps: {
      color: 'green',
    },
  })
  router.push('/')
}
</script>

<style scoped>
.light {
  position: fixed;
  top: 180px;
  right: 0;
}
.footer {
  position: relative;
  bottom: 0;
}
.main {
  background-color: rgb(7, 7, 7);
}
.bar {
  background-color: #050505;
  color: rgb(201, 172, 6);
}
@media (max-width: 600px) {
  .footer {
    margin-top: 100px;
  }
  .btn {
    font-size: 14px;
    padding: 12px 20px;
    width: 100%;
    height: 50px;
    background-color: #d89e31;
    margin: 10px;
  }
  .light {
    display: none;
  }
  .bar {
    font-size: 12px;
  }
}
</style>
