<template>
  <v-card
    :class="$vuetify.breakpoint.mdAndUp ? 'mr-6' : ''"
    elevation="7"
    :style="$vuetify.breakpoint.mdAndUp ? 'min-height: 100vh;' : ''"
  >
    <v-img
      style="width: auto;"
      class="text-center mx-auto"
      max-width="350px"
      :src="BRAND_DETAILS.BRAND_LOGO"
    />
    <h2 class="text-center mb-10">{{ BRAND_DETAILS.BRAND_SHORT_DESC}}</h2>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm3 class="text-center">
        <v-btn
          class="px-7 mx-auto py-5 mt-3 font-weight-black action-btn"
          :color="BRAND_DETAILS.BRAND_COLOR"
          dark
          :href="BRAND_DETAILS.MENU_PATH"
        >View Menu</v-btn>
      </v-flex>
      <v-flex xs12 sm3 class="text-center">
        <v-btn
          class="px-7 py-5 mt-3 mx-auto font-weight-black action-btn"
          :color="BRAND_DETAILS.BRAND_COLOR"
          dark
          :href="`tel:${BRAND_DETAILS.PHONE_NUMBER}`"
        >Call</v-btn>
      </v-flex>
      <v-flex xs12 sm3 class="text-center">
        <v-btn
          class="px-7 mx-auto mt-3 py-5 font-weight-black action-btn"
          :color="BRAND_DETAILS.BRAND_COLOR"
          dark
          target="_blank"
          :href="BRAND_DETAILS.GOOGLE_ADDRESS"
        >Directions</v-btn>
      </v-flex>

      <v-flex xs12 sm6>
        <h3 class="title-text mt-10 mx-5 text-center">CONTACT</h3>
        <a style="text-decoration: none; color: black;" :href="`tel:${BRAND_DETAILS.PHONE_NUMBER}`">
          <h3 class="slider-description mx-auto">{{ BRAND_DETAILS.PHONE_NUMBER }}</h3>
        </a>
        <h4 class="address-text">
          {{ BRAND_DETAILS.BUSINESS_ADDRESS }}
          <br />
          {{ BRAND_DETAILS.CITY_STATE }}
        </h4>
      </v-flex>
      <v-flex xs12 sm6>
        <h3 class="title-text mt-10 mx-5 text-center">HOURS</h3>
        <h5
          v-for="(hour, hourIndex) in BRAND_DETAILS.HOURS"
          :key="hourIndex"
          class="address-text mx-5 text-center"
        >{{ hour }}</h5>
      </v-flex>
      <v-flex xs12>
        <h4 class="px-10 mt-7 mx-auto title-text text-center">Our Story</h4>
        <p class="px-10 mt-2 text-center about-text">{{ BRAND_DETAILS.BRAND_DESC }}</p>
      </v-flex>
      <v-flex xs12 class="text-center">
        <a
          v-for="(social, socialIndex) in BRAND_DETAILS.BRAND_SOCIAL"
          :key="socialIndex"
          :href="social.url"
          style="text-decoration: none;"
          target="_blank"
        >
          <v-icon class="mx-auto text-center px-3" large>{{ social.icon }}</v-icon>
        </a>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
import BRAND_DETAILS from "@/common/brand.config.js";
export default {
  name: "BrandInformationCard",
  data: () => ({
    BRAND_DETAILS
  })
};
</script>

<style scoped lang="less">
.slider-description {
  text-align: center;
  font-size: 1.5rem;
  max-width: 450px;
}
.address-text {
  text-align: center;
  font-size: 1.3rem;
}
.action-btn {
  font-size: 1.2rem !important;
}
.hours-text {
  font-size: 1.2rem;
}
.title-text {
  font-size: 2rem;
  font-weight: bold;
}
.about-text {
  font-size: 1.2rem;
}
</style>
