import { LoginScreen, LoginScreenTitle, Page, f7 } from "framework7-react";
import React, { useEffect, useState } from "react";
import store, { USER_STORE_KEY } from "@/js/store";
import { logger } from "@/common/logger/logger";
import LS from "@/common/local-storage/local-storage";
import { http } from "@/common/io/io";
import style from "./style.module.css";

export default function Lunch() {
  const [loginScreenOpened, setLoginScreenOpened] = useState(true);
  // mount to window for debug
  window.ff7 = f7;

  http.initial({
    baseURL: "/api",
  });

  useEffect(() => {
    let loggedIn = false;

    http
      .request({
        method: "get",
        url: "/setting",
      })
      .then((data) => {
        store.dispatch("setSetting", data);
      });

    try {
      // 持久化存储的内容
      const userInfo = LS.getItem(USER_STORE_KEY);
      store.dispatch("setUser", JSON.parse(userInfo));
      if (userInfo) {
        loggedIn = true;
      }
    } catch (e) {
      store.dispatch("setUser", {});
      logger.error("Get User Info Fail");
    }

    setTimeout(() => {
      setLoginScreenOpened(false);
      // Jump to login page if not logged in
      if (!loggedIn) {
        f7.views.main.router.navigate("/login/");
      }
    }, 2000);

    return () => {};
  }, []);

  return (
    <LoginScreen
      opened={loginScreenOpened}
      onLoginScreenClosed={() => {
        setLoginScreenOpened(false);
      }}
    >
      <Page name="lunch" loginScreen>
        <LoginScreenTitle>Luanching...</LoginScreenTitle>
        <div className="flex justify-center">
          <div className={style.loader} />
        </div>
      </Page>
    </LoginScreen>
  );
}
