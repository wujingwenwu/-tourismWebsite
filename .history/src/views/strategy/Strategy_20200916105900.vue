<template>
 <div>

 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs,onMounted} from 'vue';
import api from "@/components/http/api";
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
 api.getPosts().then((res)=>{
     console.log(res);
 }).catch((err)=>{
     console.log(err);
 })
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>
