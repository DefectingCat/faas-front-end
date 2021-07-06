import { ElMessage } from 'element-plus';
import useAxios from '../hook/useAxios';

type List = {
  userId: string;
  list: string[];
};

/**
 * 根据用户 userId 查询函数列表
 * @param  {string|null} userId 用户 id
 */
const useListFunc = async (
  userId: string | null
): Promise<
  | {
      name: string;
    }[]
  | undefined
> => {
  const axios = useAxios();

  try {
    const { data: list } = await axios.post<List>('/api/list', { userId });

    /**
     * 发送请求获取函数列表
     * 这里将返回的结果 test.js 处理为 test
     * 删除文件后缀名
     * @param  {} item
     */
    const result = list.list.map((item) => {
      const _arr = item.split('.');
      _arr.splice(_arr.length - 1, 1);
      const res = _arr.join('.');

      return { name: res };
    });

    return result;
  } catch (e) {
    ElMessage.error('请求超时!');
  }
};

export default useListFunc;
