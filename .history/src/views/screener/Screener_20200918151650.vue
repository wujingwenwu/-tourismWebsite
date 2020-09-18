<template>
 <div>

 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue';
import { useRoute} from "vue-router"
interface Data {
   name: string;
   value: string; 
   value1: string; 
   value: string; 
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
});
const route=useRoute()
onMounted(()=>{
 
});
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>