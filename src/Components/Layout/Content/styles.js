import styled from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;

export default styled(Content)`
  margin-top: ${({ theme }) => theme.header.height};
  min-height: initial;
`;
