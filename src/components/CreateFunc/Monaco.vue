<template>
  <div id="monaco" ref="monacoElement" class="monaco"></div>
  <div class="save-btn">
    <el-button type="primary" plain @click="addFunc">保存函数</el-button>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import useMonaco from '../../hook/useMonaco';
import type { editor } from 'monaco-editor';

// 用于创建 Monaco 钩子
const { createMonacoInstance, getMonacoInstance, destoryCodeEditor } =
  useMonaco();

const monacoElement = ref();

const emit = defineEmits(['asyncDone', 'addFunc']);

let monacoInstance: editor.IStandaloneCodeEditor | null = null;
onMounted(async () => {
  await nextTick();
  createMonacoInstance(monacoElement.value);
  monacoInstance = getMonacoInstance();
  // 通知父组件加载完成
  emit('asyncDone', monacoInstance);
});

const addFunc = () => {
  const funContext = monacoInstance?.getValue();
  emit('addFunc', funContext);
};

onUnmounted(() => {
  destoryCodeEditor();
});
</script>

<style scoped lang="scss">
.monaco {
  height: 400px;
  overflow: hidden;
}
.save-btn {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
</style>
