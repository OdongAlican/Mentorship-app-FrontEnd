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
                :rules="[rulesName.required, rulesName.min]"
                v-model="Names"
            ></v-text-field>
            </div>
          </v-card>
          <v-card flat>
            <div class="mx-4">
            <v-text-field 
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rulesPassword.required, rulesPassword.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
            ></v-text-field>
            </div>
          </v-card>
          <v-card flat>
            <div class="mx-4">
            <v-text-field 
                label="Confirm Password"
                :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[confirmPassword.confirm]"
                :type="show2 ? 'text' : 'password'"
                @click:append="show2 = !show2"
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
        email: '',
        Names: '',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length <= 20 || 'Max 20 characters',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },

         rulesName: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 5 || 'Min 5 characters',
        },

        show1: false,
        show2: false,
        password: '',
        rulesPassword: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
        confirmPassword: {
          confirm: value => this.password == value || 'Password do not match.',
        },
        

      }
  }  
};
</script>
<style  scoped> 
</style>
