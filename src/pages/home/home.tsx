import { NavBar, NoticeBar, SearchBar } from 'antd-mobile';
import React from 'react';

export default function Home() {
  return (
    <>
      <NavBar>标题</NavBar>
      <NoticeBar content="默认" color="default" />
      <SearchBar placeholder="请输入内容" />
    </>
  );
}
