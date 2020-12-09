<template>
  <el-container>
    <el-aside width="25%">Aside</el-aside>
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">Create</el-menu-item>
          <el-menu-item index="2">Skill</el-menu-item>
          <el-menu-item index="3">Art</el-menu-item>
          <el-menu-item index="4">Lift</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <img class="logo" alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" />
        <RouterView />
      </el-main>
    </el-container>
    <el-aside width="25%">Aside</el-aside>
  </el-container>
</template>
0
<script lang="ts">
  import { defineComponent } from "vue";
  import HelloWorld from './components/HelloWorld.vue'

  export default defineComponent({
    name: "App",
    components: {
      HelloWorld
    },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  });
</script>

<style scoped>
  .logo {
    width: 50%
  }
</style>