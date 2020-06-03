<template>
  <div>
    <v-layout row wrap fill-height max-width="1200px">
      <!-- Quick hack since Brand Sidebar is in a fixed positon -->
      <v-flex xs12 md6 class="fill-height" v-show="$vuetify.breakpoint.mdAndUp" />

      <v-flex xs12 md6 class="fill-height" :class="$vuetify.breakpoint.mdAndUp ? 'fixed' : ''">
        <BrandInformationCard />
      </v-flex>

      <v-flex xs12 md6>
        <ImageLayoutView :images="BRAND_DETAILS.FOOD_IMGS" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import BRAND_DETAILS from "@/common/brand.config.js";
import ImageLayoutView from "@/components/ImageLayoutView.vue";
import BrandInformationCard from "@/components/BrandInformationCard.vue";

export default {
  name: "Home",
  components: {
    ImageLayoutView,
    BrandInformationCard
  },
  data: () => ({
    BRAND_DETAILS
  })
};
</script>

<style scoped>
.fixed {
  position: fixed;
}
</style>