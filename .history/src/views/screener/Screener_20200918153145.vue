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

 const values=route.query.value2! as any
 data.value2=dayjs(values)
 console.log(data.value2);
});
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>