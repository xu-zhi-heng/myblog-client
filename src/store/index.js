import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import User from '../store/User'
import Blog from '../store/Blog'
export default new Vuex.Store({
  modules: {
    User,
    Blog,
  }
})
