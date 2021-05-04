<template>
  <container fluid>
    <v-autocomplete
      v-model="model"
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      chips
      clearable
      hide-details
      hide-selected
      prepend-icon="mdi-magnify"
      item-text="name"
      item-value="symbol"
      label=" Chercher un ami..."
      solo
      class="search-bar"
      position="absolute"
      background-color="#bbc8ce"
      margin-left="200px"
      rounded
    >
    </v-autocomplete>

    <v-carousel height="600px">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <v-container class="grey lighten-5">
      <v-row wrap class="mb-6" no-gutters>
        <v-col md="4" ml-auto>
          <v-card class="pl-9" outlined tile>
            <h1 class="font-weight-bold">NEED-U C'EST QUOI ?</h1>
            <v-spacer></v-spacer>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
              porro assumenda optio, magni beatae eveniet necessitatibus
              corporis ut reprehenderit dolorem totam repellendus? Pariatur
              error doloribus possimus quibusdam beatae est omnis nisi,
              corporis, impedit velit, accusantium assumenda! Ut, eos delectus
              quisquam incidunt necessitatibus at, ipsum, facere repellendus nam
              laborum sequi quod architecto labore sed quis recusandae vitae
              perspiciatis magni nihil optio. Optio nam id beatae commodi unde a
              doloribus, repellendus eos explicabo pariatur maiores doloremque
              expedita at! Quod accusantium expedita commodi perspiciatis, illo
              beatae reprehenderit, atque id quibusdam eum dolores cumque
              adipisci sequi porro voluptatum? Sit voluptates laboriosam laborum
              aspernatur error?
            </p>
          </v-card>
          <v-spacer></v-spacer>
          <v-btn class="ml-9 " color="#EE957F" dark>cliquer ici</v-btn>
        </v-col>

        <v-col md="4" offset-md="4">
          <v-card class="pa-2" outlined tile>
            <v-img
              mx-auto
              justify-space-between
              contain
              position="center"
              max-height="300"
              max-width="500"
              src="../../assets/images/equipe_NeedU.png"
            ></v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="mb-6" no-gutters> </v-row>
      <!--  <v-btn dark fab bottom color="blue" small :href="`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`" target="_blank">
          <v-icon>mdi-facebook</v-icon>
        </v-btn> -->
    </v-container>
    <v-container d-flex flex-column mb-6 class="bg">
    <v-layout row wrap>
      <v-row  class="mb-9">
     
    <!--<v-slide-group
      v-model="model"
      class="pa-4"
      center-active
      show-arrows
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-card
        

        img="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
        
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-4"
          height="200"
          width="180"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
               <h1 class="mt-13" >James</h1>
          </v-row>
         
        </v-card>
      </v-slide-item>
    </v-slide-group>-->

     <v-row>
     <v-col
      cols="6"
      sm="6"
     
    >
      <v-img class="mx-auto ml-30"
        src="../../assets/images/activites-manuelles.jpg"
         max-width="60%">
         <v-tab to="/actu">
          <v-btn
  class="span"
  elevation="5"
  large
>ACTIVITÉS MANUELLES</v-btn>
         </v-tab>
      
      </v-img>
    </v-col>

    <v-col
      cols="6"
      sm="6"
    >
      <v-img class="mx-auto"
      src="../../assets/images/activites-sport.jpg"
       max-width="60%"
       rounded-xl
      >
    <v-btn
  class="span"
  elevation="5"
  large
>ACTIVITÉS SPORTIVES</v-btn>
      </v-img>
    </v-col>

    
  </v-row>
  <v-row>
     <v-col
      cols="6"
      sm="6"
     
    >
      <v-img class="mx-auto"
        src="../../assets/images/activites-culturelles.jpg"
         max-width="60%"
         rounded-xl>
      <v-btn
  class="span"
  elevation="5"
  large
>ACTIVITÉS CULTURELLES</v-btn>
      </v-img>
    </v-col>

    <v-col
      cols="6"
      sm="6"

    >
      <v-img class="mx-auto"
       max-width="60%"
       rounded-xl
      src="../../assets/images/loisir-detente.jpg" mx-auto>
         <v-btn
  class="span"
  elevation="5"
  large
>LOISIR ET DÉTENTE</v-btn>
      </v-img>
    </v-col>

   
  </v-row>
  
  <v-btn class="hero">Autres</v-btn>
      </v-row>
    </v-layout>
    </v-container>
    
  
  </container>
  
</template>

<script>

export default {

name:'home',

  
  data() {
    
    return {
      
      items: [
        {
          src:
            "https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        },
        {
          src:
            "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?cs=srgb&dl=pexels-fauxels-3184183.jpg&fm=jpg",
        },
     
       
     
       
      ],
        
    };
  },
};
</script>

<style  >
/* .container {
  display: contents;
  margin-bottom: 0px;
  margin-top: 5px;
  max-width: 100%;
  max-height: 10%;
  
}
.search-bar {
  position: absolute;
  top: 100px;
  z-index: 1;
  text-align: center;
  width: 60%;
  left: 270px;
}
.v-text-field.v-text-field--enclosed {
  margin-left: 20%;
  margin-right: 20%;
}
.v-list-item .v-list-item__title,
.v-list-item .v-list-item__subtitle {
  line-height: 1.2;
  color: black !important;
}
.v-card > *:first-child:not(.v-btn):not(.v-chip),
.v-card > .v-card__progress + *:not(.v-btn):not(.v-chip) {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  padding-bottom: 20px;
  margin-top: 40px !important;
  border: 0px !important;
}
.v-application .grey.lighten-5 {
  background-color: "white" !important;
  border: 0px;
}
.container.grey.lighten-5 {
  background-color: white !important;
}
.theme--light.v-sheet--outlined {
  border: 0px;
}
.h1.font-weight-bold {
  font-weight: 900;
}

.container.div.v-text-field.v-text-field--enclosed {
  margin: 0;
  padding: 0;
  margin-left: 250px;
  margin-top: 300px;
}
.v-application .mb-9 {
    margin-bottom: 36px !important;
    BACKGROUND: #EAEEF1;
    PADDING-TOP: 100PX;
    PADDING-BOTTOM: 100PX;
    width: 50%;
    display: block;
    padding-right: 20px;
    padding-left: 20px;
    border-radius: 20px;
}
.v-btn.hero{
  margin-left: 650px;
  margin-top: 50px;
  background: #EE957F;
  
}
.theme--light.v-btn.v-btn--has-bg {
    background-color: #EE957F;
   
    color: white;
}
.v-sheet.mx-auto{
  padding:10px;
  border-radius: 10px;
}
.v-image.mx-auto{
  border-radius: 20px;

}
  .v-col{
    margin-left: 300px;
  }
 .my-span {
  background-color: gray;
  color: white;
  font-weight: bold;
  margin-left: 120px;
  margin-top:125px;
  text-align: center;
  display:inline-flex;
  font-size: 20px;
}
.v-btn.span{
  background-color: gray!important;
  color: white;
  font-weight: bold;
  margin-left: 50px;
  margin-top:125px;
  text-align: center;
  display:inline-flex;
  font-size: 20px;
} */

</style>