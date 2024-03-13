import { jsx as t, jsxs as s } from "react/jsx-runtime";
import b from "./ToolBar/ToolBarFullScreen.js";
import P from "./ToolBar/ToolBarPaging.js";
import O from "./ToolBar/ToolBarZoom.js";
import { useViewerState as B, useViewerDispatch as M } from "../context/pdf-viewer-context.js";
import { s as e } from "../../Controls.module-BgosHcEu.js";
const x = () => /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", children: [
  /* @__PURE__ */ t("title", { children: "Zoom in" }),
  /* @__PURE__ */ t("path", { d: "M116 186L256 326", strokeWidth: "45" }),
  /* @__PURE__ */ t("path", { d: "M256 326L396 186", strokeWidth: "45" })
] }), k = () => /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", children: [
  /* @__PURE__ */ t("title", { children: "Hide controls" }),
  /* @__PURE__ */ t("path", { d: "M256 186L116 326", strokeWidth: "45" }),
  /* @__PURE__ */ t("path", { d: "M396 326L256 186", strokeWidth: "45" })
] }), y = () => /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", children: [
  /* @__PURE__ */ t("title", { children: "Rotate PDF" }),
  /* @__PURE__ */ t(
    "path",
    {
      fill: "none",
      strokeWidth: "45",
      d: "M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128"
    }
  ),
  /* @__PURE__ */ t("path", { d: "M464 97.42V208a16 16 0 01-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z" })
] }), D = () => /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", children: [
  /* @__PURE__ */ t("title", { children: "Display thumbnails" }),
  /* @__PURE__ */ t("path", { d: "M80 80L308.07 80L308.07 432L80 432L80 80Z" }),
  /* @__PURE__ */ t("path", { d: "M332 80L432 80L432 180L332 180L332 80Z" }),
  /* @__PURE__ */ t("path", { d: "M332 332L432 332L432 432L332 432L332 332Z" }),
  /* @__PURE__ */ t("path", { d: "M332 206L432 206L432 306L332 306L332 206Z" })
] }), N = () => /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", children: [
  /* @__PURE__ */ t("title", { children: "Two page layout" }),
  /* @__PURE__ */ t(
    "path",
    {
      d: "M256 376.279C334.829 339.652 432 376.279 432 376.279L432 376.279L432 136.279L432 136.279C432 136.279 334.829 99.6518 256 136.279",
      fill: "none",
      strokeWidth: "30"
    }
  ),
  /* @__PURE__ */ t("path", { d: "M256 376.279C177.171 339.652 80 376.279 80 376.279L80 376.279L80 136.279L80 136.279C80 136.279 177.171 99.6518 256 136.279" }),
  /* @__PURE__ */ t("path", { d: "M256 136.279L256 376.279", fill: "none" }),
  /* @__PURE__ */ t("path", { d: "M262.203 141.009L411.329 66.5702L411.46 286.631L262.203 365.046L262.203 141.009Z" })
] }), I = () => {
  const p = B(), { configOptions: o } = p, {
    showPdfToolBar: l,
    showPdfZoom: d,
    showPdfRotate: c,
    showPdfFullScreen: h,
    pdfFullscreen: f,
    showPdfPaging: u,
    showPdfThumbnails: g,
    pdfToggleThumbnails: w,
    showPdfTwoPageSpread: m,
    pdfTwoPageSpread: L
  } = o;
  let { pdfRotationValue: a } = o;
  const n = M(), r = (i) => {
    i.preventDefault(), n(l ? {
      type: "updateConfigOptions",
      configOptions: { ...o, showPdfToolBar: !1 }
    } : {
      type: "updateConfigOptions",
      configOptions: { ...o, showPdfToolBar: !0 }
    });
  }, v = (i) => {
    i.preventDefault(), n(w ? {
      type: "updateConfigOptions",
      configOptions: {
        ...o,
        pdfToggleThumbnails: !1
      }
    } : {
      type: "updateConfigOptions",
      configOptions: { ...o, pdfToggleThumbnails: !0 }
    });
  }, C = (i) => {
    i.preventDefault(), a === void 0 && (a = 0), a >= 0 && a < 270 ? n({
      type: "updateConfigOptions",
      configOptions: {
        ...o,
        pdfRotationValue: a + 90
      }
    }) : n({
      type: "updateConfigOptions",
      configOptions: {
        ...o,
        pdfRotationValue: 0
      }
    });
  }, T = (i) => {
    n(L ? {
      type: "updateConfigOptions",
      configOptions: {
        ...o,
        pdfTwoPageSpread: !1
      }
    } : {
      type: "updateConfigOptions",
      configOptions: {
        ...o,
        pdfTwoPageSpread: !0
      }
    }), i.preventDefault();
  };
  return l ? /* @__PURE__ */ t("div", { className: "document-toolbar-container", children: /* @__PURE__ */ s("div", { className: e.controlsWrapper, children: [
    l && /* @__PURE__ */ t(
      "button",
      {
        className: `${e.button} ${e.activeButton}`,
        onClick: r,
        children: /* @__PURE__ */ t(k, {})
      }
    ),
    !f && g ? /* @__PURE__ */ t("button", { className: e.button, onClick: v, children: /* @__PURE__ */ t(D, {}) }) : null,
    d && /* @__PURE__ */ t(O, {}),
    u && /* @__PURE__ */ t(P, {}),
    c && /* @__PURE__ */ t("button", { className: e.button, onClick: C, children: /* @__PURE__ */ t(y, {}) }),
    m && /* @__PURE__ */ t("button", { className: e.button, onClick: T, children: /* @__PURE__ */ t(N, {}) }),
    h && /* @__PURE__ */ t(b, {})
  ] }) }) : /* @__PURE__ */ t("div", { className: "document-toolbar-container", children: /* @__PURE__ */ t("div", { className: e.controlsWrapper, children: /* @__PURE__ */ t(
    "button",
    {
      className: `${e.button} ${e.activeButton}`,
      onClick: r,
      children: /* @__PURE__ */ t(x, {})
    }
  ) }) });
};
export {
  I as default
};
