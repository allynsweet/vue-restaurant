<template>
  <v-app>
    <v-content>
      <Home />
    </v-content>
  </v-app>
</template>

<script>
import Home from "@/pages/Home.vue";

export default {
  name: "App",
  components: {
    Home
  }
};
</script>

<style>
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
</style>