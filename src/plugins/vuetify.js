import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ee957f',
        secondary:'#466F6E',
        gray: '#eaeef0',
        'text-main': '#5f6270',
        'text-secondary': '#5d5555',
      },
    },
  },
});
