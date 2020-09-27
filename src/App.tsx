import React from "react";
import "./main.global.css";

import { Layout } from "./Layout";
import { Header } from "./Header/";
import { Content } from "./Content";
import { CardsList } from "./CardsList";
import { useToken } from "./hooks/useToken";

export function App() {
  const [token] = useToken();

  return (
    <Layout>
      <Header token={token} />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
}
