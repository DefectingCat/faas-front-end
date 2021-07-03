<template>
  <div id="monaco" ref="monacoElement" class="monaco"></div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import useMonaco from '../../hook/useMonaco';
import type { editor } from 'monaco-editor';

// 用于创建 Monaco 钩子
const { createMonacoInstance, getMonacoInstance, destoryCodeEditor } =
  useMonaco();

const monacoElement = ref();

const emit = defineEmits(['asyncDone']);

let monacoInstance: editor.IStandaloneCodeEditor;
onMounted(async () => {
  await nextTick();
  createMonacoInstance(monacoElement.value);
  monacoInstance = getMonacoInstance();
  // 通知父组件加载完成
  emit('asyncDone');
  console.log(monacoInstance);
});

onUnmounted(() => {
  destoryCodeEditor();
});
</script>

<style scoped lang="scss">
.monaco {
  height: 300px;
  overflow: hidden;
}
</style>
