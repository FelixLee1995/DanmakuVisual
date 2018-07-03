import Vue from 'vue'
import vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(vuex);

export default new vuex.Store({
  state:{
    username: '',
    bilimid: ''
  },
  mutations:{
    //显式的更改state里的数据
    saveInfo:function(state,name){
      state.username = name;
    },
    saveMid:function (state,mid) {
      state.bilimid = mid;
    }
  },
  getters:{
    getUsername:function(state){
      return state.username;
    },
    getBilimid:function(state){
      return state.bilimid;
    }
  },
  plugins: [createPersistedState()]
})
