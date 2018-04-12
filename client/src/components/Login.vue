<template>
  <div class="login">
    <v-container fluid>
    <v-layout row>
      <v-flex xs4>
        <v-subheader>Login</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          name="Login"
          label="Login"
          id="testing"
        ></v-text-field>
      </v-flex>
    </v-layout>
    
    <br>
    
    <v-layout row>
      <v-flex xs4>
        <v-subheader>Normal with hint text</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          name="input-10-1"
          label="Enter your password"
          hint="At least 8 characters"
          v-model="password"
          min="8"
          :append-icon="e1 ? 'visibility' : 'visibility_off'"
          :append-icon-cb="() => (e1 = !e1)"
          :type="e1 ? 'password' : 'text'"
          counter
        ></v-text-field>
      </v-flex>
    </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
