<template>
  <v-img
    class="w-100"
    :src="backgroundImg"
    max-height="550"
    :min-height="$vuetify.breakpoint.smAndDown ? 550 : 0"
  >
    <v-overlay absolute :opacity="0.7">
      <v-layout row wrap>
        <v-flex xs12 class="mx-auto">
          <h1 class="text-uppercase text-center brand-title px-2">{{ title }}</h1>
          <p class="text-center description-text px-2">{{ description }}</p>
        </v-flex>
        <v-flex xs12 class="text-center">
          <slot />
        </v-flex>
      </v-layout>
    </v-overlay>
  </v-img>
</template>

<script>
export default {
  props: {
    backgroundImg: {
      default() {
        return require("@/assets/1.png");
      }
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less" scoped>
.description-text {
  font-size: 1.45rem;
}
.brand-title {
  font-size: 2.6rem;
}
</style>