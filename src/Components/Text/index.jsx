import React from "react";
import PropTypes from "prop-types";
import { Span, P, H1, H2 } from "./styles";

const Text = ({ type, color, bold, className, style, children }) => {
  const getTag = () => {
    switch (type) {
      case "title":
        return (
          <H1 className={className} style={style} color={color} bold={bold}>
            {children}
          </H1>
        );
      case "subtitle":
        return (
          <H2 className={className} style={style} color={color} bold={bold}>
            {children}
          </H2>
        );
      case "p":
        return (
          <P className={className} style={style} color={color} bold={bold}>
            {children}
          </P>
        );
      default:
        return (
          <Span className={className} style={style} color={color} bold={bold}>
            {children}
          </Span>
        );
    }
  };

  return getTag(children);
};

Text.propTypes = {
  type: PropTypes.oneOf(["title", "subtitle", "p", "span"]),
  color: PropTypes.oneOf(["primary", "secondary", "light", "dark"]),
  bold: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
};
Text.defaultProps = {
  type: "span",
  color: "dark",
  bold: false,
  className: "",
  style: null,
  children: null,
};

export default Text;
