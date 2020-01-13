<template>
    <v-container>
      <v-layout>
        <v-flex xs6 md4 lg3 class="sideMenu white--text pa-7">
          <div class="yellow">
            <v-img 
            :src="path" 
            class="logo imageSize"
            ></v-img>
          </div>
          <div class="subtitle-1 ml-7 mb-10 mt-10">
            Login Using Social media to get quick access
          </div>
          <div v-for="loginType in variousLogins" 
              :key="loginType.photo" 
              :class="`pa-1 ma-1 my-2 loginType ${loginType.backgroundColor}`">
                <v-layout>
                  <v-flex xs2 md1 ml-9>
                    <v-img
                    class="mt-2"
                      :src="loginType.photo" >
                    </v-img>
                  </v-flex>
                  <v-flex xs12 md10 ml-2 mt-1>
                    <label class="caption">
                      {{loginType.type}}
                    </label>
                  </v-flex>
                </v-layout>
          </div>
        </v-flex>
        <v-flex xs6 md5 lg4 >
            <router-view class="helel"></router-view>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
export default {
  name: 'SignUp',
  data: () => ({
    variousLogins:[
      {
        type: "Signin with facebook", photo: "/facebook_logo.png", backgroundColor: "facebook_color"
      },
      {
        type: "Signin with twitter", photo: "/twitter_login.png", backgroundColor: "twitter_color"
      },  
      {
        type: "Signin with google", photo: "/google+_logo.png", backgroundColor: "google_color"
      }
    ], 
    path: "/mentorship logo.png"
  }),
};
</script>
<style  scoped> 
.sideMenu {
  background : #2D324E;
  height: 500px;
  margin-left: 200px;
}
.logo {
  width: 200px;
  height: 80px;
  margin-top: 60px
}
.loginType.facebook_color{
  background: #4A6EA9;
  border-radius: 5px;
}

.loginType.twitter_color{
  border-radius: 5px;
  background: #55ACEE
}

.loginType.google_color{
  border-radius: 5px;
  background: #E13719
}
</style>
