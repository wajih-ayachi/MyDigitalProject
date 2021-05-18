<template>
  <v-container fluid class="mt-10">
    <v-layout justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Se connecter</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                :full-width="true"
                name="Email"
                label="Email"
                type="email"
              ></v-text-field>
              <v-text-field
                id="password"
                name="password"
                label="Saisissez votre mot de passe"
                type="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" to="/">Se connecter</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "Login",
  props: {
    source: String,
  },
};
</script>

<style>
.v-container {
  height: 600px;
}
</style>
