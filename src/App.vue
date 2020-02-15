<template>
  <v-app class="grey lighten-4">
    <router-view></router-view>
  </v-app>
</template>
<script>
export default {
  name: "App",
  components: {},
  data: () => ({})
};
</script>
<style>
.general {
  background: #ffffff;
  height: 500px;
}
a {
  text-decoration: none;
}
.btnSize {
  width: 300px;
}
a:hover {
  text-decoration: underline;
}
.helel {
  height: 500px;
}
.backgroundColor {
  background-color: #2d324e !important;
}

.variousSections {
  background-color: lightgray;
  width: 80%;
  height: 98%;
  margin-left: 19.5%;
  margin-top: 0.5%;
}
</style>
