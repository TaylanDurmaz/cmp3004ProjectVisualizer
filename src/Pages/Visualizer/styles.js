import styled from "styled-components";

export default styled.div`
  padding: 10px ${({ theme }) => theme.main.horizontalPadding};

  .input-container {
    margin-bottom: 10px;
  }
`;
