<template>
    <v-container class="general">
        <v-layout column>
            <v-flex xs6 md6 lg12 >
                <v-card flat >
                    <v-card-text class="headline font-weight-bold ml-8" >
                        Login to your Account
                    </v-card-text>
                </v-card>
            </v-flex>
            <v-flex>
                <v-card flat>
                    <v-card-text class="ml-4 body-2">
                        Don't have an Account? <router-link to="/createAccount"> Sign Up Free!</router-link>
                    </v-card-text>
                </v-card>
                <v-card flat>
                    <div class="mx-4">
                        <v-text-field 
                            v-model="email"
                            :rules="[rules.required, rules.email]"
                            label="Email Address"
                        ></v-text-field>
                    </div>
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
            </v-flex>
        </v-layout>
        <v-layout >
            <v-flex>
                <v-checkbox 
                v-model="Damn" 
                class="mt-5 ml-3" 
                label="Remember me">
                </v-checkbox>
            </v-flex>
            <v-flex>
                    <v-card-text 
                    class="mt-3 body-2">
                        <router-link to="/recover">
                            Forgot Password?
                        </router-link>
                    </v-card-text>
            </v-flex>
        </v-layout>
        <div class="my-4 btnSize mx-8">
        <v-btn block color="primary" cols="10" >
            Login with Email
        </v-btn>
      </div>
    </v-container>
</template>
<script>
export default {
  data: () => ({
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
        show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: '',
        rulesPassword: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },

  }),
};
</script>
<style  scoped> 
</style>
