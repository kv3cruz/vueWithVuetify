<template>
   <v-app>
      <v-card width="400" class="mx-auto mt-5">
         <v-card-title>
            <h1 class="display-1">Login</h1>
         </v-card-title>
         <v-card-text>
            <v-form>
               <v-text-field label="Username" prepend-icon="mdi-account-circle">
               </v-text-field>
               <v-text-field
                  label="Password"
                  prepend-icon="mdi-lock"
                  :append-icon="!showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"
               ></v-text-field>
            </v-form>
         </v-card-text>
         <v-divider></v-divider>
         <v-card-actions>
            <v-btn color="success">Register</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="info">Login</v-btn>
         </v-card-actions>
      </v-card>
   </v-app>
</template>

<script>
export default {
   name: 'App',
   data() {
      return {
         showPassword: false
      }
   }
}
</script>
