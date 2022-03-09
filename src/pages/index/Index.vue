<template>
  <div>Index{{ nickname }}</div>
  <q-btn @click="logout">Logout</q-btn>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const nickname = computed(() => {
  return store.state.user.nickname;
});

const logout = () => {
  store.dispatch("user/logout").then(() => window.location.reload());
};
</script>

<style scoped></style>
