<template>
 <div>

 </div>
</template>

<script lang='ts'>
import {defineComponent, reactive, toRefs, SetupContext} from 'vue'
interface Data {
  age:string
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

let data: Data = reactive<Data>({
  age:'你好'

})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>
