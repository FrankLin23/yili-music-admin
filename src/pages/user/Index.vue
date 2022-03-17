<template>
  <div class="page">
    <div class="q-mt-md q-mb-md">
      <q-btn color="primary" label="添加用户" @click="showDialog"></q-btn>
    </div>
    <q-table
      :rows="data"
      :columns="columns"
      row-key="name"
      @request="fetchData"
      v-model:pagination="pagination"
    />
    <create-dialog v-if="show" @hide="hideDialog" @create-sucess="fetchData" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { search } from "../../api/user.js";
import CreateDialog from "./CreateDialog.vue";
import { get } from "../../api/request.js";

onMounted(() => {
  fetchData();
});
const show = ref(false);
const data = ref([]);
const fetchData = () => {
  const pageable = {
    page: pagination.value.page - 1,
    size: pagination.value.rowsPerPage,
  };
  search(pageable).then((res) => {
    data.value = res.data.result;
    console.log("data: ", res.data.count);
    pagination.value.page = 1;
    pagination.value.rowsPerPage = 10;
  });
};
const pagination = ref({
  page: 1,
  rowsPerPage: 10,
});

const columns = [
  {
    label: "ID",
    field: "id",
  },
  {
    field: "username",
    label: "用户名",
  },
  {
    field: "nickname",
    label: "昵称",
  },
];
const showDialog = () => {
  show.value = true;
};
const hideDialog = () => {
  show.value = false;
};
</script>

<style scoped></style>
