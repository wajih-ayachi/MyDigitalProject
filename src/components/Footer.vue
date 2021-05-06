<template>
<v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="gray">
        <v-row>
          <v-col cols="3" offset-md="1">
            <span class="legend text-secondary--text">Nous contacter</span>
            <v-textarea
              class="text-area"
              outlined
              value="Votre message"
              rows="2"
              auto-grow
            />
            <v-btn
              class="primary white--text pa-5"
              rounded
            >
              Envoyer
            </v-btn>
          </v-col>
          <v-col cols="6" offset-md="2" class="text-secondary--text mt-5">
            <div class="title ml-4 mb-3">Nos réseaux sociaux</div>
            <v-btn
              v-for="icon in icons"
              :key="icon.name"
              class="mx-4"
              elevation="0"
              color="text-secondary"
            >
              <a :href="icon.url" :target="icon.target">
                <v-icon color="gray" size="34px">{{ icon.name }}</v-icon>
              </a>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center primary white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
   
data: () => ({
   
    date: '2018-03-02',

    
    icons: [
       {
            name:'mdi-facebook',
            url: 'https://www.facebook.com/',
            target: '_blank'
        },
        {
            name:'mdi-twitter',
            url: 'https://www.twitter.com/',
            target: '_blank'
        },
        {
            name:'mdi-linkedin',
            url: 'https://www.linkedin.com/',
            target: '_blank'
        },
       {
            name:'mdi-instagram',
            url: 'https://www.instagram.com/',
            target: '_blank'
        },
      
      
       ],
  }),
  methods:{
    allowedDates: val=> parseInt(val.split('-')[2], 10)% 2 ===0,
  
},
model: null,

};


</script>

<style scoped>
.text-area >>> textarea{
  color: #555 !important;
  width: 300px !important;
}
.text-area >>> fieldset{
  border-color: #555 !important;
}
.text-area >>> .v-text-field__details{
  display: none;
}
.theme--light.v-btn.v-btn--has-bg {
    background-color: #EE957F!important;
}
</style>