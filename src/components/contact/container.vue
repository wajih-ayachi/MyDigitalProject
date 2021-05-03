<template>

  <v-container class="hero">
    <h1 class="red">NOUS CONTACTER</h1>
    <v-spacer></v-spacer>
  <v-form 
    ref="form"
    v-model="valid"
    lazy-validation
    

   
  >
  <v-text-field
      v-model="text"
      :rules="text-area"
      label="VOTRE MESSAGE"
      required
    ></v-text-field>
     <v-text-field
          v-model="lastName"
          :counter="10"
          :error-messages="errors"
          label="NOM"
          required
        ></v-text-field>
         <v-text-field
          v-model="firstName"
          :counter="10"
          :error-messages="errors"
          label="PRÉNOM"
          required
        ></v-text-field>

<v-spacer></v-spacer>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-MAIL"
      required
    ></v-text-field>
     <v-text-field
      v-model="telephone"
      :rules="emailRules"
      label="TÉLÉPHONE"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="ITEM"
      required
    ></v-select>


    <v-btn
      :disabled="!valid"
      color="#466F6F"
      dark
      class="mr-4"
      @click="validate"
      rounded
    >
      ENVOYER
    </v-btn>


    
  </v-form>
  </v-container>
</template>


<script>
  export default {
    data: () => ({
      
      valid: true,
      
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Mon espace pro',
        'Paiement',
        'Gestion du compte',
        'Service et reservation en ligne ',
        'Autre'
      ],
      
     
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
<style scoped>
.v-form{
 
  margin-top: 100px;
  margin-left: 10px;
   margin-right: 10px;
   
   }
   .v-text-field{
     background: #EAEEF1;
     height: 100px;;
   }
   .v-text-field[data-v-38dc5472] {
    background: #EAEEF1;
    height: 100px;
    border-radius: 20px;
    padding-right: 10px;
    padding-left: 10px;
    margin-right: 80px;
    margin-left: 80px;
    margin-top: 50px;
    
}
.v-btn:not(.v-btn--round).v-size--default {
    height: 36px;
    min-width: 64px;
    padding: 16px;
    display: flex;
    text-align: center;
    margin-left: 1225px;
}
.v-btn:not(.v-btn--round).v-size--default[data-v-38dc5472] {
    height: 36px;
    min-width: 64px;
    padding: 16px;
    display: flex;
    text-align: center;
    margin-left: 1225px;
    margin-top: 30px;
    margin-bottom: 20px;
}

.v-application .red {
   color: #466F6E;
    background-color:white !important;
    margin-top: 150px;
    margin-bottom: -100px;
    font-weight: bold;
    margin-left: 100px;
}

.cotainer.hero{
  background-image: url('https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?cs=srgb&dl=pexels-fauxels-3184183.jpg&fm=jpg');
}
</style>