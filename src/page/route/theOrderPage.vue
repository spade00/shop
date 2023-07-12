<script setup>
const onClickLeft = () => history.back();
</script>

<template>
  <div class="orderPage-bg">
    <div class="Goods-nav-bar">
      <van-nav-bar title="收藏" left-text="返回" left-arrow @click-left="onClickLeft"/>
    </div>
    订单页面
  </div>
</template>

<style scoped>

</style>