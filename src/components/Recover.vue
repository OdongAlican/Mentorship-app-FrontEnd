<template>
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
                v-model="email"
                :rules="[rules.required, rules.email]"
                label="Email Address"
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
