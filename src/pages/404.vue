<template>
  <div class="page">
    <div class="error-code">404</div>
    <div class="tips">抱歉您访问的页面不存在！</div>
    <div class="action-area">
      <q-btn color="primary" label="返回" @click="goBack"></q-btn>
    </div>
  </div>
</template>

<script setup>
import router from "../router/index.js";

const goBack = () => {
  router.push("/");
};
</script>

<style lang="less" scoped>
.page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .error-code {
    font-size: 300px;
    line-height: 350px;
  }

  .tips {
    color: #999999;
    margin-bottom: 40px;
  }

  .action-area {
    width: 200px;
    display: flex;
    justify-content: space-around;
  }
}
</style>
