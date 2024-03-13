import { styled } from "@stitches/react";

const Button = styled("button", {
  display: "flex",
  height: "2rem",
  width: "2rem",
  borderRadius: "2rem",
  padding: "0",
  margin: "0",
  fontFamily: "inherit",
  background: "none",
  border: "none",
  color: "white",
  cursor: "pointer",
  marginLeft: "0.618rem",
  backgroundColor: "$primary",
  filter: "drop-shadow(2px 2px 5px #0003)",
  transition: "$all",
  boxSizing: "content-box !important",

  svg: {
    height: "60%",
    width: "60%",
    padding: "20%",
    fill: "$secondary",
    stroke: "$secondary",
    filter: "drop-shadow(2px 2px 5px #0003)",
    transition: "$all",
    boxSizing: "inherit",
  },

  "&:hover, &:focus": {
    backgroundColor: "$accent",
  },

  "&:disabled": {
    backgroundColor: "transparent",
    svg: { opacity: "0.25" },
  },
});

const PagingWrapper = styled("div", {
  display: "flex",
  marginLeft: "0.618rem",
  backgroundColor: "$accentAlt",
  borderRadius: "2rem",
  color: "$secondary",
  alignItems: "center",

  "> span": {
    margin: "0 0.5rem",
  },

  "> button": {
    backgroundColor: "$accent",
    marginLeft: "0",
  },

  input: {
    width: "1.5rem",
  },
});

const ZoomWrapper = styled("div", {
  display: "flex",
  marginLeft: "0.618rem",
  backgroundColor: "$accentAlt",
  borderRadius: "2rem",
  color: "$secondary",
  alignItems: "center",

  "> button": {
    backgroundColor: "$accent",
  },

  "> select": {
    marginLeft: "0.618rem",
  },
});

const Wrapper = styled("div", {
  display: "flex",
  position: "relative",
  width: "100%",
  padding: ".5rem",
  transition: "$all",
});

export { Button, PagingWrapper, ZoomWrapper, Wrapper };
