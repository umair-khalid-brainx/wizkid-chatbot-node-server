;(function () {
  const t = document.createElement("link").relList
  if (t && t.supports && t.supports("modulepreload")) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
  new MutationObserver((i) => {
    for (const o of i) if (o.type === "childList") for (const a of o.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const o = {}
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials" ? (o.credentials = "include") : i.crossOrigin === "anonymous" ? (o.credentials = "omit") : (o.credentials = "same-origin"),
      o
    )
  }
  function r(i) {
    if (i.ep) return
    i.ep = !0
    const o = n(i)
    fetch(i.href, o)
  }
})()
var i0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
function nc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var tm = { exports: {} },
  oa = {},
  nm = { exports: {} },
  Ae = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eo = Symbol.for("react.element"),
  o0 = Symbol.for("react.portal"),
  s0 = Symbol.for("react.fragment"),
  a0 = Symbol.for("react.strict_mode"),
  l0 = Symbol.for("react.profiler"),
  u0 = Symbol.for("react.provider"),
  c0 = Symbol.for("react.context"),
  f0 = Symbol.for("react.forward_ref"),
  d0 = Symbol.for("react.suspense"),
  p0 = Symbol.for("react.memo"),
  h0 = Symbol.for("react.lazy"),
  Fd = Symbol.iterator
function m0(e) {
  return e === null || typeof e != "object" ? null : ((e = (Fd && e[Fd]) || e["@@iterator"]), typeof e == "function" ? e : null)
}
var rm = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  im = Object.assign,
  om = {}
function Si(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = om), (this.updater = n || rm)
}
Si.prototype.isReactComponent = {}
Si.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.")
  this.updater.enqueueSetState(this, e, t, "setState")
}
Si.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
function sm() {}
sm.prototype = Si.prototype
function rc(e, t, n) {
  ;(this.props = e), (this.context = t), (this.refs = om), (this.updater = n || rm)
}
var ic = (rc.prototype = new sm())
ic.constructor = rc
im(ic, Si.prototype)
ic.isPureReactComponent = !0
var Hd = Array.isArray,
  am = Object.prototype.hasOwnProperty,
  oc = { current: null },
  lm = { key: !0, ref: !0, __self: !0, __source: !0 }
function um(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null
  if (t != null) for (r in (t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (o = "" + t.key), t)) am.call(t, r) && !lm.hasOwnProperty(r) && (i[r] = t[r])
  var u = arguments.length - 2
  if (u === 1) i.children = n
  else if (1 < u) {
    for (var f = Array(u), p = 0; p < u; p++) f[p] = arguments[p + 2]
    i.children = f
  }
  if (e && e.defaultProps) for (r in ((u = e.defaultProps), u)) i[r] === void 0 && (i[r] = u[r])
  return { $$typeof: Eo, type: e, key: o, ref: a, props: i, _owner: oc.current }
}
function g0(e, t) {
  return { $$typeof: Eo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
}
function sc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Eo
}
function v0(e) {
  var t = { "=": "=0", ":": "=2" }
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Ud = /\/+/g
function yl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? v0("" + e.key) : t.toString(36)
}
function hs(e, t, n, r, i) {
  var o = typeof e
  ;(o === "undefined" || o === "boolean") && (e = null)
  var a = !1
  if (e === null) a = !0
  else
    switch (o) {
      case "string":
      case "number":
        a = !0
        break
      case "object":
        switch (e.$$typeof) {
          case Eo:
          case o0:
            a = !0
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === "" ? "." + yl(a, 0) : r),
      Hd(i)
        ? ((n = ""),
          e != null && (n = e.replace(Ud, "$&/") + "/"),
          hs(i, t, n, "", function (p) {
            return p
          }))
        : i != null && (sc(i) && (i = g0(i, n + (!i.key || (a && a.key === i.key) ? "" : ("" + i.key).replace(Ud, "$&/") + "/") + e)), t.push(i)),
      1
    )
  if (((a = 0), (r = r === "" ? "." : r + ":"), Hd(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u]
      var f = r + yl(o, u)
      a += hs(o, t, n, f, i)
    }
  else if (((f = m0(e)), typeof f == "function")) for (e = f.call(e), u = 0; !(o = e.next()).done; ) (o = o.value), (f = r + yl(o, u++)), (a += hs(o, t, n, f, i))
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    )
  return a
}
function Go(e, t, n) {
  if (e == null) return e
  var r = [],
    i = 0
  return (
    hs(e, r, "", "", function (o) {
      return t.call(n, o, i++)
    }),
    r
  )
}
function y0(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n))
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var Pt = { current: null },
  ms = { transition: null },
  w0 = { ReactCurrentDispatcher: Pt, ReactCurrentBatchConfig: ms, ReactCurrentOwner: oc }
Ae.Children = {
  map: Go,
  forEach: function (e, t, n) {
    Go(
      e,
      function () {
        t.apply(this, arguments)
      },
      n
    )
  },
  count: function (e) {
    var t = 0
    return (
      Go(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      Go(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!sc(e)) throw Error("React.Children.only expected to receive a single React element child.")
    return e
  },
}
Ae.Component = Si
Ae.Fragment = s0
Ae.Profiler = l0
Ae.PureComponent = rc
Ae.StrictMode = a0
Ae.Suspense = d0
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w0
Ae.cloneElement = function (e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".")
  var r = im({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner
  if (t != null) {
    if ((t.ref !== void 0 && ((o = t.ref), (a = oc.current)), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)) var u = e.type.defaultProps
    for (f in t) am.call(t, f) && !lm.hasOwnProperty(f) && (r[f] = t[f] === void 0 && u !== void 0 ? u[f] : t[f])
  }
  var f = arguments.length - 2
  if (f === 1) r.children = n
  else if (1 < f) {
    u = Array(f)
    for (var p = 0; p < f; p++) u[p] = arguments[p + 2]
    r.children = u
  }
  return { $$typeof: Eo, type: e.type, key: i, ref: o, props: r, _owner: a }
}
Ae.createContext = function (e) {
  return (
    (e = { $$typeof: c0, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }),
    (e.Provider = { $$typeof: u0, _context: e }),
    (e.Consumer = e)
  )
}
Ae.createElement = um
Ae.createFactory = function (e) {
  var t = um.bind(null, e)
  return (t.type = e), t
}
Ae.createRef = function () {
  return { current: null }
}
Ae.forwardRef = function (e) {
  return { $$typeof: f0, render: e }
}
Ae.isValidElement = sc
Ae.lazy = function (e) {
  return { $$typeof: h0, _payload: { _status: -1, _result: e }, _init: y0 }
}
Ae.memo = function (e, t) {
  return { $$typeof: p0, type: e, compare: t === void 0 ? null : t }
}
Ae.startTransition = function (e) {
  var t = ms.transition
  ms.transition = {}
  try {
    e()
  } finally {
    ms.transition = t
  }
}
Ae.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.")
}
Ae.useCallback = function (e, t) {
  return Pt.current.useCallback(e, t)
}
Ae.useContext = function (e) {
  return Pt.current.useContext(e)
}
Ae.useDebugValue = function () {}
Ae.useDeferredValue = function (e) {
  return Pt.current.useDeferredValue(e)
}
Ae.useEffect = function (e, t) {
  return Pt.current.useEffect(e, t)
}
Ae.useId = function () {
  return Pt.current.useId()
}
Ae.useImperativeHandle = function (e, t, n) {
  return Pt.current.useImperativeHandle(e, t, n)
}
Ae.useInsertionEffect = function (e, t) {
  return Pt.current.useInsertionEffect(e, t)
}
Ae.useLayoutEffect = function (e, t) {
  return Pt.current.useLayoutEffect(e, t)
}
Ae.useMemo = function (e, t) {
  return Pt.current.useMemo(e, t)
}
Ae.useReducer = function (e, t, n) {
  return Pt.current.useReducer(e, t, n)
}
Ae.useRef = function (e) {
  return Pt.current.useRef(e)
}
Ae.useState = function (e) {
  return Pt.current.useState(e)
}
Ae.useSyncExternalStore = function (e, t, n) {
  return Pt.current.useSyncExternalStore(e, t, n)
}
Ae.useTransition = function () {
  return Pt.current.useTransition()
}
Ae.version = "18.2.0"
nm.exports = Ae
var Cn = nm.exports
const at = nc(Cn)
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _0 = Cn,
  A0 = Symbol.for("react.element"),
  S0 = Symbol.for("react.fragment"),
  E0 = Object.prototype.hasOwnProperty,
  k0 = _0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  b0 = { key: !0, ref: !0, __self: !0, __source: !0 }
function cm(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (a = t.ref)
  for (r in t) E0.call(t, r) && !b0.hasOwnProperty(r) && (i[r] = t[r])
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
  return { $$typeof: A0, type: e, key: o, ref: a, props: i, _owner: k0.current }
}
oa.Fragment = S0
oa.jsx = cm
oa.jsxs = cm
tm.exports = oa
var x = tm.exports,
  eu = {},
  fm = { exports: {} },
  $t = {},
  dm = { exports: {} },
  pm = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(W, k) {
    var m = W.length
    W.push(k)
    e: for (; 0 < m; ) {
      var M = (m - 1) >>> 1,
        C = W[M]
      if (0 < i(C, k)) (W[M] = k), (W[m] = C), (m = M)
      else break e
    }
  }
  function n(W) {
    return W.length === 0 ? null : W[0]
  }
  function r(W) {
    if (W.length === 0) return null
    var k = W[0],
      m = W.pop()
    if (m !== k) {
      W[0] = m
      e: for (var M = 0, C = W.length, T = C >>> 1; M < T; ) {
        var z = 2 * (M + 1) - 1,
          $ = W[z],
          E = z + 1,
          ee = W[E]
        if (0 > i($, m)) E < C && 0 > i(ee, $) ? ((W[M] = ee), (W[E] = m), (M = E)) : ((W[M] = $), (W[z] = m), (M = z))
        else if (E < C && 0 > i(ee, m)) (W[M] = ee), (W[E] = m), (M = E)
        else break e
      }
    }
    return k
  }
  function i(W, k) {
    var m = W.sortIndex - k.sortIndex
    return m !== 0 ? m : W.id - k.id
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance
    e.unstable_now = function () {
      return o.now()
    }
  } else {
    var a = Date,
      u = a.now()
    e.unstable_now = function () {
      return a.now() - u
    }
  }
  var f = [],
    p = [],
    v = 1,
    w = null,
    S = 3,
    P = !1,
    b = !1,
    O = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function y(W) {
    for (var k = n(p); k !== null; ) {
      if (k.callback === null) r(p)
      else if (k.startTime <= W) r(p), (k.sortIndex = k.expirationTime), t(f, k)
      else break
      k = n(p)
    }
  }
  function j(W) {
    if (((O = !1), y(W), !b))
      if (n(f) !== null) (b = !0), rt(D)
      else {
        var k = n(p)
        k !== null && Ze(j, k.startTime - W)
      }
  }
  function D(W, k) {
    ;(b = !1), O && ((O = !1), g(V), (V = -1)), (P = !0)
    var m = S
    try {
      for (y(k), w = n(f); w !== null && (!(w.expirationTime > k) || (W && !Ie())); ) {
        var M = w.callback
        if (typeof M == "function") {
          ;(w.callback = null), (S = w.priorityLevel)
          var C = M(w.expirationTime <= k)
          ;(k = e.unstable_now()), typeof C == "function" ? (w.callback = C) : w === n(f) && r(f), y(k)
        } else r(f)
        w = n(f)
      }
      if (w !== null) var T = !0
      else {
        var z = n(p)
        z !== null && Ze(j, z.startTime - k), (T = !1)
      }
      return T
    } finally {
      ;(w = null), (S = m), (P = !1)
    }
  }
  var Y = !1,
    K = null,
    V = -1,
    ve = 5,
    re = -1
  function Ie() {
    return !(e.unstable_now() - re < ve)
  }
  function We() {
    if (K !== null) {
      var W = e.unstable_now()
      re = W
      var k = !0
      try {
        k = K(!0, W)
      } finally {
        k ? Fe() : ((Y = !1), (K = null))
      }
    } else Y = !1
  }
  var Fe
  if (typeof h == "function")
    Fe = function () {
      h(We)
    }
  else if (typeof MessageChannel < "u") {
    var st = new MessageChannel(),
      Xe = st.port2
    ;(st.port1.onmessage = We),
      (Fe = function () {
        Xe.postMessage(null)
      })
  } else
    Fe = function () {
      F(We, 0)
    }
  function rt(W) {
    ;(K = W), Y || ((Y = !0), Fe())
  }
  function Ze(W, k) {
    V = F(function () {
      W(e.unstable_now())
    }, k)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (W) {
      W.callback = null
    }),
    (e.unstable_continueExecution = function () {
      b || P || ((b = !0), rt(D))
    }),
    (e.unstable_forceFrameRate = function (W) {
      0 > W || 125 < W
        ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported")
        : (ve = 0 < W ? Math.floor(1e3 / W) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return S
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(f)
    }),
    (e.unstable_next = function (W) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var k = 3
          break
        default:
          k = S
      }
      var m = S
      S = k
      try {
        return W()
      } finally {
        S = m
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (W, k) {
      switch (W) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          W = 3
      }
      var m = S
      S = W
      try {
        return k()
      } finally {
        S = m
      }
    }),
    (e.unstable_scheduleCallback = function (W, k, m) {
      var M = e.unstable_now()
      switch ((typeof m == "object" && m !== null ? ((m = m.delay), (m = typeof m == "number" && 0 < m ? M + m : M)) : (m = M), W)) {
        case 1:
          var C = -1
          break
        case 2:
          C = 250
          break
        case 5:
          C = 1073741823
          break
        case 4:
          C = 1e4
          break
        default:
          C = 5e3
      }
      return (
        (C = m + C),
        (W = { id: v++, callback: k, priorityLevel: W, startTime: m, expirationTime: C, sortIndex: -1 }),
        m > M
          ? ((W.sortIndex = m), t(p, W), n(f) === null && W === n(p) && (O ? (g(V), (V = -1)) : (O = !0), Ze(j, m - M)))
          : ((W.sortIndex = C), t(f, W), b || P || ((b = !0), rt(D))),
        W
      )
    }),
    (e.unstable_shouldYield = Ie),
    (e.unstable_wrapCallback = function (W) {
      var k = S
      return function () {
        var m = S
        S = k
        try {
          return W.apply(this, arguments)
        } finally {
          S = m
        }
      }
    })
})(pm)
dm.exports = pm
var x0 = dm.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hm = Cn,
  Wt = x0
function B(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n])
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var mm = new Set(),
  ro = {}
function Ir(e, t) {
  di(e, t), di(e + "Capture", t)
}
function di(e, t) {
  for (ro[e] = t, e = 0; e < t.length; e++) mm.add(t[e])
}
var zn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  tu = Object.prototype.hasOwnProperty,
  C0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Wd = {},
  $d = {}
function O0(e) {
  return tu.call($d, e) ? !0 : tu.call(Wd, e) ? !1 : C0.test(e) ? ($d[e] = !0) : ((Wd[e] = !0), !1)
}
function T0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-")
    default:
      return !1
  }
}
function N0(e, t, n, r) {
  if (t === null || typeof t > "u" || T0(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function jt(e, t, n, r, i, o, a) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a)
}
var wt = {}
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
  wt[e] = new jt(e, 0, !1, e, null, !1, !1)
})
;[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0]
  wt[t] = new jt(t, 1, !1, e[1], null, !1, !1)
})
;["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  wt[e] = new jt(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  wt[e] = new jt(e, 2, !1, e, null, !1, !1)
})
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    wt[e] = new jt(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;["checked", "multiple", "muted", "selected"].forEach(function (e) {
  wt[e] = new jt(e, 3, !0, e, null, !1, !1)
})
;["capture", "download"].forEach(function (e) {
  wt[e] = new jt(e, 4, !1, e, null, !1, !1)
})
;["cols", "rows", "size", "span"].forEach(function (e) {
  wt[e] = new jt(e, 6, !1, e, null, !1, !1)
})
;["rowSpan", "start"].forEach(function (e) {
  wt[e] = new jt(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var ac = /[\-:]([a-z])/g
function lc(e) {
  return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ac, lc)
    wt[t] = new jt(t, 1, !1, e, null, !1, !1)
  })
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(ac, lc)
  wt[t] = new jt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
})
;["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ac, lc)
  wt[t] = new jt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
})
;["tabIndex", "crossOrigin"].forEach(function (e) {
  wt[e] = new jt(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
wt.xlinkHref = new jt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)
;["src", "href", "action", "formAction"].forEach(function (e) {
  wt[e] = new jt(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function uc(e, t, n, r) {
  var i = wt.hasOwnProperty(t) ? wt[t] : null
  ;(i !== null ? i.type !== 0 : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (N0(t, n, i, r) && (n = null),
    r || i === null
      ? O0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null ? e.removeAttribute(t) : ((i = i.type), (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Un = hm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  qo = Symbol.for("react.element"),
  Qr = Symbol.for("react.portal"),
  Yr = Symbol.for("react.fragment"),
  cc = Symbol.for("react.strict_mode"),
  nu = Symbol.for("react.profiler"),
  gm = Symbol.for("react.provider"),
  vm = Symbol.for("react.context"),
  fc = Symbol.for("react.forward_ref"),
  ru = Symbol.for("react.suspense"),
  iu = Symbol.for("react.suspense_list"),
  dc = Symbol.for("react.memo"),
  Gn = Symbol.for("react.lazy"),
  ym = Symbol.for("react.offscreen"),
  Vd = Symbol.iterator
function Ri(e) {
  return e === null || typeof e != "object" ? null : ((e = (Vd && e[Vd]) || e["@@iterator"]), typeof e == "function" ? e : null)
}
var Je = Object.assign,
  wl
function Ui(e) {
  if (wl === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      wl = (t && t[1]) || ""
    }
  return (
    `
` +
    wl +
    e
  )
}
var _l = !1
function Al(e, t) {
  if (!e || _l) return ""
  _l = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (p) {
          var r = p
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (p) {
          r = p
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (p) {
        r = p
      }
      e()
    }
  } catch (p) {
    if (p && r && typeof p.stack == "string") {
      for (
        var i = p.stack.split(`
`),
          o = r.stack.split(`
`),
          a = i.length - 1,
          u = o.length - 1;
        1 <= a && 0 <= u && i[a] !== o[u];

      )
        u--
      for (; 1 <= a && 0 <= u; a--, u--)
        if (i[a] !== o[u]) {
          if (a !== 1 || u !== 1)
            do
              if ((a--, u--, 0 > u || i[a] !== o[u])) {
                var f =
                  `
` + i[a].replace(" at new ", " at ")
                return e.displayName && f.includes("<anonymous>") && (f = f.replace("<anonymous>", e.displayName)), f
              }
            while (1 <= a && 0 <= u)
          break
        }
    }
  } finally {
    ;(_l = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : "") ? Ui(e) : ""
}
function P0(e) {
  switch (e.tag) {
    case 5:
      return Ui(e.type)
    case 16:
      return Ui("Lazy")
    case 13:
      return Ui("Suspense")
    case 19:
      return Ui("SuspenseList")
    case 0:
    case 2:
    case 15:
      return (e = Al(e.type, !1)), e
    case 11:
      return (e = Al(e.type.render, !1)), e
    case 1:
      return (e = Al(e.type, !0)), e
    default:
      return ""
  }
}
function ou(e) {
  if (e == null) return null
  if (typeof e == "function") return e.displayName || e.name || null
  if (typeof e == "string") return e
  switch (e) {
    case Yr:
      return "Fragment"
    case Qr:
      return "Portal"
    case nu:
      return "Profiler"
    case cc:
      return "StrictMode"
    case ru:
      return "Suspense"
    case iu:
      return "SuspenseList"
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case vm:
        return (e.displayName || "Context") + ".Consumer"
      case gm:
        return (e._context.displayName || "Context") + ".Provider"
      case fc:
        var t = e.render
        return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e
      case dc:
        return (t = e.displayName || null), t !== null ? t : ou(e.type) || "Memo"
      case Gn:
        ;(t = e._payload), (e = e._init)
        try {
          return ou(e(t))
        } catch {}
    }
  return null
}
function j0(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return "Cache"
    case 9:
      return (t.displayName || "Context") + ".Consumer"
    case 10:
      return (t._context.displayName || "Context") + ".Provider"
    case 18:
      return "DehydratedFragment"
    case 11:
      return (e = t.render), (e = e.displayName || e.name || ""), t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
    case 7:
      return "Fragment"
    case 5:
      return t
    case 4:
      return "Portal"
    case 3:
      return "Root"
    case 6:
      return "Text"
    case 16:
      return ou(t)
    case 8:
      return t === cc ? "StrictMode" : "Mode"
    case 22:
      return "Offscreen"
    case 12:
      return "Profiler"
    case 21:
      return "Scope"
    case 13:
      return "Suspense"
    case 19:
      return "SuspenseList"
    case 25:
      return "TracingMarker"
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null
      if (typeof t == "string") return t
  }
  return null
}
function cr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e
    case "object":
      return e
    default:
      return ""
  }
}
function wm(e) {
  var t = e.type
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function R0(e) {
  var t = wm(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t]
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get,
      o = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this)
        },
        set: function (a) {
          ;(r = "" + a), o.call(this, a)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (a) {
          r = "" + a
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function Jo(e) {
  e._valueTracker || (e._valueTracker = R0(e))
}
function _m(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ""
  return e && (r = wm(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1
}
function js(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function su(e, t) {
  var n = t.checked
  return Je({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked })
}
function Qd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = cr(t.value != null ? t.value : n)),
    (e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null })
}
function Am(e, t) {
  ;(t = t.checked), t != null && uc(e, "checked", t, !1)
}
function au(e, t) {
  Am(e, t)
  var n = cr(t.value),
    r = t.type
  if (n != null) r === "number" ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n)
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value")
    return
  }
  t.hasOwnProperty("value") ? lu(e, t.type, n) : t.hasOwnProperty("defaultValue") && lu(e, t.type, cr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Yd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return
    ;(t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t)
  }
  ;(n = e.name), n !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== "" && (e.name = n)
}
function lu(e, t, n) {
  ;(t !== "number" || js(e.ownerDocument) !== e) &&
    (n == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Wi = Array.isArray
function si(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0
    for (n = 0; n < e.length; n++) (i = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
  } else {
    for (n = "" + cr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
        return
      }
      t !== null || e[i].disabled || (t = e[i])
    }
    t !== null && (t.selected = !0)
  }
}
function uu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(B(91))
  return Je({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue })
}
function Kd(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(B(92))
      if (Wi(n)) {
        if (1 < n.length) throw Error(B(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ""), (n = t)
  }
  e._wrapperState = { initialValue: cr(n) }
}
function Sm(e, t) {
  var n = cr(t.value),
    r = cr(t.defaultValue)
  n != null && ((n = "" + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Gd(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Em(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg"
    case "math":
      return "http://www.w3.org/1998/Math/MathML"
    default:
      return "http://www.w3.org/1999/xhtml"
  }
}
function cu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Em(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Xo,
  km = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t
    else {
      for (Xo = Xo || document.createElement("div"), Xo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Xo.firstChild; e.firstChild; )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function io(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Qi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  L0 = ["Webkit", "ms", "Moz", "O"]
Object.keys(Qi).forEach(function (e) {
  L0.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Qi[t] = Qi[e])
  })
})
function bm(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || (Qi.hasOwnProperty(e) && Qi[e]) ? ("" + t).trim() : t + "px"
}
function xm(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = bm(n, t[n], r)
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i)
    }
}
var I0 = Je(
  { menuitem: !0 },
  { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }
)
function fu(e, t) {
  if (t) {
    if (I0[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(B(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(B(60))
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(B(61))
    }
    if (t.style != null && typeof t.style != "object") throw Error(B(62))
  }
}
function du(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string"
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1
    default:
      return !0
  }
}
var pu = null
function pc(e) {
  return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var hu = null,
  ai = null,
  li = null
function qd(e) {
  if ((e = xo(e))) {
    if (typeof hu != "function") throw Error(B(280))
    var t = e.stateNode
    t && ((t = ca(t)), hu(e.stateNode, e.type, t))
  }
}
function Cm(e) {
  ai ? (li ? li.push(e) : (li = [e])) : (ai = e)
}
function Om() {
  if (ai) {
    var e = ai,
      t = li
    if (((li = ai = null), qd(e), t)) for (e = 0; e < t.length; e++) qd(t[e])
  }
}
function Tm(e, t) {
  return e(t)
}
function Nm() {}
var Sl = !1
function Pm(e, t, n) {
  if (Sl) return e(t, n)
  Sl = !0
  try {
    return Tm(e, t, n)
  } finally {
    ;(Sl = !1), (ai !== null || li !== null) && (Nm(), Om())
  }
}
function oo(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = ca(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ;(r = !r.disabled) || ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != "function") throw Error(B(231, t, typeof n))
  return n
}
var mu = !1
if (zn)
  try {
    var Li = {}
    Object.defineProperty(Li, "passive", {
      get: function () {
        mu = !0
      },
    }),
      window.addEventListener("test", Li, Li),
      window.removeEventListener("test", Li, Li)
  } catch {
    mu = !1
  }
function M0(e, t, n, r, i, o, a, u, f) {
  var p = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, p)
  } catch (v) {
    this.onError(v)
  }
}
var Yi = !1,
  Rs = null,
  Ls = !1,
  gu = null,
  D0 = {
    onError: function (e) {
      ;(Yi = !0), (Rs = e)
    },
  }
function z0(e, t, n, r, i, o, a, u, f) {
  ;(Yi = !1), (Rs = null), M0.apply(D0, arguments)
}
function B0(e, t, n, r, i, o, a, u, f) {
  if ((z0.apply(this, arguments), Yi)) {
    if (Yi) {
      var p = Rs
      ;(Yi = !1), (Rs = null)
    } else throw Error(B(198))
    Ls || ((Ls = !0), (gu = p))
  }
}
function Mr(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function jm(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated
  }
  return null
}
function Jd(e) {
  if (Mr(e) !== e) throw Error(B(188))
}
function F0(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Mr(e)), t === null)) throw Error(B(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var i = n.return
    if (i === null) break
    var o = i.alternate
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Jd(i), e
        if (o === r) return Jd(i), t
        o = o.sibling
      }
      throw Error(B(188))
    }
    if (n.return !== r.return) (n = i), (r = o)
    else {
      for (var a = !1, u = i.child; u; ) {
        if (u === n) {
          ;(a = !0), (n = i), (r = o)
          break
        }
        if (u === r) {
          ;(a = !0), (r = i), (n = o)
          break
        }
        u = u.sibling
      }
      if (!a) {
        for (u = o.child; u; ) {
          if (u === n) {
            ;(a = !0), (n = o), (r = i)
            break
          }
          if (u === r) {
            ;(a = !0), (r = o), (n = i)
            break
          }
          u = u.sibling
        }
        if (!a) throw Error(B(189))
      }
    }
    if (n.alternate !== r) throw Error(B(190))
  }
  if (n.tag !== 3) throw Error(B(188))
  return n.stateNode.current === n ? e : t
}
function Rm(e) {
  return (e = F0(e)), e !== null ? Lm(e) : null
}
function Lm(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Lm(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var Im = Wt.unstable_scheduleCallback,
  Xd = Wt.unstable_cancelCallback,
  H0 = Wt.unstable_shouldYield,
  U0 = Wt.unstable_requestPaint,
  nt = Wt.unstable_now,
  W0 = Wt.unstable_getCurrentPriorityLevel,
  hc = Wt.unstable_ImmediatePriority,
  Mm = Wt.unstable_UserBlockingPriority,
  Is = Wt.unstable_NormalPriority,
  $0 = Wt.unstable_LowPriority,
  Dm = Wt.unstable_IdlePriority,
  sa = null,
  bn = null
function V0(e) {
  if (bn && typeof bn.onCommitFiberRoot == "function")
    try {
      bn.onCommitFiberRoot(sa, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var pn = Math.clz32 ? Math.clz32 : K0,
  Q0 = Math.log,
  Y0 = Math.LN2
function K0(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Q0(e) / Y0) | 0)) | 0
}
var Zo = 64,
  es = 4194304
function $i(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Ms(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = n & 268435455
  if (a !== 0) {
    var u = a & ~i
    u !== 0 ? (r = $i(u)) : ((o &= a), o !== 0 && (r = $i(o)))
  } else (a = n & ~i), a !== 0 ? (r = $i(a)) : o !== 0 && (r = $i(o))
  if (r === 0) return 0
  if (t !== 0 && t !== r && !(t & i) && ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))) return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0)) for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - pn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
  return r
}
function G0(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function q0(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var a = 31 - pn(o),
      u = 1 << a,
      f = i[a]
    f === -1 ? (!(u & n) || u & r) && (i[a] = G0(u, t)) : f <= t && (e.expiredLanes |= u), (o &= ~u)
  }
}
function vu(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function zm() {
  var e = Zo
  return (Zo <<= 1), !(Zo & 4194240) && (Zo = 64), e
}
function El(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function ko(e, t, n) {
  ;(e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - pn(t)), (e[t] = n)
}
function J0(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - pn(n),
      o = 1 << i
    ;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o)
  }
}
function mc(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - pn(n),
      i = 1 << r
    ;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
  }
}
var je = 0
function Bm(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var Fm,
  gc,
  Hm,
  Um,
  Wm,
  yu = !1,
  ts = [],
  tr = null,
  nr = null,
  rr = null,
  so = new Map(),
  ao = new Map(),
  Jn = [],
  X0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    )
function Zd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      tr = null
      break
    case "dragenter":
    case "dragleave":
      nr = null
      break
    case "mouseover":
    case "mouseout":
      rr = null
      break
    case "pointerover":
    case "pointerout":
      so.delete(t.pointerId)
      break
    case "gotpointercapture":
    case "lostpointercapture":
      ao.delete(t.pointerId)
  }
}
function Ii(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [i] }), t !== null && ((t = xo(t)), t !== null && gc(t)), e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e)
}
function Z0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (tr = Ii(tr, e, t, n, r, i)), !0
    case "dragenter":
      return (nr = Ii(nr, e, t, n, r, i)), !0
    case "mouseover":
      return (rr = Ii(rr, e, t, n, r, i)), !0
    case "pointerover":
      var o = i.pointerId
      return so.set(o, Ii(so.get(o) || null, e, t, n, r, i)), !0
    case "gotpointercapture":
      return (o = i.pointerId), ao.set(o, Ii(ao.get(o) || null, e, t, n, r, i)), !0
  }
  return !1
}
function $m(e) {
  var t = br(e.target)
  if (t !== null) {
    var n = Mr(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = jm(n)), t !== null)) {
          ;(e.blockedOn = t),
            Wm(e.priority, function () {
              Hm(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function gs(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = wu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(pu = r), n.target.dispatchEvent(r), (pu = null)
    } else return (t = xo(n)), t !== null && gc(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function ep(e, t, n) {
  gs(e) && n.delete(t)
}
function e1() {
  ;(yu = !1), tr !== null && gs(tr) && (tr = null), nr !== null && gs(nr) && (nr = null), rr !== null && gs(rr) && (rr = null), so.forEach(ep), ao.forEach(ep)
}
function Mi(e, t) {
  e.blockedOn === t && ((e.blockedOn = null), yu || ((yu = !0), Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority, e1)))
}
function lo(e) {
  function t(i) {
    return Mi(i, e)
  }
  if (0 < ts.length) {
    Mi(ts[0], e)
    for (var n = 1; n < ts.length; n++) {
      var r = ts[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (tr !== null && Mi(tr, e), nr !== null && Mi(nr, e), rr !== null && Mi(rr, e), so.forEach(t), ao.forEach(t), n = 0; n < Jn.length; n++)
    (r = Jn[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < Jn.length && ((n = Jn[0]), n.blockedOn === null); ) $m(n), n.blockedOn === null && Jn.shift()
}
var ui = Un.ReactCurrentBatchConfig,
  Ds = !0
function t1(e, t, n, r) {
  var i = je,
    o = ui.transition
  ui.transition = null
  try {
    ;(je = 1), vc(e, t, n, r)
  } finally {
    ;(je = i), (ui.transition = o)
  }
}
function n1(e, t, n, r) {
  var i = je,
    o = ui.transition
  ui.transition = null
  try {
    ;(je = 4), vc(e, t, n, r)
  } finally {
    ;(je = i), (ui.transition = o)
  }
}
function vc(e, t, n, r) {
  if (Ds) {
    var i = wu(e, t, n, r)
    if (i === null) Rl(e, t, r, zs, n), Zd(e, r)
    else if (Z0(i, e, t, n, r)) r.stopPropagation()
    else if ((Zd(e, r), t & 4 && -1 < X0.indexOf(e))) {
      for (; i !== null; ) {
        var o = xo(i)
        if ((o !== null && Fm(o), (o = wu(e, t, n, r)), o === null && Rl(e, t, r, zs, n), o === i)) break
        i = o
      }
      i !== null && r.stopPropagation()
    } else Rl(e, t, r, null, n)
  }
}
var zs = null
function wu(e, t, n, r) {
  if (((zs = null), (e = pc(r)), (e = br(e)), e !== null))
    if (((t = Mr(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = jm(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (zs = e), null
}
function Vm(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4
    case "message":
      switch (W0()) {
        case hc:
          return 1
        case Mm:
          return 4
        case Is:
        case $0:
          return 16
        case Dm:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Zn = null,
  yc = null,
  vs = null
function Qm() {
  if (vs) return vs
  var e,
    t = yc,
    n = t.length,
    r,
    i = "value" in Zn ? Zn.value : Zn.textContent,
    o = i.length
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
  return (vs = i.slice(e, 1 < r ? 1 - r : void 0))
}
function ys(e) {
  var t = e.keyCode
  return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}
function ns() {
  return !0
}
function tp() {
  return !1
}
function Vt(e) {
  function t(n, r, i, o, a) {
    ;(this._reactName = n), (this._targetInst = i), (this.type = r), (this.nativeEvent = o), (this.target = a), (this.currentTarget = null)
    for (var u in e) e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]))
    return (this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ns : tp), (this.isPropagationStopped = tp), this
  }
  return (
    Je(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), (this.isDefaultPrevented = ns))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), (this.isPropagationStopped = ns))
      },
      persist: function () {},
      isPersistent: ns,
    }),
    t
  )
}
var Ei = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  wc = Vt(Ei),
  bo = Je({}, Ei, { view: 0, detail: 0 }),
  r1 = Vt(bo),
  kl,
  bl,
  Di,
  aa = Je({}, bo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: _c,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Di && (Di && e.type === "mousemove" ? ((kl = e.screenX - Di.screenX), (bl = e.screenY - Di.screenY)) : (bl = kl = 0), (Di = e)), kl)
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : bl
    },
  }),
  np = Vt(aa),
  i1 = Je({}, aa, { dataTransfer: 0 }),
  o1 = Vt(i1),
  s1 = Je({}, bo, { relatedTarget: 0 }),
  xl = Vt(s1),
  a1 = Je({}, Ei, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  l1 = Vt(a1),
  u1 = Je({}, Ei, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData
    },
  }),
  c1 = Vt(u1),
  f1 = Je({}, Ei, { data: 0 }),
  rp = Vt(f1),
  d1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  p1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  h1 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }
function m1(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = h1[e]) ? !!t[e] : !1
}
function _c() {
  return m1
}
var g1 = Je({}, bo, {
    key: function (e) {
      if (e.key) {
        var t = d1[e.key] || e.key
        if (t !== "Unidentified") return t
      }
      return e.type === "keypress"
        ? ((e = ys(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? p1[e.keyCode] || "Unidentified"
        : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _c,
    charCode: function (e) {
      return e.type === "keypress" ? ys(e) : 0
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === "keypress" ? ys(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
  }),
  v1 = Vt(g1),
  y1 = Je({}, aa, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
  ip = Vt(y1),
  w1 = Je({}, bo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: _c }),
  _1 = Vt(w1),
  A1 = Je({}, Ei, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  S1 = Vt(A1),
  E1 = Je({}, aa, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  k1 = Vt(E1),
  b1 = [9, 13, 27, 32],
  Ac = zn && "CompositionEvent" in window,
  Ki = null
zn && "documentMode" in document && (Ki = document.documentMode)
var x1 = zn && "TextEvent" in window && !Ki,
  Ym = zn && (!Ac || (Ki && 8 < Ki && 11 >= Ki)),
  op = String.fromCharCode(32),
  sp = !1
function Km(e, t) {
  switch (e) {
    case "keyup":
      return b1.indexOf(t.keyCode) !== -1
    case "keydown":
      return t.keyCode !== 229
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0
    default:
      return !1
  }
}
function Gm(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null
}
var Kr = !1
function C1(e, t) {
  switch (e) {
    case "compositionend":
      return Gm(t)
    case "keypress":
      return t.which !== 32 ? null : ((sp = !0), op)
    case "textInput":
      return (e = t.data), e === op && sp ? null : e
    default:
      return null
  }
}
function O1(e, t) {
  if (Kr) return e === "compositionend" || (!Ac && Km(e, t)) ? ((e = Qm()), (vs = yc = Zn = null), (Kr = !1), e) : null
  switch (e) {
    case "paste":
      return null
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case "compositionend":
      return Ym && t.locale !== "ko" ? null : t.data
    default:
      return null
  }
}
var T1 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function ap(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === "input" ? !!T1[e.type] : t === "textarea"
}
function qm(e, t, n, r) {
  Cm(r), (t = Bs(t, "onChange")), 0 < t.length && ((n = new wc("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }))
}
var Gi = null,
  uo = null
function N1(e) {
  ag(e, 0)
}
function la(e) {
  var t = Jr(e)
  if (_m(t)) return e
}
function P1(e, t) {
  if (e === "change") return t
}
var Jm = !1
if (zn) {
  var Cl
  if (zn) {
    var Ol = "oninput" in document
    if (!Ol) {
      var lp = document.createElement("div")
      lp.setAttribute("oninput", "return;"), (Ol = typeof lp.oninput == "function")
    }
    Cl = Ol
  } else Cl = !1
  Jm = Cl && (!document.documentMode || 9 < document.documentMode)
}
function up() {
  Gi && (Gi.detachEvent("onpropertychange", Xm), (uo = Gi = null))
}
function Xm(e) {
  if (e.propertyName === "value" && la(uo)) {
    var t = []
    qm(t, uo, e, pc(e)), Pm(N1, t)
  }
}
function j1(e, t, n) {
  e === "focusin" ? (up(), (Gi = t), (uo = n), Gi.attachEvent("onpropertychange", Xm)) : e === "focusout" && up()
}
function R1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return la(uo)
}
function L1(e, t) {
  if (e === "click") return la(t)
}
function I1(e, t) {
  if (e === "input" || e === "change") return la(t)
}
function M1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var mn = typeof Object.is == "function" ? Object.is : M1
function co(e, t) {
  if (mn(e, t)) return !0
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!tu.call(t, i) || !mn(e[i], t[i])) return !1
  }
  return !0
}
function cp(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function fp(e, t) {
  var n = cp(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = cp(n)
  }
}
function Zm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Zm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1
}
function eg() {
  for (var e = window, t = js(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string"
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = js(e.document)
  }
  return t
}
function Sc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  )
}
function D1(e) {
  var t = eg(),
    n = e.focusedElem,
    r = e.selectionRange
  if (t !== n && n && n.ownerDocument && Zm(n.ownerDocument.documentElement, n)) {
    if (r !== null && Sc(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n)) (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection()
        var i = n.textContent.length,
          o = Math.min(r.start, i)
        ;(r = r.end === void 0 ? o : Math.min(r.end, i)), !e.extend && o > r && ((i = r), (r = o), (o = i)), (i = fp(n, o))
        var a = fp(n, r)
        i &&
          a &&
          (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var z1 = zn && "documentMode" in document && 11 >= document.documentMode,
  Gr = null,
  _u = null,
  qi = null,
  Au = !1
function dp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  Au ||
    Gr == null ||
    Gr !== js(r) ||
    ((r = Gr),
    "selectionStart" in r && Sc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
    (qi && co(qi, r)) ||
      ((qi = r), (r = Bs(_u, "onSelect")), 0 < r.length && ((t = new wc("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = Gr))))
}
function rs(e, t) {
  var n = {}
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n
}
var qr = {
    animationend: rs("Animation", "AnimationEnd"),
    animationiteration: rs("Animation", "AnimationIteration"),
    animationstart: rs("Animation", "AnimationStart"),
    transitionend: rs("Transition", "TransitionEnd"),
  },
  Tl = {},
  tg = {}
zn &&
  ((tg = document.createElement("div").style),
  "AnimationEvent" in window || (delete qr.animationend.animation, delete qr.animationiteration.animation, delete qr.animationstart.animation),
  "TransitionEvent" in window || delete qr.transitionend.transition)
function ua(e) {
  if (Tl[e]) return Tl[e]
  if (!qr[e]) return e
  var t = qr[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in tg) return (Tl[e] = t[n])
  return e
}
var ng = ua("animationend"),
  rg = ua("animationiteration"),
  ig = ua("animationstart"),
  og = ua("transitionend"),
  sg = new Map(),
  pp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    )
function dr(e, t) {
  sg.set(e, t), Ir(t, [e])
}
for (var Nl = 0; Nl < pp.length; Nl++) {
  var Pl = pp[Nl],
    B1 = Pl.toLowerCase(),
    F1 = Pl[0].toUpperCase() + Pl.slice(1)
  dr(B1, "on" + F1)
}
dr(ng, "onAnimationEnd")
dr(rg, "onAnimationIteration")
dr(ig, "onAnimationStart")
dr("dblclick", "onDoubleClick")
dr("focusin", "onFocus")
dr("focusout", "onBlur")
dr(og, "onTransitionEnd")
di("onMouseEnter", ["mouseout", "mouseover"])
di("onMouseLeave", ["mouseout", "mouseover"])
di("onPointerEnter", ["pointerout", "pointerover"])
di("onPointerLeave", ["pointerout", "pointerover"])
Ir("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "))
Ir("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "))
Ir("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"])
Ir("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "))
Ir("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "))
Ir("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "))
var Vi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  H1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vi))
function hp(e, t, n) {
  var r = e.type || "unknown-event"
  ;(e.currentTarget = n), B0(r, t, void 0, e), (e.currentTarget = null)
}
function ag(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event
    r = r.listeners
    e: {
      var o = void 0
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var u = r[a],
            f = u.instance,
            p = u.currentTarget
          if (((u = u.listener), f !== o && i.isPropagationStopped())) break e
          hp(i, u, p), (o = f)
        }
      else
        for (a = 0; a < r.length; a++) {
          if (((u = r[a]), (f = u.instance), (p = u.currentTarget), (u = u.listener), f !== o && i.isPropagationStopped())) break e
          hp(i, u, p), (o = f)
        }
    }
  }
  if (Ls) throw ((e = gu), (Ls = !1), (gu = null), e)
}
function Qe(e, t) {
  var n = t[xu]
  n === void 0 && (n = t[xu] = new Set())
  var r = e + "__bubble"
  n.has(r) || (lg(t, e, 2, !1), n.add(r))
}
function jl(e, t, n) {
  var r = 0
  t && (r |= 4), lg(n, e, r, t)
}
var is = "_reactListening" + Math.random().toString(36).slice(2)
function fo(e) {
  if (!e[is]) {
    ;(e[is] = !0),
      mm.forEach(function (n) {
        n !== "selectionchange" && (H1.has(n) || jl(n, !1, e), jl(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[is] || ((t[is] = !0), jl("selectionchange", !1, t))
  }
}
function lg(e, t, n, r) {
  switch (Vm(t)) {
    case 1:
      var i = t1
      break
    case 4:
      i = n1
      break
    default:
      i = vc
  }
  ;(n = i.bind(null, t, n, e)),
    (i = void 0),
    !mu || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1)
}
function Rl(e, t, n, r, i) {
  var o = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var a = r.tag
      if (a === 3 || a === 4) {
        var u = r.stateNode.containerInfo
        if (u === i || (u.nodeType === 8 && u.parentNode === i)) break
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var f = a.tag
            if ((f === 3 || f === 4) && ((f = a.stateNode.containerInfo), f === i || (f.nodeType === 8 && f.parentNode === i))) return
            a = a.return
          }
        for (; u !== null; ) {
          if (((a = br(u)), a === null)) return
          if (((f = a.tag), f === 5 || f === 6)) {
            r = o = a
            continue e
          }
          u = u.parentNode
        }
      }
      r = r.return
    }
  Pm(function () {
    var p = o,
      v = pc(n),
      w = []
    e: {
      var S = sg.get(e)
      if (S !== void 0) {
        var P = wc,
          b = e
        switch (e) {
          case "keypress":
            if (ys(n) === 0) break e
          case "keydown":
          case "keyup":
            P = v1
            break
          case "focusin":
            ;(b = "focus"), (P = xl)
            break
          case "focusout":
            ;(b = "blur"), (P = xl)
            break
          case "beforeblur":
          case "afterblur":
            P = xl
            break
          case "click":
            if (n.button === 2) break e
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            P = np
            break
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            P = o1
            break
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            P = _1
            break
          case ng:
          case rg:
          case ig:
            P = l1
            break
          case og:
            P = S1
            break
          case "scroll":
            P = r1
            break
          case "wheel":
            P = k1
            break
          case "copy":
          case "cut":
          case "paste":
            P = c1
            break
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            P = ip
        }
        var O = (t & 4) !== 0,
          F = !O && e === "scroll",
          g = O ? (S !== null ? S + "Capture" : null) : S
        O = []
        for (var h = p, y; h !== null; ) {
          y = h
          var j = y.stateNode
          if ((y.tag === 5 && j !== null && ((y = j), g !== null && ((j = oo(h, g)), j != null && O.push(po(h, j, y)))), F)) break
          h = h.return
        }
        0 < O.length && ((S = new P(S, b, null, n, v)), w.push({ event: S, listeners: O }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((S = e === "mouseover" || e === "pointerover"),
          (P = e === "mouseout" || e === "pointerout"),
          S && n !== pu && (b = n.relatedTarget || n.fromElement) && (br(b) || b[Bn]))
        )
          break e
        if (
          (P || S) &&
          ((S = v.window === v ? v : (S = v.ownerDocument) ? S.defaultView || S.parentWindow : window),
          P
            ? ((b = n.relatedTarget || n.toElement), (P = p), (b = b ? br(b) : null), b !== null && ((F = Mr(b)), b !== F || (b.tag !== 5 && b.tag !== 6)) && (b = null))
            : ((P = null), (b = p)),
          P !== b)
        ) {
          if (
            ((O = np),
            (j = "onMouseLeave"),
            (g = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") && ((O = ip), (j = "onPointerLeave"), (g = "onPointerEnter"), (h = "pointer")),
            (F = P == null ? S : Jr(P)),
            (y = b == null ? S : Jr(b)),
            (S = new O(j, h + "leave", P, n, v)),
            (S.target = F),
            (S.relatedTarget = y),
            (j = null),
            br(v) === p && ((O = new O(g, h + "enter", b, n, v)), (O.target = y), (O.relatedTarget = F), (j = O)),
            (F = j),
            P && b)
          )
            t: {
              for (O = P, g = b, h = 0, y = O; y; y = Vr(y)) h++
              for (y = 0, j = g; j; j = Vr(j)) y++
              for (; 0 < h - y; ) (O = Vr(O)), h--
              for (; 0 < y - h; ) (g = Vr(g)), y--
              for (; h--; ) {
                if (O === g || (g !== null && O === g.alternate)) break t
                ;(O = Vr(O)), (g = Vr(g))
              }
              O = null
            }
          else O = null
          P !== null && mp(w, S, P, O, !1), b !== null && F !== null && mp(w, F, b, O, !0)
        }
      }
      e: {
        if (((S = p ? Jr(p) : window), (P = S.nodeName && S.nodeName.toLowerCase()), P === "select" || (P === "input" && S.type === "file"))) var D = P1
        else if (ap(S))
          if (Jm) D = I1
          else {
            D = R1
            var Y = j1
          }
        else (P = S.nodeName) && P.toLowerCase() === "input" && (S.type === "checkbox" || S.type === "radio") && (D = L1)
        if (D && (D = D(e, p))) {
          qm(w, D, n, v)
          break e
        }
        Y && Y(e, S, p), e === "focusout" && (Y = S._wrapperState) && Y.controlled && S.type === "number" && lu(S, "number", S.value)
      }
      switch (((Y = p ? Jr(p) : window), e)) {
        case "focusin":
          ;(ap(Y) || Y.contentEditable === "true") && ((Gr = Y), (_u = p), (qi = null))
          break
        case "focusout":
          qi = _u = Gr = null
          break
        case "mousedown":
          Au = !0
          break
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ;(Au = !1), dp(w, n, v)
          break
        case "selectionchange":
          if (z1) break
        case "keydown":
        case "keyup":
          dp(w, n, v)
      }
      var K
      if (Ac)
        e: {
          switch (e) {
            case "compositionstart":
              var V = "onCompositionStart"
              break e
            case "compositionend":
              V = "onCompositionEnd"
              break e
            case "compositionupdate":
              V = "onCompositionUpdate"
              break e
          }
          V = void 0
        }
      else Kr ? Km(e, n) && (V = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (V = "onCompositionStart")
      V &&
        (Ym &&
          n.locale !== "ko" &&
          (Kr || V !== "onCompositionStart" ? V === "onCompositionEnd" && Kr && (K = Qm()) : ((Zn = v), (yc = "value" in Zn ? Zn.value : Zn.textContent), (Kr = !0))),
        (Y = Bs(p, V)),
        0 < Y.length && ((V = new rp(V, e, null, n, v)), w.push({ event: V, listeners: Y }), K ? (V.data = K) : ((K = Gm(n)), K !== null && (V.data = K)))),
        (K = x1 ? C1(e, n) : O1(e, n)) &&
          ((p = Bs(p, "onBeforeInput")), 0 < p.length && ((v = new rp("onBeforeInput", "beforeinput", null, n, v)), w.push({ event: v, listeners: p }), (v.data = K)))
    }
    ag(w, t)
  })
}
function po(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Bs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode
    i.tag === 5 && o !== null && ((i = o), (o = oo(e, n)), o != null && r.unshift(po(e, o, i)), (o = oo(e, t)), o != null && r.push(po(e, o, i))), (e = e.return)
  }
  return r
}
function Vr(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function mp(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var u = n,
      f = u.alternate,
      p = u.stateNode
    if (f !== null && f === r) break
    u.tag === 5 && p !== null && ((u = p), i ? ((f = oo(n, o)), f != null && a.unshift(po(n, f, u))) : i || ((f = oo(n, o)), f != null && a.push(po(n, f, u)))),
      (n = n.return)
  }
  a.length !== 0 && e.push({ event: t, listeners: a })
}
var U1 = /\r\n?/g,
  W1 = /\u0000|\uFFFD/g
function gp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      U1,
      `
`
    )
    .replace(W1, "")
}
function os(e, t, n) {
  if (((t = gp(t)), gp(e) !== t && n)) throw Error(B(425))
}
function Fs() {}
var Su = null,
  Eu = null
function ku(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
  )
}
var bu = typeof setTimeout == "function" ? setTimeout : void 0,
  $1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  vp = typeof Promise == "function" ? Promise : void 0,
  V1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof vp < "u"
      ? function (e) {
          return vp.resolve(null).then(e).catch(Q1)
        }
      : bu
function Q1(e) {
  setTimeout(function () {
    throw e
  })
}
function Ll(e, t) {
  var n = t,
    r = 0
  do {
    var i = n.nextSibling
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), lo(t)
          return
        }
        r--
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++
    n = i
  } while (n)
  lo(t)
}
function ir(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break
      if (t === "/$") return null
    }
  }
  return e
}
function yp(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e
        t--
      } else n === "/$" && t++
    }
    e = e.previousSibling
  }
  return null
}
var ki = Math.random().toString(36).slice(2),
  En = "__reactFiber$" + ki,
  ho = "__reactProps$" + ki,
  Bn = "__reactContainer$" + ki,
  xu = "__reactEvents$" + ki,
  Y1 = "__reactListeners$" + ki,
  K1 = "__reactHandles$" + ki
function br(e) {
  var t = e[En]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Bn] || n[En])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = yp(e); e !== null; ) {
          if ((n = e[En])) return n
          e = yp(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function xo(e) {
  return (e = e[En] || e[Bn]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
}
function Jr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(B(33))
}
function ca(e) {
  return e[ho] || null
}
var Cu = [],
  Xr = -1
function pr(e) {
  return { current: e }
}
function Ye(e) {
  0 > Xr || ((e.current = Cu[Xr]), (Cu[Xr] = null), Xr--)
}
function Ue(e, t) {
  Xr++, (Cu[Xr] = e.current), (e.current = t)
}
var fr = {},
  kt = pr(fr),
  It = pr(!1),
  Nr = fr
function pi(e, t) {
  var n = e.type.contextTypes
  if (!n) return fr
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext
  var i = {},
    o
  for (o in n) i[o] = t[o]
  return r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = i)), i
}
function Mt(e) {
  return (e = e.childContextTypes), e != null
}
function Hs() {
  Ye(It), Ye(kt)
}
function wp(e, t, n) {
  if (kt.current !== fr) throw Error(B(168))
  Ue(kt, t), Ue(It, n)
}
function ug(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n
  r = r.getChildContext()
  for (var i in r) if (!(i in t)) throw Error(B(108, j0(e) || "Unknown", i))
  return Je({}, n, r)
}
function Us(e) {
  return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fr), (Nr = kt.current), Ue(kt, e), Ue(It, It.current), !0
}
function _p(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(B(169))
  n ? ((e = ug(e, t, Nr)), (r.__reactInternalMemoizedMergedChildContext = e), Ye(It), Ye(kt), Ue(kt, e)) : Ye(It), Ue(It, n)
}
var jn = null,
  fa = !1,
  Il = !1
function cg(e) {
  jn === null ? (jn = [e]) : jn.push(e)
}
function G1(e) {
  ;(fa = !0), cg(e)
}
function hr() {
  if (!Il && jn !== null) {
    Il = !0
    var e = 0,
      t = je
    try {
      var n = jn
      for (je = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(jn = null), (fa = !1)
    } catch (i) {
      throw (jn !== null && (jn = jn.slice(e + 1)), Im(hc, hr), i)
    } finally {
      ;(je = t), (Il = !1)
    }
  }
  return null
}
var Zr = [],
  ei = 0,
  Ws = null,
  $s = 0,
  Jt = [],
  Xt = 0,
  Pr = null,
  Rn = 1,
  Ln = ""
function Er(e, t) {
  ;(Zr[ei++] = $s), (Zr[ei++] = Ws), (Ws = e), ($s = t)
}
function fg(e, t, n) {
  ;(Jt[Xt++] = Rn), (Jt[Xt++] = Ln), (Jt[Xt++] = Pr), (Pr = e)
  var r = Rn
  e = Ln
  var i = 32 - pn(r) - 1
  ;(r &= ~(1 << i)), (n += 1)
  var o = 32 - pn(t) + i
  if (30 < o) {
    var a = i - (i % 5)
    ;(o = (r & ((1 << a) - 1)).toString(32)), (r >>= a), (i -= a), (Rn = (1 << (32 - pn(t) + i)) | (n << i) | r), (Ln = o + e)
  } else (Rn = (1 << o) | (n << i) | r), (Ln = e)
}
function Ec(e) {
  e.return !== null && (Er(e, 1), fg(e, 1, 0))
}
function kc(e) {
  for (; e === Ws; ) (Ws = Zr[--ei]), (Zr[ei] = null), ($s = Zr[--ei]), (Zr[ei] = null)
  for (; e === Pr; ) (Pr = Jt[--Xt]), (Jt[Xt] = null), (Ln = Jt[--Xt]), (Jt[Xt] = null), (Rn = Jt[--Xt]), (Jt[Xt] = null)
}
var Ut = null,
  Ht = null,
  Ke = !1,
  dn = null
function dg(e, t) {
  var n = Zt(5, null, null, 0)
  ;(n.elementType = "DELETED"), (n.stateNode = t), (n.return = e), (t = e.deletions), t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Ap(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t), t !== null ? ((e.stateNode = t), (Ut = e), (Ht = ir(t.firstChild)), !0) : !1
      )
    case 6:
      return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (Ut = e), (Ht = null), !0) : !1
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Pr !== null ? { id: Rn, overflow: Ln } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = Zt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ut = e),
            (Ht = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Ou(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Tu(e) {
  if (Ke) {
    var t = Ht
    if (t) {
      var n = t
      if (!Ap(e, t)) {
        if (Ou(e)) throw Error(B(418))
        t = ir(n.nextSibling)
        var r = Ut
        t && Ap(e, t) ? dg(r, n) : ((e.flags = (e.flags & -4097) | 2), (Ke = !1), (Ut = e))
      }
    } else {
      if (Ou(e)) throw Error(B(418))
      ;(e.flags = (e.flags & -4097) | 2), (Ke = !1), (Ut = e)
    }
  }
}
function Sp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return
  Ut = e
}
function ss(e) {
  if (e !== Ut) return !1
  if (!Ke) return Sp(e), (Ke = !0), !1
  var t
  if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !ku(e.type, e.memoizedProps))), t && (t = Ht))) {
    if (Ou(e)) throw (pg(), Error(B(418)))
    for (; t; ) dg(e, t), (t = ir(t.nextSibling))
  }
  if ((Sp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(B(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === "/$") {
            if (t === 0) {
              Ht = ir(e.nextSibling)
              break e
            }
            t--
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++
        }
        e = e.nextSibling
      }
      Ht = null
    }
  } else Ht = Ut ? ir(e.stateNode.nextSibling) : null
  return !0
}
function pg() {
  for (var e = Ht; e; ) e = ir(e.nextSibling)
}
function hi() {
  ;(Ht = Ut = null), (Ke = !1)
}
function bc(e) {
  dn === null ? (dn = [e]) : dn.push(e)
}
var q1 = Un.ReactCurrentBatchConfig
function cn(e, t) {
  if (e && e.defaultProps) {
    ;(t = Je({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
var Vs = pr(null),
  Qs = null,
  ti = null,
  xc = null
function Cc() {
  xc = ti = Qs = null
}
function Oc(e) {
  var t = Vs.current
  Ye(Vs), (e._currentValue = t)
}
function Nu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (((e.childLanes & t) !== t ? ((e.childLanes |= t), r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n))
      break
    e = e.return
  }
}
function ci(e, t) {
  ;(Qs = e), (xc = ti = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (Lt = !0), (e.firstContext = null))
}
function nn(e) {
  var t = e._currentValue
  if (xc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ti === null)) {
      if (Qs === null) throw Error(B(308))
      ;(ti = e), (Qs.dependencies = { lanes: 0, firstContext: e })
    } else ti = ti.next = e
  return t
}
var xr = null
function Tc(e) {
  xr === null ? (xr = [e]) : xr.push(e)
}
function hg(e, t, n, r) {
  var i = t.interleaved
  return i === null ? ((n.next = n), Tc(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), Fn(e, r)
}
function Fn(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var qn = !1
function Nc(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }
}
function mg(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects })
}
function Mn(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null }
}
function or(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), xe & 2)) {
    var i = r.pending
    return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), Fn(e, n)
  }
  return (i = r.interleaved), i === null ? ((t.next = t), Tc(r)) : ((t.next = i.next), (i.next = t)), (r.interleaved = t), Fn(e, n)
}
function ws(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), mc(e, n)
  }
}
function Ep(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null }
        o === null ? (i = o = a) : (o = o.next = a), (n = n.next)
      } while (n !== null)
      o === null ? (i = o = t) : (o = o.next = t)
    } else i = o = t
    ;(n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }), (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t)
}
function Ys(e, t, n, r) {
  var i = e.updateQueue
  qn = !1
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    u = i.shared.pending
  if (u !== null) {
    i.shared.pending = null
    var f = u,
      p = f.next
    ;(f.next = null), a === null ? (o = p) : (a.next = p), (a = f)
    var v = e.alternate
    v !== null && ((v = v.updateQueue), (u = v.lastBaseUpdate), u !== a && (u === null ? (v.firstBaseUpdate = p) : (u.next = p), (v.lastBaseUpdate = f)))
  }
  if (o !== null) {
    var w = i.baseState
    ;(a = 0), (v = p = f = null), (u = o)
    do {
      var S = u.lane,
        P = u.eventTime
      if ((r & S) === S) {
        v !== null && (v = v.next = { eventTime: P, lane: 0, tag: u.tag, payload: u.payload, callback: u.callback, next: null })
        e: {
          var b = e,
            O = u
          switch (((S = t), (P = n), O.tag)) {
            case 1:
              if (((b = O.payload), typeof b == "function")) {
                w = b.call(P, w, S)
                break e
              }
              w = b
              break e
            case 3:
              b.flags = (b.flags & -65537) | 128
            case 0:
              if (((b = O.payload), (S = typeof b == "function" ? b.call(P, w, S) : b), S == null)) break e
              w = Je({}, w, S)
              break e
            case 2:
              qn = !0
          }
        }
        u.callback !== null && u.lane !== 0 && ((e.flags |= 64), (S = i.effects), S === null ? (i.effects = [u]) : S.push(u))
      } else
        (P = { eventTime: P, lane: S, tag: u.tag, payload: u.payload, callback: u.callback, next: null }),
          v === null ? ((p = v = P), (f = w)) : (v = v.next = P),
          (a |= S)
      if (((u = u.next), u === null)) {
        if (((u = i.shared.pending), u === null)) break
        ;(S = u), (u = S.next), (S.next = null), (i.lastBaseUpdate = S), (i.shared.pending = null)
      }
    } while (1)
    if ((v === null && (f = w), (i.baseState = f), (i.firstBaseUpdate = p), (i.lastBaseUpdate = v), (t = i.shared.interleaved), t !== null)) {
      i = t
      do (a |= i.lane), (i = i.next)
      while (i !== t)
    } else o === null && (i.shared.lanes = 0)
    ;(Rr |= a), (e.lanes = a), (e.memoizedState = w)
  }
}
function kp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function")) throw Error(B(191, i))
        i.call(r)
      }
    }
}
var gg = new hm.Component().refs
function Pu(e, t, n, r) {
  ;(t = e.memoizedState), (n = n(r, t)), (n = n == null ? t : Je({}, t, n)), (e.memoizedState = n), e.lanes === 0 && (e.updateQueue.baseState = n)
}
var da = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Mr(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = Nt(),
      i = ar(e),
      o = Mn(r, i)
    ;(o.payload = t), n != null && (o.callback = n), (t = or(e, o, i)), t !== null && (hn(t, e, i, r), ws(t, e, i))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = Nt(),
      i = ar(e),
      o = Mn(r, i)
    ;(o.tag = 1), (o.payload = t), n != null && (o.callback = n), (t = or(e, o, i)), t !== null && (hn(t, e, i, r), ws(t, e, i))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = Nt(),
      r = ar(e),
      i = Mn(n, r)
    ;(i.tag = 2), t != null && (i.callback = t), (t = or(e, i, r)), t !== null && (hn(t, e, r, n), ws(t, e, r))
  },
}
function bp(e, t, n, r, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, a) : t.prototype && t.prototype.isPureReactComponent ? !co(n, r) || !co(i, o) : !0
  )
}
function vg(e, t, n) {
  var r = !1,
    i = fr,
    o = t.contextType
  return (
    typeof o == "object" && o !== null ? (o = nn(o)) : ((i = Mt(t) ? Nr : kt.current), (r = t.contextTypes), (o = (r = r != null) ? pi(e, i) : fr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = da),
    (e.stateNode = t),
    (t._reactInternals = e),
    r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = i), (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  )
}
function xp(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && da.enqueueReplaceState(t, t.state, null)
}
function ju(e, t, n, r) {
  var i = e.stateNode
  ;(i.props = n), (i.state = e.memoizedState), (i.refs = gg), Nc(e)
  var o = t.contextType
  typeof o == "object" && o !== null ? (i.context = nn(o)) : ((o = Mt(t) ? Nr : kt.current), (i.context = pi(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Pu(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
      t !== i.state && da.enqueueReplaceState(i, i.state, null),
      Ys(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function zi(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(B(309))
        var r = n.stateNode
      }
      if (!r) throw Error(B(147, e))
      var i = r,
        o = "" + e
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o
        ? t.ref
        : ((t = function (a) {
            var u = i.refs
            u === gg && (u = i.refs = {}), a === null ? delete u[o] : (u[o] = a)
          }),
          (t._stringRef = o),
          t)
    }
    if (typeof e != "string") throw Error(B(284))
    if (!n._owner) throw Error(B(290, e))
  }
  return e
}
function as(e, t) {
  throw ((e = Object.prototype.toString.call(t)), Error(B(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
}
function Cp(e) {
  var t = e._init
  return t(e._payload)
}
function yg(e) {
  function t(g, h) {
    if (e) {
      var y = g.deletions
      y === null ? ((g.deletions = [h]), (g.flags |= 16)) : y.push(h)
    }
  }
  function n(g, h) {
    if (!e) return null
    for (; h !== null; ) t(g, h), (h = h.sibling)
    return null
  }
  function r(g, h) {
    for (g = new Map(); h !== null; ) h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling)
    return g
  }
  function i(g, h) {
    return (g = lr(g, h)), (g.index = 0), (g.sibling = null), g
  }
  function o(g, h, y) {
    return (g.index = y), e ? ((y = g.alternate), y !== null ? ((y = y.index), y < h ? ((g.flags |= 2), h) : y) : ((g.flags |= 2), h)) : ((g.flags |= 1048576), h)
  }
  function a(g) {
    return e && g.alternate === null && (g.flags |= 2), g
  }
  function u(g, h, y, j) {
    return h === null || h.tag !== 6 ? ((h = Ul(y, g.mode, j)), (h.return = g), h) : ((h = i(h, y)), (h.return = g), h)
  }
  function f(g, h, y, j) {
    var D = y.type
    return D === Yr
      ? v(g, h, y.props.children, j, y.key)
      : h !== null && (h.elementType === D || (typeof D == "object" && D !== null && D.$$typeof === Gn && Cp(D) === h.type))
      ? ((j = i(h, y.props)), (j.ref = zi(g, h, y)), (j.return = g), j)
      : ((j = bs(y.type, y.key, y.props, null, g.mode, j)), (j.ref = zi(g, h, y)), (j.return = g), j)
  }
  function p(g, h, y, j) {
    return h === null || h.tag !== 4 || h.stateNode.containerInfo !== y.containerInfo || h.stateNode.implementation !== y.implementation
      ? ((h = Wl(y, g.mode, j)), (h.return = g), h)
      : ((h = i(h, y.children || [])), (h.return = g), h)
  }
  function v(g, h, y, j, D) {
    return h === null || h.tag !== 7 ? ((h = Tr(y, g.mode, j, D)), (h.return = g), h) : ((h = i(h, y)), (h.return = g), h)
  }
  function w(g, h, y) {
    if ((typeof h == "string" && h !== "") || typeof h == "number") return (h = Ul("" + h, g.mode, y)), (h.return = g), h
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case qo:
          return (y = bs(h.type, h.key, h.props, null, g.mode, y)), (y.ref = zi(g, null, h)), (y.return = g), y
        case Qr:
          return (h = Wl(h, g.mode, y)), (h.return = g), h
        case Gn:
          var j = h._init
          return w(g, j(h._payload), y)
      }
      if (Wi(h) || Ri(h)) return (h = Tr(h, g.mode, y, null)), (h.return = g), h
      as(g, h)
    }
    return null
  }
  function S(g, h, y, j) {
    var D = h !== null ? h.key : null
    if ((typeof y == "string" && y !== "") || typeof y == "number") return D !== null ? null : u(g, h, "" + y, j)
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case qo:
          return y.key === D ? f(g, h, y, j) : null
        case Qr:
          return y.key === D ? p(g, h, y, j) : null
        case Gn:
          return (D = y._init), S(g, h, D(y._payload), j)
      }
      if (Wi(y) || Ri(y)) return D !== null ? null : v(g, h, y, j, null)
      as(g, y)
    }
    return null
  }
  function P(g, h, y, j, D) {
    if ((typeof j == "string" && j !== "") || typeof j == "number") return (g = g.get(y) || null), u(h, g, "" + j, D)
    if (typeof j == "object" && j !== null) {
      switch (j.$$typeof) {
        case qo:
          return (g = g.get(j.key === null ? y : j.key) || null), f(h, g, j, D)
        case Qr:
          return (g = g.get(j.key === null ? y : j.key) || null), p(h, g, j, D)
        case Gn:
          var Y = j._init
          return P(g, h, y, Y(j._payload), D)
      }
      if (Wi(j) || Ri(j)) return (g = g.get(y) || null), v(h, g, j, D, null)
      as(h, j)
    }
    return null
  }
  function b(g, h, y, j) {
    for (var D = null, Y = null, K = h, V = (h = 0), ve = null; K !== null && V < y.length; V++) {
      K.index > V ? ((ve = K), (K = null)) : (ve = K.sibling)
      var re = S(g, K, y[V], j)
      if (re === null) {
        K === null && (K = ve)
        break
      }
      e && K && re.alternate === null && t(g, K), (h = o(re, h, V)), Y === null ? (D = re) : (Y.sibling = re), (Y = re), (K = ve)
    }
    if (V === y.length) return n(g, K), Ke && Er(g, V), D
    if (K === null) {
      for (; V < y.length; V++) (K = w(g, y[V], j)), K !== null && ((h = o(K, h, V)), Y === null ? (D = K) : (Y.sibling = K), (Y = K))
      return Ke && Er(g, V), D
    }
    for (K = r(g, K); V < y.length; V++)
      (ve = P(K, g, V, y[V], j)),
        ve !== null && (e && ve.alternate !== null && K.delete(ve.key === null ? V : ve.key), (h = o(ve, h, V)), Y === null ? (D = ve) : (Y.sibling = ve), (Y = ve))
    return (
      e &&
        K.forEach(function (Ie) {
          return t(g, Ie)
        }),
      Ke && Er(g, V),
      D
    )
  }
  function O(g, h, y, j) {
    var D = Ri(y)
    if (typeof D != "function") throw Error(B(150))
    if (((y = D.call(y)), y == null)) throw Error(B(151))
    for (var Y = (D = null), K = h, V = (h = 0), ve = null, re = y.next(); K !== null && !re.done; V++, re = y.next()) {
      K.index > V ? ((ve = K), (K = null)) : (ve = K.sibling)
      var Ie = S(g, K, re.value, j)
      if (Ie === null) {
        K === null && (K = ve)
        break
      }
      e && K && Ie.alternate === null && t(g, K), (h = o(Ie, h, V)), Y === null ? (D = Ie) : (Y.sibling = Ie), (Y = Ie), (K = ve)
    }
    if (re.done) return n(g, K), Ke && Er(g, V), D
    if (K === null) {
      for (; !re.done; V++, re = y.next()) (re = w(g, re.value, j)), re !== null && ((h = o(re, h, V)), Y === null ? (D = re) : (Y.sibling = re), (Y = re))
      return Ke && Er(g, V), D
    }
    for (K = r(g, K); !re.done; V++, re = y.next())
      (re = P(K, g, V, re.value, j)),
        re !== null && (e && re.alternate !== null && K.delete(re.key === null ? V : re.key), (h = o(re, h, V)), Y === null ? (D = re) : (Y.sibling = re), (Y = re))
    return (
      e &&
        K.forEach(function (We) {
          return t(g, We)
        }),
      Ke && Er(g, V),
      D
    )
  }
  function F(g, h, y, j) {
    if ((typeof y == "object" && y !== null && y.type === Yr && y.key === null && (y = y.props.children), typeof y == "object" && y !== null)) {
      switch (y.$$typeof) {
        case qo:
          e: {
            for (var D = y.key, Y = h; Y !== null; ) {
              if (Y.key === D) {
                if (((D = y.type), D === Yr)) {
                  if (Y.tag === 7) {
                    n(g, Y.sibling), (h = i(Y, y.props.children)), (h.return = g), (g = h)
                    break e
                  }
                } else if (Y.elementType === D || (typeof D == "object" && D !== null && D.$$typeof === Gn && Cp(D) === Y.type)) {
                  n(g, Y.sibling), (h = i(Y, y.props)), (h.ref = zi(g, Y, y)), (h.return = g), (g = h)
                  break e
                }
                n(g, Y)
                break
              } else t(g, Y)
              Y = Y.sibling
            }
            y.type === Yr
              ? ((h = Tr(y.props.children, g.mode, j, y.key)), (h.return = g), (g = h))
              : ((j = bs(y.type, y.key, y.props, null, g.mode, j)), (j.ref = zi(g, h, y)), (j.return = g), (g = j))
          }
          return a(g)
        case Qr:
          e: {
            for (Y = y.key; h !== null; ) {
              if (h.key === Y)
                if (h.tag === 4 && h.stateNode.containerInfo === y.containerInfo && h.stateNode.implementation === y.implementation) {
                  n(g, h.sibling), (h = i(h, y.children || [])), (h.return = g), (g = h)
                  break e
                } else {
                  n(g, h)
                  break
                }
              else t(g, h)
              h = h.sibling
            }
            ;(h = Wl(y, g.mode, j)), (h.return = g), (g = h)
          }
          return a(g)
        case Gn:
          return (Y = y._init), F(g, h, Y(y._payload), j)
      }
      if (Wi(y)) return b(g, h, y, j)
      if (Ri(y)) return O(g, h, y, j)
      as(g, y)
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        h !== null && h.tag === 6 ? (n(g, h.sibling), (h = i(h, y)), (h.return = g), (g = h)) : (n(g, h), (h = Ul(y, g.mode, j)), (h.return = g), (g = h)),
        a(g))
      : n(g, h)
  }
  return F
}
var mi = yg(!0),
  wg = yg(!1),
  Co = {},
  xn = pr(Co),
  mo = pr(Co),
  go = pr(Co)
function Cr(e) {
  if (e === Co) throw Error(B(174))
  return e
}
function Pc(e, t) {
  switch ((Ue(go, t), Ue(mo, e), Ue(xn, Co), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : cu(null, "")
      break
    default:
      ;(e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = cu(t, e))
  }
  Ye(xn), Ue(xn, t)
}
function gi() {
  Ye(xn), Ye(mo), Ye(go)
}
function _g(e) {
  Cr(go.current)
  var t = Cr(xn.current),
    n = cu(t, e.type)
  t !== n && (Ue(mo, e), Ue(xn, n))
}
function jc(e) {
  mo.current === e && (Ye(xn), Ye(mo))
}
var Ge = pr(0)
function Ks(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Ml = []
function Rc() {
  for (var e = 0; e < Ml.length; e++) Ml[e]._workInProgressVersionPrimary = null
  Ml.length = 0
}
var _s = Un.ReactCurrentDispatcher,
  Dl = Un.ReactCurrentBatchConfig,
  jr = 0,
  qe = null,
  lt = null,
  pt = null,
  Gs = !1,
  Ji = !1,
  vo = 0,
  J1 = 0
function At() {
  throw Error(B(321))
}
function Lc(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++) if (!mn(e[n], t[n])) return !1
  return !0
}
function Ic(e, t, n, r, i, o) {
  if (
    ((jr = o),
    (qe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (_s.current = e === null || e.memoizedState === null ? tw : nw),
    (e = n(r, i)),
    Ji)
  ) {
    o = 0
    do {
      if (((Ji = !1), (vo = 0), 25 <= o)) throw Error(B(301))
      ;(o += 1), (pt = lt = null), (t.updateQueue = null), (_s.current = rw), (e = n(r, i))
    } while (Ji)
  }
  if (((_s.current = qs), (t = lt !== null && lt.next !== null), (jr = 0), (pt = lt = qe = null), (Gs = !1), t)) throw Error(B(300))
  return e
}
function Mc() {
  var e = vo !== 0
  return (vo = 0), e
}
function Sn() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
  return pt === null ? (qe.memoizedState = pt = e) : (pt = pt.next = e), pt
}
function rn() {
  if (lt === null) {
    var e = qe.alternate
    e = e !== null ? e.memoizedState : null
  } else e = lt.next
  var t = pt === null ? qe.memoizedState : pt.next
  if (t !== null) (pt = t), (lt = e)
  else {
    if (e === null) throw Error(B(310))
    ;(lt = e),
      (e = { memoizedState: lt.memoizedState, baseState: lt.baseState, baseQueue: lt.baseQueue, queue: lt.queue, next: null }),
      pt === null ? (qe.memoizedState = pt = e) : (pt = pt.next = e)
  }
  return pt
}
function yo(e, t) {
  return typeof t == "function" ? t(e) : t
}
function zl(e) {
  var t = rn(),
    n = t.queue
  if (n === null) throw Error(B(311))
  n.lastRenderedReducer = e
  var r = lt,
    i = r.baseQueue,
    o = n.pending
  if (o !== null) {
    if (i !== null) {
      var a = i.next
      ;(i.next = o.next), (o.next = a)
    }
    ;(r.baseQueue = i = o), (n.pending = null)
  }
  if (i !== null) {
    ;(o = i.next), (r = r.baseState)
    var u = (a = null),
      f = null,
      p = o
    do {
      var v = p.lane
      if ((jr & v) === v)
        f !== null && (f = f.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }),
          (r = p.hasEagerState ? p.eagerState : e(r, p.action))
      else {
        var w = { lane: v, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }
        f === null ? ((u = f = w), (a = r)) : (f = f.next = w), (qe.lanes |= v), (Rr |= v)
      }
      p = p.next
    } while (p !== null && p !== o)
    f === null ? (a = r) : (f.next = u), mn(r, t.memoizedState) || (Lt = !0), (t.memoizedState = r), (t.baseState = a), (t.baseQueue = f), (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    i = e
    do (o = i.lane), (qe.lanes |= o), (Rr |= o), (i = i.next)
    while (i !== e)
  } else i === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Bl(e) {
  var t = rn(),
    n = t.queue
  if (n === null) throw Error(B(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState
  if (i !== null) {
    n.pending = null
    var a = (i = i.next)
    do (o = e(o, a.action)), (a = a.next)
    while (a !== i)
    mn(o, t.memoizedState) || (Lt = !0), (t.memoizedState = o), t.baseQueue === null && (t.baseState = o), (n.lastRenderedState = o)
  }
  return [o, r]
}
function Ag() {}
function Sg(e, t) {
  var n = qe,
    r = rn(),
    i = t(),
    o = !mn(r.memoizedState, i)
  if ((o && ((r.memoizedState = i), (Lt = !0)), (r = r.queue), Dc(bg.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || (pt !== null && pt.memoizedState.tag & 1))) {
    if (((n.flags |= 2048), wo(9, kg.bind(null, n, r, i, t), void 0, null), ht === null)) throw Error(B(349))
    jr & 30 || Eg(n, t, i)
  }
  return i
}
function Eg(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = qe.updateQueue),
    t === null ? ((t = { lastEffect: null, stores: null }), (qe.updateQueue = t), (t.stores = [e])) : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function kg(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), xg(t) && Cg(e)
}
function bg(e, t, n) {
  return n(function () {
    xg(t) && Cg(e)
  })
}
function xg(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !mn(e, n)
  } catch {
    return !0
  }
}
function Cg(e) {
  var t = Fn(e, 1)
  t !== null && hn(t, e, 1, -1)
}
function Op(e) {
  var t = Sn()
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: yo, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = ew.bind(null, qe, e)),
    [t.memoizedState, e]
  )
}
function wo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = qe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (qe.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function Og() {
  return rn().memoizedState
}
function As(e, t, n, r) {
  var i = Sn()
  ;(qe.flags |= e), (i.memoizedState = wo(1 | t, n, void 0, r === void 0 ? null : r))
}
function pa(e, t, n, r) {
  var i = rn()
  r = r === void 0 ? null : r
  var o = void 0
  if (lt !== null) {
    var a = lt.memoizedState
    if (((o = a.destroy), r !== null && Lc(r, a.deps))) {
      i.memoizedState = wo(t, n, o, r)
      return
    }
  }
  ;(qe.flags |= e), (i.memoizedState = wo(1 | t, n, o, r))
}
function Tp(e, t) {
  return As(8390656, 8, e, t)
}
function Dc(e, t) {
  return pa(2048, 8, e, t)
}
function Tg(e, t) {
  return pa(4, 2, e, t)
}
function Ng(e, t) {
  return pa(4, 4, e, t)
}
function Pg(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function jg(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), pa(4, 4, Pg.bind(null, t, e), n)
}
function zc() {}
function Rg(e, t) {
  var n = rn()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Lc(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e)
}
function Lg(e, t) {
  var n = rn()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && Lc(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e)
}
function Ig(e, t, n) {
  return jr & 21 ? (mn(n, t) || ((n = zm()), (qe.lanes |= n), (Rr |= n), (e.baseState = !0)), t) : (e.baseState && ((e.baseState = !1), (Lt = !0)), (e.memoizedState = n))
}
function X1(e, t) {
  var n = je
  ;(je = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = Dl.transition
  Dl.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(je = n), (Dl.transition = r)
  }
}
function Mg() {
  return rn().memoizedState
}
function Z1(e, t, n) {
  var r = ar(e)
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Dg(e))) zg(t, n)
  else if (((n = hg(e, t, n, r)), n !== null)) {
    var i = Nt()
    hn(n, e, r, i), Bg(n, t, r)
  }
}
function ew(e, t, n) {
  var r = ar(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (Dg(e)) zg(t, i)
  else {
    var o = e.alternate
    if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
      try {
        var a = t.lastRenderedState,
          u = o(a, n)
        if (((i.hasEagerState = !0), (i.eagerState = u), mn(u, a))) {
          var f = t.interleaved
          f === null ? ((i.next = i), Tc(t)) : ((i.next = f.next), (f.next = i)), (t.interleaved = i)
          return
        }
      } catch {
      } finally {
      }
    ;(n = hg(e, t, i, r)), n !== null && ((i = Nt()), hn(n, e, r, i), Bg(n, t, r))
  }
}
function Dg(e) {
  var t = e.alternate
  return e === qe || (t !== null && t === qe)
}
function zg(e, t) {
  Ji = Gs = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function Bg(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), mc(e, n)
  }
}
var qs = {
    readContext: nn,
    useCallback: At,
    useContext: At,
    useEffect: At,
    useImperativeHandle: At,
    useInsertionEffect: At,
    useLayoutEffect: At,
    useMemo: At,
    useReducer: At,
    useRef: At,
    useState: At,
    useDebugValue: At,
    useDeferredValue: At,
    useTransition: At,
    useMutableSource: At,
    useSyncExternalStore: At,
    useId: At,
    unstable_isNewReconciler: !1,
  },
  tw = {
    readContext: nn,
    useCallback: function (e, t) {
      return (Sn().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: nn,
    useEffect: Tp,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), As(4194308, 4, Pg.bind(null, t, e), n)
    },
    useLayoutEffect: function (e, t) {
      return As(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return As(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = Sn()
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
    },
    useReducer: function (e, t, n) {
      var r = Sn()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
        (r.queue = e),
        (e = e.dispatch = Z1.bind(null, qe, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = Sn()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Op,
    useDebugValue: zc,
    useDeferredValue: function (e) {
      return (Sn().memoizedState = e)
    },
    useTransition: function () {
      var e = Op(!1),
        t = e[0]
      return (e = X1.bind(null, e[1])), (Sn().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = qe,
        i = Sn()
      if (Ke) {
        if (n === void 0) throw Error(B(407))
        n = n()
      } else {
        if (((n = t()), ht === null)) throw Error(B(349))
        jr & 30 || Eg(r, t, n)
      }
      i.memoizedState = n
      var o = { value: n, getSnapshot: t }
      return (i.queue = o), Tp(bg.bind(null, r, o, e), [e]), (r.flags |= 2048), wo(9, kg.bind(null, r, o, n, t), void 0, null), n
    },
    useId: function () {
      var e = Sn(),
        t = ht.identifierPrefix
      if (Ke) {
        var n = Ln,
          r = Rn
        ;(n = (r & ~(1 << (32 - pn(r) - 1))).toString(32) + n), (t = ":" + t + "R" + n), (n = vo++), 0 < n && (t += "H" + n.toString(32)), (t += ":")
      } else (n = J1++), (t = ":" + t + "r" + n.toString(32) + ":")
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  nw = {
    readContext: nn,
    useCallback: Rg,
    useContext: nn,
    useEffect: Dc,
    useImperativeHandle: jg,
    useInsertionEffect: Tg,
    useLayoutEffect: Ng,
    useMemo: Lg,
    useReducer: zl,
    useRef: Og,
    useState: function () {
      return zl(yo)
    },
    useDebugValue: zc,
    useDeferredValue: function (e) {
      var t = rn()
      return Ig(t, lt.memoizedState, e)
    },
    useTransition: function () {
      var e = zl(yo)[0],
        t = rn().memoizedState
      return [e, t]
    },
    useMutableSource: Ag,
    useSyncExternalStore: Sg,
    useId: Mg,
    unstable_isNewReconciler: !1,
  },
  rw = {
    readContext: nn,
    useCallback: Rg,
    useContext: nn,
    useEffect: Dc,
    useImperativeHandle: jg,
    useInsertionEffect: Tg,
    useLayoutEffect: Ng,
    useMemo: Lg,
    useReducer: Bl,
    useRef: Og,
    useState: function () {
      return Bl(yo)
    },
    useDebugValue: zc,
    useDeferredValue: function (e) {
      var t = rn()
      return lt === null ? (t.memoizedState = e) : Ig(t, lt.memoizedState, e)
    },
    useTransition: function () {
      var e = Bl(yo)[0],
        t = rn().memoizedState
      return [e, t]
    },
    useMutableSource: Ag,
    useSyncExternalStore: Sg,
    useId: Mg,
    unstable_isNewReconciler: !1,
  }
function vi(e, t) {
  try {
    var n = "",
      r = t
    do (n += P0(r)), (r = r.return)
    while (r)
    var i = n
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack
  }
  return { value: e, source: t, stack: i, digest: null }
}
function Fl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Ru(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var iw = typeof WeakMap == "function" ? WeakMap : Map
function Fg(e, t, n) {
  ;(n = Mn(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      Xs || ((Xs = !0), (Wu = r)), Ru(e, t)
    }),
    n
  )
}
function Hg(e, t, n) {
  ;(n = Mn(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == "function") {
    var i = t.value
    ;(n.payload = function () {
      return r(i)
    }),
      (n.callback = function () {
        Ru(e, t)
      })
  }
  var o = e.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ru(e, t), typeof r != "function" && (sr === null ? (sr = new Set([this])) : sr.add(this))
        var a = t.stack
        this.componentDidCatch(t.value, { componentStack: a !== null ? a : "" })
      }),
    n
  )
}
function Np(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new iw()
    var i = new Set()
    r.set(t, i)
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
  i.has(n) || (i.add(n), (e = yw.bind(null, e, t, n)), t.then(e, e))
}
function Pp(e) {
  do {
    var t
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e
    e = e.return
  } while (e !== null)
  return null
}
function jp(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Mn(-1, 1)), (t.tag = 2), or(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var ow = Un.ReactCurrentOwner,
  Lt = !1
function Tt(e, t, n, r) {
  t.child = e === null ? wg(t, null, n, r) : mi(t, e.child, n, r)
}
function Rp(e, t, n, r, i) {
  n = n.render
  var o = t.ref
  return (
    ci(t, i),
    (r = Ic(e, t, n, r, o, i)),
    (n = Mc()),
    e !== null && !Lt ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Hn(e, t, i)) : (Ke && n && Ec(t), (t.flags |= 1), Tt(e, t, r, i), t.child)
  )
}
function Lp(e, t, n, r, i) {
  if (e === null) {
    var o = n.type
    return typeof o == "function" && !Qc(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Ug(e, t, o, r, i))
      : ((e = bs(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e))
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps
    if (((n = n.compare), (n = n !== null ? n : co), n(a, r) && e.ref === t.ref)) return Hn(e, t, i)
  }
  return (t.flags |= 1), (e = lr(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e)
}
function Ug(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps
    if (co(o, r) && e.ref === t.ref)
      if (((Lt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0)) e.flags & 131072 && (Lt = !0)
      else return (t.lanes = e.lanes), Hn(e, t, i)
  }
  return Lu(e, t, n, r, i)
}
function Wg(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null
  if (r.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), Ue(ri, Ft), (Ft |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          Ue(ri, Ft),
          (Ft |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = o !== null ? o.baseLanes : n), Ue(ri, Ft), (Ft |= r)
    }
  else o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), Ue(ri, Ft), (Ft |= r)
  return Tt(e, t, i, n), t.child
}
function $g(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152))
}
function Lu(e, t, n, r, i) {
  var o = Mt(n) ? Nr : kt.current
  return (
    (o = pi(t, o)),
    ci(t, i),
    (n = Ic(e, t, n, r, o, i)),
    (r = Mc()),
    e !== null && !Lt ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), Hn(e, t, i)) : (Ke && r && Ec(t), (t.flags |= 1), Tt(e, t, n, i), t.child)
  )
}
function Ip(e, t, n, r, i) {
  if (Mt(n)) {
    var o = !0
    Us(t)
  } else o = !1
  if ((ci(t, i), t.stateNode === null)) Ss(e, t), vg(t, n, r), ju(t, n, r, i), (r = !0)
  else if (e === null) {
    var a = t.stateNode,
      u = t.memoizedProps
    a.props = u
    var f = a.context,
      p = n.contextType
    typeof p == "object" && p !== null ? (p = nn(p)) : ((p = Mt(n) ? Nr : kt.current), (p = pi(t, p)))
    var v = n.getDerivedStateFromProps,
      w = typeof v == "function" || typeof a.getSnapshotBeforeUpdate == "function"
    w || (typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function") || ((u !== r || f !== p) && xp(t, a, r, p)),
      (qn = !1)
    var S = t.memoizedState
    ;(a.state = S),
      Ys(t, r, a, i),
      (f = t.memoizedState),
      u !== r || S !== f || It.current || qn
        ? (typeof v == "function" && (Pu(t, n, v, r), (f = t.memoizedState)),
          (u = qn || bp(t, n, u, r, S, f, p))
            ? (w ||
                (typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = f)),
          (a.props = r),
          (a.state = f),
          (a.context = p),
          (r = u))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), (r = !1))
  } else {
    ;(a = t.stateNode),
      mg(e, t),
      (u = t.memoizedProps),
      (p = t.type === t.elementType ? u : cn(t.type, u)),
      (a.props = p),
      (w = t.pendingProps),
      (S = a.context),
      (f = n.contextType),
      typeof f == "object" && f !== null ? (f = nn(f)) : ((f = Mt(n) ? Nr : kt.current), (f = pi(t, f)))
    var P = n.getDerivedStateFromProps
    ;(v = typeof P == "function" || typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function") ||
      ((u !== w || S !== f) && xp(t, a, r, f)),
      (qn = !1),
      (S = t.memoizedState),
      (a.state = S),
      Ys(t, r, a, i)
    var b = t.memoizedState
    u !== w || S !== b || It.current || qn
      ? (typeof P == "function" && (Pu(t, n, P, r), (b = t.memoizedState)),
        (p = qn || bp(t, n, p, r, S, b, f) || !1)
          ? (v ||
              (typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, b, f),
              typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, b, f)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" || (u === e.memoizedProps && S === e.memoizedState) || (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" || (u === e.memoizedProps && S === e.memoizedState) || (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = b)),
        (a.props = r),
        (a.state = b),
        (a.context = f),
        (r = p))
      : (typeof a.componentDidUpdate != "function" || (u === e.memoizedProps && S === e.memoizedState) || (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" || (u === e.memoizedProps && S === e.memoizedState) || (t.flags |= 1024),
        (r = !1))
  }
  return Iu(e, t, n, r, o, i)
}
function Iu(e, t, n, r, i, o) {
  $g(e, t)
  var a = (t.flags & 128) !== 0
  if (!r && !a) return i && _p(t, n, !1), Hn(e, t, o)
  ;(r = t.stateNode), (ow.current = t)
  var u = a && typeof n.getDerivedStateFromError != "function" ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && a ? ((t.child = mi(t, e.child, null, o)), (t.child = mi(t, null, u, o))) : Tt(e, t, u, o),
    (t.memoizedState = r.state),
    i && _p(t, n, !0),
    t.child
  )
}
function Vg(e) {
  var t = e.stateNode
  t.pendingContext ? wp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wp(e, t.context, !1), Pc(e, t.containerInfo)
}
function Mp(e, t, n, r, i) {
  return hi(), bc(i), (t.flags |= 256), Tt(e, t, n, r), t.child
}
var Mu = { dehydrated: null, treeContext: null, retryLane: 0 }
function Du(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function Qg(e, t, n) {
  var r = t.pendingProps,
    i = Ge.current,
    o = !1,
    a = (t.flags & 128) !== 0,
    u
  if (
    ((u = a) || (u = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    u ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1),
    Ue(Ge, i & 1),
    e === null)
  )
    return (
      Tu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((a = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && o !== null ? ((o.childLanes = 0), (o.pendingProps = a)) : (o = ga(a, r, 0, null)),
              (e = Tr(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Du(n)),
              (t.memoizedState = Mu),
              e)
            : Bc(t, a))
    )
  if (((i = e.memoizedState), i !== null && ((u = i.dehydrated), u !== null))) return sw(e, t, a, r, u, i, n)
  if (o) {
    ;(o = r.fallback), (a = t.mode), (i = e.child), (u = i.sibling)
    var f = { mode: "hidden", children: r.children }
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = f), (t.deletions = null))
        : ((r = lr(i, f)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      u !== null ? (o = lr(u, o)) : ((o = Tr(o, a, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a = a === null ? Du(n) : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Mu),
      r
    )
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = lr(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function Bc(e, t) {
  return (t = ga({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t)
}
function ls(e, t, n, r) {
  return r !== null && bc(r), mi(t, e.child, null, n), (e = Bc(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e
}
function sw(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Fl(Error(B(422)))), ls(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = ga({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Tr(o, i, a, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && mi(t, e.child, null, a),
        (t.child.memoizedState = Du(a)),
        (t.memoizedState = Mu),
        o)
  if (!(t.mode & 1)) return ls(e, t, a, null)
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var u = r.dgst
    return (r = u), (o = Error(B(419))), (r = Fl(o, r, void 0)), ls(e, t, a, r)
  }
  if (((u = (a & e.childLanes) !== 0), Lt || u)) {
    if (((r = ht), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2
          break
        case 16:
          i = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32
          break
        case 536870912:
          i = 268435456
          break
        default:
          i = 0
      }
      ;(i = i & (r.suspendedLanes | a) ? 0 : i), i !== 0 && i !== o.retryLane && ((o.retryLane = i), Fn(e, i), hn(r, e, i, -1))
    }
    return Vc(), (r = Fl(Error(B(421)))), ls(e, t, a, r)
  }
  return i.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = ww.bind(null, e)), (i._reactRetry = t), null)
    : ((e = o.treeContext),
      (Ht = ir(i.nextSibling)),
      (Ut = t),
      (Ke = !0),
      (dn = null),
      e !== null && ((Jt[Xt++] = Rn), (Jt[Xt++] = Ln), (Jt[Xt++] = Pr), (Rn = e.id), (Ln = e.overflow), (Pr = t)),
      (t = Bc(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Dp(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Nu(e.return, t, n)
}
function Hl(e, t, n, r, i) {
  var o = e.memoizedState
  o === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
    : ((o.isBackwards = t), (o.rendering = null), (o.renderingStartTime = 0), (o.last = r), (o.tail = n), (o.tailMode = i))
}
function Yg(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail
  if ((Tt(e, t, r.children, n), (r = Ge.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Dp(e, n, t)
        else if (e.tag === 19) Dp(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((Ue(Ge, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; ) (e = n.alternate), e !== null && Ks(e) === null && (i = n), (n = n.sibling)
        ;(n = i), n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)), Hl(t, !1, i, n, o)
        break
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ks(e) === null)) {
            t.child = i
            break
          }
          ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
        }
        Hl(t, !0, n, null, o)
        break
      case "together":
        Hl(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Ss(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function Hn(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Rr |= t.lanes), !(n & t.childLanes))) return null
  if (e !== null && t.child !== e.child) throw Error(B(153))
  if (t.child !== null) {
    for (e = t.child, n = lr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) (e = e.sibling), (n = n.sibling = lr(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function aw(e, t, n) {
  switch (t.tag) {
    case 3:
      Vg(t), hi()
      break
    case 5:
      _g(t)
      break
    case 1:
      Mt(t.type) && Us(t)
      break
    case 4:
      Pc(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value
      Ue(Vs, r._currentValue), (r._currentValue = i)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Ue(Ge, Ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Qg(e, t, n)
          : (Ue(Ge, Ge.current & 1), (e = Hn(e, t, n)), e !== null ? e.sibling : null)
      Ue(Ge, Ge.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Yg(e, t, n)
        t.flags |= 128
      }
      if (((i = t.memoizedState), i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)), Ue(Ge, Ge.current), r)) break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), Wg(e, t, n)
  }
  return Hn(e, t, n)
}
var Kg, zu, Gg, qg
Kg = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
zu = function () {}
Gg = function (e, t, n, r) {
  var i = e.memoizedProps
  if (i !== r) {
    ;(e = t.stateNode), Cr(xn.current)
    var o = null
    switch (n) {
      case "input":
        ;(i = su(e, i)), (r = su(e, r)), (o = [])
        break
      case "select":
        ;(i = Je({}, i, { value: void 0 })), (r = Je({}, r, { value: void 0 })), (o = [])
        break
      case "textarea":
        ;(i = uu(e, i)), (r = uu(e, r)), (o = [])
        break
      default:
        typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Fs)
    }
    fu(n, r)
    var a
    n = null
    for (p in i)
      if (!r.hasOwnProperty(p) && i.hasOwnProperty(p) && i[p] != null)
        if (p === "style") {
          var u = i[p]
          for (a in u) u.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""))
        } else
          p !== "dangerouslySetInnerHTML" &&
            p !== "children" &&
            p !== "suppressContentEditableWarning" &&
            p !== "suppressHydrationWarning" &&
            p !== "autoFocus" &&
            (ro.hasOwnProperty(p) ? o || (o = []) : (o = o || []).push(p, null))
    for (p in r) {
      var f = r[p]
      if (((u = i != null ? i[p] : void 0), r.hasOwnProperty(p) && f !== u && (f != null || u != null)))
        if (p === "style")
          if (u) {
            for (a in u) !u.hasOwnProperty(a) || (f && f.hasOwnProperty(a)) || (n || (n = {}), (n[a] = ""))
            for (a in f) f.hasOwnProperty(a) && u[a] !== f[a] && (n || (n = {}), (n[a] = f[a]))
          } else n || (o || (o = []), o.push(p, n)), (n = f)
        else
          p === "dangerouslySetInnerHTML"
            ? ((f = f ? f.__html : void 0), (u = u ? u.__html : void 0), f != null && u !== f && (o = o || []).push(p, f))
            : p === "children"
            ? (typeof f != "string" && typeof f != "number") || (o = o || []).push(p, "" + f)
            : p !== "suppressContentEditableWarning" &&
              p !== "suppressHydrationWarning" &&
              (ro.hasOwnProperty(p) ? (f != null && p === "onScroll" && Qe("scroll", e), o || u === f || (o = [])) : (o = o || []).push(p, f))
    }
    n && (o = o || []).push("style", n)
    var p = o
    ;(t.updateQueue = p) && (t.flags |= 4)
  }
}
qg = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function Bi(e, t) {
  if (!Ke)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case "collapsed":
        n = e.tail
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling)
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null)
    }
}
function St(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t) for (var i = e.child; i !== null; ) (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags & 14680064), (r |= i.flags & 14680064), (i.return = e), (i = i.sibling)
  else for (i = e.child; i !== null; ) (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function lw(e, t, n) {
  var r = t.pendingProps
  switch ((kc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return St(t), null
    case 1:
      return Mt(t.type) && Hs(), St(t), null
    case 3:
      return (
        (r = t.stateNode),
        gi(),
        Ye(It),
        Ye(kt),
        Rc(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ss(t) ? (t.flags |= 4) : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), dn !== null && (Qu(dn), (dn = null)))),
        zu(e, t),
        St(t),
        null
      )
    case 5:
      jc(t)
      var i = Cr(go.current)
      if (((n = t.type), e !== null && t.stateNode != null)) Gg(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(B(166))
          return St(t), null
        }
        if (((e = Cr(xn.current)), ss(t))) {
          ;(r = t.stateNode), (n = t.type)
          var o = t.memoizedProps
          switch (((r[En] = t), (r[ho] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Qe("cancel", r), Qe("close", r)
              break
            case "iframe":
            case "object":
            case "embed":
              Qe("load", r)
              break
            case "video":
            case "audio":
              for (i = 0; i < Vi.length; i++) Qe(Vi[i], r)
              break
            case "source":
              Qe("error", r)
              break
            case "img":
            case "image":
            case "link":
              Qe("error", r), Qe("load", r)
              break
            case "details":
              Qe("toggle", r)
              break
            case "input":
              Qd(r, o), Qe("invalid", r)
              break
            case "select":
              ;(r._wrapperState = { wasMultiple: !!o.multiple }), Qe("invalid", r)
              break
            case "textarea":
              Kd(r, o), Qe("invalid", r)
          }
          fu(n, o), (i = null)
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var u = o[a]
              a === "children"
                ? typeof u == "string"
                  ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && os(r.textContent, u, e), (i = ["children", u]))
                  : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && os(r.textContent, u, e), (i = ["children", "" + u]))
                : ro.hasOwnProperty(a) && u != null && a === "onScroll" && Qe("scroll", r)
            }
          switch (n) {
            case "input":
              Jo(r), Yd(r, o, !0)
              break
            case "textarea":
              Jo(r), Gd(r)
              break
            case "select":
            case "option":
              break
            default:
              typeof o.onClick == "function" && (r.onclick = Fs)
          }
          ;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Em(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)), n === "select" && ((a = e), r.multiple ? (a.multiple = !0) : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[En] = t),
            (e[ho] = r),
            Kg(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((a = du(n, r)), n)) {
              case "dialog":
                Qe("cancel", e), Qe("close", e), (i = r)
                break
              case "iframe":
              case "object":
              case "embed":
                Qe("load", e), (i = r)
                break
              case "video":
              case "audio":
                for (i = 0; i < Vi.length; i++) Qe(Vi[i], e)
                i = r
                break
              case "source":
                Qe("error", e), (i = r)
                break
              case "img":
              case "image":
              case "link":
                Qe("error", e), Qe("load", e), (i = r)
                break
              case "details":
                Qe("toggle", e), (i = r)
                break
              case "input":
                Qd(e, r), (i = su(e, r)), Qe("invalid", e)
                break
              case "option":
                i = r
                break
              case "select":
                ;(e._wrapperState = { wasMultiple: !!r.multiple }), (i = Je({}, r, { value: void 0 })), Qe("invalid", e)
                break
              case "textarea":
                Kd(e, r), (i = uu(e, r)), Qe("invalid", e)
                break
              default:
                i = r
            }
            fu(n, i), (u = i)
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var f = u[o]
                o === "style"
                  ? xm(e, f)
                  : o === "dangerouslySetInnerHTML"
                  ? ((f = f ? f.__html : void 0), f != null && km(e, f))
                  : o === "children"
                  ? typeof f == "string"
                    ? (n !== "textarea" || f !== "") && io(e, f)
                    : typeof f == "number" && io(e, "" + f)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (ro.hasOwnProperty(o) ? f != null && o === "onScroll" && Qe("scroll", e) : f != null && uc(e, o, f, a))
              }
            switch (n) {
              case "input":
                Jo(e), Yd(e, r, !1)
                break
              case "textarea":
                Jo(e), Gd(e)
                break
              case "option":
                r.value != null && e.setAttribute("value", "" + cr(r.value))
                break
              case "select":
                ;(e.multiple = !!r.multiple), (o = r.value), o != null ? si(e, !!r.multiple, o, !1) : r.defaultValue != null && si(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof i.onClick == "function" && (e.onclick = Fs)
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus
                break e
              case "img":
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return St(t), null
    case 6:
      if (e && t.stateNode != null) qg(e, t, e.memoizedProps, r)
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(B(166))
        if (((n = Cr(go.current)), Cr(xn.current), ss(t))) {
          if (((r = t.stateNode), (n = t.memoizedProps), (r[En] = t), (o = r.nodeValue !== n) && ((e = Ut), e !== null)))
            switch (e.tag) {
              case 3:
                os(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && os(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          o && (t.flags |= 4)
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[En] = t), (t.stateNode = r)
      }
      return St(t), null
    case 13:
      if ((Ye(Ge), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
        if (Ke && Ht !== null && t.mode & 1 && !(t.flags & 128)) pg(), hi(), (t.flags |= 98560), (o = !1)
        else if (((o = ss(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(B(318))
            if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o)) throw Error(B(317))
            o[En] = t
          } else hi(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          St(t), (o = !1)
        } else dn !== null && (Qu(dn), (dn = null)), (o = !0)
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) && r && ((t.child.flags |= 8192), t.mode & 1 && (e === null || Ge.current & 1 ? ut === 0 && (ut = 3) : Vc())),
          t.updateQueue !== null && (t.flags |= 4),
          St(t),
          null)
    case 4:
      return gi(), zu(e, t), e === null && fo(t.stateNode.containerInfo), St(t), null
    case 10:
      return Oc(t.type._context), St(t), null
    case 17:
      return Mt(t.type) && Hs(), St(t), null
    case 19:
      if ((Ye(Ge), (o = t.memoizedState), o === null)) return St(t), null
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) Bi(o, !1)
        else {
          if (ut !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Ks(e)), a !== null)) {
                for (
                  t.flags |= 128, Bi(o, !1), r = a.updateQueue, r !== null && ((t.updateQueue = r), (t.flags |= 4)), t.subtreeFlags = 0, r = n, n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling)
                return Ue(Ge, (Ge.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          o.tail !== null && nt() > yi && ((t.flags |= 128), (r = !0), Bi(o, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Ks(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Bi(o, !0),
              o.tail === null && o.tailMode === "hidden" && !a.alternate && !Ke)
            )
              return St(t), null
          } else 2 * nt() - o.renderingStartTime > yi && n !== 1073741824 && ((t.flags |= 128), (r = !0), Bi(o, !1), (t.lanes = 4194304))
        o.isBackwards ? ((a.sibling = t.child), (t.child = a)) : ((n = o.last), n !== null ? (n.sibling = a) : (t.child = a), (o.last = a))
      }
      return o.tail !== null
        ? ((t = o.tail), (o.rendering = t), (o.tail = t.sibling), (o.renderingStartTime = nt()), (t.sibling = null), (n = Ge.current), Ue(Ge, r ? (n & 1) | 2 : n & 1), t)
        : (St(t), null)
    case 22:
    case 23:
      return (
        $c(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ft & 1073741824 && (St(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : St(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(B(156, t.tag))
}
function uw(e, t) {
  switch ((kc(t), t.tag)) {
    case 1:
      return Mt(t.type) && Hs(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 3:
      return gi(), Ye(It), Ye(kt), Rc(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
    case 5:
      return jc(t), null
    case 13:
      if ((Ye(Ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(B(340))
        hi()
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
    case 19:
      return Ye(Ge), null
    case 4:
      return gi(), null
    case 10:
      return Oc(t.type._context), null
    case 22:
    case 23:
      return $c(), null
    case 24:
      return null
    default:
      return null
  }
}
var us = !1,
  Et = !1,
  cw = typeof WeakSet == "function" ? WeakSet : Set,
  J = null
function ni(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null)
      } catch (r) {
        et(e, t, r)
      }
    else n.current = null
}
function Bu(e, t, n) {
  try {
    n()
  } catch (r) {
    et(e, t, r)
  }
}
var zp = !1
function fw(e, t) {
  if (((Su = Ds), (e = eg()), Sc(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var i = r.anchorOffset,
            o = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, o.nodeType
          } catch {
            n = null
            break e
          }
          var a = 0,
            u = -1,
            f = -1,
            p = 0,
            v = 0,
            w = e,
            S = null
          t: for (;;) {
            for (
              var P;
              w !== n || (i !== 0 && w.nodeType !== 3) || (u = a + i),
                w !== o || (r !== 0 && w.nodeType !== 3) || (f = a + r),
                w.nodeType === 3 && (a += w.nodeValue.length),
                (P = w.firstChild) !== null;

            )
              (S = w), (w = P)
            for (;;) {
              if (w === e) break t
              if ((S === n && ++p === i && (u = a), S === o && ++v === r && (f = a), (P = w.nextSibling) !== null)) break
              ;(w = S), (S = w.parentNode)
            }
            w = P
          }
          n = u === -1 || f === -1 ? null : { start: u, end: f }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (Eu = { focusedElem: e, selectionRange: n }, Ds = !1, J = t; J !== null; )
    if (((t = J), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (J = e)
    else
      for (; J !== null; ) {
        t = J
        try {
          var b = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (b !== null) {
                  var O = b.memoizedProps,
                    F = b.memoizedState,
                    g = t.stateNode,
                    h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? O : cn(t.type, O), F)
                  g.__reactInternalSnapshotBeforeUpdate = h
                }
                break
              case 3:
                var y = t.stateNode.containerInfo
                y.nodeType === 1 ? (y.textContent = "") : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(B(163))
            }
        } catch (j) {
          et(t, t.return, j)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (J = e)
          break
        }
        J = t.return
      }
  return (b = zp), (zp = !1), b
}
function Xi(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next)
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy
        ;(i.destroy = void 0), o !== void 0 && Bu(t, n, o)
      }
      i = i.next
    } while (i !== r)
  }
}
function ha(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function Fu(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == "function" ? t(e) : (t.current = e)
  }
}
function Jg(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), Jg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[En], delete t[ho], delete t[xu], delete t[Y1], delete t[K1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function Xg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Bp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Xg(e.return)) return null
      e = e.return
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function Hu(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Fs))
  else if (r !== 4 && ((e = e.child), e !== null)) for (Hu(e, t, n), e = e.sibling; e !== null; ) Hu(e, t, n), (e = e.sibling)
}
function Uu(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null)) for (Uu(e, t, n), e = e.sibling; e !== null; ) Uu(e, t, n), (e = e.sibling)
}
var vt = null,
  fn = !1
function Yn(e, t, n) {
  for (n = n.child; n !== null; ) Zg(e, t, n), (n = n.sibling)
}
function Zg(e, t, n) {
  if (bn && typeof bn.onCommitFiberUnmount == "function")
    try {
      bn.onCommitFiberUnmount(sa, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Et || ni(n, t)
    case 6:
      var r = vt,
        i = fn
      ;(vt = null),
        Yn(e, t, n),
        (vt = r),
        (fn = i),
        vt !== null && (fn ? ((e = vt), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : vt.removeChild(n.stateNode))
      break
    case 18:
      vt !== null && (fn ? ((e = vt), (n = n.stateNode), e.nodeType === 8 ? Ll(e.parentNode, n) : e.nodeType === 1 && Ll(e, n), lo(e)) : Ll(vt, n.stateNode))
      break
    case 4:
      ;(r = vt), (i = fn), (vt = n.stateNode.containerInfo), (fn = !0), Yn(e, t, n), (vt = r), (fn = i)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (!Et && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        i = r = r.next
        do {
          var o = i,
            a = o.destroy
          ;(o = o.tag), a !== void 0 && (o & 2 || o & 4) && Bu(n, t, a), (i = i.next)
        } while (i !== r)
      }
      Yn(e, t, n)
      break
    case 1:
      if (!Et && (ni(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          ;(r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount()
        } catch (u) {
          et(n, t, u)
        }
      Yn(e, t, n)
      break
    case 21:
      Yn(e, t, n)
      break
    case 22:
      n.mode & 1 ? ((Et = (r = Et) || n.memoizedState !== null), Yn(e, t, n), (Et = r)) : Yn(e, t, n)
      break
    default:
      Yn(e, t, n)
  }
}
function Fp(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new cw()),
      t.forEach(function (r) {
        var i = _w.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(i, i))
      })
  }
}
function ln(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r]
      try {
        var o = e,
          a = t,
          u = a
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              ;(vt = u.stateNode), (fn = !1)
              break e
            case 3:
              ;(vt = u.stateNode.containerInfo), (fn = !0)
              break e
            case 4:
              ;(vt = u.stateNode.containerInfo), (fn = !0)
              break e
          }
          u = u.return
        }
        if (vt === null) throw Error(B(160))
        Zg(o, a, i), (vt = null), (fn = !1)
        var f = i.alternate
        f !== null && (f.return = null), (i.return = null)
      } catch (p) {
        et(i, t, p)
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ev(t, e), (t = t.sibling)
}
function ev(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ln(t, e), An(e), r & 4)) {
        try {
          Xi(3, e, e.return), ha(3, e)
        } catch (O) {
          et(e, e.return, O)
        }
        try {
          Xi(5, e, e.return)
        } catch (O) {
          et(e, e.return, O)
        }
      }
      break
    case 1:
      ln(t, e), An(e), r & 512 && n !== null && ni(n, n.return)
      break
    case 5:
      if ((ln(t, e), An(e), r & 512 && n !== null && ni(n, n.return), e.flags & 32)) {
        var i = e.stateNode
        try {
          io(i, "")
        } catch (O) {
          et(e, e.return, O)
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = n !== null ? n.memoizedProps : o,
          u = e.type,
          f = e.updateQueue
        if (((e.updateQueue = null), f !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Am(i, o), du(u, a)
            var p = du(u, o)
            for (a = 0; a < f.length; a += 2) {
              var v = f[a],
                w = f[a + 1]
              v === "style" ? xm(i, w) : v === "dangerouslySetInnerHTML" ? km(i, w) : v === "children" ? io(i, w) : uc(i, v, w, p)
            }
            switch (u) {
              case "input":
                au(i, o)
                break
              case "textarea":
                Sm(i, o)
                break
              case "select":
                var S = i._wrapperState.wasMultiple
                i._wrapperState.wasMultiple = !!o.multiple
                var P = o.value
                P != null
                  ? si(i, !!o.multiple, P, !1)
                  : S !== !!o.multiple && (o.defaultValue != null ? si(i, !!o.multiple, o.defaultValue, !0) : si(i, !!o.multiple, o.multiple ? [] : "", !1))
            }
            i[ho] = o
          } catch (O) {
            et(e, e.return, O)
          }
      }
      break
    case 6:
      if ((ln(t, e), An(e), r & 4)) {
        if (e.stateNode === null) throw Error(B(162))
        ;(i = e.stateNode), (o = e.memoizedProps)
        try {
          i.nodeValue = o
        } catch (O) {
          et(e, e.return, O)
        }
      }
      break
    case 3:
      if ((ln(t, e), An(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          lo(t.containerInfo)
        } catch (O) {
          et(e, e.return, O)
        }
      break
    case 4:
      ln(t, e), An(e)
      break
    case 13:
      ln(t, e),
        An(e),
        (i = e.child),
        i.flags & 8192 && ((o = i.memoizedState !== null), (i.stateNode.isHidden = o), !o || (i.alternate !== null && i.alternate.memoizedState !== null) || (Uc = nt())),
        r & 4 && Fp(e)
      break
    case 22:
      if (((v = n !== null && n.memoizedState !== null), e.mode & 1 ? ((Et = (p = Et) || v), ln(t, e), (Et = p)) : ln(t, e), An(e), r & 8192)) {
        if (((p = e.memoizedState !== null), (e.stateNode.isHidden = p) && !v && e.mode & 1))
          for (J = e, v = e.child; v !== null; ) {
            for (w = J = v; J !== null; ) {
              switch (((S = J), (P = S.child), S.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Xi(4, S, S.return)
                  break
                case 1:
                  ni(S, S.return)
                  var b = S.stateNode
                  if (typeof b.componentWillUnmount == "function") {
                    ;(r = S), (n = S.return)
                    try {
                      ;(t = r), (b.props = t.memoizedProps), (b.state = t.memoizedState), b.componentWillUnmount()
                    } catch (O) {
                      et(r, n, O)
                    }
                  }
                  break
                case 5:
                  ni(S, S.return)
                  break
                case 22:
                  if (S.memoizedState !== null) {
                    Up(w)
                    continue
                  }
              }
              P !== null ? ((P.return = S), (J = P)) : Up(w)
            }
            v = v.sibling
          }
        e: for (v = null, w = e; ; ) {
          if (w.tag === 5) {
            if (v === null) {
              v = w
              try {
                ;(i = w.stateNode),
                  p
                    ? ((o = i.style), typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : (o.display = "none"))
                    : ((u = w.stateNode),
                      (f = w.memoizedProps.style),
                      (a = f != null && f.hasOwnProperty("display") ? f.display : null),
                      (u.style.display = bm("display", a)))
              } catch (O) {
                et(e, e.return, O)
              }
            }
          } else if (w.tag === 6) {
            if (v === null)
              try {
                w.stateNode.nodeValue = p ? "" : w.memoizedProps
              } catch (O) {
                et(e, e.return, O)
              }
          } else if (((w.tag !== 22 && w.tag !== 23) || w.memoizedState === null || w === e) && w.child !== null) {
            ;(w.child.return = w), (w = w.child)
            continue
          }
          if (w === e) break e
          for (; w.sibling === null; ) {
            if (w.return === null || w.return === e) break e
            v === w && (v = null), (w = w.return)
          }
          v === w && (v = null), (w.sibling.return = w.return), (w = w.sibling)
        }
      }
      break
    case 19:
      ln(t, e), An(e), r & 4 && Fp(e)
      break
    case 21:
      break
    default:
      ln(t, e), An(e)
  }
}
function An(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Xg(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(B(160))
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode
          r.flags & 32 && (io(i, ""), (r.flags &= -33))
          var o = Bp(e)
          Uu(e, o, i)
          break
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            u = Bp(e)
          Hu(e, u, a)
          break
        default:
          throw Error(B(161))
      }
    } catch (f) {
      et(e, e.return, f)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function dw(e, t, n) {
  ;(J = e), tv(e)
}
function tv(e, t, n) {
  for (var r = (e.mode & 1) !== 0; J !== null; ) {
    var i = J,
      o = i.child
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || us
      if (!a) {
        var u = i.alternate,
          f = (u !== null && u.memoizedState !== null) || Et
        u = us
        var p = Et
        if (((us = a), (Et = f) && !p))
          for (J = i; J !== null; ) (a = J), (f = a.child), a.tag === 22 && a.memoizedState !== null ? Wp(i) : f !== null ? ((f.return = a), (J = f)) : Wp(i)
        for (; o !== null; ) (J = o), tv(o), (o = o.sibling)
        ;(J = i), (us = u), (Et = p)
      }
      Hp(e)
    } else i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (J = o)) : Hp(e)
  }
}
function Hp(e) {
  for (; J !== null; ) {
    var t = J
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Et || ha(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !Et)
                if (n === null) r.componentDidMount()
                else {
                  var i = t.elementType === t.type ? n.memoizedProps : cn(t.type, n.memoizedProps)
                  r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                }
              var o = t.updateQueue
              o !== null && kp(t, o, r)
              break
            case 3:
              var a = t.updateQueue
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                kp(t, a, n)
              }
              break
            case 5:
              var u = t.stateNode
              if (n === null && t.flags & 4) {
                n = u
                var f = t.memoizedProps
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    f.autoFocus && n.focus()
                    break
                  case "img":
                    f.src && (n.src = f.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var p = t.alternate
                if (p !== null) {
                  var v = p.memoizedState
                  if (v !== null) {
                    var w = v.dehydrated
                    w !== null && lo(w)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(B(163))
          }
        Et || (t.flags & 512 && Fu(t))
      } catch (S) {
        et(t, t.return, S)
      }
    }
    if (t === e) {
      J = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (J = n)
      break
    }
    J = t.return
  }
}
function Up(e) {
  for (; J !== null; ) {
    var t = J
    if (t === e) {
      J = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (J = n)
      break
    }
    J = t.return
  }
}
function Wp(e) {
  for (; J !== null; ) {
    var t = J
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            ha(4, t)
          } catch (f) {
            et(t, n, f)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == "function") {
            var i = t.return
            try {
              r.componentDidMount()
            } catch (f) {
              et(t, i, f)
            }
          }
          var o = t.return
          try {
            Fu(t)
          } catch (f) {
            et(t, o, f)
          }
          break
        case 5:
          var a = t.return
          try {
            Fu(t)
          } catch (f) {
            et(t, a, f)
          }
      }
    } catch (f) {
      et(t, t.return, f)
    }
    if (t === e) {
      J = null
      break
    }
    var u = t.sibling
    if (u !== null) {
      ;(u.return = t.return), (J = u)
      break
    }
    J = t.return
  }
}
var pw = Math.ceil,
  Js = Un.ReactCurrentDispatcher,
  Fc = Un.ReactCurrentOwner,
  en = Un.ReactCurrentBatchConfig,
  xe = 0,
  ht = null,
  ot = null,
  yt = 0,
  Ft = 0,
  ri = pr(0),
  ut = 0,
  _o = null,
  Rr = 0,
  ma = 0,
  Hc = 0,
  Zi = null,
  Rt = null,
  Uc = 0,
  yi = 1 / 0,
  Pn = null,
  Xs = !1,
  Wu = null,
  sr = null,
  cs = !1,
  er = null,
  Zs = 0,
  eo = 0,
  $u = null,
  Es = -1,
  ks = 0
function Nt() {
  return xe & 6 ? nt() : Es !== -1 ? Es : (Es = nt())
}
function ar(e) {
  return e.mode & 1
    ? xe & 2 && yt !== 0
      ? yt & -yt
      : q1.transition !== null
      ? (ks === 0 && (ks = zm()), ks)
      : ((e = je), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Vm(e.type))), e)
    : 1
}
function hn(e, t, n, r) {
  if (50 < eo) throw ((eo = 0), ($u = null), Error(B(185)))
  ko(e, n, r),
    (!(xe & 2) || e !== ht) &&
      (e === ht && (!(xe & 2) && (ma |= n), ut === 4 && Xn(e, yt)), Dt(e, r), n === 1 && xe === 0 && !(t.mode & 1) && ((yi = nt() + 500), fa && hr()))
}
function Dt(e, t) {
  var n = e.callbackNode
  q0(e, t)
  var r = Ms(e, e === ht ? yt : 0)
  if (r === 0) n !== null && Xd(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Xd(n), t === 1))
      e.tag === 0 ? G1($p.bind(null, e)) : cg($p.bind(null, e)),
        V1(function () {
          !(xe & 6) && hr()
        }),
        (n = null)
    else {
      switch (Bm(r)) {
        case 1:
          n = hc
          break
        case 4:
          n = Mm
          break
        case 16:
          n = Is
          break
        case 536870912:
          n = Dm
          break
        default:
          n = Is
      }
      n = uv(n, nv.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function nv(e, t) {
  if (((Es = -1), (ks = 0), xe & 6)) throw Error(B(327))
  var n = e.callbackNode
  if (fi() && e.callbackNode !== n) return null
  var r = Ms(e, e === ht ? yt : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = ea(e, r)
  else {
    t = r
    var i = xe
    xe |= 2
    var o = iv()
    ;(ht !== e || yt !== t) && ((Pn = null), (yi = nt() + 500), Or(e, t))
    do
      try {
        gw()
        break
      } catch (u) {
        rv(e, u)
      }
    while (1)
    Cc(), (Js.current = o), (xe = i), ot !== null ? (t = 0) : ((ht = null), (yt = 0), (t = ut))
  }
  if (t !== 0) {
    if ((t === 2 && ((i = vu(e)), i !== 0 && ((r = i), (t = Vu(e, i)))), t === 1)) throw ((n = _o), Or(e, 0), Xn(e, r), Dt(e, nt()), n)
    if (t === 6) Xn(e, r)
    else {
      if (((i = e.current.alternate), !(r & 30) && !hw(i) && ((t = ea(e, r)), t === 2 && ((o = vu(e)), o !== 0 && ((r = o), (t = Vu(e, o)))), t === 1)))
        throw ((n = _o), Or(e, 0), Xn(e, r), Dt(e, nt()), n)
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(B(345))
        case 2:
          kr(e, Rt, Pn)
          break
        case 3:
          if ((Xn(e, r), (r & 130023424) === r && ((t = Uc + 500 - nt()), 10 < t))) {
            if (Ms(e, 0) !== 0) break
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Nt(), (e.pingedLanes |= e.suspendedLanes & i)
              break
            }
            e.timeoutHandle = bu(kr.bind(null, e, Rt, Pn), t)
            break
          }
          kr(e, Rt, Pn)
          break
        case 4:
          if ((Xn(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - pn(r)
            ;(o = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~o)
          }
          if (
            ((r = i),
            (r = nt() - r),
            (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * pw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = bu(kr.bind(null, e, Rt, Pn), r)
            break
          }
          kr(e, Rt, Pn)
          break
        case 5:
          kr(e, Rt, Pn)
          break
        default:
          throw Error(B(329))
      }
    }
  }
  return Dt(e, nt()), e.callbackNode === n ? nv.bind(null, e) : null
}
function Vu(e, t) {
  var n = Zi
  return e.current.memoizedState.isDehydrated && (Or(e, t).flags |= 256), (e = ea(e, t)), e !== 2 && ((t = Rt), (Rt = n), t !== null && Qu(t)), e
}
function Qu(e) {
  Rt === null ? (Rt = e) : Rt.push.apply(Rt, e)
}
function hw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot
          i = i.value
          try {
            if (!mn(o(), i)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function Xn(e, t) {
  for (t &= ~Hc, t &= ~ma, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - pn(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function $p(e) {
  if (xe & 6) throw Error(B(327))
  fi()
  var t = Ms(e, 0)
  if (!(t & 1)) return Dt(e, nt()), null
  var n = ea(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = vu(e)
    r !== 0 && ((t = r), (n = Vu(e, r)))
  }
  if (n === 1) throw ((n = _o), Or(e, 0), Xn(e, t), Dt(e, nt()), n)
  if (n === 6) throw Error(B(345))
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), kr(e, Rt, Pn), Dt(e, nt()), null
}
function Wc(e, t) {
  var n = xe
  xe |= 1
  try {
    return e(t)
  } finally {
    ;(xe = n), xe === 0 && ((yi = nt() + 500), fa && hr())
  }
}
function Lr(e) {
  er !== null && er.tag === 0 && !(xe & 6) && fi()
  var t = xe
  xe |= 1
  var n = en.transition,
    r = je
  try {
    if (((en.transition = null), (je = 1), e)) return e()
  } finally {
    ;(je = r), (en.transition = n), (xe = t), !(xe & 6) && hr()
  }
}
function $c() {
  ;(Ft = ri.current), Ye(ri)
}
function Or(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), $1(n)), ot !== null))
    for (n = ot.return; n !== null; ) {
      var r = n
      switch ((kc(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && Hs()
          break
        case 3:
          gi(), Ye(It), Ye(kt), Rc()
          break
        case 5:
          jc(r)
          break
        case 4:
          gi()
          break
        case 13:
          Ye(Ge)
          break
        case 19:
          Ye(Ge)
          break
        case 10:
          Oc(r.type._context)
          break
        case 22:
        case 23:
          $c()
      }
      n = n.return
    }
  if (((ht = e), (ot = e = lr(e.current, null)), (yt = Ft = t), (ut = 0), (_o = null), (Hc = ma = Rr = 0), (Rt = Zi = null), xr !== null)) {
    for (t = 0; t < xr.length; t++)
      if (((n = xr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var i = r.next,
          o = n.pending
        if (o !== null) {
          var a = o.next
          ;(o.next = i), (r.next = a)
        }
        n.pending = r
      }
    xr = null
  }
  return e
}
function rv(e, t) {
  do {
    var n = ot
    try {
      if ((Cc(), (_s.current = qs), Gs)) {
        for (var r = qe.memoizedState; r !== null; ) {
          var i = r.queue
          i !== null && (i.pending = null), (r = r.next)
        }
        Gs = !1
      }
      if (((jr = 0), (pt = lt = qe = null), (Ji = !1), (vo = 0), (Fc.current = null), n === null || n.return === null)) {
        ;(ut = 1), (_o = t), (ot = null)
        break
      }
      e: {
        var o = e,
          a = n.return,
          u = n,
          f = t
        if (((t = yt), (u.flags |= 32768), f !== null && typeof f == "object" && typeof f.then == "function")) {
          var p = f,
            v = u,
            w = v.tag
          if (!(v.mode & 1) && (w === 0 || w === 11 || w === 15)) {
            var S = v.alternate
            S ? ((v.updateQueue = S.updateQueue), (v.memoizedState = S.memoizedState), (v.lanes = S.lanes)) : ((v.updateQueue = null), (v.memoizedState = null))
          }
          var P = Pp(a)
          if (P !== null) {
            ;(P.flags &= -257), jp(P, a, u, o, t), P.mode & 1 && Np(o, p, t), (t = P), (f = p)
            var b = t.updateQueue
            if (b === null) {
              var O = new Set()
              O.add(f), (t.updateQueue = O)
            } else b.add(f)
            break e
          } else {
            if (!(t & 1)) {
              Np(o, p, t), Vc()
              break e
            }
            f = Error(B(426))
          }
        } else if (Ke && u.mode & 1) {
          var F = Pp(a)
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256), jp(F, a, u, o, t), bc(vi(f, u))
            break e
          }
        }
        ;(o = f = vi(f, u)), ut !== 4 && (ut = 2), Zi === null ? (Zi = [o]) : Zi.push(o), (o = a)
        do {
          switch (o.tag) {
            case 3:
              ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
              var g = Fg(o, f, t)
              Ep(o, g)
              break e
            case 1:
              u = f
              var h = o.type,
                y = o.stateNode
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" || (y !== null && typeof y.componentDidCatch == "function" && (sr === null || !sr.has(y))))
              ) {
                ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                var j = Hg(o, u, t)
                Ep(o, j)
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      sv(n)
    } catch (D) {
      ;(t = D), ot === n && n !== null && (ot = n = n.return)
      continue
    }
    break
  } while (1)
}
function iv() {
  var e = Js.current
  return (Js.current = qs), e === null ? qs : e
}
function Vc() {
  ;(ut === 0 || ut === 3 || ut === 2) && (ut = 4), ht === null || (!(Rr & 268435455) && !(ma & 268435455)) || Xn(ht, yt)
}
function ea(e, t) {
  var n = xe
  xe |= 2
  var r = iv()
  ;(ht !== e || yt !== t) && ((Pn = null), Or(e, t))
  do
    try {
      mw()
      break
    } catch (i) {
      rv(e, i)
    }
  while (1)
  if ((Cc(), (xe = n), (Js.current = r), ot !== null)) throw Error(B(261))
  return (ht = null), (yt = 0), ut
}
function mw() {
  for (; ot !== null; ) ov(ot)
}
function gw() {
  for (; ot !== null && !H0(); ) ov(ot)
}
function ov(e) {
  var t = lv(e.alternate, e, Ft)
  ;(e.memoizedProps = e.pendingProps), t === null ? sv(e) : (ot = t), (Fc.current = null)
}
function sv(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = uw(n, t)), n !== null)) {
        ;(n.flags &= 32767), (ot = n)
        return
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(ut = 6), (ot = null)
        return
      }
    } else if (((n = lw(n, t, Ft)), n !== null)) {
      ot = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      ot = t
      return
    }
    ot = t = e
  } while (t !== null)
  ut === 0 && (ut = 5)
}
function kr(e, t, n) {
  var r = je,
    i = en.transition
  try {
    ;(en.transition = null), (je = 1), vw(e, t, n, r)
  } finally {
    ;(en.transition = i), (je = r)
  }
  return null
}
function vw(e, t, n, r) {
  do fi()
  while (er !== null)
  if (xe & 6) throw Error(B(327))
  n = e.finishedWork
  var i = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(B(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var o = n.lanes | n.childLanes
  if (
    (J0(e, o),
    e === ht && ((ot = ht = null), (yt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      cs ||
      ((cs = !0),
      uv(Is, function () {
        return fi(), null
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ;(o = en.transition), (en.transition = null)
    var a = je
    je = 1
    var u = xe
    ;(xe |= 4), (Fc.current = null), fw(e, n), ev(n, e), D1(Eu), (Ds = !!Su), (Eu = Su = null), (e.current = n), dw(n), U0(), (xe = u), (je = a), (en.transition = o)
  } else e.current = n
  if ((cs && ((cs = !1), (er = e), (Zs = i)), (o = e.pendingLanes), o === 0 && (sr = null), V0(n.stateNode), Dt(e, nt()), t !== null))
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
  if (Xs) throw ((Xs = !1), (e = Wu), (Wu = null), e)
  return Zs & 1 && e.tag !== 0 && fi(), (o = e.pendingLanes), o & 1 ? (e === $u ? eo++ : ((eo = 0), ($u = e))) : (eo = 0), hr(), null
}
function fi() {
  if (er !== null) {
    var e = Bm(Zs),
      t = en.transition,
      n = je
    try {
      if (((en.transition = null), (je = 16 > e ? 16 : e), er === null)) var r = !1
      else {
        if (((e = er), (er = null), (Zs = 0), xe & 6)) throw Error(B(331))
        var i = xe
        for (xe |= 4, J = e.current; J !== null; ) {
          var o = J,
            a = o.child
          if (J.flags & 16) {
            var u = o.deletions
            if (u !== null) {
              for (var f = 0; f < u.length; f++) {
                var p = u[f]
                for (J = p; J !== null; ) {
                  var v = J
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xi(8, v, o)
                  }
                  var w = v.child
                  if (w !== null) (w.return = v), (J = w)
                  else
                    for (; J !== null; ) {
                      v = J
                      var S = v.sibling,
                        P = v.return
                      if ((Jg(v), v === p)) {
                        J = null
                        break
                      }
                      if (S !== null) {
                        ;(S.return = P), (J = S)
                        break
                      }
                      J = P
                    }
                }
              }
              var b = o.alternate
              if (b !== null) {
                var O = b.child
                if (O !== null) {
                  b.child = null
                  do {
                    var F = O.sibling
                    ;(O.sibling = null), (O = F)
                  } while (O !== null)
                }
              }
              J = o
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (J = a)
          else
            e: for (; J !== null; ) {
              if (((o = J), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Xi(9, o, o.return)
                }
              var g = o.sibling
              if (g !== null) {
                ;(g.return = o.return), (J = g)
                break e
              }
              J = o.return
            }
        }
        var h = e.current
        for (J = h; J !== null; ) {
          a = J
          var y = a.child
          if (a.subtreeFlags & 2064 && y !== null) (y.return = a), (J = y)
          else
            e: for (a = h; J !== null; ) {
              if (((u = J), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ha(9, u)
                  }
                } catch (D) {
                  et(u, u.return, D)
                }
              if (u === a) {
                J = null
                break e
              }
              var j = u.sibling
              if (j !== null) {
                ;(j.return = u.return), (J = j)
                break e
              }
              J = u.return
            }
        }
        if (((xe = i), hr(), bn && typeof bn.onPostCommitFiberRoot == "function"))
          try {
            bn.onPostCommitFiberRoot(sa, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(je = n), (en.transition = t)
    }
  }
  return !1
}
function Vp(e, t, n) {
  ;(t = vi(n, t)), (t = Fg(e, t, 1)), (e = or(e, t, 1)), (t = Nt()), e !== null && (ko(e, 1, t), Dt(e, t))
}
function et(e, t, n) {
  if (e.tag === 3) Vp(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Vp(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (typeof t.type.getDerivedStateFromError == "function" || (typeof r.componentDidCatch == "function" && (sr === null || !sr.has(r)))) {
          ;(e = vi(n, e)), (e = Hg(t, e, 1)), (t = or(t, e, 1)), (e = Nt()), t !== null && (ko(t, 1, e), Dt(t, e))
          break
        }
      }
      t = t.return
    }
}
function yw(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = Nt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ht === e && (yt & n) === n && (ut === 4 || (ut === 3 && (yt & 130023424) === yt && 500 > nt() - Uc) ? Or(e, 0) : (Hc |= n)),
    Dt(e, t)
}
function av(e, t) {
  t === 0 && (e.mode & 1 ? ((t = es), (es <<= 1), !(es & 130023424) && (es = 4194304)) : (t = 1))
  var n = Nt()
  ;(e = Fn(e, t)), e !== null && (ko(e, t, n), Dt(e, n))
}
function ww(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), av(e, n)
}
function _w(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState
      i !== null && (n = i.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(B(314))
  }
  r !== null && r.delete(t), av(e, n)
}
var lv
lv = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || It.current) Lt = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Lt = !1), aw(e, t, n)
      Lt = !!(e.flags & 131072)
    }
  else (Lt = !1), Ke && t.flags & 1048576 && fg(t, $s, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      Ss(e, t), (e = t.pendingProps)
      var i = pi(t, kt.current)
      ci(t, n), (i = Ic(null, t, r, e, i, n))
      var o = Mc()
      return (
        (t.flags |= 1),
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Mt(r) ? ((o = !0), Us(t)) : (o = !1),
            (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
            Nc(t),
            (i.updater = da),
            (t.stateNode = i),
            (i._reactInternals = t),
            ju(t, r, e, n),
            (t = Iu(null, t, r, !0, o, n)))
          : ((t.tag = 0), Ke && o && Ec(t), Tt(null, t, i, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch ((Ss(e, t), (e = t.pendingProps), (i = r._init), (r = i(r._payload)), (t.type = r), (i = t.tag = Sw(r)), (e = cn(r, e)), i)) {
          case 0:
            t = Lu(null, t, r, e, n)
            break e
          case 1:
            t = Ip(null, t, r, e, n)
            break e
          case 11:
            t = Rp(null, t, r, e, n)
            break e
          case 14:
            t = Lp(null, t, r, cn(r.type, e), n)
            break e
        }
        throw Error(B(306, r, ""))
      }
      return t
    case 0:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : cn(r, i)), Lu(e, t, r, i, n)
    case 1:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : cn(r, i)), Ip(e, t, r, i, n)
    case 3:
      e: {
        if ((Vg(t), e === null)) throw Error(B(387))
        ;(r = t.pendingProps), (o = t.memoizedState), (i = o.element), mg(e, t), Ys(t, r, null, n)
        var a = t.memoizedState
        if (((r = a.element), o.isDehydrated))
          if (
            ((o = { element: r, isDehydrated: !1, cache: a.cache, pendingSuspenseBoundaries: a.pendingSuspenseBoundaries, transitions: a.transitions }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ;(i = vi(Error(B(423)), t)), (t = Mp(e, t, r, n, i))
            break e
          } else if (r !== i) {
            ;(i = vi(Error(B(424)), t)), (t = Mp(e, t, r, n, i))
            break e
          } else
            for (Ht = ir(t.stateNode.containerInfo.firstChild), Ut = t, Ke = !0, dn = null, n = wg(t, null, r, n), t.child = n; n; )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((hi(), r === i)) {
            t = Hn(e, t, n)
            break e
          }
          Tt(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        _g(t),
        e === null && Tu(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        ku(r, i) ? (a = null) : o !== null && ku(r, o) && (t.flags |= 32),
        $g(e, t),
        Tt(e, t, a, n),
        t.child
      )
    case 6:
      return e === null && Tu(t), null
    case 13:
      return Qg(e, t, n)
    case 4:
      return Pc(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = mi(t, null, r, n)) : Tt(e, t, r, n), t.child
    case 11:
      return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : cn(r, i)), Rp(e, t, r, i, n)
    case 7:
      return Tt(e, t, t.pendingProps, n), t.child
    case 8:
      return Tt(e, t, t.pendingProps.children, n), t.child
    case 12:
      return Tt(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (((r = t.type._context), (i = t.pendingProps), (o = t.memoizedProps), (a = i.value), Ue(Vs, r._currentValue), (r._currentValue = a), o !== null))
          if (mn(o.value, a)) {
            if (o.children === i.children && !It.current) {
              t = Hn(e, t, n)
              break e
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies
              if (u !== null) {
                a = o.child
                for (var f = u.firstContext; f !== null; ) {
                  if (f.context === r) {
                    if (o.tag === 1) {
                      ;(f = Mn(-1, n & -n)), (f.tag = 2)
                      var p = o.updateQueue
                      if (p !== null) {
                        p = p.shared
                        var v = p.pending
                        v === null ? (f.next = f) : ((f.next = v.next), (v.next = f)), (p.pending = f)
                      }
                    }
                    ;(o.lanes |= n), (f = o.alternate), f !== null && (f.lanes |= n), Nu(o.return, n, t), (u.lanes |= n)
                    break
                  }
                  f = f.next
                }
              } else if (o.tag === 10) a = o.type === t.type ? null : o.child
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error(B(341))
                ;(a.lanes |= n), (u = a.alternate), u !== null && (u.lanes |= n), Nu(a, n, t), (a = o.sibling)
              } else a = o.child
              if (a !== null) a.return = o
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null
                    break
                  }
                  if (((o = a.sibling), o !== null)) {
                    ;(o.return = a.return), (a = o)
                    break
                  }
                  a = a.return
                }
              o = a
            }
        Tt(e, t, i.children, n), (t = t.child)
      }
      return t
    case 9:
      return (i = t.type), (r = t.pendingProps.children), ci(t, n), (i = nn(i)), (r = r(i)), (t.flags |= 1), Tt(e, t, r, n), t.child
    case 14:
      return (r = t.type), (i = cn(r, t.pendingProps)), (i = cn(r.type, i)), Lp(e, t, r, i, n)
    case 15:
      return Ug(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : cn(r, i)),
        Ss(e, t),
        (t.tag = 1),
        Mt(r) ? ((e = !0), Us(t)) : (e = !1),
        ci(t, n),
        vg(t, r, i),
        ju(t, r, i, n),
        Iu(null, t, r, !0, e, n)
      )
    case 19:
      return Yg(e, t, n)
    case 22:
      return Wg(e, t, n)
  }
  throw Error(B(156, t.tag))
}
function uv(e, t) {
  return Im(e, t)
}
function Aw(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function Zt(e, t, n, r) {
  return new Aw(e, t, n, r)
}
function Qc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function Sw(e) {
  if (typeof e == "function") return Qc(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === fc)) return 11
    if (e === dc) return 14
  }
  return 2
}
function lr(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Zt(e.tag, t, e.key, e.mode)), (n.elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function bs(e, t, n, r, i, o) {
  var a = 2
  if (((r = e), typeof e == "function")) Qc(e) && (a = 1)
  else if (typeof e == "string") a = 5
  else
    e: switch (e) {
      case Yr:
        return Tr(n.children, i, o, t)
      case cc:
        ;(a = 8), (i |= 8)
        break
      case nu:
        return (e = Zt(12, n, t, i | 2)), (e.elementType = nu), (e.lanes = o), e
      case ru:
        return (e = Zt(13, n, t, i)), (e.elementType = ru), (e.lanes = o), e
      case iu:
        return (e = Zt(19, n, t, i)), (e.elementType = iu), (e.lanes = o), e
      case ym:
        return ga(n, i, o, t)
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case gm:
              a = 10
              break e
            case vm:
              a = 9
              break e
            case fc:
              a = 11
              break e
            case dc:
              a = 14
              break e
            case Gn:
              ;(a = 16), (r = null)
              break e
          }
        throw Error(B(130, e == null ? e : typeof e, ""))
    }
  return (t = Zt(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
}
function Tr(e, t, n, r) {
  return (e = Zt(7, e, r, t)), (e.lanes = n), e
}
function ga(e, t, n, r) {
  return (e = Zt(22, e, r, t)), (e.elementType = ym), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e
}
function Ul(e, t, n) {
  return (e = Zt(6, e, null, t)), (e.lanes = n), e
}
function Wl(e, t, n) {
  return (
    (t = Zt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  )
}
function Ew(e, t, n, r, i) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = El(0)),
    (this.expirationTimes = El(-1)),
    (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
    (this.entanglements = El(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function Yc(e, t, n, r, i, o, a, u, f) {
  return (
    (e = new Ew(e, t, n, u, f)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Zt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
    Nc(o),
    e
  )
}
function kw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return { $$typeof: Qr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n }
}
function cv(e) {
  if (!e) return fr
  e = e._reactInternals
  e: {
    if (Mr(e) !== e || e.tag !== 1) throw Error(B(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (Mt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(B(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (Mt(n)) return ug(e, n, t)
  }
  return t
}
function fv(e, t, n, r, i, o, a, u, f) {
  return (
    (e = Yc(n, r, !0, e, i, o, a, u, f)),
    (e.context = cv(null)),
    (n = e.current),
    (r = Nt()),
    (i = ar(n)),
    (o = Mn(r, i)),
    (o.callback = t ?? null),
    or(n, o, i),
    (e.current.lanes = i),
    ko(e, i, r),
    Dt(e, r),
    e
  )
}
function va(e, t, n, r) {
  var i = t.current,
    o = Nt(),
    a = ar(i)
  return (
    (n = cv(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Mn(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = or(i, t, a)),
    e !== null && (hn(e, i, a, o), ws(e, i, a)),
    a
  )
}
function ta(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function Qp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Kc(e, t) {
  Qp(e, t), (e = e.alternate) && Qp(e, t)
}
function bw() {
  return null
}
var dv =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e)
      }
function Gc(e) {
  this._internalRoot = e
}
ya.prototype.render = Gc.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(B(409))
  va(e, t, null, null)
}
ya.prototype.unmount = Gc.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Lr(function () {
      va(null, e, null, null)
    }),
      (t[Bn] = null)
  }
}
function ya(e) {
  this._internalRoot = e
}
ya.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Um()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < Jn.length && t !== 0 && t < Jn[n].priority; n++);
    Jn.splice(n, 0, e), n === 0 && $m(e)
  }
}
function qc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function wa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")))
}
function Yp() {}
function xw(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r
      r = function () {
        var p = ta(a)
        o.call(p)
      }
    }
    var a = fv(t, r, e, 0, null, !1, !1, "", Yp)
    return (e._reactRootContainer = a), (e[Bn] = a.current), fo(e.nodeType === 8 ? e.parentNode : e), Lr(), a
  }
  for (; (i = e.lastChild); ) e.removeChild(i)
  if (typeof r == "function") {
    var u = r
    r = function () {
      var p = ta(f)
      u.call(p)
    }
  }
  var f = Yc(e, 0, !1, null, null, !1, !1, "", Yp)
  return (
    (e._reactRootContainer = f),
    (e[Bn] = f.current),
    fo(e.nodeType === 8 ? e.parentNode : e),
    Lr(function () {
      va(t, f, n, r)
    }),
    f
  )
}
function _a(e, t, n, r, i) {
  var o = n._reactRootContainer
  if (o) {
    var a = o
    if (typeof i == "function") {
      var u = i
      i = function () {
        var f = ta(a)
        u.call(f)
      }
    }
    va(t, a, e, i)
  } else a = xw(n, t, e, i, r)
  return ta(a)
}
Fm = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = $i(t.pendingLanes)
        n !== 0 && (mc(t, n | 1), Dt(t, nt()), !(xe & 6) && ((yi = nt() + 500), hr()))
      }
      break
    case 13:
      Lr(function () {
        var r = Fn(e, 1)
        if (r !== null) {
          var i = Nt()
          hn(r, e, 1, i)
        }
      }),
        Kc(e, 1)
  }
}
gc = function (e) {
  if (e.tag === 13) {
    var t = Fn(e, 134217728)
    if (t !== null) {
      var n = Nt()
      hn(t, e, 134217728, n)
    }
    Kc(e, 134217728)
  }
}
Hm = function (e) {
  if (e.tag === 13) {
    var t = ar(e),
      n = Fn(e, t)
    if (n !== null) {
      var r = Nt()
      hn(n, e, t, r)
    }
    Kc(e, t)
  }
}
Um = function () {
  return je
}
Wm = function (e, t) {
  var n = je
  try {
    return (je = e), t()
  } finally {
    je = n
  }
}
hu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((au(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var i = ca(r)
            if (!i) throw Error(B(90))
            _m(r), au(r, i)
          }
        }
      }
      break
    case "textarea":
      Sm(e, n)
      break
    case "select":
      ;(t = n.value), t != null && si(e, !!n.multiple, t, !1)
  }
}
Tm = Wc
Nm = Lr
var Cw = { usingClientEntryPoint: !1, Events: [xo, Jr, ca, Cm, Om, Wc] },
  Fi = { findFiberByHostInstance: br, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
  Ow = {
    bundleType: Fi.bundleType,
    version: Fi.version,
    rendererPackageName: Fi.rendererPackageName,
    rendererConfig: Fi.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Un.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Rm(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Fi.findFiberByHostInstance || bw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var fs = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!fs.isDisabled && fs.supportsFiber)
    try {
      ;(sa = fs.inject(Ow)), (bn = fs)
    } catch {}
}
$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cw
$t.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!qc(t)) throw Error(B(200))
  return kw(e, t, null, n)
}
$t.createRoot = function (e, t) {
  if (!qc(e)) throw Error(B(299))
  var n = !1,
    r = "",
    i = dv
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Yc(e, 1, !1, null, null, n, !1, r, i)),
    (e[Bn] = t.current),
    fo(e.nodeType === 8 ? e.parentNode : e),
    new Gc(t)
  )
}
$t.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0) throw typeof e.render == "function" ? Error(B(188)) : ((e = Object.keys(e).join(",")), Error(B(268, e)))
  return (e = Rm(t)), (e = e === null ? null : e.stateNode), e
}
$t.flushSync = function (e) {
  return Lr(e)
}
$t.hydrate = function (e, t, n) {
  if (!wa(t)) throw Error(B(200))
  return _a(null, e, t, !0, n)
}
$t.hydrateRoot = function (e, t, n) {
  if (!qc(e)) throw Error(B(405))
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    a = dv
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = fv(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[Bn] = t.current),
    fo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [n, i]) : t.mutableSourceEagerHydrationData.push(n, i)
  return new ya(t)
}
$t.render = function (e, t, n) {
  if (!wa(t)) throw Error(B(200))
  return _a(null, e, t, !1, n)
}
$t.unmountComponentAtNode = function (e) {
  if (!wa(e)) throw Error(B(40))
  return e._reactRootContainer
    ? (Lr(function () {
        _a(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Bn] = null)
        })
      }),
      !0)
    : !1
}
$t.unstable_batchedUpdates = Wc
$t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!wa(n)) throw Error(B(200))
  if (e == null || e._reactInternals === void 0) throw Error(B(38))
  return _a(e, t, n, !1, r)
}
$t.version = "18.2.0-next-9e3b772b8-20220608"
function pv() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pv)
    } catch (e) {
      console.error(e)
    }
}
pv(), (fm.exports = $t)
var Tw = fm.exports,
  hv,
  Kp = Tw
;(hv = eu.createRoot = Kp.createRoot), (eu.hydrateRoot = Kp.hydrateRoot)
var mv = { exports: {} },
  gv = { exports: {} }
;(() => {
  var e = {
      d: (r, i) => {
        for (var o in i) e.o(i, o) && !e.o(r, o) && Object.defineProperty(r, o, { enumerable: !0, get: i[o] })
      },
      o: (r, i) => Object.prototype.hasOwnProperty.call(r, i),
      r: (r) => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(r, "__esModule", { value: !0 })
      },
    },
    t = {}
  e.r(t), e.d(t, { default: () => n })
  const n = function (r) {
    var i = r.condition,
      o = r.show,
      a = r.elseShow,
      u = function (p) {
        return typeof p == "function"
      },
      f = function (p) {
        return p() || (console.warn("Nothing was returned from your render function. Please make sure you are returning a valid React element."), null)
      }
    return i ? (u(o) ? f(o) : o) : !i && a ? (u(a) ? f(a) : a) : null
  }
  gv.exports = t
})()
var Nw = gv.exports
;(() => {
  var e = {
      n: (k) => {
        var m = k && k.__esModule ? () => k.default : () => k
        return e.d(m, { a: m }), m
      },
      d: (k, m) => {
        for (var M in m) e.o(m, M) && !e.o(k, M) && Object.defineProperty(k, M, { enumerable: !0, get: m[M] })
      },
      o: (k, m) => Object.prototype.hasOwnProperty.call(k, m),
      r: (k) => {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(k, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(k, "__esModule", { value: !0 })
      },
    },
    t = {}
  e.r(t), e.d(t, { Chatbot: () => Ze, createChatBotMessage: () => f, createClientMessage: () => v, createCustomMessage: () => p, default: () => W, useChatbot: () => Xe })
  const n = Cn
  var r = e.n(n)
  const i = Nw
  var o = e.n(i),
    a = function () {
      return (
        (a =
          Object.assign ||
          function (k) {
            for (var m, M = 1, C = arguments.length; M < C; M++) for (var T in (m = arguments[M])) Object.prototype.hasOwnProperty.call(m, T) && (k[T] = m[T])
            return k
          }),
        a.apply(this, arguments)
      )
    },
    u = function (k, m) {
      return { message: k, type: m, id: Math.round(Date.now() * Math.random()) }
    },
    f = function (k, m) {
      return a(a(a({}, u(k, "bot")), m), { loading: !0 })
    },
    p = function (k, m, M) {
      return a(a({}, u(k, m)), M)
    },
    v = function (k, m) {
      return a(a({}, u(k, "user")), m)
    },
    w = function (k) {
      for (var m = [], M = 1; M < arguments.length; M++) m[M - 1] = arguments[M]
      if (k) return k.apply(void 0, m)
    }
  function S() {
    return (
      (S =
        Object.assign ||
        function (k) {
          for (var m = 1; m < arguments.length; m++) {
            var M = arguments[m]
            for (var C in M) Object.prototype.hasOwnProperty.call(M, C) && (k[C] = M[C])
          }
          return k
        }),
      S.apply(this, arguments)
    )
  }
  const P = ({ styles: k = {}, ...m }) =>
      r().createElement(
        "svg",
        S({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, m),
        r().createElement("path", {
          d: "M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z",
        })
      ),
    b = function (k) {
      var m = k.message,
        M = k.customComponents
      return r().createElement(
        "div",
        { className: "react-chatbot-kit-user-chat-message-container" },
        r().createElement(o(), {
          condition: !!M.userChatMessage,
          show: w(M.userChatMessage, { message: m }),
          elseShow: r().createElement(
            "div",
            { className: "react-chatbot-kit-user-chat-message" },
            m,
            r().createElement("div", { className: "react-chatbot-kit-user-chat-message-arrow" })
          ),
        }),
        r().createElement(o(), {
          condition: !!M.userAvatar,
          show: w(M.userAvatar),
          elseShow: r().createElement(
            "div",
            { className: "react-chatbot-kit-user-avatar" },
            r().createElement("div", { className: "react-chatbot-kit-user-avatar-container" }, r().createElement(P, { className: "react-chatbot-kit-user-avatar-icon" }))
          ),
        })
      )
    },
    O = function () {
      return r().createElement(
        "div",
        { className: "react-chatbot-kit-chat-bot-avatar" },
        r().createElement(
          "div",
          { className: "react-chatbot-kit-chat-bot-avatar-container" },
          r().createElement("p", { className: "react-chatbot-kit-chat-bot-avatar-letter" }, "B")
        )
      )
    },
    F = function () {
      return r().createElement(
        "div",
        { className: "chatbot-loader-container" },
        r().createElement(
          "svg",
          { id: "dots", width: "50px", height: "21px", viewBox: "0 0 132 58", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
          r().createElement(
            "g",
            { stroke: "none", fill: "none" },
            r().createElement(
              "g",
              { id: "chatbot-loader", fill: "#fff" },
              r().createElement("circle", { id: "chatbot-loader-dot1", cx: "25", cy: "30", r: "13" }),
              r().createElement("circle", { id: "chatbot-loader-dot2", cx: "65", cy: "30", r: "13" }),
              r().createElement("circle", { id: "chatbot-loader-dot3", cx: "105", cy: "30", r: "13" })
            )
          )
        )
      )
    }
  var g = function () {
    return (
      (g =
        Object.assign ||
        function (k) {
          for (var m, M = 1, C = arguments.length; M < C; M++) for (var T in (m = arguments[M])) Object.prototype.hasOwnProperty.call(m, T) && (k[T] = m[T])
          return k
        }),
      g.apply(this, arguments)
    )
  }
  const h = function (k) {
    var m = k.message,
      M = k.withAvatar,
      C = M === void 0 || M,
      T = k.loading,
      z = k.messages,
      $ = k.customComponents,
      E = k.setState,
      ee = k.customStyles,
      I = k.delay,
      pe = k.id,
      se = (0, n.useState)(!1),
      te = se[0],
      Z = se[1]
    ;(0, n.useEffect)(
      function () {
        var ne
        return (
          (function (we, oe) {
            var de = 750
            I && (de += I),
              (ne = setTimeout(function () {
                var Te = (function (ue, Me, $e) {
                  if ($e || arguments.length === 2)
                    for (var ke, H = 0, ge = Me.length; H < ge; H++) (!ke && H in Me) || (ke || (ke = Array.prototype.slice.call(Me, 0, H)), (ke[H] = Me[H]))
                  return ue.concat(ke || Array.prototype.slice.call(Me))
                })([], we, !0).find(function (ue) {
                  return ue.id === pe
                })
                Te &&
                  ((Te.loading = !1),
                  (Te.delay = void 0),
                  oe(function (ue) {
                    var Me = ue.messages,
                      $e = Me.findIndex(function (ke) {
                        return ke.id === pe
                      })
                    return (Me[$e] = Te), g(g({}, ue), { messages: Me })
                  }))
              }, de))
          })(z, E),
          function () {
            clearTimeout(ne)
          }
        )
      },
      [I, pe]
    ),
      (0, n.useEffect)(
        function () {
          I
            ? setTimeout(function () {
                return Z(!0)
              }, I)
            : Z(!0)
        },
        [I]
      )
    var G = { backgroundColor: "" },
      Ce = { borderRightColor: "" }
    return (
      ee && ((G.backgroundColor = ee.backgroundColor), (Ce.borderRightColor = ee.backgroundColor)),
      r().createElement(o(), {
        condition: te,
        show: r().createElement(
          "div",
          { className: "react-chatbot-kit-chat-bot-message-container" },
          r().createElement(o(), {
            condition: C,
            show: r().createElement(o(), { condition: !!($ != null && $.botAvatar), show: w($ == null ? void 0 : $.botAvatar), elseShow: r().createElement(O, null) }),
          }),
          r().createElement(o(), {
            condition: !!($ != null && $.botChatMessage),
            show: w($ == null ? void 0 : $.botChatMessage, { message: m, loader: r().createElement(F, null) }),
            elseShow: r().createElement(
              "div",
              { className: "react-chatbot-kit-chat-bot-message", style: G },
              r().createElement(o(), { condition: T, show: r().createElement(F, null), elseShow: r().createElement("span", null, m) }),
              r().createElement(o(), { condition: C, show: r().createElement("div", { className: "react-chatbot-kit-chat-bot-message-arrow", style: Ce }) })
            ),
          })
        ),
      })
    )
  }
  function y() {
    return (
      (y =
        Object.assign ||
        function (k) {
          for (var m = 1; m < arguments.length; m++) {
            var M = arguments[m]
            for (var C in M) Object.prototype.hasOwnProperty.call(M, C) && (k[C] = M[C])
          }
          return k
        }),
      y.apply(this, arguments)
    )
  }
  const j = ({ styles: k = {}, ...m }) =>
    r().createElement(
      "svg",
      y({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, m),
      r().createElement("path", {
        d: "M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z",
      })
    )
  var D = function () {
      return (
        (D =
          Object.assign ||
          function (k) {
            for (var m, M = 1, C = arguments.length; M < C; M++) for (var T in (m = arguments[M])) Object.prototype.hasOwnProperty.call(m, T) && (k[T] = m[T])
            return k
          }),
        D.apply(this, arguments)
      )
    },
    Y = function (k, m, M) {
      if (M || arguments.length === 2) for (var C, T = 0, z = m.length; T < z; T++) (!C && T in m) || (C || (C = Array.prototype.slice.call(m, 0, T)), (C[T] = m[T]))
      return k.concat(C || Array.prototype.slice.call(m))
    }
  const K = function (k) {
      var m = k.state,
        M = k.setState,
        C = k.widgetRegistry,
        T = k.messageParser,
        z = k.parse,
        $ = k.customComponents,
        E = k.actionProvider,
        ee = k.botName,
        I = k.customStyles,
        pe = k.headerText,
        se = k.customMessages,
        te = k.placeholderText,
        Z = k.validator,
        G = k.setMessageContainerRef,
        Ce = k.disableScrollToBottom,
        ne = k.messageHistory,
        we = k.actions,
        oe = m.messages,
        de = (0, n.useRef)(null),
        Te = (0, n.useState)(""),
        ue = Te[0],
        Me = Te[1],
        $e = function () {
          setTimeout(function () {
            var le
            de.current && (de.current.scrollTop = (le = de == null ? void 0 : de.current) === null || le === void 0 ? void 0 : le.scrollHeight)
          }, 50)
        }
      ;(0, n.useEffect)(function () {
        Ce || $e()
      }),
        (0, n.useEffect)(
          function () {
            G(de)
          },
          [de.current]
        )
      var ke = function () {
          M(function (le) {
            return D(D({}, le), { messages: Y(Y([], le.messages, !0), [u(ue, "user")], !1) })
          }),
            $e(),
            Me("")
        },
        H = { backgroundColor: "" }
      I && I.chatButton && (H.backgroundColor = I.chatButton.backgroundColor)
      var ge = "Conversation with " + ee
      pe && (ge = pe)
      var Se = "Write your message here"
      return (
        te && (Se = te),
        r().createElement(
          "div",
          { className: "react-chatbot-kit-chat-container" },
          r().createElement(
            "div",
            { className: "react-chatbot-kit-chat-inner-container" },
            r().createElement(o(), {
              condition: !!$.header,
              show: $.header && $.header(E),
              elseShow: r().createElement("div", { className: "react-chatbot-kit-chat-header" }, ge),
            }),
            r().createElement(
              "div",
              { className: "react-chatbot-kit-chat-message-container", ref: de },
              r().createElement(o(), { condition: typeof ne == "string" && !!ne, show: r().createElement("div", { dangerouslySetInnerHTML: { __html: ne } }) }),
              oe.map(function (le, Ve) {
                return le.type === "bot"
                  ? r().createElement(
                      r().Fragment,
                      { key: le.id },
                      (function (_e, it) {
                        var gn
                        gn = _e.withAvatar
                          ? _e.withAvatar
                          : (function ($n, ft) {
                              if (ft === 0) return !0
                              var _t = $n[ft - 1]
                              return !(_t.type === "bot" && !_t.widget)
                            })(oe, it)
                        var Wn = D(D({}, _e), { setState: M, state: m, customComponents: $, widgetRegistry: C, messages: oe, actions: we })
                        if (_e.widget) {
                          var Ya = C.getWidget(Wn.widget, D(D({}, m), { scrollIntoView: $e, payload: _e.payload, actions: we }))
                          return r().createElement(
                            r().Fragment,
                            null,
                            r().createElement(h, D({ customStyles: I.botMessageBox, withAvatar: gn }, Wn, { key: _e.id })),
                            r().createElement(o(), { condition: !Wn.loading, show: Ya || null })
                          )
                        }
                        return r().createElement(
                          h,
                          D({ customStyles: I.botMessageBox, key: _e.id, withAvatar: gn }, Wn, { customComponents: $, messages: oe, setState: M })
                        )
                      })(le, Ve)
                    )
                  : le.type === "user"
                  ? r().createElement(
                      r().Fragment,
                      { key: le.id },
                      (function (_e) {
                        var it = C.getWidget(_e.widget, D(D({}, m), { scrollIntoView: $e, payload: _e.payload, actions: we }))
                        return r().createElement(r().Fragment, null, r().createElement(b, { message: _e.message, key: _e.id, customComponents: $ }), it || null)
                      })(le)
                    )
                  : (function (_e, it) {
                      return !!it[_e.type]
                    })(le, se)
                  ? r().createElement(
                      r().Fragment,
                      { key: le.id },
                      (function (_e) {
                        var it = se[_e.type],
                          gn = { setState: M, state: m, scrollIntoView: $e, actionProvider: E, payload: _e.payload, actions: we }
                        if (_e.widget) {
                          var Wn = C.getWidget(_e.widget, D(D({}, m), { scrollIntoView: $e, payload: _e.payload, actions: we }))
                          return r().createElement(r().Fragment, null, it(gn), Wn || null)
                        }
                        return it(gn)
                      })(le)
                    )
                  : void 0
              }),
              r().createElement("div", { style: { paddingBottom: "15px" } })
            ),
            r().createElement(
              "div",
              { className: "react-chatbot-kit-chat-input-container" },
              r().createElement(
                "form",
                {
                  className: "react-chatbot-kit-chat-input-form",
                  onSubmit: function (le) {
                    if ((le.preventDefault(), Z && typeof Z == "function")) {
                      if (Z(ue)) {
                        if ((ke(), z)) return z(ue)
                        T.parse(ue)
                      }
                    } else {
                      if ((ke(), z)) return z(ue)
                      T.parse(ue)
                    }
                  },
                },
                r().createElement("input", {
                  className: "react-chatbot-kit-chat-input",
                  placeholder: Se,
                  value: ue,
                  onChange: function (le) {
                    return Me(le.target.value)
                  },
                }),
                r().createElement(
                  "button",
                  { className: "react-chatbot-kit-chat-btn-send", style: H },
                  r().createElement(j, { className: "react-chatbot-kit-chat-btn-send-icon" })
                )
              )
            )
          )
        )
      )
    },
    V = function (k) {
      var m = k.message
      return r().createElement(
        "div",
        { className: "react-chatbot-kit-error" },
        r().createElement("h1", { className: "react-chatbot-kit-error-header" }, "Ooops. Something is missing."),
        r().createElement(
          "div",
          { className: "react-chatbot-kit-error-container" },
          r().createElement(h, { message: m, withAvatar: !0, loading: !1, id: 1, customStyles: { backgroundColor: "" }, messages: [] })
        ),
        r().createElement(
          "a",
          { href: "https://fredrikoseberg.github.io/react-chatbot-kit-docs/", rel: "noopener norefferer", target: "_blank", className: "react-chatbot-kit-error-docs" },
          "View the docs"
        )
      )
    }
  var ve = function (k) {
      return k.widgets ? k.widgets : []
    },
    re = function (k) {
      try {
        new k()
      } catch {
        return !1
      }
      return !0
    },
    Ie = function () {
      return (
        (Ie =
          Object.assign ||
          function (k) {
            for (var m, M = 1, C = arguments.length; M < C; M++) for (var T in (m = arguments[M])) Object.prototype.hasOwnProperty.call(m, T) && (k[T] = m[T])
            return k
          }),
        Ie.apply(this, arguments)
      )
    }
  const We = function (k, m) {
    var M = this
    ;(this.addWidget = function (C, T) {
      var z = C.widgetName,
        $ = C.widgetFunc,
        E = C.mapStateToProps,
        ee = C.props
      M[z] = { widget: $, props: ee, mapStateToProps: E, parentProps: Ie({}, T) }
    }),
      (this.getWidget = function (C, T) {
        var z = M[C]
        if (z) {
          var $,
            E = Ie(Ie(Ie(Ie({ scrollIntoView: T.scrollIntoView }, z.parentProps), typeof ($ = z.props) == "object" ? $ : {}), M.mapStateToProps(z.mapStateToProps, T)), {
              setState: M.setState,
              actionProvider: M.actionProvider || T.actions,
              actions: T.actions,
              state: T,
              payload: T.payload,
            })
          return z.widget(E) || null
        }
      }),
      (this.mapStateToProps = function (C, T) {
        if (C)
          return C.reduce(function (z, $) {
            return (z[$] = T[$]), z
          }, {})
      }),
      (this.setState = k),
      (this.actionProvider = m)
  }
  var Fe = function () {
      return (
        (Fe =
          Object.assign ||
          function (k) {
            for (var m, M = 1, C = arguments.length; M < C; M++) for (var T in (m = arguments[M])) Object.prototype.hasOwnProperty.call(m, T) && (k[T] = m[T])
            return k
          }),
        Fe.apply(this, arguments)
      )
    },
    st = function (k, m, M) {
      if (M || arguments.length === 2) for (var C, T = 0, z = m.length; T < z; T++) (!C && T in m) || (C || (C = Array.prototype.slice.call(m, 0, T)), (C[T] = m[T]))
      return k.concat(C || Array.prototype.slice.call(m))
    }
  const Xe = function (k) {
    var m = k.config,
      M = k.actionProvider,
      C = k.messageParser,
      T = k.messageHistory,
      z = k.runInitialMessagesWithHistory,
      $ = k.saveMessages,
      E = (function (H, ge) {
        var Se = {}
        for (var le in H) Object.prototype.hasOwnProperty.call(H, le) && ge.indexOf(le) < 0 && (Se[le] = H[le])
        if (H != null && typeof Object.getOwnPropertySymbols == "function") {
          var Ve = 0
          for (le = Object.getOwnPropertySymbols(H); Ve < le.length; Ve++)
            ge.indexOf(le[Ve]) < 0 && Object.prototype.propertyIsEnumerable.call(H, le[Ve]) && (Se[le[Ve]] = H[le[Ve]])
        }
        return Se
      })(k, ["config", "actionProvider", "messageParser", "messageHistory", "runInitialMessagesWithHistory", "saveMessages"]),
      ee = "",
      I = ""
    if (!m || !M || !C)
      return { configurationError: (ee = "I think you forgot to feed me some props. Did you remember to pass a config, a messageparser and an actionprovider?") }
    var pe = (function (H, ge) {
      var Se = []
      return H.initialMessages || Se.push("Config must contain property 'initialMessages', and it expects it to be an array of chatbotmessages."), Se
    })(m)
    if (pe.length)
      return {
        invalidPropsError: (I = pe.reduce(function (H, ge) {
          return H + ge
        }, "")),
      }
    var se = (0, n.useState)({}),
      te = se[0],
      Z = se[1],
      G = (function (H) {
        return H.state ? H.state : {}
      })(m)
    T && Array.isArray(T) ? (m.initialMessages = st([], T, !0)) : typeof T == "string" && T && (z || (m.initialMessages = []))
    var Ce,
      ne,
      we,
      oe = r().useState(Fe({ messages: st([], m.initialMessages, !0) }, G)),
      de = oe[0],
      Te = oe[1],
      ue = r().useRef(de.messages),
      Me = r().useRef()
    ;(0, n.useEffect)(function () {
      ue.current = de.messages
    }),
      (0, n.useEffect)(function () {
        T &&
          Array.isArray(T) &&
          Te(function (H) {
            return Fe(Fe({}, H), { messages: T })
          })
      }, []),
      (0, n.useEffect)(
        function () {
          return function () {
            var H
            if ($ && typeof $ == "function") {
              var ge = (H = te == null ? void 0 : te.current) === null || H === void 0 ? void 0 : H.innerHTML.toString()
              if (!te.current) return
              $(ue.current, ge)
            }
          }
        },
        [te.current]
      ),
      (0, n.useEffect)(
        function () {
          Me.current = de
        },
        [de]
      )
    var $e = M,
      ke = C
    return (
      re($e) && re(ke)
        ? ((Ce = new M(f, Te, v, Me.current, p, E)),
          (ne = new We(Te, Ce)),
          (we = new C(Ce, Me.current)),
          ve(m).forEach(function (H) {
            return ne == null ? void 0 : ne.addWidget(H, E)
          }))
        : ((Ce = M),
          (we = C),
          (ne = new We(Te, null)),
          ve(m).forEach(function (H) {
            return ne == null ? void 0 : ne.addWidget(H, E)
          })),
      {
        widgetRegistry: ne,
        actionProv: Ce,
        messagePars: we,
        configurationError: ee,
        invalidPropsError: I,
        state: de,
        setState: Te,
        setMessageContainerRef: Z,
        ActionProvider: $e,
        MessageParser: ke,
      }
    )
  }
  var rt = function () {
    return (
      (rt =
        Object.assign ||
        function (k) {
          for (var m, M = 1, C = arguments.length; M < C; M++) for (var T in (m = arguments[M])) Object.prototype.hasOwnProperty.call(m, T) && (k[T] = m[T])
          return k
        }),
      rt.apply(this, arguments)
    )
  }
  const Ze = function (k) {
      var m = k.actionProvider,
        M = k.messageParser,
        C = k.config,
        T = k.headerText,
        z = k.placeholderText,
        $ = k.saveMessages,
        E = k.messageHistory,
        ee = k.runInitialMessagesWithHistory,
        I = k.disableScrollToBottom,
        pe = k.validator,
        se = (function (Se, le) {
          var Ve = {}
          for (var _e in Se) Object.prototype.hasOwnProperty.call(Se, _e) && le.indexOf(_e) < 0 && (Ve[_e] = Se[_e])
          if (Se != null && typeof Object.getOwnPropertySymbols == "function") {
            var it = 0
            for (_e = Object.getOwnPropertySymbols(Se); it < _e.length; it++)
              le.indexOf(_e[it]) < 0 && Object.prototype.propertyIsEnumerable.call(Se, _e[it]) && (Ve[_e[it]] = Se[_e[it]])
          }
          return Ve
        })(k, [
          "actionProvider",
          "messageParser",
          "config",
          "headerText",
          "placeholderText",
          "saveMessages",
          "messageHistory",
          "runInitialMessagesWithHistory",
          "disableScrollToBottom",
          "validator",
        ]),
        te = Xe(rt({ config: C, actionProvider: m, messageParser: M, messageHistory: E, saveMessages: $, runInitialMessagesWithHistory: ee }, se)),
        Z = te.configurationError,
        G = te.invalidPropsError,
        Ce = te.ActionProvider,
        ne = te.MessageParser,
        we = te.widgetRegistry,
        oe = te.actionProv,
        de = te.messagePars,
        Te = te.state,
        ue = te.setState,
        Me = te.setMessageContainerRef
      if (Z) return r().createElement(V, { message: Z })
      if (G.length) return r().createElement(V, { message: G })
      var $e = (function (Se) {
          return Se.customStyles ? Se.customStyles : {}
        })(C),
        ke = (function (Se) {
          return Se.customComponents ? Se.customComponents : {}
        })(C),
        H = (function (Se) {
          return Se.botName ? Se.botName : "Bot"
        })(C),
        ge = (function (Se) {
          return Se.customMessages ? Se.customMessages : {}
        })(C)
      return re(Ce) && re(ne)
        ? r().createElement(K, {
            state: Te,
            setState: ue,
            widgetRegistry: we,
            actionProvider: oe,
            messageParser: de,
            customMessages: ge,
            customComponents: rt({}, ke),
            botName: H,
            customStyles: rt({}, $e),
            headerText: T,
            placeholderText: z,
            setMessageContainerRef: Me,
            validator: pe,
            messageHistory: E,
            disableScrollToBottom: I,
          })
        : r().createElement(
            Ce,
            { setState: ue, createChatBotMessage: f },
            r().createElement(
              ne,
              null,
              r().createElement(K, {
                state: Te,
                setState: ue,
                widgetRegistry: we,
                actionProvider: Ce,
                messageParser: ne,
                customMessages: ge,
                customComponents: rt({}, ke),
                botName: H,
                customStyles: rt({}, $e),
                headerText: T,
                placeholderText: z,
                setMessageContainerRef: Me,
                validator: pe,
                messageHistory: E,
                disableScrollToBottom: I,
              })
            )
          )
    },
    W = Ze
  mv.exports = t
})()
var vv = mv.exports
const Pw = nc(vv),
  jw =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJPSURBVHgBtZYxb9NAFMf/5zQQUQlFQmR2FlREaJMJNhrmVrhbN8zCUJZ2YkFKI/EBKr4AZUDqFqOyp/0EDSUSEgO4CxJBAncAIUp9fc92m7RJ7PPF/UtOfLrn+/k9v7v3BFS08HEeBiwI8YBGJl3FaMajqwMpP8CHg/d3d5KWErGzi/s2DKMRQVTkwveb2J7dRCqgtWdC5lt0V4WeXIijOpyae3HCGDJd6j4m2N4EMJYZrLGwb12cOO8hG+SMFrKUARutypthYBhG9qyIbOVReGun4e2HVObblwBDsGaYD+gDORvVM1FH1YgRAcPUT63VxRuwHyoGJWIIWLSppWhDQ7/ezqA4ncP6Vg/NrR/JDxzLeg63VlbpBLkPDX33/sO6dx3zlelgvNv9E/+AwGEOM8+eQ/P7db7+xUHvSB0qjAIBVzbotgBNpYQWphCzFTgp5spXoSK39w9m6QrWl0s4/H2Mje2fo8yKU3GLNJZvBkmRVuztGCAYyCVmpJe1tS8UpmtIEnvGL8dyKbz2q2/jTD2BR92JDmqzlEf7pRlAGVZ/4QbhHSkpdw3+gaZSwUJ1DDprHGgqJQzcFRCO2wLhQktCHcYMakHCLBWyCYnXSKny08/qxszAYD2cMHkSaC7e3SnzXb8eitwSwi2StagAG/XTQR/o3KbGB2vIWsJ/Eqw9BAyglU0yyMpTL4TNntsFY9rET9Tf+FQjpQk9dYJPNOBZPPAM3LWpODfUwZQcnI0cqXEWUBF3BT64x6xSsZ7DYKsv5QH97wQHiJPc6p8AkC3YywtpqaYAAAAASUVORK5CYII=",
  Jc =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB0SURBVHgB7dLhCYAgEAXgZzTIrdImbdQqbSBNIE1gKzSBPeF+hBAWFv25Dx6K4h2ogDGmKqU0MYGR05owPu+hlRbKohYWnWcBrYqCsZgL3lA0eVS8w98+vyL9QVeP7Gvn+xs9FmZnRufcpk0HDjOzwhhTdQCfHqinOECZIwAAAABJRU5ErkJggg==",
  ii =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABmJLR0QA/wD/AP+gvaeTAAAIVElEQVR42u1dCWxURRh+HHJFgwgeYBCPiHjFGDRqFIIRJVC6R2G5FTwCAQTkDF4ExABRIJwqIqhVDhFQQERAQAoChnK0b99u7/uA3tvS0nPH+d9u63a7x9vZf95e/smkDW1n3vv2n/m//5gfQQik6BPuErTGYYJWnE2/bqbjT0ErJQoaYzr9voyOOvsos/0b/ZlWPC7/rk6aJejE1wTD5TuFiJHo+G5CtKSlQKy3gWG00kH8HDBHAgV0naCRNILhXNfwAm0paS/opZeoBm2hL2pBAMzboGtIsfRrtGDY0yF0gRuS2YW+xAz6MhkqgOZ6wLbXidOF4amdQ2ubasUF9AUKAgZc21FAt/c8+dmCWmDbaI2ZQQSc88ilO2J08AGnM99Pt8uhIAbOeRygxuy+IAHPpLNTDhJiw0LPxzGBAw4OZpmOhBxwzoZmi/pGRm/uSQ3F+ZAH779xVjBId6gDniapj50EkzAbJqoUfTlTlMQBdKGcMASveWQLmoRH+IA38uq9dIGsMAbPPqQ8IcbUj8OZByoe7uC1DAnvTJStbVgZDKXjbxzrrDVuikDwmrfzej/Bo25PxILXzBPFGHb3TCtVRDyAWmM5m1HRGg+q/bC3xEjksXdTyYNTU4ILRJ3xVxb/VpWH6/NmEpm7rZAcu1JFauqaSGOTlfSfnhKMmhjtQzyPP997flE6+eVCpQyYo/z4V0WwGpQMZekCjbiQ54M8QLfnvnMW4koAzAEzU/3SZs5b+T0FnM+Yz+sB3tqYT6puNhF3sjOOXfuGfJhJqmubyOythaSdjmNkG1IVHgzHDF7GYdvxMuJJYCeDAWGZHwC7mFrTMtcu+kF0NZh4beVp7rNnHBJA8CJHqYHwJrvPsGvfxLW5beaLk6rJrWO5gJgmCKSdi7PP+DIPzTtyyTt4oH2Pz2LTvi4GiWQV1buc97SxWv45Prk2DXaxfcXt2At9caSUKJE9Zy3MayyOveZx7thT5Ty0cGtr8MA8I3sdE9bkKgLPSrXvydlpTGv0et1MKqobva4xdXM+fj6lFaWRyy3wFrhnShIprWpUBODec+zat+E3ZRpeWdNE+r2TjO0jRzkGDVCTQ994sbiO2vfUHDbte2haCqlrsBKl4o+RcgPgakcA0XIcQISdvQt3Ap4I6zruyLinD2vgvHRMEK84lphZsSb+UqHhgBd6Zj7bC72wKEP+e18F2U1sEqKTewm2+jycSbuNMXn0NBzlwD+VzKT5QnINYRHY8mB48EA0DRXsxY0oE475LIf7dhr7eS7xR8CdRNTCmYK9MhRlwm9PlCt6iUMX2c++VfuKZd7oyziZeKNl7f3nLYgAihsEe8ksyoTp1+oUAfjsgnTVwlDgiZw1VbesnVdSjzn/UQBQxJjstnEmRQf74fgq1cCD8xICC87Sewpa2CtBwAqePj03TZH2PbdQPe1b/lORy2cAK44WZKXflGJMNmxpllfwILCgFnjjVue63RHaFdlY6xQL9msEfk8Ws8q7Bcb75L0HVz15KW+sy8Naq1Y1ACEmqAZ44OIVWzz74UCFMAFE2cJDl2R6fOgXF/PXPiDJqQXemYAOeQujGJEnaEDUnRy/eoM7eJ1HS+SMA13xJKwupBsjgkNjgG+5CyLkFNeT+LQanwcEZJXSlR2nKxR7I7dPMGPSGDwiLeXUEkwZ8UmWonWX7S5SPCd8mMhEGs+V2/x7KRp4l9JuKkpPeqIrruS7E+XorhxaMAE0BkuiP/V+0A/+IMOnoCoIAI4dTEALZ3WkWbiCsga/wbuc7l37oACpyOLbWpbqJjnkhhvOgvu2iAHVlXuL/QbQG83oOclMUvLrfJ5XqVFSHFCF0mfskD5wMaVBVVciZteS9h60r9MoqVV4SqnUN1rluhxEAC87lLPRy8qInGzFz+xaOIp6NJ7oyg+nypnm3XS4FJd7tkoqwU1vxMnhnEkrrEPXvqW7ipjAu17RQHpMNCOTd9MIrol1cOiVZueaBVIC7uabtDaPKZEEfxO1PBsZPIpVm1pBnbQN272at71Q8YsCCXenfYPezyC19VYm7YPjhIPr+LWLsl5xCA8fVWl9zHg3/OxhWu5bUtnIBB6cl3xqBaVBrsvbbO1G0MPqcIB7EnNuLemgl1zSlWQGugLy/clyuTqMg1Kkui5vs2nhdF7Rkvl0Ozc0ut6GcL65oitQnsZy5kEon1uVqk6aGrASXzAsGU6ZOyDEztoHLx/LQFcKqRc0fFkWz7BZrvfrXzppPs+4HVAcyO3ClQaQyevbat+Sndd9rjhYd7CEdB9v5hx3pHEDhdccuHfeuHtyEvlox3XZf3auK1RKV6CEDoDr+3ayGumCNM8F5q21cHgg7mJAme8ND24g0EowKl/9UUb0K3PkKLSKd+aifL3qdSAQIILxeJSWyMF5CSEtSEG+8nGmDK6qgLWmLfsZrvfTvipw0e7/y4Zl7L0U9OJIzFBXCA767qLe3zvD6yMYwLVIV/7p9ffIAy+O9k3ohNM3wRDfnbp5VyMIPCN+I56IaXtCvQ1ujcmgKQ00pwnnxjt6c3++3YtiTL3ljHw49orh3vqp5Uyk50N4GZY4ISqxh8o9Uk91pAuvCnGeaJVpGpq1ZWpIJt+zC80GjBrJEBxdLKGvSoB8Z2bfVrXzzmfXL4Btj5W0RfY5qqK2QLoPultAG7lg4nYacY7yeF4wiK3H6jQ5EBk44FLlHEZAjQRKp9/EgfagRIkK51uFrRU8VE65y56Fcnt4OIMgygH3baHCCaNKCgp9dMY1crlFSG1TvykQvW+rEV+VCxV1xo10ux2Tgxa2/HSpw3+HUWozAHJA46j8u/A3oGUtJWaBkX8B4vKfjYdQOPAAAAAASUVORK5CYII="
function Rw() {
  const e = () => {
      document.querySelector(".app-chatbot-container").classList.toggle("d-none")
    },
    t = () => {
      document.querySelector(".react-chatbot-kit-chat-container").classList.toggle("d-none"),
        document.querySelector(".react-chatbot-kit-chat-header").classList.toggle("d-none"),
        document.querySelector(".message-history-container").classList.toggle("d-none")
    }
  return x.jsx(x.Fragment, {
    children: x.jsxs("div", {
      className: "react-chatbot-kit-chat-header",
      children: [
        x.jsxs("div", {
          className: "d-flex justify-content-around align-items-center mt-1 mb-4",
          children: [
            x.jsx("div", {
              children: x.jsxs("div", {
                className: "status-indicator-container",
                children: [x.jsx("img", { src: ii, className: "w-75 h-75" }), x.jsx("div", { className: "status-indicator status-online" })],
              }),
            }),
            x.jsxs("div", {
              children: [
                x.jsx("div", { className: "fw-bolder", children: "Hi! This is WIZ" }),
                x.jsx("div", { className: "fw-light", children: "Wiz Kid is ready to help you! Lets get started!" }),
              ],
            }),
            x.jsx("div", { children: x.jsx("img", { src: Jc, alt: "", className: "action-button cross-icon", onClick: e }) }),
          ],
        }),
        x.jsxs("div", {
          className: "header-message-history-container d-flex justify-content-between align-items-center py-2 px-3",
          children: [x.jsx("div", { children: "Message History" }), x.jsx("img", { src: jw, alt: "", className: "action-button", onClick: t })],
        }),
      ],
    }),
  })
}
const Lw =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG2SURBVHgBtVVLTsMwEJ1xCutugSL1CL0BEy4AnIBWVVlzg6Y3YIdEG1JOUHqB1hyBE1SCNmxZg+LBTiRo08T5SDzJkq15z2N7PgaoABqvb82oohFVyIjiAoS4rKKp5KAOdhxQ8NGmh3U3j8yo5gLUc56d/HWX7lftXAegIkJHBORvhlkbyH7rbqFHlu1caxBEAM4BgQ2a6Ll+yDTZlH5rw401Wpu27cVg0T/xmPkKnC8JZaG5RiO1Nm3CMnoavxOgM0SEjl42mUGCUk/ypjUt0hY6MG/LgF6WjYE9feoR1HVgsiIOnAWsIlcOTmWe3VoHyOIaiuA4Q5u5EZe+qdDkOHM52EpDBIICIHNne53eT5g76OChGWL/Pp9QCGzuLFP7WWPgPoZLHUmycRjgRfaPcznWGHAUWTMkRqSmNrPVgckOBM51otN0VFQL5QotSdeunp5BEpdXVujJwZGEOjC9hYJVszRfc2nyltm79p4o7oqIM4gOCcpCcxEbs7wu/HcS/RR5XbEIv1049Z/s3kA4kiPVy+qK8QEsf3LchUH1IPqWUBfuJFySH8oqmn//kxtVyMmfXA0/Eh65/zkYjVsAAAAASUVORK5CYII=",
  Iw =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAUCAYAAABroNZJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAErSURBVHgBndPBVcJAEAbg+ZM83/NmB3IMN6jAcJDQhdIBViBWQAliBzlGL2gFesNwETvgJA/N7rgb0Jen7CRkLrtJ5n07k0yIagTPB62v+SByPfeoBsDgWU60dOVABJ6jEz4+mhWnhQ9dalLJFkCHNT9JeU5EZfGtBYok+AkJsbcdtYgn0DT6PSm8x0GVqKx/XQaI5Vb+IQXAGJfvMSOpQiABO+bFpK1cQJ7rqwJRr/HIbCZ0YGjGMGinUy/P+hdNANPmjQXsPvC1927WnjOZeGqaPv0L+O10/HMtT+x25N8kwIY4sYpUVAVUIiBEJeBuH2AjIAkBznZa4ofppSvPWQkvzu1/07Jzgo/NkIRwIlp7kVmWWH/20H1cNULMS+hsGJWAGGvzeevmfgOh53l6b6jUdAAAAABJRU5ErkJggg==",
  Mw =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAATCAYAAAB/TkaLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFTSURBVHgBrVQxUoNAFP1/A7KYGYfcgC5tvAGldtppZXKCeAOTE+gNYocdJXax9xBaWxhm1IjOJN9dhjA7yLIk4TUsu++/ecv7HwQDFrPIc1w3EsuAAO67FycjUw0zEWzO76SgXCPA8COMJ6YarDtchLHvIL6oe8Jt8kt03Ls8fYVdnArBeYULT+zP6uq0op9hPBQPX3MciM8QwDai8toM8Wbzjl0X7EEf0LYKTke4lSE2FrUBJqpLPORg9X3A3pFK8y3OrxuJ5i6voAEEbyz5RtGqcHTIQ7utFTWEo8NZObRCtByOClqmsH57B/r6rlTtlFqsEHUYG+tcSrGf+bNWVNapk4Ybl+XJ2RbqpLHcZVRXUNWn/zhKaCwLh2gABjDZowe2iZaFhsuHR3ltH9rDEyNED1oEAXoMaTWFliAMJrBeTbP0SfwYUs73dszTNMHRefIHT/JxZqM/0B0AAAAASUVORK5CYII=",
  xs =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACxSURBVHgBjVHLDYJAEH2zfs5bglcTTbQEGpC1A+mADtQSrIASJDRgrIALnKUEzpowzi7ZhANLeIfdyZv35pMhhBBXH3lb0C9Cfmw9rUbFptQA2egAXmfD1LjBViQViakB2Ei3bNrgTNsGxGc3FnDBqb5amhDXT1dlDroukQ6sMRcL1W8WhKlkabwk0mC+o9jfwgZTbsArK5afHyJOLb0MGrwYlKPYpZ6evgPzG/RNhqk/31Iy2saj9ggAAAAASUVORK5CYII=",
  Dw = () => {
    const t = [
        { text: "What Is A Loop In Python", handler: () => {}, id: 1 },
        { text: "Why Is It Important To Learn Python", handler: () => {}, id: 2 },
        { text: "What is AI/ML", handler: () => {}, id: 3 },
      ].map((a) =>
        x.jsxs(
          "button",
          {
            className: "option-button d-flex justify-content-between align-items-center",
            onClick: a.handler,
            children: [x.jsx("span", { children: a.text }), x.jsx("img", { src: xs, alt: "" })],
          },
          a.id
        )
      ),
      r = [
        { text: "Remembers What You Said Earlier In Conversation", handler: () => {}, id: 1 },
        { text: "Allows Students TO Ask Follow Up Questions", handler: () => {}, id: 2 },
        { text: "Trained To Decline Inappropiate Questions", handler: () => {}, id: 3 },
      ].map((a) =>
        x.jsxs(
          "button",
          { className: "option-button d-flex justify-content-between align-items-center", onClick: a.handler, children: [a.text, x.jsx("img", { src: xs, alt: "" })] },
          a.id
        )
      ),
      o = [
        { text: "May Occasionally Generate Incorrect Information", handler: () => {}, id: 1 },
        { text: "Limited Knowledge On Real World Events After 2021", handler: () => {}, id: 2 },
        { text: "May Provide Biased Answer", handler: () => {}, id: 3 },
      ].map((a) =>
        x.jsxs(
          "button",
          { className: "option-button d-flex justify-content-between align-items-center", onClick: a.handler, children: [a.text, x.jsx("img", { src: xs, alt: "" })] },
          a.id
        )
      )
    return x.jsx("div", {
      className: "options-container px-4 my-4",
      children: x.jsxs("div", {
        className: "accordion",
        id: "accordion",
        children: [
          x.jsxs("div", {
            className: "accordion-item my-3",
            children: [
              x.jsx("h2", {
                className: "accordion-header",
                id: "headingOne",
                children: x.jsxs("button", {
                  className: "accordion-button collapsed",
                  type: "button",
                  "data-bs-toggle": "collapse",
                  "data-bs-target": "#collapseOne",
                  children: [x.jsx("img", { src: Lw, alt: "Image", className: "accordian-button-image me-3" }), "Examples"],
                }),
              }),
              x.jsx("div", {
                id: "collapseOne",
                className: "accordion-collapse collapse",
                "data-bs-parent": "#accordion",
                children: x.jsx("div", { className: "accordion-body p-0 d-flex flex-column", children: x.jsx("div", { className: "dropdown-options", children: t }) }),
              }),
            ],
          }),
          x.jsxs("div", {
            className: "accordion-item my-3",
            children: [
              x.jsx("h2", {
                className: "accordion-header",
                id: "headingTwo",
                children: x.jsxs("button", {
                  className: "accordion-button collapsed",
                  type: "button",
                  "data-bs-toggle": "collapse",
                  "data-bs-target": "#collapseTwo",
                  children: [x.jsx("img", { src: Iw, alt: "Image", className: "accordian-button-image me-3" }), "Capabilities"],
                }),
              }),
              x.jsx("div", {
                id: "collapseTwo",
                className: "accordion-collapse collapse",
                "data-bs-parent": "#accordion",
                children: x.jsx("div", { className: "accordion-body p-0", children: x.jsx("div", { className: "dropdown-options", children: r }) }),
              }),
            ],
          }),
          x.jsxs("div", {
            className: "accordion-item my-3",
            children: [
              x.jsx("h2", {
                className: "accordion-header",
                id: "headingThree",
                children: x.jsxs("button", {
                  className: "accordion-button collapsed",
                  type: "button",
                  "data-bs-toggle": "collapse",
                  "data-bs-target": "#collapseThree",
                  children: [x.jsx("img", { src: Mw, alt: "Image", className: "accordian-button-image me-3" }), "Limitations"],
                }),
              }),
              x.jsx("div", {
                id: "collapseThree",
                className: "accordion-collapse collapse",
                "data-bs-parent": "#accordion",
                children: x.jsx("div", { className: "accordion-body p-0", children: x.jsx("div", { className: "dropdown-options", children: o }) }),
              }),
            ],
          }),
        ],
      }),
    })
  }
function zw() {
  return x.jsx(x.Fragment, {
    children: x.jsx("div", {
      className: "react-chatbot-kit-chat-avatar pb-2",
      children: x.jsxs("div", {
        className: "d-flex align-items-center",
        children: [x.jsx("img", { src: ii }), x.jsx("span", { className: "px-2", children: "WizKid" })],
      }),
    }),
  })
}
function Bw(e) {
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx("div", { className: "react-chatbot-kit-chat-bot-message", children: e.text }),
      x.jsxs("div", {
        className: "d-flex mt-1 ms-1",
        children: [
          x.jsx("div", { className: "react-chatbot-kit-message-time me-3", children: e.timestamp }),
          x.jsxs("div", { className: "react-chatbot-kit-message-time", children: ["Score: ", e.score] }),
        ],
      }),
    ],
  })
}
function Fw(e) {
  return x.jsxs(x.Fragment, {
    children: [
      x.jsx("div", { className: "react-chatbot-kit-user-chat-message", children: e.message }),
      x.jsx("div", { className: "react-chatbot-kit-message-time mt-2 mx-1", children: e.currentTime }),
    ],
  })
}
const Hw = {
  botName: "WizKid",
  initialMessages: [vv.createChatBotMessage("", { custom: !0, widget: "Options" })],
  widgets: [{ widgetName: "Options", widgetFunc: (e) => x.jsx(Dw, { ...e }) }],
  customComponents: {
    header: () => x.jsx(Rw, {}),
    botAvatar: () => x.jsx(zw, {}),
    botChatMessage: (e) => x.jsx(Bw, { text: e.message.text, timestamp: e.message.timestamp, score: e.message.score }),
    userChatMessage: (e) => x.jsx(Fw, { ...e, currentTime: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }),
  },
}
function yv(e, t) {
  return function () {
    return e.apply(t, arguments)
  }
}
const { toString: Uw } = Object.prototype,
  { getPrototypeOf: Xc } = Object,
  Aa = ((e) => (t) => {
    const n = Uw.call(t)
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  On = (e) => ((e = e.toLowerCase()), (t) => Aa(t) === e),
  Sa = (e) => (t) => typeof t === e,
  { isArray: bi } = Array,
  Ao = Sa("undefined")
function Ww(e) {
  return e !== null && !Ao(e) && e.constructor !== null && !Ao(e.constructor) && tn(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const wv = On("ArrayBuffer")
function $w(e) {
  let t
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? (t = ArrayBuffer.isView(e)) : (t = e && e.buffer && wv(e.buffer)), t
}
const Vw = Sa("string"),
  tn = Sa("function"),
  _v = Sa("number"),
  Ea = (e) => e !== null && typeof e == "object",
  Qw = (e) => e === !0 || e === !1,
  Cs = (e) => {
    if (Aa(e) !== "object") return !1
    const t = Xc(e)
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
  },
  Yw = On("Date"),
  Kw = On("File"),
  Gw = On("Blob"),
  qw = On("FileList"),
  Jw = (e) => Ea(e) && tn(e.pipe),
  Xw = (e) => {
    let t
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (tn(e.append) && ((t = Aa(e)) === "formdata" || (t === "object" && tn(e.toString) && e.toString() === "[object FormData]"))))
    )
  },
  Zw = On("URLSearchParams"),
  e_ = (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""))
function Oo(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return
  let r, i
  if ((typeof e != "object" && (e = [e]), bi(e))) for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e)
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = o.length
    let u
    for (r = 0; r < a; r++) (u = o[r]), t.call(null, e[u], u, e)
  }
}
function Av(e, t) {
  t = t.toLowerCase()
  const n = Object.keys(e)
  let r = n.length,
    i
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i
  return null
}
const Sv = (() => (typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global))(),
  Ev = (e) => !Ao(e) && e !== Sv
function Yu() {
  const { caseless: e } = (Ev(this) && this) || {},
    t = {},
    n = (r, i) => {
      const o = (e && Av(t, i)) || i
      Cs(t[o]) && Cs(r) ? (t[o] = Yu(t[o], r)) : Cs(r) ? (t[o] = Yu({}, r)) : bi(r) ? (t[o] = r.slice()) : (t[o] = r)
    }
  for (let r = 0, i = arguments.length; r < i; r++) arguments[r] && Oo(arguments[r], n)
  return t
}
const t_ = (e, t, n, { allOwnKeys: r } = {}) => (
    Oo(
      t,
      (i, o) => {
        n && tn(i) ? (e[o] = yv(i, n)) : (e[o] = i)
      },
      { allOwnKeys: r }
    ),
    e
  ),
  n_ = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  r_ = (e, t, n, r) => {
    ;(e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n)
  },
  i_ = (e, t, n, r) => {
    let i, o, a
    const u = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; ) (a = i[o]), (!r || r(a, e, t)) && !u[a] && ((t[a] = e[a]), (u[a] = !0))
      e = n !== !1 && Xc(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype)
    return t
  },
  o_ = (e, t, n) => {
    ;(e = String(e)), (n === void 0 || n > e.length) && (n = e.length), (n -= t.length)
    const r = e.indexOf(t, n)
    return r !== -1 && r === n
  },
  s_ = (e) => {
    if (!e) return null
    if (bi(e)) return e
    let t = e.length
    if (!_v(t)) return null
    const n = new Array(t)
    for (; t-- > 0; ) n[t] = e[t]
    return n
  },
  a_ = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Xc(Uint8Array)),
  l_ = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e)
    let i
    for (; (i = r.next()) && !i.done; ) {
      const o = i.value
      t.call(e, o[0], o[1])
    }
  },
  u_ = (e, t) => {
    let n
    const r = []
    for (; (n = e.exec(t)) !== null; ) r.push(n)
    return r
  },
  c_ = On("HTMLFormElement"),
  f_ = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i
    }),
  Gp = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  d_ = On("RegExp"),
  kv = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {}
    Oo(n, (i, o) => {
      t(i, o, e) !== !1 && (r[o] = i)
    }),
      Object.defineProperties(e, r)
  },
  p_ = (e) => {
    kv(e, (t, n) => {
      if (tn(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1
      const r = e[n]
      if (tn(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1
          return
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'")
          })
      }
    })
  },
  h_ = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((o) => {
          n[o] = !0
        })
      }
    return bi(e) ? r(e) : r(String(e).split(t)), n
  },
  m_ = () => {},
  g_ = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  $l = "abcdefghijklmnopqrstuvwxyz",
  qp = "0123456789",
  bv = { DIGIT: qp, ALPHA: $l, ALPHA_DIGIT: $l + $l.toUpperCase() + qp },
  v_ = (e = 16, t = bv.ALPHA_DIGIT) => {
    let n = ""
    const { length: r } = t
    for (; e--; ) n += t[(Math.random() * r) | 0]
    return n
  }
function y_(e) {
  return !!(e && tn(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const w_ = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (Ea(r)) {
          if (t.indexOf(r) >= 0) return
          if (!("toJSON" in r)) {
            t[i] = r
            const o = bi(r) ? [] : {}
            return (
              Oo(r, (a, u) => {
                const f = n(a, i + 1)
                !Ao(f) && (o[u] = f)
              }),
              (t[i] = void 0),
              o
            )
          }
        }
        return r
      }
    return n(e, 0)
  },
  __ = On("AsyncFunction"),
  A_ = (e) => e && (Ea(e) || tn(e)) && tn(e.then) && tn(e.catch),
  R = {
    isArray: bi,
    isArrayBuffer: wv,
    isBuffer: Ww,
    isFormData: Xw,
    isArrayBufferView: $w,
    isString: Vw,
    isNumber: _v,
    isBoolean: Qw,
    isObject: Ea,
    isPlainObject: Cs,
    isUndefined: Ao,
    isDate: Yw,
    isFile: Kw,
    isBlob: Gw,
    isRegExp: d_,
    isFunction: tn,
    isStream: Jw,
    isURLSearchParams: Zw,
    isTypedArray: a_,
    isFileList: qw,
    forEach: Oo,
    merge: Yu,
    extend: t_,
    trim: e_,
    stripBOM: n_,
    inherits: r_,
    toFlatObject: i_,
    kindOf: Aa,
    kindOfTest: On,
    endsWith: o_,
    toArray: s_,
    forEachEntry: l_,
    matchAll: u_,
    isHTMLForm: c_,
    hasOwnProperty: Gp,
    hasOwnProp: Gp,
    reduceDescriptors: kv,
    freezeMethods: p_,
    toObjectSet: h_,
    toCamelCase: f_,
    noop: m_,
    toFiniteNumber: g_,
    findKey: Av,
    global: Sv,
    isContextDefined: Ev,
    ALPHABET: bv,
    generateString: v_,
    isSpecCompliantForm: y_,
    toJSONObject: w_,
    isAsyncFn: __,
    isThenable: A_,
  }
function be(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i)
}
R.inherits(be, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: R.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null,
    }
  },
})
const xv = be.prototype,
  Cv = {}
;[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Cv[e] = { value: e }
})
Object.defineProperties(be, Cv)
Object.defineProperty(xv, "isAxiosError", { value: !0 })
be.from = (e, t, n, r, i, o) => {
  const a = Object.create(xv)
  return (
    R.toFlatObject(
      e,
      a,
      function (f) {
        return f !== Error.prototype
      },
      (u) => u !== "isAxiosError"
    ),
    be.call(a, e.message, t, n, r, i),
    (a.cause = e),
    (a.name = e.name),
    o && Object.assign(a, o),
    a
  )
}
const S_ = null
function Ku(e) {
  return R.isPlainObject(e) || R.isArray(e)
}
function Ov(e) {
  return R.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function Jp(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = Ov(i)), !n && o ? "[" + i + "]" : i
        })
        .join(n ? "." : "")
    : t
}
function E_(e) {
  return R.isArray(e) && !e.some(Ku)
}
const k_ = R.toFlatObject(R, {}, null, function (t) {
  return /^is[A-Z]/.test(t)
})
function ka(e, t, n) {
  if (!R.isObject(e)) throw new TypeError("target must be an object")
  ;(t = t || new FormData()),
    (n = R.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (O, F) {
      return !R.isUndefined(F[O])
    }))
  const r = n.metaTokens,
    i = n.visitor || v,
    o = n.dots,
    a = n.indexes,
    f = (n.Blob || (typeof Blob < "u" && Blob)) && R.isSpecCompliantForm(t)
  if (!R.isFunction(i)) throw new TypeError("visitor must be a function")
  function p(b) {
    if (b === null) return ""
    if (R.isDate(b)) return b.toISOString()
    if (!f && R.isBlob(b)) throw new be("Blob is not supported. Use a Buffer instead.")
    return R.isArrayBuffer(b) || R.isTypedArray(b) ? (f && typeof Blob == "function" ? new Blob([b]) : Buffer.from(b)) : b
  }
  function v(b, O, F) {
    let g = b
    if (b && !F && typeof b == "object") {
      if (R.endsWith(O, "{}")) (O = r ? O : O.slice(0, -2)), (b = JSON.stringify(b))
      else if ((R.isArray(b) && E_(b)) || ((R.isFileList(b) || R.endsWith(O, "[]")) && (g = R.toArray(b))))
        return (
          (O = Ov(O)),
          g.forEach(function (y, j) {
            !(R.isUndefined(y) || y === null) && t.append(a === !0 ? Jp([O], j, o) : a === null ? O : O + "[]", p(y))
          }),
          !1
        )
    }
    return Ku(b) ? !0 : (t.append(Jp(F, O, o), p(b)), !1)
  }
  const w = [],
    S = Object.assign(k_, { defaultVisitor: v, convertValue: p, isVisitable: Ku })
  function P(b, O) {
    if (!R.isUndefined(b)) {
      if (w.indexOf(b) !== -1) throw Error("Circular reference detected in " + O.join("."))
      w.push(b),
        R.forEach(b, function (g, h) {
          ;(!(R.isUndefined(g) || g === null) && i.call(t, g, R.isString(h) ? h.trim() : h, O, S)) === !0 && P(g, O ? O.concat(h) : [h])
        }),
        w.pop()
    }
  }
  if (!R.isObject(e)) throw new TypeError("data must be an object")
  return P(e), t
}
function Xp(e) {
  const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" }
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r]
  })
}
function Zc(e, t) {
  ;(this._pairs = []), e && ka(e, this, t)
}
const Tv = Zc.prototype
Tv.append = function (t, n) {
  this._pairs.push([t, n])
}
Tv.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Xp)
      }
    : Xp
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1])
    }, "")
    .join("&")
}
function b_(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function Nv(e, t, n) {
  if (!t) return e
  const r = (n && n.encode) || b_,
    i = n && n.serialize
  let o
  if ((i ? (o = i(t, n)) : (o = R.isURLSearchParams(t) ? t.toString() : new Zc(t, n).toString(r)), o)) {
    const a = e.indexOf("#")
    a !== -1 && (e = e.slice(0, a)), (e += (e.indexOf("?") === -1 ? "?" : "&") + o)
  }
  return e
}
class x_ {
  constructor() {
    this.handlers = []
  }
  use(t, n, r) {
    return this.handlers.push({ fulfilled: t, rejected: n, synchronous: r ? r.synchronous : !1, runWhen: r ? r.runWhen : null }), this.handlers.length - 1
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(t) {
    R.forEach(this.handlers, function (r) {
      r !== null && t(r)
    })
  }
}
const Zp = x_,
  Pv = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
  C_ = typeof URLSearchParams < "u" ? URLSearchParams : Zc,
  O_ = typeof FormData < "u" ? FormData : null,
  T_ = typeof Blob < "u" ? Blob : null,
  N_ = (() => {
    let e
    return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"
  })(),
  P_ = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
  kn = {
    isBrowser: !0,
    classes: { URLSearchParams: C_, FormData: O_, Blob: T_ },
    isStandardBrowserEnv: N_,
    isStandardBrowserWebWorkerEnv: P_,
    protocols: ["http", "https", "file", "blob", "url", "data"],
  }
function j_(e, t) {
  return ka(
    e,
    new kn.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, o) {
          return kn.isNode && R.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments)
        },
      },
      t
    )
  )
}
function R_(e) {
  return R.matchAll(/\w+|\[(\w*)]/g, e).map((t) => (t[0] === "[]" ? "" : t[1] || t[0]))
}
function L_(e) {
  const t = {},
    n = Object.keys(e)
  let r
  const i = n.length
  let o
  for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o])
  return t
}
function jv(e) {
  function t(n, r, i, o) {
    let a = n[o++]
    const u = Number.isFinite(+a),
      f = o >= n.length
    return (
      (a = !a && R.isArray(i) ? i.length : a),
      f
        ? (R.hasOwnProp(i, a) ? (i[a] = [i[a], r]) : (i[a] = r), !u)
        : ((!i[a] || !R.isObject(i[a])) && (i[a] = []), t(n, r, i[a], o) && R.isArray(i[a]) && (i[a] = L_(i[a])), !u)
    )
  }
  if (R.isFormData(e) && R.isFunction(e.entries)) {
    const n = {}
    return (
      R.forEachEntry(e, (r, i) => {
        t(R_(r), i, n, 0)
      }),
      n
    )
  }
  return null
}
const I_ = { "Content-Type": void 0 }
function M_(e, t, n) {
  if (R.isString(e))
    try {
      return (t || JSON.parse)(e), R.trim(e)
    } catch (r) {
      if (r.name !== "SyntaxError") throw r
    }
  return (n || JSON.stringify)(e)
}
const ba = {
  transitional: Pv,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        o = R.isObject(t)
      if ((o && R.isHTMLForm(t) && (t = new FormData(t)), R.isFormData(t))) return i && i ? JSON.stringify(jv(t)) : t
      if (R.isArrayBuffer(t) || R.isBuffer(t) || R.isStream(t) || R.isFile(t) || R.isBlob(t)) return t
      if (R.isArrayBufferView(t)) return t.buffer
      if (R.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString()
      let u
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1) return j_(t, this.formSerializer).toString()
        if ((u = R.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const f = this.env && this.env.FormData
          return ka(u ? { "files[]": t } : t, f && new f(), this.formSerializer)
        }
      }
      return o || i ? (n.setContentType("application/json", !1), M_(t)) : t
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || ba.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json"
      if (t && R.isString(t) && ((r && !this.responseType) || i)) {
        const a = !(n && n.silentJSONParsing) && i
        try {
          return JSON.parse(t)
        } catch (u) {
          if (a) throw u.name === "SyntaxError" ? be.from(u, be.ERR_BAD_RESPONSE, this, null, this.response) : u
        }
      }
      return t
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: kn.classes.FormData, Blob: kn.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: { common: { Accept: "application/json, text/plain, */*" } },
}
R.forEach(["delete", "get", "head"], function (t) {
  ba.headers[t] = {}
})
R.forEach(["post", "put", "patch"], function (t) {
  ba.headers[t] = R.merge(I_)
})
const ef = ba,
  D_ = R.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  z_ = (e) => {
    const t = {}
    let n, r, i
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (a) {
            ;(i = a.indexOf(":")),
              (n = a.substring(0, i).trim().toLowerCase()),
              (r = a.substring(i + 1).trim()),
              !(!n || (t[n] && D_[n])) && (n === "set-cookie" ? (t[n] ? t[n].push(r) : (t[n] = [r])) : (t[n] = t[n] ? t[n] + ", " + r : r))
          }),
      t
    )
  },
  eh = Symbol("internals")
function Hi(e) {
  return e && String(e).trim().toLowerCase()
}
function Os(e) {
  return e === !1 || e == null ? e : R.isArray(e) ? e.map(Os) : String(e)
}
function B_(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let r
  for (; (r = n.exec(e)); ) t[r[1]] = r[2]
  return t
}
const F_ = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function Vl(e, t, n, r, i) {
  if (R.isFunction(r)) return r.call(this, t, n)
  if ((i && (t = n), !!R.isString(t))) {
    if (R.isString(r)) return t.indexOf(r) !== -1
    if (R.isRegExp(r)) return r.test(t)
  }
}
function H_(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function U_(e, t) {
  const n = R.toCamelCase(" " + t)
  ;["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, o, a) {
        return this[r].call(this, t, i, o, a)
      },
      configurable: !0,
    })
  })
}
class xa {
  constructor(t) {
    t && this.set(t)
  }
  set(t, n, r) {
    const i = this
    function o(u, f, p) {
      const v = Hi(f)
      if (!v) throw new Error("header name must be a non-empty string")
      const w = R.findKey(i, v)
      ;(!w || i[w] === void 0 || p === !0 || (p === void 0 && i[w] !== !1)) && (i[w || f] = Os(u))
    }
    const a = (u, f) => R.forEach(u, (p, v) => o(p, v, f))
    return R.isPlainObject(t) || t instanceof this.constructor ? a(t, n) : R.isString(t) && (t = t.trim()) && !F_(t) ? a(z_(t), n) : t != null && o(n, t, r), this
  }
  get(t, n) {
    if (((t = Hi(t)), t)) {
      const r = R.findKey(this, t)
      if (r) {
        const i = this[r]
        if (!n) return i
        if (n === !0) return B_(i)
        if (R.isFunction(n)) return n.call(this, i, r)
        if (R.isRegExp(n)) return n.exec(i)
        throw new TypeError("parser must be boolean|regexp|function")
      }
    }
  }
  has(t, n) {
    if (((t = Hi(t)), t)) {
      const r = R.findKey(this, t)
      return !!(r && this[r] !== void 0 && (!n || Vl(this, this[r], r, n)))
    }
    return !1
  }
  delete(t, n) {
    const r = this
    let i = !1
    function o(a) {
      if (((a = Hi(a)), a)) {
        const u = R.findKey(r, a)
        u && (!n || Vl(r, r[u], u, n)) && (delete r[u], (i = !0))
      }
    }
    return R.isArray(t) ? t.forEach(o) : o(t), i
  }
  clear(t) {
    const n = Object.keys(this)
    let r = n.length,
      i = !1
    for (; r--; ) {
      const o = n[r]
      ;(!t || Vl(this, this[o], o, t, !0)) && (delete this[o], (i = !0))
    }
    return i
  }
  normalize(t) {
    const n = this,
      r = {}
    return (
      R.forEach(this, (i, o) => {
        const a = R.findKey(r, o)
        if (a) {
          ;(n[a] = Os(i)), delete n[o]
          return
        }
        const u = t ? H_(o) : String(o).trim()
        u !== o && delete n[o], (n[u] = Os(i)), (r[u] = !0)
      }),
      this
    )
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const n = Object.create(null)
    return (
      R.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && R.isArray(r) ? r.join(", ") : r)
      }),
      n
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders"
  }
  static from(t) {
    return t instanceof this ? t : new this(t)
  }
  static concat(t, ...n) {
    const r = new this(t)
    return n.forEach((i) => r.set(i)), r
  }
  static accessor(t) {
    const r = (this[eh] = this[eh] = { accessors: {} }).accessors,
      i = this.prototype
    function o(a) {
      const u = Hi(a)
      r[u] || (U_(i, a), (r[u] = !0))
    }
    return R.isArray(t) ? t.forEach(o) : o(t), this
  }
}
xa.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"])
R.freezeMethods(xa.prototype)
R.freezeMethods(xa)
const Dn = xa
function Ql(e, t) {
  const n = this || ef,
    r = t || n,
    i = Dn.from(r.headers)
  let o = r.data
  return (
    R.forEach(e, function (u) {
      o = u.call(n, o, i.normalize(), t ? t.status : void 0)
    }),
    i.normalize(),
    o
  )
}
function Rv(e) {
  return !!(e && e.__CANCEL__)
}
function To(e, t, n) {
  be.call(this, e ?? "canceled", be.ERR_CANCELED, t, n), (this.name = "CanceledError")
}
R.inherits(To, be, { __CANCEL__: !0 })
function W_(e, t, n) {
  const r = n.config.validateStatus
  !n.status || !r || r(n.status)
    ? e(n)
    : t(new be("Request failed with status code " + n.status, [be.ERR_BAD_REQUEST, be.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}
const $_ = kn.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, r, i, o, a, u) {
          const f = []
          f.push(n + "=" + encodeURIComponent(r)),
            R.isNumber(i) && f.push("expires=" + new Date(i).toGMTString()),
            R.isString(o) && f.push("path=" + o),
            R.isString(a) && f.push("domain=" + a),
            u === !0 && f.push("secure"),
            (document.cookie = f.join("; "))
        },
        read: function (n) {
          const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"))
          return r ? decodeURIComponent(r[3]) : null
        },
        remove: function (n) {
          this.write(n, "", Date.now() - 864e5)
        },
      }
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null
        },
        remove: function () {},
      }
    })()
function V_(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function Q_(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function Lv(e, t) {
  return e && !V_(t) ? Q_(e, t) : t
}
const Y_ = kn.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a")
      let r
      function i(o) {
        let a = o
        return (
          t && (n.setAttribute("href", a), (a = n.href)),
          n.setAttribute("href", a),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        )
      }
      return (
        (r = i(window.location.href)),
        function (a) {
          const u = R.isString(a) ? i(a) : a
          return u.protocol === r.protocol && u.host === r.host
        }
      )
    })()
  : (function () {
      return function () {
        return !0
      }
    })()
function K_(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ""
}
function G_(e, t) {
  e = e || 10
  const n = new Array(e),
    r = new Array(e)
  let i = 0,
    o = 0,
    a
  return (
    (t = t !== void 0 ? t : 1e3),
    function (f) {
      const p = Date.now(),
        v = r[o]
      a || (a = p), (n[i] = f), (r[i] = p)
      let w = o,
        S = 0
      for (; w !== i; ) (S += n[w++]), (w = w % e)
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), p - a < t)) return
      const P = v && p - v
      return P ? Math.round((S * 1e3) / P) : void 0
    }
  )
}
function th(e, t) {
  let n = 0
  const r = G_(50, 250)
  return (i) => {
    const o = i.loaded,
      a = i.lengthComputable ? i.total : void 0,
      u = o - n,
      f = r(u),
      p = o <= a
    n = o
    const v = { loaded: o, total: a, progress: a ? o / a : void 0, bytes: u, rate: f || void 0, estimated: f && a && p ? (a - o) / f : void 0, event: i }
    ;(v[t ? "download" : "upload"] = !0), e(v)
  }
}
const q_ = typeof XMLHttpRequest < "u",
  J_ =
    q_ &&
    function (e) {
      return new Promise(function (n, r) {
        let i = e.data
        const o = Dn.from(e.headers).normalize(),
          a = e.responseType
        let u
        function f() {
          e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u)
        }
        R.isFormData(i) && (kn.isStandardBrowserEnv || kn.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.setContentType("multipart/form-data;", !1))
        let p = new XMLHttpRequest()
        if (e.auth) {
          const P = e.auth.username || "",
            b = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : ""
          o.set("Authorization", "Basic " + btoa(P + ":" + b))
        }
        const v = Lv(e.baseURL, e.url)
        p.open(e.method.toUpperCase(), Nv(v, e.params, e.paramsSerializer), !0), (p.timeout = e.timeout)
        function w() {
          if (!p) return
          const P = Dn.from("getAllResponseHeaders" in p && p.getAllResponseHeaders()),
            O = { data: !a || a === "text" || a === "json" ? p.responseText : p.response, status: p.status, statusText: p.statusText, headers: P, config: e, request: p }
          W_(
            function (g) {
              n(g), f()
            },
            function (g) {
              r(g), f()
            },
            O
          ),
            (p = null)
        }
        if (
          ("onloadend" in p
            ? (p.onloadend = w)
            : (p.onreadystatechange = function () {
                !p || p.readyState !== 4 || (p.status === 0 && !(p.responseURL && p.responseURL.indexOf("file:") === 0)) || setTimeout(w)
              }),
          (p.onabort = function () {
            p && (r(new be("Request aborted", be.ECONNABORTED, e, p)), (p = null))
          }),
          (p.onerror = function () {
            r(new be("Network Error", be.ERR_NETWORK, e, p)), (p = null)
          }),
          (p.ontimeout = function () {
            let b = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded"
            const O = e.transitional || Pv
            e.timeoutErrorMessage && (b = e.timeoutErrorMessage), r(new be(b, O.clarifyTimeoutError ? be.ETIMEDOUT : be.ECONNABORTED, e, p)), (p = null)
          }),
          kn.isStandardBrowserEnv)
        ) {
          const P = (e.withCredentials || Y_(v)) && e.xsrfCookieName && $_.read(e.xsrfCookieName)
          P && o.set(e.xsrfHeaderName, P)
        }
        i === void 0 && o.setContentType(null),
          "setRequestHeader" in p &&
            R.forEach(o.toJSON(), function (b, O) {
              p.setRequestHeader(O, b)
            }),
          R.isUndefined(e.withCredentials) || (p.withCredentials = !!e.withCredentials),
          a && a !== "json" && (p.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" && p.addEventListener("progress", th(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" && p.upload && p.upload.addEventListener("progress", th(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((u = (P) => {
              p && (r(!P || P.type ? new To(null, e, p) : P), p.abort(), (p = null))
            }),
            e.cancelToken && e.cancelToken.subscribe(u),
            e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)))
        const S = K_(v)
        if (S && kn.protocols.indexOf(S) === -1) {
          r(new be("Unsupported protocol " + S + ":", be.ERR_BAD_REQUEST, e))
          return
        }
        p.send(i || null)
      })
    },
  Ts = { http: S_, xhr: J_ }
R.forEach(Ts, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t })
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t })
  }
})
const X_ = {
  getAdapter: (e) => {
    e = R.isArray(e) ? e : [e]
    const { length: t } = e
    let n, r
    for (let i = 0; i < t && ((n = e[i]), !(r = R.isString(n) ? Ts[n.toLowerCase()] : n)); i++);
    if (!r)
      throw r === !1
        ? new be(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT")
        : new Error(R.hasOwnProp(Ts, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`)
    if (!R.isFunction(r)) throw new TypeError("adapter is not a function")
    return r
  },
  adapters: Ts,
}
function Yl(e) {
  if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new To(null, e)
}
function nh(e) {
  return (
    Yl(e),
    (e.headers = Dn.from(e.headers)),
    (e.data = Ql.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    X_.getAdapter(e.adapter || ef.adapter)(e).then(
      function (r) {
        return Yl(e), (r.data = Ql.call(e, e.transformResponse, r)), (r.headers = Dn.from(r.headers)), r
      },
      function (r) {
        return (
          Rv(r) || (Yl(e), r && r.response && ((r.response.data = Ql.call(e, e.transformResponse, r.response)), (r.response.headers = Dn.from(r.response.headers)))),
          Promise.reject(r)
        )
      }
    )
  )
}
const rh = (e) => (e instanceof Dn ? e.toJSON() : e)
function wi(e, t) {
  t = t || {}
  const n = {}
  function r(p, v, w) {
    return R.isPlainObject(p) && R.isPlainObject(v) ? R.merge.call({ caseless: w }, p, v) : R.isPlainObject(v) ? R.merge({}, v) : R.isArray(v) ? v.slice() : v
  }
  function i(p, v, w) {
    if (R.isUndefined(v)) {
      if (!R.isUndefined(p)) return r(void 0, p, w)
    } else return r(p, v, w)
  }
  function o(p, v) {
    if (!R.isUndefined(v)) return r(void 0, v)
  }
  function a(p, v) {
    if (R.isUndefined(v)) {
      if (!R.isUndefined(p)) return r(void 0, p)
    } else return r(void 0, v)
  }
  function u(p, v, w) {
    if (w in t) return r(p, v)
    if (w in e) return r(void 0, p)
  }
  const f = {
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: u,
    headers: (p, v) => i(rh(p), rh(v), !0),
  }
  return (
    R.forEach(Object.keys(Object.assign({}, e, t)), function (v) {
      const w = f[v] || i,
        S = w(e[v], t[v], v)
      ;(R.isUndefined(S) && w !== u) || (n[v] = S)
    }),
    n
  )
}
const Iv = "1.4.0",
  tf = {}
;["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  tf[e] = function (r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
  }
})
const ih = {}
tf.transitional = function (t, n, r) {
  function i(o, a) {
    return "[Axios v" + Iv + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "")
  }
  return (o, a, u) => {
    if (t === !1) throw new be(i(a, " has been removed" + (n ? " in " + n : "")), be.ERR_DEPRECATED)
    return n && !ih[a] && ((ih[a] = !0), console.warn(i(a, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(o, a, u) : !0
  }
}
function Z_(e, t, n) {
  if (typeof e != "object") throw new be("options must be an object", be.ERR_BAD_OPTION_VALUE)
  const r = Object.keys(e)
  let i = r.length
  for (; i-- > 0; ) {
    const o = r[i],
      a = t[o]
    if (a) {
      const u = e[o],
        f = u === void 0 || a(u, o, e)
      if (f !== !0) throw new be("option " + o + " must be " + f, be.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (n !== !0) throw new be("Unknown option " + o, be.ERR_BAD_OPTION)
  }
}
const Gu = { assertOptions: Z_, validators: tf },
  Kn = Gu.validators
class na {
  constructor(t) {
    ;(this.defaults = t), (this.interceptors = { request: new Zp(), response: new Zp() })
  }
  request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}), (n = wi(this.defaults, n))
    const { transitional: r, paramsSerializer: i, headers: o } = n
    r !== void 0 &&
      Gu.assertOptions(
        r,
        { silentJSONParsing: Kn.transitional(Kn.boolean), forcedJSONParsing: Kn.transitional(Kn.boolean), clarifyTimeoutError: Kn.transitional(Kn.boolean) },
        !1
      ),
      i != null && (R.isFunction(i) ? (n.paramsSerializer = { serialize: i }) : Gu.assertOptions(i, { encode: Kn.function, serialize: Kn.function }, !0)),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase())
    let a
    ;(a = o && R.merge(o.common, o[n.method])),
      a &&
        R.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (b) => {
          delete o[b]
        }),
      (n.headers = Dn.concat(a, o))
    const u = []
    let f = !0
    this.interceptors.request.forEach(function (O) {
      ;(typeof O.runWhen == "function" && O.runWhen(n) === !1) || ((f = f && O.synchronous), u.unshift(O.fulfilled, O.rejected))
    })
    const p = []
    this.interceptors.response.forEach(function (O) {
      p.push(O.fulfilled, O.rejected)
    })
    let v,
      w = 0,
      S
    if (!f) {
      const b = [nh.bind(this), void 0]
      for (b.unshift.apply(b, u), b.push.apply(b, p), S = b.length, v = Promise.resolve(n); w < S; ) v = v.then(b[w++], b[w++])
      return v
    }
    S = u.length
    let P = n
    for (w = 0; w < S; ) {
      const b = u[w++],
        O = u[w++]
      try {
        P = b(P)
      } catch (F) {
        O.call(this, F)
        break
      }
    }
    try {
      v = nh.call(this, P)
    } catch (b) {
      return Promise.reject(b)
    }
    for (w = 0, S = p.length; w < S; ) v = v.then(p[w++], p[w++])
    return v
  }
  getUri(t) {
    t = wi(this.defaults, t)
    const n = Lv(t.baseURL, t.url)
    return Nv(n, t.params, t.paramsSerializer)
  }
}
R.forEach(["delete", "get", "head", "options"], function (t) {
  na.prototype[t] = function (n, r) {
    return this.request(wi(r || {}, { method: t, url: n, data: (r || {}).data }))
  }
})
R.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, a, u) {
      return this.request(wi(u || {}, { method: t, headers: r ? { "Content-Type": "multipart/form-data" } : {}, url: o, data: a }))
    }
  }
  ;(na.prototype[t] = n()), (na.prototype[t + "Form"] = n(!0))
})
const Ns = na
class nf {
  constructor(t) {
    if (typeof t != "function") throw new TypeError("executor must be a function.")
    let n
    this.promise = new Promise(function (o) {
      n = o
    })
    const r = this
    this.promise.then((i) => {
      if (!r._listeners) return
      let o = r._listeners.length
      for (; o-- > 0; ) r._listeners[o](i)
      r._listeners = null
    }),
      (this.promise.then = (i) => {
        let o
        const a = new Promise((u) => {
          r.subscribe(u), (o = u)
        }).then(i)
        return (
          (a.cancel = function () {
            r.unsubscribe(o)
          }),
          a
        )
      }),
      t(function (o, a, u) {
        r.reason || ((r.reason = new To(o, a, u)), n(r.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason)
      return
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t])
  }
  unsubscribe(t) {
    if (!this._listeners) return
    const n = this._listeners.indexOf(t)
    n !== -1 && this._listeners.splice(n, 1)
  }
  static source() {
    let t
    return {
      token: new nf(function (i) {
        t = i
      }),
      cancel: t,
    }
  }
}
const eA = nf
function tA(e) {
  return function (n) {
    return e.apply(null, n)
  }
}
function nA(e) {
  return R.isObject(e) && e.isAxiosError === !0
}
const qu = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
}
Object.entries(qu).forEach(([e, t]) => {
  qu[t] = e
})
const rA = qu
function Mv(e) {
  const t = new Ns(e),
    n = yv(Ns.prototype.request, t)
  return (
    R.extend(n, Ns.prototype, t, { allOwnKeys: !0 }),
    R.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return Mv(wi(e, i))
    }),
    n
  )
}
const ct = Mv(ef)
ct.Axios = Ns
ct.CanceledError = To
ct.CancelToken = eA
ct.isCancel = Rv
ct.VERSION = Iv
ct.toFormData = ka
ct.AxiosError = be
ct.Cancel = ct.CanceledError
ct.all = function (t) {
  return Promise.all(t)
}
ct.spread = tA
ct.isAxiosError = nA
ct.mergeConfig = wi
ct.AxiosHeaders = Dn
ct.formToJSON = (e) => jv(R.isHTMLForm(e) ? new FormData(e) : e)
ct.HttpStatusCode = rA
ct.default = ct
const iA = ct
var oA = function (e) {
    return { display: e ? "flex" : "none" }
  },
  sA = "#4fa94d",
  aA = { "aria-busy": !0, role: "status" },
  oh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (oh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        oh.apply(this, arguments)
      )
    },
  sh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (sh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        sh.apply(this, arguments)
      )
    },
  ah =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (ah =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        ah.apply(this, arguments)
      )
    },
  lh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (lh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        lh.apply(this, arguments)
      )
    },
  uh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (uh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        uh.apply(this, arguments)
      )
    },
  ch =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (ch =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        ch.apply(this, arguments)
      )
    },
  fh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (fh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        fh.apply(this, arguments)
      )
    },
  Dv = { exports: {} },
  Re = {}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rf = Symbol.for("react.element"),
  of = Symbol.for("react.portal"),
  Ca = Symbol.for("react.fragment"),
  Oa = Symbol.for("react.strict_mode"),
  Ta = Symbol.for("react.profiler"),
  Na = Symbol.for("react.provider"),
  Pa = Symbol.for("react.context"),
  lA = Symbol.for("react.server_context"),
  ja = Symbol.for("react.forward_ref"),
  Ra = Symbol.for("react.suspense"),
  La = Symbol.for("react.suspense_list"),
  Ia = Symbol.for("react.memo"),
  Ma = Symbol.for("react.lazy"),
  uA = Symbol.for("react.offscreen"),
  zv
zv = Symbol.for("react.module.reference")
function on(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case rf:
        switch (((e = e.type), e)) {
          case Ca:
          case Ta:
          case Oa:
          case Ra:
          case La:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case lA:
              case Pa:
              case ja:
              case Ma:
              case Ia:
              case Na:
                return e
              default:
                return t
            }
        }
      case of:
        return t
    }
  }
}
Re.ContextConsumer = Pa
Re.ContextProvider = Na
Re.Element = rf
Re.ForwardRef = ja
Re.Fragment = Ca
Re.Lazy = Ma
Re.Memo = Ia
Re.Portal = of
Re.Profiler = Ta
Re.StrictMode = Oa
Re.Suspense = Ra
Re.SuspenseList = La
Re.isAsyncMode = function () {
  return !1
}
Re.isConcurrentMode = function () {
  return !1
}
Re.isContextConsumer = function (e) {
  return on(e) === Pa
}
Re.isContextProvider = function (e) {
  return on(e) === Na
}
Re.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === rf
}
Re.isForwardRef = function (e) {
  return on(e) === ja
}
Re.isFragment = function (e) {
  return on(e) === Ca
}
Re.isLazy = function (e) {
  return on(e) === Ma
}
Re.isMemo = function (e) {
  return on(e) === Ia
}
Re.isPortal = function (e) {
  return on(e) === of
}
Re.isProfiler = function (e) {
  return on(e) === Ta
}
Re.isStrictMode = function (e) {
  return on(e) === Oa
}
Re.isSuspense = function (e) {
  return on(e) === Ra
}
Re.isSuspenseList = function (e) {
  return on(e) === La
}
Re.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Ca ||
    e === Ta ||
    e === Oa ||
    e === Ra ||
    e === La ||
    e === uA ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ma || e.$$typeof === Ia || e.$$typeof === Na || e.$$typeof === Pa || e.$$typeof === ja || e.$$typeof === zv || e.getModuleId !== void 0))
  )
}
Re.typeOf = on
Dv.exports = Re
var Bv = Dv.exports
function cA(e) {
  function t(C, T, z, $, E) {
    for (
      var ee = 0,
        I = 0,
        pe = 0,
        se = 0,
        te,
        Z,
        G = 0,
        Ce = 0,
        ne,
        we = (ne = te = 0),
        oe = 0,
        de = 0,
        Te = 0,
        ue = 0,
        Me = z.length,
        $e = Me - 1,
        ke,
        H = "",
        ge = "",
        Se = "",
        le = "",
        Ve;
      oe < Me;

    ) {
      if (
        ((Z = z.charCodeAt(oe)), oe === $e && I + se + pe + ee !== 0 && (I !== 0 && (Z = I === 47 ? 10 : 47), (se = pe = ee = 0), Me++, $e++), I + se + pe + ee === 0)
      ) {
        if (oe === $e && (0 < de && (H = H.replace(S, "")), 0 < H.trim().length)) {
          switch (Z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break
            default:
              H += z.charAt(oe)
          }
          Z = 59
        }
        switch (Z) {
          case 123:
            for (H = H.trim(), te = H.charCodeAt(0), ne = 1, ue = ++oe; oe < Me; ) {
              switch ((Z = z.charCodeAt(oe))) {
                case 123:
                  ne++
                  break
                case 125:
                  ne--
                  break
                case 47:
                  switch ((Z = z.charCodeAt(oe + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (we = oe + 1; we < $e; ++we)
                          switch (z.charCodeAt(we)) {
                            case 47:
                              if (Z === 42 && z.charCodeAt(we - 1) === 42 && oe + 2 !== we) {
                                oe = we + 1
                                break e
                              }
                              break
                            case 10:
                              if (Z === 47) {
                                oe = we + 1
                                break e
                              }
                          }
                        oe = we
                      }
                  }
                  break
                case 91:
                  Z++
                case 40:
                  Z++
                case 34:
                case 39:
                  for (; oe++ < $e && z.charCodeAt(oe) !== Z; );
              }
              if (ne === 0) break
              oe++
            }
            switch (((ne = z.substring(ue, oe)), te === 0 && (te = (H = H.replace(w, "").trim()).charCodeAt(0)), te)) {
              case 64:
                switch ((0 < de && (H = H.replace(S, "")), (Z = H.charCodeAt(1)), Z)) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    de = T
                    break
                  default:
                    de = rt
                }
                if (
                  ((ne = t(T, de, ne, Z, E + 1)),
                  (ue = ne.length),
                  0 < W &&
                    ((de = n(rt, H, Te)),
                    (Ve = u(3, ne, de, T, Fe, We, ue, Z, E, $)),
                    (H = de.join("")),
                    Ve !== void 0 && (ue = (ne = Ve.trim()).length) === 0 && ((Z = 0), (ne = ""))),
                  0 < ue)
                )
                  switch (Z) {
                    case 115:
                      H = H.replace(Y, a)
                    case 100:
                    case 109:
                    case 45:
                      ne = H + "{" + ne + "}"
                      break
                    case 107:
                      ;(H = H.replace(h, "$1 $2")), (ne = H + "{" + ne + "}"), (ne = Xe === 1 || (Xe === 2 && o("@" + ne, 3)) ? "@-webkit-" + ne + "@" + ne : "@" + ne)
                      break
                    default:
                      ;(ne = H + ne), $ === 112 && (ne = ((ge += ne), ""))
                  }
                else ne = ""
                break
              default:
                ne = t(T, n(T, H, Te), ne, $, E + 1)
            }
            ;(Se += ne), (ne = Te = de = we = te = 0), (H = ""), (Z = z.charCodeAt(++oe))
            break
          case 125:
          case 59:
            if (((H = (0 < de ? H.replace(S, "") : H).trim()), 1 < (ue = H.length)))
              switch (
                (we === 0 && ((te = H.charCodeAt(0)), te === 45 || (96 < te && 123 > te)) && (ue = (H = H.replace(" ", ":")).length),
                0 < W && (Ve = u(1, H, T, C, Fe, We, ge.length, $, E, $)) !== void 0 && (ue = (H = Ve.trim()).length) === 0 && (H = "\0\0"),
                (te = H.charCodeAt(0)),
                (Z = H.charCodeAt(1)),
                te)
              ) {
                case 0:
                  break
                case 64:
                  if (Z === 105 || Z === 99) {
                    le += H + z.charAt(oe)
                    break
                  }
                default:
                  H.charCodeAt(ue - 1) !== 58 && (ge += i(H, te, Z, H.charCodeAt(2)))
              }
            ;(Te = de = we = te = 0), (H = ""), (Z = z.charCodeAt(++oe))
        }
      }
      switch (Z) {
        case 13:
        case 10:
          I === 47 ? (I = 0) : 1 + te === 0 && $ !== 107 && 0 < H.length && ((de = 1), (H += "\0")),
            0 < W * m && u(0, H, T, C, Fe, We, ge.length, $, E, $),
            (We = 1),
            Fe++
          break
        case 59:
        case 125:
          if (I + se + pe + ee === 0) {
            We++
            break
          }
        default:
          switch ((We++, (ke = z.charAt(oe)), Z)) {
            case 9:
            case 32:
              if (se + ee + I === 0)
                switch (G) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ke = ""
                    break
                  default:
                    Z !== 32 && (ke = " ")
                }
              break
            case 0:
              ke = "\\0"
              break
            case 12:
              ke = "\\f"
              break
            case 11:
              ke = "\\v"
              break
            case 38:
              se + I + ee === 0 && ((de = Te = 1), (ke = "\f" + ke))
              break
            case 108:
              if (se + I + ee + st === 0 && 0 < we)
                switch (oe - we) {
                  case 2:
                    G === 112 && z.charCodeAt(oe - 3) === 58 && (st = G)
                  case 8:
                    Ce === 111 && (st = Ce)
                }
              break
            case 58:
              se + I + ee === 0 && (we = oe)
              break
            case 44:
              I + pe + se + ee === 0 && ((de = 1), (ke += "\r"))
              break
            case 34:
            case 39:
              I === 0 && (se = se === Z ? 0 : se === 0 ? Z : se)
              break
            case 91:
              se + I + pe === 0 && ee++
              break
            case 93:
              se + I + pe === 0 && ee--
              break
            case 41:
              se + I + ee === 0 && pe--
              break
            case 40:
              if (se + I + ee === 0) {
                if (te === 0)
                  switch (2 * G + 3 * Ce) {
                    case 533:
                      break
                    default:
                      te = 1
                  }
                pe++
              }
              break
            case 64:
              I + pe + se + ee + we + ne === 0 && (ne = 1)
              break
            case 42:
            case 47:
              if (!(0 < se + ee + pe))
                switch (I) {
                  case 0:
                    switch (2 * Z + 3 * z.charCodeAt(oe + 1)) {
                      case 235:
                        I = 47
                        break
                      case 220:
                        ;(ue = oe), (I = 42)
                    }
                    break
                  case 42:
                    Z === 47 && G === 42 && ue + 2 !== oe && (z.charCodeAt(ue + 2) === 33 && (ge += z.substring(ue, oe + 1)), (ke = ""), (I = 0))
                }
          }
          I === 0 && (H += ke)
      }
      ;(Ce = G), (G = Z), oe++
    }
    if (((ue = ge.length), 0 < ue)) {
      if (((de = T), 0 < W && ((Ve = u(2, ge, de, C, Fe, We, ue, $, E, $)), Ve !== void 0 && (ge = Ve).length === 0))) return le + ge + Se
      if (((ge = de.join(",") + "{" + ge + "}"), Xe * st !== 0)) {
        switch ((Xe !== 2 || o(ge, 2) || (st = 0), st)) {
          case 111:
            ge = ge.replace(j, ":-moz-$1") + ge
            break
          case 112:
            ge = ge.replace(y, "::-webkit-input-$1") + ge.replace(y, "::-moz-$1") + ge.replace(y, ":-ms-input-$1") + ge
        }
        st = 0
      }
    }
    return le + ge + Se
  }
  function n(C, T, z) {
    var $ = T.trim().split(F)
    T = $
    var E = $.length,
      ee = C.length
    switch (ee) {
      case 0:
      case 1:
        var I = 0
        for (C = ee === 0 ? "" : C[0] + " "; I < E; ++I) T[I] = r(C, T[I], z).trim()
        break
      default:
        var pe = (I = 0)
        for (T = []; I < E; ++I) for (var se = 0; se < ee; ++se) T[pe++] = r(C[se] + " ", $[I], z).trim()
    }
    return T
  }
  function r(C, T, z) {
    var $ = T.charCodeAt(0)
    switch ((33 > $ && ($ = (T = T.trim()).charCodeAt(0)), $)) {
      case 38:
        return T.replace(g, "$1" + C.trim())
      case 58:
        return C.trim() + T.replace(g, "$1" + C.trim())
      default:
        if (0 < 1 * z && 0 < T.indexOf("\f")) return T.replace(g, (C.charCodeAt(0) === 58 ? "" : "$1") + C.trim())
    }
    return C + T
  }
  function i(C, T, z, $) {
    var E = C + ";",
      ee = 2 * T + 3 * z + 4 * $
    if (ee === 944) {
      C = E.indexOf(":", 9) + 1
      var I = E.substring(C, E.length - 1).trim()
      return (I = E.substring(0, C).trim() + I + ";"), Xe === 1 || (Xe === 2 && o(I, 1)) ? "-webkit-" + I + I : I
    }
    if (Xe === 0 || (Xe === 2 && !o(E, 1))) return E
    switch (ee) {
      case 1015:
        return E.charCodeAt(10) === 97 ? "-webkit-" + E + E : E
      case 951:
        return E.charCodeAt(3) === 116 ? "-webkit-" + E + E : E
      case 963:
        return E.charCodeAt(5) === 110 ? "-webkit-" + E + E : E
      case 1009:
        if (E.charCodeAt(4) !== 100) break
      case 969:
      case 942:
        return "-webkit-" + E + E
      case 978:
        return "-webkit-" + E + "-moz-" + E + E
      case 1019:
      case 983:
        return "-webkit-" + E + "-moz-" + E + "-ms-" + E + E
      case 883:
        if (E.charCodeAt(8) === 45) return "-webkit-" + E + E
        if (0 < E.indexOf("image-set(", 11)) return E.replace(Ie, "$1-webkit-$2") + E
        break
      case 932:
        if (E.charCodeAt(4) === 45)
          switch (E.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + E.replace("-grow", "") + "-webkit-" + E + "-ms-" + E.replace("grow", "positive") + E
            case 115:
              return "-webkit-" + E + "-ms-" + E.replace("shrink", "negative") + E
            case 98:
              return "-webkit-" + E + "-ms-" + E.replace("basis", "preferred-size") + E
          }
        return "-webkit-" + E + "-ms-" + E + E
      case 964:
        return "-webkit-" + E + "-ms-flex-" + E + E
      case 1023:
        if (E.charCodeAt(8) !== 99) break
        return (
          (I = E.substring(E.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")),
          "-webkit-box-pack" + I + "-webkit-" + E + "-ms-flex-pack" + I + E
        )
      case 1005:
        return b.test(E) ? E.replace(P, ":-webkit-") + E.replace(P, ":-moz-") + E : E
      case 1e3:
        switch (((I = E.substring(13).trim()), (T = I.indexOf("-") + 1), I.charCodeAt(0) + I.charCodeAt(T))) {
          case 226:
            I = E.replace(D, "tb")
            break
          case 232:
            I = E.replace(D, "tb-rl")
            break
          case 220:
            I = E.replace(D, "lr")
            break
          default:
            return E
        }
        return "-webkit-" + E + "-ms-" + I + E
      case 1017:
        if (E.indexOf("sticky", 9) === -1) break
      case 975:
        switch (
          ((T = (E = C).length - 10),
          (I = (E.charCodeAt(T) === 33 ? E.substring(0, T) : E).substring(C.indexOf(":", 7) + 1).trim()),
          (ee = I.charCodeAt(0) + (I.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > I.charCodeAt(8)) break
          case 115:
            E = E.replace(I, "-webkit-" + I) + ";" + E
            break
          case 207:
          case 102:
            E = E.replace(I, "-webkit-" + (102 < ee ? "inline-" : "") + "box") + ";" + E.replace(I, "-webkit-" + I) + ";" + E.replace(I, "-ms-" + I + "box") + ";" + E
        }
        return E + ";"
      case 938:
        if (E.charCodeAt(5) === 45)
          switch (E.charCodeAt(6)) {
            case 105:
              return (I = E.replace("-items", "")), "-webkit-" + E + "-webkit-box-" + I + "-ms-flex-" + I + E
            case 115:
              return "-webkit-" + E + "-ms-flex-item-" + E.replace(V, "") + E
            default:
              return "-webkit-" + E + "-ms-flex-line-pack" + E.replace("align-content", "").replace(V, "") + E
          }
        break
      case 973:
      case 989:
        if (E.charCodeAt(3) !== 45 || E.charCodeAt(4) === 122) break
      case 931:
      case 953:
        if (re.test(C) === !0)
          return (I = C.substring(C.indexOf(":") + 1)).charCodeAt(0) === 115
            ? i(C.replace("stretch", "fill-available"), T, z, $).replace(":fill-available", ":stretch")
            : E.replace(I, "-webkit-" + I) + E.replace(I, "-moz-" + I.replace("fill-", "")) + E
        break
      case 962:
        if (((E = "-webkit-" + E + (E.charCodeAt(5) === 102 ? "-ms-" + E : "") + E), z + $ === 211 && E.charCodeAt(13) === 105 && 0 < E.indexOf("transform", 10)))
          return E.substring(0, E.indexOf(";", 27) + 1).replace(O, "$1-webkit-$2") + E
    }
    return E
  }
  function o(C, T) {
    var z = C.indexOf(T === 1 ? ":" : "{"),
      $ = C.substring(0, T !== 3 ? z : 10)
    return (z = C.substring(z + 1, C.length - 1)), k(T !== 2 ? $ : $.replace(ve, "$1"), z, T)
  }
  function a(C, T) {
    var z = i(T, T.charCodeAt(0), T.charCodeAt(1), T.charCodeAt(2))
    return z !== T + ";" ? z.replace(K, " or ($1)").substring(4) : "(" + T + ")"
  }
  function u(C, T, z, $, E, ee, I, pe, se, te) {
    for (var Z = 0, G = T, Ce; Z < W; ++Z)
      switch ((Ce = Ze[Z].call(v, C, G, z, $, E, ee, I, pe, se, te))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break
        default:
          G = Ce
      }
    if (G !== T) return G
  }
  function f(C) {
    switch (C) {
      case void 0:
      case null:
        W = Ze.length = 0
        break
      default:
        if (typeof C == "function") Ze[W++] = C
        else if (typeof C == "object") for (var T = 0, z = C.length; T < z; ++T) f(C[T])
        else m = !!C | 0
    }
    return f
  }
  function p(C) {
    return (C = C.prefix), C !== void 0 && ((k = null), C ? (typeof C != "function" ? (Xe = 1) : ((Xe = 2), (k = C))) : (Xe = 0)), p
  }
  function v(C, T) {
    var z = C
    if ((33 > z.charCodeAt(0) && (z = z.trim()), (M = z), (z = [M]), 0 < W)) {
      var $ = u(-1, T, z, z, Fe, We, 0, 0, 0, 0)
      $ !== void 0 && typeof $ == "string" && (T = $)
    }
    var E = t(rt, z, T, 0, 0)
    return 0 < W && (($ = u(-2, E, z, z, Fe, We, E.length, 0, 0, 0)), $ !== void 0 && (E = $)), (M = ""), (st = 0), (We = Fe = 1), E
  }
  var w = /^\0+/g,
    S = /[\0\r\f]/g,
    P = /: */g,
    b = /zoo|gra/,
    O = /([,: ])(transform)/g,
    F = /,\r+?/g,
    g = /([\t\r\n ])*\f?&/g,
    h = /@(k\w+)\s*(\S*)\s*/,
    y = /::(place)/g,
    j = /:(read-only)/g,
    D = /[svh]\w+-[tblr]{2}/,
    Y = /\(\s*(.*)\s*\)/g,
    K = /([\s\S]*?);/g,
    V = /-self|flex-/g,
    ve = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    re = /stretch|:\s*\w+\-(?:conte|avail)/,
    Ie = /([^-])(image-set\()/,
    We = 1,
    Fe = 1,
    st = 0,
    Xe = 1,
    rt = [],
    Ze = [],
    W = 0,
    k = null,
    m = 0,
    M = ""
  return (v.use = f), (v.set = p), e !== void 0 && p(e), v
}
var fA = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
}
function dA(e) {
  var t = Object.create(null)
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n]
  }
}
var pA =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  dh = dA(function (e) {
    return pA.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
  }),
  Fv = { exports: {} },
  Le = {}
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mt = typeof Symbol == "function" && Symbol.for,
  sf = mt ? Symbol.for("react.element") : 60103,
  af = mt ? Symbol.for("react.portal") : 60106,
  Da = mt ? Symbol.for("react.fragment") : 60107,
  za = mt ? Symbol.for("react.strict_mode") : 60108,
  Ba = mt ? Symbol.for("react.profiler") : 60114,
  Fa = mt ? Symbol.for("react.provider") : 60109,
  Ha = mt ? Symbol.for("react.context") : 60110,
  lf = mt ? Symbol.for("react.async_mode") : 60111,
  Ua = mt ? Symbol.for("react.concurrent_mode") : 60111,
  Wa = mt ? Symbol.for("react.forward_ref") : 60112,
  $a = mt ? Symbol.for("react.suspense") : 60113,
  hA = mt ? Symbol.for("react.suspense_list") : 60120,
  Va = mt ? Symbol.for("react.memo") : 60115,
  Qa = mt ? Symbol.for("react.lazy") : 60116,
  mA = mt ? Symbol.for("react.block") : 60121,
  gA = mt ? Symbol.for("react.fundamental") : 60117,
  vA = mt ? Symbol.for("react.responder") : 60118,
  yA = mt ? Symbol.for("react.scope") : 60119
function Qt(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case sf:
        switch (((e = e.type), e)) {
          case lf:
          case Ua:
          case Da:
          case Ba:
          case za:
          case $a:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Ha:
              case Wa:
              case Qa:
              case Va:
              case Fa:
                return e
              default:
                return t
            }
        }
      case af:
        return t
    }
  }
}
function Hv(e) {
  return Qt(e) === Ua
}
Le.AsyncMode = lf
Le.ConcurrentMode = Ua
Le.ContextConsumer = Ha
Le.ContextProvider = Fa
Le.Element = sf
Le.ForwardRef = Wa
Le.Fragment = Da
Le.Lazy = Qa
Le.Memo = Va
Le.Portal = af
Le.Profiler = Ba
Le.StrictMode = za
Le.Suspense = $a
Le.isAsyncMode = function (e) {
  return Hv(e) || Qt(e) === lf
}
Le.isConcurrentMode = Hv
Le.isContextConsumer = function (e) {
  return Qt(e) === Ha
}
Le.isContextProvider = function (e) {
  return Qt(e) === Fa
}
Le.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === sf
}
Le.isForwardRef = function (e) {
  return Qt(e) === Wa
}
Le.isFragment = function (e) {
  return Qt(e) === Da
}
Le.isLazy = function (e) {
  return Qt(e) === Qa
}
Le.isMemo = function (e) {
  return Qt(e) === Va
}
Le.isPortal = function (e) {
  return Qt(e) === af
}
Le.isProfiler = function (e) {
  return Qt(e) === Ba
}
Le.isStrictMode = function (e) {
  return Qt(e) === za
}
Le.isSuspense = function (e) {
  return Qt(e) === $a
}
Le.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Da ||
    e === Ua ||
    e === Ba ||
    e === za ||
    e === $a ||
    e === hA ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Qa ||
        e.$$typeof === Va ||
        e.$$typeof === Fa ||
        e.$$typeof === Ha ||
        e.$$typeof === Wa ||
        e.$$typeof === gA ||
        e.$$typeof === vA ||
        e.$$typeof === yA ||
        e.$$typeof === mA))
  )
}
Le.typeOf = Qt
Fv.exports = Le
var wA = Fv.exports,
  uf = wA,
  _A = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  AA = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
  SA = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  Uv = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  cf = {}
cf[uf.ForwardRef] = SA
cf[uf.Memo] = Uv
function ph(e) {
  return uf.isMemo(e) ? Uv : cf[e.$$typeof] || _A
}
var EA = Object.defineProperty,
  kA = Object.getOwnPropertyNames,
  hh = Object.getOwnPropertySymbols,
  bA = Object.getOwnPropertyDescriptor,
  xA = Object.getPrototypeOf,
  mh = Object.prototype
function Wv(e, t, n) {
  if (typeof t != "string") {
    if (mh) {
      var r = xA(t)
      r && r !== mh && Wv(e, r, n)
    }
    var i = kA(t)
    hh && (i = i.concat(hh(t)))
    for (var o = ph(e), a = ph(t), u = 0; u < i.length; ++u) {
      var f = i[u]
      if (!AA[f] && !(n && n[f]) && !(a && a[f]) && !(o && o[f])) {
        var p = bA(t, f)
        try {
          EA(e, f, p)
        } catch {}
      }
    }
  }
  return e
}
var CA = Wv
const OA = nc(CA)
function In() {
  return (In =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    }).apply(this, arguments)
}
var gh = function (e, t) {
    for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1) n.push(t[r], e[r + 1])
    return n
  },
  Ju = function (e) {
    return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Bv.typeOf(e)
  },
  ra = Object.freeze([]),
  ur = Object.freeze({})
function So(e) {
  return typeof e == "function"
}
function vh(e) {
  return e.displayName || e.name || "Component"
}
function ff(e) {
  return e && typeof e.styledComponentId == "string"
}
var _i = (typeof process < "u" && process.env !== void 0 && ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) || "data-styled",
  df = typeof window < "u" && "HTMLElement" in window,
  TA = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && {}.REACT_APP_SC_DISABLE_SPEEDY !== ""
        ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" && {}.REACT_APP_SC_DISABLE_SPEEDY
        : {}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== "" && {}.SC_DISABLE_SPEEDY !== "false" && {}.SC_DISABLE_SPEEDY))
function No(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""))
}
var NA = (function () {
    function e(n) {
      ;(this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = n)
    }
    var t = e.prototype
    return (
      (t.indexOfGroup = function (n) {
        for (var r = 0, i = 0; i < n; i++) r += this.groupSizes[i]
        return r
      }),
      (t.insertRules = function (n, r) {
        if (n >= this.groupSizes.length) {
          for (var i = this.groupSizes, o = i.length, a = o; n >= a; ) (a <<= 1) < 0 && No(16, "" + n)
          ;(this.groupSizes = new Uint32Array(a)), this.groupSizes.set(i), (this.length = a)
          for (var u = o; u < a; u++) this.groupSizes[u] = 0
        }
        for (var f = this.indexOfGroup(n + 1), p = 0, v = r.length; p < v; p++) this.tag.insertRule(f, r[p]) && (this.groupSizes[n]++, f++)
      }),
      (t.clearGroup = function (n) {
        if (n < this.length) {
          var r = this.groupSizes[n],
            i = this.indexOfGroup(n),
            o = i + r
          this.groupSizes[n] = 0
          for (var a = i; a < o; a++) this.tag.deleteRule(i)
        }
      }),
      (t.getGroup = function (n) {
        var r = ""
        if (n >= this.length || this.groupSizes[n] === 0) return r
        for (var i = this.groupSizes[n], o = this.indexOfGroup(n), a = o + i, u = o; u < a; u++)
          r +=
            this.tag.getRule(u) +
            `/*!sc*/
`
        return r
      }),
      e
    )
  })(),
  Ps = new Map(),
  ia = new Map(),
  to = 1,
  ds = function (e) {
    if (Ps.has(e)) return Ps.get(e)
    for (; ia.has(to); ) to++
    var t = to++
    return Ps.set(e, t), ia.set(t, e), t
  },
  PA = function (e) {
    return ia.get(e)
  },
  jA = function (e, t) {
    t >= to && (to = t + 1), Ps.set(e, t), ia.set(t, e)
  },
  RA = "style[" + _i + '][data-styled-version="5.3.11"]',
  LA = new RegExp("^" + _i + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  IA = function (e, t, n) {
    for (var r, i = n.split(","), o = 0, a = i.length; o < a; o++) (r = i[o]) && e.registerName(t, r)
  },
  MA = function (e, t) {
    for (
      var n = (t.textContent || "").split(`/*!sc*/
`),
        r = [],
        i = 0,
        o = n.length;
      i < o;
      i++
    ) {
      var a = n[i].trim()
      if (a) {
        var u = a.match(LA)
        if (u) {
          var f = 0 | parseInt(u[1], 10),
            p = u[2]
          f !== 0 && (jA(p, f), IA(e, p, u[3]), e.getTag().insertRules(f, r)), (r.length = 0)
        } else r.push(a)
      }
    }
  },
  DA = function () {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null
  },
  $v = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      i = (function (u) {
        for (var f = u.childNodes, p = f.length; p >= 0; p--) {
          var v = f[p]
          if (v && v.nodeType === 1 && v.hasAttribute(_i)) return v
        }
      })(n),
      o = i !== void 0 ? i.nextSibling : null
    r.setAttribute(_i, "active"), r.setAttribute("data-styled-version", "5.3.11")
    var a = DA()
    return a && r.setAttribute("nonce", a), n.insertBefore(r, o), r
  },
  zA = (function () {
    function e(n) {
      var r = (this.element = $v(n))
      r.appendChild(document.createTextNode("")),
        (this.sheet = (function (i) {
          if (i.sheet) return i.sheet
          for (var o = document.styleSheets, a = 0, u = o.length; a < u; a++) {
            var f = o[a]
            if (f.ownerNode === i) return f
          }
          No(17)
        })(r)),
        (this.length = 0)
    }
    var t = e.prototype
    return (
      (t.insertRule = function (n, r) {
        try {
          return this.sheet.insertRule(r, n), this.length++, !0
        } catch {
          return !1
        }
      }),
      (t.deleteRule = function (n) {
        this.sheet.deleteRule(n), this.length--
      }),
      (t.getRule = function (n) {
        var r = this.sheet.cssRules[n]
        return r !== void 0 && typeof r.cssText == "string" ? r.cssText : ""
      }),
      e
    )
  })(),
  BA = (function () {
    function e(n) {
      var r = (this.element = $v(n))
      ;(this.nodes = r.childNodes), (this.length = 0)
    }
    var t = e.prototype
    return (
      (t.insertRule = function (n, r) {
        if (n <= this.length && n >= 0) {
          var i = document.createTextNode(r),
            o = this.nodes[n]
          return this.element.insertBefore(i, o || null), this.length++, !0
        }
        return !1
      }),
      (t.deleteRule = function (n) {
        this.element.removeChild(this.nodes[n]), this.length--
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.nodes[n].textContent : ""
      }),
      e
    )
  })(),
  FA = (function () {
    function e(n) {
      ;(this.rules = []), (this.length = 0)
    }
    var t = e.prototype
    return (
      (t.insertRule = function (n, r) {
        return n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0)
      }),
      (t.deleteRule = function (n) {
        this.rules.splice(n, 1), this.length--
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.rules[n] : ""
      }),
      e
    )
  })(),
  yh = df,
  HA = { isServer: !df, useCSSOMInjection: !TA },
  Vv = (function () {
    function e(n, r, i) {
      n === void 0 && (n = ur),
        r === void 0 && (r = {}),
        (this.options = In({}, HA, {}, n)),
        (this.gs = r),
        (this.names = new Map(i)),
        (this.server = !!n.isServer),
        !this.server &&
          df &&
          yh &&
          ((yh = !1),
          (function (o) {
            for (var a = document.querySelectorAll(RA), u = 0, f = a.length; u < f; u++) {
              var p = a[u]
              p && p.getAttribute(_i) !== "active" && (MA(o, p), p.parentNode && p.parentNode.removeChild(p))
            }
          })(this))
    }
    e.registerId = function (n) {
      return ds(n)
    }
    var t = e.prototype
    return (
      (t.reconstructWithOptions = function (n, r) {
        return r === void 0 && (r = !0), new e(In({}, this.options, {}, n), this.gs, (r && this.names) || void 0)
      }),
      (t.allocateGSInstance = function (n) {
        return (this.gs[n] = (this.gs[n] || 0) + 1)
      }),
      (t.getTag = function () {
        return (
          this.tag ||
          (this.tag = ((i = (r = this.options).isServer), (o = r.useCSSOMInjection), (a = r.target), (n = i ? new FA(a) : o ? new zA(a) : new BA(a)), new NA(n)))
        )
        var n, r, i, o, a
      }),
      (t.hasNameForId = function (n, r) {
        return this.names.has(n) && this.names.get(n).has(r)
      }),
      (t.registerName = function (n, r) {
        if ((ds(n), this.names.has(n))) this.names.get(n).add(r)
        else {
          var i = new Set()
          i.add(r), this.names.set(n, i)
        }
      }),
      (t.insertRules = function (n, r, i) {
        this.registerName(n, r), this.getTag().insertRules(ds(n), i)
      }),
      (t.clearNames = function (n) {
        this.names.has(n) && this.names.get(n).clear()
      }),
      (t.clearRules = function (n) {
        this.getTag().clearGroup(ds(n)), this.clearNames(n)
      }),
      (t.clearTag = function () {
        this.tag = void 0
      }),
      (t.toString = function () {
        return (function (n) {
          for (var r = n.getTag(), i = r.length, o = "", a = 0; a < i; a++) {
            var u = PA(a)
            if (u !== void 0) {
              var f = n.names.get(u),
                p = r.getGroup(a)
              if (f && p && f.size) {
                var v = _i + ".g" + a + '[id="' + u + '"]',
                  w = ""
                f !== void 0 &&
                  f.forEach(function (S) {
                    S.length > 0 && (w += S + ",")
                  }),
                  (o +=
                    "" +
                    p +
                    v +
                    '{content:"' +
                    w +
                    `"}/*!sc*/
`)
              }
            }
          }
          return o
        })(this)
      }),
      e
    )
  })(),
  UA = /(a)(d)/gi,
  wh = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97))
  }
function Xu(e) {
  var t,
    n = ""
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = wh(t % 52) + n
  return (wh(t % 52) + n).replace(UA, "$1-$2")
}
var oi = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n)
    return e
  },
  Qv = function (e) {
    return oi(5381, e)
  }
function WA(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t]
    if (So(n) && !ff(n)) return !1
  }
  return !0
}
var $A = Qv("5.3.11"),
  VA = (function () {
    function e(t, n, r) {
      ;(this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && WA(t)),
        (this.componentId = n),
        (this.baseHash = oi($A, n)),
        (this.baseStyle = r),
        Vv.registerId(n)
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var i = this.componentId,
          o = []
        if ((this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(t, n, r)), this.isStatic && !r.hash))
          if (this.staticRulesId && n.hasNameForId(i, this.staticRulesId)) o.push(this.staticRulesId)
          else {
            var a = Ai(this.rules, t, n, r).join(""),
              u = Xu(oi(this.baseHash, a) >>> 0)
            if (!n.hasNameForId(i, u)) {
              var f = r(a, "." + u, void 0, i)
              n.insertRules(i, u, f)
            }
            o.push(u), (this.staticRulesId = u)
          }
        else {
          for (var p = this.rules.length, v = oi(this.baseHash, r.hash), w = "", S = 0; S < p; S++) {
            var P = this.rules[S]
            if (typeof P == "string") w += P
            else if (P) {
              var b = Ai(P, t, n, r),
                O = Array.isArray(b) ? b.join("") : b
              ;(v = oi(v, O + S)), (w += O)
            }
          }
          if (w) {
            var F = Xu(v >>> 0)
            if (!n.hasNameForId(i, F)) {
              var g = r(w, "." + F, void 0, i)
              n.insertRules(i, F, g)
            }
            o.push(F)
          }
        }
        return o.join(" ")
      }),
      e
    )
  })(),
  QA = /^\s*\/\/.*$/gm,
  YA = [":", "[", ".", "#"]
function KA(e) {
  var t,
    n,
    r,
    i,
    o = e === void 0 ? ur : e,
    a = o.options,
    u = a === void 0 ? ur : a,
    f = o.plugins,
    p = f === void 0 ? ra : f,
    v = new cA(u),
    w = [],
    S = (function (O) {
      function F(g) {
        if (g)
          try {
            O(g + "}")
          } catch {}
      }
      return function (g, h, y, j, D, Y, K, V, ve, re) {
        switch (g) {
          case 1:
            if (ve === 0 && h.charCodeAt(0) === 64) return O(h + ";"), ""
            break
          case 2:
            if (V === 0) return h + "/*|*/"
            break
          case 3:
            switch (V) {
              case 102:
              case 112:
                return O(y[0] + h), ""
              default:
                return h + (re === 0 ? "/*|*/" : "")
            }
          case -2:
            h.split("/*|*/}").forEach(F)
        }
      }
    })(function (O) {
      w.push(O)
    }),
    P = function (O, F, g) {
      return (F === 0 && YA.indexOf(g[n.length]) !== -1) || g.match(i) ? O : "." + t
    }
  function b(O, F, g, h) {
    h === void 0 && (h = "&")
    var y = O.replace(QA, ""),
      j = F && g ? g + " " + F + " { " + y + " }" : y
    return (t = h), (n = F), (r = new RegExp("\\" + n + "\\b", "g")), (i = new RegExp("(\\" + n + "\\b){2,}")), v(g || !F ? "" : F, j)
  }
  return (
    v.use(
      [].concat(p, [
        function (O, F, g) {
          O === 2 && g.length && g[0].lastIndexOf(n) > 0 && (g[0] = g[0].replace(r, P))
        },
        S,
        function (O) {
          if (O === -2) {
            var F = w
            return (w = []), F
          }
        },
      ])
    ),
    (b.hash = p.length
      ? p
          .reduce(function (O, F) {
            return F.name || No(15), oi(O, F.name)
          }, 5381)
          .toString()
      : ""),
    b
  )
}
var Yv = at.createContext()
Yv.Consumer
var Kv = at.createContext(),
  GA = (Kv.Consumer, new Vv()),
  Zu = KA()
function qA() {
  return Cn.useContext(Yv) || GA
}
function JA() {
  return Cn.useContext(Kv) || Zu
}
var Gv = (function () {
    function e(t, n) {
      var r = this
      ;(this.inject = function (i, o) {
        o === void 0 && (o = Zu)
        var a = r.name + o.hash
        i.hasNameForId(r.id, a) || i.insertRules(r.id, a, o(r.rules, a, "@keyframes"))
      }),
        (this.toString = function () {
          return No(12, String(r.name))
        }),
        (this.name = t),
        (this.id = "sc-keyframes-" + t),
        (this.rules = n)
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Zu), this.name + t.hash
      }),
      e
    )
  })(),
  XA = /([A-Z])/,
  ZA = /([A-Z])/g,
  eS = /^ms-/,
  tS = function (e) {
    return "-" + e.toLowerCase()
  }
function _h(e) {
  return XA.test(e) ? e.replace(ZA, tS).replace(eS, "-ms-") : e
}
var Ah = function (e) {
  return e == null || e === !1 || e === ""
}
function Ai(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var i, o = [], a = 0, u = e.length; a < u; a += 1) (i = Ai(e[a], t, n, r)) !== "" && (Array.isArray(i) ? o.push.apply(o, i) : o.push(i))
    return o
  }
  if (Ah(e)) return ""
  if (ff(e)) return "." + e.styledComponentId
  if (So(e)) {
    if (typeof (p = e) != "function" || (p.prototype && p.prototype.isReactComponent) || !t) return e
    var f = e(t)
    return Ai(f, t, n, r)
  }
  var p
  return e instanceof Gv
    ? n
      ? (e.inject(n, r), e.getName(r))
      : e
    : Ju(e)
    ? (function v(w, S) {
        var P,
          b,
          O = []
        for (var F in w)
          w.hasOwnProperty(F) &&
            !Ah(w[F]) &&
            ((Array.isArray(w[F]) && w[F].isCss) || So(w[F])
              ? O.push(_h(F) + ":", w[F], ";")
              : Ju(w[F])
              ? O.push.apply(O, v(w[F], F))
              : O.push(
                  _h(F) +
                    ": " +
                    ((P = F),
                    (b = w[F]) == null || typeof b == "boolean" || b === ""
                      ? ""
                      : typeof b != "number" || b === 0 || P in fA || P.startsWith("--")
                      ? String(b).trim()
                      : b + "px") +
                    ";"
                ))
        return S ? [S + " {"].concat(O, ["}"]) : O
      })(e)
    : e.toString()
}
var Sh = function (e) {
  return Array.isArray(e) && (e.isCss = !0), e
}
function qv(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]
  return So(e) || Ju(e) ? Sh(Ai(gh(ra, [e].concat(n)))) : n.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Sh(Ai(gh(e, n)))
}
var nS = function (e, t, n) {
    return n === void 0 && (n = ur), (e.theme !== n.theme && e.theme) || t || n.theme
  },
  rS = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  iS = /(^-|-$)/g
function Kl(e) {
  return e.replace(rS, "-").replace(iS, "")
}
var Jv = function (e) {
  return Xu(Qv(e) >>> 0)
}
function ps(e) {
  return typeof e == "string" && !0
}
var ec = function (e) {
    return typeof e == "function" || (typeof e == "object" && e !== null && !Array.isArray(e))
  },
  oS = function (e) {
    return e !== "__proto__" && e !== "constructor" && e !== "prototype"
  }
function sS(e, t, n) {
  var r = e[n]
  ec(t) && ec(r) ? Xv(r, t) : (e[n] = t)
}
function Xv(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]
  for (var i = 0, o = n; i < o.length; i++) {
    var a = o[i]
    if (ec(a)) for (var u in a) oS(u) && sS(e, a[u], u)
  }
  return e
}
var Zv = at.createContext()
Zv.Consumer
var Gl = {}
function ey(e, t, n) {
  var r = ff(e),
    i = !ps(e),
    o = t.attrs,
    a = o === void 0 ? ra : o,
    u = t.componentId,
    f =
      u === void 0
        ? (function (h, y) {
            var j = typeof h != "string" ? "sc" : Kl(h)
            Gl[j] = (Gl[j] || 0) + 1
            var D = j + "-" + Jv("5.3.11" + j + Gl[j])
            return y ? y + "-" + D : D
          })(t.displayName, t.parentComponentId)
        : u,
    p = t.displayName,
    v =
      p === void 0
        ? (function (h) {
            return ps(h) ? "styled." + h : "Styled(" + vh(h) + ")"
          })(e)
        : p,
    w = t.displayName && t.componentId ? Kl(t.displayName) + "-" + t.componentId : t.componentId || f,
    S = r && e.attrs ? Array.prototype.concat(e.attrs, a).filter(Boolean) : a,
    P = t.shouldForwardProp
  r &&
    e.shouldForwardProp &&
    (P = t.shouldForwardProp
      ? function (h, y, j) {
          return e.shouldForwardProp(h, y, j) && t.shouldForwardProp(h, y, j)
        }
      : e.shouldForwardProp)
  var b,
    O = new VA(n, w, r ? e.componentStyle : void 0),
    F = O.isStatic && a.length === 0,
    g = function (h, y) {
      return (function (j, D, Y, K) {
        var V = j.attrs,
          ve = j.componentStyle,
          re = j.defaultProps,
          Ie = j.foldedComponentIds,
          We = j.shouldForwardProp,
          Fe = j.styledComponentId,
          st = j.target,
          Xe = (function ($, E, ee) {
            $ === void 0 && ($ = ur)
            var I = In({}, E, { theme: $ }),
              pe = {}
            return (
              ee.forEach(function (se) {
                var te,
                  Z,
                  G,
                  Ce = se
                for (te in (So(Ce) && (Ce = Ce(I)), Ce)) I[te] = pe[te] = te === "className" ? ((Z = pe[te]), (G = Ce[te]), Z && G ? Z + " " + G : Z || G) : Ce[te]
              }),
              [I, pe]
            )
          })(nS(D, Cn.useContext(Zv), re) || ur, D, V),
          rt = Xe[0],
          Ze = Xe[1],
          W = (function ($, E, ee, I) {
            var pe = qA(),
              se = JA(),
              te = E ? $.generateAndInjectStyles(ur, pe, se) : $.generateAndInjectStyles(ee, pe, se)
            return te
          })(ve, K, rt),
          k = Y,
          m = Ze.$as || D.$as || Ze.as || D.as || st,
          M = ps(m),
          C = Ze !== D ? In({}, D, {}, Ze) : D,
          T = {}
        for (var z in C) z[0] !== "$" && z !== "as" && (z === "forwardedAs" ? (T.as = C[z]) : (We ? We(z, dh, m) : !M || dh(z)) && (T[z] = C[z]))
        return (
          D.style && Ze.style !== D.style && (T.style = In({}, D.style, {}, Ze.style)),
          (T.className = Array.prototype
            .concat(Ie, Fe, W !== Fe ? W : null, D.className, Ze.className)
            .filter(Boolean)
            .join(" ")),
          (T.ref = k),
          Cn.createElement(m, T)
        )
      })(b, h, y, F)
    }
  return (
    (g.displayName = v),
    ((b = at.forwardRef(g)).attrs = S),
    (b.componentStyle = O),
    (b.displayName = v),
    (b.shouldForwardProp = P),
    (b.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ra),
    (b.styledComponentId = w),
    (b.target = r ? e.target : e),
    (b.withComponent = function (h) {
      var y = t.componentId,
        j = (function (Y, K) {
          if (Y == null) return {}
          var V,
            ve,
            re = {},
            Ie = Object.keys(Y)
          for (ve = 0; ve < Ie.length; ve++) (V = Ie[ve]), K.indexOf(V) >= 0 || (re[V] = Y[V])
          return re
        })(t, ["componentId"]),
        D = y && y + "-" + (ps(h) ? h : Kl(vh(h)))
      return ey(h, In({}, j, { attrs: S, componentId: D }), n)
    }),
    Object.defineProperty(b, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps
      },
      set: function (h) {
        this._foldedDefaultProps = r ? Xv({}, e.defaultProps, h) : h
      },
    }),
    Object.defineProperty(b, "toString", {
      value: function () {
        return "." + b.styledComponentId
      },
    }),
    i &&
      OA(b, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }),
    b
  )
}
var tc = function (e) {
  return (function t(n, r, i) {
    if ((i === void 0 && (i = ur), !Bv.isValidElementType(r))) return No(1, String(r))
    var o = function () {
      return n(r, i, qv.apply(void 0, arguments))
    }
    return (
      (o.withConfig = function (a) {
        return t(n, r, In({}, i, {}, a))
      }),
      (o.attrs = function (a) {
        return t(n, r, In({}, i, { attrs: Array.prototype.concat(i.attrs, a).filter(Boolean) }))
      }),
      o
    )
  })(ey, e)
}
;[
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "textPath",
  "tspan",
].forEach(function (e) {
  tc[e] = tc(e)
})
function pf(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]
  var i = qv.apply(void 0, [e].concat(n)).join(""),
    o = Jv(i)
  return new Gv(o, i)
}
const Po = tc
var ty =
    (globalThis && globalThis.__makeTemplateObject) ||
    function (e, t) {
      return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e
    },
  un = 242.776657104492,
  aS = 1.6,
  lS = pf(
    Eh ||
      (Eh = ty(
        [
          `
  12.5% {
    stroke-dasharray: `,
          "px, ",
          `px;
    stroke-dashoffset: -`,
          `px;
  }
  43.75% {
    stroke-dasharray: `,
          "px, ",
          `px;
    stroke-dashoffset: -`,
          `px;
  }
  100% {
    stroke-dasharray: `,
          "px, ",
          `px;
    stroke-dashoffset: -`,
          `px;
  }
`,
        ],
        [
          `
  12.5% {
    stroke-dasharray: `,
          "px, ",
          `px;
    stroke-dashoffset: -`,
          `px;
  }
  43.75% {
    stroke-dasharray: `,
          "px, ",
          `px;
    stroke-dashoffset: -`,
          `px;
  }
  100% {
    stroke-dasharray: `,
          "px, ",
          `px;
    stroke-dashoffset: -`,
          `px;
  }
`,
        ]
      )),
    un * 0.14,
    un,
    un * 0.11,
    un * 0.35,
    un,
    un * 0.35,
    un * 0.01,
    un,
    un * 0.99
  )
Po.path(
  kh ||
    (kh = ty(
      [
        `
  stroke-dasharray: `,
        "px, ",
        `;
  stroke-dashoffset: 0;
  animation: `,
        " ",
        `s linear infinite;
`,
      ],
      [
        `
  stroke-dasharray: `,
        "px, ",
        `;
  stroke-dashoffset: 0;
  animation: `,
        " ",
        `s linear infinite;
`,
      ]
    )),
  un * 0.01,
  un,
  lS,
  aS
)
var Eh,
  kh,
  bh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (bh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        bh.apply(this, arguments)
      )
    },
  xh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (xh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        xh.apply(this, arguments)
      )
    },
  Ch =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Ch =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        Ch.apply(this, arguments)
      )
    },
  Oh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Oh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        Oh.apply(this, arguments)
      )
    },
  Th =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Th =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        Th.apply(this, arguments)
      )
    },
  Nh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Nh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        Nh.apply(this, arguments)
      )
    },
  Ph =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Ph =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        Ph.apply(this, arguments)
      )
    },
  uS = function (t, n) {
    return function () {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      if (typeof r[t] < "u") return r[t]
      if (t && t.indexOf(".") > 0) {
        for (var i = t.split("."), o = i.length, a = r[i[0]], u = 1; a != null && u < o; ) (a = a[i[u]]), (u += 1)
        if (typeof a < "u") return a
      }
      return n
    }
  },
  hf =
    (globalThis && globalThis.__makeTemplateObject) ||
    function (e, t) {
      return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e
    },
  jh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (jh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        jh.apply(this, arguments)
      )
    },
  cS = pf(
    Rh ||
      (Rh = hf(
        [
          `
 to {
    transform: rotate(360deg);
  }
`,
        ],
        [
          `
 to {
    transform: rotate(360deg);
  }
`,
        ]
      ))
  )
Po.svg(
  Lh ||
    (Lh = hf(
      [
        `
  animation: `,
        ` 0.75s steps(12, end) infinite;
  animation-duration: `,
        `s;
`,
      ],
      [
        `
  animation: `,
        ` 0.75s steps(12, end) infinite;
  animation-duration: `,
        `s;
`,
      ]
    )),
  cS,
  uS("speed", "0.75")
)
Po.polyline(
  Ih ||
    (Ih = hf(
      [
        `
  stroke-width: `,
        `px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`,
      ],
      [
        `
  stroke-width: `,
        `px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`,
      ]
    )),
  function (e) {
    return e.width
  }
)
var Rh,
  Lh,
  Ih,
  Mh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Mh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        Mh.apply(this, arguments)
      )
    },
  Dh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Dh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        Dh.apply(this, arguments)
      )
    },
  no =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (no =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        no.apply(this, arguments)
      )
    },
  fS = function (e) {
    var t = e.height,
      n = t === void 0 ? 80 : t,
      r = e.width,
      i = r === void 0 ? 80 : r,
      o = e.radius,
      a = o === void 0 ? 9 : o,
      u = e.color,
      f = u === void 0 ? sA : u,
      p = e.ariaLabel,
      v = p === void 0 ? "three-dots-loading" : p,
      w = e.wrapperStyle,
      S = e.wrapperClass,
      P = e.visible,
      b = P === void 0 ? !0 : P
    return at.createElement(
      "div",
      no({ style: no(no({}, oA(b)), w), className: S, "data-testid": "three-dots-loading", "aria-label": v }, aA),
      at.createElement(
        "svg",
        { width: i, height: n, viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg", fill: f, "data-testid": "three-dots-svg" },
        at.createElement(
          "circle",
          { cx: "15", cy: "15", r: Number(a) + 6 },
          at.createElement("animate", {
            attributeName: "r",
            from: "15",
            to: "15",
            begin: "0s",
            dur: "0.8s",
            values: "15;9;15",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
          at.createElement("animate", {
            attributeName: "fill-opacity",
            from: "1",
            to: "1",
            begin: "0s",
            dur: "0.8s",
            values: "1;.5;1",
            calcMode: "linear",
            repeatCount: "indefinite",
          })
        ),
        at.createElement(
          "circle",
          { cx: "60", cy: "15", r: a, attributeName: "fill-opacity", from: "1", to: "0.3" },
          at.createElement("animate", {
            attributeName: "r",
            from: "9",
            to: "9",
            begin: "0s",
            dur: "0.8s",
            values: "9;15;9",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
          at.createElement("animate", {
            attributeName: "fill-opacity",
            from: "0.5",
            to: "0.5",
            begin: "0s",
            dur: "0.8s",
            values: ".5;1;.5",
            calcMode: "linear",
            repeatCount: "indefinite",
          })
        ),
        at.createElement(
          "circle",
          { cx: "105", cy: "15", r: Number(a) + 6 },
          at.createElement("animate", {
            attributeName: "r",
            from: "15",
            to: "15",
            begin: "0s",
            dur: "0.8s",
            values: "15;9;15",
            calcMode: "linear",
            repeatCount: "indefinite",
          }),
          at.createElement("animate", {
            attributeName: "fill-opacity",
            from: "1",
            to: "1",
            begin: "0s",
            dur: "0.8s",
            values: "1;.5;1",
            calcMode: "linear",
            repeatCount: "indefinite",
          })
        )
      )
    )
  },
  mf =
    (globalThis && globalThis.__makeTemplateObject) ||
    function (e, t) {
      return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e
    },
  zh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (zh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        zh.apply(this, arguments)
      )
    },
  dS = pf(
    Bh ||
      (Bh = mf(
        [
          `
 to {
    stroke-dashoffset: 136;
  }
`,
        ],
        [
          `
 to {
    stroke-dashoffset: 136;
  }
`,
        ]
      ))
  )
Po.polygon(
  Fh ||
    (Fh = mf(
      [
        `
  stroke-dasharray: 17;
  animation: `,
        ` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`,
      ],
      [
        `
  stroke-dasharray: 17;
  animation: `,
        ` 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`,
      ]
    )),
  dS
)
Po.svg(
  Hh ||
    (Hh = mf(
      [
        `
  transform-origin: 50% 65%;
`,
      ],
      [
        `
  transform-origin: 50% 65%;
`,
      ]
    ))
)
var Bh,
  Fh,
  Hh,
  Uh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Uh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        Uh.apply(this, arguments)
      )
    },
  Wh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Wh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        Wh.apply(this, arguments)
      )
    },
  $h =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        ($h =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        $h.apply(this, arguments)
      )
    },
  Vh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Vh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        Vh.apply(this, arguments)
      )
    },
  Qh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Qh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        Qh.apply(this, arguments)
      )
    },
  Yh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Yh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        Yh.apply(this, arguments)
      )
    },
  Kh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Kh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        Kh.apply(this, arguments)
      )
    },
  Gh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Gh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        Gh.apply(this, arguments)
      )
    },
  qh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (qh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        qh.apply(this, arguments)
      )
    },
  Jh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Jh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        Jh.apply(this, arguments)
      )
    },
  Xh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Xh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        Xh.apply(this, arguments)
      )
    },
  Zh =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Zh =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        Zh.apply(this, arguments)
      )
    },
  em =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (em =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n]
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
          }),
        em.apply(this, arguments)
      )
    }
const pS = ({ children: e, actions: t }) => {
    Cn.useEffect(() => {
      if (
        (document.querySelectorAll(".react-chatbot-kit-chat-bot-message-container").forEach((a) => {
          const u = a.querySelector(".react-chatbot-kit-chat-bot-message")
          u && u.innerText.trim() === "" && a.classList.add("d-none")
        }),
        document.querySelectorAll(".react-chatbot-kit-user-chat-message-container").length > 0)
      ) {
        const a = document.querySelector(".options-container")
        a && a.remove()
      }
    })
    const n = (i) => {
        const o = document.querySelector(".react-chatbot-kit-chat-input")
        o && (o.disabled = i)
      },
      r = (i) => {
        n(!0)
        const o = document.querySelector(".react-chatbot-kit-chat-message-container"),
          a = document.createElement("div")
        o.appendChild(a),
          hv(a).render(x.jsx(fS, { height: 60, width: 60, radius: 6, color: "#182b4e" })),
          iA
            .post("https://wizkid-bot-backend.brainxdemo.com/api/query", { query: i, headers: { "Content-Type": "application/json" } })
            .then((u) => {
              n(!1)
              const f = "6:14pm"
              t.sendCustomMessage(u.data.Answer, f, u.data.Score), o.removeChild(a)
            })
            .catch((u) => {
              n(!1), console.error(u), o.removeChild(a)
            })
      }
    return x.jsx(x.Fragment, { children: at.Children.map(e, (i) => at.cloneElement(i, { parse: r, actions: { ...t, sendMessage: t.sendMessage } })) })
  },
  hS = ({ createChatBotMessage: e, setState: t, children: n }) => {
    const r = (o) => {
        t((a) => ({ ...a, messages: [...a.messages, e(o)] }))
      },
      i = (o, a, u) => {
        const f = { text: o, timestamp: a, score: u }
        t((p) => ({ ...p, messages: [...p.messages, e(f)] }))
      }
    return x.jsx(x.Fragment, { children: at.Children.map(n, (o) => at.cloneElement(o, { actions: { ...o.props.actions, sendMessage: r, sendCustomMessage: i } })) })
  }
function mS() {
  return x.jsx("div", {
    className: "react-chatbot-kit-chat-footer text-center pb-2",
    children: x.jsxs("span", {
      className: "fw-bold",
      children: [
        "Sometimes Wiz Kid Bot makes mistakes,",
        " ",
        x.jsx("a", { href: "https://www.chatbot.com/help/", className: "text-decoration-underline", children: "Click here to find out why" }),
      ],
    }),
  })
}
const ny =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAKCAYAAAB4zEQNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABWSURBVHgBhY9ZDQAhDESbVbASVgIS1wESwAkSkFAJSChDOEIajkneD29oWiIVEbGAgdHCSU0CX398QZiEmUVsgsePJnkpkIdOKe3t2ONCquRvhb/fmQHwYoiqH5KuTQAAAABJRU5ErkJggg=="
function gS() {
  const e = () => {
      document.querySelector(".app-chatbot-container").classList.toggle("d-none"), document.querySelector(".app-chatbot-button").classList.toggle("d-none")
    },
    t = () => {
      document.querySelector(".message-history-container").classList.toggle("d-none"), document.querySelector(".chat-history-container").classList.toggle("d-none")
    }
  return x.jsx(x.Fragment, {
    children: x.jsxs("div", {
      className: "chat-history-container d-none",
      children: [
        x.jsxs("div", {
          className: "chat-history-header d-flex justify-content-between align-items-center py-4",
          children: [
            x.jsxs("div", {
              className: "d-flex justify-content-start align-items-center",
              children: [
                x.jsx("img", { src: ny, alt: "", className: "action-button mx-3", onClick: t }),
                x.jsx("img", { src: ii, className: "w-25 h-25" }),
                x.jsx("span", { className: "mx-3 fw-bold", children: "WizKid" }),
              ],
            }),
            x.jsx("div", { className: "col-1", children: x.jsx("img", { src: Jc, alt: "", className: "action-button cross-icon", onClick: e }) }),
          ],
        }),
        x.jsx("div", { className: "text-center", children: x.jsx("span", { className: "chat-history-date d-inline-block text-center mt-4", children: "Feb 12 2023" }) }),
        x.jsxs("div", {
          className: "chat-history-messages-container",
          children: [
            x.jsxs("div", {
              className: "chat-history-user-message-container",
              children: [
                x.jsx("div", { className: "react-chatbot-kit-user-chat-message", children: "Hello" }),
                x.jsx("div", { className: "react-chatbot-kit-message-time mt-2 mx-1", children: "11:30 AM" }),
              ],
            }),
            x.jsxs("div", {
              className: "react-chatbot-kit-chat-bot-message-container",
              children: [
                x.jsx("div", {
                  className: "react-chatbot-kit-chat-avatar pb-2",
                  children: x.jsxs("div", {
                    className: "d-flex align-items-center",
                    children: [x.jsx("img", { src: ii }), x.jsx("span", { className: "px-2", children: "WizKid" })],
                  }),
                }),
                x.jsx("div", {
                  className: "react-chatbot-kit-chat-bot-message",
                  children: "Hello, and welcome to the Wizkid Chatbot. My name is Wizkid, and Im here to assist you. How can I be of service ?",
                }),
                x.jsx("div", { className: "react-chatbot-kit-message-time mt-2 mx-1", children: "11:30 AM" }),
              ],
            }),
            x.jsxs("div", {
              className: "chat-history-user-message-container",
              children: [
                x.jsx("div", { className: "react-chatbot-kit-user-chat-message", children: "Hello" }),
                x.jsx("div", { className: "react-chatbot-kit-message-time mt-2 mx-1", children: "11:30 AM" }),
              ],
            }),
            x.jsxs("div", {
              className: "react-chatbot-kit-chat-bot-message-container",
              children: [
                x.jsx("div", {
                  className: "react-chatbot-kit-chat-avatar pb-2",
                  children: x.jsxs("div", {
                    className: "d-flex align-items-center",
                    children: [x.jsx("img", { src: ii }), x.jsx("span", { className: "px-2", children: "WizKid" })],
                  }),
                }),
                x.jsx("div", {
                  className: "react-chatbot-kit-chat-bot-message",
                  children: "Hello, and welcome to the Wizkid Chatbot. My name is Wizkid, and Im here to assist you. How can I be of service ?",
                }),
                x.jsx("div", { className: "react-chatbot-kit-message-time mt-2 mx-1", children: "11:30 AM" }),
              ],
            }),
            x.jsxs("div", {
              className: "chat-history-user-message-container",
              children: [
                x.jsx("div", { className: "react-chatbot-kit-user-chat-message", children: "Hello" }),
                x.jsx("div", { className: "react-chatbot-kit-message-time mt-2 mx-1", children: "11:30 AM" }),
              ],
            }),
            x.jsxs("div", {
              className: "react-chatbot-kit-chat-bot-message-container",
              children: [
                x.jsx("div", {
                  className: "react-chatbot-kit-chat-avatar pb-2",
                  children: x.jsxs("div", {
                    className: "d-flex align-items-center",
                    children: [x.jsx("img", { src: ii }), x.jsx("span", { className: "px-2", children: "WizKid" })],
                  }),
                }),
                x.jsx("div", {
                  className: "react-chatbot-kit-chat-bot-message",
                  children: "Hello, and welcome to the Wizkid Chatbot. My name is Wizkid, and Im here to assist you. How can I be of service ?",
                }),
                x.jsx("div", { className: "react-chatbot-kit-message-time mt-2 mx-1", children: "11:30 AM" }),
              ],
            }),
            x.jsx("div", { className: "fw-bold text-center text-decoration-underline", children: "Chat Ended" }),
          ],
        }),
      ],
    }),
  })
}
const vS =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA7SURBVHgBNclBDQAgDEPR0SAAh2jAATjAyhwhYQoW2gSW/MNbi7v3zNxmFgBmJSbRlAY8/As9BjsCWxcidxJitah3sAAAAABJRU5ErkJggg==",
  ql =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPHSURBVHgBvVhNTBNBFP5mCmok6kYjF6O2MZoYQeDEtXAWrTdulItHwSOJCZCYeJRy5ALcuFHFM9SjJxrBmHiwS4we8A8SMUpl1/e63W13u7sztcCXLJ2d/Wbm4/3Mm12BZpFZT+KgPQOJHkCkAdugXqP6dIcuk/pNWPYrJMp55PtMNAGhzRx6k4WUI9RKozkUYVk5rNxe0CGrBd3ZSCMh5qmVRGsgq1nTKmHRgjLrBqz2SWKM4zBhYwayPE2u3IG2II4Tu32ZWr04GpgQ5YGw+BIRYtbQuov+S5QIiDFIzPoxiHFRrIry3Cd9jzlmjk8Mo7e6poeahZy0nocmjA6JTP/Zyu/Myne0hAN7AC+7C9ysWUjKSZ2xLGBy+CJKczcw//ASdvasSG6ysx1acLYVR0blL1tHw1W8wPqza5ga7iRhCZjbZSyshmYvsoMG1p4kdUUlqxqqgqQcU46giZ0FTnh900vbkXy2InP5H+hNnYISThWgGHLSvKTil+au+8SwdVIP3keI6SQrXqzj7qPv0Qdy7wFiIcopshAVSgV4gXoxjCjrsCWzg+cCfScwPnQeSlDRllRf0ipecIG42JmquiqIsaELlbiLBZ0g2iDk1ThOuqtD2zouFld/+O7PkRDeInpTJ1HY/BU3NN0GRXalu0777uOsw8jOfm7oW564XJ2rQyXI4Cwz4hjNWicIjj+2DuOqegswJJqAyjphYuqzTQfsMl4h0krF0m+MeIL2QxcIE5rpP9PA3SKeAjssaFclyAXHAF9BjM5+8t1z6nNZCaKwuYd4CFPSCa4QR+FJ4ja0oHXcHT2Y4sxTBDSdJu0tSblfhAK5mGpeH+RceIPlxUVwKwgXhAIFdSKv4s2sfPO5zkXQOuymMDHMm1r6AiUSibxE/qZJzUIcj112/+nHysT1yK189dr16R0UM/DYhBqiyFqctBdYVNE5w3hiVxT/5l//9MREZZ8zZh9KCDvnSHFx7y1VfDsJDfB5iK3GruT0Xp644nvOh7YcPePnygrvqDHx/FaKW221PmsUtljTGE3xUAtkjhk3YIulP5VY40tPiLu2Pe01fQ/ubsxACOVh7VBhk6tedHsvo/7SIf9OAept4PBArnLWrPU0cDLv6ARprenGU0tihByoZrmHxuLKBCbygKNDMUxMuCBP1H5fxb+HDZ6z8rbaKIah/hyT2cxS9k227kJ2EWVy3nkhjGRBFyzMsscpC3vQDGz6kibFAvJdCzp0fUGeMAp6HGRg8Zc0spoQfCav/6S3S0lRoPcsytbmP+n9A4NGj33RGpsCAAAAAElFTkSuQmCC",
  Jl =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPCSURBVHgBvVg9TBRREJ55d3qCf0cgUUIMBzRiwU+p1ZFIoMSeBGhtwGhsgdbEAIW2grHnSgiFR2UpsTkacI0xamLkMMh5/Ow4s7cHe/v3dvn7ksv+3Lz3vp33zbx5DyEmSoVs5jKmhgChGwmyfE0D8U+AUAQig+8MAlzdI8zVdS4ZcfrHqIaH6wMTbDzOtxmIBSqSidOJe8uzUay1hPYLD7MJTLyJT8QDwyRzOtm5Mg8nIVQqDGZSimZ4OobgDEEI82q3/AR780WISoiYDKG5yH/3wPnAKBP2+ekL/cnQezj9FJ2IlHI+lC6OjCCT4lmgj9k0BBGyNHMxZGxgj1mfmgE/QhLWsQSsrgLc6AdoOJ3mOZeN7hcGsx5CiDAZqQch0jgM2PEWsPkpf8nfYNtLtyAKElYAOQgdFPpHj7JtGHgAzLwGbBquENv/CfBnxd/2Zj/gnRcRSWHa4lAlpJQa17YRMq4B6Ne74CHYi1ab1lcsznbQQaEasdrZYf5Z1wDbF2q/lr1DmyP+xjKl4kWnrfEYwAyZXgangTZlIulVaX+tE4HeEa/wdLnfQcMj0OEy0ZDizJjVGXoGCNOOD3mrD4lG0V0YEtCd5FzdyoIORl1XdO+Anfq3XWSFyPUHAFc6AHY/BbflciYJukRY31X7HOYdIfvjpfdly2SFqHxcCCFunVbacI/hHV+IwK/d9+3LC0wriAONd3zJOKMtApKVsjPES+VNqCHU6DOAH1H2ioeM2IWCikkwYduqiwMJbRzfs57QrSnp5rtLNxL6zc88dlAK048FQxFQPtRERBiW0NzeqWZ0d4iL3a6GkAlfFK+qa6AB/V4M/s8pciYRuH5F0B7vVPJK8VZFa1nM1WqpCrd3ZJr8yMjSESE69xBzCislZD7U8nAH6Nu0R5S05fCcM7zdZL4+Bz1oTcpZK+xNwgWtfbXjKim57nw4JtM0rG8TApPUnFyPinxzfUBW/AxEgDW4eG0rVwnvFldtJ0HA3rO0p1nhbRjq7nKb3CSrbw4JxxKVAl+LGj1cun20dpHoTNLEv42oRCr8Caer9zXbIK6rZ+3t8oWBTJjjbfZE9blm6VCpuimmqE0DZwhDlctTzhc1hLAtV0QTpZIy4ALIyEbRvaX2LK6SBpANz5cUrQVtpX1Xe4tUqq6X67Y5OGsqrBks7fUFnRtpj2MOCoOjCkniOgOng3h+jD82H2YU+cDKJibR0A1xQLRqgppPdi7NRzGPTOiof942yU7F3hxk7Jr8+EiPyxmrguBFW9ZJjHmk9x90uYisqdy4+wAAAABJRU5ErkJggg==",
  Xl =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQqSURBVHgBvVhNaBNBFH4zu01BbYhSUEzBbVSwIkQvrb1IRb2IB/UkHqy9KWirF6+1Zw8aFdRTqwdBUPQgXlRsvZR6aQtiC0q7QitKc4gJVdomM763yaa7292djf35YMlm9s3Mt+9n3nvLoEYYw7cNLrXTwHkamOjAoQQAS5SfypwEZjIJJgg5JFjpldl+3YQawKIK7h6+e1Ew1skYdEANkABjUsiM2d49EEVeSQg10sG51o+iBqwCEqQpBfSpiAUSMkZvJ2BR6+XArsEaQoC8A7FSn3noeg6iEiI/YZr+En3hIKwDytoqHfXzL+ZHBk30YbUm+l9SLkJkJr6oja43mSophg5fVzzqNB93SaDPbBQZguUS1p6OMfuGwlpy1g8R0aDVw4mtKYhrMRj4NQ6rgRCAprs6SPdVDUkOvVEmE5Huna3wMX0BbqWOQaG0ECibjDVEWRIYl1VFWIRIO1FMlYzF4fWBc9DT1ApxvR5mF/LwIjvpK3u2sQWetpyJRIrh3obFoUJIaKxHNYnI0AZN9csbZGY/Bcr3JFtRtvwCLZsaQUlKY53WbznM9WnVhKF0p4sMaefI+JNAMt142ZhB2VOfn4WalyBEsZlbiVKB8tu6VR+kHdIkmcsJ0lTX9jSoQFw44+pk6d0gzHf8yBO6dqStgAhnxNO64GwXngeBaIsnI2vHAi72IjvhGopXjoj96EsjhdmQuaJDx/kGhKCtIen6H6Ydwo2p9yvGHu45WV4LXy6UENZVFGWJEAnL/k6EascHZMIT21KVtZRHQIJDDVBpx4+MM9qiQMeLEluglibm5wAa91n3MwsF3w38iB5Hn/HK0nwFcjpI+RsYCyT05W+2ek8+QJcXN6beuf5T6N9qPrZCbiQf5j9WuWtyKdlgmBAtUigGH2he7dgnOqUWr1y4QxMj+Z0zKcdAgf6QbO50cjpnvOnFxvM5te8xAYOcWhWVYP/PcZj4k10x7tUOmcmPDMnd/aGOTsHqXnEqIbFyGwwTzGMOuvT1DS5cWEHUhjO8vWTOT74EFahdMtsvm1bY85J8rJowU1nYJkUbvc1NVckERR/NiRBdQL0b/VYrxtTIfcz40oAIIAJ5dHTyLQrvR3tPup4XKs/oyhcX1GSw251uu9JM97o9KITs4hw+QAQ4HbkJCzA7d03MZ61jgvwtCpEqISH67HtX15H6dO8O0lUWa2sKCZmpw1erzagrdYi64k1qTWCDQKYS9VtuOsdchKg/kiX9DCrOhA0gI4WGPVlXLpCQRQpDT6DgepKSjI1ZZHAv7zPfbG+Rii0dQg/LwJqzgYys2+xLhqD8HFNuIHlv1CMhmAczNYzkb5WGMAg1fbDCZhKjgamrddcGcqgkYGDNPlh5YQw/wE96S6epOcCINHCJXbBcT+WonKEKgpI25aYg0wThH3Cm4Bzl6FG1AAAAAElFTkSuQmCC",
  Zl =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQGSURBVHgBvVg9TBRREJ7ZWzmVIznxD4w/R9RGC8BWTfbURK3EqI2FSPxJrDQ2dipaWSmViahIY2FCxMaEwrBorMGCSswtkQhqIBhQc8fdjm/2uGX/bt+eHHwJ2WX3e+99Nzszb+YhVAjtcSYFarwNkJoRUROPkot/jFkgMgjQAIIhyGf79WtNBlQAjErUnk1cBFLaEUGDSkA0QiZ16Ve3v4hClwrSur9qGIv1iF+cguXBoILZKRNWVpDWk0mCGb8jCDegiiCAR6BkO/WOplmIKkjrmUwhma+BsAVWBgblsukg/8JgMTRYhU/0X6LQLSaTRIoPr4KYxdWFw2Mu7fx8iosgfGbVxDDYJXhNB2wLcVgjKD0QEbU1CId2roVEHKFv9A8sB2QW0vqVHTrfq7YyVNg6kYSc2VcLZ/cnLDEPPsyW5W5NxOD7fEE6JyoxNkQT31ufrJj05J+KF+g+tRkuHqizxEyJxQY+/w3kHt+zDh6e3GiNiYCU9kRoKAlCUq7LRvDEvEBD3dICvcNzZfntrXUWt7ttE+yuV0EKVWm3tFhhblJGxn95botLDFvn/KsfgdwLLQnLijZ3rgBX3/yE+Vy4T4g00KRAntpAAl7AKYZRzjpsyRN717ue8dgz+2tBCnVNmyK+lybjeRcI8532Vr94BgtK1Ei2TsRmFQF3hXGaG2oiW6c4J8LAmFtsKUXsrl8Dn6ZyYWM1VWSiFISgpbHG9X+YdRgP3vvTwL2jG+y5wgQJL0pylCVDGNCQiG6dILD/Hdq1NnAuPzCpQAWQWSdIjDPaooATBNu4rJXGZvJwvCRIhC87LUQQenBn3CdmSpq1aZYF/QoVNL1g37MPeH2K4d0+OPRvHd7g44X7D+tBQyEiPYzDk4QlNK91ShmdtxYvb2RSIghoXBGqRiQssZvPl33ndHIOb+/2UkIU32PjKKBiv4zI5cXYdN733GudW4eTgWKYFyk68wv9it7RaIhcpIfx5nMm3H4343NKp+Wc4e0Vc/PtNEhBMMLlrBX2RGavjF+auCSKrx/Hs7aYoPD2jgnVY5pdfLU9L/38WyZq+cqlBVutb/S3Fd73j9W73nMQ8Du2oGyHX4QxeGmbVaDZhQoVCh2ichuMMtrpDw0J1d67OEV8mVmwrhGFLK5tdpbuXbF55OnEI0J5sVZNCHfp0i9vt5tR19ZhxhbuConSNFBFGMBrOuASxP0RIZ4WogxYBTFWo+hpqX2bK6cBISq9oqK4QSzTSgfu9kVR2VbR33dBlcE+Y3WrZc6N5Mcx3EAWe7YULA8GmdihX2nUw0gVHViJcldEAzZDZRgSYf2iagdWPmGibeJOxTpJQ0pBsSZfOtIT5YxVQfCmnUdxpCe2pgrwDyTU244d2GqJAAAAAElFTkSuQmCC"
function yS() {
  const e = () => {
      document.querySelector(".app-chatbot-container").classList.toggle("d-none"), document.querySelector(".app-chatbot-button").classList.toggle("d-none")
    },
    t = () => {
      document.querySelector(".react-chatbot-kit-chat-container").classList.toggle("d-none"),
        document.querySelector(".react-chatbot-kit-chat-header").classList.toggle("d-none"),
        document.querySelector(".message-history-container").classList.toggle("d-none")
    },
    n = () => {
      document.querySelector(".message-history-container").classList.toggle("d-none"), document.querySelector(".chat-history-container").classList.toggle("d-none")
    },
    [r, i] = Cn.useState([
      { id: 1, title: "Hello and welcome to the WizKid !", date: "Today", image: ql },
      { id: 2, title: "Hello and welcome to the WizKid !", date: "Yesterday", image: Jl },
      { id: 3, title: "Hello how are you today ?", date: "2 weeks ago", image: Xl },
      { id: 4, title: "Hello World !", date: "1 month ago", image: Zl },
      { id: 5, title: "Hello and welcome to the WizKid !", date: "Today", image: ql },
      { id: 6, title: "Hello and welcome to the WizKid !", date: "Yesterday", image: Jl },
      { id: 7, title: "Hello how are you today ?", date: "2 weeks ago", image: Xl },
      { id: 8, title: "Hello World !", date: "1 month ago", image: Zl },
      { id: 9, title: "Hello and welcome to the WizKid !", date: "Today", image: ql },
      { id: 10, title: "Hello and welcome to the WizKid !", date: "Yesterday", image: Jl },
      { id: 11, title: "Hello how are you today ?", date: "2 weeks ago", image: Xl },
      { id: 12, title: "Hello World !", date: "1 month ago", image: Zl },
    ])
  return x.jsxs(x.Fragment, {
    children: [
      x.jsxs("div", {
        className: "message-history-container d-none",
        children: [
          x.jsxs("div", {
            className: "message-history-header d-flex justify-content-between align-items-center py-4",
            children: [
              x.jsxs("div", {
                className: "d-flex justify-content-between align-items-center",
                children: [
                  x.jsx("img", { src: ny, alt: "", className: "action-button mx-3", onClick: t }),
                  x.jsx("span", { className: "fw-bold", children: "Message History" }),
                ],
              }),
              x.jsx("div", { className: "col-1", children: x.jsx("img", { src: Jc, alt: "", className: "action-button cross-icon", onClick: e }) }),
            ],
          }),
          x.jsx("div", {
            className: "message-history-listing py-2",
            children: r.map((o) =>
              x.jsxs(
                "div",
                {
                  className: "message-history-item action-button d-flex flex-row my-2 align-items-center",
                  onClick: () => n(o.id),
                  children: [
                    x.jsx("div", { children: x.jsx("img", { src: o.image, className: "me-3" }) }),
                    x.jsx("div", {
                      children: x.jsxs("div", {
                        className: "d-flex flex-column",
                        children: [
                          x.jsx("div", { className: "fw-bold", children: o.title }),
                          x.jsxs("div", { className: "text-secondary", children: ["WizKid ", x.jsx("img", { src: vS, alt: "", className: "mx-1" }), " ", o.date] }),
                        ],
                      }),
                    }),
                    x.jsx("div", { className: "ms-auto", children: x.jsx("img", { src: xs, alt: "", className: "show-arrow" }) }),
                  ],
                },
                o.id
              )
            ),
          }),
        ],
      }),
      x.jsx(gS, {}),
    ],
  })
}
function wS() {
  const e = (n) => n.length > 0,
    t = () => {
      document.querySelector(".app-chatbot-container").classList.toggle("d-none")
    }
  return x.jsxs(x.Fragment, {
    children: [
      x.jsxs("div", {
        className: "app-chatbot-container d-none",
        children: [
          x.jsx(Pw, { config: Hw, messageParser: (n) => x.jsx(pS, { ...n }), actionProvider: hS, validator: e, placeholderText: "Type your message" }),
          x.jsx(yS, {}),
          x.jsx(mS, {}),
        ],
      }),
      x.jsx("img", { src: "chatbot-button.gif", className: "app-chatbot-button", onClick: t }),
    ],
  })
}
function _S() {
  return x.jsx(x.Fragment, { children: x.jsx(wS, {}) })
}
var AS = { exports: {} }
/*!
 * Bootstrap v5.2.3 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ ;(function (e, t) {
  ;(function (n, r) {
    e.exports = r()
  })(i0, function () {
    const n = "transitionend",
      r = (c) => {
        let s = c.getAttribute("data-bs-target")
        if (!s || s === "#") {
          let l = c.getAttribute("href")
          if (!l || (!l.includes("#") && !l.startsWith("."))) return null
          l.includes("#") && !l.startsWith("#") && (l = `#${l.split("#")[1]}`), (s = l && l !== "#" ? l.trim() : null)
        }
        return s
      },
      i = (c) => {
        const s = r(c)
        return s && document.querySelector(s) ? s : null
      },
      o = (c) => {
        const s = r(c)
        return s ? document.querySelector(s) : null
      },
      a = (c) => {
        c.dispatchEvent(new Event(n))
      },
      u = (c) => !(!c || typeof c != "object") && (c.jquery !== void 0 && (c = c[0]), c.nodeType !== void 0),
      f = (c) => (u(c) ? (c.jquery ? c[0] : c) : typeof c == "string" && c.length > 0 ? document.querySelector(c) : null),
      p = (c) => {
        if (!u(c) || c.getClientRects().length === 0) return !1
        const s = getComputedStyle(c).getPropertyValue("visibility") === "visible",
          l = c.closest("details:not([open])")
        if (!l) return s
        if (l !== c) {
          const d = c.closest("summary")
          if ((d && d.parentNode !== l) || d === null) return !1
        }
        return s
      },
      v = (c) =>
        !c ||
        c.nodeType !== Node.ELEMENT_NODE ||
        !!c.classList.contains("disabled") ||
        (c.disabled !== void 0 ? c.disabled : c.hasAttribute("disabled") && c.getAttribute("disabled") !== "false"),
      w = (c) => {
        if (!document.documentElement.attachShadow) return null
        if (typeof c.getRootNode == "function") {
          const s = c.getRootNode()
          return s instanceof ShadowRoot ? s : null
        }
        return c instanceof ShadowRoot ? c : c.parentNode ? w(c.parentNode) : null
      },
      S = () => {},
      P = (c) => {
        c.offsetHeight
      },
      b = () => (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null),
      O = [],
      F = () => document.documentElement.dir === "rtl",
      g = (c) => {
        var s
        ;(s = () => {
          const l = b()
          if (l) {
            const d = c.NAME,
              _ = l.fn[d]
            ;(l.fn[d] = c.jQueryInterface), (l.fn[d].Constructor = c), (l.fn[d].noConflict = () => ((l.fn[d] = _), c.jQueryInterface))
          }
        }),
          document.readyState === "loading"
            ? (O.length ||
                document.addEventListener("DOMContentLoaded", () => {
                  for (const l of O) l()
                }),
              O.push(s))
            : s()
      },
      h = (c) => {
        typeof c == "function" && c()
      },
      y = (c, s, l = !0) => {
        if (!l) return void h(c)
        const d =
          ((N) => {
            if (!N) return 0
            let { transitionDuration: L, transitionDelay: U } = window.getComputedStyle(N)
            const q = Number.parseFloat(L),
              X = Number.parseFloat(U)
            return q || X ? ((L = L.split(",")[0]), (U = U.split(",")[0]), 1e3 * (Number.parseFloat(L) + Number.parseFloat(U))) : 0
          })(s) + 5
        let _ = !1
        const A = ({ target: N }) => {
          N === s && ((_ = !0), s.removeEventListener(n, A), h(c))
        }
        s.addEventListener(n, A),
          setTimeout(() => {
            _ || a(s)
          }, d)
      },
      j = (c, s, l, d) => {
        const _ = c.length
        let A = c.indexOf(s)
        return A === -1 ? (!l && d ? c[_ - 1] : c[0]) : ((A += l ? 1 : -1), d && (A = (A + _) % _), c[Math.max(0, Math.min(A, _ - 1))])
      },
      D = /[^.]*(?=\..*)\.|.*/,
      Y = /\..*/,
      K = /::\d+$/,
      V = {}
    let ve = 1
    const re = { mouseenter: "mouseover", mouseleave: "mouseout" },
      Ie = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ])
    function We(c, s) {
      return (s && `${s}::${ve++}`) || c.uidEvent || ve++
    }
    function Fe(c) {
      const s = We(c)
      return (c.uidEvent = s), (V[s] = V[s] || {}), V[s]
    }
    function st(c, s, l = null) {
      return Object.values(c).find((d) => d.callable === s && d.delegationSelector === l)
    }
    function Xe(c, s, l) {
      const d = typeof s == "string",
        _ = d ? l : s || l
      let A = k(c)
      return Ie.has(A) || (A = c), [d, _, A]
    }
    function rt(c, s, l, d, _) {
      if (typeof s != "string" || !c) return
      let [A, N, L] = Xe(s, l, d)
      s in re &&
        (N = ((ce) =>
          function (ae) {
            if (!ae.relatedTarget || (ae.relatedTarget !== ae.delegateTarget && !ae.delegateTarget.contains(ae.relatedTarget))) return ce.call(this, ae)
          })(N))
      const U = Fe(c),
        q = U[L] || (U[L] = {}),
        X = st(q, N, A ? l : null)
      if (X) return void (X.oneOff = X.oneOff && _)
      const Q = We(N, s.replace(D, "")),
        he = A
          ? (function (ie, ce, ae) {
              return function fe(De) {
                const He = ie.querySelectorAll(ce)
                for (let { target: ye } = De; ye && ye !== this; ye = ye.parentNode)
                  for (const Oe of He) if (Oe === ye) return M(De, { delegateTarget: ye }), fe.oneOff && m.off(ie, De.type, ce, ae), ae.apply(ye, [De])
              }
            })(c, l, N)
          : (function (ie, ce) {
              return function ae(fe) {
                return M(fe, { delegateTarget: ie }), ae.oneOff && m.off(ie, fe.type, ce), ce.apply(ie, [fe])
              }
            })(c, N)
      ;(he.delegationSelector = A ? l : null), (he.callable = N), (he.oneOff = _), (he.uidEvent = Q), (q[Q] = he), c.addEventListener(L, he, A)
    }
    function Ze(c, s, l, d, _) {
      const A = st(s[l], d, _)
      A && (c.removeEventListener(l, A, !!_), delete s[l][A.uidEvent])
    }
    function W(c, s, l, d) {
      const _ = s[l] || {}
      for (const A of Object.keys(_))
        if (A.includes(d)) {
          const N = _[A]
          Ze(c, s, l, N.callable, N.delegationSelector)
        }
    }
    function k(c) {
      return (c = c.replace(Y, "")), re[c] || c
    }
    const m = {
      on(c, s, l, d) {
        rt(c, s, l, d, !1)
      },
      one(c, s, l, d) {
        rt(c, s, l, d, !0)
      },
      off(c, s, l, d) {
        if (typeof s != "string" || !c) return
        const [_, A, N] = Xe(s, l, d),
          L = N !== s,
          U = Fe(c),
          q = U[N] || {},
          X = s.startsWith(".")
        if (A === void 0) {
          if (X) for (const Q of Object.keys(U)) W(c, U, Q, s.slice(1))
          for (const Q of Object.keys(q)) {
            const he = Q.replace(K, "")
            if (!L || s.includes(he)) {
              const ie = q[Q]
              Ze(c, U, N, ie.callable, ie.delegationSelector)
            }
          }
        } else {
          if (!Object.keys(q).length) return
          Ze(c, U, N, A, _ ? l : null)
        }
      },
      trigger(c, s, l) {
        if (typeof s != "string" || !c) return null
        const d = b()
        let _ = null,
          A = !0,
          N = !0,
          L = !1
        s !== k(s) && d && ((_ = d.Event(s, l)), d(c).trigger(_), (A = !_.isPropagationStopped()), (N = !_.isImmediatePropagationStopped()), (L = _.isDefaultPrevented()))
        let U = new Event(s, { bubbles: A, cancelable: !0 })
        return (U = M(U, l)), L && U.preventDefault(), N && c.dispatchEvent(U), U.defaultPrevented && _ && _.preventDefault(), U
      },
    }
    function M(c, s) {
      for (const [l, d] of Object.entries(s || {}))
        try {
          c[l] = d
        } catch {
          Object.defineProperty(c, l, { configurable: !0, get: () => d })
        }
      return c
    }
    const C = new Map(),
      T = {
        set(c, s, l) {
          C.has(c) || C.set(c, new Map())
          const d = C.get(c)
          d.has(s) || d.size === 0
            ? d.set(s, l)
            : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(d.keys())[0]}.`)
        },
        get: (c, s) => (C.has(c) && C.get(c).get(s)) || null,
        remove(c, s) {
          if (!C.has(c)) return
          const l = C.get(c)
          l.delete(s), l.size === 0 && C.delete(c)
        },
      }
    function z(c) {
      if (c === "true") return !0
      if (c === "false") return !1
      if (c === Number(c).toString()) return Number(c)
      if (c === "" || c === "null") return null
      if (typeof c != "string") return c
      try {
        return JSON.parse(decodeURIComponent(c))
      } catch {
        return c
      }
    }
    function $(c) {
      return c.replace(/[A-Z]/g, (s) => `-${s.toLowerCase()}`)
    }
    const E = {
      setDataAttribute(c, s, l) {
        c.setAttribute(`data-bs-${$(s)}`, l)
      },
      removeDataAttribute(c, s) {
        c.removeAttribute(`data-bs-${$(s)}`)
      },
      getDataAttributes(c) {
        if (!c) return {}
        const s = {},
          l = Object.keys(c.dataset).filter((d) => d.startsWith("bs") && !d.startsWith("bsConfig"))
        for (const d of l) {
          let _ = d.replace(/^bs/, "")
          ;(_ = _.charAt(0).toLowerCase() + _.slice(1, _.length)), (s[_] = z(c.dataset[d]))
        }
        return s
      },
      getDataAttribute: (c, s) => z(c.getAttribute(`data-bs-${$(s)}`)),
    }
    class ee {
      static get Default() {
        return {}
      }
      static get DefaultType() {
        return {}
      }
      static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!')
      }
      _getConfig(s) {
        return (s = this._mergeConfigObj(s)), (s = this._configAfterMerge(s)), this._typeCheckConfig(s), s
      }
      _configAfterMerge(s) {
        return s
      }
      _mergeConfigObj(s, l) {
        const d = u(l) ? E.getDataAttribute(l, "config") : {}
        return { ...this.constructor.Default, ...(typeof d == "object" ? d : {}), ...(u(l) ? E.getDataAttributes(l) : {}), ...(typeof s == "object" ? s : {}) }
      }
      _typeCheckConfig(s, l = this.constructor.DefaultType) {
        for (const _ of Object.keys(l)) {
          const A = l[_],
            N = s[_],
            L = u(N)
              ? "element"
              : (d = N) == null
              ? `${d}`
              : Object.prototype.toString
                  .call(d)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase()
          if (!new RegExp(A).test(L)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${_}" provided type "${L}" but expected type "${A}".`)
        }
        var d
      }
    }
    class I extends ee {
      constructor(s, l) {
        super(), (s = f(s)) && ((this._element = s), (this._config = this._getConfig(l)), T.set(this._element, this.constructor.DATA_KEY, this))
      }
      dispose() {
        T.remove(this._element, this.constructor.DATA_KEY), m.off(this._element, this.constructor.EVENT_KEY)
        for (const s of Object.getOwnPropertyNames(this)) this[s] = null
      }
      _queueCallback(s, l, d = !0) {
        y(s, l, d)
      }
      _getConfig(s) {
        return (s = this._mergeConfigObj(s, this._element)), (s = this._configAfterMerge(s)), this._typeCheckConfig(s), s
      }
      static getInstance(s) {
        return T.get(f(s), this.DATA_KEY)
      }
      static getOrCreateInstance(s, l = {}) {
        return this.getInstance(s) || new this(s, typeof l == "object" ? l : null)
      }
      static get VERSION() {
        return "5.2.3"
      }
      static get DATA_KEY() {
        return `bs.${this.NAME}`
      }
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`
      }
      static eventName(s) {
        return `${s}${this.EVENT_KEY}`
      }
    }
    const pe = (c, s = "hide") => {
      const l = `click.dismiss${c.EVENT_KEY}`,
        d = c.NAME
      m.on(document, l, `[data-bs-dismiss="${d}"]`, function (_) {
        if ((["A", "AREA"].includes(this.tagName) && _.preventDefault(), v(this))) return
        const A = o(this) || this.closest(`.${d}`)
        c.getOrCreateInstance(A)[s]()
      })
    }
    class se extends I {
      static get NAME() {
        return "alert"
      }
      close() {
        if (m.trigger(this._element, "close.bs.alert").defaultPrevented) return
        this._element.classList.remove("show")
        const s = this._element.classList.contains("fade")
        this._queueCallback(() => this._destroyElement(), this._element, s)
      }
      _destroyElement() {
        this._element.remove(), m.trigger(this._element, "closed.bs.alert"), this.dispose()
      }
      static jQueryInterface(s) {
        return this.each(function () {
          const l = se.getOrCreateInstance(this)
          if (typeof s == "string") {
            if (l[s] === void 0 || s.startsWith("_") || s === "constructor") throw new TypeError(`No method named "${s}"`)
            l[s](this)
          }
        })
      }
    }
    pe(se, "close"), g(se)
    const te = '[data-bs-toggle="button"]'
    class Z extends I {
      static get NAME() {
        return "button"
      }
      toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
      }
      static jQueryInterface(s) {
        return this.each(function () {
          const l = Z.getOrCreateInstance(this)
          s === "toggle" && l[s]()
        })
      }
    }
    m.on(document, "click.bs.button.data-api", te, (c) => {
      c.preventDefault()
      const s = c.target.closest(te)
      Z.getOrCreateInstance(s).toggle()
    }),
      g(Z)
    const G = {
        find: (c, s = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(s, c)),
        findOne: (c, s = document.documentElement) => Element.prototype.querySelector.call(s, c),
        children: (c, s) => [].concat(...c.children).filter((l) => l.matches(s)),
        parents(c, s) {
          const l = []
          let d = c.parentNode.closest(s)
          for (; d; ) l.push(d), (d = d.parentNode.closest(s))
          return l
        },
        prev(c, s) {
          let l = c.previousElementSibling
          for (; l; ) {
            if (l.matches(s)) return [l]
            l = l.previousElementSibling
          }
          return []
        },
        next(c, s) {
          let l = c.nextElementSibling
          for (; l; ) {
            if (l.matches(s)) return [l]
            l = l.nextElementSibling
          }
          return []
        },
        focusableChildren(c) {
          const s = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((l) => `${l}:not([tabindex^="-"])`).join(",")
          return this.find(s, c).filter((l) => !v(l) && p(l))
        },
      },
      Ce = { endCallback: null, leftCallback: null, rightCallback: null },
      ne = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" }
    class we extends ee {
      constructor(s, l) {
        super(),
          (this._element = s),
          s && we.isSupported() && ((this._config = this._getConfig(l)), (this._deltaX = 0), (this._supportPointerEvents = !!window.PointerEvent), this._initEvents())
      }
      static get Default() {
        return Ce
      }
      static get DefaultType() {
        return ne
      }
      static get NAME() {
        return "swipe"
      }
      dispose() {
        m.off(this._element, ".bs.swipe")
      }
      _start(s) {
        this._supportPointerEvents ? this._eventIsPointerPenTouch(s) && (this._deltaX = s.clientX) : (this._deltaX = s.touches[0].clientX)
      }
      _end(s) {
        this._eventIsPointerPenTouch(s) && (this._deltaX = s.clientX - this._deltaX), this._handleSwipe(), h(this._config.endCallback)
      }
      _move(s) {
        this._deltaX = s.touches && s.touches.length > 1 ? 0 : s.touches[0].clientX - this._deltaX
      }
      _handleSwipe() {
        const s = Math.abs(this._deltaX)
        if (s <= 40) return
        const l = s / this._deltaX
        ;(this._deltaX = 0), l && h(l > 0 ? this._config.rightCallback : this._config.leftCallback)
      }
      _initEvents() {
        this._supportPointerEvents
          ? (m.on(this._element, "pointerdown.bs.swipe", (s) => this._start(s)),
            m.on(this._element, "pointerup.bs.swipe", (s) => this._end(s)),
            this._element.classList.add("pointer-event"))
          : (m.on(this._element, "touchstart.bs.swipe", (s) => this._start(s)),
            m.on(this._element, "touchmove.bs.swipe", (s) => this._move(s)),
            m.on(this._element, "touchend.bs.swipe", (s) => this._end(s)))
      }
      _eventIsPointerPenTouch(s) {
        return this._supportPointerEvents && (s.pointerType === "pen" || s.pointerType === "touch")
      }
      static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
      }
    }
    const oe = "next",
      de = "prev",
      Te = "left",
      ue = "right",
      Me = "slid.bs.carousel",
      $e = "carousel",
      ke = "active",
      H = { ArrowLeft: ue, ArrowRight: Te },
      ge = { interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0 },
      Se = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" }
    class le extends I {
      constructor(s, l) {
        super(s, l),
          (this._interval = null),
          (this._activeElement = null),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this._swipeHelper = null),
          (this._indicatorsElement = G.findOne(".carousel-indicators", this._element)),
          this._addEventListeners(),
          this._config.ride === $e && this.cycle()
      }
      static get Default() {
        return ge
      }
      static get DefaultType() {
        return Se
      }
      static get NAME() {
        return "carousel"
      }
      next() {
        this._slide(oe)
      }
      nextWhenVisible() {
        !document.hidden && p(this._element) && this.next()
      }
      prev() {
        this._slide(de)
      }
      pause() {
        this._isSliding && a(this._element), this._clearInterval()
      }
      cycle() {
        this._clearInterval(), this._updateInterval(), (this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval))
      }
      _maybeEnableCycle() {
        this._config.ride && (this._isSliding ? m.one(this._element, Me, () => this.cycle()) : this.cycle())
      }
      to(s) {
        const l = this._getItems()
        if (s > l.length - 1 || s < 0) return
        if (this._isSliding) return void m.one(this._element, Me, () => this.to(s))
        const d = this._getItemIndex(this._getActive())
        if (d === s) return
        const _ = s > d ? oe : de
        this._slide(_, l[s])
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
      }
      _configAfterMerge(s) {
        return (s.defaultInterval = s.interval), s
      }
      _addEventListeners() {
        this._config.keyboard && m.on(this._element, "keydown.bs.carousel", (s) => this._keydown(s)),
          this._config.pause === "hover" &&
            (m.on(this._element, "mouseenter.bs.carousel", () => this.pause()), m.on(this._element, "mouseleave.bs.carousel", () => this._maybeEnableCycle())),
          this._config.touch && we.isSupported() && this._addTouchEventListeners()
      }
      _addTouchEventListeners() {
        for (const l of G.find(".carousel-item img", this._element)) m.on(l, "dragstart.bs.carousel", (d) => d.preventDefault())
        const s = {
          leftCallback: () => this._slide(this._directionToOrder(Te)),
          rightCallback: () => this._slide(this._directionToOrder(ue)),
          endCallback: () => {
            this._config.pause === "hover" &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval)))
          },
        }
        this._swipeHelper = new we(this._element, s)
      }
      _keydown(s) {
        if (/input|textarea/i.test(s.target.tagName)) return
        const l = H[s.key]
        l && (s.preventDefault(), this._slide(this._directionToOrder(l)))
      }
      _getItemIndex(s) {
        return this._getItems().indexOf(s)
      }
      _setActiveIndicatorElement(s) {
        if (!this._indicatorsElement) return
        const l = G.findOne(".active", this._indicatorsElement)
        l.classList.remove(ke), l.removeAttribute("aria-current")
        const d = G.findOne(`[data-bs-slide-to="${s}"]`, this._indicatorsElement)
        d && (d.classList.add(ke), d.setAttribute("aria-current", "true"))
      }
      _updateInterval() {
        const s = this._activeElement || this._getActive()
        if (!s) return
        const l = Number.parseInt(s.getAttribute("data-bs-interval"), 10)
        this._config.interval = l || this._config.defaultInterval
      }
      _slide(s, l = null) {
        if (this._isSliding) return
        const d = this._getActive(),
          _ = s === oe,
          A = l || j(this._getItems(), d, _, this._config.wrap)
        if (A === d) return
        const N = this._getItemIndex(A),
          L = (Q) => m.trigger(this._element, Q, { relatedTarget: A, direction: this._orderToDirection(s), from: this._getItemIndex(d), to: N })
        if (L("slide.bs.carousel").defaultPrevented || !d || !A) return
        const U = !!this._interval
        this.pause(), (this._isSliding = !0), this._setActiveIndicatorElement(N), (this._activeElement = A)
        const q = _ ? "carousel-item-start" : "carousel-item-end",
          X = _ ? "carousel-item-next" : "carousel-item-prev"
        A.classList.add(X),
          P(A),
          d.classList.add(q),
          A.classList.add(q),
          this._queueCallback(
            () => {
              A.classList.remove(q, X), A.classList.add(ke), d.classList.remove(ke, X, q), (this._isSliding = !1), L(Me)
            },
            d,
            this._isAnimated()
          ),
          U && this.cycle()
      }
      _isAnimated() {
        return this._element.classList.contains("slide")
      }
      _getActive() {
        return G.findOne(".active.carousel-item", this._element)
      }
      _getItems() {
        return G.find(".carousel-item", this._element)
      }
      _clearInterval() {
        this._interval && (clearInterval(this._interval), (this._interval = null))
      }
      _directionToOrder(s) {
        return F() ? (s === Te ? de : oe) : s === Te ? oe : de
      }
      _orderToDirection(s) {
        return F() ? (s === de ? Te : ue) : s === de ? ue : Te
      }
      static jQueryInterface(s) {
        return this.each(function () {
          const l = le.getOrCreateInstance(this, s)
          if (typeof s != "number") {
            if (typeof s == "string") {
              if (l[s] === void 0 || s.startsWith("_") || s === "constructor") throw new TypeError(`No method named "${s}"`)
              l[s]()
            }
          } else l.to(s)
        })
      }
    }
    m.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function (c) {
      const s = o(this)
      if (!s || !s.classList.contains($e)) return
      c.preventDefault()
      const l = le.getOrCreateInstance(s),
        d = this.getAttribute("data-bs-slide-to")
      return d
        ? (l.to(d), void l._maybeEnableCycle())
        : E.getDataAttribute(this, "slide") === "next"
        ? (l.next(), void l._maybeEnableCycle())
        : (l.prev(), void l._maybeEnableCycle())
    }),
      m.on(window, "load.bs.carousel.data-api", () => {
        const c = G.find('[data-bs-ride="carousel"]')
        for (const s of c) le.getOrCreateInstance(s)
      }),
      g(le)
    const Ve = "show",
      _e = "collapse",
      it = "collapsing",
      gn = '[data-bs-toggle="collapse"]',
      Wn = { parent: null, toggle: !0 },
      Ya = { parent: "(null|element)", toggle: "boolean" }
    class $n extends I {
      constructor(s, l) {
        super(s, l), (this._isTransitioning = !1), (this._triggerArray = [])
        const d = G.find(gn)
        for (const _ of d) {
          const A = i(_),
            N = G.find(A).filter((L) => L === this._element)
          A !== null && N.length && this._triggerArray.push(_)
        }
        this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
      }
      static get Default() {
        return Wn
      }
      static get DefaultType() {
        return Ya
      }
      static get NAME() {
        return "collapse"
      }
      toggle() {
        this._isShown() ? this.hide() : this.show()
      }
      show() {
        if (this._isTransitioning || this._isShown()) return
        let s = []
        if (
          (this._config.parent &&
            (s = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing")
              .filter((_) => _ !== this._element)
              .map((_) => $n.getOrCreateInstance(_, { toggle: !1 }))),
          (s.length && s[0]._isTransitioning) || m.trigger(this._element, "show.bs.collapse").defaultPrevented)
        )
          return
        for (const _ of s) _.hide()
        const l = this._getDimension()
        this._element.classList.remove(_e),
          this._element.classList.add(it),
          (this._element.style[l] = 0),
          this._addAriaAndCollapsedClass(this._triggerArray, !0),
          (this._isTransitioning = !0)
        const d = `scroll${l[0].toUpperCase() + l.slice(1)}`
        this._queueCallback(
          () => {
            ;(this._isTransitioning = !1),
              this._element.classList.remove(it),
              this._element.classList.add(_e, Ve),
              (this._element.style[l] = ""),
              m.trigger(this._element, "shown.bs.collapse")
          },
          this._element,
          !0
        ),
          (this._element.style[l] = `${this._element[d]}px`)
      }
      hide() {
        if (this._isTransitioning || !this._isShown() || m.trigger(this._element, "hide.bs.collapse").defaultPrevented) return
        const s = this._getDimension()
        ;(this._element.style[s] = `${this._element.getBoundingClientRect()[s]}px`),
          P(this._element),
          this._element.classList.add(it),
          this._element.classList.remove(_e, Ve)
        for (const l of this._triggerArray) {
          const d = o(l)
          d && !this._isShown(d) && this._addAriaAndCollapsedClass([l], !1)
        }
        ;(this._isTransitioning = !0),
          (this._element.style[s] = ""),
          this._queueCallback(
            () => {
              ;(this._isTransitioning = !1), this._element.classList.remove(it), this._element.classList.add(_e), m.trigger(this._element, "hidden.bs.collapse")
            },
            this._element,
            !0
          )
      }
      _isShown(s = this._element) {
        return s.classList.contains(Ve)
      }
      _configAfterMerge(s) {
        return (s.toggle = !!s.toggle), (s.parent = f(s.parent)), s
      }
      _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
      }
      _initializeChildren() {
        if (!this._config.parent) return
        const s = this._getFirstLevelChildren(gn)
        for (const l of s) {
          const d = o(l)
          d && this._addAriaAndCollapsedClass([l], this._isShown(d))
        }
      }
      _getFirstLevelChildren(s) {
        const l = G.find(":scope .collapse .collapse", this._config.parent)
        return G.find(s, this._config.parent).filter((d) => !l.includes(d))
      }
      _addAriaAndCollapsedClass(s, l) {
        if (s.length) for (const d of s) d.classList.toggle("collapsed", !l), d.setAttribute("aria-expanded", l)
      }
      static jQueryInterface(s) {
        const l = {}
        return (
          typeof s == "string" && /show|hide/.test(s) && (l.toggle = !1),
          this.each(function () {
            const d = $n.getOrCreateInstance(this, l)
            if (typeof s == "string") {
              if (d[s] === void 0) throw new TypeError(`No method named "${s}"`)
              d[s]()
            }
          })
        )
      }
    }
    m.on(document, "click.bs.collapse.data-api", gn, function (c) {
      ;(c.target.tagName === "A" || (c.delegateTarget && c.delegateTarget.tagName === "A")) && c.preventDefault()
      const s = i(this),
        l = G.find(s)
      for (const d of l) $n.getOrCreateInstance(d, { toggle: !1 }).toggle()
    }),
      g($n)
    var ft = "top",
      _t = "bottom",
      zt = "right",
      bt = "left",
      jo = "auto",
      Dr = [ft, _t, zt, bt],
      mr = "start",
      zr = "end",
      gf = "clippingParents",
      Ka = "viewport",
      Br = "popper",
      vf = "reference",
      Ga = Dr.reduce(function (c, s) {
        return c.concat([s + "-" + mr, s + "-" + zr])
      }, []),
      qa = [].concat(Dr, [jo]).reduce(function (c, s) {
        return c.concat([s, s + "-" + mr, s + "-" + zr])
      }, []),
      yf = "beforeRead",
      wf = "read",
      _f = "afterRead",
      Af = "beforeMain",
      Sf = "main",
      Ef = "afterMain",
      kf = "beforeWrite",
      bf = "write",
      xf = "afterWrite",
      Cf = [yf, wf, _f, Af, Sf, Ef, kf, bf, xf]
    function vn(c) {
      return c ? (c.nodeName || "").toLowerCase() : null
    }
    function Yt(c) {
      if (c == null) return window
      if (c.toString() !== "[object Window]") {
        var s = c.ownerDocument
        return (s && s.defaultView) || window
      }
      return c
    }
    function gr(c) {
      return c instanceof Yt(c).Element || c instanceof Element
    }
    function Kt(c) {
      return c instanceof Yt(c).HTMLElement || c instanceof HTMLElement
    }
    function Ja(c) {
      return typeof ShadowRoot < "u" && (c instanceof Yt(c).ShadowRoot || c instanceof ShadowRoot)
    }
    const Xa = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (c) {
        var s = c.state
        Object.keys(s.elements).forEach(function (l) {
          var d = s.styles[l] || {},
            _ = s.attributes[l] || {},
            A = s.elements[l]
          Kt(A) &&
            vn(A) &&
            (Object.assign(A.style, d),
            Object.keys(_).forEach(function (N) {
              var L = _[N]
              L === !1 ? A.removeAttribute(N) : A.setAttribute(N, L === !0 ? "" : L)
            }))
        })
      },
      effect: function (c) {
        var s = c.state,
          l = { popper: { position: s.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} }
        return (
          Object.assign(s.elements.popper.style, l.popper),
          (s.styles = l),
          s.elements.arrow && Object.assign(s.elements.arrow.style, l.arrow),
          function () {
            Object.keys(s.elements).forEach(function (d) {
              var _ = s.elements[d],
                A = s.attributes[d] || {},
                N = Object.keys(s.styles.hasOwnProperty(d) ? s.styles[d] : l[d]).reduce(function (L, U) {
                  return (L[U] = ""), L
                }, {})
              Kt(_) &&
                vn(_) &&
                (Object.assign(_.style, N),
                Object.keys(A).forEach(function (L) {
                  _.removeAttribute(L)
                }))
            })
          }
        )
      },
      requires: ["computeStyles"],
    }
    function yn(c) {
      return c.split("-")[0]
    }
    var vr = Math.max,
      Ro = Math.min,
      Fr = Math.round
    function Za() {
      var c = navigator.userAgentData
      return c != null && c.brands
        ? c.brands
            .map(function (s) {
              return s.brand + "/" + s.version
            })
            .join(" ")
        : navigator.userAgent
    }
    function Of() {
      return !/^((?!chrome|android).)*safari/i.test(Za())
    }
    function Hr(c, s, l) {
      s === void 0 && (s = !1), l === void 0 && (l = !1)
      var d = c.getBoundingClientRect(),
        _ = 1,
        A = 1
      s && Kt(c) && ((_ = (c.offsetWidth > 0 && Fr(d.width) / c.offsetWidth) || 1), (A = (c.offsetHeight > 0 && Fr(d.height) / c.offsetHeight) || 1))
      var N = (gr(c) ? Yt(c) : window).visualViewport,
        L = !Of() && l,
        U = (d.left + (L && N ? N.offsetLeft : 0)) / _,
        q = (d.top + (L && N ? N.offsetTop : 0)) / A,
        X = d.width / _,
        Q = d.height / A
      return { width: X, height: Q, top: q, right: U + X, bottom: q + Q, left: U, x: U, y: q }
    }
    function el(c) {
      var s = Hr(c),
        l = c.offsetWidth,
        d = c.offsetHeight
      return Math.abs(s.width - l) <= 1 && (l = s.width), Math.abs(s.height - d) <= 1 && (d = s.height), { x: c.offsetLeft, y: c.offsetTop, width: l, height: d }
    }
    function Tf(c, s) {
      var l = s.getRootNode && s.getRootNode()
      if (c.contains(s)) return !0
      if (l && Ja(l)) {
        var d = s
        do {
          if (d && c.isSameNode(d)) return !0
          d = d.parentNode || d.host
        } while (d)
      }
      return !1
    }
    function Tn(c) {
      return Yt(c).getComputedStyle(c)
    }
    function ry(c) {
      return ["table", "td", "th"].indexOf(vn(c)) >= 0
    }
    function Vn(c) {
      return ((gr(c) ? c.ownerDocument : c.document) || window.document).documentElement
    }
    function Lo(c) {
      return vn(c) === "html" ? c : c.assignedSlot || c.parentNode || (Ja(c) ? c.host : null) || Vn(c)
    }
    function Nf(c) {
      return Kt(c) && Tn(c).position !== "fixed" ? c.offsetParent : null
    }
    function xi(c) {
      for (var s = Yt(c), l = Nf(c); l && ry(l) && Tn(l).position === "static"; ) l = Nf(l)
      return l && (vn(l) === "html" || (vn(l) === "body" && Tn(l).position === "static"))
        ? s
        : l ||
            (function (d) {
              var _ = /firefox/i.test(Za())
              if (/Trident/i.test(Za()) && Kt(d) && Tn(d).position === "fixed") return null
              var A = Lo(d)
              for (Ja(A) && (A = A.host); Kt(A) && ["html", "body"].indexOf(vn(A)) < 0; ) {
                var N = Tn(A)
                if (
                  N.transform !== "none" ||
                  N.perspective !== "none" ||
                  N.contain === "paint" ||
                  ["transform", "perspective"].indexOf(N.willChange) !== -1 ||
                  (_ && N.willChange === "filter") ||
                  (_ && N.filter && N.filter !== "none")
                )
                  return A
                A = A.parentNode
              }
              return null
            })(c) ||
            s
    }
    function tl(c) {
      return ["top", "bottom"].indexOf(c) >= 0 ? "x" : "y"
    }
    function Ci(c, s, l) {
      return vr(c, Ro(s, l))
    }
    function Pf(c) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, c)
    }
    function jf(c, s) {
      return s.reduce(function (l, d) {
        return (l[d] = c), l
      }, {})
    }
    const Rf = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (c) {
        var s,
          l = c.state,
          d = c.name,
          _ = c.options,
          A = l.elements.arrow,
          N = l.modifiersData.popperOffsets,
          L = yn(l.placement),
          U = tl(L),
          q = [bt, zt].indexOf(L) >= 0 ? "height" : "width"
        if (A && N) {
          var X = (function (ze, Pe) {
              return Pf(typeof (ze = typeof ze == "function" ? ze(Object.assign({}, Pe.rects, { placement: Pe.placement })) : ze) != "number" ? ze : jf(ze, Dr))
            })(_.padding, l),
            Q = el(A),
            he = U === "y" ? ft : bt,
            ie = U === "y" ? _t : zt,
            ce = l.rects.reference[q] + l.rects.reference[U] - N[U] - l.rects.popper[q],
            ae = N[U] - l.rects.reference[U],
            fe = xi(A),
            De = fe ? (U === "y" ? fe.clientHeight || 0 : fe.clientWidth || 0) : 0,
            He = ce / 2 - ae / 2,
            ye = X[he],
            Oe = De - Q[q] - X[ie],
            me = De / 2 - Q[q] / 2 + He,
            Ee = Ci(ye, me, Oe),
            Ne = U
          l.modifiersData[d] = (((s = {})[Ne] = Ee), (s.centerOffset = Ee - me), s)
        }
      },
      effect: function (c) {
        var s = c.state,
          l = c.options.element,
          d = l === void 0 ? "[data-popper-arrow]" : l
        d != null && (typeof d != "string" || (d = s.elements.popper.querySelector(d))) && Tf(s.elements.popper, d) && (s.elements.arrow = d)
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    }
    function Ur(c) {
      return c.split("-")[1]
    }
    var iy = { top: "auto", right: "auto", bottom: "auto", left: "auto" }
    function Lf(c) {
      var s,
        l = c.popper,
        d = c.popperRect,
        _ = c.placement,
        A = c.variation,
        N = c.offsets,
        L = c.position,
        U = c.gpuAcceleration,
        q = c.adaptive,
        X = c.roundOffsets,
        Q = c.isFixed,
        he = N.x,
        ie = he === void 0 ? 0 : he,
        ce = N.y,
        ae = ce === void 0 ? 0 : ce,
        fe = typeof X == "function" ? X({ x: ie, y: ae }) : { x: ie, y: ae }
      ;(ie = fe.x), (ae = fe.y)
      var De = N.hasOwnProperty("x"),
        He = N.hasOwnProperty("y"),
        ye = bt,
        Oe = ft,
        me = window
      if (q) {
        var Ee = xi(l),
          Ne = "clientHeight",
          ze = "clientWidth"
        Ee === Yt(l) && Tn((Ee = Vn(l))).position !== "static" && L === "absolute" && ((Ne = "scrollHeight"), (ze = "scrollWidth")),
          (_ === ft || ((_ === bt || _ === zt) && A === zr)) &&
            ((Oe = _t), (ae -= (Q && Ee === me && me.visualViewport ? me.visualViewport.height : Ee[Ne]) - d.height), (ae *= U ? 1 : -1)),
          (_ !== bt && ((_ !== ft && _ !== _t) || A !== zr)) ||
            ((ye = zt), (ie -= (Q && Ee === me && me.visualViewport ? me.visualViewport.width : Ee[ze]) - d.width), (ie *= U ? 1 : -1))
      }
      var Pe,
        tt = Object.assign({ position: L }, q && iy),
        Bt =
          X === !0
            ? (function (an) {
                var xt = an.x,
                  Gt = an.y,
                  Ct = window.devicePixelRatio || 1
                return { x: Fr(xt * Ct) / Ct || 0, y: Fr(Gt * Ct) / Ct || 0 }
              })({ x: ie, y: ae })
            : { x: ie, y: ae }
      return (
        (ie = Bt.x),
        (ae = Bt.y),
        U
          ? Object.assign(
              {},
              tt,
              (((Pe = {})[Oe] = He ? "0" : ""),
              (Pe[ye] = De ? "0" : ""),
              (Pe.transform = (me.devicePixelRatio || 1) <= 1 ? "translate(" + ie + "px, " + ae + "px)" : "translate3d(" + ie + "px, " + ae + "px, 0)"),
              Pe)
            )
          : Object.assign({}, tt, (((s = {})[Oe] = He ? ae + "px" : ""), (s[ye] = De ? ie + "px" : ""), (s.transform = ""), s))
      )
    }
    const nl = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (c) {
        var s = c.state,
          l = c.options,
          d = l.gpuAcceleration,
          _ = d === void 0 || d,
          A = l.adaptive,
          N = A === void 0 || A,
          L = l.roundOffsets,
          U = L === void 0 || L,
          q = {
            placement: yn(s.placement),
            variation: Ur(s.placement),
            popper: s.elements.popper,
            popperRect: s.rects.popper,
            gpuAcceleration: _,
            isFixed: s.options.strategy === "fixed",
          }
        s.modifiersData.popperOffsets != null &&
          (s.styles.popper = Object.assign(
            {},
            s.styles.popper,
            Lf(Object.assign({}, q, { offsets: s.modifiersData.popperOffsets, position: s.options.strategy, adaptive: N, roundOffsets: U }))
          )),
          s.modifiersData.arrow != null &&
            (s.styles.arrow = Object.assign(
              {},
              s.styles.arrow,
              Lf(Object.assign({}, q, { offsets: s.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: U }))
            )),
          (s.attributes.popper = Object.assign({}, s.attributes.popper, { "data-popper-placement": s.placement }))
      },
      data: {},
    }
    var Io = { passive: !0 }
    const rl = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (c) {
        var s = c.state,
          l = c.instance,
          d = c.options,
          _ = d.scroll,
          A = _ === void 0 || _,
          N = d.resize,
          L = N === void 0 || N,
          U = Yt(s.elements.popper),
          q = [].concat(s.scrollParents.reference, s.scrollParents.popper)
        return (
          A &&
            q.forEach(function (X) {
              X.addEventListener("scroll", l.update, Io)
            }),
          L && U.addEventListener("resize", l.update, Io),
          function () {
            A &&
              q.forEach(function (X) {
                X.removeEventListener("scroll", l.update, Io)
              }),
              L && U.removeEventListener("resize", l.update, Io)
          }
        )
      },
      data: {},
    }
    var oy = { left: "right", right: "left", bottom: "top", top: "bottom" }
    function Mo(c) {
      return c.replace(/left|right|bottom|top/g, function (s) {
        return oy[s]
      })
    }
    var sy = { start: "end", end: "start" }
    function If(c) {
      return c.replace(/start|end/g, function (s) {
        return sy[s]
      })
    }
    function il(c) {
      var s = Yt(c)
      return { scrollLeft: s.pageXOffset, scrollTop: s.pageYOffset }
    }
    function ol(c) {
      return Hr(Vn(c)).left + il(c).scrollLeft
    }
    function sl(c) {
      var s = Tn(c),
        l = s.overflow,
        d = s.overflowX,
        _ = s.overflowY
      return /auto|scroll|overlay|hidden/.test(l + _ + d)
    }
    function Mf(c) {
      return ["html", "body", "#document"].indexOf(vn(c)) >= 0 ? c.ownerDocument.body : Kt(c) && sl(c) ? c : Mf(Lo(c))
    }
    function Oi(c, s) {
      var l
      s === void 0 && (s = [])
      var d = Mf(c),
        _ = d === ((l = c.ownerDocument) == null ? void 0 : l.body),
        A = Yt(d),
        N = _ ? [A].concat(A.visualViewport || [], sl(d) ? d : []) : d,
        L = s.concat(N)
      return _ ? L : L.concat(Oi(Lo(N)))
    }
    function al(c) {
      return Object.assign({}, c, { left: c.x, top: c.y, right: c.x + c.width, bottom: c.y + c.height })
    }
    function Df(c, s, l) {
      return s === Ka
        ? al(
            (function (d, _) {
              var A = Yt(d),
                N = Vn(d),
                L = A.visualViewport,
                U = N.clientWidth,
                q = N.clientHeight,
                X = 0,
                Q = 0
              if (L) {
                ;(U = L.width), (q = L.height)
                var he = Of()
                ;(he || (!he && _ === "fixed")) && ((X = L.offsetLeft), (Q = L.offsetTop))
              }
              return { width: U, height: q, x: X + ol(d), y: Q }
            })(c, l)
          )
        : gr(s)
        ? (function (d, _) {
            var A = Hr(d, !1, _ === "fixed")
            return (
              (A.top = A.top + d.clientTop),
              (A.left = A.left + d.clientLeft),
              (A.bottom = A.top + d.clientHeight),
              (A.right = A.left + d.clientWidth),
              (A.width = d.clientWidth),
              (A.height = d.clientHeight),
              (A.x = A.left),
              (A.y = A.top),
              A
            )
          })(s, l)
        : al(
            (function (d) {
              var _,
                A = Vn(d),
                N = il(d),
                L = (_ = d.ownerDocument) == null ? void 0 : _.body,
                U = vr(A.scrollWidth, A.clientWidth, L ? L.scrollWidth : 0, L ? L.clientWidth : 0),
                q = vr(A.scrollHeight, A.clientHeight, L ? L.scrollHeight : 0, L ? L.clientHeight : 0),
                X = -N.scrollLeft + ol(d),
                Q = -N.scrollTop
              return Tn(L || A).direction === "rtl" && (X += vr(A.clientWidth, L ? L.clientWidth : 0) - U), { width: U, height: q, x: X, y: Q }
            })(Vn(c))
          )
    }
    function zf(c) {
      var s,
        l = c.reference,
        d = c.element,
        _ = c.placement,
        A = _ ? yn(_) : null,
        N = _ ? Ur(_) : null,
        L = l.x + l.width / 2 - d.width / 2,
        U = l.y + l.height / 2 - d.height / 2
      switch (A) {
        case ft:
          s = { x: L, y: l.y - d.height }
          break
        case _t:
          s = { x: L, y: l.y + l.height }
          break
        case zt:
          s = { x: l.x + l.width, y: U }
          break
        case bt:
          s = { x: l.x - d.width, y: U }
          break
        default:
          s = { x: l.x, y: l.y }
      }
      var q = A ? tl(A) : null
      if (q != null) {
        var X = q === "y" ? "height" : "width"
        switch (N) {
          case mr:
            s[q] = s[q] - (l[X] / 2 - d[X] / 2)
            break
          case zr:
            s[q] = s[q] + (l[X] / 2 - d[X] / 2)
        }
      }
      return s
    }
    function Wr(c, s) {
      s === void 0 && (s = {})
      var l = s,
        d = l.placement,
        _ = d === void 0 ? c.placement : d,
        A = l.strategy,
        N = A === void 0 ? c.strategy : A,
        L = l.boundary,
        U = L === void 0 ? gf : L,
        q = l.rootBoundary,
        X = q === void 0 ? Ka : q,
        Q = l.elementContext,
        he = Q === void 0 ? Br : Q,
        ie = l.altBoundary,
        ce = ie !== void 0 && ie,
        ae = l.padding,
        fe = ae === void 0 ? 0 : ae,
        De = Pf(typeof fe != "number" ? fe : jf(fe, Dr)),
        He = he === Br ? vf : Br,
        ye = c.rects.popper,
        Oe = c.elements[ce ? He : he],
        me = (function (xt, Gt, Ct, gt) {
          var wn =
              Gt === "clippingParents"
                ? (function (Be) {
                    var Ot = Oi(Lo(Be)),
                      qt = ["absolute", "fixed"].indexOf(Tn(Be).position) >= 0 && Kt(Be) ? xi(Be) : Be
                    return gr(qt)
                      ? Ot.filter(function (Qn) {
                          return gr(Qn) && Tf(Qn, qt) && vn(Qn) !== "body"
                        })
                      : []
                  })(xt)
                : [].concat(Gt),
            _n = [].concat(wn, [Ct]),
            $r = _n[0],
            dt = _n.reduce(function (Be, Ot) {
              var qt = Df(xt, Ot, gt)
              return (Be.top = vr(qt.top, Be.top)), (Be.right = Ro(qt.right, Be.right)), (Be.bottom = Ro(qt.bottom, Be.bottom)), (Be.left = vr(qt.left, Be.left)), Be
            }, Df(xt, $r, gt))
          return (dt.width = dt.right - dt.left), (dt.height = dt.bottom - dt.top), (dt.x = dt.left), (dt.y = dt.top), dt
        })(gr(Oe) ? Oe : Oe.contextElement || Vn(c.elements.popper), U, X, N),
        Ee = Hr(c.elements.reference),
        Ne = zf({ reference: Ee, element: ye, strategy: "absolute", placement: _ }),
        ze = al(Object.assign({}, ye, Ne)),
        Pe = he === Br ? ze : Ee,
        tt = { top: me.top - Pe.top + De.top, bottom: Pe.bottom - me.bottom + De.bottom, left: me.left - Pe.left + De.left, right: Pe.right - me.right + De.right },
        Bt = c.modifiersData.offset
      if (he === Br && Bt) {
        var an = Bt[_]
        Object.keys(tt).forEach(function (xt) {
          var Gt = [zt, _t].indexOf(xt) >= 0 ? 1 : -1,
            Ct = [ft, _t].indexOf(xt) >= 0 ? "y" : "x"
          tt[xt] += an[Ct] * Gt
        })
      }
      return tt
    }
    function ay(c, s) {
      s === void 0 && (s = {})
      var l = s,
        d = l.placement,
        _ = l.boundary,
        A = l.rootBoundary,
        N = l.padding,
        L = l.flipVariations,
        U = l.allowedAutoPlacements,
        q = U === void 0 ? qa : U,
        X = Ur(d),
        Q = X
          ? L
            ? Ga
            : Ga.filter(function (ce) {
                return Ur(ce) === X
              })
          : Dr,
        he = Q.filter(function (ce) {
          return q.indexOf(ce) >= 0
        })
      he.length === 0 && (he = Q)
      var ie = he.reduce(function (ce, ae) {
        return (ce[ae] = Wr(c, { placement: ae, boundary: _, rootBoundary: A, padding: N })[yn(ae)]), ce
      }, {})
      return Object.keys(ie).sort(function (ce, ae) {
        return ie[ce] - ie[ae]
      })
    }
    const Bf = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (c) {
        var s = c.state,
          l = c.options,
          d = c.name
        if (!s.modifiersData[d]._skip) {
          for (
            var _ = l.mainAxis,
              A = _ === void 0 || _,
              N = l.altAxis,
              L = N === void 0 || N,
              U = l.fallbackPlacements,
              q = l.padding,
              X = l.boundary,
              Q = l.rootBoundary,
              he = l.altBoundary,
              ie = l.flipVariations,
              ce = ie === void 0 || ie,
              ae = l.allowedAutoPlacements,
              fe = s.options.placement,
              De = yn(fe),
              He =
                U ||
                (De !== fe && ce
                  ? (function (Be) {
                      if (yn(Be) === jo) return []
                      var Ot = Mo(Be)
                      return [If(Be), Ot, If(Ot)]
                    })(fe)
                  : [Mo(fe)]),
              ye = [fe].concat(He).reduce(function (Be, Ot) {
                return Be.concat(yn(Ot) === jo ? ay(s, { placement: Ot, boundary: X, rootBoundary: Q, padding: q, flipVariations: ce, allowedAutoPlacements: ae }) : Ot)
              }, []),
              Oe = s.rects.reference,
              me = s.rects.popper,
              Ee = new Map(),
              Ne = !0,
              ze = ye[0],
              Pe = 0;
            Pe < ye.length;
            Pe++
          ) {
            var tt = ye[Pe],
              Bt = yn(tt),
              an = Ur(tt) === mr,
              xt = [ft, _t].indexOf(Bt) >= 0,
              Gt = xt ? "width" : "height",
              Ct = Wr(s, { placement: tt, boundary: X, rootBoundary: Q, altBoundary: he, padding: q }),
              gt = xt ? (an ? zt : bt) : an ? _t : ft
            Oe[Gt] > me[Gt] && (gt = Mo(gt))
            var wn = Mo(gt),
              _n = []
            if (
              (A && _n.push(Ct[Bt] <= 0),
              L && _n.push(Ct[gt] <= 0, Ct[wn] <= 0),
              _n.every(function (Be) {
                return Be
              }))
            ) {
              ;(ze = tt), (Ne = !1)
              break
            }
            Ee.set(tt, _n)
          }
          if (Ne)
            for (
              var $r = function (Be) {
                  var Ot = ye.find(function (qt) {
                    var Qn = Ee.get(qt)
                    if (Qn)
                      return Qn.slice(0, Be).every(function (Qo) {
                        return Qo
                      })
                  })
                  if (Ot) return (ze = Ot), "break"
                },
                dt = ce ? 3 : 1;
              dt > 0 && $r(dt) !== "break";
              dt--
            );
          s.placement !== ze && ((s.modifiersData[d]._skip = !0), (s.placement = ze), (s.reset = !0))
        }
      },
      requiresIfExists: ["offset"],
      data: { _skip: !1 },
    }
    function Ff(c, s, l) {
      return (
        l === void 0 && (l = { x: 0, y: 0 }),
        { top: c.top - s.height - l.y, right: c.right - s.width + l.x, bottom: c.bottom - s.height + l.y, left: c.left - s.width - l.x }
      )
    }
    function Hf(c) {
      return [ft, zt, _t, bt].some(function (s) {
        return c[s] >= 0
      })
    }
    const Uf = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (c) {
          var s = c.state,
            l = c.name,
            d = s.rects.reference,
            _ = s.rects.popper,
            A = s.modifiersData.preventOverflow,
            N = Wr(s, { elementContext: "reference" }),
            L = Wr(s, { altBoundary: !0 }),
            U = Ff(N, d),
            q = Ff(L, _, A),
            X = Hf(U),
            Q = Hf(q)
          ;(s.modifiersData[l] = { referenceClippingOffsets: U, popperEscapeOffsets: q, isReferenceHidden: X, hasPopperEscaped: Q }),
            (s.attributes.popper = Object.assign({}, s.attributes.popper, { "data-popper-reference-hidden": X, "data-popper-escaped": Q }))
        },
      },
      Wf = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (c) {
          var s = c.state,
            l = c.options,
            d = c.name,
            _ = l.offset,
            A = _ === void 0 ? [0, 0] : _,
            N = qa.reduce(function (X, Q) {
              return (
                (X[Q] = (function (he, ie, ce) {
                  var ae = yn(he),
                    fe = [bt, ft].indexOf(ae) >= 0 ? -1 : 1,
                    De = typeof ce == "function" ? ce(Object.assign({}, ie, { placement: he })) : ce,
                    He = De[0],
                    ye = De[1]
                  return (He = He || 0), (ye = (ye || 0) * fe), [bt, zt].indexOf(ae) >= 0 ? { x: ye, y: He } : { x: He, y: ye }
                })(Q, s.rects, A)),
                X
              )
            }, {}),
            L = N[s.placement],
            U = L.x,
            q = L.y
          s.modifiersData.popperOffsets != null && ((s.modifiersData.popperOffsets.x += U), (s.modifiersData.popperOffsets.y += q)), (s.modifiersData[d] = N)
        },
      },
      ll = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (c) {
          var s = c.state,
            l = c.name
          s.modifiersData[l] = zf({ reference: s.rects.reference, element: s.rects.popper, strategy: "absolute", placement: s.placement })
        },
        data: {},
      },
      $f = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (c) {
          var s = c.state,
            l = c.options,
            d = c.name,
            _ = l.mainAxis,
            A = _ === void 0 || _,
            N = l.altAxis,
            L = N !== void 0 && N,
            U = l.boundary,
            q = l.rootBoundary,
            X = l.altBoundary,
            Q = l.padding,
            he = l.tether,
            ie = he === void 0 || he,
            ce = l.tetherOffset,
            ae = ce === void 0 ? 0 : ce,
            fe = Wr(s, { boundary: U, rootBoundary: q, padding: Q, altBoundary: X }),
            De = yn(s.placement),
            He = Ur(s.placement),
            ye = !He,
            Oe = tl(De),
            me = Oe === "x" ? "y" : "x",
            Ee = s.modifiersData.popperOffsets,
            Ne = s.rects.reference,
            ze = s.rects.popper,
            Pe = typeof ae == "function" ? ae(Object.assign({}, s.rects, { placement: s.placement })) : ae,
            tt = typeof Pe == "number" ? { mainAxis: Pe, altAxis: Pe } : Object.assign({ mainAxis: 0, altAxis: 0 }, Pe),
            Bt = s.modifiersData.offset ? s.modifiersData.offset[s.placement] : null,
            an = { x: 0, y: 0 }
          if (Ee) {
            if (A) {
              var xt,
                Gt = Oe === "y" ? ft : bt,
                Ct = Oe === "y" ? _t : zt,
                gt = Oe === "y" ? "height" : "width",
                wn = Ee[Oe],
                _n = wn + fe[Gt],
                $r = wn - fe[Ct],
                dt = ie ? -ze[gt] / 2 : 0,
                Be = He === mr ? Ne[gt] : ze[gt],
                Ot = He === mr ? -ze[gt] : -Ne[gt],
                qt = s.elements.arrow,
                Qn = ie && qt ? el(qt) : { width: 0, height: 0 },
                Qo = s.modifiersData["arrow#persistent"] ? s.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 },
                Od = Qo[Gt],
                Td = Qo[Ct],
                Yo = Ci(0, Ne[gt], Qn[gt]),
                qy = ye ? Ne[gt] / 2 - dt - Yo - Od - tt.mainAxis : Be - Yo - Od - tt.mainAxis,
                Jy = ye ? -Ne[gt] / 2 + dt + Yo + Td + tt.mainAxis : Ot + Yo + Td + tt.mainAxis,
                ml = s.elements.arrow && xi(s.elements.arrow),
                Xy = ml ? (Oe === "y" ? ml.clientTop || 0 : ml.clientLeft || 0) : 0,
                Nd = (xt = Bt == null ? void 0 : Bt[Oe]) != null ? xt : 0,
                Zy = wn + Jy - Nd,
                Pd = Ci(ie ? Ro(_n, wn + qy - Nd - Xy) : _n, wn, ie ? vr($r, Zy) : $r)
              ;(Ee[Oe] = Pd), (an[Oe] = Pd - wn)
            }
            if (L) {
              var jd,
                e0 = Oe === "x" ? ft : bt,
                t0 = Oe === "x" ? _t : zt,
                Sr = Ee[me],
                Ko = me === "y" ? "height" : "width",
                Rd = Sr + fe[e0],
                Ld = Sr - fe[t0],
                gl = [ft, bt].indexOf(De) !== -1,
                Id = (jd = Bt == null ? void 0 : Bt[me]) != null ? jd : 0,
                Md = gl ? Rd : Sr - Ne[Ko] - ze[Ko] - Id + tt.altAxis,
                Dd = gl ? Sr + Ne[Ko] + ze[Ko] - Id - tt.altAxis : Ld,
                zd =
                  ie && gl
                    ? (function (n0, r0, vl) {
                        var Bd = Ci(n0, r0, vl)
                        return Bd > vl ? vl : Bd
                      })(Md, Sr, Dd)
                    : Ci(ie ? Md : Rd, Sr, ie ? Dd : Ld)
              ;(Ee[me] = zd), (an[me] = zd - Sr)
            }
            s.modifiersData[d] = an
          }
        },
        requiresIfExists: ["offset"],
      }
    function ly(c, s, l) {
      l === void 0 && (l = !1)
      var d,
        _,
        A = Kt(s),
        N =
          Kt(s) &&
          (function (Q) {
            var he = Q.getBoundingClientRect(),
              ie = Fr(he.width) / Q.offsetWidth || 1,
              ce = Fr(he.height) / Q.offsetHeight || 1
            return ie !== 1 || ce !== 1
          })(s),
        L = Vn(s),
        U = Hr(c, N, l),
        q = { scrollLeft: 0, scrollTop: 0 },
        X = { x: 0, y: 0 }
      return (
        (A || (!A && !l)) &&
          ((vn(s) !== "body" || sl(L)) && (q = (d = s) !== Yt(d) && Kt(d) ? { scrollLeft: (_ = d).scrollLeft, scrollTop: _.scrollTop } : il(d)),
          Kt(s) ? (((X = Hr(s, !0)).x += s.clientLeft), (X.y += s.clientTop)) : L && (X.x = ol(L))),
        { x: U.left + q.scrollLeft - X.x, y: U.top + q.scrollTop - X.y, width: U.width, height: U.height }
      )
    }
    function uy(c) {
      var s = new Map(),
        l = new Set(),
        d = []
      function _(A) {
        l.add(A.name),
          [].concat(A.requires || [], A.requiresIfExists || []).forEach(function (N) {
            if (!l.has(N)) {
              var L = s.get(N)
              L && _(L)
            }
          }),
          d.push(A)
      }
      return (
        c.forEach(function (A) {
          s.set(A.name, A)
        }),
        c.forEach(function (A) {
          l.has(A.name) || _(A)
        }),
        d
      )
    }
    var Vf = { placement: "bottom", modifiers: [], strategy: "absolute" }
    function Qf() {
      for (var c = arguments.length, s = new Array(c), l = 0; l < c; l++) s[l] = arguments[l]
      return !s.some(function (d) {
        return !(d && typeof d.getBoundingClientRect == "function")
      })
    }
    function Do(c) {
      c === void 0 && (c = {})
      var s = c,
        l = s.defaultModifiers,
        d = l === void 0 ? [] : l,
        _ = s.defaultOptions,
        A = _ === void 0 ? Vf : _
      return function (N, L, U) {
        U === void 0 && (U = A)
        var q,
          X,
          Q = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, Vf, A),
            modifiersData: {},
            elements: { reference: N, popper: L },
            attributes: {},
            styles: {},
          },
          he = [],
          ie = !1,
          ce = {
            state: Q,
            setOptions: function (fe) {
              var De = typeof fe == "function" ? fe(Q.options) : fe
              ae(),
                (Q.options = Object.assign({}, A, Q.options, De)),
                (Q.scrollParents = { reference: gr(N) ? Oi(N) : N.contextElement ? Oi(N.contextElement) : [], popper: Oi(L) })
              var He,
                ye,
                Oe = (function (me) {
                  var Ee = uy(me)
                  return Cf.reduce(function (Ne, ze) {
                    return Ne.concat(
                      Ee.filter(function (Pe) {
                        return Pe.phase === ze
                      })
                    )
                  }, [])
                })(
                  ((He = [].concat(d, Q.options.modifiers)),
                  (ye = He.reduce(function (me, Ee) {
                    var Ne = me[Ee.name]
                    return (
                      (me[Ee.name] = Ne
                        ? Object.assign({}, Ne, Ee, { options: Object.assign({}, Ne.options, Ee.options), data: Object.assign({}, Ne.data, Ee.data) })
                        : Ee),
                      me
                    )
                  }, {})),
                  Object.keys(ye).map(function (me) {
                    return ye[me]
                  }))
                )
              return (
                (Q.orderedModifiers = Oe.filter(function (me) {
                  return me.enabled
                })),
                Q.orderedModifiers.forEach(function (me) {
                  var Ee = me.name,
                    Ne = me.options,
                    ze = Ne === void 0 ? {} : Ne,
                    Pe = me.effect
                  if (typeof Pe == "function") {
                    var tt = Pe({ state: Q, name: Ee, instance: ce, options: ze })
                    he.push(tt || function () {})
                  }
                }),
                ce.update()
              )
            },
            forceUpdate: function () {
              if (!ie) {
                var fe = Q.elements,
                  De = fe.reference,
                  He = fe.popper
                if (Qf(De, He)) {
                  ;(Q.rects = { reference: ly(De, xi(He), Q.options.strategy === "fixed"), popper: el(He) }),
                    (Q.reset = !1),
                    (Q.placement = Q.options.placement),
                    Q.orderedModifiers.forEach(function (Pe) {
                      return (Q.modifiersData[Pe.name] = Object.assign({}, Pe.data))
                    })
                  for (var ye = 0; ye < Q.orderedModifiers.length; ye++)
                    if (Q.reset !== !0) {
                      var Oe = Q.orderedModifiers[ye],
                        me = Oe.fn,
                        Ee = Oe.options,
                        Ne = Ee === void 0 ? {} : Ee,
                        ze = Oe.name
                      typeof me == "function" && (Q = me({ state: Q, options: Ne, name: ze, instance: ce }) || Q)
                    } else (Q.reset = !1), (ye = -1)
                }
              }
            },
            update:
              ((q = function () {
                return new Promise(function (fe) {
                  ce.forceUpdate(), fe(Q)
                })
              }),
              function () {
                return (
                  X ||
                    (X = new Promise(function (fe) {
                      Promise.resolve().then(function () {
                        ;(X = void 0), fe(q())
                      })
                    })),
                  X
                )
              }),
            destroy: function () {
              ae(), (ie = !0)
            },
          }
        if (!Qf(N, L)) return ce
        function ae() {
          he.forEach(function (fe) {
            return fe()
          }),
            (he = [])
        }
        return (
          ce.setOptions(U).then(function (fe) {
            !ie && U.onFirstUpdate && U.onFirstUpdate(fe)
          }),
          ce
        )
      }
    }
    var cy = Do(),
      fy = Do({ defaultModifiers: [rl, ll, nl, Xa] }),
      ul = Do({ defaultModifiers: [rl, ll, nl, Xa, Wf, Bf, $f, Rf, Uf] })
    const Yf = Object.freeze(
        Object.defineProperty(
          {
            __proto__: null,
            popperGenerator: Do,
            detectOverflow: Wr,
            createPopperBase: cy,
            createPopper: ul,
            createPopperLite: fy,
            top: ft,
            bottom: _t,
            right: zt,
            left: bt,
            auto: jo,
            basePlacements: Dr,
            start: mr,
            end: zr,
            clippingParents: gf,
            viewport: Ka,
            popper: Br,
            reference: vf,
            variationPlacements: Ga,
            placements: qa,
            beforeRead: yf,
            read: wf,
            afterRead: _f,
            beforeMain: Af,
            main: Sf,
            afterMain: Ef,
            beforeWrite: kf,
            write: bf,
            afterWrite: xf,
            modifierPhases: Cf,
            applyStyles: Xa,
            arrow: Rf,
            computeStyles: nl,
            eventListeners: rl,
            flip: Bf,
            hide: Uf,
            offset: Wf,
            popperOffsets: ll,
            preventOverflow: $f,
          },
          Symbol.toStringTag,
          { value: "Module" }
        )
      ),
      Kf = "dropdown",
      dy = "ArrowUp",
      Gf = "ArrowDown",
      qf = "click.bs.dropdown.data-api",
      Jf = "keydown.bs.dropdown.data-api",
      Ti = "show",
      yr = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
      py = `${yr}.show`,
      zo = ".dropdown-menu",
      hy = F() ? "top-end" : "top-start",
      my = F() ? "top-start" : "top-end",
      gy = F() ? "bottom-end" : "bottom-start",
      vy = F() ? "bottom-start" : "bottom-end",
      yy = F() ? "left-start" : "right-start",
      wy = F() ? "right-start" : "left-start",
      _y = { autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" },
      Ay = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)",
      }
    class sn extends I {
      constructor(s, l) {
        super(s, l),
          (this._popper = null),
          (this._parent = this._element.parentNode),
          (this._menu = G.next(this._element, zo)[0] || G.prev(this._element, zo)[0] || G.findOne(zo, this._parent)),
          (this._inNavbar = this._detectNavbar())
      }
      static get Default() {
        return _y
      }
      static get DefaultType() {
        return Ay
      }
      static get NAME() {
        return Kf
      }
      toggle() {
        return this._isShown() ? this.hide() : this.show()
      }
      show() {
        if (v(this._element) || this._isShown()) return
        const s = { relatedTarget: this._element }
        if (!m.trigger(this._element, "show.bs.dropdown", s).defaultPrevented) {
          if ((this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")))
            for (const l of [].concat(...document.body.children)) m.on(l, "mouseover", S)
          this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.add(Ti),
            this._element.classList.add(Ti),
            m.trigger(this._element, "shown.bs.dropdown", s)
        }
      }
      hide() {
        if (v(this._element) || !this._isShown()) return
        const s = { relatedTarget: this._element }
        this._completeHide(s)
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose()
      }
      update() {
        ;(this._inNavbar = this._detectNavbar()), this._popper && this._popper.update()
      }
      _completeHide(s) {
        if (!m.trigger(this._element, "hide.bs.dropdown", s).defaultPrevented) {
          if ("ontouchstart" in document.documentElement) for (const l of [].concat(...document.body.children)) m.off(l, "mouseover", S)
          this._popper && this._popper.destroy(),
            this._menu.classList.remove(Ti),
            this._element.classList.remove(Ti),
            this._element.setAttribute("aria-expanded", "false"),
            E.removeDataAttribute(this._menu, "popper"),
            m.trigger(this._element, "hidden.bs.dropdown", s)
        }
      }
      _getConfig(s) {
        if (typeof (s = super._getConfig(s)).reference == "object" && !u(s.reference) && typeof s.reference.getBoundingClientRect != "function")
          throw new TypeError(`${Kf.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`)
        return s
      }
      _createPopper() {
        if (Yf === void 0) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)")
        let s = this._element
        this._config.reference === "parent"
          ? (s = this._parent)
          : u(this._config.reference)
          ? (s = f(this._config.reference))
          : typeof this._config.reference == "object" && (s = this._config.reference)
        const l = this._getPopperConfig()
        this._popper = ul(s, this._menu, l)
      }
      _isShown() {
        return this._menu.classList.contains(Ti)
      }
      _getPlacement() {
        const s = this._parent
        if (s.classList.contains("dropend")) return yy
        if (s.classList.contains("dropstart")) return wy
        if (s.classList.contains("dropup-center")) return "top"
        if (s.classList.contains("dropdown-center")) return "bottom"
        const l = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end"
        return s.classList.contains("dropup") ? (l ? my : hy) : l ? vy : gy
      }
      _detectNavbar() {
        return this._element.closest(".navbar") !== null
      }
      _getOffset() {
        const { offset: s } = this._config
        return typeof s == "string" ? s.split(",").map((l) => Number.parseInt(l, 10)) : typeof s == "function" ? (l) => s(l, this._element) : s
      }
      _getPopperConfig() {
        const s = {
          placement: this._getPlacement(),
          modifiers: [
            { name: "preventOverflow", options: { boundary: this._config.boundary } },
            { name: "offset", options: { offset: this._getOffset() } },
          ],
        }
        return (
          (this._inNavbar || this._config.display === "static") &&
            (E.setDataAttribute(this._menu, "popper", "static"), (s.modifiers = [{ name: "applyStyles", enabled: !1 }])),
          { ...s, ...(typeof this._config.popperConfig == "function" ? this._config.popperConfig(s) : this._config.popperConfig) }
        )
      }
      _selectMenuItem({ key: s, target: l }) {
        const d = G.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((_) => p(_))
        d.length && j(d, l, s === Gf, !d.includes(l)).focus()
      }
      static jQueryInterface(s) {
        return this.each(function () {
          const l = sn.getOrCreateInstance(this, s)
          if (typeof s == "string") {
            if (l[s] === void 0) throw new TypeError(`No method named "${s}"`)
            l[s]()
          }
        })
      }
      static clearMenus(s) {
        if (s.button === 2 || (s.type === "keyup" && s.key !== "Tab")) return
        const l = G.find(py)
        for (const d of l) {
          const _ = sn.getInstance(d)
          if (!_ || _._config.autoClose === !1) continue
          const A = s.composedPath(),
            N = A.includes(_._menu)
          if (
            A.includes(_._element) ||
            (_._config.autoClose === "inside" && !N) ||
            (_._config.autoClose === "outside" && N) ||
            (_._menu.contains(s.target) && ((s.type === "keyup" && s.key === "Tab") || /input|select|option|textarea|form/i.test(s.target.tagName)))
          )
            continue
          const L = { relatedTarget: _._element }
          s.type === "click" && (L.clickEvent = s), _._completeHide(L)
        }
      }
      static dataApiKeydownHandler(s) {
        const l = /input|textarea/i.test(s.target.tagName),
          d = s.key === "Escape",
          _ = [dy, Gf].includes(s.key)
        if ((!_ && !d) || (l && !d)) return
        s.preventDefault()
        const A = this.matches(yr) ? this : G.prev(this, yr)[0] || G.next(this, yr)[0] || G.findOne(yr, s.delegateTarget.parentNode),
          N = sn.getOrCreateInstance(A)
        if (_) return s.stopPropagation(), N.show(), void N._selectMenuItem(s)
        N._isShown() && (s.stopPropagation(), N.hide(), A.focus())
      }
    }
    m.on(document, Jf, yr, sn.dataApiKeydownHandler),
      m.on(document, Jf, zo, sn.dataApiKeydownHandler),
      m.on(document, qf, sn.clearMenus),
      m.on(document, "keyup.bs.dropdown.data-api", sn.clearMenus),
      m.on(document, qf, yr, function (c) {
        c.preventDefault(), sn.getOrCreateInstance(this).toggle()
      }),
      g(sn)
    const Xf = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      Zf = ".sticky-top",
      Bo = "padding-right",
      ed = "margin-right"
    class cl {
      constructor() {
        this._element = document.body
      }
      getWidth() {
        const s = document.documentElement.clientWidth
        return Math.abs(window.innerWidth - s)
      }
      hide() {
        const s = this.getWidth()
        this._disableOverFlow(),
          this._setElementAttributes(this._element, Bo, (l) => l + s),
          this._setElementAttributes(Xf, Bo, (l) => l + s),
          this._setElementAttributes(Zf, ed, (l) => l - s)
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"),
          this._resetElementAttributes(this._element, Bo),
          this._resetElementAttributes(Xf, Bo),
          this._resetElementAttributes(Zf, ed)
      }
      isOverflowing() {
        return this.getWidth() > 0
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), (this._element.style.overflow = "hidden")
      }
      _setElementAttributes(s, l, d) {
        const _ = this.getWidth()
        this._applyManipulationCallback(s, (A) => {
          if (A !== this._element && window.innerWidth > A.clientWidth + _) return
          this._saveInitialAttribute(A, l)
          const N = window.getComputedStyle(A).getPropertyValue(l)
          A.style.setProperty(l, `${d(Number.parseFloat(N))}px`)
        })
      }
      _saveInitialAttribute(s, l) {
        const d = s.style.getPropertyValue(l)
        d && E.setDataAttribute(s, l, d)
      }
      _resetElementAttributes(s, l) {
        this._applyManipulationCallback(s, (d) => {
          const _ = E.getDataAttribute(d, l)
          _ !== null ? (E.removeDataAttribute(d, l), d.style.setProperty(l, _)) : d.style.removeProperty(l)
        })
      }
      _applyManipulationCallback(s, l) {
        if (u(s)) l(s)
        else for (const d of G.find(s, this._element)) l(d)
      }
    }
    const td = "show",
      nd = "mousedown.bs.backdrop",
      Sy = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" },
      Ey = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" }
    class rd extends ee {
      constructor(s) {
        super(), (this._config = this._getConfig(s)), (this._isAppended = !1), (this._element = null)
      }
      static get Default() {
        return Sy
      }
      static get DefaultType() {
        return Ey
      }
      static get NAME() {
        return "backdrop"
      }
      show(s) {
        if (!this._config.isVisible) return void h(s)
        this._append()
        const l = this._getElement()
        this._config.isAnimated && P(l),
          l.classList.add(td),
          this._emulateAnimation(() => {
            h(s)
          })
      }
      hide(s) {
        this._config.isVisible
          ? (this._getElement().classList.remove(td),
            this._emulateAnimation(() => {
              this.dispose(), h(s)
            }))
          : h(s)
      }
      dispose() {
        this._isAppended && (m.off(this._element, nd), this._element.remove(), (this._isAppended = !1))
      }
      _getElement() {
        if (!this._element) {
          const s = document.createElement("div")
          ;(s.className = this._config.className), this._config.isAnimated && s.classList.add("fade"), (this._element = s)
        }
        return this._element
      }
      _configAfterMerge(s) {
        return (s.rootElement = f(s.rootElement)), s
      }
      _append() {
        if (this._isAppended) return
        const s = this._getElement()
        this._config.rootElement.append(s),
          m.on(s, nd, () => {
            h(this._config.clickCallback)
          }),
          (this._isAppended = !0)
      }
      _emulateAnimation(s) {
        y(s, this._getElement(), this._config.isAnimated)
      }
    }
    const id = ".bs.focustrap",
      od = "backward",
      ky = { autofocus: !0, trapElement: null },
      by = { autofocus: "boolean", trapElement: "element" }
    class sd extends ee {
      constructor(s) {
        super(), (this._config = this._getConfig(s)), (this._isActive = !1), (this._lastTabNavDirection = null)
      }
      static get Default() {
        return ky
      }
      static get DefaultType() {
        return by
      }
      static get NAME() {
        return "focustrap"
      }
      activate() {
        this._isActive ||
          (this._config.autofocus && this._config.trapElement.focus(),
          m.off(document, id),
          m.on(document, "focusin.bs.focustrap", (s) => this._handleFocusin(s)),
          m.on(document, "keydown.tab.bs.focustrap", (s) => this._handleKeydown(s)),
          (this._isActive = !0))
      }
      deactivate() {
        this._isActive && ((this._isActive = !1), m.off(document, id))
      }
      _handleFocusin(s) {
        const { trapElement: l } = this._config
        if (s.target === document || s.target === l || l.contains(s.target)) return
        const d = G.focusableChildren(l)
        d.length === 0 ? l.focus() : this._lastTabNavDirection === od ? d[d.length - 1].focus() : d[0].focus()
      }
      _handleKeydown(s) {
        s.key === "Tab" && (this._lastTabNavDirection = s.shiftKey ? od : "forward")
      }
    }
    const ad = "hidden.bs.modal",
      ld = "show.bs.modal",
      ud = "modal-open",
      cd = "show",
      fl = "modal-static",
      xy = { backdrop: !0, focus: !0, keyboard: !0 },
      Cy = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" }
    class wr extends I {
      constructor(s, l) {
        super(s, l),
          (this._dialog = G.findOne(".modal-dialog", this._element)),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          (this._isShown = !1),
          (this._isTransitioning = !1),
          (this._scrollBar = new cl()),
          this._addEventListeners()
      }
      static get Default() {
        return xy
      }
      static get DefaultType() {
        return Cy
      }
      static get NAME() {
        return "modal"
      }
      toggle(s) {
        return this._isShown ? this.hide() : this.show(s)
      }
      show(s) {
        this._isShown ||
          this._isTransitioning ||
          m.trigger(this._element, ld, { relatedTarget: s }).defaultPrevented ||
          ((this._isShown = !0),
          (this._isTransitioning = !0),
          this._scrollBar.hide(),
          document.body.classList.add(ud),
          this._adjustDialog(),
          this._backdrop.show(() => this._showElement(s)))
      }
      hide() {
        this._isShown &&
          !this._isTransitioning &&
          (m.trigger(this._element, "hide.bs.modal").defaultPrevented ||
            ((this._isShown = !1),
            (this._isTransitioning = !0),
            this._focustrap.deactivate(),
            this._element.classList.remove(cd),
            this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())))
      }
      dispose() {
        for (const s of [window, this._dialog]) m.off(s, ".bs.modal")
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
      }
      handleUpdate() {
        this._adjustDialog()
      }
      _initializeBackDrop() {
        return new rd({ isVisible: !!this._config.backdrop, isAnimated: this._isAnimated() })
      }
      _initializeFocusTrap() {
        return new sd({ trapElement: this._element })
      }
      _showElement(s) {
        document.body.contains(this._element) || document.body.append(this._element),
          (this._element.style.display = "block"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          (this._element.scrollTop = 0)
        const l = G.findOne(".modal-body", this._dialog)
        l && (l.scrollTop = 0),
          P(this._element),
          this._element.classList.add(cd),
          this._queueCallback(
            () => {
              this._config.focus && this._focustrap.activate(), (this._isTransitioning = !1), m.trigger(this._element, "shown.bs.modal", { relatedTarget: s })
            },
            this._dialog,
            this._isAnimated()
          )
      }
      _addEventListeners() {
        m.on(this._element, "keydown.dismiss.bs.modal", (s) => {
          if (s.key === "Escape") return this._config.keyboard ? (s.preventDefault(), void this.hide()) : void this._triggerBackdropTransition()
        }),
          m.on(window, "resize.bs.modal", () => {
            this._isShown && !this._isTransitioning && this._adjustDialog()
          }),
          m.on(this._element, "mousedown.dismiss.bs.modal", (s) => {
            m.one(this._element, "click.dismiss.bs.modal", (l) => {
              this._element === s.target &&
                this._element === l.target &&
                (this._config.backdrop !== "static" ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
            })
          })
      }
      _hideModal() {
        ;(this._element.style.display = "none"),
          this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._isTransitioning = !1),
          this._backdrop.hide(() => {
            document.body.classList.remove(ud), this._resetAdjustments(), this._scrollBar.reset(), m.trigger(this._element, ad)
          })
      }
      _isAnimated() {
        return this._element.classList.contains("fade")
      }
      _triggerBackdropTransition() {
        if (m.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return
        const s = this._element.scrollHeight > document.documentElement.clientHeight,
          l = this._element.style.overflowY
        l === "hidden" ||
          this._element.classList.contains(fl) ||
          (s || (this._element.style.overflowY = "hidden"),
          this._element.classList.add(fl),
          this._queueCallback(() => {
            this._element.classList.remove(fl),
              this._queueCallback(() => {
                this._element.style.overflowY = l
              }, this._dialog)
          }, this._dialog),
          this._element.focus())
      }
      _adjustDialog() {
        const s = this._element.scrollHeight > document.documentElement.clientHeight,
          l = this._scrollBar.getWidth(),
          d = l > 0
        if (d && !s) {
          const _ = F() ? "paddingLeft" : "paddingRight"
          this._element.style[_] = `${l}px`
        }
        if (!d && s) {
          const _ = F() ? "paddingRight" : "paddingLeft"
          this._element.style[_] = `${l}px`
        }
      }
      _resetAdjustments() {
        ;(this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "")
      }
      static jQueryInterface(s, l) {
        return this.each(function () {
          const d = wr.getOrCreateInstance(this, s)
          if (typeof s == "string") {
            if (d[s] === void 0) throw new TypeError(`No method named "${s}"`)
            d[s](l)
          }
        })
      }
    }
    m.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (c) {
      const s = o(this)
      ;["A", "AREA"].includes(this.tagName) && c.preventDefault(),
        m.one(s, ld, (d) => {
          d.defaultPrevented ||
            m.one(s, ad, () => {
              p(this) && this.focus()
            })
        })
      const l = G.findOne(".modal.show")
      l && wr.getInstance(l).hide(), wr.getOrCreateInstance(s).toggle(this)
    }),
      pe(wr),
      g(wr)
    const fd = "show",
      dd = "showing",
      pd = "hiding",
      hd = ".offcanvas.show",
      md = "hidePrevented.bs.offcanvas",
      gd = "hidden.bs.offcanvas",
      Oy = { backdrop: !0, keyboard: !0, scroll: !1 },
      Ty = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" }
    class Nn extends I {
      constructor(s, l) {
        super(s, l), (this._isShown = !1), (this._backdrop = this._initializeBackDrop()), (this._focustrap = this._initializeFocusTrap()), this._addEventListeners()
      }
      static get Default() {
        return Oy
      }
      static get DefaultType() {
        return Ty
      }
      static get NAME() {
        return "offcanvas"
      }
      toggle(s) {
        return this._isShown ? this.hide() : this.show(s)
      }
      show(s) {
        this._isShown ||
          m.trigger(this._element, "show.bs.offcanvas", { relatedTarget: s }).defaultPrevented ||
          ((this._isShown = !0),
          this._backdrop.show(),
          this._config.scroll || new cl().hide(),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          this._element.classList.add(dd),
          this._queueCallback(
            () => {
              ;(this._config.scroll && !this._config.backdrop) || this._focustrap.activate(),
                this._element.classList.add(fd),
                this._element.classList.remove(dd),
                m.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: s })
            },
            this._element,
            !0
          ))
      }
      hide() {
        this._isShown &&
          (m.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
            (this._focustrap.deactivate(),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.add(pd),
            this._backdrop.hide(),
            this._queueCallback(
              () => {
                this._element.classList.remove(fd, pd),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  this._config.scroll || new cl().reset(),
                  m.trigger(this._element, gd)
              },
              this._element,
              !0
            )))
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
      }
      _initializeBackDrop() {
        const s = !!this._config.backdrop
        return new rd({
          className: "offcanvas-backdrop",
          isVisible: s,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: s
            ? () => {
                this._config.backdrop !== "static" ? this.hide() : m.trigger(this._element, md)
              }
            : null,
        })
      }
      _initializeFocusTrap() {
        return new sd({ trapElement: this._element })
      }
      _addEventListeners() {
        m.on(this._element, "keydown.dismiss.bs.offcanvas", (s) => {
          s.key === "Escape" && (this._config.keyboard ? this.hide() : m.trigger(this._element, md))
        })
      }
      static jQueryInterface(s) {
        return this.each(function () {
          const l = Nn.getOrCreateInstance(this, s)
          if (typeof s == "string") {
            if (l[s] === void 0 || s.startsWith("_") || s === "constructor") throw new TypeError(`No method named "${s}"`)
            l[s](this)
          }
        })
      }
    }
    m.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (c) {
      const s = o(this)
      if ((["A", "AREA"].includes(this.tagName) && c.preventDefault(), v(this))) return
      m.one(s, gd, () => {
        p(this) && this.focus()
      })
      const l = G.findOne(hd)
      l && l !== s && Nn.getInstance(l).hide(), Nn.getOrCreateInstance(s).toggle(this)
    }),
      m.on(window, "load.bs.offcanvas.data-api", () => {
        for (const c of G.find(hd)) Nn.getOrCreateInstance(c).show()
      }),
      m.on(window, "resize.bs.offcanvas", () => {
        for (const c of G.find("[aria-modal][class*=show][class*=offcanvas-]")) getComputedStyle(c).position !== "fixed" && Nn.getOrCreateInstance(c).hide()
      }),
      pe(Nn),
      g(Nn)
    const Ny = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      Py = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
      jy = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      Ry = (c, s) => {
        const l = c.nodeName.toLowerCase()
        return s.includes(l) ? !Ny.has(l) || !!(Py.test(c.nodeValue) || jy.test(c.nodeValue)) : s.filter((d) => d instanceof RegExp).some((d) => d.test(l))
      },
      vd = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      Ly = { allowList: vd, content: {}, extraClass: "", html: !1, sanitize: !0, sanitizeFn: null, template: "<div></div>" },
      Iy = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string",
      },
      My = { entry: "(string|element|function|null)", selector: "(string|element)" }
    class Dy extends ee {
      constructor(s) {
        super(), (this._config = this._getConfig(s))
      }
      static get Default() {
        return Ly
      }
      static get DefaultType() {
        return Iy
      }
      static get NAME() {
        return "TemplateFactory"
      }
      getContent() {
        return Object.values(this._config.content)
          .map((s) => this._resolvePossibleFunction(s))
          .filter(Boolean)
      }
      hasContent() {
        return this.getContent().length > 0
      }
      changeContent(s) {
        return this._checkContent(s), (this._config.content = { ...this._config.content, ...s }), this
      }
      toHtml() {
        const s = document.createElement("div")
        s.innerHTML = this._maybeSanitize(this._config.template)
        for (const [_, A] of Object.entries(this._config.content)) this._setContent(s, A, _)
        const l = s.children[0],
          d = this._resolvePossibleFunction(this._config.extraClass)
        return d && l.classList.add(...d.split(" ")), l
      }
      _typeCheckConfig(s) {
        super._typeCheckConfig(s), this._checkContent(s.content)
      }
      _checkContent(s) {
        for (const [l, d] of Object.entries(s)) super._typeCheckConfig({ selector: l, entry: d }, My)
      }
      _setContent(s, l, d) {
        const _ = G.findOne(d, s)
        _ &&
          ((l = this._resolvePossibleFunction(l))
            ? u(l)
              ? this._putElementInTemplate(f(l), _)
              : this._config.html
              ? (_.innerHTML = this._maybeSanitize(l))
              : (_.textContent = l)
            : _.remove())
      }
      _maybeSanitize(s) {
        return this._config.sanitize
          ? (function (l, d, _) {
              if (!l.length) return l
              if (_ && typeof _ == "function") return _(l)
              const A = new window.DOMParser().parseFromString(l, "text/html"),
                N = [].concat(...A.body.querySelectorAll("*"))
              for (const L of N) {
                const U = L.nodeName.toLowerCase()
                if (!Object.keys(d).includes(U)) {
                  L.remove()
                  continue
                }
                const q = [].concat(...L.attributes),
                  X = [].concat(d["*"] || [], d[U] || [])
                for (const Q of q) Ry(Q, X) || L.removeAttribute(Q.nodeName)
              }
              return A.body.innerHTML
            })(s, this._config.allowList, this._config.sanitizeFn)
          : s
      }
      _resolvePossibleFunction(s) {
        return typeof s == "function" ? s(this) : s
      }
      _putElementInTemplate(s, l) {
        if (this._config.html) return (l.innerHTML = ""), void l.append(s)
        l.textContent = s.textContent
      }
    }
    const zy = new Set(["sanitize", "allowList", "sanitizeFn"]),
      dl = "fade",
      Fo = "show",
      yd = ".modal",
      wd = "hide.bs.modal",
      Ho = "hover",
      _d = "focus",
      By = { AUTO: "auto", TOP: "top", RIGHT: F() ? "left" : "right", BOTTOM: "bottom", LEFT: F() ? "right" : "left" },
      Fy = {
        allowList: vd,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 0],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus",
      },
      Hy = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
      }
    class _r extends I {
      constructor(s, l) {
        if (Yf === void 0) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)")
        super(s, l),
          (this._isEnabled = !0),
          (this._timeout = 0),
          (this._isHovered = null),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this._templateFactory = null),
          (this._newContent = null),
          (this.tip = null),
          this._setListeners(),
          this._config.selector || this._fixTitle()
      }
      static get Default() {
        return Fy
      }
      static get DefaultType() {
        return Hy
      }
      static get NAME() {
        return "tooltip"
      }
      enable() {
        this._isEnabled = !0
      }
      disable() {
        this._isEnabled = !1
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled
      }
      toggle() {
        this._isEnabled && ((this._activeTrigger.click = !this._activeTrigger.click), this._isShown() ? this._leave() : this._enter())
      }
      dispose() {
        clearTimeout(this._timeout),
          m.off(this._element.closest(yd), wd, this._hideModalHandler),
          this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")),
          this._disposePopper(),
          super.dispose()
      }
      show() {
        if (this._element.style.display === "none") throw new Error("Please use show on visible elements")
        if (!this._isWithContent() || !this._isEnabled) return
        const s = m.trigger(this._element, this.constructor.eventName("show")),
          l = (w(this._element) || this._element.ownerDocument.documentElement).contains(this._element)
        if (s.defaultPrevented || !l) return
        this._disposePopper()
        const d = this._getTipElement()
        this._element.setAttribute("aria-describedby", d.getAttribute("id"))
        const { container: _ } = this._config
        if (
          (this._element.ownerDocument.documentElement.contains(this.tip) || (_.append(d), m.trigger(this._element, this.constructor.eventName("inserted"))),
          (this._popper = this._createPopper(d)),
          d.classList.add(Fo),
          "ontouchstart" in document.documentElement)
        )
          for (const A of [].concat(...document.body.children)) m.on(A, "mouseover", S)
        this._queueCallback(
          () => {
            m.trigger(this._element, this.constructor.eventName("shown")), this._isHovered === !1 && this._leave(), (this._isHovered = !1)
          },
          this.tip,
          this._isAnimated()
        )
      }
      hide() {
        if (this._isShown() && !m.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
          if ((this._getTipElement().classList.remove(Fo), "ontouchstart" in document.documentElement))
            for (const s of [].concat(...document.body.children)) m.off(s, "mouseover", S)
          ;(this._activeTrigger.click = !1),
            (this._activeTrigger.focus = !1),
            (this._activeTrigger.hover = !1),
            (this._isHovered = null),
            this._queueCallback(
              () => {
                this._isWithActiveTrigger() ||
                  (this._isHovered || this._disposePopper(),
                  this._element.removeAttribute("aria-describedby"),
                  m.trigger(this._element, this.constructor.eventName("hidden")))
              },
              this.tip,
              this._isAnimated()
            )
        }
      }
      update() {
        this._popper && this._popper.update()
      }
      _isWithContent() {
        return !!this._getTitle()
      }
      _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
      }
      _createTipElement(s) {
        const l = this._getTemplateFactory(s).toHtml()
        if (!l) return null
        l.classList.remove(dl, Fo), l.classList.add(`bs-${this.constructor.NAME}-auto`)
        const d = ((_) => {
          do _ += Math.floor(1e6 * Math.random())
          while (document.getElementById(_))
          return _
        })(this.constructor.NAME).toString()
        return l.setAttribute("id", d), this._isAnimated() && l.classList.add(dl), l
      }
      setContent(s) {
        ;(this._newContent = s), this._isShown() && (this._disposePopper(), this.show())
      }
      _getTemplateFactory(s) {
        return (
          this._templateFactory
            ? this._templateFactory.changeContent(s)
            : (this._templateFactory = new Dy({ ...this._config, content: s, extraClass: this._resolvePossibleFunction(this._config.customClass) })),
          this._templateFactory
        )
      }
      _getContentForTemplate() {
        return { ".tooltip-inner": this._getTitle() }
      }
      _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
      }
      _initializeOnDelegatedTarget(s) {
        return this.constructor.getOrCreateInstance(s.delegateTarget, this._getDelegateConfig())
      }
      _isAnimated() {
        return this._config.animation || (this.tip && this.tip.classList.contains(dl))
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(Fo)
      }
      _createPopper(s) {
        const l = typeof this._config.placement == "function" ? this._config.placement.call(this, s, this._element) : this._config.placement,
          d = By[l.toUpperCase()]
        return ul(this._element, s, this._getPopperConfig(d))
      }
      _getOffset() {
        const { offset: s } = this._config
        return typeof s == "string" ? s.split(",").map((l) => Number.parseInt(l, 10)) : typeof s == "function" ? (l) => s(l, this._element) : s
      }
      _resolvePossibleFunction(s) {
        return typeof s == "function" ? s.call(this._element) : s
      }
      _getPopperConfig(s) {
        const l = {
          placement: s,
          modifiers: [
            { name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } },
            { name: "offset", options: { offset: this._getOffset() } },
            { name: "preventOverflow", options: { boundary: this._config.boundary } },
            { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } },
            {
              name: "preSetPlacement",
              enabled: !0,
              phase: "beforeMain",
              fn: (d) => {
                this._getTipElement().setAttribute("data-popper-placement", d.state.placement)
              },
            },
          ],
        }
        return { ...l, ...(typeof this._config.popperConfig == "function" ? this._config.popperConfig(l) : this._config.popperConfig) }
      }
      _setListeners() {
        const s = this._config.trigger.split(" ")
        for (const l of s)
          if (l === "click")
            m.on(this._element, this.constructor.eventName("click"), this._config.selector, (d) => {
              this._initializeOnDelegatedTarget(d).toggle()
            })
          else if (l !== "manual") {
            const d = l === Ho ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
              _ = l === Ho ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout")
            m.on(this._element, d, this._config.selector, (A) => {
              const N = this._initializeOnDelegatedTarget(A)
              ;(N._activeTrigger[A.type === "focusin" ? _d : Ho] = !0), N._enter()
            }),
              m.on(this._element, _, this._config.selector, (A) => {
                const N = this._initializeOnDelegatedTarget(A)
                ;(N._activeTrigger[A.type === "focusout" ? _d : Ho] = N._element.contains(A.relatedTarget)), N._leave()
              })
          }
        ;(this._hideModalHandler = () => {
          this._element && this.hide()
        }),
          m.on(this._element.closest(yd), wd, this._hideModalHandler)
      }
      _fixTitle() {
        const s = this._element.getAttribute("title")
        s &&
          (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", s),
          this._element.setAttribute("data-bs-original-title", s),
          this._element.removeAttribute("title"))
      }
      _enter() {
        this._isShown() || this._isHovered
          ? (this._isHovered = !0)
          : ((this._isHovered = !0),
            this._setTimeout(() => {
              this._isHovered && this.show()
            }, this._config.delay.show))
      }
      _leave() {
        this._isWithActiveTrigger() ||
          ((this._isHovered = !1),
          this._setTimeout(() => {
            this._isHovered || this.hide()
          }, this._config.delay.hide))
      }
      _setTimeout(s, l) {
        clearTimeout(this._timeout), (this._timeout = setTimeout(s, l))
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0)
      }
      _getConfig(s) {
        const l = E.getDataAttributes(this._element)
        for (const d of Object.keys(l)) zy.has(d) && delete l[d]
        return (s = { ...l, ...(typeof s == "object" && s ? s : {}) }), (s = this._mergeConfigObj(s)), (s = this._configAfterMerge(s)), this._typeCheckConfig(s), s
      }
      _configAfterMerge(s) {
        return (
          (s.container = s.container === !1 ? document.body : f(s.container)),
          typeof s.delay == "number" && (s.delay = { show: s.delay, hide: s.delay }),
          typeof s.title == "number" && (s.title = s.title.toString()),
          typeof s.content == "number" && (s.content = s.content.toString()),
          s
        )
      }
      _getDelegateConfig() {
        const s = {}
        for (const l in this._config) this.constructor.Default[l] !== this._config[l] && (s[l] = this._config[l])
        return (s.selector = !1), (s.trigger = "manual"), s
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), (this._popper = null)), this.tip && (this.tip.remove(), (this.tip = null))
      }
      static jQueryInterface(s) {
        return this.each(function () {
          const l = _r.getOrCreateInstance(this, s)
          if (typeof s == "string") {
            if (l[s] === void 0) throw new TypeError(`No method named "${s}"`)
            l[s]()
          }
        })
      }
    }
    g(_r)
    const Uy = {
        ..._r.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click",
      },
      Wy = { ..._r.DefaultType, content: "(null|string|element|function)" }
    class Uo extends _r {
      static get Default() {
        return Uy
      }
      static get DefaultType() {
        return Wy
      }
      static get NAME() {
        return "popover"
      }
      _isWithContent() {
        return this._getTitle() || this._getContent()
      }
      _getContentForTemplate() {
        return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() }
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content)
      }
      static jQueryInterface(s) {
        return this.each(function () {
          const l = Uo.getOrCreateInstance(this, s)
          if (typeof s == "string") {
            if (l[s] === void 0) throw new TypeError(`No method named "${s}"`)
            l[s]()
          }
        })
      }
    }
    g(Uo)
    const Ad = "click.bs.scrollspy",
      Ni = "active",
      Sd = "[href]",
      $y = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [0.1, 0.5, 1] },
      Vy = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" }
    class Pi extends I {
      constructor(s, l) {
        super(s, l),
          (this._targetLinks = new Map()),
          (this._observableSections = new Map()),
          (this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element),
          (this._activeTarget = null),
          (this._observer = null),
          (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
          this.refresh()
      }
      static get Default() {
        return $y
      }
      static get DefaultType() {
        return Vy
      }
      static get NAME() {
        return "scrollspy"
      }
      refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : (this._observer = this._getNewObserver())
        for (const s of this._observableSections.values()) this._observer.observe(s)
      }
      dispose() {
        this._observer.disconnect(), super.dispose()
      }
      _configAfterMerge(s) {
        return (
          (s.target = f(s.target) || document.body),
          (s.rootMargin = s.offset ? `${s.offset}px 0px -30%` : s.rootMargin),
          typeof s.threshold == "string" && (s.threshold = s.threshold.split(",").map((l) => Number.parseFloat(l))),
          s
        )
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll &&
          (m.off(this._config.target, Ad),
          m.on(this._config.target, Ad, Sd, (s) => {
            const l = this._observableSections.get(s.target.hash)
            if (l) {
              s.preventDefault()
              const d = this._rootElement || window,
                _ = l.offsetTop - this._element.offsetTop
              if (d.scrollTo) return void d.scrollTo({ top: _, behavior: "smooth" })
              d.scrollTop = _
            }
          }))
      }
      _getNewObserver() {
        const s = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin }
        return new IntersectionObserver((l) => this._observerCallback(l), s)
      }
      _observerCallback(s) {
        const l = (N) => this._targetLinks.get(`#${N.target.id}`),
          d = (N) => {
            ;(this._previousScrollData.visibleEntryTop = N.target.offsetTop), this._process(l(N))
          },
          _ = (this._rootElement || document.documentElement).scrollTop,
          A = _ >= this._previousScrollData.parentScrollTop
        this._previousScrollData.parentScrollTop = _
        for (const N of s) {
          if (!N.isIntersecting) {
            ;(this._activeTarget = null), this._clearActiveClass(l(N))
            continue
          }
          const L = N.target.offsetTop >= this._previousScrollData.visibleEntryTop
          if (A && L) {
            if ((d(N), !_)) return
          } else A || L || d(N)
        }
      }
      _initializeTargetsAndObservables() {
        ;(this._targetLinks = new Map()), (this._observableSections = new Map())
        const s = G.find(Sd, this._config.target)
        for (const l of s) {
          if (!l.hash || v(l)) continue
          const d = G.findOne(l.hash, this._element)
          p(d) && (this._targetLinks.set(l.hash, l), this._observableSections.set(l.hash, d))
        }
      }
      _process(s) {
        this._activeTarget !== s &&
          (this._clearActiveClass(this._config.target),
          (this._activeTarget = s),
          s.classList.add(Ni),
          this._activateParents(s),
          m.trigger(this._element, "activate.bs.scrollspy", { relatedTarget: s }))
      }
      _activateParents(s) {
        if (s.classList.contains("dropdown-item")) G.findOne(".dropdown-toggle", s.closest(".dropdown")).classList.add(Ni)
        else for (const l of G.parents(s, ".nav, .list-group")) for (const d of G.prev(l, ".nav-link, .nav-item > .nav-link, .list-group-item")) d.classList.add(Ni)
      }
      _clearActiveClass(s) {
        s.classList.remove(Ni)
        const l = G.find("[href].active", s)
        for (const d of l) d.classList.remove(Ni)
      }
      static jQueryInterface(s) {
        return this.each(function () {
          const l = Pi.getOrCreateInstance(this, s)
          if (typeof s == "string") {
            if (l[s] === void 0 || s.startsWith("_") || s === "constructor") throw new TypeError(`No method named "${s}"`)
            l[s]()
          }
        })
      }
    }
    m.on(window, "load.bs.scrollspy.data-api", () => {
      for (const c of G.find('[data-bs-spy="scroll"]')) Pi.getOrCreateInstance(c)
    }),
      g(Pi)
    const Qy = "ArrowLeft",
      Ed = "ArrowRight",
      Yy = "ArrowUp",
      kd = "ArrowDown",
      Wo = "active",
      bd = "fade",
      pl = "show",
      xd = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      hl = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${xd}`
    class Ar extends I {
      constructor(s) {
        super(s),
          (this._parent = this._element.closest('.list-group, .nav, [role="tablist"]')),
          this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), m.on(this._element, "keydown.bs.tab", (l) => this._keydown(l)))
      }
      static get NAME() {
        return "tab"
      }
      show() {
        const s = this._element
        if (this._elemIsActive(s)) return
        const l = this._getActiveElem(),
          d = l ? m.trigger(l, "hide.bs.tab", { relatedTarget: s }) : null
        m.trigger(s, "show.bs.tab", { relatedTarget: l }).defaultPrevented || (d && d.defaultPrevented) || (this._deactivate(l, s), this._activate(s, l))
      }
      _activate(s, l) {
        s &&
          (s.classList.add(Wo),
          this._activate(o(s)),
          this._queueCallback(
            () => {
              s.getAttribute("role") === "tab"
                ? (s.removeAttribute("tabindex"), s.setAttribute("aria-selected", !0), this._toggleDropDown(s, !0), m.trigger(s, "shown.bs.tab", { relatedTarget: l }))
                : s.classList.add(pl)
            },
            s,
            s.classList.contains(bd)
          ))
      }
      _deactivate(s, l) {
        s &&
          (s.classList.remove(Wo),
          s.blur(),
          this._deactivate(o(s)),
          this._queueCallback(
            () => {
              s.getAttribute("role") === "tab"
                ? (s.setAttribute("aria-selected", !1),
                  s.setAttribute("tabindex", "-1"),
                  this._toggleDropDown(s, !1),
                  m.trigger(s, "hidden.bs.tab", { relatedTarget: l }))
                : s.classList.remove(pl)
            },
            s,
            s.classList.contains(bd)
          ))
      }
      _keydown(s) {
        if (![Qy, Ed, Yy, kd].includes(s.key)) return
        s.stopPropagation(), s.preventDefault()
        const l = [Ed, kd].includes(s.key),
          d = j(
            this._getChildren().filter((_) => !v(_)),
            s.target,
            l,
            !0
          )
        d && (d.focus({ preventScroll: !0 }), Ar.getOrCreateInstance(d).show())
      }
      _getChildren() {
        return G.find(hl, this._parent)
      }
      _getActiveElem() {
        return this._getChildren().find((s) => this._elemIsActive(s)) || null
      }
      _setInitialAttributes(s, l) {
        this._setAttributeIfNotExists(s, "role", "tablist")
        for (const d of l) this._setInitialAttributesOnChild(d)
      }
      _setInitialAttributesOnChild(s) {
        s = this._getInnerElement(s)
        const l = this._elemIsActive(s),
          d = this._getOuterElement(s)
        s.setAttribute("aria-selected", l),
          d !== s && this._setAttributeIfNotExists(d, "role", "presentation"),
          l || s.setAttribute("tabindex", "-1"),
          this._setAttributeIfNotExists(s, "role", "tab"),
          this._setInitialAttributesOnTargetPanel(s)
      }
      _setInitialAttributesOnTargetPanel(s) {
        const l = o(s)
        l && (this._setAttributeIfNotExists(l, "role", "tabpanel"), s.id && this._setAttributeIfNotExists(l, "aria-labelledby", `#${s.id}`))
      }
      _toggleDropDown(s, l) {
        const d = this._getOuterElement(s)
        if (!d.classList.contains("dropdown")) return
        const _ = (A, N) => {
          const L = G.findOne(A, d)
          L && L.classList.toggle(N, l)
        }
        _(".dropdown-toggle", Wo), _(".dropdown-menu", pl), d.setAttribute("aria-expanded", l)
      }
      _setAttributeIfNotExists(s, l, d) {
        s.hasAttribute(l) || s.setAttribute(l, d)
      }
      _elemIsActive(s) {
        return s.classList.contains(Wo)
      }
      _getInnerElement(s) {
        return s.matches(hl) ? s : G.findOne(hl, s)
      }
      _getOuterElement(s) {
        return s.closest(".nav-item, .list-group-item") || s
      }
      static jQueryInterface(s) {
        return this.each(function () {
          const l = Ar.getOrCreateInstance(this)
          if (typeof s == "string") {
            if (l[s] === void 0 || s.startsWith("_") || s === "constructor") throw new TypeError(`No method named "${s}"`)
            l[s]()
          }
        })
      }
    }
    m.on(document, "click.bs.tab", xd, function (c) {
      ;["A", "AREA"].includes(this.tagName) && c.preventDefault(), v(this) || Ar.getOrCreateInstance(this).show()
    }),
      m.on(window, "load.bs.tab", () => {
        for (const c of G.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')) Ar.getOrCreateInstance(c)
      }),
      g(Ar)
    const Cd = "hide",
      $o = "show",
      Vo = "showing",
      Ky = { animation: "boolean", autohide: "boolean", delay: "number" },
      Gy = { animation: !0, autohide: !0, delay: 5e3 }
    class ji extends I {
      constructor(s, l) {
        super(s, l), (this._timeout = null), (this._hasMouseInteraction = !1), (this._hasKeyboardInteraction = !1), this._setListeners()
      }
      static get Default() {
        return Gy
      }
      static get DefaultType() {
        return Ky
      }
      static get NAME() {
        return "toast"
      }
      show() {
        m.trigger(this._element, "show.bs.toast").defaultPrevented ||
          (this._clearTimeout(),
          this._config.animation && this._element.classList.add("fade"),
          this._element.classList.remove(Cd),
          P(this._element),
          this._element.classList.add($o, Vo),
          this._queueCallback(
            () => {
              this._element.classList.remove(Vo), m.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
            },
            this._element,
            this._config.animation
          ))
      }
      hide() {
        this.isShown() &&
          (m.trigger(this._element, "hide.bs.toast").defaultPrevented ||
            (this._element.classList.add(Vo),
            this._queueCallback(
              () => {
                this._element.classList.add(Cd), this._element.classList.remove(Vo, $o), m.trigger(this._element, "hidden.bs.toast")
              },
              this._element,
              this._config.animation
            )))
      }
      dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove($o), super.dispose()
      }
      isShown() {
        return this._element.classList.contains($o)
      }
      _maybeScheduleHide() {
        this._config.autohide &&
          (this._hasMouseInteraction ||
            this._hasKeyboardInteraction ||
            (this._timeout = setTimeout(() => {
              this.hide()
            }, this._config.delay)))
      }
      _onInteraction(s, l) {
        switch (s.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = l
            break
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = l
        }
        if (l) return void this._clearTimeout()
        const d = s.relatedTarget
        this._element === d || this._element.contains(d) || this._maybeScheduleHide()
      }
      _setListeners() {
        m.on(this._element, "mouseover.bs.toast", (s) => this._onInteraction(s, !0)),
          m.on(this._element, "mouseout.bs.toast", (s) => this._onInteraction(s, !1)),
          m.on(this._element, "focusin.bs.toast", (s) => this._onInteraction(s, !0)),
          m.on(this._element, "focusout.bs.toast", (s) => this._onInteraction(s, !1))
      }
      _clearTimeout() {
        clearTimeout(this._timeout), (this._timeout = null)
      }
      static jQueryInterface(s) {
        return this.each(function () {
          const l = ji.getOrCreateInstance(this, s)
          if (typeof s == "string") {
            if (l[s] === void 0) throw new TypeError(`No method named "${s}"`)
            l[s](this)
          }
        })
      }
    }
    return (
      pe(ji),
      g(ji),
      { Alert: se, Button: Z, Carousel: le, Collapse: $n, Dropdown: sn, Modal: wr, Offcanvas: Nn, Popover: Uo, ScrollSpy: Pi, Tab: Ar, Toast: ji, Tooltip: _r }
    )
  })
})(AS)
eu.createRoot(document.getElementById("wizkid-chatbot")).render(x.jsx(_S, {}))
