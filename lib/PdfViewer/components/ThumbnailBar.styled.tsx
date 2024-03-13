import { styled } from "@stitches/react";

const ThumbnailList = styled("div", {
  backgroundColor: "#F2F2F0",
  padding: "10px",
});

const ThumbnailContainer = styled("div", {
  marginTop: "0.25rem",
  marginBottom: "0.25rem",

  "> .label": {
    textAlign: "center",
    marginTop: "0",
  },

  ".current-page": {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "$primary",
  },
});

export { ThumbnailList, ThumbnailContainer };
