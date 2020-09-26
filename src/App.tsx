import React from "react";
import "./main.global.css";

import { Layout } from "./Layout";
import { Header } from "./Header/";
import { Content } from "./Content";
import { CardsList } from "./CardsList";
import { EIcons, Icon } from "./Icon";

export function App() {
  return (
    <Layout>
      <Header />
        <Icon name={EIcons.comments} size={24} />
        <Icon name={EIcons.saving} />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
}
