<template>
  <div>
   <a-carousel arrows>
    <template v-slot:prevArrow>
      <div class="custom-slick-arrow" style="left: 10px;zIndex: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template v-slot:nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined />
      </div>
    </template>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
  </div>
</template>
<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue';
import api from "@/components/http/api";
import { Res, ResItem } from "@/types/index";
interface ScenicsItem {
 url: string;
 desc:string;
}
interface Data {
  scenics: ScenicsItem[];
}
 export default defineComponent({
   name: '',
 
   components: {

   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
  scenics: [],
});
onMounted(()=>{
  api.getScenics().then((res: Res)=>{
    console.log(res);
   data.scenics=res.data
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
<style lang="">
  
</style>
