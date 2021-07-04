// CSS
import 'element-plus/packages/theme-chalk/src/base.scss';
// international
import lang from 'element-plus/lib/locale/lang/zh-cn';
import 'dayjs/locale/zh-cn';
import locale from 'element-plus/lib/locale';
locale.use(lang);

import {
  ElMenu,
  ElMenuItem,
  ElContainer,
  ElHeader,
  ElMain,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElRadioGroup,
  ElDivider,
  ElSkeleton,
  ElSkeletonItem,
  ElButton,
  ElTable,
  ElTableColumn,
  ElPopconfirm,
  ElTooltip,
} from 'element-plus';

const components = [
  ElMenu,
  ElMenuItem,
  ElContainer,
  ElHeader,
  ElMain,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElRadioGroup,
  ElDivider,
  ElSkeleton,
  ElSkeletonItem,
  ElButton,
  ElTable,
  ElTableColumn,
  ElPopconfirm,
  ElTooltip,
];

export default components;
