<template>
  <div class="login-page">
    <div class="q-pa-md">
      <q-card class="login-form-box">
        <div class="title">原力音乐后台</div>
        <q-form @submit="onSubmit(username, password)" class="q-gutter-md">
          <q-input
            filled
            v-model="username"
            label="用户名："
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || '请输入用户名']"
          />
          <q-input
            filled
            type="password"
            v-model="password"
            label="密码："
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || '请输入密码']"
          />

          <q-toggle v-model="accept" label="记住我" />

          <div>
            <q-btn
              class="full-width"
              label="登录"
              type="submit"
              color="primary"
            />
          </div>
        </q-form>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

const password = ref("");
const username = ref("");
const accept = ref(false);

const store = useStore();
const router = useRouter();
const route = useRoute();

const onSubmit = (username, password) => {
  store.dispatch("user/login", { username, password }).then(() => {
    store.dispatch("/user/fetchCurrentUser").then(() => {
      router.push({ path: route.query.redirect || "/" });
    });
  });
};
</script>

<style lang="less" scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login-form-box {
    .title {
      font-size: 40px;
      text-align: center;
      margin-bottom: 50px;
    }

    width: 400px;
    padding: 20px;
  }
}
</style>
