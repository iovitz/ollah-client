import { BlockTitle, List, ListInput, Navbar, Page } from "framework7-react";
import React from "react";

export default function Infomation() {
  return (
    <Page name="个人信息" noToolbar>
      <Navbar title="个人信息" backLink="Back" />

      <List strongIos dividersIos insetIos>
        <ListInput type="text" label="昵称" clearButton />

        <ListInput type="password" label="密码" clearButton />

        <ListInput type="email" label="邮箱地址" clearButton />

        <ListInput type="textarea" label="签名" clearButton />
      </List>
    </Page>
  );
}
