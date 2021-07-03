<template>
  <el-form
    ref="form"
    label-width="120px"
    :model="createForm"
    :rules="createRules"
  >
    <el-form-item label="函数配置"> </el-form-item>
    <el-form-item label="函数作者">
      <el-input v-model="createForm.userId" disabled size="small"></el-input>
    </el-form-item>
    <el-form-item label="函数名称" prop="funcName">
      <el-input v-model="createForm.funcName" size="small"></el-input>
    </el-form-item>
    <el-form-item label="超时时间">
      <el-input v-model="createForm.timeout" size="small" disabled>
        <template #append>ms</template>
      </el-input>
    </el-form-item>
    <!-- <el-form-item label="函数描述">
      <el-input size="small"></el-input>
    </el-form-item> -->
  </el-form>
</template>

<script lang="ts" setup>
import { useVModels } from '@vueuse/core';
import { ref } from 'vue';
import type { ElForm } from 'element-plus';
import type { State } from '../../types/CreateFunc';

const props = defineProps<{
  createForm: State['createForm'];
  createRules: State['createRules'];
}>();

const emit = defineEmits(['update:createForm']);

const form = ref<InstanceType<typeof ElForm>>();

defineExpose({
  form,
});

const { createForm } = useVModels(props, emit);
</script>

<style scoped lang="scss">
:deep(.el-form-item) {
  align-items: center;
  .el-form-item__label {
    text-align: left;
  }
}
:deep(.el-input) {
  width: 300px;
}
</style>
