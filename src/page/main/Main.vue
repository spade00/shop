<template>
    <div class="categoryLabels">
      <van-tabs v-model:active="activeName" sticky>
        <van-sticky :offset-top="44">
          <van-search v-model="Search_value" placeholder="请输入搜索关键词"/>
        </van-sticky>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-tab title="Switch" name="Switch"><Product_list :data="Main_data.Switch"></Product_list></van-tab>
            <van-tab title="Ps4" name="Ps4"><Product_list :data="Main_data.Ps4"></Product_list></van-tab>
            <van-tab title="Ps5" name="Ps5"><Product_list :data="Main_data.Ps5"></Product_list></van-tab>
          </van-list>
        </van-pull-refresh>
      </van-tabs>
    </div>
</template>

<style scoped>
.categoryLabels{

}
</style>
<script>
import {onMounted, reactive, ref} from "vue";
import Product_list from "@/components/Product_list.vue";
import request from "@/utils/request";

export default {
  components: {Product_list},
  setup(){
    const activeName = ref('a');
    const Search_value = ref('')

    const list = ref([]);

    const loading = ref(true);//加载
    const finished = ref(false);//加载完成
    const refreshing = ref(false);//正在刷新
    const onRefresh = () => {
      // 清空列表数据
      finished.value = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      loading.value = true;
      onLoad();
    };
    const onLoad = () => {
      setTimeout(() => {
        if (refreshing.value) {
          list.value = [];
          refreshing.value = false;
        }

        for (let i = 0; i < 10; i++) {
          list.value.push(list.value.length + 1);
        }
        loading.value = false;

        if (list.value.length >= 40) {
          finished.value = true;
        }
      }, 1000);
    };
    onMounted(()=>{
      request.get("/Product").then(res=>{
        Main_data.value = JSON.parse(res.data)
        console.log(Main_data.value)
      }).catch(err=>{
        console.log(err)
      })
    })
    let Main_data = ref({})
    return{
      activeName,
      Search_value,
      loading,
      finished,
      refreshing,
      onRefresh,
      onLoad,
      Main_data
    }
  }
}
</script>