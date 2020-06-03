<template>
  <div>
    <v-layout row wrap fill-height max-width="1200px">
      <v-flex xs12 md6 class="fill-height" v-show="$vuetify.breakpoint.mdAndUp" />
      <v-flex
        xs12
        md6
        class="fill-height"
        :style="$vuetify.breakpoint.mdAndUp ? 'position: fixed;' : ''"
      >
        <v-card
          :class="$vuetify.breakpoint.mdAndUp ? 'mr-6' : ''"
          elevation="7"
          :style="$vuetify.breakpoint.mdAndUp ? 'min-height: 100vh;' : ''"
        >
          <v-img
            style="width: auto;"
            class="text-center mx-auto mb-10"
            max-width="350px"
            :src="BRAND_LOGO"
          />
          <v-layout row wrap justify-center>
            <v-flex xs12 sm3 class="text-center">
              <v-btn
                class="px-7 mx-auto py-5 mt-3 font-weight-black action-btn"
                color="#0047AC"
                dark
                href="/assets/menu.pdf"
              >View Menu</v-btn>
            </v-flex>
            <v-flex xs12 sm3 class="text-center">
              <v-btn
                class="px-7 py-5 mt-3 mx-auto font-weight-black action-btn"
                color="#0047AC"
                dark
                href="tel:8609049628"
              >Call</v-btn>
            </v-flex>
            <v-flex xs12 sm3 class="text-center">
              <v-btn
                class="px-7 mx-auto mt-3 py-5 font-weight-black action-btn"
                color="#0047AC"
                dark
                target="_blank"
                :href="'https://www.google.com/maps/search/?api=1&query=1400+Park+Street+Hartford+CT+06106'"
              >Directions</v-btn>
            </v-flex>

            <v-flex xs12 sm6>
              <h3 class="title-text mt-10 mx-5 text-center">CONTACT</h3>
              <a style="text-decoration: none; color: black;" href="tel:8609049628">
                <h3 class="slider-description mx-auto">(860) 904-9628</h3>
              </a>
              <h4 class="address-text">
                1400 Park Street
                <br />Hartford, CT 06106
              </h4>
            </v-flex>
            <v-flex xs12 sm6>
              <h3 class="title-text mt-10 mx-5 text-center">HOURS</h3>
              <h5 class="address-text mx-5 text-center">
                Monday: CLOSED
                <br />Tuesday-Saturday: 9am - 8pm
                <br />Sunday: 10am - 6pm
              </h5>
            </v-flex>
            <v-flex xs12>
              <h4 class="px-10 mt-7 mx-auto title-text text-center">Our Story</h4>
              <p
                class="px-10 mt-2 text-center about-text"
              >Marlon and Andres Soriano, two brothers that immigrated from El Salvador, are the founders of Que Chivo. A slang word used in Central America meaning “So cool”, Que Chivo is bringing that exact atmosphere to its new home at Parkville Market. Located in Connecticut’s first food hall, you will find traditional Salvadorian pupusas and tamales, as well as a full Salvadorian breakfast. Using fresh and authentic ingredients, the culture and heart of El Salvador is brought to life at Que Chivo. Stay cool.</p>
            </v-flex>
            <v-flex xs12 class="text-center">
              <a
                href="https://www.instagram.com/quechivoct/"
                style="text-decoration: none;"
                target="_blank"
              >
                <v-icon class="mx-auto text-center" large>mdi-instagram</v-icon>
              </a>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>

      <v-flex xs12 md6>
        <v-layout row wrap>
          <v-flex xs12 sm6 v-for="(img, index) in images" :key="index">
            <v-hover v-slot:default="{ hover }">
              <v-img :src="img" :elevation="hover ? 16 : 2" height="385" />
            </v-hover>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { BRAND_SHORT_DESC, BRAND_LOGO } from "@/common/brand.config";

export default {
  name: "Home",
  components: {},
  data: () => ({
    BRAND_SHORT_DESC,
    BRAND_LOGO,
    PDF_SRC: "@/assets/menu.pdf",
    images: [
      require("@/assets/1.jpeg"),
      require("@/assets/2.jpeg"),
      require("@/assets/3.jpeg"),
      require("@/assets/4.jpeg"),
      require("@/assets/5.jpeg"),
      require("@/assets/6.jpeg")
    ]
  }),
  methods: {
    error(error) {
      console.log(error);
    }
  }
};
</script>

<style scoped lang="less">
@import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap");

p,
h1,
h2,
h3,
h4,
h5,
div,
span {
  font-family: "Architects Daughter", cursive;
}

.v-carousel {
  max-width: 1500px;
}
.slider-title {
  font-size: 4rem;
}
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