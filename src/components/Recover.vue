<template>
  <v-app>
    <v-container class="general">
      <v-layout column>
        <v-flex>
          <v-card flat >
            <v-card-text class="headline font-weight-bold ml-6">
              Recover your Password
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card flat>
            <v-card-text class="ml-1">
              Fill in your email Address below and we 
              will send you an email with further instructions
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex>
            <v-text-field 
                class="mx-4"
                label="Email"
                v-model="Email"
            ></v-text-field>
        </v-flex>
        <v-flex>
        <div class="my-4 btnSize mx-6">
          <v-btn block color="primary" cols="10">
              Recover Your Password
          </v-btn>
        </div>
        </v-flex>
        <v-flex>
          <router-link 
                to="/"
                class="mx-7 body-2">
            Already have an account?
          </router-link>
          <br>
          <router-link 
                to="/createAccount"
                class="mx-7 body-2" >
            Don't have an account?
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
export default {
};
</script>
<style  scoped> 
</style>
