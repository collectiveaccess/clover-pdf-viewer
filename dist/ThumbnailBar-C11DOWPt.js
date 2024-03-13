var ei = Object.defineProperty;
var ni = (C, s, O) => s in C ? ei(C, s, { enumerable: !0, configurable: !0, writable: !0, value: O }) : C[s] = O;
var ne = (C, s, O) => (ni(C, typeof s != "symbol" ? s + "" : s, O), O), je = (C, s, O) => {
  if (!s.has(C))
    throw TypeError("Cannot " + O);
};
var t = (C, s, O) => (je(C, s, "read from private field"), O ? O.call(C) : s.get(C)), V = (C, s, O) => {
  if (s.has(C))
    throw TypeError("Cannot add the same private member more than once");
  s instanceof WeakSet ? s.add(C) : s.set(C, O);
}, ct = (C, s, O, n) => (je(C, s, "write to private field"), n ? n.call(C, O) : s.set(C, O), O);
var me = (C, s, O, n) => ({
  set _(u) {
    ct(C, s, u, O);
  },
  get _() {
    return t(C, s, n);
  }
}), Z = (C, s, O) => (je(C, s, "access private method"), O);
import "./assets/ThumbnailBar.css";
import { jsx, jsxs } from "react/jsx-runtime";
import { g as getAugmentedNamespace, a as getDefaultExportFromCjs, r as requireReactDom, c as commonjsGlobal } from "./index-D0toTR9A.js";
import React__default, { createContext, useReducer, forwardRef, useRef, useEffect, useImperativeHandle, useCallback, useMemo, useContext, useLayoutEffect } from "react";
import { useViewerState, useViewerDispatch } from "./PdfViewer/context/pdf-viewer-context.js";
function _mergeNamespaces(C, s) {
  for (var O = 0; O < s.length; O++) {
    const n = s[O];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const u in n)
        if (u !== "default" && !(u in C)) {
          const B = Object.getOwnPropertyDescriptor(n, u);
          B && Object.defineProperty(C, u, B.get ? B : {
            enumerable: !0,
            get: () => n[u]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(C, Symbol.toStringTag, { value: "Module" }));
}
function commonjsRequire(C) {
  throw new Error('Could not dynamically require "' + C + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var pdf$1 = { exports: {} };
const __viteBrowserExternal = {}, __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" })), require$$5 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
(function(module, exports) {
  (function(s, O) {
    module.exports = s.pdfjsLib = O();
  })(globalThis, () => (
    /******/
    (() => {
      var __webpack_modules__ = [
        ,
        /* 1 */
        /***/
        (C, s) => {
          var zt;
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.VerbosityLevel = s.Util = s.UnknownErrorException = s.UnexpectedResponseException = s.TextRenderingMode = s.RenderingIntentFlag = s.PromiseCapability = s.PermissionFlag = s.PasswordResponses = s.PasswordException = s.PageActionEventType = s.OPS = s.MissingPDFException = s.MAX_IMAGE_SIZE_TO_CACHE = s.LINE_FACTOR = s.LINE_DESCENT_FACTOR = s.InvalidPDFException = s.ImageKind = s.IDENTITY_MATRIX = s.FormatError = s.FeatureTest = s.FONT_IDENTITY_MATRIX = s.DocumentActionEventType = s.CMapCompressionType = s.BaseException = s.BASELINE_FACTOR = s.AnnotationType = s.AnnotationReplyType = s.AnnotationPrefix = s.AnnotationMode = s.AnnotationFlag = s.AnnotationFieldFlag = s.AnnotationEditorType = s.AnnotationEditorPrefix = s.AnnotationEditorParamsType = s.AnnotationBorderStyleType = s.AnnotationActionEventType = s.AbortException = void 0, s.assert = lt, s.bytesToString = W, s.createValidAbsoluteUrl = ht, s.getModificationDate = Ct, s.getUuid = Gt, s.getVerbosityLevel = Y, s.info = Q, s.isArrayBuffer = mt, s.isArrayEqual = wt, s.isNodeJS = void 0, s.normalizeUnicode = qt, s.objectFromMap = pt, s.objectSize = ut, s.setVerbosityLevel = m, s.shadow = yt, s.string32 = nt, s.stringToBytes = q, s.stringToPDFString = _t, s.stringToUTF8String = at, s.unreachable = z, s.utf8StringToString = ot, s.warn = it;
          const O = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser");
          s.isNodeJS = O;
          const n = [1, 0, 0, 1, 0, 0];
          s.IDENTITY_MATRIX = n;
          const u = [1e-3, 0, 0, 1e-3, 0, 0];
          s.FONT_IDENTITY_MATRIX = u;
          const B = 1e7;
          s.MAX_IMAGE_SIZE_TO_CACHE = B;
          const L = 1.35;
          s.LINE_FACTOR = L;
          const X = 0.35;
          s.LINE_DESCENT_FACTOR = X;
          const b = X / L;
          s.BASELINE_FACTOR = b;
          const P = {
            ANY: 1,
            DISPLAY: 2,
            PRINT: 4,
            SAVE: 8,
            ANNOTATIONS_FORMS: 16,
            ANNOTATIONS_STORAGE: 32,
            ANNOTATIONS_DISABLE: 64,
            OPLIST: 256
          };
          s.RenderingIntentFlag = P;
          const p = {
            DISABLE: 0,
            ENABLE: 1,
            ENABLE_FORMS: 2,
            ENABLE_STORAGE: 3
          };
          s.AnnotationMode = p;
          const F = "pdfjs_internal_editor_";
          s.AnnotationEditorPrefix = F;
          const M = {
            DISABLE: -1,
            NONE: 0,
            FREETEXT: 3,
            STAMP: 13,
            INK: 15
          };
          s.AnnotationEditorType = M;
          const k = {
            RESIZE: 1,
            CREATE: 2,
            FREETEXT_SIZE: 11,
            FREETEXT_COLOR: 12,
            FREETEXT_OPACITY: 13,
            INK_COLOR: 21,
            INK_THICKNESS: 22,
            INK_OPACITY: 23
          };
          s.AnnotationEditorParamsType = k;
          const w = {
            PRINT: 4,
            MODIFY_CONTENTS: 8,
            COPY: 16,
            MODIFY_ANNOTATIONS: 32,
            FILL_INTERACTIVE_FORMS: 256,
            COPY_FOR_ACCESSIBILITY: 512,
            ASSEMBLE: 1024,
            PRINT_HIGH_QUALITY: 2048
          };
          s.PermissionFlag = w;
          const _ = {
            FILL: 0,
            STROKE: 1,
            FILL_STROKE: 2,
            INVISIBLE: 3,
            FILL_ADD_TO_PATH: 4,
            STROKE_ADD_TO_PATH: 5,
            FILL_STROKE_ADD_TO_PATH: 6,
            ADD_TO_PATH: 7,
            FILL_STROKE_MASK: 3,
            ADD_TO_PATH_FLAG: 4
          };
          s.TextRenderingMode = _;
          const y = {
            GRAYSCALE_1BPP: 1,
            RGB_24BPP: 2,
            RGBA_32BPP: 3
          };
          s.ImageKind = y;
          const S = {
            TEXT: 1,
            LINK: 2,
            FREETEXT: 3,
            LINE: 4,
            SQUARE: 5,
            CIRCLE: 6,
            POLYGON: 7,
            POLYLINE: 8,
            HIGHLIGHT: 9,
            UNDERLINE: 10,
            SQUIGGLY: 11,
            STRIKEOUT: 12,
            STAMP: 13,
            CARET: 14,
            INK: 15,
            POPUP: 16,
            FILEATTACHMENT: 17,
            SOUND: 18,
            MOVIE: 19,
            WIDGET: 20,
            SCREEN: 21,
            PRINTERMARK: 22,
            TRAPNET: 23,
            WATERMARK: 24,
            THREED: 25,
            REDACT: 26
          };
          s.AnnotationType = S;
          const D = {
            GROUP: "Group",
            REPLY: "R"
          };
          s.AnnotationReplyType = D;
          const R = {
            INVISIBLE: 1,
            HIDDEN: 2,
            PRINT: 4,
            NOZOOM: 8,
            NOROTATE: 16,
            NOVIEW: 32,
            READONLY: 64,
            LOCKED: 128,
            TOGGLENOVIEW: 256,
            LOCKEDCONTENTS: 512
          };
          s.AnnotationFlag = R;
          const A = {
            READONLY: 1,
            REQUIRED: 2,
            NOEXPORT: 4,
            MULTILINE: 4096,
            PASSWORD: 8192,
            NOTOGGLETOOFF: 16384,
            RADIO: 32768,
            PUSHBUTTON: 65536,
            COMBO: 131072,
            EDIT: 262144,
            SORT: 524288,
            FILESELECT: 1048576,
            MULTISELECT: 2097152,
            DONOTSPELLCHECK: 4194304,
            DONOTSCROLL: 8388608,
            COMB: 16777216,
            RICHTEXT: 33554432,
            RADIOSINUNISON: 33554432,
            COMMITONSELCHANGE: 67108864
          };
          s.AnnotationFieldFlag = A;
          const o = {
            SOLID: 1,
            DASHED: 2,
            BEVELED: 3,
            INSET: 4,
            UNDERLINE: 5
          };
          s.AnnotationBorderStyleType = o;
          const f = {
            E: "Mouse Enter",
            X: "Mouse Exit",
            D: "Mouse Down",
            U: "Mouse Up",
            Fo: "Focus",
            Bl: "Blur",
            PO: "PageOpen",
            PC: "PageClose",
            PV: "PageVisible",
            PI: "PageInvisible",
            K: "Keystroke",
            F: "Format",
            V: "Validate",
            C: "Calculate"
          };
          s.AnnotationActionEventType = f;
          const j = {
            WC: "WillClose",
            WS: "WillSave",
            DS: "DidSave",
            WP: "WillPrint",
            DP: "DidPrint"
          };
          s.DocumentActionEventType = j;
          const v = {
            O: "PageOpen",
            C: "PageClose"
          };
          s.PageActionEventType = v;
          const h = {
            ERRORS: 0,
            WARNINGS: 1,
            INFOS: 5
          };
          s.VerbosityLevel = h;
          const I = {
            NONE: 0,
            BINARY: 1
          };
          s.CMapCompressionType = I;
          const g = {
            dependency: 1,
            setLineWidth: 2,
            setLineCap: 3,
            setLineJoin: 4,
            setMiterLimit: 5,
            setDash: 6,
            setRenderingIntent: 7,
            setFlatness: 8,
            setGState: 9,
            save: 10,
            restore: 11,
            transform: 12,
            moveTo: 13,
            lineTo: 14,
            curveTo: 15,
            curveTo2: 16,
            curveTo3: 17,
            closePath: 18,
            rectangle: 19,
            stroke: 20,
            closeStroke: 21,
            fill: 22,
            eoFill: 23,
            fillStroke: 24,
            eoFillStroke: 25,
            closeFillStroke: 26,
            closeEOFillStroke: 27,
            endPath: 28,
            clip: 29,
            eoClip: 30,
            beginText: 31,
            endText: 32,
            setCharSpacing: 33,
            setWordSpacing: 34,
            setHScale: 35,
            setLeading: 36,
            setFont: 37,
            setTextRenderingMode: 38,
            setTextRise: 39,
            moveText: 40,
            setLeadingMoveText: 41,
            setTextMatrix: 42,
            nextLine: 43,
            showText: 44,
            showSpacedText: 45,
            nextLineShowText: 46,
            nextLineSetSpacingShowText: 47,
            setCharWidth: 48,
            setCharWidthAndBounds: 49,
            setStrokeColorSpace: 50,
            setFillColorSpace: 51,
            setStrokeColor: 52,
            setStrokeColorN: 53,
            setFillColor: 54,
            setFillColorN: 55,
            setStrokeGray: 56,
            setFillGray: 57,
            setStrokeRGBColor: 58,
            setFillRGBColor: 59,
            setStrokeCMYKColor: 60,
            setFillCMYKColor: 61,
            shadingFill: 62,
            beginInlineImage: 63,
            beginImageData: 64,
            endInlineImage: 65,
            paintXObject: 66,
            markPoint: 67,
            markPointProps: 68,
            beginMarkedContent: 69,
            beginMarkedContentProps: 70,
            endMarkedContent: 71,
            beginCompat: 72,
            endCompat: 73,
            paintFormXObjectBegin: 74,
            paintFormXObjectEnd: 75,
            beginGroup: 76,
            endGroup: 77,
            beginAnnotation: 80,
            endAnnotation: 81,
            paintImageMaskXObject: 83,
            paintImageMaskXObjectGroup: 84,
            paintImageXObject: 85,
            paintInlineImageXObject: 86,
            paintInlineImageXObjectGroup: 87,
            paintImageXObjectRepeat: 88,
            paintImageMaskXObjectRepeat: 89,
            paintSolidColorImageMask: 90,
            constructPath: 91
          };
          s.OPS = g;
          const U = {
            NEED_PASSWORD: 1,
            INCORRECT_PASSWORD: 2
          };
          s.PasswordResponses = U;
          let G = h.WARNINGS;
          function m(gt) {
            Number.isInteger(gt) && (G = gt);
          }
          function Y() {
            return G;
          }
          function Q(gt) {
            G >= h.INFOS && console.log(`Info: ${gt}`);
          }
          function it(gt) {
            G >= h.WARNINGS && console.log(`Warning: ${gt}`);
          }
          function z(gt) {
            throw new Error(gt);
          }
          function lt(gt, rt) {
            gt || z(rt);
          }
          function K(gt) {
            switch (gt == null ? void 0 : gt.protocol) {
              case "http:":
              case "https:":
              case "ftp:":
              case "mailto:":
              case "tel:":
                return !0;
              default:
                return !1;
            }
          }
          function ht(gt, rt = null, tt = null) {
            if (!gt)
              return null;
            try {
              if (tt && typeof gt == "string") {
                if (tt.addDefaultProtocol && gt.startsWith("www.")) {
                  const St = gt.match(/\./g);
                  (St == null ? void 0 : St.length) >= 2 && (gt = `http://${gt}`);
                }
                if (tt.tryConvertEncoding)
                  try {
                    gt = at(gt);
                  } catch {
                  }
              }
              const At = rt ? new URL(gt, rt) : new URL(gt);
              if (K(At))
                return At;
            } catch {
            }
            return null;
          }
          function yt(gt, rt, tt, At = !1) {
            return Object.defineProperty(gt, rt, {
              value: tt,
              enumerable: !At,
              configurable: !0,
              writable: !1
            }), tt;
          }
          const E = function() {
            function rt(tt, At) {
              this.constructor === rt && z("Cannot initialize BaseException."), this.message = tt, this.name = At;
            }
            return rt.prototype = new Error(), rt.constructor = rt, rt;
          }();
          s.BaseException = E;
          class e extends E {
            constructor(rt, tt) {
              super(rt, "PasswordException"), this.code = tt;
            }
          }
          s.PasswordException = e;
          class l extends E {
            constructor(rt, tt) {
              super(rt, "UnknownErrorException"), this.details = tt;
            }
          }
          s.UnknownErrorException = l;
          class i extends E {
            constructor(rt) {
              super(rt, "InvalidPDFException");
            }
          }
          s.InvalidPDFException = i;
          class c extends E {
            constructor(rt) {
              super(rt, "MissingPDFException");
            }
          }
          s.MissingPDFException = c;
          class d extends E {
            constructor(rt, tt) {
              super(rt, "UnexpectedResponseException"), this.status = tt;
            }
          }
          s.UnexpectedResponseException = d;
          class T extends E {
            constructor(rt) {
              super(rt, "FormatError");
            }
          }
          s.FormatError = T;
          class N extends E {
            constructor(rt) {
              super(rt, "AbortException");
            }
          }
          s.AbortException = N;
          function W(gt) {
            (typeof gt != "object" || (gt == null ? void 0 : gt.length) === void 0) && z("Invalid argument for bytesToString");
            const rt = gt.length, tt = 8192;
            if (rt < tt)
              return String.fromCharCode.apply(null, gt);
            const At = [];
            for (let St = 0; St < rt; St += tt) {
              const ee = Math.min(St + tt, rt), te = gt.subarray(St, ee);
              At.push(String.fromCharCode.apply(null, te));
            }
            return At.join("");
          }
          function q(gt) {
            typeof gt != "string" && z("Invalid argument for stringToBytes");
            const rt = gt.length, tt = new Uint8Array(rt);
            for (let At = 0; At < rt; ++At)
              tt[At] = gt.charCodeAt(At) & 255;
            return tt;
          }
          function nt(gt) {
            return String.fromCharCode(gt >> 24 & 255, gt >> 16 & 255, gt >> 8 & 255, gt & 255);
          }
          function ut(gt) {
            return Object.keys(gt).length;
          }
          function pt(gt) {
            const rt = /* @__PURE__ */ Object.create(null);
            for (const [tt, At] of gt)
              rt[tt] = At;
            return rt;
          }
          function bt() {
            const gt = new Uint8Array(4);
            return gt[0] = 1, new Uint32Array(gt.buffer, 0, 1)[0] === 1;
          }
          function ft() {
            try {
              return new Function(""), !0;
            } catch {
              return !1;
            }
          }
          class xt {
            static get isLittleEndian() {
              return yt(this, "isLittleEndian", bt());
            }
            static get isEvalSupported() {
              return yt(this, "isEvalSupported", ft());
            }
            static get isOffscreenCanvasSupported() {
              return yt(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
            }
            static get platform() {
              return typeof navigator > "u" ? yt(this, "platform", {
                isWin: !1,
                isMac: !1
              }) : yt(this, "platform", {
                isWin: navigator.platform.includes("Win"),
                isMac: navigator.platform.includes("Mac")
              });
            }
            static get isCSSRoundSupported() {
              var rt, tt;
              return yt(this, "isCSSRoundSupported", (tt = (rt = globalThis.CSS) == null ? void 0 : rt.supports) == null ? void 0 : tt.call(rt, "width: round(1.5px, 1px)"));
            }
          }
          s.FeatureTest = xt;
          const It = [...Array(256).keys()].map((gt) => gt.toString(16).padStart(2, "0"));
          class Tt {
            static makeHexColor(rt, tt, At) {
              return `#${It[rt]}${It[tt]}${It[At]}`;
            }
            static scaleMinMax(rt, tt) {
              let At;
              rt[0] ? (rt[0] < 0 && (At = tt[0], tt[0] = tt[1], tt[1] = At), tt[0] *= rt[0], tt[1] *= rt[0], rt[3] < 0 && (At = tt[2], tt[2] = tt[3], tt[3] = At), tt[2] *= rt[3], tt[3] *= rt[3]) : (At = tt[0], tt[0] = tt[2], tt[2] = At, At = tt[1], tt[1] = tt[3], tt[3] = At, rt[1] < 0 && (At = tt[2], tt[2] = tt[3], tt[3] = At), tt[2] *= rt[1], tt[3] *= rt[1], rt[2] < 0 && (At = tt[0], tt[0] = tt[1], tt[1] = At), tt[0] *= rt[2], tt[1] *= rt[2]), tt[0] += rt[4], tt[1] += rt[4], tt[2] += rt[5], tt[3] += rt[5];
            }
            static transform(rt, tt) {
              return [rt[0] * tt[0] + rt[2] * tt[1], rt[1] * tt[0] + rt[3] * tt[1], rt[0] * tt[2] + rt[2] * tt[3], rt[1] * tt[2] + rt[3] * tt[3], rt[0] * tt[4] + rt[2] * tt[5] + rt[4], rt[1] * tt[4] + rt[3] * tt[5] + rt[5]];
            }
            static applyTransform(rt, tt) {
              const At = rt[0] * tt[0] + rt[1] * tt[2] + tt[4], St = rt[0] * tt[1] + rt[1] * tt[3] + tt[5];
              return [At, St];
            }
            static applyInverseTransform(rt, tt) {
              const At = tt[0] * tt[3] - tt[1] * tt[2], St = (rt[0] * tt[3] - rt[1] * tt[2] + tt[2] * tt[5] - tt[4] * tt[3]) / At, ee = (-rt[0] * tt[1] + rt[1] * tt[0] + tt[4] * tt[1] - tt[5] * tt[0]) / At;
              return [St, ee];
            }
            static getAxialAlignedBoundingBox(rt, tt) {
              const At = this.applyTransform(rt, tt), St = this.applyTransform(rt.slice(2, 4), tt), ee = this.applyTransform([rt[0], rt[3]], tt), te = this.applyTransform([rt[2], rt[1]], tt);
              return [Math.min(At[0], St[0], ee[0], te[0]), Math.min(At[1], St[1], ee[1], te[1]), Math.max(At[0], St[0], ee[0], te[0]), Math.max(At[1], St[1], ee[1], te[1])];
            }
            static inverseTransform(rt) {
              const tt = rt[0] * rt[3] - rt[1] * rt[2];
              return [rt[3] / tt, -rt[1] / tt, -rt[2] / tt, rt[0] / tt, (rt[2] * rt[5] - rt[4] * rt[3]) / tt, (rt[4] * rt[1] - rt[5] * rt[0]) / tt];
            }
            static singularValueDecompose2dScale(rt) {
              const tt = [rt[0], rt[2], rt[1], rt[3]], At = rt[0] * tt[0] + rt[1] * tt[2], St = rt[0] * tt[1] + rt[1] * tt[3], ee = rt[2] * tt[0] + rt[3] * tt[2], te = rt[2] * tt[1] + rt[3] * tt[3], st = (At + te) / 2, Pt = Math.sqrt((At + te) ** 2 - 4 * (At * te - ee * St)) / 2, Nt = st + Pt || 1, Rt = st - Pt || 1;
              return [Math.sqrt(Nt), Math.sqrt(Rt)];
            }
            static normalizeRect(rt) {
              const tt = rt.slice(0);
              return rt[0] > rt[2] && (tt[0] = rt[2], tt[2] = rt[0]), rt[1] > rt[3] && (tt[1] = rt[3], tt[3] = rt[1]), tt;
            }
            static intersect(rt, tt) {
              const At = Math.max(Math.min(rt[0], rt[2]), Math.min(tt[0], tt[2])), St = Math.min(Math.max(rt[0], rt[2]), Math.max(tt[0], tt[2]));
              if (At > St)
                return null;
              const ee = Math.max(Math.min(rt[1], rt[3]), Math.min(tt[1], tt[3])), te = Math.min(Math.max(rt[1], rt[3]), Math.max(tt[1], tt[3]));
              return ee > te ? null : [At, ee, St, te];
            }
            static bezierBoundingBox(rt, tt, At, St, ee, te, st, Pt) {
              const Nt = [], Rt = [[], []];
              let jt, Bt, Qt, Et, Kt, Lt, H, a;
              for (let et = 0; et < 2; ++et) {
                if (et === 0 ? (Bt = 6 * rt - 12 * At + 6 * ee, jt = -3 * rt + 9 * At - 9 * ee + 3 * st, Qt = 3 * At - 3 * rt) : (Bt = 6 * tt - 12 * St + 6 * te, jt = -3 * tt + 9 * St - 9 * te + 3 * Pt, Qt = 3 * St - 3 * tt), Math.abs(jt) < 1e-12) {
                  if (Math.abs(Bt) < 1e-12)
                    continue;
                  Et = -Qt / Bt, 0 < Et && Et < 1 && Nt.push(Et);
                  continue;
                }
                H = Bt * Bt - 4 * Qt * jt, a = Math.sqrt(H), !(H < 0) && (Kt = (-Bt + a) / (2 * jt), 0 < Kt && Kt < 1 && Nt.push(Kt), Lt = (-Bt - a) / (2 * jt), 0 < Lt && Lt < 1 && Nt.push(Lt));
              }
              let x = Nt.length, $;
              const J = x;
              for (; x--; )
                Et = Nt[x], $ = 1 - Et, Rt[0][x] = $ * $ * $ * rt + 3 * $ * $ * Et * At + 3 * $ * Et * Et * ee + Et * Et * Et * st, Rt[1][x] = $ * $ * $ * tt + 3 * $ * $ * Et * St + 3 * $ * Et * Et * te + Et * Et * Et * Pt;
              return Rt[0][J] = rt, Rt[1][J] = tt, Rt[0][J + 1] = st, Rt[1][J + 1] = Pt, Rt[0].length = Rt[1].length = J + 2, [Math.min(...Rt[0]), Math.min(...Rt[1]), Math.max(...Rt[0]), Math.max(...Rt[1])];
            }
          }
          s.Util = Tt;
          const Ot = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];
          function _t(gt) {
            if (gt[0] >= "ï") {
              let tt;
              if (gt[0] === "þ" && gt[1] === "ÿ" ? tt = "utf-16be" : gt[0] === "ÿ" && gt[1] === "þ" ? tt = "utf-16le" : gt[0] === "ï" && gt[1] === "»" && gt[2] === "¿" && (tt = "utf-8"), tt)
                try {
                  const At = new TextDecoder(tt, {
                    fatal: !0
                  }), St = q(gt);
                  return At.decode(St);
                } catch (At) {
                  it(`stringToPDFString: "${At}".`);
                }
            }
            const rt = [];
            for (let tt = 0, At = gt.length; tt < At; tt++) {
              const St = Ot[gt.charCodeAt(tt)];
              rt.push(St ? String.fromCharCode(St) : gt.charAt(tt));
            }
            return rt.join("");
          }
          function at(gt) {
            return decodeURIComponent(escape(gt));
          }
          function ot(gt) {
            return unescape(encodeURIComponent(gt));
          }
          function mt(gt) {
            return typeof gt == "object" && (gt == null ? void 0 : gt.byteLength) !== void 0;
          }
          function wt(gt, rt) {
            if (gt.length !== rt.length)
              return !1;
            for (let tt = 0, At = gt.length; tt < At; tt++)
              if (gt[tt] !== rt[tt])
                return !1;
            return !0;
          }
          function Ct(gt = /* @__PURE__ */ new Date()) {
            return [gt.getUTCFullYear().toString(), (gt.getUTCMonth() + 1).toString().padStart(2, "0"), gt.getUTCDate().toString().padStart(2, "0"), gt.getUTCHours().toString().padStart(2, "0"), gt.getUTCMinutes().toString().padStart(2, "0"), gt.getUTCSeconds().toString().padStart(2, "0")].join("");
          }
          class Ut {
            constructor() {
              V(this, zt, !1);
              this.promise = new Promise((rt, tt) => {
                this.resolve = (At) => {
                  ct(this, zt, !0), rt(At);
                }, this.reject = (At) => {
                  ct(this, zt, !0), tt(At);
                };
              });
            }
            get settled() {
              return t(this, zt);
            }
          }
          zt = new WeakMap(), s.PromiseCapability = Ut;
          let Vt = null, Wt = null;
          function qt(gt) {
            return Vt || (Vt = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, Wt = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), gt.replaceAll(Vt, (rt, tt, At) => tt ? tt.normalize("NFKC") : Wt.get(At));
          }
          function Gt() {
            if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.randomUUID) == "function")
              return crypto.randomUUID();
            const gt = new Uint8Array(32);
            if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.getRandomValues) == "function")
              crypto.getRandomValues(gt);
            else
              for (let rt = 0; rt < 32; rt++)
                gt[rt] = Math.floor(Math.random() * 255);
            return W(gt);
          }
          const Ht = "pdfjs_internal_id_";
          s.AnnotationPrefix = Ht;
        },
        /* 2 */
        /***/
        (__unused_webpack_module, exports, __w_pdfjs_require__) => {
          var C, O, n, u, ue, L, Te, b, P, p, F, M, k, w, _, y, Pe, D, R, Be, o, f;
          Object.defineProperty(exports, "__esModule", {
            value: !0
          }), exports.RenderTask = exports.PDFWorkerUtil = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDocumentLoadingTask = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultStandardFontDataFactory = exports.DefaultFilterFactory = exports.DefaultCanvasFactory = exports.DefaultCMapReaderFactory = void 0, Object.defineProperty(exports, "SVGGraphics", {
            enumerable: !0,
            get: function() {
              return _displaySvg.SVGGraphics;
            }
          }), exports.build = void 0, exports.getDocument = getDocument, exports.version = void 0;
          var _util = __w_pdfjs_require__(1), _annotation_storage = __w_pdfjs_require__(3), _display_utils = __w_pdfjs_require__(6), _font_loader = __w_pdfjs_require__(9), _displayNode_utils = __w_pdfjs_require__(10), _canvas = __w_pdfjs_require__(11), _worker_options = __w_pdfjs_require__(14), _message_handler = __w_pdfjs_require__(15), _metadata = __w_pdfjs_require__(16), _optional_content_config = __w_pdfjs_require__(17), _transport_stream = __w_pdfjs_require__(18), _displayFetch_stream = __w_pdfjs_require__(19), _displayNetwork = __w_pdfjs_require__(22), _displayNode_stream = __w_pdfjs_require__(23), _displaySvg = __w_pdfjs_require__(24), _xfa_text = __w_pdfjs_require__(25);
          const DEFAULT_RANGE_CHUNK_SIZE = 65536, RENDERING_CANCELLED_TIMEOUT = 100, DELAYED_CLEANUP_TIMEOUT = 5e3, DefaultCanvasFactory = _util.isNodeJS ? _displayNode_utils.NodeCanvasFactory : _display_utils.DOMCanvasFactory;
          exports.DefaultCanvasFactory = DefaultCanvasFactory;
          const DefaultCMapReaderFactory = _util.isNodeJS ? _displayNode_utils.NodeCMapReaderFactory : _display_utils.DOMCMapReaderFactory;
          exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
          const DefaultFilterFactory = _util.isNodeJS ? _displayNode_utils.NodeFilterFactory : _display_utils.DOMFilterFactory;
          exports.DefaultFilterFactory = DefaultFilterFactory;
          const DefaultStandardFontDataFactory = _util.isNodeJS ? _displayNode_utils.NodeStandardFontDataFactory : _display_utils.DOMStandardFontDataFactory;
          exports.DefaultStandardFontDataFactory = DefaultStandardFontDataFactory;
          function getDocument(v) {
            if (typeof v == "string" || v instanceof URL ? v = {
              url: v
            } : (0, _util.isArrayBuffer)(v) && (v = {
              data: v
            }), typeof v != "object")
              throw new Error("Invalid parameter in getDocument, need parameter object.");
            if (!v.url && !v.data && !v.range)
              throw new Error("Invalid parameter object: need either .data, .range or .url");
            const h = new PDFDocumentLoadingTask(), {
              docId: I
            } = h, g = v.url ? getUrlProp(v.url) : null, U = v.data ? getDataProp(v.data) : null, G = v.httpHeaders || null, m = v.withCredentials === !0, Y = v.password ?? null, Q = v.range instanceof PDFDataRangeTransport ? v.range : null, it = Number.isInteger(v.rangeChunkSize) && v.rangeChunkSize > 0 ? v.rangeChunkSize : DEFAULT_RANGE_CHUNK_SIZE;
            let z = v.worker instanceof PDFWorker ? v.worker : null;
            const lt = v.verbosity, K = typeof v.docBaseUrl == "string" && !(0, _display_utils.isDataScheme)(v.docBaseUrl) ? v.docBaseUrl : null, ht = typeof v.cMapUrl == "string" ? v.cMapUrl : null, yt = v.cMapPacked !== !1, E = v.CMapReaderFactory || DefaultCMapReaderFactory, e = typeof v.standardFontDataUrl == "string" ? v.standardFontDataUrl : null, l = v.StandardFontDataFactory || DefaultStandardFontDataFactory, i = v.stopAtErrors !== !0, c = Number.isInteger(v.maxImageSize) && v.maxImageSize > -1 ? v.maxImageSize : -1, d = v.isEvalSupported !== !1, T = typeof v.isOffscreenCanvasSupported == "boolean" ? v.isOffscreenCanvasSupported : !_util.isNodeJS, N = Number.isInteger(v.canvasMaxAreaInBytes) ? v.canvasMaxAreaInBytes : -1, W = typeof v.disableFontFace == "boolean" ? v.disableFontFace : _util.isNodeJS, q = v.fontExtraProperties === !0, nt = v.enableXfa === !0, ut = v.ownerDocument || globalThis.document, pt = v.disableRange === !0, bt = v.disableStream === !0, ft = v.disableAutoFetch === !0, xt = v.pdfBug === !0, It = Q ? Q.length : v.length ?? NaN, Tt = typeof v.useSystemFonts == "boolean" ? v.useSystemFonts : !_util.isNodeJS && !W, Ot = typeof v.useWorkerFetch == "boolean" ? v.useWorkerFetch : E === _display_utils.DOMCMapReaderFactory && l === _display_utils.DOMStandardFontDataFactory && ht && e && (0, _display_utils.isValidFetchUrl)(ht, document.baseURI) && (0, _display_utils.isValidFetchUrl)(e, document.baseURI), _t = v.canvasFactory || new DefaultCanvasFactory({
              ownerDocument: ut
            }), at = v.filterFactory || new DefaultFilterFactory({
              docId: I,
              ownerDocument: ut
            }), ot = null;
            (0, _util.setVerbosityLevel)(lt);
            const mt = {
              canvasFactory: _t,
              filterFactory: at
            };
            if (Ot || (mt.cMapReaderFactory = new E({
              baseUrl: ht,
              isCompressed: yt
            }), mt.standardFontDataFactory = new l({
              baseUrl: e
            })), !z) {
              const Ut = {
                verbosity: lt,
                port: _worker_options.GlobalWorkerOptions.workerPort
              };
              z = Ut.port ? PDFWorker.fromPort(Ut) : new PDFWorker(Ut), h._worker = z;
            }
            const wt = {
              docId: I,
              apiVersion: "3.11.174",
              data: U,
              password: Y,
              disableAutoFetch: ft,
              rangeChunkSize: it,
              length: It,
              docBaseUrl: K,
              enableXfa: nt,
              evaluatorOptions: {
                maxImageSize: c,
                disableFontFace: W,
                ignoreErrors: i,
                isEvalSupported: d,
                isOffscreenCanvasSupported: T,
                canvasMaxAreaInBytes: N,
                fontExtraProperties: q,
                useSystemFonts: Tt,
                cMapUrl: Ot ? ht : null,
                standardFontDataUrl: Ot ? e : null
              }
            }, Ct = {
              ignoreErrors: i,
              isEvalSupported: d,
              disableFontFace: W,
              fontExtraProperties: q,
              enableXfa: nt,
              ownerDocument: ut,
              disableAutoFetch: ft,
              pdfBug: xt,
              styleElement: ot
            };
            return z.promise.then(function() {
              if (h.destroyed)
                throw new Error("Loading aborted");
              const Ut = _fetchDocument(z, wt), Vt = new Promise(function(Wt) {
                let qt;
                Q ? qt = new _transport_stream.PDFDataTransportStream({
                  length: It,
                  initialData: Q.initialData,
                  progressiveDone: Q.progressiveDone,
                  contentDispositionFilename: Q.contentDispositionFilename,
                  disableRange: pt,
                  disableStream: bt
                }, Q) : U || (qt = ((Ht) => _util.isNodeJS ? new _displayNode_stream.PDFNodeStream(Ht) : (0, _display_utils.isValidFetchUrl)(Ht.url) ? new _displayFetch_stream.PDFFetchStream(Ht) : new _displayNetwork.PDFNetworkStream(Ht))({
                  url: g,
                  length: It,
                  httpHeaders: G,
                  withCredentials: m,
                  rangeChunkSize: it,
                  disableRange: pt,
                  disableStream: bt
                })), Wt(qt);
              });
              return Promise.all([Ut, Vt]).then(function([Wt, qt]) {
                if (h.destroyed)
                  throw new Error("Loading aborted");
                const Gt = new _message_handler.MessageHandler(I, Wt, z.port), Ht = new WorkerTransport(Gt, h, qt, Ct, mt);
                h._transport = Ht, Gt.send("Ready", null);
              });
            }).catch(h._capability.reject), h;
          }
          async function _fetchDocument(v, h) {
            if (v.destroyed)
              throw new Error("Worker was destroyed");
            const I = await v.messageHandler.sendWithPromise("GetDocRequest", h, h.data ? [h.data.buffer] : null);
            if (v.destroyed)
              throw new Error("Worker was destroyed");
            return I;
          }
          function getUrlProp(v) {
            if (v instanceof URL)
              return v.href;
            try {
              return new URL(v, window.location).href;
            } catch {
              if (_util.isNodeJS && typeof v == "string")
                return v;
            }
            throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
          }
          function getDataProp(v) {
            if (_util.isNodeJS && typeof Buffer < "u" && v instanceof Buffer)
              throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
            if (v instanceof Uint8Array && v.byteLength === v.buffer.byteLength)
              return v;
            if (typeof v == "string")
              return (0, _util.stringToBytes)(v);
            if (typeof v == "object" && !isNaN(v == null ? void 0 : v.length) || (0, _util.isArrayBuffer)(v))
              return new Uint8Array(v);
            throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
          }
          const s = class s {
            constructor() {
              this._capability = new _util.PromiseCapability(), this._transport = null, this._worker = null, this.docId = `d${me(s, C)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
            }
            get promise() {
              return this._capability.promise;
            }
            async destroy() {
              var h, I, g;
              this.destroyed = !0;
              try {
                (h = this._worker) != null && h.port && (this._worker._pendingDestroy = !0), await ((I = this._transport) == null ? void 0 : I.destroy());
              } catch (U) {
                throw (g = this._worker) != null && g.port && delete this._worker._pendingDestroy, U;
              }
              this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
            }
          };
          C = new WeakMap(), V(s, C, 0);
          let PDFDocumentLoadingTask = s;
          exports.PDFDocumentLoadingTask = PDFDocumentLoadingTask;
          class PDFDataRangeTransport {
            constructor(h, I, g = !1, U = null) {
              this.length = h, this.initialData = I, this.progressiveDone = g, this.contentDispositionFilename = U, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = new _util.PromiseCapability();
            }
            addRangeListener(h) {
              this._rangeListeners.push(h);
            }
            addProgressListener(h) {
              this._progressListeners.push(h);
            }
            addProgressiveReadListener(h) {
              this._progressiveReadListeners.push(h);
            }
            addProgressiveDoneListener(h) {
              this._progressiveDoneListeners.push(h);
            }
            onDataRange(h, I) {
              for (const g of this._rangeListeners)
                g(h, I);
            }
            onDataProgress(h, I) {
              this._readyCapability.promise.then(() => {
                for (const g of this._progressListeners)
                  g(h, I);
              });
            }
            onDataProgressiveRead(h) {
              this._readyCapability.promise.then(() => {
                for (const I of this._progressiveReadListeners)
                  I(h);
              });
            }
            onDataProgressiveDone() {
              this._readyCapability.promise.then(() => {
                for (const h of this._progressiveDoneListeners)
                  h();
              });
            }
            transportReady() {
              this._readyCapability.resolve();
            }
            requestDataRange(h, I) {
              (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
            }
            abort() {
            }
          }
          exports.PDFDataRangeTransport = PDFDataRangeTransport;
          class PDFDocumentProxy {
            constructor(h, I) {
              this._pdfInfo = h, this._transport = I, Object.defineProperty(this, "getJavaScript", {
                value: () => ((0, _display_utils.deprecated)("`PDFDocumentProxy.getJavaScript`, please use `PDFDocumentProxy.getJSActions` instead."), this.getJSActions().then((g) => {
                  if (!g)
                    return g;
                  const U = [];
                  for (const G in g)
                    U.push(...g[G]);
                  return U;
                }))
              });
            }
            get annotationStorage() {
              return this._transport.annotationStorage;
            }
            get filterFactory() {
              return this._transport.filterFactory;
            }
            get numPages() {
              return this._pdfInfo.numPages;
            }
            get fingerprints() {
              return this._pdfInfo.fingerprints;
            }
            get isPureXfa() {
              return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
            }
            get allXfaHtml() {
              return this._transport._htmlForXfa;
            }
            getPage(h) {
              return this._transport.getPage(h);
            }
            getPageIndex(h) {
              return this._transport.getPageIndex(h);
            }
            getDestinations() {
              return this._transport.getDestinations();
            }
            getDestination(h) {
              return this._transport.getDestination(h);
            }
            getPageLabels() {
              return this._transport.getPageLabels();
            }
            getPageLayout() {
              return this._transport.getPageLayout();
            }
            getPageMode() {
              return this._transport.getPageMode();
            }
            getViewerPreferences() {
              return this._transport.getViewerPreferences();
            }
            getOpenAction() {
              return this._transport.getOpenAction();
            }
            getAttachments() {
              return this._transport.getAttachments();
            }
            getJSActions() {
              return this._transport.getDocJSActions();
            }
            getOutline() {
              return this._transport.getOutline();
            }
            getOptionalContentConfig() {
              return this._transport.getOptionalContentConfig();
            }
            getPermissions() {
              return this._transport.getPermissions();
            }
            getMetadata() {
              return this._transport.getMetadata();
            }
            getMarkInfo() {
              return this._transport.getMarkInfo();
            }
            getData() {
              return this._transport.getData();
            }
            saveDocument() {
              return this._transport.saveDocument();
            }
            getDownloadInfo() {
              return this._transport.downloadInfoCapability.promise;
            }
            cleanup(h = !1) {
              return this._transport.startCleanup(h || this.isPureXfa);
            }
            destroy() {
              return this.loadingTask.destroy();
            }
            get loadingParams() {
              return this._transport.loadingParams;
            }
            get loadingTask() {
              return this._transport.loadingTask;
            }
            getFieldObjects() {
              return this._transport.getFieldObjects();
            }
            hasJSActions() {
              return this._transport.hasJSActions();
            }
            getCalculationOrderIds() {
              return this._transport.getCalculationOrderIds();
            }
          }
          exports.PDFDocumentProxy = PDFDocumentProxy;
          class PDFPageProxy {
            constructor(h, I, g, U = !1) {
              V(this, u);
              V(this, L);
              V(this, O, null);
              V(this, n, !1);
              this._pageIndex = h, this._pageInfo = I, this._transport = g, this._stats = U ? new _display_utils.StatTimer() : null, this._pdfBug = U, this.commonObjs = g.commonObjs, this.objs = new PDFObjects(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
            }
            get pageNumber() {
              return this._pageIndex + 1;
            }
            get rotate() {
              return this._pageInfo.rotate;
            }
            get ref() {
              return this._pageInfo.ref;
            }
            get userUnit() {
              return this._pageInfo.userUnit;
            }
            get view() {
              return this._pageInfo.view;
            }
            getViewport({
              scale: h,
              rotation: I = this.rotate,
              offsetX: g = 0,
              offsetY: U = 0,
              dontFlip: G = !1
            } = {}) {
              return new _display_utils.PageViewport({
                viewBox: this.view,
                scale: h,
                rotation: I,
                offsetX: g,
                offsetY: U,
                dontFlip: G
              });
            }
            getAnnotations({
              intent: h = "display"
            } = {}) {
              const I = this._transport.getRenderingIntent(h);
              return this._transport.getAnnotations(this._pageIndex, I.renderingIntent);
            }
            getJSActions() {
              return this._transport.getPageJSActions(this._pageIndex);
            }
            get filterFactory() {
              return this._transport.filterFactory;
            }
            get isPureXfa() {
              return (0, _util.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
            }
            async getXfa() {
              var h;
              return ((h = this._transport._htmlForXfa) == null ? void 0 : h.children[this._pageIndex]) || null;
            }
            render({
              canvasContext: h,
              viewport: I,
              intent: g = "display",
              annotationMode: U = _util.AnnotationMode.ENABLE,
              transform: G = null,
              background: m = null,
              optionalContentConfigPromise: Y = null,
              annotationCanvasMap: Q = null,
              pageColors: it = null,
              printAnnotationStorage: z = null
            }) {
              var l, i;
              (l = this._stats) == null || l.time("Overall");
              const lt = this._transport.getRenderingIntent(g, U, z);
              ct(this, n, !1), Z(this, L, Te).call(this), Y || (Y = this._transport.getOptionalContentConfig());
              let K = this._intentStates.get(lt.cacheKey);
              K || (K = /* @__PURE__ */ Object.create(null), this._intentStates.set(lt.cacheKey, K)), K.streamReaderCancelTimeout && (clearTimeout(K.streamReaderCancelTimeout), K.streamReaderCancelTimeout = null);
              const ht = !!(lt.renderingIntent & _util.RenderingIntentFlag.PRINT);
              K.displayReadyCapability || (K.displayReadyCapability = new _util.PromiseCapability(), K.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: !1,
                separateAnnots: null
              }, (i = this._stats) == null || i.time("Page Request"), this._pumpOperatorList(lt));
              const yt = (c) => {
                var d, T;
                K.renderTasks.delete(E), (this._maybeCleanupAfterRender || ht) && ct(this, n, !0), Z(this, u, ue).call(this, !ht), c ? (E.capability.reject(c), this._abortOperatorList({
                  intentState: K,
                  reason: c instanceof Error ? c : new Error(c)
                })) : E.capability.resolve(), (d = this._stats) == null || d.timeEnd("Rendering"), (T = this._stats) == null || T.timeEnd("Overall");
              }, E = new InternalRenderTask({
                callback: yt,
                params: {
                  canvasContext: h,
                  viewport: I,
                  transform: G,
                  background: m
                },
                objs: this.objs,
                commonObjs: this.commonObjs,
                annotationCanvasMap: Q,
                operatorList: K.operatorList,
                pageIndex: this._pageIndex,
                canvasFactory: this._transport.canvasFactory,
                filterFactory: this._transport.filterFactory,
                useRequestAnimationFrame: !ht,
                pdfBug: this._pdfBug,
                pageColors: it
              });
              (K.renderTasks || (K.renderTasks = /* @__PURE__ */ new Set())).add(E);
              const e = E.task;
              return Promise.all([K.displayReadyCapability.promise, Y]).then(([c, d]) => {
                var T;
                if (this.destroyed) {
                  yt();
                  return;
                }
                (T = this._stats) == null || T.time("Rendering"), E.initializeGraphics({
                  transparency: c,
                  optionalContentConfig: d
                }), E.operatorListChanged();
              }).catch(yt), e;
            }
            getOperatorList({
              intent: h = "display",
              annotationMode: I = _util.AnnotationMode.ENABLE,
              printAnnotationStorage: g = null
            } = {}) {
              var Q;
              function U() {
                m.operatorList.lastChunk && (m.opListReadCapability.resolve(m.operatorList), m.renderTasks.delete(Y));
              }
              const G = this._transport.getRenderingIntent(h, I, g, !0);
              let m = this._intentStates.get(G.cacheKey);
              m || (m = /* @__PURE__ */ Object.create(null), this._intentStates.set(G.cacheKey, m));
              let Y;
              return m.opListReadCapability || (Y = /* @__PURE__ */ Object.create(null), Y.operatorListChanged = U, m.opListReadCapability = new _util.PromiseCapability(), (m.renderTasks || (m.renderTasks = /* @__PURE__ */ new Set())).add(Y), m.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: !1,
                separateAnnots: null
              }, (Q = this._stats) == null || Q.time("Page Request"), this._pumpOperatorList(G)), m.opListReadCapability.promise;
            }
            streamTextContent({
              includeMarkedContent: h = !1,
              disableNormalization: I = !1
            } = {}) {
              return this._transport.messageHandler.sendWithStream("GetTextContent", {
                pageIndex: this._pageIndex,
                includeMarkedContent: h === !0,
                disableNormalization: I === !0
              }, {
                highWaterMark: 100,
                size(U) {
                  return U.items.length;
                }
              });
            }
            getTextContent(h = {}) {
              if (this._transport._htmlForXfa)
                return this.getXfa().then((g) => _xfa_text.XfaText.textContent(g));
              const I = this.streamTextContent(h);
              return new Promise(function(g, U) {
                function G() {
                  m.read().then(function({
                    value: Q,
                    done: it
                  }) {
                    if (it) {
                      g(Y);
                      return;
                    }
                    Object.assign(Y.styles, Q.styles), Y.items.push(...Q.items), G();
                  }, U);
                }
                const m = I.getReader(), Y = {
                  items: [],
                  styles: /* @__PURE__ */ Object.create(null)
                };
                G();
              });
            }
            getStructTree() {
              return this._transport.getStructTree(this._pageIndex);
            }
            _destroy() {
              this.destroyed = !0;
              const h = [];
              for (const I of this._intentStates.values())
                if (this._abortOperatorList({
                  intentState: I,
                  reason: new Error("Page was destroyed."),
                  force: !0
                }), !I.opListReadCapability)
                  for (const g of I.renderTasks)
                    h.push(g.completed), g.cancel();
              return this.objs.clear(), ct(this, n, !1), Z(this, L, Te).call(this), Promise.all(h);
            }
            cleanup(h = !1) {
              ct(this, n, !0);
              const I = Z(this, u, ue).call(this, !1);
              return h && I && this._stats && (this._stats = new _display_utils.StatTimer()), I;
            }
            _startRenderPage(h, I) {
              var U, G;
              const g = this._intentStates.get(I);
              g && ((U = this._stats) == null || U.timeEnd("Page Request"), (G = g.displayReadyCapability) == null || G.resolve(h));
            }
            _renderPageChunk(h, I) {
              for (let g = 0, U = h.length; g < U; g++)
                I.operatorList.fnArray.push(h.fnArray[g]), I.operatorList.argsArray.push(h.argsArray[g]);
              I.operatorList.lastChunk = h.lastChunk, I.operatorList.separateAnnots = h.separateAnnots;
              for (const g of I.renderTasks)
                g.operatorListChanged();
              h.lastChunk && Z(this, u, ue).call(this, !0);
            }
            _pumpOperatorList({
              renderingIntent: h,
              cacheKey: I,
              annotationStorageSerializable: g
            }) {
              const {
                map: U,
                transfers: G
              } = g, Y = this._transport.messageHandler.sendWithStream("GetOperatorList", {
                pageIndex: this._pageIndex,
                intent: h,
                cacheKey: I,
                annotationStorage: U
              }, G).getReader(), Q = this._intentStates.get(I);
              Q.streamReader = Y;
              const it = () => {
                Y.read().then(({
                  value: z,
                  done: lt
                }) => {
                  if (lt) {
                    Q.streamReader = null;
                    return;
                  }
                  this._transport.destroyed || (this._renderPageChunk(z, Q), it());
                }, (z) => {
                  if (Q.streamReader = null, !this._transport.destroyed) {
                    if (Q.operatorList) {
                      Q.operatorList.lastChunk = !0;
                      for (const lt of Q.renderTasks)
                        lt.operatorListChanged();
                      Z(this, u, ue).call(this, !0);
                    }
                    if (Q.displayReadyCapability)
                      Q.displayReadyCapability.reject(z);
                    else if (Q.opListReadCapability)
                      Q.opListReadCapability.reject(z);
                    else
                      throw z;
                  }
                });
              };
              it();
            }
            _abortOperatorList({
              intentState: h,
              reason: I,
              force: g = !1
            }) {
              if (h.streamReader) {
                if (h.streamReaderCancelTimeout && (clearTimeout(h.streamReaderCancelTimeout), h.streamReaderCancelTimeout = null), !g) {
                  if (h.renderTasks.size > 0)
                    return;
                  if (I instanceof _display_utils.RenderingCancelledException) {
                    let U = RENDERING_CANCELLED_TIMEOUT;
                    I.extraDelay > 0 && I.extraDelay < 1e3 && (U += I.extraDelay), h.streamReaderCancelTimeout = setTimeout(() => {
                      h.streamReaderCancelTimeout = null, this._abortOperatorList({
                        intentState: h,
                        reason: I,
                        force: !0
                      });
                    }, U);
                    return;
                  }
                }
                if (h.streamReader.cancel(new _util.AbortException(I.message)).catch(() => {
                }), h.streamReader = null, !this._transport.destroyed) {
                  for (const [U, G] of this._intentStates)
                    if (G === h) {
                      this._intentStates.delete(U);
                      break;
                    }
                  this.cleanup();
                }
              }
            }
            get stats() {
              return this._stats;
            }
          }
          O = new WeakMap(), n = new WeakMap(), u = new WeakSet(), ue = function(h = !1) {
            if (Z(this, L, Te).call(this), !t(this, n) || this.destroyed)
              return !1;
            if (h)
              return ct(this, O, setTimeout(() => {
                ct(this, O, null), Z(this, u, ue).call(this, !1);
              }, DELAYED_CLEANUP_TIMEOUT)), !1;
            for (const {
              renderTasks: I,
              operatorList: g
            } of this._intentStates.values())
              if (I.size > 0 || !g.lastChunk)
                return !1;
            return this._intentStates.clear(), this.objs.clear(), ct(this, n, !1), !0;
          }, L = new WeakSet(), Te = function() {
            t(this, O) && (clearTimeout(t(this, O)), ct(this, O, null));
          }, exports.PDFPageProxy = PDFPageProxy;
          class LoopbackPort {
            constructor() {
              V(this, b, /* @__PURE__ */ new Set());
              V(this, P, Promise.resolve());
            }
            postMessage(h, I) {
              const g = {
                data: structuredClone(h, I ? {
                  transfer: I
                } : null)
              };
              t(this, P).then(() => {
                for (const U of t(this, b))
                  U.call(this, g);
              });
            }
            addEventListener(h, I) {
              t(this, b).add(I);
            }
            removeEventListener(h, I) {
              t(this, b).delete(I);
            }
            terminate() {
              t(this, b).clear();
            }
          }
          b = new WeakMap(), P = new WeakMap(), exports.LoopbackPort = LoopbackPort;
          const PDFWorkerUtil = {
            isWorkerDisabled: !1,
            fallbackWorkerSrc: null,
            fakeWorkerId: 0
          };
          exports.PDFWorkerUtil = PDFWorkerUtil;
          {
            if (_util.isNodeJS && typeof commonjsRequire == "function")
              PDFWorkerUtil.isWorkerDisabled = !0, PDFWorkerUtil.fallbackWorkerSrc = "./pdf.worker.js";
            else if (typeof document == "object") {
              const v = (p = document == null ? void 0 : document.currentScript) == null ? void 0 : p.src;
              v && (PDFWorkerUtil.fallbackWorkerSrc = v.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2"));
            }
            PDFWorkerUtil.isSameOrigin = function(v, h) {
              let I;
              try {
                if (I = new URL(v), !I.origin || I.origin === "null")
                  return !1;
              } catch {
                return !1;
              }
              const g = new URL(h, I);
              return I.origin === g.origin;
            }, PDFWorkerUtil.createCDNWrapper = function(v) {
              const h = `importScripts("${v}");`;
              return URL.createObjectURL(new Blob([h]));
            };
          }
          const _PDFWorker = class _PDFWorker {
            constructor({
              name: v = null,
              port: h = null,
              verbosity: I = (0, _util.getVerbosityLevel)()
            } = {}) {
              var g;
              if (this.name = v, this.destroyed = !1, this.verbosity = I, this._readyCapability = new _util.PromiseCapability(), this._port = null, this._webWorker = null, this._messageHandler = null, h) {
                if ((g = t(_PDFWorker, F)) != null && g.has(h))
                  throw new Error("Cannot use more than one PDFWorker per port.");
                (t(_PDFWorker, F) || ct(_PDFWorker, F, /* @__PURE__ */ new WeakMap())).set(h, this), this._initializeFromPort(h);
                return;
              }
              this._initialize();
            }
            get promise() {
              return this._readyCapability.promise;
            }
            get port() {
              return this._port;
            }
            get messageHandler() {
              return this._messageHandler;
            }
            _initializeFromPort(v) {
              this._port = v, this._messageHandler = new _message_handler.MessageHandler("main", "worker", v), this._messageHandler.on("ready", function() {
              }), this._readyCapability.resolve(), this._messageHandler.send("configure", {
                verbosity: this.verbosity
              });
            }
            _initialize() {
              if (!PDFWorkerUtil.isWorkerDisabled && !_PDFWorker._mainThreadWorkerMessageHandler) {
                let {
                  workerSrc: v
                } = _PDFWorker;
                try {
                  PDFWorkerUtil.isSameOrigin(window.location.href, v) || (v = PDFWorkerUtil.createCDNWrapper(new URL(v, window.location).href));
                  const h = new Worker(v), I = new _message_handler.MessageHandler("main", "worker", h), g = () => {
                    h.removeEventListener("error", U), I.destroy(), h.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
                  }, U = () => {
                    this._webWorker || g();
                  };
                  h.addEventListener("error", U), I.on("test", (m) => {
                    if (h.removeEventListener("error", U), this.destroyed) {
                      g();
                      return;
                    }
                    m ? (this._messageHandler = I, this._port = h, this._webWorker = h, this._readyCapability.resolve(), I.send("configure", {
                      verbosity: this.verbosity
                    })) : (this._setupFakeWorker(), I.destroy(), h.terminate());
                  }), I.on("ready", (m) => {
                    if (h.removeEventListener("error", U), this.destroyed) {
                      g();
                      return;
                    }
                    try {
                      G();
                    } catch {
                      this._setupFakeWorker();
                    }
                  });
                  const G = () => {
                    const m = new Uint8Array();
                    I.send("test", m, [m.buffer]);
                  };
                  G();
                  return;
                } catch {
                  (0, _util.info)("The worker has been disabled.");
                }
              }
              this._setupFakeWorker();
            }
            _setupFakeWorker() {
              PDFWorkerUtil.isWorkerDisabled || ((0, _util.warn)("Setting up fake worker."), PDFWorkerUtil.isWorkerDisabled = !0), _PDFWorker._setupFakeWorkerGlobal.then((v) => {
                if (this.destroyed) {
                  this._readyCapability.reject(new Error("Worker was destroyed"));
                  return;
                }
                const h = new LoopbackPort();
                this._port = h;
                const I = `fake${PDFWorkerUtil.fakeWorkerId++}`, g = new _message_handler.MessageHandler(I + "_worker", I, h);
                v.setup(g, h);
                const U = new _message_handler.MessageHandler(I, I + "_worker", h);
                this._messageHandler = U, this._readyCapability.resolve(), U.send("configure", {
                  verbosity: this.verbosity
                });
              }).catch((v) => {
                this._readyCapability.reject(new Error(`Setting up fake worker failed: "${v.message}".`));
              });
            }
            destroy() {
              var v;
              this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), (v = t(_PDFWorker, F)) == null || v.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
            }
            static fromPort(v) {
              var I;
              if (!(v != null && v.port))
                throw new Error("PDFWorker.fromPort - invalid method signature.");
              const h = (I = t(this, F)) == null ? void 0 : I.get(v.port);
              if (h) {
                if (h._pendingDestroy)
                  throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
                return h;
              }
              return new _PDFWorker(v);
            }
            static get workerSrc() {
              if (_worker_options.GlobalWorkerOptions.workerSrc)
                return _worker_options.GlobalWorkerOptions.workerSrc;
              if (PDFWorkerUtil.fallbackWorkerSrc !== null)
                return _util.isNodeJS || (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.'), PDFWorkerUtil.fallbackWorkerSrc;
              throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
            }
            static get _mainThreadWorkerMessageHandler() {
              var v;
              try {
                return ((v = globalThis.pdfjsWorker) == null ? void 0 : v.WorkerMessageHandler) || null;
              } catch {
                return null;
              }
            }
            static get _setupFakeWorkerGlobal() {
              const loader = async () => {
                const mainWorkerMessageHandler = this._mainThreadWorkerMessageHandler;
                if (mainWorkerMessageHandler)
                  return mainWorkerMessageHandler;
                if (_util.isNodeJS && typeof commonjsRequire == "function") {
                  const worker = eval("require")(this.workerSrc);
                  return worker.WorkerMessageHandler;
                }
                return await (0, _display_utils.loadScript)(this.workerSrc), window.pdfjsWorker.WorkerMessageHandler;
              };
              return (0, _util.shadow)(this, "_setupFakeWorkerGlobal", loader());
            }
          };
          F = new WeakMap(), V(_PDFWorker, F, void 0);
          let PDFWorker = _PDFWorker;
          exports.PDFWorker = PDFWorker;
          class WorkerTransport {
            constructor(h, I, g, U, G) {
              V(this, y);
              V(this, M, /* @__PURE__ */ new Map());
              V(this, k, /* @__PURE__ */ new Map());
              V(this, w, /* @__PURE__ */ new Map());
              V(this, _, null);
              this.messageHandler = h, this.loadingTask = I, this.commonObjs = new PDFObjects(), this.fontLoader = new _font_loader.FontLoader({
                ownerDocument: U.ownerDocument,
                styleElement: U.styleElement
              }), this._params = U, this.canvasFactory = G.canvasFactory, this.filterFactory = G.filterFactory, this.cMapReaderFactory = G.cMapReaderFactory, this.standardFontDataFactory = G.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = g, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = new _util.PromiseCapability(), this.setupMessageHandler();
            }
            get annotationStorage() {
              return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage());
            }
            getRenderingIntent(h, I = _util.AnnotationMode.ENABLE, g = null, U = !1) {
              let G = _util.RenderingIntentFlag.DISPLAY, m = _annotation_storage.SerializableEmpty;
              switch (h) {
                case "any":
                  G = _util.RenderingIntentFlag.ANY;
                  break;
                case "display":
                  break;
                case "print":
                  G = _util.RenderingIntentFlag.PRINT;
                  break;
                default:
                  (0, _util.warn)(`getRenderingIntent - invalid intent: ${h}`);
              }
              switch (I) {
                case _util.AnnotationMode.DISABLE:
                  G += _util.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                  break;
                case _util.AnnotationMode.ENABLE:
                  break;
                case _util.AnnotationMode.ENABLE_FORMS:
                  G += _util.RenderingIntentFlag.ANNOTATIONS_FORMS;
                  break;
                case _util.AnnotationMode.ENABLE_STORAGE:
                  G += _util.RenderingIntentFlag.ANNOTATIONS_STORAGE, m = (G & _util.RenderingIntentFlag.PRINT && g instanceof _annotation_storage.PrintAnnotationStorage ? g : this.annotationStorage).serializable;
                  break;
                default:
                  (0, _util.warn)(`getRenderingIntent - invalid annotationMode: ${I}`);
              }
              return U && (G += _util.RenderingIntentFlag.OPLIST), {
                renderingIntent: G,
                cacheKey: `${G}_${m.hash}`,
                annotationStorageSerializable: m
              };
            }
            destroy() {
              var g;
              if (this.destroyCapability)
                return this.destroyCapability.promise;
              this.destroyed = !0, this.destroyCapability = new _util.PromiseCapability(), (g = t(this, _)) == null || g.reject(new Error("Worker was destroyed during onPassword callback"));
              const h = [];
              for (const U of t(this, k).values())
                h.push(U._destroy());
              t(this, k).clear(), t(this, w).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
              const I = this.messageHandler.sendWithPromise("Terminate", null);
              return h.push(I), Promise.all(h).then(() => {
                var U;
                this.commonObjs.clear(), this.fontLoader.clear(), t(this, M).clear(), this.filterFactory.destroy(), (U = this._networkStream) == null || U.cancelAllRequests(new _util.AbortException("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
              }, this.destroyCapability.reject), this.destroyCapability.promise;
            }
            setupMessageHandler() {
              const {
                messageHandler: h,
                loadingTask: I
              } = this;
              h.on("GetReader", (g, U) => {
                (0, _util.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (G) => {
                  this._lastProgress = {
                    loaded: G.loaded,
                    total: G.total
                  };
                }, U.onPull = () => {
                  this._fullReader.read().then(function({
                    value: G,
                    done: m
                  }) {
                    if (m) {
                      U.close();
                      return;
                    }
                    (0, _util.assert)(G instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), U.enqueue(new Uint8Array(G), 1, [G]);
                  }).catch((G) => {
                    U.error(G);
                  });
                }, U.onCancel = (G) => {
                  this._fullReader.cancel(G), U.ready.catch((m) => {
                    if (!this.destroyed)
                      throw m;
                  });
                };
              }), h.on("ReaderHeadersReady", (g) => {
                const U = new _util.PromiseCapability(), G = this._fullReader;
                return G.headersReady.then(() => {
                  var m;
                  (!G.isStreamingSupported || !G.isRangeSupported) && (this._lastProgress && ((m = I.onProgress) == null || m.call(I, this._lastProgress)), G.onProgress = (Y) => {
                    var Q;
                    (Q = I.onProgress) == null || Q.call(I, {
                      loaded: Y.loaded,
                      total: Y.total
                    });
                  }), U.resolve({
                    isStreamingSupported: G.isStreamingSupported,
                    isRangeSupported: G.isRangeSupported,
                    contentLength: G.contentLength
                  });
                }, U.reject), U.promise;
              }), h.on("GetRangeReader", (g, U) => {
                (0, _util.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
                const G = this._networkStream.getRangeReader(g.begin, g.end);
                if (!G) {
                  U.close();
                  return;
                }
                U.onPull = () => {
                  G.read().then(function({
                    value: m,
                    done: Y
                  }) {
                    if (Y) {
                      U.close();
                      return;
                    }
                    (0, _util.assert)(m instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), U.enqueue(new Uint8Array(m), 1, [m]);
                  }).catch((m) => {
                    U.error(m);
                  });
                }, U.onCancel = (m) => {
                  G.cancel(m), U.ready.catch((Y) => {
                    if (!this.destroyed)
                      throw Y;
                  });
                };
              }), h.on("GetDoc", ({
                pdfInfo: g
              }) => {
                this._numPages = g.numPages, this._htmlForXfa = g.htmlForXfa, delete g.htmlForXfa, I._capability.resolve(new PDFDocumentProxy(g, this));
              }), h.on("DocException", function(g) {
                let U;
                switch (g.name) {
                  case "PasswordException":
                    U = new _util.PasswordException(g.message, g.code);
                    break;
                  case "InvalidPDFException":
                    U = new _util.InvalidPDFException(g.message);
                    break;
                  case "MissingPDFException":
                    U = new _util.MissingPDFException(g.message);
                    break;
                  case "UnexpectedResponseException":
                    U = new _util.UnexpectedResponseException(g.message, g.status);
                    break;
                  case "UnknownErrorException":
                    U = new _util.UnknownErrorException(g.message, g.details);
                    break;
                  default:
                    (0, _util.unreachable)("DocException - expected a valid Error.");
                }
                I._capability.reject(U);
              }), h.on("PasswordRequest", (g) => {
                if (ct(this, _, new _util.PromiseCapability()), I.onPassword) {
                  const U = (G) => {
                    G instanceof Error ? t(this, _).reject(G) : t(this, _).resolve({
                      password: G
                    });
                  };
                  try {
                    I.onPassword(U, g.code);
                  } catch (G) {
                    t(this, _).reject(G);
                  }
                } else
                  t(this, _).reject(new _util.PasswordException(g.message, g.code));
                return t(this, _).promise;
              }), h.on("DataLoaded", (g) => {
                var U;
                (U = I.onProgress) == null || U.call(I, {
                  loaded: g.length,
                  total: g.length
                }), this.downloadInfoCapability.resolve(g);
              }), h.on("StartRenderPage", (g) => {
                if (this.destroyed)
                  return;
                t(this, k).get(g.pageIndex)._startRenderPage(g.transparency, g.cacheKey);
              }), h.on("commonobj", ([g, U, G]) => {
                var m;
                if (!this.destroyed && !this.commonObjs.has(g))
                  switch (U) {
                    case "Font":
                      const Y = this._params;
                      if ("error" in G) {
                        const z = G.error;
                        (0, _util.warn)(`Error during font loading: ${z}`), this.commonObjs.resolve(g, z);
                        break;
                      }
                      const Q = Y.pdfBug && ((m = globalThis.FontInspector) != null && m.enabled) ? (z, lt) => globalThis.FontInspector.fontAdded(z, lt) : null, it = new _font_loader.FontFaceObject(G, {
                        isEvalSupported: Y.isEvalSupported,
                        disableFontFace: Y.disableFontFace,
                        ignoreErrors: Y.ignoreErrors,
                        inspectFont: Q
                      });
                      this.fontLoader.bind(it).catch((z) => h.sendWithPromise("FontFallback", {
                        id: g
                      })).finally(() => {
                        !Y.fontExtraProperties && it.data && (it.data = null), this.commonObjs.resolve(g, it);
                      });
                      break;
                    case "FontPath":
                    case "Image":
                    case "Pattern":
                      this.commonObjs.resolve(g, G);
                      break;
                    default:
                      throw new Error(`Got unknown common object type ${U}`);
                  }
              }), h.on("obj", ([g, U, G, m]) => {
                var Q;
                if (this.destroyed)
                  return;
                const Y = t(this, k).get(U);
                if (!Y.objs.has(g))
                  switch (G) {
                    case "Image":
                      if (Y.objs.resolve(g, m), m) {
                        let it;
                        if (m.bitmap) {
                          const {
                            width: z,
                            height: lt
                          } = m;
                          it = z * lt * 4;
                        } else
                          it = ((Q = m.data) == null ? void 0 : Q.length) || 0;
                        it > _util.MAX_IMAGE_SIZE_TO_CACHE && (Y._maybeCleanupAfterRender = !0);
                      }
                      break;
                    case "Pattern":
                      Y.objs.resolve(g, m);
                      break;
                    default:
                      throw new Error(`Got unknown object type ${G}`);
                  }
              }), h.on("DocProgress", (g) => {
                var U;
                this.destroyed || (U = I.onProgress) == null || U.call(I, {
                  loaded: g.loaded,
                  total: g.total
                });
              }), h.on("FetchBuiltInCMap", (g) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(g) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), h.on("FetchStandardFontData", (g) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(g) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
            }
            getData() {
              return this.messageHandler.sendWithPromise("GetData", null);
            }
            saveDocument() {
              var g;
              this.annotationStorage.size <= 0 && (0, _util.warn)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
              const {
                map: h,
                transfers: I
              } = this.annotationStorage.serializable;
              return this.messageHandler.sendWithPromise("SaveDocument", {
                isPureXfa: !!this._htmlForXfa,
                numPages: this._numPages,
                annotationStorage: h,
                filename: ((g = this._fullReader) == null ? void 0 : g.filename) ?? null
              }, I).finally(() => {
                this.annotationStorage.resetModified();
              });
            }
            getPage(h) {
              if (!Number.isInteger(h) || h <= 0 || h > this._numPages)
                return Promise.reject(new Error("Invalid page request."));
              const I = h - 1, g = t(this, w).get(I);
              if (g)
                return g;
              const U = this.messageHandler.sendWithPromise("GetPage", {
                pageIndex: I
              }).then((G) => {
                if (this.destroyed)
                  throw new Error("Transport destroyed");
                const m = new PDFPageProxy(I, G, this, this._params.pdfBug);
                return t(this, k).set(I, m), m;
              });
              return t(this, w).set(I, U), U;
            }
            getPageIndex(h) {
              return typeof h != "object" || h === null || !Number.isInteger(h.num) || h.num < 0 || !Number.isInteger(h.gen) || h.gen < 0 ? Promise.reject(new Error("Invalid pageIndex request.")) : this.messageHandler.sendWithPromise("GetPageIndex", {
                num: h.num,
                gen: h.gen
              });
            }
            getAnnotations(h, I) {
              return this.messageHandler.sendWithPromise("GetAnnotations", {
                pageIndex: h,
                intent: I
              });
            }
            getFieldObjects() {
              return Z(this, y, Pe).call(this, "GetFieldObjects");
            }
            hasJSActions() {
              return Z(this, y, Pe).call(this, "HasJSActions");
            }
            getCalculationOrderIds() {
              return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
            }
            getDestinations() {
              return this.messageHandler.sendWithPromise("GetDestinations", null);
            }
            getDestination(h) {
              return typeof h != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
                id: h
              });
            }
            getPageLabels() {
              return this.messageHandler.sendWithPromise("GetPageLabels", null);
            }
            getPageLayout() {
              return this.messageHandler.sendWithPromise("GetPageLayout", null);
            }
            getPageMode() {
              return this.messageHandler.sendWithPromise("GetPageMode", null);
            }
            getViewerPreferences() {
              return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
            }
            getOpenAction() {
              return this.messageHandler.sendWithPromise("GetOpenAction", null);
            }
            getAttachments() {
              return this.messageHandler.sendWithPromise("GetAttachments", null);
            }
            getDocJSActions() {
              return Z(this, y, Pe).call(this, "GetDocJSActions");
            }
            getPageJSActions(h) {
              return this.messageHandler.sendWithPromise("GetPageJSActions", {
                pageIndex: h
              });
            }
            getStructTree(h) {
              return this.messageHandler.sendWithPromise("GetStructTree", {
                pageIndex: h
              });
            }
            getOutline() {
              return this.messageHandler.sendWithPromise("GetOutline", null);
            }
            getOptionalContentConfig() {
              return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then((h) => new _optional_content_config.OptionalContentConfig(h));
            }
            getPermissions() {
              return this.messageHandler.sendWithPromise("GetPermissions", null);
            }
            getMetadata() {
              const h = "GetMetadata", I = t(this, M).get(h);
              if (I)
                return I;
              const g = this.messageHandler.sendWithPromise(h, null).then((U) => {
                var G, m;
                return {
                  info: U[0],
                  metadata: U[1] ? new _metadata.Metadata(U[1]) : null,
                  contentDispositionFilename: ((G = this._fullReader) == null ? void 0 : G.filename) ?? null,
                  contentLength: ((m = this._fullReader) == null ? void 0 : m.contentLength) ?? null
                };
              });
              return t(this, M).set(h, g), g;
            }
            getMarkInfo() {
              return this.messageHandler.sendWithPromise("GetMarkInfo", null);
            }
            async startCleanup(h = !1) {
              if (!this.destroyed) {
                await this.messageHandler.sendWithPromise("Cleanup", null);
                for (const I of t(this, k).values())
                  if (!I.cleanup())
                    throw new Error(`startCleanup: Page ${I.pageNumber} is currently rendering.`);
                this.commonObjs.clear(), h || this.fontLoader.clear(), t(this, M).clear(), this.filterFactory.destroy(!0);
              }
            }
            get loadingParams() {
              const {
                disableAutoFetch: h,
                enableXfa: I
              } = this._params;
              return (0, _util.shadow)(this, "loadingParams", {
                disableAutoFetch: h,
                enableXfa: I
              });
            }
          }
          M = new WeakMap(), k = new WeakMap(), w = new WeakMap(), _ = new WeakMap(), y = new WeakSet(), Pe = function(h, I = null) {
            const g = t(this, M).get(h);
            if (g)
              return g;
            const U = this.messageHandler.sendWithPromise(h, I);
            return t(this, M).set(h, U), U;
          };
          class PDFObjects {
            constructor() {
              V(this, R);
              V(this, D, /* @__PURE__ */ Object.create(null));
            }
            get(h, I = null) {
              if (I) {
                const U = Z(this, R, Be).call(this, h);
                return U.capability.promise.then(() => I(U.data)), null;
              }
              const g = t(this, D)[h];
              if (!(g != null && g.capability.settled))
                throw new Error(`Requesting object that isn't resolved yet ${h}.`);
              return g.data;
            }
            has(h) {
              const I = t(this, D)[h];
              return (I == null ? void 0 : I.capability.settled) || !1;
            }
            resolve(h, I = null) {
              const g = Z(this, R, Be).call(this, h);
              g.data = I, g.capability.resolve();
            }
            clear() {
              var h;
              for (const I in t(this, D)) {
                const {
                  data: g
                } = t(this, D)[I];
                (h = g == null ? void 0 : g.bitmap) == null || h.close();
              }
              ct(this, D, /* @__PURE__ */ Object.create(null));
            }
          }
          D = new WeakMap(), R = new WeakSet(), Be = function(h) {
            var I;
            return (I = t(this, D))[h] || (I[h] = {
              capability: new _util.PromiseCapability(),
              data: null
            });
          };
          class RenderTask {
            constructor(h) {
              V(this, o, null);
              ct(this, o, h), this.onContinue = null;
            }
            get promise() {
              return t(this, o).capability.promise;
            }
            cancel(h = 0) {
              t(this, o).cancel(null, h);
            }
            get separateAnnots() {
              const {
                separateAnnots: h
              } = t(this, o).operatorList;
              if (!h)
                return !1;
              const {
                annotationCanvasMap: I
              } = t(this, o);
              return h.form || h.canvas && (I == null ? void 0 : I.size) > 0;
            }
          }
          o = new WeakMap(), exports.RenderTask = RenderTask;
          const j = class j {
            constructor({
              callback: h,
              params: I,
              objs: g,
              commonObjs: U,
              annotationCanvasMap: G,
              operatorList: m,
              pageIndex: Y,
              canvasFactory: Q,
              filterFactory: it,
              useRequestAnimationFrame: z = !1,
              pdfBug: lt = !1,
              pageColors: K = null
            }) {
              this.callback = h, this.params = I, this.objs = g, this.commonObjs = U, this.annotationCanvasMap = G, this.operatorListIdx = null, this.operatorList = m, this._pageIndex = Y, this.canvasFactory = Q, this.filterFactory = it, this._pdfBug = lt, this.pageColors = K, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = z === !0 && typeof window < "u", this.cancelled = !1, this.capability = new _util.PromiseCapability(), this.task = new RenderTask(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = I.canvasContext.canvas;
            }
            get completed() {
              return this.capability.promise.catch(function() {
              });
            }
            initializeGraphics({
              transparency: h = !1,
              optionalContentConfig: I
            }) {
              var Y, Q;
              if (this.cancelled)
                return;
              if (this._canvas) {
                if (t(j, f).has(this._canvas))
                  throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
                t(j, f).add(this._canvas);
              }
              this._pdfBug && ((Y = globalThis.StepperManager) != null && Y.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
              const {
                canvasContext: g,
                viewport: U,
                transform: G,
                background: m
              } = this.params;
              this.gfx = new _canvas.CanvasGraphics(g, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                optionalContentConfig: I
              }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
                transform: G,
                viewport: U,
                transparency: h,
                background: m
              }), this.operatorListIdx = 0, this.graphicsReady = !0, (Q = this.graphicsReadyCallback) == null || Q.call(this);
            }
            cancel(h = null, I = 0) {
              var g;
              this.running = !1, this.cancelled = !0, (g = this.gfx) == null || g.endDrawing(), t(j, f).delete(this._canvas), this.callback(h || new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, I));
            }
            operatorListChanged() {
              var h;
              if (!this.graphicsReady) {
                this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
                return;
              }
              (h = this.stepper) == null || h.updateOperatorList(this.operatorList), !this.running && this._continue();
            }
            _continue() {
              this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
            }
            _scheduleNext() {
              this._useRequestAnimationFrame ? window.requestAnimationFrame(() => {
                this._nextBound().catch(this._cancelBound);
              }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
            }
            async _next() {
              this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), t(j, f).delete(this._canvas), this.callback())));
            }
          };
          f = new WeakMap(), V(j, f, /* @__PURE__ */ new WeakSet());
          let InternalRenderTask = j;
          const version = "3.11.174";
          exports.version = version;
          const build = "ce8716743";
          exports.build = build;
        },
        /* 3 */
        /***/
        (C, s, O) => {
          var P, p, F, An, k;
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.SerializableEmpty = s.PrintAnnotationStorage = s.AnnotationStorage = void 0;
          var n = O(1), u = O(4), B = O(8);
          const L = Object.freeze({
            map: null,
            hash: "",
            transfers: void 0
          });
          s.SerializableEmpty = L;
          class X {
            constructor() {
              V(this, F);
              V(this, P, !1);
              V(this, p, /* @__PURE__ */ new Map());
              this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
            }
            getValue(_, y) {
              const S = t(this, p).get(_);
              return S === void 0 ? y : Object.assign(y, S);
            }
            getRawValue(_) {
              return t(this, p).get(_);
            }
            remove(_) {
              if (t(this, p).delete(_), t(this, p).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
                for (const y of t(this, p).values())
                  if (y instanceof u.AnnotationEditor)
                    return;
                this.onAnnotationEditor(null);
              }
            }
            setValue(_, y) {
              const S = t(this, p).get(_);
              let D = !1;
              if (S !== void 0)
                for (const [R, A] of Object.entries(y))
                  S[R] !== A && (D = !0, S[R] = A);
              else
                D = !0, t(this, p).set(_, y);
              D && Z(this, F, An).call(this), y instanceof u.AnnotationEditor && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(y.constructor._type);
            }
            has(_) {
              return t(this, p).has(_);
            }
            getAll() {
              return t(this, p).size > 0 ? (0, n.objectFromMap)(t(this, p)) : null;
            }
            setAll(_) {
              for (const [y, S] of Object.entries(_))
                this.setValue(y, S);
            }
            get size() {
              return t(this, p).size;
            }
            resetModified() {
              t(this, P) && (ct(this, P, !1), typeof this.onResetModified == "function" && this.onResetModified());
            }
            get print() {
              return new b(this);
            }
            get serializable() {
              if (t(this, p).size === 0)
                return L;
              const _ = /* @__PURE__ */ new Map(), y = new B.MurmurHash3_64(), S = [], D = /* @__PURE__ */ Object.create(null);
              let R = !1;
              for (const [A, o] of t(this, p)) {
                const f = o instanceof u.AnnotationEditor ? o.serialize(!1, D) : o;
                f && (_.set(A, f), y.update(`${A}:${JSON.stringify(f)}`), R || (R = !!f.bitmap));
              }
              if (R)
                for (const A of _.values())
                  A.bitmap && S.push(A.bitmap);
              return _.size > 0 ? {
                map: _,
                hash: y.hexdigest(),
                transfers: S
              } : L;
            }
          }
          P = new WeakMap(), p = new WeakMap(), F = new WeakSet(), An = function() {
            t(this, P) || (ct(this, P, !0), typeof this.onSetModified == "function" && this.onSetModified());
          }, s.AnnotationStorage = X;
          class b extends X {
            constructor(y) {
              super();
              V(this, k, void 0);
              const {
                map: S,
                hash: D,
                transfers: R
              } = y.serializable, A = structuredClone(S, R ? {
                transfer: R
              } : null);
              ct(this, k, {
                map: A,
                hash: D,
                transfers: R
              });
            }
            get print() {
              (0, n.unreachable)("Should not call PrintAnnotationStorage.print");
            }
            get serializable() {
              return t(this, k);
            }
          }
          k = new WeakMap(), s.PrintAnnotationStorage = b;
        },
        /* 4 */
        /***/
        (C, s, O) => {
          var b, P, p, F, M, k, w, _, y, S, D, R, A, o, f, Ue, v, We, I, He, U, $e, m, En, Q, Sn, z, Tn, K, Ge, yt, Pn;
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.AnnotationEditor = void 0;
          var n = O(5), u = O(1), B = O(6);
          const e = class e {
            constructor(i) {
              V(this, f);
              V(this, v);
              V(this, U);
              V(this, m);
              V(this, Q);
              V(this, z);
              V(this, K);
              V(this, yt);
              V(this, b, "");
              V(this, P, !1);
              V(this, p, null);
              V(this, F, null);
              V(this, M, null);
              V(this, k, !1);
              V(this, w, null);
              V(this, _, this.focusin.bind(this));
              V(this, y, this.focusout.bind(this));
              V(this, S, !1);
              V(this, D, !1);
              V(this, R, !1);
              ne(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
              ne(this, "_uiManager", null);
              ne(this, "_focusEventsAllowed", !0);
              ne(this, "_l10nPromise", null);
              V(this, A, !1);
              V(this, o, e._zIndex++);
              this.constructor === e && (0, u.unreachable)("Cannot initialize AnnotationEditor."), this.parent = i.parent, this.id = i.id, this.width = this.height = null, this.pageIndex = i.parent.pageIndex, this.name = i.name, this.div = null, this._uiManager = i.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = i.isCentered, this._structTreeParentId = null;
              const {
                rotation: c,
                rawDims: {
                  pageWidth: d,
                  pageHeight: T,
                  pageX: N,
                  pageY: W
                }
              } = this.parent.viewport;
              this.rotation = c, this.pageRotation = (360 + c - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [d, T], this.pageTranslation = [N, W];
              const [q, nt] = this.parentDimensions;
              this.x = i.x / q, this.y = i.y / nt, this.isAttachedToDOM = !1, this.deleted = !1;
            }
            get editorType() {
              return Object.getPrototypeOf(this).constructor._type;
            }
            static get _defaultLineColor() {
              return (0, u.shadow)(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
            }
            static deleteAnnotationElement(i) {
              const c = new X({
                id: i.parent.getNextId(),
                parent: i.parent,
                uiManager: i._uiManager
              });
              c.annotationElementId = i.annotationElementId, c.deleted = !0, c._uiManager.addToAnnotationStorage(c);
            }
            static initialize(i, c = null) {
              if (e._l10nPromise || (e._l10nPromise = new Map(["editor_alt_text_button_label", "editor_alt_text_edit_button_label", "editor_alt_text_decorative_tooltip"].map((T) => [T, i.get(T)]))), c != null && c.strings)
                for (const T of c.strings)
                  e._l10nPromise.set(T, i.get(T));
              if (e._borderLineWidth !== -1)
                return;
              const d = getComputedStyle(document.documentElement);
              e._borderLineWidth = parseFloat(d.getPropertyValue("--outline-width")) || 0;
            }
            static updateDefaultParams(i, c) {
            }
            static get defaultPropertiesToUpdate() {
              return [];
            }
            static isHandlingMimeForPasting(i) {
              return !1;
            }
            static paste(i, c) {
              (0, u.unreachable)("Not implemented");
            }
            get propertiesToUpdate() {
              return [];
            }
            get _isDraggable() {
              return t(this, A);
            }
            set _isDraggable(i) {
              var c;
              ct(this, A, i), (c = this.div) == null || c.classList.toggle("draggable", i);
            }
            center() {
              const [i, c] = this.pageDimensions;
              switch (this.parentRotation) {
                case 90:
                  this.x -= this.height * c / (i * 2), this.y += this.width * i / (c * 2);
                  break;
                case 180:
                  this.x += this.width / 2, this.y += this.height / 2;
                  break;
                case 270:
                  this.x += this.height * c / (i * 2), this.y -= this.width * i / (c * 2);
                  break;
                default:
                  this.x -= this.width / 2, this.y -= this.height / 2;
                  break;
              }
              this.fixAndSetPosition();
            }
            addCommands(i) {
              this._uiManager.addCommands(i);
            }
            get currentLayer() {
              return this._uiManager.currentLayer;
            }
            setInBackground() {
              this.div.style.zIndex = 0;
            }
            setInForeground() {
              this.div.style.zIndex = t(this, o);
            }
            setParent(i) {
              i !== null && (this.pageIndex = i.pageIndex, this.pageDimensions = i.pageDimensions), this.parent = i;
            }
            focusin(i) {
              this._focusEventsAllowed && (t(this, S) ? ct(this, S, !1) : this.parent.setSelected(this));
            }
            focusout(i) {
              var d;
              if (!this._focusEventsAllowed || !this.isAttachedToDOM)
                return;
              const c = i.relatedTarget;
              c != null && c.closest(`#${this.id}`) || (i.preventDefault(), (d = this.parent) != null && d.isMultipleSelection || this.commitOrRemove());
            }
            commitOrRemove() {
              this.isEmpty() ? this.remove() : this.commit();
            }
            commit() {
              this.addToAnnotationStorage();
            }
            addToAnnotationStorage() {
              this._uiManager.addToAnnotationStorage(this);
            }
            setAt(i, c, d, T) {
              const [N, W] = this.parentDimensions;
              [d, T] = this.screenToPageTranslation(d, T), this.x = (i + d) / N, this.y = (c + T) / W, this.fixAndSetPosition();
            }
            translate(i, c) {
              Z(this, f, Ue).call(this, this.parentDimensions, i, c);
            }
            translateInPage(i, c) {
              Z(this, f, Ue).call(this, this.pageDimensions, i, c), this.div.scrollIntoView({
                block: "nearest"
              });
            }
            drag(i, c) {
              const [d, T] = this.parentDimensions;
              if (this.x += i / d, this.y += c / T, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
                const {
                  x: ut,
                  y: pt
                } = this.div.getBoundingClientRect();
                this.parent.findNewParent(this, ut, pt) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
              }
              let {
                x: N,
                y: W
              } = this;
              const [q, nt] = Z(this, v, We).call(this);
              N += q, W += nt, this.div.style.left = `${(100 * N).toFixed(2)}%`, this.div.style.top = `${(100 * W).toFixed(2)}%`, this.div.scrollIntoView({
                block: "nearest"
              });
            }
            fixAndSetPosition() {
              const [i, c] = this.pageDimensions;
              let {
                x: d,
                y: T,
                width: N,
                height: W
              } = this;
              switch (N *= i, W *= c, d *= i, T *= c, this.rotation) {
                case 0:
                  d = Math.max(0, Math.min(i - N, d)), T = Math.max(0, Math.min(c - W, T));
                  break;
                case 90:
                  d = Math.max(0, Math.min(i - W, d)), T = Math.min(c, Math.max(N, T));
                  break;
                case 180:
                  d = Math.min(i, Math.max(N, d)), T = Math.min(c, Math.max(W, T));
                  break;
                case 270:
                  d = Math.min(i, Math.max(W, d)), T = Math.max(0, Math.min(c - N, T));
                  break;
              }
              this.x = d /= i, this.y = T /= c;
              const [q, nt] = Z(this, v, We).call(this);
              d += q, T += nt;
              const {
                style: ut
              } = this.div;
              ut.left = `${(100 * d).toFixed(2)}%`, ut.top = `${(100 * T).toFixed(2)}%`, this.moveInDOM();
            }
            screenToPageTranslation(i, c) {
              var d;
              return Z(d = e, I, He).call(d, i, c, this.parentRotation);
            }
            pageTranslationToScreen(i, c) {
              var d;
              return Z(d = e, I, He).call(d, i, c, 360 - this.parentRotation);
            }
            get parentScale() {
              return this._uiManager.viewParameters.realScale;
            }
            get parentRotation() {
              return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
            }
            get parentDimensions() {
              const {
                parentScale: i,
                pageDimensions: [c, d]
              } = this, T = c * i, N = d * i;
              return u.FeatureTest.isCSSRoundSupported ? [Math.round(T), Math.round(N)] : [T, N];
            }
            setDims(i, c) {
              var N;
              const [d, T] = this.parentDimensions;
              this.div.style.width = `${(100 * i / d).toFixed(2)}%`, t(this, k) || (this.div.style.height = `${(100 * c / T).toFixed(2)}%`), (N = t(this, p)) == null || N.classList.toggle("small", i < e.SMALL_EDITOR_SIZE || c < e.SMALL_EDITOR_SIZE);
            }
            fixDims() {
              const {
                style: i
              } = this.div, {
                height: c,
                width: d
              } = i, T = d.endsWith("%"), N = !t(this, k) && c.endsWith("%");
              if (T && N)
                return;
              const [W, q] = this.parentDimensions;
              T || (i.width = `${(100 * parseFloat(d) / W).toFixed(2)}%`), !t(this, k) && !N && (i.height = `${(100 * parseFloat(c) / q).toFixed(2)}%`);
            }
            getInitialTranslation() {
              return [0, 0];
            }
            async addAltTextButton() {
              if (t(this, p))
                return;
              const i = ct(this, p, document.createElement("button"));
              i.className = "altText";
              const c = await e._l10nPromise.get("editor_alt_text_button_label");
              i.textContent = c, i.setAttribute("aria-label", c), i.tabIndex = "0", i.addEventListener("contextmenu", B.noContextMenu), i.addEventListener("pointerdown", (d) => d.stopPropagation()), i.addEventListener("click", (d) => {
                d.preventDefault(), this._uiManager.editAltText(this);
              }, {
                capture: !0
              }), i.addEventListener("keydown", (d) => {
                d.target === i && d.key === "Enter" && (d.preventDefault(), this._uiManager.editAltText(this));
              }), Z(this, K, Ge).call(this), this.div.append(i), e.SMALL_EDITOR_SIZE || (e.SMALL_EDITOR_SIZE = Math.min(128, Math.round(i.getBoundingClientRect().width * 1.4)));
            }
            getClientDimensions() {
              return this.div.getBoundingClientRect();
            }
            get altTextData() {
              return {
                altText: t(this, b),
                decorative: t(this, P)
              };
            }
            set altTextData({
              altText: i,
              decorative: c
            }) {
              t(this, b) === i && t(this, P) === c || (ct(this, b, i), ct(this, P, c), Z(this, K, Ge).call(this));
            }
            render() {
              this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.setAttribute("tabIndex", 0), this.setInForeground(), this.div.addEventListener("focusin", t(this, _)), this.div.addEventListener("focusout", t(this, y));
              const [i, c] = this.parentDimensions;
              this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * c / i).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * i / c).toFixed(2)}%`);
              const [d, T] = this.getInitialTranslation();
              return this.translate(d, T), (0, n.bindEvents)(this, this.div, ["pointerdown"]), this.div;
            }
            pointerdown(i) {
              const {
                isMac: c
              } = u.FeatureTest.platform;
              if (i.button !== 0 || i.ctrlKey && c) {
                i.preventDefault();
                return;
              }
              ct(this, S, !0), Z(this, yt, Pn).call(this, i);
            }
            moveInDOM() {
              var i;
              (i = this.parent) == null || i.moveEditorInDOM(this);
            }
            _setParentAndPosition(i, c, d) {
              i.changeParent(this), this.x = c, this.y = d, this.fixAndSetPosition();
            }
            getRect(i, c) {
              const d = this.parentScale, [T, N] = this.pageDimensions, [W, q] = this.pageTranslation, nt = i / d, ut = c / d, pt = this.x * T, bt = this.y * N, ft = this.width * T, xt = this.height * N;
              switch (this.rotation) {
                case 0:
                  return [pt + nt + W, N - bt - ut - xt + q, pt + nt + ft + W, N - bt - ut + q];
                case 90:
                  return [pt + ut + W, N - bt + nt + q, pt + ut + xt + W, N - bt + nt + ft + q];
                case 180:
                  return [pt - nt - ft + W, N - bt + ut + q, pt - nt + W, N - bt + ut + xt + q];
                case 270:
                  return [pt - ut - xt + W, N - bt - nt - ft + q, pt - ut + W, N - bt - nt + q];
                default:
                  throw new Error("Invalid rotation");
              }
            }
            getRectInCurrentCoords(i, c) {
              const [d, T, N, W] = i, q = N - d, nt = W - T;
              switch (this.rotation) {
                case 0:
                  return [d, c - W, q, nt];
                case 90:
                  return [d, c - T, nt, q];
                case 180:
                  return [N, c - T, q, nt];
                case 270:
                  return [N, c - W, nt, q];
                default:
                  throw new Error("Invalid rotation");
              }
            }
            onceAdded() {
            }
            isEmpty() {
              return !1;
            }
            enableEditMode() {
              ct(this, R, !0);
            }
            disableEditMode() {
              ct(this, R, !1);
            }
            isInEditMode() {
              return t(this, R);
            }
            shouldGetKeyboardEvents() {
              return !1;
            }
            needsToBeRebuilt() {
              return this.div && !this.isAttachedToDOM;
            }
            rebuild() {
              var i, c;
              (i = this.div) == null || i.addEventListener("focusin", t(this, _)), (c = this.div) == null || c.addEventListener("focusout", t(this, y));
            }
            serialize(i = !1, c = null) {
              (0, u.unreachable)("An editor must be serializable");
            }
            static deserialize(i, c, d) {
              const T = new this.prototype.constructor({
                parent: c,
                id: c.getNextId(),
                uiManager: d
              });
              T.rotation = i.rotation;
              const [N, W] = T.pageDimensions, [q, nt, ut, pt] = T.getRectInCurrentCoords(i.rect, W);
              return T.x = q / N, T.y = nt / W, T.width = ut / N, T.height = pt / W, T;
            }
            remove() {
              var i;
              this.div.removeEventListener("focusin", t(this, _)), this.div.removeEventListener("focusout", t(this, y)), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), (i = t(this, p)) == null || i.remove(), ct(this, p, null), ct(this, F, null);
            }
            get isResizable() {
              return !1;
            }
            makeResizable() {
              this.isResizable && (Z(this, m, En).call(this), t(this, w).classList.remove("hidden"));
            }
            select() {
              var i;
              this.makeResizable(), (i = this.div) == null || i.classList.add("selectedEditor");
            }
            unselect() {
              var i, c, d;
              (i = t(this, w)) == null || i.classList.add("hidden"), (c = this.div) == null || c.classList.remove("selectedEditor"), (d = this.div) != null && d.contains(document.activeElement) && this._uiManager.currentLayer.div.focus();
            }
            updateParams(i, c) {
            }
            disableEditing() {
              t(this, p) && (t(this, p).hidden = !0);
            }
            enableEditing() {
              t(this, p) && (t(this, p).hidden = !1);
            }
            enterInEditMode() {
            }
            get contentDiv() {
              return this.div;
            }
            get isEditing() {
              return t(this, D);
            }
            set isEditing(i) {
              ct(this, D, i), this.parent && (i ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
            }
            setAspectRatio(i, c) {
              ct(this, k, !0);
              const d = i / c, {
                style: T
              } = this.div;
              T.aspectRatio = d, T.height = "auto";
            }
            static get MIN_SIZE() {
              return 16;
            }
          };
          b = new WeakMap(), P = new WeakMap(), p = new WeakMap(), F = new WeakMap(), M = new WeakMap(), k = new WeakMap(), w = new WeakMap(), _ = new WeakMap(), y = new WeakMap(), S = new WeakMap(), D = new WeakMap(), R = new WeakMap(), A = new WeakMap(), o = new WeakMap(), f = new WeakSet(), Ue = function([i, c], d, T) {
            [d, T] = this.screenToPageTranslation(d, T), this.x += d / i, this.y += T / c, this.fixAndSetPosition();
          }, v = new WeakSet(), We = function() {
            const [i, c] = this.parentDimensions, {
              _borderLineWidth: d
            } = e, T = d / i, N = d / c;
            switch (this.rotation) {
              case 90:
                return [-T, N];
              case 180:
                return [T, N];
              case 270:
                return [T, -N];
              default:
                return [-T, -N];
            }
          }, I = new WeakSet(), He = function(i, c, d) {
            switch (d) {
              case 90:
                return [c, -i];
              case 180:
                return [-i, -c];
              case 270:
                return [-c, i];
              default:
                return [i, c];
            }
          }, U = new WeakSet(), $e = function(i) {
            switch (i) {
              case 90: {
                const [c, d] = this.pageDimensions;
                return [0, -c / d, d / c, 0];
              }
              case 180:
                return [-1, 0, 0, -1];
              case 270: {
                const [c, d] = this.pageDimensions;
                return [0, c / d, -d / c, 0];
              }
              default:
                return [1, 0, 0, 1];
            }
          }, m = new WeakSet(), En = function() {
            if (t(this, w))
              return;
            ct(this, w, document.createElement("div")), t(this, w).classList.add("resizers");
            const i = ["topLeft", "topRight", "bottomRight", "bottomLeft"];
            this._willKeepAspectRatio || i.push("topMiddle", "middleRight", "bottomMiddle", "middleLeft");
            for (const c of i) {
              const d = document.createElement("div");
              t(this, w).append(d), d.classList.add("resizer", c), d.addEventListener("pointerdown", Z(this, Q, Sn).bind(this, c)), d.addEventListener("contextmenu", B.noContextMenu);
            }
            this.div.prepend(t(this, w));
          }, Q = new WeakSet(), Sn = function(i, c) {
            c.preventDefault();
            const {
              isMac: d
            } = u.FeatureTest.platform;
            if (c.button !== 0 || c.ctrlKey && d)
              return;
            const T = Z(this, z, Tn).bind(this, i), N = this._isDraggable;
            this._isDraggable = !1;
            const W = {
              passive: !0,
              capture: !0
            };
            window.addEventListener("pointermove", T, W);
            const q = this.x, nt = this.y, ut = this.width, pt = this.height, bt = this.parent.div.style.cursor, ft = this.div.style.cursor;
            this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(c.target).cursor;
            const xt = () => {
              this._isDraggable = N, window.removeEventListener("pointerup", xt), window.removeEventListener("blur", xt), window.removeEventListener("pointermove", T, W), this.parent.div.style.cursor = bt, this.div.style.cursor = ft;
              const It = this.x, Tt = this.y, Ot = this.width, _t = this.height;
              It === q && Tt === nt && Ot === ut && _t === pt || this.addCommands({
                cmd: () => {
                  this.width = Ot, this.height = _t, this.x = It, this.y = Tt;
                  const [at, ot] = this.parentDimensions;
                  this.setDims(at * Ot, ot * _t), this.fixAndSetPosition();
                },
                undo: () => {
                  this.width = ut, this.height = pt, this.x = q, this.y = nt;
                  const [at, ot] = this.parentDimensions;
                  this.setDims(at * ut, ot * pt), this.fixAndSetPosition();
                },
                mustExec: !0
              });
            };
            window.addEventListener("pointerup", xt), window.addEventListener("blur", xt);
          }, z = new WeakSet(), Tn = function(i, c) {
            const [d, T] = this.parentDimensions, N = this.x, W = this.y, q = this.width, nt = this.height, ut = e.MIN_SIZE / d, pt = e.MIN_SIZE / T, bt = (At) => Math.round(At * 1e4) / 1e4, ft = Z(this, U, $e).call(this, this.rotation), xt = (At, St) => [ft[0] * At + ft[2] * St, ft[1] * At + ft[3] * St], It = Z(this, U, $e).call(this, 360 - this.rotation), Tt = (At, St) => [It[0] * At + It[2] * St, It[1] * At + It[3] * St];
            let Ot, _t, at = !1, ot = !1;
            switch (i) {
              case "topLeft":
                at = !0, Ot = (At, St) => [0, 0], _t = (At, St) => [At, St];
                break;
              case "topMiddle":
                Ot = (At, St) => [At / 2, 0], _t = (At, St) => [At / 2, St];
                break;
              case "topRight":
                at = !0, Ot = (At, St) => [At, 0], _t = (At, St) => [0, St];
                break;
              case "middleRight":
                ot = !0, Ot = (At, St) => [At, St / 2], _t = (At, St) => [0, St / 2];
                break;
              case "bottomRight":
                at = !0, Ot = (At, St) => [At, St], _t = (At, St) => [0, 0];
                break;
              case "bottomMiddle":
                Ot = (At, St) => [At / 2, St], _t = (At, St) => [At / 2, 0];
                break;
              case "bottomLeft":
                at = !0, Ot = (At, St) => [0, St], _t = (At, St) => [At, 0];
                break;
              case "middleLeft":
                ot = !0, Ot = (At, St) => [0, St / 2], _t = (At, St) => [At, St / 2];
                break;
            }
            const mt = Ot(q, nt), wt = _t(q, nt);
            let Ct = xt(...wt);
            const Ut = bt(N + Ct[0]), Vt = bt(W + Ct[1]);
            let Wt = 1, qt = 1, [Gt, Ht] = this.screenToPageTranslation(c.movementX, c.movementY);
            if ([Gt, Ht] = Tt(Gt / d, Ht / T), at) {
              const At = Math.hypot(q, nt);
              Wt = qt = Math.max(Math.min(Math.hypot(wt[0] - mt[0] - Gt, wt[1] - mt[1] - Ht) / At, 1 / q, 1 / nt), ut / q, pt / nt);
            } else
              ot ? Wt = Math.max(ut, Math.min(1, Math.abs(wt[0] - mt[0] - Gt))) / q : qt = Math.max(pt, Math.min(1, Math.abs(wt[1] - mt[1] - Ht))) / nt;
            const zt = bt(q * Wt), gt = bt(nt * qt);
            Ct = xt(..._t(zt, gt));
            const rt = Ut - Ct[0], tt = Vt - Ct[1];
            this.width = zt, this.height = gt, this.x = rt, this.y = tt, this.setDims(d * zt, T * gt), this.fixAndSetPosition();
          }, K = new WeakSet(), Ge = async function() {
            var d;
            const i = t(this, p);
            if (!i)
              return;
            if (!t(this, b) && !t(this, P)) {
              i.classList.remove("done"), (d = t(this, F)) == null || d.remove();
              return;
            }
            e._l10nPromise.get("editor_alt_text_edit_button_label").then((T) => {
              i.setAttribute("aria-label", T);
            });
            let c = t(this, F);
            if (!c) {
              ct(this, F, c = document.createElement("span")), c.className = "tooltip", c.setAttribute("role", "tooltip");
              const T = c.id = `alt-text-tooltip-${this.id}`;
              i.setAttribute("aria-describedby", T);
              const N = 100;
              i.addEventListener("mouseenter", () => {
                ct(this, M, setTimeout(() => {
                  ct(this, M, null), t(this, F).classList.add("show"), this._uiManager._eventBus.dispatch("reporttelemetry", {
                    source: this,
                    details: {
                      type: "editing",
                      subtype: this.editorType,
                      data: {
                        action: "alt_text_tooltip"
                      }
                    }
                  });
                }, N));
              }), i.addEventListener("mouseleave", () => {
                var W;
                clearTimeout(t(this, M)), ct(this, M, null), (W = t(this, F)) == null || W.classList.remove("show");
              });
            }
            i.classList.add("done"), c.innerText = t(this, P) ? await e._l10nPromise.get("editor_alt_text_decorative_tooltip") : t(this, b), c.parentNode || i.append(c);
          }, yt = new WeakSet(), Pn = function(i) {
            if (!this._isDraggable)
              return;
            const c = this._uiManager.isSelected(this);
            this._uiManager.setUpDragSession();
            let d, T;
            c && (d = {
              passive: !0,
              capture: !0
            }, T = (W) => {
              const [q, nt] = this.screenToPageTranslation(W.movementX, W.movementY);
              this._uiManager.dragSelectedEditors(q, nt);
            }, window.addEventListener("pointermove", T, d));
            const N = () => {
              if (window.removeEventListener("pointerup", N), window.removeEventListener("blur", N), c && window.removeEventListener("pointermove", T, d), ct(this, S, !1), !this._uiManager.endDragSession()) {
                const {
                  isMac: W
                } = u.FeatureTest.platform;
                i.ctrlKey && !W || i.shiftKey || i.metaKey && W ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
              }
            };
            window.addEventListener("pointerup", N), window.addEventListener("blur", N);
          }, V(e, I), ne(e, "_borderLineWidth", -1), ne(e, "_colorManager", new n.ColorManager()), ne(e, "_zIndex", 1), ne(e, "SMALL_EDITOR_SIZE", 0);
          let L = e;
          s.AnnotationEditor = L;
          class X extends L {
            constructor(i) {
              super(i), this.annotationElementId = i.annotationElementId, this.deleted = !0;
            }
            serialize() {
              return {
                id: this.annotationElementId,
                deleted: !0,
                pageIndex: this.pageIndex
              };
            }
          }
        },
        /* 5 */
        /***/
        (C, s, O) => {
          var k, w, _, y, S, Ve, A, o, f, j, v, wn, g, U, G, m, Y, Q, it, z, lt, K, ht, yt, E, e, l, i, c, d, T, N, W, q, nt, ut, pt, bt, ft, xt, It, Tt, Ot, _t, at, ot, mt, Cn, Ct, qe, Vt, ze, qt, we, Ht, Xe, gt, Ye, tt, ae, St, ye, te, xn, Pt, Rn, Rt, Ke, Bt, be, Et, Je;
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.KeyboardManager = s.CommandManager = s.ColorManager = s.AnnotationEditorUIManager = void 0, s.bindEvents = B, s.opacityToHex = L;
          var n = O(1), u = O(6);
          function B(H, a, x) {
            for (const $ of x)
              a.addEventListener($, H[$].bind(H));
          }
          function L(H) {
            return Math.round(Math.min(255, Math.max(1, 255 * H))).toString(16).padStart(2, "0");
          }
          class X {
            constructor() {
              V(this, k, 0);
            }
            getId() {
              return `${n.AnnotationEditorPrefix}${me(this, k)._++}`;
            }
          }
          k = new WeakMap();
          const R = class R {
            constructor() {
              V(this, S);
              V(this, w, (0, n.getUuid)());
              V(this, _, 0);
              V(this, y, null);
            }
            static get _isSVGFittingCanvas() {
              const a = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', $ = new OffscreenCanvas(1, 3).getContext("2d"), J = new Image();
              J.src = a;
              const et = J.decode().then(() => ($.drawImage(J, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array($.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
              return (0, n.shadow)(this, "_isSVGFittingCanvas", et);
            }
            async getFromFile(a) {
              const {
                lastModified: x,
                name: $,
                size: J,
                type: et
              } = a;
              return Z(this, S, Ve).call(this, `${x}_${$}_${J}_${et}`, a);
            }
            async getFromUrl(a) {
              return Z(this, S, Ve).call(this, a, a);
            }
            async getFromId(a) {
              t(this, y) || ct(this, y, /* @__PURE__ */ new Map());
              const x = t(this, y).get(a);
              return x ? x.bitmap ? (x.refCounter += 1, x) : x.file ? this.getFromFile(x.file) : this.getFromUrl(x.url) : null;
            }
            getSvgUrl(a) {
              const x = t(this, y).get(a);
              return x != null && x.isSvg ? x.svgUrl : null;
            }
            deleteId(a) {
              t(this, y) || ct(this, y, /* @__PURE__ */ new Map());
              const x = t(this, y).get(a);
              x && (x.refCounter -= 1, x.refCounter === 0 && (x.bitmap = null));
            }
            isValidId(a) {
              return a.startsWith(`image_${t(this, w)}_`);
            }
          };
          w = new WeakMap(), _ = new WeakMap(), y = new WeakMap(), S = new WeakSet(), Ve = async function(a, x) {
            t(this, y) || ct(this, y, /* @__PURE__ */ new Map());
            let $ = t(this, y).get(a);
            if ($ === null)
              return null;
            if ($ != null && $.bitmap)
              return $.refCounter += 1, $;
            try {
              $ || ($ = {
                bitmap: null,
                id: `image_${t(this, w)}_${me(this, _)._++}`,
                refCounter: 0,
                isSvg: !1
              });
              let J;
              if (typeof x == "string") {
                $.url = x;
                const et = await fetch(x);
                if (!et.ok)
                  throw new Error(et.statusText);
                J = await et.blob();
              } else
                J = $.file = x;
              if (J.type === "image/svg+xml") {
                const et = R._isSVGFittingCanvas, dt = new FileReader(), vt = new Image(), Mt = new Promise((kt, Xt) => {
                  vt.onload = () => {
                    $.bitmap = vt, $.isSvg = !0, kt();
                  }, dt.onload = async () => {
                    const Ft = $.svgUrl = dt.result;
                    vt.src = await et ? `${Ft}#svgView(preserveAspectRatio(none))` : Ft;
                  }, vt.onerror = dt.onerror = Xt;
                });
                dt.readAsDataURL(J), await Mt;
              } else
                $.bitmap = await createImageBitmap(J);
              $.refCounter = 1;
            } catch (J) {
              console.error(J), $ = null;
            }
            return t(this, y).set(a, $), $ && t(this, y).set($.id, $), $;
          };
          let b = R;
          class P {
            constructor(a = 128) {
              V(this, A, []);
              V(this, o, !1);
              V(this, f, void 0);
              V(this, j, -1);
              ct(this, f, a);
            }
            add({
              cmd: a,
              undo: x,
              mustExec: $,
              type: J = NaN,
              overwriteIfSameType: et = !1,
              keepUndo: dt = !1
            }) {
              if ($ && a(), t(this, o))
                return;
              const vt = {
                cmd: a,
                undo: x,
                type: J
              };
              if (t(this, j) === -1) {
                t(this, A).length > 0 && (t(this, A).length = 0), ct(this, j, 0), t(this, A).push(vt);
                return;
              }
              if (et && t(this, A)[t(this, j)].type === J) {
                dt && (vt.undo = t(this, A)[t(this, j)].undo), t(this, A)[t(this, j)] = vt;
                return;
              }
              const Mt = t(this, j) + 1;
              Mt === t(this, f) ? t(this, A).splice(0, 1) : (ct(this, j, Mt), Mt < t(this, A).length && t(this, A).splice(Mt)), t(this, A).push(vt);
            }
            undo() {
              t(this, j) !== -1 && (ct(this, o, !0), t(this, A)[t(this, j)].undo(), ct(this, o, !1), ct(this, j, t(this, j) - 1));
            }
            redo() {
              t(this, j) < t(this, A).length - 1 && (ct(this, j, t(this, j) + 1), ct(this, o, !0), t(this, A)[t(this, j)].cmd(), ct(this, o, !1));
            }
            hasSomethingToUndo() {
              return t(this, j) !== -1;
            }
            hasSomethingToRedo() {
              return t(this, j) < t(this, A).length - 1;
            }
            destroy() {
              ct(this, A, null);
            }
          }
          A = new WeakMap(), o = new WeakMap(), f = new WeakMap(), j = new WeakMap(), s.CommandManager = P;
          class p {
            constructor(a) {
              V(this, v);
              this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
              const {
                isMac: x
              } = n.FeatureTest.platform;
              for (const [$, J, et = {}] of a)
                for (const dt of $) {
                  const vt = dt.startsWith("mac+");
                  x && vt ? (this.callbacks.set(dt.slice(4), {
                    callback: J,
                    options: et
                  }), this.allKeys.add(dt.split("+").at(-1))) : !x && !vt && (this.callbacks.set(dt, {
                    callback: J,
                    options: et
                  }), this.allKeys.add(dt.split("+").at(-1)));
                }
            }
            exec(a, x) {
              if (!this.allKeys.has(x.key))
                return;
              const $ = this.callbacks.get(Z(this, v, wn).call(this, x));
              if (!$)
                return;
              const {
                callback: J,
                options: {
                  bubbles: et = !1,
                  args: dt = [],
                  checker: vt = null
                }
              } = $;
              vt && !vt(a, x) || (J.bind(a, ...dt)(), et || (x.stopPropagation(), x.preventDefault()));
            }
          }
          v = new WeakSet(), wn = function(a) {
            a.altKey && this.buffer.push("alt"), a.ctrlKey && this.buffer.push("ctrl"), a.metaKey && this.buffer.push("meta"), a.shiftKey && this.buffer.push("shift"), this.buffer.push(a.key);
            const x = this.buffer.join("+");
            return this.buffer.length = 0, x;
          }, s.KeyboardManager = p;
          const I = class I {
            get _colors() {
              const a = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
              return (0, u.getColorValues)(a), (0, n.shadow)(this, "_colors", a);
            }
            convert(a) {
              const x = (0, u.getRGB)(a);
              if (!window.matchMedia("(forced-colors: active)").matches)
                return x;
              for (const [$, J] of this._colors)
                if (J.every((et, dt) => et === x[dt]))
                  return I._colorsMapping.get($);
              return x;
            }
            getHexCode(a) {
              const x = this._colors.get(a);
              return x ? n.Util.makeHexColor(...x) : a;
            }
          };
          ne(I, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
          let F = I;
          s.ColorManager = F;
          const Lt = class Lt {
            constructor(a, x, $, J, et, dt) {
              V(this, mt);
              V(this, Ct);
              V(this, Vt);
              V(this, qt);
              V(this, Ht);
              V(this, gt);
              V(this, tt);
              V(this, St);
              V(this, te);
              V(this, Pt);
              V(this, Rt);
              V(this, Bt);
              V(this, Et);
              V(this, g, null);
              V(this, U, /* @__PURE__ */ new Map());
              V(this, G, /* @__PURE__ */ new Map());
              V(this, m, null);
              V(this, Y, null);
              V(this, Q, new P());
              V(this, it, 0);
              V(this, z, /* @__PURE__ */ new Set());
              V(this, lt, null);
              V(this, K, null);
              V(this, ht, /* @__PURE__ */ new Set());
              V(this, yt, null);
              V(this, E, new X());
              V(this, e, !1);
              V(this, l, !1);
              V(this, i, null);
              V(this, c, n.AnnotationEditorType.NONE);
              V(this, d, /* @__PURE__ */ new Set());
              V(this, T, null);
              V(this, N, this.blur.bind(this));
              V(this, W, this.focus.bind(this));
              V(this, q, this.copy.bind(this));
              V(this, nt, this.cut.bind(this));
              V(this, ut, this.paste.bind(this));
              V(this, pt, this.keydown.bind(this));
              V(this, bt, this.onEditingAction.bind(this));
              V(this, ft, this.onPageChanging.bind(this));
              V(this, xt, this.onScaleChanging.bind(this));
              V(this, It, this.onRotationChanging.bind(this));
              V(this, Tt, {
                isEditing: !1,
                isEmpty: !0,
                hasSomethingToUndo: !1,
                hasSomethingToRedo: !1,
                hasSelectedEditor: !1
              });
              V(this, Ot, [0, 0]);
              V(this, _t, null);
              V(this, at, null);
              V(this, ot, null);
              ct(this, at, a), ct(this, ot, x), ct(this, m, $), this._eventBus = J, this._eventBus._on("editingaction", t(this, bt)), this._eventBus._on("pagechanging", t(this, ft)), this._eventBus._on("scalechanging", t(this, xt)), this._eventBus._on("rotationchanging", t(this, It)), ct(this, Y, et.annotationStorage), ct(this, yt, et.filterFactory), ct(this, T, dt), this.viewParameters = {
                realScale: u.PixelsPerInch.PDF_TO_CSS_UNITS,
                rotation: 0
              };
            }
            static get _keyboardManager() {
              const a = Lt.prototype, x = (et) => {
                const {
                  activeElement: dt
                } = document;
                return dt && t(et, at).contains(dt) && et.hasSomethingToControl();
              }, $ = this.TRANSLATE_SMALL, J = this.TRANSLATE_BIG;
              return (0, n.shadow)(this, "_keyboardManager", new p([[["ctrl+a", "mac+meta+a"], a.selectAll], [["ctrl+z", "mac+meta+z"], a.undo], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], a.redo], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], a.delete], [["Escape", "mac+Escape"], a.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], a.translateSelectedEditors, {
                args: [-$, 0],
                checker: x
              }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], a.translateSelectedEditors, {
                args: [-J, 0],
                checker: x
              }], [["ArrowRight", "mac+ArrowRight"], a.translateSelectedEditors, {
                args: [$, 0],
                checker: x
              }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], a.translateSelectedEditors, {
                args: [J, 0],
                checker: x
              }], [["ArrowUp", "mac+ArrowUp"], a.translateSelectedEditors, {
                args: [0, -$],
                checker: x
              }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], a.translateSelectedEditors, {
                args: [0, -J],
                checker: x
              }], [["ArrowDown", "mac+ArrowDown"], a.translateSelectedEditors, {
                args: [0, $],
                checker: x
              }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], a.translateSelectedEditors, {
                args: [0, J],
                checker: x
              }]]));
            }
            destroy() {
              Z(this, qt, we).call(this), Z(this, Ct, qe).call(this), this._eventBus._off("editingaction", t(this, bt)), this._eventBus._off("pagechanging", t(this, ft)), this._eventBus._off("scalechanging", t(this, xt)), this._eventBus._off("rotationchanging", t(this, It));
              for (const a of t(this, G).values())
                a.destroy();
              t(this, G).clear(), t(this, U).clear(), t(this, ht).clear(), ct(this, g, null), t(this, d).clear(), t(this, Q).destroy(), t(this, m).destroy();
            }
            get hcmFilter() {
              return (0, n.shadow)(this, "hcmFilter", t(this, T) ? t(this, yt).addHCMFilter(t(this, T).foreground, t(this, T).background) : "none");
            }
            get direction() {
              return (0, n.shadow)(this, "direction", getComputedStyle(t(this, at)).direction);
            }
            editAltText(a) {
              var x;
              (x = t(this, m)) == null || x.editAltText(this, a);
            }
            onPageChanging({
              pageNumber: a
            }) {
              ct(this, it, a - 1);
            }
            focusMainContainer() {
              t(this, at).focus();
            }
            findParent(a, x) {
              for (const $ of t(this, G).values()) {
                const {
                  x: J,
                  y: et,
                  width: dt,
                  height: vt
                } = $.div.getBoundingClientRect();
                if (a >= J && a <= J + dt && x >= et && x <= et + vt)
                  return $;
              }
              return null;
            }
            disableUserSelect(a = !1) {
              t(this, ot).classList.toggle("noUserSelect", a);
            }
            addShouldRescale(a) {
              t(this, ht).add(a);
            }
            removeShouldRescale(a) {
              t(this, ht).delete(a);
            }
            onScaleChanging({
              scale: a
            }) {
              this.commitOrRemove(), this.viewParameters.realScale = a * u.PixelsPerInch.PDF_TO_CSS_UNITS;
              for (const x of t(this, ht))
                x.onScaleChanging();
            }
            onRotationChanging({
              pagesRotation: a
            }) {
              this.commitOrRemove(), this.viewParameters.rotation = a;
            }
            addToAnnotationStorage(a) {
              !a.isEmpty() && t(this, Y) && !t(this, Y).has(a.id) && t(this, Y).setValue(a.id, a);
            }
            blur() {
              if (!this.hasSelection)
                return;
              const {
                activeElement: a
              } = document;
              for (const x of t(this, d))
                if (x.div.contains(a)) {
                  ct(this, i, [x, a]), x._focusEventsAllowed = !1;
                  break;
                }
            }
            focus() {
              if (!t(this, i))
                return;
              const [a, x] = t(this, i);
              ct(this, i, null), x.addEventListener("focusin", () => {
                a._focusEventsAllowed = !0;
              }, {
                once: !0
              }), x.focus();
            }
            addEditListeners() {
              Z(this, Vt, ze).call(this), Z(this, Ht, Xe).call(this);
            }
            removeEditListeners() {
              Z(this, qt, we).call(this), Z(this, gt, Ye).call(this);
            }
            copy(a) {
              var $;
              if (a.preventDefault(), ($ = t(this, g)) == null || $.commitOrRemove(), !this.hasSelection)
                return;
              const x = [];
              for (const J of t(this, d)) {
                const et = J.serialize(!0);
                et && x.push(et);
              }
              x.length !== 0 && a.clipboardData.setData("application/pdfjs", JSON.stringify(x));
            }
            cut(a) {
              this.copy(a), this.delete();
            }
            paste(a) {
              a.preventDefault();
              const {
                clipboardData: x
              } = a;
              for (const et of x.items)
                for (const dt of t(this, K))
                  if (dt.isHandlingMimeForPasting(et.type)) {
                    dt.paste(et, this.currentLayer);
                    return;
                  }
              let $ = x.getData("application/pdfjs");
              if (!$)
                return;
              try {
                $ = JSON.parse($);
              } catch (et) {
                (0, n.warn)(`paste: "${et.message}".`);
                return;
              }
              if (!Array.isArray($))
                return;
              this.unselectAll();
              const J = this.currentLayer;
              try {
                const et = [];
                for (const Mt of $) {
                  const kt = J.deserialize(Mt);
                  if (!kt)
                    return;
                  et.push(kt);
                }
                const dt = () => {
                  for (const Mt of et)
                    Z(this, Rt, Ke).call(this, Mt);
                  Z(this, Et, Je).call(this, et);
                }, vt = () => {
                  for (const Mt of et)
                    Mt.remove();
                };
                this.addCommands({
                  cmd: dt,
                  undo: vt,
                  mustExec: !0
                });
              } catch (et) {
                (0, n.warn)(`paste: "${et.message}".`);
              }
            }
            keydown(a) {
              var x;
              (x = this.getActive()) != null && x.shouldGetKeyboardEvents() || Lt._keyboardManager.exec(this, a);
            }
            onEditingAction(a) {
              ["undo", "redo", "delete", "selectAll"].includes(a.name) && this[a.name]();
            }
            setEditingState(a) {
              a ? (Z(this, mt, Cn).call(this), Z(this, Vt, ze).call(this), Z(this, Ht, Xe).call(this), Z(this, tt, ae).call(this, {
                isEditing: t(this, c) !== n.AnnotationEditorType.NONE,
                isEmpty: Z(this, Bt, be).call(this),
                hasSomethingToUndo: t(this, Q).hasSomethingToUndo(),
                hasSomethingToRedo: t(this, Q).hasSomethingToRedo(),
                hasSelectedEditor: !1
              })) : (Z(this, Ct, qe).call(this), Z(this, qt, we).call(this), Z(this, gt, Ye).call(this), Z(this, tt, ae).call(this, {
                isEditing: !1
              }), this.disableUserSelect(!1));
            }
            registerEditorTypes(a) {
              if (!t(this, K)) {
                ct(this, K, a);
                for (const x of t(this, K))
                  Z(this, St, ye).call(this, x.defaultPropertiesToUpdate);
              }
            }
            getId() {
              return t(this, E).getId();
            }
            get currentLayer() {
              return t(this, G).get(t(this, it));
            }
            getLayer(a) {
              return t(this, G).get(a);
            }
            get currentPageIndex() {
              return t(this, it);
            }
            addLayer(a) {
              t(this, G).set(a.pageIndex, a), t(this, e) ? a.enable() : a.disable();
            }
            removeLayer(a) {
              t(this, G).delete(a.pageIndex);
            }
            updateMode(a, x = null) {
              if (t(this, c) !== a) {
                if (ct(this, c, a), a === n.AnnotationEditorType.NONE) {
                  this.setEditingState(!1), Z(this, Pt, Rn).call(this);
                  return;
                }
                this.setEditingState(!0), Z(this, te, xn).call(this), this.unselectAll();
                for (const $ of t(this, G).values())
                  $.updateMode(a);
                if (x) {
                  for (const $ of t(this, U).values())
                    if ($.annotationElementId === x) {
                      this.setSelected($), $.enterInEditMode();
                      break;
                    }
                }
              }
            }
            updateToolbar(a) {
              a !== t(this, c) && this._eventBus.dispatch("switchannotationeditormode", {
                source: this,
                mode: a
              });
            }
            updateParams(a, x) {
              if (t(this, K)) {
                if (a === n.AnnotationEditorParamsType.CREATE) {
                  this.currentLayer.addNewEditor(a);
                  return;
                }
                for (const $ of t(this, d))
                  $.updateParams(a, x);
                for (const $ of t(this, K))
                  $.updateDefaultParams(a, x);
              }
            }
            enableWaiting(a = !1) {
              if (t(this, l) !== a) {
                ct(this, l, a);
                for (const x of t(this, G).values())
                  a ? x.disableClick() : x.enableClick(), x.div.classList.toggle("waiting", a);
              }
            }
            getEditors(a) {
              const x = [];
              for (const $ of t(this, U).values())
                $.pageIndex === a && x.push($);
              return x;
            }
            getEditor(a) {
              return t(this, U).get(a);
            }
            addEditor(a) {
              t(this, U).set(a.id, a);
            }
            removeEditor(a) {
              var x;
              t(this, U).delete(a.id), this.unselect(a), (!a.annotationElementId || !t(this, z).has(a.annotationElementId)) && ((x = t(this, Y)) == null || x.remove(a.id));
            }
            addDeletedAnnotationElement(a) {
              t(this, z).add(a.annotationElementId), a.deleted = !0;
            }
            isDeletedAnnotationElement(a) {
              return t(this, z).has(a);
            }
            removeDeletedAnnotationElement(a) {
              t(this, z).delete(a.annotationElementId), a.deleted = !1;
            }
            setActiveEditor(a) {
              t(this, g) !== a && (ct(this, g, a), a && Z(this, St, ye).call(this, a.propertiesToUpdate));
            }
            toggleSelected(a) {
              if (t(this, d).has(a)) {
                t(this, d).delete(a), a.unselect(), Z(this, tt, ae).call(this, {
                  hasSelectedEditor: this.hasSelection
                });
                return;
              }
              t(this, d).add(a), a.select(), Z(this, St, ye).call(this, a.propertiesToUpdate), Z(this, tt, ae).call(this, {
                hasSelectedEditor: !0
              });
            }
            setSelected(a) {
              for (const x of t(this, d))
                x !== a && x.unselect();
              t(this, d).clear(), t(this, d).add(a), a.select(), Z(this, St, ye).call(this, a.propertiesToUpdate), Z(this, tt, ae).call(this, {
                hasSelectedEditor: !0
              });
            }
            isSelected(a) {
              return t(this, d).has(a);
            }
            unselect(a) {
              a.unselect(), t(this, d).delete(a), Z(this, tt, ae).call(this, {
                hasSelectedEditor: this.hasSelection
              });
            }
            get hasSelection() {
              return t(this, d).size !== 0;
            }
            undo() {
              t(this, Q).undo(), Z(this, tt, ae).call(this, {
                hasSomethingToUndo: t(this, Q).hasSomethingToUndo(),
                hasSomethingToRedo: !0,
                isEmpty: Z(this, Bt, be).call(this)
              });
            }
            redo() {
              t(this, Q).redo(), Z(this, tt, ae).call(this, {
                hasSomethingToUndo: !0,
                hasSomethingToRedo: t(this, Q).hasSomethingToRedo(),
                isEmpty: Z(this, Bt, be).call(this)
              });
            }
            addCommands(a) {
              t(this, Q).add(a), Z(this, tt, ae).call(this, {
                hasSomethingToUndo: !0,
                hasSomethingToRedo: !1,
                isEmpty: Z(this, Bt, be).call(this)
              });
            }
            delete() {
              if (this.commitOrRemove(), !this.hasSelection)
                return;
              const a = [...t(this, d)], x = () => {
                for (const J of a)
                  J.remove();
              }, $ = () => {
                for (const J of a)
                  Z(this, Rt, Ke).call(this, J);
              };
              this.addCommands({
                cmd: x,
                undo: $,
                mustExec: !0
              });
            }
            commitOrRemove() {
              var a;
              (a = t(this, g)) == null || a.commitOrRemove();
            }
            hasSomethingToControl() {
              return t(this, g) || this.hasSelection;
            }
            selectAll() {
              for (const a of t(this, d))
                a.commit();
              Z(this, Et, Je).call(this, t(this, U).values());
            }
            unselectAll() {
              if (t(this, g)) {
                t(this, g).commitOrRemove();
                return;
              }
              if (this.hasSelection) {
                for (const a of t(this, d))
                  a.unselect();
                t(this, d).clear(), Z(this, tt, ae).call(this, {
                  hasSelectedEditor: !1
                });
              }
            }
            translateSelectedEditors(a, x, $ = !1) {
              if ($ || this.commitOrRemove(), !this.hasSelection)
                return;
              t(this, Ot)[0] += a, t(this, Ot)[1] += x;
              const [J, et] = t(this, Ot), dt = [...t(this, d)], vt = 1e3;
              t(this, _t) && clearTimeout(t(this, _t)), ct(this, _t, setTimeout(() => {
                ct(this, _t, null), t(this, Ot)[0] = t(this, Ot)[1] = 0, this.addCommands({
                  cmd: () => {
                    for (const Mt of dt)
                      t(this, U).has(Mt.id) && Mt.translateInPage(J, et);
                  },
                  undo: () => {
                    for (const Mt of dt)
                      t(this, U).has(Mt.id) && Mt.translateInPage(-J, -et);
                  },
                  mustExec: !1
                });
              }, vt));
              for (const Mt of dt)
                Mt.translateInPage(a, x);
            }
            setUpDragSession() {
              if (this.hasSelection) {
                this.disableUserSelect(!0), ct(this, lt, /* @__PURE__ */ new Map());
                for (const a of t(this, d))
                  t(this, lt).set(a, {
                    savedX: a.x,
                    savedY: a.y,
                    savedPageIndex: a.pageIndex,
                    newX: 0,
                    newY: 0,
                    newPageIndex: -1
                  });
              }
            }
            endDragSession() {
              if (!t(this, lt))
                return !1;
              this.disableUserSelect(!1);
              const a = t(this, lt);
              ct(this, lt, null);
              let x = !1;
              for (const [{
                x: J,
                y: et,
                pageIndex: dt
              }, vt] of a)
                vt.newX = J, vt.newY = et, vt.newPageIndex = dt, x || (x = J !== vt.savedX || et !== vt.savedY || dt !== vt.savedPageIndex);
              if (!x)
                return !1;
              const $ = (J, et, dt, vt) => {
                if (t(this, U).has(J.id)) {
                  const Mt = t(this, G).get(vt);
                  Mt ? J._setParentAndPosition(Mt, et, dt) : (J.pageIndex = vt, J.x = et, J.y = dt);
                }
              };
              return this.addCommands({
                cmd: () => {
                  for (const [J, {
                    newX: et,
                    newY: dt,
                    newPageIndex: vt
                  }] of a)
                    $(J, et, dt, vt);
                },
                undo: () => {
                  for (const [J, {
                    savedX: et,
                    savedY: dt,
                    savedPageIndex: vt
                  }] of a)
                    $(J, et, dt, vt);
                },
                mustExec: !0
              }), !0;
            }
            dragSelectedEditors(a, x) {
              if (t(this, lt))
                for (const $ of t(this, lt).keys())
                  $.drag(a, x);
            }
            rebuild(a) {
              if (a.parent === null) {
                const x = this.getLayer(a.pageIndex);
                x ? (x.changeParent(a), x.addOrRebuild(a)) : (this.addEditor(a), this.addToAnnotationStorage(a), a.rebuild());
              } else
                a.parent.addOrRebuild(a);
            }
            isActive(a) {
              return t(this, g) === a;
            }
            getActive() {
              return t(this, g);
            }
            getMode() {
              return t(this, c);
            }
            get imageManager() {
              return (0, n.shadow)(this, "imageManager", new b());
            }
          };
          g = new WeakMap(), U = new WeakMap(), G = new WeakMap(), m = new WeakMap(), Y = new WeakMap(), Q = new WeakMap(), it = new WeakMap(), z = new WeakMap(), lt = new WeakMap(), K = new WeakMap(), ht = new WeakMap(), yt = new WeakMap(), E = new WeakMap(), e = new WeakMap(), l = new WeakMap(), i = new WeakMap(), c = new WeakMap(), d = new WeakMap(), T = new WeakMap(), N = new WeakMap(), W = new WeakMap(), q = new WeakMap(), nt = new WeakMap(), ut = new WeakMap(), pt = new WeakMap(), bt = new WeakMap(), ft = new WeakMap(), xt = new WeakMap(), It = new WeakMap(), Tt = new WeakMap(), Ot = new WeakMap(), _t = new WeakMap(), at = new WeakMap(), ot = new WeakMap(), mt = new WeakSet(), Cn = function() {
            window.addEventListener("focus", t(this, W)), window.addEventListener("blur", t(this, N));
          }, Ct = new WeakSet(), qe = function() {
            window.removeEventListener("focus", t(this, W)), window.removeEventListener("blur", t(this, N));
          }, Vt = new WeakSet(), ze = function() {
            window.addEventListener("keydown", t(this, pt), {
              capture: !0
            });
          }, qt = new WeakSet(), we = function() {
            window.removeEventListener("keydown", t(this, pt), {
              capture: !0
            });
          }, Ht = new WeakSet(), Xe = function() {
            document.addEventListener("copy", t(this, q)), document.addEventListener("cut", t(this, nt)), document.addEventListener("paste", t(this, ut));
          }, gt = new WeakSet(), Ye = function() {
            document.removeEventListener("copy", t(this, q)), document.removeEventListener("cut", t(this, nt)), document.removeEventListener("paste", t(this, ut));
          }, tt = new WeakSet(), ae = function(a) {
            Object.entries(a).some(([$, J]) => t(this, Tt)[$] !== J) && this._eventBus.dispatch("annotationeditorstateschanged", {
              source: this,
              details: Object.assign(t(this, Tt), a)
            });
          }, St = new WeakSet(), ye = function(a) {
            this._eventBus.dispatch("annotationeditorparamschanged", {
              source: this,
              details: a
            });
          }, te = new WeakSet(), xn = function() {
            if (!t(this, e)) {
              ct(this, e, !0);
              for (const a of t(this, G).values())
                a.enable();
            }
          }, Pt = new WeakSet(), Rn = function() {
            if (this.unselectAll(), t(this, e)) {
              ct(this, e, !1);
              for (const a of t(this, G).values())
                a.disable();
            }
          }, Rt = new WeakSet(), Ke = function(a) {
            const x = t(this, G).get(a.pageIndex);
            x ? x.addOrRebuild(a) : this.addEditor(a);
          }, Bt = new WeakSet(), be = function() {
            if (t(this, U).size === 0)
              return !0;
            if (t(this, U).size === 1)
              for (const a of t(this, U).values())
                return a.isEmpty();
            return !1;
          }, Et = new WeakSet(), Je = function(a) {
            t(this, d).clear();
            for (const x of a)
              x.isEmpty() || (t(this, d).add(x), x.select());
            Z(this, tt, ae).call(this, {
              hasSelectedEditor: !0
            });
          }, ne(Lt, "TRANSLATE_SMALL", 1), ne(Lt, "TRANSLATE_BIG", 10);
          let M = Lt;
          s.AnnotationEditorUIManager = M;
        },
        /* 6 */
        /***/
        (C, s, O) => {
          var it, z, lt, K, ht, yt, E, e, l, i, c, d, de, N, fe, q, Qe, ut, Ce, bt, xe, xt, _e, Tt, ve;
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.StatTimer = s.RenderingCancelledException = s.PixelsPerInch = s.PageViewport = s.PDFDateString = s.DOMStandardFontDataFactory = s.DOMSVGFactory = s.DOMFilterFactory = s.DOMCanvasFactory = s.DOMCMapReaderFactory = void 0, s.deprecated = j, s.getColorValues = U, s.getCurrentTransform = G, s.getCurrentTransformInverse = m, s.getFilenameFromUrl = S, s.getPdfFilenameFromUrl = D, s.getRGB = g, s.getXfaPageViewport = I, s.isDataScheme = _, s.isPdfFile = y, s.isValidFetchUrl = A, s.loadScript = f, s.noContextMenu = o, s.setLayerDimensions = Y;
          var n = O(7), u = O(1);
          const B = "http://www.w3.org/2000/svg", Q = class Q {
          };
          ne(Q, "CSS", 96), ne(Q, "PDF", 72), ne(Q, "PDF_TO_CSS_UNITS", Q.CSS / Q.PDF);
          let L = Q;
          s.PixelsPerInch = L;
          class X extends n.BaseFilterFactory {
            constructor({
              docId: ot,
              ownerDocument: mt = globalThis.document
            } = {}) {
              super();
              V(this, d);
              V(this, N);
              V(this, q);
              V(this, ut);
              V(this, bt);
              V(this, xt);
              V(this, Tt);
              V(this, it, void 0);
              V(this, z, void 0);
              V(this, lt, void 0);
              V(this, K, void 0);
              V(this, ht, void 0);
              V(this, yt, void 0);
              V(this, E, void 0);
              V(this, e, void 0);
              V(this, l, void 0);
              V(this, i, void 0);
              V(this, c, 0);
              ct(this, lt, ot), ct(this, K, mt);
            }
            addFilter(ot) {
              if (!ot)
                return "none";
              let mt = t(this, d, de).get(ot);
              if (mt)
                return mt;
              let wt, Ct, Ut, Vt;
              if (ot.length === 1) {
                const Ht = ot[0], zt = new Array(256);
                for (let gt = 0; gt < 256; gt++)
                  zt[gt] = Ht[gt] / 255;
                Vt = wt = Ct = Ut = zt.join(",");
              } else {
                const [Ht, zt, gt] = ot, rt = new Array(256), tt = new Array(256), At = new Array(256);
                for (let St = 0; St < 256; St++)
                  rt[St] = Ht[St] / 255, tt[St] = zt[St] / 255, At[St] = gt[St] / 255;
                wt = rt.join(","), Ct = tt.join(","), Ut = At.join(","), Vt = `${wt}${Ct}${Ut}`;
              }
              if (mt = t(this, d, de).get(Vt), mt)
                return t(this, d, de).set(ot, mt), mt;
              const Wt = `g_${t(this, lt)}_transfer_map_${me(this, c)._++}`, qt = `url(#${Wt})`;
              t(this, d, de).set(ot, qt), t(this, d, de).set(Vt, qt);
              const Gt = Z(this, ut, Ce).call(this, Wt);
              return Z(this, xt, _e).call(this, wt, Ct, Ut, Gt), qt;
            }
            addHCMFilter(ot, mt) {
              var zt;
              const wt = `${ot}-${mt}`;
              if (t(this, yt) === wt)
                return t(this, E);
              if (ct(this, yt, wt), ct(this, E, "none"), (zt = t(this, ht)) == null || zt.remove(), !ot || !mt)
                return t(this, E);
              const Ct = Z(this, Tt, ve).call(this, ot);
              ot = u.Util.makeHexColor(...Ct);
              const Ut = Z(this, Tt, ve).call(this, mt);
              if (mt = u.Util.makeHexColor(...Ut), t(this, N, fe).style.color = "", ot === "#000000" && mt === "#ffffff" || ot === mt)
                return t(this, E);
              const Vt = new Array(256);
              for (let gt = 0; gt <= 255; gt++) {
                const rt = gt / 255;
                Vt[gt] = rt <= 0.03928 ? rt / 12.92 : ((rt + 0.055) / 1.055) ** 2.4;
              }
              const Wt = Vt.join(","), qt = `g_${t(this, lt)}_hcm_filter`, Gt = ct(this, e, Z(this, ut, Ce).call(this, qt));
              Z(this, xt, _e).call(this, Wt, Wt, Wt, Gt), Z(this, q, Qe).call(this, Gt);
              const Ht = (gt, rt) => {
                const tt = Ct[gt] / 255, At = Ut[gt] / 255, St = new Array(rt + 1);
                for (let ee = 0; ee <= rt; ee++)
                  St[ee] = tt + ee / rt * (At - tt);
                return St.join(",");
              };
              return Z(this, xt, _e).call(this, Ht(0, 5), Ht(1, 5), Ht(2, 5), Gt), ct(this, E, `url(#${qt})`), t(this, E);
            }
            addHighlightHCMFilter(ot, mt, wt, Ct) {
              var At;
              const Ut = `${ot}-${mt}-${wt}-${Ct}`;
              if (t(this, l) === Ut)
                return t(this, i);
              if (ct(this, l, Ut), ct(this, i, "none"), (At = t(this, e)) == null || At.remove(), !ot || !mt)
                return t(this, i);
              const [Vt, Wt] = [ot, mt].map(Z(this, Tt, ve).bind(this));
              let qt = Math.round(0.2126 * Vt[0] + 0.7152 * Vt[1] + 0.0722 * Vt[2]), Gt = Math.round(0.2126 * Wt[0] + 0.7152 * Wt[1] + 0.0722 * Wt[2]), [Ht, zt] = [wt, Ct].map(Z(this, Tt, ve).bind(this));
              Gt < qt && ([qt, Gt, Ht, zt] = [Gt, qt, zt, Ht]), t(this, N, fe).style.color = "";
              const gt = (St, ee, te) => {
                const st = new Array(256), Pt = (Gt - qt) / te, Nt = St / 255, Rt = (ee - St) / (255 * te);
                let jt = 0;
                for (let Bt = 0; Bt <= te; Bt++) {
                  const Qt = Math.round(qt + Bt * Pt), Et = Nt + Bt * Rt;
                  for (let Kt = jt; Kt <= Qt; Kt++)
                    st[Kt] = Et;
                  jt = Qt + 1;
                }
                for (let Bt = jt; Bt < 256; Bt++)
                  st[Bt] = st[jt - 1];
                return st.join(",");
              }, rt = `g_${t(this, lt)}_hcm_highlight_filter`, tt = ct(this, e, Z(this, ut, Ce).call(this, rt));
              return Z(this, q, Qe).call(this, tt), Z(this, xt, _e).call(this, gt(Ht[0], zt[0], 5), gt(Ht[1], zt[1], 5), gt(Ht[2], zt[2], 5), tt), ct(this, i, `url(#${rt})`), t(this, i);
            }
            destroy(ot = !1) {
              ot && (t(this, E) || t(this, i)) || (t(this, z) && (t(this, z).parentNode.parentNode.remove(), ct(this, z, null)), t(this, it) && (t(this, it).clear(), ct(this, it, null)), ct(this, c, 0));
            }
          }
          it = new WeakMap(), z = new WeakMap(), lt = new WeakMap(), K = new WeakMap(), ht = new WeakMap(), yt = new WeakMap(), E = new WeakMap(), e = new WeakMap(), l = new WeakMap(), i = new WeakMap(), c = new WeakMap(), d = new WeakSet(), de = function() {
            return t(this, it) || ct(this, it, /* @__PURE__ */ new Map());
          }, N = new WeakSet(), fe = function() {
            if (!t(this, z)) {
              const ot = t(this, K).createElement("div"), {
                style: mt
              } = ot;
              mt.visibility = "hidden", mt.contain = "strict", mt.width = mt.height = 0, mt.position = "absolute", mt.top = mt.left = 0, mt.zIndex = -1;
              const wt = t(this, K).createElementNS(B, "svg");
              wt.setAttribute("width", 0), wt.setAttribute("height", 0), ct(this, z, t(this, K).createElementNS(B, "defs")), ot.append(wt), wt.append(t(this, z)), t(this, K).body.append(ot);
            }
            return t(this, z);
          }, q = new WeakSet(), Qe = function(ot) {
            const mt = t(this, K).createElementNS(B, "feColorMatrix");
            mt.setAttribute("type", "matrix"), mt.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), ot.append(mt);
          }, ut = new WeakSet(), Ce = function(ot) {
            const mt = t(this, K).createElementNS(B, "filter");
            return mt.setAttribute("color-interpolation-filters", "sRGB"), mt.setAttribute("id", ot), t(this, N, fe).append(mt), mt;
          }, bt = new WeakSet(), xe = function(ot, mt, wt) {
            const Ct = t(this, K).createElementNS(B, mt);
            Ct.setAttribute("type", "discrete"), Ct.setAttribute("tableValues", wt), ot.append(Ct);
          }, xt = new WeakSet(), _e = function(ot, mt, wt, Ct) {
            const Ut = t(this, K).createElementNS(B, "feComponentTransfer");
            Ct.append(Ut), Z(this, bt, xe).call(this, Ut, "feFuncR", ot), Z(this, bt, xe).call(this, Ut, "feFuncG", mt), Z(this, bt, xe).call(this, Ut, "feFuncB", wt);
          }, Tt = new WeakSet(), ve = function(ot) {
            return t(this, N, fe).style.color = ot, g(getComputedStyle(t(this, N, fe)).getPropertyValue("color"));
          }, s.DOMFilterFactory = X;
          class b extends n.BaseCanvasFactory {
            constructor({
              ownerDocument: at = globalThis.document
            } = {}) {
              super(), this._document = at;
            }
            _createCanvas(at, ot) {
              const mt = this._document.createElement("canvas");
              return mt.width = at, mt.height = ot, mt;
            }
          }
          s.DOMCanvasFactory = b;
          async function P(_t, at = !1) {
            if (A(_t, document.baseURI)) {
              const ot = await fetch(_t);
              if (!ot.ok)
                throw new Error(ot.statusText);
              return at ? new Uint8Array(await ot.arrayBuffer()) : (0, u.stringToBytes)(await ot.text());
            }
            return new Promise((ot, mt) => {
              const wt = new XMLHttpRequest();
              wt.open("GET", _t, !0), at && (wt.responseType = "arraybuffer"), wt.onreadystatechange = () => {
                if (wt.readyState === XMLHttpRequest.DONE) {
                  if (wt.status === 200 || wt.status === 0) {
                    let Ct;
                    if (at && wt.response ? Ct = new Uint8Array(wt.response) : !at && wt.responseText && (Ct = (0, u.stringToBytes)(wt.responseText)), Ct) {
                      ot(Ct);
                      return;
                    }
                  }
                  mt(new Error(wt.statusText));
                }
              }, wt.send(null);
            });
          }
          class p extends n.BaseCMapReaderFactory {
            _fetchData(at, ot) {
              return P(at, this.isCompressed).then((mt) => ({
                cMapData: mt,
                compressionType: ot
              }));
            }
          }
          s.DOMCMapReaderFactory = p;
          class F extends n.BaseStandardFontDataFactory {
            _fetchData(at) {
              return P(at, !0);
            }
          }
          s.DOMStandardFontDataFactory = F;
          class M extends n.BaseSVGFactory {
            _createSVG(at) {
              return document.createElementNS(B, at);
            }
          }
          s.DOMSVGFactory = M;
          class k {
            constructor({
              viewBox: at,
              scale: ot,
              rotation: mt,
              offsetX: wt = 0,
              offsetY: Ct = 0,
              dontFlip: Ut = !1
            }) {
              this.viewBox = at, this.scale = ot, this.rotation = mt, this.offsetX = wt, this.offsetY = Ct;
              const Vt = (at[2] + at[0]) / 2, Wt = (at[3] + at[1]) / 2;
              let qt, Gt, Ht, zt;
              switch (mt %= 360, mt < 0 && (mt += 360), mt) {
                case 180:
                  qt = -1, Gt = 0, Ht = 0, zt = 1;
                  break;
                case 90:
                  qt = 0, Gt = 1, Ht = 1, zt = 0;
                  break;
                case 270:
                  qt = 0, Gt = -1, Ht = -1, zt = 0;
                  break;
                case 0:
                  qt = 1, Gt = 0, Ht = 0, zt = -1;
                  break;
                default:
                  throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
              }
              Ut && (Ht = -Ht, zt = -zt);
              let gt, rt, tt, At;
              qt === 0 ? (gt = Math.abs(Wt - at[1]) * ot + wt, rt = Math.abs(Vt - at[0]) * ot + Ct, tt = (at[3] - at[1]) * ot, At = (at[2] - at[0]) * ot) : (gt = Math.abs(Vt - at[0]) * ot + wt, rt = Math.abs(Wt - at[1]) * ot + Ct, tt = (at[2] - at[0]) * ot, At = (at[3] - at[1]) * ot), this.transform = [qt * ot, Gt * ot, Ht * ot, zt * ot, gt - qt * ot * Vt - Ht * ot * Wt, rt - Gt * ot * Vt - zt * ot * Wt], this.width = tt, this.height = At;
            }
            get rawDims() {
              const {
                viewBox: at
              } = this;
              return (0, u.shadow)(this, "rawDims", {
                pageWidth: at[2] - at[0],
                pageHeight: at[3] - at[1],
                pageX: at[0],
                pageY: at[1]
              });
            }
            clone({
              scale: at = this.scale,
              rotation: ot = this.rotation,
              offsetX: mt = this.offsetX,
              offsetY: wt = this.offsetY,
              dontFlip: Ct = !1
            } = {}) {
              return new k({
                viewBox: this.viewBox.slice(),
                scale: at,
                rotation: ot,
                offsetX: mt,
                offsetY: wt,
                dontFlip: Ct
              });
            }
            convertToViewportPoint(at, ot) {
              return u.Util.applyTransform([at, ot], this.transform);
            }
            convertToViewportRectangle(at) {
              const ot = u.Util.applyTransform([at[0], at[1]], this.transform), mt = u.Util.applyTransform([at[2], at[3]], this.transform);
              return [ot[0], ot[1], mt[0], mt[1]];
            }
            convertToPdfPoint(at, ot) {
              return u.Util.applyInverseTransform([at, ot], this.transform);
            }
          }
          s.PageViewport = k;
          class w extends u.BaseException {
            constructor(at, ot = 0) {
              super(at, "RenderingCancelledException"), this.extraDelay = ot;
            }
          }
          s.RenderingCancelledException = w;
          function _(_t) {
            const at = _t.length;
            let ot = 0;
            for (; ot < at && _t[ot].trim() === ""; )
              ot++;
            return _t.substring(ot, ot + 5).toLowerCase() === "data:";
          }
          function y(_t) {
            return typeof _t == "string" && /\.pdf$/i.test(_t);
          }
          function S(_t, at = !1) {
            return at || ([_t] = _t.split(/[#?]/, 1)), _t.substring(_t.lastIndexOf("/") + 1);
          }
          function D(_t, at = "document.pdf") {
            if (typeof _t != "string")
              return at;
            if (_(_t))
              return (0, u.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), at;
            const ot = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, mt = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, wt = ot.exec(_t);
            let Ct = mt.exec(wt[1]) || mt.exec(wt[2]) || mt.exec(wt[3]);
            if (Ct && (Ct = Ct[0], Ct.includes("%")))
              try {
                Ct = mt.exec(decodeURIComponent(Ct))[0];
              } catch {
              }
            return Ct || at;
          }
          class R {
            constructor() {
              ne(this, "started", /* @__PURE__ */ Object.create(null));
              ne(this, "times", []);
            }
            time(at) {
              at in this.started && (0, u.warn)(`Timer is already running for ${at}`), this.started[at] = Date.now();
            }
            timeEnd(at) {
              at in this.started || (0, u.warn)(`Timer has not been started for ${at}`), this.times.push({
                name: at,
                start: this.started[at],
                end: Date.now()
              }), delete this.started[at];
            }
            toString() {
              const at = [];
              let ot = 0;
              for (const {
                name: mt
              } of this.times)
                ot = Math.max(mt.length, ot);
              for (const {
                name: mt,
                start: wt,
                end: Ct
              } of this.times)
                at.push(`${mt.padEnd(ot)} ${Ct - wt}ms
`);
              return at.join("");
            }
          }
          s.StatTimer = R;
          function A(_t, at) {
            try {
              const {
                protocol: ot
              } = at ? new URL(_t, at) : new URL(_t);
              return ot === "http:" || ot === "https:";
            } catch {
              return !1;
            }
          }
          function o(_t) {
            _t.preventDefault();
          }
          function f(_t, at = !1) {
            return new Promise((ot, mt) => {
              const wt = document.createElement("script");
              wt.src = _t, wt.onload = function(Ct) {
                at && wt.remove(), ot(Ct);
              }, wt.onerror = function() {
                mt(new Error(`Cannot load script at: ${wt.src}`));
              }, (document.head || document.documentElement).append(wt);
            });
          }
          function j(_t) {
            console.log("Deprecated API usage: " + _t);
          }
          let v;
          class h {
            static toDateObject(at) {
              if (!at || typeof at != "string")
                return null;
              v || (v = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
              const ot = v.exec(at);
              if (!ot)
                return null;
              const mt = parseInt(ot[1], 10);
              let wt = parseInt(ot[2], 10);
              wt = wt >= 1 && wt <= 12 ? wt - 1 : 0;
              let Ct = parseInt(ot[3], 10);
              Ct = Ct >= 1 && Ct <= 31 ? Ct : 1;
              let Ut = parseInt(ot[4], 10);
              Ut = Ut >= 0 && Ut <= 23 ? Ut : 0;
              let Vt = parseInt(ot[5], 10);
              Vt = Vt >= 0 && Vt <= 59 ? Vt : 0;
              let Wt = parseInt(ot[6], 10);
              Wt = Wt >= 0 && Wt <= 59 ? Wt : 0;
              const qt = ot[7] || "Z";
              let Gt = parseInt(ot[8], 10);
              Gt = Gt >= 0 && Gt <= 23 ? Gt : 0;
              let Ht = parseInt(ot[9], 10) || 0;
              return Ht = Ht >= 0 && Ht <= 59 ? Ht : 0, qt === "-" ? (Ut += Gt, Vt += Ht) : qt === "+" && (Ut -= Gt, Vt -= Ht), new Date(Date.UTC(mt, wt, Ct, Ut, Vt, Wt));
            }
          }
          s.PDFDateString = h;
          function I(_t, {
            scale: at = 1,
            rotation: ot = 0
          }) {
            const {
              width: mt,
              height: wt
            } = _t.attributes.style, Ct = [0, 0, parseInt(mt), parseInt(wt)];
            return new k({
              viewBox: Ct,
              scale: at,
              rotation: ot
            });
          }
          function g(_t) {
            if (_t.startsWith("#")) {
              const at = parseInt(_t.slice(1), 16);
              return [(at & 16711680) >> 16, (at & 65280) >> 8, at & 255];
            }
            return _t.startsWith("rgb(") ? _t.slice(4, -1).split(",").map((at) => parseInt(at)) : _t.startsWith("rgba(") ? _t.slice(5, -1).split(",").map((at) => parseInt(at)).slice(0, 3) : ((0, u.warn)(`Not a valid color format: "${_t}"`), [0, 0, 0]);
          }
          function U(_t) {
            const at = document.createElement("span");
            at.style.visibility = "hidden", document.body.append(at);
            for (const ot of _t.keys()) {
              at.style.color = ot;
              const mt = window.getComputedStyle(at).color;
              _t.set(ot, g(mt));
            }
            at.remove();
          }
          function G(_t) {
            const {
              a: at,
              b: ot,
              c: mt,
              d: wt,
              e: Ct,
              f: Ut
            } = _t.getTransform();
            return [at, ot, mt, wt, Ct, Ut];
          }
          function m(_t) {
            const {
              a: at,
              b: ot,
              c: mt,
              d: wt,
              e: Ct,
              f: Ut
            } = _t.getTransform().invertSelf();
            return [at, ot, mt, wt, Ct, Ut];
          }
          function Y(_t, at, ot = !1, mt = !0) {
            if (at instanceof k) {
              const {
                pageWidth: wt,
                pageHeight: Ct
              } = at.rawDims, {
                style: Ut
              } = _t, Vt = u.FeatureTest.isCSSRoundSupported, Wt = `var(--scale-factor) * ${wt}px`, qt = `var(--scale-factor) * ${Ct}px`, Gt = Vt ? `round(${Wt}, 1px)` : `calc(${Wt})`, Ht = Vt ? `round(${qt}, 1px)` : `calc(${qt})`;
              !ot || at.rotation % 180 === 0 ? (Ut.width = Gt, Ut.height = Ht) : (Ut.width = Ht, Ut.height = Gt);
            }
            mt && _t.setAttribute("data-main-rotation", at.rotation);
          }
        },
        /* 7 */
        /***/
        (C, s, O) => {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.BaseStandardFontDataFactory = s.BaseSVGFactory = s.BaseFilterFactory = s.BaseCanvasFactory = s.BaseCMapReaderFactory = void 0;
          var n = O(1);
          class u {
            constructor() {
              this.constructor === u && (0, n.unreachable)("Cannot initialize BaseFilterFactory.");
            }
            addFilter(p) {
              return "none";
            }
            addHCMFilter(p, F) {
              return "none";
            }
            addHighlightHCMFilter(p, F, M, k) {
              return "none";
            }
            destroy(p = !1) {
            }
          }
          s.BaseFilterFactory = u;
          class B {
            constructor() {
              this.constructor === B && (0, n.unreachable)("Cannot initialize BaseCanvasFactory.");
            }
            create(p, F) {
              if (p <= 0 || F <= 0)
                throw new Error("Invalid canvas size");
              const M = this._createCanvas(p, F);
              return {
                canvas: M,
                context: M.getContext("2d")
              };
            }
            reset(p, F, M) {
              if (!p.canvas)
                throw new Error("Canvas is not specified");
              if (F <= 0 || M <= 0)
                throw new Error("Invalid canvas size");
              p.canvas.width = F, p.canvas.height = M;
            }
            destroy(p) {
              if (!p.canvas)
                throw new Error("Canvas is not specified");
              p.canvas.width = 0, p.canvas.height = 0, p.canvas = null, p.context = null;
            }
            _createCanvas(p, F) {
              (0, n.unreachable)("Abstract method `_createCanvas` called.");
            }
          }
          s.BaseCanvasFactory = B;
          class L {
            constructor({
              baseUrl: p = null,
              isCompressed: F = !0
            }) {
              this.constructor === L && (0, n.unreachable)("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = p, this.isCompressed = F;
            }
            async fetch({
              name: p
            }) {
              if (!this.baseUrl)
                throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
              if (!p)
                throw new Error("CMap name must be specified.");
              const F = this.baseUrl + p + (this.isCompressed ? ".bcmap" : ""), M = this.isCompressed ? n.CMapCompressionType.BINARY : n.CMapCompressionType.NONE;
              return this._fetchData(F, M).catch((k) => {
                throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${F}`);
              });
            }
            _fetchData(p, F) {
              (0, n.unreachable)("Abstract method `_fetchData` called.");
            }
          }
          s.BaseCMapReaderFactory = L;
          class X {
            constructor({
              baseUrl: p = null
            }) {
              this.constructor === X && (0, n.unreachable)("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = p;
            }
            async fetch({
              filename: p
            }) {
              if (!this.baseUrl)
                throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
              if (!p)
                throw new Error("Font filename must be specified.");
              const F = `${this.baseUrl}${p}`;
              return this._fetchData(F).catch((M) => {
                throw new Error(`Unable to load font data at: ${F}`);
              });
            }
            _fetchData(p) {
              (0, n.unreachable)("Abstract method `_fetchData` called.");
            }
          }
          s.BaseStandardFontDataFactory = X;
          class b {
            constructor() {
              this.constructor === b && (0, n.unreachable)("Cannot initialize BaseSVGFactory.");
            }
            create(p, F, M = !1) {
              if (p <= 0 || F <= 0)
                throw new Error("Invalid SVG dimensions");
              const k = this._createSVG("svg:svg");
              return k.setAttribute("version", "1.1"), M || (k.setAttribute("width", `${p}px`), k.setAttribute("height", `${F}px`)), k.setAttribute("preserveAspectRatio", "none"), k.setAttribute("viewBox", `0 0 ${p} ${F}`), k;
            }
            createElement(p) {
              if (typeof p != "string")
                throw new Error("Invalid SVG element type");
              return this._createSVG(p);
            }
            _createSVG(p) {
              (0, n.unreachable)("Abstract method `_createSVG` called.");
            }
          }
          s.BaseSVGFactory = b;
        },
        /* 8 */
        /***/
        (C, s, O) => {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.MurmurHash3_64 = void 0;
          var n = O(1);
          const u = 3285377520, B = 4294901760, L = 65535;
          class X {
            constructor(P) {
              this.h1 = P ? P & 4294967295 : u, this.h2 = P ? P & 4294967295 : u;
            }
            update(P) {
              let p, F;
              if (typeof P == "string") {
                p = new Uint8Array(P.length * 2), F = 0;
                for (let j = 0, v = P.length; j < v; j++) {
                  const h = P.charCodeAt(j);
                  h <= 255 ? p[F++] = h : (p[F++] = h >>> 8, p[F++] = h & 255);
                }
              } else if ((0, n.isArrayBuffer)(P))
                p = P.slice(), F = p.byteLength;
              else
                throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.");
              const M = F >> 2, k = F - M * 4, w = new Uint32Array(p.buffer, 0, M);
              let _ = 0, y = 0, S = this.h1, D = this.h2;
              const R = 3432918353, A = 461845907, o = R & L, f = A & L;
              for (let j = 0; j < M; j++)
                j & 1 ? (_ = w[j], _ = _ * R & B | _ * o & L, _ = _ << 15 | _ >>> 17, _ = _ * A & B | _ * f & L, S ^= _, S = S << 13 | S >>> 19, S = S * 5 + 3864292196) : (y = w[j], y = y * R & B | y * o & L, y = y << 15 | y >>> 17, y = y * A & B | y * f & L, D ^= y, D = D << 13 | D >>> 19, D = D * 5 + 3864292196);
              switch (_ = 0, k) {
                case 3:
                  _ ^= p[M * 4 + 2] << 16;
                case 2:
                  _ ^= p[M * 4 + 1] << 8;
                case 1:
                  _ ^= p[M * 4], _ = _ * R & B | _ * o & L, _ = _ << 15 | _ >>> 17, _ = _ * A & B | _ * f & L, M & 1 ? S ^= _ : D ^= _;
              }
              this.h1 = S, this.h2 = D;
            }
            hexdigest() {
              let P = this.h1, p = this.h2;
              return P ^= p >>> 1, P = P * 3981806797 & B | P * 36045 & L, p = p * 4283543511 & B | ((p << 16 | P >>> 16) * 2950163797 & B) >>> 16, P ^= p >>> 1, P = P * 444984403 & B | P * 60499 & L, p = p * 3301882366 & B | ((p << 16 | P >>> 16) * 3120437893 & B) >>> 16, P ^= p >>> 1, (P >>> 0).toString(16).padStart(8, "0") + (p >>> 0).toString(16).padStart(8, "0");
            }
          }
          s.MurmurHash3_64 = X;
        },
        /* 9 */
        /***/
        (C, s, O) => {
          var L;
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.FontLoader = s.FontFaceObject = void 0;
          var n = O(1);
          class u {
            constructor({
              ownerDocument: b = globalThis.document,
              styleElement: P = null
            }) {
              V(this, L, /* @__PURE__ */ new Set());
              this._document = b, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
            }
            addNativeFontFace(b) {
              this.nativeFontFaces.add(b), this._document.fonts.add(b);
            }
            removeNativeFontFace(b) {
              this.nativeFontFaces.delete(b), this._document.fonts.delete(b);
            }
            insertRule(b) {
              this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
              const P = this.styleElement.sheet;
              P.insertRule(b, P.cssRules.length);
            }
            clear() {
              for (const b of this.nativeFontFaces)
                this._document.fonts.delete(b);
              this.nativeFontFaces.clear(), t(this, L).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
            }
            async loadSystemFont(b) {
              if (!(!b || t(this, L).has(b.loadedName))) {
                if ((0, n.assert)(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
                  const {
                    loadedName: P,
                    src: p,
                    style: F
                  } = b, M = new FontFace(P, p, F);
                  this.addNativeFontFace(M);
                  try {
                    await M.load(), t(this, L).add(P);
                  } catch {
                    (0, n.warn)(`Cannot load system font: ${b.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(M);
                  }
                  return;
                }
                (0, n.unreachable)("Not implemented: loadSystemFont without the Font Loading API.");
              }
            }
            async bind(b) {
              if (b.attached || b.missingFile && !b.systemFontInfo)
                return;
              if (b.attached = !0, b.systemFontInfo) {
                await this.loadSystemFont(b.systemFontInfo);
                return;
              }
              if (this.isFontLoadingAPISupported) {
                const p = b.createNativeFontFace();
                if (p) {
                  this.addNativeFontFace(p);
                  try {
                    await p.loaded;
                  } catch (F) {
                    throw (0, n.warn)(`Failed to load font '${p.family}': '${F}'.`), b.disableFontFace = !0, F;
                  }
                }
                return;
              }
              const P = b.createFontFaceRule();
              if (P) {
                if (this.insertRule(P), this.isSyncFontLoadingSupported)
                  return;
                await new Promise((p) => {
                  const F = this._queueLoadingCallback(p);
                  this._prepareFontLoadEvent(b, F);
                });
              }
            }
            get isFontLoadingAPISupported() {
              var P;
              const b = !!((P = this._document) != null && P.fonts);
              return (0, n.shadow)(this, "isFontLoadingAPISupported", b);
            }
            get isSyncFontLoadingSupported() {
              let b = !1;
              return (n.isNodeJS || typeof navigator < "u" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (b = !0), (0, n.shadow)(this, "isSyncFontLoadingSupported", b);
            }
            _queueLoadingCallback(b) {
              function P() {
                for ((0, n.assert)(!F.done, "completeRequest() cannot be called twice."), F.done = !0; p.length > 0 && p[0].done; ) {
                  const M = p.shift();
                  setTimeout(M.callback, 0);
                }
              }
              const {
                loadingRequests: p
              } = this, F = {
                done: !1,
                complete: P,
                callback: b
              };
              return p.push(F), F;
            }
            get _loadTestFont() {
              const b = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
              return (0, n.shadow)(this, "_loadTestFont", b);
            }
            _prepareFontLoadEvent(b, P) {
              function p(g, U) {
                return g.charCodeAt(U) << 24 | g.charCodeAt(U + 1) << 16 | g.charCodeAt(U + 2) << 8 | g.charCodeAt(U + 3) & 255;
              }
              function F(g, U, G, m) {
                const Y = g.substring(0, U), Q = g.substring(U + G);
                return Y + m + Q;
              }
              let M, k;
              const w = this._document.createElement("canvas");
              w.width = 1, w.height = 1;
              const _ = w.getContext("2d");
              let y = 0;
              function S(g, U) {
                if (++y > 30) {
                  (0, n.warn)("Load test font never loaded."), U();
                  return;
                }
                if (_.font = "30px " + g, _.fillText(".", 0, 20), _.getImageData(0, 0, 1, 1).data[3] > 0) {
                  U();
                  return;
                }
                setTimeout(S.bind(null, g, U));
              }
              const D = `lt${Date.now()}${this.loadTestFontId++}`;
              let R = this._loadTestFont;
              R = F(R, 976, D.length, D);
              const o = 16, f = 1482184792;
              let j = p(R, o);
              for (M = 0, k = D.length - 3; M < k; M += 4)
                j = j - f + p(D, M) | 0;
              M < D.length && (j = j - f + p(D + "XXX", M) | 0), R = F(R, o, 4, (0, n.string32)(j));
              const v = `url(data:font/opentype;base64,${btoa(R)});`, h = `@font-face {font-family:"${D}";src:${v}}`;
              this.insertRule(h);
              const I = this._document.createElement("div");
              I.style.visibility = "hidden", I.style.width = I.style.height = "10px", I.style.position = "absolute", I.style.top = I.style.left = "0px";
              for (const g of [b.loadedName, D]) {
                const U = this._document.createElement("span");
                U.textContent = "Hi", U.style.fontFamily = g, I.append(U);
              }
              this._document.body.append(I), S(D, () => {
                I.remove(), P.complete();
              });
            }
          }
          L = new WeakMap(), s.FontLoader = u;
          class B {
            constructor(b, {
              isEvalSupported: P = !0,
              disableFontFace: p = !1,
              ignoreErrors: F = !1,
              inspectFont: M = null
            }) {
              this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
              for (const k in b)
                this[k] = b[k];
              this.isEvalSupported = P !== !1, this.disableFontFace = p === !0, this.ignoreErrors = F === !0, this._inspectFont = M;
            }
            createNativeFontFace() {
              var P;
              if (!this.data || this.disableFontFace)
                return null;
              let b;
              if (!this.cssFontInfo)
                b = new FontFace(this.loadedName, this.data, {});
              else {
                const p = {
                  weight: this.cssFontInfo.fontWeight
                };
                this.cssFontInfo.italicAngle && (p.style = `oblique ${this.cssFontInfo.italicAngle}deg`), b = new FontFace(this.cssFontInfo.fontFamily, this.data, p);
              }
              return (P = this._inspectFont) == null || P.call(this, this), b;
            }
            createFontFaceRule() {
              var F;
              if (!this.data || this.disableFontFace)
                return null;
              const b = (0, n.bytesToString)(this.data), P = `url(data:${this.mimetype};base64,${btoa(b)});`;
              let p;
              if (!this.cssFontInfo)
                p = `@font-face {font-family:"${this.loadedName}";src:${P}}`;
              else {
                let M = `font-weight: ${this.cssFontInfo.fontWeight};`;
                this.cssFontInfo.italicAngle && (M += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), p = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${M}src:${P}}`;
              }
              return (F = this._inspectFont) == null || F.call(this, this, P), p;
            }
            getPathGenerator(b, P) {
              if (this.compiledGlyphs[P] !== void 0)
                return this.compiledGlyphs[P];
              let p;
              try {
                p = b.get(this.loadedName + "_path_" + P);
              } catch (F) {
                if (!this.ignoreErrors)
                  throw F;
                return (0, n.warn)(`getPathGenerator - ignoring character: "${F}".`), this.compiledGlyphs[P] = function(M, k) {
                };
              }
              if (this.isEvalSupported && n.FeatureTest.isEvalSupported) {
                const F = [];
                for (const M of p) {
                  const k = M.args !== void 0 ? M.args.join(",") : "";
                  F.push("c.", M.cmd, "(", k, `);
`);
                }
                return this.compiledGlyphs[P] = new Function("c", "size", F.join(""));
              }
              return this.compiledGlyphs[P] = function(F, M) {
                for (const k of p)
                  k.cmd === "scale" && (k.args = [M, -M]), F[k.cmd].apply(F, k.args);
              };
            }
          }
          s.FontFaceObject = B;
        },
        /* 10 */
        /***/
        (C, s, O) => {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.NodeStandardFontDataFactory = s.NodeFilterFactory = s.NodeCanvasFactory = s.NodeCMapReaderFactory = void 0;
          var n = O(7);
          O(1);
          const u = function(P) {
            return new Promise((p, F) => {
              require$$5.readFile(P, (k, w) => {
                if (k || !w) {
                  F(new Error(k));
                  return;
                }
                p(new Uint8Array(w));
              });
            });
          };
          class B extends n.BaseFilterFactory {
          }
          s.NodeFilterFactory = B;
          class L extends n.BaseCanvasFactory {
            _createCanvas(p, F) {
              return require$$5.createCanvas(p, F);
            }
          }
          s.NodeCanvasFactory = L;
          class X extends n.BaseCMapReaderFactory {
            _fetchData(p, F) {
              return u(p).then((M) => ({
                cMapData: M,
                compressionType: F
              }));
            }
          }
          s.NodeCMapReaderFactory = X;
          class b extends n.BaseStandardFontDataFactory {
            _fetchData(p) {
              return u(p);
            }
          }
          s.NodeStandardFontDataFactory = b;
        },
        /* 11 */
        /***/
        (C, s, O) => {
          var z, Ze, K, tn;
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.CanvasGraphics = void 0;
          var n = O(1), u = O(6), B = O(12), L = O(13);
          const X = 16, b = 100, P = 4096, p = 15, F = 10, M = 1e3, k = 16;
          function w(E, e) {
            if (E._removeMirroring)
              throw new Error("Context is already forwarding operations.");
            E.__originalSave = E.save, E.__originalRestore = E.restore, E.__originalRotate = E.rotate, E.__originalScale = E.scale, E.__originalTranslate = E.translate, E.__originalTransform = E.transform, E.__originalSetTransform = E.setTransform, E.__originalResetTransform = E.resetTransform, E.__originalClip = E.clip, E.__originalMoveTo = E.moveTo, E.__originalLineTo = E.lineTo, E.__originalBezierCurveTo = E.bezierCurveTo, E.__originalRect = E.rect, E.__originalClosePath = E.closePath, E.__originalBeginPath = E.beginPath, E._removeMirroring = () => {
              E.save = E.__originalSave, E.restore = E.__originalRestore, E.rotate = E.__originalRotate, E.scale = E.__originalScale, E.translate = E.__originalTranslate, E.transform = E.__originalTransform, E.setTransform = E.__originalSetTransform, E.resetTransform = E.__originalResetTransform, E.clip = E.__originalClip, E.moveTo = E.__originalMoveTo, E.lineTo = E.__originalLineTo, E.bezierCurveTo = E.__originalBezierCurveTo, E.rect = E.__originalRect, E.closePath = E.__originalClosePath, E.beginPath = E.__originalBeginPath, delete E._removeMirroring;
            }, E.save = function() {
              e.save(), this.__originalSave();
            }, E.restore = function() {
              e.restore(), this.__originalRestore();
            }, E.translate = function(i, c) {
              e.translate(i, c), this.__originalTranslate(i, c);
            }, E.scale = function(i, c) {
              e.scale(i, c), this.__originalScale(i, c);
            }, E.transform = function(i, c, d, T, N, W) {
              e.transform(i, c, d, T, N, W), this.__originalTransform(i, c, d, T, N, W);
            }, E.setTransform = function(i, c, d, T, N, W) {
              e.setTransform(i, c, d, T, N, W), this.__originalSetTransform(i, c, d, T, N, W);
            }, E.resetTransform = function() {
              e.resetTransform(), this.__originalResetTransform();
            }, E.rotate = function(i) {
              e.rotate(i), this.__originalRotate(i);
            }, E.clip = function(i) {
              e.clip(i), this.__originalClip(i);
            }, E.moveTo = function(l, i) {
              e.moveTo(l, i), this.__originalMoveTo(l, i);
            }, E.lineTo = function(l, i) {
              e.lineTo(l, i), this.__originalLineTo(l, i);
            }, E.bezierCurveTo = function(l, i, c, d, T, N) {
              e.bezierCurveTo(l, i, c, d, T, N), this.__originalBezierCurveTo(l, i, c, d, T, N);
            }, E.rect = function(l, i, c, d) {
              e.rect(l, i, c, d), this.__originalRect(l, i, c, d);
            }, E.closePath = function() {
              e.closePath(), this.__originalClosePath();
            }, E.beginPath = function() {
              e.beginPath(), this.__originalBeginPath();
            };
          }
          class _ {
            constructor(e) {
              this.canvasFactory = e, this.cache = /* @__PURE__ */ Object.create(null);
            }
            getCanvas(e, l, i) {
              let c;
              return this.cache[e] !== void 0 ? (c = this.cache[e], this.canvasFactory.reset(c, l, i)) : (c = this.canvasFactory.create(l, i), this.cache[e] = c), c;
            }
            delete(e) {
              delete this.cache[e];
            }
            clear() {
              for (const e in this.cache) {
                const l = this.cache[e];
                this.canvasFactory.destroy(l), delete this.cache[e];
              }
            }
          }
          function y(E, e, l, i, c, d, T, N, W, q) {
            const [nt, ut, pt, bt, ft, xt] = (0, u.getCurrentTransform)(E);
            if (ut === 0 && pt === 0) {
              const Ot = T * nt + ft, _t = Math.round(Ot), at = N * bt + xt, ot = Math.round(at), mt = (T + W) * nt + ft, wt = Math.abs(Math.round(mt) - _t) || 1, Ct = (N + q) * bt + xt, Ut = Math.abs(Math.round(Ct) - ot) || 1;
              return E.setTransform(Math.sign(nt), 0, 0, Math.sign(bt), _t, ot), E.drawImage(e, l, i, c, d, 0, 0, wt, Ut), E.setTransform(nt, ut, pt, bt, ft, xt), [wt, Ut];
            }
            if (nt === 0 && bt === 0) {
              const Ot = N * pt + ft, _t = Math.round(Ot), at = T * ut + xt, ot = Math.round(at), mt = (N + q) * pt + ft, wt = Math.abs(Math.round(mt) - _t) || 1, Ct = (T + W) * ut + xt, Ut = Math.abs(Math.round(Ct) - ot) || 1;
              return E.setTransform(0, Math.sign(ut), Math.sign(pt), 0, _t, ot), E.drawImage(e, l, i, c, d, 0, 0, Ut, wt), E.setTransform(nt, ut, pt, bt, ft, xt), [Ut, wt];
            }
            E.drawImage(e, l, i, c, d, T, N, W, q);
            const It = Math.hypot(nt, ut), Tt = Math.hypot(pt, bt);
            return [It * W, Tt * q];
          }
          function S(E) {
            const {
              width: e,
              height: l
            } = E;
            if (e > M || l > M)
              return null;
            const i = 1e3, c = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), d = e + 1;
            let T = new Uint8Array(d * (l + 1)), N, W, q;
            const nt = e + 7 & -8;
            let ut = new Uint8Array(nt * l), pt = 0;
            for (const Tt of E.data) {
              let Ot = 128;
              for (; Ot > 0; )
                ut[pt++] = Tt & Ot ? 0 : 255, Ot >>= 1;
            }
            let bt = 0;
            for (pt = 0, ut[pt] !== 0 && (T[0] = 1, ++bt), W = 1; W < e; W++)
              ut[pt] !== ut[pt + 1] && (T[W] = ut[pt] ? 2 : 1, ++bt), pt++;
            for (ut[pt] !== 0 && (T[W] = 2, ++bt), N = 1; N < l; N++) {
              pt = N * nt, q = N * d, ut[pt - nt] !== ut[pt] && (T[q] = ut[pt] ? 1 : 8, ++bt);
              let Tt = (ut[pt] ? 4 : 0) + (ut[pt - nt] ? 8 : 0);
              for (W = 1; W < e; W++)
                Tt = (Tt >> 2) + (ut[pt + 1] ? 4 : 0) + (ut[pt - nt + 1] ? 8 : 0), c[Tt] && (T[q + W] = c[Tt], ++bt), pt++;
              if (ut[pt - nt] !== ut[pt] && (T[q + W] = ut[pt] ? 2 : 4, ++bt), bt > i)
                return null;
            }
            for (pt = nt * (l - 1), q = N * d, ut[pt] !== 0 && (T[q] = 8, ++bt), W = 1; W < e; W++)
              ut[pt] !== ut[pt + 1] && (T[q + W] = ut[pt] ? 4 : 8, ++bt), pt++;
            if (ut[pt] !== 0 && (T[q + W] = 4, ++bt), bt > i)
              return null;
            const ft = new Int32Array([0, d, -1, 0, -d, 0, 0, 0, 1]), xt = new Path2D();
            for (N = 0; bt && N <= l; N++) {
              let Tt = N * d;
              const Ot = Tt + e;
              for (; Tt < Ot && !T[Tt]; )
                Tt++;
              if (Tt === Ot)
                continue;
              xt.moveTo(Tt % d, N);
              const _t = Tt;
              let at = T[Tt];
              do {
                const ot = ft[at];
                do
                  Tt += ot;
                while (!T[Tt]);
                const mt = T[Tt];
                mt !== 5 && mt !== 10 ? (at = mt, T[Tt] = 0) : (at = mt & 51 * at >> 4, T[Tt] &= at >> 2 | at << 2), xt.lineTo(Tt % d, Tt / d | 0), T[Tt] || --bt;
              } while (_t !== Tt);
              --N;
            }
            return ut = null, T = null, function(Tt) {
              Tt.save(), Tt.scale(1 / e, -1 / l), Tt.translate(0, -l), Tt.fill(xt), Tt.beginPath(), Tt.restore();
            };
          }
          class D {
            constructor(e, l) {
              this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = n.IDENTITY_MATRIX, this.textMatrixScale = 1, this.fontMatrix = n.FONT_IDENTITY_MATRIX, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = n.TextRenderingMode.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, e, l]);
            }
            clone() {
              const e = Object.create(this);
              return e.clipBox = this.clipBox.slice(), e;
            }
            setCurrentPoint(e, l) {
              this.x = e, this.y = l;
            }
            updatePathMinMax(e, l, i) {
              [l, i] = n.Util.applyTransform([l, i], e), this.minX = Math.min(this.minX, l), this.minY = Math.min(this.minY, i), this.maxX = Math.max(this.maxX, l), this.maxY = Math.max(this.maxY, i);
            }
            updateRectMinMax(e, l) {
              const i = n.Util.applyTransform(l, e), c = n.Util.applyTransform(l.slice(2), e);
              this.minX = Math.min(this.minX, i[0], c[0]), this.minY = Math.min(this.minY, i[1], c[1]), this.maxX = Math.max(this.maxX, i[0], c[0]), this.maxY = Math.max(this.maxY, i[1], c[1]);
            }
            updateScalingPathMinMax(e, l) {
              n.Util.scaleMinMax(e, l), this.minX = Math.min(this.minX, l[0]), this.maxX = Math.max(this.maxX, l[1]), this.minY = Math.min(this.minY, l[2]), this.maxY = Math.max(this.maxY, l[3]);
            }
            updateCurvePathMinMax(e, l, i, c, d, T, N, W, q, nt) {
              const ut = n.Util.bezierBoundingBox(l, i, c, d, T, N, W, q);
              if (nt) {
                nt[0] = Math.min(nt[0], ut[0], ut[2]), nt[1] = Math.max(nt[1], ut[0], ut[2]), nt[2] = Math.min(nt[2], ut[1], ut[3]), nt[3] = Math.max(nt[3], ut[1], ut[3]);
                return;
              }
              this.updateRectMinMax(e, ut);
            }
            getPathBoundingBox(e = B.PathType.FILL, l = null) {
              const i = [this.minX, this.minY, this.maxX, this.maxY];
              if (e === B.PathType.STROKE) {
                l || (0, n.unreachable)("Stroke bounding box must include transform.");
                const c = n.Util.singularValueDecompose2dScale(l), d = c[0] * this.lineWidth / 2, T = c[1] * this.lineWidth / 2;
                i[0] -= d, i[1] -= T, i[2] += d, i[3] += T;
              }
              return i;
            }
            updateClipFromPath() {
              const e = n.Util.intersect(this.clipBox, this.getPathBoundingBox());
              this.startNewPathAndClipBox(e || [0, 0, 0, 0]);
            }
            isEmptyClip() {
              return this.minX === 1 / 0;
            }
            startNewPathAndClipBox(e) {
              this.clipBox = e, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
            }
            getClippedPathBoundingBox(e = B.PathType.FILL, l = null) {
              return n.Util.intersect(this.clipBox, this.getPathBoundingBox(e, l));
            }
          }
          function R(E, e) {
            if (typeof ImageData < "u" && e instanceof ImageData) {
              E.putImageData(e, 0, 0);
              return;
            }
            const l = e.height, i = e.width, c = l % k, d = (l - c) / k, T = c === 0 ? d : d + 1, N = E.createImageData(i, k);
            let W = 0, q;
            const nt = e.data, ut = N.data;
            let pt, bt, ft, xt;
            if (e.kind === n.ImageKind.GRAYSCALE_1BPP) {
              const It = nt.byteLength, Tt = new Uint32Array(ut.buffer, 0, ut.byteLength >> 2), Ot = Tt.length, _t = i + 7 >> 3, at = 4294967295, ot = n.FeatureTest.isLittleEndian ? 4278190080 : 255;
              for (pt = 0; pt < T; pt++) {
                for (ft = pt < d ? k : c, q = 0, bt = 0; bt < ft; bt++) {
                  const mt = It - W;
                  let wt = 0;
                  const Ct = mt > _t ? i : mt * 8 - 7, Ut = Ct & -8;
                  let Vt = 0, Wt = 0;
                  for (; wt < Ut; wt += 8)
                    Wt = nt[W++], Tt[q++] = Wt & 128 ? at : ot, Tt[q++] = Wt & 64 ? at : ot, Tt[q++] = Wt & 32 ? at : ot, Tt[q++] = Wt & 16 ? at : ot, Tt[q++] = Wt & 8 ? at : ot, Tt[q++] = Wt & 4 ? at : ot, Tt[q++] = Wt & 2 ? at : ot, Tt[q++] = Wt & 1 ? at : ot;
                  for (; wt < Ct; wt++)
                    Vt === 0 && (Wt = nt[W++], Vt = 128), Tt[q++] = Wt & Vt ? at : ot, Vt >>= 1;
                }
                for (; q < Ot; )
                  Tt[q++] = 0;
                E.putImageData(N, 0, pt * k);
              }
            } else if (e.kind === n.ImageKind.RGBA_32BPP) {
              for (bt = 0, xt = i * k * 4, pt = 0; pt < d; pt++)
                ut.set(nt.subarray(W, W + xt)), W += xt, E.putImageData(N, 0, bt), bt += k;
              pt < T && (xt = i * c * 4, ut.set(nt.subarray(W, W + xt)), E.putImageData(N, 0, bt));
            } else if (e.kind === n.ImageKind.RGB_24BPP)
              for (ft = k, xt = i * ft, pt = 0; pt < T; pt++) {
                for (pt >= d && (ft = c, xt = i * ft), q = 0, bt = xt; bt--; )
                  ut[q++] = nt[W++], ut[q++] = nt[W++], ut[q++] = nt[W++], ut[q++] = 255;
                E.putImageData(N, 0, pt * k);
              }
            else
              throw new Error(`bad image kind: ${e.kind}`);
          }
          function A(E, e) {
            if (e.bitmap) {
              E.drawImage(e.bitmap, 0, 0);
              return;
            }
            const l = e.height, i = e.width, c = l % k, d = (l - c) / k, T = c === 0 ? d : d + 1, N = E.createImageData(i, k);
            let W = 0;
            const q = e.data, nt = N.data;
            for (let ut = 0; ut < T; ut++) {
              const pt = ut < d ? k : c;
              ({
                srcPos: W
              } = (0, L.convertBlackAndWhiteToRGBA)({
                src: q,
                srcPos: W,
                dest: nt,
                width: i,
                height: pt,
                nonBlackColor: 0
              })), E.putImageData(N, 0, ut * k);
            }
          }
          function o(E, e) {
            const l = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
            for (const i of l)
              E[i] !== void 0 && (e[i] = E[i]);
            E.setLineDash !== void 0 && (e.setLineDash(E.getLineDash()), e.lineDashOffset = E.lineDashOffset);
          }
          function f(E) {
            if (E.strokeStyle = E.fillStyle = "#000000", E.fillRule = "nonzero", E.globalAlpha = 1, E.lineWidth = 1, E.lineCap = "butt", E.lineJoin = "miter", E.miterLimit = 10, E.globalCompositeOperation = "source-over", E.font = "10px sans-serif", E.setLineDash !== void 0 && (E.setLineDash([]), E.lineDashOffset = 0), !n.isNodeJS) {
              const {
                filter: e
              } = E;
              e !== "none" && e !== "" && (E.filter = "none");
            }
          }
          function j(E, e, l, i) {
            const c = E.length;
            for (let d = 3; d < c; d += 4) {
              const T = E[d];
              if (T === 0)
                E[d - 3] = e, E[d - 2] = l, E[d - 1] = i;
              else if (T < 255) {
                const N = 255 - T;
                E[d - 3] = E[d - 3] * T + e * N >> 8, E[d - 2] = E[d - 2] * T + l * N >> 8, E[d - 1] = E[d - 1] * T + i * N >> 8;
              }
            }
          }
          function v(E, e, l) {
            const i = E.length, c = 1 / 255;
            for (let d = 3; d < i; d += 4) {
              const T = l ? l[E[d]] : E[d];
              e[d] = e[d] * T * c | 0;
            }
          }
          function h(E, e, l) {
            const i = E.length;
            for (let c = 3; c < i; c += 4) {
              const d = E[c - 3] * 77 + E[c - 2] * 152 + E[c - 1] * 28;
              e[c] = l ? e[c] * l[d >> 8] >> 8 : e[c] * d >> 16;
            }
          }
          function I(E, e, l, i, c, d, T, N, W, q, nt) {
            const ut = !!d, pt = ut ? d[0] : 0, bt = ut ? d[1] : 0, ft = ut ? d[2] : 0, xt = c === "Luminosity" ? h : v, Tt = Math.min(i, Math.ceil(1048576 / l));
            for (let Ot = 0; Ot < i; Ot += Tt) {
              const _t = Math.min(Tt, i - Ot), at = E.getImageData(N - q, Ot + (W - nt), l, _t), ot = e.getImageData(N, Ot + W, l, _t);
              ut && j(at.data, pt, bt, ft), xt(at.data, ot.data, T), e.putImageData(ot, N, Ot + W);
            }
          }
          function g(E, e, l, i) {
            const c = i[0], d = i[1], T = i[2] - c, N = i[3] - d;
            T === 0 || N === 0 || (I(e.context, l, T, N, e.subtype, e.backdrop, e.transferMap, c, d, e.offsetX, e.offsetY), E.save(), E.globalAlpha = 1, E.globalCompositeOperation = "source-over", E.setTransform(1, 0, 0, 1, 0, 0), E.drawImage(l.canvas, 0, 0), E.restore());
          }
          function U(E, e) {
            const l = n.Util.singularValueDecompose2dScale(E);
            l[0] = Math.fround(l[0]), l[1] = Math.fround(l[1]);
            const i = Math.fround((globalThis.devicePixelRatio || 1) * u.PixelsPerInch.PDF_TO_CSS_UNITS);
            return e !== void 0 ? e : l[0] <= i || l[1] <= i;
          }
          const G = ["butt", "round", "square"], m = ["miter", "round", "bevel"], Y = {}, Q = {}, yt = class yt {
            constructor(e, l, i, c, d, {
              optionalContentConfig: T,
              markedContentStack: N = null
            }, W, q) {
              V(this, z);
              V(this, K);
              this.ctx = e, this.current = new D(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = l, this.objs = i, this.canvasFactory = c, this.filterFactory = d, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = N || [], this.optionalContentConfig = T, this.cachedCanvases = new _(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = W, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = q, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
            }
            getObject(e, l = null) {
              return typeof e == "string" ? e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e) : l;
            }
            beginDrawing({
              transform: e,
              viewport: l,
              transparency: i = !1,
              background: c = null
            }) {
              const d = this.ctx.canvas.width, T = this.ctx.canvas.height, N = this.ctx.fillStyle;
              if (this.ctx.fillStyle = c || "#ffffff", this.ctx.fillRect(0, 0, d, T), this.ctx.fillStyle = N, i) {
                const W = this.cachedCanvases.getCanvas("transparent", d, T);
                this.compositeCtx = this.ctx, this.transparentCanvas = W.canvas, this.ctx = W.context, this.ctx.save(), this.ctx.transform(...(0, u.getCurrentTransform)(this.compositeCtx));
              }
              this.ctx.save(), f(this.ctx), e && (this.ctx.transform(...e), this.outputScaleX = e[0], this.outputScaleY = e[0]), this.ctx.transform(...l.transform), this.viewportScale = l.scale, this.baseTransform = (0, u.getCurrentTransform)(this.ctx);
            }
            executeOperatorList(e, l, i, c) {
              const d = e.argsArray, T = e.fnArray;
              let N = l || 0;
              const W = d.length;
              if (W === N)
                return N;
              const q = W - N > F && typeof i == "function", nt = q ? Date.now() + p : 0;
              let ut = 0;
              const pt = this.commonObjs, bt = this.objs;
              let ft;
              for (; ; ) {
                if (c !== void 0 && N === c.nextBreakPoint)
                  return c.breakIt(N, i), N;
                if (ft = T[N], ft !== n.OPS.dependency)
                  this[ft].apply(this, d[N]);
                else
                  for (const xt of d[N]) {
                    const It = xt.startsWith("g_") ? pt : bt;
                    if (!It.has(xt))
                      return It.get(xt, i), N;
                  }
                if (N++, N === W)
                  return N;
                if (q && ++ut > F) {
                  if (Date.now() > nt)
                    return i(), N;
                  ut = 0;
                }
              }
            }
            endDrawing() {
              Z(this, z, Ze).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
              for (const e of this._cachedBitmapsMap.values()) {
                for (const l of e.values())
                  typeof HTMLCanvasElement < "u" && l instanceof HTMLCanvasElement && (l.width = l.height = 0);
                e.clear();
              }
              this._cachedBitmapsMap.clear(), Z(this, K, tn).call(this);
            }
            _scaleImage(e, l) {
              const i = e.width, c = e.height;
              let d = Math.max(Math.hypot(l[0], l[1]), 1), T = Math.max(Math.hypot(l[2], l[3]), 1), N = i, W = c, q = "prescale1", nt, ut;
              for (; d > 2 && N > 1 || T > 2 && W > 1; ) {
                let pt = N, bt = W;
                d > 2 && N > 1 && (pt = N >= 16384 ? Math.floor(N / 2) - 1 || 1 : Math.ceil(N / 2), d /= N / pt), T > 2 && W > 1 && (bt = W >= 16384 ? Math.floor(W / 2) - 1 || 1 : Math.ceil(W) / 2, T /= W / bt), nt = this.cachedCanvases.getCanvas(q, pt, bt), ut = nt.context, ut.clearRect(0, 0, pt, bt), ut.drawImage(e, 0, 0, N, W, 0, 0, pt, bt), e = nt.canvas, N = pt, W = bt, q = q === "prescale1" ? "prescale2" : "prescale1";
              }
              return {
                img: e,
                paintWidth: N,
                paintHeight: W
              };
            }
            _createMaskCanvas(e) {
              const l = this.ctx, {
                width: i,
                height: c
              } = e, d = this.current.fillColor, T = this.current.patternFill, N = (0, u.getCurrentTransform)(l);
              let W, q, nt, ut;
              if ((e.bitmap || e.data) && e.count > 1) {
                const wt = e.bitmap || e.data.buffer;
                q = JSON.stringify(T ? N : [N.slice(0, 4), d]), W = this._cachedBitmapsMap.get(wt), W || (W = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(wt, W));
                const Ct = W.get(q);
                if (Ct && !T) {
                  const Ut = Math.round(Math.min(N[0], N[2]) + N[4]), Vt = Math.round(Math.min(N[1], N[3]) + N[5]);
                  return {
                    canvas: Ct,
                    offsetX: Ut,
                    offsetY: Vt
                  };
                }
                nt = Ct;
              }
              nt || (ut = this.cachedCanvases.getCanvas("maskCanvas", i, c), A(ut.context, e));
              let pt = n.Util.transform(N, [1 / i, 0, 0, -1 / c, 0, 0]);
              pt = n.Util.transform(pt, [1, 0, 0, 1, 0, -c]);
              const bt = n.Util.applyTransform([0, 0], pt), ft = n.Util.applyTransform([i, c], pt), xt = n.Util.normalizeRect([bt[0], bt[1], ft[0], ft[1]]), It = Math.round(xt[2] - xt[0]) || 1, Tt = Math.round(xt[3] - xt[1]) || 1, Ot = this.cachedCanvases.getCanvas("fillCanvas", It, Tt), _t = Ot.context, at = Math.min(bt[0], ft[0]), ot = Math.min(bt[1], ft[1]);
              _t.translate(-at, -ot), _t.transform(...pt), nt || (nt = this._scaleImage(ut.canvas, (0, u.getCurrentTransformInverse)(_t)), nt = nt.img, W && T && W.set(q, nt)), _t.imageSmoothingEnabled = U((0, u.getCurrentTransform)(_t), e.interpolate), y(_t, nt, 0, 0, nt.width, nt.height, 0, 0, i, c), _t.globalCompositeOperation = "source-in";
              const mt = n.Util.transform((0, u.getCurrentTransformInverse)(_t), [1, 0, 0, 1, -at, -ot]);
              return _t.fillStyle = T ? d.getPattern(l, this, mt, B.PathType.FILL) : d, _t.fillRect(0, 0, i, c), W && !T && (this.cachedCanvases.delete("fillCanvas"), W.set(q, Ot.canvas)), {
                canvas: Ot.canvas,
                offsetX: Math.round(at),
                offsetY: Math.round(ot)
              };
            }
            setLineWidth(e) {
              e !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = e, this.ctx.lineWidth = e;
            }
            setLineCap(e) {
              this.ctx.lineCap = G[e];
            }
            setLineJoin(e) {
              this.ctx.lineJoin = m[e];
            }
            setMiterLimit(e) {
              this.ctx.miterLimit = e;
            }
            setDash(e, l) {
              const i = this.ctx;
              i.setLineDash !== void 0 && (i.setLineDash(e), i.lineDashOffset = l);
            }
            setRenderingIntent(e) {
            }
            setFlatness(e) {
            }
            setGState(e) {
              for (const [l, i] of e)
                switch (l) {
                  case "LW":
                    this.setLineWidth(i);
                    break;
                  case "LC":
                    this.setLineCap(i);
                    break;
                  case "LJ":
                    this.setLineJoin(i);
                    break;
                  case "ML":
                    this.setMiterLimit(i);
                    break;
                  case "D":
                    this.setDash(i[0], i[1]);
                    break;
                  case "RI":
                    this.setRenderingIntent(i);
                    break;
                  case "FL":
                    this.setFlatness(i);
                    break;
                  case "Font":
                    this.setFont(i[0], i[1]);
                    break;
                  case "CA":
                    this.current.strokeAlpha = i;
                    break;
                  case "ca":
                    this.current.fillAlpha = i, this.ctx.globalAlpha = i;
                    break;
                  case "BM":
                    this.ctx.globalCompositeOperation = i;
                    break;
                  case "SMask":
                    this.current.activeSMask = i ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
                    break;
                  case "TR":
                    this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(i);
                    break;
                }
            }
            get inSMaskMode() {
              return !!this.suspendedCtx;
            }
            checkSMaskState() {
              const e = this.inSMaskMode;
              this.current.activeSMask && !e ? this.beginSMaskMode() : !this.current.activeSMask && e && this.endSMaskMode();
            }
            beginSMaskMode() {
              if (this.inSMaskMode)
                throw new Error("beginSMaskMode called while already in smask mode");
              const e = this.ctx.canvas.width, l = this.ctx.canvas.height, i = "smaskGroupAt" + this.groupLevel, c = this.cachedCanvases.getCanvas(i, e, l);
              this.suspendedCtx = this.ctx, this.ctx = c.context;
              const d = this.ctx;
              d.setTransform(...(0, u.getCurrentTransform)(this.suspendedCtx)), o(this.suspendedCtx, d), w(d, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
            }
            endSMaskMode() {
              if (!this.inSMaskMode)
                throw new Error("endSMaskMode called while not in smask mode");
              this.ctx._removeMirroring(), o(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
            }
            compose(e) {
              if (!this.current.activeSMask)
                return;
              e ? (e[0] = Math.floor(e[0]), e[1] = Math.floor(e[1]), e[2] = Math.ceil(e[2]), e[3] = Math.ceil(e[3])) : e = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
              const l = this.current.activeSMask, i = this.suspendedCtx;
              g(i, l, this.ctx, e), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
            }
            save() {
              this.inSMaskMode ? (o(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
              const e = this.current;
              this.stateStack.push(e), this.current = e.clone();
            }
            restore() {
              this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), o(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
            }
            transform(e, l, i, c, d, T) {
              this.ctx.transform(e, l, i, c, d, T), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
            }
            constructPath(e, l, i) {
              const c = this.ctx, d = this.current;
              let T = d.x, N = d.y, W, q;
              const nt = (0, u.getCurrentTransform)(c), ut = nt[0] === 0 && nt[3] === 0 || nt[1] === 0 && nt[2] === 0, pt = ut ? i.slice(0) : null;
              for (let bt = 0, ft = 0, xt = e.length; bt < xt; bt++)
                switch (e[bt] | 0) {
                  case n.OPS.rectangle:
                    T = l[ft++], N = l[ft++];
                    const It = l[ft++], Tt = l[ft++], Ot = T + It, _t = N + Tt;
                    c.moveTo(T, N), It === 0 || Tt === 0 ? c.lineTo(Ot, _t) : (c.lineTo(Ot, N), c.lineTo(Ot, _t), c.lineTo(T, _t)), ut || d.updateRectMinMax(nt, [T, N, Ot, _t]), c.closePath();
                    break;
                  case n.OPS.moveTo:
                    T = l[ft++], N = l[ft++], c.moveTo(T, N), ut || d.updatePathMinMax(nt, T, N);
                    break;
                  case n.OPS.lineTo:
                    T = l[ft++], N = l[ft++], c.lineTo(T, N), ut || d.updatePathMinMax(nt, T, N);
                    break;
                  case n.OPS.curveTo:
                    W = T, q = N, T = l[ft + 4], N = l[ft + 5], c.bezierCurveTo(l[ft], l[ft + 1], l[ft + 2], l[ft + 3], T, N), d.updateCurvePathMinMax(nt, W, q, l[ft], l[ft + 1], l[ft + 2], l[ft + 3], T, N, pt), ft += 6;
                    break;
                  case n.OPS.curveTo2:
                    W = T, q = N, c.bezierCurveTo(T, N, l[ft], l[ft + 1], l[ft + 2], l[ft + 3]), d.updateCurvePathMinMax(nt, W, q, T, N, l[ft], l[ft + 1], l[ft + 2], l[ft + 3], pt), T = l[ft + 2], N = l[ft + 3], ft += 4;
                    break;
                  case n.OPS.curveTo3:
                    W = T, q = N, T = l[ft + 2], N = l[ft + 3], c.bezierCurveTo(l[ft], l[ft + 1], T, N, T, N), d.updateCurvePathMinMax(nt, W, q, l[ft], l[ft + 1], T, N, T, N, pt), ft += 4;
                    break;
                  case n.OPS.closePath:
                    c.closePath();
                    break;
                }
              ut && d.updateScalingPathMinMax(nt, pt), d.setCurrentPoint(T, N);
            }
            closePath() {
              this.ctx.closePath();
            }
            stroke(e = !0) {
              const l = this.ctx, i = this.current.strokeColor;
              l.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof i == "object" && (i != null && i.getPattern) ? (l.save(), l.strokeStyle = i.getPattern(l, this, (0, u.getCurrentTransformInverse)(l), B.PathType.STROKE), this.rescaleAndStroke(!1), l.restore()) : this.rescaleAndStroke(!0)), e && this.consumePath(this.current.getClippedPathBoundingBox()), l.globalAlpha = this.current.fillAlpha;
            }
            closeStroke() {
              this.closePath(), this.stroke();
            }
            fill(e = !0) {
              const l = this.ctx, i = this.current.fillColor, c = this.current.patternFill;
              let d = !1;
              c && (l.save(), l.fillStyle = i.getPattern(l, this, (0, u.getCurrentTransformInverse)(l), B.PathType.FILL), d = !0);
              const T = this.current.getClippedPathBoundingBox();
              this.contentVisible && T !== null && (this.pendingEOFill ? (l.fill("evenodd"), this.pendingEOFill = !1) : l.fill()), d && l.restore(), e && this.consumePath(T);
            }
            eoFill() {
              this.pendingEOFill = !0, this.fill();
            }
            fillStroke() {
              this.fill(!1), this.stroke(!1), this.consumePath();
            }
            eoFillStroke() {
              this.pendingEOFill = !0, this.fillStroke();
            }
            closeFillStroke() {
              this.closePath(), this.fillStroke();
            }
            closeEOFillStroke() {
              this.pendingEOFill = !0, this.closePath(), this.fillStroke();
            }
            endPath() {
              this.consumePath();
            }
            clip() {
              this.pendingClip = Y;
            }
            eoClip() {
              this.pendingClip = Q;
            }
            beginText() {
              this.current.textMatrix = n.IDENTITY_MATRIX, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
            }
            endText() {
              const e = this.pendingTextPaths, l = this.ctx;
              if (e === void 0) {
                l.beginPath();
                return;
              }
              l.save(), l.beginPath();
              for (const i of e)
                l.setTransform(...i.transform), l.translate(i.x, i.y), i.addToPath(l, i.fontSize);
              l.restore(), l.clip(), l.beginPath(), delete this.pendingTextPaths;
            }
            setCharSpacing(e) {
              this.current.charSpacing = e;
            }
            setWordSpacing(e) {
              this.current.wordSpacing = e;
            }
            setHScale(e) {
              this.current.textHScale = e / 100;
            }
            setLeading(e) {
              this.current.leading = -e;
            }
            setFont(e, l) {
              var nt;
              const i = this.commonObjs.get(e), c = this.current;
              if (!i)
                throw new Error(`Can't find font for ${e}`);
              if (c.fontMatrix = i.fontMatrix || n.FONT_IDENTITY_MATRIX, (c.fontMatrix[0] === 0 || c.fontMatrix[3] === 0) && (0, n.warn)("Invalid font matrix for font " + e), l < 0 ? (l = -l, c.fontDirection = -1) : c.fontDirection = 1, this.current.font = i, this.current.fontSize = l, i.isType3Font)
                return;
              const d = i.loadedName || "sans-serif", T = ((nt = i.systemFontInfo) == null ? void 0 : nt.css) || `"${d}", ${i.fallbackName}`;
              let N = "normal";
              i.black ? N = "900" : i.bold && (N = "bold");
              const W = i.italic ? "italic" : "normal";
              let q = l;
              l < X ? q = X : l > b && (q = b), this.current.fontSizeScale = l / q, this.ctx.font = `${W} ${N} ${q}px ${T}`;
            }
            setTextRenderingMode(e) {
              this.current.textRenderingMode = e;
            }
            setTextRise(e) {
              this.current.textRise = e;
            }
            moveText(e, l) {
              this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += l;
            }
            setLeadingMoveText(e, l) {
              this.setLeading(-l), this.moveText(e, l);
            }
            setTextMatrix(e, l, i, c, d, T) {
              this.current.textMatrix = [e, l, i, c, d, T], this.current.textMatrixScale = Math.hypot(e, l), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
            }
            nextLine() {
              this.moveText(0, this.current.leading);
            }
            paintChar(e, l, i, c) {
              const d = this.ctx, T = this.current, N = T.font, W = T.textRenderingMode, q = T.fontSize / T.fontSizeScale, nt = W & n.TextRenderingMode.FILL_STROKE_MASK, ut = !!(W & n.TextRenderingMode.ADD_TO_PATH_FLAG), pt = T.patternFill && !N.missingFile;
              let bt;
              (N.disableFontFace || ut || pt) && (bt = N.getPathGenerator(this.commonObjs, e)), N.disableFontFace || pt ? (d.save(), d.translate(l, i), d.beginPath(), bt(d, q), c && d.setTransform(...c), (nt === n.TextRenderingMode.FILL || nt === n.TextRenderingMode.FILL_STROKE) && d.fill(), (nt === n.TextRenderingMode.STROKE || nt === n.TextRenderingMode.FILL_STROKE) && d.stroke(), d.restore()) : ((nt === n.TextRenderingMode.FILL || nt === n.TextRenderingMode.FILL_STROKE) && d.fillText(e, l, i), (nt === n.TextRenderingMode.STROKE || nt === n.TextRenderingMode.FILL_STROKE) && d.strokeText(e, l, i)), ut && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
                transform: (0, u.getCurrentTransform)(d),
                x: l,
                y: i,
                fontSize: q,
                addToPath: bt
              });
            }
            get isFontSubpixelAAEnabled() {
              const {
                context: e
              } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
              e.scale(1.5, 1), e.fillText("I", 0, 10);
              const l = e.getImageData(0, 0, 10, 10).data;
              let i = !1;
              for (let c = 3; c < l.length; c += 4)
                if (l[c] > 0 && l[c] < 255) {
                  i = !0;
                  break;
                }
              return (0, n.shadow)(this, "isFontSubpixelAAEnabled", i);
            }
            showText(e) {
              const l = this.current, i = l.font;
              if (i.isType3Font)
                return this.showType3Text(e);
              const c = l.fontSize;
              if (c === 0)
                return;
              const d = this.ctx, T = l.fontSizeScale, N = l.charSpacing, W = l.wordSpacing, q = l.fontDirection, nt = l.textHScale * q, ut = e.length, pt = i.vertical, bt = pt ? 1 : -1, ft = i.defaultVMetrics, xt = c * l.fontMatrix[0], It = l.textRenderingMode === n.TextRenderingMode.FILL && !i.disableFontFace && !l.patternFill;
              d.save(), d.transform(...l.textMatrix), d.translate(l.x, l.y + l.textRise), q > 0 ? d.scale(nt, -1) : d.scale(nt, 1);
              let Tt;
              if (l.patternFill) {
                d.save();
                const mt = l.fillColor.getPattern(d, this, (0, u.getCurrentTransformInverse)(d), B.PathType.FILL);
                Tt = (0, u.getCurrentTransform)(d), d.restore(), d.fillStyle = mt;
              }
              let Ot = l.lineWidth;
              const _t = l.textMatrixScale;
              if (_t === 0 || Ot === 0) {
                const mt = l.textRenderingMode & n.TextRenderingMode.FILL_STROKE_MASK;
                (mt === n.TextRenderingMode.STROKE || mt === n.TextRenderingMode.FILL_STROKE) && (Ot = this.getSinglePixelWidth());
              } else
                Ot /= _t;
              if (T !== 1 && (d.scale(T, T), Ot /= T), d.lineWidth = Ot, i.isInvalidPDFjsFont) {
                const mt = [];
                let wt = 0;
                for (const Ct of e)
                  mt.push(Ct.unicode), wt += Ct.width;
                d.fillText(mt.join(""), 0, 0), l.x += wt * xt * nt, d.restore(), this.compose();
                return;
              }
              let at = 0, ot;
              for (ot = 0; ot < ut; ++ot) {
                const mt = e[ot];
                if (typeof mt == "number") {
                  at += bt * mt * c / 1e3;
                  continue;
                }
                let wt = !1;
                const Ct = (mt.isSpace ? W : 0) + N, Ut = mt.fontChar, Vt = mt.accent;
                let Wt, qt, Gt = mt.width;
                if (pt) {
                  const zt = mt.vmetric || ft, gt = -(mt.vmetric ? zt[1] : Gt * 0.5) * xt, rt = zt[2] * xt;
                  Gt = zt ? -zt[0] : Gt, Wt = gt / T, qt = (at + rt) / T;
                } else
                  Wt = at / T, qt = 0;
                if (i.remeasure && Gt > 0) {
                  const zt = d.measureText(Ut).width * 1e3 / c * T;
                  if (Gt < zt && this.isFontSubpixelAAEnabled) {
                    const gt = Gt / zt;
                    wt = !0, d.save(), d.scale(gt, 1), Wt /= gt;
                  } else
                    Gt !== zt && (Wt += (Gt - zt) / 2e3 * c / T);
                }
                if (this.contentVisible && (mt.isInFont || i.missingFile)) {
                  if (It && !Vt)
                    d.fillText(Ut, Wt, qt);
                  else if (this.paintChar(Ut, Wt, qt, Tt), Vt) {
                    const zt = Wt + c * Vt.offset.x / T, gt = qt - c * Vt.offset.y / T;
                    this.paintChar(Vt.fontChar, zt, gt, Tt);
                  }
                }
                const Ht = pt ? Gt * xt - Ct * q : Gt * xt + Ct * q;
                at += Ht, wt && d.restore();
              }
              pt ? l.y -= at : l.x += at * nt, d.restore(), this.compose();
            }
            showType3Text(e) {
              const l = this.ctx, i = this.current, c = i.font, d = i.fontSize, T = i.fontDirection, N = c.vertical ? 1 : -1, W = i.charSpacing, q = i.wordSpacing, nt = i.textHScale * T, ut = i.fontMatrix || n.FONT_IDENTITY_MATRIX, pt = e.length, bt = i.textRenderingMode === n.TextRenderingMode.INVISIBLE;
              let ft, xt, It, Tt;
              if (!(bt || d === 0)) {
                for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, l.save(), l.transform(...i.textMatrix), l.translate(i.x, i.y), l.scale(nt, T), ft = 0; ft < pt; ++ft) {
                  if (xt = e[ft], typeof xt == "number") {
                    Tt = N * xt * d / 1e3, this.ctx.translate(Tt, 0), i.x += Tt * nt;
                    continue;
                  }
                  const Ot = (xt.isSpace ? q : 0) + W, _t = c.charProcOperatorList[xt.operatorListId];
                  if (!_t) {
                    (0, n.warn)(`Type3 character "${xt.operatorListId}" is not available.`);
                    continue;
                  }
                  this.contentVisible && (this.processingType3 = xt, this.save(), l.scale(d, d), l.transform(...ut), this.executeOperatorList(_t), this.restore()), It = n.Util.applyTransform([xt.width, 0], ut)[0] * d + Ot, l.translate(It, 0), i.x += It * nt;
                }
                l.restore(), this.processingType3 = null;
              }
            }
            setCharWidth(e, l) {
            }
            setCharWidthAndBounds(e, l, i, c, d, T) {
              this.ctx.rect(i, c, d - i, T - c), this.ctx.clip(), this.endPath();
            }
            getColorN_Pattern(e) {
              let l;
              if (e[0] === "TilingPattern") {
                const i = e[1], c = this.baseTransform || (0, u.getCurrentTransform)(this.ctx), d = {
                  createCanvasGraphics: (T) => new yt(T, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                    optionalContentConfig: this.optionalContentConfig,
                    markedContentStack: this.markedContentStack
                  })
                };
                l = new B.TilingPattern(e, i, this.ctx, d, c);
              } else
                l = this._getPattern(e[1], e[2]);
              return l;
            }
            setStrokeColorN() {
              this.current.strokeColor = this.getColorN_Pattern(arguments);
            }
            setFillColorN() {
              this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
            }
            setStrokeRGBColor(e, l, i) {
              const c = n.Util.makeHexColor(e, l, i);
              this.ctx.strokeStyle = c, this.current.strokeColor = c;
            }
            setFillRGBColor(e, l, i) {
              const c = n.Util.makeHexColor(e, l, i);
              this.ctx.fillStyle = c, this.current.fillColor = c, this.current.patternFill = !1;
            }
            _getPattern(e, l = null) {
              let i;
              return this.cachedPatterns.has(e) ? i = this.cachedPatterns.get(e) : (i = (0, B.getShadingPattern)(this.getObject(e)), this.cachedPatterns.set(e, i)), l && (i.matrix = l), i;
            }
            shadingFill(e) {
              if (!this.contentVisible)
                return;
              const l = this.ctx;
              this.save();
              const i = this._getPattern(e);
              l.fillStyle = i.getPattern(l, this, (0, u.getCurrentTransformInverse)(l), B.PathType.SHADING);
              const c = (0, u.getCurrentTransformInverse)(l);
              if (c) {
                const {
                  width: d,
                  height: T
                } = l.canvas, [N, W, q, nt] = n.Util.getAxialAlignedBoundingBox([0, 0, d, T], c);
                this.ctx.fillRect(N, W, q - N, nt - W);
              } else
                this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
              this.compose(this.current.getClippedPathBoundingBox()), this.restore();
            }
            beginInlineImage() {
              (0, n.unreachable)("Should not call beginInlineImage");
            }
            beginImageData() {
              (0, n.unreachable)("Should not call beginImageData");
            }
            paintFormXObjectBegin(e, l) {
              if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), Array.isArray(e) && e.length === 6 && this.transform(...e), this.baseTransform = (0, u.getCurrentTransform)(this.ctx), l)) {
                const i = l[2] - l[0], c = l[3] - l[1];
                this.ctx.rect(l[0], l[1], i, c), this.current.updateRectMinMax((0, u.getCurrentTransform)(this.ctx), l), this.clip(), this.endPath();
              }
            }
            paintFormXObjectEnd() {
              this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
            }
            beginGroup(e) {
              if (!this.contentVisible)
                return;
              this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
              const l = this.ctx;
              e.isolated || (0, n.info)("TODO: Support non-isolated groups."), e.knockout && (0, n.warn)("Knockout groups not supported.");
              const i = (0, u.getCurrentTransform)(l);
              if (e.matrix && l.transform(...e.matrix), !e.bbox)
                throw new Error("Bounding box is required.");
              let c = n.Util.getAxialAlignedBoundingBox(e.bbox, (0, u.getCurrentTransform)(l));
              const d = [0, 0, l.canvas.width, l.canvas.height];
              c = n.Util.intersect(c, d) || [0, 0, 0, 0];
              const T = Math.floor(c[0]), N = Math.floor(c[1]);
              let W = Math.max(Math.ceil(c[2]) - T, 1), q = Math.max(Math.ceil(c[3]) - N, 1), nt = 1, ut = 1;
              W > P && (nt = W / P, W = P), q > P && (ut = q / P, q = P), this.current.startNewPathAndClipBox([0, 0, W, q]);
              let pt = "groupAt" + this.groupLevel;
              e.smask && (pt += "_smask_" + this.smaskCounter++ % 2);
              const bt = this.cachedCanvases.getCanvas(pt, W, q), ft = bt.context;
              ft.scale(1 / nt, 1 / ut), ft.translate(-T, -N), ft.transform(...i), e.smask ? this.smaskStack.push({
                canvas: bt.canvas,
                context: ft,
                offsetX: T,
                offsetY: N,
                scaleX: nt,
                scaleY: ut,
                subtype: e.smask.subtype,
                backdrop: e.smask.backdrop,
                transferMap: e.smask.transferMap || null,
                startTransformInverse: null
              }) : (l.setTransform(1, 0, 0, 1, 0, 0), l.translate(T, N), l.scale(nt, ut), l.save()), o(l, ft), this.ctx = ft, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(l), this.groupLevel++;
            }
            endGroup(e) {
              if (!this.contentVisible)
                return;
              this.groupLevel--;
              const l = this.ctx, i = this.groupStack.pop();
              if (this.ctx = i, this.ctx.imageSmoothingEnabled = !1, e.smask)
                this.tempSMask = this.smaskStack.pop(), this.restore();
              else {
                this.ctx.restore();
                const c = (0, u.getCurrentTransform)(this.ctx);
                this.restore(), this.ctx.save(), this.ctx.setTransform(...c);
                const d = n.Util.getAxialAlignedBoundingBox([0, 0, l.canvas.width, l.canvas.height], c);
                this.ctx.drawImage(l.canvas, 0, 0), this.ctx.restore(), this.compose(d);
              }
            }
            beginAnnotation(e, l, i, c, d) {
              if (Z(this, z, Ze).call(this), f(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), Array.isArray(l) && l.length === 4) {
                const T = l[2] - l[0], N = l[3] - l[1];
                if (d && this.annotationCanvasMap) {
                  i = i.slice(), i[4] -= l[0], i[5] -= l[1], l = l.slice(), l[0] = l[1] = 0, l[2] = T, l[3] = N;
                  const [W, q] = n.Util.singularValueDecompose2dScale((0, u.getCurrentTransform)(this.ctx)), {
                    viewportScale: nt
                  } = this, ut = Math.ceil(T * this.outputScaleX * nt), pt = Math.ceil(N * this.outputScaleY * nt);
                  this.annotationCanvas = this.canvasFactory.create(ut, pt);
                  const {
                    canvas: bt,
                    context: ft
                  } = this.annotationCanvas;
                  this.annotationCanvasMap.set(e, bt), this.annotationCanvas.savedCtx = this.ctx, this.ctx = ft, this.ctx.save(), this.ctx.setTransform(W, 0, 0, -q, 0, N * q), f(this.ctx);
                } else
                  f(this.ctx), this.ctx.rect(l[0], l[1], T, N), this.ctx.clip(), this.endPath();
              }
              this.current = new D(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...i), this.transform(...c);
            }
            endAnnotation() {
              this.annotationCanvas && (this.ctx.restore(), Z(this, K, tn).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
            }
            paintImageMaskXObject(e) {
              if (!this.contentVisible)
                return;
              const l = e.count;
              e = this.getObject(e.data, e), e.count = l;
              const i = this.ctx, c = this.processingType3;
              if (c && (c.compiled === void 0 && (c.compiled = S(e)), c.compiled)) {
                c.compiled(i);
                return;
              }
              const d = this._createMaskCanvas(e), T = d.canvas;
              i.save(), i.setTransform(1, 0, 0, 1, 0, 0), i.drawImage(T, d.offsetX, d.offsetY), i.restore(), this.compose();
            }
            paintImageMaskXObjectRepeat(e, l, i = 0, c = 0, d, T) {
              if (!this.contentVisible)
                return;
              e = this.getObject(e.data, e);
              const N = this.ctx;
              N.save();
              const W = (0, u.getCurrentTransform)(N);
              N.transform(l, i, c, d, 0, 0);
              const q = this._createMaskCanvas(e);
              N.setTransform(1, 0, 0, 1, q.offsetX - W[4], q.offsetY - W[5]);
              for (let nt = 0, ut = T.length; nt < ut; nt += 2) {
                const pt = n.Util.transform(W, [l, i, c, d, T[nt], T[nt + 1]]), [bt, ft] = n.Util.applyTransform([0, 0], pt);
                N.drawImage(q.canvas, bt, ft);
              }
              N.restore(), this.compose();
            }
            paintImageMaskXObjectGroup(e) {
              if (!this.contentVisible)
                return;
              const l = this.ctx, i = this.current.fillColor, c = this.current.patternFill;
              for (const d of e) {
                const {
                  data: T,
                  width: N,
                  height: W,
                  transform: q
                } = d, nt = this.cachedCanvases.getCanvas("maskCanvas", N, W), ut = nt.context;
                ut.save();
                const pt = this.getObject(T, d);
                A(ut, pt), ut.globalCompositeOperation = "source-in", ut.fillStyle = c ? i.getPattern(ut, this, (0, u.getCurrentTransformInverse)(l), B.PathType.FILL) : i, ut.fillRect(0, 0, N, W), ut.restore(), l.save(), l.transform(...q), l.scale(1, -1), y(l, nt.canvas, 0, 0, N, W, 0, -1, 1, 1), l.restore();
              }
              this.compose();
            }
            paintImageXObject(e) {
              if (!this.contentVisible)
                return;
              const l = this.getObject(e);
              if (!l) {
                (0, n.warn)("Dependent image isn't ready yet");
                return;
              }
              this.paintInlineImageXObject(l);
            }
            paintImageXObjectRepeat(e, l, i, c) {
              if (!this.contentVisible)
                return;
              const d = this.getObject(e);
              if (!d) {
                (0, n.warn)("Dependent image isn't ready yet");
                return;
              }
              const T = d.width, N = d.height, W = [];
              for (let q = 0, nt = c.length; q < nt; q += 2)
                W.push({
                  transform: [l, 0, 0, i, c[q], c[q + 1]],
                  x: 0,
                  y: 0,
                  w: T,
                  h: N
                });
              this.paintInlineImageXObjectGroup(d, W);
            }
            applyTransferMapsToCanvas(e) {
              return this.current.transferMaps !== "none" && (e.filter = this.current.transferMaps, e.drawImage(e.canvas, 0, 0), e.filter = "none"), e.canvas;
            }
            applyTransferMapsToBitmap(e) {
              if (this.current.transferMaps === "none")
                return e.bitmap;
              const {
                bitmap: l,
                width: i,
                height: c
              } = e, d = this.cachedCanvases.getCanvas("inlineImage", i, c), T = d.context;
              return T.filter = this.current.transferMaps, T.drawImage(l, 0, 0), T.filter = "none", d.canvas;
            }
            paintInlineImageXObject(e) {
              if (!this.contentVisible)
                return;
              const l = e.width, i = e.height, c = this.ctx;
              if (this.save(), !n.isNodeJS) {
                const {
                  filter: N
                } = c;
                N !== "none" && N !== "" && (c.filter = "none");
              }
              c.scale(1 / l, -1 / i);
              let d;
              if (e.bitmap)
                d = this.applyTransferMapsToBitmap(e);
              else if (typeof HTMLElement == "function" && e instanceof HTMLElement || !e.data)
                d = e;
              else {
                const W = this.cachedCanvases.getCanvas("inlineImage", l, i).context;
                R(W, e), d = this.applyTransferMapsToCanvas(W);
              }
              const T = this._scaleImage(d, (0, u.getCurrentTransformInverse)(c));
              c.imageSmoothingEnabled = U((0, u.getCurrentTransform)(c), e.interpolate), y(c, T.img, 0, 0, T.paintWidth, T.paintHeight, 0, -i, l, i), this.compose(), this.restore();
            }
            paintInlineImageXObjectGroup(e, l) {
              if (!this.contentVisible)
                return;
              const i = this.ctx;
              let c;
              if (e.bitmap)
                c = e.bitmap;
              else {
                const d = e.width, T = e.height, W = this.cachedCanvases.getCanvas("inlineImage", d, T).context;
                R(W, e), c = this.applyTransferMapsToCanvas(W);
              }
              for (const d of l)
                i.save(), i.transform(...d.transform), i.scale(1, -1), y(i, c, d.x, d.y, d.w, d.h, 0, -1, 1, 1), i.restore();
              this.compose();
            }
            paintSolidColorImageMask() {
              this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
            }
            markPoint(e) {
            }
            markPointProps(e, l) {
            }
            beginMarkedContent(e) {
              this.markedContentStack.push({
                visible: !0
              });
            }
            beginMarkedContentProps(e, l) {
              e === "OC" ? this.markedContentStack.push({
                visible: this.optionalContentConfig.isVisible(l)
              }) : this.markedContentStack.push({
                visible: !0
              }), this.contentVisible = this.isContentVisible();
            }
            endMarkedContent() {
              this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
            }
            beginCompat() {
            }
            endCompat() {
            }
            consumePath(e) {
              const l = this.current.isEmptyClip();
              this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(e);
              const i = this.ctx;
              this.pendingClip && (l || (this.pendingClip === Q ? i.clip("evenodd") : i.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), i.beginPath();
            }
            getSinglePixelWidth() {
              if (!this._cachedGetSinglePixelWidth) {
                const e = (0, u.getCurrentTransform)(this.ctx);
                if (e[1] === 0 && e[2] === 0)
                  this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(e[0]), Math.abs(e[3]));
                else {
                  const l = Math.abs(e[0] * e[3] - e[2] * e[1]), i = Math.hypot(e[0], e[2]), c = Math.hypot(e[1], e[3]);
                  this._cachedGetSinglePixelWidth = Math.max(i, c) / l;
                }
              }
              return this._cachedGetSinglePixelWidth;
            }
            getScaleForStroking() {
              if (this._cachedScaleForStroking[0] === -1) {
                const {
                  lineWidth: e
                } = this.current, {
                  a: l,
                  b: i,
                  c,
                  d
                } = this.ctx.getTransform();
                let T, N;
                if (i === 0 && c === 0) {
                  const W = Math.abs(l), q = Math.abs(d);
                  if (W === q)
                    if (e === 0)
                      T = N = 1 / W;
                    else {
                      const nt = W * e;
                      T = N = nt < 1 ? 1 / nt : 1;
                    }
                  else if (e === 0)
                    T = 1 / W, N = 1 / q;
                  else {
                    const nt = W * e, ut = q * e;
                    T = nt < 1 ? 1 / nt : 1, N = ut < 1 ? 1 / ut : 1;
                  }
                } else {
                  const W = Math.abs(l * d - i * c), q = Math.hypot(l, i), nt = Math.hypot(c, d);
                  if (e === 0)
                    T = nt / W, N = q / W;
                  else {
                    const ut = e * W;
                    T = nt > ut ? nt / ut : 1, N = q > ut ? q / ut : 1;
                  }
                }
                this._cachedScaleForStroking[0] = T, this._cachedScaleForStroking[1] = N;
              }
              return this._cachedScaleForStroking;
            }
            rescaleAndStroke(e) {
              const {
                ctx: l
              } = this, {
                lineWidth: i
              } = this.current, [c, d] = this.getScaleForStroking();
              if (l.lineWidth = i || 1, c === 1 && d === 1) {
                l.stroke();
                return;
              }
              const T = l.getLineDash();
              if (e && l.save(), l.scale(c, d), T.length > 0) {
                const N = Math.max(c, d);
                l.setLineDash(T.map((W) => W / N)), l.lineDashOffset /= N;
              }
              l.stroke(), e && l.restore();
            }
            isContentVisible() {
              for (let e = this.markedContentStack.length - 1; e >= 0; e--)
                if (!this.markedContentStack[e].visible)
                  return !1;
              return !0;
            }
          };
          z = new WeakSet(), Ze = function() {
            for (; this.stateStack.length || this.inSMaskMode; )
              this.restore();
            this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
          }, K = new WeakSet(), tn = function() {
            if (this.pageColors) {
              const e = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
              if (e !== "none") {
                const l = this.ctx.filter;
                this.ctx.filter = e, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = l;
              }
            }
          };
          let it = yt;
          s.CanvasGraphics = it;
          for (const E in n.OPS)
            it.prototype[E] !== void 0 && (it.prototype[n.OPS[E]] = it.prototype[E]);
        },
        /* 12 */
        /***/
        (C, s, O) => {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.TilingPattern = s.PathType = void 0, s.getShadingPattern = k;
          var n = O(1), u = O(6);
          const B = {
            FILL: "Fill",
            STROKE: "Stroke",
            SHADING: "Shading"
          };
          s.PathType = B;
          function L(S, D) {
            if (!D)
              return;
            const R = D[2] - D[0], A = D[3] - D[1], o = new Path2D();
            o.rect(D[0], D[1], R, A), S.clip(o);
          }
          class X {
            constructor() {
              this.constructor === X && (0, n.unreachable)("Cannot initialize BaseShadingPattern.");
            }
            getPattern() {
              (0, n.unreachable)("Abstract method `getPattern` called.");
            }
          }
          class b extends X {
            constructor(D) {
              super(), this._type = D[1], this._bbox = D[2], this._colorStops = D[3], this._p0 = D[4], this._p1 = D[5], this._r0 = D[6], this._r1 = D[7], this.matrix = null;
            }
            _createGradient(D) {
              let R;
              this._type === "axial" ? R = D.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (R = D.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
              for (const A of this._colorStops)
                R.addColorStop(A[0], A[1]);
              return R;
            }
            getPattern(D, R, A, o) {
              let f;
              if (o === B.STROKE || o === B.FILL) {
                const j = R.current.getClippedPathBoundingBox(o, (0, u.getCurrentTransform)(D)) || [0, 0, 0, 0], v = Math.ceil(j[2] - j[0]) || 1, h = Math.ceil(j[3] - j[1]) || 1, I = R.cachedCanvases.getCanvas("pattern", v, h, !0), g = I.context;
                g.clearRect(0, 0, g.canvas.width, g.canvas.height), g.beginPath(), g.rect(0, 0, g.canvas.width, g.canvas.height), g.translate(-j[0], -j[1]), A = n.Util.transform(A, [1, 0, 0, 1, j[0], j[1]]), g.transform(...R.baseTransform), this.matrix && g.transform(...this.matrix), L(g, this._bbox), g.fillStyle = this._createGradient(g), g.fill(), f = D.createPattern(I.canvas, "no-repeat");
                const U = new DOMMatrix(A);
                f.setTransform(U);
              } else
                L(D, this._bbox), f = this._createGradient(D);
              return f;
            }
          }
          function P(S, D, R, A, o, f, j, v) {
            const h = D.coords, I = D.colors, g = S.data, U = S.width * 4;
            let G;
            h[R + 1] > h[A + 1] && (G = R, R = A, A = G, G = f, f = j, j = G), h[A + 1] > h[o + 1] && (G = A, A = o, o = G, G = j, j = v, v = G), h[R + 1] > h[A + 1] && (G = R, R = A, A = G, G = f, f = j, j = G);
            const m = (h[R] + D.offsetX) * D.scaleX, Y = (h[R + 1] + D.offsetY) * D.scaleY, Q = (h[A] + D.offsetX) * D.scaleX, it = (h[A + 1] + D.offsetY) * D.scaleY, z = (h[o] + D.offsetX) * D.scaleX, lt = (h[o + 1] + D.offsetY) * D.scaleY;
            if (Y >= lt)
              return;
            const K = I[f], ht = I[f + 1], yt = I[f + 2], E = I[j], e = I[j + 1], l = I[j + 2], i = I[v], c = I[v + 1], d = I[v + 2], T = Math.round(Y), N = Math.round(lt);
            let W, q, nt, ut, pt, bt, ft, xt;
            for (let It = T; It <= N; It++) {
              if (It < it) {
                const ot = It < Y ? 0 : (Y - It) / (Y - it);
                W = m - (m - Q) * ot, q = K - (K - E) * ot, nt = ht - (ht - e) * ot, ut = yt - (yt - l) * ot;
              } else {
                let ot;
                It > lt ? ot = 1 : it === lt ? ot = 0 : ot = (it - It) / (it - lt), W = Q - (Q - z) * ot, q = E - (E - i) * ot, nt = e - (e - c) * ot, ut = l - (l - d) * ot;
              }
              let Tt;
              It < Y ? Tt = 0 : It > lt ? Tt = 1 : Tt = (Y - It) / (Y - lt), pt = m - (m - z) * Tt, bt = K - (K - i) * Tt, ft = ht - (ht - c) * Tt, xt = yt - (yt - d) * Tt;
              const Ot = Math.round(Math.min(W, pt)), _t = Math.round(Math.max(W, pt));
              let at = U * It + Ot * 4;
              for (let ot = Ot; ot <= _t; ot++)
                Tt = (W - ot) / (W - pt), Tt < 0 ? Tt = 0 : Tt > 1 && (Tt = 1), g[at++] = q - (q - bt) * Tt | 0, g[at++] = nt - (nt - ft) * Tt | 0, g[at++] = ut - (ut - xt) * Tt | 0, g[at++] = 255;
            }
          }
          function p(S, D, R) {
            const A = D.coords, o = D.colors;
            let f, j;
            switch (D.type) {
              case "lattice":
                const v = D.verticesPerRow, h = Math.floor(A.length / v) - 1, I = v - 1;
                for (f = 0; f < h; f++) {
                  let g = f * v;
                  for (let U = 0; U < I; U++, g++)
                    P(S, R, A[g], A[g + 1], A[g + v], o[g], o[g + 1], o[g + v]), P(S, R, A[g + v + 1], A[g + 1], A[g + v], o[g + v + 1], o[g + 1], o[g + v]);
                }
                break;
              case "triangles":
                for (f = 0, j = A.length; f < j; f += 3)
                  P(S, R, A[f], A[f + 1], A[f + 2], o[f], o[f + 1], o[f + 2]);
                break;
              default:
                throw new Error("illegal figure");
            }
          }
          class F extends X {
            constructor(D) {
              super(), this._coords = D[2], this._colors = D[3], this._figures = D[4], this._bounds = D[5], this._bbox = D[7], this._background = D[8], this.matrix = null;
            }
            _createMeshCanvas(D, R, A) {
              const v = Math.floor(this._bounds[0]), h = Math.floor(this._bounds[1]), I = Math.ceil(this._bounds[2]) - v, g = Math.ceil(this._bounds[3]) - h, U = Math.min(Math.ceil(Math.abs(I * D[0] * 1.1)), 3e3), G = Math.min(Math.ceil(Math.abs(g * D[1] * 1.1)), 3e3), m = I / U, Y = g / G, Q = {
                coords: this._coords,
                colors: this._colors,
                offsetX: -v,
                offsetY: -h,
                scaleX: 1 / m,
                scaleY: 1 / Y
              }, it = U + 2 * 2, z = G + 2 * 2, lt = A.getCanvas("mesh", it, z, !1), K = lt.context, ht = K.createImageData(U, G);
              if (R) {
                const E = ht.data;
                for (let e = 0, l = E.length; e < l; e += 4)
                  E[e] = R[0], E[e + 1] = R[1], E[e + 2] = R[2], E[e + 3] = 255;
              }
              for (const E of this._figures)
                p(ht, E, Q);
              return K.putImageData(ht, 2, 2), {
                canvas: lt.canvas,
                offsetX: v - 2 * m,
                offsetY: h - 2 * Y,
                scaleX: m,
                scaleY: Y
              };
            }
            getPattern(D, R, A, o) {
              L(D, this._bbox);
              let f;
              if (o === B.SHADING)
                f = n.Util.singularValueDecompose2dScale((0, u.getCurrentTransform)(D));
              else if (f = n.Util.singularValueDecompose2dScale(R.baseTransform), this.matrix) {
                const v = n.Util.singularValueDecompose2dScale(this.matrix);
                f = [f[0] * v[0], f[1] * v[1]];
              }
              const j = this._createMeshCanvas(f, o === B.SHADING ? null : this._background, R.cachedCanvases);
              return o !== B.SHADING && (D.setTransform(...R.baseTransform), this.matrix && D.transform(...this.matrix)), D.translate(j.offsetX, j.offsetY), D.scale(j.scaleX, j.scaleY), D.createPattern(j.canvas, "no-repeat");
            }
          }
          class M extends X {
            getPattern() {
              return "hotpink";
            }
          }
          function k(S) {
            switch (S[0]) {
              case "RadialAxial":
                return new b(S);
              case "Mesh":
                return new F(S);
              case "Dummy":
                return new M();
            }
            throw new Error(`Unknown IR type: ${S[0]}`);
          }
          const w = {
            COLORED: 1,
            UNCOLORED: 2
          }, y = class y {
            constructor(D, R, A, o, f) {
              this.operatorList = D[2], this.matrix = D[3] || [1, 0, 0, 1, 0, 0], this.bbox = D[4], this.xstep = D[5], this.ystep = D[6], this.paintType = D[7], this.tilingType = D[8], this.color = R, this.ctx = A, this.canvasGraphicsFactory = o, this.baseTransform = f;
            }
            createPatternCanvas(D) {
              const R = this.operatorList, A = this.bbox, o = this.xstep, f = this.ystep, j = this.paintType, v = this.tilingType, h = this.color, I = this.canvasGraphicsFactory;
              (0, n.info)("TilingType: " + v);
              const g = A[0], U = A[1], G = A[2], m = A[3], Y = n.Util.singularValueDecompose2dScale(this.matrix), Q = n.Util.singularValueDecompose2dScale(this.baseTransform), it = [Y[0] * Q[0], Y[1] * Q[1]], z = this.getSizeAndScale(o, this.ctx.canvas.width, it[0]), lt = this.getSizeAndScale(f, this.ctx.canvas.height, it[1]), K = D.cachedCanvases.getCanvas("pattern", z.size, lt.size, !0), ht = K.context, yt = I.createCanvasGraphics(ht);
              yt.groupLevel = D.groupLevel, this.setFillAndStrokeStyleToContext(yt, j, h);
              let E = g, e = U, l = G, i = m;
              return g < 0 && (E = 0, l += Math.abs(g)), U < 0 && (e = 0, i += Math.abs(U)), ht.translate(-(z.scale * E), -(lt.scale * e)), yt.transform(z.scale, 0, 0, lt.scale, 0, 0), ht.save(), this.clipBbox(yt, E, e, l, i), yt.baseTransform = (0, u.getCurrentTransform)(yt.ctx), yt.executeOperatorList(R), yt.endDrawing(), {
                canvas: K.canvas,
                scaleX: z.scale,
                scaleY: lt.scale,
                offsetX: E,
                offsetY: e
              };
            }
            getSizeAndScale(D, R, A) {
              D = Math.abs(D);
              const o = Math.max(y.MAX_PATTERN_SIZE, R);
              let f = Math.ceil(D * A);
              return f >= o ? f = o : A = f / D, {
                scale: A,
                size: f
              };
            }
            clipBbox(D, R, A, o, f) {
              const j = o - R, v = f - A;
              D.ctx.rect(R, A, j, v), D.current.updateRectMinMax((0, u.getCurrentTransform)(D.ctx), [R, A, o, f]), D.clip(), D.endPath();
            }
            setFillAndStrokeStyleToContext(D, R, A) {
              const o = D.ctx, f = D.current;
              switch (R) {
                case w.COLORED:
                  const j = this.ctx;
                  o.fillStyle = j.fillStyle, o.strokeStyle = j.strokeStyle, f.fillColor = j.fillStyle, f.strokeColor = j.strokeStyle;
                  break;
                case w.UNCOLORED:
                  const v = n.Util.makeHexColor(A[0], A[1], A[2]);
                  o.fillStyle = v, o.strokeStyle = v, f.fillColor = v, f.strokeColor = v;
                  break;
                default:
                  throw new n.FormatError(`Unsupported paint type: ${R}`);
              }
            }
            getPattern(D, R, A, o) {
              let f = A;
              o !== B.SHADING && (f = n.Util.transform(f, R.baseTransform), this.matrix && (f = n.Util.transform(f, this.matrix)));
              const j = this.createPatternCanvas(R);
              let v = new DOMMatrix(f);
              v = v.translate(j.offsetX, j.offsetY), v = v.scale(1 / j.scaleX, 1 / j.scaleY);
              const h = D.createPattern(j.canvas, "repeat");
              return h.setTransform(v), h;
            }
          };
          ne(y, "MAX_PATTERN_SIZE", 3e3);
          let _ = y;
          s.TilingPattern = _;
        },
        /* 13 */
        /***/
        (C, s, O) => {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.convertBlackAndWhiteToRGBA = B, s.convertToRGBA = u, s.grayToRGBA = X;
          var n = O(1);
          function u(b) {
            switch (b.kind) {
              case n.ImageKind.GRAYSCALE_1BPP:
                return B(b);
              case n.ImageKind.RGB_24BPP:
                return L(b);
            }
            return null;
          }
          function B({
            src: b,
            srcPos: P = 0,
            dest: p,
            width: F,
            height: M,
            nonBlackColor: k = 4294967295,
            inverseDecode: w = !1
          }) {
            const _ = n.FeatureTest.isLittleEndian ? 4278190080 : 255, [y, S] = w ? [k, _] : [_, k], D = F >> 3, R = F & 7, A = b.length;
            p = new Uint32Array(p.buffer);
            let o = 0;
            for (let f = 0; f < M; f++) {
              for (const v = P + D; P < v; P++) {
                const h = P < A ? b[P] : 255;
                p[o++] = h & 128 ? S : y, p[o++] = h & 64 ? S : y, p[o++] = h & 32 ? S : y, p[o++] = h & 16 ? S : y, p[o++] = h & 8 ? S : y, p[o++] = h & 4 ? S : y, p[o++] = h & 2 ? S : y, p[o++] = h & 1 ? S : y;
              }
              if (R === 0)
                continue;
              const j = P < A ? b[P++] : 255;
              for (let v = 0; v < R; v++)
                p[o++] = j & 1 << 7 - v ? S : y;
            }
            return {
              srcPos: P,
              destPos: o
            };
          }
          function L({
            src: b,
            srcPos: P = 0,
            dest: p,
            destPos: F = 0,
            width: M,
            height: k
          }) {
            let w = 0;
            const _ = b.length >> 2, y = new Uint32Array(b.buffer, P, _);
            if (n.FeatureTest.isLittleEndian) {
              for (; w < _ - 2; w += 3, F += 4) {
                const S = y[w], D = y[w + 1], R = y[w + 2];
                p[F] = S | 4278190080, p[F + 1] = S >>> 24 | D << 8 | 4278190080, p[F + 2] = D >>> 16 | R << 16 | 4278190080, p[F + 3] = R >>> 8 | 4278190080;
              }
              for (let S = w * 4, D = b.length; S < D; S += 3)
                p[F++] = b[S] | b[S + 1] << 8 | b[S + 2] << 16 | 4278190080;
            } else {
              for (; w < _ - 2; w += 3, F += 4) {
                const S = y[w], D = y[w + 1], R = y[w + 2];
                p[F] = S | 255, p[F + 1] = S << 24 | D >>> 8 | 255, p[F + 2] = D << 16 | R >>> 16 | 255, p[F + 3] = R << 8 | 255;
              }
              for (let S = w * 4, D = b.length; S < D; S += 3)
                p[F++] = b[S] << 24 | b[S + 1] << 16 | b[S + 2] << 8 | 255;
            }
            return {
              srcPos: P,
              destPos: F
            };
          }
          function X(b, P) {
            if (n.FeatureTest.isLittleEndian)
              for (let p = 0, F = b.length; p < F; p++)
                P[p] = b[p] * 65793 | 4278190080;
            else
              for (let p = 0, F = b.length; p < F; p++)
                P[p] = b[p] * 16843008 | 255;
          }
        },
        /* 14 */
        /***/
        (C, s) => {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.GlobalWorkerOptions = void 0;
          const O = /* @__PURE__ */ Object.create(null);
          s.GlobalWorkerOptions = O, O.workerPort = null, O.workerSrc = "";
        },
        /* 15 */
        /***/
        (C, s, O) => {
          var b, kn, p, Mn, M, Re;
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.MessageHandler = void 0;
          var n = O(1);
          const u = {
            UNKNOWN: 0,
            DATA: 1,
            ERROR: 2
          }, B = {
            UNKNOWN: 0,
            CANCEL: 1,
            CANCEL_COMPLETE: 2,
            CLOSE: 3,
            ENQUEUE: 4,
            ERROR: 5,
            PULL: 6,
            PULL_COMPLETE: 7,
            START_COMPLETE: 8
          };
          function L(w) {
            switch (w instanceof Error || typeof w == "object" && w !== null || (0, n.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), w.name) {
              case "AbortException":
                return new n.AbortException(w.message);
              case "MissingPDFException":
                return new n.MissingPDFException(w.message);
              case "PasswordException":
                return new n.PasswordException(w.message, w.code);
              case "UnexpectedResponseException":
                return new n.UnexpectedResponseException(w.message, w.status);
              case "UnknownErrorException":
                return new n.UnknownErrorException(w.message, w.details);
              default:
                return new n.UnknownErrorException(w.message, w.toString());
            }
          }
          class X {
            constructor(_, y, S) {
              V(this, b);
              V(this, p);
              V(this, M);
              this.sourceName = _, this.targetName = y, this.comObj = S, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (D) => {
                const R = D.data;
                if (R.targetName !== this.sourceName)
                  return;
                if (R.stream) {
                  Z(this, p, Mn).call(this, R);
                  return;
                }
                if (R.callback) {
                  const o = R.callbackId, f = this.callbackCapabilities[o];
                  if (!f)
                    throw new Error(`Cannot resolve callback ${o}`);
                  if (delete this.callbackCapabilities[o], R.callback === u.DATA)
                    f.resolve(R.data);
                  else if (R.callback === u.ERROR)
                    f.reject(L(R.reason));
                  else
                    throw new Error("Unexpected callback case");
                  return;
                }
                const A = this.actionHandler[R.action];
                if (!A)
                  throw new Error(`Unknown action from worker: ${R.action}`);
                if (R.callbackId) {
                  const o = this.sourceName, f = R.sourceName;
                  new Promise(function(j) {
                    j(A(R.data));
                  }).then(function(j) {
                    S.postMessage({
                      sourceName: o,
                      targetName: f,
                      callback: u.DATA,
                      callbackId: R.callbackId,
                      data: j
                    });
                  }, function(j) {
                    S.postMessage({
                      sourceName: o,
                      targetName: f,
                      callback: u.ERROR,
                      callbackId: R.callbackId,
                      reason: L(j)
                    });
                  });
                  return;
                }
                if (R.streamId) {
                  Z(this, b, kn).call(this, R);
                  return;
                }
                A(R.data);
              }, S.addEventListener("message", this._onComObjOnMessage);
            }
            on(_, y) {
              const S = this.actionHandler;
              if (S[_])
                throw new Error(`There is already an actionName called "${_}"`);
              S[_] = y;
            }
            send(_, y, S) {
              this.comObj.postMessage({
                sourceName: this.sourceName,
                targetName: this.targetName,
                action: _,
                data: y
              }, S);
            }
            sendWithPromise(_, y, S) {
              const D = this.callbackId++, R = new n.PromiseCapability();
              this.callbackCapabilities[D] = R;
              try {
                this.comObj.postMessage({
                  sourceName: this.sourceName,
                  targetName: this.targetName,
                  action: _,
                  callbackId: D,
                  data: y
                }, S);
              } catch (A) {
                R.reject(A);
              }
              return R.promise;
            }
            sendWithStream(_, y, S, D) {
              const R = this.streamId++, A = this.sourceName, o = this.targetName, f = this.comObj;
              return new ReadableStream({
                start: (j) => {
                  const v = new n.PromiseCapability();
                  return this.streamControllers[R] = {
                    controller: j,
                    startCall: v,
                    pullCall: null,
                    cancelCall: null,
                    isClosed: !1
                  }, f.postMessage({
                    sourceName: A,
                    targetName: o,
                    action: _,
                    streamId: R,
                    data: y,
                    desiredSize: j.desiredSize
                  }, D), v.promise;
                },
                pull: (j) => {
                  const v = new n.PromiseCapability();
                  return this.streamControllers[R].pullCall = v, f.postMessage({
                    sourceName: A,
                    targetName: o,
                    stream: B.PULL,
                    streamId: R,
                    desiredSize: j.desiredSize
                  }), v.promise;
                },
                cancel: (j) => {
                  (0, n.assert)(j instanceof Error, "cancel must have a valid reason");
                  const v = new n.PromiseCapability();
                  return this.streamControllers[R].cancelCall = v, this.streamControllers[R].isClosed = !0, f.postMessage({
                    sourceName: A,
                    targetName: o,
                    stream: B.CANCEL,
                    streamId: R,
                    reason: L(j)
                  }), v.promise;
                }
              }, S);
            }
            destroy() {
              this.comObj.removeEventListener("message", this._onComObjOnMessage);
            }
          }
          b = new WeakSet(), kn = function(_) {
            const y = _.streamId, S = this.sourceName, D = _.sourceName, R = this.comObj, A = this, o = this.actionHandler[_.action], f = {
              enqueue(j, v = 1, h) {
                if (this.isCancelled)
                  return;
                const I = this.desiredSize;
                this.desiredSize -= v, I > 0 && this.desiredSize <= 0 && (this.sinkCapability = new n.PromiseCapability(), this.ready = this.sinkCapability.promise), R.postMessage({
                  sourceName: S,
                  targetName: D,
                  stream: B.ENQUEUE,
                  streamId: y,
                  chunk: j
                }, h);
              },
              close() {
                this.isCancelled || (this.isCancelled = !0, R.postMessage({
                  sourceName: S,
                  targetName: D,
                  stream: B.CLOSE,
                  streamId: y
                }), delete A.streamSinks[y]);
              },
              error(j) {
                (0, n.assert)(j instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, R.postMessage({
                  sourceName: S,
                  targetName: D,
                  stream: B.ERROR,
                  streamId: y,
                  reason: L(j)
                }));
              },
              sinkCapability: new n.PromiseCapability(),
              onPull: null,
              onCancel: null,
              isCancelled: !1,
              desiredSize: _.desiredSize,
              ready: null
            };
            f.sinkCapability.resolve(), f.ready = f.sinkCapability.promise, this.streamSinks[y] = f, new Promise(function(j) {
              j(o(_.data, f));
            }).then(function() {
              R.postMessage({
                sourceName: S,
                targetName: D,
                stream: B.START_COMPLETE,
                streamId: y,
                success: !0
              });
            }, function(j) {
              R.postMessage({
                sourceName: S,
                targetName: D,
                stream: B.START_COMPLETE,
                streamId: y,
                reason: L(j)
              });
            });
          }, p = new WeakSet(), Mn = function(_) {
            const y = _.streamId, S = this.sourceName, D = _.sourceName, R = this.comObj, A = this.streamControllers[y], o = this.streamSinks[y];
            switch (_.stream) {
              case B.START_COMPLETE:
                _.success ? A.startCall.resolve() : A.startCall.reject(L(_.reason));
                break;
              case B.PULL_COMPLETE:
                _.success ? A.pullCall.resolve() : A.pullCall.reject(L(_.reason));
                break;
              case B.PULL:
                if (!o) {
                  R.postMessage({
                    sourceName: S,
                    targetName: D,
                    stream: B.PULL_COMPLETE,
                    streamId: y,
                    success: !0
                  });
                  break;
                }
                o.desiredSize <= 0 && _.desiredSize > 0 && o.sinkCapability.resolve(), o.desiredSize = _.desiredSize, new Promise(function(f) {
                  var j;
                  f((j = o.onPull) == null ? void 0 : j.call(o));
                }).then(function() {
                  R.postMessage({
                    sourceName: S,
                    targetName: D,
                    stream: B.PULL_COMPLETE,
                    streamId: y,
                    success: !0
                  });
                }, function(f) {
                  R.postMessage({
                    sourceName: S,
                    targetName: D,
                    stream: B.PULL_COMPLETE,
                    streamId: y,
                    reason: L(f)
                  });
                });
                break;
              case B.ENQUEUE:
                if ((0, n.assert)(A, "enqueue should have stream controller"), A.isClosed)
                  break;
                A.controller.enqueue(_.chunk);
                break;
              case B.CLOSE:
                if ((0, n.assert)(A, "close should have stream controller"), A.isClosed)
                  break;
                A.isClosed = !0, A.controller.close(), Z(this, M, Re).call(this, A, y);
                break;
              case B.ERROR:
                (0, n.assert)(A, "error should have stream controller"), A.controller.error(L(_.reason)), Z(this, M, Re).call(this, A, y);
                break;
              case B.CANCEL_COMPLETE:
                _.success ? A.cancelCall.resolve() : A.cancelCall.reject(L(_.reason)), Z(this, M, Re).call(this, A, y);
                break;
              case B.CANCEL:
                if (!o)
                  break;
                new Promise(function(f) {
                  var j;
                  f((j = o.onCancel) == null ? void 0 : j.call(o, L(_.reason)));
                }).then(function() {
                  R.postMessage({
                    sourceName: S,
                    targetName: D,
                    stream: B.CANCEL_COMPLETE,
                    streamId: y,
                    success: !0
                  });
                }, function(f) {
                  R.postMessage({
                    sourceName: S,
                    targetName: D,
                    stream: B.CANCEL_COMPLETE,
                    streamId: y,
                    reason: L(f)
                  });
                }), o.sinkCapability.reject(L(_.reason)), o.isCancelled = !0, delete this.streamSinks[y];
                break;
              default:
                throw new Error("Unexpected stream case");
            }
          }, M = new WeakSet(), Re = async function(_, y) {
            var S, D, R;
            await Promise.allSettled([(S = _.startCall) == null ? void 0 : S.promise, (D = _.pullCall) == null ? void 0 : D.promise, (R = _.cancelCall) == null ? void 0 : R.promise]), delete this.streamControllers[y];
          }, s.MessageHandler = X;
        },
        /* 16 */
        /***/
        (C, s, O) => {
          var B, L;
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.Metadata = void 0;
          var n = O(1);
          class u {
            constructor({
              parsedData: b,
              rawData: P
            }) {
              V(this, B, void 0);
              V(this, L, void 0);
              ct(this, B, b), ct(this, L, P);
            }
            getRaw() {
              return t(this, L);
            }
            get(b) {
              return t(this, B).get(b) ?? null;
            }
            getAll() {
              return (0, n.objectFromMap)(t(this, B));
            }
            has(b) {
              return t(this, B).has(b);
            }
          }
          B = new WeakMap(), L = new WeakMap(), s.Metadata = u;
        },
        /* 17 */
        /***/
        (C, s, O) => {
          var b, P, p, F, M, k, en;
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.OptionalContentConfig = void 0;
          var n = O(1), u = O(8);
          const B = Symbol("INTERNAL");
          class L {
            constructor(y, S) {
              V(this, b, !0);
              this.name = y, this.intent = S;
            }
            get visible() {
              return t(this, b);
            }
            _setVisible(y, S) {
              y !== B && (0, n.unreachable)("Internal method `_setVisible` called."), ct(this, b, S);
            }
          }
          b = new WeakMap();
          class X {
            constructor(y) {
              V(this, k);
              V(this, P, null);
              V(this, p, /* @__PURE__ */ new Map());
              V(this, F, null);
              V(this, M, null);
              if (this.name = null, this.creator = null, y !== null) {
                this.name = y.name, this.creator = y.creator, ct(this, M, y.order);
                for (const S of y.groups)
                  t(this, p).set(S.id, new L(S.name, S.intent));
                if (y.baseState === "OFF")
                  for (const S of t(this, p).values())
                    S._setVisible(B, !1);
                for (const S of y.on)
                  t(this, p).get(S)._setVisible(B, !0);
                for (const S of y.off)
                  t(this, p).get(S)._setVisible(B, !1);
                ct(this, F, this.getHash());
              }
            }
            isVisible(y) {
              if (t(this, p).size === 0)
                return !0;
              if (!y)
                return (0, n.warn)("Optional content group not defined."), !0;
              if (y.type === "OCG")
                return t(this, p).has(y.id) ? t(this, p).get(y.id).visible : ((0, n.warn)(`Optional content group not found: ${y.id}`), !0);
              if (y.type === "OCMD") {
                if (y.expression)
                  return Z(this, k, en).call(this, y.expression);
                if (!y.policy || y.policy === "AnyOn") {
                  for (const S of y.ids) {
                    if (!t(this, p).has(S))
                      return (0, n.warn)(`Optional content group not found: ${S}`), !0;
                    if (t(this, p).get(S).visible)
                      return !0;
                  }
                  return !1;
                } else if (y.policy === "AllOn") {
                  for (const S of y.ids) {
                    if (!t(this, p).has(S))
                      return (0, n.warn)(`Optional content group not found: ${S}`), !0;
                    if (!t(this, p).get(S).visible)
                      return !1;
                  }
                  return !0;
                } else if (y.policy === "AnyOff") {
                  for (const S of y.ids) {
                    if (!t(this, p).has(S))
                      return (0, n.warn)(`Optional content group not found: ${S}`), !0;
                    if (!t(this, p).get(S).visible)
                      return !0;
                  }
                  return !1;
                } else if (y.policy === "AllOff") {
                  for (const S of y.ids) {
                    if (!t(this, p).has(S))
                      return (0, n.warn)(`Optional content group not found: ${S}`), !0;
                    if (t(this, p).get(S).visible)
                      return !1;
                  }
                  return !0;
                }
                return (0, n.warn)(`Unknown optional content policy ${y.policy}.`), !0;
              }
              return (0, n.warn)(`Unknown group type ${y.type}.`), !0;
            }
            setVisibility(y, S = !0) {
              if (!t(this, p).has(y)) {
                (0, n.warn)(`Optional content group not found: ${y}`);
                return;
              }
              t(this, p).get(y)._setVisible(B, !!S), ct(this, P, null);
            }
            get hasInitialVisibility() {
              return t(this, F) === null || this.getHash() === t(this, F);
            }
            getOrder() {
              return t(this, p).size ? t(this, M) ? t(this, M).slice() : [...t(this, p).keys()] : null;
            }
            getGroups() {
              return t(this, p).size > 0 ? (0, n.objectFromMap)(t(this, p)) : null;
            }
            getGroup(y) {
              return t(this, p).get(y) || null;
            }
            getHash() {
              if (t(this, P) !== null)
                return t(this, P);
              const y = new u.MurmurHash3_64();
              for (const [S, D] of t(this, p))
                y.update(`${S}:${D.visible}`);
              return ct(this, P, y.hexdigest());
            }
          }
          P = new WeakMap(), p = new WeakMap(), F = new WeakMap(), M = new WeakMap(), k = new WeakSet(), en = function(y) {
            const S = y.length;
            if (S < 2)
              return !0;
            const D = y[0];
            for (let R = 1; R < S; R++) {
              const A = y[R];
              let o;
              if (Array.isArray(A))
                o = Z(this, k, en).call(this, A);
              else if (t(this, p).has(A))
                o = t(this, p).get(A).visible;
              else
                return (0, n.warn)(`Optional content group not found: ${A}`), !0;
              switch (D) {
                case "And":
                  if (!o)
                    return !1;
                  break;
                case "Or":
                  if (o)
                    return !0;
                  break;
                case "Not":
                  return !o;
                default:
                  return !0;
              }
            }
            return D === "And";
          }, s.OptionalContentConfig = X;
        },
        /* 18 */
        /***/
        (C, s, O) => {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.PDFDataTransportStream = void 0;
          var n = O(1), u = O(6);
          class B {
            constructor({
              length: P,
              initialData: p,
              progressiveDone: F = !1,
              contentDispositionFilename: M = null,
              disableRange: k = !1,
              disableStream: w = !1
            }, _) {
              if ((0, n.assert)(_, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'), this._queuedChunks = [], this._progressiveDone = F, this._contentDispositionFilename = M, (p == null ? void 0 : p.length) > 0) {
                const y = p instanceof Uint8Array && p.byteLength === p.buffer.byteLength ? p.buffer : new Uint8Array(p).buffer;
                this._queuedChunks.push(y);
              }
              this._pdfDataRangeTransport = _, this._isStreamingSupported = !w, this._isRangeSupported = !k, this._contentLength = P, this._fullRequestReader = null, this._rangeReaders = [], this._pdfDataRangeTransport.addRangeListener((y, S) => {
                this._onReceiveData({
                  begin: y,
                  chunk: S
                });
              }), this._pdfDataRangeTransport.addProgressListener((y, S) => {
                this._onProgress({
                  loaded: y,
                  total: S
                });
              }), this._pdfDataRangeTransport.addProgressiveReadListener((y) => {
                this._onReceiveData({
                  chunk: y
                });
              }), this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
                this._onProgressiveDone();
              }), this._pdfDataRangeTransport.transportReady();
            }
            _onReceiveData({
              begin: P,
              chunk: p
            }) {
              const F = p instanceof Uint8Array && p.byteLength === p.buffer.byteLength ? p.buffer : new Uint8Array(p).buffer;
              if (P === void 0)
                this._fullRequestReader ? this._fullRequestReader._enqueue(F) : this._queuedChunks.push(F);
              else {
                const M = this._rangeReaders.some(function(k) {
                  return k._begin !== P ? !1 : (k._enqueue(F), !0);
                });
                (0, n.assert)(M, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
              }
            }
            get _progressiveDataLength() {
              var P;
              return ((P = this._fullRequestReader) == null ? void 0 : P._loaded) ?? 0;
            }
            _onProgress(P) {
              var p, F, M, k;
              P.total === void 0 ? (F = (p = this._rangeReaders[0]) == null ? void 0 : p.onProgress) == null || F.call(p, {
                loaded: P.loaded
              }) : (k = (M = this._fullRequestReader) == null ? void 0 : M.onProgress) == null || k.call(M, {
                loaded: P.loaded,
                total: P.total
              });
            }
            _onProgressiveDone() {
              var P;
              (P = this._fullRequestReader) == null || P.progressiveDone(), this._progressiveDone = !0;
            }
            _removeRangeReader(P) {
              const p = this._rangeReaders.indexOf(P);
              p >= 0 && this._rangeReaders.splice(p, 1);
            }
            getFullReader() {
              (0, n.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
              const P = this._queuedChunks;
              return this._queuedChunks = null, new L(this, P, this._progressiveDone, this._contentDispositionFilename);
            }
            getRangeReader(P, p) {
              if (p <= this._progressiveDataLength)
                return null;
              const F = new X(this, P, p);
              return this._pdfDataRangeTransport.requestDataRange(P, p), this._rangeReaders.push(F), F;
            }
            cancelAllRequests(P) {
              var p;
              (p = this._fullRequestReader) == null || p.cancel(P);
              for (const F of this._rangeReaders.slice(0))
                F.cancel(P);
              this._pdfDataRangeTransport.abort();
            }
          }
          s.PDFDataTransportStream = B;
          class L {
            constructor(P, p, F = !1, M = null) {
              this._stream = P, this._done = F || !1, this._filename = (0, u.isPdfFile)(M) ? M : null, this._queuedChunks = p || [], this._loaded = 0;
              for (const k of this._queuedChunks)
                this._loaded += k.byteLength;
              this._requests = [], this._headersReady = Promise.resolve(), P._fullRequestReader = this, this.onProgress = null;
            }
            _enqueue(P) {
              this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
                value: P,
                done: !1
              }) : this._queuedChunks.push(P), this._loaded += P.byteLength);
            }
            get headersReady() {
              return this._headersReady;
            }
            get filename() {
              return this._filename;
            }
            get isRangeSupported() {
              return this._stream._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._stream._isStreamingSupported;
            }
            get contentLength() {
              return this._stream._contentLength;
            }
            async read() {
              if (this._queuedChunks.length > 0)
                return {
                  value: this._queuedChunks.shift(),
                  done: !1
                };
              if (this._done)
                return {
                  value: void 0,
                  done: !0
                };
              const P = new n.PromiseCapability();
              return this._requests.push(P), P.promise;
            }
            cancel(P) {
              this._done = !0;
              for (const p of this._requests)
                p.resolve({
                  value: void 0,
                  done: !0
                });
              this._requests.length = 0;
            }
            progressiveDone() {
              this._done || (this._done = !0);
            }
          }
          class X {
            constructor(P, p, F) {
              this._stream = P, this._begin = p, this._end = F, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
            }
            _enqueue(P) {
              if (!this._done) {
                if (this._requests.length === 0)
                  this._queuedChunk = P;
                else {
                  this._requests.shift().resolve({
                    value: P,
                    done: !1
                  });
                  for (const F of this._requests)
                    F.resolve({
                      value: void 0,
                      done: !0
                    });
                  this._requests.length = 0;
                }
                this._done = !0, this._stream._removeRangeReader(this);
              }
            }
            get isStreamingSupported() {
              return !1;
            }
            async read() {
              if (this._queuedChunk) {
                const p = this._queuedChunk;
                return this._queuedChunk = null, {
                  value: p,
                  done: !1
                };
              }
              if (this._done)
                return {
                  value: void 0,
                  done: !0
                };
              const P = new n.PromiseCapability();
              return this._requests.push(P), P.promise;
            }
            cancel(P) {
              this._done = !0;
              for (const p of this._requests)
                p.resolve({
                  value: void 0,
                  done: !0
                });
              this._requests.length = 0, this._stream._removeRangeReader(this);
            }
          }
        },
        /* 19 */
        /***/
        (C, s, O) => {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.PDFFetchStream = void 0;
          var n = O(1), u = O(20);
          function B(F, M, k) {
            return {
              method: "GET",
              headers: F,
              signal: k.signal,
              mode: "cors",
              credentials: M ? "include" : "same-origin",
              redirect: "follow"
            };
          }
          function L(F) {
            const M = new Headers();
            for (const k in F) {
              const w = F[k];
              w !== void 0 && M.append(k, w);
            }
            return M;
          }
          function X(F) {
            return F instanceof Uint8Array ? F.buffer : F instanceof ArrayBuffer ? F : ((0, n.warn)(`getArrayBuffer - unexpected data format: ${F}`), new Uint8Array(F).buffer);
          }
          class b {
            constructor(M) {
              this.source = M, this.isHttp = /^https?:/i.test(M.url), this.httpHeaders = this.isHttp && M.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
            }
            get _progressiveDataLength() {
              var M;
              return ((M = this._fullRequestReader) == null ? void 0 : M._loaded) ?? 0;
            }
            getFullReader() {
              return (0, n.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new P(this), this._fullRequestReader;
            }
            getRangeReader(M, k) {
              if (k <= this._progressiveDataLength)
                return null;
              const w = new p(this, M, k);
              return this._rangeRequestReaders.push(w), w;
            }
            cancelAllRequests(M) {
              var k;
              (k = this._fullRequestReader) == null || k.cancel(M);
              for (const w of this._rangeRequestReaders.slice(0))
                w.cancel(M);
            }
          }
          s.PDFFetchStream = b;
          class P {
            constructor(M) {
              this._stream = M, this._reader = null, this._loaded = 0, this._filename = null;
              const k = M.source;
              this._withCredentials = k.withCredentials || !1, this._contentLength = k.length, this._headersCapability = new n.PromiseCapability(), this._disableRange = k.disableRange || !1, this._rangeChunkSize = k.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !k.disableStream, this._isRangeSupported = !k.disableRange, this._headers = L(this._stream.httpHeaders);
              const w = k.url;
              fetch(w, B(this._headers, this._withCredentials, this._abortController)).then((_) => {
                if (!(0, u.validateResponseStatus)(_.status))
                  throw (0, u.createResponseStatusError)(_.status, w);
                this._reader = _.body.getReader(), this._headersCapability.resolve();
                const y = (R) => _.headers.get(R), {
                  allowRangeRequests: S,
                  suggestedLength: D
                } = (0, u.validateRangeRequestCapabilities)({
                  getResponseHeader: y,
                  isHttp: this._stream.isHttp,
                  rangeChunkSize: this._rangeChunkSize,
                  disableRange: this._disableRange
                });
                this._isRangeSupported = S, this._contentLength = D || this._contentLength, this._filename = (0, u.extractFilenameFromHeader)(y), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new n.AbortException("Streaming is disabled."));
              }).catch(this._headersCapability.reject), this.onProgress = null;
            }
            get headersReady() {
              return this._headersCapability.promise;
            }
            get filename() {
              return this._filename;
            }
            get contentLength() {
              return this._contentLength;
            }
            get isRangeSupported() {
              return this._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              var w;
              await this._headersCapability.promise;
              const {
                value: M,
                done: k
              } = await this._reader.read();
              return k ? {
                value: M,
                done: k
              } : (this._loaded += M.byteLength, (w = this.onProgress) == null || w.call(this, {
                loaded: this._loaded,
                total: this._contentLength
              }), {
                value: X(M),
                done: !1
              });
            }
            cancel(M) {
              var k;
              (k = this._reader) == null || k.cancel(M), this._abortController.abort();
            }
          }
          class p {
            constructor(M, k, w) {
              this._stream = M, this._reader = null, this._loaded = 0;
              const _ = M.source;
              this._withCredentials = _.withCredentials || !1, this._readCapability = new n.PromiseCapability(), this._isStreamingSupported = !_.disableStream, this._abortController = new AbortController(), this._headers = L(this._stream.httpHeaders), this._headers.append("Range", `bytes=${k}-${w - 1}`);
              const y = _.url;
              fetch(y, B(this._headers, this._withCredentials, this._abortController)).then((S) => {
                if (!(0, u.validateResponseStatus)(S.status))
                  throw (0, u.createResponseStatusError)(S.status, y);
                this._readCapability.resolve(), this._reader = S.body.getReader();
              }).catch(this._readCapability.reject), this.onProgress = null;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              var w;
              await this._readCapability.promise;
              const {
                value: M,
                done: k
              } = await this._reader.read();
              return k ? {
                value: M,
                done: k
              } : (this._loaded += M.byteLength, (w = this.onProgress) == null || w.call(this, {
                loaded: this._loaded
              }), {
                value: X(M),
                done: !1
              });
            }
            cancel(M) {
              var k;
              (k = this._reader) == null || k.cancel(M), this._abortController.abort();
            }
          }
        },
        /* 20 */
        /***/
        (C, s, O) => {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.createResponseStatusError = b, s.extractFilenameFromHeader = X, s.validateRangeRequestCapabilities = L, s.validateResponseStatus = P;
          var n = O(1), u = O(21), B = O(6);
          function L({
            getResponseHeader: p,
            isHttp: F,
            rangeChunkSize: M,
            disableRange: k
          }) {
            const w = {
              allowRangeRequests: !1,
              suggestedLength: void 0
            }, _ = parseInt(p("Content-Length"), 10);
            return !Number.isInteger(_) || (w.suggestedLength = _, _ <= 2 * M) || k || !F || p("Accept-Ranges") !== "bytes" || (p("Content-Encoding") || "identity") !== "identity" || (w.allowRangeRequests = !0), w;
          }
          function X(p) {
            const F = p("Content-Disposition");
            if (F) {
              let M = (0, u.getFilenameFromContentDispositionHeader)(F);
              if (M.includes("%"))
                try {
                  M = decodeURIComponent(M);
                } catch {
                }
              if ((0, B.isPdfFile)(M))
                return M;
            }
            return null;
          }
          function b(p, F) {
            return p === 404 || p === 0 && F.startsWith("file:") ? new n.MissingPDFException('Missing PDF "' + F + '".') : new n.UnexpectedResponseException(`Unexpected server response (${p}) while retrieving PDF "${F}".`, p);
          }
          function P(p) {
            return p === 200 || p === 206;
          }
        },
        /* 21 */
        /***/
        (C, s, O) => {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.getFilenameFromContentDispositionHeader = u;
          var n = O(1);
          function u(B) {
            let L = !0, X = b("filename\\*", "i").exec(B);
            if (X) {
              X = X[1];
              let _ = M(X);
              return _ = unescape(_), _ = k(_), _ = w(_), p(_);
            }
            if (X = F(B), X) {
              const _ = w(X);
              return p(_);
            }
            if (X = b("filename", "i").exec(B), X) {
              X = X[1];
              let _ = M(X);
              return _ = w(_), p(_);
            }
            function b(_, y) {
              return new RegExp("(?:^|;)\\s*" + _ + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', y);
            }
            function P(_, y) {
              if (_) {
                if (!/^[\x00-\xFF]+$/.test(y))
                  return y;
                try {
                  const S = new TextDecoder(_, {
                    fatal: !0
                  }), D = (0, n.stringToBytes)(y);
                  y = S.decode(D), L = !1;
                } catch {
                }
              }
              return y;
            }
            function p(_) {
              return L && /[\x80-\xff]/.test(_) && (_ = P("utf-8", _), L && (_ = P("iso-8859-1", _))), _;
            }
            function F(_) {
              const y = [];
              let S;
              const D = b("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
              for (; (S = D.exec(_)) !== null; ) {
                let [, A, o, f] = S;
                if (A = parseInt(A, 10), A in y) {
                  if (A === 0)
                    break;
                  continue;
                }
                y[A] = [o, f];
              }
              const R = [];
              for (let A = 0; A < y.length && A in y; ++A) {
                let [o, f] = y[A];
                f = M(f), o && (f = unescape(f), A === 0 && (f = k(f))), R.push(f);
              }
              return R.join("");
            }
            function M(_) {
              if (_.startsWith('"')) {
                const y = _.slice(1).split('\\"');
                for (let S = 0; S < y.length; ++S) {
                  const D = y[S].indexOf('"');
                  D !== -1 && (y[S] = y[S].slice(0, D), y.length = S + 1), y[S] = y[S].replaceAll(/\\(.)/g, "$1");
                }
                _ = y.join('"');
              }
              return _;
            }
            function k(_) {
              const y = _.indexOf("'");
              if (y === -1)
                return _;
              const S = _.slice(0, y), R = _.slice(y + 1).replace(/^[^']*'/, "");
              return P(S, R);
            }
            function w(_) {
              return !_.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(_) ? _ : _.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(y, S, D, R) {
                if (D === "q" || D === "Q")
                  return R = R.replaceAll("_", " "), R = R.replaceAll(/=([0-9a-fA-F]{2})/g, function(A, o) {
                    return String.fromCharCode(parseInt(o, 16));
                  }), P(S, R);
                try {
                  R = atob(R);
                } catch {
                }
                return P(S, R);
              });
            }
            return "";
          }
        },
        /* 22 */
        /***/
        (C, s, O) => {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.PDFNetworkStream = void 0;
          var n = O(1), u = O(20);
          const B = 200, L = 206;
          function X(M) {
            const k = M.response;
            return typeof k != "string" ? k : (0, n.stringToBytes)(k).buffer;
          }
          class b {
            constructor(k, w = {}) {
              this.url = k, this.isHttp = /^https?:/i.test(k), this.httpHeaders = this.isHttp && w.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = w.withCredentials || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
            }
            requestRange(k, w, _) {
              const y = {
                begin: k,
                end: w
              };
              for (const S in _)
                y[S] = _[S];
              return this.request(y);
            }
            requestFull(k) {
              return this.request(k);
            }
            request(k) {
              const w = new XMLHttpRequest(), _ = this.currXhrId++, y = this.pendingRequests[_] = {
                xhr: w
              };
              w.open("GET", this.url), w.withCredentials = this.withCredentials;
              for (const S in this.httpHeaders) {
                const D = this.httpHeaders[S];
                D !== void 0 && w.setRequestHeader(S, D);
              }
              return this.isHttp && "begin" in k && "end" in k ? (w.setRequestHeader("Range", `bytes=${k.begin}-${k.end - 1}`), y.expectedStatus = L) : y.expectedStatus = B, w.responseType = "arraybuffer", k.onError && (w.onerror = function(S) {
                k.onError(w.status);
              }), w.onreadystatechange = this.onStateChange.bind(this, _), w.onprogress = this.onProgress.bind(this, _), y.onHeadersReceived = k.onHeadersReceived, y.onDone = k.onDone, y.onError = k.onError, y.onProgress = k.onProgress, w.send(null), _;
            }
            onProgress(k, w) {
              var y;
              const _ = this.pendingRequests[k];
              _ && ((y = _.onProgress) == null || y.call(_, w));
            }
            onStateChange(k, w) {
              var A, o, f;
              const _ = this.pendingRequests[k];
              if (!_)
                return;
              const y = _.xhr;
              if (y.readyState >= 2 && _.onHeadersReceived && (_.onHeadersReceived(), delete _.onHeadersReceived), y.readyState !== 4 || !(k in this.pendingRequests))
                return;
              if (delete this.pendingRequests[k], y.status === 0 && this.isHttp) {
                (A = _.onError) == null || A.call(_, y.status);
                return;
              }
              const S = y.status || B;
              if (!(S === B && _.expectedStatus === L) && S !== _.expectedStatus) {
                (o = _.onError) == null || o.call(_, y.status);
                return;
              }
              const R = X(y);
              if (S === L) {
                const j = y.getResponseHeader("Content-Range"), v = /bytes (\d+)-(\d+)\/(\d+)/.exec(j);
                _.onDone({
                  begin: parseInt(v[1], 10),
                  chunk: R
                });
              } else
                R ? _.onDone({
                  begin: 0,
                  chunk: R
                }) : (f = _.onError) == null || f.call(_, y.status);
            }
            getRequestXhr(k) {
              return this.pendingRequests[k].xhr;
            }
            isPendingRequest(k) {
              return k in this.pendingRequests;
            }
            abortRequest(k) {
              const w = this.pendingRequests[k].xhr;
              delete this.pendingRequests[k], w.abort();
            }
          }
          class P {
            constructor(k) {
              this._source = k, this._manager = new b(k.url, {
                httpHeaders: k.httpHeaders,
                withCredentials: k.withCredentials
              }), this._rangeChunkSize = k.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
            }
            _onRangeRequestReaderClosed(k) {
              const w = this._rangeRequestReaders.indexOf(k);
              w >= 0 && this._rangeRequestReaders.splice(w, 1);
            }
            getFullReader() {
              return (0, n.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new p(this._manager, this._source), this._fullRequestReader;
            }
            getRangeReader(k, w) {
              const _ = new F(this._manager, k, w);
              return _.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(_), _;
            }
            cancelAllRequests(k) {
              var w;
              (w = this._fullRequestReader) == null || w.cancel(k);
              for (const _ of this._rangeRequestReaders.slice(0))
                _.cancel(k);
            }
          }
          s.PDFNetworkStream = P;
          class p {
            constructor(k, w) {
              this._manager = k;
              const _ = {
                onHeadersReceived: this._onHeadersReceived.bind(this),
                onDone: this._onDone.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this)
              };
              this._url = w.url, this._fullRequestId = k.requestFull(_), this._headersReceivedCapability = new n.PromiseCapability(), this._disableRange = w.disableRange || !1, this._contentLength = w.length, this._rangeChunkSize = w.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
            }
            _onHeadersReceived() {
              const k = this._fullRequestId, w = this._manager.getRequestXhr(k), _ = (D) => w.getResponseHeader(D), {
                allowRangeRequests: y,
                suggestedLength: S
              } = (0, u.validateRangeRequestCapabilities)({
                getResponseHeader: _,
                isHttp: this._manager.isHttp,
                rangeChunkSize: this._rangeChunkSize,
                disableRange: this._disableRange
              });
              y && (this._isRangeSupported = !0), this._contentLength = S || this._contentLength, this._filename = (0, u.extractFilenameFromHeader)(_), this._isRangeSupported && this._manager.abortRequest(k), this._headersReceivedCapability.resolve();
            }
            _onDone(k) {
              if (k && (this._requests.length > 0 ? this._requests.shift().resolve({
                value: k.chunk,
                done: !1
              }) : this._cachedChunks.push(k.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
                for (const w of this._requests)
                  w.resolve({
                    value: void 0,
                    done: !0
                  });
                this._requests.length = 0;
              }
            }
            _onError(k) {
              this._storedError = (0, u.createResponseStatusError)(k, this._url), this._headersReceivedCapability.reject(this._storedError);
              for (const w of this._requests)
                w.reject(this._storedError);
              this._requests.length = 0, this._cachedChunks.length = 0;
            }
            _onProgress(k) {
              var w;
              (w = this.onProgress) == null || w.call(this, {
                loaded: k.loaded,
                total: k.lengthComputable ? k.total : this._contentLength
              });
            }
            get filename() {
              return this._filename;
            }
            get isRangeSupported() {
              return this._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            get contentLength() {
              return this._contentLength;
            }
            get headersReady() {
              return this._headersReceivedCapability.promise;
            }
            async read() {
              if (this._storedError)
                throw this._storedError;
              if (this._cachedChunks.length > 0)
                return {
                  value: this._cachedChunks.shift(),
                  done: !1
                };
              if (this._done)
                return {
                  value: void 0,
                  done: !0
                };
              const k = new n.PromiseCapability();
              return this._requests.push(k), k.promise;
            }
            cancel(k) {
              this._done = !0, this._headersReceivedCapability.reject(k);
              for (const w of this._requests)
                w.resolve({
                  value: void 0,
                  done: !0
                });
              this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
            }
          }
          class F {
            constructor(k, w, _) {
              this._manager = k;
              const y = {
                onDone: this._onDone.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this)
              };
              this._url = k.url, this._requestId = k.requestRange(w, _, y), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
            }
            _close() {
              var k;
              (k = this.onClosed) == null || k.call(this, this);
            }
            _onDone(k) {
              const w = k.chunk;
              this._requests.length > 0 ? this._requests.shift().resolve({
                value: w,
                done: !1
              }) : this._queuedChunk = w, this._done = !0;
              for (const _ of this._requests)
                _.resolve({
                  value: void 0,
                  done: !0
                });
              this._requests.length = 0, this._close();
            }
            _onError(k) {
              this._storedError = (0, u.createResponseStatusError)(k, this._url);
              for (const w of this._requests)
                w.reject(this._storedError);
              this._requests.length = 0, this._queuedChunk = null;
            }
            _onProgress(k) {
              var w;
              this.isStreamingSupported || (w = this.onProgress) == null || w.call(this, {
                loaded: k.loaded
              });
            }
            get isStreamingSupported() {
              return !1;
            }
            async read() {
              if (this._storedError)
                throw this._storedError;
              if (this._queuedChunk !== null) {
                const w = this._queuedChunk;
                return this._queuedChunk = null, {
                  value: w,
                  done: !1
                };
              }
              if (this._done)
                return {
                  value: void 0,
                  done: !0
                };
              const k = new n.PromiseCapability();
              return this._requests.push(k), k.promise;
            }
            cancel(k) {
              this._done = !0;
              for (const w of this._requests)
                w.resolve({
                  value: void 0,
                  done: !0
                });
              this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
            }
          }
        },
        /* 23 */
        /***/
        (C, s, O) => {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.PDFNodeStream = void 0;
          var n = O(1), u = O(20);
          const B = /^file:\/\/\/[a-zA-Z]:\//;
          function L(_) {
            const y = require$$5, S = y.parse(_);
            return S.protocol === "file:" || S.host ? S : /^[a-z]:[/\\]/i.test(_) ? y.parse(`file:///${_}`) : (S.host || (S.protocol = "file:"), S);
          }
          class X {
            constructor(y) {
              this.source = y, this.url = L(y.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && y.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
            }
            get _progressiveDataLength() {
              var y;
              return ((y = this._fullRequestReader) == null ? void 0 : y._loaded) ?? 0;
            }
            getFullReader() {
              return (0, n.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new k(this) : new F(this), this._fullRequestReader;
            }
            getRangeReader(y, S) {
              if (S <= this._progressiveDataLength)
                return null;
              const D = this.isFsUrl ? new w(this, y, S) : new M(this, y, S);
              return this._rangeRequestReaders.push(D), D;
            }
            cancelAllRequests(y) {
              var S;
              (S = this._fullRequestReader) == null || S.cancel(y);
              for (const D of this._rangeRequestReaders.slice(0))
                D.cancel(y);
            }
          }
          s.PDFNodeStream = X;
          class b {
            constructor(y) {
              this._url = y.url, this._done = !1, this._storedError = null, this.onProgress = null;
              const S = y.source;
              this._contentLength = S.length, this._loaded = 0, this._filename = null, this._disableRange = S.disableRange || !1, this._rangeChunkSize = S.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !S.disableStream, this._isRangeSupported = !S.disableRange, this._readableStream = null, this._readCapability = new n.PromiseCapability(), this._headersCapability = new n.PromiseCapability();
            }
            get headersReady() {
              return this._headersCapability.promise;
            }
            get filename() {
              return this._filename;
            }
            get contentLength() {
              return this._contentLength;
            }
            get isRangeSupported() {
              return this._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              var D;
              if (await this._readCapability.promise, this._done)
                return {
                  value: void 0,
                  done: !0
                };
              if (this._storedError)
                throw this._storedError;
              const y = this._readableStream.read();
              return y === null ? (this._readCapability = new n.PromiseCapability(), this.read()) : (this._loaded += y.length, (D = this.onProgress) == null || D.call(this, {
                loaded: this._loaded,
                total: this._contentLength
              }), {
                value: new Uint8Array(y).buffer,
                done: !1
              });
            }
            cancel(y) {
              if (!this._readableStream) {
                this._error(y);
                return;
              }
              this._readableStream.destroy(y);
            }
            _error(y) {
              this._storedError = y, this._readCapability.resolve();
            }
            _setReadableStream(y) {
              this._readableStream = y, y.on("readable", () => {
                this._readCapability.resolve();
              }), y.on("end", () => {
                y.destroy(), this._done = !0, this._readCapability.resolve();
              }), y.on("error", (S) => {
                this._error(S);
              }), !this._isStreamingSupported && this._isRangeSupported && this._error(new n.AbortException("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
            }
          }
          class P {
            constructor(y) {
              this._url = y.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = new n.PromiseCapability();
              const S = y.source;
              this._isStreamingSupported = !S.disableStream;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              var D;
              if (await this._readCapability.promise, this._done)
                return {
                  value: void 0,
                  done: !0
                };
              if (this._storedError)
                throw this._storedError;
              const y = this._readableStream.read();
              return y === null ? (this._readCapability = new n.PromiseCapability(), this.read()) : (this._loaded += y.length, (D = this.onProgress) == null || D.call(this, {
                loaded: this._loaded
              }), {
                value: new Uint8Array(y).buffer,
                done: !1
              });
            }
            cancel(y) {
              if (!this._readableStream) {
                this._error(y);
                return;
              }
              this._readableStream.destroy(y);
            }
            _error(y) {
              this._storedError = y, this._readCapability.resolve();
            }
            _setReadableStream(y) {
              this._readableStream = y, y.on("readable", () => {
                this._readCapability.resolve();
              }), y.on("end", () => {
                y.destroy(), this._done = !0, this._readCapability.resolve();
              }), y.on("error", (S) => {
                this._error(S);
              }), this._storedError && this._readableStream.destroy(this._storedError);
            }
          }
          function p(_, y) {
            return {
              protocol: _.protocol,
              auth: _.auth,
              host: _.hostname,
              port: _.port,
              path: _.path,
              method: "GET",
              headers: y
            };
          }
          class F extends b {
            constructor(y) {
              super(y);
              const S = (D) => {
                if (D.statusCode === 404) {
                  const f = new n.MissingPDFException(`Missing PDF "${this._url}".`);
                  this._storedError = f, this._headersCapability.reject(f);
                  return;
                }
                this._headersCapability.resolve(), this._setReadableStream(D);
                const R = (f) => this._readableStream.headers[f.toLowerCase()], {
                  allowRangeRequests: A,
                  suggestedLength: o
                } = (0, u.validateRangeRequestCapabilities)({
                  getResponseHeader: R,
                  isHttp: y.isHttp,
                  rangeChunkSize: this._rangeChunkSize,
                  disableRange: this._disableRange
                });
                this._isRangeSupported = A, this._contentLength = o || this._contentLength, this._filename = (0, u.extractFilenameFromHeader)(R);
              };
              if (this._request = null, this._url.protocol === "http:") {
                const D = require$$5;
                this._request = D.request(p(this._url, y.httpHeaders), S);
              } else {
                const D = require$$5;
                this._request = D.request(p(this._url, y.httpHeaders), S);
              }
              this._request.on("error", (D) => {
                this._storedError = D, this._headersCapability.reject(D);
              }), this._request.end();
            }
          }
          class M extends P {
            constructor(y, S, D) {
              super(y), this._httpHeaders = {};
              for (const A in y.httpHeaders) {
                const o = y.httpHeaders[A];
                o !== void 0 && (this._httpHeaders[A] = o);
              }
              this._httpHeaders.Range = `bytes=${S}-${D - 1}`;
              const R = (A) => {
                if (A.statusCode === 404) {
                  const o = new n.MissingPDFException(`Missing PDF "${this._url}".`);
                  this._storedError = o;
                  return;
                }
                this._setReadableStream(A);
              };
              if (this._request = null, this._url.protocol === "http:") {
                const A = require$$5;
                this._request = A.request(p(this._url, this._httpHeaders), R);
              } else {
                const A = require$$5;
                this._request = A.request(p(this._url, this._httpHeaders), R);
              }
              this._request.on("error", (A) => {
                this._storedError = A;
              }), this._request.end();
            }
          }
          class k extends b {
            constructor(y) {
              super(y);
              let S = decodeURIComponent(this._url.path);
              B.test(this._url.href) && (S = S.replace(/^\//, ""));
              const D = require$$5;
              D.lstat(S, (R, A) => {
                if (R) {
                  R.code === "ENOENT" && (R = new n.MissingPDFException(`Missing PDF "${S}".`)), this._storedError = R, this._headersCapability.reject(R);
                  return;
                }
                this._contentLength = A.size, this._setReadableStream(D.createReadStream(S)), this._headersCapability.resolve();
              });
            }
          }
          class w extends P {
            constructor(y, S, D) {
              super(y);
              let R = decodeURIComponent(this._url.path);
              B.test(this._url.href) && (R = R.replace(/^\//, ""));
              const A = require$$5;
              this._setReadableStream(A.createReadStream(R, {
                start: S,
                end: D - 1
              }));
            }
          }
        },
        /* 24 */
        /***/
        (C, s, O) => {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.SVGGraphics = void 0;
          var n = O(6), u = O(1);
          const B = {
            fontStyle: "normal",
            fontWeight: "normal",
            fillColor: "#000000"
          }, L = "http://www.w3.org/XML/1998/namespace", X = "http://www.w3.org/1999/xlink", b = ["butt", "round", "square"], P = ["miter", "round", "bevel"], p = function(A, o = "", f = !1) {
            if (URL.createObjectURL && typeof Blob < "u" && !f)
              return URL.createObjectURL(new Blob([A], {
                type: o
              }));
            const j = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            let v = `data:${o};base64,`;
            for (let h = 0, I = A.length; h < I; h += 3) {
              const g = A[h] & 255, U = A[h + 1] & 255, G = A[h + 2] & 255, m = g >> 2, Y = (g & 3) << 4 | U >> 4, Q = h + 1 < I ? (U & 15) << 2 | G >> 6 : 64, it = h + 2 < I ? G & 63 : 64;
              v += j[m] + j[Y] + j[Q] + j[it];
            }
            return v;
          }, F = function() {
            const A = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), o = 12, f = new Int32Array(256);
            for (let G = 0; G < 256; G++) {
              let m = G;
              for (let Y = 0; Y < 8; Y++)
                m = m & 1 ? 3988292384 ^ m >> 1 & 2147483647 : m >> 1 & 2147483647;
              f[G] = m;
            }
            function j(G, m, Y) {
              let Q = -1;
              for (let it = m; it < Y; it++) {
                const z = (Q ^ G[it]) & 255, lt = f[z];
                Q = Q >>> 8 ^ lt;
              }
              return Q ^ -1;
            }
            function v(G, m, Y, Q) {
              let it = Q;
              const z = m.length;
              Y[it] = z >> 24 & 255, Y[it + 1] = z >> 16 & 255, Y[it + 2] = z >> 8 & 255, Y[it + 3] = z & 255, it += 4, Y[it] = G.charCodeAt(0) & 255, Y[it + 1] = G.charCodeAt(1) & 255, Y[it + 2] = G.charCodeAt(2) & 255, Y[it + 3] = G.charCodeAt(3) & 255, it += 4, Y.set(m, it), it += m.length;
              const lt = j(Y, Q + 4, it);
              Y[it] = lt >> 24 & 255, Y[it + 1] = lt >> 16 & 255, Y[it + 2] = lt >> 8 & 255, Y[it + 3] = lt & 255;
            }
            function h(G, m, Y) {
              let Q = 1, it = 0;
              for (let z = m; z < Y; ++z)
                Q = (Q + (G[z] & 255)) % 65521, it = (it + Q) % 65521;
              return it << 16 | Q;
            }
            function I(G) {
              if (!u.isNodeJS)
                return g(G);
              try {
                const m = parseInt(process.versions.node) >= 8 ? G : Buffer.from(G), Y = require$$5.deflateSync(m, {
                  level: 9
                });
                return Y instanceof Uint8Array ? Y : new Uint8Array(Y);
              } catch (m) {
                (0, u.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + m);
              }
              return g(G);
            }
            function g(G) {
              let m = G.length;
              const Y = 65535, Q = Math.ceil(m / Y), it = new Uint8Array(2 + m + Q * 5 + 4);
              let z = 0;
              it[z++] = 120, it[z++] = 156;
              let lt = 0;
              for (; m > Y; )
                it[z++] = 0, it[z++] = 255, it[z++] = 255, it[z++] = 0, it[z++] = 0, it.set(G.subarray(lt, lt + Y), z), z += Y, lt += Y, m -= Y;
              it[z++] = 1, it[z++] = m & 255, it[z++] = m >> 8 & 255, it[z++] = ~m & 65535 & 255, it[z++] = (~m & 65535) >> 8 & 255, it.set(G.subarray(lt), z), z += G.length - lt;
              const K = h(G, 0, G.length);
              return it[z++] = K >> 24 & 255, it[z++] = K >> 16 & 255, it[z++] = K >> 8 & 255, it[z++] = K & 255, it;
            }
            function U(G, m, Y, Q) {
              const it = G.width, z = G.height;
              let lt, K, ht;
              const yt = G.data;
              switch (m) {
                case u.ImageKind.GRAYSCALE_1BPP:
                  K = 0, lt = 1, ht = it + 7 >> 3;
                  break;
                case u.ImageKind.RGB_24BPP:
                  K = 2, lt = 8, ht = it * 3;
                  break;
                case u.ImageKind.RGBA_32BPP:
                  K = 6, lt = 8, ht = it * 4;
                  break;
                default:
                  throw new Error("invalid format");
              }
              const E = new Uint8Array((1 + ht) * z);
              let e = 0, l = 0;
              for (let W = 0; W < z; ++W)
                E[e++] = 0, E.set(yt.subarray(l, l + ht), e), l += ht, e += ht;
              if (m === u.ImageKind.GRAYSCALE_1BPP && Q) {
                e = 0;
                for (let W = 0; W < z; W++) {
                  e++;
                  for (let q = 0; q < ht; q++)
                    E[e++] ^= 255;
                }
              }
              const i = new Uint8Array([it >> 24 & 255, it >> 16 & 255, it >> 8 & 255, it & 255, z >> 24 & 255, z >> 16 & 255, z >> 8 & 255, z & 255, lt, K, 0, 0, 0]), c = I(E), d = A.length + o * 3 + i.length + c.length, T = new Uint8Array(d);
              let N = 0;
              return T.set(A, N), N += A.length, v("IHDR", i, T, N), N += o + i.length, v("IDATA", c, T, N), N += o + c.length, v("IEND", new Uint8Array(0), T, N), p(T, "image/png", Y);
            }
            return function(m, Y, Q) {
              const it = m.kind === void 0 ? u.ImageKind.GRAYSCALE_1BPP : m.kind;
              return U(m, it, Y, Q);
            };
          }();
          class M {
            constructor() {
              this.fontSizeScale = 1, this.fontWeight = B.fontWeight, this.fontSize = 0, this.textMatrix = u.IDENTITY_MATRIX, this.fontMatrix = u.FONT_IDENTITY_MATRIX, this.leading = 0, this.textRenderingMode = u.TextRenderingMode.FILL, this.textMatrixScale = 1, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRise = 0, this.fillColor = B.fillColor, this.strokeColor = "#000000", this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.lineJoin = "", this.lineCap = "", this.miterLimit = 0, this.dashArray = [], this.dashPhase = 0, this.dependencies = [], this.activeClipUrl = null, this.clipGroup = null, this.maskId = "";
            }
            clone() {
              return Object.create(this);
            }
            setCurrentPoint(o, f) {
              this.x = o, this.y = f;
            }
          }
          function k(A) {
            let o = [];
            const f = [];
            for (const j of A) {
              if (j.fn === "save") {
                o.push({
                  fnId: 92,
                  fn: "group",
                  items: []
                }), f.push(o), o = o.at(-1).items;
                continue;
              }
              j.fn === "restore" ? o = f.pop() : o.push(j);
            }
            return o;
          }
          function w(A) {
            if (Number.isInteger(A))
              return A.toString();
            const o = A.toFixed(10);
            let f = o.length - 1;
            if (o[f] !== "0")
              return o;
            do
              f--;
            while (o[f] === "0");
            return o.substring(0, o[f] === "." ? f : f + 1);
          }
          function _(A) {
            if (A[4] === 0 && A[5] === 0) {
              if (A[1] === 0 && A[2] === 0)
                return A[0] === 1 && A[3] === 1 ? "" : `scale(${w(A[0])} ${w(A[3])})`;
              if (A[0] === A[3] && A[1] === -A[2]) {
                const o = Math.acos(A[0]) * 180 / Math.PI;
                return `rotate(${w(o)})`;
              }
            } else if (A[0] === 1 && A[1] === 0 && A[2] === 0 && A[3] === 1)
              return `translate(${w(A[4])} ${w(A[5])})`;
            return `matrix(${w(A[0])} ${w(A[1])} ${w(A[2])} ${w(A[3])} ${w(A[4])} ${w(A[5])})`;
          }
          let y = 0, S = 0, D = 0;
          class R {
            constructor(o, f, j = !1) {
              (0, n.deprecated)("The SVG back-end is no longer maintained and *may* be removed in the future."), this.svgFactory = new n.DOMSVGFactory(), this.current = new M(), this.transformMatrix = u.IDENTITY_MATRIX, this.transformStack = [], this.extraStack = [], this.commonObjs = o, this.objs = f, this.pendingClip = null, this.pendingEOFill = !1, this.embedFonts = !1, this.embeddedFonts = /* @__PURE__ */ Object.create(null), this.cssStyle = null, this.forceDataSchema = !!j, this._operatorIdMapping = [];
              for (const v in u.OPS)
                this._operatorIdMapping[u.OPS[v]] = v;
            }
            getObject(o, f = null) {
              return typeof o == "string" ? o.startsWith("g_") ? this.commonObjs.get(o) : this.objs.get(o) : f;
            }
            save() {
              this.transformStack.push(this.transformMatrix);
              const o = this.current;
              this.extraStack.push(o), this.current = o.clone();
            }
            restore() {
              this.transformMatrix = this.transformStack.pop(), this.current = this.extraStack.pop(), this.pendingClip = null, this.tgrp = null;
            }
            group(o) {
              this.save(), this.executeOpTree(o), this.restore();
            }
            loadDependencies(o) {
              const f = o.fnArray, j = o.argsArray;
              for (let v = 0, h = f.length; v < h; v++)
                if (f[v] === u.OPS.dependency)
                  for (const I of j[v]) {
                    const g = I.startsWith("g_") ? this.commonObjs : this.objs, U = new Promise((G) => {
                      g.get(I, G);
                    });
                    this.current.dependencies.push(U);
                  }
              return Promise.all(this.current.dependencies);
            }
            transform(o, f, j, v, h, I) {
              const g = [o, f, j, v, h, I];
              this.transformMatrix = u.Util.transform(this.transformMatrix, g), this.tgrp = null;
            }
            getSVG(o, f) {
              this.viewport = f;
              const j = this._initialize(f);
              return this.loadDependencies(o).then(() => (this.transformMatrix = u.IDENTITY_MATRIX, this.executeOpTree(this.convertOpList(o)), j));
            }
            convertOpList(o) {
              const f = this._operatorIdMapping, j = o.argsArray, v = o.fnArray, h = [];
              for (let I = 0, g = v.length; I < g; I++) {
                const U = v[I];
                h.push({
                  fnId: U,
                  fn: f[U],
                  args: j[I]
                });
              }
              return k(h);
            }
            executeOpTree(o) {
              for (const f of o) {
                const j = f.fn, v = f.fnId, h = f.args;
                switch (v | 0) {
                  case u.OPS.beginText:
                    this.beginText();
                    break;
                  case u.OPS.dependency:
                    break;
                  case u.OPS.setLeading:
                    this.setLeading(h);
                    break;
                  case u.OPS.setLeadingMoveText:
                    this.setLeadingMoveText(h[0], h[1]);
                    break;
                  case u.OPS.setFont:
                    this.setFont(h);
                    break;
                  case u.OPS.showText:
                    this.showText(h[0]);
                    break;
                  case u.OPS.showSpacedText:
                    this.showText(h[0]);
                    break;
                  case u.OPS.endText:
                    this.endText();
                    break;
                  case u.OPS.moveText:
                    this.moveText(h[0], h[1]);
                    break;
                  case u.OPS.setCharSpacing:
                    this.setCharSpacing(h[0]);
                    break;
                  case u.OPS.setWordSpacing:
                    this.setWordSpacing(h[0]);
                    break;
                  case u.OPS.setHScale:
                    this.setHScale(h[0]);
                    break;
                  case u.OPS.setTextMatrix:
                    this.setTextMatrix(h[0], h[1], h[2], h[3], h[4], h[5]);
                    break;
                  case u.OPS.setTextRise:
                    this.setTextRise(h[0]);
                    break;
                  case u.OPS.setTextRenderingMode:
                    this.setTextRenderingMode(h[0]);
                    break;
                  case u.OPS.setLineWidth:
                    this.setLineWidth(h[0]);
                    break;
                  case u.OPS.setLineJoin:
                    this.setLineJoin(h[0]);
                    break;
                  case u.OPS.setLineCap:
                    this.setLineCap(h[0]);
                    break;
                  case u.OPS.setMiterLimit:
                    this.setMiterLimit(h[0]);
                    break;
                  case u.OPS.setFillRGBColor:
                    this.setFillRGBColor(h[0], h[1], h[2]);
                    break;
                  case u.OPS.setStrokeRGBColor:
                    this.setStrokeRGBColor(h[0], h[1], h[2]);
                    break;
                  case u.OPS.setStrokeColorN:
                    this.setStrokeColorN(h);
                    break;
                  case u.OPS.setFillColorN:
                    this.setFillColorN(h);
                    break;
                  case u.OPS.shadingFill:
                    this.shadingFill(h[0]);
                    break;
                  case u.OPS.setDash:
                    this.setDash(h[0], h[1]);
                    break;
                  case u.OPS.setRenderingIntent:
                    this.setRenderingIntent(h[0]);
                    break;
                  case u.OPS.setFlatness:
                    this.setFlatness(h[0]);
                    break;
                  case u.OPS.setGState:
                    this.setGState(h[0]);
                    break;
                  case u.OPS.fill:
                    this.fill();
                    break;
                  case u.OPS.eoFill:
                    this.eoFill();
                    break;
                  case u.OPS.stroke:
                    this.stroke();
                    break;
                  case u.OPS.fillStroke:
                    this.fillStroke();
                    break;
                  case u.OPS.eoFillStroke:
                    this.eoFillStroke();
                    break;
                  case u.OPS.clip:
                    this.clip("nonzero");
                    break;
                  case u.OPS.eoClip:
                    this.clip("evenodd");
                    break;
                  case u.OPS.paintSolidColorImageMask:
                    this.paintSolidColorImageMask();
                    break;
                  case u.OPS.paintImageXObject:
                    this.paintImageXObject(h[0]);
                    break;
                  case u.OPS.paintInlineImageXObject:
                    this.paintInlineImageXObject(h[0]);
                    break;
                  case u.OPS.paintImageMaskXObject:
                    this.paintImageMaskXObject(h[0]);
                    break;
                  case u.OPS.paintFormXObjectBegin:
                    this.paintFormXObjectBegin(h[0], h[1]);
                    break;
                  case u.OPS.paintFormXObjectEnd:
                    this.paintFormXObjectEnd();
                    break;
                  case u.OPS.closePath:
                    this.closePath();
                    break;
                  case u.OPS.closeStroke:
                    this.closeStroke();
                    break;
                  case u.OPS.closeFillStroke:
                    this.closeFillStroke();
                    break;
                  case u.OPS.closeEOFillStroke:
                    this.closeEOFillStroke();
                    break;
                  case u.OPS.nextLine:
                    this.nextLine();
                    break;
                  case u.OPS.transform:
                    this.transform(h[0], h[1], h[2], h[3], h[4], h[5]);
                    break;
                  case u.OPS.constructPath:
                    this.constructPath(h[0], h[1]);
                    break;
                  case u.OPS.endPath:
                    this.endPath();
                    break;
                  case 92:
                    this.group(f.items);
                    break;
                  default:
                    (0, u.warn)(`Unimplemented operator ${j}`);
                    break;
                }
              }
            }
            setWordSpacing(o) {
              this.current.wordSpacing = o;
            }
            setCharSpacing(o) {
              this.current.charSpacing = o;
            }
            nextLine() {
              this.moveText(0, this.current.leading);
            }
            setTextMatrix(o, f, j, v, h, I) {
              const g = this.current;
              g.textMatrix = g.lineMatrix = [o, f, j, v, h, I], g.textMatrixScale = Math.hypot(o, f), g.x = g.lineX = 0, g.y = g.lineY = 0, g.xcoords = [], g.ycoords = [], g.tspan = this.svgFactory.createElement("svg:tspan"), g.tspan.setAttributeNS(null, "font-family", g.fontFamily), g.tspan.setAttributeNS(null, "font-size", `${w(g.fontSize)}px`), g.tspan.setAttributeNS(null, "y", w(-g.y)), g.txtElement = this.svgFactory.createElement("svg:text"), g.txtElement.append(g.tspan);
            }
            beginText() {
              const o = this.current;
              o.x = o.lineX = 0, o.y = o.lineY = 0, o.textMatrix = u.IDENTITY_MATRIX, o.lineMatrix = u.IDENTITY_MATRIX, o.textMatrixScale = 1, o.tspan = this.svgFactory.createElement("svg:tspan"), o.txtElement = this.svgFactory.createElement("svg:text"), o.txtgrp = this.svgFactory.createElement("svg:g"), o.xcoords = [], o.ycoords = [];
            }
            moveText(o, f) {
              const j = this.current;
              j.x = j.lineX += o, j.y = j.lineY += f, j.xcoords = [], j.ycoords = [], j.tspan = this.svgFactory.createElement("svg:tspan"), j.tspan.setAttributeNS(null, "font-family", j.fontFamily), j.tspan.setAttributeNS(null, "font-size", `${w(j.fontSize)}px`), j.tspan.setAttributeNS(null, "y", w(-j.y));
            }
            showText(o) {
              const f = this.current, j = f.font, v = f.fontSize;
              if (v === 0)
                return;
              const h = f.fontSizeScale, I = f.charSpacing, g = f.wordSpacing, U = f.fontDirection, G = f.textHScale * U, m = j.vertical, Y = m ? 1 : -1, Q = j.defaultVMetrics, it = v * f.fontMatrix[0];
              let z = 0;
              for (const ht of o) {
                if (ht === null) {
                  z += U * g;
                  continue;
                } else if (typeof ht == "number") {
                  z += Y * ht * v / 1e3;
                  continue;
                }
                const yt = (ht.isSpace ? g : 0) + I, E = ht.fontChar;
                let e, l, i = ht.width;
                if (m) {
                  let d;
                  const T = ht.vmetric || Q;
                  d = ht.vmetric ? T[1] : i * 0.5, d = -d * it;
                  const N = T[2] * it;
                  i = T ? -T[0] : i, e = d / h, l = (z + N) / h;
                } else
                  e = z / h, l = 0;
                (ht.isInFont || j.missingFile) && (f.xcoords.push(f.x + e), m && f.ycoords.push(-f.y + l), f.tspan.textContent += E);
                const c = m ? i * it - yt * U : i * it + yt * U;
                z += c;
              }
              f.tspan.setAttributeNS(null, "x", f.xcoords.map(w).join(" ")), m ? f.tspan.setAttributeNS(null, "y", f.ycoords.map(w).join(" ")) : f.tspan.setAttributeNS(null, "y", w(-f.y)), m ? f.y -= z : f.x += z * G, f.tspan.setAttributeNS(null, "font-family", f.fontFamily), f.tspan.setAttributeNS(null, "font-size", `${w(f.fontSize)}px`), f.fontStyle !== B.fontStyle && f.tspan.setAttributeNS(null, "font-style", f.fontStyle), f.fontWeight !== B.fontWeight && f.tspan.setAttributeNS(null, "font-weight", f.fontWeight);
              const lt = f.textRenderingMode & u.TextRenderingMode.FILL_STROKE_MASK;
              if (lt === u.TextRenderingMode.FILL || lt === u.TextRenderingMode.FILL_STROKE ? (f.fillColor !== B.fillColor && f.tspan.setAttributeNS(null, "fill", f.fillColor), f.fillAlpha < 1 && f.tspan.setAttributeNS(null, "fill-opacity", f.fillAlpha)) : f.textRenderingMode === u.TextRenderingMode.ADD_TO_PATH ? f.tspan.setAttributeNS(null, "fill", "transparent") : f.tspan.setAttributeNS(null, "fill", "none"), lt === u.TextRenderingMode.STROKE || lt === u.TextRenderingMode.FILL_STROKE) {
                const ht = 1 / (f.textMatrixScale || 1);
                this._setStrokeAttributes(f.tspan, ht);
              }
              let K = f.textMatrix;
              f.textRise !== 0 && (K = K.slice(), K[5] += f.textRise), f.txtElement.setAttributeNS(null, "transform", `${_(K)} scale(${w(G)}, -1)`), f.txtElement.setAttributeNS(L, "xml:space", "preserve"), f.txtElement.append(f.tspan), f.txtgrp.append(f.txtElement), this._ensureTransformGroup().append(f.txtElement);
            }
            setLeadingMoveText(o, f) {
              this.setLeading(-f), this.moveText(o, f);
            }
            addFontStyle(o) {
              if (!o.data)
                throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.');
              this.cssStyle || (this.cssStyle = this.svgFactory.createElement("svg:style"), this.cssStyle.setAttributeNS(null, "type", "text/css"), this.defs.append(this.cssStyle));
              const f = p(o.data, o.mimetype, this.forceDataSchema);
              this.cssStyle.textContent += `@font-face { font-family: "${o.loadedName}"; src: url(${f}); }
`;
            }
            setFont(o) {
              const f = this.current, j = this.commonObjs.get(o[0]);
              let v = o[1];
              f.font = j, this.embedFonts && !j.missingFile && !this.embeddedFonts[j.loadedName] && (this.addFontStyle(j), this.embeddedFonts[j.loadedName] = j), f.fontMatrix = j.fontMatrix || u.FONT_IDENTITY_MATRIX;
              let h = "normal";
              j.black ? h = "900" : j.bold && (h = "bold");
              const I = j.italic ? "italic" : "normal";
              v < 0 ? (v = -v, f.fontDirection = -1) : f.fontDirection = 1, f.fontSize = v, f.fontFamily = j.loadedName, f.fontWeight = h, f.fontStyle = I, f.tspan = this.svgFactory.createElement("svg:tspan"), f.tspan.setAttributeNS(null, "y", w(-f.y)), f.xcoords = [], f.ycoords = [];
            }
            endText() {
              var f;
              const o = this.current;
              o.textRenderingMode & u.TextRenderingMode.ADD_TO_PATH_FLAG && ((f = o.txtElement) != null && f.hasChildNodes()) && (o.element = o.txtElement, this.clip("nonzero"), this.endPath());
            }
            setLineWidth(o) {
              o > 0 && (this.current.lineWidth = o);
            }
            setLineCap(o) {
              this.current.lineCap = b[o];
            }
            setLineJoin(o) {
              this.current.lineJoin = P[o];
            }
            setMiterLimit(o) {
              this.current.miterLimit = o;
            }
            setStrokeAlpha(o) {
              this.current.strokeAlpha = o;
            }
            setStrokeRGBColor(o, f, j) {
              this.current.strokeColor = u.Util.makeHexColor(o, f, j);
            }
            setFillAlpha(o) {
              this.current.fillAlpha = o;
            }
            setFillRGBColor(o, f, j) {
              this.current.fillColor = u.Util.makeHexColor(o, f, j), this.current.tspan = this.svgFactory.createElement("svg:tspan"), this.current.xcoords = [], this.current.ycoords = [];
            }
            setStrokeColorN(o) {
              this.current.strokeColor = this._makeColorN_Pattern(o);
            }
            setFillColorN(o) {
              this.current.fillColor = this._makeColorN_Pattern(o);
            }
            shadingFill(o) {
              const {
                width: f,
                height: j
              } = this.viewport, v = u.Util.inverseTransform(this.transformMatrix), [h, I, g, U] = u.Util.getAxialAlignedBoundingBox([0, 0, f, j], v), G = this.svgFactory.createElement("svg:rect");
              G.setAttributeNS(null, "x", h), G.setAttributeNS(null, "y", I), G.setAttributeNS(null, "width", g - h), G.setAttributeNS(null, "height", U - I), G.setAttributeNS(null, "fill", this._makeShadingPattern(o)), this.current.fillAlpha < 1 && G.setAttributeNS(null, "fill-opacity", this.current.fillAlpha), this._ensureTransformGroup().append(G);
            }
            _makeColorN_Pattern(o) {
              return o[0] === "TilingPattern" ? this._makeTilingPattern(o) : this._makeShadingPattern(o);
            }
            _makeTilingPattern(o) {
              const f = o[1], j = o[2], v = o[3] || u.IDENTITY_MATRIX, [h, I, g, U] = o[4], G = o[5], m = o[6], Y = o[7], Q = `shading${D++}`, [it, z, lt, K] = u.Util.normalizeRect([...u.Util.applyTransform([h, I], v), ...u.Util.applyTransform([g, U], v)]), [ht, yt] = u.Util.singularValueDecompose2dScale(v), E = G * ht, e = m * yt, l = this.svgFactory.createElement("svg:pattern");
              l.setAttributeNS(null, "id", Q), l.setAttributeNS(null, "patternUnits", "userSpaceOnUse"), l.setAttributeNS(null, "width", E), l.setAttributeNS(null, "height", e), l.setAttributeNS(null, "x", `${it}`), l.setAttributeNS(null, "y", `${z}`);
              const i = this.svg, c = this.transformMatrix, d = this.current.fillColor, T = this.current.strokeColor, N = this.svgFactory.create(lt - it, K - z);
              if (this.svg = N, this.transformMatrix = v, Y === 2) {
                const W = u.Util.makeHexColor(...f);
                this.current.fillColor = W, this.current.strokeColor = W;
              }
              return this.executeOpTree(this.convertOpList(j)), this.svg = i, this.transformMatrix = c, this.current.fillColor = d, this.current.strokeColor = T, l.append(N.childNodes[0]), this.defs.append(l), `url(#${Q})`;
            }
            _makeShadingPattern(o) {
              switch (typeof o == "string" && (o = this.objs.get(o)), o[0]) {
                case "RadialAxial":
                  const f = `shading${D++}`, j = o[3];
                  let v;
                  switch (o[1]) {
                    case "axial":
                      const h = o[4], I = o[5];
                      v = this.svgFactory.createElement("svg:linearGradient"), v.setAttributeNS(null, "id", f), v.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), v.setAttributeNS(null, "x1", h[0]), v.setAttributeNS(null, "y1", h[1]), v.setAttributeNS(null, "x2", I[0]), v.setAttributeNS(null, "y2", I[1]);
                      break;
                    case "radial":
                      const g = o[4], U = o[5], G = o[6], m = o[7];
                      v = this.svgFactory.createElement("svg:radialGradient"), v.setAttributeNS(null, "id", f), v.setAttributeNS(null, "gradientUnits", "userSpaceOnUse"), v.setAttributeNS(null, "cx", U[0]), v.setAttributeNS(null, "cy", U[1]), v.setAttributeNS(null, "r", m), v.setAttributeNS(null, "fx", g[0]), v.setAttributeNS(null, "fy", g[1]), v.setAttributeNS(null, "fr", G);
                      break;
                    default:
                      throw new Error(`Unknown RadialAxial type: ${o[1]}`);
                  }
                  for (const h of j) {
                    const I = this.svgFactory.createElement("svg:stop");
                    I.setAttributeNS(null, "offset", h[0]), I.setAttributeNS(null, "stop-color", h[1]), v.append(I);
                  }
                  return this.defs.append(v), `url(#${f})`;
                case "Mesh":
                  return (0, u.warn)("Unimplemented pattern Mesh"), null;
                case "Dummy":
                  return "hotpink";
                default:
                  throw new Error(`Unknown IR type: ${o[0]}`);
              }
            }
            setDash(o, f) {
              this.current.dashArray = o, this.current.dashPhase = f;
            }
            constructPath(o, f) {
              const j = this.current;
              let v = j.x, h = j.y, I = [], g = 0;
              for (const U of o)
                switch (U | 0) {
                  case u.OPS.rectangle:
                    v = f[g++], h = f[g++];
                    const G = f[g++], m = f[g++], Y = v + G, Q = h + m;
                    I.push("M", w(v), w(h), "L", w(Y), w(h), "L", w(Y), w(Q), "L", w(v), w(Q), "Z");
                    break;
                  case u.OPS.moveTo:
                    v = f[g++], h = f[g++], I.push("M", w(v), w(h));
                    break;
                  case u.OPS.lineTo:
                    v = f[g++], h = f[g++], I.push("L", w(v), w(h));
                    break;
                  case u.OPS.curveTo:
                    v = f[g + 4], h = f[g + 5], I.push("C", w(f[g]), w(f[g + 1]), w(f[g + 2]), w(f[g + 3]), w(v), w(h)), g += 6;
                    break;
                  case u.OPS.curveTo2:
                    I.push("C", w(v), w(h), w(f[g]), w(f[g + 1]), w(f[g + 2]), w(f[g + 3])), v = f[g + 2], h = f[g + 3], g += 4;
                    break;
                  case u.OPS.curveTo3:
                    v = f[g + 2], h = f[g + 3], I.push("C", w(f[g]), w(f[g + 1]), w(v), w(h), w(v), w(h)), g += 4;
                    break;
                  case u.OPS.closePath:
                    I.push("Z");
                    break;
                }
              I = I.join(" "), j.path && o.length > 0 && o[0] !== u.OPS.rectangle && o[0] !== u.OPS.moveTo ? I = j.path.getAttributeNS(null, "d") + I : (j.path = this.svgFactory.createElement("svg:path"), this._ensureTransformGroup().append(j.path)), j.path.setAttributeNS(null, "d", I), j.path.setAttributeNS(null, "fill", "none"), j.element = j.path, j.setCurrentPoint(v, h);
            }
            endPath() {
              const o = this.current;
              if (o.path = null, !this.pendingClip)
                return;
              if (!o.element) {
                this.pendingClip = null;
                return;
              }
              const f = `clippath${y++}`, j = this.svgFactory.createElement("svg:clipPath");
              j.setAttributeNS(null, "id", f), j.setAttributeNS(null, "transform", _(this.transformMatrix));
              const v = o.element.cloneNode(!0);
              if (this.pendingClip === "evenodd" ? v.setAttributeNS(null, "clip-rule", "evenodd") : v.setAttributeNS(null, "clip-rule", "nonzero"), this.pendingClip = null, j.append(v), this.defs.append(j), o.activeClipUrl) {
                o.clipGroup = null;
                for (const h of this.extraStack)
                  h.clipGroup = null;
                j.setAttributeNS(null, "clip-path", o.activeClipUrl);
              }
              o.activeClipUrl = `url(#${f})`, this.tgrp = null;
            }
            clip(o) {
              this.pendingClip = o;
            }
            closePath() {
              const o = this.current;
              if (o.path) {
                const f = `${o.path.getAttributeNS(null, "d")}Z`;
                o.path.setAttributeNS(null, "d", f);
              }
            }
            setLeading(o) {
              this.current.leading = -o;
            }
            setTextRise(o) {
              this.current.textRise = o;
            }
            setTextRenderingMode(o) {
              this.current.textRenderingMode = o;
            }
            setHScale(o) {
              this.current.textHScale = o / 100;
            }
            setRenderingIntent(o) {
            }
            setFlatness(o) {
            }
            setGState(o) {
              for (const [f, j] of o)
                switch (f) {
                  case "LW":
                    this.setLineWidth(j);
                    break;
                  case "LC":
                    this.setLineCap(j);
                    break;
                  case "LJ":
                    this.setLineJoin(j);
                    break;
                  case "ML":
                    this.setMiterLimit(j);
                    break;
                  case "D":
                    this.setDash(j[0], j[1]);
                    break;
                  case "RI":
                    this.setRenderingIntent(j);
                    break;
                  case "FL":
                    this.setFlatness(j);
                    break;
                  case "Font":
                    this.setFont(j);
                    break;
                  case "CA":
                    this.setStrokeAlpha(j);
                    break;
                  case "ca":
                    this.setFillAlpha(j);
                    break;
                  default:
                    (0, u.warn)(`Unimplemented graphic state operator ${f}`);
                    break;
                }
            }
            fill() {
              const o = this.current;
              o.element && (o.element.setAttributeNS(null, "fill", o.fillColor), o.element.setAttributeNS(null, "fill-opacity", o.fillAlpha), this.endPath());
            }
            stroke() {
              const o = this.current;
              o.element && (this._setStrokeAttributes(o.element), o.element.setAttributeNS(null, "fill", "none"), this.endPath());
            }
            _setStrokeAttributes(o, f = 1) {
              const j = this.current;
              let v = j.dashArray;
              f !== 1 && v.length > 0 && (v = v.map(function(h) {
                return f * h;
              })), o.setAttributeNS(null, "stroke", j.strokeColor), o.setAttributeNS(null, "stroke-opacity", j.strokeAlpha), o.setAttributeNS(null, "stroke-miterlimit", w(j.miterLimit)), o.setAttributeNS(null, "stroke-linecap", j.lineCap), o.setAttributeNS(null, "stroke-linejoin", j.lineJoin), o.setAttributeNS(null, "stroke-width", w(f * j.lineWidth) + "px"), o.setAttributeNS(null, "stroke-dasharray", v.map(w).join(" ")), o.setAttributeNS(null, "stroke-dashoffset", w(f * j.dashPhase) + "px");
            }
            eoFill() {
              var o;
              (o = this.current.element) == null || o.setAttributeNS(null, "fill-rule", "evenodd"), this.fill();
            }
            fillStroke() {
              this.stroke(), this.fill();
            }
            eoFillStroke() {
              var o;
              (o = this.current.element) == null || o.setAttributeNS(null, "fill-rule", "evenodd"), this.fillStroke();
            }
            closeStroke() {
              this.closePath(), this.stroke();
            }
            closeFillStroke() {
              this.closePath(), this.fillStroke();
            }
            closeEOFillStroke() {
              this.closePath(), this.eoFillStroke();
            }
            paintSolidColorImageMask() {
              const o = this.svgFactory.createElement("svg:rect");
              o.setAttributeNS(null, "x", "0"), o.setAttributeNS(null, "y", "0"), o.setAttributeNS(null, "width", "1px"), o.setAttributeNS(null, "height", "1px"), o.setAttributeNS(null, "fill", this.current.fillColor), this._ensureTransformGroup().append(o);
            }
            paintImageXObject(o) {
              const f = this.getObject(o);
              if (!f) {
                (0, u.warn)(`Dependent image with object ID ${o} is not ready yet`);
                return;
              }
              this.paintInlineImageXObject(f);
            }
            paintInlineImageXObject(o, f) {
              const j = o.width, v = o.height, h = F(o, this.forceDataSchema, !!f), I = this.svgFactory.createElement("svg:rect");
              I.setAttributeNS(null, "x", "0"), I.setAttributeNS(null, "y", "0"), I.setAttributeNS(null, "width", w(j)), I.setAttributeNS(null, "height", w(v)), this.current.element = I, this.clip("nonzero");
              const g = this.svgFactory.createElement("svg:image");
              g.setAttributeNS(X, "xlink:href", h), g.setAttributeNS(null, "x", "0"), g.setAttributeNS(null, "y", w(-v)), g.setAttributeNS(null, "width", w(j) + "px"), g.setAttributeNS(null, "height", w(v) + "px"), g.setAttributeNS(null, "transform", `scale(${w(1 / j)} ${w(-1 / v)})`), f ? f.append(g) : this._ensureTransformGroup().append(g);
            }
            paintImageMaskXObject(o) {
              const f = this.getObject(o.data, o);
              if (f.bitmap) {
                (0, u.warn)("paintImageMaskXObject: ImageBitmap support is not implemented, ensure that the `isOffscreenCanvasSupported` API parameter is disabled.");
                return;
              }
              const j = this.current, v = f.width, h = f.height, I = j.fillColor;
              j.maskId = `mask${S++}`;
              const g = this.svgFactory.createElement("svg:mask");
              g.setAttributeNS(null, "id", j.maskId);
              const U = this.svgFactory.createElement("svg:rect");
              U.setAttributeNS(null, "x", "0"), U.setAttributeNS(null, "y", "0"), U.setAttributeNS(null, "width", w(v)), U.setAttributeNS(null, "height", w(h)), U.setAttributeNS(null, "fill", I), U.setAttributeNS(null, "mask", `url(#${j.maskId})`), this.defs.append(g), this._ensureTransformGroup().append(U), this.paintInlineImageXObject(f, g);
            }
            paintFormXObjectBegin(o, f) {
              if (Array.isArray(o) && o.length === 6 && this.transform(o[0], o[1], o[2], o[3], o[4], o[5]), f) {
                const j = f[2] - f[0], v = f[3] - f[1], h = this.svgFactory.createElement("svg:rect");
                h.setAttributeNS(null, "x", f[0]), h.setAttributeNS(null, "y", f[1]), h.setAttributeNS(null, "width", w(j)), h.setAttributeNS(null, "height", w(v)), this.current.element = h, this.clip("nonzero"), this.endPath();
              }
            }
            paintFormXObjectEnd() {
            }
            _initialize(o) {
              const f = this.svgFactory.create(o.width, o.height), j = this.svgFactory.createElement("svg:defs");
              f.append(j), this.defs = j;
              const v = this.svgFactory.createElement("svg:g");
              return v.setAttributeNS(null, "transform", _(o.transform)), f.append(v), this.svg = v, f;
            }
            _ensureClipGroup() {
              if (!this.current.clipGroup) {
                const o = this.svgFactory.createElement("svg:g");
                o.setAttributeNS(null, "clip-path", this.current.activeClipUrl), this.svg.append(o), this.current.clipGroup = o;
              }
              return this.current.clipGroup;
            }
            _ensureTransformGroup() {
              return this.tgrp || (this.tgrp = this.svgFactory.createElement("svg:g"), this.tgrp.setAttributeNS(null, "transform", _(this.transformMatrix)), this.current.activeClipUrl ? this._ensureClipGroup().append(this.tgrp) : this.svg.append(this.tgrp)), this.tgrp;
            }
          }
          s.SVGGraphics = R;
        },
        /* 25 */
        /***/
        (C, s) => {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.XfaText = void 0;
          class O {
            static textContent(u) {
              const B = [], L = {
                items: B,
                styles: /* @__PURE__ */ Object.create(null)
              };
              function X(b) {
                var F;
                if (!b)
                  return;
                let P = null;
                const p = b.name;
                if (p === "#text")
                  P = b.value;
                else if (O.shouldBuildText(p))
                  (F = b == null ? void 0 : b.attributes) != null && F.textContent ? P = b.attributes.textContent : b.value && (P = b.value);
                else
                  return;
                if (P !== null && B.push({
                  str: P
                }), !!b.children)
                  for (const M of b.children)
                    X(M);
              }
              return X(u), L;
            }
            static shouldBuildText(u) {
              return !(u === "textarea" || u === "input" || u === "option" || u === "select");
            }
          }
          s.XfaText = O;
        },
        /* 26 */
        /***/
        (C, s, O) => {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.TextLayerRenderTask = void 0, s.renderTextLayer = _, s.updateTextLayer = y;
          var n = O(1), u = O(6);
          const B = 1e5, L = 30, X = 0.8, b = /* @__PURE__ */ new Map();
          function P(S, D) {
            let R;
            if (D && n.FeatureTest.isOffscreenCanvasSupported)
              R = new OffscreenCanvas(S, S).getContext("2d", {
                alpha: !1
              });
            else {
              const A = document.createElement("canvas");
              A.width = A.height = S, R = A.getContext("2d", {
                alpha: !1
              });
            }
            return R;
          }
          function p(S, D) {
            const R = b.get(S);
            if (R)
              return R;
            const A = P(L, D);
            A.font = `${L}px ${S}`;
            const o = A.measureText("");
            let f = o.fontBoundingBoxAscent, j = Math.abs(o.fontBoundingBoxDescent);
            if (f) {
              const h = f / (f + j);
              return b.set(S, h), A.canvas.width = A.canvas.height = 0, h;
            }
            A.strokeStyle = "red", A.clearRect(0, 0, L, L), A.strokeText("g", 0, 0);
            let v = A.getImageData(0, 0, L, L).data;
            j = 0;
            for (let h = v.length - 1 - 3; h >= 0; h -= 4)
              if (v[h] > 0) {
                j = Math.ceil(h / 4 / L);
                break;
              }
            A.clearRect(0, 0, L, L), A.strokeText("A", 0, L), v = A.getImageData(0, 0, L, L).data, f = 0;
            for (let h = 0, I = v.length; h < I; h += 4)
              if (v[h] > 0) {
                f = L - Math.floor(h / 4 / L);
                break;
              }
            if (A.canvas.width = A.canvas.height = 0, f) {
              const h = f / (f + j);
              return b.set(S, h), h;
            }
            return b.set(S, X), X;
          }
          function F(S, D, R) {
            const A = document.createElement("span"), o = {
              angle: 0,
              canvasWidth: 0,
              hasText: D.str !== "",
              hasEOL: D.hasEOL,
              fontSize: 0
            };
            S._textDivs.push(A);
            const f = n.Util.transform(S._transform, D.transform);
            let j = Math.atan2(f[1], f[0]);
            const v = R[D.fontName];
            v.vertical && (j += Math.PI / 2);
            const h = Math.hypot(f[2], f[3]), I = h * p(v.fontFamily, S._isOffscreenCanvasSupported);
            let g, U;
            j === 0 ? (g = f[4], U = f[5] - I) : (g = f[4] + I * Math.sin(j), U = f[5] - I * Math.cos(j));
            const G = "calc(var(--scale-factor)*", m = A.style;
            S._container === S._rootContainer ? (m.left = `${(100 * g / S._pageWidth).toFixed(2)}%`, m.top = `${(100 * U / S._pageHeight).toFixed(2)}%`) : (m.left = `${G}${g.toFixed(2)}px)`, m.top = `${G}${U.toFixed(2)}px)`), m.fontSize = `${G}${h.toFixed(2)}px)`, m.fontFamily = v.fontFamily, o.fontSize = h, A.setAttribute("role", "presentation"), A.textContent = D.str, A.dir = D.dir, S._fontInspectorEnabled && (A.dataset.fontName = D.fontName), j !== 0 && (o.angle = j * (180 / Math.PI));
            let Y = !1;
            if (D.str.length > 1)
              Y = !0;
            else if (D.str !== " " && D.transform[0] !== D.transform[3]) {
              const Q = Math.abs(D.transform[0]), it = Math.abs(D.transform[3]);
              Q !== it && Math.max(Q, it) / Math.min(Q, it) > 1.5 && (Y = !0);
            }
            Y && (o.canvasWidth = v.vertical ? D.height : D.width), S._textDivProperties.set(A, o), S._isReadableStream && S._layoutText(A);
          }
          function M(S) {
            const {
              div: D,
              scale: R,
              properties: A,
              ctx: o,
              prevFontSize: f,
              prevFontFamily: j
            } = S, {
              style: v
            } = D;
            let h = "";
            if (A.canvasWidth !== 0 && A.hasText) {
              const {
                fontFamily: I
              } = v, {
                canvasWidth: g,
                fontSize: U
              } = A;
              (f !== U || j !== I) && (o.font = `${U * R}px ${I}`, S.prevFontSize = U, S.prevFontFamily = I);
              const {
                width: G
              } = o.measureText(D.textContent);
              G > 0 && (h = `scaleX(${g * R / G})`);
            }
            A.angle !== 0 && (h = `rotate(${A.angle}deg) ${h}`), h.length > 0 && (v.transform = h);
          }
          function k(S) {
            if (S._canceled)
              return;
            const D = S._textDivs, R = S._capability;
            if (D.length > B) {
              R.resolve();
              return;
            }
            if (!S._isReadableStream)
              for (const o of D)
                S._layoutText(o);
            R.resolve();
          }
          class w {
            constructor({
              textContentSource: D,
              container: R,
              viewport: A,
              textDivs: o,
              textDivProperties: f,
              textContentItemsStr: j,
              isOffscreenCanvasSupported: v
            }) {
              var G;
              this._textContentSource = D, this._isReadableStream = D instanceof ReadableStream, this._container = this._rootContainer = R, this._textDivs = o || [], this._textContentItemsStr = j || [], this._isOffscreenCanvasSupported = v, this._fontInspectorEnabled = !!((G = globalThis.FontInspector) != null && G.enabled), this._reader = null, this._textDivProperties = f || /* @__PURE__ */ new WeakMap(), this._canceled = !1, this._capability = new n.PromiseCapability(), this._layoutTextParams = {
                prevFontSize: null,
                prevFontFamily: null,
                div: null,
                scale: A.scale * (globalThis.devicePixelRatio || 1),
                properties: null,
                ctx: P(0, v)
              };
              const {
                pageWidth: h,
                pageHeight: I,
                pageX: g,
                pageY: U
              } = A.rawDims;
              this._transform = [1, 0, 0, -1, -g, U + I], this._pageWidth = h, this._pageHeight = I, (0, u.setLayerDimensions)(R, A), this._capability.promise.finally(() => {
                this._layoutTextParams = null;
              }).catch(() => {
              });
            }
            get promise() {
              return this._capability.promise;
            }
            cancel() {
              this._canceled = !0, this._reader && (this._reader.cancel(new n.AbortException("TextLayer task cancelled.")).catch(() => {
              }), this._reader = null), this._capability.reject(new n.AbortException("TextLayer task cancelled."));
            }
            _processItems(D, R) {
              for (const A of D) {
                if (A.str === void 0) {
                  if (A.type === "beginMarkedContentProps" || A.type === "beginMarkedContent") {
                    const o = this._container;
                    this._container = document.createElement("span"), this._container.classList.add("markedContent"), A.id !== null && this._container.setAttribute("id", `${A.id}`), o.append(this._container);
                  } else
                    A.type === "endMarkedContent" && (this._container = this._container.parentNode);
                  continue;
                }
                this._textContentItemsStr.push(A.str), F(this, A, R);
              }
            }
            _layoutText(D) {
              const R = this._layoutTextParams.properties = this._textDivProperties.get(D);
              if (this._layoutTextParams.div = D, M(this._layoutTextParams), R.hasText && this._container.append(D), R.hasEOL) {
                const A = document.createElement("br");
                A.setAttribute("role", "presentation"), this._container.append(A);
              }
            }
            _render() {
              const D = new n.PromiseCapability();
              let R = /* @__PURE__ */ Object.create(null);
              if (this._isReadableStream) {
                const A = () => {
                  this._reader.read().then(({
                    value: o,
                    done: f
                  }) => {
                    if (f) {
                      D.resolve();
                      return;
                    }
                    Object.assign(R, o.styles), this._processItems(o.items, R), A();
                  }, D.reject);
                };
                this._reader = this._textContentSource.getReader(), A();
              } else if (this._textContentSource) {
                const {
                  items: A,
                  styles: o
                } = this._textContentSource;
                this._processItems(A, o), D.resolve();
              } else
                throw new Error('No "textContentSource" parameter specified.');
              D.promise.then(() => {
                R = null, k(this);
              }, this._capability.reject);
            }
          }
          s.TextLayerRenderTask = w;
          function _(S) {
            !S.textContentSource && (S.textContent || S.textContentStream) && ((0, u.deprecated)("The TextLayerRender `textContent`/`textContentStream` parameters will be removed in the future, please use `textContentSource` instead."), S.textContentSource = S.textContent || S.textContentStream);
            const {
              container: D,
              viewport: R
            } = S, A = getComputedStyle(D), o = A.getPropertyValue("visibility"), f = parseFloat(A.getPropertyValue("--scale-factor"));
            o === "visible" && (!f || Math.abs(f - R.scale) > 1e-5) && console.error("The `--scale-factor` CSS-variable must be set, to the same value as `viewport.scale`, either on the `container`-element itself or higher up in the DOM.");
            const j = new w(S);
            return j._render(), j;
          }
          function y({
            container: S,
            viewport: D,
            textDivs: R,
            textDivProperties: A,
            isOffscreenCanvasSupported: o,
            mustRotate: f = !0,
            mustRescale: j = !0
          }) {
            if (f && (0, u.setLayerDimensions)(S, {
              rotation: D.rotation
            }), j) {
              const v = P(0, o), I = {
                prevFontSize: null,
                prevFontFamily: null,
                div: null,
                scale: D.scale * (globalThis.devicePixelRatio || 1),
                properties: null,
                ctx: v
              };
              for (const g of R)
                I.properties = A.get(g), I.div = g, M(I);
            }
          }
        },
        /* 27 */
        /***/
        (C, s, O) => {
          var p, F, M, k, w, _, y, S, D, R, A, nn, f, ke, v, sn, I, rn;
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.AnnotationEditorLayer = void 0;
          var n = O(1), u = O(4), B = O(28), L = O(33), X = O(6), b = O(34);
          const U = class U {
            constructor({
              uiManager: m,
              pageIndex: Y,
              div: Q,
              accessibilityManager: it,
              annotationLayer: z,
              viewport: lt,
              l10n: K
            }) {
              V(this, A);
              V(this, f);
              V(this, v);
              V(this, I);
              V(this, p, void 0);
              V(this, F, !1);
              V(this, M, null);
              V(this, k, this.pointerup.bind(this));
              V(this, w, this.pointerdown.bind(this));
              V(this, _, /* @__PURE__ */ new Map());
              V(this, y, !1);
              V(this, S, !1);
              V(this, D, !1);
              V(this, R, void 0);
              const ht = [B.FreeTextEditor, L.InkEditor, b.StampEditor];
              if (!U._initialized) {
                U._initialized = !0;
                for (const yt of ht)
                  yt.initialize(K);
              }
              m.registerEditorTypes(ht), ct(this, R, m), this.pageIndex = Y, this.div = Q, ct(this, p, it), ct(this, M, z), this.viewport = lt, t(this, R).addLayer(this);
            }
            get isEmpty() {
              return t(this, _).size === 0;
            }
            updateToolbar(m) {
              t(this, R).updateToolbar(m);
            }
            updateMode(m = t(this, R).getMode()) {
              Z(this, I, rn).call(this), m === n.AnnotationEditorType.INK ? (this.addInkEditorIfNeeded(!1), this.disableClick()) : this.enableClick(), m !== n.AnnotationEditorType.NONE && (this.div.classList.toggle("freeTextEditing", m === n.AnnotationEditorType.FREETEXT), this.div.classList.toggle("inkEditing", m === n.AnnotationEditorType.INK), this.div.classList.toggle("stampEditing", m === n.AnnotationEditorType.STAMP), this.div.hidden = !1);
            }
            addInkEditorIfNeeded(m) {
              if (!m && t(this, R).getMode() !== n.AnnotationEditorType.INK)
                return;
              if (!m) {
                for (const Q of t(this, _).values())
                  if (Q.isEmpty()) {
                    Q.setInBackground();
                    return;
                  }
              }
              Z(this, f, ke).call(this, {
                offsetX: 0,
                offsetY: 0
              }, !1).setInBackground();
            }
            setEditingState(m) {
              t(this, R).setEditingState(m);
            }
            addCommands(m) {
              t(this, R).addCommands(m);
            }
            enable() {
              this.div.style.pointerEvents = "auto";
              const m = /* @__PURE__ */ new Set();
              for (const Q of t(this, _).values())
                Q.enableEditing(), Q.annotationElementId && m.add(Q.annotationElementId);
              if (!t(this, M))
                return;
              const Y = t(this, M).getEditableAnnotations();
              for (const Q of Y) {
                if (Q.hide(), t(this, R).isDeletedAnnotationElement(Q.data.id) || m.has(Q.data.id))
                  continue;
                const it = this.deserialize(Q);
                it && (this.addOrRebuild(it), it.enableEditing());
              }
            }
            disable() {
              var Y;
              ct(this, D, !0), this.div.style.pointerEvents = "none";
              const m = /* @__PURE__ */ new Set();
              for (const Q of t(this, _).values()) {
                if (Q.disableEditing(), !Q.annotationElementId || Q.serialize() !== null) {
                  m.add(Q.annotationElementId);
                  continue;
                }
                (Y = this.getEditableAnnotation(Q.annotationElementId)) == null || Y.show(), Q.remove();
              }
              if (t(this, M)) {
                const Q = t(this, M).getEditableAnnotations();
                for (const it of Q) {
                  const {
                    id: z
                  } = it.data;
                  m.has(z) || t(this, R).isDeletedAnnotationElement(z) || it.show();
                }
              }
              Z(this, I, rn).call(this), this.isEmpty && (this.div.hidden = !0), ct(this, D, !1);
            }
            getEditableAnnotation(m) {
              var Y;
              return ((Y = t(this, M)) == null ? void 0 : Y.getEditableAnnotation(m)) || null;
            }
            setActiveEditor(m) {
              t(this, R).getActive() !== m && t(this, R).setActiveEditor(m);
            }
            enableClick() {
              this.div.addEventListener("pointerdown", t(this, w)), this.div.addEventListener("pointerup", t(this, k));
            }
            disableClick() {
              this.div.removeEventListener("pointerdown", t(this, w)), this.div.removeEventListener("pointerup", t(this, k));
            }
            attach(m) {
              t(this, _).set(m.id, m);
              const {
                annotationElementId: Y
              } = m;
              Y && t(this, R).isDeletedAnnotationElement(Y) && t(this, R).removeDeletedAnnotationElement(m);
            }
            detach(m) {
              var Y;
              t(this, _).delete(m.id), (Y = t(this, p)) == null || Y.removePointerInTextLayer(m.contentDiv), !t(this, D) && m.annotationElementId && t(this, R).addDeletedAnnotationElement(m);
            }
            remove(m) {
              this.detach(m), t(this, R).removeEditor(m), m.div.contains(document.activeElement) && setTimeout(() => {
                t(this, R).focusMainContainer();
              }, 0), m.div.remove(), m.isAttachedToDOM = !1, t(this, S) || this.addInkEditorIfNeeded(!1);
            }
            changeParent(m) {
              var Y;
              m.parent !== this && (m.annotationElementId && (t(this, R).addDeletedAnnotationElement(m.annotationElementId), u.AnnotationEditor.deleteAnnotationElement(m), m.annotationElementId = null), this.attach(m), (Y = m.parent) == null || Y.detach(m), m.setParent(this), m.div && m.isAttachedToDOM && (m.div.remove(), this.div.append(m.div)));
            }
            add(m) {
              if (this.changeParent(m), t(this, R).addEditor(m), this.attach(m), !m.isAttachedToDOM) {
                const Y = m.render();
                this.div.append(Y), m.isAttachedToDOM = !0;
              }
              m.fixAndSetPosition(), m.onceAdded(), t(this, R).addToAnnotationStorage(m);
            }
            moveEditorInDOM(m) {
              var Q;
              if (!m.isAttachedToDOM)
                return;
              const {
                activeElement: Y
              } = document;
              m.div.contains(Y) && (m._focusEventsAllowed = !1, setTimeout(() => {
                m.div.contains(document.activeElement) ? m._focusEventsAllowed = !0 : (m.div.addEventListener("focusin", () => {
                  m._focusEventsAllowed = !0;
                }, {
                  once: !0
                }), Y.focus());
              }, 0)), m._structTreeParentId = (Q = t(this, p)) == null ? void 0 : Q.moveElementInDOM(this.div, m.div, m.contentDiv, !0);
            }
            addOrRebuild(m) {
              m.needsToBeRebuilt() ? m.rebuild() : this.add(m);
            }
            addUndoableEditor(m) {
              const Y = () => m._uiManager.rebuild(m), Q = () => {
                m.remove();
              };
              this.addCommands({
                cmd: Y,
                undo: Q,
                mustExec: !1
              });
            }
            getNextId() {
              return t(this, R).getId();
            }
            pasteEditor(m, Y) {
              t(this, R).updateToolbar(m), t(this, R).updateMode(m);
              const {
                offsetX: Q,
                offsetY: it
              } = Z(this, v, sn).call(this), z = this.getNextId(), lt = Z(this, A, nn).call(this, {
                parent: this,
                id: z,
                x: Q,
                y: it,
                uiManager: t(this, R),
                isCentered: !0,
                ...Y
              });
              lt && this.add(lt);
            }
            deserialize(m) {
              switch (m.annotationType ?? m.annotationEditorType) {
                case n.AnnotationEditorType.FREETEXT:
                  return B.FreeTextEditor.deserialize(m, this, t(this, R));
                case n.AnnotationEditorType.INK:
                  return L.InkEditor.deserialize(m, this, t(this, R));
                case n.AnnotationEditorType.STAMP:
                  return b.StampEditor.deserialize(m, this, t(this, R));
              }
              return null;
            }
            addNewEditor() {
              Z(this, f, ke).call(this, Z(this, v, sn).call(this), !0);
            }
            setSelected(m) {
              t(this, R).setSelected(m);
            }
            toggleSelected(m) {
              t(this, R).toggleSelected(m);
            }
            isSelected(m) {
              return t(this, R).isSelected(m);
            }
            unselect(m) {
              t(this, R).unselect(m);
            }
            pointerup(m) {
              const {
                isMac: Y
              } = n.FeatureTest.platform;
              if (!(m.button !== 0 || m.ctrlKey && Y) && m.target === this.div && t(this, y)) {
                if (ct(this, y, !1), !t(this, F)) {
                  ct(this, F, !0);
                  return;
                }
                if (t(this, R).getMode() === n.AnnotationEditorType.STAMP) {
                  t(this, R).unselectAll();
                  return;
                }
                Z(this, f, ke).call(this, m, !1);
              }
            }
            pointerdown(m) {
              if (t(this, y)) {
                ct(this, y, !1);
                return;
              }
              const {
                isMac: Y
              } = n.FeatureTest.platform;
              if (m.button !== 0 || m.ctrlKey && Y || m.target !== this.div)
                return;
              ct(this, y, !0);
              const Q = t(this, R).getActive();
              ct(this, F, !Q || Q.isEmpty());
            }
            findNewParent(m, Y, Q) {
              const it = t(this, R).findParent(Y, Q);
              return it === null || it === this ? !1 : (it.changeParent(m), !0);
            }
            destroy() {
              var m, Y;
              ((m = t(this, R).getActive()) == null ? void 0 : m.parent) === this && (t(this, R).commitOrRemove(), t(this, R).setActiveEditor(null));
              for (const Q of t(this, _).values())
                (Y = t(this, p)) == null || Y.removePointerInTextLayer(Q.contentDiv), Q.setParent(null), Q.isAttachedToDOM = !1, Q.div.remove();
              this.div = null, t(this, _).clear(), t(this, R).removeLayer(this);
            }
            render({
              viewport: m
            }) {
              this.viewport = m, (0, X.setLayerDimensions)(this.div, m);
              for (const Y of t(this, R).getEditors(this.pageIndex))
                this.add(Y);
              this.updateMode();
            }
            update({
              viewport: m
            }) {
              t(this, R).commitOrRemove(), this.viewport = m, (0, X.setLayerDimensions)(this.div, {
                rotation: m.rotation
              }), this.updateMode();
            }
            get pageDimensions() {
              const {
                pageWidth: m,
                pageHeight: Y
              } = this.viewport.rawDims;
              return [m, Y];
            }
          };
          p = new WeakMap(), F = new WeakMap(), M = new WeakMap(), k = new WeakMap(), w = new WeakMap(), _ = new WeakMap(), y = new WeakMap(), S = new WeakMap(), D = new WeakMap(), R = new WeakMap(), A = new WeakSet(), nn = function(m) {
            switch (t(this, R).getMode()) {
              case n.AnnotationEditorType.FREETEXT:
                return new B.FreeTextEditor(m);
              case n.AnnotationEditorType.INK:
                return new L.InkEditor(m);
              case n.AnnotationEditorType.STAMP:
                return new b.StampEditor(m);
            }
            return null;
          }, f = new WeakSet(), ke = function(m, Y) {
            const Q = this.getNextId(), it = Z(this, A, nn).call(this, {
              parent: this,
              id: Q,
              x: m.offsetX,
              y: m.offsetY,
              uiManager: t(this, R),
              isCentered: Y
            });
            return it && this.add(it), it;
          }, v = new WeakSet(), sn = function() {
            const {
              x: m,
              y: Y,
              width: Q,
              height: it
            } = this.div.getBoundingClientRect(), z = Math.max(0, m), lt = Math.max(0, Y), K = Math.min(window.innerWidth, m + Q), ht = Math.min(window.innerHeight, Y + it), yt = (z + K) / 2 - m, E = (lt + ht) / 2 - Y, [e, l] = this.viewport.rotation % 180 === 0 ? [yt, E] : [E, yt];
            return {
              offsetX: e,
              offsetY: l
            };
          }, I = new WeakSet(), rn = function() {
            ct(this, S, !0);
            for (const m of t(this, _).values())
              m.isEmpty() && m.remove();
            ct(this, S, !1);
          }, ne(U, "_initialized", !1);
          let P = U;
          s.AnnotationEditorLayer = P;
        },
        /* 28 */
        /***/
        (C, s, O) => {
          var b, P, p, F, M, k, w, _, y, S, Fn, R, Dn, o, On, j, Ae, h, an, g, In, G, on;
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.FreeTextEditor = void 0;
          var n = O(1), u = O(5), B = O(4), L = O(29);
          const Y = class Y extends B.AnnotationEditor {
            constructor(z) {
              super({
                ...z,
                name: "freeTextEditor"
              });
              V(this, S);
              V(this, R);
              V(this, o);
              V(this, j);
              V(this, h);
              V(this, g);
              V(this, G);
              V(this, b, this.editorDivBlur.bind(this));
              V(this, P, this.editorDivFocus.bind(this));
              V(this, p, this.editorDivInput.bind(this));
              V(this, F, this.editorDivKeydown.bind(this));
              V(this, M, void 0);
              V(this, k, "");
              V(this, w, `${this.id}-editor`);
              V(this, _, void 0);
              V(this, y, null);
              ct(this, M, z.color || Y._defaultColor || B.AnnotationEditor._defaultLineColor), ct(this, _, z.fontSize || Y._defaultFontSize);
            }
            static get _keyboardManager() {
              const z = Y.prototype, lt = (yt) => yt.isEmpty(), K = u.AnnotationEditorUIManager.TRANSLATE_SMALL, ht = u.AnnotationEditorUIManager.TRANSLATE_BIG;
              return (0, n.shadow)(this, "_keyboardManager", new u.KeyboardManager([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], z.commitOrRemove, {
                bubbles: !0
              }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], z.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], z._translateEmpty, {
                args: [-K, 0],
                checker: lt
              }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], z._translateEmpty, {
                args: [-ht, 0],
                checker: lt
              }], [["ArrowRight", "mac+ArrowRight"], z._translateEmpty, {
                args: [K, 0],
                checker: lt
              }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], z._translateEmpty, {
                args: [ht, 0],
                checker: lt
              }], [["ArrowUp", "mac+ArrowUp"], z._translateEmpty, {
                args: [0, -K],
                checker: lt
              }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], z._translateEmpty, {
                args: [0, -ht],
                checker: lt
              }], [["ArrowDown", "mac+ArrowDown"], z._translateEmpty, {
                args: [0, K],
                checker: lt
              }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], z._translateEmpty, {
                args: [0, ht],
                checker: lt
              }]]));
            }
            static initialize(z) {
              B.AnnotationEditor.initialize(z, {
                strings: ["free_text2_default_content", "editor_free_text2_aria_label"]
              });
              const lt = getComputedStyle(document.documentElement);
              this._internalPadding = parseFloat(lt.getPropertyValue("--freetext-padding"));
            }
            static updateDefaultParams(z, lt) {
              switch (z) {
                case n.AnnotationEditorParamsType.FREETEXT_SIZE:
                  Y._defaultFontSize = lt;
                  break;
                case n.AnnotationEditorParamsType.FREETEXT_COLOR:
                  Y._defaultColor = lt;
                  break;
              }
            }
            updateParams(z, lt) {
              switch (z) {
                case n.AnnotationEditorParamsType.FREETEXT_SIZE:
                  Z(this, S, Fn).call(this, lt);
                  break;
                case n.AnnotationEditorParamsType.FREETEXT_COLOR:
                  Z(this, R, Dn).call(this, lt);
                  break;
              }
            }
            static get defaultPropertiesToUpdate() {
              return [[n.AnnotationEditorParamsType.FREETEXT_SIZE, Y._defaultFontSize], [n.AnnotationEditorParamsType.FREETEXT_COLOR, Y._defaultColor || B.AnnotationEditor._defaultLineColor]];
            }
            get propertiesToUpdate() {
              return [[n.AnnotationEditorParamsType.FREETEXT_SIZE, t(this, _)], [n.AnnotationEditorParamsType.FREETEXT_COLOR, t(this, M)]];
            }
            _translateEmpty(z, lt) {
              this._uiManager.translateSelectedEditors(z, lt, !0);
            }
            getInitialTranslation() {
              const z = this.parentScale;
              return [-Y._internalPadding * z, -(Y._internalPadding + t(this, _)) * z];
            }
            rebuild() {
              this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
            }
            enableEditMode() {
              this.isInEditMode() || (this.parent.setEditingState(!1), this.parent.updateToolbar(n.AnnotationEditorType.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), this.editorDiv.addEventListener("keydown", t(this, F)), this.editorDiv.addEventListener("focus", t(this, P)), this.editorDiv.addEventListener("blur", t(this, b)), this.editorDiv.addEventListener("input", t(this, p)));
            }
            disableEditMode() {
              this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", t(this, w)), this._isDraggable = !0, this.editorDiv.removeEventListener("keydown", t(this, F)), this.editorDiv.removeEventListener("focus", t(this, P)), this.editorDiv.removeEventListener("blur", t(this, b)), this.editorDiv.removeEventListener("input", t(this, p)), this.div.focus({
                preventScroll: !0
              }), this.isEditing = !1, this.parent.div.classList.add("freeTextEditing"));
            }
            focusin(z) {
              this._focusEventsAllowed && (super.focusin(z), z.target !== this.editorDiv && this.editorDiv.focus());
            }
            onceAdded() {
              var z;
              if (this.width) {
                Z(this, G, on).call(this);
                return;
              }
              this.enableEditMode(), this.editorDiv.focus(), (z = this._initialOptions) != null && z.isCentered && this.center(), this._initialOptions = null;
            }
            isEmpty() {
              return !this.editorDiv || this.editorDiv.innerText.trim() === "";
            }
            remove() {
              this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freeTextEditing")), super.remove();
            }
            commit() {
              if (!this.isInEditMode())
                return;
              super.commit(), this.disableEditMode();
              const z = t(this, k), lt = ct(this, k, Z(this, o, On).call(this).trimEnd());
              if (z === lt)
                return;
              const K = (ht) => {
                if (ct(this, k, ht), !ht) {
                  this.remove();
                  return;
                }
                Z(this, h, an).call(this), this._uiManager.rebuild(this), Z(this, j, Ae).call(this);
              };
              this.addCommands({
                cmd: () => {
                  K(lt);
                },
                undo: () => {
                  K(z);
                },
                mustExec: !1
              }), Z(this, j, Ae).call(this);
            }
            shouldGetKeyboardEvents() {
              return this.isInEditMode();
            }
            enterInEditMode() {
              this.enableEditMode(), this.editorDiv.focus();
            }
            dblclick(z) {
              this.enterInEditMode();
            }
            keydown(z) {
              z.target === this.div && z.key === "Enter" && (this.enterInEditMode(), z.preventDefault());
            }
            editorDivKeydown(z) {
              Y._keyboardManager.exec(this, z);
            }
            editorDivFocus(z) {
              this.isEditing = !0;
            }
            editorDivBlur(z) {
              this.isEditing = !1;
            }
            editorDivInput(z) {
              this.parent.div.classList.toggle("freeTextEditing", this.isEmpty());
            }
            disableEditing() {
              this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
            }
            enableEditing() {
              this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
            }
            render() {
              if (this.div)
                return this.div;
              let z, lt;
              this.width && (z = this.x, lt = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", t(this, w)), this.enableEditing(), B.AnnotationEditor._l10nPromise.get("editor_free_text2_aria_label").then((ht) => {
                var yt;
                return (yt = this.editorDiv) == null ? void 0 : yt.setAttribute("aria-label", ht);
              }), B.AnnotationEditor._l10nPromise.get("free_text2_default_content").then((ht) => {
                var yt;
                return (yt = this.editorDiv) == null ? void 0 : yt.setAttribute("default-content", ht);
              }), this.editorDiv.contentEditable = !0;
              const {
                style: K
              } = this.editorDiv;
              if (K.fontSize = `calc(${t(this, _)}px * var(--scale-factor))`, K.color = t(this, M), this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), (0, u.bindEvents)(this, this.div, ["dblclick", "keydown"]), this.width) {
                const [ht, yt] = this.parentDimensions;
                if (this.annotationElementId) {
                  const {
                    position: E
                  } = t(this, y);
                  let [e, l] = this.getInitialTranslation();
                  [e, l] = this.pageTranslationToScreen(e, l);
                  const [i, c] = this.pageDimensions, [d, T] = this.pageTranslation;
                  let N, W;
                  switch (this.rotation) {
                    case 0:
                      N = z + (E[0] - d) / i, W = lt + this.height - (E[1] - T) / c;
                      break;
                    case 90:
                      N = z + (E[0] - d) / i, W = lt - (E[1] - T) / c, [e, l] = [l, -e];
                      break;
                    case 180:
                      N = z - this.width + (E[0] - d) / i, W = lt - (E[1] - T) / c, [e, l] = [-e, -l];
                      break;
                    case 270:
                      N = z + (E[0] - d - this.height * c) / i, W = lt + (E[1] - T - this.width * i) / c, [e, l] = [-l, e];
                      break;
                  }
                  this.setAt(N * ht, W * yt, e, l);
                } else
                  this.setAt(z * ht, lt * yt, this.width * ht, this.height * yt);
                Z(this, h, an).call(this), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
              } else
                this._isDraggable = !1, this.editorDiv.contentEditable = !0;
              return this.div;
            }
            get contentDiv() {
              return this.editorDiv;
            }
            static deserialize(z, lt, K) {
              let ht = null;
              if (z instanceof L.FreeTextAnnotationElement) {
                const {
                  data: {
                    defaultAppearanceData: {
                      fontSize: E,
                      fontColor: e
                    },
                    rect: l,
                    rotation: i,
                    id: c
                  },
                  textContent: d,
                  textPosition: T,
                  parent: {
                    page: {
                      pageNumber: N
                    }
                  }
                } = z;
                if (!d || d.length === 0)
                  return null;
                ht = z = {
                  annotationType: n.AnnotationEditorType.FREETEXT,
                  color: Array.from(e),
                  fontSize: E,
                  value: d.join(`
`),
                  position: T,
                  pageIndex: N - 1,
                  rect: l,
                  rotation: i,
                  id: c,
                  deleted: !1
                };
              }
              const yt = super.deserialize(z, lt, K);
              return ct(yt, _, z.fontSize), ct(yt, M, n.Util.makeHexColor(...z.color)), ct(yt, k, z.value), yt.annotationElementId = z.id || null, ct(yt, y, ht), yt;
            }
            serialize(z = !1) {
              if (this.isEmpty())
                return null;
              if (this.deleted)
                return {
                  pageIndex: this.pageIndex,
                  id: this.annotationElementId,
                  deleted: !0
                };
              const lt = Y._internalPadding * this.parentScale, K = this.getRect(lt, lt), ht = B.AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : t(this, M)), yt = {
                annotationType: n.AnnotationEditorType.FREETEXT,
                color: ht,
                fontSize: t(this, _),
                value: t(this, k),
                pageIndex: this.pageIndex,
                rect: K,
                rotation: this.rotation,
                structTreeParentId: this._structTreeParentId
              };
              return z ? yt : this.annotationElementId && !Z(this, g, In).call(this, yt) ? null : (yt.id = this.annotationElementId, yt);
            }
          };
          b = new WeakMap(), P = new WeakMap(), p = new WeakMap(), F = new WeakMap(), M = new WeakMap(), k = new WeakMap(), w = new WeakMap(), _ = new WeakMap(), y = new WeakMap(), S = new WeakSet(), Fn = function(z) {
            const lt = (ht) => {
              this.editorDiv.style.fontSize = `calc(${ht}px * var(--scale-factor))`, this.translate(0, -(ht - t(this, _)) * this.parentScale), ct(this, _, ht), Z(this, j, Ae).call(this);
            }, K = t(this, _);
            this.addCommands({
              cmd: () => {
                lt(z);
              },
              undo: () => {
                lt(K);
              },
              mustExec: !0,
              type: n.AnnotationEditorParamsType.FREETEXT_SIZE,
              overwriteIfSameType: !0,
              keepUndo: !0
            });
          }, R = new WeakSet(), Dn = function(z) {
            const lt = t(this, M);
            this.addCommands({
              cmd: () => {
                ct(this, M, this.editorDiv.style.color = z);
              },
              undo: () => {
                ct(this, M, this.editorDiv.style.color = lt);
              },
              mustExec: !0,
              type: n.AnnotationEditorParamsType.FREETEXT_COLOR,
              overwriteIfSameType: !0,
              keepUndo: !0
            });
          }, o = new WeakSet(), On = function() {
            const z = this.editorDiv.getElementsByTagName("div");
            if (z.length === 0)
              return this.editorDiv.innerText;
            const lt = [];
            for (const K of z)
              lt.push(K.innerText.replace(/\r\n?|\n/, ""));
            return lt.join(`
`);
          }, j = new WeakSet(), Ae = function() {
            const [z, lt] = this.parentDimensions;
            let K;
            if (this.isAttachedToDOM)
              K = this.div.getBoundingClientRect();
            else {
              const {
                currentLayer: ht,
                div: yt
              } = this, E = yt.style.display;
              yt.style.display = "hidden", ht.div.append(this.div), K = yt.getBoundingClientRect(), yt.remove(), yt.style.display = E;
            }
            this.rotation % 180 === this.parentRotation % 180 ? (this.width = K.width / z, this.height = K.height / lt) : (this.width = K.height / z, this.height = K.width / lt), this.fixAndSetPosition();
          }, h = new WeakSet(), an = function() {
            if (this.editorDiv.replaceChildren(), !!t(this, k))
              for (const z of t(this, k).split(`
`)) {
                const lt = document.createElement("div");
                lt.append(z ? document.createTextNode(z) : document.createElement("br")), this.editorDiv.append(lt);
              }
          }, g = new WeakSet(), In = function(z) {
            const {
              value: lt,
              fontSize: K,
              color: ht,
              rect: yt,
              pageIndex: E
            } = t(this, y);
            return z.value !== lt || z.fontSize !== K || z.rect.some((e, l) => Math.abs(e - yt[l]) >= 1) || z.color.some((e, l) => e !== ht[l]) || z.pageIndex !== E;
          }, G = new WeakSet(), on = function(z = !1) {
            if (!this.annotationElementId)
              return;
            if (Z(this, j, Ae).call(this), !z && (this.width === 0 || this.height === 0)) {
              setTimeout(() => Z(this, G, on).call(this, !0), 0);
              return;
            }
            const lt = Y._internalPadding * this.parentScale;
            t(this, y).rect = this.getRect(lt, lt);
          }, ne(Y, "_freeTextDefaultContent", ""), ne(Y, "_internalPadding", 0), ne(Y, "_defaultColor", null), ne(Y, "_defaultFontSize", 10), ne(Y, "_type", "freetext");
          let X = Y;
          s.FreeTextEditor = X;
        },
        /* 29 */
        /***/
        (C, s, O) => {
          var l, c, he, T, Ln, W, q, nt, ut, pt, bt, ft, xt, It, Tt, Ot, _t, at, ot, mt, wt, Ct, Ut, Nn, Wt, Me, Gt, ln, zt, cn, rt, tt, At, St, ee, te, st, hn, Nt, Rt, jt, Bt, jn, Et, un;
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.StampAnnotationElement = s.InkAnnotationElement = s.FreeTextAnnotationElement = s.AnnotationLayer = void 0;
          var n = O(1), u = O(6), B = O(3), L = O(30), X = O(31), b = O(32);
          const P = 1e3, p = 9, F = /* @__PURE__ */ new WeakSet();
          function M(Lt) {
            return {
              width: Lt[2] - Lt[0],
              height: Lt[3] - Lt[1]
            };
          }
          class k {
            static create(H) {
              switch (H.data.annotationType) {
                case n.AnnotationType.LINK:
                  return new _(H);
                case n.AnnotationType.TEXT:
                  return new y(H);
                case n.AnnotationType.WIDGET:
                  switch (H.data.fieldType) {
                    case "Tx":
                      return new D(H);
                    case "Btn":
                      return H.data.radioButton ? new o(H) : H.data.checkBox ? new A(H) : new f(H);
                    case "Ch":
                      return new j(H);
                    case "Sig":
                      return new R(H);
                  }
                  return new S(H);
                case n.AnnotationType.POPUP:
                  return new v(H);
                case n.AnnotationType.FREETEXT:
                  return new I(H);
                case n.AnnotationType.LINE:
                  return new g(H);
                case n.AnnotationType.SQUARE:
                  return new U(H);
                case n.AnnotationType.CIRCLE:
                  return new G(H);
                case n.AnnotationType.POLYLINE:
                  return new m(H);
                case n.AnnotationType.CARET:
                  return new Q(H);
                case n.AnnotationType.INK:
                  return new it(H);
                case n.AnnotationType.POLYGON:
                  return new Y(H);
                case n.AnnotationType.HIGHLIGHT:
                  return new z(H);
                case n.AnnotationType.UNDERLINE:
                  return new lt(H);
                case n.AnnotationType.SQUIGGLY:
                  return new K(H);
                case n.AnnotationType.STRIKEOUT:
                  return new ht(H);
                case n.AnnotationType.STAMP:
                  return new yt(H);
                case n.AnnotationType.FILEATTACHMENT:
                  return new E(H);
                default:
                  return new w(H);
              }
            }
          }
          const i = class i {
            constructor(H, {
              isRenderable: a = !1,
              ignoreBorder: x = !1,
              createQuadrilaterals: $ = !1
            } = {}) {
              V(this, l, !1);
              this.isRenderable = a, this.data = H.data, this.layer = H.layer, this.linkService = H.linkService, this.downloadManager = H.downloadManager, this.imageResourcesPath = H.imageResourcesPath, this.renderForms = H.renderForms, this.svgFactory = H.svgFactory, this.annotationStorage = H.annotationStorage, this.enableScripting = H.enableScripting, this.hasJSActions = H.hasJSActions, this._fieldObjects = H.fieldObjects, this.parent = H.parent, a && (this.container = this._createContainer(x)), $ && this._createQuadrilaterals();
            }
            static _hasPopupData({
              titleObj: H,
              contentsObj: a,
              richText: x
            }) {
              return !!(H != null && H.str || a != null && a.str || x != null && x.str);
            }
            get hasPopupData() {
              return i._hasPopupData(this.data);
            }
            _createContainer(H) {
              const {
                data: a,
                parent: {
                  page: x,
                  viewport: $
                }
              } = this, J = document.createElement("section");
              J.setAttribute("data-annotation-id", a.id), this instanceof S || (J.tabIndex = P), J.style.zIndex = this.parent.zIndex++, this.data.popupRef && J.setAttribute("aria-haspopup", "dialog"), a.noRotate && J.classList.add("norotate");
              const {
                pageWidth: et,
                pageHeight: dt,
                pageX: vt,
                pageY: Mt
              } = $.rawDims;
              if (!a.rect || this instanceof v) {
                const {
                  rotation: $t
                } = a;
                return !a.hasOwnCanvas && $t !== 0 && this.setRotation($t, J), J;
              }
              const {
                width: kt,
                height: Xt
              } = M(a.rect), Ft = n.Util.normalizeRect([a.rect[0], x.view[3] - a.rect[1] + x.view[1], a.rect[2], x.view[3] - a.rect[3] + x.view[1]]);
              if (!H && a.borderStyle.width > 0) {
                J.style.borderWidth = `${a.borderStyle.width}px`;
                const $t = a.borderStyle.horizontalCornerRadius, Yt = a.borderStyle.verticalCornerRadius;
                if ($t > 0 || Yt > 0) {
                  const Zt = `calc(${$t}px * var(--scale-factor)) / calc(${Yt}px * var(--scale-factor))`;
                  J.style.borderRadius = Zt;
                } else if (this instanceof o) {
                  const Zt = `calc(${kt}px * var(--scale-factor)) / calc(${Xt}px * var(--scale-factor))`;
                  J.style.borderRadius = Zt;
                }
                switch (a.borderStyle.style) {
                  case n.AnnotationBorderStyleType.SOLID:
                    J.style.borderStyle = "solid";
                    break;
                  case n.AnnotationBorderStyleType.DASHED:
                    J.style.borderStyle = "dashed";
                    break;
                  case n.AnnotationBorderStyleType.BEVELED:
                    (0, n.warn)("Unimplemented border style: beveled");
                    break;
                  case n.AnnotationBorderStyleType.INSET:
                    (0, n.warn)("Unimplemented border style: inset");
                    break;
                  case n.AnnotationBorderStyleType.UNDERLINE:
                    J.style.borderBottomStyle = "solid";
                    break;
                }
                const Jt = a.borderColor || null;
                Jt ? (ct(this, l, !0), J.style.borderColor = n.Util.makeHexColor(Jt[0] | 0, Jt[1] | 0, Jt[2] | 0)) : J.style.borderWidth = 0;
              }
              J.style.left = `${100 * (Ft[0] - vt) / et}%`, J.style.top = `${100 * (Ft[1] - Mt) / dt}%`;
              const {
                rotation: Dt
              } = a;
              return a.hasOwnCanvas || Dt === 0 ? (J.style.width = `${100 * kt / et}%`, J.style.height = `${100 * Xt / dt}%`) : this.setRotation(Dt, J), J;
            }
            setRotation(H, a = this.container) {
              if (!this.data.rect)
                return;
              const {
                pageWidth: x,
                pageHeight: $
              } = this.parent.viewport.rawDims, {
                width: J,
                height: et
              } = M(this.data.rect);
              let dt, vt;
              H % 180 === 0 ? (dt = 100 * J / x, vt = 100 * et / $) : (dt = 100 * et / x, vt = 100 * J / $), a.style.width = `${dt}%`, a.style.height = `${vt}%`, a.setAttribute("data-main-rotation", (360 - H) % 360);
            }
            get _commonActions() {
              const H = (a, x, $) => {
                const J = $.detail[a], et = J[0], dt = J.slice(1);
                $.target.style[x] = L.ColorConverters[`${et}_HTML`](dt), this.annotationStorage.setValue(this.data.id, {
                  [x]: L.ColorConverters[`${et}_rgb`](dt)
                });
              };
              return (0, n.shadow)(this, "_commonActions", {
                display: (a) => {
                  const {
                    display: x
                  } = a.detail, $ = x % 2 === 1;
                  this.container.style.visibility = $ ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                    noView: $,
                    noPrint: x === 1 || x === 2
                  });
                },
                print: (a) => {
                  this.annotationStorage.setValue(this.data.id, {
                    noPrint: !a.detail.print
                  });
                },
                hidden: (a) => {
                  const {
                    hidden: x
                  } = a.detail;
                  this.container.style.visibility = x ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                    noPrint: x,
                    noView: x
                  });
                },
                focus: (a) => {
                  setTimeout(() => a.target.focus({
                    preventScroll: !1
                  }), 0);
                },
                userName: (a) => {
                  a.target.title = a.detail.userName;
                },
                readonly: (a) => {
                  a.target.disabled = a.detail.readonly;
                },
                required: (a) => {
                  this._setRequired(a.target, a.detail.required);
                },
                bgColor: (a) => {
                  H("bgColor", "backgroundColor", a);
                },
                fillColor: (a) => {
                  H("fillColor", "backgroundColor", a);
                },
                fgColor: (a) => {
                  H("fgColor", "color", a);
                },
                textColor: (a) => {
                  H("textColor", "color", a);
                },
                borderColor: (a) => {
                  H("borderColor", "borderColor", a);
                },
                strokeColor: (a) => {
                  H("strokeColor", "borderColor", a);
                },
                rotation: (a) => {
                  const x = a.detail.rotation;
                  this.setRotation(x), this.annotationStorage.setValue(this.data.id, {
                    rotation: x
                  });
                }
              });
            }
            _dispatchEventFromSandbox(H, a) {
              const x = this._commonActions;
              for (const $ of Object.keys(a.detail)) {
                const J = H[$] || x[$];
                J == null || J(a);
              }
            }
            _setDefaultPropertiesFromJS(H) {
              if (!this.enableScripting)
                return;
              const a = this.annotationStorage.getRawValue(this.data.id);
              if (!a)
                return;
              const x = this._commonActions;
              for (const [$, J] of Object.entries(a)) {
                const et = x[$];
                if (et) {
                  const dt = {
                    detail: {
                      [$]: J
                    },
                    target: H
                  };
                  et(dt), delete a[$];
                }
              }
            }
            _createQuadrilaterals() {
              if (!this.container)
                return;
              const {
                quadPoints: H
              } = this.data;
              if (!H)
                return;
              const [a, x, $, J] = this.data.rect;
              if (H.length === 1) {
                const [, {
                  x: Yt,
                  y: Jt
                }, {
                  x: Zt,
                  y: se
                }] = H[0];
                if ($ === Yt && J === Jt && a === Zt && x === se)
                  return;
              }
              const {
                style: et
              } = this.container;
              let dt;
              if (t(this, l)) {
                const {
                  borderColor: Yt,
                  borderWidth: Jt
                } = et;
                et.borderWidth = 0, dt = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${Yt}" stroke-width="${Jt}">`], this.container.classList.add("hasBorder");
              }
              const vt = $ - a, Mt = J - x, {
                svgFactory: kt
              } = this, Xt = kt.createElement("svg");
              Xt.classList.add("quadrilateralsContainer"), Xt.setAttribute("width", 0), Xt.setAttribute("height", 0);
              const Ft = kt.createElement("defs");
              Xt.append(Ft);
              const Dt = kt.createElement("clipPath"), $t = `clippath_${this.data.id}`;
              Dt.setAttribute("id", $t), Dt.setAttribute("clipPathUnits", "objectBoundingBox"), Ft.append(Dt);
              for (const [, {
                x: Yt,
                y: Jt
              }, {
                x: Zt,
                y: se
              }] of H) {
                const ie = kt.createElement("rect"), re = (Zt - a) / vt, le = (J - Jt) / Mt, ce = (Yt - Zt) / vt, vn = (Jt - se) / Mt;
                ie.setAttribute("x", re), ie.setAttribute("y", le), ie.setAttribute("width", ce), ie.setAttribute("height", vn), Dt.append(ie), dt == null || dt.push(`<rect vector-effect="non-scaling-stroke" x="${re}" y="${le}" width="${ce}" height="${vn}"/>`);
              }
              t(this, l) && (dt.push("</g></svg>')"), et.backgroundImage = dt.join("")), this.container.append(Xt), this.container.style.clipPath = `url(#${$t})`;
            }
            _createPopup() {
              const {
                container: H,
                data: a
              } = this;
              H.setAttribute("aria-haspopup", "dialog");
              const x = new v({
                data: {
                  color: a.color,
                  titleObj: a.titleObj,
                  modificationDate: a.modificationDate,
                  contentsObj: a.contentsObj,
                  richText: a.richText,
                  parentRect: a.rect,
                  borderStyle: 0,
                  id: `popup_${a.id}`,
                  rotation: a.rotation
                },
                parent: this.parent,
                elements: [this]
              });
              this.parent.div.append(x.render());
            }
            render() {
              (0, n.unreachable)("Abstract method `AnnotationElement.render` called");
            }
            _getElementsByName(H, a = null) {
              const x = [];
              if (this._fieldObjects) {
                const $ = this._fieldObjects[H];
                if ($)
                  for (const {
                    page: J,
                    id: et,
                    exportValues: dt
                  } of $) {
                    if (J === -1 || et === a)
                      continue;
                    const vt = typeof dt == "string" ? dt : null, Mt = document.querySelector(`[data-element-id="${et}"]`);
                    if (Mt && !F.has(Mt)) {
                      (0, n.warn)(`_getElementsByName - element not allowed: ${et}`);
                      continue;
                    }
                    x.push({
                      id: et,
                      exportValue: vt,
                      domElement: Mt
                    });
                  }
                return x;
              }
              for (const $ of document.getElementsByName(H)) {
                const {
                  exportValue: J
                } = $, et = $.getAttribute("data-element-id");
                et !== a && F.has($) && x.push({
                  id: et,
                  exportValue: J,
                  domElement: $
                });
              }
              return x;
            }
            show() {
              var H;
              this.container && (this.container.hidden = !1), (H = this.popup) == null || H.maybeShow();
            }
            hide() {
              var H;
              this.container && (this.container.hidden = !0), (H = this.popup) == null || H.forceHide();
            }
            getElementsToTriggerPopup() {
              return this.container;
            }
            addHighlightArea() {
              const H = this.getElementsToTriggerPopup();
              if (Array.isArray(H))
                for (const a of H)
                  a.classList.add("highlightArea");
              else
                H.classList.add("highlightArea");
            }
            _editOnDoubleClick() {
              const {
                annotationEditorType: H,
                data: {
                  id: a
                }
              } = this;
              this.container.addEventListener("dblclick", () => {
                var x;
                (x = this.linkService.eventBus) == null || x.dispatch("switchannotationeditormode", {
                  source: this,
                  mode: H,
                  editId: a
                });
              });
            }
          };
          l = new WeakMap();
          let w = i;
          class _ extends w {
            constructor(a, x = null) {
              super(a, {
                isRenderable: !0,
                ignoreBorder: !!(x != null && x.ignoreBorder),
                createQuadrilaterals: !0
              });
              V(this, c);
              V(this, T);
              this.isTooltipOnly = a.data.isTooltipOnly;
            }
            render() {
              const {
                data: a,
                linkService: x
              } = this, $ = document.createElement("a");
              $.setAttribute("data-element-id", a.id);
              let J = !1;
              return a.url ? (x.addLinkAttributes($, a.url, a.newWindow), J = !0) : a.action ? (this._bindNamedAction($, a.action), J = !0) : a.attachment ? (this._bindAttachment($, a.attachment), J = !0) : a.setOCGState ? (Z(this, T, Ln).call(this, $, a.setOCGState), J = !0) : a.dest ? (this._bindLink($, a.dest), J = !0) : (a.actions && (a.actions.Action || a.actions["Mouse Up"] || a.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction($, a), J = !0), a.resetForm ? (this._bindResetFormAction($, a.resetForm), J = !0) : this.isTooltipOnly && !J && (this._bindLink($, ""), J = !0)), this.container.classList.add("linkAnnotation"), J && this.container.append($), this.container;
            }
            _bindLink(a, x) {
              a.href = this.linkService.getDestinationHash(x), a.onclick = () => (x && this.linkService.goToDestination(x), !1), (x || x === "") && Z(this, c, he).call(this);
            }
            _bindNamedAction(a, x) {
              a.href = this.linkService.getAnchorUrl(""), a.onclick = () => (this.linkService.executeNamedAction(x), !1), Z(this, c, he).call(this);
            }
            _bindAttachment(a, x) {
              a.href = this.linkService.getAnchorUrl(""), a.onclick = () => {
                var $;
                return ($ = this.downloadManager) == null || $.openOrDownloadData(this.container, x.content, x.filename), !1;
              }, Z(this, c, he).call(this);
            }
            _bindJSAction(a, x) {
              a.href = this.linkService.getAnchorUrl("");
              const $ = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
              for (const J of Object.keys(x.actions)) {
                const et = $.get(J);
                et && (a[et] = () => {
                  var dt;
                  return (dt = this.linkService.eventBus) == null || dt.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                      id: x.id,
                      name: J
                    }
                  }), !1;
                });
              }
              a.onclick || (a.onclick = () => !1), Z(this, c, he).call(this);
            }
            _bindResetFormAction(a, x) {
              const $ = a.onclick;
              if ($ || (a.href = this.linkService.getAnchorUrl("")), Z(this, c, he).call(this), !this._fieldObjects) {
                (0, n.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), $ || (a.onclick = () => !1);
                return;
              }
              a.onclick = () => {
                var Xt;
                $ == null || $();
                const {
                  fields: J,
                  refs: et,
                  include: dt
                } = x, vt = [];
                if (J.length !== 0 || et.length !== 0) {
                  const Ft = new Set(et);
                  for (const Dt of J) {
                    const $t = this._fieldObjects[Dt] || [];
                    for (const {
                      id: Yt
                    } of $t)
                      Ft.add(Yt);
                  }
                  for (const Dt of Object.values(this._fieldObjects))
                    for (const $t of Dt)
                      Ft.has($t.id) === dt && vt.push($t);
                } else
                  for (const Ft of Object.values(this._fieldObjects))
                    vt.push(...Ft);
                const Mt = this.annotationStorage, kt = [];
                for (const Ft of vt) {
                  const {
                    id: Dt
                  } = Ft;
                  switch (kt.push(Dt), Ft.type) {
                    case "text": {
                      const Yt = Ft.defaultValue || "";
                      Mt.setValue(Dt, {
                        value: Yt
                      });
                      break;
                    }
                    case "checkbox":
                    case "radiobutton": {
                      const Yt = Ft.defaultValue === Ft.exportValues;
                      Mt.setValue(Dt, {
                        value: Yt
                      });
                      break;
                    }
                    case "combobox":
                    case "listbox": {
                      const Yt = Ft.defaultValue || "";
                      Mt.setValue(Dt, {
                        value: Yt
                      });
                      break;
                    }
                    default:
                      continue;
                  }
                  const $t = document.querySelector(`[data-element-id="${Dt}"]`);
                  if ($t) {
                    if (!F.has($t)) {
                      (0, n.warn)(`_bindResetFormAction - element not allowed: ${Dt}`);
                      continue;
                    }
                  } else
                    continue;
                  $t.dispatchEvent(new Event("resetform"));
                }
                return this.enableScripting && ((Xt = this.linkService.eventBus) == null || Xt.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: "app",
                    ids: kt,
                    name: "ResetForm"
                  }
                })), !1;
              };
            }
          }
          c = new WeakSet(), he = function() {
            this.container.setAttribute("data-internal-link", "");
          }, T = new WeakSet(), Ln = function(a, x) {
            a.href = this.linkService.getAnchorUrl(""), a.onclick = () => (this.linkService.executeSetOCGState(x), !1), Z(this, c, he).call(this);
          };
          class y extends w {
            constructor(H) {
              super(H, {
                isRenderable: !0
              });
            }
            render() {
              this.container.classList.add("textAnnotation");
              const H = document.createElement("img");
              return H.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", H.alt = "[{{type}} Annotation]", H.dataset.l10nId = "text_annotation_type", H.dataset.l10nArgs = JSON.stringify({
                type: this.data.name
              }), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(H), this.container;
            }
          }
          class S extends w {
            render() {
              return this.data.alternativeText && (this.container.title = this.data.alternativeText), this.container;
            }
            showElementAndHideCanvas(H) {
              var a;
              this.data.hasOwnCanvas && (((a = H.previousSibling) == null ? void 0 : a.nodeName) === "CANVAS" && (H.previousSibling.hidden = !0), H.hidden = !1);
            }
            _getKeyModifier(H) {
              const {
                isWin: a,
                isMac: x
              } = n.FeatureTest.platform;
              return a && H.ctrlKey || x && H.metaKey;
            }
            _setEventListener(H, a, x, $, J) {
              x.includes("mouse") ? H.addEventListener(x, (et) => {
                var dt;
                (dt = this.linkService.eventBus) == null || dt.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: this.data.id,
                    name: $,
                    value: J(et),
                    shift: et.shiftKey,
                    modifier: this._getKeyModifier(et)
                  }
                });
              }) : H.addEventListener(x, (et) => {
                var dt;
                if (x === "blur") {
                  if (!a.focused || !et.relatedTarget)
                    return;
                  a.focused = !1;
                } else if (x === "focus") {
                  if (a.focused)
                    return;
                  a.focused = !0;
                }
                J && ((dt = this.linkService.eventBus) == null || dt.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: this.data.id,
                    name: $,
                    value: J(et)
                  }
                }));
              });
            }
            _setEventListeners(H, a, x, $) {
              var J, et, dt;
              for (const [vt, Mt] of x)
                (Mt === "Action" || (J = this.data.actions) != null && J[Mt]) && ((Mt === "Focus" || Mt === "Blur") && (a || (a = {
                  focused: !1
                })), this._setEventListener(H, a, vt, Mt, $), Mt === "Focus" && !((et = this.data.actions) != null && et.Blur) ? this._setEventListener(H, a, "blur", "Blur", null) : Mt === "Blur" && !((dt = this.data.actions) != null && dt.Focus) && this._setEventListener(H, a, "focus", "Focus", null));
            }
            _setBackgroundColor(H) {
              const a = this.data.backgroundColor || null;
              H.style.backgroundColor = a === null ? "transparent" : n.Util.makeHexColor(a[0], a[1], a[2]);
            }
            _setTextStyle(H) {
              const a = ["left", "center", "right"], {
                fontColor: x
              } = this.data.defaultAppearanceData, $ = this.data.defaultAppearanceData.fontSize || p, J = H.style;
              let et;
              const dt = 2, vt = (Mt) => Math.round(10 * Mt) / 10;
              if (this.data.multiLine) {
                const Mt = Math.abs(this.data.rect[3] - this.data.rect[1] - dt), kt = Math.round(Mt / (n.LINE_FACTOR * $)) || 1, Xt = Mt / kt;
                et = Math.min($, vt(Xt / n.LINE_FACTOR));
              } else {
                const Mt = Math.abs(this.data.rect[3] - this.data.rect[1] - dt);
                et = Math.min($, vt(Mt / n.LINE_FACTOR));
              }
              J.fontSize = `calc(${et}px * var(--scale-factor))`, J.color = n.Util.makeHexColor(x[0], x[1], x[2]), this.data.textAlignment !== null && (J.textAlign = a[this.data.textAlignment]);
            }
            _setRequired(H, a) {
              a ? H.setAttribute("required", !0) : H.removeAttribute("required"), H.setAttribute("aria-required", a);
            }
          }
          class D extends S {
            constructor(H) {
              const a = H.renderForms || !H.data.hasAppearance && !!H.data.fieldValue;
              super(H, {
                isRenderable: a
              });
            }
            setPropertyOnSiblings(H, a, x, $) {
              const J = this.annotationStorage;
              for (const et of this._getElementsByName(H.name, H.id))
                et.domElement && (et.domElement[a] = x), J.setValue(et.id, {
                  [$]: x
                });
            }
            render() {
              var $, J;
              const H = this.annotationStorage, a = this.data.id;
              this.container.classList.add("textWidgetAnnotation");
              let x = null;
              if (this.renderForms) {
                const et = H.getValue(a, {
                  value: this.data.fieldValue
                });
                let dt = et.value || "";
                const vt = H.getValue(a, {
                  charLimit: this.data.maxLen
                }).charLimit;
                vt && dt.length > vt && (dt = dt.slice(0, vt));
                let Mt = et.formattedValue || (($ = this.data.textContent) == null ? void 0 : $.join(`
`)) || null;
                Mt && this.data.comb && (Mt = Mt.replaceAll(/\s+/g, ""));
                const kt = {
                  userValue: dt,
                  formattedValue: Mt,
                  lastCommittedValue: null,
                  commitKey: 1,
                  focused: !1
                };
                this.data.multiLine ? (x = document.createElement("textarea"), x.textContent = Mt ?? dt, this.data.doNotScroll && (x.style.overflowY = "hidden")) : (x = document.createElement("input"), x.type = "text", x.setAttribute("value", Mt ?? dt), this.data.doNotScroll && (x.style.overflowX = "hidden")), this.data.hasOwnCanvas && (x.hidden = !0), F.add(x), x.setAttribute("data-element-id", a), x.disabled = this.data.readOnly, x.name = this.data.fieldName, x.tabIndex = P, this._setRequired(x, this.data.required), vt && (x.maxLength = vt), x.addEventListener("input", (Ft) => {
                  H.setValue(a, {
                    value: Ft.target.value
                  }), this.setPropertyOnSiblings(x, "value", Ft.target.value, "value"), kt.formattedValue = null;
                }), x.addEventListener("resetform", (Ft) => {
                  const Dt = this.data.defaultFieldValue ?? "";
                  x.value = kt.userValue = Dt, kt.formattedValue = null;
                });
                let Xt = (Ft) => {
                  const {
                    formattedValue: Dt
                  } = kt;
                  Dt != null && (Ft.target.value = Dt), Ft.target.scrollLeft = 0;
                };
                if (this.enableScripting && this.hasJSActions) {
                  x.addEventListener("focus", (Dt) => {
                    if (kt.focused)
                      return;
                    const {
                      target: $t
                    } = Dt;
                    kt.userValue && ($t.value = kt.userValue), kt.lastCommittedValue = $t.value, kt.commitKey = 1, kt.focused = !0;
                  }), x.addEventListener("updatefromsandbox", (Dt) => {
                    this.showElementAndHideCanvas(Dt.target);
                    const $t = {
                      value(Yt) {
                        kt.userValue = Yt.detail.value ?? "", H.setValue(a, {
                          value: kt.userValue.toString()
                        }), Yt.target.value = kt.userValue;
                      },
                      formattedValue(Yt) {
                        const {
                          formattedValue: Jt
                        } = Yt.detail;
                        kt.formattedValue = Jt, Jt != null && Yt.target !== document.activeElement && (Yt.target.value = Jt), H.setValue(a, {
                          formattedValue: Jt
                        });
                      },
                      selRange(Yt) {
                        Yt.target.setSelectionRange(...Yt.detail.selRange);
                      },
                      charLimit: (Yt) => {
                        var ie;
                        const {
                          charLimit: Jt
                        } = Yt.detail, {
                          target: Zt
                        } = Yt;
                        if (Jt === 0) {
                          Zt.removeAttribute("maxLength");
                          return;
                        }
                        Zt.setAttribute("maxLength", Jt);
                        let se = kt.userValue;
                        !se || se.length <= Jt || (se = se.slice(0, Jt), Zt.value = kt.userValue = se, H.setValue(a, {
                          value: se
                        }), (ie = this.linkService.eventBus) == null || ie.dispatch("dispatcheventinsandbox", {
                          source: this,
                          detail: {
                            id: a,
                            name: "Keystroke",
                            value: se,
                            willCommit: !0,
                            commitKey: 1,
                            selStart: Zt.selectionStart,
                            selEnd: Zt.selectionEnd
                          }
                        }));
                      }
                    };
                    this._dispatchEventFromSandbox($t, Dt);
                  }), x.addEventListener("keydown", (Dt) => {
                    var Jt;
                    kt.commitKey = 1;
                    let $t = -1;
                    if (Dt.key === "Escape" ? $t = 0 : Dt.key === "Enter" && !this.data.multiLine ? $t = 2 : Dt.key === "Tab" && (kt.commitKey = 3), $t === -1)
                      return;
                    const {
                      value: Yt
                    } = Dt.target;
                    kt.lastCommittedValue !== Yt && (kt.lastCommittedValue = Yt, kt.userValue = Yt, (Jt = this.linkService.eventBus) == null || Jt.dispatch("dispatcheventinsandbox", {
                      source: this,
                      detail: {
                        id: a,
                        name: "Keystroke",
                        value: Yt,
                        willCommit: !0,
                        commitKey: $t,
                        selStart: Dt.target.selectionStart,
                        selEnd: Dt.target.selectionEnd
                      }
                    }));
                  });
                  const Ft = Xt;
                  Xt = null, x.addEventListener("blur", (Dt) => {
                    var Yt;
                    if (!kt.focused || !Dt.relatedTarget)
                      return;
                    kt.focused = !1;
                    const {
                      value: $t
                    } = Dt.target;
                    kt.userValue = $t, kt.lastCommittedValue !== $t && ((Yt = this.linkService.eventBus) == null || Yt.dispatch("dispatcheventinsandbox", {
                      source: this,
                      detail: {
                        id: a,
                        name: "Keystroke",
                        value: $t,
                        willCommit: !0,
                        commitKey: kt.commitKey,
                        selStart: Dt.target.selectionStart,
                        selEnd: Dt.target.selectionEnd
                      }
                    })), Ft(Dt);
                  }), (J = this.data.actions) != null && J.Keystroke && x.addEventListener("beforeinput", (Dt) => {
                    var le;
                    kt.lastCommittedValue = null;
                    const {
                      data: $t,
                      target: Yt
                    } = Dt, {
                      value: Jt,
                      selectionStart: Zt,
                      selectionEnd: se
                    } = Yt;
                    let ie = Zt, re = se;
                    switch (Dt.inputType) {
                      case "deleteWordBackward": {
                        const ce = Jt.substring(0, Zt).match(/\w*[^\w]*$/);
                        ce && (ie -= ce[0].length);
                        break;
                      }
                      case "deleteWordForward": {
                        const ce = Jt.substring(Zt).match(/^[^\w]*\w*/);
                        ce && (re += ce[0].length);
                        break;
                      }
                      case "deleteContentBackward":
                        Zt === se && (ie -= 1);
                        break;
                      case "deleteContentForward":
                        Zt === se && (re += 1);
                        break;
                    }
                    Dt.preventDefault(), (le = this.linkService.eventBus) == null || le.dispatch("dispatcheventinsandbox", {
                      source: this,
                      detail: {
                        id: a,
                        name: "Keystroke",
                        value: Jt,
                        change: $t || "",
                        willCommit: !1,
                        selStart: ie,
                        selEnd: re
                      }
                    });
                  }), this._setEventListeners(x, kt, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (Dt) => Dt.target.value);
                }
                if (Xt && x.addEventListener("blur", Xt), this.data.comb) {
                  const Dt = (this.data.rect[2] - this.data.rect[0]) / vt;
                  x.classList.add("comb"), x.style.letterSpacing = `calc(${Dt}px * var(--scale-factor) - 1ch)`;
                }
              } else
                x = document.createElement("div"), x.textContent = this.data.fieldValue, x.style.verticalAlign = "middle", x.style.display = "table-cell";
              return this._setTextStyle(x), this._setBackgroundColor(x), this._setDefaultPropertiesFromJS(x), this.container.append(x), this.container;
            }
          }
          class R extends S {
            constructor(H) {
              super(H, {
                isRenderable: !!H.data.hasOwnCanvas
              });
            }
          }
          class A extends S {
            constructor(H) {
              super(H, {
                isRenderable: H.renderForms
              });
            }
            render() {
              const H = this.annotationStorage, a = this.data, x = a.id;
              let $ = H.getValue(x, {
                value: a.exportValue === a.fieldValue
              }).value;
              typeof $ == "string" && ($ = $ !== "Off", H.setValue(x, {
                value: $
              })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
              const J = document.createElement("input");
              return F.add(J), J.setAttribute("data-element-id", x), J.disabled = a.readOnly, this._setRequired(J, this.data.required), J.type = "checkbox", J.name = a.fieldName, $ && J.setAttribute("checked", !0), J.setAttribute("exportValue", a.exportValue), J.tabIndex = P, J.addEventListener("change", (et) => {
                const {
                  name: dt,
                  checked: vt
                } = et.target;
                for (const Mt of this._getElementsByName(dt, x)) {
                  const kt = vt && Mt.exportValue === a.exportValue;
                  Mt.domElement && (Mt.domElement.checked = kt), H.setValue(Mt.id, {
                    value: kt
                  });
                }
                H.setValue(x, {
                  value: vt
                });
              }), J.addEventListener("resetform", (et) => {
                const dt = a.defaultFieldValue || "Off";
                et.target.checked = dt === a.exportValue;
              }), this.enableScripting && this.hasJSActions && (J.addEventListener("updatefromsandbox", (et) => {
                const dt = {
                  value(vt) {
                    vt.target.checked = vt.detail.value !== "Off", H.setValue(x, {
                      value: vt.target.checked
                    });
                  }
                };
                this._dispatchEventFromSandbox(dt, et);
              }), this._setEventListeners(J, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (et) => et.target.checked)), this._setBackgroundColor(J), this._setDefaultPropertiesFromJS(J), this.container.append(J), this.container;
            }
          }
          class o extends S {
            constructor(H) {
              super(H, {
                isRenderable: H.renderForms
              });
            }
            render() {
              this.container.classList.add("buttonWidgetAnnotation", "radioButton");
              const H = this.annotationStorage, a = this.data, x = a.id;
              let $ = H.getValue(x, {
                value: a.fieldValue === a.buttonValue
              }).value;
              typeof $ == "string" && ($ = $ !== a.buttonValue, H.setValue(x, {
                value: $
              }));
              const J = document.createElement("input");
              if (F.add(J), J.setAttribute("data-element-id", x), J.disabled = a.readOnly, this._setRequired(J, this.data.required), J.type = "radio", J.name = a.fieldName, $ && J.setAttribute("checked", !0), J.tabIndex = P, J.addEventListener("change", (et) => {
                const {
                  name: dt,
                  checked: vt
                } = et.target;
                for (const Mt of this._getElementsByName(dt, x))
                  H.setValue(Mt.id, {
                    value: !1
                  });
                H.setValue(x, {
                  value: vt
                });
              }), J.addEventListener("resetform", (et) => {
                const dt = a.defaultFieldValue;
                et.target.checked = dt != null && dt === a.buttonValue;
              }), this.enableScripting && this.hasJSActions) {
                const et = a.buttonValue;
                J.addEventListener("updatefromsandbox", (dt) => {
                  const vt = {
                    value: (Mt) => {
                      const kt = et === Mt.detail.value;
                      for (const Xt of this._getElementsByName(Mt.target.name)) {
                        const Ft = kt && Xt.id === x;
                        Xt.domElement && (Xt.domElement.checked = Ft), H.setValue(Xt.id, {
                          value: Ft
                        });
                      }
                    }
                  };
                  this._dispatchEventFromSandbox(vt, dt);
                }), this._setEventListeners(J, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (dt) => dt.target.checked);
              }
              return this._setBackgroundColor(J), this._setDefaultPropertiesFromJS(J), this.container.append(J), this.container;
            }
          }
          class f extends _ {
            constructor(H) {
              super(H, {
                ignoreBorder: H.data.hasAppearance
              });
            }
            render() {
              const H = super.render();
              H.classList.add("buttonWidgetAnnotation", "pushButton"), this.data.alternativeText && (H.title = this.data.alternativeText);
              const a = H.lastChild;
              return this.enableScripting && this.hasJSActions && a && (this._setDefaultPropertiesFromJS(a), a.addEventListener("updatefromsandbox", (x) => {
                this._dispatchEventFromSandbox({}, x);
              })), H;
            }
          }
          class j extends S {
            constructor(H) {
              super(H, {
                isRenderable: H.renderForms
              });
            }
            render() {
              this.container.classList.add("choiceWidgetAnnotation");
              const H = this.annotationStorage, a = this.data.id, x = H.getValue(a, {
                value: this.data.fieldValue
              }), $ = document.createElement("select");
              F.add($), $.setAttribute("data-element-id", a), $.disabled = this.data.readOnly, this._setRequired($, this.data.required), $.name = this.data.fieldName, $.tabIndex = P;
              let J = this.data.combo && this.data.options.length > 0;
              this.data.combo || ($.size = this.data.options.length, this.data.multiSelect && ($.multiple = !0)), $.addEventListener("resetform", (kt) => {
                const Xt = this.data.defaultFieldValue;
                for (const Ft of $.options)
                  Ft.selected = Ft.value === Xt;
              });
              for (const kt of this.data.options) {
                const Xt = document.createElement("option");
                Xt.textContent = kt.displayValue, Xt.value = kt.exportValue, x.value.includes(kt.exportValue) && (Xt.setAttribute("selected", !0), J = !1), $.append(Xt);
              }
              let et = null;
              if (J) {
                const kt = document.createElement("option");
                kt.value = " ", kt.setAttribute("hidden", !0), kt.setAttribute("selected", !0), $.prepend(kt), et = () => {
                  kt.remove(), $.removeEventListener("input", et), et = null;
                }, $.addEventListener("input", et);
              }
              const dt = (kt) => {
                const Xt = kt ? "value" : "textContent", {
                  options: Ft,
                  multiple: Dt
                } = $;
                return Dt ? Array.prototype.filter.call(Ft, ($t) => $t.selected).map(($t) => $t[Xt]) : Ft.selectedIndex === -1 ? null : Ft[Ft.selectedIndex][Xt];
              };
              let vt = dt(!1);
              const Mt = (kt) => {
                const Xt = kt.target.options;
                return Array.prototype.map.call(Xt, (Ft) => ({
                  displayValue: Ft.textContent,
                  exportValue: Ft.value
                }));
              };
              return this.enableScripting && this.hasJSActions ? ($.addEventListener("updatefromsandbox", (kt) => {
                const Xt = {
                  value(Ft) {
                    et == null || et();
                    const Dt = Ft.detail.value, $t = new Set(Array.isArray(Dt) ? Dt : [Dt]);
                    for (const Yt of $.options)
                      Yt.selected = $t.has(Yt.value);
                    H.setValue(a, {
                      value: dt(!0)
                    }), vt = dt(!1);
                  },
                  multipleSelection(Ft) {
                    $.multiple = !0;
                  },
                  remove(Ft) {
                    const Dt = $.options, $t = Ft.detail.remove;
                    Dt[$t].selected = !1, $.remove($t), Dt.length > 0 && Array.prototype.findIndex.call(Dt, (Jt) => Jt.selected) === -1 && (Dt[0].selected = !0), H.setValue(a, {
                      value: dt(!0),
                      items: Mt(Ft)
                    }), vt = dt(!1);
                  },
                  clear(Ft) {
                    for (; $.length !== 0; )
                      $.remove(0);
                    H.setValue(a, {
                      value: null,
                      items: []
                    }), vt = dt(!1);
                  },
                  insert(Ft) {
                    const {
                      index: Dt,
                      displayValue: $t,
                      exportValue: Yt
                    } = Ft.detail.insert, Jt = $.children[Dt], Zt = document.createElement("option");
                    Zt.textContent = $t, Zt.value = Yt, Jt ? Jt.before(Zt) : $.append(Zt), H.setValue(a, {
                      value: dt(!0),
                      items: Mt(Ft)
                    }), vt = dt(!1);
                  },
                  items(Ft) {
                    const {
                      items: Dt
                    } = Ft.detail;
                    for (; $.length !== 0; )
                      $.remove(0);
                    for (const $t of Dt) {
                      const {
                        displayValue: Yt,
                        exportValue: Jt
                      } = $t, Zt = document.createElement("option");
                      Zt.textContent = Yt, Zt.value = Jt, $.append(Zt);
                    }
                    $.options.length > 0 && ($.options[0].selected = !0), H.setValue(a, {
                      value: dt(!0),
                      items: Mt(Ft)
                    }), vt = dt(!1);
                  },
                  indices(Ft) {
                    const Dt = new Set(Ft.detail.indices);
                    for (const $t of Ft.target.options)
                      $t.selected = Dt.has($t.index);
                    H.setValue(a, {
                      value: dt(!0)
                    }), vt = dt(!1);
                  },
                  editable(Ft) {
                    Ft.target.disabled = !Ft.detail.editable;
                  }
                };
                this._dispatchEventFromSandbox(Xt, kt);
              }), $.addEventListener("input", (kt) => {
                var Ft;
                const Xt = dt(!0);
                H.setValue(a, {
                  value: Xt
                }), kt.preventDefault(), (Ft = this.linkService.eventBus) == null || Ft.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: a,
                    name: "Keystroke",
                    value: vt,
                    changeEx: Xt,
                    willCommit: !1,
                    commitKey: 1,
                    keyDown: !1
                  }
                });
              }), this._setEventListeners($, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (kt) => kt.target.value)) : $.addEventListener("input", function(kt) {
                H.setValue(a, {
                  value: dt(!0)
                });
              }), this.data.combo && this._setTextStyle($), this._setBackgroundColor($), this._setDefaultPropertiesFromJS($), this.container.append($), this.container;
            }
          }
          class v extends w {
            constructor(H) {
              const {
                data: a,
                elements: x
              } = H;
              super(H, {
                isRenderable: w._hasPopupData(a)
              }), this.elements = x;
            }
            render() {
              this.container.classList.add("popupAnnotation");
              const H = new h({
                container: this.container,
                color: this.data.color,
                titleObj: this.data.titleObj,
                modificationDate: this.data.modificationDate,
                contentsObj: this.data.contentsObj,
                richText: this.data.richText,
                rect: this.data.rect,
                parentRect: this.data.parentRect || null,
                parent: this.parent,
                elements: this.elements,
                open: this.data.open
              }), a = [];
              for (const x of this.elements)
                x.popup = H, a.push(x.data.id), x.addHighlightArea();
              return this.container.setAttribute("aria-controls", a.map((x) => `${n.AnnotationPrefix}${x}`).join(",")), this.container;
            }
          }
          class h {
            constructor({
              container: H,
              color: a,
              elements: x,
              titleObj: $,
              modificationDate: J,
              contentsObj: et,
              richText: dt,
              parent: vt,
              rect: Mt,
              parentRect: kt,
              open: Xt
            }) {
              V(this, Ut);
              V(this, Wt);
              V(this, Gt);
              V(this, zt);
              V(this, W, null);
              V(this, q, Z(this, Ut, Nn).bind(this));
              V(this, nt, Z(this, zt, cn).bind(this));
              V(this, ut, Z(this, Gt, ln).bind(this));
              V(this, pt, Z(this, Wt, Me).bind(this));
              V(this, bt, null);
              V(this, ft, null);
              V(this, xt, null);
              V(this, It, null);
              V(this, Tt, null);
              V(this, Ot, null);
              V(this, _t, !1);
              V(this, at, null);
              V(this, ot, null);
              V(this, mt, null);
              V(this, wt, null);
              V(this, Ct, !1);
              var Dt;
              ct(this, ft, H), ct(this, wt, $), ct(this, xt, et), ct(this, mt, dt), ct(this, Tt, vt), ct(this, bt, a), ct(this, ot, Mt), ct(this, Ot, kt), ct(this, It, x);
              const Ft = u.PDFDateString.toDateObject(J);
              Ft && ct(this, W, vt.l10n.get("annotation_date_string", {
                date: Ft.toLocaleDateString(),
                time: Ft.toLocaleTimeString()
              })), this.trigger = x.flatMap(($t) => $t.getElementsToTriggerPopup());
              for (const $t of this.trigger)
                $t.addEventListener("click", t(this, pt)), $t.addEventListener("mouseenter", t(this, ut)), $t.addEventListener("mouseleave", t(this, nt)), $t.classList.add("popupTriggerArea");
              for (const $t of x)
                (Dt = $t.container) == null || Dt.addEventListener("keydown", t(this, q));
              t(this, ft).hidden = !0, Xt && Z(this, Wt, Me).call(this);
            }
            render() {
              if (t(this, at))
                return;
              const {
                page: {
                  view: H
                },
                viewport: {
                  rawDims: {
                    pageWidth: a,
                    pageHeight: x,
                    pageX: $,
                    pageY: J
                  }
                }
              } = t(this, Tt), et = ct(this, at, document.createElement("div"));
              if (et.className = "popup", t(this, bt)) {
                const ie = et.style.outlineColor = n.Util.makeHexColor(...t(this, bt));
                CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? et.style.backgroundColor = `color-mix(in srgb, ${ie} 30%, white)` : et.style.backgroundColor = n.Util.makeHexColor(...t(this, bt).map((le) => Math.floor(0.7 * (255 - le) + le)));
              }
              const dt = document.createElement("span");
              dt.className = "header";
              const vt = document.createElement("h1");
              if (dt.append(vt), {
                dir: vt.dir,
                str: vt.textContent
              } = t(this, wt), et.append(dt), t(this, W)) {
                const ie = document.createElement("span");
                ie.classList.add("popupDate"), t(this, W).then((re) => {
                  ie.textContent = re;
                }), dt.append(ie);
              }
              const Mt = t(this, xt), kt = t(this, mt);
              if (kt != null && kt.str && (!(Mt != null && Mt.str) || Mt.str === kt.str))
                b.XfaLayer.render({
                  xfaHtml: kt.html,
                  intent: "richText",
                  div: et
                }), et.lastChild.classList.add("richText", "popupContent");
              else {
                const ie = this._formatContents(Mt);
                et.append(ie);
              }
              let Xt = !!t(this, Ot), Ft = Xt ? t(this, Ot) : t(this, ot);
              for (const ie of t(this, It))
                if (!Ft || n.Util.intersect(ie.data.rect, Ft) !== null) {
                  Ft = ie.data.rect, Xt = !0;
                  break;
                }
              const Dt = n.Util.normalizeRect([Ft[0], H[3] - Ft[1] + H[1], Ft[2], H[3] - Ft[3] + H[1]]), Yt = Xt ? Ft[2] - Ft[0] + 5 : 0, Jt = Dt[0] + Yt, Zt = Dt[1], {
                style: se
              } = t(this, ft);
              se.left = `${100 * (Jt - $) / a}%`, se.top = `${100 * (Zt - J) / x}%`, t(this, ft).append(et);
            }
            _formatContents({
              str: H,
              dir: a
            }) {
              const x = document.createElement("p");
              x.classList.add("popupContent"), x.dir = a;
              const $ = H.split(/(?:\r\n?|\n)/);
              for (let J = 0, et = $.length; J < et; ++J) {
                const dt = $[J];
                x.append(document.createTextNode(dt)), J < et - 1 && x.append(document.createElement("br"));
              }
              return x;
            }
            forceHide() {
              ct(this, Ct, this.isVisible), t(this, Ct) && (t(this, ft).hidden = !0);
            }
            maybeShow() {
              t(this, Ct) && (ct(this, Ct, !1), t(this, ft).hidden = !1);
            }
            get isVisible() {
              return t(this, ft).hidden === !1;
            }
          }
          W = new WeakMap(), q = new WeakMap(), nt = new WeakMap(), ut = new WeakMap(), pt = new WeakMap(), bt = new WeakMap(), ft = new WeakMap(), xt = new WeakMap(), It = new WeakMap(), Tt = new WeakMap(), Ot = new WeakMap(), _t = new WeakMap(), at = new WeakMap(), ot = new WeakMap(), mt = new WeakMap(), wt = new WeakMap(), Ct = new WeakMap(), Ut = new WeakSet(), Nn = function(H) {
            H.altKey || H.shiftKey || H.ctrlKey || H.metaKey || (H.key === "Enter" || H.key === "Escape" && t(this, _t)) && Z(this, Wt, Me).call(this);
          }, Wt = new WeakSet(), Me = function() {
            ct(this, _t, !t(this, _t)), t(this, _t) ? (Z(this, Gt, ln).call(this), t(this, ft).addEventListener("click", t(this, pt)), t(this, ft).addEventListener("keydown", t(this, q))) : (Z(this, zt, cn).call(this), t(this, ft).removeEventListener("click", t(this, pt)), t(this, ft).removeEventListener("keydown", t(this, q)));
          }, Gt = new WeakSet(), ln = function() {
            t(this, at) || this.render(), this.isVisible ? t(this, _t) && t(this, ft).classList.add("focused") : (t(this, ft).hidden = !1, t(this, ft).style.zIndex = parseInt(t(this, ft).style.zIndex) + 1e3);
          }, zt = new WeakSet(), cn = function() {
            t(this, ft).classList.remove("focused"), !(t(this, _t) || !this.isVisible) && (t(this, ft).hidden = !0, t(this, ft).style.zIndex = parseInt(t(this, ft).style.zIndex) - 1e3);
          };
          class I extends w {
            constructor(H) {
              super(H, {
                isRenderable: !0,
                ignoreBorder: !0
              }), this.textContent = H.data.textContent, this.textPosition = H.data.textPosition, this.annotationEditorType = n.AnnotationEditorType.FREETEXT;
            }
            render() {
              if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
                const H = document.createElement("div");
                H.classList.add("annotationTextContent"), H.setAttribute("role", "comment");
                for (const a of this.textContent) {
                  const x = document.createElement("span");
                  x.textContent = a, H.append(x);
                }
                this.container.append(H);
              }
              return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
            }
          }
          s.FreeTextAnnotationElement = I;
          class g extends w {
            constructor(a) {
              super(a, {
                isRenderable: !0,
                ignoreBorder: !0
              });
              V(this, rt, null);
            }
            render() {
              this.container.classList.add("lineAnnotation");
              const a = this.data, {
                width: x,
                height: $
              } = M(a.rect), J = this.svgFactory.create(x, $, !0), et = ct(this, rt, this.svgFactory.createElement("svg:line"));
              return et.setAttribute("x1", a.rect[2] - a.lineCoordinates[0]), et.setAttribute("y1", a.rect[3] - a.lineCoordinates[1]), et.setAttribute("x2", a.rect[2] - a.lineCoordinates[2]), et.setAttribute("y2", a.rect[3] - a.lineCoordinates[3]), et.setAttribute("stroke-width", a.borderStyle.width || 1), et.setAttribute("stroke", "transparent"), et.setAttribute("fill", "transparent"), J.append(et), this.container.append(J), !a.popupRef && this.hasPopupData && this._createPopup(), this.container;
            }
            getElementsToTriggerPopup() {
              return t(this, rt);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
          }
          rt = new WeakMap();
          class U extends w {
            constructor(a) {
              super(a, {
                isRenderable: !0,
                ignoreBorder: !0
              });
              V(this, tt, null);
            }
            render() {
              this.container.classList.add("squareAnnotation");
              const a = this.data, {
                width: x,
                height: $
              } = M(a.rect), J = this.svgFactory.create(x, $, !0), et = a.borderStyle.width, dt = ct(this, tt, this.svgFactory.createElement("svg:rect"));
              return dt.setAttribute("x", et / 2), dt.setAttribute("y", et / 2), dt.setAttribute("width", x - et), dt.setAttribute("height", $ - et), dt.setAttribute("stroke-width", et || 1), dt.setAttribute("stroke", "transparent"), dt.setAttribute("fill", "transparent"), J.append(dt), this.container.append(J), !a.popupRef && this.hasPopupData && this._createPopup(), this.container;
            }
            getElementsToTriggerPopup() {
              return t(this, tt);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
          }
          tt = new WeakMap();
          class G extends w {
            constructor(a) {
              super(a, {
                isRenderable: !0,
                ignoreBorder: !0
              });
              V(this, At, null);
            }
            render() {
              this.container.classList.add("circleAnnotation");
              const a = this.data, {
                width: x,
                height: $
              } = M(a.rect), J = this.svgFactory.create(x, $, !0), et = a.borderStyle.width, dt = ct(this, At, this.svgFactory.createElement("svg:ellipse"));
              return dt.setAttribute("cx", x / 2), dt.setAttribute("cy", $ / 2), dt.setAttribute("rx", x / 2 - et / 2), dt.setAttribute("ry", $ / 2 - et / 2), dt.setAttribute("stroke-width", et || 1), dt.setAttribute("stroke", "transparent"), dt.setAttribute("fill", "transparent"), J.append(dt), this.container.append(J), !a.popupRef && this.hasPopupData && this._createPopup(), this.container;
            }
            getElementsToTriggerPopup() {
              return t(this, At);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
          }
          At = new WeakMap();
          class m extends w {
            constructor(a) {
              super(a, {
                isRenderable: !0,
                ignoreBorder: !0
              });
              V(this, St, null);
              this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
            }
            render() {
              this.container.classList.add(this.containerClassName);
              const a = this.data, {
                width: x,
                height: $
              } = M(a.rect), J = this.svgFactory.create(x, $, !0);
              let et = [];
              for (const vt of a.vertices) {
                const Mt = vt.x - a.rect[0], kt = a.rect[3] - vt.y;
                et.push(Mt + "," + kt);
              }
              et = et.join(" ");
              const dt = ct(this, St, this.svgFactory.createElement(this.svgElementName));
              return dt.setAttribute("points", et), dt.setAttribute("stroke-width", a.borderStyle.width || 1), dt.setAttribute("stroke", "transparent"), dt.setAttribute("fill", "transparent"), J.append(dt), this.container.append(J), !a.popupRef && this.hasPopupData && this._createPopup(), this.container;
            }
            getElementsToTriggerPopup() {
              return t(this, St);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
          }
          St = new WeakMap();
          class Y extends m {
            constructor(H) {
              super(H), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
            }
          }
          class Q extends w {
            constructor(H) {
              super(H, {
                isRenderable: !0,
                ignoreBorder: !0
              });
            }
            render() {
              return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
            }
          }
          class it extends w {
            constructor(a) {
              super(a, {
                isRenderable: !0,
                ignoreBorder: !0
              });
              V(this, ee, []);
              this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = n.AnnotationEditorType.INK;
            }
            render() {
              this.container.classList.add(this.containerClassName);
              const a = this.data, {
                width: x,
                height: $
              } = M(a.rect), J = this.svgFactory.create(x, $, !0);
              for (const et of a.inkLists) {
                let dt = [];
                for (const Mt of et) {
                  const kt = Mt.x - a.rect[0], Xt = a.rect[3] - Mt.y;
                  dt.push(`${kt},${Xt}`);
                }
                dt = dt.join(" ");
                const vt = this.svgFactory.createElement(this.svgElementName);
                t(this, ee).push(vt), vt.setAttribute("points", dt), vt.setAttribute("stroke-width", a.borderStyle.width || 1), vt.setAttribute("stroke", "transparent"), vt.setAttribute("fill", "transparent"), !a.popupRef && this.hasPopupData && this._createPopup(), J.append(vt);
              }
              return this.container.append(J), this.container;
            }
            getElementsToTriggerPopup() {
              return t(this, ee);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
          }
          ee = new WeakMap(), s.InkAnnotationElement = it;
          class z extends w {
            constructor(H) {
              super(H, {
                isRenderable: !0,
                ignoreBorder: !0,
                createQuadrilaterals: !0
              });
            }
            render() {
              return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this.container;
            }
          }
          class lt extends w {
            constructor(H) {
              super(H, {
                isRenderable: !0,
                ignoreBorder: !0,
                createQuadrilaterals: !0
              });
            }
            render() {
              return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
            }
          }
          class K extends w {
            constructor(H) {
              super(H, {
                isRenderable: !0,
                ignoreBorder: !0,
                createQuadrilaterals: !0
              });
            }
            render() {
              return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
            }
          }
          class ht extends w {
            constructor(H) {
              super(H, {
                isRenderable: !0,
                ignoreBorder: !0,
                createQuadrilaterals: !0
              });
            }
            render() {
              return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
            }
          }
          class yt extends w {
            constructor(H) {
              super(H, {
                isRenderable: !0,
                ignoreBorder: !0
              });
            }
            render() {
              return this.container.classList.add("stampAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
            }
          }
          s.StampAnnotationElement = yt;
          class E extends w {
            constructor(a) {
              var J;
              super(a, {
                isRenderable: !0
              });
              V(this, st);
              V(this, te, null);
              const {
                filename: x,
                content: $
              } = this.data.file;
              this.filename = (0, u.getFilenameFromUrl)(x, !0), this.content = $, (J = this.linkService.eventBus) == null || J.dispatch("fileattachmentannotation", {
                source: this,
                filename: x,
                content: $
              });
            }
            render() {
              this.container.classList.add("fileAttachmentAnnotation");
              const {
                container: a,
                data: x
              } = this;
              let $;
              x.hasAppearance || x.fillAlpha === 0 ? $ = document.createElement("div") : ($ = document.createElement("img"), $.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(x.name) ? "paperclip" : "pushpin"}.svg`, x.fillAlpha && x.fillAlpha < 1 && ($.style = `filter: opacity(${Math.round(x.fillAlpha * 100)}%);`)), $.addEventListener("dblclick", Z(this, st, hn).bind(this)), ct(this, te, $);
              const {
                isMac: J
              } = n.FeatureTest.platform;
              return a.addEventListener("keydown", (et) => {
                et.key === "Enter" && (J ? et.metaKey : et.ctrlKey) && Z(this, st, hn).call(this);
              }), !x.popupRef && this.hasPopupData ? this._createPopup() : $.classList.add("popupTriggerArea"), a.append($), a;
            }
            getElementsToTriggerPopup() {
              return t(this, te);
            }
            addHighlightArea() {
              this.container.classList.add("highlightArea");
            }
          }
          te = new WeakMap(), st = new WeakSet(), hn = function() {
            var a;
            (a = this.downloadManager) == null || a.openOrDownloadData(this.container, this.content, this.filename);
          };
          class e {
            constructor({
              div: H,
              accessibilityManager: a,
              annotationCanvasMap: x,
              l10n: $,
              page: J,
              viewport: et
            }) {
              V(this, Bt);
              V(this, Et);
              V(this, Nt, null);
              V(this, Rt, null);
              V(this, jt, /* @__PURE__ */ new Map());
              this.div = H, ct(this, Nt, a), ct(this, Rt, x), this.l10n = $, this.page = J, this.viewport = et, this.zIndex = 0, this.l10n || (this.l10n = X.NullL10n);
            }
            async render(H) {
              const {
                annotations: a
              } = H, x = this.div;
              (0, u.setLayerDimensions)(x, this.viewport);
              const $ = /* @__PURE__ */ new Map(), J = {
                data: null,
                layer: x,
                linkService: H.linkService,
                downloadManager: H.downloadManager,
                imageResourcesPath: H.imageResourcesPath || "",
                renderForms: H.renderForms !== !1,
                svgFactory: new u.DOMSVGFactory(),
                annotationStorage: H.annotationStorage || new B.AnnotationStorage(),
                enableScripting: H.enableScripting === !0,
                hasJSActions: H.hasJSActions,
                fieldObjects: H.fieldObjects,
                parent: this,
                elements: null
              };
              for (const et of a) {
                if (et.noHTML)
                  continue;
                const dt = et.annotationType === n.AnnotationType.POPUP;
                if (dt) {
                  const kt = $.get(et.id);
                  if (!kt)
                    continue;
                  J.elements = kt;
                } else {
                  const {
                    width: kt,
                    height: Xt
                  } = M(et.rect);
                  if (kt <= 0 || Xt <= 0)
                    continue;
                }
                J.data = et;
                const vt = k.create(J);
                if (!vt.isRenderable)
                  continue;
                if (!dt && et.popupRef) {
                  const kt = $.get(et.popupRef);
                  kt ? kt.push(vt) : $.set(et.popupRef, [vt]);
                }
                vt.annotationEditorType > 0 && t(this, jt).set(vt.data.id, vt);
                const Mt = vt.render();
                et.hidden && (Mt.style.visibility = "hidden"), Z(this, Bt, jn).call(this, Mt, et.id);
              }
              Z(this, Et, un).call(this), await this.l10n.translate(x);
            }
            update({
              viewport: H
            }) {
              const a = this.div;
              this.viewport = H, (0, u.setLayerDimensions)(a, {
                rotation: H.rotation
              }), Z(this, Et, un).call(this), a.hidden = !1;
            }
            getEditableAnnotations() {
              return Array.from(t(this, jt).values());
            }
            getEditableAnnotation(H) {
              return t(this, jt).get(H);
            }
          }
          Nt = new WeakMap(), Rt = new WeakMap(), jt = new WeakMap(), Bt = new WeakSet(), jn = function(H, a) {
            var $;
            const x = H.firstChild || H;
            x.id = `${n.AnnotationPrefix}${a}`, this.div.append(H), ($ = t(this, Nt)) == null || $.moveElementInDOM(this.div, H, x, !1);
          }, Et = new WeakSet(), un = function() {
            if (!t(this, Rt))
              return;
            const H = this.div;
            for (const [a, x] of t(this, Rt)) {
              const $ = H.querySelector(`[data-annotation-id="${a}"]`);
              if (!$)
                continue;
              const {
                firstChild: J
              } = $;
              J ? J.nodeName === "CANVAS" ? J.replaceWith(x) : J.before(x) : $.append(x);
            }
            t(this, Rt).clear();
          }, s.AnnotationLayer = e;
        },
        /* 30 */
        /***/
        (C, s) => {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.ColorConverters = void 0;
          function O(B) {
            return Math.floor(Math.max(0, Math.min(1, B)) * 255).toString(16).padStart(2, "0");
          }
          function n(B) {
            return Math.max(0, Math.min(255, 255 * B));
          }
          class u {
            static CMYK_G([L, X, b, P]) {
              return ["G", 1 - Math.min(1, 0.3 * L + 0.59 * b + 0.11 * X + P)];
            }
            static G_CMYK([L]) {
              return ["CMYK", 0, 0, 0, 1 - L];
            }
            static G_RGB([L]) {
              return ["RGB", L, L, L];
            }
            static G_rgb([L]) {
              return L = n(L), [L, L, L];
            }
            static G_HTML([L]) {
              const X = O(L);
              return `#${X}${X}${X}`;
            }
            static RGB_G([L, X, b]) {
              return ["G", 0.3 * L + 0.59 * X + 0.11 * b];
            }
            static RGB_rgb(L) {
              return L.map(n);
            }
            static RGB_HTML(L) {
              return `#${L.map(O).join("")}`;
            }
            static T_HTML() {
              return "#00000000";
            }
            static T_rgb() {
              return [null];
            }
            static CMYK_RGB([L, X, b, P]) {
              return ["RGB", 1 - Math.min(1, L + P), 1 - Math.min(1, b + P), 1 - Math.min(1, X + P)];
            }
            static CMYK_rgb([L, X, b, P]) {
              return [n(1 - Math.min(1, L + P)), n(1 - Math.min(1, b + P)), n(1 - Math.min(1, X + P))];
            }
            static CMYK_HTML(L) {
              const X = this.CMYK_RGB(L).slice(1);
              return this.RGB_HTML(X);
            }
            static RGB_CMYK([L, X, b]) {
              const P = 1 - L, p = 1 - X, F = 1 - b, M = Math.min(P, p, F);
              return ["CMYK", P, p, F, M];
            }
          }
          s.ColorConverters = u;
        },
        /* 31 */
        /***/
        (C, s) => {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.NullL10n = void 0, s.getL10nFallback = n;
          const O = {
            of_pages: "of {{pagesCount}}",
            page_of_pages: "({{pageNumber}} of {{pagesCount}})",
            document_properties_kb: "{{size_kb}} KB ({{size_b}} bytes)",
            document_properties_mb: "{{size_mb}} MB ({{size_b}} bytes)",
            document_properties_date_string: "{{date}}, {{time}}",
            document_properties_page_size_unit_inches: "in",
            document_properties_page_size_unit_millimeters: "mm",
            document_properties_page_size_orientation_portrait: "portrait",
            document_properties_page_size_orientation_landscape: "landscape",
            document_properties_page_size_name_a3: "A3",
            document_properties_page_size_name_a4: "A4",
            document_properties_page_size_name_letter: "Letter",
            document_properties_page_size_name_legal: "Legal",
            document_properties_page_size_dimension_string: "{{width}} × {{height}} {{unit}} ({{orientation}})",
            document_properties_page_size_dimension_name_string: "{{width}} × {{height}} {{unit}} ({{name}}, {{orientation}})",
            document_properties_linearized_yes: "Yes",
            document_properties_linearized_no: "No",
            additional_layers: "Additional Layers",
            page_landmark: "Page {{page}}",
            thumb_page_title: "Page {{page}}",
            thumb_page_canvas: "Thumbnail of Page {{page}}",
            find_reached_top: "Reached top of document, continued from bottom",
            find_reached_bottom: "Reached end of document, continued from top",
            "find_match_count[one]": "{{current}} of {{total}} match",
            "find_match_count[other]": "{{current}} of {{total}} matches",
            "find_match_count_limit[one]": "More than {{limit}} match",
            "find_match_count_limit[other]": "More than {{limit}} matches",
            find_not_found: "Phrase not found",
            page_scale_width: "Page Width",
            page_scale_fit: "Page Fit",
            page_scale_auto: "Automatic Zoom",
            page_scale_actual: "Actual Size",
            page_scale_percent: "{{scale}}%",
            loading_error: "An error occurred while loading the PDF.",
            invalid_file_error: "Invalid or corrupted PDF file.",
            missing_file_error: "Missing PDF file.",
            unexpected_response_error: "Unexpected server response.",
            rendering_error: "An error occurred while rendering the page.",
            annotation_date_string: "{{date}}, {{time}}",
            printing_not_supported: "Warning: Printing is not fully supported by this browser.",
            printing_not_ready: "Warning: The PDF is not fully loaded for printing.",
            web_fonts_disabled: "Web fonts are disabled: unable to use embedded PDF fonts.",
            free_text2_default_content: "Start typing…",
            editor_free_text2_aria_label: "Text Editor",
            editor_ink2_aria_label: "Draw Editor",
            editor_ink_canvas_aria_label: "User-created image",
            editor_alt_text_button_label: "Alt text",
            editor_alt_text_edit_button_label: "Edit alt text",
            editor_alt_text_decorative_tooltip: "Marked as decorative"
          };
          O.print_progress_percent = "{{progress}}%";
          function n(L, X) {
            switch (L) {
              case "find_match_count":
                L = `find_match_count[${X.total === 1 ? "one" : "other"}]`;
                break;
              case "find_match_count_limit":
                L = `find_match_count_limit[${X.limit === 1 ? "one" : "other"}]`;
                break;
            }
            return O[L] || "";
          }
          function u(L, X) {
            return X ? L.replaceAll(/\{\{\s*(\w+)\s*\}\}/g, (b, P) => P in X ? X[P] : "{{" + P + "}}") : L;
          }
          const B = {
            async getLanguage() {
              return "en-us";
            },
            async getDirection() {
              return "ltr";
            },
            async get(L, X = null, b = n(L, X)) {
              return u(b, X);
            },
            async translate(L) {
            }
          };
          s.NullL10n = B;
        },
        /* 32 */
        /***/
        (C, s, O) => {
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.XfaLayer = void 0;
          var n = O(25);
          class u {
            static setupStorage(L, X, b, P, p) {
              const F = P.getValue(X, {
                value: null
              });
              switch (b.name) {
                case "textarea":
                  if (F.value !== null && (L.textContent = F.value), p === "print")
                    break;
                  L.addEventListener("input", (M) => {
                    P.setValue(X, {
                      value: M.target.value
                    });
                  });
                  break;
                case "input":
                  if (b.attributes.type === "radio" || b.attributes.type === "checkbox") {
                    if (F.value === b.attributes.xfaOn ? L.setAttribute("checked", !0) : F.value === b.attributes.xfaOff && L.removeAttribute("checked"), p === "print")
                      break;
                    L.addEventListener("change", (M) => {
                      P.setValue(X, {
                        value: M.target.checked ? M.target.getAttribute("xfaOn") : M.target.getAttribute("xfaOff")
                      });
                    });
                  } else {
                    if (F.value !== null && L.setAttribute("value", F.value), p === "print")
                      break;
                    L.addEventListener("input", (M) => {
                      P.setValue(X, {
                        value: M.target.value
                      });
                    });
                  }
                  break;
                case "select":
                  if (F.value !== null) {
                    L.setAttribute("value", F.value);
                    for (const M of b.children)
                      M.attributes.value === F.value ? M.attributes.selected = !0 : M.attributes.hasOwnProperty("selected") && delete M.attributes.selected;
                  }
                  L.addEventListener("input", (M) => {
                    const k = M.target.options, w = k.selectedIndex === -1 ? "" : k[k.selectedIndex].value;
                    P.setValue(X, {
                      value: w
                    });
                  });
                  break;
              }
            }
            static setAttributes({
              html: L,
              element: X,
              storage: b = null,
              intent: P,
              linkService: p
            }) {
              const {
                attributes: F
              } = X, M = L instanceof HTMLAnchorElement;
              F.type === "radio" && (F.name = `${F.name}-${P}`);
              for (const [k, w] of Object.entries(F))
                if (w != null)
                  switch (k) {
                    case "class":
                      w.length && L.setAttribute(k, w.join(" "));
                      break;
                    case "dataId":
                      break;
                    case "id":
                      L.setAttribute("data-element-id", w);
                      break;
                    case "style":
                      Object.assign(L.style, w);
                      break;
                    case "textContent":
                      L.textContent = w;
                      break;
                    default:
                      (!M || k !== "href" && k !== "newWindow") && L.setAttribute(k, w);
                  }
              M && p.addLinkAttributes(L, F.href, F.newWindow), b && F.dataId && this.setupStorage(L, F.dataId, X, b);
            }
            static render(L) {
              var _;
              const X = L.annotationStorage, b = L.linkService, P = L.xfaHtml, p = L.intent || "display", F = document.createElement(P.name);
              P.attributes && this.setAttributes({
                html: F,
                element: P,
                intent: p,
                linkService: b
              });
              const M = [[P, -1, F]], k = L.div;
              if (k.append(F), L.viewport) {
                const y = `matrix(${L.viewport.transform.join(",")})`;
                k.style.transform = y;
              }
              p !== "richText" && k.setAttribute("class", "xfaLayer xfaFont");
              const w = [];
              for (; M.length > 0; ) {
                const [y, S, D] = M.at(-1);
                if (S + 1 === y.children.length) {
                  M.pop();
                  continue;
                }
                const R = y.children[++M.at(-1)[1]];
                if (R === null)
                  continue;
                const {
                  name: A
                } = R;
                if (A === "#text") {
                  const f = document.createTextNode(R.value);
                  w.push(f), D.append(f);
                  continue;
                }
                const o = (_ = R == null ? void 0 : R.attributes) != null && _.xmlns ? document.createElementNS(R.attributes.xmlns, A) : document.createElement(A);
                if (D.append(o), R.attributes && this.setAttributes({
                  html: o,
                  element: R,
                  storage: X,
                  intent: p,
                  linkService: b
                }), R.children && R.children.length > 0)
                  M.push([R, -1, o]);
                else if (R.value) {
                  const f = document.createTextNode(R.value);
                  n.XfaText.shouldBuildText(A) && w.push(f), o.append(f);
                }
              }
              for (const y of k.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
                y.setAttribute("readOnly", !0);
              return {
                textDivs: w
              };
            }
            static update(L) {
              const X = `matrix(${L.viewport.transform.join(",")})`;
              L.div.style.transform = X, L.div.hidden = !1;
            }
          }
          s.XfaLayer = u;
        },
        /* 33 */
        /***/
        (C, s, O) => {
          var P, p, F, M, k, w, _, y, S, D, R, A, o, f, j, Bn, h, Un, g, Wn, G, Hn, Y, dn, it, $n, lt, fn, ht, Gn, E, Vn, l, qn, c, zn, T, Xn, W, oe, nt, pn, pt, Fe, ft, De, It, pe, Ot, gn, at, Oe, mt, Yn, Ct, mn, Vt, Kn, qt, Jn, Ht, yn, gt, Ie, tt, ge;
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.InkEditor = void 0;
          var n = O(1), u = O(4), B = O(29), L = O(6), X = O(5);
          const St = class St extends u.AnnotationEditor {
            constructor(st) {
              super({
                ...st,
                name: "inkEditor"
              });
              V(this, j);
              V(this, h);
              V(this, g);
              V(this, G);
              V(this, Y);
              V(this, it);
              V(this, lt);
              V(this, ht);
              V(this, E);
              V(this, l);
              V(this, c);
              V(this, T);
              V(this, W);
              V(this, nt);
              V(this, pt);
              V(this, ft);
              V(this, It);
              V(this, Ot);
              V(this, at);
              V(this, qt);
              V(this, Ht);
              V(this, gt);
              V(this, tt);
              V(this, P, 0);
              V(this, p, 0);
              V(this, F, this.canvasPointermove.bind(this));
              V(this, M, this.canvasPointerleave.bind(this));
              V(this, k, this.canvasPointerup.bind(this));
              V(this, w, this.canvasPointerdown.bind(this));
              V(this, _, new Path2D());
              V(this, y, !1);
              V(this, S, !1);
              V(this, D, !1);
              V(this, R, null);
              V(this, A, 0);
              V(this, o, 0);
              V(this, f, null);
              this.color = st.color || null, this.thickness = st.thickness || null, this.opacity = st.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = !0;
            }
            static initialize(st) {
              u.AnnotationEditor.initialize(st, {
                strings: ["editor_ink_canvas_aria_label", "editor_ink2_aria_label"]
              });
            }
            static updateDefaultParams(st, Pt) {
              switch (st) {
                case n.AnnotationEditorParamsType.INK_THICKNESS:
                  St._defaultThickness = Pt;
                  break;
                case n.AnnotationEditorParamsType.INK_COLOR:
                  St._defaultColor = Pt;
                  break;
                case n.AnnotationEditorParamsType.INK_OPACITY:
                  St._defaultOpacity = Pt / 100;
                  break;
              }
            }
            updateParams(st, Pt) {
              switch (st) {
                case n.AnnotationEditorParamsType.INK_THICKNESS:
                  Z(this, j, Bn).call(this, Pt);
                  break;
                case n.AnnotationEditorParamsType.INK_COLOR:
                  Z(this, h, Un).call(this, Pt);
                  break;
                case n.AnnotationEditorParamsType.INK_OPACITY:
                  Z(this, g, Wn).call(this, Pt);
                  break;
              }
            }
            static get defaultPropertiesToUpdate() {
              return [[n.AnnotationEditorParamsType.INK_THICKNESS, St._defaultThickness], [n.AnnotationEditorParamsType.INK_COLOR, St._defaultColor || u.AnnotationEditor._defaultLineColor], [n.AnnotationEditorParamsType.INK_OPACITY, Math.round(St._defaultOpacity * 100)]];
            }
            get propertiesToUpdate() {
              return [[n.AnnotationEditorParamsType.INK_THICKNESS, this.thickness || St._defaultThickness], [n.AnnotationEditorParamsType.INK_COLOR, this.color || St._defaultColor || u.AnnotationEditor._defaultLineColor], [n.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * (this.opacity ?? St._defaultOpacity))]];
            }
            rebuild() {
              this.parent && (super.rebuild(), this.div !== null && (this.canvas || (Z(this, pt, Fe).call(this), Z(this, ft, De).call(this)), this.isAttachedToDOM || (this.parent.add(this), Z(this, It, pe).call(this)), Z(this, tt, ge).call(this)));
            }
            remove() {
              this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, t(this, R).disconnect(), ct(this, R, null), super.remove());
            }
            setParent(st) {
              !this.parent && st ? this._uiManager.removeShouldRescale(this) : this.parent && st === null && this._uiManager.addShouldRescale(this), super.setParent(st);
            }
            onScaleChanging() {
              const [st, Pt] = this.parentDimensions, Nt = this.width * st, Rt = this.height * Pt;
              this.setDimensions(Nt, Rt);
            }
            enableEditMode() {
              t(this, y) || this.canvas === null || (super.enableEditMode(), this._isDraggable = !1, this.canvas.addEventListener("pointerdown", t(this, w)));
            }
            disableEditMode() {
              !this.isInEditMode() || this.canvas === null || (super.disableEditMode(), this._isDraggable = !this.isEmpty(), this.div.classList.remove("editing"), this.canvas.removeEventListener("pointerdown", t(this, w)));
            }
            onceAdded() {
              this._isDraggable = !this.isEmpty();
            }
            isEmpty() {
              return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
            }
            commit() {
              t(this, y) || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), ct(this, y, !0), this.div.classList.add("disabled"), Z(this, tt, ge).call(this, !0), this.makeResizable(), this.parent.addInkEditorIfNeeded(!0), this.moveInDOM(), this.div.focus({
                preventScroll: !0
              }));
            }
            focusin(st) {
              this._focusEventsAllowed && (super.focusin(st), this.enableEditMode());
            }
            canvasPointerdown(st) {
              st.button !== 0 || !this.isInEditMode() || t(this, y) || (this.setInForeground(), st.preventDefault(), st.type !== "mouse" && this.div.focus(), Z(this, it, $n).call(this, st.offsetX, st.offsetY));
            }
            canvasPointermove(st) {
              st.preventDefault(), Z(this, lt, fn).call(this, st.offsetX, st.offsetY);
            }
            canvasPointerup(st) {
              st.preventDefault(), Z(this, nt, pn).call(this, st);
            }
            canvasPointerleave(st) {
              Z(this, nt, pn).call(this, st);
            }
            get isResizable() {
              return !this.isEmpty() && t(this, y);
            }
            render() {
              if (this.div)
                return this.div;
              let st, Pt;
              this.width && (st = this.x, Pt = this.y), super.render(), u.AnnotationEditor._l10nPromise.get("editor_ink2_aria_label").then((Qt) => {
                var Et;
                return (Et = this.div) == null ? void 0 : Et.setAttribute("aria-label", Qt);
              });
              const [Nt, Rt, jt, Bt] = Z(this, G, Hn).call(this);
              if (this.setAt(Nt, Rt, 0, 0), this.setDims(jt, Bt), Z(this, pt, Fe).call(this), this.width) {
                const [Qt, Et] = this.parentDimensions;
                this.setAspectRatio(this.width * Qt, this.height * Et), this.setAt(st * Qt, Pt * Et, this.width * Qt, this.height * Et), ct(this, D, !0), Z(this, It, pe).call(this), this.setDims(this.width * Qt, this.height * Et), Z(this, W, oe).call(this), this.div.classList.add("disabled");
              } else
                this.div.classList.add("editing"), this.enableEditMode();
              return Z(this, ft, De).call(this), this.div;
            }
            setDimensions(st, Pt) {
              const Nt = Math.round(st), Rt = Math.round(Pt);
              if (t(this, A) === Nt && t(this, o) === Rt)
                return;
              ct(this, A, Nt), ct(this, o, Rt), this.canvas.style.visibility = "hidden";
              const [jt, Bt] = this.parentDimensions;
              this.width = st / jt, this.height = Pt / Bt, this.fixAndSetPosition(), t(this, y) && Z(this, Ot, gn).call(this, st, Pt), Z(this, It, pe).call(this), Z(this, W, oe).call(this), this.canvas.style.visibility = "visible", this.fixDims();
            }
            static deserialize(st, Pt, Nt) {
              var J, et, dt;
              if (st instanceof B.InkAnnotationElement)
                return null;
              const Rt = super.deserialize(st, Pt, Nt);
              Rt.thickness = st.thickness, Rt.color = n.Util.makeHexColor(...st.color), Rt.opacity = st.opacity;
              const [jt, Bt] = Rt.pageDimensions, Qt = Rt.width * jt, Et = Rt.height * Bt, Kt = Rt.parentScale, Lt = st.thickness / 2;
              ct(Rt, y, !0), ct(Rt, A, Math.round(Qt)), ct(Rt, o, Math.round(Et));
              const {
                paths: H,
                rect: a,
                rotation: x
              } = st;
              for (let {
                bezier: vt
              } of H) {
                vt = Z(J = St, Vt, Kn).call(J, vt, a, x);
                const Mt = [];
                Rt.paths.push(Mt);
                let kt = Kt * (vt[0] - Lt), Xt = Kt * (vt[1] - Lt);
                for (let Dt = 2, $t = vt.length; Dt < $t; Dt += 6) {
                  const Yt = Kt * (vt[Dt] - Lt), Jt = Kt * (vt[Dt + 1] - Lt), Zt = Kt * (vt[Dt + 2] - Lt), se = Kt * (vt[Dt + 3] - Lt), ie = Kt * (vt[Dt + 4] - Lt), re = Kt * (vt[Dt + 5] - Lt);
                  Mt.push([[kt, Xt], [Yt, Jt], [Zt, se], [ie, re]]), kt = ie, Xt = re;
                }
                const Ft = Z(this, mt, Yn).call(this, Mt);
                Rt.bezierPath2D.push(Ft);
              }
              const $ = Z(et = Rt, Ht, yn).call(et);
              return ct(Rt, p, Math.max(u.AnnotationEditor.MIN_SIZE, $[2] - $[0])), ct(Rt, P, Math.max(u.AnnotationEditor.MIN_SIZE, $[3] - $[1])), Z(dt = Rt, Ot, gn).call(dt, Qt, Et), Rt;
            }
            serialize() {
              if (this.isEmpty())
                return null;
              const st = this.getRect(0, 0), Pt = u.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
              return {
                annotationType: n.AnnotationEditorType.INK,
                color: Pt,
                thickness: this.thickness,
                opacity: this.opacity,
                paths: Z(this, qt, Jn).call(this, this.scaleFactor / this.parentScale, this.translationX, this.translationY, st),
                pageIndex: this.pageIndex,
                rect: st,
                rotation: this.rotation,
                structTreeParentId: this._structTreeParentId
              };
            }
          };
          P = new WeakMap(), p = new WeakMap(), F = new WeakMap(), M = new WeakMap(), k = new WeakMap(), w = new WeakMap(), _ = new WeakMap(), y = new WeakMap(), S = new WeakMap(), D = new WeakMap(), R = new WeakMap(), A = new WeakMap(), o = new WeakMap(), f = new WeakMap(), j = new WeakSet(), Bn = function(st) {
            const Pt = this.thickness;
            this.addCommands({
              cmd: () => {
                this.thickness = st, Z(this, tt, ge).call(this);
              },
              undo: () => {
                this.thickness = Pt, Z(this, tt, ge).call(this);
              },
              mustExec: !0,
              type: n.AnnotationEditorParamsType.INK_THICKNESS,
              overwriteIfSameType: !0,
              keepUndo: !0
            });
          }, h = new WeakSet(), Un = function(st) {
            const Pt = this.color;
            this.addCommands({
              cmd: () => {
                this.color = st, Z(this, W, oe).call(this);
              },
              undo: () => {
                this.color = Pt, Z(this, W, oe).call(this);
              },
              mustExec: !0,
              type: n.AnnotationEditorParamsType.INK_COLOR,
              overwriteIfSameType: !0,
              keepUndo: !0
            });
          }, g = new WeakSet(), Wn = function(st) {
            st /= 100;
            const Pt = this.opacity;
            this.addCommands({
              cmd: () => {
                this.opacity = st, Z(this, W, oe).call(this);
              },
              undo: () => {
                this.opacity = Pt, Z(this, W, oe).call(this);
              },
              mustExec: !0,
              type: n.AnnotationEditorParamsType.INK_OPACITY,
              overwriteIfSameType: !0,
              keepUndo: !0
            });
          }, G = new WeakSet(), Hn = function() {
            const {
              parentRotation: st,
              parentDimensions: [Pt, Nt]
            } = this;
            switch (st) {
              case 90:
                return [0, Nt, Nt, Pt];
              case 180:
                return [Pt, Nt, Pt, Nt];
              case 270:
                return [Pt, 0, Nt, Pt];
              default:
                return [0, 0, Pt, Nt];
            }
          }, Y = new WeakSet(), dn = function() {
            const {
              ctx: st,
              color: Pt,
              opacity: Nt,
              thickness: Rt,
              parentScale: jt,
              scaleFactor: Bt
            } = this;
            st.lineWidth = Rt * jt / Bt, st.lineCap = "round", st.lineJoin = "round", st.miterLimit = 10, st.strokeStyle = `${Pt}${(0, X.opacityToHex)(Nt)}`;
          }, it = new WeakSet(), $n = function(st, Pt) {
            this.canvas.addEventListener("contextmenu", L.noContextMenu), this.canvas.addEventListener("pointerleave", t(this, M)), this.canvas.addEventListener("pointermove", t(this, F)), this.canvas.addEventListener("pointerup", t(this, k)), this.canvas.removeEventListener("pointerdown", t(this, w)), this.isEditing = !0, t(this, D) || (ct(this, D, !0), Z(this, It, pe).call(this), this.thickness || (this.thickness = St._defaultThickness), this.color || (this.color = St._defaultColor || u.AnnotationEditor._defaultLineColor), this.opacity ?? (this.opacity = St._defaultOpacity)), this.currentPath.push([st, Pt]), ct(this, S, !1), Z(this, Y, dn).call(this), ct(this, f, () => {
              Z(this, l, qn).call(this), t(this, f) && window.requestAnimationFrame(t(this, f));
            }), window.requestAnimationFrame(t(this, f));
          }, lt = new WeakSet(), fn = function(st, Pt) {
            const [Nt, Rt] = this.currentPath.at(-1);
            if (this.currentPath.length > 1 && st === Nt && Pt === Rt)
              return;
            const jt = this.currentPath;
            let Bt = t(this, _);
            if (jt.push([st, Pt]), ct(this, S, !0), jt.length <= 2) {
              Bt.moveTo(...jt[0]), Bt.lineTo(st, Pt);
              return;
            }
            jt.length === 3 && (ct(this, _, Bt = new Path2D()), Bt.moveTo(...jt[0])), Z(this, c, zn).call(this, Bt, ...jt.at(-3), ...jt.at(-2), st, Pt);
          }, ht = new WeakSet(), Gn = function() {
            if (this.currentPath.length === 0)
              return;
            const st = this.currentPath.at(-1);
            t(this, _).lineTo(...st);
          }, E = new WeakSet(), Vn = function(st, Pt) {
            ct(this, f, null), st = Math.min(Math.max(st, 0), this.canvas.width), Pt = Math.min(Math.max(Pt, 0), this.canvas.height), Z(this, lt, fn).call(this, st, Pt), Z(this, ht, Gn).call(this);
            let Nt;
            if (this.currentPath.length !== 1)
              Nt = Z(this, T, Xn).call(this);
            else {
              const Et = [st, Pt];
              Nt = [[Et, Et.slice(), Et.slice(), Et]];
            }
            const Rt = t(this, _), jt = this.currentPath;
            this.currentPath = [], ct(this, _, new Path2D());
            const Bt = () => {
              this.allRawPaths.push(jt), this.paths.push(Nt), this.bezierPath2D.push(Rt), this.rebuild();
            }, Qt = () => {
              this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (Z(this, pt, Fe).call(this), Z(this, ft, De).call(this)), Z(this, tt, ge).call(this));
            };
            this.addCommands({
              cmd: Bt,
              undo: Qt,
              mustExec: !0
            });
          }, l = new WeakSet(), qn = function() {
            if (!t(this, S))
              return;
            ct(this, S, !1);
            const st = Math.ceil(this.thickness * this.parentScale), Pt = this.currentPath.slice(-3), Nt = Pt.map((Bt) => Bt[0]), Rt = Pt.map((Bt) => Bt[1]);
            Math.min(...Nt) - st, Math.max(...Nt) + st, Math.min(...Rt) - st, Math.max(...Rt) + st;
            const {
              ctx: jt
            } = this;
            jt.save(), jt.clearRect(0, 0, this.canvas.width, this.canvas.height);
            for (const Bt of this.bezierPath2D)
              jt.stroke(Bt);
            jt.stroke(t(this, _)), jt.restore();
          }, c = new WeakSet(), zn = function(st, Pt, Nt, Rt, jt, Bt, Qt) {
            const Et = (Pt + Rt) / 2, Kt = (Nt + jt) / 2, Lt = (Rt + Bt) / 2, H = (jt + Qt) / 2;
            st.bezierCurveTo(Et + 2 * (Rt - Et) / 3, Kt + 2 * (jt - Kt) / 3, Lt + 2 * (Rt - Lt) / 3, H + 2 * (jt - H) / 3, Lt, H);
          }, T = new WeakSet(), Xn = function() {
            const st = this.currentPath;
            if (st.length <= 2)
              return [[st[0], st[0], st.at(-1), st.at(-1)]];
            const Pt = [];
            let Nt, [Rt, jt] = st[0];
            for (Nt = 1; Nt < st.length - 2; Nt++) {
              const [a, x] = st[Nt], [$, J] = st[Nt + 1], et = (a + $) / 2, dt = (x + J) / 2, vt = [Rt + 2 * (a - Rt) / 3, jt + 2 * (x - jt) / 3], Mt = [et + 2 * (a - et) / 3, dt + 2 * (x - dt) / 3];
              Pt.push([[Rt, jt], vt, Mt, [et, dt]]), [Rt, jt] = [et, dt];
            }
            const [Bt, Qt] = st[Nt], [Et, Kt] = st[Nt + 1], Lt = [Rt + 2 * (Bt - Rt) / 3, jt + 2 * (Qt - jt) / 3], H = [Et + 2 * (Bt - Et) / 3, Kt + 2 * (Qt - Kt) / 3];
            return Pt.push([[Rt, jt], Lt, H, [Et, Kt]]), Pt;
          }, W = new WeakSet(), oe = function() {
            if (this.isEmpty()) {
              Z(this, at, Oe).call(this);
              return;
            }
            Z(this, Y, dn).call(this);
            const {
              canvas: st,
              ctx: Pt
            } = this;
            Pt.setTransform(1, 0, 0, 1, 0, 0), Pt.clearRect(0, 0, st.width, st.height), Z(this, at, Oe).call(this);
            for (const Nt of this.bezierPath2D)
              Pt.stroke(Nt);
          }, nt = new WeakSet(), pn = function(st) {
            this.canvas.removeEventListener("pointerleave", t(this, M)), this.canvas.removeEventListener("pointermove", t(this, F)), this.canvas.removeEventListener("pointerup", t(this, k)), this.canvas.addEventListener("pointerdown", t(this, w)), setTimeout(() => {
              this.canvas.removeEventListener("contextmenu", L.noContextMenu);
            }, 10), Z(this, E, Vn).call(this, st.offsetX, st.offsetY), this.addToAnnotationStorage(), this.setInBackground();
          }, pt = new WeakSet(), Fe = function() {
            this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", u.AnnotationEditor._l10nPromise.get("editor_ink_canvas_aria_label").then((st) => {
              var Pt;
              return (Pt = this.canvas) == null ? void 0 : Pt.setAttribute("aria-label", st);
            }), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
          }, ft = new WeakSet(), De = function() {
            ct(this, R, new ResizeObserver((st) => {
              const Pt = st[0].contentRect;
              Pt.width && Pt.height && this.setDimensions(Pt.width, Pt.height);
            })), t(this, R).observe(this.div);
          }, It = new WeakSet(), pe = function() {
            if (!t(this, D))
              return;
            const [st, Pt] = this.parentDimensions;
            this.canvas.width = Math.ceil(this.width * st), this.canvas.height = Math.ceil(this.height * Pt), Z(this, at, Oe).call(this);
          }, Ot = new WeakSet(), gn = function(st, Pt) {
            const Nt = Z(this, gt, Ie).call(this), Rt = (st - Nt) / t(this, p), jt = (Pt - Nt) / t(this, P);
            this.scaleFactor = Math.min(Rt, jt);
          }, at = new WeakSet(), Oe = function() {
            const st = Z(this, gt, Ie).call(this) / 2;
            this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + st, this.translationY * this.scaleFactor + st);
          }, mt = new WeakSet(), Yn = function(st) {
            const Pt = new Path2D();
            for (let Nt = 0, Rt = st.length; Nt < Rt; Nt++) {
              const [jt, Bt, Qt, Et] = st[Nt];
              Nt === 0 && Pt.moveTo(...jt), Pt.bezierCurveTo(Bt[0], Bt[1], Qt[0], Qt[1], Et[0], Et[1]);
            }
            return Pt;
          }, Ct = new WeakSet(), mn = function(st, Pt, Nt) {
            const [Rt, jt, Bt, Qt] = Pt;
            switch (Nt) {
              case 0:
                for (let Et = 0, Kt = st.length; Et < Kt; Et += 2)
                  st[Et] += Rt, st[Et + 1] = Qt - st[Et + 1];
                break;
              case 90:
                for (let Et = 0, Kt = st.length; Et < Kt; Et += 2) {
                  const Lt = st[Et];
                  st[Et] = st[Et + 1] + Rt, st[Et + 1] = Lt + jt;
                }
                break;
              case 180:
                for (let Et = 0, Kt = st.length; Et < Kt; Et += 2)
                  st[Et] = Bt - st[Et], st[Et + 1] += jt;
                break;
              case 270:
                for (let Et = 0, Kt = st.length; Et < Kt; Et += 2) {
                  const Lt = st[Et];
                  st[Et] = Bt - st[Et + 1], st[Et + 1] = Qt - Lt;
                }
                break;
              default:
                throw new Error("Invalid rotation");
            }
            return st;
          }, Vt = new WeakSet(), Kn = function(st, Pt, Nt) {
            const [Rt, jt, Bt, Qt] = Pt;
            switch (Nt) {
              case 0:
                for (let Et = 0, Kt = st.length; Et < Kt; Et += 2)
                  st[Et] -= Rt, st[Et + 1] = Qt - st[Et + 1];
                break;
              case 90:
                for (let Et = 0, Kt = st.length; Et < Kt; Et += 2) {
                  const Lt = st[Et];
                  st[Et] = st[Et + 1] - jt, st[Et + 1] = Lt - Rt;
                }
                break;
              case 180:
                for (let Et = 0, Kt = st.length; Et < Kt; Et += 2)
                  st[Et] = Bt - st[Et], st[Et + 1] -= jt;
                break;
              case 270:
                for (let Et = 0, Kt = st.length; Et < Kt; Et += 2) {
                  const Lt = st[Et];
                  st[Et] = Qt - st[Et + 1], st[Et + 1] = Bt - Lt;
                }
                break;
              default:
                throw new Error("Invalid rotation");
            }
            return st;
          }, qt = new WeakSet(), Jn = function(st, Pt, Nt, Rt) {
            var Kt, Lt;
            const jt = [], Bt = this.thickness / 2, Qt = st * Pt + Bt, Et = st * Nt + Bt;
            for (const H of this.paths) {
              const a = [], x = [];
              for (let $ = 0, J = H.length; $ < J; $++) {
                const [et, dt, vt, Mt] = H[$], kt = st * et[0] + Qt, Xt = st * et[1] + Et, Ft = st * dt[0] + Qt, Dt = st * dt[1] + Et, $t = st * vt[0] + Qt, Yt = st * vt[1] + Et, Jt = st * Mt[0] + Qt, Zt = st * Mt[1] + Et;
                $ === 0 && (a.push(kt, Xt), x.push(kt, Xt)), a.push(Ft, Dt, $t, Yt, Jt, Zt), x.push(Ft, Dt), $ === J - 1 && x.push(Jt, Zt);
              }
              jt.push({
                bezier: Z(Kt = St, Ct, mn).call(Kt, a, Rt, this.rotation),
                points: Z(Lt = St, Ct, mn).call(Lt, x, Rt, this.rotation)
              });
            }
            return jt;
          }, Ht = new WeakSet(), yn = function() {
            let st = 1 / 0, Pt = -1 / 0, Nt = 1 / 0, Rt = -1 / 0;
            for (const jt of this.paths)
              for (const [Bt, Qt, Et, Kt] of jt) {
                const Lt = n.Util.bezierBoundingBox(...Bt, ...Qt, ...Et, ...Kt);
                st = Math.min(st, Lt[0]), Nt = Math.min(Nt, Lt[1]), Pt = Math.max(Pt, Lt[2]), Rt = Math.max(Rt, Lt[3]);
              }
            return [st, Nt, Pt, Rt];
          }, gt = new WeakSet(), Ie = function() {
            return t(this, y) ? Math.ceil(this.thickness * this.parentScale) : 0;
          }, tt = new WeakSet(), ge = function(st = !1) {
            if (this.isEmpty())
              return;
            if (!t(this, y)) {
              Z(this, W, oe).call(this);
              return;
            }
            const Pt = Z(this, Ht, yn).call(this), Nt = Z(this, gt, Ie).call(this);
            ct(this, p, Math.max(u.AnnotationEditor.MIN_SIZE, Pt[2] - Pt[0])), ct(this, P, Math.max(u.AnnotationEditor.MIN_SIZE, Pt[3] - Pt[1]));
            const Rt = Math.ceil(Nt + t(this, p) * this.scaleFactor), jt = Math.ceil(Nt + t(this, P) * this.scaleFactor), [Bt, Qt] = this.parentDimensions;
            this.width = Rt / Bt, this.height = jt / Qt, this.setAspectRatio(Rt, jt);
            const Et = this.translationX, Kt = this.translationY;
            this.translationX = -Pt[0], this.translationY = -Pt[1], Z(this, It, pe).call(this), Z(this, W, oe).call(this), ct(this, A, Rt), ct(this, o, jt), this.setDims(Rt, jt);
            const Lt = st ? Nt / this.scaleFactor / 2 : 0;
            this.translate(Et - this.translationX - Lt, Kt - this.translationY - Lt);
          }, V(St, mt), V(St, Ct), V(St, Vt), ne(St, "_defaultColor", null), ne(St, "_defaultOpacity", 1), ne(St, "_defaultThickness", 1), ne(St, "_type", "ink");
          let b = St;
          s.InkEditor = b;
        },
        /* 34 */
        /***/
        (C, s, O) => {
          var b, P, p, F, M, k, w, _, y, S, D, Ee, A, Se, f, Le, v, bn, I, Qn, U, Zn, m, _n, Q, Ne, z, ti;
          Object.defineProperty(s, "__esModule", {
            value: !0
          }), s.StampEditor = void 0;
          var n = O(1), u = O(4), B = O(6), L = O(29);
          const K = class K extends u.AnnotationEditor {
            constructor(E) {
              super({
                ...E,
                name: "stampEditor"
              });
              V(this, D);
              V(this, A);
              V(this, f);
              V(this, v);
              V(this, I);
              V(this, U);
              V(this, m);
              V(this, Q);
              V(this, z);
              V(this, b, null);
              V(this, P, null);
              V(this, p, null);
              V(this, F, null);
              V(this, M, null);
              V(this, k, null);
              V(this, w, null);
              V(this, _, null);
              V(this, y, !1);
              V(this, S, !1);
              ct(this, F, E.bitmapUrl), ct(this, M, E.bitmapFile);
            }
            static initialize(E) {
              u.AnnotationEditor.initialize(E);
            }
            static get supportedTypes() {
              const E = ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"];
              return (0, n.shadow)(this, "supportedTypes", E.map((e) => `image/${e}`));
            }
            static get supportedTypesStr() {
              return (0, n.shadow)(this, "supportedTypesStr", this.supportedTypes.join(","));
            }
            static isHandlingMimeForPasting(E) {
              return this.supportedTypes.includes(E);
            }
            static paste(E, e) {
              e.pasteEditor(n.AnnotationEditorType.STAMP, {
                bitmapFile: E.getAsFile()
              });
            }
            remove() {
              var E, e;
              t(this, P) && (ct(this, b, null), this._uiManager.imageManager.deleteId(t(this, P)), (E = t(this, k)) == null || E.remove(), ct(this, k, null), (e = t(this, w)) == null || e.disconnect(), ct(this, w, null)), super.remove();
            }
            rebuild() {
              if (!this.parent) {
                t(this, P) && Z(this, f, Le).call(this);
                return;
              }
              super.rebuild(), this.div !== null && (t(this, P) && Z(this, f, Le).call(this), this.isAttachedToDOM || this.parent.add(this));
            }
            onceAdded() {
              this._isDraggable = !0, this.div.focus();
            }
            isEmpty() {
              return !(t(this, p) || t(this, b) || t(this, F) || t(this, M));
            }
            get isResizable() {
              return !0;
            }
            render() {
              if (this.div)
                return this.div;
              let E, e;
              if (this.width && (E = this.x, e = this.y), super.render(), this.div.hidden = !0, t(this, b) ? Z(this, v, bn).call(this) : Z(this, f, Le).call(this), this.width) {
                const [l, i] = this.parentDimensions;
                this.setAt(E * l, e * i, this.width * l, this.height * i);
              }
              return this.div;
            }
            static deserialize(E, e, l) {
              if (E instanceof L.StampAnnotationElement)
                return null;
              const i = super.deserialize(E, e, l), {
                rect: c,
                bitmapUrl: d,
                bitmapId: T,
                isSvg: N,
                accessibilityData: W
              } = E;
              T && l.imageManager.isValidId(T) ? ct(i, P, T) : ct(i, F, d), ct(i, y, N);
              const [q, nt] = i.pageDimensions;
              return i.width = (c[2] - c[0]) / q, i.height = (c[3] - c[1]) / nt, W && (i.altTextData = W), i;
            }
            serialize(E = !1, e = null) {
              if (this.isEmpty())
                return null;
              const l = {
                annotationType: n.AnnotationEditorType.STAMP,
                bitmapId: t(this, P),
                pageIndex: this.pageIndex,
                rect: this.getRect(0, 0),
                rotation: this.rotation,
                isSvg: t(this, y),
                structTreeParentId: this._structTreeParentId
              };
              if (E)
                return l.bitmapUrl = Z(this, Q, Ne).call(this, !0), l.accessibilityData = this.altTextData, l;
              const {
                decorative: i,
                altText: c
              } = this.altTextData;
              if (!i && c && (l.accessibilityData = {
                type: "Figure",
                alt: c
              }), e === null)
                return l;
              e.stamps || (e.stamps = /* @__PURE__ */ new Map());
              const d = t(this, y) ? (l.rect[2] - l.rect[0]) * (l.rect[3] - l.rect[1]) : null;
              if (!e.stamps.has(t(this, P)))
                e.stamps.set(t(this, P), {
                  area: d,
                  serialized: l
                }), l.bitmap = Z(this, Q, Ne).call(this, !1);
              else if (t(this, y)) {
                const T = e.stamps.get(t(this, P));
                d > T.area && (T.area = d, T.serialized.bitmap.close(), T.serialized.bitmap = Z(this, Q, Ne).call(this, !1));
              }
              return l;
            }
          };
          b = new WeakMap(), P = new WeakMap(), p = new WeakMap(), F = new WeakMap(), M = new WeakMap(), k = new WeakMap(), w = new WeakMap(), _ = new WeakMap(), y = new WeakMap(), S = new WeakMap(), D = new WeakSet(), Ee = function(E, e = !1) {
            if (!E) {
              this.remove();
              return;
            }
            ct(this, b, E.bitmap), e || (ct(this, P, E.id), ct(this, y, E.isSvg)), Z(this, v, bn).call(this);
          }, A = new WeakSet(), Se = function() {
            ct(this, p, null), this._uiManager.enableWaiting(!1), t(this, k) && this.div.focus();
          }, f = new WeakSet(), Le = function() {
            if (t(this, P)) {
              this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(t(this, P)).then((e) => Z(this, D, Ee).call(this, e, !0)).finally(() => Z(this, A, Se).call(this));
              return;
            }
            if (t(this, F)) {
              const e = t(this, F);
              ct(this, F, null), this._uiManager.enableWaiting(!0), ct(this, p, this._uiManager.imageManager.getFromUrl(e).then((l) => Z(this, D, Ee).call(this, l)).finally(() => Z(this, A, Se).call(this)));
              return;
            }
            if (t(this, M)) {
              const e = t(this, M);
              ct(this, M, null), this._uiManager.enableWaiting(!0), ct(this, p, this._uiManager.imageManager.getFromFile(e).then((l) => Z(this, D, Ee).call(this, l)).finally(() => Z(this, A, Se).call(this)));
              return;
            }
            const E = document.createElement("input");
            E.type = "file", E.accept = K.supportedTypesStr, ct(this, p, new Promise((e) => {
              E.addEventListener("change", async () => {
                if (!E.files || E.files.length === 0)
                  this.remove();
                else {
                  this._uiManager.enableWaiting(!0);
                  const l = await this._uiManager.imageManager.getFromFile(E.files[0]);
                  Z(this, D, Ee).call(this, l);
                }
                e();
              }), E.addEventListener("cancel", () => {
                this.remove(), e();
              });
            }).finally(() => Z(this, A, Se).call(this))), E.click();
          }, v = new WeakSet(), bn = function() {
            const {
              div: E
            } = this;
            let {
              width: e,
              height: l
            } = t(this, b);
            const [i, c] = this.pageDimensions, d = 0.75;
            if (this.width)
              e = this.width * i, l = this.height * c;
            else if (e > d * i || l > d * c) {
              const q = Math.min(d * i / e, d * c / l);
              e *= q, l *= q;
            }
            const [T, N] = this.parentDimensions;
            this.setDims(e * T / i, l * N / c), this._uiManager.enableWaiting(!1);
            const W = ct(this, k, document.createElement("canvas"));
            E.append(W), E.hidden = !1, Z(this, m, _n).call(this, e, l), Z(this, z, ti).call(this), t(this, S) || (this.parent.addUndoableEditor(this), ct(this, S, !0)), this._uiManager._eventBus.dispatch("reporttelemetry", {
              source: this,
              details: {
                type: "editing",
                subtype: this.editorType,
                data: {
                  action: "inserted_image"
                }
              }
            }), this.addAltTextButton();
          }, I = new WeakSet(), Qn = function(E, e) {
            var d;
            const [l, i] = this.parentDimensions;
            this.width = E / l, this.height = e / i, this.setDims(E, e), (d = this._initialOptions) != null && d.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, t(this, _) !== null && clearTimeout(t(this, _)), ct(this, _, setTimeout(() => {
              ct(this, _, null), Z(this, m, _n).call(this, E, e);
            }, 200));
          }, U = new WeakSet(), Zn = function(E, e) {
            const {
              width: l,
              height: i
            } = t(this, b);
            let c = l, d = i, T = t(this, b);
            for (; c > 2 * E || d > 2 * e; ) {
              const N = c, W = d;
              c > 2 * E && (c = c >= 16384 ? Math.floor(c / 2) - 1 : Math.ceil(c / 2)), d > 2 * e && (d = d >= 16384 ? Math.floor(d / 2) - 1 : Math.ceil(d / 2));
              const q = new OffscreenCanvas(c, d);
              q.getContext("2d").drawImage(T, 0, 0, N, W, 0, 0, c, d), T = q.transferToImageBitmap();
            }
            return T;
          }, m = new WeakSet(), _n = function(E, e) {
            E = Math.ceil(E), e = Math.ceil(e);
            const l = t(this, k);
            if (!l || l.width === E && l.height === e)
              return;
            l.width = E, l.height = e;
            const i = t(this, y) ? t(this, b) : Z(this, U, Zn).call(this, E, e), c = l.getContext("2d");
            c.filter = this._uiManager.hcmFilter, c.drawImage(i, 0, 0, i.width, i.height, 0, 0, E, e);
          }, Q = new WeakSet(), Ne = function(E) {
            if (E) {
              if (t(this, y)) {
                const i = this._uiManager.imageManager.getSvgUrl(t(this, P));
                if (i)
                  return i;
              }
              const e = document.createElement("canvas");
              return {
                width: e.width,
                height: e.height
              } = t(this, b), e.getContext("2d").drawImage(t(this, b), 0, 0), e.toDataURL();
            }
            if (t(this, y)) {
              const [e, l] = this.pageDimensions, i = Math.round(this.width * e * B.PixelsPerInch.PDF_TO_CSS_UNITS), c = Math.round(this.height * l * B.PixelsPerInch.PDF_TO_CSS_UNITS), d = new OffscreenCanvas(i, c);
              return d.getContext("2d").drawImage(t(this, b), 0, 0, t(this, b).width, t(this, b).height, 0, 0, i, c), d.transferToImageBitmap();
            }
            return structuredClone(t(this, b));
          }, z = new WeakSet(), ti = function() {
            ct(this, w, new ResizeObserver((E) => {
              const e = E[0].contentRect;
              e.width && e.height && Z(this, I, Qn).call(this, e.width, e.height);
            })), t(this, w).observe(this.div);
          }, ne(K, "_type", "stamp");
          let X = K;
          s.StampEditor = X;
        }
        /******/
      ], __webpack_module_cache__ = {};
      function __w_pdfjs_require__(C) {
        var s = __webpack_module_cache__[C];
        if (s !== void 0)
          return s.exports;
        var O = __webpack_module_cache__[C] = {
          /******/
          // no module.id needed
          /******/
          // no module.loaded needed
          /******/
          exports: {}
          /******/
        };
        return __webpack_modules__[C](O, O.exports, __w_pdfjs_require__), O.exports;
      }
      var __webpack_exports__ = {};
      return (() => {
        var C = __webpack_exports__;
        Object.defineProperty(C, "__esModule", {
          value: !0
        }), Object.defineProperty(C, "AbortException", {
          enumerable: !0,
          get: function() {
            return s.AbortException;
          }
        }), Object.defineProperty(C, "AnnotationEditorLayer", {
          enumerable: !0,
          get: function() {
            return B.AnnotationEditorLayer;
          }
        }), Object.defineProperty(C, "AnnotationEditorParamsType", {
          enumerable: !0,
          get: function() {
            return s.AnnotationEditorParamsType;
          }
        }), Object.defineProperty(C, "AnnotationEditorType", {
          enumerable: !0,
          get: function() {
            return s.AnnotationEditorType;
          }
        }), Object.defineProperty(C, "AnnotationEditorUIManager", {
          enumerable: !0,
          get: function() {
            return L.AnnotationEditorUIManager;
          }
        }), Object.defineProperty(C, "AnnotationLayer", {
          enumerable: !0,
          get: function() {
            return X.AnnotationLayer;
          }
        }), Object.defineProperty(C, "AnnotationMode", {
          enumerable: !0,
          get: function() {
            return s.AnnotationMode;
          }
        }), Object.defineProperty(C, "CMapCompressionType", {
          enumerable: !0,
          get: function() {
            return s.CMapCompressionType;
          }
        }), Object.defineProperty(C, "DOMSVGFactory", {
          enumerable: !0,
          get: function() {
            return n.DOMSVGFactory;
          }
        }), Object.defineProperty(C, "FeatureTest", {
          enumerable: !0,
          get: function() {
            return s.FeatureTest;
          }
        }), Object.defineProperty(C, "GlobalWorkerOptions", {
          enumerable: !0,
          get: function() {
            return b.GlobalWorkerOptions;
          }
        }), Object.defineProperty(C, "ImageKind", {
          enumerable: !0,
          get: function() {
            return s.ImageKind;
          }
        }), Object.defineProperty(C, "InvalidPDFException", {
          enumerable: !0,
          get: function() {
            return s.InvalidPDFException;
          }
        }), Object.defineProperty(C, "MissingPDFException", {
          enumerable: !0,
          get: function() {
            return s.MissingPDFException;
          }
        }), Object.defineProperty(C, "OPS", {
          enumerable: !0,
          get: function() {
            return s.OPS;
          }
        }), Object.defineProperty(C, "PDFDataRangeTransport", {
          enumerable: !0,
          get: function() {
            return O.PDFDataRangeTransport;
          }
        }), Object.defineProperty(C, "PDFDateString", {
          enumerable: !0,
          get: function() {
            return n.PDFDateString;
          }
        }), Object.defineProperty(C, "PDFWorker", {
          enumerable: !0,
          get: function() {
            return O.PDFWorker;
          }
        }), Object.defineProperty(C, "PasswordResponses", {
          enumerable: !0,
          get: function() {
            return s.PasswordResponses;
          }
        }), Object.defineProperty(C, "PermissionFlag", {
          enumerable: !0,
          get: function() {
            return s.PermissionFlag;
          }
        }), Object.defineProperty(C, "PixelsPerInch", {
          enumerable: !0,
          get: function() {
            return n.PixelsPerInch;
          }
        }), Object.defineProperty(C, "PromiseCapability", {
          enumerable: !0,
          get: function() {
            return s.PromiseCapability;
          }
        }), Object.defineProperty(C, "RenderingCancelledException", {
          enumerable: !0,
          get: function() {
            return n.RenderingCancelledException;
          }
        }), Object.defineProperty(C, "SVGGraphics", {
          enumerable: !0,
          get: function() {
            return O.SVGGraphics;
          }
        }), Object.defineProperty(C, "UnexpectedResponseException", {
          enumerable: !0,
          get: function() {
            return s.UnexpectedResponseException;
          }
        }), Object.defineProperty(C, "Util", {
          enumerable: !0,
          get: function() {
            return s.Util;
          }
        }), Object.defineProperty(C, "VerbosityLevel", {
          enumerable: !0,
          get: function() {
            return s.VerbosityLevel;
          }
        }), Object.defineProperty(C, "XfaLayer", {
          enumerable: !0,
          get: function() {
            return P.XfaLayer;
          }
        }), Object.defineProperty(C, "build", {
          enumerable: !0,
          get: function() {
            return O.build;
          }
        }), Object.defineProperty(C, "createValidAbsoluteUrl", {
          enumerable: !0,
          get: function() {
            return s.createValidAbsoluteUrl;
          }
        }), Object.defineProperty(C, "getDocument", {
          enumerable: !0,
          get: function() {
            return O.getDocument;
          }
        }), Object.defineProperty(C, "getFilenameFromUrl", {
          enumerable: !0,
          get: function() {
            return n.getFilenameFromUrl;
          }
        }), Object.defineProperty(C, "getPdfFilenameFromUrl", {
          enumerable: !0,
          get: function() {
            return n.getPdfFilenameFromUrl;
          }
        }), Object.defineProperty(C, "getXfaPageViewport", {
          enumerable: !0,
          get: function() {
            return n.getXfaPageViewport;
          }
        }), Object.defineProperty(C, "isDataScheme", {
          enumerable: !0,
          get: function() {
            return n.isDataScheme;
          }
        }), Object.defineProperty(C, "isPdfFile", {
          enumerable: !0,
          get: function() {
            return n.isPdfFile;
          }
        }), Object.defineProperty(C, "loadScript", {
          enumerable: !0,
          get: function() {
            return n.loadScript;
          }
        }), Object.defineProperty(C, "noContextMenu", {
          enumerable: !0,
          get: function() {
            return n.noContextMenu;
          }
        }), Object.defineProperty(C, "normalizeUnicode", {
          enumerable: !0,
          get: function() {
            return s.normalizeUnicode;
          }
        }), Object.defineProperty(C, "renderTextLayer", {
          enumerable: !0,
          get: function() {
            return u.renderTextLayer;
          }
        }), Object.defineProperty(C, "setLayerDimensions", {
          enumerable: !0,
          get: function() {
            return n.setLayerDimensions;
          }
        }), Object.defineProperty(C, "shadow", {
          enumerable: !0,
          get: function() {
            return s.shadow;
          }
        }), Object.defineProperty(C, "updateTextLayer", {
          enumerable: !0,
          get: function() {
            return u.updateTextLayer;
          }
        }), Object.defineProperty(C, "version", {
          enumerable: !0,
          get: function() {
            return O.version;
          }
        });
        var s = __w_pdfjs_require__(1), O = __w_pdfjs_require__(2), n = __w_pdfjs_require__(6), u = __w_pdfjs_require__(26), B = __w_pdfjs_require__(27), L = __w_pdfjs_require__(5), X = __w_pdfjs_require__(29), b = __w_pdfjs_require__(14), P = __w_pdfjs_require__(32);
      })(), __webpack_exports__;
    })()
  ));
})(pdf$1);
var pdfExports = pdf$1.exports;
const pdf = /* @__PURE__ */ getDefaultExportFromCjs(pdfExports), pdfjsModule = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: pdf
}, [pdfExports]), pdfjs = "default" in pdfjsModule ? pdf : pdfjsModule;
var propTypes = { exports: {} }, reactIs = { exports: {} }, reactIs_production_min = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_production_min;
function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min)
    return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var C = typeof Symbol == "function" && Symbol.for, s = C ? Symbol.for("react.element") : 60103, O = C ? Symbol.for("react.portal") : 60106, n = C ? Symbol.for("react.fragment") : 60107, u = C ? Symbol.for("react.strict_mode") : 60108, B = C ? Symbol.for("react.profiler") : 60114, L = C ? Symbol.for("react.provider") : 60109, X = C ? Symbol.for("react.context") : 60110, b = C ? Symbol.for("react.async_mode") : 60111, P = C ? Symbol.for("react.concurrent_mode") : 60111, p = C ? Symbol.for("react.forward_ref") : 60112, F = C ? Symbol.for("react.suspense") : 60113, M = C ? Symbol.for("react.suspense_list") : 60120, k = C ? Symbol.for("react.memo") : 60115, w = C ? Symbol.for("react.lazy") : 60116, _ = C ? Symbol.for("react.block") : 60121, y = C ? Symbol.for("react.fundamental") : 60117, S = C ? Symbol.for("react.responder") : 60118, D = C ? Symbol.for("react.scope") : 60119;
  function R(o) {
    if (typeof o == "object" && o !== null) {
      var f = o.$$typeof;
      switch (f) {
        case s:
          switch (o = o.type, o) {
            case b:
            case P:
            case n:
            case B:
            case u:
            case F:
              return o;
            default:
              switch (o = o && o.$$typeof, o) {
                case X:
                case p:
                case w:
                case k:
                case L:
                  return o;
                default:
                  return f;
              }
          }
        case O:
          return f;
      }
    }
  }
  function A(o) {
    return R(o) === P;
  }
  return reactIs_production_min.AsyncMode = b, reactIs_production_min.ConcurrentMode = P, reactIs_production_min.ContextConsumer = X, reactIs_production_min.ContextProvider = L, reactIs_production_min.Element = s, reactIs_production_min.ForwardRef = p, reactIs_production_min.Fragment = n, reactIs_production_min.Lazy = w, reactIs_production_min.Memo = k, reactIs_production_min.Portal = O, reactIs_production_min.Profiler = B, reactIs_production_min.StrictMode = u, reactIs_production_min.Suspense = F, reactIs_production_min.isAsyncMode = function(o) {
    return A(o) || R(o) === b;
  }, reactIs_production_min.isConcurrentMode = A, reactIs_production_min.isContextConsumer = function(o) {
    return R(o) === X;
  }, reactIs_production_min.isContextProvider = function(o) {
    return R(o) === L;
  }, reactIs_production_min.isElement = function(o) {
    return typeof o == "object" && o !== null && o.$$typeof === s;
  }, reactIs_production_min.isForwardRef = function(o) {
    return R(o) === p;
  }, reactIs_production_min.isFragment = function(o) {
    return R(o) === n;
  }, reactIs_production_min.isLazy = function(o) {
    return R(o) === w;
  }, reactIs_production_min.isMemo = function(o) {
    return R(o) === k;
  }, reactIs_production_min.isPortal = function(o) {
    return R(o) === O;
  }, reactIs_production_min.isProfiler = function(o) {
    return R(o) === B;
  }, reactIs_production_min.isStrictMode = function(o) {
    return R(o) === u;
  }, reactIs_production_min.isSuspense = function(o) {
    return R(o) === F;
  }, reactIs_production_min.isValidElementType = function(o) {
    return typeof o == "string" || typeof o == "function" || o === n || o === P || o === B || o === u || o === F || o === M || typeof o == "object" && o !== null && (o.$$typeof === w || o.$$typeof === k || o.$$typeof === L || o.$$typeof === X || o.$$typeof === p || o.$$typeof === y || o.$$typeof === S || o.$$typeof === D || o.$$typeof === _);
  }, reactIs_production_min.typeOf = R, reactIs_production_min;
}
var reactIs_development = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactIs_development;
function requireReactIs_development() {
  return hasRequiredReactIs_development || (hasRequiredReactIs_development = 1, process.env.NODE_ENV !== "production" && function() {
    var C = typeof Symbol == "function" && Symbol.for, s = C ? Symbol.for("react.element") : 60103, O = C ? Symbol.for("react.portal") : 60106, n = C ? Symbol.for("react.fragment") : 60107, u = C ? Symbol.for("react.strict_mode") : 60108, B = C ? Symbol.for("react.profiler") : 60114, L = C ? Symbol.for("react.provider") : 60109, X = C ? Symbol.for("react.context") : 60110, b = C ? Symbol.for("react.async_mode") : 60111, P = C ? Symbol.for("react.concurrent_mode") : 60111, p = C ? Symbol.for("react.forward_ref") : 60112, F = C ? Symbol.for("react.suspense") : 60113, M = C ? Symbol.for("react.suspense_list") : 60120, k = C ? Symbol.for("react.memo") : 60115, w = C ? Symbol.for("react.lazy") : 60116, _ = C ? Symbol.for("react.block") : 60121, y = C ? Symbol.for("react.fundamental") : 60117, S = C ? Symbol.for("react.responder") : 60118, D = C ? Symbol.for("react.scope") : 60119;
    function R(q) {
      return typeof q == "string" || typeof q == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      q === n || q === P || q === B || q === u || q === F || q === M || typeof q == "object" && q !== null && (q.$$typeof === w || q.$$typeof === k || q.$$typeof === L || q.$$typeof === X || q.$$typeof === p || q.$$typeof === y || q.$$typeof === S || q.$$typeof === D || q.$$typeof === _);
    }
    function A(q) {
      if (typeof q == "object" && q !== null) {
        var nt = q.$$typeof;
        switch (nt) {
          case s:
            var ut = q.type;
            switch (ut) {
              case b:
              case P:
              case n:
              case B:
              case u:
              case F:
                return ut;
              default:
                var pt = ut && ut.$$typeof;
                switch (pt) {
                  case X:
                  case p:
                  case w:
                  case k:
                  case L:
                    return pt;
                  default:
                    return nt;
                }
            }
          case O:
            return nt;
        }
      }
    }
    var o = b, f = P, j = X, v = L, h = s, I = p, g = n, U = w, G = k, m = O, Y = B, Q = u, it = F, z = !1;
    function lt(q) {
      return z || (z = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), K(q) || A(q) === b;
    }
    function K(q) {
      return A(q) === P;
    }
    function ht(q) {
      return A(q) === X;
    }
    function yt(q) {
      return A(q) === L;
    }
    function E(q) {
      return typeof q == "object" && q !== null && q.$$typeof === s;
    }
    function e(q) {
      return A(q) === p;
    }
    function l(q) {
      return A(q) === n;
    }
    function i(q) {
      return A(q) === w;
    }
    function c(q) {
      return A(q) === k;
    }
    function d(q) {
      return A(q) === O;
    }
    function T(q) {
      return A(q) === B;
    }
    function N(q) {
      return A(q) === u;
    }
    function W(q) {
      return A(q) === F;
    }
    reactIs_development.AsyncMode = o, reactIs_development.ConcurrentMode = f, reactIs_development.ContextConsumer = j, reactIs_development.ContextProvider = v, reactIs_development.Element = h, reactIs_development.ForwardRef = I, reactIs_development.Fragment = g, reactIs_development.Lazy = U, reactIs_development.Memo = G, reactIs_development.Portal = m, reactIs_development.Profiler = Y, reactIs_development.StrictMode = Q, reactIs_development.Suspense = it, reactIs_development.isAsyncMode = lt, reactIs_development.isConcurrentMode = K, reactIs_development.isContextConsumer = ht, reactIs_development.isContextProvider = yt, reactIs_development.isElement = E, reactIs_development.isForwardRef = e, reactIs_development.isFragment = l, reactIs_development.isLazy = i, reactIs_development.isMemo = c, reactIs_development.isPortal = d, reactIs_development.isProfiler = T, reactIs_development.isStrictMode = N, reactIs_development.isSuspense = W, reactIs_development.isValidElementType = R, reactIs_development.typeOf = A;
  }()), reactIs_development;
}
var hasRequiredReactIs;
function requireReactIs() {
  return hasRequiredReactIs || (hasRequiredReactIs = 1, process.env.NODE_ENV === "production" ? reactIs.exports = requireReactIs_production_min() : reactIs.exports = requireReactIs_development()), reactIs.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var objectAssign, hasRequiredObjectAssign;
function requireObjectAssign() {
  if (hasRequiredObjectAssign)
    return objectAssign;
  hasRequiredObjectAssign = 1;
  var C = Object.getOwnPropertySymbols, s = Object.prototype.hasOwnProperty, O = Object.prototype.propertyIsEnumerable;
  function n(B) {
    if (B == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(B);
  }
  function u() {
    try {
      if (!Object.assign)
        return !1;
      var B = new String("abc");
      if (B[5] = "de", Object.getOwnPropertyNames(B)[0] === "5")
        return !1;
      for (var L = {}, X = 0; X < 10; X++)
        L["_" + String.fromCharCode(X)] = X;
      var b = Object.getOwnPropertyNames(L).map(function(p) {
        return L[p];
      });
      if (b.join("") !== "0123456789")
        return !1;
      var P = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        P[p] = p;
      }), Object.keys(Object.assign({}, P)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return objectAssign = u() ? Object.assign : function(B, L) {
    for (var X, b = n(B), P, p = 1; p < arguments.length; p++) {
      X = Object(arguments[p]);
      for (var F in X)
        s.call(X, F) && (b[F] = X[F]);
      if (C) {
        P = C(X);
        for (var M = 0; M < P.length; M++)
          O.call(X, P[M]) && (b[P[M]] = X[P[M]]);
      }
    }
    return b;
  }, objectAssign;
}
var ReactPropTypesSecret_1, hasRequiredReactPropTypesSecret;
function requireReactPropTypesSecret() {
  if (hasRequiredReactPropTypesSecret)
    return ReactPropTypesSecret_1;
  hasRequiredReactPropTypesSecret = 1;
  var C = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ReactPropTypesSecret_1 = C, ReactPropTypesSecret_1;
}
var has$1, hasRequiredHas;
function requireHas() {
  return hasRequiredHas || (hasRequiredHas = 1, has$1 = Function.call.bind(Object.prototype.hasOwnProperty)), has$1;
}
var checkPropTypes_1, hasRequiredCheckPropTypes;
function requireCheckPropTypes() {
  if (hasRequiredCheckPropTypes)
    return checkPropTypes_1;
  hasRequiredCheckPropTypes = 1;
  var C = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var s = requireReactPropTypesSecret(), O = {}, n = requireHas();
    C = function(B) {
      var L = "Warning: " + B;
      typeof console < "u" && console.error(L);
      try {
        throw new Error(L);
      } catch {
      }
    };
  }
  function u(B, L, X, b, P) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in B)
        if (n(B, p)) {
          var F;
          try {
            if (typeof B[p] != "function") {
              var M = Error(
                (b || "React class") + ": " + X + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof B[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw M.name = "Invariant Violation", M;
            }
            F = B[p](L, p, b, X, null, s);
          } catch (w) {
            F = w;
          }
          if (F && !(F instanceof Error) && C(
            (b || "React class") + ": type specification of " + X + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof F + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), F instanceof Error && !(F.message in O)) {
            O[F.message] = !0;
            var k = P ? P() : "";
            C(
              "Failed " + X + " type: " + F.message + (k ?? "")
            );
          }
        }
    }
  }
  return u.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (O = {});
  }, checkPropTypes_1 = u, checkPropTypes_1;
}
var factoryWithTypeCheckers, hasRequiredFactoryWithTypeCheckers;
function requireFactoryWithTypeCheckers() {
  if (hasRequiredFactoryWithTypeCheckers)
    return factoryWithTypeCheckers;
  hasRequiredFactoryWithTypeCheckers = 1;
  var C = requireReactIs(), s = requireObjectAssign(), O = requireReactPropTypesSecret(), n = requireHas(), u = requireCheckPropTypes(), B = function() {
  };
  process.env.NODE_ENV !== "production" && (B = function(X) {
    var b = "Warning: " + X;
    typeof console < "u" && console.error(b);
    try {
      throw new Error(b);
    } catch {
    }
  });
  function L() {
    return null;
  }
  return factoryWithTypeCheckers = function(X, b) {
    var P = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function F(K) {
      var ht = K && (P && K[P] || K[p]);
      if (typeof ht == "function")
        return ht;
    }
    var M = "<<anonymous>>", k = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: D(),
      arrayOf: R,
      element: A(),
      elementType: o(),
      instanceOf: f,
      node: I(),
      objectOf: v,
      oneOf: j,
      oneOfType: h,
      shape: U,
      exact: G
    };
    function w(K, ht) {
      return K === ht ? K !== 0 || 1 / K === 1 / ht : K !== K && ht !== ht;
    }
    function _(K, ht) {
      this.message = K, this.data = ht && typeof ht == "object" ? ht : {}, this.stack = "";
    }
    _.prototype = Error.prototype;
    function y(K) {
      if (process.env.NODE_ENV !== "production")
        var ht = {}, yt = 0;
      function E(l, i, c, d, T, N, W) {
        if (d = d || M, N = N || c, W !== O) {
          if (b) {
            var q = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw q.name = "Invariant Violation", q;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var nt = d + ":" + c;
            !ht[nt] && // Avoid spamming the console because they are often not actionable except for lib authors
            yt < 3 && (B(
              "You are manually calling a React.PropTypes validation function for the `" + N + "` prop on `" + d + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), ht[nt] = !0, yt++);
          }
        }
        return i[c] == null ? l ? i[c] === null ? new _("The " + T + " `" + N + "` is marked as required " + ("in `" + d + "`, but its value is `null`.")) : new _("The " + T + " `" + N + "` is marked as required in " + ("`" + d + "`, but its value is `undefined`.")) : null : K(i, c, d, T, N);
      }
      var e = E.bind(null, !1);
      return e.isRequired = E.bind(null, !0), e;
    }
    function S(K) {
      function ht(yt, E, e, l, i, c) {
        var d = yt[E], T = Q(d);
        if (T !== K) {
          var N = it(d);
          return new _(
            "Invalid " + l + " `" + i + "` of type " + ("`" + N + "` supplied to `" + e + "`, expected ") + ("`" + K + "`."),
            { expectedType: K }
          );
        }
        return null;
      }
      return y(ht);
    }
    function D() {
      return y(L);
    }
    function R(K) {
      function ht(yt, E, e, l, i) {
        if (typeof K != "function")
          return new _("Property `" + i + "` of component `" + e + "` has invalid PropType notation inside arrayOf.");
        var c = yt[E];
        if (!Array.isArray(c)) {
          var d = Q(c);
          return new _("Invalid " + l + " `" + i + "` of type " + ("`" + d + "` supplied to `" + e + "`, expected an array."));
        }
        for (var T = 0; T < c.length; T++) {
          var N = K(c, T, e, l, i + "[" + T + "]", O);
          if (N instanceof Error)
            return N;
        }
        return null;
      }
      return y(ht);
    }
    function A() {
      function K(ht, yt, E, e, l) {
        var i = ht[yt];
        if (!X(i)) {
          var c = Q(i);
          return new _("Invalid " + e + " `" + l + "` of type " + ("`" + c + "` supplied to `" + E + "`, expected a single ReactElement."));
        }
        return null;
      }
      return y(K);
    }
    function o() {
      function K(ht, yt, E, e, l) {
        var i = ht[yt];
        if (!C.isValidElementType(i)) {
          var c = Q(i);
          return new _("Invalid " + e + " `" + l + "` of type " + ("`" + c + "` supplied to `" + E + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return y(K);
    }
    function f(K) {
      function ht(yt, E, e, l, i) {
        if (!(yt[E] instanceof K)) {
          var c = K.name || M, d = lt(yt[E]);
          return new _("Invalid " + l + " `" + i + "` of type " + ("`" + d + "` supplied to `" + e + "`, expected ") + ("instance of `" + c + "`."));
        }
        return null;
      }
      return y(ht);
    }
    function j(K) {
      if (!Array.isArray(K))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? B(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : B("Invalid argument supplied to oneOf, expected an array.")), L;
      function ht(yt, E, e, l, i) {
        for (var c = yt[E], d = 0; d < K.length; d++)
          if (w(c, K[d]))
            return null;
        var T = JSON.stringify(K, function(W, q) {
          var nt = it(q);
          return nt === "symbol" ? String(q) : q;
        });
        return new _("Invalid " + l + " `" + i + "` of value `" + String(c) + "` " + ("supplied to `" + e + "`, expected one of " + T + "."));
      }
      return y(ht);
    }
    function v(K) {
      function ht(yt, E, e, l, i) {
        if (typeof K != "function")
          return new _("Property `" + i + "` of component `" + e + "` has invalid PropType notation inside objectOf.");
        var c = yt[E], d = Q(c);
        if (d !== "object")
          return new _("Invalid " + l + " `" + i + "` of type " + ("`" + d + "` supplied to `" + e + "`, expected an object."));
        for (var T in c)
          if (n(c, T)) {
            var N = K(c, T, e, l, i + "." + T, O);
            if (N instanceof Error)
              return N;
          }
        return null;
      }
      return y(ht);
    }
    function h(K) {
      if (!Array.isArray(K))
        return process.env.NODE_ENV !== "production" && B("Invalid argument supplied to oneOfType, expected an instance of array."), L;
      for (var ht = 0; ht < K.length; ht++) {
        var yt = K[ht];
        if (typeof yt != "function")
          return B(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + z(yt) + " at index " + ht + "."
          ), L;
      }
      function E(e, l, i, c, d) {
        for (var T = [], N = 0; N < K.length; N++) {
          var W = K[N], q = W(e, l, i, c, d, O);
          if (q == null)
            return null;
          q.data && n(q.data, "expectedType") && T.push(q.data.expectedType);
        }
        var nt = T.length > 0 ? ", expected one of type [" + T.join(", ") + "]" : "";
        return new _("Invalid " + c + " `" + d + "` supplied to " + ("`" + i + "`" + nt + "."));
      }
      return y(E);
    }
    function I() {
      function K(ht, yt, E, e, l) {
        return m(ht[yt]) ? null : new _("Invalid " + e + " `" + l + "` supplied to " + ("`" + E + "`, expected a ReactNode."));
      }
      return y(K);
    }
    function g(K, ht, yt, E, e) {
      return new _(
        (K || "React class") + ": " + ht + " type `" + yt + "." + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + e + "`."
      );
    }
    function U(K) {
      function ht(yt, E, e, l, i) {
        var c = yt[E], d = Q(c);
        if (d !== "object")
          return new _("Invalid " + l + " `" + i + "` of type `" + d + "` " + ("supplied to `" + e + "`, expected `object`."));
        for (var T in K) {
          var N = K[T];
          if (typeof N != "function")
            return g(e, l, i, T, it(N));
          var W = N(c, T, e, l, i + "." + T, O);
          if (W)
            return W;
        }
        return null;
      }
      return y(ht);
    }
    function G(K) {
      function ht(yt, E, e, l, i) {
        var c = yt[E], d = Q(c);
        if (d !== "object")
          return new _("Invalid " + l + " `" + i + "` of type `" + d + "` " + ("supplied to `" + e + "`, expected `object`."));
        var T = s({}, yt[E], K);
        for (var N in T) {
          var W = K[N];
          if (n(K, N) && typeof W != "function")
            return g(e, l, i, N, it(W));
          if (!W)
            return new _(
              "Invalid " + l + " `" + i + "` key `" + N + "` supplied to `" + e + "`.\nBad object: " + JSON.stringify(yt[E], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(K), null, "  ")
            );
          var q = W(c, N, e, l, i + "." + N, O);
          if (q)
            return q;
        }
        return null;
      }
      return y(ht);
    }
    function m(K) {
      switch (typeof K) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !K;
        case "object":
          if (Array.isArray(K))
            return K.every(m);
          if (K === null || X(K))
            return !0;
          var ht = F(K);
          if (ht) {
            var yt = ht.call(K), E;
            if (ht !== K.entries) {
              for (; !(E = yt.next()).done; )
                if (!m(E.value))
                  return !1;
            } else
              for (; !(E = yt.next()).done; ) {
                var e = E.value;
                if (e && !m(e[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Y(K, ht) {
      return K === "symbol" ? !0 : ht ? ht["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && ht instanceof Symbol : !1;
    }
    function Q(K) {
      var ht = typeof K;
      return Array.isArray(K) ? "array" : K instanceof RegExp ? "object" : Y(ht, K) ? "symbol" : ht;
    }
    function it(K) {
      if (typeof K > "u" || K === null)
        return "" + K;
      var ht = Q(K);
      if (ht === "object") {
        if (K instanceof Date)
          return "date";
        if (K instanceof RegExp)
          return "regexp";
      }
      return ht;
    }
    function z(K) {
      var ht = it(K);
      switch (ht) {
        case "array":
        case "object":
          return "an " + ht;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + ht;
        default:
          return ht;
      }
    }
    function lt(K) {
      return !K.constructor || !K.constructor.name ? M : K.constructor.name;
    }
    return k.checkPropTypes = u, k.resetWarningCache = u.resetWarningCache, k.PropTypes = k, k;
  }, factoryWithTypeCheckers;
}
var factoryWithThrowingShims, hasRequiredFactoryWithThrowingShims;
function requireFactoryWithThrowingShims() {
  if (hasRequiredFactoryWithThrowingShims)
    return factoryWithThrowingShims;
  hasRequiredFactoryWithThrowingShims = 1;
  var C = requireReactPropTypesSecret();
  function s() {
  }
  function O() {
  }
  return O.resetWarningCache = s, factoryWithThrowingShims = function() {
    function n(L, X, b, P, p, F) {
      if (F !== C) {
        var M = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw M.name = "Invariant Violation", M;
      }
    }
    n.isRequired = n;
    function u() {
      return n;
    }
    var B = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: u,
      element: n,
      elementType: n,
      instanceOf: u,
      node: n,
      objectOf: u,
      oneOf: u,
      oneOfType: u,
      shape: u,
      exact: u,
      checkPropTypes: O,
      resetWarningCache: s
    };
    return B.PropTypes = B, B;
  }, factoryWithThrowingShims;
}
if (process.env.NODE_ENV !== "production") {
  var ReactIs = requireReactIs(), throwOnDirectAccess = !0;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
} else
  propTypes.exports = requireFactoryWithThrowingShims()();
var propTypesExports = propTypes.exports;
const PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
var __spreadArray = function(C, s, O) {
  if (O || arguments.length === 2)
    for (var n = 0, u = s.length, B; n < u; n++)
      (B || !(n in s)) && (B || (B = Array.prototype.slice.call(s, 0, n)), B[n] = s[n]);
  return C.concat(B || Array.prototype.slice.call(s));
}, clipboardEvents = ["onCopy", "onCut", "onPaste"], compositionEvents = [
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate"
], focusEvents = ["onFocus", "onBlur"], formEvents = ["onInput", "onInvalid", "onReset", "onSubmit"], imageEvents = ["onLoad", "onError"], keyboardEvents = ["onKeyDown", "onKeyPress", "onKeyUp"], mediaEvents = [
  "onAbort",
  "onCanPlay",
  "onCanPlayThrough",
  "onDurationChange",
  "onEmptied",
  "onEncrypted",
  "onEnded",
  "onError",
  "onLoadedData",
  "onLoadedMetadata",
  "onLoadStart",
  "onPause",
  "onPlay",
  "onPlaying",
  "onProgress",
  "onRateChange",
  "onSeeked",
  "onSeeking",
  "onStalled",
  "onSuspend",
  "onTimeUpdate",
  "onVolumeChange",
  "onWaiting"
], mouseEvents = [
  "onClick",
  "onContextMenu",
  "onDoubleClick",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp"
], dragEvents = [
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop"
], selectionEvents = ["onSelect"], touchEvents = ["onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart"], pointerEvents = [
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut"
], uiEvents = ["onScroll"], wheelEvents = ["onWheel"], animationEvents = [
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration"
], transitionEvents = ["onTransitionEnd"], otherEvents = ["onToggle"], changeEvents = ["onChange"], allEvents = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], clipboardEvents, !0), compositionEvents, !0), focusEvents, !0), formEvents, !0), imageEvents, !0), keyboardEvents, !0), mediaEvents, !0), mouseEvents, !0), dragEvents, !0), selectionEvents, !0), touchEvents, !0), pointerEvents, !0), uiEvents, !0), wheelEvents, !0), animationEvents, !0), transitionEvents, !0), changeEvents, !0), otherEvents, !0);
function makeEventProps(C, s) {
  var O = {};
  return allEvents.forEach(function(n) {
    var u = C[n];
    u && (s ? O[n] = function(B) {
      return u(B, s(n));
    } : O[n] = u);
  }), O;
}
function makeCancellablePromise(C) {
  var s = !1, O = new Promise(function(n, u) {
    C.then(function(B) {
      return !s && n(B);
    }).catch(function(B) {
      return !s && u(B);
    });
  });
  return {
    promise: O,
    cancel: function() {
      s = !0;
    }
  };
}
function r(C) {
  var s, O, n = "";
  if (typeof C == "string" || typeof C == "number")
    n += C;
  else if (typeof C == "object")
    if (Array.isArray(C)) {
      var u = C.length;
      for (s = 0; s < u; s++)
        C[s] && (O = r(C[s])) && (n && (n += " "), n += O);
    } else
      for (O in C)
        C[O] && (n && (n += " "), n += O);
  return n;
}
function clsx() {
  for (var C, s, O = 0, n = "", u = arguments.length; O < u; O++)
    (C = arguments[O]) && (s = r(C)) && (n && (n += " "), n += s);
  return n;
}
var isProduction = process.env.NODE_ENV === "production", prefix = "Invariant failed";
function invariant(C, s) {
  if (!C) {
    if (isProduction)
      throw new Error(prefix);
    var O = typeof s == "function" ? s() : s, n = O ? "".concat(prefix, ": ").concat(O) : prefix;
    throw new Error(n);
  }
}
var __DEV__ = process.env.NODE_ENV !== "production", warning = function() {
};
if (__DEV__) {
  var printWarning = function(s, O) {
    var n = arguments.length;
    O = new Array(n > 1 ? n - 1 : 0);
    for (var u = 1; u < n; u++)
      O[u - 1] = arguments[u];
    var B = 0, L = "Warning: " + s.replace(/%s/g, function() {
      return O[B++];
    });
    typeof console < "u" && console.error(L);
    try {
      throw new Error(L);
    } catch {
    }
  };
  warning = function(C, s, O) {
    var n = arguments.length;
    O = new Array(n > 2 ? n - 2 : 0);
    for (var u = 2; u < n; u++)
      O[u - 2] = arguments[u];
    if (s === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    C || printWarning.apply(null, [s].concat(O));
  };
}
var warning_1 = warning;
const warning$1 = /* @__PURE__ */ getDefaultExportFromCjs(warning_1);
var has = Object.prototype.hasOwnProperty;
function find(C, s, O) {
  for (O of C.keys())
    if (dequal(O, s))
      return O;
}
function dequal(C, s) {
  var O, n, u;
  if (C === s)
    return !0;
  if (C && s && (O = C.constructor) === s.constructor) {
    if (O === Date)
      return C.getTime() === s.getTime();
    if (O === RegExp)
      return C.toString() === s.toString();
    if (O === Array) {
      if ((n = C.length) === s.length)
        for (; n-- && dequal(C[n], s[n]); )
          ;
      return n === -1;
    }
    if (O === Set) {
      if (C.size !== s.size)
        return !1;
      for (n of C)
        if (u = n, u && typeof u == "object" && (u = find(s, u), !u) || !s.has(u))
          return !1;
      return !0;
    }
    if (O === Map) {
      if (C.size !== s.size)
        return !1;
      for (n of C)
        if (u = n[0], u && typeof u == "object" && (u = find(s, u), !u) || !dequal(n[1], s.get(u)))
          return !1;
      return !0;
    }
    if (O === ArrayBuffer)
      C = new Uint8Array(C), s = new Uint8Array(s);
    else if (O === DataView) {
      if ((n = C.byteLength) === s.byteLength)
        for (; n-- && C.getInt8(n) === s.getInt8(n); )
          ;
      return n === -1;
    }
    if (ArrayBuffer.isView(C)) {
      if ((n = C.byteLength) === s.byteLength)
        for (; n-- && C[n] === s[n]; )
          ;
      return n === -1;
    }
    if (!O || typeof C == "object") {
      n = 0;
      for (O in C)
        if (has.call(C, O) && ++n && !has.call(s, O) || !(O in s) || !dequal(C[O], s[O]))
          return !1;
      return Object.keys(s).length === n;
    }
  }
  return C !== C && s !== s;
}
const DocumentContext = createContext(null);
function Message({ children: C, type: s }) {
  return React__default.createElement("div", { className: `react-pdf__message react-pdf__message--${s}` }, C);
}
const DEFAULT_LINK_REL = "noopener noreferrer nofollow";
class LinkService {
  constructor() {
    this.externalLinkEnabled = !0, this.externalLinkRel = void 0, this.externalLinkTarget = void 0, this.isInPresentationMode = !1, this.pdfDocument = void 0, this.pdfViewer = void 0;
  }
  setDocument(s) {
    this.pdfDocument = s;
  }
  setViewer(s) {
    this.pdfViewer = s;
  }
  setExternalLinkRel(s) {
    this.externalLinkRel = s;
  }
  setExternalLinkTarget(s) {
    this.externalLinkTarget = s;
  }
  setHistory() {
  }
  get pagesCount() {
    return this.pdfDocument ? this.pdfDocument.numPages : 0;
  }
  get page() {
    return invariant(this.pdfViewer, "PDF viewer is not initialized."), this.pdfViewer.currentPageNumber || 0;
  }
  set page(s) {
    invariant(this.pdfViewer, "PDF viewer is not initialized."), this.pdfViewer.currentPageNumber = s;
  }
  // eslint-disable-next-line @typescript-eslint/class-literal-property-style
  get rotation() {
    return 0;
  }
  set rotation(s) {
  }
  goToDestination(s) {
    return new Promise((O) => {
      invariant(this.pdfDocument, "PDF document not loaded."), invariant(s, "Destination is not specified."), typeof s == "string" ? this.pdfDocument.getDestination(s).then(O) : Array.isArray(s) ? O(s) : s.then(O);
    }).then((O) => {
      invariant(Array.isArray(O), `"${O}" is not a valid destination array.`);
      const n = O[0];
      new Promise((u) => {
        invariant(this.pdfDocument, "PDF document not loaded."), n instanceof Object ? this.pdfDocument.getPageIndex(n).then((B) => {
          u(B);
        }).catch(() => {
          invariant(!1, `"${n}" is not a valid page reference.`);
        }) : typeof n == "number" ? u(n) : invariant(!1, `"${n}" is not a valid destination reference.`);
      }).then((u) => {
        const B = u + 1;
        invariant(this.pdfViewer, "PDF viewer is not initialized."), invariant(B >= 1 && B <= this.pagesCount, `"${B}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
          dest: O,
          pageIndex: u,
          pageNumber: B
        });
      });
    });
  }
  navigateTo(s) {
    this.goToDestination(s);
  }
  goToPage(s) {
    const O = s - 1;
    invariant(this.pdfViewer, "PDF viewer is not initialized."), invariant(s >= 1 && s <= this.pagesCount, `"${s}" is not a valid page number.`), this.pdfViewer.scrollPageIntoView({
      pageIndex: O,
      pageNumber: s
    });
  }
  addLinkAttributes(s, O, n) {
    s.href = O, s.rel = this.externalLinkRel || DEFAULT_LINK_REL, s.target = n ? "_blank" : this.externalLinkTarget || "";
  }
  getDestinationHash() {
    return "#";
  }
  getAnchorUrl() {
    return "#";
  }
  setHash() {
  }
  executeNamedAction() {
  }
  cachePageRef() {
  }
  isPageVisible() {
    return !0;
  }
  isPageCached() {
    return !0;
  }
  executeSetOCGState() {
  }
}
const PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
}, isBrowser = typeof document < "u", isLocalFileSystem = isBrowser && window.location.protocol === "file:";
function isDefined(C) {
  return typeof C < "u";
}
function isProvided(C) {
  return isDefined(C) && C !== null;
}
function isString(C) {
  return typeof C == "string";
}
function isArrayBuffer(C) {
  return C instanceof ArrayBuffer;
}
function isBlob(C) {
  return invariant(isBrowser, "isBlob can only be used in a browser environment"), C instanceof Blob;
}
function isDataURI(C) {
  return isString(C) && /^data:/.test(C);
}
function dataURItoByteString(C) {
  invariant(isDataURI(C), "Invalid data URI.");
  const [s = "", O = ""] = C.split(",");
  return s.split(";").indexOf("base64") !== -1 ? atob(O) : unescape(O);
}
function getDevicePixelRatio() {
  return isBrowser && window.devicePixelRatio || 1;
}
const allowFileAccessFromFilesTip = "On Chromium based browsers, you can use --allow-file-access-from-files flag for debugging purposes.";
function displayCORSWarning() {
  warning$1(!isLocalFileSystem, `Loading PDF as base64 strings/URLs may not work on protocols other than HTTP/HTTPS. ${allowFileAccessFromFilesTip}`);
}
function displayWorkerWarning() {
  warning$1(!isLocalFileSystem, `Loading PDF.js worker may not work on protocols other than HTTP/HTTPS. ${allowFileAccessFromFilesTip}`);
}
function cancelRunningTask(C) {
  C && C.cancel && C.cancel();
}
function makePageCallback(C, s) {
  return Object.defineProperty(C, "width", {
    get() {
      return this.view[2] * s;
    },
    configurable: !0
  }), Object.defineProperty(C, "height", {
    get() {
      return this.view[3] * s;
    },
    configurable: !0
  }), Object.defineProperty(C, "originalWidth", {
    get() {
      return this.view[2];
    },
    configurable: !0
  }), Object.defineProperty(C, "originalHeight", {
    get() {
      return this.view[3];
    },
    configurable: !0
  }), C;
}
function isCancelException(C) {
  return C.name === "RenderingCancelledException";
}
function loadFromFile(C) {
  return new Promise((s, O) => {
    const n = new FileReader();
    n.onload = () => {
      if (!n.result)
        return O(new Error("Error while reading a file."));
      s(n.result);
    }, n.onerror = (u) => {
      if (!u.target)
        return O(new Error("Error while reading a file."));
      const { error: B } = u.target;
      if (!B)
        return O(new Error("Error while reading a file."));
      switch (B.code) {
        case B.NOT_FOUND_ERR:
          return O(new Error("Error while reading a file: File not found."));
        case B.SECURITY_ERR:
          return O(new Error("Error while reading a file: Security error."));
        case B.ABORT_ERR:
          return O(new Error("Error while reading a file: Aborted."));
        default:
          return O(new Error("Error while reading a file."));
      }
    }, n.readAsArrayBuffer(C);
  });
}
function reducer(C, s) {
  switch (s.type) {
    case "RESOLVE":
      return { value: s.value, error: void 0 };
    case "REJECT":
      return { value: !1, error: s.error };
    case "RESET":
      return { value: void 0, error: void 0 };
    default:
      return C;
  }
}
function useResolver() {
  return useReducer(reducer, { value: void 0, error: void 0 });
}
const { PDFDataRangeTransport: PDFDataRangeTransport$1 } = pdfjs, eventProps = (() => {
  const C = {};
  return allEvents.forEach((s) => {
    C[s] = PropTypes.func;
  }), C;
})(), isTypedArray = PropTypes.oneOfType([
  PropTypes.instanceOf(Int8Array),
  PropTypes.instanceOf(Uint8Array),
  PropTypes.instanceOf(Uint8ClampedArray),
  PropTypes.instanceOf(Int16Array),
  PropTypes.instanceOf(Uint16Array),
  PropTypes.instanceOf(Int32Array),
  PropTypes.instanceOf(Uint32Array),
  PropTypes.instanceOf(Float32Array),
  PropTypes.instanceOf(Float64Array)
]), fileTypes = [
  PropTypes.string,
  PropTypes.instanceOf(ArrayBuffer),
  PropTypes.shape({
    data: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(ArrayBuffer),
      PropTypes.arrayOf(PropTypes.number.isRequired),
      isTypedArray
    ]).isRequired
  }),
  PropTypes.shape({
    range: PropTypes.instanceOf(PDFDataRangeTransport$1).isRequired
  }),
  PropTypes.shape({
    url: PropTypes.string.isRequired
  })
];
typeof Blob < "u" && fileTypes.push(PropTypes.instanceOf(Blob));
const isClassName = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.string)
]), isFile = PropTypes.oneOfType(fileTypes);
PropTypes.instanceOf(LinkService);
PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]);
PropTypes.shape({
  commonObjs: PropTypes.shape({}).isRequired,
  getAnnotations: PropTypes.func.isRequired,
  getTextContent: PropTypes.func.isRequired,
  getViewport: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired
});
const isPageIndex = function C(s, O, n) {
  const { [O]: u, pageNumber: B, pdf: L } = s;
  if (!isDefined(L))
    return null;
  if (isDefined(u)) {
    if (typeof u != "number")
      return new Error(`\`${O}\` of type \`${typeof u}\` supplied to \`${n}\`, expected \`number\`.`);
    if (u < 0)
      return new Error(`Expected \`${O}\` to be greater or equal to 0.`);
    const { numPages: X } = L;
    if (u + 1 > X)
      return new Error(`Expected \`${O}\` to be less or equal to ${X - 1}.`);
  } else if (!isDefined(B))
    return new Error(`\`${O}\` not supplied. Either pageIndex or pageNumber must be supplied to \`${n}\`.`);
  return null;
}, isPageNumber = function C(s, O, n) {
  const { [O]: u, pageIndex: B, pdf: L } = s;
  if (!isDefined(L))
    return null;
  if (isDefined(u)) {
    if (typeof u != "number")
      return new Error(`\`${O}\` of type \`${typeof u}\` supplied to \`${n}\`, expected \`number\`.`);
    if (u < 1)
      return new Error(`Expected \`${O}\` to be greater or equal to 1.`);
    const { numPages: X } = L;
    if (u > X)
      return new Error(`Expected \`${O}\` to be less or equal to ${X}.`);
  } else if (!isDefined(B))
    return new Error(`\`${O}\` not supplied. Either pageIndex or pageNumber must be supplied to \`${n}\`.`);
  return null;
}, isPdf = PropTypes.oneOfType([
  // Ideally, this would be `PropTypes.instanceOf(PDFDocumentProxy)`, but it can't be imported.
  PropTypes.any,
  PropTypes.oneOf([!1])
]), isRef = PropTypes.oneOfType([
  PropTypes.func,
  PropTypes.exact({
    current: PropTypes.any
  })
]), isRenderMode = PropTypes.oneOf(["canvas", "custom", "none", "svg"]), isRotate = PropTypes.oneOf([0, 90, 180, 270]);
var __awaiter = function(C, s, O, n) {
  function u(B) {
    return B instanceof O ? B : new O(function(L) {
      L(B);
    });
  }
  return new (O || (O = Promise))(function(B, L) {
    function X(p) {
      try {
        P(n.next(p));
      } catch (F) {
        L(F);
      }
    }
    function b(p) {
      try {
        P(n.throw(p));
      } catch (F) {
        L(F);
      }
    }
    function P(p) {
      p.done ? B(p.value) : u(p.value).then(X, b);
    }
    P((n = n.apply(C, s || [])).next());
  });
}, __rest$1 = function(C, s) {
  var O = {};
  for (var n in C)
    Object.prototype.hasOwnProperty.call(C, n) && s.indexOf(n) < 0 && (O[n] = C[n]);
  if (C != null && typeof Object.getOwnPropertySymbols == "function")
    for (var u = 0, n = Object.getOwnPropertySymbols(C); u < n.length; u++)
      s.indexOf(n[u]) < 0 && Object.prototype.propertyIsEnumerable.call(C, n[u]) && (O[n[u]] = C[n[u]]);
  return O;
};
const { PDFDataRangeTransport } = pdfjs, defaultOnPassword = (C, s) => {
  switch (s) {
    case PasswordResponses.NEED_PASSWORD: {
      const O = prompt("Enter the password to open this PDF file.");
      C(O);
      break;
    }
    case PasswordResponses.INCORRECT_PASSWORD: {
      const O = prompt("Invalid password. Please try again.");
      C(O);
      break;
    }
  }
};
function isParameterObject(C) {
  return typeof C == "object" && C !== null && ("data" in C || "range" in C || "url" in C);
}
const Document = forwardRef(function C(s, O) {
  var { children: n, className: u, error: B = "Failed to load PDF file.", externalLinkRel: L, externalLinkTarget: X, file: b, inputRef: P, imageResourcesPath: p, loading: F = "Loading PDF…", noData: M = "No PDF file specified.", onItemClick: k, onLoadError: w, onLoadProgress: _, onLoadSuccess: y, onPassword: S = defaultOnPassword, onSourceError: D, onSourceSuccess: R, options: A, renderMode: o, rotate: f } = s, j = __rest$1(s, ["children", "className", "error", "externalLinkRel", "externalLinkTarget", "file", "inputRef", "imageResourcesPath", "loading", "noData", "onItemClick", "onLoadError", "onLoadProgress", "onLoadSuccess", "onPassword", "onSourceError", "onSourceSuccess", "options", "renderMode", "rotate"]);
  const [v, h] = useResolver(), { value: I, error: g } = v, [U, G] = useResolver(), { value: m, error: Y } = U, Q = useRef(new LinkService()), it = useRef([]), z = useRef(), lt = useRef();
  useEffect(() => {
    b && b !== z.current && isParameterObject(b) && (warning$1(!dequal(b, z.current), `File prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "file" prop.`), z.current = b);
  }, [b]), useEffect(() => {
    A && A !== lt.current && (warning$1(!dequal(A, lt.current), `Options prop passed to <Document /> changed, but it's equal to previous one. This might result in unnecessary reloads. Consider memoizing the value passed to "options" prop.`), lt.current = A);
  }, [A]);
  const K = useRef({
    // Handling jumping to internal links target
    scrollPageIntoView: (bt) => {
      const { dest: ft, pageNumber: xt, pageIndex: It = xt - 1 } = bt;
      if (k) {
        k({ dest: ft, pageIndex: It, pageNumber: xt });
        return;
      }
      const Tt = it.current[It];
      if (Tt) {
        Tt.scrollIntoView();
        return;
      }
      warning$1(!1, `An internal link leading to page ${xt} was clicked, but neither <Document> was provided with onItemClick nor it was able to find the page within itself. Either provide onItemClick to <Document> and handle navigating by yourself or ensure that all pages are rendered within <Document>.`);
    }
  });
  useImperativeHandle(O, () => ({
    linkService: Q,
    pages: it,
    viewer: K
  }), []);
  function ht() {
    R && R();
  }
  function yt() {
    g && (warning$1(!1, g.toString()), D && D(g));
  }
  function E() {
    h({ type: "RESET" });
  }
  useEffect(E, [b, h]);
  const e = useCallback(() => __awaiter(this, void 0, void 0, function* () {
    if (!b)
      return null;
    if (typeof b == "string")
      return isDataURI(b) ? { data: dataURItoByteString(b) } : (displayCORSWarning(), { url: b });
    if (b instanceof PDFDataRangeTransport)
      return { range: b };
    if (isArrayBuffer(b))
      return { data: b };
    if (isBrowser && isBlob(b))
      return { data: yield loadFromFile(b) };
    if (invariant(typeof b == "object", "Invalid parameter in file, need either Uint8Array, string or a parameter object"), invariant(isParameterObject(b), "Invalid parameter object: need either .data, .range or .url"), "url" in b && typeof b.url == "string") {
      if (isDataURI(b.url)) {
        const { url: bt } = b, ft = __rest$1(b, ["url"]), xt = dataURItoByteString(bt);
        return Object.assign({ data: xt }, ft);
      }
      displayCORSWarning();
    }
    return b;
  }), [b]);
  useEffect(() => {
    const bt = makeCancellablePromise(e());
    return bt.promise.then((ft) => {
      h({ type: "RESOLVE", value: ft });
    }).catch((ft) => {
      h({ type: "REJECT", error: ft });
    }), () => {
      cancelRunningTask(bt);
    };
  }, [e, h]), useEffect(
    () => {
      if (!(typeof I > "u")) {
        if (I === !1) {
          yt();
          return;
        }
        ht();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [I]
  );
  function l() {
    m && (y && y(m), it.current = new Array(m.numPages), Q.current.setDocument(m));
  }
  function i() {
    Y && (warning$1(!1, Y.toString()), w && w(Y));
  }
  function c() {
    G({ type: "RESET" });
  }
  useEffect(c, [G, I]);
  function d() {
    if (!I)
      return;
    const bt = A ? Object.assign(Object.assign({}, I), A) : I, ft = pdfjs.getDocument(bt);
    _ && (ft.onProgress = _), S && (ft.onPassword = S);
    const xt = ft;
    return xt.promise.then((It) => {
      G({ type: "RESOLVE", value: It });
    }).catch((It) => {
      xt.destroyed || G({ type: "REJECT", error: It });
    }), () => {
      xt.destroy();
    };
  }
  useEffect(
    d,
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [A, G, I]
  ), useEffect(
    () => {
      if (!(typeof m > "u")) {
        if (m === !1) {
          i();
          return;
        }
        l();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [m]
  );
  function T() {
    Q.current.setViewer(K.current), Q.current.setExternalLinkRel(L), Q.current.setExternalLinkTarget(X);
  }
  useEffect(T, [L, X]);
  function N(bt, ft) {
    it.current[bt] = ft;
  }
  function W(bt) {
    delete it.current[bt];
  }
  const q = useMemo(() => ({
    imageResourcesPath: p,
    linkService: Q.current,
    onItemClick: k,
    pdf: m,
    registerPage: N,
    renderMode: o,
    rotate: f,
    unregisterPage: W
  }), [p, k, m, o, f]), nt = useMemo(() => makeEventProps(j, () => m), [j, m]);
  function ut() {
    return React__default.createElement(DocumentContext.Provider, { value: q }, n);
  }
  function pt() {
    return b ? m == null ? React__default.createElement(Message, { type: "loading" }, typeof F == "function" ? F() : F) : m === !1 ? React__default.createElement(Message, { type: "error" }, typeof B == "function" ? B() : B) : ut() : React__default.createElement(Message, { type: "no-data" }, typeof M == "function" ? M() : M);
  }
  return React__default.createElement("div", Object.assign({ className: clsx("react-pdf__Document", u), ref: P, style: {
    "--scale-factor": "1"
  } }, nt), pt());
}), isFunctionOrNode$1 = PropTypes.oneOfType([PropTypes.func, PropTypes.node]);
Document.propTypes = Object.assign(Object.assign({}, eventProps), { children: PropTypes.node, className: isClassName, error: isFunctionOrNode$1, externalLinkRel: PropTypes.string, externalLinkTarget: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]), file: isFile, imageResourcesPath: PropTypes.string, inputRef: isRef, loading: isFunctionOrNode$1, noData: isFunctionOrNode$1, onItemClick: PropTypes.func, onLoadError: PropTypes.func, onLoadProgress: PropTypes.func, onLoadSuccess: PropTypes.func, onPassword: PropTypes.func, onSourceError: PropTypes.func, onSourceSuccess: PropTypes.func, options: PropTypes.shape({
  canvasFactory: PropTypes.any,
  canvasMaxAreaInBytes: PropTypes.number,
  cMapPacked: PropTypes.bool,
  CMapReaderFactory: PropTypes.any,
  cMapUrl: PropTypes.string,
  disableAutoFetch: PropTypes.bool,
  disableFontFace: PropTypes.bool,
  disableRange: PropTypes.bool,
  disableStream: PropTypes.bool,
  docBaseUrl: PropTypes.string,
  enableXfa: PropTypes.bool,
  filterFactory: PropTypes.any,
  fontExtraProperties: PropTypes.bool,
  httpHeaders: PropTypes.object,
  isEvalSupported: PropTypes.bool,
  isOffscreenCanvasSupported: PropTypes.bool,
  length: PropTypes.number,
  maxImageSize: PropTypes.number,
  ownerDocument: PropTypes.any,
  password: PropTypes.string,
  pdfBug: PropTypes.bool,
  rangeChunkSize: PropTypes.number,
  StandardFontDataFactory: PropTypes.any,
  standardFontDataUrl: PropTypes.string,
  stopAtErrors: PropTypes.bool,
  useSystemFonts: PropTypes.bool,
  useWorkerFetch: PropTypes.bool,
  verbosity: PropTypes.number,
  withCredentials: PropTypes.bool,
  worker: PropTypes.any
}), rotate: PropTypes.number });
const Document$1 = Document;
function useDocumentContext() {
  return useContext(DocumentContext);
}
function mergeRefs() {
  for (var C = [], s = 0; s < arguments.length; s++)
    C[s] = arguments[s];
  var O = C.filter(Boolean);
  if (O.length <= 1) {
    var n = O[0];
    return n || null;
  }
  return function(B) {
    O.forEach(function(L) {
      typeof L == "function" ? L(B) : L && (L.current = B);
    });
  };
}
const PageContext = createContext(null), PDF_ROLE_TO_HTML_ROLE = {
  // Document level structure types
  Document: null,
  // There's a "document" role, but it doesn't make sense here.
  DocumentFragment: null,
  // Grouping level structure types
  Part: "group",
  Sect: "group",
  // XXX: There's a "section" role, but it's abstract.
  Div: "group",
  Aside: "note",
  NonStruct: "none",
  // Block level structure types
  P: null,
  // H<n>,
  H: "heading",
  Title: null,
  FENote: "note",
  // Sub-block level structure type
  Sub: "group",
  // General inline level structure types
  Lbl: null,
  Span: null,
  Em: null,
  Strong: null,
  Link: "link",
  Annot: "note",
  Form: "form",
  // Ruby and Warichu structure types
  Ruby: null,
  RB: null,
  RT: null,
  RP: null,
  Warichu: null,
  WT: null,
  WP: null,
  // List standard structure types
  L: "list",
  LI: "listitem",
  LBody: null,
  // Table standard structure types
  Table: "table",
  TR: "row",
  TH: "columnheader",
  TD: "cell",
  THead: "columnheader",
  TBody: null,
  TFoot: null,
  // Standard structure type Caption
  Caption: null,
  // Standard structure type Figure
  Figure: "figure",
  // Standard structure type Formula
  Formula: null,
  // standard structure type Artifact
  Artifact: null
}, HEADING_PATTERN = /^H(\d+)$/;
function isPdfRole(C) {
  return C in PDF_ROLE_TO_HTML_ROLE;
}
function isStructTreeNode(C) {
  return "children" in C;
}
function isStructTreeNodeWithOnlyContentChild(C) {
  return isStructTreeNode(C) ? C.children.length === 1 && 0 in C.children && "id" in C.children[0] : !1;
}
function getRoleAttributes(C) {
  const s = {};
  if (isStructTreeNode(C)) {
    const { role: O } = C, n = O.match(HEADING_PATTERN);
    if (n)
      s.role = "heading", s["aria-level"] = Number(n[1]);
    else if (isPdfRole(O)) {
      const u = PDF_ROLE_TO_HTML_ROLE[O];
      u && (s.role = u);
    }
  }
  return s;
}
function getBaseAttributes(C) {
  const s = {};
  if (isStructTreeNode(C)) {
    if (C.alt !== void 0 && (s["aria-label"] = C.alt), C.lang !== void 0 && (s.lang = C.lang), isStructTreeNodeWithOnlyContentChild(C)) {
      const [O] = C.children;
      if (O) {
        const n = getBaseAttributes(O);
        return Object.assign(Object.assign({}, s), n);
      }
    }
  } else
    "id" in C && (s["aria-owns"] = C.id);
  return s;
}
function getAttributes(C) {
  return C ? Object.assign(Object.assign({}, getRoleAttributes(C)), getBaseAttributes(C)) : null;
}
function StructTreeItem({ className: C, node: s }) {
  const O = useMemo(() => getAttributes(s), [s]), n = useMemo(() => !isStructTreeNode(s) || isStructTreeNodeWithOnlyContentChild(s) ? null : s.children.map((u, B) => (
    // eslint-disable-next-line react/no-array-index-key
    React__default.createElement(StructTreeItem, { key: B, node: u })
  )), [s]);
  return React__default.createElement("span", Object.assign({ className: C }, O), n);
}
function usePageContext() {
  return useContext(PageContext);
}
function StructTree() {
  const C = usePageContext();
  invariant(C, "Unable to find Page context.");
  const { onGetStructTreeError: s, onGetStructTreeSuccess: O } = C, [n, u] = useResolver(), { value: B, error: L } = n, { customTextRenderer: X, page: b } = C;
  function P() {
    B && O && O(B);
  }
  function p() {
    L && (warning$1(!1, L.toString()), s && s(L));
  }
  function F() {
    u({ type: "RESET" });
  }
  useEffect(F, [u, b]);
  function M() {
    if (X || !b)
      return;
    const k = makeCancellablePromise(b.getStructTree()), w = k;
    return k.promise.then((_) => {
      u({ type: "RESOLVE", value: _ });
    }).catch((_) => {
      u({ type: "REJECT", error: _ });
    }), () => cancelRunningTask(w);
  }
  return useEffect(M, [X, b, u]), useEffect(
    () => {
      if (B !== void 0) {
        if (B === !1) {
          p();
          return;
        }
        P();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [B]
  ), B ? React__default.createElement(StructTreeItem, { className: "react-pdf__Page__structTree structTree", node: B }) : null;
}
const ANNOTATION_MODE = pdfjs.AnnotationMode;
function PageCanvas(C) {
  const s = usePageContext();
  invariant(s, "Unable to find Page context.");
  const O = Object.assign(Object.assign({}, s), C), { _className: n, canvasBackground: u, devicePixelRatio: B = getDevicePixelRatio(), onRenderError: L, onRenderSuccess: X, page: b, renderForms: P, renderTextLayer: p, rotate: F, scale: M } = O, { canvasRef: k } = C;
  invariant(b, "Attempted to render page canvas, but no page was specified.");
  const w = useRef(null);
  function _() {
    b && X && X(makePageCallback(b, M));
  }
  function y(o) {
    isCancelException(o) || (warning$1(!1, o.toString()), L && L(o));
  }
  const S = useMemo(() => b.getViewport({ scale: M * B, rotation: F }), [B, b, F, M]), D = useMemo(() => b.getViewport({ scale: M, rotation: F }), [b, F, M]);
  function R() {
    if (!b)
      return;
    b.cleanup();
    const { current: o } = w;
    if (!o)
      return;
    o.width = S.width, o.height = S.height, o.style.width = `${Math.floor(D.width)}px`, o.style.height = `${Math.floor(D.height)}px`, o.style.visibility = "hidden";
    const f = {
      annotationMode: P ? ANNOTATION_MODE.ENABLE_FORMS : ANNOTATION_MODE.ENABLE,
      canvasContext: o.getContext("2d", { alpha: !1 }),
      viewport: S
    };
    u && (f.background = u);
    const j = b.render(f), v = j;
    return j.promise.then(() => {
      o.style.visibility = "", _();
    }).catch(y), () => cancelRunningTask(v);
  }
  useEffect(
    R,
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      u,
      w,
      B,
      b,
      P,
      S,
      D
    ]
  );
  const A = useCallback(() => {
    const { current: o } = w;
    o && (o.width = 0, o.height = 0);
  }, [w]);
  return useEffect(() => A, [A]), React__default.createElement("canvas", { className: `${n}__canvas`, dir: "ltr", ref: mergeRefs(k, w), style: {
    display: "block",
    userSelect: "none"
  } }, p ? React__default.createElement(StructTree, null) : null);
}
function PageSVG() {
  const C = usePageContext();
  invariant(C, "Unable to find Page context.");
  const { _className: s, onRenderSuccess: O, onRenderError: n, page: u, rotate: B, scale: L } = C;
  invariant(u, "Attempted to render page SVG, but no page was specified.");
  const [X, b] = useResolver(), { value: P, error: p } = X;
  function F() {
    u && O && O(makePageCallback(u, L));
  }
  function M() {
    p && (isCancelException(p) || (warning$1(!1, p.toString()), n && n(p)));
  }
  const k = useMemo(() => u.getViewport({ scale: L, rotation: B }), [u, B, L]);
  function w() {
    b({ type: "RESET" });
  }
  useEffect(w, [u, b, k]);
  function _() {
    if (!u)
      return;
    const R = makeCancellablePromise(u.getOperatorList());
    return R.promise.then((A) => {
      new pdfjs.SVGGraphics(u.commonObjs, u.objs).getSVG(A, k).then((f) => {
        if (!(f instanceof SVGElement))
          throw new Error("getSVG returned unexpected result.");
        b({ type: "RESOLVE", value: f });
      }).catch((f) => {
        b({ type: "REJECT", error: f });
      });
    }).catch((A) => {
      b({ type: "REJECT", error: A });
    }), () => cancelRunningTask(R);
  }
  useEffect(_, [u, b, k]), useEffect(
    () => {
      if (P !== void 0) {
        if (P === !1) {
          M();
          return;
        }
        F();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [P]
  );
  function y(R) {
    if (!R || !P)
      return;
    R.firstElementChild || R.appendChild(P);
    const { width: A, height: o } = k;
    P.setAttribute("width", `${A}`), P.setAttribute("height", `${o}`);
  }
  const { width: S, height: D } = k;
  return React__default.createElement("div", {
    className: `${s}__svg`,
    // Note: This cannot be shortened, as we need this function to be called with each render.
    ref: (R) => y(R),
    style: {
      display: "block",
      backgroundColor: "white",
      overflow: "hidden",
      width: S,
      height: D,
      userSelect: "none"
    }
  });
}
function isTextItem(C) {
  return "str" in C;
}
function TextLayer() {
  const C = usePageContext();
  invariant(C, "Unable to find Page context.");
  const { customTextRenderer: s, onGetTextError: O, onGetTextSuccess: n, onRenderTextLayerError: u, onRenderTextLayerSuccess: B, page: L, pageIndex: X, pageNumber: b, rotate: P, scale: p } = C;
  invariant(L, "Attempted to load page text content, but no page was specified.");
  const [F, M] = useResolver(), { value: k, error: w } = F, _ = useRef(null), y = useRef();
  warning$1(parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-text-layer"), 10) === 1, "TextLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-text-layer");
  function S() {
    k && n && n(k);
  }
  function D() {
    w && (warning$1(!1, w.toString()), O && O(w));
  }
  function R() {
    M({ type: "RESET" });
  }
  useEffect(R, [L, M]);
  function A() {
    if (!L)
      return;
    const g = makeCancellablePromise(L.getTextContent()), U = g;
    return g.promise.then((G) => {
      M({ type: "RESOLVE", value: G });
    }).catch((G) => {
      M({ type: "REJECT", error: G });
    }), () => cancelRunningTask(U);
  }
  useEffect(A, [L, M]), useEffect(
    () => {
      if (k !== void 0) {
        if (k === !1) {
          D();
          return;
        }
        S();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [k]
  );
  const o = useCallback(() => {
    B && B();
  }, [B]), f = useCallback((g) => {
    warning$1(!1, g.toString()), u && u(g);
  }, [u]);
  function j() {
    const g = y.current;
    g && g.classList.add("active");
  }
  function v() {
    const g = y.current;
    g && g.classList.remove("active");
  }
  const h = useMemo(() => L.getViewport({ scale: p, rotation: P }), [L, P, p]);
  function I() {
    if (!L || !k)
      return;
    const { current: g } = _;
    if (!g)
      return;
    g.innerHTML = "";
    const U = L.streamTextContent({ includeMarkedContent: !0 }), G = {
      container: g,
      textContentSource: U,
      viewport: h
    }, m = pdfjs.renderTextLayer(G), Y = m;
    return m.promise.then(() => {
      const Q = document.createElement("div");
      Q.className = "endOfContent", g.append(Q), y.current = Q;
      const it = g.querySelectorAll('[role="presentation"]');
      if (s) {
        let z = 0;
        k.items.forEach((lt, K) => {
          if (!isTextItem(lt))
            return;
          const ht = it[z];
          if (!ht)
            return;
          const yt = s(Object.assign({
            pageIndex: X,
            pageNumber: b,
            itemIndex: K
          }, lt));
          ht.innerHTML = yt, z += lt.str && lt.hasEOL ? 2 : 1;
        });
      }
      o();
    }).catch(f), () => cancelRunningTask(Y);
  }
  return useLayoutEffect(I, [
    s,
    f,
    o,
    L,
    X,
    b,
    k,
    h
  ]), // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  React__default.createElement("div", { className: clsx("react-pdf__Page__textContent", "textLayer"), onMouseUp: v, onMouseDown: j, ref: _ });
}
function AnnotationLayer() {
  const C = useDocumentContext(), s = usePageContext();
  invariant(s, "Unable to find Page context.");
  const O = Object.assign(Object.assign({}, C), s), { imageResourcesPath: n, linkService: u, onGetAnnotationsError: B, onGetAnnotationsSuccess: L, onRenderAnnotationLayerError: X, onRenderAnnotationLayerSuccess: b, page: P, pdf: p, renderForms: F, rotate: M, scale: k = 1 } = O;
  invariant(p, "Attempted to load page annotations, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop."), invariant(P, "Attempted to load page annotations, but no page was specified."), invariant(u, "Attempted to load page annotations, but no linkService was specified.");
  const [w, _] = useResolver(), { value: y, error: S } = w, D = useRef(null);
  warning$1(parseInt(window.getComputedStyle(document.body).getPropertyValue("--react-pdf-annotation-layer"), 10) === 1, "AnnotationLayer styles not found. Read more: https://github.com/wojtekmaj/react-pdf#support-for-annotations");
  function R() {
    y && L && L(y);
  }
  function A() {
    S && (warning$1(!1, S.toString()), B && B(S));
  }
  function o() {
    _({ type: "RESET" });
  }
  useEffect(o, [_, P]);
  function f() {
    if (!P)
      return;
    const g = makeCancellablePromise(P.getAnnotations()), U = g;
    return g.promise.then((G) => {
      _({ type: "RESOLVE", value: G });
    }).catch((G) => {
      _({ type: "REJECT", error: G });
    }), () => {
      cancelRunningTask(U);
    };
  }
  useEffect(f, [_, P, F]), useEffect(
    () => {
      if (y !== void 0) {
        if (y === !1) {
          A();
          return;
        }
        R();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [y]
  );
  function j() {
    b && b();
  }
  function v(g) {
    warning$1(!1, `${g}`), X && X(g);
  }
  const h = useMemo(() => P.getViewport({ scale: k, rotation: M }), [P, M, k]);
  function I() {
    if (!p || !P || !u || !y)
      return;
    const { current: g } = D;
    if (!g)
      return;
    const U = h.clone({ dontFlip: !0 }), G = {
      accessibilityManager: null,
      // TODO: Implement this
      annotationCanvasMap: null,
      // TODO: Implement this
      div: g,
      l10n: null,
      // TODO: Implement this
      page: P,
      viewport: U
    }, m = {
      annotations: y,
      annotationStorage: p.annotationStorage,
      div: g,
      // See https://github.com/mozilla/pdf.js/issues/17029
      downloadManager: null,
      imageResourcesPath: n,
      linkService: u,
      page: P,
      renderForms: F,
      viewport: U
    };
    g.innerHTML = "";
    try {
      new pdfjs.AnnotationLayer(G).render(m), j();
    } catch (Y) {
      v(Y);
    }
    return () => {
    };
  }
  return useEffect(
    I,
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [y, n, u, P, F, h]
  ), React__default.createElement("div", { className: clsx("react-pdf__Page__annotations", "annotationLayer"), ref: D });
}
var __rest = function(C, s) {
  var O = {};
  for (var n in C)
    Object.prototype.hasOwnProperty.call(C, n) && s.indexOf(n) < 0 && (O[n] = C[n]);
  if (C != null && typeof Object.getOwnPropertySymbols == "function")
    for (var u = 0, n = Object.getOwnPropertySymbols(C); u < n.length; u++)
      s.indexOf(n[u]) < 0 && Object.prototype.propertyIsEnumerable.call(C, n[u]) && (O[n[u]] = C[n[u]]);
  return O;
};
const defaultScale = 1, Page = function C(s) {
  const O = useDocumentContext(), n = Object.assign(Object.assign({}, O), s), { _className: u = "react-pdf__Page", _enableRegisterUnregisterPage: B = !0, canvasBackground: L, canvasRef: X, children: b, className: P, customRenderer: p, customTextRenderer: F, devicePixelRatio: M, error: k = "Failed to load the page.", height: w, inputRef: _, loading: y = "Loading page…", noData: S = "No page specified.", onGetAnnotationsError: D, onGetAnnotationsSuccess: R, onGetStructTreeError: A, onGetStructTreeSuccess: o, onGetTextError: f, onGetTextSuccess: j, onLoadError: v, onLoadSuccess: h, onRenderAnnotationLayerError: I, onRenderAnnotationLayerSuccess: g, onRenderError: U, onRenderSuccess: G, onRenderTextLayerError: m, onRenderTextLayerSuccess: Y, pageIndex: Q, pageNumber: it, pdf: z, registerPage: lt, renderAnnotationLayer: K = !0, renderForms: ht = !1, renderMode: yt = "canvas", renderTextLayer: E = !0, rotate: e, scale: l = defaultScale, unregisterPage: i, width: c } = n, d = __rest(n, ["_className", "_enableRegisterUnregisterPage", "canvasBackground", "canvasRef", "children", "className", "customRenderer", "customTextRenderer", "devicePixelRatio", "error", "height", "inputRef", "loading", "noData", "onGetAnnotationsError", "onGetAnnotationsSuccess", "onGetStructTreeError", "onGetStructTreeSuccess", "onGetTextError", "onGetTextSuccess", "onLoadError", "onLoadSuccess", "onRenderAnnotationLayerError", "onRenderAnnotationLayerSuccess", "onRenderError", "onRenderSuccess", "onRenderTextLayerError", "onRenderTextLayerSuccess", "pageIndex", "pageNumber", "pdf", "registerPage", "renderAnnotationLayer", "renderForms", "renderMode", "renderTextLayer", "rotate", "scale", "unregisterPage", "width"]), [T, N] = useResolver(), { value: W, error: q } = T, nt = useRef(null);
  invariant(z, "Attempted to load a page, but no document was specified. Wrap <Page /> in a <Document /> or pass explicit `pdf` prop.");
  const ut = isProvided(it) ? it - 1 : Q ?? null, pt = it ?? (isProvided(Q) ? Q + 1 : null), bt = e ?? (W ? W.rotate : null), ft = useMemo(() => {
    if (!W)
      return null;
    let Gt = 1;
    const Ht = l ?? defaultScale;
    if (c || w) {
      const zt = W.getViewport({ scale: 1, rotation: bt });
      c ? Gt = c / zt.width : w && (Gt = w / zt.height);
    }
    return Ht * Gt;
  }, [w, W, bt, l, c]);
  function xt() {
    return () => {
      isProvided(ut) && B && i && i(ut);
    };
  }
  useEffect(xt, [B, z, ut, i]);
  function It() {
    if (h) {
      if (!W || !ft)
        return;
      h(makePageCallback(W, ft));
    }
    if (B && lt) {
      if (!isProvided(ut) || !nt.current)
        return;
      lt(ut, nt.current);
    }
  }
  function Tt() {
    q && (warning$1(!1, q.toString()), v && v(q));
  }
  function Ot() {
    N({ type: "RESET" });
  }
  useEffect(Ot, [N, z, ut]);
  function _t() {
    if (!z || !pt)
      return;
    const Gt = makeCancellablePromise(z.getPage(pt)), Ht = Gt;
    return Gt.promise.then((zt) => {
      N({ type: "RESOLVE", value: zt });
    }).catch((zt) => {
      N({ type: "REJECT", error: zt });
    }), () => cancelRunningTask(Ht);
  }
  useEffect(_t, [N, z, ut, pt, lt]), useEffect(
    () => {
      if (W !== void 0) {
        if (W === !1) {
          Tt();
          return;
        }
        It();
      }
    },
    // Ommitted callbacks so they are not called every time they change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [W, ft]
  );
  const at = useMemo(() => (
    // Technically there cannot be page without pageIndex, pageNumber, rotate and scale, but TypeScript doesn't know that
    W && isProvided(ut) && pt && isProvided(bt) && isProvided(ft) ? {
      _className: u,
      canvasBackground: L,
      customTextRenderer: F,
      devicePixelRatio: M,
      onGetAnnotationsError: D,
      onGetAnnotationsSuccess: R,
      onGetStructTreeError: A,
      onGetStructTreeSuccess: o,
      onGetTextError: f,
      onGetTextSuccess: j,
      onRenderAnnotationLayerError: I,
      onRenderAnnotationLayerSuccess: g,
      onRenderError: U,
      onRenderSuccess: G,
      onRenderTextLayerError: m,
      onRenderTextLayerSuccess: Y,
      page: W,
      pageIndex: ut,
      pageNumber: pt,
      renderForms: ht,
      renderTextLayer: E,
      rotate: bt,
      scale: ft
    } : null
  ), [
    u,
    L,
    F,
    M,
    D,
    R,
    A,
    o,
    f,
    j,
    I,
    g,
    U,
    G,
    m,
    Y,
    W,
    ut,
    pt,
    ht,
    E,
    bt,
    ft
  ]), ot = useMemo(() => makeEventProps(d, () => W && (ft ? makePageCallback(W, ft) : void 0)), [d, W, ft]), mt = `${ut}@${ft}/${bt}`, wt = `${ut}/${bt}`;
  function Ct() {
    switch (yt) {
      case "custom":
        return invariant(p, 'renderMode was set to "custom", but no customRenderer was passed.'), React__default.createElement(p, { key: `${mt}_custom` });
      case "none":
        return null;
      case "svg":
        return React__default.createElement(PageSVG, { key: `${wt}_svg` });
      case "canvas":
      default:
        return React__default.createElement(PageCanvas, { key: `${mt}_canvas`, canvasRef: X });
    }
  }
  function Ut() {
    return E ? React__default.createElement(TextLayer, { key: `${mt}_text` }) : null;
  }
  function Vt() {
    return K ? React__default.createElement(AnnotationLayer, { key: `${mt}_annotations` }) : null;
  }
  function Wt() {
    return React__default.createElement(
      PageContext.Provider,
      { value: at },
      Ct(),
      Ut(),
      Vt(),
      b
    );
  }
  function qt() {
    return pt ? z === null || W === void 0 || W === null ? React__default.createElement(Message, { type: "loading" }, typeof y == "function" ? y() : y) : z === !1 || W === !1 ? React__default.createElement(Message, { type: "error" }, typeof k == "function" ? k() : k) : Wt() : React__default.createElement(Message, { type: "no-data" }, typeof S == "function" ? S() : S);
  }
  return React__default.createElement("div", Object.assign({ className: clsx(u, P), "data-page-number": pt, ref: mergeRefs(_, nt), style: {
    "--scale-factor": `${ft}`,
    backgroundColor: L || "white",
    position: "relative",
    minWidth: "min-content",
    minHeight: "min-content"
  } }, ot), qt());
}, isFunctionOrNode = PropTypes.oneOfType([PropTypes.func, PropTypes.node]);
Page.propTypes = Object.assign(Object.assign({}, eventProps), { canvasBackground: PropTypes.string, canvasRef: isRef, children: PropTypes.node, className: isClassName, customRenderer: PropTypes.func, customTextRenderer: PropTypes.func, devicePixelRatio: PropTypes.number, error: isFunctionOrNode, height: PropTypes.number, imageResourcesPath: PropTypes.string, inputRef: isRef, loading: isFunctionOrNode, noData: isFunctionOrNode, onGetTextError: PropTypes.func, onGetTextSuccess: PropTypes.func, onLoadError: PropTypes.func, onLoadSuccess: PropTypes.func, onRenderError: PropTypes.func, onRenderSuccess: PropTypes.func, onRenderTextLayerError: PropTypes.func, onRenderTextLayerSuccess: PropTypes.func, pageIndex: isPageIndex, pageNumber: isPageNumber, pdf: isPdf, renderAnnotationLayer: PropTypes.bool, renderForms: PropTypes.bool, renderMode: isRenderMode, renderTextLayer: PropTypes.bool, rotate: isRotate, scale: PropTypes.number, width: PropTypes.number });
const Page$1 = Page;
displayWorkerWarning();
pdfjs.GlobalWorkerOptions.workerSrc = "pdf.worker.js";
var visibilitySensor = { exports: {} };
(function(C, s) {
  (function(n, u) {
    C.exports = u(React__default, requireReactDom());
  })(commonjsGlobal, function(O, n) {
    return (
      /******/
      function(u) {
        var B = {};
        function L(X) {
          if (B[X])
            return B[X].exports;
          var b = B[X] = {
            /******/
            i: X,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return u[X].call(b.exports, b, b.exports, L), b.l = !0, b.exports;
        }
        return L.m = u, L.c = B, L.d = function(X, b, P) {
          L.o(X, b) || Object.defineProperty(X, b, { enumerable: !0, get: P });
        }, L.r = function(X) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(X, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(X, "__esModule", { value: !0 });
        }, L.t = function(X, b) {
          if (b & 1 && (X = L(X)), b & 8 || b & 4 && typeof X == "object" && X && X.__esModule)
            return X;
          var P = /* @__PURE__ */ Object.create(null);
          if (L.r(P), Object.defineProperty(P, "default", { enumerable: !0, value: X }), b & 2 && typeof X != "string")
            for (var p in X)
              L.d(P, p, (function(F) {
                return X[F];
              }).bind(null, p));
          return P;
        }, L.n = function(X) {
          var b = X && X.__esModule ? (
            /******/
            function() {
              return X.default;
            }
          ) : (
            /******/
            function() {
              return X;
            }
          );
          return L.d(b, "a", b), b;
        }, L.o = function(X, b) {
          return Object.prototype.hasOwnProperty.call(X, b);
        }, L.p = "", L(L.s = 4);
      }([
        /* 0 */
        /***/
        function(u, B, L) {
          u.exports = L(5)();
        },
        /* 1 */
        /***/
        function(u, B) {
          u.exports = O;
        },
        /* 2 */
        /***/
        function(u, B) {
          u.exports = n;
        },
        /* 3 */
        /***/
        function(u, B) {
          u.exports = function(L, X, b) {
            var P = L.direction, p = L.value;
            switch (P) {
              case "top":
                return b.top + p < X.top && b.bottom > X.bottom && b.left < X.left && b.right > X.right;
              case "left":
                return b.left + p < X.left && b.bottom > X.bottom && b.top < X.top && b.right > X.right;
              case "bottom":
                return b.bottom - p > X.bottom && b.left < X.left && b.right > X.right && b.top < X.top;
              case "right":
                return b.right - p > X.right && b.left < X.left && b.top < X.top && b.bottom > X.bottom;
            }
          };
        },
        /* 4 */
        /***/
        function(u, B, L) {
          L.r(B), L.d(B, "default", function() {
            return I;
          });
          var X = L(1), b = /* @__PURE__ */ L.n(X), P = L(2), p = /* @__PURE__ */ L.n(P), F = L(0), M = /* @__PURE__ */ L.n(F), k = L(3), w = /* @__PURE__ */ L.n(k);
          function _(g) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _ = function(G) {
              return typeof G;
            } : _ = function(G) {
              return G && typeof Symbol == "function" && G.constructor === Symbol && G !== Symbol.prototype ? "symbol" : typeof G;
            }, _(g);
          }
          function y(g, U) {
            if (!(g instanceof U))
              throw new TypeError("Cannot call a class as a function");
          }
          function S(g, U) {
            for (var G = 0; G < U.length; G++) {
              var m = U[G];
              m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(g, m.key, m);
            }
          }
          function D(g, U, G) {
            return U && S(g.prototype, U), G && S(g, G), g;
          }
          function R(g, U) {
            return U && (_(U) === "object" || typeof U == "function") ? U : o(g);
          }
          function A(g) {
            return A = Object.setPrototypeOf ? Object.getPrototypeOf : function(G) {
              return G.__proto__ || Object.getPrototypeOf(G);
            }, A(g);
          }
          function o(g) {
            if (g === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return g;
          }
          function f(g, U) {
            if (typeof U != "function" && U !== null)
              throw new TypeError("Super expression must either be null or a function");
            g.prototype = Object.create(U && U.prototype, { constructor: { value: g, writable: !0, configurable: !0 } }), U && j(g, U);
          }
          function j(g, U) {
            return j = Object.setPrototypeOf || function(m, Y) {
              return m.__proto__ = Y, m;
            }, j(g, U);
          }
          function v(g, U, G) {
            return U in g ? Object.defineProperty(g, U, { value: G, enumerable: !0, configurable: !0, writable: !0 }) : g[U] = G, g;
          }
          function h(g) {
            return g.width === void 0 && (g.width = g.right - g.left), g.height === void 0 && (g.height = g.bottom - g.top), g;
          }
          var I = /* @__PURE__ */ function(g) {
            f(U, g);
            function U(G) {
              var m;
              return y(this, U), m = R(this, A(U).call(this, G)), v(o(m), "getContainer", function() {
                return m.props.containment || window;
              }), v(o(m), "addEventListener", function(Y, Q, it, z) {
                m.debounceCheck || (m.debounceCheck = {});
                var lt, K, ht = function() {
                  lt = null, m.check();
                };
                z > -1 ? K = function() {
                  lt || (lt = setTimeout(ht, z || 0));
                } : K = function() {
                  clearTimeout(lt), lt = setTimeout(ht, it || 0);
                };
                var yt = {
                  target: Y,
                  fn: K,
                  getLastTimeout: function() {
                    return lt;
                  }
                };
                Y.addEventListener(Q, yt.fn), m.debounceCheck[Q] = yt;
              }), v(o(m), "startWatching", function() {
                m.debounceCheck || m.interval || (m.props.intervalCheck && (m.interval = setInterval(m.check, m.props.intervalDelay)), m.props.scrollCheck && m.addEventListener(m.getContainer(), "scroll", m.props.scrollDelay, m.props.scrollThrottle), m.props.resizeCheck && m.addEventListener(window, "resize", m.props.resizeDelay, m.props.resizeThrottle), !m.props.delayedCall && m.check());
              }), v(o(m), "stopWatching", function() {
                if (m.debounceCheck) {
                  for (var Y in m.debounceCheck)
                    if (m.debounceCheck.hasOwnProperty(Y)) {
                      var Q = m.debounceCheck[Y];
                      clearTimeout(Q.getLastTimeout()), Q.target.removeEventListener(Y, Q.fn), m.debounceCheck[Y] = null;
                    }
                }
                m.debounceCheck = null, m.interval && (m.interval = clearInterval(m.interval));
              }), v(o(m), "check", function() {
                var Y = m.node, Q, it;
                if (!Y)
                  return m.state;
                if (Q = h(m.roundRectDown(Y.getBoundingClientRect())), m.props.containment) {
                  var z = m.props.containment.getBoundingClientRect();
                  it = {
                    top: z.top,
                    left: z.left,
                    bottom: z.bottom,
                    right: z.right
                  };
                } else
                  it = {
                    top: 0,
                    left: 0,
                    bottom: window.innerHeight || document.documentElement.clientHeight,
                    right: window.innerWidth || document.documentElement.clientWidth
                  };
                var lt = m.props.offset || {}, K = _(lt) === "object";
                K && (it.top += lt.top || 0, it.left += lt.left || 0, it.bottom -= lt.bottom || 0, it.right -= lt.right || 0);
                var ht = {
                  top: Q.top >= it.top,
                  left: Q.left >= it.left,
                  bottom: Q.bottom <= it.bottom,
                  right: Q.right <= it.right
                }, yt = Q.height > 0 && Q.width > 0, E = yt && ht.top && ht.left && ht.bottom && ht.right;
                if (yt && m.props.partialVisibility) {
                  var e = Q.top <= it.bottom && Q.bottom >= it.top && Q.left <= it.right && Q.right >= it.left;
                  typeof m.props.partialVisibility == "string" && (e = ht[m.props.partialVisibility]), E = m.props.minTopValue ? e && Q.top <= it.bottom - m.props.minTopValue : e;
                }
                typeof lt.direction == "string" && typeof lt.value == "number" && (console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }", lt.direction, lt.value), E = w()(lt, Q, it));
                var l = m.state;
                return m.state.isVisible !== E && (l = {
                  isVisible: E,
                  visibilityRect: ht
                }, m.setState(l), m.props.onChange && m.props.onChange(E)), l;
              }), m.state = {
                isVisible: null,
                visibilityRect: {}
              }, m;
            }
            return D(U, [{
              key: "componentDidMount",
              value: function() {
                this.node = p.a.findDOMNode(this), this.props.active && this.startWatching();
              }
            }, {
              key: "componentWillUnmount",
              value: function() {
                this.stopWatching();
              }
            }, {
              key: "componentDidUpdate",
              value: function(m) {
                this.node = p.a.findDOMNode(this), this.props.active && !m.active ? (this.setState({
                  isVisible: null,
                  visibilityRect: {}
                }), this.startWatching()) : this.props.active || this.stopWatching();
              }
            }, {
              key: "roundRectDown",
              value: function(m) {
                return {
                  top: Math.floor(m.top),
                  left: Math.floor(m.left),
                  bottom: Math.floor(m.bottom),
                  right: Math.floor(m.right)
                };
              }
              /**
               * Check if the element is within the visible viewport
               */
            }, {
              key: "render",
              value: function() {
                return this.props.children instanceof Function ? this.props.children({
                  isVisible: this.state.isVisible,
                  visibilityRect: this.state.visibilityRect
                }) : b.a.Children.only(this.props.children);
              }
            }]), U;
          }(b.a.Component);
          v(I, "defaultProps", {
            active: !0,
            partialVisibility: !1,
            minTopValue: 0,
            scrollCheck: !1,
            scrollDelay: 250,
            scrollThrottle: -1,
            resizeCheck: !1,
            resizeDelay: 250,
            resizeThrottle: -1,
            intervalCheck: !0,
            intervalDelay: 100,
            delayedCall: !1,
            offset: {},
            containment: null,
            children: b.a.createElement("span", null)
          }), v(I, "propTypes", {
            onChange: M.a.func,
            active: M.a.bool,
            partialVisibility: M.a.oneOfType([M.a.bool, M.a.oneOf(["top", "right", "bottom", "left"])]),
            delayedCall: M.a.bool,
            offset: M.a.oneOfType([
              M.a.shape({
                top: M.a.number,
                left: M.a.number,
                bottom: M.a.number,
                right: M.a.number
              }),
              // deprecated offset property
              M.a.shape({
                direction: M.a.oneOf(["top", "right", "bottom", "left"]),
                value: M.a.number
              })
            ]),
            scrollCheck: M.a.bool,
            scrollDelay: M.a.number,
            scrollThrottle: M.a.number,
            resizeCheck: M.a.bool,
            resizeDelay: M.a.number,
            resizeThrottle: M.a.number,
            intervalCheck: M.a.bool,
            intervalDelay: M.a.number,
            containment: typeof window < "u" ? M.a.instanceOf(window.Element) : M.a.any,
            children: M.a.oneOfType([M.a.element, M.a.func]),
            minTopValue: M.a.number
          });
        },
        /* 5 */
        /***/
        function(u, B, L) {
          var X = L(6);
          function b() {
          }
          function P() {
          }
          P.resetWarningCache = b, u.exports = function() {
            function p(k, w, _, y, S, D) {
              if (D !== X) {
                var R = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw R.name = "Invariant Violation", R;
              }
            }
            p.isRequired = p;
            function F() {
              return p;
            }
            var M = {
              array: p,
              bool: p,
              func: p,
              number: p,
              object: p,
              string: p,
              symbol: p,
              any: p,
              arrayOf: F,
              element: p,
              elementType: p,
              instanceOf: F,
              node: p,
              objectOf: F,
              oneOf: F,
              oneOfType: F,
              shape: F,
              exact: F,
              checkPropTypes: P,
              resetWarningCache: b
            };
            return M.PropTypes = M, M;
          };
        },
        /* 6 */
        /***/
        function(u, B, L) {
          var X = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
          u.exports = X;
        }
        /******/
      ])
    );
  });
})(visibilitySensor);
var visibilitySensorExports = visibilitySensor.exports;
const VisibilitySensor = /* @__PURE__ */ getDefaultExportFromCjs(visibilitySensorExports), thumbnailList = "_thumbnailList_18qqz_14", thumbnailContainer = "_thumbnailContainer_18qqz_20", label = "_label_18qqz_25", styles = {
  thumbnailList,
  thumbnailContainer,
  label,
  "current-page": "_current-page_18qqz_30"
}, ThumbnailBar = (C) => {
  const { configOptions: s } = useViewerState(), { pdfPage: O, showPdfThumbnails: n, pdfToggleThumbnails: u } = s;
  let { pdfNumPages: B } = s;
  const L = useViewerDispatch();
  B === void 0 && (B = 1);
  const X = /* @__PURE__ */ jsx(
    "div",
    {
      style: { width: "100%", height: "200px", backgroundColor: "#fff" }
    }
  ), b = [];
  for (let F = 1; F <= B; F++)
    b.push({
      page_num: F,
      doc: /* @__PURE__ */ jsx(Document$1, { file: C.url, loading: X, children: /* @__PURE__ */ jsx(
        Page$1,
        {
          pageNumber: F,
          height: 400,
          width: 120,
          renderTextLayer: !1,
          renderAnnotationLayer: !1
        }
      ) })
    });
  const P = (F) => {
    const M = document.getElementById(`page-${F}`);
    M && M.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    });
  }, p = (F, M) => {
    L({
      type: "updateConfigOptions",
      configOptions: {
        ...s,
        pdfPage: M,
        pdfEnteredPage: M
      }
    }), P(M), F.preventDefault();
  };
  return n && u ? /* @__PURE__ */ jsx(
    "div",
    {
      className: styles.thumbnailList,
      style: { height: C.height, overflow: "scroll" },
      children: b ? b.map((F, M) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: styles.thumbnailContainer,
          id: `thumbnail-${F.page_num}`,
          children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: `${O == F.page_num && styles["current-page"]}`,
                onClick: (k) => p(k, F.page_num),
                style: { cursor: "pointer" },
                children: /* @__PURE__ */ jsx(VisibilitySensor, { children: ({ isVisible: k }) => /* @__PURE__ */ jsx("div", { children: k ? F.doc : X }) })
              }
            ),
            /* @__PURE__ */ jsxs("p", { className: styles.label, children: [
              "Page ",
              F.page_num
            ] })
          ]
        },
        M
      )) : null
    }
  ) : null;
};
export {
  Document$1 as D,
  Page$1 as P,
  ThumbnailBar as T,
  VisibilitySensor as V
};
