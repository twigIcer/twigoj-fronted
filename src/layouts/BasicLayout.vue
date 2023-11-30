<template>
  <div id="basicLayout">
    <a-layout style="height: 400px">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        小树枝的OJ系统 by twigIcer-bin
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#basicLayout {
}

#basicLayout .header {
  /*background: aqua;*/
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 1px;
}

#basicLayout .content {
  background: aliceblue;
  margin-bottom: 16px;
}

#basicLayout .footer {
  background: aquamarine;
  padding: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
</script>
