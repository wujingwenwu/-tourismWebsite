<template>
 <div class="back d-f a-i-c f-d-c">
  <div class="payment p-r">
  <div class="d-f p-a right">
  <div class="m-t-10">支付总金额</div>
  <div class="font">￥{{price}}</div>
  </div>
  <div class="w-100 show"></div>
  <div class="w-100 back1">
  <div class="font1 m-l-20">微信支付</div>
  <div class="d-f">
  <div class="payment1"></div>
  </div>
  </div>
  </div>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue';
import {useRoute} from "vue-router"
interface Data {
   name: string;
   price: any;
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
   name: '',
   price: ''
});
const route=useRoute()
onMounted(()=>{
   data.price= route.query.price
   console.log(data.price);
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>
.back{
    background: rgb(245,245,245);
    padding: 20px 0px;
    width: 100%;
}
.payment{
    width: 1000px;
}
.right{
    right: 30px;
}
.font{
    font-size: 24px;
    color: rgb(252,108,0);
}
.show{
    margin-top: 40px;
    height: 4px;
    background: orange;
}
.back1{
    background: white;
}
.font1{
    font-size: 26px;
    color: black;
    padding: 20px 0px;
}
.payment1{
    width: 200px;
    height: 300px;
    border: 1px solid #cccccc;
}
</style>