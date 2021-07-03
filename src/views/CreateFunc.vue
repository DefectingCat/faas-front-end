<template>
  <CreateForm />
  <el-divider content-position="left">函数编辑器</el-divider>
  <el-skeleton :rows="5" :loading="loading" animated />
  <Monaco @async-done="asyncDone" />
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue';
import CreateForm from '../components/CreateFunc/CrateForm.vue';

const loading = ref(true);

// 编辑器过大，异步进行加载
const Monaco = defineAsyncComponent(
  () => import('../components/CreateFunc/Monaco.vue')
);

// 接收子组件加载完成
const asyncDone = () => {
  loading.value = false;
};
</script>

<style scoped lang="scss"></style>
