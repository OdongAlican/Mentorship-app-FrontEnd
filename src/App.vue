<template>
  <v-app>
    <sign-up
    class="ma-auto"/>
  </v-app>
</template>
<script>
import SignUp from './components/SignUp';

export default {
  name: 'App',
  components: {
    SignUp,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.general{
    background: #FFFFFF;
    height: 500px;
}
a{
  text-decoration: none
}
.btnSize{
    width: 300px;
}
a:hover {
  text-decoration: underline
}

.helel {
  height: 500px;
}

</style>
