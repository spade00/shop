<script setup>
import {reactive} from "vue";
import {showToast} from "vant";

const onClickLeft = () => history.back();

const GoodsData = reactive({
  images:[
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  ],
  data:{
      description:"2017-10-26发售",
      tag:["全区中文","1-2人","97分","动作"],
      price:"260",
      introductionToThe:"游戏简介：本款游戏由任天堂开发游戏简介：本款游戏由任天堂开发游戏简介：\n" +
          "        本款游戏由任天堂开发游戏简介：本款游戏由任天堂开发游戏简介：本款游戏由任天堂开发游戏简介：\n" +
          "        本款游戏由任天堂开发,游戏简介：本款游戏由任天堂开发游戏简介：本款游戏由任天堂开发游戏简介：\n" +
          "        本款游戏由任天堂开发游戏简介：本款游戏由任天堂开发游戏简介：本款游戏由任天堂开发游戏简介：\n" +
          "        本款游戏由任天堂开发," +
          "游戏简介：本款游戏由任天堂开发游戏简介：本款游戏由任天堂开发游戏简介：\n" +
          "        本款游戏由任天堂开发游戏简介：本款游戏由任天堂开发游戏简介：本款游戏由任天堂开发游戏简介：\n" +
          "        本款游戏由任天堂开发",
      payAttentionTo:"购买提示：游戏版本随机发，不支持7天无理由退款"
  }
})


const onClickIcon = ()=>showToast('点击图标')
const onClickButton = ()=>showToast('点击按钮')
</script>

<template>
  <div class="Goods-bg">
    <div class="Goods-nav-bar">
      <van-nav-bar :title="$route.query.name" left-text="返回" left-arrow @click-left="onClickLeft"/>
    </div>
    <div class="Goods-swipe">
      <van-swipe :autoplay="3000" lazy-render height="250">
        <van-swipe-item v-for="image in GoodsData.images" :key="image">
          <img :src="image"  alt="" height="250"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="Goods-title">
      <div>
        <h1 style="">{{$route.query.name}}</h1>
        <h3 style="color: red;margin: 10px">260</h3>
      </div>
      <p>{{GoodsData.data.description}}</p>
      <van-tag type="primary" v-for="item in GoodsData.data.tag">{{item}}</van-tag>
    </div>
    <div class="Goods-grid">
      <van-grid icon-size="15" border>
        <van-grid-item icon="star-o" text="收藏" />
        <van-grid-item icon="like-o" text="想玩" />
        <van-grid-item icon="medal-o" text="玩过" />
        <van-grid-item icon="contact" text="拥有" />
      </van-grid>
    </div>
    <div class="Goods-content" style="margin: 10px">
      <h2>游戏介绍</h2>
      <h3>{{GoodsData.data.payAttentionTo}}</h3>
      <p>{{GoodsData.data.introductionToThe}}</p>
    </div>
    <div class="Goods-action-bar" style="height: 5rem;">
      <van-action-bar>
        <van-action-bar-icon icon="chat-o" @click="onClickIcon" text="客服" />
        <van-action-bar-button color="#be99ff" type="warning" @click="onClickButton" text="加入购物车" />
        <van-action-bar-button color="#7232dd" type="danger" @click="onClickButton" text="立即购买" />
      </van-action-bar>
    </div>
  </div>
</template>

<style scoped>
.Goods-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: lightblue;
}
.Goods-title{
  margin: 10px;
  border: white 2px solid;
}
.Goods-title div{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>