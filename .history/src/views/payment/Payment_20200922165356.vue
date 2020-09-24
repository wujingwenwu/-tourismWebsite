<template>
 <div>

 </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs, SetupContext,onMounted} from 'vue';
import {useRoute} from "vue-router"
interface Data {
   name: string;
   
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
    route
})
return {
...toRefs(data),
}
},
 })
</script>

<style scoped lang='scss'>

</style>