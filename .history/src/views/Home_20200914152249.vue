<template>
  <div>
  111111111111
  // <a-carousel arrows>
  //   <template v-slot:prevArrow>
  //     <div class="custom-slick-arrow" style="left: 10px;zIndex: 1">
  //       <left-circle-outlined />
  //     </div>
  //   </template>
  //   <template v-slot:nextArrow>
  //     <div class="custom-slick-arrow" style="right: 10px">
  //       <right-circle-outlined />
  //     </div>
  //   </template>
  //   {{scenics}}123
  //   <div v-for="item in scenics" :key="item.url">
  //   <img :src="`http://157.122.54.189:9095${item.url}`" alt="">
  //   </div>
  // </a-carousel>
  </div>
</template>
<script lang='ts'>

import {defineComponent, reactive, toRefs, onMounted} from 'vue';
import api from "@/components/http/api";
import { Res, ResItem } from "@/types/index";

interface Data {
  scenics: ResItem[];
}
 export default defineComponent({
   name: '',
 
   components: {
  
   },
setup(){

const data: Data = reactive<Data>({
  scenics: [],
});
onMounted(()=>{
  api.getScenics().then((res: Res)=>{
    console.log(res);
   data.scenics=res.data
   console.log(data.scenics);
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
<style lang="scss">
/* For demo */
.ant-carousel ::v-deep(.slick-slide) {
  text-align: center;
  // height: 600px;
  // line-height: 600px;
  overflow: hidden;
}

.ant-carousel ::v-deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel ::v-deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel ::v-deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel ::v-deep(.slick-slide h3) {
  color: #fff;
}
</style>
