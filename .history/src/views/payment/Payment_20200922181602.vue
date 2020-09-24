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
  <div class="d-f w-100 j-c-s-a">
  <div class="payment1 d-f j-c-c a-i-c f-d-c">
  <img :src="img" alt="">
  <div class="f-c-he">请使用微信扫一扫</div>
  <div class="f-c-he">扫描二维码支付</div>
  </div>
  <div><img src="../../img/weixin.png" alt=""></div>
  </div>
  <div class="w-100 payment1 d-f j-c-c a-i-c">
  <img src="../../img/er.png" alt="">
  </div>
  </div>
  
  </div>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue';
import api from '@/components/http/api'
import {useRoute} from "vue-router";
import qrcode from 'qrcode';
interface Data {
   name: string;
   price: any;
   img: string;
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
   price: '',
   img: "",
});
const route=useRoute()
onMounted(()=>{
   data.price= route.query.price
   const id = route.query.id! as any
   console.log(id);
   api.getAirorders({id:id}).then((res:any)=>{
       qrcode.toDataURL(res.payInfo.code_url).then((res: string) => {
            data.img = res;
          });
       console.log(res);
   }).catch((err)=>{
       console.log(err);
   })
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
    width: 250px;
    height: 250px;
    border: 1px solid #cccccc;
     margin-top: 50px;
}
</style>