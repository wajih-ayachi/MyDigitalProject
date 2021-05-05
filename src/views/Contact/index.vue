<template>
  <v-container pt-10>
    <v-row>
      <v-col class="mb-5">
        <h1 class="secondary">NOUS CONTACTER</h1>
      </v-col>
      <v-col mt-0 class="d-flex flex-row-reverse">
        <v-img
          contain
          max-height="200"
          max-width="200"
          src="../../assets/images/bg-contact.png"
        >
        </v-img>
      </v-col>
    </v-row>
    <v-spacer></v-spacer>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-textarea
      
        filled
        name="input-7-4"
        label="Votre message"
        value=""
        rounded
      ></v-textarea>
      <v-text-field
        class="background"
        v-model="lastName"
        :counter="10"
        :error-messages="errors"
        label="NOM"
        required
        filled
        rounded
      ></v-text-field>

      <v-spacer></v-spacer>
      <v-text-field
        color="3BCC8CD"
        v-model="email"
        :rules="emailRules"
        label="E-MAIL"
        filled
        rounded
        required
      ></v-text-field>
      <!-- <v-text-field
      v-model="telephone"
      :rules="emailRules"
      label="TÉLÉPHONE"
      required
      filled
      rounded
    ></v-text-field>-->

      <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="ACTIVITÉS"
        required
        filled
        rounded
      ></v-select>
      <v-spacer></v-spacer>

      <v-row class="d-flex flex-row-reverse mb-2 mt-2 mr-1">
        <v-btn
          pb-9
          :disabled="!valid"
          color="#466F6F"
          dark
          class="mr-4"
          @click="validate"
          rounded
        >
          ENVOYER
        </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>


<script>
export default {
  data: () => ({
    valid: true,

    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: [
      "loisir et détente",
      "Activités manuelles",
      "Activités sportives",
      "Activités culturelle ",
      "Autre",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
<style scoped>
.v-application .secondary {
  background-color: white !important;
  border-color: white !important;
  color: #466f6e;
  font-size: 53px;
}

.v-application .pt-10 {
  padding-top: 70px !important;
}

</style>