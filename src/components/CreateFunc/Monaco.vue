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
import { useStore } from 'vuex';

const store = useStore();

// 用于创建 Monaco 钩子
const {
  createMonacoInstance,
  getMonacoInstance,
  destoryCodeEditor,
  setMonacoTheme,
} = useMonaco();

// 编辑器 ref
const monacoElement = ref();

const props = defineProps<{
  funContext: string;
}>();
const emit = defineEmits(['asyncDone', 'addFunc']);

let monacoInstance: editor.IStandaloneCodeEditor | null = null;
onMounted(async () => {
  await nextTick();
  if (props.funContext) {
    createMonacoInstance(monacoElement.value, props.funContext);
  } else {
    createMonacoInstance(monacoElement.value);
  }

  /**
   * 第一次加载时
   * 就切换对应颜色
   */
  store.state.isDark ? setMonacoTheme('vs-dark') : setMonacoTheme('vs');

  monacoInstance = getMonacoInstance();
  // 通知父组件加载完成
  emit('asyncDone');
});

const addFunc = () => {
  const funContext = monacoInstance?.getValue();
  emit('addFunc', funContext);
};

/**
 * 使用 store 颜色监听变化
 * 当颜色变化时，切换对应编辑器主题
 */
store.watch(
  () => store.state.isDark,
  () => {
    store.state.isDark ? setMonacoTheme('vs-dark') : setMonacoTheme('vs');
  }
);

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
