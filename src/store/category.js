export default {
  namespaced: true,
  state: {
    categories: [
      {
        id: 1,
        name: 'Activités manuelles',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, fugiat dolores. Maiores mollitia sit facere et magnam laborum quis ratione tempora, nulla aliquid dolorum fugit, dolore facilis, accusantium minus odit?',
        img: require('@/assets/images/activites-manuelles.jpg')
      },
      {
        id: 2,
        name: 'Activités sportives',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, fugiat dolores. Maiores mollitia sit facere et magnam laborum quis ratione tempora, nulla aliquid dolorum fugit, dolore facilis, accusantium minus odit?',
        img: require('@/assets/images/activites-sport.jpg')
      },
      {
        id: 3,
        name: 'Activités culturelles',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, fugiat dolores. Maiores mollitia sit facere et magnam laborum quis ratione tempora, nulla aliquid dolorum fugit, dolore facilis, accusantium minus odit?',
        img: require('@/assets/images/activites-culturelles.jpg')
      },
      {
        id: 4,
        name: 'Loisiris et detente',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, fugiat dolores. Maiores mollitia sit facere et magnam laborum quis ratione tempora, nulla aliquid dolorum fugit, dolore facilis, accusantium minus odit?',
        img: require('@/assets/images/loisir-detente.jpg')
      }
    ]
  },
  getters: {
    getAllCategories (state) {
      console.log('AAAA')
      return state.categories
    }
  }
}
