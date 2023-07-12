<script setup>
</script>

<template>
  <div>
    <div>
      <slot name="order">
        <van-grid>
          <van-grid-item icon="photo-o" text="购买订单" />
          <van-grid-item icon="photo-o" text="卖出订单" />
        </van-grid>
      </slot>
    </div>
    <div>
      <slot name="service">
        <van-grid :gutter="7">
          <van-grid-item icon="photo-o" text="联系客服" />
          <van-grid-item icon="photo-o" text="投诉建议" />
          <van-grid-item icon="photo-o" text="游戏缺补" />
          <van-grid-item icon="photo-o" text="我的点卡" />
          <van-grid-item icon="photo-o" text="价格提醒" />
          <van-grid-item icon="photo-o" text="批量卖出" />
        </van-grid>
      </slot>
    </div>
  </div>
</template>

<style scoped>

</style>