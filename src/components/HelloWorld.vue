<template>
  <h3>{{ message }}</h3>
  <q-btn color="primary" label="Primary" @click="clickBtn"></q-btn>

</template>

<script setup>
import {ref} from "vue";
import {sayHello} from "../api/hello";

const message = ref("Hello Vue");

const clickBtn = () => {
  sayHello().then(res => {
    message.value = res.data;
  })
}
</script>

<style></style>