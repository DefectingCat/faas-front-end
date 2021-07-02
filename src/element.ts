import { ElMenu, ElSubmenu, ElMenuItem } from 'element-plus';

// CSS
import 'element-plus/packages/theme-chalk/src/base.scss';
// international
import lang from 'element-plus/lib/locale/lang/zh-cn';
import 'dayjs/locale/zh-cn';
import locale from 'element-plus/lib/locale';
locale.use(lang);

const components = [ElMenu, ElSubmenu, ElMenuItem];

export default components;
