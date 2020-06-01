import styled from "styled-components";

export default styled.div`
  padding: 10px ${({ theme }) => theme.main.horizontalPadding};

  .input-col {
    margin: 5px 0px;

    .input-card {
      height: 100%;

      .input-container {
        margin-bottom: 10px;
      }
    }
  }

  .dsc {
    font-size: 13px;
  }
`;
