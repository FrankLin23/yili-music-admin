<template>
  <div class="login-page">
    <div class="q-pa-md">
      <q-card class="login-form-box">
        <div class="title">原力音乐后台</div>
        <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
          <q-input
            filled
            v-model="name"
            label="用户名："
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || '请输入用户名']"
          />
          <q-input
            filled
            type="password"
            v-model="age"
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
import { useQuasar } from "quasar";
import { ref } from "vue";

const $q = useQuasar();

const name = ref(null);
const age = ref(null);
const accept = ref(false);

const onSubmit = () => {
  if (accept.value !== true) {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "You need to accept the license and terms first",
    });
  } else {
    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "cloud_done",
      message: "Submitted",
    });
  }
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
