<template>
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
                v-model="email"
                :rules="[rules.required, rules.email]"
                label="Email Address"
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
            Sign up with Email
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
</template>
<script>
export default {
  data () {
      return {
        title: 'Preliminary report',
        email: '',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
      }
  }  
};
</script>
<style  scoped> 
</style>
