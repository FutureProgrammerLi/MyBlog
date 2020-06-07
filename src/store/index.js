import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")): {
    CardsCollection:[
      {
        img_url:'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
        title:'First blog',
        content:'Can you See Me?'
      },{
        img_url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590429195564&di=15cfeb8bb18a11d398365dfc94a43d3b&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F64%2F76%2F20300001349415131407760417677.jpg',
        title:'Second blog',
        content:'Ofcourse you can!'
      }
    ]
  },
  mutations: {
    ADD_POST(state,post){
      state.CardsCollection.push(post)
    }
  },
  actions: {
  },
  modules: {
  }
})
