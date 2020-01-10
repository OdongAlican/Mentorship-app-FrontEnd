<template>
  <v-app>
    <v-container class="general">
      <v-layout column>
        <v-flex>
          <v-card flat>
            <v-card-text class="headline font-weight-bold ml-12">
              Sign Up for Free
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card flat >
            <div class="mx-4">
            <v-text-field 
                label="Email Address"
                v-model="Email"
            ></v-text-field>
            </div>
          </v-card>
          <v-card flat>
            <div class="mx-4">
            <v-text-field 
                label="Full Names"
                v-model="Names"
            ></v-text-field>
            </div>
          </v-card>
          <v-card flat>
            <div class="mx-4">
            <v-text-field 
                label="Password"
                v-model="Password"
            ></v-text-field>
            </div>
          </v-card>
          <v-card flat>
            <div class="mx-4">
            <v-text-field 
                label="Confirm Password"
                v-model="PasswordConfirm"
            ></v-text-field>
            </div>
          </v-card>
        </v-flex>
        <v-flex>
          <v-card flat>
            <v-card-text >
              I agree to 
              <router-link 
                class="body-2"
                to="/"> privacy Policy 
              </router-link>
              and
              <router-link 
                class="body-2"
                to="/"> terms of service 
              </router-link>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
        <div class="my-0 btnSize mx-6">
        <v-btn block color="primary" cols="10">
            Sign with Email
        </v-btn>
      </div>
      <div>
        <router-link 
          class="body-2 ml-12"
          to="/">
          Already have an Account?
        </router-link>
      </div>
    </v-container>
  </v-app>
</template>
<script>
export default {
};
</script>
<style  scoped> 
</style>
