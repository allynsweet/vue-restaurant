<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 v-for="(img, index) in images" :key="index">
      <v-hover v-slot:default="{ hover }">
        <v-img :src="img" :elevation="hover ? 16 : 2" height="385" />
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "ImageLayoutView",
  props: {
    images: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>