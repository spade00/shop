<script setup>
import {onMounted, reactive, ref} from "vue";
import request from "@/utils/request";

const onClickLeft = () => history.back();
const active = ref(0)
const _ = ref("订单:")
const OrderData = reactive([
  // {
  //   order_id:1,
  //   product_id: 1,
  //   create_time:"",
  //   user_id:1,
  //   status:"",
  //   count:2,
  //   price:440,
  //   img:"",
  //   title:""
  // }
])
onMounted(()=>{
  request.get("/GetOrder").then(res=>{
    console.log(res.data)
    OrderData.push(...JSON.parse(res.data))
  }).catch(err=>{
    console.log(err)
  })
})

</script>

<template>
  <div class="orderPage-bg">
    <div class="Goods-nav-bar">
      <van-nav-bar title="我的订单" left-text="返回" left-arrow @click-left="onClickLeft"/>
    </div>
    <div>
      <van-tabs v-model:active="active">
        <van-tab title="购买订单">
          <van-card
              v-for="(item,index) in OrderData"
              :num="item.count"
              :price="item.price"
              :desc="_+item.order_id.toString()"
              :title="item.title"
              :thumb="item.img"
          >
            <template #tags>
              时间:{{item.create_time}}
            </template>
            <template #footer>
              <h3>{{ item.status }}</h3>
            </template>
          </van-card>
        </van-tab>
        <van-tab title="卖出订单">内容 2</van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<style scoped>

</style>