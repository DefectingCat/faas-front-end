<template>
  <el-tabs type="border-card">
    <el-tab-pane label="快速开始">
      <div class="markdown-body" v-html="result"></div>
    </el-tab-pane>
    <el-tab-pane label="API 文档">
      <div class="markdown-body" v-html="apiDoc"></div>
    </el-tab-pane>
    <el-tab-pane label="Q&A">
      <div class="markdown-body" v-html="qaContext"></div>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import useMarkdown from '../hook/useMarkdown';
import context from '../assets/doc/quick-start';
import qa from '../assets/doc/Q&A';
import api from '../assets/doc/api';

const { mdRender } = useMarkdown();

const result = mdRender(context);
const qaContext = mdRender(qa);
const apiDoc = mdRender(api);
</script>

<style scoped lang="scss">
.el-tabs--border-card {
  border: 0;
  border-radius: 10px;
  :deep(.el-tabs__header .el-tabs__item.is-active) {
    border-right-color: transparent;
    border-left-color: transparent;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
}
.markdown-body {
  box-sizing: border-box;
  padding: 8px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>
