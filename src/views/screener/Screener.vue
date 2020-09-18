<template>
 <div class="d-f w-100 j-c-c">
<div class="screener">
<div class="d-f">
<div>单程:</div>
<div class="m-l-10">{{value}}---</div>
<div>{{value1}}</div>
<div class="m-l-10">/{{value2}}</div>
<div class="m-l-20">
 <a-select
      v-model:value="values"
      style="width: 120px"
      @focus="focus" placeholder="起飞机场"
      ref="select" 
      @change="handleChange"
    >
    <a-select-option value="jack">
        Jack
      </a-select-option>
    </a-select>
     <a-select
      v-model:value="values"
      style="width: 120px"
      @focus="focus" placeholder="起飞时间"
      ref="select"
      @change="handleChange" 
    ></a-select>
     <a-select
      v-model:value="values"
      style="width: 120px"
      @focus="focus" placeholder="机型"
      ref="select"
      @change="handleChange"
    ></a-select>
</div>
</div>
</div>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue';
import { useRoute} from "vue-router";
import dayjs from 'dayjs'
interface Data {
   name: string;
   value: string; 
   value1: string; 
   value2: string; 
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
   value: '',
   value1: '',
   value2: '',
});
const route=useRoute()
onMounted(()=>{
 data.value=route.query.value! as any
 data.value1=route.query.value1! as any

 data.value2=route.query.value2! as any

 console.log(data.value2);
});
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>
.screener{
    width: 750px;
}
</style>