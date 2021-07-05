<template>
  <div class="home-header">
    <!-- <img src="../../assets/logo.png" alt="" /> -->
    <span>Simply FaaS</span>
    <HomeMenu class="home-menu" />
    <i
      class="toggle-dark"
      :class="isDark ? 'el-icon-sunny' : 'el-icon-moon'"
      @click="swMode"
    ></i>
  </div>
</template>

<script lang="ts" setup>
import HomeMenu from '../common/HomeMenu.vue';
import { useDark, useToggle } from '@vueuse/core';
import { useStore } from 'vuex';

const isDark = useDark({
  attribute: 'color-scheme',
});
const toggleDark = useToggle(isDark);

const store = useStore();

/**
 * 切换颜色模式
 * 并将当前颜色模式保存到 store
 */
const swMode = () => {
  toggleDark();
  store.commit('toggleDark', isDark.value);
};
</script>

<style scoped lang="scss">
.home-header {
  display: flex;
  border-bottom: 1px solid var(--main-border);
  align-items: center;
  img {
    height: 60px;
  }
  span {
    font-family: 'Caveat-Regular';
    font-size: 24px;
    margin-right: 12px;
    user-select: none;
  }
  .toggle-dark {
    cursor: pointer;
  }
}
.home-menu {
  flex: 1;
}
</style>
