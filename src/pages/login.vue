<template>
  <v-container class="d-flex align-center justify-center" style="min-height: 100vh">
    <div class="container" :class="{ active: isActive }">
      <!-- Sign Up Form -->
      <div class="form-container sign-up">
        <form :disabled="isSubmitting" @submit.prevent="submitUser">
          <h1>{{ $t('register.submit') }}</h1>

          <span>{{ $t('register.text') }}</span>
          <input
            type="text"
            :placeholder="$t('login.account')"
            :error-message="accountUser.errorMessage.value"
            v-model="accountUser.value.value"
            minlength="4"
            maxlength="20"
          />
          <input
            type="email"
            :placeholder="$t('user.email')"
            v-model="emailUser.value.value"
            :error-message="emailUser.errorMessage.value"
          />

          <input
            type="password"
            :placeholder="$t('login.password')"
            :error-message="passwordUser.errorMessage.value"
            v-model="passwordUser.value.value"
            minlength="4"
            maxlength="20"
            counter
          />
          <input
            v-model="passwordConfirm.value.value"
            type="password"
            :error-messages="passwordConfirm.errorMessage.value"
            :placeholder="$t('user.passwordConfirm')"
            minlength="4"
            maxlength="20"
            counter
          />
          <button :loading="isSubmitting" type="submitUser">{{ $t('register.submit') }}</button>
        </form>
      </div>

      <!-- Sign In Form -->
      <div class="form-container sign-in">
        <form :disabled="isSubmitting" @submit.prevent="submit">
          <h1>{{ $t('nav.login') }}</h1>
          <span>{{ $t('login.login') }}</span>
          <input
            :placeholder="$t('login.account')"
            v-model="account.value.value"
            :error-messages="account.errorMessage.value"
            minlength="4"
            maxlength="20"
            counter
          />

          <input
            :placeholder="$t('login.password')"
            v-model="password.value.value"
            type="password"
            :error-messages="password.errorMessage.value"
            minlength="4"
            maxlength="20"
            counter
          />
          <div class="text-center">
            <button :loading="isSubmitting" type="submit" color="primary">
              {{ $t('nav.login') }}
            </button>
          </div>
        </form>
      </div>

      <!-- Toggle Panels -->
      <div class="toggle-container">
        <div class="toggle">
          <div class="toggle-panel toggle-left">
            <h1>{{ $t('login.welcome') }}<br />{{ $t('login.to') }}</h1>
            <p>{{ $t('login.ID') }}</p>
            <button @click="toggleForm" class="hidden">{{ $t('nav.login') }}</button>
          </div>
          <div class="toggle-panel toggle-right">
            <h1>{{ $t('register.Hi') }}</h1>
            <p>{{ $t('register.ext') }}</p>
            <button @click="toggleForm" class="hidden">{{ $t('register.submit') }}</button>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import validator from 'validator'
import { useI18n } from 'vue-i18n'
import { useAxios } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const isActive = ref(false)
const { t } = useI18n()
const { api } = useAxios()
const createSnackbar = useSnackbar()
const router = useRouter()
const user = useUserStore()

const toggleForm = () => {
  isActive.value = !isActive.value
}

// 登入表單驗證
const schema = yup.object({
  account: yup
    .string()
    .required(t('api.userAccountRequired'))
    .min(4, t('api.userAccountTooShort'))
    .max(20, t('api.userAccountTooLong'))
    .test('isAlphanumeric', t('api.userAccountInvalid'), (value) =>
      validator.isAlphanumeric(value),
    ),
  password: yup
    .string()
    .required(t('api.userPasswordRequired'))
    .min(4, t('api.userPasswordTooShort'))
    .max(20, t('api.userPasswordTooLong')),
})

