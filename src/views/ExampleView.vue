<template>
  <div id="exampleView">
    <MdEditor :value="mdvalue" :handle-change="onMdChange" />
    <CodeEditor :value="codeValue" :handle-change="onCodeChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MdEditor from "@/components/MdEditor.vue"; // @ is an alias to /src
import CodeEditor from "@/components/CodeEditor.vue";

const mdValue = ref();
const codeValue = ref();
const onMdChange = (v: string) => {
  mdValue.value = v;
};
const onCodeChange = (v: string) => {
  codeValue.value = v;
};
</script>
