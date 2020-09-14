<template>
  <div>1111</div>
</template>
<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue';
import api from "../components/http/api";
import { Res, ResItem } from "@/types/index";
interface Data {
  scenics: string[];
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
