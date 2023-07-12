<script setup>

import Grid from "@/components/Grid.vue";
import Car from "@/components/Car.vue";
import {reactive} from "vue";
const MyData = reactive({
  item:[]
})
</script>

<template>
  <div>
    <div class="my-head">
      <Car></Car>
    </div>
    <div class="functionalAreas">
      <div class="head-grid">
        <h4>我的订单</h4>
        <van-grid>
          <van-grid-item icon="goods-collect-o" text="购买订单" to="/orderPage"/>
          <van-grid-item icon="calendar-o" text="卖出订单" to="/orderPage"/>
        </van-grid>
        <h4>更多服务</h4>
        <van-grid :gutter="7">
          <van-grid-item icon="service-o" text="联系客服"  to="/"/>
          <van-grid-item icon="comment-circle-o" text="投诉建议"  to="/"/>
          <van-grid-item icon="browsing-history-o" text="游戏缺补"  to="/"/>
          <van-grid-item icon="bulb-o" text="价格提醒"  to="/"/>
          <van-grid-item icon="points" text="批量卖出"  to="/"/>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>