<template>
   <v-main>
      <v-form ref="signUpForm" v-model="validForm" lazy-validation>
         <v-card width="800px" class="mx-auto">
            <v-card-title> Signup </v-card-title>
            <v-card-text>
               <v-text-field
                  v-model="email"
                  label="Email"
                  type="email"
                  :rules="emailRules"
               ></v-text-field>
               <v-autocomplete
                  v-model="selectedBrowser"
                  label="Wich browser do you use?"
                  :items="browsers"
               ></v-autocomplete>
               <v-file-input label="Attach profile picture"></v-file-input>
               <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
               >
                  <template v-slot:activator="{ on, attrs }">
                     <v-text-field
                        v-model="birthday"
                        label="Birthday"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                     ></v-text-field>
                  </template>
                  <v-date-picker
                     v-model="birthday"
                     @input="menu2 = false"
                  ></v-date-picker>
               </v-menu>
               <v-checkbox
                  v-model="agreeToTerms"
                  label="Agree to terms & conditions"
                  :rules="agreeToTermsRules"
                  required
               ></v-checkbox>
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
               <v-btn type="submit" :disabled="!validForm" color="primary"
                  >Submit</v-btn
               >
               <v-btn color="warning" @click="resetValidation"
                  >Reset Validation</v-btn
               >
               <v-btn color="error" @click="resetForm">Reset</v-btn>

               <v-btn color="success" @click="validateForm"
                  >Validate Form</v-btn
               >
            </v-card-actions>
         </v-card>
      </v-form>
   </v-main>
</template>

<script>
export default {
   name: 'Signup',
   data() {
      return {
         validForm: false,
         email: '',
         agreeToTerms: false,
         menu2: false,
         browsers: ['Chrome', 'Firefox', 'Safari', 'Edge'],
         selectedBrowser: '',
         birthday: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
            .toISOString()
            .substr(0, 10),

         //rules

         agreeToTermsRules: [
            (value) =>
               !!value ||
               'You must agree to the terms and conditios to sign up for an account.'
         ],
         emailRules: [
            (value) => !!value || 'Email is required',
            (value) => value.includes('@') || 'Email should include @.',
            (value) =>
               value.indexOf('.') - value.indexOf('@') > 1 ||
               'Email should contain a valid domain.',
            (value) =>
               value.indexOf('.') <= value.length - 3 ||
               'Email should contain a valid domain extension.'
         ]
      }
   },
   methods: {
      resetForm() {
         this.$refs.signUpForm.reset()
      },
      resetValidation() {
         this.$refs.signUpForm.resetValidation()
      },
      validateForm() {
         this.$refs.signUpForm.validate()
      }
   }
}
</script>

<style lang="css" scoped></style>
