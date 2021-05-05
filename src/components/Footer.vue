<template>

  <v-footer padless
  >
    <v-card flat mx-0 tile class="primary white--text text-center">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
         elevation="0"
         rounded
          
       
        >
         <a :href="icon.url" :target="icon.target"><v-icon color="white" size="34px">{{ icon.name }}</v-icon></a>
        
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
        a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
        lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
        iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
        tempor vel ut orci. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>WAJIH</strong>
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

.theme--light.v-btn.v-btn--has-bg {
    background-color: #EE957F!important;
}
</style>