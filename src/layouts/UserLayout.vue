<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space
          ><img src="../assets/oj-logo.png" class="logo" />
          <div style="color: #42b983">小树枝OJ</div>
        </a-space>
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <h2 style="margin-bottom: 20px">用户登录</h2>
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        小树枝的OJ系统 by twigIcer-bin
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#userLayout {
  text-align: center;
  background: aliceblue;
}

#userLayout .logo {
  width: 64px;
  height: 64px;
}

#userLayout .header {
  /*background: aqua;*/
  margin-top: 16px;
  margin-bottom: 16px;
}

#userLayout .content {
  margin-bottom: 16px;
  padding: 20px;
}

#userLayout .footer {
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script></script>
