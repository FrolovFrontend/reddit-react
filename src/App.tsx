import React from "react";
import "./main.global.css";

import { Layout } from "./Layout";
import { Header } from "./Header/";
import { Content } from "./Content";

export function App() {
  return (
    <Layout>
      <Header />
      <Content>Content</Content>
    </Layout>
  );
}
