import React from "react";
import {
  Page,
  Navbar,
  List,
  ListItem,
  BlockTitle,
  Icon,
  useStore,
} from "framework7-react";

const SettingsPage = () => {
  const user = useStore("userInfo");
  return (
    <Page name="settings">
      <Navbar title="Settings" size={20} />

      <List mediaList strongIos>
        <ListItem
          title={user.nickname}
          text="Hello, NiceToMeetT"
          href="/infomation/"
          after={null}
        >
          <img
            slot="media"
            alt="avatar"
            style={{ borderRadius: "8px" }}
            src="https://cdn.framework7.io/placeholder/people-160x160-1.jpg"
            width="80"
          />
        </ListItem>
      </List>

      <BlockTitle>Feature</BlockTitle>
      <List strongIos menuList>
        <ListItem link="#" title="记账提醒">
          <Icon slot="media" f7="ear" size={20} />
        </ListItem>
      </List>

      <BlockTitle>Other</BlockTitle>
      <List strongIos menuList>
        <ListItem link="#" title="组件库">
          <Icon f7="light_max" slot="media" size={20} />
        </ListItem>
        <ListItem link="/update/" title="设置">
          <Icon slot="media" f7="rosette" size={20} />
        </ListItem>
        <ListItem link="/system-message/" title="系统消息" badge={3}>
          <Icon f7="list_bullet_below_rectangle" slot="media" size={20} />
        </ListItem>
        <ListItem link="/contact-us/" title="反馈">
          <Icon f7="waveform_path_ecg" slot="media" size={20} />
        </ListItem>
        <ListItem link="/update/" title="更新日志">
          <Icon f7="list_bullet_below_rectangle" slot="media" size={20} />
        </ListItem>
      </List>
    </Page>
  );
};

export default SettingsPage;
