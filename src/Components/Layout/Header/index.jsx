import React, { useState, useEffect } from "react";
import { Row, Modal } from "antd";
import { QuestionCircleTwoTone } from "@ant-design/icons";
import { useTheme } from "styled-components";
import Text from "../../Text";
import HeaderStyles from "./styles";

function Header() {
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => setModalVisible(true), 1000);
  }, []);

  return (
    <HeaderStyles>
      <Row justify="center" align="middle">
        <QuestionCircleTwoTone
          className="help-icon"
          style={{ fontSize: 50, marginRight: 5, color: theme.main.primary }}
          onClick={() => setModalVisible(true)}
        />

        <Text style={{ fontWeight: "bold" }}>CMP3004 Project Visualizer</Text>
      </Row>

      <Modal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={false}
      >
        It is a tool for those who do not want to waste time with visualizing.
        <br />
        <Text bold>Just change the tour with your own.</Text>
      </Modal>
    </HeaderStyles>
  );
}

export default Header;
