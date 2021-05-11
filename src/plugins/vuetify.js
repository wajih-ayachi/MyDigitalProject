import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ee957f',
        secondary: '#466F6E', //#437070
        gray: '#eaeef0', //
        'gray-dark': '#848484',
        'text-main': '#5f6270',
        'text-secondary': '#5d5555',
      },
    },
  },
});
