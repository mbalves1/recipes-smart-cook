import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async getAllRecipes () {
      try {
        const response = await axios.get('http://localhost:8080/api/recipes')
        // , {},
        // {
        //   headers: {
        //     'Access-Control-Allow-Origin': '*'
        //   }
        // }
        console.log('response', response)
      }
      catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
