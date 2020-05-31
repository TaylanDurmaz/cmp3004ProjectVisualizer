import styled from "styled-components";

export default styled.header`
  z-index: 1000;

  width: 100%;
  position: fixed;
  overflow: hidden;

  padding: 5px ${({ theme }) => theme.main.horizontalPadding};

  background: ${({ theme }) => theme.header.backgroundColor};
  box-shadow: ${({ theme }) => theme.main.shadow};

  .logo {
    height: 60px;
    cursor: pointer;
  }
`;
