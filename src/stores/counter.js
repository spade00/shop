import{defineStore} from "pinia";
import {ref} from "vue";

export default defineStore('menu',{
  persist:{
    enabled:false,//开启持久化
    strategies:[
      {
        key:"menu-active",
        storage:localStorage
      }
    ]
  },
  state(){
    return{
      activeIndex:0,
      Goods_data:{},
      imag:[""],
    }
  },
  getters:{

  },
  actions:{

  }
})