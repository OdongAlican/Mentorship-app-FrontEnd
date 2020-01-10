<template>
  <v-app>
    <sign-up/>
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
    width: 370px;
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
.rightSide{
  height: 500px;
}
</style>
