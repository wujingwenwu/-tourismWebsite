<template>
 <div class="back d-f a-i-c f-d-c">
  <div class="payment p-r">
  <div class="d-f p-a right">
  <div>支付总金额</div>
  <div class="font">￥{{price}}</div>
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
    font-size: 22px;
    color: orange;
}
</style>