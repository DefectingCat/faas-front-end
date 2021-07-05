import { ElForm, ElMessage } from 'element-plus';
import { Ref, ref } from 'vue';
import useAxios from '../hook/useAxios';
import type { State } from '../types/CreateFunc';

type createFunc = {
  form: Ref<
    | {
        form: InstanceType<typeof ElForm>;
      }
    | undefined
  >;
  addFunc: (funContext: string) => void;
};

/**
 * 该函数用于验证表单
 * 并将函数发送给服务器
 * @param  {State['createForm']} funcData 表单与函数体
 */
const createFunc = (funcData: State['createForm']): createFunc => {
  // 表单 ref
  const form = ref<{
    form: InstanceType<typeof ElForm>;
  }>();

  const axios = useAxios();

  const addFunc = (funContext: string) => {
    const formDom = form.value?.form;
    // 验证表单
    formDom?.validate(async (value) => {
      if (value && funContext) {
        funcData.funContext = funContext;
        const { data } = await axios.post<{
          userId: string;
          state: string;
        }>('/api/create', funcData);
        if (data.state === 'ok') {
          ElMessage.success('保存成功');
        }
      } else {
        ElMessage.warning('不可为空');
      }
    });
  };

  return {
    form,
    addFunc,
  };
};

export default createFunc;
