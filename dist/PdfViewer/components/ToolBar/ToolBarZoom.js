import { jsx as N, jsxs as ee } from "react/jsx-runtime";
import * as x from "react";
import { useCallback as ie, createContext as rt, useMemo as Be, createElement as O, useContext as Ut, forwardRef as H, Children as pe, isValidElement as He, cloneElement as ut, Fragment as Wn, useEffect as M, useRef as k, useState as z, useLayoutEffect as Vt, useReducer as Bn } from "react";
import { r as Hn, a as zn } from "../../../index-D0toTR9A.js";
import { useViewerState as Un, useViewerDispatch as Vn } from "../../context/pdf-viewer-context.js";
import { s as Te } from "../../../Controls.module-BgosHcEu.js";
function L() {
  return L = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, L.apply(this, arguments);
}
function ce(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(r) {
    if (e == null || e(r), n === !1 || !r.defaultPrevented)
      return t == null ? void 0 : t(r);
  };
}
function jn(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function jt(...e) {
  return (t) => e.forEach(
    (n) => jn(n, t)
  );
}
function ae(...e) {
  return ie(jt(...e), e);
}
function Xt(e, t = []) {
  let n = [];
  function o(i, c) {
    const s = /* @__PURE__ */ rt(c), a = n.length;
    n = [
      ...n,
      c
    ];
    function l(u) {
      const { scope: v, children: f, ...m } = u, p = (v == null ? void 0 : v[e][a]) || s, h = Be(
        () => m,
        Object.values(m)
      );
      return /* @__PURE__ */ O(p.Provider, {
        value: h
      }, f);
    }
    function d(u, v) {
      const f = (v == null ? void 0 : v[e][a]) || s, m = Ut(f);
      if (m)
        return m;
      if (c !== void 0)
        return c;
      throw new Error(`\`${u}\` must be used within \`${i}\``);
    }
    return l.displayName = i + "Provider", [
      l,
      d
    ];
  }
  const r = () => {
    const i = n.map((c) => /* @__PURE__ */ rt(c));
    return function(s) {
      const a = (s == null ? void 0 : s[e]) || i;
      return Be(
        () => ({
          [`__scope${e}`]: {
            ...s,
            [e]: a
          }
        }),
        [
          s,
          a
        ]
      );
    };
  };
  return r.scopeName = e, [
    o,
    Xn(r, ...t)
  ];
}
function Xn(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const o = e.map(
      (r) => ({
        useScope: r(),
        scopeName: r.scopeName
      })
    );
    return function(i) {
      const c = o.reduce((s, { useScope: a, scopeName: l }) => {
        const u = a(i)[`__scope${l}`];
        return {
          ...s,
          ...u
        };
      }, {});
      return Be(
        () => ({
          [`__scope${t.scopeName}`]: c
        }),
        [
          c
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Ye = Hn();
const Yn = /* @__PURE__ */ zn(Ye), ft = /* @__PURE__ */ H((e, t) => {
  const { children: n, ...o } = e, r = pe.toArray(n), i = r.find(Zn);
  if (i) {
    const c = i.props.children, s = r.map((a) => a === i ? pe.count(c) > 1 ? pe.only(null) : /* @__PURE__ */ He(c) ? c.props.children : null : a);
    return /* @__PURE__ */ O(it, L({}, o, {
      ref: t
    }), /* @__PURE__ */ He(c) ? /* @__PURE__ */ ut(c, void 0, s) : null);
  }
  return /* @__PURE__ */ O(it, L({}, o, {
    ref: t
  }), n);
});
ft.displayName = "Slot";
const it = /* @__PURE__ */ H((e, t) => {
  const { children: n, ...o } = e;
  return /* @__PURE__ */ He(n) ? /* @__PURE__ */ ut(n, {
    ...Gn(o, n.props),
    ref: t ? jt(t, n.ref) : n.ref
  }) : pe.count(n) > 1 ? pe.only(null) : null;
});
it.displayName = "SlotClone";
const Kn = ({ children: e }) => /* @__PURE__ */ O(Wn, null, e);
function Zn(e) {
  return /* @__PURE__ */ He(e) && e.type === Kn;
}
function Gn(e, t) {
  const n = {
    ...t
  };
  for (const o in t) {
    const r = e[o], i = t[o];
    /^on[A-Z]/.test(o) ? r && i ? n[o] = (...s) => {
      i(...s), r(...s);
    } : r && (n[o] = r) : o === "style" ? n[o] = {
      ...r,
      ...i
    } : o === "className" && (n[o] = [
      r,
      i
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
const qn = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], ge = qn.reduce((e, t) => {
  const n = /* @__PURE__ */ H((o, r) => {
    const { asChild: i, ...c } = o, s = i ? ft : t;
    return M(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ O(s, L({}, c, {
      ref: r
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function Qn(e, t) {
  e && Ye.flushSync(
    () => e.dispatchEvent(t)
  );
}
function te(e) {
  const t = k(e);
  return M(() => {
    t.current = e;
  }), Be(
    () => (...n) => {
      var o;
      return (o = t.current) === null || o === void 0 ? void 0 : o.call(t, ...n);
    },
    []
  );
}
function Jn(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = te(e);
  M(() => {
    const o = (r) => {
      r.key === "Escape" && n(r);
    };
    return t.addEventListener("keydown", o), () => t.removeEventListener("keydown", o);
  }, [
    n,
    t
  ]);
}
const ct = "dismissableLayer.update", eo = "dismissableLayer.pointerDownOutside", to = "dismissableLayer.focusOutside";
let Ct;
const no = /* @__PURE__ */ rt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), oo = /* @__PURE__ */ H((e, t) => {
  var n;
  const { disableOutsidePointerEvents: o = !1, onEscapeKeyDown: r, onPointerDownOutside: i, onFocusOutside: c, onInteractOutside: s, onDismiss: a, ...l } = e, d = Ut(no), [u, v] = z(null), f = (n = u == null ? void 0 : u.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, m] = z({}), p = ae(
    t,
    (C) => v(C)
  ), h = Array.from(d.layers), [g] = [
    ...d.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = h.indexOf(g), b = u ? h.indexOf(u) : -1, y = d.layersWithOutsidePointerEventsDisabled.size > 0, $ = b >= w, E = ro((C) => {
    const R = C.target, I = [
      ...d.branches
    ].some(
      (F) => F.contains(R)
    );
    !$ || I || (i == null || i(C), s == null || s(C), C.defaultPrevented || a == null || a());
  }, f), P = io((C) => {
    const R = C.target;
    [
      ...d.branches
    ].some(
      (F) => F.contains(R)
    ) || (c == null || c(C), s == null || s(C), C.defaultPrevented || a == null || a());
  }, f);
  return Jn((C) => {
    b === d.layers.size - 1 && (r == null || r(C), !C.defaultPrevented && a && (C.preventDefault(), a()));
  }, f), M(() => {
    if (u)
      return o && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Ct = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(u)), d.layers.add(u), Et(), () => {
        o && d.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Ct);
      };
  }, [
    u,
    f,
    o,
    d
  ]), M(() => () => {
    u && (d.layers.delete(u), d.layersWithOutsidePointerEventsDisabled.delete(u), Et());
  }, [
    u,
    d
  ]), M(() => {
    const C = () => m({});
    return document.addEventListener(ct, C), () => document.removeEventListener(ct, C);
  }, []), /* @__PURE__ */ O(ge.div, L({}, l, {
    ref: p,
    style: {
      pointerEvents: y ? $ ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: ce(e.onFocusCapture, P.onFocusCapture),
    onBlurCapture: ce(e.onBlurCapture, P.onBlurCapture),
    onPointerDownCapture: ce(e.onPointerDownCapture, E.onPointerDownCapture)
  }));
});
function ro(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = te(e), o = k(!1), r = k(() => {
  });
  return M(() => {
    const i = (s) => {
      if (s.target && !o.current) {
        let l = function() {
          Yt(eo, n, a, {
            discrete: !0
          });
        };
        const a = {
          originalEvent: s
        };
        s.pointerType === "touch" ? (t.removeEventListener("click", r.current), r.current = l, t.addEventListener("click", r.current, {
          once: !0
        })) : l();
      } else
        t.removeEventListener("click", r.current);
      o.current = !1;
    }, c = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(c), t.removeEventListener("pointerdown", i), t.removeEventListener("click", r.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => o.current = !0
  };
}
function io(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = te(e), o = k(!1);
  return M(() => {
    const r = (i) => {
      i.target && !o.current && Yt(to, n, {
        originalEvent: i
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", r), () => t.removeEventListener("focusin", r);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => o.current = !0,
    onBlurCapture: () => o.current = !1
  };
}
function Et() {
  const e = new CustomEvent(ct);
  document.dispatchEvent(e);
}
function Yt(e, t, n, { discrete: o }) {
  const r = n.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && r.addEventListener(e, t, {
    once: !0
  }), o ? Qn(r, i) : r.dispatchEvent(i);
}
let qe = 0;
function co() {
  M(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : Pt()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : Pt()), qe++, () => {
      qe === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (o) => o.remove()
      ), qe--;
    };
  }, []);
}
function Pt() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
const Qe = "focusScope.autoFocusOnMount", Je = "focusScope.autoFocusOnUnmount", Ot = {
  bubbles: !1,
  cancelable: !0
}, so = /* @__PURE__ */ H((e, t) => {
  const { loop: n = !1, trapped: o = !1, onMountAutoFocus: r, onUnmountAutoFocus: i, ...c } = e, [s, a] = z(null), l = te(r), d = te(i), u = k(null), v = ae(
    t,
    (p) => a(p)
  ), f = k({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  M(() => {
    if (o) {
      let p = function(b) {
        if (f.paused || !s)
          return;
        const y = b.target;
        s.contains(y) ? u.current = y : J(u.current, {
          select: !0
        });
      }, h = function(b) {
        if (f.paused || !s)
          return;
        const y = b.relatedTarget;
        y !== null && (s.contains(y) || J(u.current, {
          select: !0
        }));
      }, g = function(b) {
        if (document.activeElement === document.body)
          for (const $ of b)
            $.removedNodes.length > 0 && J(s);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", h);
      const w = new MutationObserver(g);
      return s && w.observe(s, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", h), w.disconnect();
      };
    }
  }, [
    o,
    s,
    f.paused
  ]), M(() => {
    if (s) {
      At.add(f);
      const p = document.activeElement;
      if (!s.contains(p)) {
        const g = new CustomEvent(Qe, Ot);
        s.addEventListener(Qe, l), s.dispatchEvent(g), g.defaultPrevented || (ao(vo(Kt(s)), {
          select: !0
        }), document.activeElement === p && J(s));
      }
      return () => {
        s.removeEventListener(Qe, l), setTimeout(() => {
          const g = new CustomEvent(Je, Ot);
          s.addEventListener(Je, d), s.dispatchEvent(g), g.defaultPrevented || J(p ?? document.body, {
            select: !0
          }), s.removeEventListener(Je, d), At.remove(f);
        }, 0);
      };
    }
  }, [
    s,
    l,
    d,
    f
  ]);
  const m = ie((p) => {
    if (!n && !o || f.paused)
      return;
    const h = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, g = document.activeElement;
    if (h && g) {
      const w = p.currentTarget, [b, y] = lo(w);
      b && y ? !p.shiftKey && g === y ? (p.preventDefault(), n && J(b, {
        select: !0
      })) : p.shiftKey && g === b && (p.preventDefault(), n && J(y, {
        select: !0
      })) : g === w && p.preventDefault();
    }
  }, [
    n,
    o,
    f.paused
  ]);
  return /* @__PURE__ */ O(ge.div, L({
    tabIndex: -1
  }, c, {
    ref: v,
    onKeyDown: m
  }));
});
function ao(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const o of e)
    if (J(o, {
      select: t
    }), document.activeElement !== n)
      return;
}
function lo(e) {
  const t = Kt(e), n = St(t, e), o = St(t.reverse(), e);
  return [
    n,
    o
  ];
}
function Kt(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function St(e, t) {
  for (const n of e)
    if (!uo(n, {
      upTo: t
    }))
      return n;
}
function uo(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function fo(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function J(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && fo(e) && t && e.select();
  }
}
const At = po();
function po() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Rt(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Rt(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function Rt(e, t) {
  const n = [
    ...e
  ], o = n.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
function vo(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const he = globalThis != null && globalThis.document ? Vt : () => {
}, ho = x.useId || (() => {
});
let mo = 0;
function go(e) {
  const [t, n] = x.useState(ho());
  return he(() => {
    e || n(
      (o) => o ?? String(mo++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
const bo = ["top", "right", "bottom", "left"], ne = Math.min, W = Math.max, ze = Math.round, De = Math.floor, oe = (e) => ({
  x: e,
  y: e
}), yo = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, wo = {
  start: "end",
  end: "start"
};
function st(e, t, n) {
  return W(e, ne(t, n));
}
function K(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Z(e) {
  return e.split("-")[0];
}
function be(e) {
  return e.split("-")[1];
}
function dt(e) {
  return e === "x" ? "y" : "x";
}
function pt(e) {
  return e === "y" ? "height" : "width";
}
function ye(e) {
  return ["top", "bottom"].includes(Z(e)) ? "y" : "x";
}
function vt(e) {
  return dt(ye(e));
}
function $o(e, t, n) {
  n === void 0 && (n = !1);
  const o = be(e), r = vt(e), i = pt(r);
  let c = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (c = Ue(c)), [c, Ue(c)];
}
function xo(e) {
  const t = Ue(e);
  return [at(e), t, at(t)];
}
function at(e) {
  return e.replace(/start|end/g, (t) => wo[t]);
}
function Co(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], i = ["top", "bottom"], c = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? i : c;
    default:
      return [];
  }
}
function Eo(e, t, n, o) {
  const r = be(e);
  let i = Co(Z(e), n === "start", o);
  return r && (i = i.map((c) => c + "-" + r), t && (i = i.concat(i.map(at)))), i;
}
function Ue(e) {
  return e.replace(/left|right|bottom|top/g, (t) => yo[t]);
}
function Po(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Zt(e) {
  return typeof e != "number" ? Po(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ve(e) {
  return {
    ...e,
    top: e.y,
    left: e.x,
    right: e.x + e.width,
    bottom: e.y + e.height
  };
}
function Tt(e, t, n) {
  let {
    reference: o,
    floating: r
  } = e;
  const i = ye(t), c = vt(t), s = pt(c), a = Z(t), l = i === "y", d = o.x + o.width / 2 - r.width / 2, u = o.y + o.height / 2 - r.height / 2, v = o[s] / 2 - r[s] / 2;
  let f;
  switch (a) {
    case "top":
      f = {
        x: d,
        y: o.y - r.height
      };
      break;
    case "bottom":
      f = {
        x: d,
        y: o.y + o.height
      };
      break;
    case "right":
      f = {
        x: o.x + o.width,
        y: u
      };
      break;
    case "left":
      f = {
        x: o.x - r.width,
        y: u
      };
      break;
    default:
      f = {
        x: o.x,
        y: o.y
      };
  }
  switch (be(t)) {
    case "start":
      f[c] -= v * (n && l ? -1 : 1);
      break;
    case "end":
      f[c] += v * (n && l ? -1 : 1);
      break;
  }
  return f;
}
const Oo = async (e, t, n) => {
  const {
    placement: o = "bottom",
    strategy: r = "absolute",
    middleware: i = [],
    platform: c
  } = n, s = i.filter(Boolean), a = await (c.isRTL == null ? void 0 : c.isRTL(t));
  let l = await c.getElementRects({
    reference: e,
    floating: t,
    strategy: r
  }), {
    x: d,
    y: u
  } = Tt(l, o, a), v = o, f = {}, m = 0;
  for (let p = 0; p < s.length; p++) {
    const {
      name: h,
      fn: g
    } = s[p], {
      x: w,
      y: b,
      data: y,
      reset: $
    } = await g({
      x: d,
      y: u,
      initialPlacement: o,
      placement: v,
      strategy: r,
      middlewareData: f,
      rects: l,
      platform: c,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = w ?? d, u = b ?? u, f = {
      ...f,
      [h]: {
        ...f[h],
        ...y
      }
    }, $ && m <= 50 && (m++, typeof $ == "object" && ($.placement && (v = $.placement), $.rects && (l = $.rects === !0 ? await c.getElementRects({
      reference: e,
      floating: t,
      strategy: r
    }) : $.rects), {
      x: d,
      y: u
    } = Tt(l, v, a)), p = -1);
  }
  return {
    x: d,
    y: u,
    placement: v,
    strategy: r,
    middlewareData: f
  };
};
async function xe(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: o,
    y: r,
    platform: i,
    rects: c,
    elements: s,
    strategy: a
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: u = "floating",
    altBoundary: v = !1,
    padding: f = 0
  } = K(t, e), m = Zt(f), h = s[v ? u === "floating" ? "reference" : "floating" : u], g = Ve(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(h))) == null || n ? h : h.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: d,
    strategy: a
  })), w = u === "floating" ? {
    ...c.floating,
    x: o,
    y: r
  } : c.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), y = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, $ = Ve(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: b,
    strategy: a
  }) : w);
  return {
    top: (g.top - $.top + m.top) / y.y,
    bottom: ($.bottom - g.bottom + m.bottom) / y.y,
    left: (g.left - $.left + m.left) / y.x,
    right: ($.right - g.right + m.right) / y.x
  };
}
const So = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: o,
      placement: r,
      rects: i,
      platform: c,
      elements: s,
      middlewareData: a
    } = t, {
      element: l,
      padding: d = 0
    } = K(e, t) || {};
    if (l == null)
      return {};
    const u = Zt(d), v = {
      x: n,
      y: o
    }, f = vt(r), m = pt(f), p = await c.getDimensions(l), h = f === "y", g = h ? "top" : "left", w = h ? "bottom" : "right", b = h ? "clientHeight" : "clientWidth", y = i.reference[m] + i.reference[f] - v[f] - i.floating[m], $ = v[f] - i.reference[f], E = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(l));
    let P = E ? E[b] : 0;
    (!P || !await (c.isElement == null ? void 0 : c.isElement(E))) && (P = s.floating[b] || i.floating[m]);
    const C = y / 2 - $ / 2, R = P / 2 - p[m] / 2 - 1, I = ne(u[g], R), F = ne(u[w], R), T = I, V = P - p[m] - F, A = P / 2 - p[m] / 2 + C, D = st(T, A, V), _ = !a.arrow && be(r) != null && A !== D && i.reference[m] / 2 - (A < T ? I : F) - p[m] / 2 < 0, S = _ ? A < T ? A - T : A - V : 0;
    return {
      [f]: v[f] + S,
      data: {
        [f]: D,
        centerOffset: A - D - S,
        ..._ && {
          alignmentOffset: S
        }
      },
      reset: _
    };
  }
}), Ao = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, o;
      const {
        placement: r,
        middlewareData: i,
        rects: c,
        initialPlacement: s,
        platform: a,
        elements: l
      } = t, {
        mainAxis: d = !0,
        crossAxis: u = !0,
        fallbackPlacements: v,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: p = !0,
        ...h
      } = K(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const g = Z(r), w = Z(s) === s, b = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), y = v || (w || !p ? [Ue(s)] : xo(s));
      !v && m !== "none" && y.push(...Eo(s, p, m, b));
      const $ = [s, ...y], E = await xe(t, h), P = [];
      let C = ((o = i.flip) == null ? void 0 : o.overflows) || [];
      if (d && P.push(E[g]), u) {
        const T = $o(r, c, b);
        P.push(E[T[0]], E[T[1]]);
      }
      if (C = [...C, {
        placement: r,
        overflows: P
      }], !P.every((T) => T <= 0)) {
        var R, I;
        const T = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1, V = $[T];
        if (V)
          return {
            data: {
              index: T,
              overflows: C
            },
            reset: {
              placement: V
            }
          };
        let A = (I = C.filter((D) => D.overflows[0] <= 0).sort((D, _) => D.overflows[1] - _.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!A)
          switch (f) {
            case "bestFit": {
              var F;
              const D = (F = C.map((_) => [_.placement, _.overflows.filter((S) => S > 0).reduce((S, Q) => S + Q, 0)]).sort((_, S) => _[1] - S[1])[0]) == null ? void 0 : F[0];
              D && (A = D);
              break;
            }
            case "initialPlacement":
              A = s;
              break;
          }
        if (r !== A)
          return {
            reset: {
              placement: A
            }
          };
      }
      return {};
    }
  };
};
function Dt(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Nt(e) {
  return bo.some((t) => e[t] >= 0);
}
const Ro = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: o = "referenceHidden",
        ...r
      } = K(e, t);
      switch (o) {
        case "referenceHidden": {
          const i = await xe(t, {
            ...r,
            elementContext: "reference"
          }), c = Dt(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: c,
              referenceHidden: Nt(c)
            }
          };
        }
        case "escaped": {
          const i = await xe(t, {
            ...r,
            altBoundary: !0
          }), c = Dt(i, n.floating);
          return {
            data: {
              escapedOffsets: c,
              escaped: Nt(c)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function To(e, t) {
  const {
    placement: n,
    platform: o,
    elements: r
  } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), c = Z(n), s = be(n), a = ye(n) === "y", l = ["left", "top"].includes(c) ? -1 : 1, d = i && a ? -1 : 1, u = K(t, e);
  let {
    mainAxis: v,
    crossAxis: f,
    alignmentAxis: m
  } = typeof u == "number" ? {
    mainAxis: u,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...u
  };
  return s && typeof m == "number" && (f = s === "end" ? m * -1 : m), a ? {
    x: f * d,
    y: v * l
  } : {
    x: v * l,
    y: f * d
  };
}
const Do = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, o;
      const {
        x: r,
        y: i,
        placement: c,
        middlewareData: s
      } = t, a = await To(t, e);
      return c === ((n = s.offset) == null ? void 0 : n.placement) && (o = s.arrow) != null && o.alignmentOffset ? {} : {
        x: r + a.x,
        y: i + a.y,
        data: {
          ...a,
          placement: c
        }
      };
    }
  };
}, No = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: o,
        placement: r
      } = t, {
        mainAxis: i = !0,
        crossAxis: c = !1,
        limiter: s = {
          fn: (h) => {
            let {
              x: g,
              y: w
            } = h;
            return {
              x: g,
              y: w
            };
          }
        },
        ...a
      } = K(e, t), l = {
        x: n,
        y: o
      }, d = await xe(t, a), u = ye(Z(r)), v = dt(u);
      let f = l[v], m = l[u];
      if (i) {
        const h = v === "y" ? "top" : "left", g = v === "y" ? "bottom" : "right", w = f + d[h], b = f - d[g];
        f = st(w, f, b);
      }
      if (c) {
        const h = u === "y" ? "top" : "left", g = u === "y" ? "bottom" : "right", w = m + d[h], b = m - d[g];
        m = st(w, m, b);
      }
      const p = s.fn({
        ...t,
        [v]: f,
        [u]: m
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - o
        }
      };
    }
  };
}, Lo = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: o,
        placement: r,
        rects: i,
        middlewareData: c
      } = t, {
        offset: s = 0,
        mainAxis: a = !0,
        crossAxis: l = !0
      } = K(e, t), d = {
        x: n,
        y: o
      }, u = ye(r), v = dt(u);
      let f = d[v], m = d[u];
      const p = K(s, t), h = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (a) {
        const b = v === "y" ? "height" : "width", y = i.reference[v] - i.floating[b] + h.mainAxis, $ = i.reference[v] + i.reference[b] - h.mainAxis;
        f < y ? f = y : f > $ && (f = $);
      }
      if (l) {
        var g, w;
        const b = v === "y" ? "width" : "height", y = ["top", "left"].includes(Z(r)), $ = i.reference[u] - i.floating[b] + (y && ((g = c.offset) == null ? void 0 : g[u]) || 0) + (y ? 0 : h.crossAxis), E = i.reference[u] + i.reference[b] + (y ? 0 : ((w = c.offset) == null ? void 0 : w[u]) || 0) - (y ? h.crossAxis : 0);
        m < $ ? m = $ : m > E && (m = E);
      }
      return {
        [v]: f,
        [u]: m
      };
    }
  };
}, _o = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: o,
        platform: r,
        elements: i
      } = t, {
        apply: c = () => {
        },
        ...s
      } = K(e, t), a = await xe(t, s), l = Z(n), d = be(n), u = ye(n) === "y", {
        width: v,
        height: f
      } = o.floating;
      let m, p;
      l === "top" || l === "bottom" ? (m = l, p = d === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (p = l, m = d === "end" ? "top" : "bottom");
      const h = f - a[m], g = v - a[p], w = !t.middlewareData.shift;
      let b = h, y = g;
      if (u) {
        const E = v - a.left - a.right;
        y = d || w ? ne(g, E) : E;
      } else {
        const E = f - a.top - a.bottom;
        b = d || w ? ne(h, E) : E;
      }
      if (w && !d) {
        const E = W(a.left, 0), P = W(a.right, 0), C = W(a.top, 0), R = W(a.bottom, 0);
        u ? y = v - 2 * (E !== 0 || P !== 0 ? E + P : W(a.left, a.right)) : b = f - 2 * (C !== 0 || R !== 0 ? C + R : W(a.top, a.bottom));
      }
      await c({
        ...t,
        availableWidth: y,
        availableHeight: b
      });
      const $ = await r.getDimensions(i.floating);
      return v !== $.width || f !== $.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function re(e) {
  return Gt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function B(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function q(e) {
  var t;
  return (t = (Gt(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Gt(e) {
  return e instanceof Node || e instanceof B(e).Node;
}
function G(e) {
  return e instanceof Element || e instanceof B(e).Element;
}
function X(e) {
  return e instanceof HTMLElement || e instanceof B(e).HTMLElement;
}
function Lt(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof B(e).ShadowRoot;
}
function Pe(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: o,
    display: r
  } = U(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function Mo(e) {
  return ["table", "td", "th"].includes(re(e));
}
function ht(e) {
  const t = mt(), n = U(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function ko(e) {
  let t = me(e);
  for (; X(t) && !Ke(t); ) {
    if (ht(t))
      return t;
    t = me(t);
  }
  return null;
}
function mt() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ke(e) {
  return ["html", "body", "#document"].includes(re(e));
}
function U(e) {
  return B(e).getComputedStyle(e);
}
function Ze(e) {
  return G(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function me(e) {
  if (re(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Lt(e) && e.host || // Fallback.
    q(e)
  );
  return Lt(t) ? t.host : t;
}
function qt(e) {
  const t = me(e);
  return Ke(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : X(t) && Pe(t) ? t : qt(t);
}
function Ce(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = qt(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), c = B(r);
  return i ? t.concat(c, c.visualViewport || [], Pe(r) ? r : [], c.frameElement && n ? Ce(c.frameElement) : []) : t.concat(r, Ce(r, [], n));
}
function Qt(e) {
  const t = U(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = X(e), i = r ? e.offsetWidth : n, c = r ? e.offsetHeight : o, s = ze(n) !== i || ze(o) !== c;
  return s && (n = i, o = c), {
    width: n,
    height: o,
    $: s
  };
}
function gt(e) {
  return G(e) ? e : e.contextElement;
}
function ve(e) {
  const t = gt(e);
  if (!X(t))
    return oe(1);
  const n = t.getBoundingClientRect(), {
    width: o,
    height: r,
    $: i
  } = Qt(t);
  let c = (i ? ze(n.width) : n.width) / o, s = (i ? ze(n.height) : n.height) / r;
  return (!c || !Number.isFinite(c)) && (c = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: c,
    y: s
  };
}
const Fo = /* @__PURE__ */ oe(0);
function Jt(e) {
  const t = B(e);
  return !mt() || !t.visualViewport ? Fo : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Io(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== B(e) ? !1 : t;
}
function se(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), i = gt(e);
  let c = oe(1);
  t && (o ? G(o) && (c = ve(o)) : c = ve(e));
  const s = Io(i, n, o) ? Jt(i) : oe(0);
  let a = (r.left + s.x) / c.x, l = (r.top + s.y) / c.y, d = r.width / c.x, u = r.height / c.y;
  if (i) {
    const v = B(i), f = o && G(o) ? B(o) : o;
    let m = v, p = m.frameElement;
    for (; p && o && f !== m; ) {
      const h = ve(p), g = p.getBoundingClientRect(), w = U(p), b = g.left + (p.clientLeft + parseFloat(w.paddingLeft)) * h.x, y = g.top + (p.clientTop + parseFloat(w.paddingTop)) * h.y;
      a *= h.x, l *= h.y, d *= h.x, u *= h.y, a += b, l += y, m = B(p), p = m.frameElement;
    }
  }
  return Ve({
    width: d,
    height: u,
    x: a,
    y: l
  });
}
const Wo = [":popover-open", ":modal"];
function en(e) {
  return Wo.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Bo(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: o,
    strategy: r
  } = e;
  const i = r === "fixed", c = q(o), s = t ? en(t.floating) : !1;
  if (o === c || s && i)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = oe(1);
  const d = oe(0), u = X(o);
  if ((u || !u && !i) && ((re(o) !== "body" || Pe(c)) && (a = Ze(o)), X(o))) {
    const v = se(o);
    l = ve(o), d.x = v.x + o.clientLeft, d.y = v.y + o.clientTop;
  }
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - a.scrollLeft * l.x + d.x,
    y: n.y * l.y - a.scrollTop * l.y + d.y
  };
}
function Ho(e) {
  return Array.from(e.getClientRects());
}
function tn(e) {
  return se(q(e)).left + Ze(e).scrollLeft;
}
function zo(e) {
  const t = q(e), n = Ze(e), o = e.ownerDocument.body, r = W(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), i = W(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let c = -n.scrollLeft + tn(e);
  const s = -n.scrollTop;
  return U(o).direction === "rtl" && (c += W(t.clientWidth, o.clientWidth) - r), {
    width: r,
    height: i,
    x: c,
    y: s
  };
}
function Uo(e, t) {
  const n = B(e), o = q(e), r = n.visualViewport;
  let i = o.clientWidth, c = o.clientHeight, s = 0, a = 0;
  if (r) {
    i = r.width, c = r.height;
    const l = mt();
    (!l || l && t === "fixed") && (s = r.offsetLeft, a = r.offsetTop);
  }
  return {
    width: i,
    height: c,
    x: s,
    y: a
  };
}
function Vo(e, t) {
  const n = se(e, !0, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, i = X(e) ? ve(e) : oe(1), c = e.clientWidth * i.x, s = e.clientHeight * i.y, a = r * i.x, l = o * i.y;
  return {
    width: c,
    height: s,
    x: a,
    y: l
  };
}
function _t(e, t, n) {
  let o;
  if (t === "viewport")
    o = Uo(e, n);
  else if (t === "document")
    o = zo(q(e));
  else if (G(t))
    o = Vo(t, n);
  else {
    const r = Jt(e);
    o = {
      ...t,
      x: t.x - r.x,
      y: t.y - r.y
    };
  }
  return Ve(o);
}
function nn(e, t) {
  const n = me(e);
  return n === t || !G(n) || Ke(n) ? !1 : U(n).position === "fixed" || nn(n, t);
}
function jo(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = Ce(e, [], !1).filter((s) => G(s) && re(s) !== "body"), r = null;
  const i = U(e).position === "fixed";
  let c = i ? me(e) : e;
  for (; G(c) && !Ke(c); ) {
    const s = U(c), a = ht(c);
    !a && s.position === "fixed" && (r = null), (i ? !a && !r : !a && s.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || Pe(c) && !a && nn(e, c)) ? o = o.filter((d) => d !== c) : r = s, c = me(c);
  }
  return t.set(e, o), o;
}
function Xo(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: o,
    strategy: r
  } = e;
  const c = [...n === "clippingAncestors" ? jo(t, this._c) : [].concat(n), o], s = c[0], a = c.reduce((l, d) => {
    const u = _t(t, d, r);
    return l.top = W(u.top, l.top), l.right = ne(u.right, l.right), l.bottom = ne(u.bottom, l.bottom), l.left = W(u.left, l.left), l;
  }, _t(t, s, r));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function Yo(e) {
  const {
    width: t,
    height: n
  } = Qt(e);
  return {
    width: t,
    height: n
  };
}
function Ko(e, t, n) {
  const o = X(t), r = q(t), i = n === "fixed", c = se(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = oe(0);
  if (o || !o && !i)
    if ((re(t) !== "body" || Pe(r)) && (s = Ze(t)), o) {
      const u = se(t, !0, i, t);
      a.x = u.x + t.clientLeft, a.y = u.y + t.clientTop;
    } else
      r && (a.x = tn(r));
  const l = c.left + s.scrollLeft - a.x, d = c.top + s.scrollTop - a.y;
  return {
    x: l,
    y: d,
    width: c.width,
    height: c.height
  };
}
function Mt(e, t) {
  return !X(e) || U(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function on(e, t) {
  const n = B(e);
  if (!X(e) || en(e))
    return n;
  let o = Mt(e, t);
  for (; o && Mo(o) && U(o).position === "static"; )
    o = Mt(o, t);
  return o && (re(o) === "html" || re(o) === "body" && U(o).position === "static" && !ht(o)) ? n : o || ko(e) || n;
}
const Zo = async function(e) {
  const t = this.getOffsetParent || on, n = this.getDimensions;
  return {
    reference: Ko(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      ...await n(e.floating)
    }
  };
};
function Go(e) {
  return U(e).direction === "rtl";
}
const qo = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Bo,
  getDocumentElement: q,
  getClippingRect: Xo,
  getOffsetParent: on,
  getElementRects: Zo,
  getClientRects: Ho,
  getDimensions: Yo,
  getScale: ve,
  isElement: G,
  isRTL: Go
};
function Qo(e, t) {
  let n = null, o;
  const r = q(e);
  function i() {
    var s;
    clearTimeout(o), (s = n) == null || s.disconnect(), n = null;
  }
  function c(s, a) {
    s === void 0 && (s = !1), a === void 0 && (a = 1), i();
    const {
      left: l,
      top: d,
      width: u,
      height: v
    } = e.getBoundingClientRect();
    if (s || t(), !u || !v)
      return;
    const f = De(d), m = De(r.clientWidth - (l + u)), p = De(r.clientHeight - (d + v)), h = De(l), w = {
      rootMargin: -f + "px " + -m + "px " + -p + "px " + -h + "px",
      threshold: W(0, ne(1, a)) || 1
    };
    let b = !0;
    function y($) {
      const E = $[0].intersectionRatio;
      if (E !== a) {
        if (!b)
          return c();
        E ? c(!1, E) : o = setTimeout(() => {
          c(!1, 1e-7);
        }, 100);
      }
      b = !1;
    }
    try {
      n = new IntersectionObserver(y, {
        ...w,
        // Handle <iframe>s
        root: r.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(y, w);
    }
    n.observe(e);
  }
  return c(!0), i;
}
function Jo(e, t, n, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: r = !0,
    ancestorResize: i = !0,
    elementResize: c = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = o, l = gt(e), d = r || i ? [...l ? Ce(l) : [], ...Ce(t)] : [];
  d.forEach((g) => {
    r && g.addEventListener("scroll", n, {
      passive: !0
    }), i && g.addEventListener("resize", n);
  });
  const u = l && s ? Qo(l, n) : null;
  let v = -1, f = null;
  c && (f = new ResizeObserver((g) => {
    let [w] = g;
    w && w.target === l && f && (f.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var b;
      (b = f) == null || b.observe(t);
    })), n();
  }), l && !a && f.observe(l), f.observe(t));
  let m, p = a ? se(e) : null;
  a && h();
  function h() {
    const g = se(e);
    p && (g.x !== p.x || g.y !== p.y || g.width !== p.width || g.height !== p.height) && n(), p = g, m = requestAnimationFrame(h);
  }
  return n(), () => {
    var g;
    d.forEach((w) => {
      r && w.removeEventListener("scroll", n), i && w.removeEventListener("resize", n);
    }), u == null || u(), (g = f) == null || g.disconnect(), f = null, a && cancelAnimationFrame(m);
  };
}
const er = No, tr = Ao, nr = _o, or = Ro, kt = So, rr = Lo, ir = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = {
    platform: qo,
    ...n
  }, i = {
    ...r.platform,
    _c: o
  };
  return Oo(e, t, {
    ...r,
    platform: i
  });
}, cr = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: o,
        padding: r
      } = typeof e == "function" ? e(n) : e;
      return o && t(o) ? o.current != null ? kt({
        element: o.current,
        padding: r
      }).fn(n) : {} : o ? kt({
        element: o,
        padding: r
      }).fn(n) : {};
    }
  };
};
var Fe = typeof document < "u" ? Vt : M;
function je(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, o, r;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length)
        return !1;
      for (o = n; o-- !== 0; )
        if (!je(e[o], t[o]))
          return !1;
      return !0;
    }
    if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length)
      return !1;
    for (o = n; o-- !== 0; )
      if (!{}.hasOwnProperty.call(t, r[o]))
        return !1;
    for (o = n; o-- !== 0; ) {
      const i = r[o];
      if (!(i === "_owner" && e.$$typeof) && !je(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function rn(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Ft(e, t) {
  const n = rn(e);
  return Math.round(t * n) / n;
}
function It(e) {
  const t = x.useRef(e);
  return Fe(() => {
    t.current = e;
  }), t;
}
function sr(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: o = [],
    platform: r,
    elements: {
      reference: i,
      floating: c
    } = {},
    transform: s = !0,
    whileElementsMounted: a,
    open: l
  } = e, [d, u] = x.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [v, f] = x.useState(o);
  je(v, o) || f(o);
  const [m, p] = x.useState(null), [h, g] = x.useState(null), w = x.useCallback((S) => {
    S !== E.current && (E.current = S, p(S));
  }, []), b = x.useCallback((S) => {
    S !== P.current && (P.current = S, g(S));
  }, []), y = i || m, $ = c || h, E = x.useRef(null), P = x.useRef(null), C = x.useRef(d), R = a != null, I = It(a), F = It(r), T = x.useCallback(() => {
    if (!E.current || !P.current)
      return;
    const S = {
      placement: t,
      strategy: n,
      middleware: v
    };
    F.current && (S.platform = F.current), ir(E.current, P.current, S).then((Q) => {
      const Y = {
        ...Q,
        isPositioned: !0
      };
      V.current && !je(C.current, Y) && (C.current = Y, Ye.flushSync(() => {
        u(Y);
      }));
    });
  }, [v, t, n, F]);
  Fe(() => {
    l === !1 && C.current.isPositioned && (C.current.isPositioned = !1, u((S) => ({
      ...S,
      isPositioned: !1
    })));
  }, [l]);
  const V = x.useRef(!1);
  Fe(() => (V.current = !0, () => {
    V.current = !1;
  }), []), Fe(() => {
    if (y && (E.current = y), $ && (P.current = $), y && $) {
      if (I.current)
        return I.current(y, $, T);
      T();
    }
  }, [y, $, T, I, R]);
  const A = x.useMemo(() => ({
    reference: E,
    floating: P,
    setReference: w,
    setFloating: b
  }), [w, b]), D = x.useMemo(() => ({
    reference: y,
    floating: $
  }), [y, $]), _ = x.useMemo(() => {
    const S = {
      position: n,
      left: 0,
      top: 0
    };
    if (!D.floating)
      return S;
    const Q = Ft(D.floating, d.x), Y = Ft(D.floating, d.y);
    return s ? {
      ...S,
      transform: "translate(" + Q + "px, " + Y + "px)",
      ...rn(D.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: Q,
      top: Y
    };
  }, [n, s, D.floating, d.x, d.y]);
  return x.useMemo(() => ({
    ...d,
    update: T,
    refs: A,
    elements: D,
    floatingStyles: _
  }), [d, T, A, D, _]);
}
function ar(e) {
  const [t, n] = z(void 0);
  return he(() => {
    if (e) {
      n({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const o = new ResizeObserver((r) => {
        if (!Array.isArray(r) || !r.length)
          return;
        const i = r[0];
        let c, s;
        if ("borderBoxSize" in i) {
          const a = i.borderBoxSize, l = Array.isArray(a) ? a[0] : a;
          c = l.inlineSize, s = l.blockSize;
        } else
          c = e.offsetWidth, s = e.offsetHeight;
        n({
          width: c,
          height: s
        });
      });
      return o.observe(e, {
        box: "border-box"
      }), () => o.unobserve(e);
    } else
      n(void 0);
  }, [
    e
  ]), t;
}
const cn = "Popper", [sn, an] = Xt(cn), [lr, ln] = sn(cn), ur = (e) => {
  const { __scopePopper: t, children: n } = e, [o, r] = z(null);
  return /* @__PURE__ */ O(lr, {
    scope: t,
    anchor: o,
    onAnchorChange: r
  }, n);
}, fr = "PopperAnchor", dr = /* @__PURE__ */ H((e, t) => {
  const { __scopePopper: n, virtualRef: o, ...r } = e, i = ln(fr, n), c = k(null), s = ae(t, c);
  return M(() => {
    i.onAnchorChange((o == null ? void 0 : o.current) || c.current);
  }), o ? null : /* @__PURE__ */ O(ge.div, L({}, r, {
    ref: s
  }));
}), un = "PopperContent", [pr, Di] = sn(un), vr = /* @__PURE__ */ H((e, t) => {
  var n, o, r, i, c, s, a, l;
  const { __scopePopper: d, side: u = "bottom", sideOffset: v = 0, align: f = "center", alignOffset: m = 0, arrowPadding: p = 0, avoidCollisions: h = !0, collisionBoundary: g = [], collisionPadding: w = 0, sticky: b = "partial", hideWhenDetached: y = !1, updatePositionStrategy: $ = "optimized", onPlaced: E, ...P } = e, C = ln(un, d), [R, I] = z(null), F = ae(
    t,
    ($e) => I($e)
  ), [T, V] = z(null), A = ar(T), D = (n = A == null ? void 0 : A.width) !== null && n !== void 0 ? n : 0, _ = (o = A == null ? void 0 : A.height) !== null && o !== void 0 ? o : 0, S = u + (f !== "center" ? "-" + f : ""), Q = typeof w == "number" ? w : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...w
  }, Y = Array.isArray(g) ? g : [
    g
  ], On = Y.length > 0, Oe = {
    padding: Q,
    boundary: Y.filter(hr),
    // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
    altBoundary: On
  }, { refs: Sn, floatingStyles: wt, placement: An, isPositioned: Se, middlewareData: le } = sr({
    // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
    strategy: "fixed",
    placement: S,
    whileElementsMounted: (...$e) => Jo(...$e, {
      animationFrame: $ === "always"
    }),
    elements: {
      reference: C.anchor
    },
    middleware: [
      Do({
        mainAxis: v + _,
        alignmentAxis: m
      }),
      h && er({
        mainAxis: !0,
        crossAxis: !1,
        limiter: b === "partial" ? rr() : void 0,
        ...Oe
      }),
      h && tr({
        ...Oe
      }),
      nr({
        ...Oe,
        apply: ({ elements: $e, rects: xt, availableWidth: Mn, availableHeight: kn }) => {
          const { width: Fn, height: In } = xt.reference, Re = $e.floating.style;
          Re.setProperty("--radix-popper-available-width", `${Mn}px`), Re.setProperty("--radix-popper-available-height", `${kn}px`), Re.setProperty("--radix-popper-anchor-width", `${Fn}px`), Re.setProperty("--radix-popper-anchor-height", `${In}px`);
        }
      }),
      T && cr({
        element: T,
        padding: p
      }),
      mr({
        arrowWidth: D,
        arrowHeight: _
      }),
      y && or({
        strategy: "referenceHidden",
        ...Oe
      })
    ]
  }), [$t, Rn] = fn(An), Ae = te(E);
  he(() => {
    Se && (Ae == null || Ae());
  }, [
    Se,
    Ae
  ]);
  const Tn = (r = le.arrow) === null || r === void 0 ? void 0 : r.x, Dn = (i = le.arrow) === null || i === void 0 ? void 0 : i.y, Nn = ((c = le.arrow) === null || c === void 0 ? void 0 : c.centerOffset) !== 0, [Ln, _n] = z();
  return he(() => {
    R && _n(window.getComputedStyle(R).zIndex);
  }, [
    R
  ]), /* @__PURE__ */ O("div", {
    ref: Sn.setFloating,
    "data-radix-popper-content-wrapper": "",
    style: {
      ...wt,
      transform: Se ? wt.transform : "translate(0, -200%)",
      // keep off the page when measuring
      minWidth: "max-content",
      zIndex: Ln,
      "--radix-popper-transform-origin": [
        (s = le.transformOrigin) === null || s === void 0 ? void 0 : s.x,
        (a = le.transformOrigin) === null || a === void 0 ? void 0 : a.y
      ].join(" ")
    },
    dir: e.dir
  }, /* @__PURE__ */ O(pr, {
    scope: d,
    placedSide: $t,
    onArrowChange: V,
    arrowX: Tn,
    arrowY: Dn,
    shouldHideArrow: Nn
  }, /* @__PURE__ */ O(ge.div, L({
    "data-side": $t,
    "data-align": Rn
  }, P, {
    ref: F,
    style: {
      ...P.style,
      // if the PopperContent hasn't been placed yet (not all measurements done)
      // we prevent animations so that users's animation don't kick in too early referring wrong sides
      animation: Se ? void 0 : "none",
      // hide the content if using the hide middleware and should be hidden
      opacity: (l = le.hide) !== null && l !== void 0 && l.referenceHidden ? 0 : void 0
    }
  }))));
});
function hr(e) {
  return e !== null;
}
const mr = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var n, o, r, i, c;
    const { placement: s, rects: a, middlewareData: l } = t, u = ((n = l.arrow) === null || n === void 0 ? void 0 : n.centerOffset) !== 0, v = u ? 0 : e.arrowWidth, f = u ? 0 : e.arrowHeight, [m, p] = fn(s), h = {
      start: "0%",
      center: "50%",
      end: "100%"
    }[p], g = ((o = (r = l.arrow) === null || r === void 0 ? void 0 : r.x) !== null && o !== void 0 ? o : 0) + v / 2, w = ((i = (c = l.arrow) === null || c === void 0 ? void 0 : c.y) !== null && i !== void 0 ? i : 0) + f / 2;
    let b = "", y = "";
    return m === "bottom" ? (b = u ? h : `${g}px`, y = `${-f}px`) : m === "top" ? (b = u ? h : `${g}px`, y = `${a.floating.height + f}px`) : m === "right" ? (b = `${-f}px`, y = u ? h : `${w}px`) : m === "left" && (b = `${a.floating.width + f}px`, y = u ? h : `${w}px`), {
      data: {
        x: b,
        y
      }
    };
  }
});
function fn(e) {
  const [t, n = "center"] = e.split("-");
  return [
    t,
    n
  ];
}
const gr = ur, br = dr, yr = vr, wr = /* @__PURE__ */ H((e, t) => {
  var n;
  const { container: o = globalThis == null || (n = globalThis.document) === null || n === void 0 ? void 0 : n.body, ...r } = e;
  return o ? /* @__PURE__ */ Yn.createPortal(/* @__PURE__ */ O(ge.div, L({}, r, {
    ref: t
  })), o) : null;
});
function $r(e, t) {
  return Bn((n, o) => {
    const r = t[n][o];
    return r ?? n;
  }, e);
}
const bt = (e) => {
  const { present: t, children: n } = e, o = xr(t), r = typeof n == "function" ? n({
    present: o.isPresent
  }) : pe.only(n), i = ae(o.ref, r.ref);
  return typeof n == "function" || o.isPresent ? /* @__PURE__ */ ut(r, {
    ref: i
  }) : null;
};
bt.displayName = "Presence";
function xr(e) {
  const [t, n] = z(), o = k({}), r = k(e), i = k("none"), c = e ? "mounted" : "unmounted", [s, a] = $r(c, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return M(() => {
    const l = Ne(o.current);
    i.current = s === "mounted" ? l : "none";
  }, [
    s
  ]), he(() => {
    const l = o.current, d = r.current;
    if (d !== e) {
      const v = i.current, f = Ne(l);
      e ? a("MOUNT") : f === "none" || (l == null ? void 0 : l.display) === "none" ? a("UNMOUNT") : a(d && v !== f ? "ANIMATION_OUT" : "UNMOUNT"), r.current = e;
    }
  }, [
    e,
    a
  ]), he(() => {
    if (t) {
      const l = (u) => {
        const f = Ne(o.current).includes(u.animationName);
        u.target === t && f && Ye.flushSync(
          () => a("ANIMATION_END")
        );
      }, d = (u) => {
        u.target === t && (i.current = Ne(o.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      a("ANIMATION_END");
  }, [
    t,
    a
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(s),
    ref: ie((l) => {
      l && (o.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Ne(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Cr({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [o, r] = Er({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, c = i ? e : o, s = te(n), a = ie((l) => {
    if (i) {
      const u = typeof l == "function" ? l(e) : l;
      u !== e && s(u);
    } else
      r(l);
  }, [
    i,
    e,
    r,
    s
  ]);
  return [
    c,
    a
  ];
}
function Er({ defaultProp: e, onChange: t }) {
  const n = z(e), [o] = n, r = k(o), i = te(t);
  return M(() => {
    r.current !== o && (i(o), r.current = o);
  }, [
    o,
    r,
    i
  ]), n;
}
var Pr = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, ue = /* @__PURE__ */ new WeakMap(), Le = /* @__PURE__ */ new WeakMap(), _e = {}, et = 0, dn = function(e) {
  return e && (e.host || dn(e.parentNode));
}, Or = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var o = dn(n);
    return o && e.contains(o) ? o : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Sr = function(e, t, n, o) {
  var r = Or(t, Array.isArray(e) ? e : [e]);
  _e[n] || (_e[n] = /* @__PURE__ */ new WeakMap());
  var i = _e[n], c = [], s = /* @__PURE__ */ new Set(), a = new Set(r), l = function(u) {
    !u || s.has(u) || (s.add(u), l(u.parentNode));
  };
  r.forEach(l);
  var d = function(u) {
    !u || a.has(u) || Array.prototype.forEach.call(u.children, function(v) {
      if (s.has(v))
        d(v);
      else {
        var f = v.getAttribute(o), m = f !== null && f !== "false", p = (ue.get(v) || 0) + 1, h = (i.get(v) || 0) + 1;
        ue.set(v, p), i.set(v, h), c.push(v), p === 1 && m && Le.set(v, !0), h === 1 && v.setAttribute(n, "true"), m || v.setAttribute(o, "true");
      }
    });
  };
  return d(t), s.clear(), et++, function() {
    c.forEach(function(u) {
      var v = ue.get(u) - 1, f = i.get(u) - 1;
      ue.set(u, v), i.set(u, f), v || (Le.has(u) || u.removeAttribute(o), Le.delete(u)), f || u.removeAttribute(n);
    }), et--, et || (ue = /* @__PURE__ */ new WeakMap(), ue = /* @__PURE__ */ new WeakMap(), Le = /* @__PURE__ */ new WeakMap(), _e = {});
  };
}, Ar = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), r = t || Pr(e);
  return r ? (o.push.apply(o, Array.from(r.querySelectorAll("[aria-live]"))), Sr(o, r, n, "aria-hidden")) : function() {
    return null;
  };
}, j = function() {
  return j = Object.assign || function(t) {
    for (var n, o = 1, r = arguments.length; o < r; o++) {
      n = arguments[o];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, j.apply(this, arguments);
};
function pn(e, t) {
  var n = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, o = Object.getOwnPropertySymbols(e); r < o.length; r++)
      t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = e[o[r]]);
  return n;
}
function Rr(e, t, n) {
  if (n || arguments.length === 2)
    for (var o = 0, r = t.length, i; o < r; o++)
      (i || !(o in t)) && (i || (i = Array.prototype.slice.call(t, 0, o)), i[o] = t[o]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ie = "right-scroll-bar-position", We = "width-before-scroll-bar", Tr = "with-scroll-bars-hidden", Dr = "--removed-body-scroll-bar-size";
function tt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Nr(e, t) {
  var n = z(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(o) {
          var r = n.value;
          r !== o && (n.value = o, n.callback(o, r));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Wt = /* @__PURE__ */ new WeakMap();
function Lr(e, t) {
  var n = Nr(t || null, function(o) {
    return e.forEach(function(r) {
      return tt(r, o);
    });
  });
  return x.useLayoutEffect(function() {
    var o = Wt.get(n);
    if (o) {
      var r = new Set(o), i = new Set(e), c = n.current;
      r.forEach(function(s) {
        i.has(s) || tt(s, null);
      }), i.forEach(function(s) {
        r.has(s) || tt(s, c);
      });
    }
    Wt.set(n, e);
  }, [e]), n;
}
function _r(e) {
  return e;
}
function Mr(e, t) {
  t === void 0 && (t = _r);
  var n = [], o = !1, r = {
    read: function() {
      if (o)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var c = t(i, o);
      return n.push(c), function() {
        n = n.filter(function(s) {
          return s !== c;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (o = !0; n.length; ) {
        var c = n;
        n = [], c.forEach(i);
      }
      n = {
        push: function(s) {
          return i(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      o = !0;
      var c = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(i), c = n;
      }
      var a = function() {
        var d = c;
        c = [], d.forEach(i);
      }, l = function() {
        return Promise.resolve().then(a);
      };
      l(), n = {
        push: function(d) {
          c.push(d), l();
        },
        filter: function(d) {
          return c = c.filter(d), n;
        }
      };
    }
  };
  return r;
}
function kr(e) {
  e === void 0 && (e = {});
  var t = Mr(null);
  return t.options = j({ async: !0, ssr: !1 }, e), t;
}
var vn = function(e) {
  var t = e.sideCar, n = pn(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var o = t.read();
  if (!o)
    throw new Error("Sidecar medium not found");
  return x.createElement(o, j({}, n));
};
vn.isSideCarExport = !0;
function Fr(e, t) {
  return e.useMedium(t), vn;
}
var hn = kr(), nt = function() {
}, Ge = x.forwardRef(function(e, t) {
  var n = x.useRef(null), o = x.useState({
    onScrollCapture: nt,
    onWheelCapture: nt,
    onTouchMoveCapture: nt
  }), r = o[0], i = o[1], c = e.forwardProps, s = e.children, a = e.className, l = e.removeScrollBar, d = e.enabled, u = e.shards, v = e.sideCar, f = e.noIsolation, m = e.inert, p = e.allowPinchZoom, h = e.as, g = h === void 0 ? "div" : h, w = pn(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), b = v, y = Lr([n, t]), $ = j(j({}, w), r);
  return x.createElement(
    x.Fragment,
    null,
    d && x.createElement(b, { sideCar: hn, removeScrollBar: l, shards: u, noIsolation: f, inert: m, setCallbacks: i, allowPinchZoom: !!p, lockRef: n }),
    c ? x.cloneElement(x.Children.only(s), j(j({}, $), { ref: y })) : x.createElement(g, j({}, $, { className: a, ref: y }), s)
  );
});
Ge.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ge.classNames = {
  fullWidth: We,
  zeroRight: Ie
};
var Ir = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Wr() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ir();
  return t && e.setAttribute("nonce", t), e;
}
function Br(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Hr(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var zr = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Wr()) && (Br(t, n), Hr(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Ur = function() {
  var e = zr();
  return function(t, n) {
    x.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, mn = function() {
  var e = Ur(), t = function(n) {
    var o = n.styles, r = n.dynamic;
    return e(o, r), null;
  };
  return t;
}, Vr = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ot = function(e) {
  return parseInt(e || "", 10) || 0;
}, jr = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], o = t[e === "padding" ? "paddingTop" : "marginTop"], r = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ot(n), ot(o), ot(r)];
}, Xr = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Vr;
  var t = jr(e), n = document.documentElement.clientWidth, o = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, o - n + t[2] - t[0])
  };
}, Yr = mn(), Xe = "data-scroll-locked", Kr = function(e, t, n, o) {
  var r = e.left, i = e.top, c = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Tr, ` {
   overflow: hidden `).concat(o, `;
   padding-right: `).concat(s, "px ").concat(o, `;
  }
  body[`).concat(Xe, `] {
    overflow: hidden `).concat(o, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(o, ";"),
    n === "margin" && `
    padding-left: `.concat(r, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(o, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(o, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Ie, ` {
    right: `).concat(s, "px ").concat(o, `;
  }
  
  .`).concat(We, ` {
    margin-right: `).concat(s, "px ").concat(o, `;
  }
  
  .`).concat(Ie, " .").concat(Ie, ` {
    right: 0 `).concat(o, `;
  }
  
  .`).concat(We, " .").concat(We, ` {
    margin-right: 0 `).concat(o, `;
  }
  
  body[`).concat(Xe, `] {
    `).concat(Dr, ": ").concat(s, `px;
  }
`);
}, Zr = function(e) {
  var t = e.noRelative, n = e.noImportant, o = e.gapMode, r = o === void 0 ? "margin" : o, i = x.useMemo(function() {
    return Xr(r);
  }, [r]);
  return x.useEffect(function() {
    return document.body.setAttribute(Xe, ""), function() {
      document.body.removeAttribute(Xe);
    };
  }, []), x.createElement(Yr, { styles: Kr(i, !t, r, n ? "" : "!important") });
}, lt = !1;
if (typeof window < "u")
  try {
    var Me = Object.defineProperty({}, "passive", {
      get: function() {
        return lt = !0, !0;
      }
    });
    window.addEventListener("test", Me, Me), window.removeEventListener("test", Me, Me);
  } catch {
    lt = !1;
  }
var fe = lt ? { passive: !1 } : !1, Gr = function(e) {
  return e.tagName === "TEXTAREA";
}, gn = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Gr(e) && n[t] === "visible")
  );
}, qr = function(e) {
  return gn(e, "overflowY");
}, Qr = function(e) {
  return gn(e, "overflowX");
}, Bt = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = bn(e, n);
    if (o) {
      var r = yn(e, n), i = r[1], c = r[2];
      if (i > c)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, Jr = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, o = e.clientHeight;
  return [
    t,
    n,
    o
  ];
}, ei = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, o = e.clientWidth;
  return [
    t,
    n,
    o
  ];
}, bn = function(e, t) {
  return e === "v" ? qr(t) : Qr(t);
}, yn = function(e, t) {
  return e === "v" ? Jr(t) : ei(t);
}, ti = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, ni = function(e, t, n, o, r) {
  var i = ti(e, window.getComputedStyle(t).direction), c = i * o, s = n.target, a = t.contains(s), l = !1, d = c > 0, u = 0, v = 0;
  do {
    var f = yn(e, s), m = f[0], p = f[1], h = f[2], g = p - h - i * m;
    (m || g) && bn(e, s) && (u += g, v += m), s = s.parentNode;
  } while (
    // portaled content
    !a && s !== document.body || // self content
    a && (t.contains(s) || t === s)
  );
  return (d && (r && u === 0 || !r && c > u) || !d && (r && v === 0 || !r && -c > v)) && (l = !0), l;
}, ke = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ht = function(e) {
  return [e.deltaX, e.deltaY];
}, zt = function(e) {
  return e && "current" in e ? e.current : e;
}, oi = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, ri = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, ii = 0, de = [];
function ci(e) {
  var t = x.useRef([]), n = x.useRef([0, 0]), o = x.useRef(), r = x.useState(ii++)[0], i = x.useState(function() {
    return mn();
  })[0], c = x.useRef(e);
  x.useEffect(function() {
    c.current = e;
  }, [e]), x.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(r));
      var p = Rr([e.lockRef.current], (e.shards || []).map(zt), !0).filter(Boolean);
      return p.forEach(function(h) {
        return h.classList.add("allow-interactivity-".concat(r));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(r)), p.forEach(function(h) {
          return h.classList.remove("allow-interactivity-".concat(r));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = x.useCallback(function(p, h) {
    if ("touches" in p && p.touches.length === 2)
      return !c.current.allowPinchZoom;
    var g = ke(p), w = n.current, b = "deltaX" in p ? p.deltaX : w[0] - g[0], y = "deltaY" in p ? p.deltaY : w[1] - g[1], $, E = p.target, P = Math.abs(b) > Math.abs(y) ? "h" : "v";
    if ("touches" in p && P === "h" && E.type === "range")
      return !1;
    var C = Bt(P, E);
    if (!C)
      return !0;
    if (C ? $ = P : ($ = P === "v" ? "h" : "v", C = Bt(P, E)), !C)
      return !1;
    if (!o.current && "changedTouches" in p && (b || y) && (o.current = $), !$)
      return !0;
    var R = o.current || $;
    return ni(R, h, p, R === "h" ? b : y, !0);
  }, []), a = x.useCallback(function(p) {
    var h = p;
    if (!(!de.length || de[de.length - 1] !== i)) {
      var g = "deltaY" in h ? Ht(h) : ke(h), w = t.current.filter(function($) {
        return $.name === h.type && $.target === h.target && oi($.delta, g);
      })[0];
      if (w && w.should) {
        h.cancelable && h.preventDefault();
        return;
      }
      if (!w) {
        var b = (c.current.shards || []).map(zt).filter(Boolean).filter(function($) {
          return $.contains(h.target);
        }), y = b.length > 0 ? s(h, b[0]) : !c.current.noIsolation;
        y && h.cancelable && h.preventDefault();
      }
    }
  }, []), l = x.useCallback(function(p, h, g, w) {
    var b = { name: p, delta: h, target: g, should: w };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(y) {
        return y !== b;
      });
    }, 1);
  }, []), d = x.useCallback(function(p) {
    n.current = ke(p), o.current = void 0;
  }, []), u = x.useCallback(function(p) {
    l(p.type, Ht(p), p.target, s(p, e.lockRef.current));
  }, []), v = x.useCallback(function(p) {
    l(p.type, ke(p), p.target, s(p, e.lockRef.current));
  }, []);
  x.useEffect(function() {
    return de.push(i), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", a, fe), document.addEventListener("touchmove", a, fe), document.addEventListener("touchstart", d, fe), function() {
      de = de.filter(function(p) {
        return p !== i;
      }), document.removeEventListener("wheel", a, fe), document.removeEventListener("touchmove", a, fe), document.removeEventListener("touchstart", d, fe);
    };
  }, []);
  var f = e.removeScrollBar, m = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    m ? x.createElement(i, { styles: ri(r) }) : null,
    f ? x.createElement(Zr, { gapMode: "margin" }) : null
  );
}
const si = Fr(hn, ci);
var wn = x.forwardRef(function(e, t) {
  return x.createElement(Ge, j({}, e, { ref: t, sideCar: si }));
});
wn.classNames = Ge.classNames;
const ai = wn, $n = "Popover", [xn, Ni] = Xt($n, [
  an
]), yt = an(), [li, we] = xn($n), ui = (e) => {
  const { __scopePopover: t, children: n, open: o, defaultOpen: r, onOpenChange: i, modal: c = !1 } = e, s = yt(t), a = k(null), [l, d] = z(!1), [u = !1, v] = Cr({
    prop: o,
    defaultProp: r,
    onChange: i
  });
  return /* @__PURE__ */ O(gr, s, /* @__PURE__ */ O(li, {
    scope: t,
    contentId: go(),
    triggerRef: a,
    open: u,
    onOpenChange: v,
    onOpenToggle: ie(
      () => v(
        (f) => !f
      ),
      [
        v
      ]
    ),
    hasCustomAnchor: l,
    onCustomAnchorAdd: ie(
      () => d(!0),
      []
    ),
    onCustomAnchorRemove: ie(
      () => d(!1),
      []
    ),
    modal: c
  }, n));
}, fi = "PopoverTrigger", di = /* @__PURE__ */ H((e, t) => {
  const { __scopePopover: n, ...o } = e, r = we(fi, n), i = yt(n), c = ae(t, r.triggerRef), s = /* @__PURE__ */ O(ge.button, L({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": r.open,
    "aria-controls": r.contentId,
    "data-state": Pn(r.open)
  }, o, {
    ref: c,
    onClick: ce(e.onClick, r.onOpenToggle)
  }));
  return r.hasCustomAnchor ? s : /* @__PURE__ */ O(br, L({
    asChild: !0
  }, i), s);
}), Cn = "PopoverPortal", [pi, vi] = xn(Cn, {
  forceMount: void 0
}), hi = (e) => {
  const { __scopePopover: t, forceMount: n, children: o, container: r } = e, i = we(Cn, t);
  return /* @__PURE__ */ O(pi, {
    scope: t,
    forceMount: n
  }, /* @__PURE__ */ O(bt, {
    present: n || i.open
  }, /* @__PURE__ */ O(wr, {
    asChild: !0,
    container: r
  }, o)));
}, Ee = "PopoverContent", mi = /* @__PURE__ */ H((e, t) => {
  const n = vi(Ee, e.__scopePopover), { forceMount: o = n.forceMount, ...r } = e, i = we(Ee, e.__scopePopover);
  return /* @__PURE__ */ O(bt, {
    present: o || i.open
  }, i.modal ? /* @__PURE__ */ O(gi, L({}, r, {
    ref: t
  })) : /* @__PURE__ */ O(bi, L({}, r, {
    ref: t
  })));
}), gi = /* @__PURE__ */ H((e, t) => {
  const n = we(Ee, e.__scopePopover), o = k(null), r = ae(t, o), i = k(!1);
  return M(() => {
    const c = o.current;
    if (c)
      return Ar(c);
  }, []), /* @__PURE__ */ O(ai, {
    as: ft,
    allowPinchZoom: !0
  }, /* @__PURE__ */ O(En, L({}, e, {
    ref: r,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: ce(e.onCloseAutoFocus, (c) => {
      var s;
      c.preventDefault(), i.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: ce(e.onPointerDownOutside, (c) => {
      const s = c.detail.originalEvent, a = s.button === 0 && s.ctrlKey === !0, l = s.button === 2 || a;
      i.current = l;
    }, {
      checkForDefaultPrevented: !1
    }),
    onFocusOutside: ce(
      e.onFocusOutside,
      (c) => c.preventDefault(),
      {
        checkForDefaultPrevented: !1
      }
    )
  })));
}), bi = /* @__PURE__ */ H((e, t) => {
  const n = we(Ee, e.__scopePopover), o = k(!1), r = k(!1);
  return /* @__PURE__ */ O(En, L({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (i) => {
      var c;
      if ((c = e.onCloseAutoFocus) === null || c === void 0 || c.call(e, i), !i.defaultPrevented) {
        var s;
        o.current || (s = n.triggerRef.current) === null || s === void 0 || s.focus(), i.preventDefault();
      }
      o.current = !1, r.current = !1;
    },
    onInteractOutside: (i) => {
      var c, s;
      (c = e.onInteractOutside) === null || c === void 0 || c.call(e, i), i.defaultPrevented || (o.current = !0, i.detail.originalEvent.type === "pointerdown" && (r.current = !0));
      const a = i.target;
      ((s = n.triggerRef.current) === null || s === void 0 ? void 0 : s.contains(a)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && r.current && i.preventDefault();
    }
  }));
}), En = /* @__PURE__ */ H((e, t) => {
  const { __scopePopover: n, trapFocus: o, onOpenAutoFocus: r, onCloseAutoFocus: i, disableOutsidePointerEvents: c, onEscapeKeyDown: s, onPointerDownOutside: a, onFocusOutside: l, onInteractOutside: d, ...u } = e, v = we(Ee, n), f = yt(n);
  return co(), /* @__PURE__ */ O(so, {
    asChild: !0,
    loop: !0,
    trapped: o,
    onMountAutoFocus: r,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ O(oo, {
    asChild: !0,
    disableOutsidePointerEvents: c,
    onInteractOutside: d,
    onEscapeKeyDown: s,
    onPointerDownOutside: a,
    onFocusOutside: l,
    onDismiss: () => v.onOpenChange(!1)
  }, /* @__PURE__ */ O(yr, L({
    "data-state": Pn(v.open),
    role: "dialog",
    id: v.contentId
  }, f, u, {
    ref: t,
    style: {
      ...u.style,
      "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
      "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
      "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
      "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
      "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
    }
  }))));
});
function Pn(e) {
  return e ? "open" : "closed";
}
const yi = ui, wi = di, $i = hi, xi = mi, Ci = () => /* @__PURE__ */ ee("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", children: [
  /* @__PURE__ */ N("title", { children: "Zoom in" }),
  /* @__PURE__ */ N("path", { strokeWidth: "45", d: "M256 112v288M400 256H112" })
] }), Ei = () => /* @__PURE__ */ ee("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", children: [
  /* @__PURE__ */ N("title", { children: "Zoom out" }),
  /* @__PURE__ */ N("path", { strokeWidth: "45", d: "M400 256H112" })
] }), Pi = () => /* @__PURE__ */ ee("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", children: [
  /* @__PURE__ */ N("title", { children: "Zoom" }),
  /* @__PURE__ */ N("path", { d: "M456.69 421.39L362.6 327.3C385.253 297.144 397.481 260.437 397.44 222.72C397.44 126.38 319.06 48 222.72 48C126.38 48 48 126.38 48 222.72C48 319.06 126.38 397.44 222.72 397.44C260.437 397.481 297.144 385.253 327.3 362.6L421.39 456.69C431.279 465.53 446.35 465.108 455.729 455.729C465.108 446.35 465.53 431.279 456.69 421.39ZM97.92 222.72C97.92 153.795 153.795 97.92 222.72 97.92C291.645 97.92 347.52 153.795 347.52 222.72C347.52 291.645 291.645 347.52 222.72 347.52C153.829 347.437 98.0027 291.611 97.92 222.72Z" }),
  /* @__PURE__ */ N("path", { d: "M220.93 121.194L220.93 321.194", strokeWidth: "30" }),
  /* @__PURE__ */ N("path", { d: "M120.93 221.194L320.93 221.194", strokeWidth: "30" })
] }), Li = () => {
  const e = Un(), { configOptions: t } = e;
  let { pdfMagLevel: n } = t;
  const o = Vn();
  n === void 0 && (n = 100);
  const r = (l) => {
    l.preventDefault(), o({
      type: "updateConfigOptions",
      configOptions: {
        ...t,
        pdfMagLevel: parseInt(l.target.value)
      }
    });
  }, i = (l) => {
    l.preventDefault(), o({
      type: "updateConfigOptions",
      configOptions: {
        ...t,
        pdfMagLevel: n ? n + 10 : 110
      }
    });
  }, c = (l) => {
    l.preventDefault(), o({
      type: "updateConfigOptions",
      configOptions: {
        ...t,
        pdfMagLevel: n ? n - 10 : 90
      }
    });
  }, s = [50, 75, 100, 125, 150, 200, 300, 400];
  let a = null;
  return s.indexOf(n) !== -1 ? a = null : a = /* @__PURE__ */ ee("option", { value: n, children: [
    n,
    "%"
  ] }), /* @__PURE__ */ N("div", { children: /* @__PURE__ */ ee(yi, { children: [
    /* @__PURE__ */ N(wi, { asChild: !0, children: /* @__PURE__ */ N("button", { className: Te.button, children: /* @__PURE__ */ N(Pi, {}) }) }),
    /* @__PURE__ */ N($i, { children: /* @__PURE__ */ N(xi, { className: "PopoverContent", sideOffset: 5, children: /* @__PURE__ */ ee("div", { className: Te.zoomWrapper, children: [
      /* @__PURE__ */ ee("select", { value: n, onChange: (l) => r(l), children: [
        a,
        s.map((l, d) => /* @__PURE__ */ ee("option", { value: l, children: [
          l,
          "%"
        ] }, d))
      ] }),
      /* @__PURE__ */ N("button", { className: Te.button, onClick: c, children: /* @__PURE__ */ N(Ei, {}) }),
      /* @__PURE__ */ N("button", { className: Te.button, onClick: i, children: /* @__PURE__ */ N(Ci, {}) })
    ] }) }) })
  ] }) });
};
export {
  Li as default
};
