<template>
 <div>

 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs,onMounted} from 'vue';
import api from "@/components/http/api";
import { Datas, DatasItem , ChildrenItem } from "@/types/index";
interface Data {
    name: string;
    city: DatasItem[];
}
 export default defineComponent({
   name: '',

   components: {

   },
setup(){
const data: Data = reactive<Data>({
    name: '',
    city: [],
})
onMounted(()=>{
 api.getPosts().then((res: Datas)=>{
     console.log(res);
     data.city=res.data
     console.log(data.city);
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
