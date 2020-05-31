import React from "react";
import PropTypes from "prop-types";
import CardStyles from "./styles";

const Card = ({
  className,
  style,
  color,
  background,
  linear,
  shadow,
  hover,
  margin,
  padding,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  overflowX,
  overflowY,
}) => {
  return (
    <CardStyles
      className={className}
      style={style}
      color={color}
      background={background}
      linear={linear}
      shadow={shadow}
      hover={hover}
      margin={margin}
      padding={padding}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      overflowX={overflowX}
      overflowY={overflowY}
    >
      {children}
    </CardStyles>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
  background: PropTypes.string,
  linear: PropTypes.array,
  shadow: PropTypes.bool,
  hover: PropTypes.bool,
  margin: PropTypes.bool,
  padding: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  overflowX: PropTypes.string,
  overflowY: PropTypes.string,
};
Card.defaultProps = {
  className: "",
  style: null,
  color: "",
  background: "",
  linear: [],
  shadow: true,
  hover: false,
  margin: true,
  padding: true,
  children: null,
  onClick: null,
  onMouseEnter: null,
  onMouseLeave: null,
  overflowX: "hidden",
  overflowY: "hidden",
};

export default Card;
