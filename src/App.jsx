import React from "react";
import { Layout } from "antd";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Layout/Header";
import Content from "./Components/Layout/Content";
import Visualizer from "./Pages/Visualizer";
import theme from "./theme";
import "antd/dist/antd.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout style={{ height: "100vh", overflow: "auto" }}>
        <Header>Header</Header>
        <Content>
          <Visualizer />
        </Content>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
