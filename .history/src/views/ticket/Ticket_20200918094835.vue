<template>
 <div class="w-100 d-f f-d-c a-i-c">
 <div class="d-f">
 <div>
 <div class="d-f">
 <i class="iconfont iconfeiji"></i>
 <div>国内机票</div>
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

</style>