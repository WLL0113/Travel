import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({ // 创建一个仓库
  state, // 全局公用的数据
  mutations
})
