import React from "react";
import { Page, Navbar, Block, List, ListItem } from "framework7-react";

const RequestAndLoad = (props) => {
  const { user } = props;

  return (
    <Page>
      <Navbar title={`${user.firstName} ${user.lastName}`} backLink="Back" />
      <Block strong inset>
        {user.about}
      </Block>
      <List strong inset dividersIos>
        {user.links.map((link, index) => (
          <ListItem
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            link={link.url}
            title={link.title}
            external
            target="_blank"
          />
        ))}
      </List>
    </Page>
  );
};

export default RequestAndLoad;
