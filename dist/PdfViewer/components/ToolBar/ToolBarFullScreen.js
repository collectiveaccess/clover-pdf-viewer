import { jsx as e, jsxs as c } from "react/jsx-runtime";
import { useViewerState as u, useViewerDispatch as f } from "../../context/pdf-viewer-context.js";
import { s as p } from "../../../Controls.module-BgosHcEu.js";
const d = () => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", children: [
  /* @__PURE__ */ e("title", { children: "Exit fullscreen" }),
  /* @__PURE__ */ e(
    "path",
    {
      d: "M432 320L432 432L320 432M80 192L80 80L192 80M320 80L432 80L432 192M192 432L80 432L80 320",
      fill: "none",
      strokeWidth: "30"
    }
  )
] }), a = () => /* @__PURE__ */ c("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", children: [
  /* @__PURE__ */ e("title", { children: "Fullscreen" }),
  /* @__PURE__ */ e(
    "path",
    {
      d: "M432 320v112H320M421.8 421.77L304 304M80 192V80h112M90.2 90.23L208 208M320 80h112v112M421.77 90.2L304 208M192 432H80V320M90.23 421.8L208 304",
      fill: "none",
      strokeWidth: "30"
    }
  )
] }), F = () => {
  const i = u(), { configOptions: n } = i, { pdfFullscreen: t } = n, s = f(), r = (o) => {
    const l = document.getElementById("pdf-viewer");
    t ? document.exitFullscreen() : l && (l.requestFullscreen && l.requestFullscreen(), l.requestFullscreen()), o.preventDefault();
  };
  return document.onfullscreenchange = function() {
    s(t ? {
      type: "updateConfigOptions",
      configOptions: { ...n, pdfFullscreen: !1 }
    } : {
      type: "updateConfigOptions",
      configOptions: { ...n, pdfFullscreen: !0 }
    });
  }, document.onfullscreenchange = function() {
    s(t ? {
      type: "updateConfigOptions",
      configOptions: { ...n, pdfFullscreen: !1 }
    } : {
      type: "updateConfigOptions",
      configOptions: { ...n, pdfFullscreen: !0 }
    });
  }, /* @__PURE__ */ e("button", { className: p.button, onClick: (o) => r(o), children: t ? /* @__PURE__ */ e(d, {}) : /* @__PURE__ */ e(a, {}) });
};
export {
  F as default
};
