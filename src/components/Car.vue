<script setup>
import {ref} from "vue";

const Car_name = ref('欢迎您')
const Phone = ref("17777274263")
</script>

<template>
  <div class="Car-bg">
    <div class="Car-on">
      <div class="headPortrait">
        <van-image round width="5rem" height="5rem" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"/>
      </div>
      <div class="plot">
        <h3>{{Car_name}}</h3>
        <p>已经绑定号码:{{Phone}}</p>
      </div>
    </div>
    <div class="Car-down">
      <van-grid>
        <van-grid-item icon="star-o" text="收藏" to="/collection"/>
        <van-grid-item icon="like-o" text="想玩" to="/collection"/>
        <van-grid-item icon="medal-o" text="玩过" to="/collection"/>
        <van-grid-item icon="contact" text="拥有" to="/collection"/>
      </van-grid>
    </div>
  </div>
</template>

<style scoped>
.Car-bg{
  background-color: lightblue;
}
.Car-on{
  display: flex;
}
.headPortrait{
  margin: 10px;
}
</style>