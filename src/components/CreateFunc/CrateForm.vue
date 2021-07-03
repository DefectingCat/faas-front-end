<template>
  <el-form ref="form" label-width="120px">
    <el-form-item label="函数配置"> </el-form-item>
    <el-form-item label="函数作者">
      <el-input disabled size="small"></el-input>
    </el-form-item>
    <el-form-item label="超时时间">
      <el-input size="small">
        <template #append>ms</template>
      </el-input>
    </el-form-item>
    <el-form-item label="函数描述">
      <el-input size="small"></el-input>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup></script>

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
