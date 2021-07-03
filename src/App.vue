<template>
  <router-view />
</template>

<script lang="ts" setup>
import useAxios from './hook/useAxios';

const axios = useAxios();

const setUserId = async () => {
  const localId = window.localStorage.getItem('userId');
  if (!localId) {
    const {
      data: { userId },
    } = await axios.get<{ userId: string }>('/api/user');
    window.localStorage.setItem('userId', userId);
  }
};
setUserId();
</script>

<style lang="scss"></style>
