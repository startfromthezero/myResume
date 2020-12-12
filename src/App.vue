<template>
  <el-container>
    <el-aside width="20%"></el-aside>
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="6" v-for="item in menu" :key="item">
            <router-link :to="'/'+item" v-slot="{ href, route, navigate, isActive, isExactActive }">
              <div :class="[isActive && 'router-link-active', isExactActive && 'router-link-exact-active']">
                <a :href="href" @click="navigate">{{ item }}</a>
              </div>
            </router-link>
            <!--<router-link :to="'/'+item">{{ item }}</router-link>-->
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <!--
        <img class="logo" alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" />-->
        <RouterView />
      </el-main>
    </el-container>
    <el-aside width="20%"></el-aside>
  </el-container>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { useRouter, useRoute } from 'vue-router';
  export default defineComponent({
    name: "App",
    setup() {
      const router = useRouter()
      const route = useRoute()
      console.log(router)
      console.log(route)
      const menu = ref(["Create", "Skill", "Art", "Lift"])
      return {
        menu
      }
    }
  });
</script>
<style scoped>
  .logo {
    width: 50%
  }

  .el-header,
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body>.el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .router-link-active {
    background-color: red;
  }
</style>