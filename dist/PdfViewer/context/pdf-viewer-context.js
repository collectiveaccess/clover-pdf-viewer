import { jsx as s } from "react/jsx-runtime";
import o, { useReducer as u } from "react";
const a = {
  pdfPage: 1,
  pdfEnteredPage: 1,
  pdfNumPages: 1,
  pdfMagLevel: 100,
  pdfRotationValue: 0,
  pdfFullscreen: !1,
  pdfTwoPageSpread: !1,
  pdfToggleThumbnails: !1,
  showPdfThumbnails: !1,
  showPdfToolBar: !1,
  showPdfSearch: !1,
  showPdfZoom: !1,
  showPdfPaging: !1,
  showPdfRotate: !1,
  showPdfTwoPageSpread: !1,
  showPdfFullScreen: !1,
  canvasHeight: "61.8vh"
}, r = {
  configOptions: a
}, n = o.createContext(r), i = o.createContext(r);
function c(e, t) {
  switch (t.type) {
    case "updateConfigOptions":
      return {
        ...e,
        configOptions: {
          ...a,
          ...t.configOptions
        }
      };
    default:
      throw new Error(`Unhandled action type: ${t.type}`);
  }
}
const p = ({
  initialState: e = r,
  children: t
}) => {
  const [f, d] = u(c, e);
  return /* @__PURE__ */ s(n.Provider, { value: f, children: /* @__PURE__ */ s(
    i.Provider,
    {
      value: d,
      children: t
    }
  ) });
};
function h() {
  const e = o.useContext(n);
  if (e === void 0)
    throw new Error("useViewerState must be used within a ViewerProvider");
  return e;
}
function P() {
  const e = o.useContext(i);
  if (e === void 0)
    throw new Error("useViewerDispatch must be used within a ViewerProvider");
  return e;
}
export {
  p as ViewerProvider,
  r as defaultState,
  P as useViewerDispatch,
  h as useViewerState
};
