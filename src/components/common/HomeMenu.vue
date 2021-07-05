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
    <el-menu-item @click="goGithub">
      围观咸鱼
      <i class="el-icon-top-right"></i>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from '@vue/reactivity';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';

const route = useRoute();
// 激活当前路由对应标签
const activeIndex = ref(route.path);
onBeforeRouteUpdate((to) => {
  activeIndex.value = to.path;
});

const goGithub = () => {
  window.open('https://github.com/DefectingCat');
};
</script>

<style scoped lang="scss">
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
:deep(.el-menu-item [class^='el-icon-']) {
  margin-right: 0px;
  width: 12px;
  font-size: 14px;
}
</style>
