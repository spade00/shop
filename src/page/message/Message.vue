<script>
import {ref} from "vue";

export default {
  setup(){
    const msg = ref('')
    return{
      msg
    }
  }
}

</script>

<template>
  <div class="Message-bg">
    <div class="message-title">
      <van-nav-bar title="商城" />
    </div>
    <div class="message-theFramework">

    </div>
    <div class="message-input">
      <van-cell-group inset>
        <van-field v-model="msg" label="信息" placeholder="请输入用户名" />
      </van-cell-group>
    </div>
  </div>
</template>

<style scoped>
.message-theFramework{
  width: 99%;
  height: 85vh;
}

</style>