// 註冊表單驗證
const schemaUser = yup.object({
  accountUser: yup
    .string()
    .required(t('api.userAccountRequired'))
    .min(4, t('api.userAccountTooShort'))
    .max(20, t('api.userAccountTooLong'))
    .test('isAlphanumeric', t('api.userAccountInvalid'), (value) =>
      validator.isAlphanumeric(value),
    ),
  emailUser: yup
    .string()
    .required(t('api.userEmailRequired'))
    .test('isEmail', t('api.userEmailInvalid'), (value) => validator.isEmail(value)),
  passwordUser: yup
    .string()
    .required(t('api.userPasswordRequired'))
    .min(4, t('api.userPasswordTooShort'))
    .max(20, t('api.userPasswordTooLong')),
  passwordConfirm: yup.string().oneOf([yup.ref('passwordUser')], t('api.userPasswordNotMatch')),
})

// **登入表單**
const { handleSubmit: handleLoginSubmit, isSubmitting } = useForm({ validationSchema: schema })
const account = useField('account')
const password = useField('password')

// **註冊表單**
const { handleSubmit: handleRegisterSubmit, isSubmitting: isRegistering } = useForm({
  validationSchema: schemaUser,
})
const accountUser = useField('accountUser')
const emailUser = useField('emailUser')
const passwordUser = useField('passwordUser')
const passwordConfirm = useField('passwordConfirm')

// 登入提交
const submit = handleLoginSubmit(async (values) => {
  try {
    const { data } = await api.post('/user/login', {
      account: values.account,
      password: values.password,
    })
    user.login(data.result)
    createSnackbar({ text: t('login.success'), snackbarProps: { color: 'green' } })
    router.push('/')
  } catch (error) {
    createSnackbar({
      text: t('api.' + (error?.response?.data?.message || 'unknownError')),
      snackbarProps: { color: 'red' },
    })
  }
})

// 註冊提交
const submitUser = handleRegisterSubmit(async (values) => {
  try {
    await api.post('/user', {
      account: values.accountUser,
      email: values.emailUser,
      password: values.passwordUser,
    })
    createSnackbar({ text: t('register.success'), snackbarProps: { color: 'green' } })
    router.push('/login')
  } catch (error) {
    createSnackbar({
      text: t('api.' + (error?.response?.data?.message || 'unknownError')),
      snackbarProps: { color: 'red' },
    })
  }
  console.log(11111)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
.container {
  background-color: #cccc99;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(7, 7, 7, 0.35);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}
h1 {
  color: rgb(201, 172, 6);
}
.container p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin: 20px 0;
}

.container span {
  font-size: 12px;
}

.container a {
  color: #333;
  font-size: 13px;
  text-decoration: none;
  margin: 15px 0 10px;
}

.container button {
  background-color: #003366;
  color: #fff;
  font-size: 12px;
  padding: 10px 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;
}

.container button.hidden {
  background-color: transparent;
  border-color: #fff;
}

.container form {
  background-color: #cccc99;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  height: 100%;
}

.container input {
  background-color: #eee;
  border: none;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 13px;
  border-radius: 8px;
  width: 100%;
  outline: none;
  color: #333;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in {
  left: 0;
  width: 50%;
  z-index: 2;
}

.container.active .sign-in {
  transform: translateX(100%);
}

.sign-up {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.active .sign-up {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: move 0.6s;
}

@keyframes move {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.social-icons {
  margin: 20px 0;
}

.social-icons a {
  border: 1px solid #ccc;
  border-radius: 20%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 3px;
  width: 40px;
  height: 40px;
}

.toggle-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 20px;
  z-index: 1000;
}

.container.active .toggle-container {
  transform: translateX(-100%);
  border-radius: 20px;
}

.toggle {
  background-color: #003366;
  height: 100%;
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.container.active .toggle {
  transform: translateX(50%);
}

.toggle-panel {
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.toggle-left {
  transform: translateX(-200%);
}

.container.active .toggle-left {
  transform: translateX(0);
}

.toggle-right {
  right: 0;
  transform: translateX(0);
}
</style>
<route lang="yaml">
meta:
  title: 'nav.login'
</route>
