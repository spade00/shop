<template>
  <div class="collect-bg">
    <div class="Goods-nav-bar">
      <van-nav-bar title="收藏" left-text="返回" left-arrow @click-left="onClickLeft"/>
    </div>
    <div class="categoryLabels">
      <van-tabs v-model:active="activeName" sticky>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
          <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-tab title="收藏" name="Switch"><Product_list :data="Main_data.Switch"></Product_list></van-tab>
            <van-tab title="想玩" name="Ps4"><Product_list :data="Main_data.Ps4"></Product_list></van-tab>
            <van-tab title="玩过" name="Ps5"><Product_list :data="Main_data.Ps5"></Product_list></van-tab>
            <van-tab title="拥有" name="Ps5"><Product_list :data="Main_data.Ps5"></Product_list></van-tab>
          </van-list>
        </van-pull-refresh>
      </van-tabs>
    </div>
  </div>
</template>
<style scoped>
.categoryLabels{

}
</style>
<script>
import {reactive, ref} from "vue";
import Product_list from "@/components/Product_list.vue";

export default {
  components: {Product_list},
  setup(){

    const onClickLeft = () => history.back();

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

    const Main_data = reactive({
      Switch:[
        {
          title:"塞尔达传说",
          tag:"港区中文",
          price:"220",
          imag:"src/assets/塞尔达传说.jpg"
        },
        {
          title:"GTA5",
          tag:"港区中文",
          price:"220",
          imag:"src/assets/塞尔达传说.jpg"
        },
        {
          title:"火焰文章",
          tag:"港区中文",
          price:"220",
          imag:"src/assets/塞尔达传说.jpg"
        }
      ],
      Ps4:[
        {
          title:"血源诅咒",
          tag:"港区中文",
          price:"220",
          imag:"src/assets/塞尔达传说.jpg"
        },
        {
          title:"GTA5",
          tag:"港区中文",
          price:"220",
          imag:"src/assets/塞尔达传说.jpg"
        },
        {
          title:"神秘海域",
          tag:"港区中文",
          price:"220",
          imag:"src/assets/塞尔达传说.jpg"
        },
        {
          title:"战神4",
          tag:"港区中文",
          price:"220",
          imag:"src/assets/塞尔达传说.jpg"
        }
      ],
      Ps5:[
        {
          title:"战神5",
          tag:"港区中文",
          price:"220",
          imag:"src/assets/塞尔达传说.jpg"
        },
        {
          title:"地平线2",
          tag:"港区中文",
          price:"220",
          imag:"src/assets/塞尔达传说.jpg"
        }
      ]
    })

    return{
      activeName,
      Search_value,
      loading,
      finished,
      refreshing,
      onRefresh,
      onLoad,
      Main_data,
      onClickLeft
    }
  }
}
</script>