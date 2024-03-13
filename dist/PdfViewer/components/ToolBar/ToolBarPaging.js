import { jsxs as p, jsx as s } from "react/jsx-runtime";
import { useState as f, useEffect as x } from "react";
import { useViewerState as b, useViewerDispatch as O } from "../../context/pdf-viewer-context.js";
import { s as d } from "../../../Controls.module-BgosHcEu.js";
const N = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", children: [
  /* @__PURE__ */ s("title", { children: "Previous page" }),
  /* @__PURE__ */ s(
    "path",
    {
      fill: "none",
      strokeWidth: "45",
      d: "M244 400L100 256l144-144M120 256h292"
    }
  )
] }), y = () => /* @__PURE__ */ p("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", children: [
  /* @__PURE__ */ s("title", { children: "Next page" }),
  /* @__PURE__ */ s(
    "path",
    {
      fill: "none",
      strokeWidth: "45",
      d: "M268 112l144 144-144 144M392 256H100"
    }
  )
] }), D = () => {
  const [g, l] = f(!1), [u, c] = f(!1), v = b(), { configOptions: n } = v;
  let { pdfNumPages: t, pdfPage: o } = n;
  const { pdfEnteredPage: h } = n, a = O();
  o === void 0 && (o = 1), t === void 0 && (t = 1), x(() => {
    c(o === 1), l(o === t);
  }, [o]);
  const r = (e) => {
    const i = document.getElementById(`page-${e}`);
    i && i.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    });
  }, m = () => {
    o === void 0 && (o = 1), t === void 0 && (t = 1);
    const e = o + 1;
    e <= t && (a({
      type: "updateConfigOptions",
      configOptions: { ...n, pdfPage: e, pdfEnteredPage: e + "" }
    }), r(e));
  }, P = () => {
    o === void 0 && (o = 1);
    const e = o - 1;
    e > 0 && (a({
      type: "updateConfigOptions",
      configOptions: { ...n, pdfPage: e, pdfEnteredPage: e + "" }
    }), r(e));
  }, w = (e) => {
    t === void 0 && (t = 1);
    const i = parseInt(e.target.value);
    i > 0 && i <= t ? (a({
      type: "updateConfigOptions",
      configOptions: { ...n, pdfPage: i, pdfEnteredPage: i + "" }
    }), setTimeout(() => {
      r(i);
    }, 100)) : a({
      type: "updateConfigOptions",
      configOptions: {
        ...n,
        pdfEnteredPage: e.target.value
      }
    });
  };
  return /* @__PURE__ */ p("div", { className: d.pagingWrapper, children: [
    /* @__PURE__ */ s(
      "button",
      {
        className: d.button,
        onClick: P,
        disabled: u,
        children: /* @__PURE__ */ s(N, {})
      }
    ),
    /* @__PURE__ */ p("span", { children: [
      /* @__PURE__ */ s(
        "input",
        {
          type: "text",
          value: h,
          onChange: (e) => w(e)
        }
      ),
      " ",
      "of ",
      t > 0 ? t : null
    ] }),
    /* @__PURE__ */ s(
      "button",
      {
        className: d.button,
        onClick: m,
        disabled: g,
        children: /* @__PURE__ */ s(y, {})
      }
    )
  ] });
};
export {
  D as default
};
