<template>
  <v-container class="my-5" >
    <v-layout row>
      <v-col xs12 md6 >
      <h1 outline block class="#466F6E"> INSCRIPTION </h1>
      </v-col>
      <v-col  class="bg" md6 >
      <v-img
        lazy-src="../../assets/images/bg8.png"
        max-height="500"
        max-width="500"
        src="../../assets/images/bg8.png">
        
        </v-img>

      </v-col>
    </v-layout>
    <v-layout row>
      <v-col d-inline xs12 md6 >
      <h1 class="green"> NEEDEUR </h1>
      </v-col>
    </v-layout>
    <v-layout row>
      <v-col xs12 md6 >
      <h1 outline block class="pink"> NEEDÉE </h1>
      </v-col>

    </v-layout>
  </v-container>
</template>

<script>
export default {
name: 'inscription',

}
</script>

<style scoped>
.container {
  display: contents;
  margin-bottom: 0px;
  margin-top: 100px;
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
  margin-left: 680px;
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

.flex.md6 {
    flex-basis: 50%;
    flex-grow: 0;
    max-width: 50%;
    margin-top: 100px;
    margin-left: 550px;
    color: #466F6E;
}
.v-image {
  

 
    width: 50%;
    margin-top: 100px;
    display: flex;
    
}
h1{
  font-size: 50px;
  display: inline-block;
  padding: 20px;
  border:1px solid;
  border-radius: 25px;
 

}
.v-btn.needé{
   font-size: 30px;
  display: inline-block;
  margin: auto;
  border:1px solid;
  border-radius: 25px;


  margin-bottom: 50px;

}
.span.v-btn.content{
  margin-right: 400px;
}
.col{
  margin-top: 100px;
    margin-left: 50px;
  
}
h1.pink{
  margin-left: 525px;
  margin-bottom: 20px;
}
.v-btn.green{
  margin:auto;
   font-size: 30px;

    BACKGROUND: #EAEEF1;
    PADDING-TOP: 50PX;
    PADDING-BOTTOM: 50PX;
    width: 50%;
    display: block;
    padding-right: 20px;
    padding-left: 20px;
    border-radius: 20px;
  
}

</style>