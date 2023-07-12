<script>
import {showToast} from "vant";
import {onMounted, reactive, ref} from "vue";

export default {
  setup() {
    const onSubmit = () => showToast('点击按钮');
    const onClickLink = () => showToast('修改地址');
    const Price = ref(0)
    const Delete = (index)=>{
      OrderData.data.splice(index,1)
      Price.value = CalculatePrice();
    }
    const ButtonAdd = (index)=>{
      OrderData.data[index].count++;
      OrderData.data[index].Sum = OrderData.data[index].price*OrderData.data[index].count
      Price.value = CalculatePrice();
    }
    const ButtonSub = (index)=>{
      if (OrderData.data[index].count > 0){
        OrderData.data[index].count--;
        OrderData.data[index].Sum = OrderData.data[index].price*OrderData.data[index].count
        Price.value = CalculatePrice();
        if (OrderData.data[index].count === 0) {
          OrderData.data.splice(index,1)
        }
      }
    }

    function CalculatePrice(){
      let sum = 0;
      for(let i=0;i<OrderData.data.length;i++){
        sum = sum + OrderData.data[i].Sum
      }
      return sum
    }

    onMounted(()=>{
      Price.value = CalculatePrice();
    })
    const OrderData = reactive({
      data:[
        {
          GoodsTitle:"塞尔达传说",
          tag:["全新盒装","平台认证"],
          description:"描述信息",
          price:220,
          Sum:220,
          count:1
        },
        {
          GoodsTitle:"商品标题",
          tag:["全新盒装","平台认证"],
          description:"描述信息",
          price:220,
          Sum:220,
          count:1
        },
        {
          GoodsTitle:"商品标题",
          tag:["全新盒装","平台认证"],
          description:"描述信息",
          price:220,
          Sum:220,
          count:1
        },
        {
          GoodsTitle:"商品标题",
          tag:["全新盒装","平台认证"],
          description:"描述信息",
          price:220,
          Sum:220,
          count:1
        },
        {
          GoodsTitle:"商品标题",
          tag:["全新盒装","平台认证"],
          description:"描述信息",
          price:220,
          Sum:220,
          count:1
        },
        {
          GoodsTitle:"商品标题",
          tag:["全新盒装","平台认证"],
          description:"描述信息",
          price:220,
          Sum:220,
          count:1
        },
        {
          GoodsTitle:"商品标题",
          tag:["全新盒装","平台认证"],
          description:"描述信息",
          price:220,
          Sum:220,
          count:1
        },
        {
          GoodsTitle:"商品标题",
          tag:["全新盒装","平台认证"],
          description:"描述信息",
          price:220,
          Sum:220,
          count:1
        },
        {
          GoodsTitle:"商品标题",
          tag:["全新盒装","平台认证"],
          description:"描述信息",
          price:220,
          Sum:220,
          count:1
        },
        {
          GoodsTitle:"商品标题",
          tag:["全新盒装","平台认证"],
          description:"描述信息",
          price:220,
          Sum:220,
          count:1
        },
        {
          GoodsTitle:"商品标题",
          tag:["全新盒装","平台认证"],
          description:"描述信息",
          price:220,
          Sum:220,
          count:1
        },
      ]
    })
    return {
      onSubmit,
      onClickLink,
      OrderData,
      ButtonAdd,
      ButtonSub,
      Delete,
      Price
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
      <div  v-for="(item,index) in OrderData.data"  :class="index === OrderData.data.length-1 ? 'last-item' : ''">
        <van-swipe-cell>
          <van-card :num="item.count" :price="item.Sum" :desc="item.description" :title="item.GoodsTitle" thumb="src/assets/塞尔达传说.jpg">
            <template #tags>
              <van-tag plain type="primary" v-for="tag in item.tag">{{tag}}</van-tag>
            </template>
            <template #footer>
              <van-button size="mini" @click="ButtonAdd(index)">增加</van-button>
              <van-button size="mini" @click="ButtonSub(index)">减少</van-button>
            </template>
          </van-card>
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" @click="Delete(index)"/>
            <van-button square type="primary" text="收藏" class="delete-button" @click=""/>
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