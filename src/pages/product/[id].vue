<template>
  <v-container width="70%">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">{{ product.name }}</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12" md="6">
        <v-img :src="product.image" width="100%" height="500px" style="object-fit: cover"></v-img>
      </v-col>
      <v-col cols="12" md="6" class="text-center">
        <h3 style="font-size: 30px">{{ $t('product.introduce') }}</h3>
        <p class="ma-10">{{ product.description }}</p>
        <p style="margin-bottom: 10px">
          {{ $t('productCategory.' + product.category) }}
        </p>
        <v-form :disabled="isSubmitting" @submit.prevent="submit">
          <v-text-field
            v-model.number="quantity.value.value"
            type="number"
            :error-messages="quantity.errorMessage.value"
          ></v-text-field>
          <p style="font-size: 20px" class="ma-3">{{ '$' + product.price }}</p>

          <v-btn
            type="submit"
            prepend-icon="mdi-cart"
            :loading="isSubmitting"
            style="border: 1px solid aqua; border-radius: 30px; width: 40%"
            >{{ $t('product.addCart') }}</v-btn
          >
        </v-form>
      </v-col>
    </v-row>
  </v-container>
  <v-container width="70%">
    <h2 class="text-center my-5">{{ $t('product.maybe') }}</h2>
    <v-row>
      <v-col v-for="item in recommendedProducts" :key="item._id" cols="12" md="3" lg="3">
        <product-card v-bind="item"></product-card>
      </v-col>
    </v-row>
  </v-container>

  <v-overlay
    :model-value="!product.sell"
    class="align-center justify-center"
    scrim="black"
    opacity="0.8"
    persistent
  >
    <h1 class="text-center">{{ $t('api.productNotOnSell') }}</h1>
  </v-overlay>
</template>

<script setup>
import { ref } from 'vue'
import { useAxios } from '@/composables/axios'
import { useRoute, useRouter } from 'vue-router'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/stores/user'
import { useSnackbar } from 'vuetify-use-dialog'

const { api, apiAuth } = useAxios()
const route = useRoute()
const router = useRouter()
const { t } = useI18n()
const user = useUserStore()
const createSnackbar = useSnackbar()

const product = ref({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  category: '',
})

const getProduct = async () => {
  try {
    const { data } = await api.get('/product/' + route.params.id)
    product.value = data.result
    document.title = product.value.name + ' | 購物網站'
  } catch (error) {
    console.log(error)
    router.push('/')
  }
}
getProduct()

const schema = yup.object({
  quantity: yup
    .number()
    .typeError(t('product.addCartQuantityInvalid'))
    .required(t('product.addCartQuantityInvalid'))
    .positive(t('product.addCartQuantityInvalid'))
    .integer(t('product.addCartQuantityInvalid')),
})
const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema,
  initialValues: {
    quantity: 1,
  },
})
const quantity = useField('quantity')

const submit = handleSubmit(async (values) => {
  if (!user.isLoggedIn) {
    router.push('/login')
    return
  }
  try {
    const { data } = await apiAuth.patch('/user/cart', {
      product: product.value._id,
      quantity: values.quantity,
    })
    user.cart = data.result
    createSnackbar({
      text: t('product.addCartSuccess'),
      snackbarProps: {
        color: 'green',
      },
    })
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: t('api.' + (error?.response?.data?.message || 'unknownError')),
      snackbarProps: {
        color: 'red',
      },
    })
  }
})

const recommendedProducts = ref([])

const getRecommendedProducts = async () => {
  try {
    const { data } = await api.get('/product')
    recommendedProducts.value = data.result
      .filter((item) => item._id !== product.value._id) // 過濾掉當前商品
      .slice(0, 4) // 取前 4 筆作為推薦
  } catch (error) {
    console.log(error)
  }
}

getRecommendedProducts()
</script>

<route lang="yaml">
meta:
  title: 'nav.product'
</route>
