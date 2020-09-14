<template>
  <div>1111</div>
</template>
<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext ,onMounted} from 'vue'
interface Data {
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

let data: Data = reactive<Data>({
});
onMounted(()=>{
  
})
return {
...toRefs(data),
}
},
 })
</script>
<style lang="">
  
</style>
