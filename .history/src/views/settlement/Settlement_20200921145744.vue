<template>
 <div class="w-100 d-f j-c-c">
 <!--左边-->
 <div class="left">
 <div class="f-c-he f-s-18">乘机人</div>
<div class="m-t-20">乘机人</div>
<div class="m-t-10">
<a-input
      v-model:value="value1"
      placeholder="姓名"
      allow-clear
      
    />
</div>
<div>证件类型</div>
<div class="d-f">
<a-select
      v-model:value="value1"
      style="width: 120px"
      @focus="focus"
      ref="select"
      @change="handleChange"
    >
      <a-select-option value="jack">
        Jack
      </a-select-option>
</a-select>
<a-input
      v-model:value="value1"
      placeholder="姓名"
      allow-clear
      
    />
</div>
 </div>
 <!--右边-->
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue';
import {useRoute} from "vue-router"
interface Data {
   name: string;
   item: any;
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
   item: {},
});
const route=useRoute()
onMounted(()=>{
    data.item=JSON.parse(route.query.item! as any)
    console.log(data.item);
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>
.left{
    width: 700px;
    margin-top: 20px;
}
</style>