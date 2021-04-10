!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 5));
})([
  function (e, t, n) {
    var r;
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */ !(function (t, n) {
      "use strict";
      "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, o) {
      "use strict";
      var i = [],
        a = Object.getPrototypeOf,
        s = i.slice,
        u = i.flat
          ? function (e) {
              return i.flat.call(e);
            }
          : function (e) {
              return i.concat.apply([], e);
            },
        l = i.push,
        c = i.indexOf,
        f = {},
        d = f.toString,
        p = f.hasOwnProperty,
        h = p.toString,
        g = h.call(Object),
        m = {},
        v = function (e) {
          return "function" == typeof e && "number" != typeof e.nodeType;
        },
        y = function (e) {
          return null != e && e === e.window;
        },
        b = n.document,
        x = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(e, t, n) {
        var r,
          o,
          i = (n = n || b).createElement("script");
        if (((i.text = e), t))
          for (r in x)
            (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
              i.setAttribute(r, o);
        n.head.appendChild(i).parentNode.removeChild(i);
      }
      function T(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? f[d.call(e)] || "object"
          : typeof e;
      }
      var k = function (e, t) {
        return new k.fn.init(e, t);
      };
      function C(e) {
        var t = !!e && "length" in e && e.length,
          n = T(e);
        return (
          !v(e) &&
          !y(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      (k.fn = k.prototype = {
        jquery: "3.5.1",
        constructor: k,
        length: 0,
        toArray: function () {
          return s.call(this);
        },
        get: function (e) {
          return null == e
            ? s.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = k.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return k.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            k.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(s.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            k.grep(this, function (e, t) {
              return (t + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            k.grep(this, function (e, t) {
              return t % 2;
            })
          );
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: l,
        sort: i.sort,
        splice: i.splice,
      }),
        (k.extend = k.fn.extend = function () {
          var e,
            t,
            n,
            r,
            o,
            i,
            a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
          for (
            "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
              "object" == typeof a || v(a) || (a = {}),
              s === u && ((a = this), s--);
            s < u;
            s++
          )
            if (null != (e = arguments[s]))
              for (t in e)
                (r = e[t]),
                  "__proto__" !== t &&
                    a !== r &&
                    (l && r && (k.isPlainObject(r) || (o = Array.isArray(r)))
                      ? ((n = a[t]),
                        (i =
                          o && !Array.isArray(n)
                            ? []
                            : o || k.isPlainObject(n)
                            ? n
                            : {}),
                        (o = !1),
                        (a[t] = k.extend(l, i, r)))
                      : void 0 !== r && (a[t] = r));
          return a;
        }),
        k.extend({
          expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== d.call(e)) &&
              (!(t = a(e)) ||
                ("function" ==
                  typeof (n = p.call(t, "constructor") && t.constructor) &&
                  h.call(n) === g))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            w(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (C(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (C(Object(e))
                  ? k.merge(n, "string" == typeof e ? [e] : e)
                  : l.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : c.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++)
              e[o++] = t[r];
            return (e.length = o), e;
          },
          grep: function (e, t, n) {
            for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
              !t(e[o], o) !== a && r.push(e[o]);
            return r;
          },
          map: function (e, t, n) {
            var r,
              o,
              i = 0,
              a = [];
            if (C(e))
              for (r = e.length; i < r; i++)
                null != (o = t(e[i], i, n)) && a.push(o);
            else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
            return u(a);
          },
          guid: 1,
          support: m,
        }),
        "function" == typeof Symbol &&
          (k.fn[Symbol.iterator] = i[Symbol.iterator]),
        k.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            f["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var E =
        /*!
         * Sizzle CSS Selector Engine v2.3.5
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2020-03-14
         */
        (function (e) {
          var t,
            n,
            r,
            o,
            i,
            a,
            s,
            u,
            l,
            c,
            f,
            d,
            p,
            h,
            g,
            m,
            v,
            y,
            b,
            x = "sizzle" + 1 * new Date(),
            w = e.document,
            T = 0,
            k = 0,
            C = ue(),
            E = ue(),
            S = ue(),
            A = ue(),
            D = function (e, t) {
              return e === t && (f = !0), 0;
            },
            j = {}.hasOwnProperty,
            N = [],
            L = N.pop,
            q = N.push,
            O = N.push,
            H = N.slice,
            R = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            B =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            P = "[\\x20\\t\\r\\n\\f]",
            M =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              P +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            I =
              "\\[" +
              P +
              "*(" +
              M +
              ")(?:" +
              P +
              "*([*^$|!~]?=)" +
              P +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              M +
              "))|)" +
              P +
              "*\\]",
            F =
              ":(" +
              M +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              I +
              ")*)|.*)\\)|)",
            $ = new RegExp(P + "+", "g"),
            W = new RegExp(
              "^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$",
              "g"
            ),
            _ = new RegExp("^" + P + "*," + P + "*"),
            z = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
            U = new RegExp(P + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + M + "$"),
            J = {
              ID: new RegExp("^#(" + M + ")"),
              CLASS: new RegExp("^\\.(" + M + ")"),
              TAG: new RegExp("^(" + M + "|[*])"),
              ATTR: new RegExp("^" + I),
              PSEUDO: new RegExp("^" + F),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  P +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  P +
                  "*(?:([+-]|)" +
                  P +
                  "*(\\d+)|))" +
                  P +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + B + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  P +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  P +
                  "*((?:-\\d)?\\d*)" +
                  P +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            G = /HTML$/i,
            Y = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            ne = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return (
                t ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function (e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            ie = function () {
              d();
            },
            ae = xe(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            O.apply((N = H.call(w.childNodes)), w.childNodes),
              N[w.childNodes.length].nodeType;
          } catch (e) {
            O = {
              apply: N.length
                ? function (e, t) {
                    q.apply(e, H.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          function se(e, t, r, o) {
            var i,
              s,
              l,
              c,
              f,
              h,
              v,
              y = t && t.ownerDocument,
              w = t ? t.nodeType : 9;
            if (
              ((r = r || []),
              "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
            )
              return r;
            if (!o && (d(t), (t = t || p), g)) {
              if (11 !== w && (f = Z.exec(e)))
                if ((i = f[1])) {
                  if (9 === w) {
                    if (!(l = t.getElementById(i))) return r;
                    if (l.id === i) return r.push(l), r;
                  } else if (
                    y &&
                    (l = y.getElementById(i)) &&
                    b(t, l) &&
                    l.id === i
                  )
                    return r.push(l), r;
                } else {
                  if (f[2]) return O.apply(r, t.getElementsByTagName(e)), r;
                  if (
                    (i = f[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return O.apply(r, t.getElementsByClassName(i)), r;
                }
              if (
                n.qsa &&
                !A[e + " "] &&
                (!m || !m.test(e)) &&
                (1 !== w || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((v = e), (y = t), 1 === w && (U.test(e) || z.test(e)))) {
                  for (
                    ((y = (ee.test(e) && ve(t.parentNode)) || t) === t &&
                      n.scope) ||
                      ((c = t.getAttribute("id"))
                        ? (c = c.replace(re, oe))
                        : t.setAttribute("id", (c = x))),
                      s = (h = a(e)).length;
                    s--;

                  )
                    h[s] = (c ? "#" + c : ":scope") + " " + be(h[s]);
                  v = h.join(",");
                }
                try {
                  return O.apply(r, y.querySelectorAll(v)), r;
                } catch (t) {
                  A(e, !0);
                } finally {
                  c === x && t.removeAttribute("id");
                }
              }
            }
            return u(e.replace(W, "$1"), t, r, o);
          }
          function ue() {
            var e = [];
            return function t(n, o) {
              return (
                e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                (t[n + " "] = o)
              );
            };
          }
          function le(e) {
            return (e[x] = !0), e;
          }
          function ce(e) {
            var t = p.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function fe(e, t) {
            for (var n = e.split("|"), o = n.length; o--; )
              r.attrHandle[n[o]] = t;
          }
          function de(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function pe(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function he(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function ge(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function me(e) {
            return le(function (t) {
              return (
                (t = +t),
                le(function (n, r) {
                  for (var o, i = e([], n.length, t), a = i.length; a--; )
                    n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                })
              );
            });
          }
          function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = se.support = {}),
          (i = se.isXML = function (e) {
            var t = e.namespaceURI,
              n = (e.ownerDocument || e).documentElement;
            return !G.test(t || (n && n.nodeName) || "HTML");
          }),
          (d = se.setDocument = function (e) {
            var t,
              o,
              a = e ? e.ownerDocument || e : w;
            return a != p && 9 === a.nodeType && a.documentElement
              ? ((h = (p = a).documentElement),
                (g = !i(p)),
                w != p &&
                  (o = p.defaultView) &&
                  o.top !== o &&
                  (o.addEventListener
                    ? o.addEventListener("unload", ie, !1)
                    : o.attachEvent && o.attachEvent("onunload", ie)),
                (n.scope = ce(function (e) {
                  return (
                    h.appendChild(e).appendChild(p.createElement("div")),
                    void 0 !== e.querySelectorAll &&
                      !e.querySelectorAll(":scope fieldset div").length
                  );
                })),
                (n.attributes = ce(function (e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (n.getElementsByTagName = ce(function (e) {
                  return (
                    e.appendChild(p.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (n.getElementsByClassName = K.test(p.getElementsByClassName)),
                (n.getById = ce(function (e) {
                  return (
                    (h.appendChild(e).id = x),
                    !p.getElementsByName || !p.getElementsByName(x).length
                  );
                })),
                n.getById
                  ? ((r.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                    (r.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((r.filter.ID = function (e) {
                      var t = e.replace(te, ne);
                      return function (e) {
                        var n =
                          void 0 !== e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    }),
                    (r.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && g) {
                        var n,
                          r,
                          o,
                          i = t.getElementById(e);
                        if (i) {
                          if ((n = i.getAttributeNode("id")) && n.value === e)
                            return [i];
                          for (
                            o = t.getElementsByName(e), r = 0;
                            (i = o[r++]);

                          )
                            if ((n = i.getAttributeNode("id")) && n.value === e)
                              return [i];
                        }
                        return [];
                      }
                    })),
                (r.find.TAG = n.getElementsByTagName
                  ? function (e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : n.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function (e, t) {
                      var n,
                        r = [],
                        o = 0,
                        i = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                        return r;
                      }
                      return i;
                    }),
                (r.find.CLASS =
                  n.getElementsByClassName &&
                  function (e, t) {
                    if (void 0 !== t.getElementsByClassName && g)
                      return t.getElementsByClassName(e);
                  }),
                (v = []),
                (m = []),
                (n.qsa = K.test(p.querySelectorAll)) &&
                  (ce(function (e) {
                    var t;
                    (h.appendChild(e).innerHTML =
                      "<a id='" +
                      x +
                      "'></a><select id='" +
                      x +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        m.push("[*^$]=" + P + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        m.push("\\[" + P + "*(?:value|" + B + ")"),
                      e.querySelectorAll("[id~=" + x + "-]").length ||
                        m.push("~="),
                      (t = p.createElement("input")).setAttribute("name", ""),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length ||
                        m.push(
                          "\\[" + P + "*name" + P + "*=" + P + "*(?:''|\"\")"
                        ),
                      e.querySelectorAll(":checked").length ||
                        m.push(":checked"),
                      e.querySelectorAll("a#" + x + "+*").length ||
                        m.push(".#.+[+~]"),
                      e.querySelectorAll("\\\f"),
                      m.push("[\\r\\n\\f]");
                  }),
                  ce(function (e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = p.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        m.push("name" + P + "*[*^$|!~]?="),
                      2 !== e.querySelectorAll(":enabled").length &&
                        m.push(":enabled", ":disabled"),
                      (h.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        m.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      m.push(",.*:");
                  })),
                (n.matchesSelector = K.test(
                  (y =
                    h.matches ||
                    h.webkitMatchesSelector ||
                    h.mozMatchesSelector ||
                    h.oMatchesSelector ||
                    h.msMatchesSelector)
                )) &&
                  ce(function (e) {
                    (n.disconnectedMatch = y.call(e, "*")),
                      y.call(e, "[s!='']:x"),
                      v.push("!=", F);
                  }),
                (m = m.length && new RegExp(m.join("|"))),
                (v = v.length && new RegExp(v.join("|"))),
                (t = K.test(h.compareDocumentPosition)),
                (b =
                  t || K.test(h.contains)
                    ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          r = t && t.parentNode;
                        return (
                          e === r ||
                          !(
                            !r ||
                            1 !== r.nodeType ||
                            !(n.contains
                              ? n.contains(r)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(r))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (D = t
                  ? function (e, t) {
                      if (e === t) return (f = !0), 0;
                      var r =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        r ||
                        (1 &
                          (r =
                            (e.ownerDocument || e) == (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!n.sortDetached && t.compareDocumentPosition(e) === r)
                          ? e == p || (e.ownerDocument == w && b(w, e))
                            ? -1
                            : t == p || (t.ownerDocument == w && b(w, t))
                            ? 1
                            : c
                            ? R(c, e) - R(c, t)
                            : 0
                          : 4 & r
                          ? -1
                          : 1)
                      );
                    }
                  : function (e, t) {
                      if (e === t) return (f = !0), 0;
                      var n,
                        r = 0,
                        o = e.parentNode,
                        i = t.parentNode,
                        a = [e],
                        s = [t];
                      if (!o || !i)
                        return e == p
                          ? -1
                          : t == p
                          ? 1
                          : o
                          ? -1
                          : i
                          ? 1
                          : c
                          ? R(c, e) - R(c, t)
                          : 0;
                      if (o === i) return de(e, t);
                      for (n = e; (n = n.parentNode); ) a.unshift(n);
                      for (n = t; (n = n.parentNode); ) s.unshift(n);
                      for (; a[r] === s[r]; ) r++;
                      return r
                        ? de(a[r], s[r])
                        : a[r] == w
                        ? -1
                        : s[r] == w
                        ? 1
                        : 0;
                    }),
                p)
              : p;
          }),
          (se.matches = function (e, t) {
            return se(e, null, null, t);
          }),
          (se.matchesSelector = function (e, t) {
            if (
              (d(e),
              n.matchesSelector &&
                g &&
                !A[t + " "] &&
                (!v || !v.test(t)) &&
                (!m || !m.test(t)))
            )
              try {
                var r = y.call(e, t);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (e) {
                A(t, !0);
              }
            return se(t, p, null, [e]).length > 0;
          }),
          (se.contains = function (e, t) {
            return (e.ownerDocument || e) != p && d(e), b(e, t);
          }),
          (se.attr = function (e, t) {
            (e.ownerDocument || e) != p && d(e);
            var o = r.attrHandle[t.toLowerCase()],
              i =
                o && j.call(r.attrHandle, t.toLowerCase())
                  ? o(e, t, !g)
                  : void 0;
            return void 0 !== i
              ? i
              : n.attributes || !g
              ? e.getAttribute(t)
              : (i = e.getAttributeNode(t)) && i.specified
              ? i.value
              : null;
          }),
          (se.escape = function (e) {
            return (e + "").replace(re, oe);
          }),
          (se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (se.uniqueSort = function (e) {
            var t,
              r = [],
              o = 0,
              i = 0;
            if (
              ((f = !n.detectDuplicates),
              (c = !n.sortStable && e.slice(0)),
              e.sort(D),
              f)
            ) {
              for (; (t = e[i++]); ) t === e[i] && (o = r.push(i));
              for (; o--; ) e.splice(r[o], 1);
            }
            return (c = null), e;
          }),
          (o = se.getText = function (e) {
            var t,
              n = "",
              r = 0,
              i = e.nodeType;
            if (i) {
              if (1 === i || 9 === i || 11 === i) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
              } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (; (t = e[r++]); ) n += o(t);
            return n;
          }),
          ((r = se.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: J,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(te, ne)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || se.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && se.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[6] && e[2];
                return J.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        X.test(n) &&
                        (t = a(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(te, ne).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = C[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) &&
                    C(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (e, t, n) {
                return function (r) {
                  var o = se.attr(r, e);
                  return null == o
                    ? "!=" === t
                    : !t ||
                        ((o += ""),
                        "=" === t
                          ? o === n
                          : "!=" === t
                          ? o !== n
                          : "^=" === t
                          ? n && 0 === o.indexOf(n)
                          : "*=" === t
                          ? n && o.indexOf(n) > -1
                          : "$=" === t
                          ? n && o.slice(-n.length) === n
                          : "~=" === t
                          ? (" " + o.replace($, " ") + " ").indexOf(n) > -1
                          : "|=" === t &&
                            (o === n || o.slice(0, n.length + 1) === n + "-"));
                };
              },
              CHILD: function (e, t, n, r, o) {
                var i = "nth" !== e.slice(0, 3),
                  a = "last" !== e.slice(-4),
                  s = "of-type" === t;
                return 1 === r && 0 === o
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, n, u) {
                      var l,
                        c,
                        f,
                        d,
                        p,
                        h,
                        g = i !== a ? "nextSibling" : "previousSibling",
                        m = t.parentNode,
                        v = s && t.nodeName.toLowerCase(),
                        y = !u && !s,
                        b = !1;
                      if (m) {
                        if (i) {
                          for (; g; ) {
                            for (d = t; (d = d[g]); )
                              if (
                                s
                                  ? d.nodeName.toLowerCase() === v
                                  : 1 === d.nodeType
                              )
                                return !1;
                            h = g = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [a ? m.firstChild : m.lastChild]), a && y)) {
                          for (
                            b =
                              (p =
                                (l =
                                  (c =
                                    (f = (d = m)[x] || (d[x] = {}))[
                                      d.uniqueID
                                    ] || (f[d.uniqueID] = {}))[e] || [])[0] ===
                                  T && l[1]) && l[2],
                              d = p && m.childNodes[p];
                            (d = (++p && d && d[g]) || (b = p = 0) || h.pop());

                          )
                            if (1 === d.nodeType && ++b && d === t) {
                              c[e] = [T, p, b];
                              break;
                            }
                        } else if (
                          (y &&
                            (b = p =
                              (l =
                                (c =
                                  (f = (d = t)[x] || (d[x] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] || [])[0] === T &&
                              l[1]),
                          !1 === b)
                        )
                          for (
                            ;
                            (d =
                              (++p && d && d[g]) || (b = p = 0) || h.pop()) &&
                            ((s
                              ? d.nodeName.toLowerCase() !== v
                              : 1 !== d.nodeType) ||
                              !++b ||
                              (y &&
                                ((c =
                                  (f = d[x] || (d[x] = {}))[d.uniqueID] ||
                                  (f[d.uniqueID] = {}))[e] = [T, b]),
                              d !== t));

                          );
                        return (b -= o) === r || (b % r == 0 && b / r >= 0);
                      }
                    };
              },
              PSEUDO: function (e, t) {
                var n,
                  o =
                    r.pseudos[e] ||
                    r.setFilters[e.toLowerCase()] ||
                    se.error("unsupported pseudo: " + e);
                return o[x]
                  ? o(t)
                  : o.length > 1
                  ? ((n = [e, e, "", t]),
                    r.setFilters.hasOwnProperty(e.toLowerCase())
                      ? le(function (e, n) {
                          for (var r, i = o(e, t), a = i.length; a--; )
                            e[(r = R(e, i[a]))] = !(n[r] = i[a]);
                        })
                      : function (e) {
                          return o(e, 0, n);
                        })
                  : o;
              },
            },
            pseudos: {
              not: le(function (e) {
                var t = [],
                  n = [],
                  r = s(e.replace(W, "$1"));
                return r[x]
                  ? le(function (e, t, n, o) {
                      for (var i, a = r(e, null, o, []), s = e.length; s--; )
                        (i = a[s]) && (e[s] = !(t[s] = i));
                    })
                  : function (e, o, i) {
                      return (
                        (t[0] = e), r(t, null, i, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: le(function (e) {
                return function (t) {
                  return se(e, t).length > 0;
                };
              }),
              contains: le(function (e) {
                return (
                  (e = e.replace(te, ne)),
                  function (t) {
                    return (t.textContent || o(t)).indexOf(e) > -1;
                  }
                );
              }),
              lang: le(function (e) {
                return (
                  V.test(e || "") || se.error("unsupported lang: " + e),
                  (e = e.replace(te, ne).toLowerCase()),
                  function (t) {
                    var n;
                    do {
                      if (
                        (n = g
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function (e) {
                return e === h;
              },
              focus: function (e) {
                return (
                  e === p.activeElement &&
                  (!p.hasFocus || p.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: ge(!1),
              disabled: ge(!0),
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !r.pseudos.empty(e);
              },
              header: function (e) {
                return Q.test(e.nodeName);
              },
              input: function (e) {
                return Y.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: me(function () {
                return [0];
              }),
              last: me(function (e, t) {
                return [t - 1];
              }),
              eq: me(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: me(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: me(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: me(function (e, t, n) {
                for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                  e.push(r);
                return e;
              }),
              gt: me(function (e, t, n) {
                for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                return e;
              }),
            },
          }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = pe(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
          function ye() {}
          function be(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function xe(e, t, n) {
            var r = t.dir,
              o = t.next,
              i = o || r,
              a = n && "parentNode" === i,
              s = k++;
            return t.first
              ? function (t, n, o) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || a) return e(t, n, o);
                  return !1;
                }
              : function (t, n, u) {
                  var l,
                    c,
                    f,
                    d = [T, s];
                  if (u) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a)
                        if (
                          ((c =
                            (f = t[x] || (t[x] = {}))[t.uniqueID] ||
                            (f[t.uniqueID] = {})),
                          o && o === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t;
                        else {
                          if ((l = c[i]) && l[0] === T && l[1] === s)
                            return (d[2] = l[2]);
                          if (((c[i] = d), (d[2] = e(t, n, u)))) return !0;
                        }
                  return !1;
                };
          }
          function we(e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function Te(e, t, n, r, o) {
            for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
              (i = e[s]) && ((n && !n(i, r, o)) || (a.push(i), l && t.push(s)));
            return a;
          }
          function ke(e, t, n, r, o, i) {
            return (
              r && !r[x] && (r = ke(r)),
              o && !o[x] && (o = ke(o, i)),
              le(function (i, a, s, u) {
                var l,
                  c,
                  f,
                  d = [],
                  p = [],
                  h = a.length,
                  g =
                    i ||
                    (function (e, t, n) {
                      for (var r = 0, o = t.length; r < o; r++) se(e, t[r], n);
                      return n;
                    })(t || "*", s.nodeType ? [s] : s, []),
                  m = !e || (!i && t) ? g : Te(g, d, e, s, u),
                  v = n ? (o || (i ? e : h || r) ? [] : a) : m;
                if ((n && n(m, v, s, u), r))
                  for (l = Te(v, p), r(l, [], s, u), c = l.length; c--; )
                    (f = l[c]) && (v[p[c]] = !(m[p[c]] = f));
                if (i) {
                  if (o || e) {
                    if (o) {
                      for (l = [], c = v.length; c--; )
                        (f = v[c]) && l.push((m[c] = f));
                      o(null, (v = []), l, u);
                    }
                    for (c = v.length; c--; )
                      (f = v[c]) &&
                        (l = o ? R(i, f) : d[c]) > -1 &&
                        (i[l] = !(a[l] = f));
                  }
                } else (v = Te(v === a ? v.splice(h, v.length) : v)), o ? o(null, a, v, u) : O.apply(a, v);
              })
            );
          }
          function Ce(e) {
            for (
              var t,
                n,
                o,
                i = e.length,
                a = r.relative[e[0].type],
                s = a || r.relative[" "],
                u = a ? 1 : 0,
                c = xe(
                  function (e) {
                    return e === t;
                  },
                  s,
                  !0
                ),
                f = xe(
                  function (e) {
                    return R(t, e) > -1;
                  },
                  s,
                  !0
                ),
                d = [
                  function (e, n, r) {
                    var o =
                      (!a && (r || n !== l)) ||
                      ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return (t = null), o;
                  },
                ];
              u < i;
              u++
            )
              if ((n = r.relative[e[u].type])) d = [xe(we(d), n)];
              else {
                if ((n = r.filter[e[u].type].apply(null, e[u].matches))[x]) {
                  for (o = ++u; o < i && !r.relative[e[o].type]; o++);
                  return ke(
                    u > 1 && we(d),
                    u > 1 &&
                      be(
                        e
                          .slice(0, u - 1)
                          .concat({ value: " " === e[u - 2].type ? "*" : "" })
                      ).replace(W, "$1"),
                    n,
                    u < o && Ce(e.slice(u, o)),
                    o < i && Ce((e = e.slice(o))),
                    o < i && be(e)
                  );
                }
                d.push(n);
              }
            return we(d);
          }
          return (
            (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (a = se.tokenize = function (e, t) {
              var n,
                o,
                i,
                a,
                s,
                u,
                l,
                c = E[e + " "];
              if (c) return t ? 0 : c.slice(0);
              for (s = e, u = [], l = r.preFilter; s; ) {
                for (a in ((n && !(o = _.exec(s))) ||
                  (o && (s = s.slice(o[0].length) || s), u.push((i = []))),
                (n = !1),
                (o = z.exec(s)) &&
                  ((n = o.shift()),
                  i.push({ value: n, type: o[0].replace(W, " ") }),
                  (s = s.slice(n.length))),
                r.filter))
                  !(o = J[a].exec(s)) ||
                    (l[a] && !(o = l[a](o))) ||
                    ((n = o.shift()),
                    i.push({ value: n, type: a, matches: o }),
                    (s = s.slice(n.length)));
                if (!n) break;
              }
              return t ? s.length : s ? se.error(e) : E(e, u).slice(0);
            }),
            (s = se.compile = function (e, t) {
              var n,
                o = [],
                i = [],
                s = S[e + " "];
              if (!s) {
                for (t || (t = a(e)), n = t.length; n--; )
                  (s = Ce(t[n]))[x] ? o.push(s) : i.push(s);
                (s = S(
                  e,
                  (function (e, t) {
                    var n = t.length > 0,
                      o = e.length > 0,
                      i = function (i, a, s, u, c) {
                        var f,
                          h,
                          m,
                          v = 0,
                          y = "0",
                          b = i && [],
                          x = [],
                          w = l,
                          k = i || (o && r.find.TAG("*", c)),
                          C = (T += null == w ? 1 : Math.random() || 0.1),
                          E = k.length;
                        for (
                          c && (l = a == p || a || c);
                          y !== E && null != (f = k[y]);
                          y++
                        ) {
                          if (o && f) {
                            for (
                              h = 0,
                                a || f.ownerDocument == p || (d(f), (s = !g));
                              (m = e[h++]);

                            )
                              if (m(f, a || p, s)) {
                                u.push(f);
                                break;
                              }
                            c && (T = C);
                          }
                          n && ((f = !m && f) && v--, i && b.push(f));
                        }
                        if (((v += y), n && y !== v)) {
                          for (h = 0; (m = t[h++]); ) m(b, x, a, s);
                          if (i) {
                            if (v > 0)
                              for (; y--; ) b[y] || x[y] || (x[y] = L.call(u));
                            x = Te(x);
                          }
                          O.apply(u, x),
                            c &&
                              !i &&
                              x.length > 0 &&
                              v + t.length > 1 &&
                              se.uniqueSort(u);
                        }
                        return c && ((T = C), (l = w)), b;
                      };
                    return n ? le(i) : i;
                  })(i, o)
                )).selector = e;
              }
              return s;
            }),
            (u = se.select = function (e, t, n, o) {
              var i,
                u,
                l,
                c,
                f,
                d = "function" == typeof e && e,
                p = !o && a((e = d.selector || e));
              if (((n = n || []), 1 === p.length)) {
                if (
                  (u = p[0] = p[0].slice(0)).length > 2 &&
                  "ID" === (l = u[0]).type &&
                  9 === t.nodeType &&
                  g &&
                  r.relative[u[1].type]
                ) {
                  if (
                    !(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])
                  )
                    return n;
                  d && (t = t.parentNode),
                    (e = e.slice(u.shift().value.length));
                }
                for (
                  i = J.needsContext.test(e) ? 0 : u.length;
                  i-- && ((l = u[i]), !r.relative[(c = l.type)]);

                )
                  if (
                    (f = r.find[c]) &&
                    (o = f(
                      l.matches[0].replace(te, ne),
                      (ee.test(u[0].type) && ve(t.parentNode)) || t
                    ))
                  ) {
                    if ((u.splice(i, 1), !(e = o.length && be(u))))
                      return O.apply(n, o), n;
                    break;
                  }
              }
              return (
                (d || s(e, p))(
                  o,
                  t,
                  !g,
                  n,
                  !t || (ee.test(e) && ve(t.parentNode)) || t
                ),
                n
              );
            }),
            (n.sortStable = x.split("").sort(D).join("") === x),
            (n.detectDuplicates = !!f),
            d(),
            (n.sortDetached = ce(function (e) {
              return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
            })),
            ce(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              fe("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ce(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              fe("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            ce(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              fe(B, function (e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            se
          );
        })(n);
      (k.find = E),
        (k.expr = E.selectors),
        (k.expr[":"] = k.expr.pseudos),
        (k.uniqueSort = k.unique = E.uniqueSort),
        (k.text = E.getText),
        (k.isXMLDoc = E.isXML),
        (k.contains = E.contains),
        (k.escapeSelector = E.escape);
      var S = function (e, t, n) {
          for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (o && k(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        A = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        D = k.expr.match.needsContext;
      function j(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function L(e, t, n) {
        return v(t)
          ? k.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? k.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? k.grep(e, function (e) {
              return c.call(t, e) > -1 !== n;
            })
          : k.filter(t, e, n);
      }
      (k.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? k.find.matchesSelector(r, e)
              ? [r]
              : []
            : k.find.matches(
                e,
                k.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        k.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              o = this;
            if ("string" != typeof e)
              return this.pushStack(
                k(e).filter(function () {
                  for (t = 0; t < r; t++) if (k.contains(o[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, o[t], n);
            return r > 1 ? k.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(L(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(L(this, e || [], !0));
          },
          is: function (e) {
            return !!L(
              this,
              "string" == typeof e && D.test(e) ? k(e) : e || [],
              !1
            ).length;
          },
        });
      var q,
        O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((k.fn.init = function (e, t, n) {
        var r, o;
        if (!e) return this;
        if (((n = n || q), "string" == typeof e)) {
          if (
            !(r =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : O.exec(e)) ||
            (!r[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof k ? t[0] : t),
              k.merge(
                this,
                k.parseHTML(
                  r[1],
                  t && t.nodeType ? t.ownerDocument || t : b,
                  !0
                )
              ),
              N.test(r[1]) && k.isPlainObject(t))
            )
              for (r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return (
            (o = b.getElementById(r[2])) && ((this[0] = o), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : v(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(k)
          : k.makeArray(e, this);
      }).prototype = k.fn),
        (q = k(b));
      var H = /^(?:parents|prev(?:Until|All))/,
        R = { children: !0, contents: !0, next: !0, prev: !0 };
      function B(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      k.fn.extend({
        has: function (e) {
          var t = k(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            o = this.length,
            i = [],
            a = "string" != typeof e && k(e);
          if (!D.test(e))
            for (; r < o; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (a
                    ? a.index(n) > -1
                    : 1 === n.nodeType && k.find.matchesSelector(n, e))
                ) {
                  i.push(n);
                  break;
                }
          return this.pushStack(i.length > 1 ? k.uniqueSort(i) : i);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? c.call(k(e), this[0])
              : c.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        k.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return S(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return S(e, "parentNode", n);
            },
            next: function (e) {
              return B(e, "nextSibling");
            },
            prev: function (e) {
              return B(e, "previousSibling");
            },
            nextAll: function (e) {
              return S(e, "nextSibling");
            },
            prevAll: function (e) {
              return S(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return S(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return S(e, "previousSibling", n);
            },
            siblings: function (e) {
              return A((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return A(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && a(e.contentDocument)
                ? e.contentDocument
                : (j(e, "template") && (e = e.content || e),
                  k.merge([], e.childNodes));
            },
          },
          function (e, t) {
            k.fn[e] = function (n, r) {
              var o = k.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (o = k.filter(r, o)),
                this.length > 1 &&
                  (R[e] || k.uniqueSort(o), H.test(e) && o.reverse()),
                this.pushStack(o)
              );
            };
          }
        );
      var P = /[^\x20\t\r\n\f]+/g;
      function M(e) {
        return e;
      }
      function I(e) {
        throw e;
      }
      function F(e, t, n, r) {
        var o;
        try {
          e && v((o = e.promise))
            ? o.call(e).done(t).fail(n)
            : e && v((o = e.then))
            ? o.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (k.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function (e) {
                var t = {};
                return (
                  k.each(e.match(P) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : k.extend({}, e);
        var t,
          n,
          r,
          o,
          i = [],
          a = [],
          s = -1,
          u = function () {
            for (o = o || e.once, r = t = !0; a.length; s = -1)
              for (n = a.shift(); ++s < i.length; )
                !1 === i[s].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((s = i.length), (n = !1));
            e.memory || (n = !1), (t = !1), o && (i = n ? [] : "");
          },
          l = {
            add: function () {
              return (
                i &&
                  (n && !t && ((s = i.length - 1), a.push(n)),
                  (function t(n) {
                    k.each(n, function (n, r) {
                      v(r)
                        ? (e.unique && l.has(r)) || i.push(r)
                        : r && r.length && "string" !== T(r) && t(r);
                    });
                  })(arguments),
                  n && !t && u()),
                this
              );
            },
            remove: function () {
              return (
                k.each(arguments, function (e, t) {
                  for (var n; (n = k.inArray(t, i, n)) > -1; )
                    i.splice(n, 1), n <= s && s--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? k.inArray(e, i) > -1 : i.length > 0;
            },
            empty: function () {
              return i && (i = []), this;
            },
            disable: function () {
              return (o = a = []), (i = n = ""), this;
            },
            disabled: function () {
              return !i;
            },
            lock: function () {
              return (o = a = []), n || t || (i = n = ""), this;
            },
            locked: function () {
              return !!o;
            },
            fireWith: function (e, n) {
              return (
                o ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  a.push(n),
                  t || u()),
                this
              );
            },
            fire: function () {
              return l.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return l;
      }),
        k.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  k.Callbacks("memory"),
                  k.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  k.Callbacks("once memory"),
                  k.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  k.Callbacks("once memory"),
                  k.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              r = "pending",
              o = {
                state: function () {
                  return r;
                },
                always: function () {
                  return i.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return o.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return k
                    .Deferred(function (n) {
                      k.each(t, function (t, r) {
                        var o = v(e[r[4]]) && e[r[4]];
                        i[r[1]](function () {
                          var e = o && o.apply(this, arguments);
                          e && v(e.promise)
                            ? e
                                .promise()
                                .progress(n.notify)
                                .done(n.resolve)
                                .fail(n.reject)
                            : n[r[0] + "With"](this, o ? [e] : arguments);
                        });
                      }),
                        (e = null);
                    })
                    .promise();
                },
                then: function (e, r, o) {
                  var i = 0;
                  function a(e, t, r, o) {
                    return function () {
                      var s = this,
                        u = arguments,
                        l = function () {
                          var n, l;
                          if (!(e < i)) {
                            if ((n = r.apply(s, u)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (l =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              v(l)
                                ? o
                                  ? l.call(n, a(i, t, M, o), a(i, t, I, o))
                                  : (i++,
                                    l.call(
                                      n,
                                      a(i, t, M, o),
                                      a(i, t, I, o),
                                      a(i, t, M, t.notifyWith)
                                    ))
                                : (r !== M && ((s = void 0), (u = [n])),
                                  (o || t.resolveWith)(s, u));
                          }
                        },
                        c = o
                          ? l
                          : function () {
                              try {
                                l();
                              } catch (n) {
                                k.Deferred.exceptionHook &&
                                  k.Deferred.exceptionHook(n, c.stackTrace),
                                  e + 1 >= i &&
                                    (r !== I && ((s = void 0), (u = [n])),
                                    t.rejectWith(s, u));
                              }
                            };
                      e
                        ? c()
                        : (k.Deferred.getStackHook &&
                            (c.stackTrace = k.Deferred.getStackHook()),
                          n.setTimeout(c));
                    };
                  }
                  return k
                    .Deferred(function (n) {
                      t[0][3].add(a(0, n, v(o) ? o : M, n.notifyWith)),
                        t[1][3].add(a(0, n, v(e) ? e : M)),
                        t[2][3].add(a(0, n, v(r) ? r : I));
                    })
                    .promise();
                },
                promise: function (e) {
                  return null != e ? k.extend(e, o) : o;
                },
              },
              i = {};
            return (
              k.each(t, function (e, n) {
                var a = n[2],
                  s = n[5];
                (o[n[1]] = a.add),
                  s &&
                    a.add(
                      function () {
                        r = s;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  a.add(n[3].fire),
                  (i[n[0]] = function () {
                    return (
                      i[n[0] + "With"](this === i ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (i[n[0] + "With"] = a.fireWith);
              }),
              o.promise(i),
              e && e.call(i, i),
              i
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              o = s.call(arguments),
              i = k.Deferred(),
              a = function (e) {
                return function (n) {
                  (r[e] = this),
                    (o[e] = arguments.length > 1 ? s.call(arguments) : n),
                    --t || i.resolveWith(r, o);
                };
              };
            if (
              t <= 1 &&
              (F(e, i.done(a(n)).resolve, i.reject, !t),
              "pending" === i.state() || v(o[n] && o[n].then))
            )
              return i.then();
            for (; n--; ) F(o[n], a(n), i.reject);
            return i.promise();
          },
        });
      var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (k.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          $.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (k.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var W = k.Deferred();
      function _() {
        b.removeEventListener("DOMContentLoaded", _),
          n.removeEventListener("load", _),
          k.ready();
      }
      (k.fn.ready = function (e) {
        return (
          W.then(e).catch(function (e) {
            k.readyException(e);
          }),
          this
        );
      }),
        k.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --k.readyWait : k.isReady) ||
              ((k.isReady = !0),
              (!0 !== e && --k.readyWait > 0) || W.resolveWith(b, [k]));
          },
        }),
        (k.ready.then = W.then),
        "complete" === b.readyState ||
        ("loading" !== b.readyState && !b.documentElement.doScroll)
          ? n.setTimeout(k.ready)
          : (b.addEventListener("DOMContentLoaded", _),
            n.addEventListener("load", _));
      var z = function (e, t, n, r, o, i, a) {
          var s = 0,
            u = e.length,
            l = null == n;
          if ("object" === T(n))
            for (s in ((o = !0), n)) z(e, t, s, n[s], !0, i, a);
          else if (
            void 0 !== r &&
            ((o = !0),
            v(r) || (a = !0),
            l &&
              (a
                ? (t.call(e, r), (t = null))
                : ((l = t),
                  (t = function (e, t, n) {
                    return l.call(k(e), n);
                  }))),
            t)
          )
            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
          return o ? e : l ? t.call(e) : u ? t(e[0], n) : i;
        },
        U = /^-ms-/,
        X = /-([a-z])/g;
      function V(e, t) {
        return t.toUpperCase();
      }
      function J(e) {
        return e.replace(U, "ms-").replace(X, V);
      }
      var G = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function Y() {
        this.expando = k.expando + Y.uid++;
      }
      (Y.uid = 1),
        (Y.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                G(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var r,
              o = this.cache(e);
            if ("string" == typeof t) o[J(t)] = n;
            else for (r in t) o[J(r)] = t[r];
            return o;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][J(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(J)
                  : (t = J(t)) in r
                  ? [t]
                  : t.match(P) || []).length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 === t || k.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t);
          },
        });
      var Q = new Y(),
        K = new Y(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
      function te(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = "data-" + t.replace(ee, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(r)))
          ) {
            try {
              n = (function (e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + ""
                      ? +e
                      : Z.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            K.set(e, t, n);
          } else n = void 0;
        return n;
      }
      k.extend({
        hasData: function (e) {
          return K.hasData(e) || Q.hasData(e);
        },
        data: function (e, t, n) {
          return K.access(e, t, n);
        },
        removeData: function (e, t) {
          K.remove(e, t);
        },
        _data: function (e, t, n) {
          return Q.access(e, t, n);
        },
        _removeData: function (e, t) {
          Q.remove(e, t);
        },
      }),
        k.fn.extend({
          data: function (e, t) {
            var n,
              r,
              o,
              i = this[0],
              a = i && i.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((o = K.get(i)), 1 === i.nodeType && !Q.get(i, "hasDataAttrs"))
              ) {
                for (n = a.length; n--; )
                  a[n] &&
                    0 === (r = a[n].name).indexOf("data-") &&
                    ((r = J(r.slice(5))), te(i, r, o[r]));
                Q.set(i, "hasDataAttrs", !0);
              }
              return o;
            }
            return "object" == typeof e
              ? this.each(function () {
                  K.set(this, e);
                })
              : z(
                  this,
                  function (t) {
                    var n;
                    if (i && void 0 === t)
                      return void 0 !== (n = K.get(i, e))
                        ? n
                        : void 0 !== (n = te(i, e))
                        ? n
                        : void 0;
                    this.each(function () {
                      K.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              K.remove(this, e);
            });
          },
        }),
        k.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = Q.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = Q.access(e, t, k.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = k.queue(e, t),
              r = n.length,
              o = n.shift(),
              i = k._queueHooks(e, t);
            "inprogress" === o && ((o = n.shift()), r--),
              o &&
                ("fx" === t && n.unshift("inprogress"),
                delete i.stop,
                o.call(
                  e,
                  function () {
                    k.dequeue(e, t);
                  },
                  i
                )),
              !r && i && i.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              Q.get(e, n) ||
              Q.access(e, n, {
                empty: k.Callbacks("once memory").add(function () {
                  Q.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        k.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? k.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = k.queue(this, e, t);
                    k._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && k.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              k.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              o = k.Deferred(),
              i = this,
              a = this.length,
              s = function () {
                --r || o.resolveWith(i, [i]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              a--;

            )
              (n = Q.get(i[a], e + "queueHooks")) &&
                n.empty &&
                (r++, n.empty.add(s));
            return s(), o.promise(t);
          },
        });
      var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ie = b.documentElement,
        ae = function (e) {
          return k.contains(e.ownerDocument, e);
        },
        se = { composed: !0 };
      ie.getRootNode &&
        (ae = function (e) {
          return (
            k.contains(e.ownerDocument, e) ||
            e.getRootNode(se) === e.ownerDocument
          );
        });
      var ue = function (e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && ae(e) && "none" === k.css(e, "display"))
        );
      };
      function le(e, t, n, r) {
        var o,
          i,
          a = 20,
          s = r
            ? function () {
                return r.cur();
              }
            : function () {
                return k.css(e, t, "");
              },
          u = s(),
          l = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
          c =
            e.nodeType &&
            (k.cssNumber[t] || ("px" !== l && +u)) &&
            re.exec(k.css(e, t));
        if (c && c[3] !== l) {
          for (u /= 2, l = l || c[3], c = +u || 1; a--; )
            k.style(e, t, c + l),
              (1 - i) * (1 - (i = s() / u || 0.5)) <= 0 && (a = 0),
              (c /= i);
          (c *= 2), k.style(e, t, c + l), (n = n || []);
        }
        return (
          n &&
            ((c = +c || +u || 0),
            (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = l), (r.start = c), (r.end = o))),
          o
        );
      }
      var ce = {};
      function fe(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          o = ce[r];
        return (
          o ||
          ((t = n.body.appendChild(n.createElement(r))),
          (o = k.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === o && (o = "block"),
          (ce[r] = o),
          o)
        );
      }
      function de(e, t) {
        for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
          (r = e[i]).style &&
            ((n = r.style.display),
            t
              ? ("none" === n &&
                  ((o[i] = Q.get(r, "display") || null),
                  o[i] || (r.style.display = "")),
                "" === r.style.display && ue(r) && (o[i] = fe(r)))
              : "none" !== n && ((o[i] = "none"), Q.set(r, "display", n)));
        for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
        return e;
      }
      k.fn.extend({
        show: function () {
          return de(this, !0);
        },
        hide: function () {
          return de(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                ue(this) ? k(this).show() : k(this).hide();
              });
        },
      });
      var pe,
        he,
        ge = /^(?:checkbox|radio)$/i,
        me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ve = /^$|^module$|\/(?:java|ecma)script/i;
      (pe = b.createDocumentFragment().appendChild(b.createElement("div"))),
        (he = b.createElement("input")).setAttribute("type", "radio"),
        he.setAttribute("checked", "checked"),
        he.setAttribute("name", "t"),
        pe.appendChild(he),
        (m.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (pe.innerHTML = "<textarea>x</textarea>"),
        (m.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
        (pe.innerHTML = "<option></option>"),
        (m.option = !!pe.lastChild);
      var ye = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function be(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && j(e, t)) ? k.merge([e], n) : n
        );
      }
      function xe(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
      }
      (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
        (ye.th = ye.td),
        m.option ||
          (ye.optgroup = ye.option = [
            1,
            "<select multiple='multiple'>",
            "</select>",
          ]);
      var we = /<|&#?\w+;/;
      function Te(e, t, n, r, o) {
        for (
          var i,
            a,
            s,
            u,
            l,
            c,
            f = t.createDocumentFragment(),
            d = [],
            p = 0,
            h = e.length;
          p < h;
          p++
        )
          if ((i = e[p]) || 0 === i)
            if ("object" === T(i)) k.merge(d, i.nodeType ? [i] : i);
            else if (we.test(i)) {
              for (
                a = a || f.appendChild(t.createElement("div")),
                  s = (me.exec(i) || ["", ""])[1].toLowerCase(),
                  u = ye[s] || ye._default,
                  a.innerHTML = u[1] + k.htmlPrefilter(i) + u[2],
                  c = u[0];
                c--;

              )
                a = a.lastChild;
              k.merge(d, a.childNodes), ((a = f.firstChild).textContent = "");
            } else d.push(t.createTextNode(i));
        for (f.textContent = "", p = 0; (i = d[p++]); )
          if (r && k.inArray(i, r) > -1) o && o.push(i);
          else if (
            ((l = ae(i)), (a = be(f.appendChild(i), "script")), l && xe(a), n)
          )
            for (c = 0; (i = a[c++]); ) ve.test(i.type || "") && n.push(i);
        return f;
      }
      var ke = /^key/,
        Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;
      function Se() {
        return !0;
      }
      function Ae() {
        return !1;
      }
      function De(e, t) {
        return (
          (e ===
            (function () {
              try {
                return b.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }
      function je(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
          for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
            je(e, s, n, r, t[s], i);
          return e;
        }
        if (
          (null == r && null == o
            ? ((o = n), (r = n = void 0))
            : null == o &&
              ("string" == typeof n
                ? ((o = r), (r = void 0))
                : ((o = r), (r = n), (n = void 0))),
          !1 === o)
        )
          o = Ae;
        else if (!o) return e;
        return (
          1 === i &&
            ((a = o),
            ((o = function (e) {
              return k().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = k.guid++))),
          e.each(function () {
            k.event.add(this, t, o, r, n);
          })
        );
      }
      function Ne(e, t, n) {
        n
          ? (Q.set(e, t, !1),
            k.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var r,
                  o,
                  i = Q.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (i.length)
                    (k.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((i = s.call(arguments)),
                    Q.set(this, t, i),
                    (r = n(this, t)),
                    this[t](),
                    i !== (o = Q.get(this, t)) || r
                      ? Q.set(this, t, !1)
                      : (o = {}),
                    i !== o)
                  )
                    return (
                      e.stopImmediatePropagation(), e.preventDefault(), o.value
                    );
                } else
                  i.length &&
                    (Q.set(this, t, {
                      value: k.event.trigger(
                        k.extend(i[0], k.Event.prototype),
                        i.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === Q.get(e, t) && k.event.add(e, t, Se);
      }
      (k.event = {
        global: {},
        add: function (e, t, n, r, o) {
          var i,
            a,
            s,
            u,
            l,
            c,
            f,
            d,
            p,
            h,
            g,
            m = Q.get(e);
          if (G(e))
            for (
              n.handler && ((n = (i = n).handler), (o = i.selector)),
                o && k.find.matchesSelector(ie, o),
                n.guid || (n.guid = k.guid++),
                (u = m.events) || (u = m.events = Object.create(null)),
                (a = m.handle) ||
                  (a = m.handle = function (t) {
                    return void 0 !== k && k.event.triggered !== t.type
                      ? k.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
                l = (t = (t || "").match(P) || [""]).length;
              l--;

            )
              (p = g = (s = Ee.exec(t[l]) || [])[1]),
                (h = (s[2] || "").split(".").sort()),
                p &&
                  ((f = k.event.special[p] || {}),
                  (p = (o ? f.delegateType : f.bindType) || p),
                  (f = k.event.special[p] || {}),
                  (c = k.extend(
                    {
                      type: p,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: o,
                      needsContext: o && k.expr.match.needsContext.test(o),
                      namespace: h.join("."),
                    },
                    i
                  )),
                  (d = u[p]) ||
                    (((d = u[p] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                      (e.addEventListener && e.addEventListener(p, a))),
                  f.add &&
                    (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                  o ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                  (k.event.global[p] = !0));
        },
        remove: function (e, t, n, r, o) {
          var i,
            a,
            s,
            u,
            l,
            c,
            f,
            d,
            p,
            h,
            g,
            m = Q.hasData(e) && Q.get(e);
          if (m && (u = m.events)) {
            for (l = (t = (t || "").match(P) || [""]).length; l--; )
              if (
                ((p = g = (s = Ee.exec(t[l]) || [])[1]),
                (h = (s[2] || "").split(".").sort()),
                p)
              ) {
                for (
                  f = k.event.special[p] || {},
                    d = u[(p = (r ? f.delegateType : f.bindType) || p)] || [],
                    s =
                      s[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    a = i = d.length;
                  i--;

                )
                  (c = d[i]),
                    (!o && g !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (s && !s.test(c.namespace)) ||
                      (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                      (d.splice(i, 1),
                      c.selector && d.delegateCount--,
                      f.remove && f.remove.call(e, c));
                a &&
                  !d.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, h, m.handle)) ||
                    k.removeEvent(e, p, m.handle),
                  delete u[p]);
              } else for (p in u) k.event.remove(e, p + t[l], n, r, !0);
            k.isEmptyObject(u) && Q.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            o,
            i,
            a,
            s = new Array(arguments.length),
            u = k.event.fix(e),
            l = (Q.get(this, "events") || Object.create(null))[u.type] || [],
            c = k.event.special[u.type] || {};
          for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
          if (
            ((u.delegateTarget = this),
            !c.preDispatch || !1 !== c.preDispatch.call(this, u))
          ) {
            for (
              a = k.event.handlers.call(this, u, l), t = 0;
              (o = a[t++]) && !u.isPropagationStopped();

            )
              for (
                u.currentTarget = o.elem, n = 0;
                (i = o.handlers[n++]) && !u.isImmediatePropagationStopped();

              )
                (u.rnamespace &&
                  !1 !== i.namespace &&
                  !u.rnamespace.test(i.namespace)) ||
                  ((u.handleObj = i),
                  (u.data = i.data),
                  void 0 !==
                    (r = (
                      (k.event.special[i.origType] || {}).handle || i.handler
                    ).apply(o.elem, s)) &&
                    !1 === (u.result = r) &&
                    (u.preventDefault(), u.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, u), u.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            o,
            i,
            a,
            s = [],
            u = t.delegateCount,
            l = e.target;
          if (u && l.nodeType && !("click" === e.type && e.button >= 1))
            for (; l !== this; l = l.parentNode || this)
              if (
                1 === l.nodeType &&
                ("click" !== e.type || !0 !== l.disabled)
              ) {
                for (i = [], a = {}, n = 0; n < u; n++)
                  void 0 === a[(o = (r = t[n]).selector + " ")] &&
                    (a[o] = r.needsContext
                      ? k(o, this).index(l) > -1
                      : k.find(o, this, null, [l]).length),
                    a[o] && i.push(r);
                i.length && s.push({ elem: l, handlers: i });
              }
          return (
            (l = this),
            u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
            s
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(k.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: v(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[k.expando] ? e : new k.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                ge.test(t.type) &&
                  t.click &&
                  j(t, "input") &&
                  Ne(t, "click", Se),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                ge.test(t.type) && t.click && j(t, "input") && Ne(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (ge.test(t.type) &&
                  t.click &&
                  j(t, "input") &&
                  Q.get(t, "click")) ||
                j(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (k.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (k.Event = function (e, t) {
          if (!(this instanceof k.Event)) return new k.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? Se
                  : Ae),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && k.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[k.expando] = !0);
        }),
        (k.Event.prototype = {
          constructor: k.Event,
          isDefaultPrevented: Ae,
          isPropagationStopped: Ae,
          isImmediatePropagationStopped: Ae,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = Se),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = Se),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = Se),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        k.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && ke.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && Ce.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            },
          },
          k.event.addProp
        ),
        k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          k.event.special[e] = {
            setup: function () {
              return Ne(this, e, De), !1;
            },
            trigger: function () {
              return Ne(this, e), !0;
            },
            delegateType: t,
          };
        }),
        k.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            k.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = this,
                  o = e.relatedTarget,
                  i = e.handleObj;
                return (
                  (o && (o === r || k.contains(r, o))) ||
                    ((e.type = i.origType),
                    (n = i.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        k.fn.extend({
          on: function (e, t, n, r) {
            return je(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return je(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                k(e.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (o in e) this.off(o, t, e[o]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = Ae),
              this.each(function () {
                k.event.remove(this, e, n, t);
              })
            );
          },
        });
      var Le = /<script|<style|<link/i,
        qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function He(e, t) {
        return (
          (j(e, "table") &&
            j(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            k(e).children("tbody")[0]) ||
          e
        );
      }
      function Re(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function Be(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Pe(e, t) {
        var n, r, o, i, a, s;
        if (1 === t.nodeType) {
          if (Q.hasData(e) && (s = Q.get(e).events))
            for (o in (Q.remove(t, "handle events"), s))
              for (n = 0, r = s[o].length; n < r; n++)
                k.event.add(t, o, s[o][n]);
          K.hasData(e) &&
            ((i = K.access(e)), (a = k.extend({}, i)), K.set(t, a));
        }
      }
      function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ge.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function Ie(e, t, n, r) {
        t = u(t);
        var o,
          i,
          a,
          s,
          l,
          c,
          f = 0,
          d = e.length,
          p = d - 1,
          h = t[0],
          g = v(h);
        if (g || (d > 1 && "string" == typeof h && !m.checkClone && qe.test(h)))
          return e.each(function (o) {
            var i = e.eq(o);
            g && (t[0] = h.call(this, o, i.html())), Ie(i, t, n, r);
          });
        if (
          d &&
          ((i = (o = Te(t, e[0].ownerDocument, !1, e, r)).firstChild),
          1 === o.childNodes.length && (o = i),
          i || r)
        ) {
          for (s = (a = k.map(be(o, "script"), Re)).length; f < d; f++)
            (l = o),
              f !== p &&
                ((l = k.clone(l, !0, !0)), s && k.merge(a, be(l, "script"))),
              n.call(e[f], l, f);
          if (s)
            for (
              c = a[a.length - 1].ownerDocument, k.map(a, Be), f = 0;
              f < s;
              f++
            )
              (l = a[f]),
                ve.test(l.type || "") &&
                  !Q.access(l, "globalEval") &&
                  k.contains(c, l) &&
                  (l.src && "module" !== (l.type || "").toLowerCase()
                    ? k._evalUrl &&
                      !l.noModule &&
                      k._evalUrl(
                        l.src,
                        { nonce: l.nonce || l.getAttribute("nonce") },
                        c
                      )
                    : w(l.textContent.replace(Oe, ""), l, c));
        }
        return e;
      }
      function Fe(e, t, n) {
        for (var r, o = t ? k.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
          n || 1 !== r.nodeType || k.cleanData(be(r)),
            r.parentNode &&
              (n && ae(r) && xe(be(r, "script")), r.parentNode.removeChild(r));
        return e;
      }
      k.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var r,
            o,
            i,
            a,
            s = e.cloneNode(!0),
            u = ae(e);
          if (
            !(
              m.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              k.isXMLDoc(e)
            )
          )
            for (a = be(s), r = 0, o = (i = be(e)).length; r < o; r++)
              Me(i[r], a[r]);
          if (t)
            if (n)
              for (
                i = i || be(e), a = a || be(s), r = 0, o = i.length;
                r < o;
                r++
              )
                Pe(i[r], a[r]);
            else Pe(e, s);
          return (
            (a = be(s, "script")).length > 0 && xe(a, !u && be(e, "script")), s
          );
        },
        cleanData: function (e) {
          for (
            var t, n, r, o = k.event.special, i = 0;
            void 0 !== (n = e[i]);
            i++
          )
            if (G(n)) {
              if ((t = n[Q.expando])) {
                if (t.events)
                  for (r in t.events)
                    o[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                n[Q.expando] = void 0;
              }
              n[K.expando] && (n[K.expando] = void 0);
            }
        },
      }),
        k.fn.extend({
          detach: function (e) {
            return Fe(this, e, !0);
          },
          remove: function (e) {
            return Fe(this, e);
          },
          text: function (e) {
            return z(
              this,
              function (e) {
                return void 0 === e
                  ? k.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return Ie(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                He(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return Ie(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = He(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return Ie(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return Ie(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (k.cleanData(be(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return k.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return z(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !Le.test(e) &&
                  !ye[(me.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = k.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (k.cleanData(be(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return Ie(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                k.inArray(this, e) < 0 &&
                  (k.cleanData(be(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        k.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            k.fn[e] = function (e) {
              for (
                var n, r = [], o = k(e), i = o.length - 1, a = 0;
                a <= i;
                a++
              )
                (n = a === i ? this : this.clone(!0)),
                  k(o[a])[t](n),
                  l.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var $e = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
        We = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        _e = function (e, t, n) {
          var r,
            o,
            i = {};
          for (o in t) (i[o] = e.style[o]), (e.style[o] = t[o]);
          for (o in ((r = n.call(e)), t)) e.style[o] = i[o];
          return r;
        },
        ze = new RegExp(oe.join("|"), "i");
      function Ue(e, t, n) {
        var r,
          o,
          i,
          a,
          s = e.style;
        return (
          (n = n || We(e)) &&
            ("" !== (a = n.getPropertyValue(t) || n[t]) ||
              ae(e) ||
              (a = k.style(e, t)),
            !m.pixelBoxStyles() &&
              $e.test(a) &&
              ze.test(t) &&
              ((r = s.width),
              (o = s.minWidth),
              (i = s.maxWidth),
              (s.minWidth = s.maxWidth = s.width = a),
              (a = n.width),
              (s.width = r),
              (s.minWidth = o),
              (s.maxWidth = i))),
          void 0 !== a ? a + "" : a
        );
      }
      function Xe(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function e() {
          if (c) {
            (l.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (c.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              ie.appendChild(l).appendChild(c);
            var e = n.getComputedStyle(c);
            (r = "1%" !== e.top),
              (u = 12 === t(e.marginLeft)),
              (c.style.right = "60%"),
              (a = 36 === t(e.right)),
              (o = 36 === t(e.width)),
              (c.style.position = "absolute"),
              (i = 12 === t(c.offsetWidth / 3)),
              ie.removeChild(l),
              (c = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var r,
          o,
          i,
          a,
          s,
          u,
          l = b.createElement("div"),
          c = b.createElement("div");
        c.style &&
          ((c.style.backgroundClip = "content-box"),
          (c.cloneNode(!0).style.backgroundClip = ""),
          (m.clearCloneStyle = "content-box" === c.style.backgroundClip),
          k.extend(m, {
            boxSizingReliable: function () {
              return e(), o;
            },
            pixelBoxStyles: function () {
              return e(), a;
            },
            pixelPosition: function () {
              return e(), r;
            },
            reliableMarginLeft: function () {
              return e(), u;
            },
            scrollboxSize: function () {
              return e(), i;
            },
            reliableTrDimensions: function () {
              var e, t, r, o;
              return (
                null == s &&
                  ((e = b.createElement("table")),
                  (t = b.createElement("tr")),
                  (r = b.createElement("div")),
                  (e.style.cssText = "position:absolute;left:-11111px"),
                  (t.style.height = "1px"),
                  (r.style.height = "9px"),
                  ie.appendChild(e).appendChild(t).appendChild(r),
                  (o = n.getComputedStyle(t)),
                  (s = parseInt(o.height) > 3),
                  ie.removeChild(e)),
                s
              );
            },
          }));
      })();
      var Ve = ["Webkit", "Moz", "ms"],
        Je = b.createElement("div").style,
        Ge = {};
      function Ye(e) {
        var t = k.cssProps[e] || Ge[e];
        return (
          t ||
          (e in Je
            ? e
            : (Ge[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Ve.length;
                    n--;

                  )
                    if ((e = Ve[n] + t) in Je) return e;
                })(e) || e))
        );
      }
      var Qe = /^(none|table(?!-c[ea]).+)/,
        Ke = /^--/,
        Ze = { position: "absolute", visibility: "hidden", display: "block" },
        et = { letterSpacing: "0", fontWeight: "400" };
      function tt(e, t, n) {
        var r = re.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function nt(e, t, n, r, o, i) {
        var a = "width" === t ? 1 : 0,
          s = 0,
          u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
          "margin" === n && (u += k.css(e, n + oe[a], !0, o)),
            r
              ? ("content" === n && (u -= k.css(e, "padding" + oe[a], !0, o)),
                "margin" !== n &&
                  (u -= k.css(e, "border" + oe[a] + "Width", !0, o)))
              : ((u += k.css(e, "padding" + oe[a], !0, o)),
                "padding" !== n
                  ? (u += k.css(e, "border" + oe[a] + "Width", !0, o))
                  : (s += k.css(e, "border" + oe[a] + "Width", !0, o)));
        return (
          !r &&
            i >= 0 &&
            (u +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    i -
                    u -
                    s -
                    0.5
                )
              ) || 0),
          u
        );
      }
      function rt(e, t, n) {
        var r = We(e),
          o =
            (!m.boxSizingReliable() || n) &&
            "border-box" === k.css(e, "boxSizing", !1, r),
          i = o,
          a = Ue(e, t, r),
          s = "offset" + t[0].toUpperCase() + t.slice(1);
        if ($e.test(a)) {
          if (!n) return a;
          a = "auto";
        }
        return (
          ((!m.boxSizingReliable() && o) ||
            (!m.reliableTrDimensions() && j(e, "tr")) ||
            "auto" === a ||
            (!parseFloat(a) && "inline" === k.css(e, "display", !1, r))) &&
            e.getClientRects().length &&
            ((o = "border-box" === k.css(e, "boxSizing", !1, r)),
            (i = s in e) && (a = e[s])),
          (a = parseFloat(a) || 0) +
            nt(e, t, n || (o ? "border" : "content"), i, r, a) +
            "px"
        );
      }
      function ot(e, t, n, r, o) {
        return new ot.prototype.init(e, t, n, r, o);
      }
      k.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Ue(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o,
              i,
              a,
              s = J(t),
              u = Ke.test(t),
              l = e.style;
            if (
              (u || (t = Ye(s)),
              (a = k.cssHooks[t] || k.cssHooks[s]),
              void 0 === n)
            )
              return a && "get" in a && void 0 !== (o = a.get(e, !1, r))
                ? o
                : l[t];
            "string" === (i = typeof n) &&
              (o = re.exec(n)) &&
              o[1] &&
              ((n = le(e, t, o)), (i = "number")),
              null != n &&
                n == n &&
                ("number" !== i ||
                  u ||
                  (n += (o && o[3]) || (k.cssNumber[s] ? "" : "px")),
                m.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (l[t] = "inherit"),
                (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                  (u ? l.setProperty(t, n) : (l[t] = n)));
          }
        },
        css: function (e, t, n, r) {
          var o,
            i,
            a,
            s = J(t);
          return (
            Ke.test(t) || (t = Ye(s)),
            (a = k.cssHooks[t] || k.cssHooks[s]) &&
              "get" in a &&
              (o = a.get(e, !0, n)),
            void 0 === o && (o = Ue(e, t, r)),
            "normal" === o && t in et && (o = et[t]),
            "" === n || n
              ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o)
              : o
          );
        },
      }),
        k.each(["height", "width"], function (e, t) {
          k.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !Qe.test(k.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? rt(e, t, r)
                  : _e(e, Ze, function () {
                      return rt(e, t, r);
                    });
            },
            set: function (e, n, r) {
              var o,
                i = We(e),
                a = !m.scrollboxSize() && "absolute" === i.position,
                s = (a || r) && "border-box" === k.css(e, "boxSizing", !1, i),
                u = r ? nt(e, t, r, s, i) : 0;
              return (
                s &&
                  a &&
                  (u -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(i[t]) -
                      nt(e, t, "border", !1, i) -
                      0.5
                  )),
                u &&
                  (o = re.exec(n)) &&
                  "px" !== (o[3] || "px") &&
                  ((e.style[t] = n), (n = k.css(e, t))),
                tt(0, n, u)
              );
            },
          };
        }),
        (k.cssHooks.marginLeft = Xe(m.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(Ue(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  _e(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        k.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (k.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var r = 0,
                  o = {},
                  i = "string" == typeof n ? n.split(" ") : [n];
                r < 4;
                r++
              )
                o[e + oe[r] + t] = i[r] || i[r - 2] || i[0];
              return o;
            },
          }),
            "margin" !== e && (k.cssHooks[e + t].set = tt);
        }),
        k.fn.extend({
          css: function (e, t) {
            return z(
              this,
              function (e, t, n) {
                var r,
                  o,
                  i = {},
                  a = 0;
                if (Array.isArray(t)) {
                  for (r = We(e), o = t.length; a < o; a++)
                    i[t[a]] = k.css(e, t[a], !1, r);
                  return i;
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (k.Tween = ot),
        (ot.prototype = {
          constructor: ot,
          init: function (e, t, n, r, o, i) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = o || k.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = i || (k.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = ot.propHooks[this.prop];
            return e && e.get ? e.get(this) : ot.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = ot.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t = k.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : ot.propHooks._default.set(this),
              this
            );
          },
        }),
        (ot.prototype.init.prototype = ot.prototype),
        (ot.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = k.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              k.fx.step[e.prop]
                ? k.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!k.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : k.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
        (k.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (k.fx = ot.prototype.init),
        (k.fx.step = {});
      var it,
        at,
        st = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;
      function lt() {
        at &&
          (!1 === b.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(lt)
            : n.setTimeout(lt, k.fx.interval),
          k.fx.tick());
      }
      function ct() {
        return (
          n.setTimeout(function () {
            it = void 0;
          }),
          (it = Date.now())
        );
      }
      function ft(e, t) {
        var n,
          r = 0,
          o = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          o["margin" + (n = oe[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o;
      }
      function dt(e, t, n) {
        for (
          var r,
            o = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
            i = 0,
            a = o.length;
          i < a;
          i++
        )
          if ((r = o[i].call(n, t, e))) return r;
      }
      function pt(e, t, n) {
        var r,
          o,
          i = 0,
          a = pt.prefilters.length,
          s = k.Deferred().always(function () {
            delete u.elem;
          }),
          u = function () {
            if (o) return !1;
            for (
              var t = it || ct(),
                n = Math.max(0, l.startTime + l.duration - t),
                r = 1 - (n / l.duration || 0),
                i = 0,
                a = l.tweens.length;
              i < a;
              i++
            )
              l.tweens[i].run(r);
            return (
              s.notifyWith(e, [l, r, n]),
              r < 1 && a
                ? n
                : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
            );
          },
          l = s.promise({
            elem: e,
            props: k.extend({}, t),
            opts: k.extend(
              !0,
              { specialEasing: {}, easing: k.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: it || ct(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = k.Tween(
                e,
                l.opts,
                t,
                n,
                l.opts.specialEasing[t] || l.opts.easing
              );
              return l.tweens.push(r), r;
            },
            stop: function (t) {
              var n = 0,
                r = t ? l.tweens.length : 0;
              if (o) return this;
              for (o = !0; n < r; n++) l.tweens[n].run(1);
              return (
                t
                  ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                  : s.rejectWith(e, [l, t]),
                this
              );
            },
          }),
          c = l.props;
        for (
          !(function (e, t) {
            var n, r, o, i, a;
            for (n in e)
              if (
                ((o = t[(r = J(n))]),
                (i = e[n]),
                Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                n !== r && ((e[r] = i), delete e[n]),
                (a = k.cssHooks[r]) && ("expand" in a))
              )
                for (n in ((i = a.expand(i)), delete e[r], i))
                  (n in e) || ((e[n] = i[n]), (t[n] = o));
              else t[r] = o;
          })(c, l.opts.specialEasing);
          i < a;
          i++
        )
          if ((r = pt.prefilters[i].call(l, e, c, l.opts)))
            return (
              v(r.stop) &&
                (k._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          k.map(c, dt, l),
          v(l.opts.start) && l.opts.start.call(e, l),
          l
            .progress(l.opts.progress)
            .done(l.opts.done, l.opts.complete)
            .fail(l.opts.fail)
            .always(l.opts.always),
          k.fx.timer(k.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
          l
        );
      }
      (k.Animation = k.extend(pt, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return le(n.elem, e, re.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          v(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
          for (var n, r = 0, o = e.length; r < o; r++)
            (n = e[r]),
              (pt.tweeners[n] = pt.tweeners[n] || []),
              pt.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var r,
              o,
              i,
              a,
              s,
              u,
              l,
              c,
              f = "width" in t || "height" in t,
              d = this,
              p = {},
              h = e.style,
              g = e.nodeType && ue(e),
              m = Q.get(e, "fxshow");
            for (r in (n.queue ||
              (null == (a = k._queueHooks(e, "fx")).unqueued &&
                ((a.unqueued = 0),
                (s = a.empty.fire),
                (a.empty.fire = function () {
                  a.unqueued || s();
                })),
              a.unqueued++,
              d.always(function () {
                d.always(function () {
                  a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
                });
              })),
            t))
              if (((o = t[r]), st.test(o))) {
                if (
                  (delete t[r],
                  (i = i || "toggle" === o),
                  o === (g ? "hide" : "show"))
                ) {
                  if ("show" !== o || !m || void 0 === m[r]) continue;
                  g = !0;
                }
                p[r] = (m && m[r]) || k.style(e, r);
              }
            if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(p))
              for (r in (f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (l = m && m.display) && (l = Q.get(e, "display")),
                "none" === (c = k.css(e, "display")) &&
                  (l
                    ? (c = l)
                    : (de([e], !0),
                      (l = e.style.display || l),
                      (c = k.css(e, "display")),
                      de([e]))),
                ("inline" === c || ("inline-block" === c && null != l)) &&
                  "none" === k.css(e, "float") &&
                  (u ||
                    (d.done(function () {
                      h.display = l;
                    }),
                    null == l &&
                      ((c = h.display), (l = "none" === c ? "" : c))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                d.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (u = !1),
              p))
                u ||
                  (m
                    ? "hidden" in m && (g = m.hidden)
                    : (m = Q.access(e, "fxshow", { display: l })),
                  i && (m.hidden = !g),
                  g && de([e], !0),
                  d.done(function () {
                    for (r in (g || de([e]), Q.remove(e, "fxshow"), p))
                      k.style(e, r, p[r]);
                  })),
                  (u = dt(g ? m[r] : 0, r, d)),
                  r in m ||
                    ((m[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
        },
      })),
        (k.speed = function (e, t, n) {
          var r =
            e && "object" == typeof e
              ? k.extend({}, e)
              : {
                  complete: n || (!n && t) || (v(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !v(t) && t),
                };
          return (
            k.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in k.fx.speeds
                  ? (r.duration = k.fx.speeds[r.duration])
                  : (r.duration = k.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              v(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
            }),
            r
          );
        }),
        k.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(ue)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var o = k.isEmptyObject(e),
              i = k.speed(t, n, r),
              a = function () {
                var t = pt(this, k.extend({}, e), i);
                (o || Q.get(this, "finish")) && t.stop(!0);
              };
            return (
              (a.finish = a),
              o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
            );
          },
          stop: function (e, t, n) {
            var r = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  o = null != e && e + "queueHooks",
                  i = k.timers,
                  a = Q.get(this);
                if (o) a[o] && a[o].stop && r(a[o]);
                else for (o in a) a[o] && a[o].stop && ut.test(o) && r(a[o]);
                for (o = i.length; o--; )
                  i[o].elem !== this ||
                    (null != e && i[o].queue !== e) ||
                    (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                (!t && n) || k.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = Q.get(this),
                  r = n[e + "queue"],
                  o = n[e + "queueHooks"],
                  i = k.timers,
                  a = r ? r.length : 0;
                for (
                  n.finish = !0,
                    k.queue(this, e, []),
                    o && o.stop && o.stop.call(this, !0),
                    t = i.length;
                  t--;

                )
                  i[t].elem === this &&
                    i[t].queue === e &&
                    (i[t].anim.stop(!0), i.splice(t, 1));
                for (t = 0; t < a; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        k.each(["toggle", "show", "hide"], function (e, t) {
          var n = k.fn[t];
          k.fn[t] = function (e, r, o) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(ft(t, !0), e, r, o);
          };
        }),
        k.each(
          {
            slideDown: ft("show"),
            slideUp: ft("hide"),
            slideToggle: ft("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            k.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (k.timers = []),
        (k.fx.tick = function () {
          var e,
            t = 0,
            n = k.timers;
          for (it = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || k.fx.stop(), (it = void 0);
        }),
        (k.fx.timer = function (e) {
          k.timers.push(e), k.fx.start();
        }),
        (k.fx.interval = 13),
        (k.fx.start = function () {
          at || ((at = !0), lt());
        }),
        (k.fx.stop = function () {
          at = null;
        }),
        (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (k.fn.delay = function (e, t) {
          return (
            (e = (k.fx && k.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, r) {
              var o = n.setTimeout(t, e);
              r.stop = function () {
                n.clearTimeout(o);
              };
            })
          );
        }),
        (function () {
          var e = b.createElement("input"),
            t = b
              .createElement("select")
              .appendChild(b.createElement("option"));
          (e.type = "checkbox"),
            (m.checkOn = "" !== e.value),
            (m.optSelected = t.selected),
            ((e = b.createElement("input")).value = "t"),
            (e.type = "radio"),
            (m.radioValue = "t" === e.value);
        })();
      var ht,
        gt = k.expr.attrHandle;
      k.fn.extend({
        attr: function (e, t) {
          return z(this, k.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            k.removeAttr(this, e);
          });
        },
      }),
        k.extend({
          attr: function (e, t, n) {
            var r,
              o,
              i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return void 0 === e.getAttribute
                ? k.prop(e, t, n)
                : ((1 === i && k.isXMLDoc(e)) ||
                    (o =
                      k.attrHooks[t.toLowerCase()] ||
                      (k.expr.match.bool.test(t) ? ht : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void k.removeAttr(e, t)
                      : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                    : o && "get" in o && null !== (r = o.get(e, t))
                    ? r
                    : null == (r = k.find.attr(e, t))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!m.radioValue && "radio" === t && j(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              o = t && t.match(P);
            if (o && 1 === e.nodeType)
              for (; (n = o[r++]); ) e.removeAttribute(n);
          },
        }),
        (ht = {
          set: function (e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = gt[t] || k.find.attr;
          gt[t] = function (e, t, r) {
            var o,
              i,
              a = t.toLowerCase();
            return (
              r ||
                ((i = gt[a]),
                (gt[a] = o),
                (o = null != n(e, t, r) ? a : null),
                (gt[a] = i)),
              o
            );
          };
        });
      var mt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;
      function yt(e) {
        return (e.match(P) || []).join(" ");
      }
      function bt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function xt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(P)) || [];
      }
      k.fn.extend({
        prop: function (e, t) {
          return z(this, k.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[k.propFix[e] || e];
          });
        },
      }),
        k.extend({
          prop: function (e, t, n) {
            var r,
              o,
              i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
              return (
                (1 === i && k.isXMLDoc(e)) ||
                  ((t = k.propFix[t] || t), (o = k.propHooks[t])),
                void 0 !== n
                  ? o && "set" in o && void 0 !== (r = o.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : o && "get" in o && null !== (r = o.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = k.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : mt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        m.optSelected ||
          (k.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        k.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            k.propFix[this.toLowerCase()] = this;
          }
        ),
        k.fn.extend({
          addClass: function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              s,
              u = 0;
            if (v(e))
              return this.each(function (t) {
                k(this).addClass(e.call(this, t, bt(this)));
              });
            if ((t = xt(e)).length)
              for (; (n = this[u++]); )
                if (
                  ((o = bt(n)), (r = 1 === n.nodeType && " " + yt(o) + " "))
                ) {
                  for (a = 0; (i = t[a++]); )
                    r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                  o !== (s = yt(r)) && n.setAttribute("class", s);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              s,
              u = 0;
            if (v(e))
              return this.each(function (t) {
                k(this).removeClass(e.call(this, t, bt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = xt(e)).length)
              for (; (n = this[u++]); )
                if (
                  ((o = bt(n)), (r = 1 === n.nodeType && " " + yt(o) + " "))
                ) {
                  for (a = 0; (i = t[a++]); )
                    for (; r.indexOf(" " + i + " ") > -1; )
                      r = r.replace(" " + i + " ", " ");
                  o !== (s = yt(r)) && n.setAttribute("class", s);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : v(e)
              ? this.each(function (n) {
                  k(this).toggleClass(e.call(this, n, bt(this), t), t);
                })
              : this.each(function () {
                  var t, o, i, a;
                  if (r)
                    for (o = 0, i = k(this), a = xt(e); (t = a[o++]); )
                      i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                  else
                    (void 0 !== e && "boolean" !== n) ||
                      ((t = bt(this)) && Q.set(this, "__className__", t),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          t || !1 === e
                            ? ""
                            : Q.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              r = 0;
            for (t = " " + e + " "; (n = this[r++]); )
              if (1 === n.nodeType && (" " + yt(bt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var wt = /\r/g;
      k.fn.extend({
        val: function (e) {
          var t,
            n,
            r,
            o = this[0];
          return arguments.length
            ? ((r = v(e)),
              this.each(function (n) {
                var o;
                1 === this.nodeType &&
                  (null == (o = r ? e.call(this, n, k(this).val()) : e)
                    ? (o = "")
                    : "number" == typeof o
                    ? (o += "")
                    : Array.isArray(o) &&
                      (o = k.map(o, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    k.valHooks[this.type] ||
                    k.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, o, "value")) ||
                    (this.value = o));
              }))
            : o
            ? (t =
                k.valHooks[o.type] || k.valHooks[o.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(o, "value"))
              ? n
              : "string" == typeof (n = o.value)
              ? n.replace(wt, "")
              : null == n
              ? ""
              : n
            : void 0;
        },
      }),
        k.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = k.find.attr(e, "value");
                return null != t ? t : yt(k.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  o = e.options,
                  i = e.selectedIndex,
                  a = "select-one" === e.type,
                  s = a ? null : [],
                  u = a ? i + 1 : o.length;
                for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                  if (
                    ((n = o[r]).selected || r === i) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))
                  ) {
                    if (((t = k(n).val()), a)) return t;
                    s.push(t);
                  }
                return s;
              },
              set: function (e, t) {
                for (
                  var n, r, o = e.options, i = k.makeArray(t), a = o.length;
                  a--;

                )
                  ((r = o[a]).selected =
                    k.inArray(k.valHooks.option.get(r), i) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), i;
              },
            },
          },
        }),
        k.each(["radio", "checkbox"], function () {
          (k.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = k.inArray(k(e).val(), t) > -1);
            },
          }),
            m.checkOn ||
              (k.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (m.focusin = "onfocusin" in n);
      var Tt = /^(?:focusinfocus|focusoutblur)$/,
        kt = function (e) {
          e.stopPropagation();
        };
      k.extend(k.event, {
        trigger: function (e, t, r, o) {
          var i,
            a,
            s,
            u,
            l,
            c,
            f,
            d,
            h = [r || b],
            g = p.call(e, "type") ? e.type : e,
            m = p.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((a = d = s = r = r || b),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !Tt.test(g + k.event.triggered) &&
              (g.indexOf(".") > -1 &&
                ((m = g.split(".")), (g = m.shift()), m.sort()),
              (l = g.indexOf(":") < 0 && "on" + g),
              ((e = e[k.expando]
                ? e
                : new k.Event(g, "object" == typeof e && e)).isTrigger = o
                ? 2
                : 3),
              (e.namespace = m.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : k.makeArray(t, [e])),
              (f = k.event.special[g] || {}),
              o || !f.trigger || !1 !== f.trigger.apply(r, t)))
          ) {
            if (!o && !f.noBubble && !y(r)) {
              for (
                u = f.delegateType || g, Tt.test(u + g) || (a = a.parentNode);
                a;
                a = a.parentNode
              )
                h.push(a), (s = a);
              s === (r.ownerDocument || b) &&
                h.push(s.defaultView || s.parentWindow || n);
            }
            for (i = 0; (a = h[i++]) && !e.isPropagationStopped(); )
              (d = a),
                (e.type = i > 1 ? u : f.bindType || g),
                (c =
                  (Q.get(a, "events") || Object.create(null))[e.type] &&
                  Q.get(a, "handle")) && c.apply(a, t),
                (c = l && a[l]) &&
                  c.apply &&
                  G(a) &&
                  ((e.result = c.apply(a, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              o ||
                e.isDefaultPrevented() ||
                (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                !G(r) ||
                (l &&
                  v(r[g]) &&
                  !y(r) &&
                  ((s = r[l]) && (r[l] = null),
                  (k.event.triggered = g),
                  e.isPropagationStopped() && d.addEventListener(g, kt),
                  r[g](),
                  e.isPropagationStopped() && d.removeEventListener(g, kt),
                  (k.event.triggered = void 0),
                  s && (r[l] = s))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
          k.event.trigger(r, null, t);
        },
      }),
        k.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              k.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0);
          },
        }),
        m.focusin ||
          k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              k.event.simulate(t, e.target, k.event.fix(e));
            };
            k.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                  o = Q.access(r, t);
                o || r.addEventListener(e, n, !0), Q.access(r, t, (o || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                  o = Q.access(r, t) - 1;
                o
                  ? Q.access(r, t, o)
                  : (r.removeEventListener(e, n, !0), Q.remove(r, t));
              },
            };
          });
      var Ct = n.location,
        Et = { guid: Date.now() },
        St = /\?/;
      k.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            k.error("Invalid XML: " + e),
          t
        );
      };
      var At = /\[\]$/,
        Dt = /\r?\n/g,
        jt = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
      function Lt(e, t, n, r) {
        var o;
        if (Array.isArray(t))
          k.each(t, function (t, o) {
            n || At.test(e)
              ? r(e, o)
              : Lt(
                  e + "[" + ("object" == typeof o && null != o ? t : "") + "]",
                  o,
                  n,
                  r
                );
          });
        else if (n || "object" !== T(t)) r(e, t);
        else for (o in t) Lt(e + "[" + o + "]", t[o], n, r);
      }
      (k.param = function (e, t) {
        var n,
          r = [],
          o = function (e, t) {
            var n = v(t) ? t() : t;
            r[r.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
          k.each(e, function () {
            o(this.name, this.value);
          });
        else for (n in e) Lt(n, e[n], t, o);
        return r.join("&");
      }),
        k.fn.extend({
          serialize: function () {
            return k.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = k.prop(this, "elements");
              return e ? k.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !k(this).is(":disabled") &&
                  Nt.test(this.nodeName) &&
                  !jt.test(e) &&
                  (this.checked || !ge.test(e))
                );
              })
              .map(function (e, t) {
                var n = k(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? k.map(n, function (e) {
                      return { name: t.name, value: e.replace(Dt, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(Dt, "\r\n") };
              })
              .get();
          },
        });
      var qt = /%20/g,
        Ot = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Rt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Bt = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Mt = {},
        It = {},
        Ft = "*/".concat("*"),
        $t = b.createElement("a");
      function Wt(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var r,
            o = 0,
            i = t.toLowerCase().match(P) || [];
          if (v(n))
            for (; (r = i[o++]); )
              "+" === r[0]
                ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function _t(e, t, n, r) {
        var o = {},
          i = e === It;
        function a(s) {
          var u;
          return (
            (o[s] = !0),
            k.each(e[s] || [], function (e, s) {
              var l = s(t, n, r);
              return "string" != typeof l || i || o[l]
                ? i
                  ? !(u = l)
                  : void 0
                : (t.dataTypes.unshift(l), a(l), !1);
            }),
            u
          );
        }
        return a(t.dataTypes[0]) || (!o["*"] && a("*"));
      }
      function zt(e, t) {
        var n,
          r,
          o = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r), e;
      }
      ($t.href = Ct.href),
        k.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
              Ct.protocol
            ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": Ft,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": k.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
          },
          ajaxPrefilter: Wt(Mt),
          ajaxTransport: Wt(It),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var r,
              o,
              i,
              a,
              s,
              u,
              l,
              c,
              f,
              d,
              p = k.ajaxSetup({}, t),
              h = p.context || p,
              g = p.context && (h.nodeType || h.jquery) ? k(h) : k.event,
              m = k.Deferred(),
              v = k.Callbacks("once memory"),
              y = p.statusCode || {},
              x = {},
              w = {},
              T = "canceled",
              C = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (l) {
                    if (!a)
                      for (a = {}; (t = Rt.exec(i)); )
                        a[t[1].toLowerCase() + " "] = (
                          a[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = a[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return l ? i : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == l &&
                      ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                      (x[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == l && (p.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (l) C.always(e[C.status]);
                    else for (t in e) y[t] = [y[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || T;
                  return r && r.abort(t), E(0, t), this;
                },
              };
            if (
              (m.promise(C),
              (p.url = ((e || p.url || Ct.href) + "").replace(
                Pt,
                Ct.protocol + "//"
              )),
              (p.type = t.method || t.type || p.method || p.type),
              (p.dataTypes = (p.dataType || "*").toLowerCase().match(P) || [
                "",
              ]),
              null == p.crossDomain)
            ) {
              u = b.createElement("a");
              try {
                (u.href = p.url),
                  (u.href = u.href),
                  (p.crossDomain =
                    $t.protocol + "//" + $t.host != u.protocol + "//" + u.host);
              } catch (e) {
                p.crossDomain = !0;
              }
            }
            if (
              (p.data &&
                p.processData &&
                "string" != typeof p.data &&
                (p.data = k.param(p.data, p.traditional)),
              _t(Mt, p, t, C),
              l)
            )
              return C;
            for (f in ((c = k.event && p.global) &&
              0 == k.active++ &&
              k.event.trigger("ajaxStart"),
            (p.type = p.type.toUpperCase()),
            (p.hasContent = !Bt.test(p.type)),
            (o = p.url.replace(Ot, "")),
            p.hasContent
              ? p.data &&
                p.processData &&
                0 ===
                  (p.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (p.data = p.data.replace(qt, "+"))
              : ((d = p.url.slice(o.length)),
                p.data &&
                  (p.processData || "string" == typeof p.data) &&
                  ((o += (St.test(o) ? "&" : "?") + p.data), delete p.data),
                !1 === p.cache &&
                  ((o = o.replace(Ht, "$1")),
                  (d = (St.test(o) ? "&" : "?") + "_=" + Et.guid++ + d)),
                (p.url = o + d)),
            p.ifModified &&
              (k.lastModified[o] &&
                C.setRequestHeader("If-Modified-Since", k.lastModified[o]),
              k.etag[o] && C.setRequestHeader("If-None-Match", k.etag[o])),
            ((p.data && p.hasContent && !1 !== p.contentType) ||
              t.contentType) &&
              C.setRequestHeader("Content-Type", p.contentType),
            C.setRequestHeader(
              "Accept",
              p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                ? p.accepts[p.dataTypes[0]] +
                    ("*" !== p.dataTypes[0] ? ", " + Ft + "; q=0.01" : "")
                : p.accepts["*"]
            ),
            p.headers))
              C.setRequestHeader(f, p.headers[f]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, C, p) || l))
              return C.abort();
            if (
              ((T = "abort"),
              v.add(p.complete),
              C.done(p.success),
              C.fail(p.error),
              (r = _t(It, p, t, C)))
            ) {
              if (((C.readyState = 1), c && g.trigger("ajaxSend", [C, p]), l))
                return C;
              p.async &&
                p.timeout > 0 &&
                (s = n.setTimeout(function () {
                  C.abort("timeout");
                }, p.timeout));
              try {
                (l = !1), r.send(x, E);
              } catch (e) {
                if (l) throw e;
                E(-1, e);
              }
            } else E(-1, "No Transport");
            function E(e, t, a, u) {
              var f,
                d,
                b,
                x,
                w,
                T = t;
              l ||
                ((l = !0),
                s && n.clearTimeout(s),
                (r = void 0),
                (i = u || ""),
                (C.readyState = e > 0 ? 4 : 0),
                (f = (e >= 200 && e < 300) || 304 === e),
                a &&
                  (x = (function (e, t, n) {
                    for (
                      var r, o, i, a, s = e.contents, u = e.dataTypes;
                      "*" === u[0];

                    )
                      u.shift(),
                        void 0 === r &&
                          (r =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                      for (o in s)
                        if (s[o] && s[o].test(r)) {
                          u.unshift(o);
                          break;
                        }
                    if (u[0] in n) i = u[0];
                    else {
                      for (o in n) {
                        if (!u[0] || e.converters[o + " " + u[0]]) {
                          i = o;
                          break;
                        }
                        a || (a = o);
                      }
                      i = i || a;
                    }
                    if (i) return i !== u[0] && u.unshift(i), n[i];
                  })(p, C, a)),
                !f &&
                  k.inArray("script", p.dataTypes) > -1 &&
                  (p.converters["text script"] = function () {}),
                (x = (function (e, t, n, r) {
                  var o,
                    i,
                    a,
                    s,
                    u,
                    l = {},
                    c = e.dataTypes.slice();
                  if (c[1])
                    for (a in e.converters)
                      l[a.toLowerCase()] = e.converters[a];
                  for (i = c.shift(); i; )
                    if (
                      (e.responseFields[i] && (n[e.responseFields[i]] = t),
                      !u &&
                        r &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (u = i),
                      (i = c.shift()))
                    )
                      if ("*" === i) i = u;
                      else if ("*" !== u && u !== i) {
                        if (!(a = l[u + " " + i] || l["* " + i]))
                          for (o in l)
                            if (
                              (s = o.split(" "))[1] === i &&
                              (a = l[u + " " + s[0]] || l["* " + s[0]])
                            ) {
                              !0 === a
                                ? (a = l[o])
                                : !0 !== l[o] && ((i = s[0]), c.unshift(s[1]));
                              break;
                            }
                        if (!0 !== a)
                          if (a && e.throws) t = a(t);
                          else
                            try {
                              t = a(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: a
                                  ? e
                                  : "No conversion from " + u + " to " + i,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(p, x, C, f)),
                f
                  ? (p.ifModified &&
                      ((w = C.getResponseHeader("Last-Modified")) &&
                        (k.lastModified[o] = w),
                      (w = C.getResponseHeader("etag")) && (k.etag[o] = w)),
                    204 === e || "HEAD" === p.type
                      ? (T = "nocontent")
                      : 304 === e
                      ? (T = "notmodified")
                      : ((T = x.state), (d = x.data), (f = !(b = x.error))))
                  : ((b = T), (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                (C.status = e),
                (C.statusText = (t || T) + ""),
                f ? m.resolveWith(h, [d, T, C]) : m.rejectWith(h, [C, T, b]),
                C.statusCode(y),
                (y = void 0),
                c &&
                  g.trigger(f ? "ajaxSuccess" : "ajaxError", [C, p, f ? d : b]),
                v.fireWith(h, [C, T]),
                c &&
                  (g.trigger("ajaxComplete", [C, p]),
                  --k.active || k.event.trigger("ajaxStop")));
            }
            return C;
          },
          getJSON: function (e, t, n) {
            return k.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return k.get(e, void 0, t, "script");
          },
        }),
        k.each(["get", "post"], function (e, t) {
          k[t] = function (e, n, r, o) {
            return (
              v(n) && ((o = o || r), (r = n), (n = void 0)),
              k.ajax(
                k.extend(
                  { url: e, type: t, dataType: o, data: n, success: r },
                  k.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        k.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            "content-type" === t.toLowerCase() &&
              (e.contentType = e.headers[t] || "");
        }),
        (k._evalUrl = function (e, t, n) {
          return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              k.globalEval(e, t, n);
            },
          });
        }),
        k.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (v(e) && (e = e.call(this[0])),
                (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return v(e)
              ? this.each(function (t) {
                  k(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = k(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = v(e);
            return this.each(function (n) {
              k(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  k(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (k.expr.pseudos.hidden = function (e) {
          return !k.expr.pseudos.visible(e);
        }),
        (k.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (k.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var Ut = { 0: 200, 1223: 204 },
        Xt = k.ajaxSettings.xhr();
      (m.cors = !!Xt && "withCredentials" in Xt),
        (m.ajax = Xt = !!Xt),
        k.ajaxTransport(function (e) {
          var t, r;
          if (m.cors || (Xt && !e.crossDomain))
            return {
              send: function (o, i) {
                var a,
                  s = e.xhr();
                if (
                  (s.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (a in e.xhrFields) s[a] = e.xhrFields[a];
                for (a in (e.mimeType &&
                  s.overrideMimeType &&
                  s.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  o["X-Requested-With"] ||
                  (o["X-Requested-With"] = "XMLHttpRequest"),
                o))
                  s.setRequestHeader(a, o[a]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                      "abort" === e
                        ? s.abort()
                        : "error" === e
                        ? "number" != typeof s.status
                          ? i(0, "error")
                          : i(s.status, s.statusText)
                        : i(
                            Ut[s.status] || s.status,
                            s.statusText,
                            "text" !== (s.responseType || "text") ||
                              "string" != typeof s.responseText
                              ? { binary: s.response }
                              : { text: s.responseText },
                            s.getAllResponseHeaders()
                          ));
                  };
                }),
                  (s.onload = t()),
                  (r = s.onerror = s.ontimeout = t("error")),
                  void 0 !== s.onabort
                    ? (s.onabort = r)
                    : (s.onreadystatechange = function () {
                        4 === s.readyState &&
                          n.setTimeout(function () {
                            t && r();
                          });
                      }),
                  (t = t("abort"));
                try {
                  s.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        k.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        k.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return k.globalEval(e), e;
            },
          },
        }),
        k.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        k.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (r, o) {
                (t = k("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && o("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  b.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Vt,
        Jt = [],
        Gt = /(=)\?(?=&|$)|\?\?/;
      k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Jt.pop() || k.expando + "_" + Et.guid++;
          return (this[e] = !0), e;
        },
      }),
        k.ajaxPrefilter("json jsonp", function (e, t, r) {
          var o,
            i,
            a,
            s =
              !1 !== e.jsonp &&
              (Gt.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Gt.test(e.data) &&
                  "data");
          if (s || "jsonp" === e.dataTypes[0])
            return (
              (o = e.jsonpCallback = v(e.jsonpCallback)
                ? e.jsonpCallback()
                : e.jsonpCallback),
              s
                ? (e[s] = e[s].replace(Gt, "$1" + o))
                : !1 !== e.jsonp &&
                  (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
              (e.converters["script json"] = function () {
                return a || k.error(o + " was not called"), a[0];
              }),
              (e.dataTypes[0] = "json"),
              (i = n[o]),
              (n[o] = function () {
                a = arguments;
              }),
              r.always(function () {
                void 0 === i ? k(n).removeProp(o) : (n[o] = i),
                  e[o] && ((e.jsonpCallback = t.jsonpCallback), Jt.push(o)),
                  a && v(i) && i(a[0]),
                  (a = i = void 0);
              }),
              "script"
            );
        }),
        (m.createHTMLDocument =
          (((Vt = b.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Vt.childNodes.length)),
        (k.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (m.createHTMLDocument
                  ? (((r = (t = b.implementation.createHTMLDocument(
                      ""
                    )).createElement("base")).href = b.location.href),
                    t.head.appendChild(r))
                  : (t = b)),
              (i = !n && []),
              (o = N.exec(e))
                ? [t.createElement(o[1])]
                : ((o = Te([e], t, i)),
                  i && i.length && k(i).remove(),
                  k.merge([], o.childNodes)));
          var r, o, i;
        }),
        (k.fn.load = function (e, t, n) {
          var r,
            o,
            i,
            a = this,
            s = e.indexOf(" ");
          return (
            s > -1 && ((r = yt(e.slice(s))), (e = e.slice(0, s))),
            v(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (o = "POST"),
            a.length > 0 &&
              k
                .ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (i = arguments),
                    a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      a.each(function () {
                        n.apply(this, i || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        (k.expr.pseudos.animated = function (e) {
          return k.grep(k.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (k.offset = {
          setOffset: function (e, t, n) {
            var r,
              o,
              i,
              a,
              s,
              u,
              l = k.css(e, "position"),
              c = k(e),
              f = {};
            "static" === l && (e.style.position = "relative"),
              (s = c.offset()),
              (i = k.css(e, "top")),
              (u = k.css(e, "left")),
              ("absolute" === l || "fixed" === l) &&
              (i + u).indexOf("auto") > -1
                ? ((a = (r = c.position()).top), (o = r.left))
                : ((a = parseFloat(i) || 0), (o = parseFloat(u) || 0)),
              v(t) && (t = t.call(e, n, k.extend({}, s))),
              null != t.top && (f.top = t.top - s.top + a),
              null != t.left && (f.left = t.left - s.left + o),
              "using" in t
                ? t.using.call(e, f)
                : ("number" == typeof f.top && (f.top += "px"),
                  "number" == typeof f.left && (f.left += "px"),
                  c.css(f));
          },
        }),
        k.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    k.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                o = { top: 0, left: 0 };
              if ("fixed" === k.css(r, "position"))
                t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === k.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((o = k(e).offset()).top += k.css(e, "borderTopWidth", !0)),
                  (o.left += k.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - o.top - k.css(r, "marginTop", !0),
                left: t.left - o.left - k.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === k.css(e, "position");

              )
                e = e.offsetParent;
              return e || ie;
            });
          },
        }),
        k.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            k.fn[e] = function (r) {
              return z(
                this,
                function (e, r, o) {
                  var i;
                  if (
                    (y(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView),
                    void 0 === o)
                  )
                    return i ? i[t] : e[r];
                  i
                    ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset)
                    : (e[r] = o);
                },
                e,
                r,
                arguments.length
              );
            };
          }
        ),
        k.each(["top", "left"], function (e, t) {
          k.cssHooks[t] = Xe(m.pixelPosition, function (e, n) {
            if (n)
              return (n = Ue(e, t)), $e.test(n) ? k(e).position()[t] + "px" : n;
          });
        }),
        k.each({ Height: "height", Width: "width" }, function (e, t) {
          k.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, r) {
              k.fn[r] = function (o, i) {
                var a = arguments.length && (n || "boolean" != typeof o),
                  s = n || (!0 === o || !0 === i ? "margin" : "border");
                return z(
                  this,
                  function (t, n, o) {
                    var i;
                    return y(t)
                      ? 0 === r.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((i = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          i["scroll" + e],
                          t.body["offset" + e],
                          i["offset" + e],
                          i["client" + e]
                        ))
                      : void 0 === o
                      ? k.css(t, n, s)
                      : k.style(t, n, o, s);
                  },
                  t,
                  a ? o : void 0,
                  a
                );
              };
            }
          );
        }),
        k.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            k.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        k.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        k.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            k.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        );
      var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (k.proxy = function (e, t) {
        var n, r, o;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
          return (
            (r = s.call(arguments, 2)),
            ((o = function () {
              return e.apply(t || this, r.concat(s.call(arguments)));
            }).guid = e.guid = e.guid || k.guid++),
            o
          );
      }),
        (k.holdReady = function (e) {
          e ? k.readyWait++ : k.ready(!0);
        }),
        (k.isArray = Array.isArray),
        (k.parseJSON = JSON.parse),
        (k.nodeName = j),
        (k.isFunction = v),
        (k.isWindow = y),
        (k.camelCase = J),
        (k.type = T),
        (k.now = Date.now),
        (k.isNumeric = function (e) {
          var t = k.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (k.trim = function (e) {
          return null == e ? "" : (e + "").replace(Yt, "");
        }),
        void 0 ===
          (r = function () {
            return k;
          }.apply(t, [])) || (e.exports = r);
      var Qt = n.jQuery,
        Kt = n.$;
      return (
        (k.noConflict = function (e) {
          return (
            n.$ === k && (n.$ = Kt), e && n.jQuery === k && (n.jQuery = Qt), k
          );
        }),
        void 0 === o && (n.jQuery = n.$ = k),
        k
      );
    });
  },
  function (e, t, n) {
    var r = n(2);
    "string" == typeof r && (r = [[e.i, r, ""]]);
    var o = { insert: "head", singleton: !1 };
    n(4)(r, o);
    r.locals && (e.exports = r.locals);
  },
  function (e, t, n) {
    (e.exports = n(3)(!1)).push([
      e.i,
      "body {\n  background-color: #D9D9D9;\n  color: #59564B;\n  margin: auto;\n  padding: 10px 10px;\n  padding-top: 25px;\n  padding-bottom: 100px;\n  text-align: center;\n  font-family: 'Baloo Chettan 2';\n  font-size: 18px;\n  letter-spacing: 1.5px;\n}\n\nmain {\n  text-align: center;\n  display: flex;\n  font-family: 'Baloo Chettan 2';\n  letter-spacing: 1.5px;\n  flex-direction: column;\n  border: 1px solid #B0A8B3;\n  padding: 50px;\n  background-color: #EDEDED;\n  border-radius: 20px;\n}\n\nh1 {\n  font-size: 24px;\n}\n\n#bookmark, .expand, .error-content {\n  font-size: 16px;\n  background-color: #F7F7F7;\n  border-radius: 20px;\n  border: 1px solid #B0A8B3;\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  width: 65%;\n  order: 1;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.error-content {\n  width: 75%;\n  margin: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.content {\n  margin: 10px 0;\n}\n\n#enter-link, #enter-title, #input-description {\n  text-align: center;\n  width: 42%;\n  height: 25px;\n  border-radius: 10px;\n  border: 1px solid #B0A8B3;\n}\n\n#filter, #rating {\n  text-align: center;\n  width: 20%;\n  border-radius: 10px;\n  border: 1px solid #B0A8B3;\n  height: 22px;\n}\n\nbutton {\n  padding: 16px;\n  margin: 20px 5px;\n  border-radius: 10px;\n  border: 1px solid #B0A8B3;\n  background-color: #F7F7F7;\n}\n\n#new-button {\n  width: 45%;\n  font: 'Baloo Chettan 2';\n  font-size: 14px;\n}\n\n.my-bookmarks-view {\n  margin: auto;\n}\n\n.rating-box {\n  margin: 15px;\n}\n\n\n\na:link    { color:#546E7A; }\na:hover   { color: #FFC0CB; }\n\n@media all and (min-width: 800px) {\n\n  body {\n    background-color: #D9D9D9;\n    color: #59564B;\n    margin: auto;\n    padding: 10px;\n    padding-top: 100px;\n    text-align: center;\n    font-family: 'Tenor Sans', sans-serif;\n    font-size: 18px;\n  }\n\n  main {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    border: 1px solid #B0A8B3;\n    padding: 50px;\n    background-color: #EDEDED;\n    border-radius: 20px;\n    width: 35%;\n    margin: auto;\n  }\n\n  button, .add-bookmark {\n    margin:auto;\n    margin-bottom: 8px;\n  } \n\n  .bookmark-item {\n    background-color: #F7F7F7;\n    width: 50%;\n    margin: auto;\n  }\n  \n  .my-bookmarks-view {\n    margin: 0px 100px;\n  }\n\n  #enter-link, #enter-title, #input-description, #filter-filter, #filter {\n    width: 45%;\n  }\n\n  .ratings {\n    margin-bottom: 10px;\n  }\n  \n  #filter, .filter, #rating {\n    width: 12%;\n  }\n}",
      "",
    ]);
  },
  function (e, t, n) {
    "use strict";
    e.exports = function (e) {
      var t = [];
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = (function (e, t) {
              var n = e[1] || "",
                r = e[3];
              if (!r) return n;
              if (t && "function" == typeof btoa) {
                var o =
                    ((a = r),
                    (s = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      s
                    )),
                    "/*# ".concat(u, " */")),
                  i = r.sources.map(function (e) {
                    return "/*# sourceURL="
                      .concat(r.sourceRoot)
                      .concat(e, " */");
                  });
                return [n].concat(i).concat([o]).join("\n");
              }
              var a, s, u;
              return [n].join("\n");
            })(t, e);
            return t[2] ? "@media ".concat(t[2], "{").concat(n, "}") : n;
          }).join("");
        }),
        (t.i = function (e, n) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var r = {}, o = 0; o < this.length; o++) {
            var i = this[o][0];
            null != i && (r[i] = !0);
          }
          for (var a = 0; a < e.length; a++) {
            var s = e[a];
            (null != s[0] && r[s[0]]) ||
              (n && !s[2]
                ? (s[2] = n)
                : n && (s[2] = "(".concat(s[2], ") and (").concat(n, ")")),
              t.push(s));
          }
        }),
        t
      );
    };
  },
  function (e, t, n) {
    "use strict";
    var r,
      o = {},
      i = function () {
        return (
          void 0 === r &&
            (r = Boolean(window && document && document.all && !window.atob)),
          r
        );
      },
      a = (function () {
        var e = {};
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (e) {
                n = null;
              }
            e[t] = n;
          }
          return e[t];
        };
      })();
    function s(e, t) {
      for (var n = [], r = {}, o = 0; o < e.length; o++) {
        var i = e[o],
          a = t.base ? i[0] + t.base : i[0],
          s = { css: i[1], media: i[2], sourceMap: i[3] };
        r[a] ? r[a].parts.push(s) : n.push((r[a] = { id: a, parts: [s] }));
      }
      return n;
    }
    function u(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = o[r.id],
          a = 0;
        if (i) {
          for (i.refs++; a < i.parts.length; a++) i.parts[a](r.parts[a]);
          for (; a < r.parts.length; a++) i.parts.push(m(r.parts[a], t));
        } else {
          for (var s = []; a < r.parts.length; a++) s.push(m(r.parts[a], t));
          o[r.id] = { id: r.id, refs: 1, parts: s };
        }
      }
    }
    function l(e) {
      var t = document.createElement("style");
      if (void 0 === e.attributes.nonce) {
        var r = n.nc;
        r && (e.attributes.nonce = r);
      }
      if (
        (Object.keys(e.attributes).forEach(function (n) {
          t.setAttribute(n, e.attributes[n]);
        }),
        "function" == typeof e.insert)
      )
        e.insert(t);
      else {
        var o = a(e.insert || "head");
        if (!o)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        o.appendChild(t);
      }
      return t;
    }
    var c,
      f =
        ((c = []),
        function (e, t) {
          return (c[e] = t), c.filter(Boolean).join("\n");
        });
    function d(e, t, n, r) {
      var o = n ? "" : r.css;
      if (e.styleSheet) e.styleSheet.cssText = f(t, o);
      else {
        var i = document.createTextNode(o),
          a = e.childNodes;
        a[t] && e.removeChild(a[t]),
          a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
      }
    }
    function p(e, t, n) {
      var r = n.css,
        o = n.media,
        i = n.sourceMap;
      if (
        (o && e.setAttribute("media", o),
        i &&
          btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(r));
      }
    }
    var h = null,
      g = 0;
    function m(e, t) {
      var n, r, o;
      if (t.singleton) {
        var i = g++;
        (n = h || (h = l(t))),
          (r = d.bind(null, n, i, !1)),
          (o = d.bind(null, n, i, !0));
      } else
        (n = l(t)),
          (r = p.bind(null, n, t)),
          (o = function () {
            !(function (e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
            })(n);
          });
      return (
        r(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return;
            r((e = t));
          } else o();
        }
      );
    }
    e.exports = function (e, t) {
      ((t = t || {}).attributes =
        "object" == typeof t.attributes ? t.attributes : {}),
        t.singleton || "boolean" == typeof t.singleton || (t.singleton = i());
      var n = s(e, t);
      return (
        u(n, t),
        function (e) {
          for (var r = [], i = 0; i < n.length; i++) {
            var a = n[i],
              l = o[a.id];
            l && (l.refs--, r.push(l));
          }
          e && u(s(e, t), t);
          for (var c = 0; c < r.length; c++) {
            var f = r[c];
            if (0 === f.refs) {
              for (var d = 0; d < f.parts.length; d++) f.parts[d]();
              delete o[f.id];
            }
          }
        }
      );
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      o = n.n(r);
    const i = "https://thinkful-list-api.herokuapp.com/anthony_giannotti",
      a = function (...e) {
        let t;
        return fetch(...e)
          .then(
            (e) => (
              e.ok ||
                ((t = { code: e.status }),
                e.headers.get("content-type").includes("json") ||
                  (t.message = e.statusText)),
              e.json()
            )
          )
          .then((e) => (t ? ((t.message = e.message), Promise.reject(t)) : e));
      };
    var s = {
      getBookmark: function () {
        return a(`${i}/bookmarks`);
      },
      createBookmark: function (e) {
        return a(`${i}/bookmarks`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: e,
        });
      },
      deleteBookmark: function (e) {
        return a(i + "/bookmarks/" + e, { method: "DELETE" });
      },
    };
    const u = { bookmarks: [], adding: !1, error: null, filter: 0 },
      l = function (e) {
        return u.bookmarks.find((t) => t.id === e);
      };
    var c = {
      STORE: u,
      findById: l,
      findAndDelete: function (e) {
        u.bookmarks = u.bookmarks.filter((t) => t.id !== e);
      },
      setError: function (e) {
        this.STORE.error = e;
      },
      expandThis: function (e) {
        let t = l(e);
        t.expanded = !t.expanded;
      },
      addBookmark: function (e) {
        this.STORE.bookmarks.push(e);
      },
    };
    const f = function (e) {
        if (e.rating >= c.STORE.filter) return !0 === e.expanded ? p(e) : d(e);
      },
      d = function (e) {
        return `\n  <div class="content">\n  <button type="button" class="expand" id="bookmark" data-bookmark-id="${e.id}">\n  <div class="button-text" id="button-text">${e.title}</div>\n  <div class="display-rating">\n  ${e.rating}\n  </div></button></div>\n  `;
      },
      p = function (e) {
        return `\n  <div class="content">\n  <button type="button" class="expand" id="bookmark" data-bookmark-id="${e.id}">\n  <div class="button-text" id="button-text">${e.title}</div>\n  <div class="rating-display">\n  ${e.rating}\n  </div>\n  </button> </div>\n  <div class="panel">\n  <div class="drop-down-button">\n  <a href="https://www.google.com" target="new_blank">https://www.google.com</a>\n  <br>\n  </div>\n  <p id='drop-down-text'>\n  ${e.desc}           \n  </p>\n  </div>\n  <button class="delete-button" id="delete-button" data-bookmark-id=${e.id}> Delete</button>\n  `;
      };
    var h = {
      generateMain: function (e) {
        return `\n  <div id="buttons" class="buttons">\n  <h1>Bookmark App</h1>\n  <div class="add-bookmark">\n  <button id="add-bookmark" class="add-bookmark">Add Bookmark</button>\n  </div>\n  <label for="filter">Sort By Rating</label>\n  <br>\n  <select name="filter" id="filter" class="filter">\n  <option value="1" selected="selected">1</option>\n  <option value="2" selected="selected">2</option>\n  <option value="3" selected="selected">3</option>\n  <option value="4" selected="selected">4</option>\n  <option value="5" selected="selected">5</option>\n  </select>\n  </div>\n  <br>\n  <div class="main-display" id="main-display">\n  ${e
          .map((e) => f(e))
          .join("")}\n  </div>`;
      },
      addBookmark: function () {
        return '\n  <div class="add-bookmark">\n  <h1>Add Bookmark</div>\n  <form class="form-add">\n  <label for="url">URL</label>\n  <br>\n  <input type="text" name="url" id="enter-link" placeholder="URL"required />\n  <br>\n  <label for="title">Title</label>\n  <br>\n  <input type="text" name="title" id="enter-title" placeholder="Title" required />\n  <br>\n  <label for="desc">Description</label>\n  <br>\n  <input type="text" name="desc" id="input-description" placeholder="Description" />\n  <br>\n  <label for="rating">Rating:</label>\n  <br>\n  <select name="rating" id="rating">\n  <option value="1" selected="selected">1</option>\n  <option value="2" selected="selected">2</option>\n  <option value="3" selected="selected">3</option>\n  <option value="4" selected="selected">4</option>\n  <option value="5" selected="selected">5</option>\n  </select>\n  <div class="error-message"></div>\n  </div>\n  <div>\n  <button type="submit" class="submit-form">Save</button>\n  <button type-"submit" class="cancel-button">Cancel</button>\n  </div>\n  </form>\n  </div>';
      },
    };
    o.a.fn.extend({
      serializeJson: function () {
        const e = new FormData(this[0]),
          t = {};
        return e.forEach((e, n) => (t[n] = e)), JSON.stringify(t);
      },
    });
    const g = function () {
        const e = [...c.STORE.bookmarks];
        !1 === c.STORE.adding
          ? (o()("main").html(h.generateMain(e)), m(), C(), y(), w(), T())
          : (o()("main").html(h.addBookmark()), b(), x(), m());
      },
      m = function () {
        if (c.STORE.error) {
          const e = v(c.STORE.error);
          o()(".error-message").html(e);
        } else o()(".error-message").empty();
        k();
      },
      v = function (e) {
        return `\n        <section class="error-content">\n        <p>${e}</p>\n          <button id="cancel-error">Close</button>\n        </section>\n      `;
      },
      y = function () {
        o()(".expand").click((e) => {
          const t = (function (e) {
            return o()(e).closest(".expand").data("bookmark-id");
          })(e.currentTarget);
          c.expandThis(t), g();
        });
      },
      b = function () {
        o()(".form-add").on("click", ".submit-form", (e) => {
          e.preventDefault();
          const t = o()(".form-add").serializeJson();
          s.createBookmark(t)
            .then((e) => {
              c.addBookmark(e), (c.STORE.adding = !1), g();
            })
            .catch((e) => {
              c.setError(e.message), m();
            });
        });
      },
      x = function () {
        o()(".cancel-button").on("click", function (e) {
          e.preventDefault(), (c.STORE.adding = !1), g();
        });
      },
      w = function () {
        o()(".filter").on("change", function (e) {
          e.preventDefault();
          let t = o()("#filter option:selected").text();
          (c.STORE.filter = t), g();
        });
      },
      T = function () {
        o()(".delete-button").click((e) => {
          const t = (function (e) {
            return o()(e).closest(".delete-button").data("bookmark-id");
          })(e.currentTarget);
          s.deleteBookmark(t)
            .then(() => {
              c.findAndDelete(t), g();
            })
            .catch((e) => {
              c.setError(e.message), m();
            });
        });
      },
      k = function () {
        o()(".error-message").on("click", "#cancel-error", () => {
          c.setError(), m();
        });
      },
      C = function () {
        o()(".add-bookmark").on("click", function () {
          (c.STORE.adding = !0), g();
        });
      };
    var E = { render: g };
    n(1);
    o()(function () {
      s.getBookmark().then((e) => {
        e.forEach((e) => c.addBookmark(e)), E.render();
      }),
        E.render();
    });
  },
]);
