<template>
  <div class="comment d-f f-d-c a-i-c">
    <div class="top d-f j-c-s-a">
      <div class="d-f">
        <img src="http://157.122.54.189:9093/images/logo.jpg" alt width="240" height="50" />
        <div class="font m-l-10 login-hover hvr-underline-from-center" @click="clickHome" :class="[index===1?'actives':'']">首页</div>
        <div class="font m-l-10 login-hover hvr-underline-from-center">旅游攻略</div>
        <div class="font m-l-10 login-hover hvr-underline-from-center">酒店</div>
        <div class="font m-l-10 login-hover hvr-underline-from-center">国内机票</div>
      </div>
      <div class="font login-hover hvr-underline-from-center">登录/注册</div>
    </div>
    <router-view></router-view>
    <div class="bottom d-f f-d-c a-i-c">
      <div class="d-f bottom1 j-c-s-a m-t-20">
        <div>
          <div class="white f-s-18">闲云旅游旅游网</div>
          <div class="white m-t-5">上亿旅行者共同打造的"旅行神器"</div>
          <div class="d-f">
            <div class="orange">60,000</div>
            <div class="white">多个全球旅游目的地</div>
          </div>
          <div class="d-f">
          <div class="orange">600,000</div>
          <div class="white">个细分目的地新玩法</div>
          </div>
          <div class="d-f">
          <div class="orange">760,000,000</div>
          <div class="white">次攻略下载</div>
          </div>
          <div class="d-f">
          <div class="orange">38,000</div>
          <div class="white">家旅游产品供应商</div>
          </div>
        </div>
      <div>
       <div class="white f-s-18">关于我们</div>
      <div class="white">隐私政策 商标声明</div>
      <div class="white">服务协议 游记协议</div>
      <div class="white">商城平台服务协议</div>
      <div class="white">网络信息侵权通知指引</div>
      <div class="white">闲云旅游旅游网服务监督员</div>
      <div class="white">网站地图加入闲云旅游</div>
      </div>
     <div>
     <div class="white f-s-18">旅行服务</div>
     <div class="white">旅游攻略 酒店预订</div>
     <div class="white">旅游特价 国际租车</div>
     <div class="white">旅游问答 旅游保险</div>
     <div class="white">旅游指南 订火车票</div>
     <div class="white">旅游资讯 APP下载</div>
     </div>
     <div>
     <img src="../../image/qq.png" alt="" class="img">
     <div class="white mine">关注我们</div>
     </div>
      </div>
      <div class="show"></div>
      <div class="f-c-hu m-t-20">京ICP备08001421号 京公网安备110108007702 Copyright © 2016-2019 博学谷 All Rights Reserved</div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'
interface Data {
  index: number
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup( ){

let data: Data = reactive<Data>({
  index: 0
});
const clickHome=(): void=>{
  data.index=0
};
return {
...toRefs(data),
clickHome,
}
},
 })
</script>
<style scoped lang='scss'>
.comment {
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
}
.top {
  width: 100%;
  height: 50px;
  box-shadow: 0px 0px 5px #999999;
}
.font {
  font-size: 20px;
  margin-top: 10px;
}
.login-hover:hover {
  cursor: pointer;
  color: rgb(64, 158, 255);
}
.bottom {
  background: black;
  height: 300px;
  width: 100%;
}
.orange{
    color: orange;
}
.white{
    color: white;
}
.bottom1{
    width: 100%;
}
.img{
  width: 140px;
  height: 140px;  
}
.mine{
    margin-left: 45px;
}
.show{
    width: 1000px;
    height: 1px;
    background: #999999;
    margin-top: 20px;
}
.actives{

}
</style>
    
