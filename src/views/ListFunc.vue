<template>
  <el-table :data="list" style="width: 100%">
    <el-table-column prop="name" label="函数名称"> </el-table-column>
    <el-table-column label="操作" width="400px">
      <template #default="{ row }">
        <el-button
          type="primary"
          icon="el-icon-top-right"
          plain
          size="mini"
          @click="viewFunc(row.name)"
        >
          查看
        </el-button>
        <el-button
          type="info"
          icon="el-icon-edit"
          plain
          size="mini"
          @click="editFunc(row.name)"
        >
          编辑
        </el-button>
        <el-button
          type="danger"
          icon="el-icon-delete"
          plain
          size="mini"
          @click="delFunc(row.name)"
        >
          删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { onMounted, reactive, toRefs } from 'vue';
import useListFunc from './useListFunc';
import useAxios from '../hook/useAxios';
import { ElMessage, ElMessageBox } from 'element-plus';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const axios = useAxios();
const store = useStore();
const router = useRouter();

const state = reactive({
  userId: window.localStorage.getItem('userId'),
  list: [
    {
      name: '',
    },
  ],
});

onMounted(async () => {
  state.list = await useListFunc(state.userId);
});
const { list } = toRefs(state);

const base_url = `http://127.0.0.1:3001/${state.userId}/`;
/**
 * 利用 window.open 打开新的窗口
 * 用于直接访问函数
 * @param  {string} funcName 函数名称
 */
const viewFunc = (funcName: string) => {
  window.open(`${base_url}${funcName}`);
};

type delResult = {
  state: 'ok' | 'error';
  userId: string;
};
/**
 * 使用 axios 删除指定函数
 * 并根据返回值判断成功与否
 * @param  {string} funcName 函数名称
 */
const delFunc = async (funcName: string) => {
  try {
    await ElMessageBox.confirm('删除后无法恢复，确定删除？', '确认信息', {
      distinguishCancelAndClose: true,
      confirmButtonText: '删除',
      cancelButtonText: '取消',
    });

    const { data: result } = await axios.delete<delResult>('/api/list', {
      data: {
        userId: state.userId,
        funcName,
      },
    });

    switch (result.state) {
      case 'ok': {
        ElMessage.success('删除成功!');
        state.list = await useListFunc(state.userId);
        break;
      }
      case 'error': {
        ElMessage.error('删除失败!');
        state.list = await useListFunc(state.userId);
        break;
      }
    }
  } catch (e) {
    console.log(e);
    ElMessage.info('取消删除');
  }
};

type editResult = {
  userId: string;
  funContext: string;
};
const editFunc = async (funcName: string) => {
  const { data: result } = await axios.post<editResult>('/api/edit', {
    userId: state.userId,
    funcName,
  });

  if (result.funContext === 'error') return ElMessage.error('请求错误!');
  // 将函数名称和内容保存到 store，在编辑函数页面使用
  store.commit('saveFunc', { funcName, funContext: result.funContext });
  router.push('/create');
};
</script>

<style scoped lang="scss">
// :deep(.el-table__row .cell) {
//   color: rgb(129, 115, 211);
// }
</style>
