<template>
  <el-container>
    <el-header>
      <HomeHeader />
    </el-header>

    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import HomeHeader from '../components/Home/HomeHeader.vue';
</script>

<style scoped lang="scss">
.el-container {
  height: 100%;
}
</style>
