<template>
  <CreateForm
    ref="form"
    v-model:createForm="createForm"
    :create-rules="createRules"
  />
  <el-divider content-position="left">函数编辑器</el-divider>
  <el-skeleton :rows="5" :loading="loading" animated />
  <Monaco @async-done="asyncDone" @add-func="addFunc" />
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent, reactive, toRefs } from 'vue';
import CreateForm from '../components/CreateFunc/CrateForm.vue';
import createFunc from './CreateFunc';
import type { State } from '../types/CreateFunc';

const loading = ref(true);
// 编辑器过大，异步进行加载
const Monaco = defineAsyncComponent(
  () => import('../components/CreateFunc/Monaco.vue')
);

// 接收子组件加载完成
const asyncDone = () => {
  loading.value = false;
};

// 表单数据
const state = reactive<State>({
  createForm: {
    userId: window.localStorage.getItem('userId'),
    funcName: '',
    timeout: 3000,
    funContext: '',
  },
  createRules: {
    funcName: [{ required: true, message: '请输入函数名称', trigger: 'blur' }],
  },
});
const { createForm, createRules } = toRefs(state);

// 保存函数
const { form, addFunc } = createFunc(state.createForm);
</script>

<style scoped lang="scss"></style>
