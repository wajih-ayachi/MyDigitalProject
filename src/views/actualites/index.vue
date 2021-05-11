<template>
  <v-container fluid>
    <v-row class="justify-center pt-5"  >
      <h1 class="secondary--text" >ACTUALITÉ</h1>
    </v-row>
    <v-row>
      <v-col>
     <v-img
     contain
        class="mt-5"
        cover
        height="350px"
        aspect-ratio="9"
        src="../../assets/images/pexels-emma-bauso-3585811.jpg"
      >

      </v-img>
      </v-col>
         <v-col>
     <v-img
     contain
        class="mt-5"
        cover
        height="350px"
        aspect-ratio="9"
        src="../../assets/images/pexels-ron-lach-7097825.jpg"
      >

      </v-img>
      </v-col>
    </v-row>
    <v-row >
      <v-col>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          quibusdam id dolorum optio sequi! Ab sunt consequatur nihil, maxime
          cupiditate quaerat reprehenderit natus reiciendis alias quibusdam
          fugiat! Sequi dicta officiis doloremque modi magni vitae voluptate!
          Iure alias eos, ducimus nulla voluptatem dolore, molestiae amet
          quisquam, hic voluptas cupiditate rerum a!
        </p>
      </v-col>
      <v-col>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          quibusdam id dolorum optio sequi! Ab sunt consequatur nihil, maxime
          cupiditate quaerat reprehenderit natus reiciendis alias quibusdam
          fugiat! Sequi dicta officiis doloremque modi magni vitae voluptate!
          Iure alias eos, ducimus nulla voluptatem dolore, molestiae amet
          quisquam, hic voluptas cupiditate rerum a!
        </p>
      </v-col>
    </v-row>
   
     <v-row >
      <v-col>
     <v-img
     contain
        class="mt-5"
        cover
        height="350px"
        aspect-ratio="9"
        src="../../assets/images/Sans titre (16).jpg"
      >

      </v-img>
      </v-col>
         <v-col>
     <v-img
     contain
        class="mt-5"
        cover
        height="350px"
        aspect-ratio="9"
        src="../../assets/images/Sans titre (12).jpg"
      >

      </v-img>
      </v-col>
    </v-row>
    <v-row >
      <v-col>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          quibusdam id dolorum optio sequi! Ab sunt consequatur nihil, maxime
          cupiditate quaerat reprehenderit natus reiciendis alias quibusdam
          fugiat! Sequi dicta officiis doloremque modi magni vitae voluptate!
          Iure alias eos, ducimus nulla voluptatem dolore, molestiae amet
          quisquam, hic voluptas cupiditate rerum a!
        </p>
      </v-col>
      <v-col>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          quibusdam id dolorum optio sequi! Ab sunt consequatur nihil, maxime
          cupiditate quaerat reprehenderit natus reiciendis alias quibusdam
          fugiat! Sequi dicta officiis doloremque modi magni vitae voluptate!
          Iure alias eos, ducimus nulla voluptatem dolore, molestiae amet
          quisquam, hic voluptas cupiditate rerum a!
        </p>
      </v-col>
    </v-row>
    <v-row class="justify-center mb-9 mt-9 ">
      <v-btn  class="secondary font-weight-bold">VOIR PLUS</v-btn>
    </v-row>
       <v-row   justify="">
      <v-subheader>Today</v-subheader>

      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(message, i) in messages"
          :key="i"
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row
              align="center"
              class="spacer"
              no-gutters
            >
              <v-col
                cols="4"
                sm="2"
                md="1"
              >
                <v-avatar
                  size="36px"
                >
                  <img
                    v-if="message.avatar"
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                  <v-icon
                    v-else
                    :color="message.color"
                    v-text="message.icon"
                  ></v-icon>
                </v-avatar>
              </v-col>

              <v-col
                class="hidden-xs-only"
                sm="5"
                md="3"
              >
                <strong v-html="message.name"></strong>
                <span
                  v-if="message.total"
                  class="grey--text"
                >
                  &nbsp;({{ message.total }})
                </span>
              </v-col>

              <v-col
                class="text-no-wrap"
                cols="5"
                sm="3"
              >
                <v-chip
                  v-if="message.new"
                  :color="`${message.color} lighten-4`"
                  class="ml-0 mr-2 black--text"
                  label
                  small
                >
                  {{ message.new }} new
                </v-chip>
                <strong v-html="message.title"></strong>
              </v-col>

              <v-col
                v-if="message.excerpt"
                class="grey--text text-truncate hidden-sm-and-down"
              >
                &mdash;
                {{ message.excerpt }}
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text v-text="lorem"></v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  
  </v-container>
</template>
<script>
export default {
    data: () => ({
      messages: [
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'John Leider',
          title: 'Welcome to Vuetify!',
          excerpt: 'Thank you for joining our community...',
        },
        {
          color: 'red',
          icon: 'mdi-account-multiple',
          name: 'Social',
          new: 1,
          total: 3,
          title: 'Twitter',
        },
        {
          color: 'teal',
          icon: 'mdi-tag',
          name: 'Promos',
          new: 2,
          total: 4,
          title: 'Shop your way',
          exceprt: 'New deals available, Join Today',
        },
      ],
      lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
    }),
}
</script>
<style scoped>
.v-application .secondary--text {
    color: #466f6e !important;
    caret-color: #466f6e !important;
    font-size: 45px;
}
</style>