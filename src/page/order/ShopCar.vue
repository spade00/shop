<script>
import {showToast} from "vant";
import {onMounted, reactive, ref} from "vue";
import request from "@/utils/request";
import router from "@/router";
import Store from "@/stores/counter"

export default {
  setup() {
    function onSubmit(){
      showToast('点击按钮')
      request.post("/PostOrder",{
        data:OrderData.data
      })
    }
    const onClickLink = () => showToast('修改地址');
    const Price = ref(0)
    function Delete (index){
      console.log(OrderData.data[index].shop_car_id)
      request.delete("/DeleteShopCar",{
        shop_car_id:OrderData.data[index].shop_car_id
      }).then(res=>{
        showToast("删除成功")
      }).catch(err=>{
        showToast("删除失败")
      })
      OrderData.data.splice(index,1)
      Price.value = CalculatePrice();
    }
    function Collect(index){
      showToast("收藏成功")
    }
    const ButtonAdd = (index)=>{
      OrderData.data[index].count++;
      Price.value = CalculatePrice();
    }
    const ButtonSub = (index)=>{
      if (OrderData.data[index].count > 0){
        OrderData.data[index].count--;
        Price.value = CalculatePrice();
        if (OrderData.data[index].count === 0) {
          Delete(index)
          showToast("删除成功")
          OrderData.data.splice(index,1)
        }
      }
    }

    function CalculatePrice(){
      let sum = 0;
      for(let i=0;i<OrderData.data.length;i++){
        sum = sum + (OrderData.data[i].count*OrderData.data[i].price)
      }
      return sum
    }

    onMounted(()=>{
      request.get("/ShopCar").then(res=>{
        OrderData.data = JSON.parse(res.data)
        Price.value = CalculatePrice();
        console.log(OrderData.data)
      }).catch(err=>{
        console.log(err)
      })
    })
    const OrderData = reactive({
      data:[
        // {
        //   product_id:"1",
        //   shop_car_id:"1",
        //   creat_time:"2023-07-13 13:30:27",
        //   title:"塞尔达传说",
        //   tag:"全新盒装、平台认证",
        //   description:"描述信息",
        //   price:220,
        //   count:1,
        //   user_id:"1",
        //   img:"src/assets/塞尔达传说.jpg"
        // },
      ]
    })
    function theJumpPage(index){
      const store = Store()
      store.Goods_data = OrderData.data[index]
      router.push({
        path:"/detail",
      })
    }
    return {
      onSubmit,
      onClickLink,
      OrderData,
      ButtonAdd,
      ButtonSub,
      Delete,
      Price,
      theJumpPage,
      Collect
    };
  },
};
</script>

<template>
  <div>
    <div class="goods-list">
      <div class="Order-nav-bar">
        <van-nav-bar title="购物车" />
      </div>
      <div  v-for="(item,index) in OrderData.data" :class="index === OrderData.data.length-1 ? 'last-item' : ''">
        <van-swipe-cell>
          <van-card :num="item.count" :price="item.count * item.price" :title="item.title" :thumb="item.img">
            <template #tags>
              <div style="padding-top: 10px">
                <van-tag @click="theJumpPage(index)" plain type="primary">{{item.tag}}</van-tag>
              </div>
            </template>
            <template #footer>
              <van-button size="mini" @click="ButtonAdd(index)">增加</van-button>
              <van-button size="mini" @click="ButtonSub(index)">减少</van-button>
            </template>
          </van-card>
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" @click="Delete(index)"/>
            <van-button square type="primary" text="收藏" class="delete-button" @click="Collect"/>
          </template>
        </van-swipe-cell>
      </div>
    </div>
    <div v-if="OrderData.data.length === 0 ">
      <van-empty image="error" description="购物车为空" />
    </div>
    <div class="goods-submit">
      <van-submit-bar class="Submit" :price="Price*100" button-text="提交订单" @submit="onSubmit"/>
    </div>
  </div>
</template>

<style scoped>
.delete-button {
  height: 100%;
}
.goods-list{
  height: 80vh;
}
.Submit{
  bottom: 3rem;
}
.last-item{
  padding-bottom: 150px;
}
</style>