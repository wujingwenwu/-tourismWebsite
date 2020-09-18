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
  <div class="tlined"></div>
  <SwapRightOutlined />
 <div></div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'
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
})
return {
...toRefs(data),
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
}
.tlined{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #cccccc;
}
</style>