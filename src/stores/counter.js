import{defineStore} from "pinia";

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
    }
  },
  getters:{

  },
  actions:{
    setActive(active){
      this.activeIndex = active
      console.log(active+" "+this.activeIndex)
    }
  }
})