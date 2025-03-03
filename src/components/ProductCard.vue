<template>
  <router-link :to="'/product/' + _id" style="color: white; text-decoration: none">
    <v-card style="text-align: center">
      <v-img :src="image" height="300px" cover></v-img>
      <v-card-title>
        {{ name }}
      </v-card-title>
      <div style="height: 110px">
        <v-card-subtitle>{{ $t('productCategory.' + category) }}</v-card-subtitle>
        <v-card-subtitle style="font-size: 20px; color: aqua">{{ '$' + price }}</v-card-subtitle>
        <v-btn
          type="submit"
          prepend-icon="mdi-cart"
          :loading="isSubmitting"
          height="45px"
          style="border: 1px solid aqua; border-radius: 30px"
          >{{ $t('product.addCart') }}
        </v-btn>
      </div>
    </v-card>
  </router-link>
</template>

<script setup>
defineProps({
  // eslint-disable-next-line vue/prop-name-casing
  _id: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  price: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  category: {
    type: String,
    default: '',
  },
})
</script>
