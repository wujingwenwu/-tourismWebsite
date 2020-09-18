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
}
 export default defineComponent({
   name: '',
   components: {

   },
setup(){

const data: Data = reactive<Data>({
    name:''
});
 
const returns=(): void=>{
 Modal.warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
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
    width: 180px;
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
</style>