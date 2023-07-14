<script setup>
import {onMounted, reactive, ref} from "vue";
import {showToast} from "vant";
import Store from "@/stores/counter"
import request from "@/utils/request";

const onClickLeft = () => history.back();

const GoodsData = reactive({
  data:{
    categori_id:3,
    description:"2020-10-23发售",
    img:"src/assets/塞尔达传说.jpg",
    introductionToThe:"游戏简介：本款游戏由Sony开发",
    price:300,
    product_id:3,
    tag:"全区中文，动作，角色扮演",
    title:"Gt7"
  }
})


const onClickIcon = ()=>showToast('客服')
function onClickBuy(){
  request.post("/PostOrder",{
    data:[GoodsData.data]
  }).then(res=>{
    showToast(res.data)
  }).catch(err=>{
    console.log(err)
  })
}
const onClickShopCar = ()=>{
  request.put("/addShopCar",{
    ProductID:GoodsData.data.product_id,
    Tag: GoodsData.data.tag
  }).then(res=>{
    showToast('加入购物车成功')
  }).catch(err=>{
    showToast("加入购物车失败")
    console.log(err)
  })
}

const store = Store()
onMounted(()=>{
  GoodsData.data = store.Goods_data
})
</script>

<template>
  <div class="Goods-bg">
    <div class="Goods-nav-bar">
      <van-nav-bar :title="GoodsData.data.title" left-text="返回" left-arrow @click-left="onClickLeft"/>
    </div>
    <div class="Goods-swipe">
      <van-swipe :autoplay="3000" lazy-render height="250">
        <van-swipe-item>
          <img :src="GoodsData.data.img"  alt="" height="250"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="Goods-title">
      <div>
        <h1 style="">{{GoodsData.data.title}}</h1>
        <h3 style="color: red;margin: 10px">{{GoodsData.data.price}}</h3>
      </div>
      <p>{{GoodsData.data.description}}</p>
      <van-tag type="primary">{{GoodsData.data.tag}}</van-tag>
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
      <h3>购买提示:游戏版本随机发，不支持7天无理由退款</h3>
      <p>{{GoodsData.data.introductionToThe}}</p>
    </div>
    <div class="Goods-action-bar" style="height: 5rem;">
      <van-action-bar>
        <van-action-bar-icon icon="chat-o" @click="onClickIcon" text="客服" />
        <van-action-bar-button color="#be99ff" type="warning" @click="onClickShopCar" text="加入购物车" />
        <van-action-bar-button color="#7232dd" type="danger" @click="onClickBuy" text="立即购买" />
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