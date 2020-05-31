import styled from "styled-components";

const getColor = ({ color, theme }) => {
  switch (color) {
    case "primary":
      return theme.main.primaryColor;
    case "secondary":
      return theme.main.secondaryColor;
    case "light":
      return theme.main.lightTextColor;
    default:
      return theme.main.textColor;
  }
};

export const Span = styled.span`
  font-size: ${({ theme }) => theme.main.textFontSize};
  @media (max-width: 992px) {
    font-size: ${({ theme }) => theme.main.textFontSizeMobile};
  }
  font-weight: ${({ bold }) => (bold ? "bold" : "initial")};

  color: ${getColor};
`;

export const P = styled.p`
  font-size: ${({ theme }) => theme.main.textFontSize};
  @media (max-width: 992px) {
    font-size: ${({ theme }) => theme.main.textFontSizeMobile};
  }
  font-weight: ${({ bold }) => (bold ? "bold" : "initial")};

  color: ${getColor};
`;

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.main.h1FontSize};
  @media (max-width: 992px) {
    font-size: ${({ theme }) => theme.main.h1FontSizeMobile};
  }
  font-weight: ${({ bold }) => (bold ? "bold" : "initial")};

  color: ${getColor};
`;

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.main.h2FontSize};
  @media (max-width: 992px) {
    font-size: ${({ theme }) => theme.main.h2FontSizeMobile};
  }
  font-weight: ${({ bold }) => (bold ? "bold" : "initial")};

  color: ${getColor};
`;
