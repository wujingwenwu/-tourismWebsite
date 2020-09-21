<template>
 <div class="w-100 d-f j-c-c">
 <!--左边-->
 <div class="left">
 <div class="f-c-he f-s-18">乘机人</div>
<div class="m-t-20">乘机人</div>
<div class="m-t-10">
<a-input
      v-model:value="value"
      placeholder="姓名"
      allow-clear
      
    />
</div>
<div>证件类型</div>
<div class="d-f m-t-10">
<a-select
      v-model:value="values"
      style="width: 120px"
      ref="select"
    >
      <a-select-option value="身份证">
        身份证
      </a-select-option>
      <a-select-option value="护照">
        护照
      </a-select-option>
</a-select>
<a-input
      v-model:value="value1"
      placeholder="证件号码"
      allow-clear
      
    />
</div>
<div class="m-t-20">
<a-button type="primary" :size="size">添加乘机人</a-button>
</div>
<div class="show m-t-20"></div>
<div class="m-t-20 f-s-18 f-c-he">保险</div>
<div class="accident d-f j-c-c a-i-c">
 <a-checkbox v-model:checked="checked" @change="onChange">
 航空意外险：￥30/份×1  最高赔付260万
  </a-checkbox>
</div>
<div class="accident d-f j-c-c a-i-c">
 <a-checkbox v-model:checked="checked" @change="onChange">
 航空意外险：￥30/份×1  最高赔付260万
  </a-checkbox>
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
   values: string;
   checked: boolean;
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
   values: "身份证",
   checked: false,
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
.show{
    width: 699px;
    border: 1px dashed #cccccc;
}
.accident{
    width: 320px;
    height: 40px;
    border-radius: 3px;
    border: 1px solid #cccccc;
    margin-top: 20px;
}
</style>