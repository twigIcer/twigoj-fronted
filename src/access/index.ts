import router from "@/router";
import store from "@/store";
import ACCESS_ENUM from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

router.beforeEach(async (to, from, next) => {
  const loginUser = store.state.user.loginUser;
  //如果之前没登陆过，自动登录
  if (!loginUser || loginUser.userRole) {
    // 加await是为了等用户登录成功后，再执行后续代码
    await store.dispatch("user/getLoginUser");
  }
  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess != ACCESS_ENUM.NOT_LOGIN) {
    if (!loginUser || loginUser.userRole) {
      next(`/user/login?redirect = ${to.fullPath}`);
      return;
    }
    if (!checkAccess(loginUser, needAccess)) {
      next("/noAuth");
      return;
    }
  }
  next();
});