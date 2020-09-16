<template>
 <div>
12122
 </div>
</template>

<script lang="ts">
import { useRouter,useRoute } from 'vue-router';
import {defineComponent, reactive, toRefs,onMounted} from 'vue'
interface Data {
    name: string;
    id: string
}
 export default defineComponent({
   name: '',
   props: {
   },
   components: {

   },
setup(){
const data: Data = reactive<Data>({
    name:'',
    id: ""
});
const route=useRoute()
onMounted(()=>{
 if(id){
    data.id=route.query.id
  }
});
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>