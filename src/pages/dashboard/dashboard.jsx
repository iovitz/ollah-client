import React from "react";
import { Page, Navbar, Button, NavTitle, NavRight } from "framework7-react";

const DashboardPage = () => (
  <Page name="dashboard" noToolbar>
    <Navbar sliding={false}>
      <NavTitle sliding>Dashboard</NavTitle>
      <NavRight>
        <Button tonal>9 / 2024</Button>
      </NavRight>
    </Navbar>
  </Page>
);

export default DashboardPage;
