<template>
   <div>
       <h1>Art-{{count}}</h1>
       <div>count * 2 = {{doubleCount}}</div>
       <div>state from vuex {{a}}</div>
       <button @click="add">add</button>
       <button @click="update">update</button>
   </div>
</template>

<script lang="test">   
import { ref,watch,computed,getCurrentInstance } from "vue";
export default {
    setup(){
        const count= ref(0)
        const add = ()=>{
            count.value ++
        }
        watch(()=> count.value,val=>{
            console.log(`count is ${val}`)
        })
        const doubleCount = computed(()=> count.value * 2)
        const { ctx } = getCurrentInstance()
        //console.log(ctx.$router.currentRoute.value)
        const a = computed(()=>ctx.$store.state.test.a)
        console.log(a)
        const update = () => {
            ctx.$store.commit('setTestA', count)
        }
        return {
            count,
            add,
            doubleCount,
            update,
            a
        }
    }
}
</script>