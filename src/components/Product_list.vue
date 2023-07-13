<script setup>
import {reactive} from "vue";
import router from "@/router";
import Store from "@/stores/counter"
const props = defineProps({
  data:Array
})


const store = Store()

function theJumpPage(index){
  store.Goods_data = props.data[index]
  store.imag = props.data[index].img.split(",")
  console.log(store.imag)
  router.push({
    path:"/detail",
  })
}
</script>

<template>
  <div class="Product" v-for="(item,index) in props.data">
    <n-card @click="theJumpPage(index)">
      <div class="Product-n-card">
        <img :src="item.img" alt="" width="70" height="90">
        <div class="Product-title">
          <h3>{{item.title}}</h3>
          <p>{{item.tag}}</p>
          <h3 style="color: red">￥{{item.price}}</h3>
        </div>
      </div>
    </n-card>
  </div>
</template>

<style scoped>
.n-card {
  max-width: 100vw;
}
.Product-n-card{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.Product-title{
  margin: 0 0 0 10px;
}
.Product-title h3{
  margin: 0;
}
.Product-title p{
  margin: 0;
}
</style>