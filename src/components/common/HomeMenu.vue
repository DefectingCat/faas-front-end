<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    router
  >
    <el-menu-item index="/" route="/">首页</el-menu-item>
    <el-menu-item index="/doc" route="/doc">食用指南</el-menu-item>
    <el-menu-item index="/create" route="/create">编写函数</el-menu-item>
    <el-menu-item index="/list" route="/list">函数列表</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from '@vue/reactivity';
import { useRoute } from 'vue-router';

// 激活当前路由对应标签
const route = useRoute();
const activeIndex = ref(route.path);
</script>

<style scoped lang="scss">
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
</style>
