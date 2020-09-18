<template>
 <div class="w-100 d-f f-d-c a-i-c">
 <div class="d-f">
 <div>
 <div class="d-f">
 <img src="../../img/t.png" alt="" class="img">
 <div class="m-l-10 orange">国内机票</div>
 </div>
 <div class="ticket">
 <div class="d-f">
 <div class="way d-f j-c-c a-i-c">
  <div class="tlineds d-f j-c-c a-i-c"><SwapRightOutlined /></div>
 <div>单程</div>
 </div>
 <div class="ways d-f j-c-c a-i-c" @click="returns">
  <div class="tlineds d-f j-c-c a-i-c"><SwapOutlined /></div>
 <div>往返</div>
 </div>
 </div>
<div class="d-f m-t-10">
<div class="m-l-10 m-t-5">出发城市</div>
  <div class="input m-l-10">
  <a-input
      v-model:value="value"
      placeholder="请搜索出发城市"
      allow-clear 
      @change="onChange"
    />
  </div>
</div>
<div class="d-f m-t-10">
<div class="m-l-10 m-t-5">到达城市</div>
  <div class="input m-l-10">
  <a-input
      v-model:value="value1"
      placeholder="请搜索到达城市"
      allow-clear 
      @change="onChange"
    />
  </div>
</div>
<div class="d-f m-t-10">
<div class="m-l-10 m-t-5">出发时间</div>
  <div class="input m-l-10">
  <a-date-picker v-model:value="value2" @change="onChange" placeholder="请选择日期"/>
  </div>
</div>
<a-button type="primary" class="button" block>
            搜索
            <template v-slot:icon>
              <SearchOutlined />
            </template>
          </a-button>
 </div>

 </div>
 </div>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue';
import { Modal } from 'ant-design-vue';
import { h } from 'vue';
interface Data {
    name: string;
    value2: string;
    value: string;
    value1: string;
}
 export default defineComponent({
   name: '',
   components: {

   },
setup(){

const data: Data = reactive<Data>({
    name: '',
    value2: '',
    value1: '',
    value: '',
});
 
const returns=(): void=>{
 Modal.warning({
        title: '提示',
        content: '目前暂不支持往返，请使用单程选票！',
      });
};
return {
...toRefs(data),
returns,
}
},
 })
</script>

<style scoped lang='scss'>
.img{
    width: 27px;
    height: 27px;
}
.orange{
    color: orange;
    font-size: 20px;
}
.ticket{
    width: 360px;
    height: 350px;
    border: 1px solid #cccccc;
    margin-top: 20px;
}
.way{
    width: 180px;
    height: 50px;
    color: black;
}
.ways{
    width: 181px;
    height: 50px;
    background: #cccccc;
    color: black;
}
.tlineds{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #cccccc;
}
.input{
    width: 215px;
}
.ant-input{
    width: 215px;
    z-index: 9999;
}
</style>