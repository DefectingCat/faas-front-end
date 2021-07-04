<template>
  <div class="home-header">
    <!-- <img src="../../assets/logo.png" alt="" /> -->
    <span>Simply FaaS</span>
    <HomeMenu class="home-menu" />
  </div>
</template>

<script lang="ts" setup>
import HomeMenu from '../common/HomeMenu.vue';
</script>

<style scoped lang="scss">
.home-header {
  display: flex;
  border-bottom: 1px solid rgb(238, 238, 238);
  align-items: center;
  img {
    height: 60px;
  }
  span {
    font-size: 24px;
    margin-right: 12px;
    user-select: none;
  }
}
.home-menu {
  flex: 1;
}
</style>
