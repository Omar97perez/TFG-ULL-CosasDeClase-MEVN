import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    forSale: [],
    inCart: [],
    preview: '',
    token: localStorage.getItem('token') || null,
    userData: {}
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
    preview: state => state.preview,
    loggedIn(state){
      return state.token != null
    },
    theToken: state => state.token,
    name: state => state.userData.name,
    surname: state => state.userData.surname,
    birthdate: state => state.userData.birthdate,
    genre: state => state.userData.genre,
    email: state => state.userData.email,
    paragraph: state => state.userData.paragraph,
    image: state => state.userData.image,
    telephone: state => state.userData.telephone,
    _id: state => state.userData._id,
    isAdmin(state){
      return state.userData.email == "omarperezznakar@gmail.com"
    }
  },
  setters: {

  },
  mutations: {
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },
    ADD_PREVIEW(state, invId) { state.preview = invId },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1); },
    retrieveToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
    },
    get_user_data(state, data) {
      state.userData = data
    },
    cleanData(state) {
      state.userData = {}
    }
  },
  actions: {
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
    addToPrev(context, invId) { context.commit('ADD_PREVIEW', invId); },
    retrieveToken(context, credentials){
      return new Promise((resolve, reject) => {
        axios.post('/users/authenticate', {
          email: credentials.email,
          password: credentials.password
        })
        .then(response => {
          const token = response.data.token
          localStorage.setItem('token', token)
          context.commit('retrieveToken',token)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
      })
    },
    register(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/users/register', {
          name: data.name,
          paragraph: data.paragraph,
          image: data.image,
          telephone: data.telephone,
          surname: data.surname,
          email: data.email,
          birthdate: data.birthdate,
          genre: data.genre,
          password: data.password
        })
        .then(response => {

          // console.log(response)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
      })
    },
    destroyToken(context) {
      if (context.getters.loggedIn) {
        localStorage.removeItem('token')
        context.commit('destroyToken')
        context.commit('cleanData')
      }
    },
    /* destroyToken(context) {
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('/Logout')
          .then(response => {
            localStorage.removeItem('token')
            context.commit('destroyToken')
            context.commit('cleanData')
            console.log("1")
            resolve(response)
          })
          .catch(error => {
            console.log("2")
            localStorage.removeItem('token')
            context.commit('destroyToken')
            context.commit('cleanData')
            reject(error)
          })
        })

      }
    }, */
    get_user_data(context) {
      // console.log(context.getters.theToken)
      if (context.getters.loggedIn) {
        return new Promise((resolve, reject) => {
          axios.post('/users/user_data', { token: localStorage.getItem('token')})
          .then(response => {
            // console.log(response.data)
            // localStorage.setItem('userData', response.data)
            //console.log(localStorage.getItem('userData'))
            context.commit('get_user_data', response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
        })
      }
    },
    update(context,data) {
      return new Promise((resolve, reject) => {
        axios.put(`/users/${context.getters._id}`, {
          name: data.name,
          paragraph: data.paragraph,
          image: data.image,
          telephone: data.telephone,
          surname: data.surname,
          email: data.email,
          birthdate: data.birthdate,
          genre: data.genre,
          password: data.password
        }, { headers: { authorization: context.getters.theToken }})
        .then(response => {
          context.dispatch('get_user_data')
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
      })
    },
    deleteUser(context, data) {
      return new Promise((resolve, reject) => {
        axios.delete(`/users/${context.getters._id}`, { headers: { authorization: context.getters.theToken }})
        .then(response => {
          resolve(response)
        })
        .catch(error => reject(error))
      })

/*         localStorage.removeItem('token')
        context.commit('destroyToken')
        context.commit('cleanData') */

       /*  axios.post('/Logout')
          .then(response => {
            localStorage.removeItem('token')
            context.commit('destroyToken')
            context.commit('cleanData')
            resolve(response)
          })
          .catch(error => {
            localStorage.removeItem('token')
            context.commit('destroyToken')
            context.commit('cleanData')
            reject(error)
          })  */
        //  */
        //localStorage.removeItem('token')
        //context.dispatch('destroyToken')
        //context.commit('cleanData')

    }

  },
});
