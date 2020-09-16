<template>
 <div>

 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs,onMounted} from 'vue'
interface Data {
    name: string;
}
 export default defineComponent({
   name: '',

   components: {

   },
setup(){
const data: Data = reactive<Data>({
    name: '',
})
onMounted(()=>{
    
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>
