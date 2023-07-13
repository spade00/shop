<script>
import {onMounted, ref} from 'vue';
import Main from "@/page/main/Main.vue";
import Message from "@/page/message/Message.vue";
import Order from "@/page/order/ShopCar.vue";
import My from "@/page/my/My.vue";
import Store from "@/stores/counter"
import { storeToRefs } from 'pinia'
export default {
  components: {My, Order, Message, Main},
  setup(){
    const active = ref(0)
    return{
      active
    }
  }
};
</script>

<template>
  <div>
    <div>
      <Main v-show="active === 0"></Main>
      <message v-show="active === 1"></message>
      <Order v-show="active === 2"></Order>
      <My v-show="active === 3"></My>
    </div>
    <div class="button-menu" style="height: 5rem;">
      <van-tabbar v-model="active" z-index="1" >
        <van-tabbar-item icon="service-o">游戏</van-tabbar-item>
        <van-tabbar-item icon="comment-o">消息</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o">下单</van-tabbar-item>
        <van-tabbar-item icon="user-o">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<style scoped>
</style>
