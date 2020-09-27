import React from "react";
import "./main.global.css";

import { Layout } from "./Layout";
import { Header } from "./Header/";
import { Content } from "./Content";
import { CardsList } from "./CardsList";

export function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
}
