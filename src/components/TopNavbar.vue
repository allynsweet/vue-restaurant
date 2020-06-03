<template>
  <div id="navbar">
    <v-app-bar height="105" fill-height grid-list-md text-xs-center class="elevation-8">
      <v-layout row wrap align-center>
        <v-spacer />

        <v-toolbar-items class="hidden-sm-and-down ml-12 pl-5">
          <div
            v-for="(item, index) in pages"
            class="nav-btn mt-2"
            justify-center
            :key="'firstRow' + item.meta.title"
          >
            <div v-show="index < 2">
              <div v-if="index > 0" class="d-inline-block">|</div>
              <v-btn
                dark
                class="d-inline-block nav-btn mt-3 capitalize"
                text
                :ripple="false"
                :to="item.path"
              >{{ item.meta.title }}</v-btn>
            </div>
          </div>
          <router-link class="d-inline-block" :to="'/'">
            <v-img style="width: auto;" max-height="105" max-width="200" :src="BRAND_LOGO" />
          </router-link>
          <div
            v-for="(item, index) in pages"
            class="nav-btn mt-2"
            justify-center
            :key="'secondRow' + item.meta.title"
          >
            <div v-show="index >= 2">
              <div v-if="index > 2" class="d-inline-block">|</div>
              <v-btn
                dark
                class="d-inline-block nav-btn mt-3 capitalize"
                text
                :ripple="false"
                :to="item.path"
              >{{ item.meta.title }}</v-btn>
            </div>
          </div>
        </v-toolbar-items>
        <v-spacer />

        <v-app-bar-nav-icon v-show="$vuetify.breakpoint.smAndDown" @click.stop="drawer = !drawer" />
      </v-layout>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" right temporary fixed width="450">
      <v-list-item>
        <v-list-item-content class="mt-3">
          <v-img :src="$brandLogo" />
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list class="pt-3 ml-0">
        <v-list-item v-for="item in pages" :key="item.meta.title" class="px-0 mx-0">
          <v-list-item-content>
            <router-link :to="item.path">
              <v-btn
                dark
                class="d-inline-block nav-btn mt-1 capitalize"
                text
                :to="item.path"
              >{{ item.meta.title }}</v-btn>
            </router-link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { BRAND_NAME, BRAND_LOGO } from "@/common/brand.config";

export default {
  name: "PublicNavbar",
  data() {
    return {
      drawer: null,
      pages: [],
      BRAND_NAME,
      BRAND_LOGO
    };
  }
};
</script>

<style scoped lang="less">
a {
  color: inherit;
}
.gridlite-logo {
  font-size: 30px !important;
}
.v-app-bar {
  z-index: 1 !important;
  background-color: #dd6806 !important;
}

.v-btn {
  font-size: 17px !important;
}
.v-btn:before {
  display: none !important;
}
.nav-btn {
  color: black !important;
}
.theme--light.v-btn,
.welcome-btn {
  color: white !important;
  z-index: 101 !important;
}
.v-navigation-drawer {
  z-index: 101;
  width: 200px !important;
  background-color: #dd6806 !important;
}
.v-list__tile__content {
  font-size: 21px !important;
  display: block !important;
}
.text-right {
  text-align: right;
}
</style>
