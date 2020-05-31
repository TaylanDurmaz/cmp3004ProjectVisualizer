import React from "react";
import { Row } from "antd";
import Text from "../../Text";
import HeaderStyles from "./styles";
import BAU_LOGO from "../../../Assets/bau.jpg";

function Header() {
  return (
    <HeaderStyles>
      <Row justify="center" align="middle">
        <img className="logo" src={BAU_LOGO} alt="BAU" />
        <Text style={{ fontWeight: "bold" }}>CMP3004 Project Visualizer</Text>
      </Row>
    </HeaderStyles>
  );
}

export default Header;
