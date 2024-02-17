/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e, window);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(require("jquery"), window))
      : t(jQuery, window);
  })(function (s, n) {
    "use strict";
    function e(e) {
      return (
        0 <=
        (function (e, t) {
          for (
            var r = /^(\d+)\.(\d+)\.(\d+)/,
              n = r.exec(e) || [],
              o = r.exec(t) || [],
              i = 1;
            i <= 3;
            i++
          ) {
            if (+o[i] < +n[i]) return 1;
            if (+n[i] < +o[i]) return -1;
          }
          return 0;
        })(s.fn.jquery, e)
      );
    }
    (s.migrateVersion = "3.3.2"),
      n.console &&
        n.console.log &&
        ((s && e("3.0.0")) ||
          n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
        s.migrateWarnings &&
          n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
        n.console.log(
          "JQMIGRATE: Migrate is installed" +
            (s.migrateMute ? "" : " with logging active") +
            ", version " +
            s.migrateVersion
        ));
    var r = {};
    function u(e) {
      var t = n.console;
      (s.migrateDeduplicateWarnings && r[e]) ||
        ((r[e] = !0),
        s.migrateWarnings.push(e),
        t &&
          t.warn &&
          !s.migrateMute &&
          (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()));
    }
    function t(e, t, r, n) {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return u(n), r;
        },
        set: function (e) {
          u(n), (r = e);
        },
      });
    }
    function o(e, t, r, n) {
      e[t] = function () {
        return u(n), r.apply(this, arguments);
      };
    }
    (s.migrateDeduplicateWarnings = !0),
      (s.migrateWarnings = []),
      void 0 === s.migrateTrace && (s.migrateTrace = !0),
      (s.migrateReset = function () {
        (r = {}), (s.migrateWarnings.length = 0);
      }),
      "BackCompat" === n.document.compatMode &&
        u("jQuery is not compatible with Quirks Mode");
    var i,
      a,
      c,
      d = {},
      l = s.fn.init,
      p = s.find,
      f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (i in ((s.fn.init = function (e) {
      var t = Array.prototype.slice.call(arguments);
      return (
        "string" == typeof e &&
          "#" === e &&
          (u("jQuery( '#' ) is not a valid selector"), (t[0] = [])),
        l.apply(this, t)
      );
    }),
    (s.fn.init.prototype = s.fn),
    (s.find = function (t) {
      var r = Array.prototype.slice.call(arguments);
      if ("string" == typeof t && f.test(t))
        try {
          n.document.querySelector(t);
        } catch (e) {
          t = t.replace(y, function (e, t, r, n) {
            return "[" + t + r + '"' + n + '"]';
          });
          try {
            n.document.querySelector(t),
              u("Attribute selector with '#' must be quoted: " + r[0]),
              (r[0] = t);
          } catch (e) {
            u("Attribute selector with '#' was not fixed: " + r[0]);
          }
        }
      return p.apply(this, r);
    }),
    p))
      Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
    o(
      s.fn,
      "size",
      function () {
        return this.length;
      },
      "jQuery.fn.size() is deprecated and removed; use the .length property"
    ),
      o(
        s,
        "parseJSON",
        function () {
          return JSON.parse.apply(null, arguments);
        },
        "jQuery.parseJSON is deprecated; use JSON.parse"
      ),
      o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"),
      o(
        s,
        "unique",
        s.uniqueSort,
        "jQuery.unique is deprecated; use jQuery.uniqueSort"
      ),
      t(
        s.expr,
        "filters",
        s.expr.pseudos,
        "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"
      ),
      t(
        s.expr,
        ":",
        s.expr.pseudos,
        "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"
      ),
      e("3.1.1") &&
        o(
          s,
          "trim",
          function (e) {
            return null == e ? "" : (e + "").replace(m, "");
          },
          "jQuery.trim is deprecated; use String.prototype.trim"
        ),
      e("3.2.0") &&
        (o(
          s,
          "nodeName",
          function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          "jQuery.nodeName is deprecated"
        ),
        o(
          s,
          "isArray",
          Array.isArray,
          "jQuery.isArray is deprecated; use Array.isArray"
        )),
      e("3.3.0") &&
        (o(
          s,
          "isNumeric",
          function (e) {
            var t = typeof e;
            return (
              ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
            );
          },
          "jQuery.isNumeric() is deprecated"
        ),
        s.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            d["[object " + t + "]"] = t.toLowerCase();
          }
        ),
        o(
          s,
          "type",
          function (e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? d[Object.prototype.toString.call(e)] || "object"
              : typeof e;
          },
          "jQuery.type is deprecated"
        ),
        o(
          s,
          "isFunction",
          function (e) {
            return "function" == typeof e;
          },
          "jQuery.isFunction() is deprecated"
        ),
        o(
          s,
          "isWindow",
          function (e) {
            return null != e && e === e.window;
          },
          "jQuery.isWindow() is deprecated"
        )),
      s.ajax &&
        ((a = s.ajax),
        (c = /(=)\?(?=&|$)|\?\?/),
        (s.ajax = function () {
          var e = a.apply(this, arguments);
          return (
            e.promise &&
              (o(
                e,
                "success",
                e.done,
                "jQXHR.success is deprecated and removed"
              ),
              o(e, "error", e.fail, "jQXHR.error is deprecated and removed"),
              o(
                e,
                "complete",
                e.always,
                "jQXHR.complete is deprecated and removed"
              )),
            e
          );
        }),
        e("4.0.0") ||
          s.ajaxPrefilter("+json", function (e) {
            !1 !== e.jsonp &&
              (c.test(e.url) ||
                ("string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  c.test(e.data))) &&
              u("JSON-to-JSONP auto-promotion is deprecated");
          }));
    var g = s.fn.removeAttr,
      h = s.fn.toggleClass,
      v = /\S+/g;
    function j(e) {
      return e.replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase();
      });
    }
    s.fn.removeAttr = function (e) {
      var r = this;
      return (
        s.each(e.match(v), function (e, t) {
          s.expr.match.bool.test(t) &&
            (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t),
            r.prop(t, !1));
        }),
        g.apply(this, arguments)
      );
    };
    var Q,
      b = !(s.fn.toggleClass = function (t) {
        return void 0 !== t && "boolean" != typeof t
          ? h.apply(this, arguments)
          : (u("jQuery.fn.toggleClass( boolean ) is deprecated"),
            this.each(function () {
              var e = (this.getAttribute && this.getAttribute("class")) || "";
              e && s.data(this, "__className__", e),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    (!e && !1 !== t && s.data(this, "__className__")) || ""
                  );
            }));
      }),
      w = /^[a-z]/,
      x =
        /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap &&
      s.each(["height", "width", "reliableMarginRight"], function (e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r &&
          (s.cssHooks[t].get = function () {
            var e;
            return (b = !0), (e = r.apply(this, arguments)), (b = !1), e;
          });
      }),
      (s.swap = function (e, t, r, n) {
        var o,
          i,
          a = {};
        for (i in (b || u("jQuery.swap() is undocumented and deprecated"), t))
          (a[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((o = r.apply(e, n || [])), t)) e.style[i] = a[i];
        return o;
      }),
      e("3.4.0") &&
        "undefined" != typeof Proxy &&
        (s.cssProps = new Proxy(s.cssProps || {}, {
          set: function () {
            return (
              u("JQMIGRATE: jQuery.cssProps is deprecated"),
              Reflect.set.apply(this, arguments)
            );
          },
        })),
      s.cssNumber || (s.cssNumber = {}),
      (Q = s.fn.css),
      (s.fn.css = function (e, t) {
        var r,
          n,
          o = this;
        return e && "object" == typeof e && !Array.isArray(e)
          ? (s.each(e, function (e, t) {
              s.fn.css.call(o, e, t);
            }),
            this)
          : ("number" == typeof t &&
              ((r = j(e)),
              (n = r),
              (w.test(n) && x.test(n[0].toUpperCase() + n.slice(1))) ||
                s.cssNumber[r] ||
                u(
                  'Number-typed values are deprecated for jQuery.fn.css( "' +
                    e +
                    '", value )'
                )),
            Q.apply(this, arguments));
      });
    var A,
      k,
      S,
      M,
      N = s.data;
    (s.data = function (e, t, r) {
      var n, o, i;
      if (t && "object" == typeof t && 2 === arguments.length) {
        for (i in ((n = s.hasData(e) && N.call(this, e)), (o = {}), t))
          i !== j(i)
            ? (u("jQuery.data() always sets/gets camelCased names: " + i),
              (n[i] = t[i]))
            : (o[i] = t[i]);
        return N.call(this, e, o), t;
      }
      return t &&
        "string" == typeof t &&
        t !== j(t) &&
        (n = s.hasData(e) && N.call(this, e)) &&
        t in n
        ? (u("jQuery.data() always sets/gets camelCased names: " + t),
          2 < arguments.length && (n[t] = r),
          n[t])
        : N.apply(this, arguments);
    }),
      s.fx &&
        ((S = s.Tween.prototype.run),
        (M = function (e) {
          return e;
        }),
        (s.Tween.prototype.run = function () {
          1 < s.easing[this.easing].length &&
            (u(
              "'jQuery.easing." +
                this.easing.toString() +
                "' should use only one argument"
            ),
            (s.easing[this.easing] = M)),
            S.apply(this, arguments);
        }),
        (A = s.fx.interval || 13),
        (k = "jQuery.fx.interval is deprecated"),
        n.requestAnimationFrame &&
          Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return n.document.hidden || u(k), A;
            },
            set: function (e) {
              u(k), (A = e);
            },
          }));
    var R = s.fn.load,
      H = s.event.add,
      C = s.event.fix;
    (s.event.props = []),
      (s.event.fixHooks = {}),
      t(
        s.event.props,
        "concat",
        s.event.props.concat,
        "jQuery.event.props.concat() is deprecated and removed"
      ),
      (s.event.fix = function (e) {
        var t,
          r = e.type,
          n = this.fixHooks[r],
          o = s.event.props;
        if (o.length) {
          u("jQuery.event.props are deprecated and removed: " + o.join());
          while (o.length) s.event.addProp(o.pop());
        }
        if (
          n &&
          !n._migrated_ &&
          ((n._migrated_ = !0),
          u("jQuery.event.fixHooks are deprecated and removed: " + r),
          (o = n.props) && o.length)
        )
          while (o.length) s.event.addProp(o.pop());
        return (t = C.call(this, e)), n && n.filter ? n.filter(t, e) : t;
      }),
      (s.event.add = function (e, t) {
        return (
          e === n &&
            "load" === t &&
            "complete" === n.document.readyState &&
            u("jQuery(window).on('load'...) called after load event occurred"),
          H.apply(this, arguments)
        );
      }),
      s.each(["load", "unload", "error"], function (e, t) {
        s.fn[t] = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return "load" === t && "string" == typeof e[0]
            ? R.apply(this, e)
            : (u("jQuery.fn." + t + "() is deprecated"),
              e.splice(0, 0, t),
              arguments.length
                ? this.on.apply(this, e)
                : (this.triggerHandler.apply(this, e), this));
        };
      }),
      s.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, r) {
          s.fn[r] = function (e, t) {
            return (
              u("jQuery.fn." + r + "() event shorthand is deprecated"),
              0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            );
          };
        }
      ),
      s(function () {
        s(n.document).triggerHandler("ready");
      }),
      (s.event.special.ready = {
        setup: function () {
          this === n.document && u("'ready' event is deprecated");
        },
      }),
      s.fn.extend({
        bind: function (e, t, r) {
          return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r);
        },
        unbind: function (e, t) {
          return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t);
        },
        delegate: function (e, t, r, n) {
          return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n);
        },
        undelegate: function (e, t, r) {
          return (
            u("jQuery.fn.undelegate() is deprecated"),
            1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", r)
          );
        },
        hover: function (e, t) {
          return (
            u("jQuery.fn.hover() is deprecated"),
            this.on("mouseenter", e).on("mouseleave", t || e)
          );
        },
      });
    function T(e) {
      var t = n.document.implementation.createHTMLDocument("");
      return (t.body.innerHTML = e), t.body && t.body.innerHTML;
    }
    function P(e) {
      var t = e.replace(O, "<$1></$2>");
      t !== e &&
        T(e) !== T(t) &&
        u("HTML tags must be properly nested and closed: " + e);
    }
    var O =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      q = s.htmlPrefilter;
    (s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
      s.htmlPrefilter = function (e) {
        return P(e), e.replace(O, "<$1></$2>");
      };
    }),
      (s.htmlPrefilter = function (e) {
        return P(e), q(e);
      });
    var D,
      _ = s.fn.offset;
    (s.fn.offset = function () {
      var e = this[0];
      return !e || (e.nodeType && e.getBoundingClientRect)
        ? _.apply(this, arguments)
        : (u("jQuery.fn.offset() requires a valid DOM element"),
          arguments.length ? this : void 0);
    }),
      s.ajax &&
        ((D = s.param),
        (s.param = function (e, t) {
          var r = s.ajaxSettings && s.ajaxSettings.traditional;
          return (
            void 0 === t &&
              r &&
              (u(
                "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"
              ),
              (t = r)),
            D.call(this, e, t)
          );
        }));
    var E,
      F,
      J = s.fn.andSelf || s.fn.addBack;
    return (
      (s.fn.andSelf = function () {
        return (
          u(
            "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"
          ),
          J.apply(this, arguments)
        );
      }),
      s.Deferred &&
        ((E = s.Deferred),
        (F = [
          [
            "resolve",
            "done",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "resolved",
          ],
          [
            "reject",
            "fail",
            s.Callbacks("once memory"),
            s.Callbacks("once memory"),
            "rejected",
          ],
          ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")],
        ]),
        (s.Deferred = function (e) {
          var i = E(),
            a = i.promise();
          return (
            (i.pipe = a.pipe =
              function () {
                var o = arguments;
                return (
                  u("deferred.pipe() is deprecated"),
                  s
                    .Deferred(function (n) {
                      s.each(F, function (e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        i[t[1]](function () {
                          var e = r && r.apply(this, arguments);
                          e && "function" == typeof e.promise
                            ? e
                                .promise()
                                .done(n.resolve)
                                .fail(n.reject)
                                .progress(n.notify)
                            : n[t[0] + "With"](
                                this === a ? n.promise() : this,
                                r ? [e] : arguments
                              );
                        });
                      }),
                        (o = null);
                    })
                    .promise()
                );
              }),
            e && e.call(i, i),
            i
          );
        }),
        (s.Deferred.exceptionHook = E.exceptionHook)),
      s
    );
  });
var sbiajaxurl =
  "https://themebubble.com/demo/webify/creative/wp-admin/admin-ajax.php";
var runtime = (function (a) {
  "use strict";
  var u,
    t = Object.prototype,
    h = t.hasOwnProperty,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    e = r.asyncIterator || "@@asyncIterator",
    o = r.toStringTag || "@@toStringTag";
  function i(t, r, e) {
    return (
      Object.defineProperty(t, r, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      t[r]
    );
  }
  try {
    i({}, "");
  } catch (t) {
    i = function (t, r, e) {
      return (t[r] = e);
    };
  }
  function c(t, r, e, n) {
    var o,
      i,
      a,
      c,
      r = r && r.prototype instanceof v ? r : v,
      r = Object.create(r.prototype),
      n = new j(n || []);
    return (
      (r._invoke =
        ((o = t),
        (i = e),
        (a = n),
        (c = l),
        function (t, r) {
          if (c === p) throw new Error("Generator is already running");
          if (c === y) {
            if ("throw" === t) throw r;
            return k();
          }
          for (a.method = t, a.arg = r; ; ) {
            var e = a.delegate;
            if (e) {
              var n = (function t(r, e) {
                var n = r.iterator[e.method];
                if (n === u) {
                  if (((e.delegate = null), "throw" === e.method)) {
                    if (
                      r.iterator.return &&
                      ((e.method = "return"),
                      (e.arg = u),
                      t(r, e),
                      "throw" === e.method)
                    )
                      return g;
                    (e.method = "throw"),
                      (e.arg = new TypeError(
                        "The iterator does not provide a 'throw' method"
                      ));
                  }
                  return g;
                }
                var n = f(n, r.iterator, e.arg);
                if ("throw" === n.type)
                  return (
                    (e.method = "throw"),
                    (e.arg = n.arg),
                    (e.delegate = null),
                    g
                  );
                n = n.arg;
                if (!n)
                  return (
                    (e.method = "throw"),
                    (e.arg = new TypeError("iterator result is not an object")),
                    (e.delegate = null),
                    g
                  );
                {
                  if (!n.done) return n;
                  (e[r.resultName] = n.value),
                    (e.next = r.nextLoc),
                    "return" !== e.method && ((e.method = "next"), (e.arg = u));
                }
                e.delegate = null;
                return g;
              })(e, a);
              if (n) {
                if (n === g) continue;
                return n;
              }
            }
            if ("next" === a.method) a.sent = a._sent = a.arg;
            else if ("throw" === a.method) {
              if (c === l) throw ((c = y), a.arg);
              a.dispatchException(a.arg);
            } else "return" === a.method && a.abrupt("return", a.arg);
            c = p;
            n = f(o, i, a);
            if ("normal" === n.type) {
              if (((c = a.done ? y : s), n.arg !== g))
                return { value: n.arg, done: a.done };
            } else
              "throw" === n.type &&
                ((c = y), (a.method = "throw"), (a.arg = n.arg));
          }
        })),
      r
    );
  }
  function f(t, r, e) {
    try {
      return { type: "normal", arg: t.call(r, e) };
    } catch (t) {
      return { type: "throw", arg: t };
    }
  }
  a.wrap = c;
  var l = "suspendedStart",
    s = "suspendedYield",
    p = "executing",
    y = "completed",
    g = {};
  function v() {}
  function d() {}
  function m() {}
  var w = {};
  i(w, n, function () {
    return this;
  });
  (r = Object.getPrototypeOf), (r = r && r(r(O([]))));
  r && r !== t && h.call(r, n) && (w = r);
  var L = (m.prototype = v.prototype = Object.create(w));
  function x(t) {
    ["next", "throw", "return"].forEach(function (r) {
      i(t, r, function (t) {
        return this._invoke(r, t);
      });
    });
  }
  function b(a, c) {
    var r;
    this._invoke = function (e, n) {
      function t() {
        return new c(function (t, r) {
          !(function r(t, e, n, o) {
            t = f(a[t], a, e);
            if ("throw" !== t.type) {
              var i = t.arg;
              return (e = i.value) &&
                "object" == typeof e &&
                h.call(e, "__await")
                ? c.resolve(e.__await).then(
                    function (t) {
                      r("next", t, n, o);
                    },
                    function (t) {
                      r("throw", t, n, o);
                    }
                  )
                : c.resolve(e).then(
                    function (t) {
                      (i.value = t), n(i);
                    },
                    function (t) {
                      return r("throw", t, n, o);
                    }
                  );
            }
            o(t.arg);
          })(e, n, t, r);
        });
      }
      return (r = r ? r.then(t, t) : t());
    };
  }
  function E(t) {
    var r = { tryLoc: t[0] };
    1 in t && (r.catchLoc = t[1]),
      2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
      this.tryEntries.push(r);
  }
  function _(t) {
    var r = t.completion || {};
    (r.type = "normal"), delete r.arg, (t.completion = r);
  }
  function j(t) {
    (this.tryEntries = [{ tryLoc: "root" }]),
      t.forEach(E, this),
      this.reset(!0);
  }
  function O(r) {
    if (r) {
      var t = r[n];
      if (t) return t.call(r);
      if ("function" == typeof r.next) return r;
      if (!isNaN(r.length)) {
        var e = -1,
          t = function t() {
            for (; ++e < r.length; )
              if (h.call(r, e)) return (t.value = r[e]), (t.done = !1), t;
            return (t.value = u), (t.done = !0), t;
          };
        return (t.next = t);
      }
    }
    return { next: k };
  }
  function k() {
    return { value: u, done: !0 };
  }
  return (
    i(L, "constructor", (d.prototype = m)),
    i(m, "constructor", d),
    (d.displayName = i(m, o, "GeneratorFunction")),
    (a.isGeneratorFunction = function (t) {
      t = "function" == typeof t && t.constructor;
      return (
        !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
      );
    }),
    (a.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, m)
          : ((t.__proto__ = m), i(t, o, "GeneratorFunction")),
        (t.prototype = Object.create(L)),
        t
      );
    }),
    (a.awrap = function (t) {
      return { __await: t };
    }),
    x(b.prototype),
    i(b.prototype, e, function () {
      return this;
    }),
    (a.AsyncIterator = b),
    (a.async = function (t, r, e, n, o) {
      void 0 === o && (o = Promise);
      var i = new b(c(t, r, e, n), o);
      return a.isGeneratorFunction(r)
        ? i
        : i.next().then(function (t) {
            return t.done ? t.value : i.next();
          });
    }),
    x(L),
    i(L, o, "Generator"),
    i(L, n, function () {
      return this;
    }),
    i(L, "toString", function () {
      return "[object Generator]";
    }),
    (a.keys = function (e) {
      var t,
        n = [];
      for (t in e) n.push(t);
      return (
        n.reverse(),
        function t() {
          for (; n.length; ) {
            var r = n.pop();
            if (r in e) return (t.value = r), (t.done = !1), t;
          }
          return (t.done = !0), t;
        }
      );
    }),
    (a.values = O),
    (j.prototype = {
      constructor: j,
      reset: function (t) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = u),
          (this.done = !1),
          (this.delegate = null),
          (this.method = "next"),
          (this.arg = u),
          this.tryEntries.forEach(_),
          !t)
        )
          for (var r in this)
            "t" === r.charAt(0) &&
              h.call(this, r) &&
              !isNaN(+r.slice(1)) &&
              (this[r] = u);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (e) {
        if (this.done) throw e;
        var n = this;
        function t(t, r) {
          return (
            (i.type = "throw"),
            (i.arg = e),
            (n.next = t),
            r && ((n.method = "next"), (n.arg = u)),
            !!r
          );
        }
        for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
          var o = this.tryEntries[r],
            i = o.completion;
          if ("root" === o.tryLoc) return t("end");
          if (o.tryLoc <= this.prev) {
            var a = h.call(o, "catchLoc"),
              c = h.call(o, "finallyLoc");
            if (a && c) {
              if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
              if (this.prev < o.finallyLoc) return t(o.finallyLoc);
            } else if (a) {
              if (this.prev < o.catchLoc) return t(o.catchLoc, !0);
            } else {
              if (!c) throw new Error("try statement without catch or finally");
              if (this.prev < o.finallyLoc) return t(o.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, r) {
        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
          var n = this.tryEntries[e];
          if (
            n.tryLoc <= this.prev &&
            h.call(n, "finallyLoc") &&
            this.prev < n.finallyLoc
          ) {
            var o = n;
            break;
          }
        }
        var i = (o =
          o &&
          ("break" === t || "continue" === t) &&
          o.tryLoc <= r &&
          r <= o.finallyLoc
            ? null
            : o)
          ? o.completion
          : {};
        return (
          (i.type = t),
          (i.arg = r),
          o
            ? ((this.method = "next"), (this.next = o.finallyLoc), g)
            : this.complete(i)
        );
      },
      complete: function (t, r) {
        if ("throw" === t.type) throw t.arg;
        return (
          "break" === t.type || "continue" === t.type
            ? (this.next = t.arg)
            : "return" === t.type
            ? ((this.rval = this.arg = t.arg),
              (this.method = "return"),
              (this.next = "end"))
            : "normal" === t.type && r && (this.next = r),
          g
        );
      },
      finish: function (t) {
        for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
          var e = this.tryEntries[r];
          if (e.finallyLoc === t)
            return this.complete(e.completion, e.afterLoc), _(e), g;
        }
      },
      catch: function (t) {
        for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
          var e = this.tryEntries[r];
          if (e.tryLoc === t) {
            var n,
              o = e.completion;
            return "throw" === o.type && ((n = o.arg), _(e)), n;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function (t, r, e) {
        return (
          (this.delegate = { iterator: O(t), resultName: r, nextLoc: e }),
          "next" === this.method && (this.arg = u),
          g
        );
      },
    }),
    a
  );
})("object" == typeof module ? module.exports : {});
try {
  regeneratorRuntime = runtime;
} catch (t) {
  "object" == typeof globalThis
    ? (globalThis.regeneratorRuntime = runtime)
    : Function("r", "regeneratorRuntime = r")(runtime);
}
!(function (C) {
  "use strict";
  var r, e, o;
  (e = {}),
    ((o = function (t) {
      if (e[t]) return e[t].exports;
      var n = (e[t] = { i: t, l: !1, exports: {} });
      return r[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
    }).m = r =
      [
        function (t, n, r) {
          r(1), r(67), r(68), r(72), r(79), (t.exports = r(85));
        },
        function (t, n, r) {
          var e = r(2),
            o = r(36),
            i = r(57),
            u = r(56),
            r = r(62);
          e(
            { target: "Array", proto: !0 },
            {
              at: function (t) {
                var n = o(this),
                  r = i(n),
                  t = u(t),
                  t = 0 <= t ? t : r + t;
                return t < 0 || r <= t ? C : n[t];
              },
            }
          ),
            r("at");
        },
        function (t, n, r) {
          var a = r(3),
            p = r(4).f,
            s = r(40),
            l = r(43),
            y = r(34),
            v = r(50),
            d = r(61);
          t.exports = function (t, n) {
            var r,
              e,
              o,
              i = t.target,
              u = t.global,
              c = t.stat,
              f = u ? a : c ? a[i] || y(i, {}) : (a[i] || {}).prototype;
            if (f)
              for (r in n) {
                if (
                  ((e = n[r]),
                  (o = t.noTargetGet ? (o = p(f, r)) && o.value : f[r]),
                  !d(u ? r : i + (c ? "." : "#") + r, t.forced) && o !== C)
                ) {
                  if (typeof e == typeof o) continue;
                  v(e, o);
                }
                (t.sham || (o && o.sham)) && s(e, "sham", !0), l(f, r, e, t);
              }
          };
        },
        function (t, n) {
          function r(t) {
            return t && t.Math == Math && t;
          }
          t.exports =
            r("object" == typeof globalThis && globalThis) ||
            r("object" == typeof window && window) ||
            r("object" == typeof self && self) ||
            r("object" == typeof global && global) ||
            (function () {
              return this;
            })() ||
            Function("return this")();
        },
        function (t, n, r) {
          var e = r(5),
            o = r(7),
            i = r(8),
            u = r(9),
            c = r(10),
            f = r(15),
            a = r(35),
            p = r(38),
            s = Object.getOwnPropertyDescriptor;
          n.f = e
            ? s
            : function (t, n) {
                if (((t = c(t)), (n = f(n)), p))
                  try {
                    return s(t, n);
                  } catch (t) {}
                if (a(t, n)) return u(!o(i.f, t, n), t[n]);
              };
        },
        function (t, n, r) {
          r = r(6);
          t.exports = !r(function () {
            return (
              7 !=
              Object.defineProperty({}, 1, {
                get: function () {
                  return 7;
                },
              })[1]
            );
          });
        },
        function (t, n) {
          t.exports = function (t) {
            try {
              return !!t();
            } catch (t) {
              return !0;
            }
          };
        },
        function (t, n) {
          var r = Function.prototype.call;
          t.exports = r.bind
            ? r.bind(r)
            : function () {
                return r.apply(r, arguments);
              };
        },
        function (t, n, r) {
          var e = {}.propertyIsEnumerable,
            o = Object.getOwnPropertyDescriptor,
            i = o && !e.call({ 1: 2 }, 1);
          n.f = i
            ? function (t) {
                t = o(this, t);
                return !!t && t.enumerable;
              }
            : e;
        },
        function (t, n) {
          t.exports = function (t, n) {
            return {
              enumerable: !(1 & t),
              configurable: !(2 & t),
              writable: !(4 & t),
              value: n,
            };
          };
        },
        function (t, n, r) {
          var e = r(11),
            o = r(14);
          t.exports = function (t) {
            return e(o(t));
          };
        },
        function (t, n, r) {
          var e = r(3),
            o = r(12),
            i = r(6),
            u = r(13),
            c = e.Object,
            f = o("".split);
          t.exports = i(function () {
            return !c("z").propertyIsEnumerable(0);
          })
            ? function (t) {
                return "String" == u(t) ? f(t, "") : c(t);
              }
            : c;
        },
        function (t, n) {
          var r = Function.prototype,
            e = r.bind,
            o = r.call,
            i = e && e.bind(o);
          t.exports = e
            ? function (t) {
                return t && i(o, t);
              }
            : function (t) {
                return (
                  t &&
                  function () {
                    return o.apply(t, arguments);
                  }
                );
              };
        },
        function (t, n, r) {
          var r = r(12),
            e = r({}.toString),
            o = r("".slice);
          t.exports = function (t) {
            return o(e(t), 8, -1);
          };
        },
        function (t, n, r) {
          var e = r(3).TypeError;
          t.exports = function (t) {
            if (t == C) throw e("Can't call method on " + t);
            return t;
          };
        },
        function (t, n, r) {
          var e = r(16),
            o = r(19);
          t.exports = function (t) {
            t = e(t, "string");
            return o(t) ? t : t + "";
          };
        },
        function (t, n, r) {
          var e = r(3),
            o = r(7),
            i = r(17),
            u = r(19),
            c = r(26),
            f = r(29),
            r = r(30),
            a = e.TypeError,
            p = r("toPrimitive");
          t.exports = function (t, n) {
            if (!i(t) || u(t)) return t;
            var r = c(t, p);
            if (r) {
              if (((r = o(r, t, (n = n === C ? "default" : n))), !i(r) || u(r)))
                return r;
              throw a("Can't convert object to primitive value");
            }
            return f(t, (n = n === C ? "number" : n));
          };
        },
        function (t, n, r) {
          var e = r(18);
          t.exports = function (t) {
            return "object" == typeof t ? null !== t : e(t);
          };
        },
        function (t, n) {
          t.exports = function (t) {
            return "function" == typeof t;
          };
        },
        function (t, n, r) {
          var e = r(3),
            o = r(20),
            i = r(18),
            u = r(21),
            r = r(22),
            c = e.Object;
          t.exports = r
            ? function (t) {
                return "symbol" == typeof t;
              }
            : function (t) {
                var n = o("Symbol");
                return i(n) && u(n.prototype, c(t));
              };
        },
        function (t, n, r) {
          var e = r(3),
            o = r(18);
          t.exports = function (t, n) {
            return arguments.length < 2
              ? ((r = e[t]), o(r) ? r : C)
              : e[t] && e[t][n];
            var r;
          };
        },
        function (t, n, r) {
          r = r(12);
          t.exports = r({}.isPrototypeOf);
        },
        function (t, n, r) {
          r = r(23);
          t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
        },
        function (t, n, r) {
          var e = r(24),
            r = r(6);
          t.exports =
            !!Object.getOwnPropertySymbols &&
            !r(function () {
              var t = Symbol();
              return (
                !String(t) ||
                !(Object(t) instanceof Symbol) ||
                (!Symbol.sham && e && e < 41)
              );
            });
        },
        function (t, n, r) {
          var e,
            o,
            i = r(3),
            u = r(25),
            r = i.process,
            i = i.Deno,
            i = (r && r.versions) || (i && i.version),
            i = i && i.v8;
          !(o = i
            ? 0 < (e = i.split("."))[0] && e[0] < 4
              ? 1
              : +(e[0] + e[1])
            : o) &&
            u &&
            (!(e = u.match(/Edge\/(\d+)/)) || 74 <= e[1]) &&
            (e = u.match(/Chrome\/(\d+)/)) &&
            (o = +e[1]),
            (t.exports = o);
        },
        function (t, n, r) {
          r = r(20);
          t.exports = r("navigator", "userAgent") || "";
        },
        function (t, n, r) {
          var e = r(27);
          t.exports = function (t, n) {
            n = t[n];
            return null == n ? C : e(n);
          };
        },
        function (t, n, r) {
          var e = r(3),
            o = r(18),
            i = r(28),
            u = e.TypeError;
          t.exports = function (t) {
            if (o(t)) return t;
            throw u(i(t) + " is not a function");
          };
        },
        function (t, n, r) {
          var e = r(3).String;
          t.exports = function (t) {
            try {
              return e(t);
            } catch (t) {
              return "Object";
            }
          };
        },
        function (t, n, r) {
          var e = r(3),
            o = r(7),
            i = r(18),
            u = r(17),
            c = e.TypeError;
          t.exports = function (t, n) {
            var r, e;
            if ("string" === n && i((r = t.toString)) && !u((e = o(r, t))))
              return e;
            if (i((r = t.valueOf)) && !u((e = o(r, t)))) return e;
            if ("string" !== n && i((r = t.toString)) && !u((e = o(r, t))))
              return e;
            throw c("Can't convert object to primitive value");
          };
        },
        function (t, n, r) {
          var e = r(3),
            o = r(31),
            i = r(35),
            u = r(37),
            c = r(23),
            f = r(22),
            a = o("wks"),
            p = e.Symbol,
            s = p && p.for,
            l = f ? p : (p && p.withoutSetter) || u;
          t.exports = function (t) {
            var n;
            return (
              (i(a, t) && (c || "string" == typeof a[t])) ||
                ((n = "Symbol." + t),
                c && i(p, t) ? (a[t] = p[t]) : (a[t] = (f && s ? s : l)(n))),
              a[t]
            );
          };
        },
        function (t, n, r) {
          var e = r(32),
            o = r(33);
          (t.exports = function (t, n) {
            return o[t] || (o[t] = n !== C ? n : {});
          })("versions", []).push({
            version: "3.19.1",
            mode: e ? "pure" : "global",
            copyright: "© 2021 Denis Pushkarev (zloirock.ru)",
          });
        },
        function (t, n) {
          t.exports = !1;
        },
        function (t, n, r) {
          var e = r(3),
            o = r(34),
            r = "__core-js_shared__",
            r = e[r] || o(r, {});
          t.exports = r;
        },
        function (t, n, r) {
          var e = r(3),
            o = Object.defineProperty;
          t.exports = function (n, r) {
            try {
              o(e, n, { value: r, configurable: !0, writable: !0 });
            } catch (t) {
              e[n] = r;
            }
            return r;
          };
        },
        function (t, n, r) {
          var e = r(12),
            o = r(36),
            i = e({}.hasOwnProperty);
          t.exports =
            Object.hasOwn ||
            function (t, n) {
              return i(o(t), n);
            };
        },
        function (t, n, r) {
          var e = r(3),
            o = r(14),
            i = e.Object;
          t.exports = function (t) {
            return i(o(t));
          };
        },
        function (t, n, r) {
          var r = r(12),
            e = 0,
            o = Math.random(),
            i = r((1).toString);
          t.exports = function (t) {
            return "Symbol(" + (t === C ? "" : t) + ")_" + i(++e + o, 36);
          };
        },
        function (t, n, r) {
          var e = r(5),
            o = r(6),
            i = r(39);
          t.exports =
            !e &&
            !o(function () {
              return (
                7 !=
                Object.defineProperty(i("div"), "a", {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            });
        },
        function (t, n, r) {
          var e = r(3),
            r = r(17),
            o = e.document,
            i = r(o) && r(o.createElement);
          t.exports = function (t) {
            return i ? o.createElement(t) : {};
          };
        },
        function (t, n, r) {
          var e = r(5),
            o = r(41),
            i = r(9);
          t.exports = e
            ? function (t, n, r) {
                return o.f(t, n, i(1, r));
              }
            : function (t, n, r) {
                return (t[n] = r), t;
              };
        },
        function (t, n, r) {
          var e = r(3),
            o = r(5),
            i = r(38),
            u = r(42),
            c = r(15),
            f = e.TypeError,
            a = Object.defineProperty;
          n.f = o
            ? a
            : function (t, n, r) {
                if ((u(t), (n = c(n)), u(r), i))
                  try {
                    return a(t, n, r);
                  } catch (t) {}
                if ("get" in r || "set" in r)
                  throw f("Accessors not supported");
                return "value" in r && (t[n] = r.value), t;
              };
        },
        function (t, n, r) {
          var e = r(3),
            o = r(17),
            i = e.String,
            u = e.TypeError;
          t.exports = function (t) {
            if (o(t)) return t;
            throw u(i(t) + " is not an object");
          };
        },
        function (t, n, r) {
          var f = r(3),
            a = r(18),
            p = r(35),
            s = r(40),
            l = r(34),
            e = r(44),
            o = r(45),
            y = r(49).CONFIGURABLE,
            i = o.get,
            v = o.enforce,
            d = String(String).split("String");
          (t.exports = function (t, n, r, e) {
            var o = !!e && !!e.unsafe,
              i = !!e && !!e.enumerable,
              u = !!e && !!e.noTargetGet,
              c = e && e.name !== C ? e.name : n;
            a(r) &&
              ("Symbol(" === String(c).slice(0, 7) &&
                (c = "[" + String(c).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
              (!p(r, "name") || (y && r.name !== c)) && s(r, "name", c),
              (e = v(r)).source ||
                (e.source = d.join("string" == typeof c ? c : ""))),
              t !== f
                ? (o ? !u && t[n] && (i = !0) : delete t[n],
                  i ? (t[n] = r) : s(t, n, r))
                : i
                ? (t[n] = r)
                : l(n, r);
          })(Function.prototype, "toString", function () {
            return (a(this) && i(this).source) || e(this);
          });
        },
        function (t, n, r) {
          var e = r(12),
            o = r(18),
            r = r(33),
            i = e(Function.toString);
          o(r.inspectSource) ||
            (r.inspectSource = function (t) {
              return i(t);
            }),
            (t.exports = r.inspectSource);
        },
        function (t, n, r) {
          var e,
            o,
            i,
            u,
            c,
            f,
            a,
            p,
            s = r(46),
            l = r(3),
            y = r(12),
            v = r(17),
            d = r(40),
            b = r(35),
            g = r(33),
            h = r(47),
            r = r(48),
            m = "Object already initialized",
            x = l.TypeError,
            l = l.WeakMap;
          (a =
            s || g.state
              ? ((e = g.state || (g.state = new l())),
                (o = y(e.get)),
                (i = y(e.has)),
                (u = y(e.set)),
                (c = function (t, n) {
                  if (i(e, t)) throw new x(m);
                  return (n.facade = t), u(e, t, n), n;
                }),
                (f = function (t) {
                  return o(e, t) || {};
                }),
                function (t) {
                  return i(e, t);
                })
              : ((r[(p = h("state"))] = !0),
                (c = function (t, n) {
                  if (b(t, p)) throw new x(m);
                  return (n.facade = t), d(t, p, n), n;
                }),
                (f = function (t) {
                  return b(t, p) ? t[p] : {};
                }),
                function (t) {
                  return b(t, p);
                })),
            (t.exports = {
              set: c,
              get: f,
              has: a,
              enforce: function (t) {
                return a(t) ? f(t) : c(t, {});
              },
              getterFor: function (r) {
                return function (t) {
                  var n;
                  if (!v(t) || (n = f(t)).type !== r)
                    throw x("Incompatible receiver, " + r + " required");
                  return n;
                };
              },
            });
        },
        function (t, n, r) {
          var e = r(3),
            o = r(18),
            r = r(44),
            e = e.WeakMap;
          t.exports = o(e) && /native code/.test(r(e));
        },
        function (t, n, r) {
          var e = r(31),
            o = r(37),
            i = e("keys");
          t.exports = function (t) {
            return i[t] || (i[t] = o(t));
          };
        },
        function (t, n) {
          t.exports = {};
        },
        function (t, n, r) {
          var e = r(5),
            o = r(35),
            i = Function.prototype,
            u = e && Object.getOwnPropertyDescriptor,
            r = o(i, "name"),
            o = r && "something" === function () {}.name,
            i = r && (!e || (e && u(i, "name").configurable));
          t.exports = { EXISTS: r, PROPER: o, CONFIGURABLE: i };
        },
        function (t, n, r) {
          var c = r(35),
            f = r(51),
            a = r(4),
            p = r(41);
          t.exports = function (t, n) {
            for (var r = f(n), e = p.f, o = a.f, i = 0; i < r.length; i++) {
              var u = r[i];
              c(t, u) || e(t, u, o(n, u));
            }
          };
        },
        function (t, n, r) {
          var e = r(20),
            o = r(12),
            i = r(52),
            u = r(60),
            c = r(42),
            f = o([].concat);
          t.exports =
            e("Reflect", "ownKeys") ||
            function (t) {
              var n = i.f(c(t)),
                r = u.f;
              return r ? f(n, r(t)) : n;
            };
        },
        function (t, n, r) {
          var e = r(53),
            o = r(59).concat("length", "prototype");
          n.f =
            Object.getOwnPropertyNames ||
            function (t) {
              return e(t, o);
            };
        },
        function (t, n, r) {
          var e = r(12),
            u = r(35),
            c = r(10),
            f = r(54).indexOf,
            a = r(48),
            p = e([].push);
          t.exports = function (t, n) {
            var r,
              e = c(t),
              o = 0,
              i = [];
            for (r in e) !u(a, r) && u(e, r) && p(i, r);
            for (; n.length > o; ) u(e, (r = n[o++])) && (~f(i, r) || p(i, r));
            return i;
          };
        },
        function (t, n, r) {
          var f = r(10),
            a = r(55),
            p = r(57),
            r = function (c) {
              return function (t, n, r) {
                var e,
                  o = f(t),
                  i = p(o),
                  u = a(r, i);
                if (c && n != n) {
                  for (; u < i; ) if ((e = o[u++]) != e) return !0;
                } else
                  for (; u < i; u++)
                    if ((c || u in o) && o[u] === n) return c || u || 0;
                return !c && -1;
              };
            };
          t.exports = { includes: r(!0), indexOf: r(!1) };
        },
        function (t, n, r) {
          var e = r(56),
            o = Math.max,
            i = Math.min;
          t.exports = function (t, n) {
            t = e(t);
            return t < 0 ? o(t + n, 0) : i(t, n);
          };
        },
        function (t, n) {
          var r = Math.ceil,
            e = Math.floor;
          t.exports = function (t) {
            t = +t;
            return t != t || 0 == t ? 0 : (0 < t ? e : r)(t);
          };
        },
        function (t, n, r) {
          var e = r(58);
          t.exports = function (t) {
            return e(t.length);
          };
        },
        function (t, n, r) {
          var e = r(56),
            o = Math.min;
          t.exports = function (t) {
            return 0 < t ? o(e(t), 9007199254740991) : 0;
          };
        },
        function (t, n) {
          t.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf",
          ];
        },
        function (t, n) {
          n.f = Object.getOwnPropertySymbols;
        },
        function (t, n, r) {
          var e = r(6),
            o = r(18),
            i = /#|\.prototype\./,
            r = function (t, n) {
              t = c[u(t)];
              return t == a || (t != f && (o(n) ? e(n) : !!n));
            },
            u = (r.normalize = function (t) {
              return String(t).replace(i, ".").toLowerCase();
            }),
            c = (r.data = {}),
            f = (r.NATIVE = "N"),
            a = (r.POLYFILL = "P");
          t.exports = r;
        },
        function (t, n, r) {
          var e = r(30),
            o = r(63),
            r = r(41),
            i = e("unscopables"),
            u = Array.prototype;
          u[i] == C && r.f(u, i, { configurable: !0, value: o(null) }),
            (t.exports = function (t) {
              u[i][t] = !0;
            });
        },
        function (t, n, r) {
          function e() {}
          function o(t) {
            return "<script>" + t + "</" + v + ">";
          }
          function i(t) {
            t.write(o("")), t.close();
            var n = t.parentWindow.Object;
            return (t = null), n;
          }
          var u,
            c = r(42),
            f = r(64),
            a = r(59),
            p = r(48),
            s = r(66),
            l = r(39),
            r = r(47),
            y = "prototype",
            v = "script",
            d = r("IE_PROTO"),
            b = function () {
              try {
                u = new ActiveXObject("htmlfile");
              } catch (t) {}
              var t;
              b =
                "undefined" == typeof document || (document.domain && u)
                  ? i(u)
                  : (((t = l("iframe")).style.display = "none"),
                    s.appendChild(t),
                    (t.src = String("javascript:")),
                    (t = t.contentWindow.document).open(),
                    t.write(o("document.F=Object")),
                    t.close(),
                    t.F);
              for (var n = a.length; n--; ) delete b[y][a[n]];
              return b();
            };
          (p[d] = !0),
            (t.exports =
              Object.create ||
              function (t, n) {
                var r;
                return (
                  null !== t
                    ? ((e[y] = c(t)), (r = new e()), (e[y] = null), (r[d] = t))
                    : (r = b()),
                  n === C ? r : f(r, n)
                );
              });
        },
        function (t, n, r) {
          var e = r(5),
            c = r(41),
            f = r(42),
            a = r(10),
            p = r(65);
          t.exports = e
            ? Object.defineProperties
            : function (t, n) {
                f(t);
                for (var r, e = a(n), o = p(n), i = o.length, u = 0; u < i; )
                  c.f(t, (r = o[u++]), e[r]);
                return t;
              };
        },
        function (t, n, r) {
          var e = r(53),
            o = r(59);
          t.exports =
            Object.keys ||
            function (t) {
              return e(t, o);
            };
        },
        function (t, n, r) {
          r = r(20);
          t.exports = r("document", "documentElement");
        },
        function (t, n, r) {
          r(2)({ target: "Object", stat: !0 }, { hasOwn: r(35) });
        },
        function (t, n, r) {
          var e = r(2),
            o = r(12),
            i = r(14),
            u = r(56),
            c = r(69),
            r = r(6),
            f = o("".charAt);
          e(
            {
              target: "String",
              proto: !0,
              forced: r(function () {
                return "\ud842" !== "𠮷".at(0);
              }),
            },
            {
              at: function (t) {
                var n = c(i(this)),
                  r = n.length,
                  t = u(t),
                  t = 0 <= t ? t : r + t;
                return t < 0 || r <= t ? C : f(n, t);
              },
            }
          );
        },
        function (t, n, r) {
          var e = r(3),
            o = r(70),
            i = e.String;
          t.exports = function (t) {
            if ("Symbol" === o(t))
              throw TypeError("Cannot convert a Symbol value to a string");
            return i(t);
          };
        },
        function (t, n, r) {
          var e = r(3),
            o = r(71),
            i = r(18),
            u = r(13),
            c = r(30)("toStringTag"),
            f = e.Object,
            a =
              "Arguments" ==
              u(
                (function () {
                  return arguments;
                })()
              );
          t.exports = o
            ? u
            : function (t) {
                var n;
                return t === C
                  ? "Undefined"
                  : null === t
                  ? "Null"
                  : "string" ==
                    typeof (t = (function (t, n) {
                      try {
                        return t[n];
                      } catch (t) {}
                    })((n = f(t)), c))
                  ? t
                  : a
                  ? u(n)
                  : "Object" == (t = u(n)) && i(n.callee)
                  ? "Arguments"
                  : t;
              };
        },
        function (t, n, r) {
          var e = {};
          (e[r(30)("toStringTag")] = "z"),
            (t.exports = "[object z]" === String(e));
        },
        function (t, n, r) {
          var e = r(73),
            o = r(57),
            i = r(56),
            u = e.aTypedArray;
          (0, e.exportTypedArrayMethod)("at", function (t) {
            var n = u(this),
              r = o(n),
              t = i(t),
              t = 0 <= t ? t : r + t;
            return t < 0 || r <= t ? C : n[t];
          });
        },
        function (t, n, r) {
          function e(t) {
            return !!s(t) && ((t = y(t)), l(M, t) || l(R, t));
          }
          var o,
            i,
            u,
            c = r(74),
            f = r(5),
            a = r(3),
            p = r(18),
            s = r(17),
            l = r(35),
            y = r(70),
            v = r(28),
            d = r(40),
            b = r(43),
            g = r(41).f,
            h = r(21),
            m = r(75),
            x = r(77),
            O = r(30),
            S = r(37),
            w = a.Int8Array,
            j = w && w.prototype,
            r = a.Uint8ClampedArray,
            r = r && r.prototype,
            A = w && m(w),
            T = j && m(j),
            w = Object.prototype,
            P = a.TypeError,
            O = O("toStringTag"),
            _ = S("TYPED_ARRAY_TAG"),
            E = S("TYPED_ARRAY_CONSTRUCTOR"),
            I = c && !!x && "Opera" !== y(a.opera),
            c = !1,
            M = {
              Int8Array: 1,
              Uint8Array: 1,
              Uint8ClampedArray: 1,
              Int16Array: 2,
              Uint16Array: 2,
              Int32Array: 4,
              Uint32Array: 4,
              Float32Array: 4,
              Float64Array: 8,
            },
            R = { BigInt64Array: 8, BigUint64Array: 8 };
          for (o in M) (u = (i = a[o]) && i.prototype) ? d(u, E, i) : (I = !1);
          for (o in R) (u = (i = a[o]) && i.prototype) && d(u, E, i);
          if (
            (!I || !p(A) || A === Function.prototype) &&
            ((A = function () {
              throw P("Incorrect invocation");
            }),
            I)
          )
            for (o in M) a[o] && x(a[o], A);
          if ((!I || !T || T === w) && ((T = A.prototype), I))
            for (o in M) a[o] && x(a[o].prototype, T);
          if ((I && m(r) !== T && x(r, T), f && !l(T, O)))
            for (o in ((c = !0),
            g(T, O, {
              get: function () {
                return s(this) ? this[_] : C;
              },
            }),
            M))
              a[o] && d(a[o], _, o);
          t.exports = {
            NATIVE_ARRAY_BUFFER_VIEWS: I,
            TYPED_ARRAY_CONSTRUCTOR: E,
            TYPED_ARRAY_TAG: c && _,
            aTypedArray: function (t) {
              if (e(t)) return t;
              throw P("Target is not a typed array");
            },
            aTypedArrayConstructor: function (t) {
              if (p(t) && (!x || h(A, t))) return t;
              throw P(v(t) + " is not a typed array constructor");
            },
            exportTypedArrayMethod: function (t, n, r) {
              if (f) {
                if (r)
                  for (var e in M) {
                    e = a[e];
                    if (e && l(e.prototype, t))
                      try {
                        delete e.prototype[t];
                      } catch (t) {}
                  }
                (T[t] && !r) || b(T, t, (!r && I && j[t]) || n);
              }
            },
            exportTypedArrayStaticMethod: function (t, n, r) {
              var e, o;
              if (f) {
                if (x) {
                  if (r)
                    for (e in M)
                      if ((o = a[e]) && l(o, t))
                        try {
                          delete o[t];
                        } catch (t) {}
                  if (A[t] && !r) return;
                  try {
                    return b(A, t, (!r && I && A[t]) || n);
                  } catch (t) {}
                }
                for (e in M) !(o = a[e]) || (o[t] && !r) || b(o, t, n);
              }
            },
            isView: function (t) {
              if (!s(t)) return !1;
              t = y(t);
              return "DataView" === t || l(M, t) || l(R, t);
            },
            isTypedArray: e,
            TypedArray: A,
            TypedArrayPrototype: T,
          };
        },
        function (t, n) {
          t.exports =
            "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
        },
        function (t, n, r) {
          var e = r(3),
            o = r(35),
            i = r(18),
            u = r(36),
            c = r(47),
            r = r(76),
            f = c("IE_PROTO"),
            a = e.Object,
            p = a.prototype;
          t.exports = r
            ? a.getPrototypeOf
            : function (t) {
                var n = u(t);
                if (o(n, f)) return n[f];
                t = n.constructor;
                return i(t) && n instanceof t
                  ? t.prototype
                  : n instanceof a
                  ? p
                  : null;
              };
        },
        function (t, n, r) {
          r = r(6);
          t.exports = !r(function () {
            function t() {}
            return (
              (t.prototype.constructor = null),
              Object.getPrototypeOf(new t()) !== t.prototype
            );
          });
        },
        function (t, n, r) {
          var o = r(12),
            i = r(42),
            u = r(78);
          t.exports =
            Object.setPrototypeOf ||
            ("__proto__" in {}
              ? (function () {
                  var r,
                    e = !1,
                    t = {};
                  try {
                    (r = o(
                      Object.getOwnPropertyDescriptor(
                        Object.prototype,
                        "__proto__"
                      ).set
                    ))(t, []),
                      (e = t instanceof Array);
                  } catch (t) {}
                  return function (t, n) {
                    return i(t), u(n), e ? r(t, n) : (t.__proto__ = n), t;
                  };
                })()
              : C);
        },
        function (t, n, r) {
          var e = r(3),
            o = r(18),
            i = e.String,
            u = e.TypeError;
          t.exports = function (t) {
            if ("object" == typeof t || o(t)) return t;
            throw u("Can't set " + i(t) + " as a prototype");
          };
        },
        function (t, n, r) {
          var e = r(3),
            o = r(12),
            i = r(6),
            u = r(27),
            c = r(80),
            f = r(73),
            a = r(82),
            p = r(83),
            s = r(24),
            l = r(84),
            y = e.Array,
            v = f.aTypedArray,
            f = f.exportTypedArrayMethod,
            d = e.Uint16Array,
            b = d && o(d.prototype.sort),
            o = !(
              !b ||
              (i(function () {
                b(new d(2), null);
              }) &&
                i(function () {
                  b(new d(2), {});
                }))
            ),
            g =
              !!b &&
              !i(function () {
                if (s) return s < 74;
                if (a) return a < 67;
                if (p) return !0;
                if (l) return l < 602;
                for (var t, n = new d(516), r = y(516), e = 0; e < 516; e++)
                  (t = e % 4), (n[e] = 515 - e), (r[e] = e - 2 * t + 3);
                for (
                  b(n, function (t, n) {
                    return ((t / 4) | 0) - ((n / 4) | 0);
                  }),
                    e = 0;
                  e < 516;
                  e++
                )
                  if (n[e] !== r[e]) return !0;
              });
          f(
            "sort",
            function (t) {
              return (
                t !== C && u(t),
                g
                  ? b(this, t)
                  : c(
                      v(this),
                      ((r = t),
                      function (t, n) {
                        return r !== C
                          ? +r(t, n) || 0
                          : n != n
                          ? -1
                          : t != t
                          ? 1
                          : 0 === t && 0 === n
                          ? 0 < 1 / t && 1 / n < 0
                            ? 1
                            : -1
                          : n < t;
                      })
                    )
              );
              var r;
            },
            !g || o
          );
        },
        function (t, n, r) {
          var o = r(81),
            i = Math.floor,
            u = function (t, n) {
              var r = t.length,
                e = i(r / 2);
              return r < 8 ? c(t, n) : f(t, u(o(t, 0, e), n), u(o(t, e), n), n);
            },
            c = function (t, n) {
              for (var r, e, o = t.length, i = 1; i < o; ) {
                for (r = t[(e = i)]; e && 0 < n(t[e - 1], r); ) t[e] = t[--e];
                e !== i++ && (t[e] = r);
              }
              return t;
            },
            f = function (t, n, r, e) {
              for (
                var o = n.length, i = r.length, u = 0, c = 0;
                u < o || c < i;

              )
                t[u + c] =
                  u < o && c < i
                    ? e(n[u], r[c]) <= 0
                      ? n[u++]
                      : r[c++]
                    : u < o
                    ? n[u++]
                    : r[c++];
              return t;
            };
          t.exports = u;
        },
        function (t, n, r) {
          r = r(12);
          t.exports = r([].slice);
        },
        function (t, n, r) {
          r = r(25).match(/firefox\/(\d+)/i);
          t.exports = !!r && +r[1];
        },
        function (t, n, r) {
          r = r(25);
          t.exports = /MSIE|Trident/.test(r);
        },
        function (t, n, r) {
          r = r(25).match(/AppleWebKit\/(\d+)\./);
          t.exports = !!r && +r[1];
        },
        function (t, n, r) {
          var e = r(2),
            o = r(3),
            r = r(86);
          e(
            {
              global: !0,
              bind: !0,
              enumerable: !0,
              forced: !o.setImmediate || !o.clearImmediate,
            },
            { setImmediate: r.set, clearImmediate: r.clear }
          );
        },
        function (t, n, r) {
          var e,
            o,
            i = r(3),
            u = r(87),
            c = r(88),
            f = r(18),
            a = r(35),
            p = r(6),
            s = r(66),
            l = r(81),
            y = r(39),
            v = r(89),
            d = r(90),
            b = i.setImmediate,
            g = i.clearImmediate,
            h = i.process,
            m = i.Dispatch,
            x = i.Function,
            O = i.MessageChannel,
            S = i.String,
            w = 0,
            j = {},
            A = "onreadystatechange";
          try {
            e = i.location;
          } catch (t) {}
          function T(t) {
            var n;
            a(j, t) && ((n = j[t]), delete j[t], n());
          }
          function P(t) {
            return function () {
              T(t);
            };
          }
          function _(t) {
            T(t.data);
          }
          r = function (t) {
            i.postMessage(S(t), e.protocol + "//" + e.host);
          };
          (b && g) ||
            ((b = function (t) {
              var n = l(arguments, 1);
              return (
                (j[++w] = function () {
                  u(f(t) ? t : x(t), C, n);
                }),
                o(w),
                w
              );
            }),
            (g = function (t) {
              delete j[t];
            }),
            d
              ? (o = function (t) {
                  h.nextTick(P(t));
                })
              : m && m.now
              ? (o = function (t) {
                  m.now(P(t));
                })
              : O && !v
              ? ((O = (v = new O()).port2),
                (v.port1.onmessage = _),
                (o = c(O.postMessage, O)))
              : i.addEventListener &&
                f(i.postMessage) &&
                !i.importScripts &&
                e &&
                "file:" !== e.protocol &&
                !p(r)
              ? ((o = r), i.addEventListener("message", _, !1))
              : (o =
                  A in y("script")
                    ? function (t) {
                        s.appendChild(y("script"))[A] = function () {
                          s.removeChild(this), T(t);
                        };
                      }
                    : function (t) {
                        setTimeout(P(t), 0);
                      })),
            (t.exports = { set: b, clear: g });
        },
        function (t, n) {
          var r = Function.prototype,
            e = r.apply,
            o = r.bind,
            i = r.call;
          t.exports =
            ("object" == typeof Reflect && Reflect.apply) ||
            (o
              ? i.bind(e)
              : function () {
                  return i.apply(e, arguments);
                });
        },
        function (t, n, r) {
          var e = r(12),
            o = r(27),
            i = e(e.bind);
          t.exports = function (t, n) {
            return (
              o(t),
              n === C
                ? t
                : i
                ? i(t, n)
                : function () {
                    return t.apply(n, arguments);
                  }
            );
          };
        },
        function (t, n, r) {
          r = r(25);
          t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(r);
        },
        function (t, n, r) {
          var e = r(13),
            r = r(3);
          t.exports = "process" == e(r.process);
        },
      ]),
    (o.c = e),
    (o.d = function (t, n, r) {
      o.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
    }),
    (o.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function (n, t) {
      if ((1 & t && (n = o(n)), 8 & t)) return n;
      if (4 & t && "object" == typeof n && n && n.__esModule) return n;
      var r = Object.create(null);
      if (
        (o.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: n }),
        2 & t && "string" != typeof n)
      )
        for (var e in n)
          o.d(
            r,
            e,
            function (t) {
              return n[t];
            }.bind(null, e)
          );
      return r;
    }),
    (o.n = function (t) {
      var n =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return o.d(n, "a", n), n;
    }),
    (o.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }),
    (o.p = ""),
    o((o.s = 0));
})();
!(function () {
  "use strict";
  const e = (e) => Math.abs(parseInt(e, 10)),
    t = (e, t) => {
      const r = new Map([
        ["init", "init"],
        ["validation_failed", "invalid"],
        ["acceptance_missing", "unaccepted"],
        ["spam", "spam"],
        ["aborted", "aborted"],
        ["mail_sent", "sent"],
        ["mail_failed", "failed"],
        ["submitting", "submitting"],
        ["resetting", "resetting"],
        ["payment_required", "payment-required"],
      ]);
      r.has(t) && (t = r.get(t)),
        Array.from(r.values()).includes(t) ||
          (t = `custom-${(t = (t = t
            .replace(/[^0-9a-z]+/i, " ")
            .trim()).replace(/\s+/, "-"))}`);
      const n = e.getAttribute("data-status");
      return (
        (e.wpcf7.status = t),
        e.setAttribute("data-status", t),
        e.classList.add(t),
        n && n !== t && e.classList.remove(n),
        t
      );
    },
    r = (e, t, r) => {
      const n = new CustomEvent(`wpcf7${t}`, { bubbles: !0, detail: r });
      "string" == typeof e && (e = document.querySelector(e)),
        e.dispatchEvent(n);
    },
    n = (e) => {
      const { root: t, namespace: r = "contact-form-7/v1" } = wpcf7.api;
      return a.reduceRight(
        (e, t) => (r) => t(r, e),
        (e) => {
          let n,
            a,
            {
              url: c,
              path: s,
              endpoint: o,
              headers: i,
              body: l,
              data: p,
              ...d
            } = e;
          "string" == typeof o &&
            ((n = r.replace(/^\/|\/$/g, "")),
            (a = o.replace(/^\//, "")),
            (s = a ? n + "/" + a : n)),
            "string" == typeof s &&
              (-1 !== t.indexOf("?") && (s = s.replace("?", "&")),
              (s = s.replace(/^\//, "")),
              (c = t + s)),
            (i = { Accept: "application/json, */*;q=0.1", ...i }),
            delete i["X-WP-Nonce"],
            p &&
              ((l = JSON.stringify(p)),
              (i["Content-Type"] = "application/json"));
          const u = {
              code: "fetch_error",
              message: "You are probably offline.",
            },
            f = {
              code: "invalid_json",
              message: "The response is not a valid JSON response.",
            };
          return window
            .fetch(c || s || window.location.href, {
              ...d,
              headers: i,
              body: l,
            })
            .then(
              (e) =>
                Promise.resolve(e)
                  .then((e) => {
                    if (e.status >= 200 && e.status < 300) return e;
                    throw e;
                  })
                  .then((e) => {
                    if (204 === e.status) return null;
                    if (e && e.json)
                      return e.json().catch(() => {
                        throw f;
                      });
                    throw f;
                  }),
              () => {
                throw u;
              }
            );
        }
      )(e);
    },
    a = [];
  function c(e) {
    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (wpcf7.blocked) return s(e), void t(e, "submitting");
    const c = new FormData(e);
    a.submitter &&
      a.submitter.name &&
      c.append(a.submitter.name, a.submitter.value);
    const o = {
        contactFormId: e.wpcf7.id,
        pluginVersion: e.wpcf7.pluginVersion,
        contactFormLocale: e.wpcf7.locale,
        unitTag: e.wpcf7.unitTag,
        containerPostId: e.wpcf7.containerPost,
        status: e.wpcf7.status,
        inputs: Array.from(c, (e) => {
          const t = e[0],
            r = e[1];
          return !t.match(/^_/) && { name: t, value: r };
        }).filter((e) => !1 !== e),
        formData: c,
      },
      i = (t) => {
        const r = document.createElement("li");
        r.setAttribute("id", t.error_id),
          t.idref
            ? r.insertAdjacentHTML(
                "beforeend",
                `<a href="#${t.idref}">${t.message}</a>`
              )
            : r.insertAdjacentText("beforeend", t.message),
          e.wpcf7.parent
            .querySelector(".screen-reader-response ul")
            .appendChild(r);
      },
      l = (t) => {
        const r = e.querySelector(t.into),
          n = r.querySelector(".wpcf7-form-control");
        n.classList.add("wpcf7-not-valid"),
          n.setAttribute("aria-describedby", t.error_id);
        const a = document.createElement("span");
        a.setAttribute("class", "wpcf7-not-valid-tip"),
          a.setAttribute("aria-hidden", "true"),
          a.insertAdjacentText("beforeend", t.message),
          r.appendChild(a),
          r.querySelectorAll("[aria-invalid]").forEach((e) => {
            e.setAttribute("aria-invalid", "true");
          }),
          n.closest(".use-floating-validation-tip") &&
            (n.addEventListener("focus", (e) => {
              a.setAttribute("style", "display: none");
            }),
            a.addEventListener("mouseover", (e) => {
              a.setAttribute("style", "display: none");
            }));
      };
    n({
      endpoint: `contact-forms/${e.wpcf7.id}/feedback`,
      method: "POST",
      body: c,
      wpcf7: { endpoint: "feedback", form: e, detail: o },
    })
      .then((n) => {
        const a = t(e, n.status);
        return (
          (o.status = n.status),
          (o.apiResponse = n),
          ["invalid", "unaccepted", "spam", "aborted"].includes(a)
            ? r(e, a, o)
            : ["sent", "failed"].includes(a) && r(e, `mail${a}`, o),
          r(e, "submit", o),
          n
        );
      })
      .then((t) => {
        t.posted_data_hash &&
          (e.querySelector('input[name="_wpcf7_posted_data_hash"]').value =
            t.posted_data_hash),
          "mail_sent" === t.status &&
            (e.reset(), (e.wpcf7.resetOnMailSent = !0)),
          t.invalid_fields &&
            (t.invalid_fields.forEach(i), t.invalid_fields.forEach(l)),
          e.wpcf7.parent
            .querySelector('.screen-reader-response [role="status"]')
            .insertAdjacentText("beforeend", t.message),
          e.querySelectorAll(".wpcf7-response-output").forEach((e) => {
            e.innerText = t.message;
          });
      })
      .catch((e) => console.error(e));
  }
  (n.use = (e) => {
    a.unshift(e);
  }),
    n.use((e, n) => {
      if (e.wpcf7 && "feedback" === e.wpcf7.endpoint) {
        const { form: n, detail: a } = e.wpcf7;
        s(n), r(n, "beforesubmit", a), t(n, "submitting");
      }
      return n(e);
    });
  const s = (e) => {
    (e.wpcf7.parent.querySelector(
      '.screen-reader-response [role="status"]'
    ).innerText = ""),
      (e.wpcf7.parent.querySelector(".screen-reader-response ul").innerText =
        ""),
      e.querySelectorAll(".wpcf7-not-valid-tip").forEach((e) => {
        e.remove();
      }),
      e.querySelectorAll("[aria-invalid]").forEach((e) => {
        e.setAttribute("aria-invalid", "false");
      }),
      e.querySelectorAll(".wpcf7-form-control").forEach((e) => {
        e.removeAttribute("aria-describedby"),
          e.classList.remove("wpcf7-not-valid");
      }),
      e.querySelectorAll(".wpcf7-response-output").forEach((e) => {
        e.innerText = "";
      });
  };
  function o(e) {
    const a = new FormData(e),
      c = {
        contactFormId: e.wpcf7.id,
        pluginVersion: e.wpcf7.pluginVersion,
        contactFormLocale: e.wpcf7.locale,
        unitTag: e.wpcf7.unitTag,
        containerPostId: e.wpcf7.containerPost,
        status: e.wpcf7.status,
        inputs: Array.from(a, (e) => {
          const t = e[0],
            r = e[1];
          return !t.match(/^_/) && { name: t, value: r };
        }).filter((e) => !1 !== e),
        formData: a,
      };
    n({
      endpoint: `contact-forms/${e.wpcf7.id}/refill`,
      method: "GET",
      wpcf7: { endpoint: "refill", form: e, detail: c },
    })
      .then((n) => {
        e.wpcf7.resetOnMailSent
          ? (delete e.wpcf7.resetOnMailSent, t(e, "mail_sent"))
          : t(e, "init"),
          (c.apiResponse = n),
          r(e, "reset", c);
      })
      .catch((e) => console.error(e));
  }
  n.use((e, r) => {
    if (e.wpcf7 && "refill" === e.wpcf7.endpoint) {
      const { form: r, detail: n } = e.wpcf7;
      s(r), t(r, "resetting");
    }
    return r(e);
  });
  const i = (e, t) => {
      for (const r in t) {
        const n = t[r];
        e.querySelectorAll(`input[name="${r}"]`).forEach((e) => {
          e.value = "";
        }),
          e.querySelectorAll(`img.wpcf7-captcha-${r}`).forEach((e) => {
            e.setAttribute("src", n);
          });
        const a = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
        a &&
          e
            .querySelectorAll(`input[name="_wpcf7_captcha_challenge_${r}"]`)
            .forEach((e) => {
              e.value = a[1];
            });
      }
    },
    l = (e, t) => {
      for (const r in t) {
        const n = t[r][0],
          a = t[r][1];
        e.querySelectorAll(`.wpcf7-form-control-wrap.${r}`).forEach((e) => {
          (e.querySelector(`input[name="${r}"]`).value = ""),
            (e.querySelector(".wpcf7-quiz-label").textContent = n),
            (e.querySelector(`input[name="_wpcf7_quiz_answer_${r}"]`).value =
              a);
        });
      }
    };
  function p(t) {
    const r = new FormData(t);
    (t.wpcf7 = {
      id: e(r.get("_wpcf7")),
      status: t.getAttribute("data-status"),
      pluginVersion: r.get("_wpcf7_version"),
      locale: r.get("_wpcf7_locale"),
      unitTag: r.get("_wpcf7_unit_tag"),
      containerPost: e(r.get("_wpcf7_container_post")),
      parent: t.closest(".wpcf7"),
    }),
      t.querySelectorAll(".has-spinner").forEach((e) => {
        e.insertAdjacentHTML("afterend", '<span class="wpcf7-spinner"></span>');
      }),
      ((e) => {
        e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t) => {
          t.addEventListener("change", (t) => {
            const r = t.target.getAttribute("name");
            e.querySelectorAll(`input[type="checkbox"][name="${r}"]`).forEach(
              (e) => {
                e !== t.target && (e.checked = !1);
              }
            );
          });
        });
      })(t),
      ((e) => {
        e.querySelectorAll(".has-free-text").forEach((t) => {
          const r = t.querySelector("input.wpcf7-free-text"),
            n = t.querySelector('input[type="checkbox"], input[type="radio"]');
          (r.disabled = !n.checked),
            e.addEventListener("change", (e) => {
              (r.disabled = !n.checked),
                e.target === n && n.checked && r.focus();
            });
        });
      })(t),
      ((e) => {
        e.querySelectorAll(".wpcf7-validates-as-url").forEach((e) => {
          e.addEventListener("change", (t) => {
            let r = e.value.trim();
            r &&
              !r.match(/^[a-z][a-z0-9.+-]*:/i) &&
              -1 !== r.indexOf(".") &&
              ((r = r.replace(/^\/+/, "")), (r = "http://" + r)),
              (e.value = r);
          });
        });
      })(t),
      ((e) => {
        if (
          !e.querySelector(".wpcf7-acceptance") ||
          e.classList.contains("wpcf7-acceptance-as-validation")
        )
          return;
        const t = () => {
          let t = !0;
          e.querySelectorAll(".wpcf7-acceptance").forEach((e) => {
            if (!t || e.classList.contains("optional")) return;
            const r = e.querySelector('input[type="checkbox"]');
            ((e.classList.contains("invert") && r.checked) ||
              (!e.classList.contains("invert") && !r.checked)) &&
              (t = !1);
          }),
            e.querySelectorAll(".wpcf7-submit").forEach((e) => {
              e.disabled = !t;
            });
        };
        t(),
          e.addEventListener("change", (e) => {
            t();
          }),
          e.addEventListener("wpcf7reset", (e) => {
            t();
          });
      })(t),
      ((t) => {
        const r = (t, r) => {
            const n = e(t.getAttribute("data-starting-value")),
              a = e(t.getAttribute("data-maximum-value")),
              c = e(t.getAttribute("data-minimum-value")),
              s = t.classList.contains("down")
                ? n - r.value.length
                : r.value.length;
            t.setAttribute("data-current-value", s),
              (t.innerText = s),
              a && a < r.value.length
                ? t.classList.add("too-long")
                : t.classList.remove("too-long"),
              c && r.value.length < c
                ? t.classList.add("too-short")
                : t.classList.remove("too-short");
          },
          n = (e) => {
            (e = { init: !1, ...e }),
              t.querySelectorAll(".wpcf7-character-count").forEach((n) => {
                const a = n.getAttribute("data-target-name"),
                  c = t.querySelector(`[name="${a}"]`);
                c &&
                  ((c.value = c.defaultValue),
                  r(n, c),
                  e.init &&
                    c.addEventListener("keyup", (e) => {
                      r(n, c);
                    }));
              });
          };
        n({ init: !0 }),
          t.addEventListener("wpcf7reset", (e) => {
            n();
          });
      })(t),
      window.addEventListener("load", (e) => {
        wpcf7.cached && t.reset();
      }),
      t.addEventListener("reset", (e) => {
        wpcf7.reset(t);
      }),
      t.addEventListener("submit", (e) => {
        const r = e.submitter;
        wpcf7.submit(t, { submitter: r }), e.preventDefault();
      }),
      t.addEventListener("wpcf7submit", (e) => {
        e.detail.apiResponse.captcha && i(t, e.detail.apiResponse.captcha),
          e.detail.apiResponse.quiz && l(t, e.detail.apiResponse.quiz);
      }),
      t.addEventListener("wpcf7reset", (e) => {
        e.detail.apiResponse.captcha && i(t, e.detail.apiResponse.captcha),
          e.detail.apiResponse.quiz && l(t, e.detail.apiResponse.quiz);
      });
  }
  document.addEventListener("DOMContentLoaded", (e) => {
    var t;
    if ("undefined" == typeof wpcf7)
      return void console.error("wpcf7 is not defined.");
    if (void 0 === wpcf7.api)
      return void console.error("wpcf7.api is not defined.");
    if ("function" != typeof window.fetch)
      return void console.error("Your browser doesn't support window.fetch().");
    if ("function" != typeof window.FormData)
      return void console.error(
        "Your browser doesn't support window.FormData()."
      );
    const r = document.querySelectorAll(".wpcf7 > form");
    "function" == typeof r.forEach
      ? ((wpcf7 = {
          init: p,
          submit: c,
          reset: o,
          ...(null !== (t = wpcf7) && void 0 !== t ? t : {}),
        }),
        r.forEach((e) => wpcf7.init(e)))
      : console.error("Your browser doesn't support NodeList.forEach().");
  });
})(); /*! This file is auto-generated */
window.addComment = (function (v) {
  var I,
    C,
    h,
    E = v.document,
    b = {
      commentReplyClass: "comment-reply-link",
      commentReplyTitleId: "reply-title",
      cancelReplyId: "cancel-comment-reply-link",
      commentFormId: "commentform",
      temporaryFormId: "wp-temp-form-div",
      parentIdFieldId: "comment_parent",
      postIdFieldId: "comment_post_ID",
    },
    e = v.MutationObserver || v.WebKitMutationObserver || v.MozMutationObserver,
    r = "querySelector" in E && "addEventListener" in v,
    n = !!E.documentElement.dataset;
  function t() {
    d(), e && new e(o).observe(E.body, { childList: !0, subtree: !0 });
  }
  function d(e) {
    if (r && ((I = g(b.cancelReplyId)), (C = g(b.commentFormId)), I)) {
      I.addEventListener("touchstart", l), I.addEventListener("click", l);
      function t(e) {
        if ((e.metaKey || e.ctrlKey) && 13 === e.keyCode)
          return (
            C.removeEventListener("keydown", t),
            e.preventDefault(),
            C.submit.click(),
            !1
          );
      }
      C && C.addEventListener("keydown", t);
      for (
        var n,
          d = (function (e) {
            var t = b.commentReplyClass;
            (e && e.childNodes) || (e = E);
            t = E.getElementsByClassName
              ? e.getElementsByClassName(t)
              : e.querySelectorAll("." + t);
            return t;
          })(e),
          o = 0,
          i = d.length;
        o < i;
        o++
      )
        (n = d[o]).addEventListener("touchstart", a),
          n.addEventListener("click", a);
    }
  }
  function l(e) {
    var t,
      n,
      d = g(b.temporaryFormId);
    d &&
      h &&
      ((g(b.parentIdFieldId).value = "0"),
      (t = d.textContent),
      d.parentNode.replaceChild(h, d),
      (this.style.display = "none"),
      (n =
        (d = (n = g(b.commentReplyTitleId)) && n.firstChild) && d.nextSibling),
      d &&
        d.nodeType === Node.TEXT_NODE &&
        t &&
        (n &&
          "A" === n.nodeName &&
          n.id !== b.cancelReplyId &&
          (n.style.display = ""),
        (d.textContent = t)),
      e.preventDefault());
  }
  function a(e) {
    var t = g(b.commentReplyTitleId),
      n = t && t.firstChild.textContent,
      d = this,
      o = m(d, "belowelement"),
      i = m(d, "commentid"),
      r = m(d, "respondelement"),
      t = m(d, "postid"),
      n = m(d, "replyto") || n;
    o &&
      i &&
      r &&
      t &&
      !1 === v.addComment.moveForm(o, i, r, t, n) &&
      e.preventDefault();
  }
  function o(e) {
    for (var t = e.length; t--; ) if (e[t].addedNodes.length) return void d();
  }
  function m(e, t) {
    return n ? e.dataset[t] : e.getAttribute("data-" + t);
  }
  function g(e) {
    return E.getElementById(e);
  }
  return (
    r && "loading" !== E.readyState
      ? t()
      : r && v.addEventListener("DOMContentLoaded", t, !1),
    {
      init: d,
      moveForm: function (e, t, n, d, o) {
        var i = g(e);
        h = g(n);
        var r,
          l,
          a,
          m,
          c,
          s = g(b.parentIdFieldId),
          y = g(b.postIdFieldId),
          p = (c = g(b.commentReplyTitleId)) && c.firstChild,
          u = p && p.nextSibling;
        if (i && h && s) {
          void 0 === o && (o = p && p.textContent),
            (m = h),
            (e = b.temporaryFormId),
            (n = g(e)),
            (c = (c = g(b.commentReplyTitleId))
              ? c.firstChild.textContent
              : ""),
            n ||
              (((n = E.createElement("div")).id = e),
              (n.style.display = "none"),
              (n.textContent = c),
              m.parentNode.insertBefore(n, m)),
            d && y && (y.value = d),
            (s.value = t),
            (I.style.display = ""),
            i.parentNode.insertBefore(h, i.nextSibling),
            p &&
              p.nodeType === Node.TEXT_NODE &&
              (u &&
                "A" === u.nodeName &&
                u.id !== b.cancelReplyId &&
                (u.style.display = "none"),
              (p.textContent = o)),
            (I.onclick = function () {
              return !1;
            });
          try {
            for (var f = 0; f < C.elements.length; f++)
              if (
                ((r = C.elements[f]),
                (l = !1),
                "getComputedStyle" in v
                  ? (a = v.getComputedStyle(r))
                  : E.documentElement.currentStyle && (a = r.currentStyle),
                ((r.offsetWidth <= 0 && r.offsetHeight <= 0) ||
                  "hidden" === a.visibility) &&
                  (l = !0),
                "hidden" !== r.type && !r.disabled && !l)
              ) {
                r.focus();
                break;
              }
          } catch (e) {}
          return !1;
        }
      },
    }
  );
})(window);
/*!
 * Plugin: jQuery Parallax
 * Version 1.1.3
 * Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/
 */
!(function (a) {
  var b = a(window),
    c = b.height();
  b.resize(function () {
    c = b.height();
  }),
    (a.fn.parallax = function (d, e, f) {
      function k() {
        var f = b.scrollTop();
        g.each(function () {
          var b = a(this),
            j = b.offset().top,
            k = h(b);
          j + k < f ||
            j > f + c ||
            g.css(
              "backgroundPosition",
              d + " " + Math.round((i - f) * e) + "px"
            );
        });
      }
      var h,
        i,
        g = a(this);
      g.each(function () {
        i = g.offset().top;
      }),
        (h = f
          ? function (a) {
              return a.outerHeight(!0);
            }
          : function (a) {
              return a.height();
            }),
        (arguments.length < 1 || null === d) && (d = "50%"),
        (arguments.length < 2 || null === e) && (e = 0.1),
        (arguments.length < 3 || null === f) && (f = !0),
        b.bind("scroll", k).resize(k),
        k();
    });
})(jQuery);
/*! formstone v0.8.19 [core.js] 2015-09-29 | MIT License | formstone.it */
var Formstone = (window.Formstone = (function (a, b, c) {
  "use strict";
  function d(a) {
    m.Plugins[a].initialized ||
      (m.Plugins[a].methods._setup.call(c), (m.Plugins[a].initialized = !0));
  }
  function e(a, b, c, d) {
    var e,
      f = { raw: {} };
    d = d || {};
    for (e in d)
      d.hasOwnProperty(e) &&
        ("classes" === a
          ? ((f.raw[d[e]] = b + "-" + d[e]), (f[d[e]] = "." + b + "-" + d[e]))
          : ((f.raw[e] = d[e]), (f[e] = d[e] + "." + b)));
    for (e in c)
      c.hasOwnProperty(e) &&
        ("classes" === a
          ? ((f.raw[e] = c[e].replace(/{ns}/g, b)),
            (f[e] = c[e].replace(/{ns}/g, "." + b)))
          : ((f.raw[e] = c[e].replace(/.{ns}/g, "")),
            (f[e] = c[e].replace(/{ns}/g, b))));
    return f;
  }
  function f() {
    var a,
      b = {
        transition: "transitionend",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        WebkitTransition: "webkitTransitionEnd",
      },
      d = ["transition", "-webkit-transition"],
      e = {
        transform: "transform",
        MozTransform: "-moz-transform",
        OTransform: "-o-transform",
        msTransform: "-ms-transform",
        webkitTransform: "-webkit-transform",
      },
      f = "transitionend",
      g = "",
      h = "",
      i = c.createElement("div");
    for (a in b)
      if (b.hasOwnProperty(a) && a in i.style) {
        (f = b[a]), (m.support.transition = !0);
        break;
      }
    p.transitionEnd = f + ".{ns}";
    for (a in d)
      if (d.hasOwnProperty(a) && d[a] in i.style) {
        g = d[a];
        break;
      }
    m.transition = g;
    for (a in e)
      if (e.hasOwnProperty(a) && e[a] in i.style) {
        (m.support.transform = !0), (h = e[a]);
        break;
      }
    m.transform = h;
  }
  function g() {
    (m.windowWidth = m.$window.width()),
      (m.windowHeight = m.$window.height()),
      (q = l.startTimer(q, r, h));
  }
  function h() {
    for (var a in m.ResizeHandlers)
      m.ResizeHandlers.hasOwnProperty(a) &&
        m.ResizeHandlers[a].callback.call(b, m.windowWidth, m.windowHeight);
  }
  function i() {
    if (m.support.raf) {
      m.window.requestAnimationFrame(i);
      for (var a in m.RAFHandlers)
        m.RAFHandlers.hasOwnProperty(a) && m.RAFHandlers[a].callback.call(b);
    }
  }
  function j(a, b) {
    return parseInt(a.priority) - parseInt(b.priority);
  }
  var k = function () {
      (this.Version = "0.8.19"),
        (this.Plugins = {}),
        (this.DontConflict = !1),
        (this.Conflicts = { fn: {} }),
        (this.ResizeHandlers = []),
        (this.RAFHandlers = []),
        (this.window = b),
        (this.$window = a(b)),
        (this.document = c),
        (this.$document = a(c)),
        (this.$body = null),
        (this.windowWidth = 0),
        (this.windowHeight = 0),
        (this.userAgent =
          b.navigator.userAgent || b.navigator.vendor || b.opera),
        (this.isFirefox = /Firefox/i.test(this.userAgent)),
        (this.isChrome = /Chrome/i.test(this.userAgent)),
        (this.isSafari = /Safari/i.test(this.userAgent) && !this.isChrome),
        (this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
          this.userAgent
        )),
        (this.isFirefoxMobile = this.isFirefox && this.isMobile),
        (this.transform = null),
        (this.transition = null),
        (this.support = {
          file: !!(b.File && b.FileList && b.FileReader),
          history: !!(
            b.history &&
            b.history.pushState &&
            b.history.replaceState
          ),
          matchMedia: !(!b.matchMedia && !b.msMatchMedia),
          pointer: !!b.PointerEvent,
          raf: !(!b.requestAnimationFrame || !b.cancelAnimationFrame),
          touch: !!(
            "ontouchstart" in b ||
            (b.DocumentTouch && c instanceof b.DocumentTouch)
          ),
          transition: !1,
          transform: !1,
        });
    },
    l = {
      killEvent: function (a, b) {
        try {
          a.preventDefault(),
            a.stopPropagation(),
            b && a.stopImmediatePropagation();
        } catch (c) {}
      },
      startTimer: function (a, b, c, d) {
        return l.clearTimer(a), d ? setInterval(c, b) : setTimeout(c, b);
      },
      clearTimer: function (a, b) {
        a && (b ? clearInterval(a) : clearTimeout(a), (a = null));
      },
      sortAsc: function (a, b) {
        return parseInt(a, 10) - parseInt(b, 10);
      },
      sortDesc: function (a, b) {
        return parseInt(b, 10) - parseInt(a, 10);
      },
    },
    m = new k(),
    n = a.Deferred(),
    o = { base: "{ns}", element: "{ns}-element" },
    p = {
      namespace: ".{ns}",
      beforeUnload: "beforeunload.{ns}",
      blur: "blur.{ns}",
      change: "change.{ns}",
      click: "click.{ns}",
      dblClick: "dblclick.{ns}",
      drag: "drag.{ns}",
      dragEnd: "dragend.{ns}",
      dragEnter: "dragenter.{ns}",
      dragLeave: "dragleave.{ns}",
      dragOver: "dragover.{ns}",
      dragStart: "dragstart.{ns}",
      drop: "drop.{ns}",
      error: "error.{ns}",
      focus: "focus.{ns}",
      focusIn: "focusin.{ns}",
      focusOut: "focusout.{ns}",
      input: "input.{ns}",
      keyDown: "keydown.{ns}",
      keyPress: "keypress.{ns}",
      keyUp: "keyup.{ns}",
      load: "load.{ns}",
      mouseDown: "mousedown.{ns}",
      mouseEnter: "mouseenter.{ns}",
      mouseLeave: "mouseleave.{ns}",
      mouseMove: "mousemove.{ns}",
      mouseOut: "mouseout.{ns}",
      mouseOver: "mouseover.{ns}",
      mouseUp: "mouseup.{ns}",
      panStart: "panstart.{ns}",
      pan: "pan.{ns}",
      panEnd: "panend.{ns}",
      resize: "resize.{ns}",
      scaleStart: "scalestart.{ns}",
      scaleEnd: "scaleend.{ns}",
      scale: "scale.{ns}",
      scroll: "scroll.{ns}",
      select: "select.{ns}",
      swipe: "swipe.{ns}",
      touchCancel: "touchcancel.{ns}",
      touchEnd: "touchend.{ns}",
      touchLeave: "touchleave.{ns}",
      touchMove: "touchmove.{ns}",
      touchStart: "touchstart.{ns}",
    };
  (k.prototype.NoConflict = function () {
    m.DontConflict = !0;
    for (var b in m.Plugins)
      m.Plugins.hasOwnProperty(b) &&
        ((a[b] = m.Conflicts[b]), (a.fn[b] = m.Conflicts.fn[b]));
  }),
    (k.prototype.Plugin = function (c, f) {
      return (
        (m.Plugins[c] = (function (c, d) {
          function f(b) {
            var e,
              f,
              g,
              i = "object" === a.type(b),
              j = this,
              k = a();
            for (
              b = a.extend(!0, {}, d.defaults || {}, i ? b : {}),
                f = 0,
                g = j.length;
              g > f;
              f++
            )
              if (((e = j.eq(f)), !h(e))) {
                var l = "__" + d.guid++,
                  m = d.classes.raw.base + l,
                  n = e.data(c + "-options"),
                  o = a.extend(
                    !0,
                    { $el: e, guid: l, rawGuid: m, dotGuid: "." + m },
                    b,
                    "object" === a.type(n) ? n : {}
                  );
                e.addClass(d.classes.raw.element).data(s, o),
                  d.methods._construct.apply(
                    e,
                    [o].concat(Array.prototype.slice.call(arguments, i ? 1 : 0))
                  ),
                  (k = k.add(e));
              }
            for (f = 0, g = k.length; g > f; f++)
              (e = k.eq(f)), d.methods._postConstruct.apply(e, [h(e)]);
            return j;
          }
          function g() {
            d.functions.iterate.apply(
              this,
              [d.methods._destruct].concat(
                Array.prototype.slice.call(arguments, 1)
              )
            ),
              this.removeClass(d.classes.raw.element).removeData(s);
          }
          function h(a) {
            return a.data(s);
          }
          function i(b) {
            if (this instanceof a) {
              var c = d.methods[b];
              return "object" !== a.type(b) && b
                ? c && 0 !== b.indexOf("_")
                  ? d.functions.iterate.apply(
                      this,
                      [c].concat(Array.prototype.slice.call(arguments, 1))
                    )
                  : this
                : f.apply(this, arguments);
            }
          }
          function k(c) {
            var e = d.utilities[c] || d.utilities._initialize || !1;
            return e
              ? e.apply(
                  b,
                  Array.prototype.slice.call(
                    arguments,
                    "object" === a.type(c) ? 0 : 1
                  )
                )
              : void 0;
          }
          function n(b) {
            d.defaults = a.extend(!0, d.defaults, b || {});
          }
          function q(b) {
            for (var c = this, d = 0, e = c.length; e > d; d++) {
              var f = c.eq(d),
                g = h(f) || {};
              "undefined" !== a.type(g.$el) &&
                b.apply(
                  f,
                  [g].concat(Array.prototype.slice.call(arguments, 1))
                );
            }
            return c;
          }
          var r = "fs-" + c,
            s =
              "fs" +
              c.replace(/(^|\s)([a-z])/g, function (a, b, c) {
                return b + c.toUpperCase();
              });
          return (
            (d.initialized = !1),
            (d.priority = d.priority || 10),
            (d.classes = e("classes", r, o, d.classes)),
            (d.events = e("events", c, p, d.events)),
            (d.functions = a.extend(
              { getData: h, iterate: q },
              l,
              d.functions
            )),
            (d.methods = a.extend(
              !0,
              {
                _setup: a.noop,
                _construct: a.noop,
                _postConstruct: a.noop,
                _destruct: a.noop,
                _resize: !1,
                destroy: g,
              },
              d.methods
            )),
            (d.utilities = a.extend(
              !0,
              { _initialize: !1, _delegate: !1, defaults: n },
              d.utilities
            )),
            d.widget &&
              ((m.Conflicts.fn[c] = a.fn[c]),
              (a.fn[s] = i),
              m.DontConflict || (a.fn[c] = a.fn[s])),
            (m.Conflicts[c] = a[c]),
            (a[s] = d.utilities._delegate || k),
            m.DontConflict || (a[c] = a[s]),
            (d.namespace = c),
            (d.namespaceClean = s),
            (d.guid = 0),
            d.methods._resize &&
              (m.ResizeHandlers.push({
                namespace: c,
                priority: d.priority,
                callback: d.methods._resize,
              }),
              m.ResizeHandlers.sort(j)),
            d.methods._raf &&
              (m.RAFHandlers.push({
                namespace: c,
                priority: d.priority,
                callback: d.methods._raf,
              }),
              m.RAFHandlers.sort(j)),
            d
          );
        })(c, f)),
        n.then(function () {
          d(c);
        }),
        m.Plugins[c]
      );
    });
  var q = null,
    r = 20;
  return (
    m.$window.on("resize.fs", g),
    g(),
    i(),
    a(function () {
      (m.$body = a("body")), n.resolve();
    }),
    (p.clickTouchStart = p.click + " " + p.touchStart),
    f(),
    m
  );
})(jQuery, window, document));
/*! formstone v0.8.19 [number.js] 2015-09-29 | MIT License | formstone.it */
!(function (a, b) {
  "use strict";
  function c() {
    s = b.$body;
  }
  function d(a) {
    var b = parseFloat(this.attr("min")),
      c = parseFloat(this.attr("max"));
    (a.min = b || 0 === b ? b : !1),
      (a.max = c || 0 === c ? c : !1),
      (a.step = parseFloat(this.attr("step")) || 1),
      (a.timer = null),
      (a.digits = l(a.step)),
      (a.disabled = this.prop("disabled"));
    var d = "";
    (d +=
      '<button type="button" class="' +
      [p.arrow, p.up].join(" ") +
      '">' +
      a.labels.up +
      "</button>"),
      (d +=
        '<button type="button" class="' +
        [p.arrow, p.down].join(" ") +
        '">' +
        a.labels.down +
        "</button>"),
      this.wrap(
        '<div class="' +
          [p.base, a.customClass, a.disabled ? p.disabled : ""].join(" ") +
          '"></div>'
      ).after(d),
      (a.$container = this.parent(o.base)),
      (a.$arrows = a.$container.find(o.arrow)),
      this.on(q.keyPress, o.element, a, h),
      a.$container.on([q.touchStart, q.mouseDown].join(" "), o.arrow, a, i);
  }
  function e(a) {
    a.$arrows.remove(), this.unwrap().off(q.namespace);
  }
  function f(a) {
    a.disabled &&
      (this.prop("disabled", !1),
      a.$container.removeClass(p.disabled),
      (a.disabled = !1));
  }
  function g(a) {
    a.disabled ||
      (this.prop("disabled", !0),
      a.$container.addClass(p.disabled),
      (a.disabled = !0));
  }
  function h(a) {
    var b = a.data;
    (38 === a.keyCode || 40 === a.keyCode) &&
      (a.preventDefault(), k(b, 38 === a.keyCode ? b.step : -b.step));
  }
  function i(b) {
    r.killEvent(b), j(b);
    var c = b.data;
    if (!c.disabled) {
      var d = a(b.target).hasClass(p.up) ? c.step : -c.step;
      (c.timer = r.startTimer(
        c.timer,
        110,
        function () {
          k(c, d, !1);
        },
        !0
      )),
        k(c, d),
        s.on([q.touchEnd, q.mouseUp].join(" "), c, j);
    }
  }
  function j(a) {
    r.killEvent(a);
    var b = a.data;
    r.clearTimer(b.timer, !0), s.off(q.namespace);
  }
  function k(b, c) {
    var d = parseFloat(b.$el.val()),
      e = c;
    "undefined" === a.type(d) || isNaN(d)
      ? (e = b.min !== !1 ? b.min : 0)
      : b.min !== !1 && d < b.min
      ? (e = b.min)
      : (e += d);
    var f = (e - b.min) % b.step;
    0 !== f && (e -= f),
      b.min !== !1 && e < b.min && (e = b.min),
      b.max !== !1 && e > b.max && (e -= b.step),
      e !== d && ((e = m(e, b.digits)), b.$el.val(e).trigger(q.raw.change));
  }
  function l(a) {
    var b = String(a);
    return b.indexOf(".") > -1 ? b.length - b.indexOf(".") - 1 : 0;
  }
  function m(a, b) {
    var c = Math.pow(10, b);
    return Math.round(a * c) / c;
  }
  var n = b.Plugin("number", {
      widget: !0,
      defaults: { customClass: "", labels: { up: "Up", down: "Down" } },
      classes: ["arrow", "up", "down", "disabled"],
      methods: {
        _setup: c,
        _construct: d,
        _destruct: e,
        enable: f,
        disable: g,
      },
      events: {},
    }),
    o = n.classes,
    p = o.raw,
    q = n.events,
    r = n.functions,
    s = null;
})(jQuery, Formstone);
(function ($) {
  "use strict";
  $(window).on("load", function () {
    isotopMsSetup();
    preloader();
    youtubePlaylist();
    onePage();
  });
  $(document).on("qv_loader_stop", function () {
    qtyStepper();
  });
  $(document).on("ready", function () {
    scrollUp();
    browserCompatible();
    primaryMenuSetup();
    lightGallery();
    $(window).trigger("resize");
    elementornegativeMargin();
    mobileMenu();
    isotopMsSetup();
    pageHeightOf404();
    swiperSlider();
    accordianSetup();
    modalVideo();
    tabs();
    modal();
    customSelectSetup();
    customQuantity();
    lineChart();
    roundChart();
    countDown();
    horizontalProgressBar();
    stickyFooter();
    beforeAfterSlider();
    googleMap();
    postVoteCount();
    tbSvgShape();
    appleTVeffect();
    qtyStepper();
    ajaxPagination();
    onePage();
    foodMenuList();
    parallax();
    searchModal();
    audioPlayerSetup();
    sectionScroll();
    zoomEffect();
    datePickerSetup();
    cursorPlus();
  });
  $(window).on("resize", function () {
    mobileMenu();
    isotopMsSetup();
    pageHeightOf404();
    stickyFooter();
    beforeAfterSlider();
  });
  $(window).on("scroll", function () {
    scrollFunction();
    horizontalProgressBar();
    stickyFooter();
  });
  $.exists = function (selector) {
    return $(selector).length > 0;
  };
  function preloader() {
    $(".tb-preloader-in").fadeOut();
    $(".tb-preloader").delay(150).fadeOut("slow");
  }
  function browserCompatible() {}
  function scrollUp() {
    $("#tb-scrollup").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate({ scrollTop: 0 }, 1000);
    });
  }
  function elementornegativeMargin() {
    $(".elementor-spacer-inner")
      .parents(".elementor-row")
      .addClass("removeNegativeMargin");
  }
  function primaryMenuSetup() {
    $(".tb-main-nav").before('<div class="tb-m-menu-btn"><span></span></div>');
    $(".tb-m-menu-btn").on("click", function () {
      $(this).toggleClass("tb-m-menu-btn-ext");
      $(this).siblings(".tb-main-nav").slideToggle("slow");
      $(".tb-full-screen-nav").toggleClass("tb-full-screen-active");
      $(this)
        .parents(".tb-site-header.tb-style2.tb-type1")
        .toggleClass("tb-active-sidenav");
    });
    $(".menu-item-has-children ").append('<i class="tb-plus tb-dropdown"></i>');
    $(".tb-dropdown").on("click", function () {
      $(this).prev().slideToggle("slow");
      $(this).toggleClass("tb-plus tb-minus");
    });
    $(".tb-mega-wrapper>li>a").removeAttr("href");
    $(".tb-mega-wrapper>li>a").on("click", function () {
      $(this).siblings().slideToggle();
      $(this).toggleClass("tb-megamenu-plus");
    });
    $(".tb-solid-header.tb-sticky-header").before(
      '<div class="tb-solid-header-height"></div>'
    );
    if ($.exists(".tb-header-style13 .tb-promotion-bar")) {
      $(".tb-header-style13").addClass("tb-remove-header-padding");
    }
  }
  function mobileMenu() {
    if ($(window).width() <= 991) {
      $(".tb-primary-nav").addClass("tb-m-menu").removeClass("tb-primary-nav");
      $(".tb-profile-toggle").addClass("tb-offset-menu");
    } else {
      $(".tb-m-menu").addClass("tb-primary-nav").removeClass("tb-m-menu");
      $(".tb-profile-toggle").removeClass("tb-offset-menu");
    }
    var solidHeaderHight = $(".tb-solid-header").height() + "px";
    $(".tb-solid-header-height").css("height", solidHeaderHight);
    var pageHeadingPad = $(".tb-site-header").height() + 45 + "px";
    $(".tb-transparent-header+.tb-page-heading-wrap").css(
      "padding-top",
      pageHeadingPad
    );
    var reduseSolidHeaderHight =
      $(".tb-solid-header").height() - $(".tb-promotion-bar").height() + "px";
    var redusePageHeadingPad =
      $(".tb-site-header").height() -
      $(".tb-promotion-bar").height() +
      45 +
      "px";
    $(".tb-promotion-cross").on("click", function () {
      $(this).parents(".tb-promotion-bar").slideUp(400);
      $(this)
        .parents(".tb-site-header")
        .siblings(".tb-solid-header-height")
        .css("height", reduseSolidHeaderHight);
      $(this).parents(".tb-site-header").addClass("tb-remove-promobar-active");
    });
    $(".tb-transparent-header .tb-promotion-cross").on("click", function () {
      $(".tb-page-heading-wrap").css("padding-top", redusePageHeadingPad);
    });
    $(".tb-site-header.tb-style2")
      .parents("body")
      .addClass("tb-sidebar-parent");
    $(".tb-site-header.tb-style2.tb-type1")
      .parents("body")
      .addClass("tb-sidebar-parent-small");
  }
  function scrollFunction() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      $(".tb-site-header").addClass("small-height");
    } else {
      $(".tb-site-header").removeClass("small-height");
    }
    if (scroll >= 350) {
      $("#tb-scrollup").addClass("scrollup-show");
    } else {
      $("#tb-scrollup").removeClass("scrollup-show");
    }
  }
  function stickyFooter() {
    var footerHeight = $(".tb-sticky-footer").height();
    var windowHeight = $(window).height();
    var footerHeightPx = footerHeight + "px";
    $(".tb-content").css("margin-bottom", footerHeightPx);
    if (footerHeight > windowHeight) {
      $("body").addClass("tb-remove-sticky-footer");
    }
  }
  function pageHeightOf404() {
    if ($.exists(".tb-site-header")) {
      var headerHeight = $(".tb-site-header").height();
      $(".tb-error-page").css("margin-top", -headerHeight);
      $(".tb-error-page").css("padding-top", headerHeight);
    }
  }
  function isotopMsSetup() {
    if ($.exists(".tb-isotop")) {
      $(".tb-isotop").isotope({
        itemSelector: ".tb-isotop-item",
        transitionDuration: "0.60s",
        percentPosition: !0,
        masonry: { columnWidth: ".tb-grid-sizer" },
      });
      $(".tb-isotop-filter ul li").on("click", function (event) {
        $(this).siblings(".active").removeClass("active");
        $(this).addClass("active");
        event.preventDefault();
      });
      $(".tb-isotop-filter ul").on("click", "a", function () {
        var filterElement = $(this).attr("data-filter");
        $(this)
          .parents(".tb-isotop-filter")
          .next()
          .isotope({ filter: filterElement });
      });
    }
  }
  function swiperSlider() {
    $(".tb-slider").each(function () {
      var $ts = $(this).find(".slick-container");
      var $slickActive = $(this).find(".slick-wrapper");
      var autoPlayVar = parseInt($ts.attr("data-autoplay"), 10);
      var autoplaySpdVar = 3000;
      if (autoPlayVar > 1) {
        autoplaySpdVar = autoPlayVar;
        autoPlayVar = 1;
      }
      var speedVar = parseInt($ts.attr("data-speed"), 10);
      var loopVar = Boolean(parseInt($ts.attr("data-loop"), 10));
      var centerVar = Boolean(parseInt($ts.attr("data-center"), 10));
      var paginaiton = $(this).children().hasClass("pagination");
      var slidesPerView = $ts.attr("data-slides-per-view");
      if (slidesPerView == 1) {
        slidesPerView = 1;
      }
      if (slidesPerView == "responsive") {
        var slidesPerView = parseInt($ts.attr("data-add-slides"), 10);
        var lgPoint = parseInt($ts.attr("data-lg-slides"), 10);
        var mdPoint = parseInt($ts.attr("data-md-slides"), 10);
        var smPoint = parseInt($ts.attr("data-sm-slides"), 10);
        var xsPoing = parseInt($ts.attr("data-xs-slides"), 10);
      }
      var fadeVar = parseInt($($ts).attr("data-fade-slide"));
      fadeVar === 1 ? (fadeVar = !0) : (fadeVar = !1);
      $slickActive.slick({
        autoplay: autoPlayVar,
        dots: paginaiton,
        centerPadding: "0",
        speed: speedVar,
        infinite: loopVar,
        autoplaySpeed: autoplaySpdVar,
        centerMode: centerVar,
        prevArrow: $(this).find(".slick-arrow-left"),
        nextArrow: $(this).find(".slick-arrow-right"),
        appendDots: $(this).find(".pagination"),
        fade: fadeVar,
        slidesToShow: slidesPerView,
        variableWidth: !1,
        responsive: [
          { breakpoint: 1600, settings: { slidesToShow: lgPoint } },
          { breakpoint: 1200, settings: { slidesToShow: mdPoint } },
          { breakpoint: 992, settings: { slidesToShow: smPoint } },
          { breakpoint: 768, settings: { slidesToShow: xsPoing } },
        ],
      });
    });
  }
  function accordianSetup() {
    var $this = $(this);
    $(".tb-accordian").children(".tb-accordian-body").hide();
    $(".tb-accordian.active").children(".tb-accordian-body").show();
    $(".tb-accordian-title").on("click", function () {
      $(this)
        .parent(".tb-accordian")
        .siblings()
        .children(".tb-accordian-body")
        .slideUp(250);
      $(this).siblings().slideDown(250);
      $(this).parents(".tb-accordian").addClass("active");
      $(this).parent(".tb-accordian").siblings().removeClass("active");
    });
  }
  function modalVideo() {
    $(document).on("click", ".tb-video-open", function (e) {
      e.preventDefault();
      var video = $(this).attr("href");
      $(".tb-video-popup-container iframe").attr("src", video);
      $(".tb-video-popup").addClass("active");
    });
    $(".tb-video-popup-close, .tb-video-popup-layer").on("click", function (e) {
      $(".tb-video-popup").removeClass("active");
      $("html").removeClass("overflow-hidden");
      $(".tb-video-popup-container iframe").attr("src", "about:blank");
      e.preventDefault();
    });
  }
  function tabs() {
    $(".tb-tabs.tb-standard-tabs .tb-tab-links a").on("click", function (e) {
      var currentAttrValue = $(this).attr("href");
      $(".tb-tabs " + currentAttrValue)
        .show()
        .siblings()
        .hide();
      $(this).parent("li").addClass("active").siblings().removeClass("active");
      e.preventDefault();
    });
    $(".tb-tabs.tb-fade-tabs .tb-tab-links a").on("click", function (e) {
      var currentAttrValue = $(this).attr("href");
      $(".tb-tabs " + currentAttrValue)
        .fadeIn(400)
        .siblings()
        .hide();
      $(this).parents("li").addClass("active").siblings().removeClass("active");
      e.preventDefault();
    });
  }
  function modal() {
    $("[data-modal-toggle]").on("click", function () {
      var modalToggle = $(this).data("modal-toggle");
      $(".tb-modal").each(function () {
        var modaltarget = $(this).attr("id"),
          modalId = "#" + modaltarget;
        if (modalToggle == modalId) {
          $(modalId).addClass("tb-active");
        }
      });
    });
    $(".tb-modal-dismiss").on("click", function () {
      $(this).parents(".tb-modal").removeClass("tb-active");
    });
    $(document).on("click", function () {
      $(".tb-modal").removeClass("tb-active");
    });
    $(".tb-modal > div, [data-modal-toggle]").on("click", function (e) {
      e.stopPropagation();
    });
  }
  function customSelectSetup() {
    $(".tb-custom-select").each(function () {
      var classes = $(this).attr("class"),
        id = $(this).attr("id"),
        name = $(this).attr("name");
      var template = '<div class="' + classes + '">';
      template +=
        '<span class="custom-select-trigger">' +
        $(".tb-custom-select-wrap > .tb-custom-select option:first").html() +
        "</span>";
      template += '<div class="custom-options">';
      $(this)
        .find("option")
        .each(function () {
          template +=
            '<span class="custom-option ' +
            $(this).attr("class") +
            " data-value=" +
            $(this).attr("value") +
            '">' +
            $(this).html() +
            "</span>";
        });
      template += "</div></div>";
      $(this).wrap('<div class="custom-select-wrapper"></div>');
      $(this).hide();
      $(this).after(template);
    });
    $(".custom-select-trigger").on("click", function (event) {
      $("html").one("click", function () {
        $(".tb-custom-select").removeClass("opened");
      });
      $(this).parents(".tb-custom-select").toggleClass("opened");
      event.stopPropagation();
    });
    $(".custom-option").on("click", function () {
      $(this)
        .parents(".custom-select-wrapper")
        .find("select")
        .val($(this).data("value"));
      $(this).siblings().removeClass("selection");
      $(this).addClass("selection");
      $(this).parent().children().first().removeClass("selection");
      $(this).parents(".custom-select").removeClass("opened");
      $(this)
        .parent()
        .siblings(".custom-select-trigger")
        .addClass("selector-focus");
      $(this)
        .parents(".tb-custom-select")
        .find(".custom-select-trigger")
        .text($(this).text());
    });
    $(".custom-options .custom-option:first-child").on("click", function () {
      $(this)
        .parent()
        .siblings(".custom-select-trigger")
        .removeClass("selector-focus");
    });
  }
  function lightGallery() {
    $(".tb-lightgallery").each(function () {
      $(this).lightGallery({
        selector: ".tb-lightbox-item",
        subHtmlSelectorRelative: !0,
      });
    });
  }
  function horizontalProgressBar() {
    $(".tb-single-bar").each(function () {
      var progressPercentage = $(this).data("progress-percentage") + "%";
      $(this).find(".tb-single-bar-in").css("width", progressPercentage);
    });
    $(".tb-single-bar").each(function () {
      var windowScroll = $(document).scrollTop(),
        windowHeight = $(window).height(),
        barOffset = $(this).offset().top,
        barHeight = $(this).height(),
        barScrollUp = barOffset <= windowScroll + windowHeight,
        barSctollDown = barOffset + barHeight >= windowScroll;
      if (barSctollDown && barScrollUp) {
        $(this).addClass("tb-active");
      }
    });
  }
  function customQuantity() {
    $(".tb-quantity-minus").on("click", function () {
      var $input = $(this).parent().find("input");
      if ($input.val() == "") {
        $input.val(0);
      }
      var count = parseInt($input.val()) - 1;
      count = count <= 0 ? 0 : count;
      $input.val(count);
      $input.change();
      return !1;
    });
    $(".tb-quantity-plus").on("click", function () {
      var $input = $(this).parent().find("input");
      if ($input.val() == "") {
        $input.val(0);
      }
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return !1;
    });
  }
  function lineChart() {
    if ($.exists("#tb-chart2")) {
      var selector = $(".tb-line-chart"),
        el = selector.data("values"),
        labels = $.parseJSON(el.view_labels),
        data = $.parseJSON(el.view_data),
        y_axis_label = selector.data("y-label"),
        bg_color = selector.data("bg-color"),
        border_color = selector.data("border-color");
      var ctx = document.getElementById("tb-chart2").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: y_axis_label,
              data: data,
              backgroundColor: bg_color,
              borderColor: border_color,
              borderWidth: 2,
              lineTension: 0,
              pointBackgroundColor: "#fff",
            },
          ],
        },
        options: {
          responsive: !0,
          maintainAspectRatio: !1,
          legend: { position: "bottom", display: !1 },
          tooltips: {
            displayColors: !1,
            mode: "nearest",
            intersect: !1,
            position: "nearest",
            xPadding: 8,
            yPadding: 8,
            caretPadding: 8,
            backgroundColor: "#666666",
            cornerRadius: 2,
            titleFontSize: 13,
            titleFontStyle: "normal",
            titleFontFamily: "Open Sans",
            bodyFontSize: 13,
            footerFontFamily: "Open Sans",
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  fontSize: 14,
                  fontColor: "#b5b5b5",
                  fontFamily: "Open Sans",
                  padding: 15,
                  beginAtZero: !0,
                  autoSkip: !1,
                  maxTicksLimit: 4,
                },
                gridLines: {
                  color: "#d8d8d8",
                  borderDash: [1, 3],
                  zeroLineWidth: 1,
                  zeroLineColor: "#eaeaea",
                  drawBorder: !1,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontSize: 14,
                  fontColor: "#b5b5b5",
                  fontFamily: "Open Sans",
                  padding: 5,
                  beginAtZero: !0,
                  autoSkip: !1,
                  maxTicksLimit: 4,
                },
                gridLines: {
                  color: "#d8d8d8",
                  borderDash: [1, 3],
                  zeroLineColor: "#b5b5b5",
                },
              },
            ],
          },
          elements: { point: { radius: 3, hoverRadius: 3 } },
        },
      });
    }
  }
  function roundChart() {
    if ($.exists(".tb-round-chart")) {
      $(".tb-round-chart").each(function () {
        var ctx = $(this).find("#tb-chart1"),
          el = $(this),
          options = el.data("options"),
          labels = {},
          values = [],
          stroke_colors = [];
        $.each(options, function (key, value) {
          labels[key] = value.label;
          values[key] = parseInt(value.value);
          stroke_colors[key] = value.stroke_color;
          el.find(".tb-circle-stroke .tb-circle-label")
            .eq(key)
            .html(value.label)
            .siblings()
            .css("background-color", value.stroke_color);
        });
        var myChart = new Chart(ctx, {
          type: "pie",
          data: {
            labels: labels,
            datasets: [
              { backgroundColor: stroke_colors, data: values, borderWidth: 0 },
            ],
          },
          options: {
            cutoutPercentage: 80,
            legend: { position: "right", display: !1 },
            tooltips: {
              displayColors: !1,
              mode: "nearest",
              intersect: !1,
              position: "nearest",
              xPadding: 8,
              yPadding: 8,
              caretPadding: 8,
              backgroundColor: "#666666",
              cornerRadius: 2,
              titleFontSize: 13,
              titleFontStyle: "normal",
              titleFontFamily: "Open Sans",
              bodyFontSize: 13,
              footerFontFamily: "Open Sans",
            },
          },
        });
      });
    }
  }
  function countDown() {
    if ($.exists(".tb-countdown")) {
      $(".tb-countdown").each(function () {
        var _this = this;
        var el = $(_this).data("countdate");
        var countDownDate = new Date(el).getTime();
        var x = setInterval(function () {
          var now = new Date().getTime();
          var distance = countDownDate - now;
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          $(_this).find("#tb-count-days").html(days);
          $(_this).find("#tb-count-hours").html(hours);
          $(_this).find("#tb-count-minutes").html(minutes);
          $(_this).find("#tb-count-seconds").html(seconds);
          if (distance < 0) {
            clearInterval(x);
            $(_this).html("TOKEN EXPIRED");
          }
        }, 1000);
      });
    }
  }
  function sectionScroll() {
    if ($.exists(".tb-scroll-section")) {
      var totalScrollSection = $(".tb-scroll-section").length;
      var scrollBarHeight = 100 / totalScrollSection + "%";
      $(".tb-scroll-vertical-bar span").css("height", scrollBarHeight);
      $(".tb-scroll-number-total").text(totalScrollSection);
      $(".tb-scroll-section").eq(0).addClass("active");
      $.scrollify({
        section: ".tb-scroll-section",
        sectionName: !1,
        interstitialSection: ".tb-site-footer.tb-style1",
        scrollSpeed: 1200,
        before: function (index, sections) {
          $(".tb-scroll-number-present").text(index + 1);
          scrollBarHeight = (100 / totalScrollSection) * (index + 1) + "%";
          $(".tb-scroll-vertical-bar span").css("height", scrollBarHeight);
          $(".tb-scroll-section").removeClass("active");
          $(".tb-scroll-section").eq(index).addClass("active");
        },
      });
      $(".tb-scroll-down-btn").on("click", function (e) {
        e.preventDefault();
        $.scrollify.next();
      });
      $(".tb-scroll-up-btn").on("click", function (e) {
        e.preventDefault();
        $.scrollify.previous();
      });
      if ($.exists(".tb-site-header")) {
        var thisHeight = $(".tb-site-header").height() + "px";
      }
    }
  }
  function tbSvgShape() {
    if ($.exists(".tb-svg-shape")) {
      var tbDomSvg = {};
      tbDomSvg.svg = document.querySelector(".tb-svg-shape");
      tbDomSvg.shapeEl = tbDomSvg.svg.querySelector("path");
      var shapes = [
        {
          path: "M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z",
          pathAlt:
            "M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z",
          scaleX: 1.3,
          scaleY: 1.8,
          rotate: 70,
          tx: 0,
          ty: -100,
          animation: { path: { duration: 1000, easing: "easeInOutQuad" } },
        },
      ];
      var step;
      var initShapeLoop = function (pos) {
        pos = pos || 0;
        anime.remove(tbDomSvg.shapeEl);
        anime({
          targets: tbDomSvg.shapeEl,
          easing: "linear",
          d: [
            { value: shapes[pos].pathAlt, duration: 1500 },
            { value: shapes[pos].path, duration: 1500 },
          ],
          loop: !0,
          direction: "alternate",
        });
      };
      var initShapeEl = function () {
        anime.remove(tbDomSvg.svg);
        anime({
          targets: tbDomSvg.svg,
          duration: 1,
          easing: "linear",
          scaleX: shapes[0].scaleX,
          scaleY: shapes[0].scaleY,
          translateX: shapes[0].tx + "px",
          translateY: shapes[0].ty + "px",
          rotate: shapes[0].rotate + "deg",
        });
        initShapeLoop();
      };
      initShapeEl();
    }
  }
  function appleTVeffect() {
    $(document)
      .on("mousemove", ".tb-hover-layer", function (event) {
        var halfW = this.clientWidth / 2;
        var halfH = this.clientHeight / 2;
        var coorX = halfW - (event.pageX - $(this).offset().left);
        var coorY = halfH - (event.pageY - $(this).offset().top);
        var degX = (coorY / halfH) * 8 + "deg";
        var degY = (coorX / halfW) * -8 + "deg";
        $(this)
          .css("transform", function () {
            return (
              "perspective( 600px ) translate3d( 0, -2px, 0 ) rotateX(" +
              degX +
              ") rotateY(" +
              degY +
              ")"
            );
          })
          .find(".tb-hover-layer1")
          .css("transform", function () {
            return (
              "perspective( 600px ) translate3d( 0, 0, 0 ) rotateX(" +
              degX +
              ") rotateY(" +
              degY +
              ")"
            );
          });
      })
      .on("mouseout", ".tb-hover-layer", function () {
        $(this)
          .removeAttr("style")
          .find(".tb-hover-layer1")
          .removeAttr("style");
      });
  }
  function beforeAfterSlider() {
    if ($.exists(".tb-before-after")) {
      var supportsTouch =
        "ontouchstart" in window || navigator.msMaxTouchPoints;
      $(".tb-before-after").each(function () {
        var $container = $(this),
          $before = $container.find(".tb-before"),
          $after = $container.find(".tb-after"),
          $handle = $container.find(".tb-handle-before-after");
        var maxX = $container.outerWidth(),
          offsetX = $container.offset().left,
          startX = 0;
        var touchstart, touchmove, touchend;
        var mousemove = function (e) {
          e.preventDefault();
          var curX = e.clientX - offsetX,
            diff = startX - curX,
            curPos = (curX / maxX) * 100;
          if (curPos > 100) {
            curPos = 100;
          }
          if (curPos < 0) {
            curPos = 0;
          }
          $before.css({ right: 100 - curPos + "%" });
          $handle.css({ left: curPos + "%" });
        };
        var mouseup = function (e) {
          e.preventDefault();
          if (supportsTouch) {
            $(document).off("touchmove", touchmove);
            $(document).off("touchend", touchend);
          } else {
            $(document).off("mousemove", mousemove);
            $(document).off("mouseup", mouseup);
          }
        };
        var mousedown = function (e) {
          e.preventDefault();
          startX = e.clientX - offsetX;
          if (supportsTouch) {
            $(document).on("touchmove", touchmove);
            $(document).on("touchend", touchend);
          } else {
            $(document).on("mousemove", mousemove);
            $(document).on("mouseup", mouseup);
          }
        };
        touchstart = function (e) {
          console.log(e);
          mousedown({
            preventDefault: e.preventDefault,
            clientX: e.originalEvent.changedTouches[0].pageX,
          });
        };
        touchmove = function (e) {
          mousemove({
            preventDefault: e.preventDefault,
            clientX: e.originalEvent.changedTouches[0].pageX,
          });
        };
        touchend = function (e) {
          mouseup({
            preventDefault: e.preventDefault,
            clientX: e.originalEvent.changedTouches[0].pageX,
          });
        };
        if (supportsTouch) {
          $handle.on("touchstart", touchstart);
        } else {
          $handle.on("mousedown", mousedown);
        }
      });
    }
  }
  function postVoteCount() {
    $(".tb-vote-btn").each(function () {
      $(this).on("click", function (e) {
        e.preventDefault();
        var parent = $(this).parent(".tb-votes"),
          post_id = parent.data("post-id"),
          count = parent.find(".tb-count-no"),
          $this = $(this),
          flag;
        if ($this.hasClass("voted")) {
          alert("Already Voted");
          return !1;
        } else if ($this.hasClass("tb-up-vote-btn")) {
          flag = "true";
          count.text(parseInt(count.text()) + 1);
          $this.addClass("up-voted voted");
          $this.siblings(".tb-down-vote-btn").removeClass("voted");
        } else {
          flag = "false";
          count.text(parseInt(count.text()) - 1);
          $this.addClass("down-voted voted");
          $this.siblings(".tb-up-vote-btn").removeClass("voted");
        }
        $.ajax({
          type: "POST",
          url: get.ajaxurl,
          data: {
            action: "post-vote",
            is_up: flag,
            id: post_id,
            vote_nonce: get.nonce,
          },
        });
      });
    });
  }
  function googleMap() {
    if ($("#map").length > 0) {
      var el = $(".tb-map-wrap"),
        lat = el.data("lat"),
        lng = el.data("lng"),
        zoom = el.data("zoom"),
        marker = el.data("marker"),
        marker_url =
          !marker || marker.length === 0
            ? get.siteurl + "/assets/img/map-marker.png"
            : marker;
      el.each(function () {
        var contactmap = { lat: lat, lng: lng };
        el.find("#map")
          .gmap3({ zoom: zoom, center: contactmap, scrollwheel: !1 })
          .marker({ position: contactmap, icon: marker_url });
      });
    }
  }
  function qtyStepper() {
    if (typeof $.fn.number != "function") {
      return;
    }
    if ($("input[type=number]").length) {
      $("input[type=number]").number();
    }
  }
  function youtubePlaylist() {
    if ($(".yt-playlist").length) {
      var wrapper = $("#frame");
      var channelId = wrapper.data("channel-id");
      var ytp = new YTV("frame", {
        channelId: channelId,
        playerTheme: "dark",
        responsive: !0,
      });
    }
  }
  function ajaxPagination() {
    $(".tb-ajax-load-more").each(function () {
      var $this = $(this),
        $container = $this.parent().find(".tb-post-outerwrapper"),
        token = $this.data("token"),
        settings = window["webify_load_more_" + token],
        is_isotope = parseInt(settings.isotope),
        paging = 1,
        flood = !1,
        ajax_data;
      $this.bind("click", function () {
        if (flood === !1) {
          paging++;
          flood = !0;
          ajax_data = $.extend(
            {},
            { action: "ajax-pagination", paged: paging },
            settings
          );
          $.ajax({
            type: "POST",
            url: get.ajaxurl,
            data: ajax_data,
            dataType: "html",
            beforeSend: function () {
              $this.addClass("more-loading");
              $this.html("Loading...");
            },
            success: function (html) {
              var content = $(html).css("opacity", 0);
              if (is_isotope) {
                content.imagesLoaded(function () {
                  $container.append(content).isotope("appended", content);
                  $container.isotope("layout");
                });
              } else {
                $(content).insertBefore($this.parent());
              }
              content.animate({ opacity: 1 }, 250);
              $this.removeClass("more-loading");
              $this.html("Load More");
              if (parseInt(settings.max_pages) == paging) {
                $this.hide();
              }
              flood = !1;
            },
          });
        }
        return !1;
      });
    });
  }
  function onePage() {
    $(".tb-site-header a").on("click", function () {
      var thisAttr = $(this).attr("href");
      if ($(thisAttr).length) {
        var scrollPoint = $(thisAttr).offset().top - 120;
        $("body,html").animate({ scrollTop: scrollPoint }, 600);
      }
      return !1;
    });
  }
  function foodMenuList() {
    $(".tb-food-list").addClass("tb-food-list-isotope");
    var isotopeActiveClass = $(".tb-food-menu-wrap .active")
      .children("a")
      .data("filter");
    $(isotopeActiveClass).addClass("tb-show-isotope-item");
    $(".tb-food-menu a").on("click", function () {
      $(this)
        .parents(".tb-food-menu-wrap")
        .find(".tb-food-list")
        .removeClass("tb-food-list-isotope");
    });
  }
  function parallax() {
    if ($.exists(".tb-parallax")) {
      var numItems = $(".tb-parallax").length;
      for (var loopI = 0; loopI < numItems; loopI++) {
        $("body")
          .find(".tb-parallax")
          .eq(loopI)
          .addClass("tb-parallax" + loopI);
        var speed = $(".tb-parallax" + loopI).data("speed");
        $(".tb-parallax" + loopI).parallax("50%", speed);
      }
    }
  }
  function searchModal() {
    $(".tb-search-modal-btn").on("click", function () {
      $(".tb-search-modal").toggleClass("tb-active");
    });
    $(".tb-search-modal-cross, .tb-search-modal-overlay").on(
      "click",
      function () {
        $(".tb-search-modal").removeClass("tb-active");
      }
    );
  }
  function audioPlayerSetup() {
    if ($.exists(".tb-audio-player")) {
      $(".tb-audio-player").audioPlayer();
    }
  }
  function zoomEffect() {
    if ($.exists(".tb-product-zoom")) {
      $(".tb-product-zoom").zoom();
    }
  }
  function datePickerSetup() {
    if ($.exists(".tb-cs-date")) {
      $(".tb-cs-date").datepicker();
    }
  }
  function cursorPlus() {
    $(".tb-image-box.tb-style2 a, .tb-horizontal-scroll-item a").each(
      function () {
        $(this).append('<div class="tb-cursor"></div>');
        $(this).on("mousemove", function (ev) {
          var cursorOffsetY = $(this).offset().top;
          var cursorOffsetX = $(this).offset().left;
          var mouseLeft = ev.pageX - cursorOffsetX - 22 + "px";
          var mouseRight = ev.pageY - cursorOffsetY - 22 + "px";
          $(this).find(".tb-cursor").css({ left: mouseLeft, top: mouseRight });
        });
      }
    );
  }
  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction("init", function () {
      console.log(this.getSettings("selectors.container"));
    });
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-portfolio-widget.default",
      function ($scope, $) {
        isotopMsSetup();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-image-gallery-widget.default",
      function ($scope, $) {
        isotopMsSetup();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-menu-widget.default",
      function ($scope, $) {
        isotopMsSetup();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-blog-widget.default",
      function ($scope, $) {
        var selector = $scope.find(".tb-blog-content");
        selector.imagesLoaded(function () {
          isotopMsSetup();
        });
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-client-widget.default",
      function ($scope, $) {
        swiperSlider();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-hero-slider-widget.default",
      function ($scope, $) {
        swiperSlider();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-road-map-widget.default",
      function ($scope, $) {
        swiperSlider();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-text-block-with-gallery-widget.default",
      function ($scope, $) {
        swiperSlider();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-road-map-widget.default",
      function ($scope, $) {
        swiperSlider();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-product-slider-widget.default",
      function ($scope, $) {
        swiperSlider();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-icon-box-slider-widget.default",
      function ($scope, $) {
        swiperSlider();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-portfolio-slider-widget.default",
      function ($scope, $) {
        swiperSlider();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-accordion-widget.default",
      function ($scope, $) {
        accordianSetup();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-line-chart-widget.default",
      function ($scope, $) {
        lineChart();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-round-chart-widget.default",
      function ($scope, $) {
        roundChart();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-count-down-widget.default",
      function ($scope, $) {}
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-testimonial-slider-widget.default",
      function ($scope, $) {
        swiperSlider();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-team-slider-widget.default",
      function ($scope, $) {
        swiperSlider();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-image-box-slider-widget.default",
      function ($scope, $) {
        swiperSlider();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-image-gallery-slider-widget.default",
      function ($scope, $) {
        swiperSlider();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-fancy-box-slider-widget.default",
      function ($scope, $) {
        swiperSlider();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-award-widget.default",
      function ($scope, $) {
        swiperSlider();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-blog-slider-widget.default",
      function ($scope, $) {
        swiperSlider();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-progress-bar-widget.default",
      function ($scope, $) {
        horizontalProgressBar();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-google-map-widget.default",
      function ($scope, $) {
        googleMap();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-portfolio-section-scroll-widget.default",
      function ($scope, $) {
        sectionScroll();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-tabs-widget.default",
      function ($scope, $) {
        tabs();
      }
    );
    elementorFrontend.hooks.addAction(
      "frontend/element_ready/webify-youtube-video-playlist-widget.default",
      function ($scope, $) {
        youtubePlaylist();
      }
    );
  });
})(jQuery); /*! This file is auto-generated */
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define("ev-emitter/ev-emitter", t)
    : "object" == typeof module && module.exports
    ? (module.exports = t())
    : (e.EvEmitter = t());
})("undefined" != typeof window ? window : this, function () {
  function e() {}
  var t = e.prototype;
  return (
    (t.on = function (e, t) {
      if (e && t) {
        var i = (this._events = this._events || {}),
          n = (i[e] = i[e] || []);
        return n.indexOf(t) == -1 && n.push(t), this;
      }
    }),
    (t.once = function (e, t) {
      if (e && t) {
        this.on(e, t);
        var i = (this._onceEvents = this._onceEvents || {}),
          n = (i[e] = i[e] || {});
        return (n[t] = !0), this;
      }
    }),
    (t.off = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        var n = i.indexOf(t);
        return n != -1 && i.splice(n, 1), this;
      }
    }),
    (t.emitEvent = function (e, t) {
      var i = this._events && this._events[e];
      if (i && i.length) {
        (i = i.slice(0)), (t = t || []);
        for (
          var n = this._onceEvents && this._onceEvents[e], o = 0;
          o < i.length;
          o++
        ) {
          var r = i[o],
            s = n && n[r];
          s && (this.off(e, r), delete n[r]), r.apply(this, t);
        }
        return this;
      }
    }),
    (t.allOff = function () {
      delete this._events, delete this._onceEvents;
    }),
    e
  );
}),
  (function (e, t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return t(e, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = t(e, require("ev-emitter")))
      : (e.imagesLoaded = t(e, e.EvEmitter));
  })("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
      for (var i in t) e[i] = t[i];
      return e;
    }
    function n(e) {
      if (Array.isArray(e)) return e;
      var t = "object" == typeof e && "number" == typeof e.length;
      return t ? d.call(e) : [e];
    }
    function o(e, t, r) {
      if (!(this instanceof o)) return new o(e, t, r);
      var s = e;
      return (
        "string" == typeof e && (s = document.querySelectorAll(e)),
        s
          ? ((this.elements = n(s)),
            (this.options = i({}, this.options)),
            "function" == typeof t ? (r = t) : i(this.options, t),
            r && this.on("always", r),
            this.getImages(),
            h && (this.jqDeferred = new h.Deferred()),
            void setTimeout(this.check.bind(this)))
          : void a.error("Bad element for imagesLoaded " + (s || e))
      );
    }
    function r(e) {
      this.img = e;
    }
    function s(e, t) {
      (this.url = e), (this.element = t), (this.img = new Image());
    }
    var h = e.jQuery,
      a = e.console,
      d = Array.prototype.slice;
    (o.prototype = Object.create(t.prototype)),
      (o.prototype.options = {}),
      (o.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (o.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e),
          this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && u[t]) {
          for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var o = i[n];
            this.addImage(o);
          }
          if ("string" == typeof this.options.background) {
            var r = e.querySelectorAll(this.options.background);
            for (n = 0; n < r.length; n++) {
              var s = r[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var u = { 1: !0, 9: !0, 11: !0 };
    return (
      (o.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage);
            null !== n;

          ) {
            var o = n && n[2];
            o && this.addBackground(o, e), (n = i.exec(t.backgroundImage));
          }
      }),
      (o.prototype.addImage = function (e) {
        var t = new r(e);
        this.images.push(t);
      }),
      (o.prototype.addBackground = function (e, t) {
        var i = new s(e, t);
        this.images.push(i);
      }),
      (o.prototype.check = function () {
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n);
          });
        }
        var t = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : void this.complete()
        );
      }),
      (o.prototype.progress = function (e, t, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
          this.emitEvent("progress", [this, e, t]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, e),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && a && a.log("progress: " + i, e, t);
      }),
      (o.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(e, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var t = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[t](this);
        }
      }),
      (r.prototype = Object.create(t.prototype)),
      (r.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (r.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (r.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
      }),
      (r.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (r.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (r.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (r.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(r.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var e = this.getIsImageComplete();
        e &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (e, t) {
        (this.isLoaded = e),
          this.emitEvent("progress", [this, this.element, t]);
      }),
      (o.makeJQueryPlugin = function (t) {
        (t = t || e.jQuery),
          t &&
            ((h = t),
            (h.fn.imagesLoaded = function (e, t) {
              var i = new o(this, e, t);
              return i.jqDeferred.promise(h(this));
            }));
      }),
      o.makeJQueryPlugin(),
      o
    );
  });
!(function () {
  var a = {},
    b = {};
  !(function (a, b) {
    function c(a) {
      if ("number" == typeof a) return a;
      var b = {};
      for (var c in a) b[c] = a[c];
      return b;
    }
    function d() {
      (this._delay = 0),
        (this._endDelay = 0),
        (this._fill = "none"),
        (this._iterationStart = 0),
        (this._iterations = 1),
        (this._duration = 0),
        (this._playbackRate = 1),
        (this._direction = "normal"),
        (this._easing = "linear"),
        (this._easingFunction = x);
    }
    function e() {
      return a.isDeprecated(
        "Invalid timing inputs",
        "2016-03-02",
        "TypeError exceptions will be thrown instead.",
        !0
      );
    }
    function f(b, c, e) {
      var f = new d();
      return (
        c && ((f.fill = "both"), (f.duration = "auto")),
        "number" != typeof b || isNaN(b)
          ? void 0 !== b &&
            Object.getOwnPropertyNames(b).forEach(function (c) {
              if ("auto" != b[c]) {
                if (
                  ("number" == typeof f[c] || "duration" == c) &&
                  ("number" != typeof b[c] || isNaN(b[c]))
                )
                  return;
                if ("fill" == c && -1 == v.indexOf(b[c])) return;
                if ("direction" == c && -1 == w.indexOf(b[c])) return;
                if (
                  "playbackRate" == c &&
                  1 !== b[c] &&
                  a.isDeprecated(
                    "AnimationEffectTiming.playbackRate",
                    "2014-11-28",
                    "Use Animation.playbackRate instead."
                  )
                )
                  return;
                f[c] = b[c];
              }
            })
          : (f.duration = b),
        f
      );
    }
    function g(a) {
      return (
        "number" == typeof a &&
          (a = isNaN(a) ? { duration: 0 } : { duration: a }),
        a
      );
    }
    function h(b, c) {
      return (b = a.numericTimingToObject(b)), f(b, c);
    }
    function i(a, b, c, d) {
      return a < 0 || a > 1 || c < 0 || c > 1
        ? x
        : function (e) {
            function f(a, b, c) {
              return (
                3 * a * (1 - c) * (1 - c) * c +
                3 * b * (1 - c) * c * c +
                c * c * c
              );
            }
            if (e <= 0) {
              var g = 0;
              return a > 0 ? (g = b / a) : !b && c > 0 && (g = d / c), g * e;
            }
            if (e >= 1) {
              var h = 0;
              return (
                c < 1
                  ? (h = (d - 1) / (c - 1))
                  : 1 == c && a < 1 && (h = (b - 1) / (a - 1)),
                1 + h * (e - 1)
              );
            }
            for (var i = 0, j = 1; i < j; ) {
              var k = (i + j) / 2,
                l = f(a, c, k);
              if (Math.abs(e - l) < 1e-5) return f(b, d, k);
              l < e ? (i = k) : (j = k);
            }
            return f(b, d, k);
          };
    }
    function j(a, b) {
      return function (c) {
        if (c >= 1) return 1;
        var d = 1 / a;
        return (c += b * d) - (c % d);
      };
    }
    function k(a) {
      C || (C = document.createElement("div").style),
        (C.animationTimingFunction = ""),
        (C.animationTimingFunction = a);
      var b = C.animationTimingFunction;
      if ("" == b && e())
        throw new TypeError(a + " is not a valid value for easing");
      return b;
    }
    function l(a) {
      if ("linear" == a) return x;
      var b = E.exec(a);
      if (b) return i.apply(this, b.slice(1).map(Number));
      var c = F.exec(a);
      if (c) return j(Number(c[1]), A);
      var d = G.exec(a);
      return d
        ? j(Number(d[1]), { start: y, middle: z, end: A }[d[2]])
        : B[a] || x;
    }
    function m(a) {
      return Math.abs(n(a) / a.playbackRate);
    }
    function n(a) {
      return 0 === a.duration || 0 === a.iterations
        ? 0
        : a.duration * a.iterations;
    }
    function o(a, b, c) {
      if (null == b) return H;
      var d = c.delay + a + c.endDelay;
      return b < Math.min(c.delay, d)
        ? I
        : b >= Math.min(c.delay + a, d)
        ? J
        : K;
    }
    function p(a, b, c, d, e) {
      switch (d) {
        case I:
          return "backwards" == b || "both" == b ? 0 : null;
        case K:
          return c - e;
        case J:
          return "forwards" == b || "both" == b ? a : null;
        case H:
          return null;
      }
    }
    function q(a, b, c, d, e) {
      var f = e;
      return 0 === a ? b !== I && (f += c) : (f += d / a), f;
    }
    function r(a, b, c, d, e, f) {
      var g = a === 1 / 0 ? b % 1 : a % 1;
      return (
        0 !== g || c !== J || 0 === d || (0 === e && 0 !== f) || (g = 1), g
      );
    }
    function s(a, b, c, d) {
      return a === J && b === 1 / 0
        ? 1 / 0
        : 1 === c
        ? Math.floor(d) - 1
        : Math.floor(d);
    }
    function t(a, b, c) {
      var d = a;
      if ("normal" !== a && "reverse" !== a) {
        var e = b;
        "alternate-reverse" === a && (e += 1),
          (d = "normal"),
          e !== 1 / 0 && e % 2 != 0 && (d = "reverse");
      }
      return "normal" === d ? c : 1 - c;
    }
    function u(a, b, c) {
      var d = o(a, b, c),
        e = p(a, c.fill, b, d, c.delay);
      if (null === e) return null;
      var f = q(c.duration, d, c.iterations, e, c.iterationStart),
        g = r(f, c.iterationStart, d, c.iterations, e, c.duration),
        h = s(d, c.iterations, g, f),
        i = t(c.direction, h, g);
      return c._easingFunction(i);
    }
    var v = "backwards|forwards|both|none".split("|"),
      w = "reverse|alternate|alternate-reverse".split("|"),
      x = function (a) {
        return a;
      };
    d.prototype = {
      _setMember: function (b, c) {
        (this["_" + b] = c),
          this._effect &&
            ((this._effect._timingInput[b] = c),
            (this._effect._timing = a.normalizeTimingInput(
              this._effect._timingInput
            )),
            (this._effect.activeDuration = a.calculateActiveDuration(
              this._effect._timing
            )),
            this._effect._animation &&
              this._effect._animation._rebuildUnderlyingAnimation());
      },
      get playbackRate() {
        return this._playbackRate;
      },
      set delay(a) {
        this._setMember("delay", a);
      },
      get delay() {
        return this._delay;
      },
      set endDelay(a) {
        this._setMember("endDelay", a);
      },
      get endDelay() {
        return this._endDelay;
      },
      set fill(a) {
        this._setMember("fill", a);
      },
      get fill() {
        return this._fill;
      },
      set iterationStart(a) {
        if ((isNaN(a) || a < 0) && e())
          throw new TypeError(
            "iterationStart must be a non-negative number, received: " + a
          );
        this._setMember("iterationStart", a);
      },
      get iterationStart() {
        return this._iterationStart;
      },
      set duration(a) {
        if ("auto" != a && (isNaN(a) || a < 0) && e())
          throw new TypeError(
            "duration must be non-negative or auto, received: " + a
          );
        this._setMember("duration", a);
      },
      get duration() {
        return this._duration;
      },
      set direction(a) {
        this._setMember("direction", a);
      },
      get direction() {
        return this._direction;
      },
      set easing(a) {
        (this._easingFunction = l(k(a))), this._setMember("easing", a);
      },
      get easing() {
        return this._easing;
      },
      set iterations(a) {
        if ((isNaN(a) || a < 0) && e())
          throw new TypeError(
            "iterations must be non-negative, received: " + a
          );
        this._setMember("iterations", a);
      },
      get iterations() {
        return this._iterations;
      },
    };
    var y = 1,
      z = 0.5,
      A = 0,
      B = {
        ease: i(0.25, 0.1, 0.25, 1),
        "ease-in": i(0.42, 0, 1, 1),
        "ease-out": i(0, 0, 0.58, 1),
        "ease-in-out": i(0.42, 0, 0.58, 1),
        "step-start": j(1, y),
        "step-middle": j(1, z),
        "step-end": j(1, A),
      },
      C = null,
      D = "\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",
      E = new RegExp(
        "cubic-bezier\\(" + D + "," + D + "," + D + "," + D + "\\)"
      ),
      F = /steps\(\s*(\d+)\s*\)/,
      G = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,
      H = 0,
      I = 1,
      J = 2,
      K = 3;
    (a.cloneTimingInput = c),
      (a.makeTiming = f),
      (a.numericTimingToObject = g),
      (a.normalizeTimingInput = h),
      (a.calculateActiveDuration = m),
      (a.calculateIterationProgress = u),
      (a.calculatePhase = o),
      (a.normalizeEasing = k),
      (a.parseEasingFunction = l);
  })(a),
    (function (a, b) {
      function c(a, b) {
        return a in k ? k[a][b] || b : b;
      }
      function d(a) {
        return (
          "display" === a ||
          0 === a.lastIndexOf("animation", 0) ||
          0 === a.lastIndexOf("transition", 0)
        );
      }
      function e(a, b, e) {
        if (!d(a)) {
          var f = h[a];
          if (f) {
            i.style[a] = b;
            for (var g in f) {
              var j = f[g],
                k = i.style[j];
              e[j] = c(j, k);
            }
          } else e[a] = c(a, b);
        }
      }
      function f(a) {
        var b = [];
        for (var c in a)
          if (!(c in ["easing", "offset", "composite"])) {
            var d = a[c];
            Array.isArray(d) || (d = [d]);
            for (var e, f = d.length, g = 0; g < f; g++)
              (e = {}),
                (e.offset =
                  "offset" in a ? a.offset : 1 == f ? 1 : g / (f - 1)),
                "easing" in a && (e.easing = a.easing),
                "composite" in a && (e.composite = a.composite),
                (e[c] = d[g]),
                b.push(e);
          }
        return (
          b.sort(function (a, b) {
            return a.offset - b.offset;
          }),
          b
        );
      }
      function g(b) {
        function c() {
          var a = d.length;
          null == d[a - 1].offset && (d[a - 1].offset = 1),
            a > 1 && null == d[0].offset && (d[0].offset = 0);
          for (var b = 0, c = d[0].offset, e = 1; e < a; e++) {
            var f = d[e].offset;
            if (null != f) {
              for (var g = 1; g < e - b; g++)
                d[b + g].offset = c + ((f - c) * g) / (e - b);
              (b = e), (c = f);
            }
          }
        }
        if (null == b) return [];
        window.Symbol &&
          Symbol.iterator &&
          Array.prototype.from &&
          b[Symbol.iterator] &&
          (b = Array.from(b)),
          Array.isArray(b) || (b = f(b));
        for (
          var d = b.map(function (b) {
              var c = {};
              for (var d in b) {
                var f = b[d];
                if ("offset" == d) {
                  if (null != f) {
                    if (((f = Number(f)), !isFinite(f)))
                      throw new TypeError("Keyframe offsets must be numbers.");
                    if (f < 0 || f > 1)
                      throw new TypeError(
                        "Keyframe offsets must be between 0 and 1."
                      );
                  }
                } else if ("composite" == d) {
                  if ("add" == f || "accumulate" == f)
                    throw {
                      type: DOMException.NOT_SUPPORTED_ERR,
                      name: "NotSupportedError",
                      message: "add compositing is not supported",
                    };
                  if ("replace" != f)
                    throw new TypeError("Invalid composite mode " + f + ".");
                } else f = "easing" == d ? a.normalizeEasing(f) : "" + f;
                e(d, f, c);
              }
              return (
                void 0 == c.offset && (c.offset = null),
                void 0 == c.easing && (c.easing = "linear"),
                c
              );
            }),
            g = !0,
            h = -1 / 0,
            i = 0;
          i < d.length;
          i++
        ) {
          var j = d[i].offset;
          if (null != j) {
            if (j < h)
              throw new TypeError(
                "Keyframes are not loosely sorted by offset. Sort or specify offsets."
              );
            h = j;
          } else g = !1;
        }
        return (
          (d = d.filter(function (a) {
            return a.offset >= 0 && a.offset <= 1;
          })),
          g || c(),
          d
        );
      }
      var h = {
          background: [
            "backgroundImage",
            "backgroundPosition",
            "backgroundSize",
            "backgroundRepeat",
            "backgroundAttachment",
            "backgroundOrigin",
            "backgroundClip",
            "backgroundColor",
          ],
          border: [
            "borderTopColor",
            "borderTopStyle",
            "borderTopWidth",
            "borderRightColor",
            "borderRightStyle",
            "borderRightWidth",
            "borderBottomColor",
            "borderBottomStyle",
            "borderBottomWidth",
            "borderLeftColor",
            "borderLeftStyle",
            "borderLeftWidth",
          ],
          borderBottom: [
            "borderBottomWidth",
            "borderBottomStyle",
            "borderBottomColor",
          ],
          borderColor: [
            "borderTopColor",
            "borderRightColor",
            "borderBottomColor",
            "borderLeftColor",
          ],
          borderLeft: ["borderLeftWidth", "borderLeftStyle", "borderLeftColor"],
          borderRadius: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomRightRadius",
            "borderBottomLeftRadius",
          ],
          borderRight: [
            "borderRightWidth",
            "borderRightStyle",
            "borderRightColor",
          ],
          borderTop: ["borderTopWidth", "borderTopStyle", "borderTopColor"],
          borderWidth: [
            "borderTopWidth",
            "borderRightWidth",
            "borderBottomWidth",
            "borderLeftWidth",
          ],
          flex: ["flexGrow", "flexShrink", "flexBasis"],
          font: [
            "fontFamily",
            "fontSize",
            "fontStyle",
            "fontVariant",
            "fontWeight",
            "lineHeight",
          ],
          margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
          outline: ["outlineColor", "outlineStyle", "outlineWidth"],
          padding: [
            "paddingTop",
            "paddingRight",
            "paddingBottom",
            "paddingLeft",
          ],
        },
        i = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
        j = { thin: "1px", medium: "3px", thick: "5px" },
        k = {
          borderBottomWidth: j,
          borderLeftWidth: j,
          borderRightWidth: j,
          borderTopWidth: j,
          fontSize: {
            "xx-small": "60%",
            "x-small": "75%",
            small: "89%",
            medium: "100%",
            large: "120%",
            "x-large": "150%",
            "xx-large": "200%",
          },
          fontWeight: { normal: "400", bold: "700" },
          outlineWidth: j,
          textShadow: { none: "0px 0px 0px transparent" },
          boxShadow: { none: "0px 0px 0px 0px transparent" },
        };
      (a.convertToArrayForm = f), (a.normalizeKeyframes = g);
    })(a),
    (function (a) {
      var b = {};
      (a.isDeprecated = function (a, c, d, e) {
        var f = e ? "are" : "is",
          g = new Date(),
          h = new Date(c);
        return (
          h.setMonth(h.getMonth() + 3),
          !(
            g < h &&
            (a in b ||
              console.warn(
                "Web Animations: " +
                  a +
                  " " +
                  f +
                  " deprecated and will stop working on " +
                  h.toDateString() +
                  ". " +
                  d
              ),
            (b[a] = !0),
            1)
          )
        );
      }),
        (a.deprecated = function (b, c, d, e) {
          var f = e ? "are" : "is";
          if (a.isDeprecated(b, c, d, e))
            throw new Error(b + " " + f + " no longer supported. " + d);
        });
    })(a),
    (function () {
      if (document.documentElement.animate) {
        var c = document.documentElement.animate([], 0),
          d = !0;
        if (
          (c &&
            ((d = !1),
            "play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState"
              .split("|")
              .forEach(function (a) {
                void 0 === c[a] && (d = !0);
              })),
          !d)
        )
          return;
      }
      !(function (a, b, c) {
        function d(a) {
          for (var b = {}, c = 0; c < a.length; c++)
            for (var d in a[c])
              if ("offset" != d && "easing" != d && "composite" != d) {
                var e = {
                  offset: a[c].offset,
                  easing: a[c].easing,
                  value: a[c][d],
                };
                (b[d] = b[d] || []), b[d].push(e);
              }
          for (var f in b) {
            var g = b[f];
            if (0 != g[0].offset || 1 != g[g.length - 1].offset)
              throw {
                type: DOMException.NOT_SUPPORTED_ERR,
                name: "NotSupportedError",
                message: "Partial keyframes are not supported",
              };
          }
          return b;
        }
        function e(c) {
          var d = [];
          for (var e in c)
            for (var f = c[e], g = 0; g < f.length - 1; g++) {
              var h = g,
                i = g + 1,
                j = f[h].offset,
                k = f[i].offset,
                l = j,
                m = k;
              0 == g && ((l = -1 / 0), 0 == k && (i = h)),
                g == f.length - 2 && ((m = 1 / 0), 1 == j && (h = i)),
                d.push({
                  applyFrom: l,
                  applyTo: m,
                  startOffset: f[h].offset,
                  endOffset: f[i].offset,
                  easingFunction: a.parseEasingFunction(f[h].easing),
                  property: e,
                  interpolation: b.propertyInterpolation(
                    e,
                    f[h].value,
                    f[i].value
                  ),
                });
            }
          return (
            d.sort(function (a, b) {
              return a.startOffset - b.startOffset;
            }),
            d
          );
        }
        b.convertEffectInput = function (c) {
          var f = a.normalizeKeyframes(c),
            g = d(f),
            h = e(g);
          return function (a, c) {
            if (null != c)
              h.filter(function (a) {
                return c >= a.applyFrom && c < a.applyTo;
              }).forEach(function (d) {
                var e = c - d.startOffset,
                  f = d.endOffset - d.startOffset,
                  g = 0 == f ? 0 : d.easingFunction(e / f);
                b.apply(a, d.property, d.interpolation(g));
              });
            else
              for (var d in g)
                "offset" != d &&
                  "easing" != d &&
                  "composite" != d &&
                  b.clear(a, d);
          };
        };
      })(a, b),
        (function (a, b, c) {
          function d(a) {
            return a.replace(/-(.)/g, function (a, b) {
              return b.toUpperCase();
            });
          }
          function e(a, b, c) {
            (h[c] = h[c] || []), h[c].push([a, b]);
          }
          function f(a, b, c) {
            for (var f = 0; f < c.length; f++) {
              e(a, b, d(c[f]));
            }
          }
          function g(c, e, f) {
            var g = c;
            /-/.test(c) &&
              !a.isDeprecated(
                "Hyphenated property names",
                "2016-03-22",
                "Use camelCase instead.",
                !0
              ) &&
              (g = d(c)),
              ("initial" != e && "initial" != f) ||
                ("initial" == e && (e = i[g]), "initial" == f && (f = i[g]));
            for (var j = e == f ? [] : h[g], k = 0; j && k < j.length; k++) {
              var l = j[k][0](e),
                m = j[k][0](f);
              if (void 0 !== l && void 0 !== m) {
                var n = j[k][1](l, m);
                if (n) {
                  var o = b.Interpolation.apply(null, n);
                  return function (a) {
                    return 0 == a ? e : 1 == a ? f : o(a);
                  };
                }
              }
            }
            return b.Interpolation(!1, !0, function (a) {
              return a ? f : e;
            });
          }
          var h = {};
          b.addPropertiesHandler = f;
          var i = {
            backgroundColor: "transparent",
            backgroundPosition: "0% 0%",
            borderBottomColor: "currentColor",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            borderBottomWidth: "3px",
            borderLeftColor: "currentColor",
            borderLeftWidth: "3px",
            borderRightColor: "currentColor",
            borderRightWidth: "3px",
            borderSpacing: "2px",
            borderTopColor: "currentColor",
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
            borderTopWidth: "3px",
            bottom: "auto",
            clip: "rect(0px, 0px, 0px, 0px)",
            color: "black",
            fontSize: "100%",
            fontWeight: "400",
            height: "auto",
            left: "auto",
            letterSpacing: "normal",
            lineHeight: "120%",
            marginBottom: "0px",
            marginLeft: "0px",
            marginRight: "0px",
            marginTop: "0px",
            maxHeight: "none",
            maxWidth: "none",
            minHeight: "0px",
            minWidth: "0px",
            opacity: "1.0",
            outlineColor: "invert",
            outlineOffset: "0px",
            outlineWidth: "3px",
            paddingBottom: "0px",
            paddingLeft: "0px",
            paddingRight: "0px",
            paddingTop: "0px",
            right: "auto",
            strokeDasharray: "none",
            strokeDashoffset: "0px",
            textIndent: "0px",
            textShadow: "0px 0px 0px transparent",
            top: "auto",
            transform: "",
            verticalAlign: "0px",
            visibility: "visible",
            width: "auto",
            wordSpacing: "normal",
            zIndex: "auto",
          };
          b.propertyInterpolation = g;
        })(a, b),
        (function (a, b, c) {
          function d(b) {
            var c = a.calculateActiveDuration(b),
              d = function (d) {
                return a.calculateIterationProgress(c, d, b);
              };
            return (d._totalDuration = b.delay + c + b.endDelay), d;
          }
          b.KeyframeEffect = function (c, e, f, g) {
            var h,
              i = d(a.normalizeTimingInput(f)),
              j = b.convertEffectInput(e),
              k = function () {
                j(c, h);
              };
            return (
              (k._update = function (a) {
                return null !== (h = i(a));
              }),
              (k._clear = function () {
                j(c, null);
              }),
              (k._hasSameTarget = function (a) {
                return c === a;
              }),
              (k._target = c),
              (k._totalDuration = i._totalDuration),
              (k._id = g),
              k
            );
          };
        })(a, b),
        (function (a, b) {
          function c(a, b) {
            return (
              !(!b.namespaceURI || -1 == b.namespaceURI.indexOf("/svg")) &&
              (g in a ||
                (a[g] = /Trident|MSIE|IEMobile|Edge|Android 4/i.test(
                  a.navigator.userAgent
                )),
              a[g])
            );
          }
          function d(a, b, c) {
            (c.enumerable = !0),
              (c.configurable = !0),
              Object.defineProperty(a, b, c);
          }
          function e(a) {
            (this._element = a),
              (this._surrogateStyle = document.createElementNS(
                "http://www.w3.org/1999/xhtml",
                "div"
              ).style),
              (this._style = a.style),
              (this._length = 0),
              (this._isAnimatedProperty = {}),
              (this._updateSvgTransformAttr = c(window, a)),
              (this._savedTransformAttr = null);
            for (var b = 0; b < this._style.length; b++) {
              var d = this._style[b];
              this._surrogateStyle[d] = this._style[d];
            }
            this._updateIndices();
          }
          function f(a) {
            if (!a._webAnimationsPatchedStyle) {
              var b = new e(a);
              try {
                d(a, "style", {
                  get: function () {
                    return b;
                  },
                });
              } catch (b) {
                (a.style._set = function (b, c) {
                  a.style[b] = c;
                }),
                  (a.style._clear = function (b) {
                    a.style[b] = "";
                  });
              }
              a._webAnimationsPatchedStyle = a.style;
            }
          }
          var g = "_webAnimationsUpdateSvgTransformAttr",
            h = { cssText: 1, length: 1, parentRule: 1 },
            i = {
              getPropertyCSSValue: 1,
              getPropertyPriority: 1,
              getPropertyValue: 1,
              item: 1,
              removeProperty: 1,
              setProperty: 1,
            },
            j = { removeProperty: 1, setProperty: 1 };
          e.prototype = {
            get cssText() {
              return this._surrogateStyle.cssText;
            },
            set cssText(a) {
              for (var b = {}, c = 0; c < this._surrogateStyle.length; c++)
                b[this._surrogateStyle[c]] = !0;
              (this._surrogateStyle.cssText = a), this._updateIndices();
              for (var c = 0; c < this._surrogateStyle.length; c++)
                b[this._surrogateStyle[c]] = !0;
              for (var d in b)
                this._isAnimatedProperty[d] ||
                  this._style.setProperty(
                    d,
                    this._surrogateStyle.getPropertyValue(d)
                  );
            },
            get length() {
              return this._surrogateStyle.length;
            },
            get parentRule() {
              return this._style.parentRule;
            },
            _updateIndices: function () {
              for (; this._length < this._surrogateStyle.length; )
                Object.defineProperty(this, this._length, {
                  configurable: !0,
                  enumerable: !1,
                  get: (function (a) {
                    return function () {
                      return this._surrogateStyle[a];
                    };
                  })(this._length),
                }),
                  this._length++;
              for (; this._length > this._surrogateStyle.length; )
                this._length--,
                  Object.defineProperty(this, this._length, {
                    configurable: !0,
                    enumerable: !1,
                    value: void 0,
                  });
            },
            _set: function (b, c) {
              (this._style[b] = c),
                (this._isAnimatedProperty[b] = !0),
                this._updateSvgTransformAttr &&
                  "transform" == a.unprefixedPropertyName(b) &&
                  (null == this._savedTransformAttr &&
                    (this._savedTransformAttr =
                      this._element.getAttribute("transform")),
                  this._element.setAttribute(
                    "transform",
                    a.transformToSvgMatrix(c)
                  ));
            },
            _clear: function (b) {
              (this._style[b] = this._surrogateStyle[b]),
                this._updateSvgTransformAttr &&
                  "transform" == a.unprefixedPropertyName(b) &&
                  (this._savedTransformAttr
                    ? this._element.setAttribute(
                        "transform",
                        this._savedTransformAttr
                      )
                    : this._element.removeAttribute("transform"),
                  (this._savedTransformAttr = null)),
                delete this._isAnimatedProperty[b];
            },
          };
          for (var k in i)
            e.prototype[k] = (function (a, b) {
              return function () {
                var c = this._surrogateStyle[a].apply(
                  this._surrogateStyle,
                  arguments
                );
                return (
                  b &&
                    (this._isAnimatedProperty[arguments[0]] ||
                      this._style[a].apply(this._style, arguments),
                    this._updateIndices()),
                  c
                );
              };
            })(k, k in j);
          for (var l in document.documentElement.style)
            l in h ||
              l in i ||
              (function (a) {
                d(e.prototype, a, {
                  get: function () {
                    return this._surrogateStyle[a];
                  },
                  set: function (b) {
                    (this._surrogateStyle[a] = b),
                      this._updateIndices(),
                      this._isAnimatedProperty[a] || (this._style[a] = b);
                  },
                });
              })(l);
          (a.apply = function (b, c, d) {
            f(b), b.style._set(a.propertyName(c), d);
          }),
            (a.clear = function (b, c) {
              b._webAnimationsPatchedStyle && b.style._clear(a.propertyName(c));
            });
        })(b),
        (function (a) {
          window.Element.prototype.animate = function (b, c) {
            var d = "";
            return (
              c && c.id && (d = c.id),
              a.timeline._play(a.KeyframeEffect(this, b, c, d))
            );
          };
        })(b),
        (function (a, b) {
          function c(a, b, d) {
            if ("number" == typeof a && "number" == typeof b)
              return a * (1 - d) + b * d;
            if ("boolean" == typeof a && "boolean" == typeof b)
              return d < 0.5 ? a : b;
            if (a.length == b.length) {
              for (var e = [], f = 0; f < a.length; f++)
                e.push(c(a[f], b[f], d));
              return e;
            }
            throw "Mismatched interpolation arguments " + a + ":" + b;
          }
          a.Interpolation = function (a, b, d) {
            return function (e) {
              return d(c(a, b, e));
            };
          };
        })(b),
        (function (a, b) {
          function c(a, b, c) {
            return Math.max(Math.min(a, c), b);
          }
          function d(b, d, e) {
            var f = a.dot(b, d);
            f = c(f, -1, 1);
            var g = [];
            if (1 === f) g = b;
            else
              for (
                var h = Math.acos(f),
                  i = (1 * Math.sin(e * h)) / Math.sqrt(1 - f * f),
                  j = 0;
                j < 4;
                j++
              )
                g.push(b[j] * (Math.cos(e * h) - f * i) + d[j] * i);
            return g;
          }
          var e = (function () {
            function a(a, b) {
              for (
                var c = [
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                  ],
                  d = 0;
                d < 4;
                d++
              )
                for (var e = 0; e < 4; e++)
                  for (var f = 0; f < 4; f++) c[d][e] += b[d][f] * a[f][e];
              return c;
            }
            function b(a) {
              return (
                0 == a[0][2] &&
                0 == a[0][3] &&
                0 == a[1][2] &&
                0 == a[1][3] &&
                0 == a[2][0] &&
                0 == a[2][1] &&
                1 == a[2][2] &&
                0 == a[2][3] &&
                0 == a[3][2] &&
                1 == a[3][3]
              );
            }
            function c(c, d, e, f, g) {
              for (
                var h = [
                    [1, 0, 0, 0],
                    [0, 1, 0, 0],
                    [0, 0, 1, 0],
                    [0, 0, 0, 1],
                  ],
                  i = 0;
                i < 4;
                i++
              )
                h[i][3] = g[i];
              for (var i = 0; i < 3; i++)
                for (var j = 0; j < 3; j++) h[3][i] += c[j] * h[j][i];
              var k = f[0],
                l = f[1],
                m = f[2],
                n = f[3],
                o = [
                  [1, 0, 0, 0],
                  [0, 1, 0, 0],
                  [0, 0, 1, 0],
                  [0, 0, 0, 1],
                ];
              (o[0][0] = 1 - 2 * (l * l + m * m)),
                (o[0][1] = 2 * (k * l - m * n)),
                (o[0][2] = 2 * (k * m + l * n)),
                (o[1][0] = 2 * (k * l + m * n)),
                (o[1][1] = 1 - 2 * (k * k + m * m)),
                (o[1][2] = 2 * (l * m - k * n)),
                (o[2][0] = 2 * (k * m - l * n)),
                (o[2][1] = 2 * (l * m + k * n)),
                (o[2][2] = 1 - 2 * (k * k + l * l)),
                (h = a(h, o));
              var p = [
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1],
              ];
              e[2] && ((p[2][1] = e[2]), (h = a(h, p))),
                e[1] && ((p[2][1] = 0), (p[2][0] = e[0]), (h = a(h, p))),
                e[0] && ((p[2][0] = 0), (p[1][0] = e[0]), (h = a(h, p)));
              for (var i = 0; i < 3; i++)
                for (var j = 0; j < 3; j++) h[i][j] *= d[i];
              return b(h)
                ? [h[0][0], h[0][1], h[1][0], h[1][1], h[3][0], h[3][1]]
                : h[0].concat(h[1], h[2], h[3]);
            }
            return c;
          })();
          (a.composeMatrix = e), (a.quat = d);
        })(b),
        (function (a, b, c) {
          a.sequenceNumber = 0;
          var d = function (a, b, c) {
            (this.target = a),
              (this.currentTime = b),
              (this.timelineTime = c),
              (this.type = "finish"),
              (this.bubbles = !1),
              (this.cancelable = !1),
              (this.currentTarget = a),
              (this.defaultPrevented = !1),
              (this.eventPhase = Event.AT_TARGET),
              (this.timeStamp = Date.now());
          };
          (b.Animation = function (b) {
            (this.id = ""),
              b && b._id && (this.id = b._id),
              (this._sequenceNumber = a.sequenceNumber++),
              (this._currentTime = 0),
              (this._startTime = null),
              (this._paused = !1),
              (this._playbackRate = 1),
              (this._inTimeline = !0),
              (this._finishedFlag = !0),
              (this.onfinish = null),
              (this._finishHandlers = []),
              (this._effect = b),
              (this._inEffect = this._effect._update(0)),
              (this._idle = !0),
              (this._currentTimePending = !1);
          }),
            (b.Animation.prototype = {
              _ensureAlive: function () {
                this.playbackRate < 0 && 0 === this.currentTime
                  ? (this._inEffect = this._effect._update(-1))
                  : (this._inEffect = this._effect._update(this.currentTime)),
                  this._inTimeline ||
                    (!this._inEffect && this._finishedFlag) ||
                    ((this._inTimeline = !0),
                    b.timeline._animations.push(this));
              },
              _tickCurrentTime: function (a, b) {
                a != this._currentTime &&
                  ((this._currentTime = a),
                  this._isFinished &&
                    !b &&
                    (this._currentTime =
                      this._playbackRate > 0 ? this._totalDuration : 0),
                  this._ensureAlive());
              },
              get currentTime() {
                return this._idle || this._currentTimePending
                  ? null
                  : this._currentTime;
              },
              set currentTime(a) {
                (a = +a),
                  isNaN(a) ||
                    (b.restart(),
                    this._paused ||
                      null == this._startTime ||
                      (this._startTime =
                        this._timeline.currentTime - a / this._playbackRate),
                    (this._currentTimePending = !1),
                    this._currentTime != a &&
                      (this._idle && ((this._idle = !1), (this._paused = !0)),
                      this._tickCurrentTime(a, !0),
                      b.applyDirtiedAnimation(this)));
              },
              get startTime() {
                return this._startTime;
              },
              set startTime(a) {
                (a = +a),
                  isNaN(a) ||
                    this._paused ||
                    this._idle ||
                    ((this._startTime = a),
                    this._tickCurrentTime(
                      (this._timeline.currentTime - this._startTime) *
                        this.playbackRate
                    ),
                    b.applyDirtiedAnimation(this));
              },
              get playbackRate() {
                return this._playbackRate;
              },
              set playbackRate(a) {
                if (a != this._playbackRate) {
                  var c = this.currentTime;
                  (this._playbackRate = a),
                    (this._startTime = null),
                    "paused" != this.playState &&
                      "idle" != this.playState &&
                      ((this._finishedFlag = !1),
                      (this._idle = !1),
                      this._ensureAlive(),
                      b.applyDirtiedAnimation(this)),
                    null != c && (this.currentTime = c);
                }
              },
              get _isFinished() {
                return (
                  !this._idle &&
                  ((this._playbackRate > 0 &&
                    this._currentTime >= this._totalDuration) ||
                    (this._playbackRate < 0 && this._currentTime <= 0))
                );
              },
              get _totalDuration() {
                return this._effect._totalDuration;
              },
              get playState() {
                return this._idle
                  ? "idle"
                  : (null == this._startTime &&
                      !this._paused &&
                      0 != this.playbackRate) ||
                    this._currentTimePending
                  ? "pending"
                  : this._paused
                  ? "paused"
                  : this._isFinished
                  ? "finished"
                  : "running";
              },
              _rewind: function () {
                if (this._playbackRate >= 0) this._currentTime = 0;
                else {
                  if (!(this._totalDuration < 1 / 0))
                    throw new DOMException(
                      "Unable to rewind negative playback rate animation with infinite duration",
                      "InvalidStateError"
                    );
                  this._currentTime = this._totalDuration;
                }
              },
              play: function () {
                (this._paused = !1),
                  (this._isFinished || this._idle) &&
                    (this._rewind(), (this._startTime = null)),
                  (this._finishedFlag = !1),
                  (this._idle = !1),
                  this._ensureAlive(),
                  b.applyDirtiedAnimation(this);
              },
              pause: function () {
                this._isFinished || this._paused || this._idle
                  ? this._idle && (this._rewind(), (this._idle = !1))
                  : (this._currentTimePending = !0),
                  (this._startTime = null),
                  (this._paused = !0);
              },
              finish: function () {
                this._idle ||
                  ((this.currentTime =
                    this._playbackRate > 0 ? this._totalDuration : 0),
                  (this._startTime = this._totalDuration - this.currentTime),
                  (this._currentTimePending = !1),
                  b.applyDirtiedAnimation(this));
              },
              cancel: function () {
                this._inEffect &&
                  ((this._inEffect = !1),
                  (this._idle = !0),
                  (this._paused = !1),
                  (this._finishedFlag = !0),
                  (this._currentTime = 0),
                  (this._startTime = null),
                  this._effect._update(null),
                  b.applyDirtiedAnimation(this));
              },
              reverse: function () {
                (this.playbackRate *= -1), this.play();
              },
              addEventListener: function (a, b) {
                "function" == typeof b &&
                  "finish" == a &&
                  this._finishHandlers.push(b);
              },
              removeEventListener: function (a, b) {
                if ("finish" == a) {
                  var c = this._finishHandlers.indexOf(b);
                  c >= 0 && this._finishHandlers.splice(c, 1);
                }
              },
              _fireEvents: function (a) {
                if (this._isFinished) {
                  if (!this._finishedFlag) {
                    var b = new d(this, this._currentTime, a),
                      c = this._finishHandlers.concat(
                        this.onfinish ? [this.onfinish] : []
                      );
                    setTimeout(function () {
                      c.forEach(function (a) {
                        a.call(b.target, b);
                      });
                    }, 0),
                      (this._finishedFlag = !0);
                  }
                } else this._finishedFlag = !1;
              },
              _tick: function (a, b) {
                this._idle ||
                  this._paused ||
                  (null == this._startTime
                    ? b &&
                      (this.startTime =
                        a - this._currentTime / this.playbackRate)
                    : this._isFinished ||
                      this._tickCurrentTime(
                        (a - this._startTime) * this.playbackRate
                      )),
                  b && ((this._currentTimePending = !1), this._fireEvents(a));
              },
              get _needsTick() {
                return (
                  this.playState in { pending: 1, running: 1 } ||
                  !this._finishedFlag
                );
              },
              _targetAnimations: function () {
                var a = this._effect._target;
                return (
                  a._activeAnimations || (a._activeAnimations = []),
                  a._activeAnimations
                );
              },
              _markTarget: function () {
                var a = this._targetAnimations();
                -1 === a.indexOf(this) && a.push(this);
              },
              _unmarkTarget: function () {
                var a = this._targetAnimations(),
                  b = a.indexOf(this);
                -1 !== b && a.splice(b, 1);
              },
            });
        })(a, b),
        (function (a, b, c) {
          function d(a) {
            var b = j;
            (j = []),
              a < q.currentTime && (a = q.currentTime),
              q._animations.sort(e),
              (q._animations = h(a, !0, q._animations)[0]),
              b.forEach(function (b) {
                b[1](a);
              }),
              g(),
              (l = void 0);
          }
          function e(a, b) {
            return a._sequenceNumber - b._sequenceNumber;
          }
          function f() {
            (this._animations = []),
              (this.currentTime =
                window.performance && performance.now ? performance.now() : 0);
          }
          function g() {
            o.forEach(function (a) {
              a();
            }),
              (o.length = 0);
          }
          function h(a, c, d) {
            (p = !0), (n = !1), (b.timeline.currentTime = a), (m = !1);
            var e = [],
              f = [],
              g = [],
              h = [];
            return (
              d.forEach(function (b) {
                b._tick(a, c),
                  b._inEffect
                    ? (f.push(b._effect), b._markTarget())
                    : (e.push(b._effect), b._unmarkTarget()),
                  b._needsTick && (m = !0);
                var d = b._inEffect || b._needsTick;
                (b._inTimeline = d), d ? g.push(b) : h.push(b);
              }),
              o.push.apply(o, e),
              o.push.apply(o, f),
              m && requestAnimationFrame(function () {}),
              (p = !1),
              [g, h]
            );
          }
          var i = window.requestAnimationFrame,
            j = [],
            k = 0;
          (window.requestAnimationFrame = function (a) {
            var b = k++;
            return 0 == j.length && i(d), j.push([b, a]), b;
          }),
            (window.cancelAnimationFrame = function (a) {
              j.forEach(function (b) {
                b[0] == a && (b[1] = function () {});
              });
            }),
            (f.prototype = {
              _play: function (c) {
                c._timing = a.normalizeTimingInput(c.timing);
                var d = new b.Animation(c);
                return (
                  (d._idle = !1),
                  (d._timeline = this),
                  this._animations.push(d),
                  b.restart(),
                  b.applyDirtiedAnimation(d),
                  d
                );
              },
            });
          var l = void 0,
            m = !1,
            n = !1;
          (b.restart = function () {
            return (
              m || ((m = !0), requestAnimationFrame(function () {}), (n = !0)),
              n
            );
          }),
            (b.applyDirtiedAnimation = function (a) {
              if (!p) {
                a._markTarget();
                var c = a._targetAnimations();
                c.sort(e),
                  h(b.timeline.currentTime, !1, c.slice())[1].forEach(function (
                    a
                  ) {
                    var b = q._animations.indexOf(a);
                    -1 !== b && q._animations.splice(b, 1);
                  }),
                  g();
              }
            });
          var o = [],
            p = !1,
            q = new f();
          b.timeline = q;
        })(a, b),
        (function (a, b) {
          function c(a, b) {
            for (var c = 0, d = 0; d < a.length; d++) c += a[d] * b[d];
            return c;
          }
          function d(a, b) {
            return [
              a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3],
              a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3],
              a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3],
              a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3],
              a[0] * b[4] + a[4] * b[5] + a[8] * b[6] + a[12] * b[7],
              a[1] * b[4] + a[5] * b[5] + a[9] * b[6] + a[13] * b[7],
              a[2] * b[4] + a[6] * b[5] + a[10] * b[6] + a[14] * b[7],
              a[3] * b[4] + a[7] * b[5] + a[11] * b[6] + a[15] * b[7],
              a[0] * b[8] + a[4] * b[9] + a[8] * b[10] + a[12] * b[11],
              a[1] * b[8] + a[5] * b[9] + a[9] * b[10] + a[13] * b[11],
              a[2] * b[8] + a[6] * b[9] + a[10] * b[10] + a[14] * b[11],
              a[3] * b[8] + a[7] * b[9] + a[11] * b[10] + a[15] * b[11],
              a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12] * b[15],
              a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13] * b[15],
              a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14] * b[15],
              a[3] * b[12] + a[7] * b[13] + a[11] * b[14] + a[15] * b[15],
            ];
          }
          function e(a) {
            var b = a.rad || 0;
            return (
              ((a.deg || 0) / 360 + (a.grad || 0) / 400 + (a.turn || 0)) *
                (2 * Math.PI) +
              b
            );
          }
          function f(a) {
            switch (a.t) {
              case "rotatex":
                var b = e(a.d[0]);
                return [
                  1,
                  0,
                  0,
                  0,
                  0,
                  Math.cos(b),
                  Math.sin(b),
                  0,
                  0,
                  -Math.sin(b),
                  Math.cos(b),
                  0,
                  0,
                  0,
                  0,
                  1,
                ];
              case "rotatey":
                var b = e(a.d[0]);
                return [
                  Math.cos(b),
                  0,
                  -Math.sin(b),
                  0,
                  0,
                  1,
                  0,
                  0,
                  Math.sin(b),
                  0,
                  Math.cos(b),
                  0,
                  0,
                  0,
                  0,
                  1,
                ];
              case "rotate":
              case "rotatez":
                var b = e(a.d[0]);
                return [
                  Math.cos(b),
                  Math.sin(b),
                  0,
                  0,
                  -Math.sin(b),
                  Math.cos(b),
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                ];
              case "rotate3d":
                var c = a.d[0],
                  d = a.d[1],
                  f = a.d[2],
                  b = e(a.d[3]),
                  g = c * c + d * d + f * f;
                if (0 === g) (c = 1), (d = 0), (f = 0);
                else if (1 !== g) {
                  var h = Math.sqrt(g);
                  (c /= h), (d /= h), (f /= h);
                }
                var i = Math.sin(b / 2),
                  j = i * Math.cos(b / 2),
                  k = i * i;
                return [
                  1 - 2 * (d * d + f * f) * k,
                  2 * (c * d * k + f * j),
                  2 * (c * f * k - d * j),
                  0,
                  2 * (c * d * k - f * j),
                  1 - 2 * (c * c + f * f) * k,
                  2 * (d * f * k + c * j),
                  0,
                  2 * (c * f * k + d * j),
                  2 * (d * f * k - c * j),
                  1 - 2 * (c * c + d * d) * k,
                  0,
                  0,
                  0,
                  0,
                  1,
                ];
              case "scale":
                return [
                  a.d[0],
                  0,
                  0,
                  0,
                  0,
                  a.d[1],
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                ];
              case "scalex":
                return [a.d[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
              case "scaley":
                return [1, 0, 0, 0, 0, a.d[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
              case "scalez":
                return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, a.d[0], 0, 0, 0, 0, 1];
              case "scale3d":
                return [
                  a.d[0],
                  0,
                  0,
                  0,
                  0,
                  a.d[1],
                  0,
                  0,
                  0,
                  0,
                  a.d[2],
                  0,
                  0,
                  0,
                  0,
                  1,
                ];
              case "skew":
                var l = e(a.d[0]),
                  m = e(a.d[1]);
                return [
                  1,
                  Math.tan(m),
                  0,
                  0,
                  Math.tan(l),
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                ];
              case "skewx":
                var b = e(a.d[0]);
                return [
                  1,
                  0,
                  0,
                  0,
                  Math.tan(b),
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                ];
              case "skewy":
                var b = e(a.d[0]);
                return [
                  1,
                  Math.tan(b),
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                ];
              case "translate":
                var c = a.d[0].px || 0,
                  d = a.d[1].px || 0;
                return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c, d, 0, 1];
              case "translatex":
                var c = a.d[0].px || 0;
                return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c, 0, 0, 1];
              case "translatey":
                var d = a.d[0].px || 0;
                return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, d, 0, 1];
              case "translatez":
                var f = a.d[0].px || 0;
                return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, f, 1];
              case "translate3d":
                var c = a.d[0].px || 0,
                  d = a.d[1].px || 0,
                  f = a.d[2].px || 0;
                return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, c, d, f, 1];
              case "perspective":
                return [
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  1,
                  a.d[0].px ? -1 / a.d[0].px : 0,
                  0,
                  0,
                  0,
                  1,
                ];
              case "matrix":
                return [
                  a.d[0],
                  a.d[1],
                  0,
                  0,
                  a.d[2],
                  a.d[3],
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  a.d[4],
                  a.d[5],
                  0,
                  1,
                ];
              case "matrix3d":
                return a.d;
            }
          }
          function g(a) {
            return 0 === a.length
              ? [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
              : a.map(f).reduce(d);
          }
          function h(a) {
            return [i(g(a))];
          }
          var i = (function () {
            function a(a) {
              return (
                a[0][0] * a[1][1] * a[2][2] +
                a[1][0] * a[2][1] * a[0][2] +
                a[2][0] * a[0][1] * a[1][2] -
                a[0][2] * a[1][1] * a[2][0] -
                a[1][2] * a[2][1] * a[0][0] -
                a[2][2] * a[0][1] * a[1][0]
              );
            }
            function b(b) {
              for (
                var c = 1 / a(b),
                  d = b[0][0],
                  e = b[0][1],
                  f = b[0][2],
                  g = b[1][0],
                  h = b[1][1],
                  i = b[1][2],
                  j = b[2][0],
                  k = b[2][1],
                  l = b[2][2],
                  m = [
                    [
                      (h * l - i * k) * c,
                      (f * k - e * l) * c,
                      (e * i - f * h) * c,
                      0,
                    ],
                    [
                      (i * j - g * l) * c,
                      (d * l - f * j) * c,
                      (f * g - d * i) * c,
                      0,
                    ],
                    [
                      (g * k - h * j) * c,
                      (j * e - d * k) * c,
                      (d * h - e * g) * c,
                      0,
                    ],
                  ],
                  n = [],
                  o = 0;
                o < 3;
                o++
              ) {
                for (var p = 0, q = 0; q < 3; q++) p += b[3][q] * m[q][o];
                n.push(p);
              }
              return n.push(1), m.push(n), m;
            }
            function d(a) {
              return [
                [a[0][0], a[1][0], a[2][0], a[3][0]],
                [a[0][1], a[1][1], a[2][1], a[3][1]],
                [a[0][2], a[1][2], a[2][2], a[3][2]],
                [a[0][3], a[1][3], a[2][3], a[3][3]],
              ];
            }
            function e(a, b) {
              for (var c = [], d = 0; d < 4; d++) {
                for (var e = 0, f = 0; f < 4; f++) e += a[f] * b[f][d];
                c.push(e);
              }
              return c;
            }
            function f(a) {
              var b = g(a);
              return [a[0] / b, a[1] / b, a[2] / b];
            }
            function g(a) {
              return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
            }
            function h(a, b, c, d) {
              return [
                c * a[0] + d * b[0],
                c * a[1] + d * b[1],
                c * a[2] + d * b[2],
              ];
            }
            function i(a, b) {
              return [
                a[1] * b[2] - a[2] * b[1],
                a[2] * b[0] - a[0] * b[2],
                a[0] * b[1] - a[1] * b[0],
              ];
            }
            function j(j) {
              var k = [
                j.slice(0, 4),
                j.slice(4, 8),
                j.slice(8, 12),
                j.slice(12, 16),
              ];
              if (1 !== k[3][3]) return null;
              for (var l = [], m = 0; m < 4; m++) l.push(k[m].slice());
              for (var m = 0; m < 3; m++) l[m][3] = 0;
              if (0 === a(l)) return null;
              var n,
                o = [];
              k[0][3] || k[1][3] || k[2][3]
                ? (o.push(k[0][3]),
                  o.push(k[1][3]),
                  o.push(k[2][3]),
                  o.push(k[3][3]),
                  (n = e(o, d(b(l)))))
                : (n = [0, 0, 0, 1]);
              var p = k[3].slice(0, 3),
                q = [];
              q.push(k[0].slice(0, 3));
              var r = [];
              r.push(g(q[0])), (q[0] = f(q[0]));
              var s = [];
              q.push(k[1].slice(0, 3)),
                s.push(c(q[0], q[1])),
                (q[1] = h(q[1], q[0], 1, -s[0])),
                r.push(g(q[1])),
                (q[1] = f(q[1])),
                (s[0] /= r[1]),
                q.push(k[2].slice(0, 3)),
                s.push(c(q[0], q[2])),
                (q[2] = h(q[2], q[0], 1, -s[1])),
                s.push(c(q[1], q[2])),
                (q[2] = h(q[2], q[1], 1, -s[2])),
                r.push(g(q[2])),
                (q[2] = f(q[2])),
                (s[1] /= r[2]),
                (s[2] /= r[2]);
              var t = i(q[1], q[2]);
              if (c(q[0], t) < 0)
                for (var m = 0; m < 3; m++)
                  (r[m] *= -1),
                    (q[m][0] *= -1),
                    (q[m][1] *= -1),
                    (q[m][2] *= -1);
              var u,
                v,
                w = q[0][0] + q[1][1] + q[2][2] + 1;
              return (
                w > 1e-4
                  ? ((u = 0.5 / Math.sqrt(w)),
                    (v = [
                      (q[2][1] - q[1][2]) * u,
                      (q[0][2] - q[2][0]) * u,
                      (q[1][0] - q[0][1]) * u,
                      0.25 / u,
                    ]))
                  : q[0][0] > q[1][1] && q[0][0] > q[2][2]
                  ? ((u = 2 * Math.sqrt(1 + q[0][0] - q[1][1] - q[2][2])),
                    (v = [
                      0.25 * u,
                      (q[0][1] + q[1][0]) / u,
                      (q[0][2] + q[2][0]) / u,
                      (q[2][1] - q[1][2]) / u,
                    ]))
                  : q[1][1] > q[2][2]
                  ? ((u = 2 * Math.sqrt(1 + q[1][1] - q[0][0] - q[2][2])),
                    (v = [
                      (q[0][1] + q[1][0]) / u,
                      0.25 * u,
                      (q[1][2] + q[2][1]) / u,
                      (q[0][2] - q[2][0]) / u,
                    ]))
                  : ((u = 2 * Math.sqrt(1 + q[2][2] - q[0][0] - q[1][1])),
                    (v = [
                      (q[0][2] + q[2][0]) / u,
                      (q[1][2] + q[2][1]) / u,
                      0.25 * u,
                      (q[1][0] - q[0][1]) / u,
                    ])),
                [p, r, s, v, n]
              );
            }
            return j;
          })();
          (a.dot = c),
            (a.makeMatrixDecomposition = h),
            (a.transformListToMatrix = g);
        })(b),
        (function (a) {
          function b(a, b) {
            var c = a.exec(b);
            if (c)
              return (
                (c = a.ignoreCase ? c[0].toLowerCase() : c[0]),
                [c, b.substr(c.length)]
              );
          }
          function c(a, b) {
            b = b.replace(/^\s*/, "");
            var c = a(b);
            if (c) return [c[0], c[1].replace(/^\s*/, "")];
          }
          function d(a, d, e) {
            a = c.bind(null, a);
            for (var f = []; ; ) {
              var g = a(e);
              if (!g) return [f, e];
              if ((f.push(g[0]), (e = g[1]), !(g = b(d, e)) || "" == g[1]))
                return [f, e];
              e = g[1];
            }
          }
          function e(a, b) {
            for (
              var c = 0, d = 0;
              d < b.length && (!/\s|,/.test(b[d]) || 0 != c);
              d++
            )
              if ("(" == b[d]) c++;
              else if (")" == b[d] && (c--, 0 == c && d++, c <= 0)) break;
            var e = a(b.substr(0, d));
            return void 0 == e ? void 0 : [e, b.substr(d)];
          }
          function f(a, b) {
            for (var c = a, d = b; c && d; ) c > d ? (c %= d) : (d %= c);
            return (c = (a * b) / (c + d));
          }
          function g(a) {
            return function (b) {
              var c = a(b);
              return c && (c[0] = void 0), c;
            };
          }
          function h(a, b) {
            return function (c) {
              return a(c) || [b, c];
            };
          }
          function i(b, c) {
            for (var d = [], e = 0; e < b.length; e++) {
              var f = a.consumeTrimmed(b[e], c);
              if (!f || "" == f[0]) return;
              void 0 !== f[0] && d.push(f[0]), (c = f[1]);
            }
            if ("" == c) return d;
          }
          function j(a, b, c, d, e) {
            for (
              var g = [], h = [], i = [], j = f(d.length, e.length), k = 0;
              k < j;
              k++
            ) {
              var l = b(d[k % d.length], e[k % e.length]);
              if (!l) return;
              g.push(l[0]), h.push(l[1]), i.push(l[2]);
            }
            return [
              g,
              h,
              function (b) {
                var d = b
                  .map(function (a, b) {
                    return i[b](a);
                  })
                  .join(c);
                return a ? a(d) : d;
              },
            ];
          }
          function k(a, b, c) {
            for (var d = [], e = [], f = [], g = 0, h = 0; h < c.length; h++)
              if ("function" == typeof c[h]) {
                var i = c[h](a[g], b[g++]);
                d.push(i[0]), e.push(i[1]), f.push(i[2]);
              } else
                !(function (a) {
                  d.push(!1),
                    e.push(!1),
                    f.push(function () {
                      return c[a];
                    });
                })(h);
            return [
              d,
              e,
              function (a) {
                for (var b = "", c = 0; c < a.length; c++) b += f[c](a[c]);
                return b;
              },
            ];
          }
          (a.consumeToken = b),
            (a.consumeTrimmed = c),
            (a.consumeRepeated = d),
            (a.consumeParenthesised = e),
            (a.ignore = g),
            (a.optional = h),
            (a.consumeList = i),
            (a.mergeNestedRepeated = j.bind(null, null)),
            (a.mergeWrappedNestedRepeated = j),
            (a.mergeList = k);
        })(b),
        (function (a) {
          function b(b) {
            function c(b) {
              var c = a.consumeToken(/^inset/i, b);
              return c
                ? ((d.inset = !0), c)
                : (c = a.consumeLengthOrPercent(b))
                ? (d.lengths.push(c[0]), c)
                : ((c = a.consumeColor(b)), c ? ((d.color = c[0]), c) : void 0);
            }
            var d = { inset: !1, lengths: [], color: null },
              e = a.consumeRepeated(c, /^/, b);
            if (e && e[0].length) return [d, e[1]];
          }
          function c(c) {
            var d = a.consumeRepeated(b, /^,/, c);
            if (d && "" == d[1]) return d[0];
          }
          function d(b, c) {
            for (
              ;
              b.lengths.length < Math.max(b.lengths.length, c.lengths.length);

            )
              b.lengths.push({ px: 0 });
            for (
              ;
              c.lengths.length < Math.max(b.lengths.length, c.lengths.length);

            )
              c.lengths.push({ px: 0 });
            if (b.inset == c.inset && !!b.color == !!c.color) {
              for (
                var d, e = [], f = [[], 0], g = [[], 0], h = 0;
                h < b.lengths.length;
                h++
              ) {
                var i = a.mergeDimensions(b.lengths[h], c.lengths[h], 2 == h);
                f[0].push(i[0]), g[0].push(i[1]), e.push(i[2]);
              }
              if (b.color && c.color) {
                var j = a.mergeColors(b.color, c.color);
                (f[1] = j[0]), (g[1] = j[1]), (d = j[2]);
              }
              return [
                f,
                g,
                function (a) {
                  for (
                    var c = b.inset ? "inset " : " ", f = 0;
                    f < e.length;
                    f++
                  )
                    c += e[f](a[0][f]) + " ";
                  return d && (c += d(a[1])), c;
                },
              ];
            }
          }
          function e(b, c, d, e) {
            function f(a) {
              return {
                inset: a,
                color: [0, 0, 0, 0],
                lengths: [{ px: 0 }, { px: 0 }, { px: 0 }, { px: 0 }],
              };
            }
            for (var g = [], h = [], i = 0; i < d.length || i < e.length; i++) {
              var j = d[i] || f(e[i].inset),
                k = e[i] || f(d[i].inset);
              g.push(j), h.push(k);
            }
            return a.mergeNestedRepeated(b, c, g, h);
          }
          var f = e.bind(null, d, ", ");
          a.addPropertiesHandler(c, f, ["box-shadow", "text-shadow"]);
        })(b),
        (function (a, b) {
          function c(a) {
            return a.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
          }
          function d(a, b, c) {
            return Math.min(b, Math.max(a, c));
          }
          function e(a) {
            if (/^\s*[-+]?(\d*\.)?\d+\s*$/.test(a)) return Number(a);
          }
          function f(a, b) {
            return [a, b, c];
          }
          function g(a, b) {
            if (0 != a) return i(0, 1 / 0)(a, b);
          }
          function h(a, b) {
            return [
              a,
              b,
              function (a) {
                return Math.round(d(1, 1 / 0, a));
              },
            ];
          }
          function i(a, b) {
            return function (e, f) {
              return [
                e,
                f,
                function (e) {
                  return c(d(a, b, e));
                },
              ];
            };
          }
          function j(a) {
            var b = a.trim().split(/\s*[\s,]\s*/);
            if (0 !== b.length) {
              for (var c = [], d = 0; d < b.length; d++) {
                var f = e(b[d]);
                if (void 0 === f) return;
                c.push(f);
              }
              return c;
            }
          }
          function k(a, b) {
            if (a.length == b.length)
              return [
                a,
                b,
                function (a) {
                  return a.map(c).join(" ");
                },
              ];
          }
          function l(a, b) {
            return [a, b, Math.round];
          }
          (a.clamp = d),
            a.addPropertiesHandler(j, k, ["stroke-dasharray"]),
            a.addPropertiesHandler(e, i(0, 1 / 0), [
              "border-image-width",
              "line-height",
            ]),
            a.addPropertiesHandler(e, i(0, 1), [
              "opacity",
              "shape-image-threshold",
            ]),
            a.addPropertiesHandler(e, g, ["flex-grow", "flex-shrink"]),
            a.addPropertiesHandler(e, h, ["orphans", "widows"]),
            a.addPropertiesHandler(e, l, ["z-index"]),
            (a.parseNumber = e),
            (a.parseNumberList = j),
            (a.mergeNumbers = f),
            (a.numberToString = c);
        })(b),
        (function (a, b) {
          function c(a, b) {
            if ("visible" == a || "visible" == b)
              return [
                0,
                1,
                function (c) {
                  return c <= 0 ? a : c >= 1 ? b : "visible";
                },
              ];
          }
          a.addPropertiesHandler(String, c, ["visibility"]);
        })(b),
        (function (a, b) {
          function c(a) {
            (a = a.trim()), (f.fillStyle = "#000"), (f.fillStyle = a);
            var b = f.fillStyle;
            if (((f.fillStyle = "#fff"), (f.fillStyle = a), b == f.fillStyle)) {
              f.fillRect(0, 0, 1, 1);
              var c = f.getImageData(0, 0, 1, 1).data;
              f.clearRect(0, 0, 1, 1);
              var d = c[3] / 255;
              return [c[0] * d, c[1] * d, c[2] * d, d];
            }
          }
          function d(b, c) {
            return [
              b,
              c,
              function (b) {
                function c(a) {
                  return Math.max(0, Math.min(255, a));
                }
                if (b[3])
                  for (var d = 0; d < 3; d++) b[d] = Math.round(c(b[d] / b[3]));
                return (
                  (b[3] = a.numberToString(a.clamp(0, 1, b[3]))),
                  "rgba(" + b.join(",") + ")"
                );
              },
            ];
          }
          var e = document.createElementNS(
            "http://www.w3.org/1999/xhtml",
            "canvas"
          );
          e.width = e.height = 1;
          var f = e.getContext("2d");
          a.addPropertiesHandler(c, d, [
            "background-color",
            "border-bottom-color",
            "border-left-color",
            "border-right-color",
            "border-top-color",
            "color",
            "fill",
            "flood-color",
            "lighting-color",
            "outline-color",
            "stop-color",
            "stroke",
            "text-decoration-color",
          ]),
            (a.consumeColor = a.consumeParenthesised.bind(null, c)),
            (a.mergeColors = d);
        })(b),
        (function (a, b) {
          function c(a) {
            function b() {
              var b = h.exec(a);
              g = b ? b[0] : void 0;
            }
            function c() {
              var a = Number(g);
              return b(), a;
            }
            function d() {
              if ("(" !== g) return c();
              b();
              var a = f();
              return ")" !== g ? NaN : (b(), a);
            }
            function e() {
              for (var a = d(); "*" === g || "/" === g; ) {
                var c = g;
                b();
                var e = d();
                "*" === c ? (a *= e) : (a /= e);
              }
              return a;
            }
            function f() {
              for (var a = e(); "+" === g || "-" === g; ) {
                var c = g;
                b();
                var d = e();
                "+" === c ? (a += d) : (a -= d);
              }
              return a;
            }
            var g,
              h = /([\+\-\w\.]+|[\(\)\*\/])/g;
            return b(), f();
          }
          function d(a, b) {
            if ("0" == (b = b.trim().toLowerCase()) && "px".search(a) >= 0)
              return { px: 0 };
            if (/^[^(]*$|^calc/.test(b)) {
              b = b.replace(/calc\(/g, "(");
              var d = {};
              b = b.replace(a, function (a) {
                return (d[a] = null), "U" + a;
              });
              for (
                var e = "U(" + a.source + ")",
                  f = b
                    .replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g, "N")
                    .replace(new RegExp("N" + e, "g"), "D")
                    .replace(/\s[+-]\s/g, "O")
                    .replace(/\s/g, ""),
                  g = [/N\*(D)/g, /(N|D)[*\/]N/g, /(N|D)O\1/g, /\((N|D)\)/g],
                  h = 0;
                h < g.length;

              )
                g[h].test(f) ? ((f = f.replace(g[h], "$1")), (h = 0)) : h++;
              if ("D" == f) {
                for (var i in d) {
                  var j = c(
                    b
                      .replace(new RegExp("U" + i, "g"), "")
                      .replace(new RegExp(e, "g"), "*0")
                  );
                  if (!isFinite(j)) return;
                  d[i] = j;
                }
                return d;
              }
            }
          }
          function e(a, b) {
            return f(a, b, !0);
          }
          function f(b, c, d) {
            var e,
              f = [];
            for (e in b) f.push(e);
            for (e in c) f.indexOf(e) < 0 && f.push(e);
            return (
              (b = f.map(function (a) {
                return b[a] || 0;
              })),
              (c = f.map(function (a) {
                return c[a] || 0;
              })),
              [
                b,
                c,
                function (b) {
                  var c = b
                    .map(function (c, e) {
                      return (
                        1 == b.length && d && (c = Math.max(c, 0)),
                        a.numberToString(c) + f[e]
                      );
                    })
                    .join(" + ");
                  return b.length > 1 ? "calc(" + c + ")" : c;
                },
              ]
            );
          }
          var g = "px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",
            h = d.bind(null, new RegExp(g, "g")),
            i = d.bind(null, new RegExp(g + "|%", "g")),
            j = d.bind(null, /deg|rad|grad|turn/g);
          (a.parseLength = h),
            (a.parseLengthOrPercent = i),
            (a.consumeLengthOrPercent = a.consumeParenthesised.bind(null, i)),
            (a.parseAngle = j),
            (a.mergeDimensions = f);
          var k = a.consumeParenthesised.bind(null, h),
            l = a.consumeRepeated.bind(void 0, k, /^/),
            m = a.consumeRepeated.bind(void 0, l, /^,/);
          a.consumeSizePairList = m;
          var n = function (a) {
              var b = m(a);
              if (b && "" == b[1]) return b[0];
            },
            o = a.mergeNestedRepeated.bind(void 0, e, " "),
            p = a.mergeNestedRepeated.bind(void 0, o, ",");
          (a.mergeNonNegativeSizePair = o),
            a.addPropertiesHandler(n, p, ["background-size"]),
            a.addPropertiesHandler(i, e, [
              "border-bottom-width",
              "border-image-width",
              "border-left-width",
              "border-right-width",
              "border-top-width",
              "flex-basis",
              "font-size",
              "height",
              "line-height",
              "max-height",
              "max-width",
              "outline-width",
              "width",
            ]),
            a.addPropertiesHandler(i, f, [
              "border-bottom-left-radius",
              "border-bottom-right-radius",
              "border-top-left-radius",
              "border-top-right-radius",
              "bottom",
              "left",
              "letter-spacing",
              "margin-bottom",
              "margin-left",
              "margin-right",
              "margin-top",
              "min-height",
              "min-width",
              "outline-offset",
              "padding-bottom",
              "padding-left",
              "padding-right",
              "padding-top",
              "perspective",
              "right",
              "shape-margin",
              "stroke-dashoffset",
              "text-indent",
              "top",
              "vertical-align",
              "word-spacing",
            ]);
        })(b),
        (function (a, b) {
          function c(b) {
            return a.consumeLengthOrPercent(b) || a.consumeToken(/^auto/, b);
          }
          function d(b) {
            var d = a.consumeList(
              [
                a.ignore(a.consumeToken.bind(null, /^rect/)),
                a.ignore(a.consumeToken.bind(null, /^\(/)),
                a.consumeRepeated.bind(null, c, /^,/),
                a.ignore(a.consumeToken.bind(null, /^\)/)),
              ],
              b
            );
            if (d && 4 == d[0].length) return d[0];
          }
          function e(b, c) {
            return "auto" == b || "auto" == c
              ? [
                  !0,
                  !1,
                  function (d) {
                    var e = d ? b : c;
                    if ("auto" == e) return "auto";
                    var f = a.mergeDimensions(e, e);
                    return f[2](f[0]);
                  },
                ]
              : a.mergeDimensions(b, c);
          }
          function f(a) {
            return "rect(" + a + ")";
          }
          var g = a.mergeWrappedNestedRepeated.bind(null, f, e, ", ");
          (a.parseBox = d),
            (a.mergeBoxes = g),
            a.addPropertiesHandler(d, g, ["clip"]);
        })(b),
        (function (a, b) {
          function c(a) {
            return function (b) {
              var c = 0;
              return a.map(function (a) {
                return a === k ? b[c++] : a;
              });
            };
          }
          function d(a) {
            return a;
          }
          function e(b) {
            if ("none" == (b = b.toLowerCase().trim())) return [];
            for (
              var c, d = /\s*(\w+)\(([^)]*)\)/g, e = [], f = 0;
              (c = d.exec(b));

            ) {
              if (c.index != f) return;
              f = c.index + c[0].length;
              var g = c[1],
                h = n[g];
              if (!h) return;
              var i = c[2].split(","),
                j = h[0];
              if (j.length < i.length) return;
              for (var k = [], o = 0; o < j.length; o++) {
                var p,
                  q = i[o],
                  r = j[o];
                if (
                  void 0 ===
                  (p = q
                    ? {
                        A: function (b) {
                          return "0" == b.trim() ? m : a.parseAngle(b);
                        },
                        N: a.parseNumber,
                        T: a.parseLengthOrPercent,
                        L: a.parseLength,
                      }[r.toUpperCase()](q)
                    : { a: m, n: k[0], t: l }[r])
                )
                  return;
                k.push(p);
              }
              if ((e.push({ t: g, d: k }), d.lastIndex == b.length)) return e;
            }
          }
          function f(a) {
            return a.toFixed(6).replace(".000000", "");
          }
          function g(b, c) {
            if (b.decompositionPair !== c) {
              b.decompositionPair = c;
              var d = a.makeMatrixDecomposition(b);
            }
            if (c.decompositionPair !== b) {
              c.decompositionPair = b;
              var e = a.makeMatrixDecomposition(c);
            }
            return null == d[0] || null == e[0]
              ? [
                  [!1],
                  [!0],
                  function (a) {
                    return a ? c[0].d : b[0].d;
                  },
                ]
              : (d[0].push(0),
                e[0].push(1),
                [
                  d,
                  e,
                  function (b) {
                    var c = a.quat(d[0][3], e[0][3], b[5]);
                    return a
                      .composeMatrix(b[0], b[1], b[2], c, b[4])
                      .map(f)
                      .join(",");
                  },
                ]);
          }
          function h(a) {
            return a.replace(/[xy]/, "");
          }
          function i(a) {
            return a.replace(/(x|y|z|3d)?$/, "3d");
          }
          function j(b, c) {
            var d = a.makeMatrixDecomposition && !0,
              e = !1;
            if (!b.length || !c.length) {
              b.length || ((e = !0), (b = c), (c = []));
              for (var f = 0; f < b.length; f++) {
                var j = b[f].t,
                  k = b[f].d,
                  l = "scale" == j.substr(0, 5) ? 1 : 0;
                c.push({
                  t: j,
                  d: k.map(function (a) {
                    if ("number" == typeof a) return l;
                    var b = {};
                    for (var c in a) b[c] = l;
                    return b;
                  }),
                });
              }
            }
            var m = function (a, b) {
                return (
                  ("perspective" == a && "perspective" == b) ||
                  (("matrix" == a || "matrix3d" == a) &&
                    ("matrix" == b || "matrix3d" == b))
                );
              },
              o = [],
              p = [],
              q = [];
            if (b.length != c.length) {
              if (!d) return;
              var r = g(b, c);
              (o = [r[0]]), (p = [r[1]]), (q = [["matrix", [r[2]]]]);
            } else
              for (var f = 0; f < b.length; f++) {
                var j,
                  s = b[f].t,
                  t = c[f].t,
                  u = b[f].d,
                  v = c[f].d,
                  w = n[s],
                  x = n[t];
                if (m(s, t)) {
                  if (!d) return;
                  var r = g([b[f]], [c[f]]);
                  o.push(r[0]), p.push(r[1]), q.push(["matrix", [r[2]]]);
                } else {
                  if (s == t) j = s;
                  else if (w[2] && x[2] && h(s) == h(t))
                    (j = h(s)), (u = w[2](u)), (v = x[2](v));
                  else {
                    if (!w[1] || !x[1] || i(s) != i(t)) {
                      if (!d) return;
                      var r = g(b, c);
                      (o = [r[0]]), (p = [r[1]]), (q = [["matrix", [r[2]]]]);
                      break;
                    }
                    (j = i(s)), (u = w[1](u)), (v = x[1](v));
                  }
                  for (var y = [], z = [], A = [], B = 0; B < u.length; B++) {
                    var C =
                        "number" == typeof u[B]
                          ? a.mergeNumbers
                          : a.mergeDimensions,
                      r = C(u[B], v[B]);
                    (y[B] = r[0]), (z[B] = r[1]), A.push(r[2]);
                  }
                  o.push(y), p.push(z), q.push([j, A]);
                }
              }
            if (e) {
              var D = o;
              (o = p), (p = D);
            }
            return [
              o,
              p,
              function (a) {
                return a
                  .map(function (a, b) {
                    var c = a
                      .map(function (a, c) {
                        return q[b][1][c](a);
                      })
                      .join(",");
                    return (
                      "matrix" == q[b][0] &&
                        16 == c.split(",").length &&
                        (q[b][0] = "matrix3d"),
                      q[b][0] + "(" + c + ")"
                    );
                  })
                  .join(" ");
              },
            ];
          }
          var k = null,
            l = { px: 0 },
            m = { deg: 0 },
            n = {
              matrix: [
                "NNNNNN",
                [k, k, 0, 0, k, k, 0, 0, 0, 0, 1, 0, k, k, 0, 1],
                d,
              ],
              matrix3d: ["NNNNNNNNNNNNNNNN", d],
              rotate: ["A"],
              rotatex: ["A"],
              rotatey: ["A"],
              rotatez: ["A"],
              rotate3d: ["NNNA"],
              perspective: ["L"],
              scale: ["Nn", c([k, k, 1]), d],
              scalex: ["N", c([k, 1, 1]), c([k, 1])],
              scaley: ["N", c([1, k, 1]), c([1, k])],
              scalez: ["N", c([1, 1, k])],
              scale3d: ["NNN", d],
              skew: ["Aa", null, d],
              skewx: ["A", null, c([k, m])],
              skewy: ["A", null, c([m, k])],
              translate: ["Tt", c([k, k, l]), d],
              translatex: ["T", c([k, l, l]), c([k, l])],
              translatey: ["T", c([l, k, l]), c([l, k])],
              translatez: ["L", c([l, l, k])],
              translate3d: ["TTL", d],
            };
          a.addPropertiesHandler(e, j, ["transform"]),
            (a.transformToSvgMatrix = function (b) {
              var c = a.transformListToMatrix(e(b));
              return (
                "matrix(" +
                f(c[0]) +
                " " +
                f(c[1]) +
                " " +
                f(c[4]) +
                " " +
                f(c[5]) +
                " " +
                f(c[12]) +
                " " +
                f(c[13]) +
                ")"
              );
            });
        })(b),
        (function (a) {
          function b(a) {
            var b = Number(a);
            if (!(isNaN(b) || b < 100 || b > 900 || b % 100 != 0)) return b;
          }
          function c(b) {
            return (
              (b = 100 * Math.round(b / 100)),
              (b = a.clamp(100, 900, b)),
              400 === b ? "normal" : 700 === b ? "bold" : String(b)
            );
          }
          function d(a, b) {
            return [a, b, c];
          }
          a.addPropertiesHandler(b, d, ["font-weight"]);
        })(b),
        (function (a) {
          function b(a) {
            var b = {};
            for (var c in a) b[c] = -a[c];
            return b;
          }
          function c(b) {
            return (
              a.consumeToken(/^(left|center|right|top|bottom)\b/i, b) ||
              a.consumeLengthOrPercent(b)
            );
          }
          function d(b, d) {
            var e = a.consumeRepeated(c, /^/, d);
            if (e && "" == e[1]) {
              var f = e[0];
              if (
                ((f[0] = f[0] || "center"),
                (f[1] = f[1] || "center"),
                3 == b && (f[2] = f[2] || { px: 0 }),
                f.length == b)
              ) {
                if (/top|bottom/.test(f[0]) || /left|right/.test(f[1])) {
                  var h = f[0];
                  (f[0] = f[1]), (f[1] = h);
                }
                if (
                  /left|right|center|Object/.test(f[0]) &&
                  /top|bottom|center|Object/.test(f[1])
                )
                  return f.map(function (a) {
                    return "object" == typeof a ? a : g[a];
                  });
              }
            }
          }
          function e(d) {
            var e = a.consumeRepeated(c, /^/, d);
            if (e) {
              for (
                var f = e[0],
                  h = [{ "%": 50 }, { "%": 50 }],
                  i = 0,
                  j = !1,
                  k = 0;
                k < f.length;
                k++
              ) {
                var l = f[k];
                "string" == typeof l
                  ? ((j = /bottom|right/.test(l)),
                    (i = { left: 0, right: 0, center: i, top: 1, bottom: 1 }[
                      l
                    ]),
                    (h[i] = g[l]),
                    "center" == l && i++)
                  : (j && ((l = b(l)), (l["%"] = (l["%"] || 0) + 100)),
                    (h[i] = l),
                    i++,
                    (j = !1));
              }
              return [h, e[1]];
            }
          }
          function f(b) {
            var c = a.consumeRepeated(e, /^,/, b);
            if (c && "" == c[1]) return c[0];
          }
          var g = {
              left: { "%": 0 },
              center: { "%": 50 },
              right: { "%": 100 },
              top: { "%": 0 },
              bottom: { "%": 100 },
            },
            h = a.mergeNestedRepeated.bind(null, a.mergeDimensions, " ");
          a.addPropertiesHandler(d.bind(null, 3), h, ["transform-origin"]),
            a.addPropertiesHandler(d.bind(null, 2), h, ["perspective-origin"]),
            (a.consumePosition = e),
            (a.mergeOffsetList = h);
          var i = a.mergeNestedRepeated.bind(null, h, ", ");
          a.addPropertiesHandler(f, i, [
            "background-position",
            "object-position",
          ]);
        })(b),
        (function (a) {
          function b(b) {
            var c = a.consumeToken(/^circle/, b);
            if (c && c[0])
              return ["circle"].concat(
                a.consumeList(
                  [
                    a.ignore(a.consumeToken.bind(void 0, /^\(/)),
                    d,
                    a.ignore(a.consumeToken.bind(void 0, /^at/)),
                    a.consumePosition,
                    a.ignore(a.consumeToken.bind(void 0, /^\)/)),
                  ],
                  c[1]
                )
              );
            var f = a.consumeToken(/^ellipse/, b);
            if (f && f[0])
              return ["ellipse"].concat(
                a.consumeList(
                  [
                    a.ignore(a.consumeToken.bind(void 0, /^\(/)),
                    e,
                    a.ignore(a.consumeToken.bind(void 0, /^at/)),
                    a.consumePosition,
                    a.ignore(a.consumeToken.bind(void 0, /^\)/)),
                  ],
                  f[1]
                )
              );
            var g = a.consumeToken(/^polygon/, b);
            return g && g[0]
              ? ["polygon"].concat(
                  a.consumeList(
                    [
                      a.ignore(a.consumeToken.bind(void 0, /^\(/)),
                      a.optional(
                        a.consumeToken.bind(
                          void 0,
                          /^nonzero\s*,|^evenodd\s*,/
                        ),
                        "nonzero,"
                      ),
                      a.consumeSizePairList,
                      a.ignore(a.consumeToken.bind(void 0, /^\)/)),
                    ],
                    g[1]
                  )
                )
              : void 0;
          }
          function c(b, c) {
            if (b[0] === c[0])
              return "circle" == b[0]
                ? a.mergeList(b.slice(1), c.slice(1), [
                    "circle(",
                    a.mergeDimensions,
                    " at ",
                    a.mergeOffsetList,
                    ")",
                  ])
                : "ellipse" == b[0]
                ? a.mergeList(b.slice(1), c.slice(1), [
                    "ellipse(",
                    a.mergeNonNegativeSizePair,
                    " at ",
                    a.mergeOffsetList,
                    ")",
                  ])
                : "polygon" == b[0] && b[1] == c[1]
                ? a.mergeList(b.slice(2), c.slice(2), [
                    "polygon(",
                    b[1],
                    g,
                    ")",
                  ])
                : void 0;
          }
          var d = a.consumeParenthesised.bind(null, a.parseLengthOrPercent),
            e = a.consumeRepeated.bind(void 0, d, /^/),
            f = a.mergeNestedRepeated.bind(void 0, a.mergeDimensions, " "),
            g = a.mergeNestedRepeated.bind(void 0, f, ",");
          a.addPropertiesHandler(b, c, ["shape-outside"]);
        })(b),
        (function (a, b) {
          function c(a, b) {
            b.concat([a]).forEach(function (b) {
              b in document.documentElement.style && (d[a] = b), (e[b] = a);
            });
          }
          var d = {},
            e = {};
          c("transform", ["webkitTransform", "msTransform"]),
            c("transformOrigin", ["webkitTransformOrigin"]),
            c("perspective", ["webkitPerspective"]),
            c("perspectiveOrigin", ["webkitPerspectiveOrigin"]),
            (a.propertyName = function (a) {
              return d[a] || a;
            }),
            (a.unprefixedPropertyName = function (a) {
              return e[a] || a;
            });
        })(b);
    })(),
    (function () {
      if (void 0 === document.createElement("div").animate([]).oncancel) {
        var a;
        if (window.performance && performance.now)
          var a = function () {
            return performance.now();
          };
        else
          var a = function () {
            return Date.now();
          };
        var b = function (a, b, c) {
            (this.target = a),
              (this.currentTime = b),
              (this.timelineTime = c),
              (this.type = "cancel"),
              (this.bubbles = !1),
              (this.cancelable = !1),
              (this.currentTarget = a),
              (this.defaultPrevented = !1),
              (this.eventPhase = Event.AT_TARGET),
              (this.timeStamp = Date.now());
          },
          c = window.Element.prototype.animate;
        window.Element.prototype.animate = function (d, e) {
          var f = c.call(this, d, e);
          (f._cancelHandlers = []), (f.oncancel = null);
          var g = f.cancel;
          f.cancel = function () {
            g.call(this);
            var c = new b(this, null, a()),
              d = this._cancelHandlers.concat(
                this.oncancel ? [this.oncancel] : []
              );
            setTimeout(function () {
              d.forEach(function (a) {
                a.call(c.target, c);
              });
            }, 0);
          };
          var h = f.addEventListener;
          f.addEventListener = function (a, b) {
            "function" == typeof b && "cancel" == a
              ? this._cancelHandlers.push(b)
              : h.call(this, a, b);
          };
          var i = f.removeEventListener;
          return (
            (f.removeEventListener = function (a, b) {
              if ("cancel" == a) {
                var c = this._cancelHandlers.indexOf(b);
                c >= 0 && this._cancelHandlers.splice(c, 1);
              } else i.call(this, a, b);
            }),
            f
          );
        };
      }
    })(),
    (function (a) {
      var b = document.documentElement,
        c = null,
        d = !1;
      try {
        var e = getComputedStyle(b).getPropertyValue("opacity"),
          f = "0" == e ? "1" : "0";
        (c = b.animate({ opacity: [f, f] }, { duration: 1 })),
          (c.currentTime = 0),
          (d = getComputedStyle(b).getPropertyValue("opacity") == f);
      } catch (a) {
      } finally {
        c && c.cancel();
      }
      if (!d) {
        var g = window.Element.prototype.animate;
        window.Element.prototype.animate = function (b, c) {
          return (
            window.Symbol &&
              Symbol.iterator &&
              Array.prototype.from &&
              b[Symbol.iterator] &&
              (b = Array.from(b)),
            Array.isArray(b) || null === b || (b = a.convertToArrayForm(b)),
            g.call(this, b, c)
          );
        };
      }
    })(a);
})();
jQuery(function ($) {
  "use strict";
  $.exists = function (selector) {
    return $(selector).length > 0;
  };
  if ($.exists("#tb-ball-wrap")) {
    const colors = ["#3CC157", "#2AA7FF", "#FCBC0F", "#F85F36"];
    const numBalls = 40;
    const balls = [];
    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement("div");
      ball.classList.add("tb-ball");
      ball.style.background = colors[Math.floor(Math.random() * colors.length)];
      ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
      ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
      ball.style.transform = `scale(${Math.random()})`;
      ball.style.width = `${Math.random()}em`;
      ball.style.height = ball.style.width;
      balls.push(ball);
      document.getElementById("tb-ball-wrap").append(ball);
    }
    balls.forEach((el, i, ra) => {
      let to = {
        x: Math.random() * (i % 2 === 0 ? -11 : 11),
        y: Math.random() * 12,
      };
      let anim = el.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` },
        ],
        {
          duration: (Math.random() + 1) * 2000,
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });
  }
});
jQuery,
  jQuery(document).ready(function (s) {
    var t,
      e,
      a = 2500,
      n = 3800,
      r = n - 3e3,
      l = 50,
      d = 150,
      o = 500,
      c = o + 800,
      p = 600,
      u = 1500;
    function h(t) {
      var i = C(t);
      if (t.parents(".tb-text-slider").hasClass("tb-type")) {
        var e = t.parent(".tb-words-wrapper");
        e.addClass("selected").removeClass("tb-waiting"),
          setTimeout(function () {
            e.removeClass("selected"),
              t
                .removeClass("is-visible")
                .addClass("is-hidden")
                .children("i")
                .removeClass("in")
                .addClass("out");
          }, o),
          setTimeout(function () {
            f(i, d);
          }, c);
      } else if (t.parents(".tb-text-slider").hasClass("tb-letters")) {
        var u = t.children("i").length >= i.children("i").length;
        !(function t(i, e, n, r) {
          if (
            (i.removeClass("in").addClass("out"),
            i.is(":last-child")
              ? n &&
                setTimeout(function () {
                  h(C(e));
                }, a)
              : setTimeout(function () {
                  t(i.next(), e, n, r);
                }, r),
            i.is(":last-child") && s("html").hasClass("no-csstransitions"))
          ) {
            var l = C(e);
            m(e, l);
          }
        })(t.find("i").eq(0), t, u, l),
          b(i.find("i").eq(0), i, u, l);
      } else
        t.parents(".tb-text-slider").hasClass("clip")
          ? t
              .parents(".tb-words-wrapper")
              .animate({ width: "2px" }, p, function () {
                m(t, i), f(i);
              })
          : t.parents(".tb-text-slider").hasClass("loading-bar")
          ? (t.parents(".tb-words-wrapper").removeClass("is-loading"),
            m(t, i),
            setTimeout(function () {
              h(i);
            }, n),
            setTimeout(function () {
              t.parents(".tb-words-wrapper").addClass("is-loading");
            }, r))
          : (m(t, i),
            setTimeout(function () {
              h(i);
            }, a));
    }
    function f(s, t) {
      s.parents(".tb-text-slider").hasClass("tb-type")
        ? (b(s.find("i").eq(0), s, !1, t),
          s.addClass("is-visible").removeClass("is-hidden"))
        : s.parents(".tb-text-slider").hasClass("clip") &&
          s
            .parents(".tb-words-wrapper")
            .animate({ width: s.width() + 10 }, p, function () {
              setTimeout(function () {
                h(s);
              }, u);
            });
    }
    function b(s, t, i, e) {
      s.addClass("in").removeClass("out"),
        s.is(":last-child")
          ? (t.parents(".tb-text-slider").hasClass("tb-type") &&
              setTimeout(function () {
                t.parents(".tb-words-wrapper").addClass("tb-waiting");
              }, 200),
            i ||
              setTimeout(function () {
                h(t);
              }, a))
          : setTimeout(function () {
              b(s.next(), t, i, e);
            }, e);
    }
    function C(s) {
      return s.is(":last-child") ? s.parent().children().eq(0) : s.next();
    }
    function m(s, t) {
      s.removeClass("is-visible").addClass("is-hidden"),
        t.removeClass("is-hidden").addClass("is-visible");
    }
    s(".tb-text-slider.tb-letters")
      .find("b")
      .each(function () {
        var t = s(this),
          e = t.text().split(""),
          a = t.hasClass("is-visible");
        for (i in e)
          t.parents(".rotate-2").length > 0 && (e[i] = "<em>" + e[i] + "</em>"),
            (e[i] = a
              ? '<i class="in">' + e[i] + "</i>"
              : "<i>" + e[i] + "</i>");
        var n = e.join("");
        t.html(n).css("opacity", 1);
      }),
      (t = s(".tb-text-slider")),
      (e = a),
      t.each(function () {
        var t = s(this);
        if (t.hasClass("loading-bar"))
          (e = n),
            setTimeout(function () {
              t.find(".tb-words-wrapper").addClass("is-loading");
            }, r);
        else if (t.hasClass("clip")) {
          var i = t.find(".tb-words-wrapper"),
            a = i.width() + 10;
          i.css("width", a);
        } else if (!t.hasClass("tb-type")) {
          var l = t.find(".tb-words-wrapper b"),
            d = 0;
          l.each(function () {
            var t = s(this).width();
            t > d && (d = t);
          }),
            t.find(".tb-words-wrapper").css("width", d);
        }
        setTimeout(function () {
          h(t.find(".is-visible").eq(0));
        }, e);
      });
  });
(function ($) {
  $.exists = function (selector) {
    return $(selector).length > 0;
  };
  if ($.exists("#tb-svg-wave")) {
    var colors = ["rgba(255, 255, 255, 0.6)", "rgba(255, 255, 255, 1)"];
    var componentWidth = "100%";
    var componentHeight = "200";
    var width = 400,
      height = 32,
      deepth = 150,
      speed = 3,
      speedOffset = 1,
      focus = 0.5,
      offset = -width * 0.75,
      waveCount = 0;
    var x = [0, offset];
    var cacheData = ["", ""];
    var svgWave = document.querySelector("#tb-svg-wave");
    var paths = svgWave.querySelectorAll("path");
    var path1 = paths[0],
      path2 = paths[1];
    config();
    var oldFunc = window.onresize;
    window.onresize = function () {
      oldFunc && oldFunc();
      config(!0);
    };
    requestAnimationFrame(wave);
    function config(resize) {
      cacheData = ["", ""];
      svgWave.setAttribute("width", componentWidth);
      svgWave.setAttribute("height", componentHeight);
      var pxWidth =
        componentWidth == "100%"
          ? svgWave.parentNode.clientWidth
          : componentWidth;
      waveCount = Math.ceil(pxWidth / width / 1) + 1;
      if (resize == !0) return;
      path1.setAttribute("fill", colors[0]);
      path2.setAttribute("fill", colors[1]);
    }
    function wave() {
      path1.setAttribute("d", generateData(0));
      path2.setAttribute("d", generateData(1));
      x[0] -= speed;
      x[1] -= speed + speedOffset;
      requestAnimationFrame(wave);
    }
    function generateData(index) {
      if (x[index] % (width * 2) == 0) {
        x[index] = 0;
      }
      var startX = x[index],
        startY = height;
      var start = [startX, startY].join(",");
      if (cacheData[index] == "") {
        var c_x1 = (width / 4) * (focus + 1),
          c_y1 = (c_y2 = -height / 2),
          c_x2 = width - c_x1,
          c_x = width,
          c_y = 0;
        var curvetoUp = [c_x1, c_y1, c_x2, c_y2, c_x, c_y].join(" ");
        c_y1 = c_y2 = height / 2;
        var curvetoDown = [c_x1, c_y1, c_x2, c_y2, c_x, c_y].join(" ");
        var curvetoData = "";
        for (var i = 0; i < waveCount; i++) {
          curvetoData = curvetoData + "c" + curvetoUp + "c" + curvetoDown;
        }
        var end = "l0," + deepth + " l-" + waveCount * width * 2 + ",0Z";
        cacheData[index] = [curvetoData, end].join("");
      }
      return ["M", start, cacheData[index]].join("");
    }
  }
})(jQuery);
!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  ((e = (function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    };
  })()).prototype.addSlide = e.prototype.slickAdd =
    function (e, t, o) {
      var s = this;
      if ("boolean" == typeof t) (o = t), (t = null);
      else if (t < 0 || t >= s.slideCount) return !1;
      s.unload(),
        "number" == typeof t
          ? 0 === t && 0 === s.$slides.length
            ? i(e).appendTo(s.$slideTrack)
            : o
            ? i(e).insertBefore(s.$slides.eq(t))
            : i(e).insertAfter(s.$slides.eq(t))
          : !0 === o
          ? i(e).prependTo(s.$slideTrack)
          : i(e).appendTo(s.$slideTrack),
        (s.$slides = s.$slideTrack.children(this.options.slide)),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each(function (e, t) {
          i(t).attr("data-slick-index", e);
        }),
        (s.$slidesCache = s.$slides),
        s.reinit();
    }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this.options.asNavFor;
      return e && null !== e && (e = i(e).not(this.$slider)), e;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget();
      null !== t &&
        "object" == typeof t &&
        t.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (!0 === o.options.dots && o.slideCount > o.options.slidesToShow) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 0)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        for (o in ((s = null), r.breakpoints))
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n = this,
        r = i(e.currentTarget);
      switch (
        (r.is("a") && e.preventDefault(),
        r.is("li") || (r = r.closest("li")),
        (o =
          n.slideCount % n.options.slidesToScroll != 0
            ? 0
            : (n.slideCount - n.currentSlide) % n.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? n.options.slidesToScroll : n.options.slidesToShow - o),
            n.slideCount > n.options.slidesToShow &&
              n.slideHandler(n.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? n.options.slidesToScroll : o),
            n.slideCount > n.options.slidesToShow &&
              n.slideHandler(n.currentSlide + s, !1, t);
          break;
        case "index":
          var l =
            0 === e.data.index
              ? 0
              : e.data.index || r.index() * n.options.slidesToScroll;
          n.slideHandler(n.checkNavigable(l), !1, t),
            r.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t;
      if (((t = 0), i > (e = this.getNavigableIndexes())[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility &&
          e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 0 &&
        ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*", function (t) {
          t.stopImmediatePropagation();
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              ((e.focussed = o.is(":focus")), e.autoPlay());
          }, 0);
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          !1 === n.options.vertical
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        return this.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll),
            (o = -1 * e.options.slidesToScroll),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o = this;
      return (
        (t =
          !0 === o.options.centerMode
            ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
            : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return (e = n), !1;
            }),
            Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
          : o.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      null !== e.$dots &&
        (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
          var s = o.indexOf(t);
          if (
            (i(this).attr({
              role: "tabpanel",
              id: "slick-slide" + e.instanceUid + t,
              tabindex: -1,
            }),
            -1 !== s)
          ) {
            var n = "slick-slide-control" + e.instanceUid + s;
            i("#" + n).length && i(this).attr({ "aria-describedby": n });
          }
        }),
        e.$dots
          .attr("role", "tablist")
          .find("li")
          .each(function (s) {
            var n = o[s];
            i(this).attr({ role: "presentation" }),
              i(this)
                .find("button")
                .first()
                .attr({
                  role: "tab",
                  id: "slick-slide-control" + e.instanceUid + s,
                  "aria-controls": "slick-slide" + e.instanceUid + n,
                  "aria-label": s + 1 + " of " + t,
                  "aria-selected": null,
                  tabindex: "-1",
                });
          })
          .eq(e.currentSlide)
          .find("button")
          .attr({ "aria-selected": "true", tabindex: "0" })
          .end());
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        e.slideCount > e.options.slidesToShow &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        !0 === e.options.accessibility &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          e.slideCount > e.options.slidesToShow &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility &&
          e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      var e,
        t,
        o,
        s = this;
      function n(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            n = i(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
            r = document.createElement("img");
          (r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), n && e.attr("sizes", n)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                s.$slider.trigger("lazyLoaded", [s, e, t]);
            });
          }),
            (r.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                s.$slider.trigger("lazyLoadError", [s, e, t]);
            }),
            (r.src = t);
        });
      }
      if (
        (!0 === s.options.centerMode
          ? !0 === s.options.infinite
            ? (o =
                (t = s.currentSlide + (s.options.slidesToShow / 2 + 1)) +
                s.options.slidesToShow +
                2)
            : ((t = Math.max(
                0,
                s.currentSlide - (s.options.slidesToShow / 2 + 1)
              )),
              (o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide))
          : ((t = s.options.infinite
              ? s.options.slidesToShow + s.currentSlide
              : s.currentSlide),
            (o = Math.ceil(t + s.options.slidesToShow)),
            !0 === s.options.fade && (t > 0 && t--, o <= s.slideCount && o++)),
        (e = s.$slider.find(".slick-slide").slice(t, o)),
        "anticipated" === s.options.lazyLoad)
      )
        for (
          var r = t - 1, l = o, d = s.$slider.find(".slick-slide"), a = 0;
          a < s.options.slidesToScroll;
          a++
        )
          r < 0 && (r = s.slideCount - 1),
            (e = (e = e.add(d.eq(r))).add(d.eq(l))),
            r--,
            l++;
      n(e),
        s.slideCount <= s.options.slidesToShow
          ? n(s.$slider.find(".slick-slide"))
          : s.currentSlide >= s.slideCount - s.options.slidesToShow
          ? n(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow))
          : 0 === s.currentSlide &&
            n(
              s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow)
            );
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: "next" } });
      }),
    (e.prototype.orientationChange = function () {
      this.checkResponsive(), this.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        this.autoPlayClear(), (this.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(),
          t.options.focusOnChange &&
            i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          ((r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        for (e in ((s.respondTo = s.options.respondTo || "window"), n))
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        if (
          ((i =
            "boolean" == typeof i
              ? !0 === (e = i)
                ? 0
                : o.slideCount - 1
              : !0 === e
              ? --i
              : i),
          o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
        )
          return !1;
        o.unload(),
          !0 === t
            ? o.$slideTrack.children().remove()
            : o.$slideTrack.children(this.options.slide).eq(i).remove(),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ("object" === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
            : "string" === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              "responsive" === arguments[0] && "array" === i.type(arguments[1])
                ? (n = "responsive")
                : void 0 !== arguments[1] && (n = "single")),
          "single" === n)
        )
          r.options[o] = s;
        else if ("multiple" === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ("responsive" === n)
          for (t in s)
            if ("array" !== i.type(r.options.responsive))
              r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite &&
          !1 === s.options.fade &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      i || this.autoPlay(), (this.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? t.slideHandler(s, !1, !0)
          : t.slideHandler(s);
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d,
        a = this;
      if (
        ((e = e || !1),
        !(
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === i)
        ))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (l = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t && a.slideCount > a.options.slidesToShow
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t && a.slideCount > a.options.slidesToShow
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (d = (d = a.getNavTarget()).slick("getSlick")).slideCount <=
                d.options.slidesToShow &&
              d.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s);
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            );
          !0 !== t && a.slideCount > a.options.slidesToShow
            ? a.animateSlide(l, function () {
                a.postSlide(s);
              })
            : a.postSlide(s);
        }
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? "right"
            : "left"
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (!0 === o.touchObject.edgeHit &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ("ontouchend" in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return (t.touchObject = {}), !1;
      void 0 !== i.originalEvent &&
        void 0 !== i.originalEvent.touches &&
        (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX =
          void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY =
          void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0);
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          i.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === i.currentSlide
            ? (i.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
              !1 === i.options.centerMode
            ? (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return o;
    });
});
/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
!(function (t, e) {
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = e(t, require("jquery")))
    : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
  "use strict";
  function i(i, s, a) {
    function u(t, e, o) {
      var n,
        s = "$()." + i + '("' + e + '")';
      return (
        t.each(function (t, u) {
          var h = a.data(u, i);
          if (!h)
            return void r(
              i + " not initialized. Cannot call methods, i.e. " + s
            );
          var d = h[e];
          if (!d || "_" == e.charAt(0))
            return void r(s + " is not a valid method");
          var l = d.apply(h, o);
          n = void 0 === n ? l : n;
        }),
        void 0 !== n ? n : t
      );
    }
    function h(t, e) {
      t.each(function (t, o) {
        var n = a.data(o, i);
        n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n));
      });
    }
    (a = a || e || t.jQuery),
      a &&
        (s.prototype.option ||
          (s.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[i] = function (t) {
          if ("string" == typeof t) {
            var e = n.call(arguments, 1);
            return u(this, t, e);
          }
          return h(this, t), this;
        }),
        o(a));
  }
  function o(t) {
    !t || (t && t.bridget) || (t.bridget = i);
  }
  var n = Array.prototype.slice,
    s = t.console,
    r =
      "undefined" == typeof s
        ? function () {}
        : function (t) {
            s.error(t);
          };
  return o(e || t.jQuery), i;
}),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            o = (i[t] = i[t] || []);
          return o.indexOf(e) == -1 && o.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            o = (i[t] = i[t] || {});
          return (o[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var o = i.indexOf(e);
          return o != -1 && i.splice(o, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var o = this._onceEvents && this._onceEvents[t], n = 0;
            n < i.length;
            n++
          ) {
            var s = i[n],
              r = o && o[s];
            r && (this.off(t, s), delete o[s]), s.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = t.indexOf("%") == -1 && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        e < h;
        e++
      ) {
        var i = u[e];
        t[i] = 0;
      }
      return t;
    }
    function o(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function n() {
      if (!d) {
        d = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var n = o(e);
        (r = 200 == Math.round(t(n.width))),
          (s.isBoxSizeOuter = r),
          i.removeChild(e);
      }
    }
    function s(e) {
      if (
        (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var s = o(e);
        if ("none" == s.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var d = (a.isBorderBox = "border-box" == s.boxSizing), l = 0;
          l < h;
          l++
        ) {
          var f = u[l],
            c = s[f],
            m = parseFloat(c);
          a[f] = isNaN(m) ? 0 : m;
        }
        var p = a.paddingLeft + a.paddingRight,
          y = a.paddingTop + a.paddingBottom,
          g = a.marginLeft + a.marginRight,
          v = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          z = a.borderTopWidth + a.borderBottomWidth,
          I = d && r,
          x = t(s.width);
        x !== !1 && (a.width = x + (I ? 0 : p + _));
        var S = t(s.height);
        return (
          S !== !1 && (a.height = S + (I ? 0 : y + z)),
          (a.innerWidth = a.width - (p + _)),
          (a.innerHeight = a.height - (y + z)),
          (a.outerWidth = a.width + g),
          (a.outerHeight = a.height + v),
          a
        );
      }
    }
    var r,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      u = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      h = u.length,
      d = !1;
    return s;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var o = e[i],
          n = o + "MatchesSelector";
        if (t[n]) return n;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      });
    var o = Array.prototype.slice;
    (i.makeArray = function (t) {
      if (Array.isArray(t)) return t;
      if (null === t || void 0 === t) return [];
      var e = "object" == typeof t && "number" == typeof t.length;
      return e ? o.call(t) : [t];
    }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, o) {
        t = i.makeArray(t);
        var n = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!o) return void n.push(t);
              e(t, o) && n.push(t);
              for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                n.push(i[s]);
            }
          }),
          n
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var o = t.prototype[e],
          n = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[n];
          clearTimeout(t);
          var e = arguments,
            s = this;
          this[n] = setTimeout(function () {
            o.apply(s, e), delete s[n];
          }, i);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, o) {
        i.docReady(function () {
          var s = i.toDashed(o),
            r = "data-" + s,
            a = document.querySelectorAll("[" + r + "]"),
            u = document.querySelectorAll(".js-" + s),
            h = i.makeArray(a).concat(i.makeArray(u)),
            d = r + "-options",
            l = t.jQuery;
          h.forEach(function (t) {
            var i,
              s = t.getAttribute(r) || t.getAttribute(d);
            try {
              i = s && JSON.parse(s);
            } catch (a) {
              return void (
                n &&
                n.error("Error parsing " + r + " on " + t.className + ": " + a)
              );
            }
            var u = new e(t, i);
            l && l.data(t, o, u);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function o(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    function n(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      u = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[r],
      h = {
        transform: a,
        transition: r,
        transitionDuration: r + "Duration",
        transitionProperty: r + "Property",
        transitionDelay: r + "Delay",
      },
      d = (o.prototype = Object.create(t.prototype));
    (d.constructor = o),
      (d._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (d.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (d.getSize = function () {
        this.size = e(this.element);
      }),
      (d.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var o = h[i] || i;
          e[o] = t[i];
        }
      }),
      (d.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = t[e ? "left" : "right"],
          n = t[i ? "top" : "bottom"],
          s = parseFloat(o),
          r = parseFloat(n),
          a = this.layout.size;
        o.indexOf("%") != -1 && (s = (s / 100) * a.width),
          n.indexOf("%") != -1 && (r = (r / 100) * a.height),
          (s = isNaN(s) ? 0 : s),
          (r = isNaN(r) ? 0 : r),
          (s -= e ? a.paddingLeft : a.paddingRight),
          (r -= i ? a.paddingTop : a.paddingBottom),
          (this.position.x = s),
          (this.position.y = r);
      }),
      (d.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop"),
          n = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + t[n];
        (e[s] = this.getXValue(a)), (e[r] = "");
        var u = o ? "paddingTop" : "paddingBottom",
          h = o ? "top" : "bottom",
          d = o ? "bottom" : "top",
          l = this.position.y + t[u];
        (e[h] = this.getYValue(l)),
          (e[d] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (d.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (d.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (d._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          o = this.position.y,
          n = t == this.position.x && e == this.position.y;
        if ((this.setPosition(t, e), n && !this.isTransitioning))
          return void this.layoutPosition();
        var s = t - i,
          r = e - o,
          a = {};
        (a.transform = this.getTranslate(s, r)),
          this.transition({
            to: a,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
      (d.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = o ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (d.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (d.moveTo = d._transitionTo),
      (d.setPosition = function (t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (d._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (d.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var o = this.element.offsetHeight;
          o = null;
        }
        this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0);
      });
    var l = "opacity," + n(a);
    (d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: l,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(u, this, !1);
      }
    }),
      (d.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (d.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var f = { "-webkit-transform": "transform" };
    (d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          o = f[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[o],
          i(e.ingProperties) && this.disableTransition(),
          o in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[o]),
          o in e.onEnd)
        ) {
          var n = e.onEnd[o];
          n.call(this), delete e.onEnd[o];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (d.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(u, this, !1),
          (this.isTransitioning = !1);
      }),
      (d._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var c = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (d.removeTransitionStyles = function () {
        this.css(c);
      }),
      (d.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (d.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (d.remove = function () {
        return r && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (d.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (d.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (d.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (d.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (d.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      o
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, o, n, s) {
            return e(t, i, o, n, s);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, o, n) {
    "use strict";
    function s(t, e) {
      var i = o.getQueryElement(t);
      if (!i)
        return void (
          u &&
          u.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        h && (this.$element = h(this.element)),
        (this.options = o.extend({}, this.constructor.defaults)),
        this.option(e);
      var n = ++l;
      (this.element.outlayerGUID = n), (f[n] = this), this._create();
      var s = this._getOption("initLayout");
      s && this.layout();
    }
    function r(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        o = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var n = m[o] || 1;
      return i * n;
    }
    var u = t.console,
      h = t.jQuery,
      d = function () {},
      l = 0,
      f = {};
    (s.namespace = "outlayer"),
      (s.Item = n),
      (s.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var c = s.prototype;
    o.extend(c, e.prototype),
      (c.option = function (t) {
        o.extend(this.options, t);
      }),
      (c._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (c._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          o.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (c.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (c._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            o = [],
            n = 0;
          n < e.length;
          n++
        ) {
          var s = e[n],
            r = new i(s, this);
          o.push(r);
        }
        return o;
      }),
      (c._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector);
      }),
      (c.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (c.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (c._init = c.layout),
      (c._resetLayout = function () {
        this.getSize();
      }),
      (c.getSize = function () {
        this.size = i(this.element);
      }),
      (c._getMeasurement = function (t, e) {
        var o,
          n = this.options[t];
        n
          ? ("string" == typeof n
              ? (o = this.element.querySelector(n))
              : n instanceof HTMLElement && (o = n),
            (this[t] = o ? i(o)[e] : n))
          : (this[t] = 0);
      }),
      (c.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (c._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (c._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var o = this._getItemLayoutPosition(t);
            (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (c._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (c._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (c.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (c._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
      }),
      (c._postLayout = function () {
        this.resizeContainer();
      }),
      (c.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (c._getContainerSize = d),
      (c._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (c._emitCompleteOnItems = function (t, e) {
        function i() {
          n.dispatchEvent(t + "Complete", null, [e]);
        }
        function o() {
          r++, r == s && i();
        }
        var n = this,
          s = e.length;
        if (!e || !s) return void i();
        var r = 0;
        e.forEach(function (e) {
          e.once(t, o);
        });
      }),
      (c.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, o), h))
          if (((this.$element = this.$element || h(this.element)), e)) {
            var n = h.Event(e);
            (n.type = t), this.$element.trigger(n, i);
          } else this.$element.trigger(t, i);
      }),
      (c.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (c.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (c.stamp = function (t) {
        (t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this));
      }),
      (c.unstamp = function (t) {
        (t = this._find(t)),
          t &&
            t.forEach(function (t) {
              o.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (c._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = o.makeArray(t))
          );
      }),
      (c._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (c._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (c._manageStamp = d),
      (c._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          o = this._boundingRect,
          n = i(t),
          s = {
            left: e.left - o.left - n.marginLeft,
            top: e.top - o.top - n.marginTop,
            right: o.right - e.right - n.marginRight,
            bottom: o.bottom - e.bottom - n.marginBottom,
          };
        return s;
      }),
      (c.handleEvent = o.handleEvent),
      (c.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (c.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (c.onresize = function () {
        this.resize();
      }),
      o.debounceMethod(s, "onresize", 100),
      (c.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (c.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (c.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (c.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (c.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (c.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (c.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (c.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (c.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (c.getItems = function (t) {
        t = o.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (c.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), o.removeFrom(this.items, t);
            }, this);
      }),
      (c.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
          delete this.element.outlayerGUID,
          h && h.removeData(this.element, this.constructor.namespace);
      }),
      (s.data = function (t) {
        t = o.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e];
      }),
      (s.create = function (t, e) {
        var i = r(s);
        return (
          (i.defaults = o.extend({}, s.defaults)),
          o.extend(i.defaults, e),
          (i.compatOptions = o.extend({}, s.compatOptions)),
          (i.namespace = t),
          (i.data = s.data),
          (i.Item = r(n)),
          o.htmlInit(i, t),
          h && h.bridget && h.bridget(t, i),
          i
        );
      });
    var m = { ms: 1, s: 1e3 };
    return (s.Item = n), s;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      o = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var o = e[i];
            this.sortData[i] = o(this.element, this);
          }
        }
      });
    var n = i.destroy;
    return (
      (i.destroy = function () {
        n.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var o = i.prototype,
      n = [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ];
    return (
      n.forEach(function (t) {
        o[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
          i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight;
      }),
      (o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (o.getSegmentSize = function (t, e) {
        var i = t + e,
          o = "outer" + e;
        if ((this._getMeasurement(i, o), !this[i])) {
          var n = this.getFirstItemSize();
          this[i] = (n && n[o]) || this.isotope.size["inner" + e];
        }
      }),
      (o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (o.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function n() {
          i.apply(this, arguments);
        }
        return (
          (n.prototype = Object.create(o)),
          (n.prototype.constructor = n),
          e && (n.options = e),
          (n.prototype.namespace = t),
          (i.modes[t] = n),
          n
        );
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "masonry-layout/masonry",
          ["outlayer/outlayer", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return (
      (o._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (o.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var o = (this.columnWidth += this.gutter),
          n = this.containerWidth + this.gutter,
          s = n / o,
          r = o - (n % o),
          a = r && r < 1 ? "round" : "floor";
        (s = Math[a](s)), (this.cols = Math.max(s, 1));
      }),
      (o.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          o = e(i);
        this.containerWidth = o && o.innerWidth;
      }),
      (o._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && e < 1 ? "round" : "ceil",
          o = Math[i](t.size.outerWidth / this.columnWidth);
        o = Math.min(o, this.cols);
        for (
          var n = this.options.horizontalOrder
              ? "_getHorizontalColPosition"
              : "_getTopColPosition",
            s = this[n](o, t),
            r = { x: this.columnWidth * s.col, y: s.y },
            a = s.y + t.size.outerHeight,
            u = o + s.col,
            h = s.col;
          h < u;
          h++
        )
          this.colYs[h] = a;
        return r;
      }),
      (o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
          e[o] = this._getColGroupY(o, t);
        return e;
      }),
      (o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols,
          o = t > 1 && i + t > this.cols;
        i = o ? 0 : i;
        var n = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = n ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        );
      }),
      (o._manageStamp = function (t) {
        var i = e(t),
          o = this._getElementOffset(t),
          n = this._getOption("originLeft"),
          s = n ? o.left : o.right,
          r = s + i.outerWidth,
          a = Math.floor(s / this.columnWidth);
        a = Math.max(0, a);
        var u = Math.floor(r / this.columnWidth);
        (u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u));
        for (
          var h = this._getOption("originTop"),
            d = (h ? o.top : o.bottom) + i.outerHeight,
            l = a;
          l <= u;
          l++
        )
          this.colYs[l] = Math.max(d, this.colYs[l]);
      }),
      (o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (o.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-modes/masonry",
          ["../layout-mode", "masonry-layout/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      o = i.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var a = o._getOption;
    return (
      (o._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var o = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          o
        );
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
          ],
          function (i, o, n, s, r, a) {
            return e(t, i, o, n, s, r, a);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
      return function (i, o) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
            r = i.sortData[s],
            a = o.sortData[s];
          if (r > a || r < a) {
            var u = void 0 !== e[s] ? e[s] : e,
              h = u ? 1 : -1;
            return (r > a ? 1 : -1) * h;
          }
        }
        return 0;
      };
    }
    var u = t.jQuery,
      h = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      d = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (d.Item = s), (d.LayoutMode = r);
    var l = d.prototype;
    (l._create = function () {
      (this.itemGUID = 0),
        (this._sorters = {}),
        this._getSorters(),
        e.prototype._create.call(this),
        (this.modes = {}),
        (this.filteredItems = this.items),
        (this.sortHistory = ["original-order"]);
      for (var t in r.modes) this._initLayoutMode(t);
    }),
      (l.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (l._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          var o = t[i];
          o.id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (l._initLayoutMode = function (t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? n.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (l.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout")
          ? void this.arrange()
          : void this._layout();
      }),
      (l._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (l.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (l._init = l.arrange),
      (l._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (l._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (l._bindArrangeComplete = function () {
        function t() {
          e &&
            i &&
            o &&
            n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
        }
        var e,
          i,
          o,
          n = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (o = !0), t();
          });
      }),
      (l._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (
          var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0;
          r < t.length;
          r++
        ) {
          var a = t[r];
          if (!a.isIgnored) {
            var u = s(a);
            u && i.push(a),
              u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
          }
        }
        return { matches: i, needReveal: o, needHide: n };
      }),
      (l._getFilterTest = function (t) {
        return u && this.options.isJQueryFiltering
          ? function (e) {
              return u(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return o(e.element, t);
            };
      }),
      (l.updateSortData = function (t) {
        var e;
        t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (l._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = f(i);
        }
      }),
      (l._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          var o = t[i];
          o.updateSortData();
        }
      });
    var f = (function () {
      function t(t) {
        if ("string" != typeof t) return t;
        var i = h(t).split(" "),
          o = i[0],
          n = o.match(/^\[(.+)\]$/),
          s = n && n[1],
          r = e(s, o),
          a = d.sortDataParsers[i[1]];
        return (t = a
          ? function (t) {
              return t && a(r(t));
            }
          : function (t) {
              return t && r(t);
            });
      }
      function e(t, e) {
        return t
          ? function (e) {
              return e.getAttribute(t);
            }
          : function (t) {
              var i = t.querySelector(e);
              return i && i.textContent;
            };
      }
      return t;
    })();
    (d.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (l._sort = function () {
        if (this.options.sortBy) {
          var t = n.makeArray(this.options.sortBy);
          this._getIsSameSortBy(t) ||
            (this.sortHistory = t.concat(this.sortHistory));
          var e = a(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(e);
        }
      }),
      (l._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0;
      }),
      (l._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (l._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (l._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (l._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (l._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (l.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (l.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (l.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (l._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (l.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            o,
            n = e.length;
          for (i = 0; i < n; i++)
            (o = e[i]), this.element.appendChild(o.element);
          var s = this._filter(e).matches;
          for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
          this.reveal(s);
        }
      });
    var c = l.remove;
    return (
      (l.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        c.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
          var s = e[o];
          n.removeFrom(this.filteredItems, s);
        }
      }),
      (l.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t];
          e.sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (l._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return (this.options.transitionDuration = i), o;
      }),
      (l.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      d
    );
  });
/*! lightgallery - v1.6.12 - 2019-02-19
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2019 Sachin N; Licensed GPLv3 */
!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(["jquery"], function (a) {
        return b(a);
      })
    : "object" == typeof module && module.exports
    ? (module.exports = b(require("jquery")))
    : b(a.jQuery);
})(this, function (a) {
  !(function () {
    "use strict";
    function b(b, d) {
      if (
        ((this.el = b),
        (this.$el = a(b)),
        (this.s = a.extend({}, c, d)),
        this.s.dynamic &&
          "undefined" !== this.s.dynamicEl &&
          this.s.dynamicEl.constructor === Array &&
          !this.s.dynamicEl.length)
      )
        throw "When using dynamic mode, you must also define dynamicEl as an Array.";
      return (
        (this.modules = {}),
        (this.lGalleryOn = !1),
        (this.lgBusy = !1),
        (this.hideBartimeout = !1),
        (this.isTouch = "ontouchstart" in document.documentElement),
        this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
        this.s.dynamic
          ? (this.$items = this.s.dynamicEl)
          : "this" === this.s.selector
          ? (this.$items = this.$el)
          : "" !== this.s.selector
          ? this.s.selectWithin
            ? (this.$items = a(this.s.selectWithin).find(this.s.selector))
            : (this.$items = this.$el.find(a(this.s.selector)))
          : (this.$items = this.$el.children()),
        (this.$slide = ""),
        (this.$outer = ""),
        this.init(),
        this
      );
    }
    var c = {
      mode: "lg-slide",
      cssEasing: "ease",
      easing: "linear",
      speed: 600,
      height: "100%",
      width: "100%",
      addClass: "",
      startClass: "lg-start-zoom",
      backdropDuration: 150,
      hideBarsDelay: 6e3,
      useLeft: !1,
      closable: !0,
      loop: !0,
      escKey: !0,
      keyPress: !0,
      controls: !0,
      slideEndAnimatoin: !0,
      hideControlOnEnd: !1,
      mousewheel: !0,
      getCaptionFromTitleOrAlt: !0,
      appendSubHtmlTo: ".lg-sub-html",
      subHtmlSelectorRelative: !1,
      preload: 1,
      showAfterLoad: !0,
      selector: "",
      selectWithin: "",
      nextHtml: "",
      prevHtml: "",
      index: !1,
      iframeMaxWidth: "100%",
      download: !0,
      counter: !0,
      appendCounterTo: ".lg-toolbar",
      swipeThreshold: 50,
      enableSwipe: !0,
      enableDrag: !0,
      dynamic: !1,
      dynamicEl: [],
      galleryId: 1,
    };
    (b.prototype.init = function () {
      var b = this;
      b.s.preload > b.$items.length && (b.s.preload = b.$items.length);
      var c = window.location.hash;
      c.indexOf("lg=" + this.s.galleryId) > 0 &&
        ((b.index = parseInt(c.split("&slide=")[1], 10)),
        a("body").addClass("lg-from-hash"),
        a("body").hasClass("lg-on") ||
          (setTimeout(function () {
            b.build(b.index);
          }),
          a("body").addClass("lg-on"))),
        b.s.dynamic
          ? (b.$el.trigger("onBeforeOpen.lg"),
            (b.index = b.s.index || 0),
            a("body").hasClass("lg-on") ||
              setTimeout(function () {
                b.build(b.index), a("body").addClass("lg-on");
              }))
          : b.$items.on("click.lgcustom", function (c) {
              try {
                c.preventDefault(), c.preventDefault();
              } catch (a) {
                c.returnValue = !1;
              }
              b.$el.trigger("onBeforeOpen.lg"),
                (b.index = b.s.index || b.$items.index(this)),
                a("body").hasClass("lg-on") ||
                  (b.build(b.index), a("body").addClass("lg-on"));
            });
    }),
      (b.prototype.build = function (b) {
        var c = this;
        c.structure(),
          a.each(a.fn.lightGallery.modules, function (b) {
            c.modules[b] = new a.fn.lightGallery.modules[b](c.el);
          }),
          c.slide(b, !1, !1, !1),
          c.s.keyPress && c.keyPress(),
          c.$items.length > 1
            ? (c.arrow(),
              setTimeout(function () {
                c.enableDrag(), c.enableSwipe();
              }, 50),
              c.s.mousewheel && c.mousewheel())
            : c.$slide.on("click.lg", function () {
                c.$el.trigger("onSlideClick.lg");
              }),
          c.counter(),
          c.closeGallery(),
          c.$el.trigger("onAfterOpen.lg"),
          c.$outer.on("mousemove.lg click.lg touchstart.lg", function () {
            c.$outer.removeClass("lg-hide-items"),
              clearTimeout(c.hideBartimeout),
              (c.hideBartimeout = setTimeout(function () {
                c.$outer.addClass("lg-hide-items");
              }, c.s.hideBarsDelay));
          }),
          c.$outer.trigger("mousemove.lg");
      }),
      (b.prototype.structure = function () {
        var b,
          c = "",
          d = "",
          e = 0,
          f = "",
          g = this;
        for (
          a("body").append('<div class="lg-backdrop"></div>'),
            a(".lg-backdrop").css(
              "transition-duration",
              this.s.backdropDuration + "ms"
            ),
            e = 0;
          e < this.$items.length;
          e++
        )
          c += '<div class="lg-item"></div>';
        if (
          (this.s.controls &&
            this.$items.length > 1 &&
            (d =
              '<div class="lg-actions"><button class="lg-prev lg-icon">' +
              this.s.prevHtml +
              '</button><button class="lg-next lg-icon">' +
              this.s.nextHtml +
              "</button></div>"),
          ".lg-sub-html" === this.s.appendSubHtmlTo &&
            (f = '<div class="lg-sub-html"></div>'),
          (b =
            '<div class="lg-outer ' +
            this.s.addClass +
            " " +
            this.s.startClass +
            '"><div class="lg" style="width:' +
            this.s.width +
            "; height:" +
            this.s.height +
            '"><div class="lg-inner">' +
            c +
            '</div><div class="lg-toolbar lg-group"><span class="lg-close lg-icon"></span></div>' +
            d +
            f +
            "</div></div>"),
          a("body").append(b),
          (this.$outer = a(".lg-outer")),
          (this.$slide = this.$outer.find(".lg-item")),
          this.s.useLeft
            ? (this.$outer.addClass("lg-use-left"), (this.s.mode = "lg-slide"))
            : this.$outer.addClass("lg-use-css3"),
          g.setTop(),
          a(window).on("resize.lg orientationchange.lg", function () {
            setTimeout(function () {
              g.setTop();
            }, 100);
          }),
          this.$slide.eq(this.index).addClass("lg-current"),
          this.doCss()
            ? this.$outer.addClass("lg-css3")
            : (this.$outer.addClass("lg-css"), (this.s.speed = 0)),
          this.$outer.addClass(this.s.mode),
          this.s.enableDrag &&
            this.$items.length > 1 &&
            this.$outer.addClass("lg-grab"),
          this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"),
          this.doCss())
        ) {
          var h = this.$outer.find(".lg-inner");
          h.css("transition-timing-function", this.s.cssEasing),
            h.css("transition-duration", this.s.speed + "ms");
        }
        setTimeout(function () {
          a(".lg-backdrop").addClass("in");
        }),
          setTimeout(function () {
            g.$outer.addClass("lg-visible");
          }, this.s.backdropDuration),
          this.s.download &&
            this.$outer
              .find(".lg-toolbar")
              .append(
                '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'
              ),
          (this.prevScrollTop = a(window).scrollTop());
      }),
      (b.prototype.setTop = function () {
        if ("100%" !== this.s.height) {
          var b = a(window).height(),
            c = (b - parseInt(this.s.height, 10)) / 2,
            d = this.$outer.find(".lg");
          b >= parseInt(this.s.height, 10)
            ? d.css("top", c + "px")
            : d.css("top", "0px");
        }
      }),
      (b.prototype.doCss = function () {
        return !!(function () {
          var a = [
              "transition",
              "MozTransition",
              "WebkitTransition",
              "OTransition",
              "msTransition",
              "KhtmlTransition",
            ],
            b = document.documentElement,
            c = 0;
          for (c = 0; c < a.length; c++) if (a[c] in b.style) return !0;
        })();
      }),
      (b.prototype.isVideo = function (a, b) {
        var c;
        if (
          ((c = this.s.dynamic
            ? this.s.dynamicEl[b].html
            : this.$items.eq(b).attr("data-html")),
          !a)
        )
          return c
            ? { html5: !0 }
            : (console.error(
                "lightGallery :- data-src is not pvovided on slide item " +
                  (b + 1) +
                  ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"
              ),
              !1);
        var d = a.match(
            /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i
          ),
          e = a.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
          f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
          g = a.match(
            /\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i
          );
        return d
          ? { youtube: d }
          : e
          ? { vimeo: e }
          : f
          ? { dailymotion: f }
          : g
          ? { vk: g }
          : void 0;
      }),
      (b.prototype.counter = function () {
        this.s.counter &&
          a(this.s.appendCounterTo).append(
            '<div id="lg-counter"><span id="lg-counter-current">' +
              (parseInt(this.index, 10) + 1) +
              '</span> / <span id="lg-counter-all">' +
              this.$items.length +
              "</span></div>"
          );
      }),
      (b.prototype.addHtml = function (b) {
        var c,
          d,
          e = null;
        if (
          (this.s.dynamic
            ? this.s.dynamicEl[b].subHtmlUrl
              ? (c = this.s.dynamicEl[b].subHtmlUrl)
              : (e = this.s.dynamicEl[b].subHtml)
            : ((d = this.$items.eq(b)),
              d.attr("data-sub-html-url")
                ? (c = d.attr("data-sub-html-url"))
                : ((e = d.attr("data-sub-html")),
                  this.s.getCaptionFromTitleOrAlt &&
                    !e &&
                    (e =
                      d.attr("title") || d.find("img").first().attr("alt")))),
          !c)
        )
          if (void 0 !== e && null !== e) {
            var f = e.substring(0, 1);
            ("." !== f && "#" !== f) ||
              (e =
                this.s.subHtmlSelectorRelative && !this.s.dynamic
                  ? d.find(e).html()
                  : a(e).html());
          } else e = "";
        ".lg-sub-html" === this.s.appendSubHtmlTo
          ? c
            ? this.$outer.find(this.s.appendSubHtmlTo).load(c)
            : this.$outer.find(this.s.appendSubHtmlTo).html(e)
          : c
          ? this.$slide.eq(b).load(c)
          : this.$slide.eq(b).append(e),
          void 0 !== e &&
            null !== e &&
            ("" === e
              ? this.$outer
                  .find(this.s.appendSubHtmlTo)
                  .addClass("lg-empty-html")
              : this.$outer
                  .find(this.s.appendSubHtmlTo)
                  .removeClass("lg-empty-html")),
          this.$el.trigger("onAfterAppendSubHtml.lg", [b]);
      }),
      (b.prototype.preload = function (a) {
        var b = 1,
          c = 1;
        for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++)
          this.loadContent(a + b, !1, 0);
        for (c = 1; c <= this.s.preload && !(a - c < 0); c++)
          this.loadContent(a - c, !1, 0);
      }),
      (b.prototype.loadContent = function (b, c, d) {
        var e,
          f,
          g,
          h,
          i,
          j,
          k = this,
          l = !1,
          m = function (b) {
            for (var c = [], d = [], e = 0; e < b.length; e++) {
              var g = b[e].split(" ");
              "" === g[0] && g.splice(0, 1), d.push(g[0]), c.push(g[1]);
            }
            for (var h = a(window).width(), i = 0; i < c.length; i++)
              if (parseInt(c[i], 10) > h) {
                f = d[i];
                break;
              }
          };
        if (k.s.dynamic) {
          if (
            (k.s.dynamicEl[b].poster &&
              ((l = !0), (g = k.s.dynamicEl[b].poster)),
            (j = k.s.dynamicEl[b].html),
            (f = k.s.dynamicEl[b].src),
            k.s.dynamicEl[b].responsive)
          ) {
            m(k.s.dynamicEl[b].responsive.split(","));
          }
          (h = k.s.dynamicEl[b].srcset), (i = k.s.dynamicEl[b].sizes);
        } else {
          if (
            (k.$items.eq(b).attr("data-poster") &&
              ((l = !0), (g = k.$items.eq(b).attr("data-poster"))),
            (j = k.$items.eq(b).attr("data-html")),
            (f =
              k.$items.eq(b).attr("href") || k.$items.eq(b).attr("data-src")),
            k.$items.eq(b).attr("data-responsive"))
          ) {
            m(k.$items.eq(b).attr("data-responsive").split(","));
          }
          (h = k.$items.eq(b).attr("data-srcset")),
            (i = k.$items.eq(b).attr("data-sizes"));
        }
        var n = !1;
        k.s.dynamic
          ? k.s.dynamicEl[b].iframe && (n = !0)
          : "true" === k.$items.eq(b).attr("data-iframe") && (n = !0);
        var o = k.isVideo(f, b);
        if (!k.$slide.eq(b).hasClass("lg-loaded")) {
          if (n)
            k.$slide
              .eq(b)
              .prepend(
                '<div class="lg-video-cont lg-has-iframe" style="max-width:' +
                  k.s.iframeMaxWidth +
                  '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' +
                  f +
                  '"  allowfullscreen="true"></iframe></div></div>'
              );
          else if (l) {
            var p = "";
            (p =
              o && o.youtube
                ? "lg-has-youtube"
                : o && o.vimeo
                ? "lg-has-vimeo"
                : "lg-has-html5"),
              k.$slide
                .eq(b)
                .prepend(
                  '<div class="lg-video-cont ' +
                    p +
                    ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' +
                    g +
                    '" /></div></div>'
                );
          } else
            o
              ? (k.$slide
                  .eq(b)
                  .prepend(
                    '<div class="lg-video-cont "><div class="lg-video"></div></div>'
                  ),
                k.$el.trigger("hasVideo.lg", [b, f, j]))
              : k.$slide
                  .eq(b)
                  .prepend(
                    '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' +
                      f +
                      '" /></div>'
                  );
          if (
            (k.$el.trigger("onAferAppendSlide.lg", [b]),
            (e = k.$slide.eq(b).find(".lg-object")),
            i && e.attr("sizes", i),
            h)
          ) {
            e.attr("srcset", h);
            try {
              picturefill({ elements: [e[0]] });
            } catch (a) {
              console.warn(
                "lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document."
              );
            }
          }
          ".lg-sub-html" !== this.s.appendSubHtmlTo && k.addHtml(b),
            k.$slide.eq(b).addClass("lg-loaded");
        }
        k.$slide
          .eq(b)
          .find(".lg-object")
          .on("load.lg error.lg", function () {
            var c = 0;
            d && !a("body").hasClass("lg-from-hash") && (c = d),
              setTimeout(function () {
                k.$slide.eq(b).addClass("lg-complete"),
                  k.$el.trigger("onSlideItemLoad.lg", [b, d || 0]);
              }, c);
          }),
          o && o.html5 && !l && k.$slide.eq(b).addClass("lg-complete"),
          !0 === c &&
            (k.$slide.eq(b).hasClass("lg-complete")
              ? k.preload(b)
              : k.$slide
                  .eq(b)
                  .find(".lg-object")
                  .on("load.lg error.lg", function () {
                    k.preload(b);
                  }));
      }),
      (b.prototype.slide = function (b, c, d, e) {
        var f = this.$outer.find(".lg-current").index(),
          g = this;
        if (!g.lGalleryOn || f !== b) {
          var h = this.$slide.length,
            i = g.lGalleryOn ? this.s.speed : 0;
          if (!g.lgBusy) {
            if (this.s.download) {
              var j;
              (j = g.s.dynamic
                ? !1 !== g.s.dynamicEl[b].downloadUrl &&
                  (g.s.dynamicEl[b].downloadUrl || g.s.dynamicEl[b].src)
                : "false" !== g.$items.eq(b).attr("data-download-url") &&
                  (g.$items.eq(b).attr("data-download-url") ||
                    g.$items.eq(b).attr("href") ||
                    g.$items.eq(b).attr("data-src"))),
                j
                  ? (a("#lg-download").attr("href", j),
                    g.$outer.removeClass("lg-hide-download"))
                  : g.$outer.addClass("lg-hide-download");
            }
            if (
              (this.$el.trigger("onBeforeSlide.lg", [f, b, c, d]),
              (g.lgBusy = !0),
              clearTimeout(g.hideBartimeout),
              ".lg-sub-html" === this.s.appendSubHtmlTo &&
                setTimeout(function () {
                  g.addHtml(b);
                }, i),
              this.arrowDisable(b),
              e || (b < f ? (e = "prev") : b > f && (e = "next")),
              c)
            ) {
              this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");
              var k, l;
              h > 2
                ? ((k = b - 1),
                  (l = b + 1),
                  0 === b && f === h - 1
                    ? ((l = 0), (k = h - 1))
                    : b === h - 1 && 0 === f && ((l = 0), (k = h - 1)))
                : ((k = 0), (l = 1)),
                "prev" === e
                  ? g.$slide.eq(l).addClass("lg-next-slide")
                  : g.$slide.eq(k).addClass("lg-prev-slide"),
                g.$slide.eq(b).addClass("lg-current");
            } else
              g.$outer.addClass("lg-no-trans"),
                this.$slide.removeClass("lg-prev-slide lg-next-slide"),
                "prev" === e
                  ? (this.$slide.eq(b).addClass("lg-prev-slide"),
                    this.$slide.eq(f).addClass("lg-next-slide"))
                  : (this.$slide.eq(b).addClass("lg-next-slide"),
                    this.$slide.eq(f).addClass("lg-prev-slide")),
                setTimeout(function () {
                  g.$slide.removeClass("lg-current"),
                    g.$slide.eq(b).addClass("lg-current"),
                    g.$outer.removeClass("lg-no-trans");
                }, 50);
            g.lGalleryOn
              ? (setTimeout(function () {
                  g.loadContent(b, !0, 0);
                }, this.s.speed + 50),
                setTimeout(function () {
                  (g.lgBusy = !1),
                    g.$el.trigger("onAfterSlide.lg", [f, b, c, d]);
                }, this.s.speed))
              : (g.loadContent(b, !0, g.s.backdropDuration),
                (g.lgBusy = !1),
                g.$el.trigger("onAfterSlide.lg", [f, b, c, d])),
              (g.lGalleryOn = !0),
              this.s.counter && a("#lg-counter-current").text(b + 1);
          }
          g.index = b;
        }
      }),
      (b.prototype.goToNextSlide = function (a) {
        var b = this,
          c = b.s.loop;
        a && b.$slide.length < 3 && (c = !1),
          b.lgBusy ||
            (b.index + 1 < b.$slide.length
              ? (b.index++,
                b.$el.trigger("onBeforeNextSlide.lg", [b.index]),
                b.slide(b.index, a, !1, "next"))
              : c
              ? ((b.index = 0),
                b.$el.trigger("onBeforeNextSlide.lg", [b.index]),
                b.slide(b.index, a, !1, "next"))
              : b.s.slideEndAnimatoin &&
                !a &&
                (b.$outer.addClass("lg-right-end"),
                setTimeout(function () {
                  b.$outer.removeClass("lg-right-end");
                }, 400)));
      }),
      (b.prototype.goToPrevSlide = function (a) {
        var b = this,
          c = b.s.loop;
        a && b.$slide.length < 3 && (c = !1),
          b.lgBusy ||
            (b.index > 0
              ? (b.index--,
                b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]),
                b.slide(b.index, a, !1, "prev"))
              : c
              ? ((b.index = b.$items.length - 1),
                b.$el.trigger("onBeforePrevSlide.lg", [b.index, a]),
                b.slide(b.index, a, !1, "prev"))
              : b.s.slideEndAnimatoin &&
                !a &&
                (b.$outer.addClass("lg-left-end"),
                setTimeout(function () {
                  b.$outer.removeClass("lg-left-end");
                }, 400)));
      }),
      (b.prototype.keyPress = function () {
        var b = this;
        this.$items.length > 1 &&
          a(window).on("keyup.lg", function (a) {
            b.$items.length > 1 &&
              (37 === a.keyCode && (a.preventDefault(), b.goToPrevSlide()),
              39 === a.keyCode && (a.preventDefault(), b.goToNextSlide()));
          }),
          a(window).on("keydown.lg", function (a) {
            !0 === b.s.escKey &&
              27 === a.keyCode &&
              (a.preventDefault(),
              b.$outer.hasClass("lg-thumb-open")
                ? b.$outer.removeClass("lg-thumb-open")
                : b.destroy());
          });
      }),
      (b.prototype.arrow = function () {
        var a = this;
        this.$outer.find(".lg-prev").on("click.lg", function () {
          a.goToPrevSlide();
        }),
          this.$outer.find(".lg-next").on("click.lg", function () {
            a.goToNextSlide();
          });
      }),
      (b.prototype.arrowDisable = function (a) {
        !this.s.loop &&
          this.s.hideControlOnEnd &&
          (a + 1 < this.$slide.length
            ? this.$outer
                .find(".lg-next")
                .removeAttr("disabled")
                .removeClass("disabled")
            : this.$outer
                .find(".lg-next")
                .attr("disabled", "disabled")
                .addClass("disabled"),
          a > 0
            ? this.$outer
                .find(".lg-prev")
                .removeAttr("disabled")
                .removeClass("disabled")
            : this.$outer
                .find(".lg-prev")
                .attr("disabled", "disabled")
                .addClass("disabled"));
      }),
      (b.prototype.setTranslate = function (a, b, c) {
        this.s.useLeft
          ? a.css("left", b)
          : a.css({ transform: "translate3d(" + b + "px, " + c + "px, 0px)" });
      }),
      (b.prototype.touchMove = function (b, c) {
        var d = c - b;
        Math.abs(d) > 15 &&
          (this.$outer.addClass("lg-dragging"),
          this.setTranslate(this.$slide.eq(this.index), d, 0),
          this.setTranslate(
            a(".lg-prev-slide"),
            -this.$slide.eq(this.index).width() + d,
            0
          ),
          this.setTranslate(
            a(".lg-next-slide"),
            this.$slide.eq(this.index).width() + d,
            0
          ));
      }),
      (b.prototype.touchEnd = function (a) {
        var b = this;
        "lg-slide" !== b.s.mode && b.$outer.addClass("lg-slide"),
          this.$slide
            .not(".lg-current, .lg-prev-slide, .lg-next-slide")
            .css("opacity", "0"),
          setTimeout(function () {
            b.$outer.removeClass("lg-dragging"),
              a < 0 && Math.abs(a) > b.s.swipeThreshold
                ? b.goToNextSlide(!0)
                : a > 0 && Math.abs(a) > b.s.swipeThreshold
                ? b.goToPrevSlide(!0)
                : Math.abs(a) < 5 && b.$el.trigger("onSlideClick.lg"),
              b.$slide.removeAttr("style");
          }),
          setTimeout(function () {
            b.$outer.hasClass("lg-dragging") ||
              "lg-slide" === b.s.mode ||
              b.$outer.removeClass("lg-slide");
          }, b.s.speed + 100);
      }),
      (b.prototype.enableSwipe = function () {
        var a = this,
          b = 0,
          c = 0,
          d = !1;
        a.s.enableSwipe &&
          a.doCss() &&
          (a.$slide.on("touchstart.lg", function (c) {
            a.$outer.hasClass("lg-zoomed") ||
              a.lgBusy ||
              (c.preventDefault(),
              a.manageSwipeClass(),
              (b = c.originalEvent.targetTouches[0].pageX));
          }),
          a.$slide.on("touchmove.lg", function (e) {
            a.$outer.hasClass("lg-zoomed") ||
              (e.preventDefault(),
              (c = e.originalEvent.targetTouches[0].pageX),
              a.touchMove(b, c),
              (d = !0));
          }),
          a.$slide.on("touchend.lg", function () {
            a.$outer.hasClass("lg-zoomed") ||
              (d
                ? ((d = !1), a.touchEnd(c - b))
                : a.$el.trigger("onSlideClick.lg"));
          }));
      }),
      (b.prototype.enableDrag = function () {
        var b = this,
          c = 0,
          d = 0,
          e = !1,
          f = !1;
        b.s.enableDrag &&
          b.doCss() &&
          (b.$slide.on("mousedown.lg", function (d) {
            b.$outer.hasClass("lg-zoomed") ||
              b.lgBusy ||
              a(d.target).text().trim() ||
              (d.preventDefault(),
              b.manageSwipeClass(),
              (c = d.pageX),
              (e = !0),
              (b.$outer.scrollLeft += 1),
              (b.$outer.scrollLeft -= 1),
              b.$outer.removeClass("lg-grab").addClass("lg-grabbing"),
              b.$el.trigger("onDragstart.lg"));
          }),
          a(window).on("mousemove.lg", function (a) {
            e &&
              ((f = !0),
              (d = a.pageX),
              b.touchMove(c, d),
              b.$el.trigger("onDragmove.lg"));
          }),
          a(window).on("mouseup.lg", function (g) {
            f
              ? ((f = !1), b.touchEnd(d - c), b.$el.trigger("onDragend.lg"))
              : (a(g.target).hasClass("lg-object") ||
                  a(g.target).hasClass("lg-video-play")) &&
                b.$el.trigger("onSlideClick.lg"),
              e &&
                ((e = !1),
                b.$outer.removeClass("lg-grabbing").addClass("lg-grab"));
          }));
      }),
      (b.prototype.manageSwipeClass = function () {
        var a = this.index + 1,
          b = this.index - 1;
        this.s.loop &&
          this.$slide.length > 2 &&
          (0 === this.index
            ? (b = this.$slide.length - 1)
            : this.index === this.$slide.length - 1 && (a = 0)),
          this.$slide.removeClass("lg-next-slide lg-prev-slide"),
          b > -1 && this.$slide.eq(b).addClass("lg-prev-slide"),
          this.$slide.eq(a).addClass("lg-next-slide");
      }),
      (b.prototype.mousewheel = function () {
        var a = this;
        a.$outer.on("mousewheel.lg", function (b) {
          b.deltaY &&
            (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(),
            b.preventDefault());
        });
      }),
      (b.prototype.closeGallery = function () {
        var b = this,
          c = !1;
        this.$outer.find(".lg-close").on("click.lg", function () {
          b.destroy();
        }),
          b.s.closable &&
            (b.$outer.on("mousedown.lg", function (b) {
              c = !!(
                a(b.target).is(".lg-outer") ||
                a(b.target).is(".lg-item ") ||
                a(b.target).is(".lg-img-wrap")
              );
            }),
            b.$outer.on("mousemove.lg", function () {
              c = !1;
            }),
            b.$outer.on("mouseup.lg", function (d) {
              (a(d.target).is(".lg-outer") ||
                a(d.target).is(".lg-item ") ||
                (a(d.target).is(".lg-img-wrap") && c)) &&
                (b.$outer.hasClass("lg-dragging") || b.destroy());
            }));
      }),
      (b.prototype.destroy = function (b) {
        var c = this;
        b ||
          (c.$el.trigger("onBeforeClose.lg"),
          a(window).scrollTop(c.prevScrollTop)),
          b &&
            (c.s.dynamic || this.$items.off("click.lg click.lgcustom"),
            a.removeData(c.el, "lightGallery")),
          this.$el.off(".lg.tm"),
          a.each(a.fn.lightGallery.modules, function (a) {
            c.modules[a] && c.modules[a].destroy();
          }),
          (this.lGalleryOn = !1),
          clearTimeout(c.hideBartimeout),
          (this.hideBartimeout = !1),
          a(window).off(".lg"),
          a("body").removeClass("lg-on lg-from-hash"),
          c.$outer && c.$outer.removeClass("lg-visible"),
          a(".lg-backdrop").removeClass("in"),
          setTimeout(function () {
            c.$outer && c.$outer.remove(),
              a(".lg-backdrop").remove(),
              b || c.$el.trigger("onCloseAfter.lg");
          }, c.s.backdropDuration + 50);
      }),
      (a.fn.lightGallery = function (c) {
        return this.each(function () {
          if (a.data(this, "lightGallery"))
            try {
              a(this).data("lightGallery").init();
            } catch (a) {
              console.error("lightGallery has not initiated properly");
            }
          else a.data(this, "lightGallery", new b(this, c));
        });
      }),
      (a.fn.lightGallery.modules = {});
  })();
}),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof exports
      ? (module.exports = b(require("jquery")))
      : b(jQuery);
  })(0, function (a) {
    !(function () {
      "use strict";
      var b = {
          autoplay: !1,
          pause: 5e3,
          progressBar: !0,
          fourceAutoplay: !1,
          autoplayControls: !0,
          appendAutoplayControlsTo: ".lg-toolbar",
        },
        c = function (c) {
          return (
            (this.core = a(c).data("lightGallery")),
            (this.$el = a(c)),
            !(this.core.$items.length < 2) &&
              ((this.core.s = a.extend({}, b, this.core.s)),
              (this.interval = !1),
              (this.fromAuto = !0),
              (this.canceledOnTouch = !1),
              (this.fourceAutoplayTemp = this.core.s.fourceAutoplay),
              this.core.doCss() || (this.core.s.progressBar = !1),
              this.init(),
              this)
          );
        };
      (c.prototype.init = function () {
        var a = this;
        a.core.s.autoplayControls && a.controls(),
          a.core.s.progressBar &&
            a.core.$outer
              .find(".lg")
              .append(
                '<div class="lg-progress-bar"><div class="lg-progress"></div></div>'
              ),
          a.progress(),
          a.core.s.autoplay &&
            a.$el.one("onSlideItemLoad.lg.tm", function () {
              a.startlAuto();
            }),
          a.$el.on("onDragstart.lg.tm touchstart.lg.tm", function () {
            a.interval && (a.cancelAuto(), (a.canceledOnTouch = !0));
          }),
          a.$el.on(
            "onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm",
            function () {
              !a.interval &&
                a.canceledOnTouch &&
                (a.startlAuto(), (a.canceledOnTouch = !1));
            }
          );
      }),
        (c.prototype.progress = function () {
          var a,
            b,
            c = this;
          c.$el.on("onBeforeSlide.lg.tm", function () {
            c.core.s.progressBar &&
              c.fromAuto &&
              ((a = c.core.$outer.find(".lg-progress-bar")),
              (b = c.core.$outer.find(".lg-progress")),
              c.interval &&
                (b.removeAttr("style"),
                a.removeClass("lg-start"),
                setTimeout(function () {
                  b.css(
                    "transition",
                    "width " + (c.core.s.speed + c.core.s.pause) + "ms ease 0s"
                  ),
                    a.addClass("lg-start");
                }, 20))),
              c.fromAuto || c.core.s.fourceAutoplay || c.cancelAuto(),
              (c.fromAuto = !1);
          });
        }),
        (c.prototype.controls = function () {
          var b = this;
          a(this.core.s.appendAutoplayControlsTo).append(
            '<span class="lg-autoplay-button lg-icon"></span>'
          ),
            b.core.$outer
              .find(".lg-autoplay-button")
              .on("click.lg", function () {
                a(b.core.$outer).hasClass("lg-show-autoplay")
                  ? (b.cancelAuto(), (b.core.s.fourceAutoplay = !1))
                  : b.interval ||
                    (b.startlAuto(),
                    (b.core.s.fourceAutoplay = b.fourceAutoplayTemp));
              });
        }),
        (c.prototype.startlAuto = function () {
          var a = this;
          a.core.$outer
            .find(".lg-progress")
            .css(
              "transition",
              "width " + (a.core.s.speed + a.core.s.pause) + "ms ease 0s"
            ),
            a.core.$outer.addClass("lg-show-autoplay"),
            a.core.$outer.find(".lg-progress-bar").addClass("lg-start"),
            (a.interval = setInterval(function () {
              a.core.index + 1 < a.core.$items.length
                ? a.core.index++
                : (a.core.index = 0),
                (a.fromAuto = !0),
                a.core.slide(a.core.index, !1, !1, "next");
            }, a.core.s.speed + a.core.s.pause));
        }),
        (c.prototype.cancelAuto = function () {
          clearInterval(this.interval),
            (this.interval = !1),
            this.core.$outer.find(".lg-progress").removeAttr("style"),
            this.core.$outer.removeClass("lg-show-autoplay"),
            this.core.$outer.find(".lg-progress-bar").removeClass("lg-start");
        }),
        (c.prototype.destroy = function () {
          this.cancelAuto(), this.core.$outer.find(".lg-progress-bar").remove();
        }),
        (a.fn.lightGallery.modules.autoplay = c);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = b(require("jquery")))
      : b(a.jQuery);
  })(this, function (a) {
    !(function () {
      "use strict";
      function b() {
        return (
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement
        );
      }
      var c = { fullScreen: !0 },
        d = function (b) {
          return (
            (this.core = a(b).data("lightGallery")),
            (this.$el = a(b)),
            (this.core.s = a.extend({}, c, this.core.s)),
            this.init(),
            this
          );
        };
      (d.prototype.init = function () {
        var a = "";
        if (this.core.s.fullScreen) {
          if (
            !(
              document.fullscreenEnabled ||
              document.webkitFullscreenEnabled ||
              document.mozFullScreenEnabled ||
              document.msFullscreenEnabled
            )
          )
            return;
          (a = '<span class="lg-fullscreen lg-icon"></span>'),
            this.core.$outer.find(".lg-toolbar").append(a),
            this.fullScreen();
        }
      }),
        (d.prototype.requestFullscreen = function () {
          var a = document.documentElement;
          a.requestFullscreen
            ? a.requestFullscreen()
            : a.msRequestFullscreen
            ? a.msRequestFullscreen()
            : a.mozRequestFullScreen
            ? a.mozRequestFullScreen()
            : a.webkitRequestFullscreen && a.webkitRequestFullscreen();
        }),
        (d.prototype.exitFullscreen = function () {
          document.exitFullscreen
            ? document.exitFullscreen()
            : document.msExitFullscreen
            ? document.msExitFullscreen()
            : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.webkitExitFullscreen && document.webkitExitFullscreen();
        }),
        (d.prototype.fullScreen = function () {
          var c = this;
          a(document).on(
            "fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg",
            function () {
              c.core.$outer.toggleClass("lg-fullscreen-on");
            }
          ),
            this.core.$outer.find(".lg-fullscreen").on("click.lg", function () {
              b() ? c.exitFullscreen() : c.requestFullscreen();
            });
        }),
        (d.prototype.destroy = function () {
          b() && this.exitFullscreen(),
            a(document).off(
              "fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg"
            );
        }),
        (a.fn.lightGallery.modules.fullscreen = d);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof exports
      ? (module.exports = b(require("jquery")))
      : b(jQuery);
  })(0, function (a) {
    !(function () {
      "use strict";
      var b = { pager: !1 },
        c = function (c) {
          return (
            (this.core = a(c).data("lightGallery")),
            (this.$el = a(c)),
            (this.core.s = a.extend({}, b, this.core.s)),
            this.core.s.pager && this.core.$items.length > 1 && this.init(),
            this
          );
        };
      (c.prototype.init = function () {
        var b,
          c,
          d,
          e = this,
          f = "";
        if (
          (e.core.$outer
            .find(".lg")
            .append('<div class="lg-pager-outer"></div>'),
          e.core.s.dynamic)
        )
          for (var g = 0; g < e.core.s.dynamicEl.length; g++)
            f +=
              '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
              e.core.s.dynamicEl[g].thumb +
              '" /></div></span>';
        else
          e.core.$items.each(function () {
            e.core.s.exThumbImage
              ? (f +=
                  '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
                  a(this).attr(e.core.s.exThumbImage) +
                  '" /></div></span>')
              : (f +=
                  '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
                  a(this).find("img").attr("src") +
                  '" /></div></span>');
          });
        (c = e.core.$outer.find(".lg-pager-outer")),
          c.html(f),
          (b = e.core.$outer.find(".lg-pager-cont")),
          b.on("click.lg touchend.lg", function () {
            var b = a(this);
            (e.core.index = b.index()), e.core.slide(e.core.index, !1, !0, !1);
          }),
          c.on("mouseover.lg", function () {
            clearTimeout(d), c.addClass("lg-pager-hover");
          }),
          c.on("mouseout.lg", function () {
            d = setTimeout(function () {
              c.removeClass("lg-pager-hover");
            });
          }),
          e.core.$el.on("onBeforeSlide.lg.tm", function (a, c, d) {
            b.removeClass("lg-pager-active"),
              b.eq(d).addClass("lg-pager-active");
          });
      }),
        (c.prototype.destroy = function () {}),
        (a.fn.lightGallery.modules.pager = c);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof exports
      ? (module.exports = b(require("jquery")))
      : b(jQuery);
  })(0, function (a) {
    !(function () {
      "use strict";
      var b = {
          thumbnail: !0,
          animateThumb: !0,
          currentPagerPosition: "middle",
          thumbWidth: 100,
          thumbHeight: "80px",
          thumbContHeight: 100,
          thumbMargin: 5,
          exThumbImage: !1,
          showThumbByDefault: !0,
          toogleThumb: !0,
          pullCaptionUp: !0,
          enableThumbDrag: !0,
          enableThumbSwipe: !0,
          swipeThreshold: 50,
          loadYoutubeThumbnail: !0,
          youtubeThumbSize: 1,
          loadVimeoThumbnail: !0,
          vimeoThumbSize: "thumbnail_small",
          loadDailymotionThumbnail: !0,
        },
        c = function (c) {
          return (
            (this.core = a(c).data("lightGallery")),
            (this.core.s = a.extend({}, b, this.core.s)),
            (this.$el = a(c)),
            (this.$thumbOuter = null),
            (this.thumbOuterWidth = 0),
            (this.thumbTotalWidth =
              this.core.$items.length *
              (this.core.s.thumbWidth + this.core.s.thumbMargin)),
            (this.thumbIndex = this.core.index),
            this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"),
            (this.left = 0),
            this.init(),
            this
          );
        };
      (c.prototype.init = function () {
        var a = this;
        this.core.s.thumbnail &&
          this.core.$items.length > 1 &&
          (this.core.s.showThumbByDefault &&
            setTimeout(function () {
              a.core.$outer.addClass("lg-thumb-open");
            }, 700),
          this.core.s.pullCaptionUp &&
            this.core.$outer.addClass("lg-pull-caption-up"),
          this.build(),
          this.core.s.animateThumb && this.core.doCss()
            ? (this.core.s.enableThumbDrag && this.enableThumbDrag(),
              this.core.s.enableThumbSwipe && this.enableThumbSwipe(),
              (this.thumbClickable = !1))
            : (this.thumbClickable = !0),
          this.toogle(),
          this.thumbkeyPress());
      }),
        (c.prototype.build = function () {
          function b(a, b, c) {
            var g,
              h = d.core.isVideo(a, c) || {},
              i = "";
            h.youtube || h.vimeo || h.dailymotion
              ? h.youtube
                ? (g = d.core.s.loadYoutubeThumbnail
                    ? "//img.youtube.com/vi/" +
                      h.youtube[1] +
                      "/" +
                      d.core.s.youtubeThumbSize +
                      ".jpg"
                    : b)
                : h.vimeo
                ? d.core.s.loadVimeoThumbnail
                  ? ((g = "//i.vimeocdn.com/video/error_" + f + ".jpg"),
                    (i = h.vimeo[1]))
                  : (g = b)
                : h.dailymotion &&
                  (g = d.core.s.loadDailymotionThumbnail
                    ? "//www.dailymotion.com/thumbnail/video/" +
                      h.dailymotion[1]
                    : b)
              : (g = b),
              (e +=
                '<div data-vimeo-id="' +
                i +
                '" class="lg-thumb-item" style="width:' +
                d.core.s.thumbWidth +
                "px; height: " +
                d.core.s.thumbHeight +
                "; margin-right: " +
                d.core.s.thumbMargin +
                'px"><img src="' +
                g +
                '" /></div>'),
              (i = "");
          }
          var c,
            d = this,
            e = "",
            f = "",
            g =
              '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>';
          switch (this.core.s.vimeoThumbSize) {
            case "thumbnail_large":
              f = "640";
              break;
            case "thumbnail_medium":
              f = "200x150";
              break;
            case "thumbnail_small":
              f = "100x75";
          }
          if (
            (d.core.$outer.addClass("lg-has-thumb"),
            d.core.$outer.find(".lg").append(g),
            (d.$thumbOuter = d.core.$outer.find(".lg-thumb-outer")),
            (d.thumbOuterWidth = d.$thumbOuter.width()),
            d.core.s.animateThumb &&
              d.core.$outer
                .find(".lg-thumb")
                .css({ width: d.thumbTotalWidth + "px", position: "relative" }),
            this.core.s.animateThumb &&
              d.$thumbOuter.css("height", d.core.s.thumbContHeight + "px"),
            d.core.s.dynamic)
          )
            for (var h = 0; h < d.core.s.dynamicEl.length; h++)
              b(d.core.s.dynamicEl[h].src, d.core.s.dynamicEl[h].thumb, h);
          else
            d.core.$items.each(function (c) {
              d.core.s.exThumbImage
                ? b(
                    a(this).attr("href") || a(this).attr("data-src"),
                    a(this).attr(d.core.s.exThumbImage),
                    c
                  )
                : b(
                    a(this).attr("href") || a(this).attr("data-src"),
                    a(this).find("img").attr("src"),
                    c
                  );
            });
          d.core.$outer.find(".lg-thumb").html(e),
            (c = d.core.$outer.find(".lg-thumb-item")),
            c.each(function () {
              var b = a(this),
                c = b.attr("data-vimeo-id");
              c &&
                a.getJSON(
                  "//www.vimeo.com/api/v2/video/" + c + ".json?callback=?",
                  { format: "json" },
                  function (a) {
                    b.find("img").attr("src", a[0][d.core.s.vimeoThumbSize]);
                  }
                );
            }),
            c.eq(d.core.index).addClass("active"),
            d.core.$el.on("onBeforeSlide.lg.tm", function () {
              c.removeClass("active"), c.eq(d.core.index).addClass("active");
            }),
            c.on("click.lg touchend.lg", function () {
              var b = a(this);
              setTimeout(function () {
                ((d.thumbClickable && !d.core.lgBusy) || !d.core.doCss()) &&
                  ((d.core.index = b.index()),
                  d.core.slide(d.core.index, !1, !0, !1));
              }, 50);
            }),
            d.core.$el.on("onBeforeSlide.lg.tm", function () {
              d.animateThumb(d.core.index);
            }),
            a(window).on(
              "resize.lg.thumb orientationchange.lg.thumb",
              function () {
                setTimeout(function () {
                  d.animateThumb(d.core.index),
                    (d.thumbOuterWidth = d.$thumbOuter.width());
                }, 200);
              }
            );
        }),
        (c.prototype.setTranslate = function (a) {
          this.core.$outer
            .find(".lg-thumb")
            .css({ transform: "translate3d(-" + a + "px, 0px, 0px)" });
        }),
        (c.prototype.animateThumb = function (a) {
          var b = this.core.$outer.find(".lg-thumb");
          if (this.core.s.animateThumb) {
            var c;
            switch (this.core.s.currentPagerPosition) {
              case "left":
                c = 0;
                break;
              case "middle":
                c = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                break;
              case "right":
                c = this.thumbOuterWidth - this.core.s.thumbWidth;
            }
            (this.left =
              (this.core.s.thumbWidth + this.core.s.thumbMargin) * a - 1 - c),
              this.left > this.thumbTotalWidth - this.thumbOuterWidth &&
                (this.left = this.thumbTotalWidth - this.thumbOuterWidth),
              this.left < 0 && (this.left = 0),
              this.core.lGalleryOn
                ? (b.hasClass("on") ||
                    this.core.$outer
                      .find(".lg-thumb")
                      .css("transition-duration", this.core.s.speed + "ms"),
                  this.core.doCss() ||
                    b.animate({ left: -this.left + "px" }, this.core.s.speed))
                : this.core.doCss() || b.css("left", -this.left + "px"),
              this.setTranslate(this.left);
          }
        }),
        (c.prototype.enableThumbDrag = function () {
          var b = this,
            c = 0,
            d = 0,
            e = !1,
            f = !1,
            g = 0;
          b.$thumbOuter.addClass("lg-grab"),
            b.core.$outer
              .find(".lg-thumb")
              .on("mousedown.lg.thumb", function (a) {
                b.thumbTotalWidth > b.thumbOuterWidth &&
                  (a.preventDefault(),
                  (c = a.pageX),
                  (e = !0),
                  (b.core.$outer.scrollLeft += 1),
                  (b.core.$outer.scrollLeft -= 1),
                  (b.thumbClickable = !1),
                  b.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"));
              }),
            a(window).on("mousemove.lg.thumb", function (a) {
              e &&
                ((g = b.left),
                (f = !0),
                (d = a.pageX),
                b.$thumbOuter.addClass("lg-dragging"),
                (g -= d - c),
                g > b.thumbTotalWidth - b.thumbOuterWidth &&
                  (g = b.thumbTotalWidth - b.thumbOuterWidth),
                g < 0 && (g = 0),
                b.setTranslate(g));
            }),
            a(window).on("mouseup.lg.thumb", function () {
              f
                ? ((f = !1),
                  b.$thumbOuter.removeClass("lg-dragging"),
                  (b.left = g),
                  Math.abs(d - c) < b.core.s.swipeThreshold &&
                    (b.thumbClickable = !0))
                : (b.thumbClickable = !0),
                e &&
                  ((e = !1),
                  b.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"));
            });
        }),
        (c.prototype.enableThumbSwipe = function () {
          var a = this,
            b = 0,
            c = 0,
            d = !1,
            e = 0;
          a.core.$outer.find(".lg-thumb").on("touchstart.lg", function (c) {
            a.thumbTotalWidth > a.thumbOuterWidth &&
              (c.preventDefault(),
              (b = c.originalEvent.targetTouches[0].pageX),
              (a.thumbClickable = !1));
          }),
            a.core.$outer.find(".lg-thumb").on("touchmove.lg", function (f) {
              a.thumbTotalWidth > a.thumbOuterWidth &&
                (f.preventDefault(),
                (c = f.originalEvent.targetTouches[0].pageX),
                (d = !0),
                a.$thumbOuter.addClass("lg-dragging"),
                (e = a.left),
                (e -= c - b),
                e > a.thumbTotalWidth - a.thumbOuterWidth &&
                  (e = a.thumbTotalWidth - a.thumbOuterWidth),
                e < 0 && (e = 0),
                a.setTranslate(e));
            }),
            a.core.$outer.find(".lg-thumb").on("touchend.lg", function () {
              a.thumbTotalWidth > a.thumbOuterWidth && d
                ? ((d = !1),
                  a.$thumbOuter.removeClass("lg-dragging"),
                  Math.abs(c - b) < a.core.s.swipeThreshold &&
                    (a.thumbClickable = !0),
                  (a.left = e))
                : (a.thumbClickable = !0);
            });
        }),
        (c.prototype.toogle = function () {
          var a = this;
          a.core.s.toogleThumb &&
            (a.core.$outer.addClass("lg-can-toggle"),
            a.$thumbOuter.append(
              '<span class="lg-toogle-thumb lg-icon"></span>'
            ),
            a.core.$outer.find(".lg-toogle-thumb").on("click.lg", function () {
              a.core.$outer.toggleClass("lg-thumb-open");
            }));
        }),
        (c.prototype.thumbkeyPress = function () {
          var b = this;
          a(window).on("keydown.lg.thumb", function (a) {
            38 === a.keyCode
              ? (a.preventDefault(), b.core.$outer.addClass("lg-thumb-open"))
              : 40 === a.keyCode &&
                (a.preventDefault(),
                b.core.$outer.removeClass("lg-thumb-open"));
          });
        }),
        (c.prototype.destroy = function () {
          this.core.s.thumbnail &&
            this.core.$items.length > 1 &&
            (a(window).off(
              "resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"
            ),
            this.$thumbOuter.remove(),
            this.core.$outer.removeClass("lg-has-thumb"));
        }),
        (a.fn.lightGallery.modules.Thumbnail = c);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = b(require("jquery")))
      : b(a.jQuery);
  })(this, function (a) {
    !(function () {
      "use strict";
      function b(a, b, c, d) {
        var e = this;
        if (
          (e.core.$slide
            .eq(b)
            .find(".lg-video")
            .append(e.loadVideo(c, "lg-object", !0, b, d)),
          d)
        )
          if (e.core.s.videojs)
            try {
              videojs(
                e.core.$slide.eq(b).find(".lg-html5").get(0),
                e.core.s.videojsOptions,
                function () {
                  !e.videoLoaded && e.core.s.autoplayFirstVideo && this.play();
                }
              );
            } catch (a) {
              console.error("Make sure you have included videojs");
            }
          else
            !e.videoLoaded &&
              e.core.s.autoplayFirstVideo &&
              e.core.$slide.eq(b).find(".lg-html5").get(0).play();
      }
      function c(a, b) {
        var c = this.core.$slide.eq(b).find(".lg-video-cont");
        c.hasClass("lg-has-iframe") ||
          (c.css("max-width", this.core.s.videoMaxWidth),
          (this.videoLoaded = !0));
      }
      function d(b, c, d) {
        var e = this,
          f = e.core.$slide.eq(c),
          g = f.find(".lg-youtube").get(0),
          h = f.find(".lg-vimeo").get(0),
          i = f.find(".lg-dailymotion").get(0),
          j = f.find(".lg-vk").get(0),
          k = f.find(".lg-html5").get(0);
        if (g)
          g.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        else if (h)
          try {
            $f(h).api("pause");
          } catch (a) {
            console.error("Make sure you have included froogaloop2 js");
          }
        else if (i) i.contentWindow.postMessage("pause", "*");
        else if (k)
          if (e.core.s.videojs)
            try {
              videojs(k).pause();
            } catch (a) {
              console.error("Make sure you have included videojs");
            }
          else k.pause();
        j && a(j).attr("src", a(j).attr("src").replace("&autoplay", "&noplay"));
        var l;
        l = e.core.s.dynamic
          ? e.core.s.dynamicEl[d].src
          : e.core.$items.eq(d).attr("href") ||
            e.core.$items.eq(d).attr("data-src");
        var m = e.core.isVideo(l, d) || {};
        (m.youtube || m.vimeo || m.dailymotion || m.vk) &&
          e.core.$outer.addClass("lg-hide-download");
      }
      var e = {
          videoMaxWidth: "855px",
          autoplayFirstVideo: !0,
          youtubePlayerParams: !1,
          vimeoPlayerParams: !1,
          dailymotionPlayerParams: !1,
          vkPlayerParams: !1,
          videojs: !1,
          videojsOptions: {},
        },
        f = function (b) {
          return (
            (this.core = a(b).data("lightGallery")),
            (this.$el = a(b)),
            (this.core.s = a.extend({}, e, this.core.s)),
            (this.videoLoaded = !1),
            this.init(),
            this
          );
        };
      (f.prototype.init = function () {
        var e = this;
        e.core.$el.on("hasVideo.lg.tm", b.bind(this)),
          e.core.$el.on("onAferAppendSlide.lg.tm", c.bind(this)),
          e.core.doCss() &&
          e.core.$items.length > 1 &&
          (e.core.s.enableSwipe || e.core.s.enableDrag)
            ? e.core.$el.on("onSlideClick.lg.tm", function () {
                var a = e.core.$slide.eq(e.core.index);
                e.loadVideoOnclick(a);
              })
            : e.core.$slide.on("click.lg", function () {
                e.loadVideoOnclick(a(this));
              }),
          e.core.$el.on("onBeforeSlide.lg.tm", d.bind(this)),
          e.core.$el.on("onAfterSlide.lg.tm", function (a, b) {
            e.core.$slide.eq(b).removeClass("lg-video-playing");
          }),
          e.core.s.autoplayFirstVideo &&
            e.core.$el.on("onAferAppendSlide.lg.tm", function (a, b) {
              if (!e.core.lGalleryOn) {
                var c = e.core.$slide.eq(b);
                setTimeout(function () {
                  e.loadVideoOnclick(c);
                }, 100);
              }
            });
      }),
        (f.prototype.loadVideo = function (b, c, d, e, f) {
          var g = "",
            h = 1,
            i = "",
            j = this.core.isVideo(b, e) || {};
          if (
            (d &&
              (h = this.videoLoaded
                ? 0
                : this.core.s.autoplayFirstVideo
                ? 1
                : 0),
            j.youtube)
          )
            (i = "?wmode=opaque&autoplay=" + h + "&enablejsapi=1"),
              this.core.s.youtubePlayerParams &&
                (i = i + "&" + a.param(this.core.s.youtubePlayerParams)),
              (g =
                '<iframe class="lg-video-object lg-youtube ' +
                c +
                '" width="560" height="315" src="//www.youtube.com/embed/' +
                j.youtube[1] +
                i +
                '" frameborder="0" allowfullscreen></iframe>');
          else if (j.vimeo)
            (i = "?autoplay=" + h + "&api=1"),
              this.core.s.vimeoPlayerParams &&
                (i = i + "&" + a.param(this.core.s.vimeoPlayerParams)),
              (g =
                '<iframe class="lg-video-object lg-vimeo ' +
                c +
                '" width="560" height="315"  src="//player.vimeo.com/video/' +
                j.vimeo[1] +
                i +
                '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
          else if (j.dailymotion)
            (i = "?wmode=opaque&autoplay=" + h + "&api=postMessage"),
              this.core.s.dailymotionPlayerParams &&
                (i = i + "&" + a.param(this.core.s.dailymotionPlayerParams)),
              (g =
                '<iframe class="lg-video-object lg-dailymotion ' +
                c +
                '" width="560" height="315" src="//www.dailymotion.com/embed/video/' +
                j.dailymotion[1] +
                i +
                '" frameborder="0" allowfullscreen></iframe>');
          else if (j.html5) {
            var k = f.substring(0, 1);
            ("." !== k && "#" !== k) || (f = a(f).html()), (g = f);
          } else
            j.vk &&
              ((i = "&autoplay=" + h),
              this.core.s.vkPlayerParams &&
                (i = i + "&" + a.param(this.core.s.vkPlayerParams)),
              (g =
                '<iframe class="lg-video-object lg-vk ' +
                c +
                '" width="560" height="315" src="//vk.com/video_ext.php?' +
                j.vk[1] +
                i +
                '" frameborder="0" allowfullscreen></iframe>'));
          return g;
        }),
        (f.prototype.loadVideoOnclick = function (a) {
          var b = this;
          if (
            a.find(".lg-object").hasClass("lg-has-poster") &&
            a.find(".lg-object").is(":visible")
          )
            if (a.hasClass("lg-has-video")) {
              var c = a.find(".lg-youtube").get(0),
                d = a.find(".lg-vimeo").get(0),
                e = a.find(".lg-dailymotion").get(0),
                f = a.find(".lg-html5").get(0);
              if (c)
                c.contentWindow.postMessage(
                  '{"event":"command","func":"playVideo","args":""}',
                  "*"
                );
              else if (d)
                try {
                  $f(d).api("play");
                } catch (a) {
                  console.error("Make sure you have included froogaloop2 js");
                }
              else if (e) e.contentWindow.postMessage("play", "*");
              else if (f)
                if (b.core.s.videojs)
                  try {
                    videojs(f).play();
                  } catch (a) {
                    console.error("Make sure you have included videojs");
                  }
                else f.play();
              a.addClass("lg-video-playing");
            } else {
              a.addClass("lg-video-playing lg-has-video");
              var g,
                h,
                i = function (c, d) {
                  if (
                    (a
                      .find(".lg-video")
                      .append(b.loadVideo(c, "", !1, b.core.index, d)),
                    d)
                  )
                    if (b.core.s.videojs)
                      try {
                        videojs(
                          b.core.$slide
                            .eq(b.core.index)
                            .find(".lg-html5")
                            .get(0),
                          b.core.s.videojsOptions,
                          function () {
                            this.play();
                          }
                        );
                      } catch (a) {
                        console.error("Make sure you have included videojs");
                      }
                    else
                      b.core.$slide
                        .eq(b.core.index)
                        .find(".lg-html5")
                        .get(0)
                        .play();
                };
              b.core.s.dynamic
                ? ((g = b.core.s.dynamicEl[b.core.index].src),
                  (h = b.core.s.dynamicEl[b.core.index].html),
                  i(g, h))
                : ((g =
                    b.core.$items.eq(b.core.index).attr("href") ||
                    b.core.$items.eq(b.core.index).attr("data-src")),
                  (h = b.core.$items.eq(b.core.index).attr("data-html")),
                  i(g, h));
              var j = a.find(".lg-object");
              a.find(".lg-video").append(j),
                a.find(".lg-video-object").hasClass("lg-html5") ||
                  (a.removeClass("lg-complete"),
                  a
                    .find(".lg-video-object")
                    .on("load.lg error.lg", function () {
                      a.addClass("lg-complete");
                    }));
            }
        }),
        (f.prototype.destroy = function () {
          this.videoLoaded = !1;
        }),
        (a.fn.lightGallery.modules.video = f);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof exports
      ? (module.exports = b(require("jquery")))
      : b(jQuery);
  })(0, function (a) {
    !(function () {
      "use strict";
      var b = function () {
          var a = !1,
            b = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
          return b && parseInt(b[2], 10) < 54 && (a = !0), a;
        },
        c = {
          scale: 1,
          zoom: !0,
          actualSize: !0,
          enableZoomAfter: 300,
          useLeftForZoom: b(),
        },
        d = function (b) {
          return (
            (this.core = a(b).data("lightGallery")),
            (this.core.s = a.extend({}, c, this.core.s)),
            this.core.s.zoom &&
              this.core.doCss() &&
              (this.init(),
              (this.zoomabletimeout = !1),
              (this.pageX = a(window).width() / 2),
              (this.pageY = a(window).height() / 2 + a(window).scrollTop())),
            this
          );
        };
      (d.prototype.init = function () {
        var b = this,
          c =
            '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
        b.core.s.actualSize &&
          (c += '<span id="lg-actual-size" class="lg-icon"></span>'),
          b.core.s.useLeftForZoom
            ? b.core.$outer.addClass("lg-use-left-for-zoom")
            : b.core.$outer.addClass("lg-use-transition-for-zoom"),
          this.core.$outer.find(".lg-toolbar").append(c),
          b.core.$el.on("onSlideItemLoad.lg.tm.zoom", function (c, d, e) {
            var f = b.core.s.enableZoomAfter + e;
            a("body").hasClass("lg-from-hash") && e
              ? (f = 0)
              : a("body").removeClass("lg-from-hash"),
              (b.zoomabletimeout = setTimeout(function () {
                b.core.$slide.eq(d).addClass("lg-zoomable");
              }, f + 30));
          });
        var d = 1,
          e = function (c) {
            var d,
              e,
              f = b.core.$outer.find(".lg-current .lg-image"),
              g = (a(window).width() - f.prop("offsetWidth")) / 2,
              h =
                (a(window).height() - f.prop("offsetHeight")) / 2 +
                a(window).scrollTop();
            (d = b.pageX - g), (e = b.pageY - h);
            var i = (c - 1) * d,
              j = (c - 1) * e;
            f
              .css("transform", "scale3d(" + c + ", " + c + ", 1)")
              .attr("data-scale", c),
              b.core.s.useLeftForZoom
                ? f
                    .parent()
                    .css({ left: -i + "px", top: -j + "px" })
                    .attr("data-x", i)
                    .attr("data-y", j)
                : f
                    .parent()
                    .css(
                      "transform",
                      "translate3d(-" + i + "px, -" + j + "px, 0)"
                    )
                    .attr("data-x", i)
                    .attr("data-y", j);
          },
          f = function () {
            d > 1 ? b.core.$outer.addClass("lg-zoomed") : b.resetZoom(),
              d < 1 && (d = 1),
              e(d);
          },
          g = function (c, e, g, h) {
            var i,
              j = e.prop("offsetWidth");
            i = b.core.s.dynamic
              ? b.core.s.dynamicEl[g].width || e[0].naturalWidth || j
              : b.core.$items.eq(g).attr("data-width") ||
                e[0].naturalWidth ||
                j;
            var k;
            b.core.$outer.hasClass("lg-zoomed")
              ? (d = 1)
              : i > j && ((k = i / j), (d = k || 2)),
              h
                ? ((b.pageX = a(window).width() / 2),
                  (b.pageY = a(window).height() / 2 + a(window).scrollTop()))
                : ((b.pageX =
                    c.pageX || c.originalEvent.targetTouches[0].pageX),
                  (b.pageY =
                    c.pageY || c.originalEvent.targetTouches[0].pageY)),
              f(),
              setTimeout(function () {
                b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab");
              }, 10);
          },
          h = !1;
        b.core.$el.on("onAferAppendSlide.lg.tm.zoom", function (a, c) {
          var d = b.core.$slide.eq(c).find(".lg-image");
          d.on("dblclick", function (a) {
            g(a, d, c);
          }),
            d.on("touchstart", function (a) {
              h
                ? (clearTimeout(h), (h = null), g(a, d, c))
                : (h = setTimeout(function () {
                    h = null;
                  }, 300)),
                a.preventDefault();
            });
        }),
          a(window).on(
            "resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom",
            function () {
              (b.pageX = a(window).width() / 2),
                (b.pageY = a(window).height() / 2 + a(window).scrollTop()),
                e(d);
            }
          ),
          a("#lg-zoom-out").on("click.lg", function () {
            b.core.$outer.find(".lg-current .lg-image").length &&
              ((d -= b.core.s.scale), f());
          }),
          a("#lg-zoom-in").on("click.lg", function () {
            b.core.$outer.find(".lg-current .lg-image").length &&
              ((d += b.core.s.scale), f());
          }),
          a("#lg-actual-size").on("click.lg", function (a) {
            g(
              a,
              b.core.$slide.eq(b.core.index).find(".lg-image"),
              b.core.index,
              !0
            );
          }),
          b.core.$el.on("onBeforeSlide.lg.tm", function () {
            (d = 1), b.resetZoom();
          }),
          b.zoomDrag(),
          b.zoomSwipe();
      }),
        (d.prototype.resetZoom = function () {
          this.core.$outer.removeClass("lg-zoomed"),
            this.core.$slide
              .find(".lg-img-wrap")
              .removeAttr("style data-x data-y"),
            this.core.$slide.find(".lg-image").removeAttr("style data-scale"),
            (this.pageX = a(window).width() / 2),
            (this.pageY = a(window).height() / 2 + a(window).scrollTop());
        }),
        (d.prototype.zoomSwipe = function () {
          var a = this,
            b = {},
            c = {},
            d = !1,
            e = !1,
            f = !1;
          a.core.$slide.on("touchstart.lg", function (c) {
            if (a.core.$outer.hasClass("lg-zoomed")) {
              var d = a.core.$slide.eq(a.core.index).find(".lg-object");
              (f =
                d.prop("offsetHeight") * d.attr("data-scale") >
                a.core.$outer.find(".lg").height()),
                (e =
                  d.prop("offsetWidth") * d.attr("data-scale") >
                  a.core.$outer.find(".lg").width()),
                (e || f) &&
                  (c.preventDefault(),
                  (b = {
                    x: c.originalEvent.targetTouches[0].pageX,
                    y: c.originalEvent.targetTouches[0].pageY,
                  }));
            }
          }),
            a.core.$slide.on("touchmove.lg", function (g) {
              if (a.core.$outer.hasClass("lg-zoomed")) {
                var h,
                  i,
                  j = a.core.$slide.eq(a.core.index).find(".lg-img-wrap");
                g.preventDefault(),
                  (d = !0),
                  (c = {
                    x: g.originalEvent.targetTouches[0].pageX,
                    y: g.originalEvent.targetTouches[0].pageY,
                  }),
                  a.core.$outer.addClass("lg-zoom-dragging"),
                  (i = f
                    ? -Math.abs(j.attr("data-y")) + (c.y - b.y)
                    : -Math.abs(j.attr("data-y"))),
                  (h = e
                    ? -Math.abs(j.attr("data-x")) + (c.x - b.x)
                    : -Math.abs(j.attr("data-x"))),
                  (Math.abs(c.x - b.x) > 15 || Math.abs(c.y - b.y) > 15) &&
                    (a.core.s.useLeftForZoom
                      ? j.css({ left: h + "px", top: i + "px" })
                      : j.css(
                          "transform",
                          "translate3d(" + h + "px, " + i + "px, 0)"
                        ));
              }
            }),
            a.core.$slide.on("touchend.lg", function () {
              a.core.$outer.hasClass("lg-zoomed") &&
                d &&
                ((d = !1),
                a.core.$outer.removeClass("lg-zoom-dragging"),
                a.touchendZoom(b, c, e, f));
            });
        }),
        (d.prototype.zoomDrag = function () {
          var b = this,
            c = {},
            d = {},
            e = !1,
            f = !1,
            g = !1,
            h = !1;
          b.core.$slide.on("mousedown.lg.zoom", function (d) {
            var f = b.core.$slide.eq(b.core.index).find(".lg-object");
            (h =
              f.prop("offsetHeight") * f.attr("data-scale") >
              b.core.$outer.find(".lg").height()),
              (g =
                f.prop("offsetWidth") * f.attr("data-scale") >
                b.core.$outer.find(".lg").width()),
              b.core.$outer.hasClass("lg-zoomed") &&
                a(d.target).hasClass("lg-object") &&
                (g || h) &&
                (d.preventDefault(),
                (c = { x: d.pageX, y: d.pageY }),
                (e = !0),
                (b.core.$outer.scrollLeft += 1),
                (b.core.$outer.scrollLeft -= 1),
                b.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"));
          }),
            a(window).on("mousemove.lg.zoom", function (a) {
              if (e) {
                var i,
                  j,
                  k = b.core.$slide.eq(b.core.index).find(".lg-img-wrap");
                (f = !0),
                  (d = { x: a.pageX, y: a.pageY }),
                  b.core.$outer.addClass("lg-zoom-dragging"),
                  (j = h
                    ? -Math.abs(k.attr("data-y")) + (d.y - c.y)
                    : -Math.abs(k.attr("data-y"))),
                  (i = g
                    ? -Math.abs(k.attr("data-x")) + (d.x - c.x)
                    : -Math.abs(k.attr("data-x"))),
                  b.core.s.useLeftForZoom
                    ? k.css({ left: i + "px", top: j + "px" })
                    : k.css(
                        "transform",
                        "translate3d(" + i + "px, " + j + "px, 0)"
                      );
              }
            }),
            a(window).on("mouseup.lg.zoom", function (a) {
              e &&
                ((e = !1),
                b.core.$outer.removeClass("lg-zoom-dragging"),
                !f ||
                  (c.x === d.x && c.y === d.y) ||
                  ((d = { x: a.pageX, y: a.pageY }),
                  b.touchendZoom(c, d, g, h)),
                (f = !1)),
                b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab");
            });
        }),
        (d.prototype.touchendZoom = function (a, b, c, d) {
          var e = this,
            f = e.core.$slide.eq(e.core.index).find(".lg-img-wrap"),
            g = e.core.$slide.eq(e.core.index).find(".lg-object"),
            h = -Math.abs(f.attr("data-x")) + (b.x - a.x),
            i = -Math.abs(f.attr("data-y")) + (b.y - a.y),
            j =
              (e.core.$outer.find(".lg").height() - g.prop("offsetHeight")) / 2,
            k = Math.abs(
              g.prop("offsetHeight") * Math.abs(g.attr("data-scale")) -
                e.core.$outer.find(".lg").height() +
                j
            ),
            l = (e.core.$outer.find(".lg").width() - g.prop("offsetWidth")) / 2,
            m = Math.abs(
              g.prop("offsetWidth") * Math.abs(g.attr("data-scale")) -
                e.core.$outer.find(".lg").width() +
                l
            );
          (Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) &&
            (d && (i <= -k ? (i = -k) : i >= -j && (i = -j)),
            c && (h <= -m ? (h = -m) : h >= -l && (h = -l)),
            d
              ? f.attr("data-y", Math.abs(i))
              : (i = -Math.abs(f.attr("data-y"))),
            c
              ? f.attr("data-x", Math.abs(h))
              : (h = -Math.abs(f.attr("data-x"))),
            e.core.s.useLeftForZoom
              ? f.css({ left: h + "px", top: i + "px" })
              : f.css("transform", "translate3d(" + h + "px, " + i + "px, 0)"));
        }),
        (d.prototype.destroy = function () {
          var b = this;
          b.core.$el.off(".lg.zoom"),
            a(window).off(".lg.zoom"),
            b.core.$slide.off(".lg.zoom"),
            b.core.$el.off(".lg.tm.zoom"),
            b.resetZoom(),
            clearTimeout(b.zoomabletimeout),
            (b.zoomabletimeout = !1);
        }),
        (a.fn.lightGallery.modules.zoom = d);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof exports
      ? (module.exports = b(require("jquery")))
      : b(jQuery);
  })(0, function (a) {
    !(function () {
      "use strict";
      var b = { hash: !0 },
        c = function (c) {
          return (
            (this.core = a(c).data("lightGallery")),
            (this.core.s = a.extend({}, b, this.core.s)),
            this.core.s.hash &&
              ((this.oldHash = window.location.hash), this.init()),
            this
          );
        };
      (c.prototype.init = function () {
        var b,
          c = this;
        c.core.$el.on("onAfterSlide.lg.tm", function (a, b, d) {
          history.replaceState
            ? history.replaceState(
                null,
                null,
                window.location.pathname +
                  window.location.search +
                  "#lg=" +
                  c.core.s.galleryId +
                  "&slide=" +
                  d
              )
            : (window.location.hash =
                "lg=" + c.core.s.galleryId + "&slide=" + d);
        }),
          a(window).on("hashchange.lg.hash", function () {
            b = window.location.hash;
            var a = parseInt(b.split("&slide=")[1], 10);
            b.indexOf("lg=" + c.core.s.galleryId) > -1
              ? c.core.slide(a, !1, !1)
              : c.core.lGalleryOn && c.core.destroy();
          });
      }),
        (c.prototype.destroy = function () {
          this.core.s.hash &&
            (this.oldHash &&
            this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0
              ? history.replaceState
                ? history.replaceState(null, null, this.oldHash)
                : (window.location.hash = this.oldHash)
              : history.replaceState
              ? history.replaceState(
                  null,
                  document.title,
                  window.location.pathname + window.location.search
                )
              : (window.location.hash = ""),
            this.core.$el.off(".lg.hash"));
        }),
        (a.fn.lightGallery.modules.hash = c);
    })();
  }),
  (function (a, b) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (a) {
          return b(a);
        })
      : "object" == typeof exports
      ? (module.exports = b(require("jquery")))
      : b(jQuery);
  })(0, function (a) {
    !(function () {
      "use strict";
      var b = {
          share: !0,
          facebook: !0,
          facebookDropdownText: "Facebook",
          twitter: !0,
          twitterDropdownText: "Twitter",
          googlePlus: !0,
          googlePlusDropdownText: "GooglePlus",
          pinterest: !0,
          pinterestDropdownText: "Pinterest",
        },
        c = function (c) {
          return (
            (this.core = a(c).data("lightGallery")),
            (this.core.s = a.extend({}, b, this.core.s)),
            this.core.s.share && this.init(),
            this
          );
        };
      (c.prototype.init = function () {
        var b = this,
          c =
            '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
        (c += b.core.s.facebook
          ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
            this.core.s.facebookDropdownText +
            "</span></a></li>"
          : ""),
          (c += b.core.s.twitter
            ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
              this.core.s.twitterDropdownText +
              "</span></a></li>"
            : ""),
          (c += b.core.s.googlePlus
            ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
              this.core.s.googlePlusDropdownText +
              "</span></a></li>"
            : ""),
          (c += b.core.s.pinterest
            ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
              this.core.s.pinterestDropdownText +
              "</span></a></li>"
            : ""),
          (c += "</ul></span>"),
          this.core.$outer.find(".lg-toolbar").append(c),
          this.core.$outer
            .find(".lg")
            .append('<div id="lg-dropdown-overlay"></div>'),
          a("#lg-share").on("click.lg", function () {
            b.core.$outer.toggleClass("lg-dropdown-active");
          }),
          a("#lg-dropdown-overlay").on("click.lg", function () {
            b.core.$outer.removeClass("lg-dropdown-active");
          }),
          b.core.$el.on("onAfterSlide.lg.tm", function (c, d, e) {
            setTimeout(function () {
              a("#lg-share-facebook").attr(
                "href",
                "https://www.facebook.com/sharer/sharer.php?u=" +
                  encodeURIComponent(
                    b.getSahreProps(e, "facebookShareUrl") ||
                      window.location.href
                  )
              ),
                a("#lg-share-twitter").attr(
                  "href",
                  "https://twitter.com/intent/tweet?text=" +
                    b.getSahreProps(e, "tweetText") +
                    "&url=" +
                    encodeURIComponent(
                      b.getSahreProps(e, "twitterShareUrl") ||
                        window.location.href
                    )
                ),
                a("#lg-share-googleplus").attr(
                  "href",
                  "https://plus.google.com/share?url=" +
                    encodeURIComponent(
                      b.getSahreProps(e, "googleplusShareUrl") ||
                        window.location.href
                    )
                ),
                a("#lg-share-pinterest").attr(
                  "href",
                  "http://www.pinterest.com/pin/create/button/?url=" +
                    encodeURIComponent(
                      b.getSahreProps(e, "pinterestShareUrl") ||
                        window.location.href
                    ) +
                    "&media=" +
                    encodeURIComponent(b.getSahreProps(e, "src")) +
                    "&description=" +
                    b.getSahreProps(e, "pinterestText")
                );
            }, 100);
          });
      }),
        (c.prototype.getSahreProps = function (a, b) {
          var c = "";
          if (this.core.s.dynamic) c = this.core.s.dynamicEl[a][b];
          else {
            var d = this.core.$items.eq(a).attr("href"),
              e = this.core.$items.eq(a).data(b);
            c = "src" === b ? d || e : e;
          }
          return c;
        }),
        (c.prototype.destroy = function () {}),
        (a.fn.lightGallery.modules.share = c);
    })();
  });
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : "object" == typeof exports
    ? (module.exports = a)
    : a(jQuery);
})(function (a) {
  function b(b) {
    var g = b || window.event,
      h = i.call(arguments, 1),
      j = 0,
      l = 0,
      m = 0,
      n = 0,
      o = 0,
      p = 0;
    if (
      ((b = a.event.fix(g)),
      (b.type = "mousewheel"),
      "detail" in g && (m = -1 * g.detail),
      "wheelDelta" in g && (m = g.wheelDelta),
      "wheelDeltaY" in g && (m = g.wheelDeltaY),
      "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX),
      "axis" in g && g.axis === g.HORIZONTAL_AXIS && ((l = -1 * m), (m = 0)),
      (j = 0 === m ? l : m),
      "deltaY" in g && ((m = -1 * g.deltaY), (j = m)),
      "deltaX" in g && ((l = g.deltaX), 0 === m && (j = -1 * l)),
      0 !== m || 0 !== l)
    ) {
      if (1 === g.deltaMode) {
        var q = a.data(this, "mousewheel-line-height");
        (j *= q), (m *= q), (l *= q);
      } else if (2 === g.deltaMode) {
        var r = a.data(this, "mousewheel-page-height");
        (j *= r), (m *= r), (l *= r);
      }
      if (
        ((n = Math.max(Math.abs(m), Math.abs(l))),
        (!f || f > n) && ((f = n), d(g, n) && (f /= 40)),
        d(g, n) && ((j /= 40), (l /= 40), (m /= 40)),
        (j = Math[j >= 1 ? "floor" : "ceil"](j / f)),
        (l = Math[l >= 1 ? "floor" : "ceil"](l / f)),
        (m = Math[m >= 1 ? "floor" : "ceil"](m / f)),
        k.settings.normalizeOffset && this.getBoundingClientRect)
      ) {
        var s = this.getBoundingClientRect();
        (o = b.clientX - s.left), (p = b.clientY - s.top);
      }
      return (
        (b.deltaX = l),
        (b.deltaY = m),
        (b.deltaFactor = f),
        (b.offsetX = o),
        (b.offsetY = p),
        (b.deltaMode = 0),
        h.unshift(b, j, l, m),
        e && clearTimeout(e),
        (e = setTimeout(c, 200)),
        (a.event.dispatch || a.event.handle).apply(this, h)
      );
    }
  }
  function c() {
    f = null;
  }
  function d(a, b) {
    return (
      k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    );
  }
  var e,
    f,
    g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    h =
      "onwheel" in document || document.documentMode >= 9
        ? ["wheel"]
        : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
    i = Array.prototype.slice;
  if (a.event.fixHooks)
    for (var j = g.length; j; ) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
  var k = (a.event.special.mousewheel = {
    version: "3.1.12",
    setup: function () {
      if (this.addEventListener)
        for (var c = h.length; c; ) this.addEventListener(h[--c], b, !1);
      else this.onmousewheel = b;
      a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
        a.data(this, "mousewheel-page-height", k.getPageHeight(this));
    },
    teardown: function () {
      if (this.removeEventListener)
        for (var c = h.length; c; ) this.removeEventListener(h[--c], b, !1);
      else this.onmousewheel = null;
      a.removeData(this, "mousewheel-line-height"),
        a.removeData(this, "mousewheel-page-height");
    },
    getLineHeight: function (b) {
      var c = a(b),
        d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
      return (
        d.length || (d = a("body")),
        parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
      );
    },
    getPageHeight: function (b) {
      return a(b).height();
    },
    settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
  });
  a.fn.extend({
    mousewheel: function (a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
    },
    unmousewheel: function (a) {
      return this.unbind("mousewheel", a);
    },
  });
}); /*! elementor - v3.6.5 - 27-04-2022 */
(() => {
  "use strict";
  var e,
    r,
    _,
    t,
    i,
    a = {},
    n = {};
  function __webpack_require__(e) {
    var r = n[e];
    if (void 0 !== r) return r.exports;
    var _ = (n[e] = { exports: {} });
    return a[e](_, _.exports, __webpack_require__), _.exports;
  }
  (__webpack_require__.m = a),
    (e = []),
    (__webpack_require__.O = (r, _, t, i) => {
      if (!_) {
        var a = 1 / 0;
        for (u = 0; u < e.length; u++) {
          for (var [_, t, i] = e[u], n = !0, c = 0; c < _.length; c++)
            (!1 & i || a >= i) &&
            Object.keys(__webpack_require__.O).every((e) =>
              __webpack_require__.O[e](_[c])
            )
              ? _.splice(c--, 1)
              : ((n = !1), i < a && (a = i));
          if (n) {
            e.splice(u--, 1);
            var o = t();
            void 0 !== o && (r = o);
          }
        }
        return r;
      }
      i = i || 0;
      for (var u = e.length; u > 0 && e[u - 1][2] > i; u--) e[u] = e[u - 1];
      e[u] = [_, t, i];
    }),
    (_ = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (__webpack_require__.t = function (e, t) {
      if ((1 & t && (e = this(e)), 8 & t)) return e;
      if ("object" == typeof e && e) {
        if (4 & t && e.__esModule) return e;
        if (16 & t && "function" == typeof e.then) return e;
      }
      var i = Object.create(null);
      __webpack_require__.r(i);
      var a = {};
      r = r || [null, _({}), _([]), _(_)];
      for (var n = 2 & t && e; "object" == typeof n && !~r.indexOf(n); n = _(n))
        Object.getOwnPropertyNames(n).forEach((r) => (a[r] = () => e[r]));
      return (a.default = () => e), __webpack_require__.d(i, a), i;
    }),
    (__webpack_require__.d = (e, r) => {
      for (var _ in r)
        __webpack_require__.o(r, _) &&
          !__webpack_require__.o(e, _) &&
          Object.defineProperty(e, _, { enumerable: !0, get: r[_] });
    }),
    (__webpack_require__.f = {}),
    (__webpack_require__.e = (e) =>
      Promise.all(
        Object.keys(__webpack_require__.f).reduce(
          (r, _) => (__webpack_require__.f[_](e, r), r),
          []
        )
      )),
    (__webpack_require__.u = (e) =>
      723 === e
        ? "lightbox.2b2c155d6ec60974d8c4.bundle.min.js"
        : 48 === e
        ? "text-path.9f18ebdea5ac00d653e5.bundle.min.js"
        : 209 === e
        ? "accordion.1840403ce81de408c749.bundle.min.js"
        : 745 === e
        ? "alert.cbc2a0fee74ee3ed0419.bundle.min.js"
        : 120 === e
        ? "counter.02cef29c589e742d4c8c.bundle.min.js"
        : 192 === e
        ? "progress.ca55d33bb06cee4e6f02.bundle.min.js"
        : 520 === e
        ? "tabs.37d5b4877cdb51ea91e9.bundle.min.js"
        : 181 === e
        ? "toggle.56f8ace4b1e830c02fc5.bundle.min.js"
        : 791 === e
        ? "video.d86bfd0676264945e968.bundle.min.js"
        : 268 === e
        ? "image-carousel.db284b09c0f8a8f1c44d.bundle.min.js"
        : 357 === e
        ? "text-editor.289ae80d76f0c5abea44.bundle.min.js"
        : 52 === e
        ? "wp-audio.75f0ced143febb8cd31a.bundle.min.js"
        : 413 === e
        ? "container.e026b16a99db8a3987c9.bundle.min.js"
        : void 0),
    (__webpack_require__.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (__webpack_require__.o = (e, r) =>
      Object.prototype.hasOwnProperty.call(e, r)),
    (t = {}),
    (i = "elementor:"),
    (__webpack_require__.l = (e, r, _, a) => {
      if (t[e]) t[e].push(r);
      else {
        var n, c;
        if (void 0 !== _)
          for (
            var o = document.getElementsByTagName("script"), u = 0;
            u < o.length;
            u++
          ) {
            var b = o[u];
            if (
              b.getAttribute("src") == e ||
              b.getAttribute("data-webpack") == i + _
            ) {
              n = b;
              break;
            }
          }
        n ||
          ((c = !0),
          ((n = document.createElement("script")).charset = "utf-8"),
          (n.timeout = 120),
          __webpack_require__.nc &&
            n.setAttribute("nonce", __webpack_require__.nc),
          n.setAttribute("data-webpack", i + _),
          (n.src = e)),
          (t[e] = [r]);
        var onScriptComplete = (r, _) => {
            (n.onerror = n.onload = null), clearTimeout(p);
            var i = t[e];
            if (
              (delete t[e],
              n.parentNode && n.parentNode.removeChild(n),
              i && i.forEach((e) => e(_)),
              r)
            )
              return r(_);
          },
          p = setTimeout(
            onScriptComplete.bind(null, void 0, { type: "timeout", target: n }),
            12e4
          );
        (n.onerror = onScriptComplete.bind(null, n.onerror)),
          (n.onload = onScriptComplete.bind(null, n.onload)),
          c && document.head.appendChild(n);
      }
    }),
    (__webpack_require__.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      __webpack_require__.g.importScripts &&
        (e = __webpack_require__.g.location + "");
      var r = __webpack_require__.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var _ = r.getElementsByTagName("script");
        _.length && (e = _[_.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (__webpack_require__.p = e);
    })(),
    (() => {
      var e = { 162: 0 };
      (__webpack_require__.f.j = (r, _) => {
        var t = __webpack_require__.o(e, r) ? e[r] : void 0;
        if (0 !== t)
          if (t) _.push(t[2]);
          else if (162 != r) {
            var i = new Promise((_, i) => (t = e[r] = [_, i]));
            _.push((t[2] = i));
            var a = __webpack_require__.p + __webpack_require__.u(r),
              n = new Error();
            __webpack_require__.l(
              a,
              (_) => {
                if (
                  __webpack_require__.o(e, r) &&
                  (0 !== (t = e[r]) && (e[r] = void 0), t)
                ) {
                  var i = _ && ("load" === _.type ? "missing" : _.type),
                    a = _ && _.target && _.target.src;
                  (n.message =
                    "Loading chunk " + r + " failed.\n(" + i + ": " + a + ")"),
                    (n.name = "ChunkLoadError"),
                    (n.type = i),
                    (n.request = a),
                    t[1](n);
                }
              },
              "chunk-" + r,
              r
            );
          } else e[r] = 0;
      }),
        (__webpack_require__.O.j = (r) => 0 === e[r]);
      var webpackJsonpCallback = (r, _) => {
          var t,
            i,
            [a, n, c] = _,
            o = 0;
          if (a.some((r) => 0 !== e[r])) {
            for (t in n)
              __webpack_require__.o(n, t) && (__webpack_require__.m[t] = n[t]);
            if (c) var u = c(__webpack_require__);
          }
          for (r && r(_); o < a.length; o++)
            (i = a[o]),
              __webpack_require__.o(e, i) && e[i] && e[i][0](),
              (e[a[o]] = 0);
          return __webpack_require__.O(u);
        },
        r = (self.webpackChunkelementor = self.webpackChunkelementor || []);
      r.forEach(webpackJsonpCallback.bind(null, 0)),
        (r.push = webpackJsonpCallback.bind(null, r.push.bind(r)));
    })();
})(); /*! elementor - v3.6.5 - 27-04-2022 */
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([
  [354],
  {
    7914: (e) => {
      (e.exports = function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    381: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = (e, t) => {
        t = Array.isArray(t) ? t : [t];
        for (const n of t)
          if (e.constructor.name === n.prototype[Symbol.toStringTag]) return !0;
        return !1;
      };
    },
    8135: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.ViewModule {
        getDefaultSettings() {
          return {
            selectors: {
              elements: ".elementor-element",
              nestedDocumentElements: ".elementor .elementor-element",
            },
            classes: { editMode: "elementor-edit-mode" },
          };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors");
          return {
            $elements: this.$element
              .find(e.elements)
              .not(this.$element.find(e.nestedDocumentElements)),
          };
        }
        getDocumentSettings(e) {
          let t;
          if (this.isEdit) {
            t = {};
            const e = elementor.settings.page.model;
            jQuery.each(e.getActiveControls(), (n) => {
              t[n] = e.attributes[n];
            });
          } else t = this.$element.data("elementor-settings") || {};
          return this.getItems(t, e);
        }
        runElementsHandlers() {
          this.elements.$elements.each((e, t) =>
            elementorFrontend.elementsHandler.runReadyTrigger(t)
          );
        }
        onInit() {
          (this.$element = this.getSettings("$element")),
            super.onInit(),
            (this.isEdit = this.$element.hasClass(
              this.getSettings("classes.editMode")
            )),
            this.isEdit
              ? elementor.on("document:loaded", () => {
                  elementor.settings.page.model.on(
                    "change",
                    this.onSettingsChange.bind(this)
                  );
                })
              : this.runElementsHandlers();
        }
        onSettingsChange() {}
      }
      t.default = _default;
    },
    2821: (e, t, n) => {
      "use strict";
      var s = n(7914);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = s(n(3090));
      class SwiperHandlerBase extends i.default {
        getInitialSlide() {
          const e = this.getEditSettings();
          return e.activeItemIndex ? e.activeItemIndex - 1 : 0;
        }
        getSlidesCount() {
          return this.elements.$slides.length;
        }
        togglePauseOnHover(e) {
          e
            ? this.elements.$swiperContainer.on({
                mouseenter: () => {
                  this.swiper.autoplay.stop();
                },
                mouseleave: () => {
                  this.swiper.autoplay.start();
                },
              })
            : this.elements.$swiperContainer.off("mouseenter mouseleave");
        }
        handleKenBurns() {
          const e = this.getSettings();
          this.$activeImageBg &&
            this.$activeImageBg.removeClass(e.classes.kenBurnsActive),
            (this.activeItemIndex = this.swiper
              ? this.swiper.activeIndex
              : this.getInitialSlide()),
            this.swiper
              ? (this.$activeImageBg = jQuery(
                  this.swiper.slides[this.activeItemIndex]
                ).children("." + e.classes.slideBackground))
              : (this.$activeImageBg = jQuery(
                  this.elements.$slides[0]
                ).children("." + e.classes.slideBackground)),
            this.$activeImageBg.addClass(e.classes.kenBurnsActive);
        }
      }
      t.default = SwiperHandlerBase;
    },
    3090: (e) => {
      "use strict";
      e.exports = elementorModules.ViewModule.extend({
        $element: null,
        editorListeners: null,
        onElementChange: null,
        onEditSettingsChange: null,
        onPageSettingsChange: null,
        isEdit: null,
        __construct: function (e) {
          this.isActive(e) &&
            ((this.$element = e.$element),
            (this.isEdit = this.$element.hasClass(
              "elementor-element-edit-mode"
            )),
            this.isEdit && this.addEditorListeners());
        },
        isActive: function () {
          return !0;
        },
        findElement: function (e) {
          var t = this.$element;
          return t.find(e).filter(function () {
            return jQuery(this).closest(".elementor-element").is(t);
          });
        },
        getUniqueHandlerID: function (e, t) {
          return (
            e || (e = this.getModelCID()),
            t || (t = this.$element),
            e + t.attr("data-element_type") + this.getConstructorID()
          );
        },
        initEditorListeners: function () {
          var e = this;
          if (
            ((e.editorListeners = [
              {
                event: "element:destroy",
                to: elementor.channels.data,
                callback: function (t) {
                  t.cid === e.getModelCID() && e.onDestroy();
                },
              },
            ]),
            e.onElementChange)
          ) {
            const t = e.getWidgetType() || e.getElementType();
            let n = "change";
            "global" !== t && (n += ":" + t),
              e.editorListeners.push({
                event: n,
                to: elementor.channels.editor,
                callback: function (t, n) {
                  e.getUniqueHandlerID(n.model.cid, n.$el) ===
                    e.getUniqueHandlerID() &&
                    e.onElementChange(t.model.get("name"), t, n);
                },
              });
          }
          e.onEditSettingsChange &&
            e.editorListeners.push({
              event: "change:editSettings",
              to: elementor.channels.editor,
              callback: function (t, n) {
                n.model.cid === e.getModelCID() &&
                  e.onEditSettingsChange(Object.keys(t.changed)[0]);
              },
            }),
            ["page"].forEach(function (t) {
              var n = "on" + t[0].toUpperCase() + t.slice(1) + "SettingsChange";
              e[n] &&
                e.editorListeners.push({
                  event: "change",
                  to: elementor.settings[t].model,
                  callback: function (t) {
                    e[n](t.changed);
                  },
                });
            });
        },
        getEditorListeners: function () {
          return (
            this.editorListeners || this.initEditorListeners(),
            this.editorListeners
          );
        },
        addEditorListeners: function () {
          var e = this.getUniqueHandlerID();
          this.getEditorListeners().forEach(function (t) {
            elementorFrontend.addListenerOnce(e, t.event, t.callback, t.to);
          });
        },
        removeEditorListeners: function () {
          var e = this.getUniqueHandlerID();
          this.getEditorListeners().forEach(function (t) {
            elementorFrontend.removeListeners(e, t.event, null, t.to);
          });
        },
        getElementType: function () {
          return this.$element.data("element_type");
        },
        getWidgetType: function () {
          const e = this.$element.data("widget_type");
          if (e) return e.split(".")[0];
        },
        getID: function () {
          return this.$element.data("id");
        },
        getModelCID: function () {
          return this.$element.data("model-cid");
        },
        getElementSettings: function (e) {
          let t = {};
          const n = this.getModelCID();
          if (this.isEdit && n) {
            const e = elementorFrontend.config.elements.data[n],
              s = e.attributes;
            let i = s.widgetType || s.elType;
            s.isInner && (i = "inner-" + i);
            let r = elementorFrontend.config.elements.keys[i];
            r ||
              ((r = elementorFrontend.config.elements.keys[i] = []),
              jQuery.each(e.controls, (e, t) => {
                t.frontend_available && r.push(e);
              })),
              jQuery.each(e.getActiveControls(), function (e) {
                if (-1 !== r.indexOf(e)) {
                  let n = s[e];
                  n.toJSON && (n = n.toJSON()), (t[e] = n);
                }
              });
          } else t = this.$element.data("settings") || {};
          return this.getItems(t, e);
        },
        getEditSettings: function (e) {
          var t = {};
          return (
            this.isEdit &&
              (t =
                elementorFrontend.config.elements.editSettings[
                  this.getModelCID()
                ].attributes),
            this.getItems(t, e)
          );
        },
        getCurrentDeviceSetting: function (e) {
          return elementorFrontend.getCurrentDeviceSetting(
            this.getElementSettings(),
            e
          );
        },
        onInit: function () {
          this.isActive(this.getSettings()) &&
            elementorModules.ViewModule.prototype.onInit.apply(this, arguments);
        },
        onDestroy: function () {
          this.isEdit && this.removeEditorListeners(),
            this.unbindEvents && this.unbindEvents();
        },
      });
    },
    6412: (e, t, n) => {
      "use strict";
      var s = n(7914),
        i = s(n(5955)),
        r = s(n(8135)),
        o = s(n(5658)),
        l = s(n(3090)),
        c = s(n(2821));
      i.default.frontend = {
        Document: r.default,
        tools: { StretchElement: o.default },
        handlers: { Base: l.default, SwiperBase: c.default },
      };
    },
    5658: (e) => {
      "use strict";
      e.exports = elementorModules.ViewModule.extend({
        getDefaultSettings: function () {
          return {
            element: null,
            direction: elementorFrontend.config.is_rtl ? "right" : "left",
            selectors: { container: window },
          };
        },
        getDefaultElements: function () {
          return { $element: jQuery(this.getSettings("element")) };
        },
        stretch: function () {
          var e,
            t = this.getSettings("selectors.container");
          try {
            e = jQuery(t);
          } catch (e) {}
          (e && e.length) ||
            (e = jQuery(this.getDefaultSettings().selectors.container)),
            this.reset();
          var n = this.elements.$element,
            s = e.innerWidth(),
            i = n.offset().left,
            r = "fixed" === n.css("position"),
            o = r ? 0 : i;
          if (window !== e[0]) {
            var l = e.offset().left;
            r && (o = l), i > l && (o = i - l);
          }
          r ||
            (elementorFrontend.config.is_rtl && (o = s - (n.outerWidth() + o)),
            (o = -o));
          var c = {};
          (c.width = s + "px"),
            (c[this.getSettings("direction")] = o + "px"),
            n.css(c);
        },
        reset: function () {
          var e = { width: "" };
          (e[this.getSettings("direction")] = ""),
            this.elements.$element.css(e);
        },
      });
    },
    2618: (e, t, n) => {
      "use strict";
      var s = n(7914);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = s(n(7597)),
        r = s(n(381));
      class ArgsObject extends i.default {
        static getInstanceType() {
          return "ArgsObject";
        }
        constructor(e) {
          super(), (this.args = e);
        }
        requireArgument(e, t = this.args) {
          if (!t.hasOwnProperty(e)) throw Error(`${e} is required.`);
        }
        requireArgumentType(e, t, n = this.args) {
          if ((this.requireArgument(e, n), typeof n[e] !== t))
            throw Error(`${e} invalid type: ${t}.`);
        }
        requireArgumentInstance(e, t, n = this.args) {
          if (
            (this.requireArgument(e, n),
            !(n[e] instanceof t || (0, r.default)(n[e], t)))
          )
            throw Error(`${e} invalid instance.`);
        }
        requireArgumentConstructor(e, t, n = this.args) {
          if (
            (this.requireArgument(e, n),
            n[e].constructor.toString() !== t.prototype.constructor.toString())
          )
            throw Error(`${e} invalid constructor type.`);
        }
      }
      t.default = ArgsObject;
    },
    869: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.ForceMethodImplementation = void 0);
      class ForceMethodImplementation extends Error {
        constructor(e = {}) {
          super(
            `${e.isStatic ? "static " : ""}${
              e.fullName
            }() should be implemented, please provide '${
              e.functionName || e.fullName
            }' functionality.`
          ),
            Error.captureStackTrace(this, ForceMethodImplementation);
        }
      }
      t.ForceMethodImplementation = ForceMethodImplementation;
      t.default = () => {
        const e = Error().stack.split("\n")[2].trim(),
          t = e.startsWith("at new") ? "constructor" : e.split(" ")[1],
          n = {};
        if (
          ((n.functionName = t), (n.fullName = t), n.functionName.includes("."))
        ) {
          const e = n.functionName.split(".");
          (n.className = e[0]), (n.functionName = e[1]);
        } else n.isStatic = !0;
        throw new ForceMethodImplementation(n);
      };
    },
    7597: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class InstanceType {
        static [Symbol.hasInstance](e) {
          let t = super[Symbol.hasInstance](e);
          if (e && !e.constructor.getInstanceType) return t;
          if (
            e &&
            (e.instanceTypes || (e.instanceTypes = []),
            t ||
              (this.getInstanceType() === e.constructor.getInstanceType() &&
                (t = !0)),
            t)
          ) {
            const t =
              this.getInstanceType === InstanceType.getInstanceType
                ? "BaseInstanceType"
                : this.getInstanceType();
            -1 === e.instanceTypes.indexOf(t) && e.instanceTypes.push(t);
          }
          return (
            !t &&
              e &&
              (t =
                e.instanceTypes &&
                Array.isArray(e.instanceTypes) &&
                -1 !== e.instanceTypes.indexOf(this.getInstanceType())),
            t
          );
        }
        constructor() {
          let e = new.target;
          const t = [];
          for (; e.__proto__ && e.__proto__.name; )
            t.push(e.__proto__), (e = e.__proto__);
          t.reverse().forEach((e) => this instanceof e);
        }
        static getInstanceType() {
          elementorModules.ForceMethodImplementation();
        }
      }
      t.default = InstanceType;
    },
    1192: (e) => {
      "use strict";
      const Module = function () {
        const e = jQuery,
          t = arguments,
          n = this,
          s = {};
        let i;
        const ensureClosureMethods = function () {
            e.each(n, function (e) {
              const t = n[e];
              "function" == typeof t &&
                (n[e] = function () {
                  return t.apply(n, arguments);
                });
            });
          },
          initSettings = function () {
            i = n.getDefaultSettings();
            const s = t[0];
            s && e.extend(!0, i, s);
          },
          init = function () {
            n.__construct.apply(n, t),
              ensureClosureMethods(),
              initSettings(),
              n.trigger("init");
          };
        (this.getItems = function (e, t) {
          if (t) {
            const n = t.split("."),
              s = n.splice(0, 1);
            if (!n.length) return e[s];
            if (!e[s]) return;
            return this.getItems(e[s], n.join("."));
          }
          return e;
        }),
          (this.getSettings = function (e) {
            return this.getItems(i, e);
          }),
          (this.setSettings = function (t, s, r) {
            if ((r || (r = i), "object" == typeof t)) return e.extend(r, t), n;
            const o = t.split("."),
              l = o.splice(0, 1);
            return o.length
              ? (r[l] || (r[l] = {}), n.setSettings(o.join("."), s, r[l]))
              : ((r[l] = s), n);
          }),
          (this.getErrorMessage = function (e, t) {
            let n;
            if ("forceMethodImplementation" === e)
              n = `The method '${t}' must to be implemented in the inheritor child.`;
            else n = "An error occurs";
            return n;
          }),
          (this.forceMethodImplementation = function (e) {
            throw new Error(
              this.getErrorMessage("forceMethodImplementation", e)
            );
          }),
          (this.on = function (t, i) {
            if ("object" == typeof t)
              return (
                e.each(t, function (e) {
                  n.on(e, this);
                }),
                n
              );
            return (
              t.split(" ").forEach(function (e) {
                s[e] || (s[e] = []), s[e].push(i);
              }),
              n
            );
          }),
          (this.off = function (e, t) {
            if (!s[e]) return n;
            if (!t) return delete s[e], n;
            const i = s[e].indexOf(t);
            return (
              -1 !== i && (delete s[e][i], (s[e] = s[e].filter((e) => e))), n
            );
          }),
          (this.trigger = function (t) {
            const i = "on" + t[0].toUpperCase() + t.slice(1),
              r = Array.prototype.slice.call(arguments, 1);
            n[i] && n[i].apply(n, r);
            const o = s[t];
            return o
              ? (e.each(o, function (e, t) {
                  t.apply(n, r);
                }),
                n)
              : n;
          }),
          init();
      };
      (Module.prototype.__construct = function () {}),
        (Module.prototype.getDefaultSettings = function () {
          return {};
        }),
        (Module.prototype.getConstructorID = function () {
          return this.constructor.name;
        }),
        (Module.extend = function (e) {
          const t = jQuery,
            n = this,
            child = function () {
              return n.apply(this, arguments);
            };
          return (
            t.extend(child, n),
            ((child.prototype = Object.create(
              t.extend({}, n.prototype, e)
            )).constructor = child),
            (child.__super__ = n.prototype),
            child
          );
        }),
        (e.exports = Module);
    },
    6516: (e, t, n) => {
      "use strict";
      var s = n(7914)(n(2640));
      e.exports = s.default.extend({
        getDefaultSettings: function () {
          return {
            container: null,
            items: null,
            columnsCount: 3,
            verticalSpaceBetween: 30,
          };
        },
        getDefaultElements: function () {
          return {
            $container: jQuery(this.getSettings("container")),
            $items: jQuery(this.getSettings("items")),
          };
        },
        run: function () {
          var e = [],
            t = this.elements.$container.position().top,
            n = this.getSettings(),
            s = n.columnsCount;
          (t += parseInt(this.elements.$container.css("margin-top"), 10)),
            this.elements.$items.each(function (i) {
              var r = Math.floor(i / s),
                o = jQuery(this),
                l =
                  o[0].getBoundingClientRect().height + n.verticalSpaceBetween;
              if (r) {
                var c = o.position(),
                  a = i % s,
                  u = c.top - t - e[a];
                (u -= parseInt(o.css("margin-top"), 10)),
                  (u *= -1),
                  o.css("margin-top", u + "px"),
                  (e[a] += l);
              } else e.push(l);
            });
        },
      });
    },
    400: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = class Scroll {
        static scrollObserver(e) {
          let t = 0;
          const n = {
            root: e.root || null,
            rootMargin: e.offset || "0px",
            threshold: ((e = 0) => {
              const t = [];
              if (e > 0 && e <= 100) {
                const n = 100 / e;
                for (let e = 0; e <= 100; e += n) t.push(e / 100);
              } else t.push(0);
              return t;
            })(e.sensitivity),
          };
          return new IntersectionObserver(function handleIntersect(n) {
            const s = n[0].boundingClientRect.y,
              i = n[0].isIntersecting,
              r = s < t ? "down" : "up",
              o = Math.abs(
                parseFloat((100 * n[0].intersectionRatio).toFixed(2))
              );
            e.callback({
              sensitivity: e.sensitivity,
              isInViewport: i,
              scrollPercentage: o,
              intersectionScrollDirection: r,
            }),
              (t = s);
          }, n);
        }
        static getElementViewportPercentage(e, t = {}) {
          const n = e[0].getBoundingClientRect(),
            s = t.start || 0,
            i = t.end || 0,
            r = (window.innerHeight * s) / 100,
            o = (window.innerHeight * i) / 100,
            l = n.top - window.innerHeight,
            c = 0 - l + r,
            a = n.top + r + e.height() - l + o,
            u = Math.max(0, Math.min(c / a, 1));
          return parseFloat((100 * u).toFixed(2));
        }
        static getPageScrollPercentage(e = {}, t) {
          const n = e.start || 0,
            s = e.end || 0,
            i =
              t ||
              document.documentElement.scrollHeight -
                document.documentElement.clientHeight,
            r = (i * n) / 100,
            o = i + r + (i * s) / 100;
          return (
            ((document.documentElement.scrollTop +
              document.body.scrollTop +
              r) /
              o) *
            100
          );
        }
      };
    },
    2640: (e, t, n) => {
      "use strict";
      var s = n(7914)(n(1192));
      e.exports = s.default.extend({
        elements: null,
        getDefaultElements: function () {
          return {};
        },
        bindEvents: function () {},
        onInit: function () {
          this.initElements(), this.bindEvents();
        },
        initElements: function () {
          this.elements = this.getDefaultElements();
        },
      });
    },
    5955: (e, t, n) => {
      "use strict";
      var s = n(7914);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = s(n(1192)),
        r = s(n(2640)),
        o = s(n(2618)),
        l = s(n(6516)),
        c = s(n(400)),
        a = s(n(869)),
        u = (window.elementorModules = {
          Module: i.default,
          ViewModule: r.default,
          ArgsObject: o.default,
          ForceMethodImplementation: a.default,
          utils: { Masonry: l.default, Scroll: c.default },
        });
      t.default = u;
    },
  },
  (e) => {
    var t;
    (t = 6412), e((e.s = t));
  },
]);
!(function () {
  "use strict";
  function Waypoint(options) {
    if (!options) throw new Error("No options passed to Waypoint constructor");
    if (!options.element)
      throw new Error("No element option passed to Waypoint constructor");
    if (!options.handler)
      throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + keyCounter),
      (this.options = Waypoint.Adapter.extend({}, Waypoint.defaults, options)),
      (this.element = this.options.element),
      (this.adapter = new Waypoint.Adapter(this.element)),
      (this.callback = options.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = Waypoint.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = Waypoint.Context.findOrCreateByElement(
        this.options.context
      )),
      Waypoint.offsetAliases[this.options.offset] &&
        (this.options.offset = Waypoint.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (allWaypoints[this.key] = this),
      (keyCounter += 1);
  }
  var keyCounter = 0,
    allWaypoints = {};
  (Waypoint.prototype.queueTrigger = function (direction) {
    this.group.queueTrigger(this, direction);
  }),
    (Waypoint.prototype.trigger = function (args) {
      this.enabled && this.callback && this.callback.apply(this, args);
    }),
    (Waypoint.prototype.destroy = function () {
      this.context.remove(this),
        this.group.remove(this),
        delete allWaypoints[this.key];
    }),
    (Waypoint.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (Waypoint.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (Waypoint.prototype.next = function () {
      return this.group.next(this);
    }),
    (Waypoint.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (Waypoint.invokeAll = function (method) {
      var allWaypointsArray = [];
      for (var waypointKey in allWaypoints)
        allWaypointsArray.push(allWaypoints[waypointKey]);
      for (var i = 0, end = allWaypointsArray.length; i < end; i++)
        allWaypointsArray[i][method]();
    }),
    (Waypoint.destroyAll = function () {
      Waypoint.invokeAll("destroy");
    }),
    (Waypoint.disableAll = function () {
      Waypoint.invokeAll("disable");
    }),
    (Waypoint.enableAll = function () {
      Waypoint.Context.refreshAll();
      for (var waypointKey in allWaypoints)
        allWaypoints[waypointKey].enabled = !0;
      return this;
    }),
    (Waypoint.refreshAll = function () {
      Waypoint.Context.refreshAll();
    }),
    (Waypoint.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (Waypoint.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (Waypoint.adapters = []),
    (Waypoint.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0,
    }),
    (Waypoint.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = Waypoint);
})(),
  (function () {
    "use strict";
    function requestAnimationFrameShim(callback) {
      window.setTimeout(callback, 1e3 / 60);
    }
    function Context(element) {
      (this.element = element),
        (this.Adapter = Waypoint.Adapter),
        (this.adapter = new this.Adapter(element)),
        (this.key = "waypoint-context-" + keyCounter),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (element.waypointContextKey = this.key),
        (contexts[element.waypointContextKey] = this),
        (keyCounter += 1),
        Waypoint.windowContext ||
          ((Waypoint.windowContext = !0),
          (Waypoint.windowContext = new Context(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var keyCounter = 0,
      contexts = {},
      Waypoint = window.Waypoint,
      oldWindowLoad = window.onload;
    (Context.prototype.add = function (waypoint) {
      var axis = waypoint.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[axis][waypoint.key] = waypoint), this.refresh();
    }),
      (Context.prototype.checkEmpty = function () {
        var horizontalEmpty = this.Adapter.isEmptyObject(
            this.waypoints.horizontal
          ),
          verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical),
          isWindow = this.element == this.element.window;
        horizontalEmpty &&
          verticalEmpty &&
          !isWindow &&
          (this.adapter.off(".waypoints"), delete contexts[this.key]);
      }),
      (Context.prototype.createThrottledResizeHandler = function () {
        function resizeHandler() {
          self.handleResize(), (self.didResize = !1);
        }
        var self = this;
        this.adapter.on("resize.waypoints", function () {
          self.didResize ||
            ((self.didResize = !0),
            Waypoint.requestAnimationFrame(resizeHandler));
        });
      }),
      (Context.prototype.createThrottledScrollHandler = function () {
        function scrollHandler() {
          self.handleScroll(), (self.didScroll = !1);
        }
        var self = this;
        this.adapter.on("scroll.waypoints", function () {
          (self.didScroll && !Waypoint.isTouch) ||
            ((self.didScroll = !0),
            Waypoint.requestAnimationFrame(scrollHandler));
        });
      }),
      (Context.prototype.handleResize = function () {
        Waypoint.Context.refreshAll();
      }),
      (Context.prototype.handleScroll = function () {
        var triggeredGroups = {},
          axes = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var axisKey in axes) {
          var axis = axes[axisKey],
            isForward = axis.newScroll > axis.oldScroll,
            direction = isForward ? axis.forward : axis.backward;
          for (var waypointKey in this.waypoints[axisKey]) {
            var waypoint = this.waypoints[axisKey][waypointKey];
            if (null !== waypoint.triggerPoint) {
              var wasBeforeTriggerPoint =
                  axis.oldScroll < waypoint.triggerPoint,
                nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint,
                crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint,
                crossedBackward =
                  !wasBeforeTriggerPoint && !nowAfterTriggerPoint;
              (crossedForward || crossedBackward) &&
                (waypoint.queueTrigger(direction),
                (triggeredGroups[waypoint.group.id] = waypoint.group));
            }
          }
        }
        for (var groupKey in triggeredGroups)
          triggeredGroups[groupKey].flushTriggers();
        this.oldScroll = {
          x: axes.horizontal.newScroll,
          y: axes.vertical.newScroll,
        };
      }),
      (Context.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? Waypoint.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (Context.prototype.remove = function (waypoint) {
        delete this.waypoints[waypoint.axis][waypoint.key], this.checkEmpty();
      }),
      (Context.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? Waypoint.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (Context.prototype.destroy = function () {
        var allWaypoints = [];
        for (var axis in this.waypoints)
          for (var waypointKey in this.waypoints[axis])
            allWaypoints.push(this.waypoints[axis][waypointKey]);
        for (var i = 0, end = allWaypoints.length; i < end; i++)
          allWaypoints[i].destroy();
      }),
      (Context.prototype.refresh = function () {
        var axes,
          isWindow = this.element == this.element.window,
          contextOffset = isWindow ? void 0 : this.adapter.offset(),
          triggeredGroups = {};
        this.handleScroll(),
          (axes = {
            horizontal: {
              contextOffset: isWindow ? 0 : contextOffset.left,
              contextScroll: isWindow ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
              offsetProp: "left",
            },
            vertical: {
              contextOffset: isWindow ? 0 : contextOffset.top,
              contextScroll: isWindow ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
              offsetProp: "top",
            },
          });
        for (var axisKey in axes) {
          var axis = axes[axisKey];
          for (var waypointKey in this.waypoints[axisKey]) {
            var contextModifier,
              wasBeforeScroll,
              nowAfterScroll,
              triggeredBackward,
              triggeredForward,
              waypoint = this.waypoints[axisKey][waypointKey],
              adjustment = waypoint.options.offset,
              oldTriggerPoint = waypoint.triggerPoint,
              elementOffset = 0,
              freshWaypoint = null == oldTriggerPoint;
            waypoint.element !== waypoint.element.window &&
              (elementOffset = waypoint.adapter.offset()[axis.offsetProp]),
              "function" == typeof adjustment
                ? (adjustment = adjustment.apply(waypoint))
                : "string" == typeof adjustment &&
                  ((adjustment = parseFloat(adjustment)),
                  waypoint.options.offset.indexOf("%") > -1 &&
                    (adjustment = Math.ceil(
                      (axis.contextDimension * adjustment) / 100
                    ))),
              (contextModifier = axis.contextScroll - axis.contextOffset),
              (waypoint.triggerPoint = Math.floor(
                elementOffset + contextModifier - adjustment
              )),
              (wasBeforeScroll = oldTriggerPoint < axis.oldScroll),
              (nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll),
              (triggeredBackward = wasBeforeScroll && nowAfterScroll),
              (triggeredForward = !wasBeforeScroll && !nowAfterScroll),
              !freshWaypoint && triggeredBackward
                ? (waypoint.queueTrigger(axis.backward),
                  (triggeredGroups[waypoint.group.id] = waypoint.group))
                : !freshWaypoint && triggeredForward
                ? (waypoint.queueTrigger(axis.forward),
                  (triggeredGroups[waypoint.group.id] = waypoint.group))
                : freshWaypoint &&
                  axis.oldScroll >= waypoint.triggerPoint &&
                  (waypoint.queueTrigger(axis.forward),
                  (triggeredGroups[waypoint.group.id] = waypoint.group));
          }
        }
        return (
          Waypoint.requestAnimationFrame(function () {
            for (var groupKey in triggeredGroups)
              triggeredGroups[groupKey].flushTriggers();
          }),
          this
        );
      }),
      (Context.findOrCreateByElement = function (element) {
        return Context.findByElement(element) || new Context(element);
      }),
      (Context.refreshAll = function () {
        for (var contextId in contexts) contexts[contextId].refresh();
      }),
      (Context.findByElement = function (element) {
        return contexts[element.waypointContextKey];
      }),
      (window.onload = function () {
        oldWindowLoad && oldWindowLoad(), Context.refreshAll();
      }),
      (Waypoint.requestAnimationFrame = function (callback) {
        var requestFn =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          requestAnimationFrameShim;
        requestFn.call(window, callback);
      }),
      (Waypoint.Context = Context);
  })(),
  (function () {
    "use strict";
    function byTriggerPoint(a, b) {
      return a.triggerPoint - b.triggerPoint;
    }
    function byReverseTriggerPoint(a, b) {
      return b.triggerPoint - a.triggerPoint;
    }
    function Group(options) {
      (this.name = options.name),
        (this.axis = options.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (groups[this.axis][this.name] = this);
    }
    var groups = { vertical: {}, horizontal: {} },
      Waypoint = window.Waypoint;
    (Group.prototype.add = function (waypoint) {
      this.waypoints.push(waypoint);
    }),
      (Group.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (Group.prototype.flushTriggers = function () {
        for (var direction in this.triggerQueues) {
          var waypoints = this.triggerQueues[direction],
            reverse = "up" === direction || "left" === direction;
          waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);
          for (var i = 0, end = waypoints.length; i < end; i += 1) {
            var waypoint = waypoints[i];
            (waypoint.options.continuous || i === waypoints.length - 1) &&
              waypoint.trigger([direction]);
          }
        }
        this.clearTriggerQueues();
      }),
      (Group.prototype.next = function (waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints),
          isLast = index === this.waypoints.length - 1;
        return isLast ? null : this.waypoints[index + 1];
      }),
      (Group.prototype.previous = function (waypoint) {
        this.waypoints.sort(byTriggerPoint);
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        return index ? this.waypoints[index - 1] : null;
      }),
      (Group.prototype.queueTrigger = function (waypoint, direction) {
        this.triggerQueues[direction].push(waypoint);
      }),
      (Group.prototype.remove = function (waypoint) {
        var index = Waypoint.Adapter.inArray(waypoint, this.waypoints);
        index > -1 && this.waypoints.splice(index, 1);
      }),
      (Group.prototype.first = function () {
        return this.waypoints[0];
      }),
      (Group.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (Group.findOrCreate = function (options) {
        return groups[options.axis][options.name] || new Group(options);
      }),
      (Waypoint.Group = Group);
  })(),
  (function () {
    "use strict";
    function JQueryAdapter(element) {
      this.$element = $(element);
    }
    var $ = window.jQuery,
      Waypoint = window.Waypoint;
    $.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (i, method) {
        JQueryAdapter.prototype[method] = function () {
          var args = Array.prototype.slice.call(arguments);
          return this.$element[method].apply(this.$element, args);
        };
      }
    ),
      $.each(["extend", "inArray", "isEmptyObject"], function (i, method) {
        JQueryAdapter[method] = $[method];
      }),
      Waypoint.adapters.push({ name: "jquery", Adapter: JQueryAdapter }),
      (Waypoint.Adapter = JQueryAdapter);
  })(),
  (function () {
    "use strict";
    function createExtension(framework) {
      return function () {
        var waypoints = [],
          overrides = arguments[0];
        return (
          framework.isFunction(arguments[0]) &&
            ((overrides = framework.extend({}, arguments[1])),
            (overrides.handler = arguments[0])),
          this.each(function () {
            var options = framework.extend({}, overrides, { element: this });
            "string" == typeof options.context &&
              (options.context = framework(this).closest(options.context)[0]),
              waypoints.push(new Waypoint(options));
          }),
          waypoints
        );
      };
    }
    var Waypoint = window.Waypoint;
    window.jQuery &&
      (window.jQuery.fn.elementorWaypoint = createExtension(window.jQuery)),
      window.Zepto &&
        (window.Zepto.fn.elementorWaypoint = createExtension(window.Zepto));
  })();
/*! jQuery UI - v1.13.1 - 2022-01-20
 * http://jqueryui.com
 * Includes: data.js, disable-selection.js, escape-selector.js, focusable.js, form-reset-mixin.js, form.js, ie.js, jquery-1-7.js, keycode.js, labels.js, plugin.js, position.js, safe-active-element.js, safe-blur.js, scroll-parent.js, tabbable.js, unique-id.js, version.js, widget.js
 * Copyright jQuery Foundation and other contributors; Licensed  */
!(function (t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (x) {
  "use strict";
  var t, e, i, n, W, C, o, s, r, l, a, h, u;
  function E(t, e, i) {
    return [
      parseFloat(t[0]) * (a.test(t[0]) ? e / 100 : 1),
      parseFloat(t[1]) * (a.test(t[1]) ? i / 100 : 1),
    ];
  }
  function L(t, e) {
    return parseInt(x.css(t, e), 10) || 0;
  }
  function N(t) {
    return null != t && t === t.window;
  }
  (x.ui = x.ui || {}),
    (x.ui.version = "1.13.1"),
    /*!
     * jQuery UI :data 1.13.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    x.extend(x.expr.pseudos, {
      data: x.expr.createPseudo
        ? x.expr.createPseudo(function (e) {
            return function (t) {
              return !!x.data(t, e);
            };
          })
        : function (t, e, i) {
            return !!x.data(t, i[3]);
          },
    }),
    /*!
     * jQuery UI Disable Selection 1.13.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    x.fn.extend({
      disableSelection:
        ((t =
          "onselectstart" in document.createElement("div")
            ? "selectstart"
            : "mousedown"),
        function () {
          return this.on(t + ".ui-disableSelection", function (t) {
            t.preventDefault();
          });
        }),
      enableSelection: function () {
        return this.off(".ui-disableSelection");
      },
    }),
    /*!
     * jQuery UI Focusable 1.13.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    (x.ui.focusable = function (t, e) {
      var i,
        n,
        o,
        s,
        r = t.nodeName.toLowerCase();
      return "area" === r
        ? ((n = (i = t.parentNode).name),
          !(!t.href || !n || "map" !== i.nodeName.toLowerCase()) &&
            0 < (n = x("img[usemap='#" + n + "']")).length &&
            n.is(":visible"))
        : (/^(input|select|textarea|button|object)$/.test(r)
            ? (o = !t.disabled) &&
              (s = x(t).closest("fieldset")[0]) &&
              (o = !s.disabled)
            : (o = ("a" === r && t.href) || e),
          o &&
            x(t).is(":visible") &&
            (function (t) {
              var e = t.css("visibility");
              for (; "inherit" === e; )
                (t = t.parent()), (e = t.css("visibility"));
              return "visible" === e;
            })(x(t)));
    }),
    x.extend(x.expr.pseudos, {
      focusable: function (t) {
        return x.ui.focusable(t, null != x.attr(t, "tabindex"));
      },
    }),
    (x.fn._form = function () {
      return "string" == typeof this[0].form
        ? this.closest("form")
        : x(this[0].form);
    }),
    /*!
     * jQuery UI Form Reset Mixin 1.13.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    (x.ui.formResetMixin = {
      _formResetHandler: function () {
        var e = x(this);
        setTimeout(function () {
          var t = e.data("ui-form-reset-instances");
          x.each(t, function () {
            this.refresh();
          });
        });
      },
      _bindFormResetHandler: function () {
        var t;
        (this.form = this.element._form()),
          this.form.length &&
            ((t = this.form.data("ui-form-reset-instances") || []).length ||
              this.form.on("reset.ui-form-reset", this._formResetHandler),
            t.push(this),
            this.form.data("ui-form-reset-instances", t));
      },
      _unbindFormResetHandler: function () {
        var t;
        this.form.length &&
          ((t = this.form.data("ui-form-reset-instances")).splice(
            x.inArray(this, t),
            1
          ),
          t.length
            ? this.form.data("ui-form-reset-instances", t)
            : this.form
                .removeData("ui-form-reset-instances")
                .off("reset.ui-form-reset"));
      },
    }),
    (x.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
    /*!
     * jQuery UI Support for jQuery core 1.8.x and newer 1.13.0
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     */
    x.expr.pseudos || (x.expr.pseudos = x.expr[":"]),
    x.uniqueSort || (x.uniqueSort = x.unique),
    x.escapeSelector ||
      ((e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g),
      (i = function (t, e) {
        return e
          ? "\0" === t
            ? "�"
            : t.slice(0, -1) +
              "\\" +
              t.charCodeAt(t.length - 1).toString(16) +
              " "
          : "\\" + t;
      }),
      (x.escapeSelector = function (t) {
        return (t + "").replace(e, i);
      })),
    (x.fn.even && x.fn.odd) ||
      x.fn.extend({
        even: function () {
          return this.filter(function (t) {
            return t % 2 == 0;
          });
        },
        odd: function () {
          return this.filter(function (t) {
            return t % 2 == 1;
          });
        },
      }),
    /*!
     * jQuery UI Keycode 1.13.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    (x.ui.keyCode = {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    }),
    /*!
     * jQuery UI Labels 1.13.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    (x.fn.labels = function () {
      var t, e, i;
      return this.length
        ? this[0].labels && this[0].labels.length
          ? this.pushStack(this[0].labels)
          : ((e = this.eq(0).parents("label")),
            (t = this.attr("id")) &&
              ((i = (i = this.eq(0).parents().last()).add(
                (i.length ? i : this).siblings()
              )),
              (t = "label[for='" + x.escapeSelector(t) + "']"),
              (e = e.add(i.find(t).addBack(t)))),
            this.pushStack(e))
        : this.pushStack([]);
    }),
    (x.ui.plugin = {
      add: function (t, e, i) {
        var n,
          o = x.ui[t].prototype;
        for (n in i)
          (o.plugins[n] = o.plugins[n] || []), o.plugins[n].push([e, i[n]]);
      },
      call: function (t, e, i, n) {
        var o,
          s = t.plugins[e];
        if (
          s &&
          (n ||
            (t.element[0].parentNode &&
              11 !== t.element[0].parentNode.nodeType))
        )
          for (o = 0; o < s.length; o++)
            t.options[s[o][0]] && s[o][1].apply(t.element, i);
      },
    }),
    /*!
     * jQuery UI Position 1.13.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     *
     * http://api.jqueryui.com/position/
     */
    (W = Math.max),
    (C = Math.abs),
    (o = /left|center|right/),
    (s = /top|center|bottom/),
    (r = /[\+\-]\d+(\.[\d]+)?%?/),
    (l = /^\w+/),
    (a = /%$/),
    (h = x.fn.position),
    (x.position = {
      scrollbarWidth: function () {
        if (void 0 !== n) return n;
        var t,
          e = x(
            "<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>"
          ),
          i = e.children()[0];
        return (
          x("body").append(e),
          (t = i.offsetWidth),
          e.css("overflow", "scroll"),
          t === (i = i.offsetWidth) && (i = e[0].clientWidth),
          e.remove(),
          (n = t - i)
        );
      },
      getScrollInfo: function (t) {
        var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
          i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
          e =
            "scroll" === e ||
            ("auto" === e && t.width < t.element[0].scrollWidth);
        return {
          width:
            "scroll" === i ||
            ("auto" === i && t.height < t.element[0].scrollHeight)
              ? x.position.scrollbarWidth()
              : 0,
          height: e ? x.position.scrollbarWidth() : 0,
        };
      },
      getWithinInfo: function (t) {
        var e = x(t || window),
          i = N(e[0]),
          n = !!e[0] && 9 === e[0].nodeType;
        return {
          element: e,
          isWindow: i,
          isDocument: n,
          offset: !i && !n ? x(t).offset() : { left: 0, top: 0 },
          scrollLeft: e.scrollLeft(),
          scrollTop: e.scrollTop(),
          width: e.outerWidth(),
          height: e.outerHeight(),
        };
      },
    }),
    (x.fn.position = function (f) {
      if (!f || !f.of) return h.apply(this, arguments);
      var c,
        d,
        p,
        g,
        m,
        t,
        v =
          "string" == typeof (f = x.extend({}, f)).of
            ? x(document).find(f.of)
            : x(f.of),
        y = x.position.getWithinInfo(f.within),
        w = x.position.getScrollInfo(y),
        b = (f.collision || "flip").split(" "),
        _ = {},
        e =
          9 === (t = (e = v)[0]).nodeType
            ? {
                width: e.width(),
                height: e.height(),
                offset: { top: 0, left: 0 },
              }
            : N(t)
            ? {
                width: e.width(),
                height: e.height(),
                offset: { top: e.scrollTop(), left: e.scrollLeft() },
              }
            : t.preventDefault
            ? { width: 0, height: 0, offset: { top: t.pageY, left: t.pageX } }
            : {
                width: e.outerWidth(),
                height: e.outerHeight(),
                offset: e.offset(),
              };
      return (
        v[0].preventDefault && (f.at = "left top"),
        (d = e.width),
        (p = e.height),
        (m = x.extend({}, (g = e.offset))),
        x.each(["my", "at"], function () {
          var t,
            e,
            i = (f[this] || "").split(" ");
          ((i =
            1 === i.length
              ? o.test(i[0])
                ? i.concat(["center"])
                : s.test(i[0])
                ? ["center"].concat(i)
                : ["center", "center"]
              : i)[0] = o.test(i[0]) ? i[0] : "center"),
            (i[1] = s.test(i[1]) ? i[1] : "center"),
            (t = r.exec(i[0])),
            (e = r.exec(i[1])),
            (_[this] = [t ? t[0] : 0, e ? e[0] : 0]),
            (f[this] = [l.exec(i[0])[0], l.exec(i[1])[0]]);
        }),
        1 === b.length && (b[1] = b[0]),
        "right" === f.at[0]
          ? (m.left += d)
          : "center" === f.at[0] && (m.left += d / 2),
        "bottom" === f.at[1]
          ? (m.top += p)
          : "center" === f.at[1] && (m.top += p / 2),
        (c = E(_.at, d, p)),
        (m.left += c[0]),
        (m.top += c[1]),
        this.each(function () {
          var i,
            t,
            r = x(this),
            l = r.outerWidth(),
            a = r.outerHeight(),
            e = L(this, "marginLeft"),
            n = L(this, "marginTop"),
            o = l + e + L(this, "marginRight") + w.width,
            s = a + n + L(this, "marginBottom") + w.height,
            h = x.extend({}, m),
            u = E(_.my, r.outerWidth(), r.outerHeight());
          "right" === f.my[0]
            ? (h.left -= l)
            : "center" === f.my[0] && (h.left -= l / 2),
            "bottom" === f.my[1]
              ? (h.top -= a)
              : "center" === f.my[1] && (h.top -= a / 2),
            (h.left += u[0]),
            (h.top += u[1]),
            (i = { marginLeft: e, marginTop: n }),
            x.each(["left", "top"], function (t, e) {
              x.ui.position[b[t]] &&
                x.ui.position[b[t]][e](h, {
                  targetWidth: d,
                  targetHeight: p,
                  elemWidth: l,
                  elemHeight: a,
                  collisionPosition: i,
                  collisionWidth: o,
                  collisionHeight: s,
                  offset: [c[0] + u[0], c[1] + u[1]],
                  my: f.my,
                  at: f.at,
                  within: y,
                  elem: r,
                });
            }),
            f.using &&
              (t = function (t) {
                var e = g.left - h.left,
                  i = e + d - l,
                  n = g.top - h.top,
                  o = n + p - a,
                  s = {
                    target: {
                      element: v,
                      left: g.left,
                      top: g.top,
                      width: d,
                      height: p,
                    },
                    element: {
                      element: r,
                      left: h.left,
                      top: h.top,
                      width: l,
                      height: a,
                    },
                    horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                    vertical: o < 0 ? "top" : 0 < n ? "bottom" : "middle",
                  };
                d < l && C(e + i) < d && (s.horizontal = "center"),
                  p < a && C(n + o) < p && (s.vertical = "middle"),
                  W(C(e), C(i)) > W(C(n), C(o))
                    ? (s.important = "horizontal")
                    : (s.important = "vertical"),
                  f.using.call(this, t, s);
              }),
            r.offset(x.extend(h, { using: t }));
        })
      );
    }),
    (x.ui.position = {
      fit: {
        left: function (t, e) {
          var i = e.within,
            n = i.isWindow ? i.scrollLeft : i.offset.left,
            o = i.width,
            s = t.left - e.collisionPosition.marginLeft,
            r = n - s,
            l = s + e.collisionWidth - o - n;
          e.collisionWidth > o
            ? 0 < r && l <= 0
              ? ((i = t.left + r + e.collisionWidth - o - n), (t.left += r - i))
              : (t.left =
                  !(0 < l && r <= 0) && l < r ? n + o - e.collisionWidth : n)
            : 0 < r
            ? (t.left += r)
            : 0 < l
            ? (t.left -= l)
            : (t.left = W(t.left - s, t.left));
        },
        top: function (t, e) {
          var i = e.within,
            n = i.isWindow ? i.scrollTop : i.offset.top,
            o = e.within.height,
            s = t.top - e.collisionPosition.marginTop,
            r = n - s,
            l = s + e.collisionHeight - o - n;
          e.collisionHeight > o
            ? 0 < r && l <= 0
              ? ((i = t.top + r + e.collisionHeight - o - n), (t.top += r - i))
              : (t.top =
                  !(0 < l && r <= 0) && l < r ? n + o - e.collisionHeight : n)
            : 0 < r
            ? (t.top += r)
            : 0 < l
            ? (t.top -= l)
            : (t.top = W(t.top - s, t.top));
        },
      },
      flip: {
        left: function (t, e) {
          var i = e.within,
            n = i.offset.left + i.scrollLeft,
            o = i.width,
            s = i.isWindow ? i.scrollLeft : i.offset.left,
            r = t.left - e.collisionPosition.marginLeft,
            l = r - s,
            a = r + e.collisionWidth - o - s,
            h =
              "left" === e.my[0]
                ? -e.elemWidth
                : "right" === e.my[0]
                ? e.elemWidth
                : 0,
            i =
              "left" === e.at[0]
                ? e.targetWidth
                : "right" === e.at[0]
                ? -e.targetWidth
                : 0,
            r = -2 * e.offset[0];
          l < 0
            ? ((n = t.left + h + i + r + e.collisionWidth - o - n) < 0 ||
                n < C(l)) &&
              (t.left += h + i + r)
            : 0 < a &&
              (0 <
                (s = t.left - e.collisionPosition.marginLeft + h + i + r - s) ||
                C(s) < a) &&
              (t.left += h + i + r);
        },
        top: function (t, e) {
          var i = e.within,
            n = i.offset.top + i.scrollTop,
            o = i.height,
            s = i.isWindow ? i.scrollTop : i.offset.top,
            r = t.top - e.collisionPosition.marginTop,
            l = r - s,
            a = r + e.collisionHeight - o - s,
            h =
              "top" === e.my[1]
                ? -e.elemHeight
                : "bottom" === e.my[1]
                ? e.elemHeight
                : 0,
            i =
              "top" === e.at[1]
                ? e.targetHeight
                : "bottom" === e.at[1]
                ? -e.targetHeight
                : 0,
            r = -2 * e.offset[1];
          l < 0
            ? ((n = t.top + h + i + r + e.collisionHeight - o - n) < 0 ||
                n < C(l)) &&
              (t.top += h + i + r)
            : 0 < a &&
              (0 <
                (s = t.top - e.collisionPosition.marginTop + h + i + r - s) ||
                C(s) < a) &&
              (t.top += h + i + r);
        },
      },
      flipfit: {
        left: function () {
          x.ui.position.flip.left.apply(this, arguments),
            x.ui.position.fit.left.apply(this, arguments);
        },
        top: function () {
          x.ui.position.flip.top.apply(this, arguments),
            x.ui.position.fit.top.apply(this, arguments);
        },
      },
    }),
    (x.ui.safeActiveElement = function (e) {
      var i;
      try {
        i = e.activeElement;
      } catch (t) {
        i = e.body;
      }
      return (i = !(i = i || e.body).nodeName ? e.body : i);
    }),
    (x.ui.safeBlur = function (t) {
      t && "body" !== t.nodeName.toLowerCase() && x(t).trigger("blur");
    }),
    /*!
     * jQuery UI Scroll Parent 1.13.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    (x.fn.scrollParent = function (t) {
      var e = this.css("position"),
        i = "absolute" === e,
        n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        t = this.parents()
          .filter(function () {
            var t = x(this);
            return (
              (!i || "static" !== t.css("position")) &&
              n.test(
                t.css("overflow") + t.css("overflow-y") + t.css("overflow-x")
              )
            );
          })
          .eq(0);
      return "fixed" !== e && t.length
        ? t
        : x(this[0].ownerDocument || document);
    }),
    /*!
     * jQuery UI Tabbable 1.13.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    x.extend(x.expr.pseudos, {
      tabbable: function (t) {
        var e = x.attr(t, "tabindex"),
          i = null != e;
        return (!i || 0 <= e) && x.ui.focusable(t, i);
      },
    }),
    /*!
     * jQuery UI Unique ID 1.13.1
     * http://jqueryui.com
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */
    x.fn.extend({
      uniqueId:
        ((u = 0),
        function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++u);
          });
        }),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && x(this).removeAttr("id");
        });
      },
    });
  /*!
   * jQuery UI Widget 1.13.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */
  var f,
    c = 0,
    d = Array.prototype.hasOwnProperty,
    p = Array.prototype.slice;
  (x.cleanData =
    ((f = x.cleanData),
    function (t) {
      for (var e, i, n = 0; null != (i = t[n]); n++)
        (e = x._data(i, "events")) && e.remove && x(i).triggerHandler("remove");
      f(t);
    })),
    (x.widget = function (t, i, e) {
      var n,
        o,
        s,
        r = {},
        l = t.split(".")[0],
        a = l + "-" + (t = t.split(".")[1]);
      return (
        e || ((e = i), (i = x.Widget)),
        Array.isArray(e) && (e = x.extend.apply(null, [{}].concat(e))),
        (x.expr.pseudos[a.toLowerCase()] = function (t) {
          return !!x.data(t, a);
        }),
        (x[l] = x[l] || {}),
        (n = x[l][t]),
        (o = x[l][t] =
          function (t, e) {
            if (!this || !this._createWidget) return new o(t, e);
            arguments.length && this._createWidget(t, e);
          }),
        x.extend(o, n, {
          version: e.version,
          _proto: x.extend({}, e),
          _childConstructors: [],
        }),
        ((s = new i()).options = x.widget.extend({}, s.options)),
        x.each(e, function (e, n) {
          function o() {
            return i.prototype[e].apply(this, arguments);
          }
          function s(t) {
            return i.prototype[e].apply(this, t);
          }
          r[e] =
            "function" == typeof n
              ? function () {
                  var t,
                    e = this._super,
                    i = this._superApply;
                  return (
                    (this._super = o),
                    (this._superApply = s),
                    (t = n.apply(this, arguments)),
                    (this._super = e),
                    (this._superApply = i),
                    t
                  );
                }
              : n;
        }),
        (o.prototype = x.widget.extend(
          s,
          { widgetEventPrefix: (n && s.widgetEventPrefix) || t },
          r,
          { constructor: o, namespace: l, widgetName: t, widgetFullName: a }
        )),
        n
          ? (x.each(n._childConstructors, function (t, e) {
              var i = e.prototype;
              x.widget(i.namespace + "." + i.widgetName, o, e._proto);
            }),
            delete n._childConstructors)
          : i._childConstructors.push(o),
        x.widget.bridge(t, o),
        o
      );
    }),
    (x.widget.extend = function (t) {
      for (var e, i, n = p.call(arguments, 1), o = 0, s = n.length; o < s; o++)
        for (e in n[o])
          (i = n[o][e]),
            d.call(n[o], e) &&
              void 0 !== i &&
              (x.isPlainObject(i)
                ? (t[e] = x.isPlainObject(t[e])
                    ? x.widget.extend({}, t[e], i)
                    : x.widget.extend({}, i))
                : (t[e] = i));
      return t;
    }),
    (x.widget.bridge = function (s, e) {
      var r = e.prototype.widgetFullName || s;
      x.fn[s] = function (i) {
        var t = "string" == typeof i,
          n = p.call(arguments, 1),
          o = this;
        return (
          t
            ? this.length || "instance" !== i
              ? this.each(function () {
                  var t,
                    e = x.data(this, r);
                  return "instance" === i
                    ? ((o = e), !1)
                    : e
                    ? "function" != typeof e[i] || "_" === i.charAt(0)
                      ? x.error(
                          "no such method '" +
                            i +
                            "' for " +
                            s +
                            " widget instance"
                        )
                      : (t = e[i].apply(e, n)) !== e && void 0 !== t
                      ? ((o = t && t.jquery ? o.pushStack(t.get()) : t), !1)
                      : void 0
                    : x.error(
                        "cannot call methods on " +
                          s +
                          " prior to initialization; attempted to call method '" +
                          i +
                          "'"
                      );
                })
              : (o = void 0)
            : (n.length && (i = x.widget.extend.apply(null, [i].concat(n))),
              this.each(function () {
                var t = x.data(this, r);
                t
                  ? (t.option(i || {}), t._init && t._init())
                  : x.data(this, r, new e(i, this));
              })),
          o
        );
      };
    }),
    (x.Widget = function () {}),
    (x.Widget._childConstructors = []),
    (x.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: { classes: {}, disabled: !1, create: null },
      _createWidget: function (t, e) {
        (e = x(e || this.defaultElement || this)[0]),
          (this.element = x(e)),
          (this.uuid = c++),
          (this.eventNamespace = "." + this.widgetName + this.uuid),
          (this.bindings = x()),
          (this.hoverable = x()),
          (this.focusable = x()),
          (this.classesElementLookup = {}),
          e !== this &&
            (x.data(e, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (t) {
                t.target === e && this.destroy();
              },
            }),
            (this.document = x(e.style ? e.ownerDocument : e.document || e)),
            (this.window = x(
              this.document[0].defaultView || this.document[0].parentWindow
            ))),
          (this.options = x.widget.extend(
            {},
            this.options,
            this._getCreateOptions(),
            t
          )),
          this._create(),
          this.options.disabled &&
            this._setOptionDisabled(this.options.disabled),
          this._trigger("create", null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: function () {
        return {};
      },
      _getCreateEventData: x.noop,
      _create: x.noop,
      _init: x.noop,
      destroy: function () {
        var i = this;
        this._destroy(),
          x.each(this.classesElementLookup, function (t, e) {
            i._removeClass(e, t);
          }),
          this.element.off(this.eventNamespace).removeData(this.widgetFullName),
          this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
          this.bindings.off(this.eventNamespace);
      },
      _destroy: x.noop,
      widget: function () {
        return this.element;
      },
      option: function (t, e) {
        var i,
          n,
          o,
          s = t;
        if (0 === arguments.length) return x.widget.extend({}, this.options);
        if ("string" == typeof t)
          if (((s = {}), (t = (i = t.split(".")).shift()), i.length)) {
            for (
              n = s[t] = x.widget.extend({}, this.options[t]), o = 0;
              o < i.length - 1;
              o++
            )
              (n[i[o]] = n[i[o]] || {}), (n = n[i[o]]);
            if (((t = i.pop()), 1 === arguments.length))
              return void 0 === n[t] ? null : n[t];
            n[t] = e;
          } else {
            if (1 === arguments.length)
              return void 0 === this.options[t] ? null : this.options[t];
            s[t] = e;
          }
        return this._setOptions(s), this;
      },
      _setOptions: function (t) {
        for (var e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function (t, e) {
        return (
          "classes" === t && this._setOptionClasses(e),
          (this.options[t] = e),
          "disabled" === t && this._setOptionDisabled(e),
          this
        );
      },
      _setOptionClasses: function (t) {
        var e, i, n;
        for (e in t)
          (n = this.classesElementLookup[e]),
            t[e] !== this.options.classes[e] &&
              n &&
              n.length &&
              ((i = x(n.get())),
              this._removeClass(n, e),
              i.addClass(
                this._classes({ element: i, keys: e, classes: t, add: !0 })
              ));
      },
      _setOptionDisabled: function (t) {
        this._toggleClass(
          this.widget(),
          this.widgetFullName + "-disabled",
          null,
          !!t
        ),
          t &&
            (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"));
      },
      enable: function () {
        return this._setOptions({ disabled: !1 });
      },
      disable: function () {
        return this._setOptions({ disabled: !0 });
      },
      _classes: function (o) {
        var s = [],
          r = this;
        function t(t, e) {
          for (var i, n = 0; n < t.length; n++)
            (i = r.classesElementLookup[t[n]] || x()),
              (i = o.add
                ? ((function () {
                    var i = [];
                    o.element.each(function (t, e) {
                      x
                        .map(r.classesElementLookup, function (t) {
                          return t;
                        })
                        .some(function (t) {
                          return t.is(e);
                        }) || i.push(e);
                    }),
                      r._on(x(i), { remove: "_untrackClassesElement" });
                  })(),
                  x(x.uniqueSort(i.get().concat(o.element.get()))))
                : x(i.not(o.element).get())),
              (r.classesElementLookup[t[n]] = i),
              s.push(t[n]),
              e && o.classes[t[n]] && s.push(o.classes[t[n]]);
        }
        return (
          (o = x.extend(
            { element: this.element, classes: this.options.classes || {} },
            o
          )).keys && t(o.keys.match(/\S+/g) || [], !0),
          o.extra && t(o.extra.match(/\S+/g) || []),
          s.join(" ")
        );
      },
      _untrackClassesElement: function (i) {
        var n = this;
        x.each(n.classesElementLookup, function (t, e) {
          -1 !== x.inArray(i.target, e) &&
            (n.classesElementLookup[t] = x(e.not(i.target).get()));
        }),
          this._off(x(i.target));
      },
      _removeClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !1);
      },
      _addClass: function (t, e, i) {
        return this._toggleClass(t, e, i, !0);
      },
      _toggleClass: function (t, e, i, n) {
        var o = "string" == typeof t || null === t,
          i = {
            extra: o ? e : i,
            keys: o ? t : e,
            element: o ? this.element : t,
            add: (n = "boolean" == typeof n ? n : i),
          };
        return i.element.toggleClass(this._classes(i), n), this;
      },
      _on: function (o, s, t) {
        var r,
          l = this;
        "boolean" != typeof o && ((t = s), (s = o), (o = !1)),
          t
            ? ((s = r = x(s)), (this.bindings = this.bindings.add(s)))
            : ((t = s), (s = this.element), (r = this.widget())),
          x.each(t, function (t, e) {
            function i() {
              if (
                o ||
                (!0 !== l.options.disabled &&
                  !x(this).hasClass("ui-state-disabled"))
              )
                return ("string" == typeof e ? l[e] : e).apply(l, arguments);
            }
            "string" != typeof e &&
              (i.guid = e.guid = e.guid || i.guid || x.guid++);
            var n = t.match(/^([\w:-]*)\s*(.*)$/),
              t = n[1] + l.eventNamespace,
              n = n[2];
            n ? r.on(t, n, i) : s.on(t, i);
          });
      },
      _off: function (t, e) {
        (e =
          (e || "").split(" ").join(this.eventNamespace + " ") +
          this.eventNamespace),
          t.off(e),
          (this.bindings = x(this.bindings.not(t).get())),
          (this.focusable = x(this.focusable.not(t).get())),
          (this.hoverable = x(this.hoverable.not(t).get()));
      },
      _delay: function (t, e) {
        var i = this;
        return setTimeout(function () {
          return ("string" == typeof t ? i[t] : t).apply(i, arguments);
        }, e || 0);
      },
      _hoverable: function (t) {
        (this.hoverable = this.hoverable.add(t)),
          this._on(t, {
            mouseenter: function (t) {
              this._addClass(x(t.currentTarget), null, "ui-state-hover");
            },
            mouseleave: function (t) {
              this._removeClass(x(t.currentTarget), null, "ui-state-hover");
            },
          });
      },
      _focusable: function (t) {
        (this.focusable = this.focusable.add(t)),
          this._on(t, {
            focusin: function (t) {
              this._addClass(x(t.currentTarget), null, "ui-state-focus");
            },
            focusout: function (t) {
              this._removeClass(x(t.currentTarget), null, "ui-state-focus");
            },
          });
      },
      _trigger: function (t, e, i) {
        var n,
          o,
          s = this.options[t];
        if (
          ((i = i || {}),
          ((e = x.Event(e)).type = (
            t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t
          ).toLowerCase()),
          (e.target = this.element[0]),
          (o = e.originalEvent))
        )
          for (n in o) n in e || (e[n] = o[n]);
        return (
          this.element.trigger(e, i),
          !(
            ("function" == typeof s &&
              !1 === s.apply(this.element[0], [e].concat(i))) ||
            e.isDefaultPrevented()
          )
        );
      },
    }),
    x.each({ show: "fadeIn", hide: "fadeOut" }, function (s, r) {
      x.Widget.prototype["_" + s] = function (e, t, i) {
        var n,
          o = (t = "string" == typeof t ? { effect: t } : t)
            ? (!0 !== t && "number" != typeof t && t.effect) || r
            : s;
        "number" == typeof (t = t || {})
          ? (t = { duration: t })
          : !0 === t && (t = {}),
          (n = !x.isEmptyObject(t)),
          (t.complete = i),
          t.delay && e.delay(t.delay),
          n && x.effects && x.effects.effect[o]
            ? e[s](t)
            : o !== s && e[o]
            ? e[o](t.duration, t.easing, i)
            : e.queue(function (t) {
                x(this)[s](), i && i.call(e[0]), t();
              });
      };
    });
});
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).Swiper = t());
})(this, function () {
  "use strict";
  var e =
      "undefined" == typeof document
        ? {
            body: {},
            addEventListener: function () {},
            removeEventListener: function () {},
            activeElement: { blur: function () {}, nodeName: "" },
            querySelector: function () {
              return null;
            },
            querySelectorAll: function () {
              return [];
            },
            getElementById: function () {
              return null;
            },
            createEvent: function () {
              return { initEvent: function () {} };
            },
            createElement: function () {
              return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function () {},
                getElementsByTagName: function () {
                  return [];
                },
              };
            },
            location: { hash: "" },
          }
        : document,
    t =
      "undefined" == typeof window
        ? {
            document: e,
            navigator: { userAgent: "" },
            location: {},
            history: {},
            CustomEvent: function () {
              return this;
            },
            addEventListener: function () {},
            removeEventListener: function () {},
            getComputedStyle: function () {
              return {
                getPropertyValue: function () {
                  return "";
                },
              };
            },
            Image: function () {},
            Date: function () {},
            screen: {},
            setTimeout: function () {},
            clearTimeout: function () {},
          }
        : window,
    i = function (e) {
      for (var t = 0; t < e.length; t += 1) this[t] = e[t];
      return (this.length = e.length), this;
    };
  function s(s, a) {
    var r = [],
      n = 0;
    if (s && !a && s instanceof i) return s;
    if (s)
      if ("string" == typeof s) {
        var o,
          l,
          d = s.trim();
        if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
          var h = "div";
          for (
            0 === d.indexOf("<li") && (h = "ul"),
              0 === d.indexOf("<tr") && (h = "tbody"),
              (0 !== d.indexOf("<td") && 0 !== d.indexOf("<th")) || (h = "tr"),
              0 === d.indexOf("<tbody") && (h = "table"),
              0 === d.indexOf("<option") && (h = "select"),
              (l = e.createElement(h)).innerHTML = d,
              n = 0;
            n < l.childNodes.length;
            n += 1
          )
            r.push(l.childNodes[n]);
        } else
          for (
            o =
              a || "#" !== s[0] || s.match(/[ .<>:~]/)
                ? (a || e).querySelectorAll(s.trim())
                : [e.getElementById(s.trim().split("#")[1])],
              n = 0;
            n < o.length;
            n += 1
          )
            o[n] && r.push(o[n]);
      } else if (s.nodeType || s === t || s === e) r.push(s);
      else if (s.length > 0 && s[0].nodeType)
        for (n = 0; n < s.length; n += 1) r.push(s[n]);
    return new i(r);
  }
  function a(e) {
    for (var t = [], i = 0; i < e.length; i += 1)
      -1 === t.indexOf(e[i]) && t.push(e[i]);
    return t;
  }
  (s.fn = i.prototype), (s.Class = i), (s.Dom7 = i);
  var r = {
    addClass: function (e) {
      if (void 0 === e) return this;
      for (var t = e.split(" "), i = 0; i < t.length; i += 1)
        for (var s = 0; s < this.length; s += 1)
          void 0 !== this[s] &&
            void 0 !== this[s].classList &&
            this[s].classList.add(t[i]);
      return this;
    },
    removeClass: function (e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1)
        for (var s = 0; s < this.length; s += 1)
          void 0 !== this[s] &&
            void 0 !== this[s].classList &&
            this[s].classList.remove(t[i]);
      return this;
    },
    hasClass: function (e) {
      return !!this[0] && this[0].classList.contains(e);
    },
    toggleClass: function (e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1)
        for (var s = 0; s < this.length; s += 1)
          void 0 !== this[s] &&
            void 0 !== this[s].classList &&
            this[s].classList.toggle(t[i]);
      return this;
    },
    attr: function (e, t) {
      var i = arguments;
      if (1 === arguments.length && "string" == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (var s = 0; s < this.length; s += 1)
        if (2 === i.length) this[s].setAttribute(e, t);
        else
          for (var a in e) (this[s][a] = e[a]), this[s].setAttribute(a, e[a]);
      return this;
    },
    removeAttr: function (e) {
      for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    data: function (e, t) {
      var i;
      if (void 0 !== t) {
        for (var s = 0; s < this.length; s += 1)
          (i = this[s]).dom7ElementDataStorage ||
            (i.dom7ElementDataStorage = {}),
            (i.dom7ElementDataStorage[e] = t);
        return this;
      }
      if ((i = this[0])) {
        if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage)
          return i.dom7ElementDataStorage[e];
        var a = i.getAttribute("data-" + e);
        return a || void 0;
      }
    },
    transform: function (e) {
      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;
        (i.webkitTransform = e), (i.transform = e);
      }
      return this;
    },
    transition: function (e) {
      "string" != typeof e && (e += "ms");
      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;
        (i.webkitTransitionDuration = e), (i.transitionDuration = e);
      }
      return this;
    },
    on: function () {
      for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i];
      var a = t[0],
        r = t[1],
        n = t[2],
        o = t[3];
      function l(e) {
        var t = e.target;
        if (t) {
          var i = e.target.dom7EventData || [];
          if ((i.indexOf(e) < 0 && i.unshift(e), s(t).is(r))) n.apply(t, i);
          else
            for (var a = s(t).parents(), o = 0; o < a.length; o += 1)
              s(a[o]).is(r) && n.apply(a[o], i);
        }
      }
      function d(e) {
        var t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
      }
      "function" == typeof t[1] &&
        ((a = (e = t)[0]), (n = e[1]), (o = e[2]), (r = void 0)),
        o || (o = !1);
      for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];
        if (r)
          for (h = 0; h < p.length; h += 1) {
            var v = p[h];
            u.dom7LiveListeners || (u.dom7LiveListeners = {}),
              u.dom7LiveListeners[v] || (u.dom7LiveListeners[v] = []),
              u.dom7LiveListeners[v].push({ listener: n, proxyListener: l }),
              u.addEventListener(v, l, o);
          }
        else
          for (h = 0; h < p.length; h += 1) {
            var f = p[h];
            u.dom7Listeners || (u.dom7Listeners = {}),
              u.dom7Listeners[f] || (u.dom7Listeners[f] = []),
              u.dom7Listeners[f].push({ listener: n, proxyListener: d }),
              u.addEventListener(f, d, o);
          }
      }
      return this;
    },
    off: function () {
      for (var e, t = [], i = arguments.length; i--; ) t[i] = arguments[i];
      var s = t[0],
        a = t[1],
        r = t[2],
        n = t[3];
      "function" == typeof t[1] &&
        ((s = (e = t)[0]), (r = e[1]), (n = e[2]), (a = void 0)),
        n || (n = !1);
      for (var o = s.split(" "), l = 0; l < o.length; l += 1)
        for (var d = o[l], h = 0; h < this.length; h += 1) {
          var p = this[h],
            c = void 0;
          if (
            (!a && p.dom7Listeners
              ? (c = p.dom7Listeners[d])
              : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]),
            c && c.length)
          )
            for (var u = c.length - 1; u >= 0; u -= 1) {
              var v = c[u];
              r && v.listener === r
                ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1))
                : r &&
                  v.listener &&
                  v.listener.dom7proxy &&
                  v.listener.dom7proxy === r
                ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1))
                : r ||
                  (p.removeEventListener(d, v.proxyListener, n),
                  c.splice(u, 1));
            }
        }
      return this;
    },
    trigger: function () {
      for (var i = [], s = arguments.length; s--; ) i[s] = arguments[s];
      for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
        for (var o = a[n], l = 0; l < this.length; l += 1) {
          var d = this[l],
            h = void 0;
          try {
            h = new t.CustomEvent(o, {
              detail: r,
              bubbles: !0,
              cancelable: !0,
            });
          } catch (t) {
            (h = e.createEvent("Event")).initEvent(o, !0, !0), (h.detail = r);
          }
          (d.dom7EventData = i.filter(function (e, t) {
            return t > 0;
          })),
            d.dispatchEvent(h),
            (d.dom7EventData = []),
            delete d.dom7EventData;
        }
      return this;
    },
    transitionEnd: function (e) {
      var t,
        i = ["webkitTransitionEnd", "transitionend"],
        s = this;
      function a(r) {
        if (r.target === this)
          for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a);
      }
      if (e) for (t = 0; t < i.length; t += 1) s.on(i[t], a);
      return this;
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(t.getPropertyValue("margin-right")) +
            parseFloat(t.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(t.getPropertyValue("margin-top")) +
            parseFloat(t.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    offset: function () {
      if (this.length > 0) {
        var i = this[0],
          s = i.getBoundingClientRect(),
          a = e.body,
          r = i.clientTop || a.clientTop || 0,
          n = i.clientLeft || a.clientLeft || 0,
          o = i === t ? t.scrollY : i.scrollTop,
          l = i === t ? t.scrollX : i.scrollLeft;
        return { top: s.top + o - r, left: s.left + l - n };
      }
      return null;
    },
    css: function (e, i) {
      var s;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (s = 0; s < this.length; s += 1)
            for (var a in e) this[s].style[a] = e[a];
          return this;
        }
        if (this[0])
          return t.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
        return this;
      }
      return this;
    },
    each: function (e) {
      if (!e) return this;
      for (var t = 0; t < this.length; t += 1)
        if (!1 === e.call(this[t], t, this[t])) return this;
      return this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
      for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (a) {
      var r,
        n,
        o = this[0];
      if (!o || void 0 === a) return !1;
      if ("string" == typeof a) {
        if (o.matches) return o.matches(a);
        if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
        if (o.msMatchesSelector) return o.msMatchesSelector(a);
        for (r = s(a), n = 0; n < r.length; n += 1) if (r[n] === o) return !0;
        return !1;
      }
      if (a === e) return o === e;
      if (a === t) return o === t;
      if (a.nodeType || a instanceof i) {
        for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1)
          if (r[n] === o) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      var e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      var t,
        s = this.length;
      return new i(
        e > s - 1 ? [] : e < 0 ? ((t = s + e) < 0 ? [] : [this[t]]) : [this[e]]
      );
    },
    append: function () {
      for (var t, s = [], a = arguments.length; a--; ) s[a] = arguments[a];
      for (var r = 0; r < s.length; r += 1) {
        t = s[r];
        for (var n = 0; n < this.length; n += 1)
          if ("string" == typeof t) {
            var o = e.createElement("div");
            for (o.innerHTML = t; o.firstChild; )
              this[n].appendChild(o.firstChild);
          } else if (t instanceof i)
            for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]);
          else this[n].appendChild(t);
      }
      return this;
    },
    prepend: function (t) {
      var s, a;
      for (s = 0; s < this.length; s += 1)
        if ("string" == typeof t) {
          var r = e.createElement("div");
          for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1)
            this[s].insertBefore(r.childNodes[a], this[s].childNodes[0]);
        } else if (t instanceof i)
          for (a = 0; a < t.length; a += 1)
            this[s].insertBefore(t[a], this[s].childNodes[0]);
        else this[s].insertBefore(t, this[s].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e)
            ? new i([this[0].nextElementSibling])
            : new i([])
          : this[0].nextElementSibling
          ? new i([this[0].nextElementSibling])
          : new i([])
        : new i([]);
    },
    nextAll: function (e) {
      var t = [],
        a = this[0];
      if (!a) return new i([]);
      for (; a.nextElementSibling; ) {
        var r = a.nextElementSibling;
        e ? s(r).is(e) && t.push(r) : t.push(r), (a = r);
      }
      return new i(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        var t = this[0];
        return e
          ? t.previousElementSibling && s(t.previousElementSibling).is(e)
            ? new i([t.previousElementSibling])
            : new i([])
          : t.previousElementSibling
          ? new i([t.previousElementSibling])
          : new i([]);
      }
      return new i([]);
    },
    prevAll: function (e) {
      var t = [],
        a = this[0];
      if (!a) return new i([]);
      for (; a.previousElementSibling; ) {
        var r = a.previousElementSibling;
        e ? s(r).is(e) && t.push(r) : t.push(r), (a = r);
      }
      return new i(t);
    },
    parent: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1)
        null !== this[i].parentNode &&
          (e
            ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode)
            : t.push(this[i].parentNode));
      return s(a(t));
    },
    parents: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1)
        for (var r = this[i].parentNode; r; )
          e ? s(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode);
      return s(a(t));
    },
    closest: function (e) {
      var t = this;
      return void 0 === e
        ? new i([])
        : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      for (var t = [], s = 0; s < this.length; s += 1)
        for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1)
          t.push(a[r]);
      return new i(t);
    },
    children: function (e) {
      for (var t = [], r = 0; r < this.length; r += 1)
        for (var n = this[r].childNodes, o = 0; o < n.length; o += 1)
          e
            ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o])
            : 1 === n[o].nodeType && t.push(n[o]);
      return new i(a(t));
    },
    filter: function (e) {
      for (var t = [], s = 0; s < this.length; s += 1)
        e.call(this[s], s, this[s]) && t.push(this[s]);
      return new i(t);
    },
    remove: function () {
      for (var e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
    add: function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      var i, a;
      for (i = 0; i < e.length; i += 1) {
        var r = s(e[i]);
        for (a = 0; a < r.length; a += 1)
          (this[this.length] = r[a]), (this.length += 1);
      }
      return this;
    },
    styles: function () {
      return this[0] ? t.getComputedStyle(this[0], null) : {};
    },
  };
  Object.keys(r).forEach(function (e) {
    s.fn[e] = s.fn[e] || r[e];
  });
  var n = {
      deleteProps: function (e) {
        var t = e;
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null;
          } catch (e) {}
          try {
            delete t[e];
          } catch (e) {}
        });
      },
      nextTick: function (e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      },
      now: function () {
        return Date.now();
      },
      getTranslate: function (e, i) {
        var s, a, r;
        void 0 === i && (i = "x");
        var n = t.getComputedStyle(e, null);
        return (
          t.WebKitCSSMatrix
            ? ((a = n.transform || n.webkitTransform).split(",").length > 6 &&
                (a = a
                  .split(", ")
                  .map(function (e) {
                    return e.replace(",", ".");
                  })
                  .join(", ")),
              (r = new t.WebKitCSSMatrix("none" === a ? "" : a)))
            : (s = (r =
                n.MozTransform ||
                n.OTransform ||
                n.MsTransform ||
                n.msTransform ||
                n.transform ||
                n
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === i &&
            (a = t.WebKitCSSMatrix
              ? r.m41
              : 16 === s.length
              ? parseFloat(s[12])
              : parseFloat(s[4])),
          "y" === i &&
            (a = t.WebKitCSSMatrix
              ? r.m42
              : 16 === s.length
              ? parseFloat(s[13])
              : parseFloat(s[5])),
          a || 0
        );
      },
      parseUrlQuery: function (e) {
        var i,
          s,
          a,
          r,
          n = {},
          o = e || t.location.href;
        if ("string" == typeof o && o.length)
          for (
            r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "")
              .split("&")
              .filter(function (e) {
                return "" !== e;
              })).length,
              i = 0;
            i < r;
            i += 1
          )
            (a = s[i].replace(/#\S+/g, "").split("=")),
              (n[decodeURIComponent(a[0])] =
                void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "");
        return n;
      },
      isObject: function (e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          e.constructor === Object
        );
      },
      extend: function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
          var a = e[s];
          if (null != a)
            for (
              var r = Object.keys(Object(a)), o = 0, l = r.length;
              o < l;
              o += 1
            ) {
              var d = r[o],
                h = Object.getOwnPropertyDescriptor(a, d);
              void 0 !== h &&
                h.enumerable &&
                (n.isObject(i[d]) && n.isObject(a[d])
                  ? n.extend(i[d], a[d])
                  : !n.isObject(i[d]) && n.isObject(a[d])
                  ? ((i[d] = {}), n.extend(i[d], a[d]))
                  : (i[d] = a[d]));
            }
        }
        return i;
      },
    },
    o = {
      touch:
        (t.Modernizr && !0 === t.Modernizr.touch) ||
        !!(
          t.navigator.maxTouchPoints > 0 ||
          "ontouchstart" in t ||
          (t.DocumentTouch && e instanceof t.DocumentTouch)
        ),
      pointerEvents:
        !!t.PointerEvent &&
        "maxTouchPoints" in t.navigator &&
        t.navigator.maxTouchPoints > 0,
      observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
      passiveListener: (function () {
        var e = !1;
        try {
          var i = Object.defineProperty({}, "passive", {
            get: function () {
              e = !0;
            },
          });
          t.addEventListener("testPassiveListener", null, i);
        } catch (e) {}
        return e;
      })(),
      gestures: "ongesturestart" in t,
    },
    l = function (e) {
      void 0 === e && (e = {});
      var t = this;
      (t.params = e),
        (t.eventsListeners = {}),
        t.params &&
          t.params.on &&
          Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e]);
          });
    },
    d = { components: { configurable: !0 } };
  (l.prototype.on = function (e, t, i) {
    var s = this;
    if ("function" != typeof t) return s;
    var a = i ? "unshift" : "push";
    return (
      e.split(" ").forEach(function (e) {
        s.eventsListeners[e] || (s.eventsListeners[e] = []),
          s.eventsListeners[e][a](t);
      }),
      s
    );
  }),
    (l.prototype.once = function (e, t, i) {
      var s = this;
      if ("function" != typeof t) return s;
      function a() {
        for (var i = [], r = arguments.length; r--; ) i[r] = arguments[r];
        s.off(e, a), a.f7proxy && delete a.f7proxy, t.apply(s, i);
      }
      return (a.f7proxy = t), s.on(e, a, i);
    }),
    (l.prototype.off = function (e, t) {
      var i = this;
      return i.eventsListeners
        ? (e.split(" ").forEach(function (e) {
            void 0 === t
              ? (i.eventsListeners[e] = [])
              : i.eventsListeners[e] &&
                i.eventsListeners[e].length &&
                i.eventsListeners[e].forEach(function (s, a) {
                  (s === t || (s.f7proxy && s.f7proxy === t)) &&
                    i.eventsListeners[e].splice(a, 1);
                });
          }),
          i)
        : i;
    }),
    (l.prototype.emit = function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      var i,
        s,
        a,
        r = this;
      if (!r.eventsListeners) return r;
      "string" == typeof e[0] || Array.isArray(e[0])
        ? ((i = e[0]), (s = e.slice(1, e.length)), (a = r))
        : ((i = e[0].events), (s = e[0].data), (a = e[0].context || r));
      var n = Array.isArray(i) ? i : i.split(" ");
      return (
        n.forEach(function (e) {
          if (r.eventsListeners && r.eventsListeners[e]) {
            var t = [];
            r.eventsListeners[e].forEach(function (e) {
              t.push(e);
            }),
              t.forEach(function (e) {
                e.apply(a, s);
              });
          }
        }),
        r
      );
    }),
    (l.prototype.useModulesParams = function (e) {
      var t = this;
      t.modules &&
        Object.keys(t.modules).forEach(function (i) {
          var s = t.modules[i];
          s.params && n.extend(e, s.params);
        });
    }),
    (l.prototype.useModules = function (e) {
      void 0 === e && (e = {});
      var t = this;
      t.modules &&
        Object.keys(t.modules).forEach(function (i) {
          var s = t.modules[i],
            a = e[i] || {};
          s.instance &&
            Object.keys(s.instance).forEach(function (e) {
              var i = s.instance[e];
              t[e] = "function" == typeof i ? i.bind(t) : i;
            }),
            s.on &&
              t.on &&
              Object.keys(s.on).forEach(function (e) {
                t.on(e, s.on[e]);
              }),
            s.create && s.create.bind(t)(a);
        });
    }),
    (d.components.set = function (e) {
      this.use && this.use(e);
    }),
    (l.installModule = function (e) {
      for (var t = [], i = arguments.length - 1; i-- > 0; )
        t[i] = arguments[i + 1];
      var s = this;
      s.prototype.modules || (s.prototype.modules = {});
      var a = e.name || Object.keys(s.prototype.modules).length + "_" + n.now();
      return (
        (s.prototype.modules[a] = e),
        e.proto &&
          Object.keys(e.proto).forEach(function (t) {
            s.prototype[t] = e.proto[t];
          }),
        e.static &&
          Object.keys(e.static).forEach(function (t) {
            s[t] = e.static[t];
          }),
        e.install && e.install.apply(s, t),
        s
      );
    }),
    (l.use = function (e) {
      for (var t = [], i = arguments.length - 1; i-- > 0; )
        t[i] = arguments[i + 1];
      var s = this;
      return Array.isArray(e)
        ? (e.forEach(function (e) {
            return s.installModule(e);
          }),
          s)
        : s.installModule.apply(s, [e].concat(t));
    }),
    Object.defineProperties(l, d);
  var h = {
    updateSize: function () {
      var e,
        t,
        i = this.$el;
      (e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth),
        (t =
          void 0 !== this.params.height
            ? this.params.height
            : i[0].clientHeight),
        (0 === e && this.isHorizontal()) ||
          (0 === t && this.isVertical()) ||
          ((e =
            e -
            parseInt(i.css("padding-left"), 10) -
            parseInt(i.css("padding-right"), 10)),
          (t =
            t -
            parseInt(i.css("padding-top"), 10) -
            parseInt(i.css("padding-bottom"), 10)),
          n.extend(this, {
            width: e,
            height: t,
            size: this.isHorizontal() ? e : t,
          }));
    },
    updateSlides: function () {
      var e = this.params,
        i = this.$wrapperEl,
        s = this.size,
        a = this.rtlTranslate,
        r = this.wrongRTL,
        o = this.virtual && e.virtual.enabled,
        l = o ? this.virtual.slides.length : this.slides.length,
        d = i.children("." + this.params.slideClass),
        h = o ? this.virtual.slides.length : d.length,
        p = [],
        c = [],
        u = [];
      function v(t) {
        return !e.cssMode || t !== d.length - 1;
      }
      var f = e.slidesOffsetBefore;
      "function" == typeof f && (f = e.slidesOffsetBefore.call(this));
      var m = e.slidesOffsetAfter;
      "function" == typeof m && (m = e.slidesOffsetAfter.call(this));
      var g = this.snapGrid.length,
        b = this.snapGrid.length,
        w = e.spaceBetween,
        y = -f,
        x = 0,
        T = 0;
      if (void 0 !== s) {
        var E, S;
        "string" == typeof w &&
          w.indexOf("%") >= 0 &&
          (w = (parseFloat(w.replace("%", "")) / 100) * s),
          (this.virtualSize = -w),
          a
            ? d.css({ marginLeft: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "" }),
          e.slidesPerColumn > 1 &&
            ((E =
              Math.floor(h / e.slidesPerColumn) ===
              h / this.params.slidesPerColumn
                ? h
                : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn),
            "auto" !== e.slidesPerView &&
              "row" === e.slidesPerColumnFill &&
              (E = Math.max(E, e.slidesPerView * e.slidesPerColumn)));
        for (
          var C,
            M = e.slidesPerColumn,
            P = E / M,
            z = Math.floor(h / e.slidesPerColumn),
            k = 0;
          k < h;
          k += 1
        ) {
          S = 0;
          var $ = d.eq(k);
          if (e.slidesPerColumn > 1) {
            var L = void 0,
              I = void 0,
              D = void 0;
            if ("row" === e.slidesPerColumnFill && e.slidesPerGroup > 1) {
              var O = Math.floor(k / (e.slidesPerGroup * e.slidesPerColumn)),
                A = k - e.slidesPerColumn * e.slidesPerGroup * O,
                G =
                  0 === O
                    ? e.slidesPerGroup
                    : Math.min(
                        Math.ceil((h - O * M * e.slidesPerGroup) / M),
                        e.slidesPerGroup
                      );
              (L =
                (I = A - (D = Math.floor(A / G)) * G + O * e.slidesPerGroup) +
                (D * E) / M),
                $.css({
                  "-webkit-box-ordinal-group": L,
                  "-moz-box-ordinal-group": L,
                  "-ms-flex-order": L,
                  "-webkit-order": L,
                  order: L,
                });
            } else
              "column" === e.slidesPerColumnFill
                ? ((D = k - (I = Math.floor(k / M)) * M),
                  (I > z || (I === z && D === M - 1)) &&
                    (D += 1) >= M &&
                    ((D = 0), (I += 1)))
                : (I = k - (D = Math.floor(k / P)) * P);
            $.css(
              "margin-" + (this.isHorizontal() ? "top" : "left"),
              0 !== D && e.spaceBetween && e.spaceBetween + "px"
            );
          }
          if ("none" !== $.css("display")) {
            if ("auto" === e.slidesPerView) {
              var H = t.getComputedStyle($[0], null),
                B = $[0].style.transform,
                N = $[0].style.webkitTransform;
              if (
                (B && ($[0].style.transform = "none"),
                N && ($[0].style.webkitTransform = "none"),
                e.roundLengths)
              )
                S = this.isHorizontal() ? $.outerWidth(!0) : $.outerHeight(!0);
              else if (this.isHorizontal()) {
                var X = parseFloat(H.getPropertyValue("width")),
                  V = parseFloat(H.getPropertyValue("padding-left")),
                  Y = parseFloat(H.getPropertyValue("padding-right")),
                  F = parseFloat(H.getPropertyValue("margin-left")),
                  W = parseFloat(H.getPropertyValue("margin-right")),
                  R = H.getPropertyValue("box-sizing");
                S = R && "border-box" === R ? X + F + W : X + V + Y + F + W;
              } else {
                var q = parseFloat(H.getPropertyValue("height")),
                  j = parseFloat(H.getPropertyValue("padding-top")),
                  K = parseFloat(H.getPropertyValue("padding-bottom")),
                  U = parseFloat(H.getPropertyValue("margin-top")),
                  _ = parseFloat(H.getPropertyValue("margin-bottom")),
                  Z = H.getPropertyValue("box-sizing");
                S = Z && "border-box" === Z ? q + U + _ : q + j + K + U + _;
              }
              B && ($[0].style.transform = B),
                N && ($[0].style.webkitTransform = N),
                e.roundLengths && (S = Math.floor(S));
            } else
              (S = (s - (e.slidesPerView - 1) * w) / e.slidesPerView),
                e.roundLengths && (S = Math.floor(S)),
                d[k] &&
                  (this.isHorizontal()
                    ? (d[k].style.width = S + "px")
                    : (d[k].style.height = S + "px"));
            d[k] && (d[k].swiperSlideSize = S),
              u.push(S),
              e.centeredSlides
                ? ((y = y + S / 2 + x / 2 + w),
                  0 === x && 0 !== k && (y = y - s / 2 - w),
                  0 === k && (y = y - s / 2 - w),
                  Math.abs(y) < 0.001 && (y = 0),
                  e.roundLengths && (y = Math.floor(y)),
                  T % e.slidesPerGroup == 0 && p.push(y),
                  c.push(y))
                : (e.roundLengths && (y = Math.floor(y)),
                  (T - Math.min(this.params.slidesPerGroupSkip, T)) %
                    this.params.slidesPerGroup ==
                    0 && p.push(y),
                  c.push(y),
                  (y = y + S + w)),
              (this.virtualSize += S + w),
              (x = S),
              (T += 1);
          }
        }
        if (
          ((this.virtualSize = Math.max(this.virtualSize, s) + m),
          a &&
            r &&
            ("slide" === e.effect || "coverflow" === e.effect) &&
            i.css({ width: this.virtualSize + e.spaceBetween + "px" }),
          e.setWrapperSize &&
            (this.isHorizontal()
              ? i.css({ width: this.virtualSize + e.spaceBetween + "px" })
              : i.css({ height: this.virtualSize + e.spaceBetween + "px" })),
          e.slidesPerColumn > 1 &&
            ((this.virtualSize = (S + e.spaceBetween) * E),
            (this.virtualSize =
              Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween),
            this.isHorizontal()
              ? i.css({ width: this.virtualSize + e.spaceBetween + "px" })
              : i.css({ height: this.virtualSize + e.spaceBetween + "px" }),
            e.centeredSlides))
        ) {
          C = [];
          for (var Q = 0; Q < p.length; Q += 1) {
            var J = p[Q];
            e.roundLengths && (J = Math.floor(J)),
              p[Q] < this.virtualSize + p[0] && C.push(J);
          }
          p = C;
        }
        if (!e.centeredSlides) {
          C = [];
          for (var ee = 0; ee < p.length; ee += 1) {
            var te = p[ee];
            e.roundLengths && (te = Math.floor(te)),
              p[ee] <= this.virtualSize - s && C.push(te);
          }
          (p = C),
            Math.floor(this.virtualSize - s) - Math.floor(p[p.length - 1]) >
              1 && p.push(this.virtualSize - s);
        }
        if (
          (0 === p.length && (p = [0]),
          0 !== e.spaceBetween &&
            (this.isHorizontal()
              ? a
                ? d.filter(v).css({ marginLeft: w + "px" })
                : d.filter(v).css({ marginRight: w + "px" })
              : d.filter(v).css({ marginBottom: w + "px" })),
          e.centeredSlides && e.centeredSlidesBounds)
        ) {
          var ie = 0;
          u.forEach(function (t) {
            ie += t + (e.spaceBetween ? e.spaceBetween : 0);
          });
          var se = (ie -= e.spaceBetween) - s;
          p = p.map(function (e) {
            return e < 0 ? -f : e > se ? se + m : e;
          });
        }
        if (e.centerInsufficientSlides) {
          var ae = 0;
          if (
            (u.forEach(function (t) {
              ae += t + (e.spaceBetween ? e.spaceBetween : 0);
            }),
            (ae -= e.spaceBetween) < s)
          ) {
            var re = (s - ae) / 2;
            p.forEach(function (e, t) {
              p[t] = e - re;
            }),
              c.forEach(function (e, t) {
                c[t] = e + re;
              });
          }
        }
        n.extend(this, {
          slides: d,
          snapGrid: p,
          slidesGrid: c,
          slidesSizesGrid: u,
        }),
          h !== l && this.emit("slidesLengthChange"),
          p.length !== g &&
            (this.params.watchOverflow && this.checkOverflow(),
            this.emit("snapGridLengthChange")),
          c.length !== b && this.emit("slidesGridLengthChange"),
          (e.watchSlidesProgress || e.watchSlidesVisibility) &&
            this.updateSlidesOffset();
      }
    },
    updateAutoHeight: function (e) {
      var t,
        i = [],
        s = 0;
      if (
        ("number" == typeof e
          ? this.setTransition(e)
          : !0 === e && this.setTransition(this.params.speed),
        "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
      )
        if (this.params.centeredSlides) i.push.apply(i, this.visibleSlides);
        else
          for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
            var a = this.activeIndex + t;
            if (a > this.slides.length) break;
            i.push(this.slides.eq(a)[0]);
          }
      else i.push(this.slides.eq(this.activeIndex)[0]);
      for (t = 0; t < i.length; t += 1)
        if (void 0 !== i[t]) {
          var r = i[t].offsetHeight;
          s = r > s ? r : s;
        }
      s && this.$wrapperEl.css("height", s + "px");
    },
    updateSlidesOffset: function () {
      for (var e = this.slides, t = 0; t < e.length; t += 1)
        e[t].swiperSlideOffset = this.isHorizontal()
          ? e[t].offsetLeft
          : e[t].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      var t = this.params,
        i = this.slides,
        a = this.rtlTranslate;
      if (0 !== i.length) {
        void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
        var r = -e;
        a && (r = e),
          i.removeClass(t.slideVisibleClass),
          (this.visibleSlidesIndexes = []),
          (this.visibleSlides = []);
        for (var n = 0; n < i.length; n += 1) {
          var o = i[n],
            l =
              (r +
                (t.centeredSlides ? this.minTranslate() : 0) -
                o.swiperSlideOffset) /
              (o.swiperSlideSize + t.spaceBetween);
          if (t.watchSlidesVisibility || (t.centeredSlides && t.autoHeight)) {
            var d = -(r - o.swiperSlideOffset),
              h = d + this.slidesSizesGrid[n];
            ((d >= 0 && d < this.size - 1) ||
              (h > 1 && h <= this.size) ||
              (d <= 0 && h >= this.size)) &&
              (this.visibleSlides.push(o),
              this.visibleSlidesIndexes.push(n),
              i.eq(n).addClass(t.slideVisibleClass));
          }
          o.progress = a ? -l : l;
        }
        this.visibleSlides = s(this.visibleSlides);
      }
    },
    updateProgress: function (e) {
      if (void 0 === e) {
        var t = this.rtlTranslate ? -1 : 1;
        e = (this && this.translate && this.translate * t) || 0;
      }
      var i = this.params,
        s = this.maxTranslate() - this.minTranslate(),
        a = this.progress,
        r = this.isBeginning,
        o = this.isEnd,
        l = r,
        d = o;
      0 === s
        ? ((a = 0), (r = !0), (o = !0))
        : ((r = (a = (e - this.minTranslate()) / s) <= 0), (o = a >= 1)),
        n.extend(this, { progress: a, isBeginning: r, isEnd: o }),
        (i.watchSlidesProgress ||
          i.watchSlidesVisibility ||
          (i.centeredSlides && i.autoHeight)) &&
          this.updateSlidesProgress(e),
        r && !l && this.emit("reachBeginning toEdge"),
        o && !d && this.emit("reachEnd toEdge"),
        ((l && !r) || (d && !o)) && this.emit("fromEdge"),
        this.emit("progress", a);
    },
    updateSlidesClasses: function () {
      var e,
        t = this.slides,
        i = this.params,
        s = this.$wrapperEl,
        a = this.activeIndex,
        r = this.realIndex,
        n = this.virtual && i.virtual.enabled;
      t.removeClass(
        i.slideActiveClass +
          " " +
          i.slideNextClass +
          " " +
          i.slidePrevClass +
          " " +
          i.slideDuplicateActiveClass +
          " " +
          i.slideDuplicateNextClass +
          " " +
          i.slideDuplicatePrevClass
      ),
        (e = n
          ? this.$wrapperEl.find(
              "." + i.slideClass + '[data-swiper-slide-index="' + a + '"]'
            )
          : t.eq(a)).addClass(i.slideActiveClass),
        i.loop &&
          (e.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  "." +
                    i.slideClass +
                    ":not(." +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    r +
                    '"]'
                )
                .addClass(i.slideDuplicateActiveClass)
            : s
                .children(
                  "." +
                    i.slideClass +
                    "." +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    r +
                    '"]'
                )
                .addClass(i.slideDuplicateActiveClass));
      var o = e
        .nextAll("." + i.slideClass)
        .eq(0)
        .addClass(i.slideNextClass);
      i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
      var l = e
        .prevAll("." + i.slideClass)
        .eq(0)
        .addClass(i.slidePrevClass);
      i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass),
        i.loop &&
          (o.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  "." +
                    i.slideClass +
                    ":not(." +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    o.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicateNextClass)
            : s
                .children(
                  "." +
                    i.slideClass +
                    "." +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    o.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicateNextClass),
          l.hasClass(i.slideDuplicateClass)
            ? s
                .children(
                  "." +
                    i.slideClass +
                    ":not(." +
                    i.slideDuplicateClass +
                    ')[data-swiper-slide-index="' +
                    l.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicatePrevClass)
            : s
                .children(
                  "." +
                    i.slideClass +
                    "." +
                    i.slideDuplicateClass +
                    '[data-swiper-slide-index="' +
                    l.attr("data-swiper-slide-index") +
                    '"]'
                )
                .addClass(i.slideDuplicatePrevClass));
    },
    updateActiveIndex: function (e) {
      var t,
        i = this.rtlTranslate ? this.translate : -this.translate,
        s = this.slidesGrid,
        a = this.snapGrid,
        r = this.params,
        o = this.activeIndex,
        l = this.realIndex,
        d = this.snapIndex,
        h = e;
      if (void 0 === h) {
        for (var p = 0; p < s.length; p += 1)
          void 0 !== s[p + 1]
            ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2
              ? (h = p)
              : i >= s[p] && i < s[p + 1] && (h = p + 1)
            : i >= s[p] && (h = p);
        r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
      }
      if (a.indexOf(i) >= 0) t = a.indexOf(i);
      else {
        var c = Math.min(r.slidesPerGroupSkip, h);
        t = c + Math.floor((h - c) / r.slidesPerGroup);
      }
      if ((t >= a.length && (t = a.length - 1), h !== o)) {
        var u = parseInt(
          this.slides.eq(h).attr("data-swiper-slide-index") || h,
          10
        );
        n.extend(this, {
          snapIndex: t,
          realIndex: u,
          previousIndex: o,
          activeIndex: h,
        }),
          this.emit("activeIndexChange"),
          this.emit("snapIndexChange"),
          l !== u && this.emit("realIndexChange"),
          (this.initialized || this.runCallbacksOnInit) &&
            this.emit("slideChange");
      } else t !== d && ((this.snapIndex = t), this.emit("snapIndexChange"));
    },
    updateClickedSlide: function (e) {
      var t = this.params,
        i = s(e.target).closest("." + t.slideClass)[0],
        a = !1;
      if (i)
        for (var r = 0; r < this.slides.length; r += 1)
          this.slides[r] === i && (a = !0);
      if (!i || !a)
        return (this.clickedSlide = void 0), void (this.clickedIndex = void 0);
      (this.clickedSlide = i),
        this.virtual && this.params.virtual.enabled
          ? (this.clickedIndex = parseInt(
              s(i).attr("data-swiper-slide-index"),
              10
            ))
          : (this.clickedIndex = s(i).index()),
        t.slideToClickedSlide &&
          void 0 !== this.clickedIndex &&
          this.clickedIndex !== this.activeIndex &&
          this.slideToClickedSlide();
    },
  };
  var p = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? "x" : "y");
      var t = this.params,
        i = this.rtlTranslate,
        s = this.translate,
        a = this.$wrapperEl;
      if (t.virtualTranslate) return i ? -s : s;
      if (t.cssMode) return s;
      var r = n.getTranslate(a[0], e);
      return i && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      var i = this.rtlTranslate,
        s = this.params,
        a = this.$wrapperEl,
        r = this.wrapperEl,
        n = this.progress,
        o = 0,
        l = 0;
      this.isHorizontal() ? (o = i ? -e : e) : (l = e),
        s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
        s.cssMode
          ? (r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] =
              this.isHorizontal() ? -o : -l)
          : s.virtualTranslate ||
            a.transform("translate3d(" + o + "px, " + l + "px, 0px)"),
        (this.previousTranslate = this.translate),
        (this.translate = this.isHorizontal() ? o : l);
      var d = this.maxTranslate() - this.minTranslate();
      (0 === d ? 0 : (e - this.minTranslate()) / d) !== n &&
        this.updateProgress(e),
        this.emit("setTranslate", this.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, i, s, a) {
      var r;
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0),
        void 0 === s && (s = !0);
      var n = this,
        o = n.params,
        l = n.wrapperEl;
      if (n.animating && o.preventInteractionOnTransition) return !1;
      var d,
        h = n.minTranslate(),
        p = n.maxTranslate();
      if (
        ((d = s && e > h ? h : s && e < p ? p : e),
        n.updateProgress(d),
        o.cssMode)
      ) {
        var c = n.isHorizontal();
        return (
          0 === t
            ? (l[c ? "scrollLeft" : "scrollTop"] = -d)
            : l.scrollTo
            ? l.scrollTo(
                (((r = {})[c ? "left" : "top"] = -d),
                (r.behavior = "smooth"),
                r)
              )
            : (l[c ? "scrollLeft" : "scrollTop"] = -d),
          !0
        );
      }
      return (
        0 === t
          ? (n.setTransition(0),
            n.setTranslate(d),
            i &&
              (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd")))
          : (n.setTransition(t),
            n.setTranslate(d),
            i &&
              (n.emit("beforeTransitionStart", t, a),
              n.emit("transitionStart")),
            n.animating ||
              ((n.animating = !0),
              n.onTranslateToWrapperTransitionEnd ||
                (n.onTranslateToWrapperTransitionEnd = function (e) {
                  n &&
                    !n.destroyed &&
                    e.target === this &&
                    (n.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      n.onTranslateToWrapperTransitionEnd
                    ),
                    n.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      n.onTranslateToWrapperTransitionEnd
                    ),
                    (n.onTranslateToWrapperTransitionEnd = null),
                    delete n.onTranslateToWrapperTransitionEnd,
                    i && n.emit("transitionEnd"));
                }),
              n.$wrapperEl[0].addEventListener(
                "transitionend",
                n.onTranslateToWrapperTransitionEnd
              ),
              n.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                n.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  var c = {
    setTransition: function (e, t) {
      this.params.cssMode || this.$wrapperEl.transition(e),
        this.emit("setTransition", e, t);
    },
    transitionStart: function (e, t) {
      void 0 === e && (e = !0);
      var i = this.activeIndex,
        s = this.params,
        a = this.previousIndex;
      if (!s.cssMode) {
        s.autoHeight && this.updateAutoHeight();
        var r = t;
        if (
          (r || (r = i > a ? "next" : i < a ? "prev" : "reset"),
          this.emit("transitionStart"),
          e && i !== a)
        ) {
          if ("reset" === r) return void this.emit("slideResetTransitionStart");
          this.emit("slideChangeTransitionStart"),
            "next" === r
              ? this.emit("slideNextTransitionStart")
              : this.emit("slidePrevTransitionStart");
        }
      }
    },
    transitionEnd: function (e, t) {
      void 0 === e && (e = !0);
      var i = this.activeIndex,
        s = this.previousIndex,
        a = this.params;
      if (((this.animating = !1), !a.cssMode)) {
        this.setTransition(0);
        var r = t;
        if (
          (r || (r = i > s ? "next" : i < s ? "prev" : "reset"),
          this.emit("transitionEnd"),
          e && i !== s)
        ) {
          if ("reset" === r) return void this.emit("slideResetTransitionEnd");
          this.emit("slideChangeTransitionEnd"),
            "next" === r
              ? this.emit("slideNextTransitionEnd")
              : this.emit("slidePrevTransitionEnd");
        }
      }
    },
  };
  var u = {
    slideTo: function (e, t, i, s) {
      var a;
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0);
      var r = this,
        n = e;
      n < 0 && (n = 0);
      var o = r.params,
        l = r.snapGrid,
        d = r.slidesGrid,
        h = r.previousIndex,
        p = r.activeIndex,
        c = r.rtlTranslate,
        u = r.wrapperEl;
      if (r.animating && o.preventInteractionOnTransition) return !1;
      var v = Math.min(r.params.slidesPerGroupSkip, n),
        f = v + Math.floor((n - v) / r.params.slidesPerGroup);
      f >= l.length && (f = l.length - 1),
        (p || o.initialSlide || 0) === (h || 0) &&
          i &&
          r.emit("beforeSlideChangeStart");
      var m,
        g = -l[f];
      if ((r.updateProgress(g), o.normalizeSlideIndex))
        for (var b = 0; b < d.length; b += 1)
          -Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);
      if (r.initialized && n !== p) {
        if (!r.allowSlideNext && g < r.translate && g < r.minTranslate())
          return !1;
        if (
          !r.allowSlidePrev &&
          g > r.translate &&
          g > r.maxTranslate() &&
          (p || 0) !== n
        )
          return !1;
      }
      if (
        ((m = n > p ? "next" : n < p ? "prev" : "reset"),
        (c && -g === r.translate) || (!c && g === r.translate))
      )
        return (
          r.updateActiveIndex(n),
          o.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          "slide" !== o.effect && r.setTranslate(g),
          "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)),
          !1
        );
      if (o.cssMode) {
        var w = r.isHorizontal();
        return (
          0 === t
            ? (u[w ? "scrollLeft" : "scrollTop"] = -g)
            : u.scrollTo
            ? u.scrollTo(
                (((a = {})[w ? "left" : "top"] = -g),
                (a.behavior = "smooth"),
                a)
              )
            : (u[w ? "scrollLeft" : "scrollTop"] = -g),
          !0
        );
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(g),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, s),
            r.transitionStart(i, m),
            r.transitionEnd(i, m))
          : (r.setTransition(t),
            r.setTranslate(g),
            r.updateActiveIndex(n),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, s),
            r.transitionStart(i, m),
            r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(i, m));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onSlideToWrapperTransitionEnd
              ))),
        !0
      );
    },
    slideToLoop: function (e, t, i, s) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === i && (i = !0);
      var a = e;
      return (
        this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
      );
    },
    slideNext: function (e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.params,
        a = this.animating,
        r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
      if (s.loop) {
        if (a) return !1;
        this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
      }
      return this.slideTo(this.activeIndex + r, e, t, i);
    },
    slidePrev: function (e, t, i) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      var s = this.params,
        a = this.animating,
        r = this.snapGrid,
        n = this.slidesGrid,
        o = this.rtlTranslate;
      if (s.loop) {
        if (a) return !1;
        this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
      }
      function l(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      var d,
        h = l(o ? this.translate : -this.translate),
        p = r.map(function (e) {
          return l(e);
        }),
        c =
          (n.map(function (e) {
            return l(e);
          }),
          r[p.indexOf(h)],
          r[p.indexOf(h) - 1]);
      return (
        void 0 === c &&
          s.cssMode &&
          r.forEach(function (e) {
            !c && h >= e && (c = e);
          }),
        void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1),
        this.slideTo(d, e, t, i)
      );
    },
    slideReset: function (e, t, i) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, i)
      );
    },
    slideToClosest: function (e, t, i, s) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === s && (s = 0.5);
      var a = this.activeIndex,
        r = Math.min(this.params.slidesPerGroupSkip, a),
        n = r + Math.floor((a - r) / this.params.slidesPerGroup),
        o = this.rtlTranslate ? this.translate : -this.translate;
      if (o >= this.snapGrid[n]) {
        var l = this.snapGrid[n];
        o - l > (this.snapGrid[n + 1] - l) * s &&
          (a += this.params.slidesPerGroup);
      } else {
        var d = this.snapGrid[n - 1];
        o - d <= (this.snapGrid[n] - d) * s &&
          (a -= this.params.slidesPerGroup);
      }
      return (
        (a = Math.max(a, 0)),
        (a = Math.min(a, this.slidesGrid.length - 1)),
        this.slideTo(a, e, t, i)
      );
    },
    slideToClickedSlide: function () {
      var e,
        t = this,
        i = t.params,
        a = t.$wrapperEl,
        r =
          "auto" === i.slidesPerView
            ? t.slidesPerViewDynamic()
            : i.slidesPerView,
        o = t.clickedIndex;
      if (i.loop) {
        if (t.animating) return;
        (e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
          i.centeredSlides
            ? o < t.loopedSlides - r / 2 ||
              o > t.slides.length - t.loopedSlides + r / 2
              ? (t.loopFix(),
                (o = a
                  .children(
                    "." +
                      i.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]:not(.' +
                      i.slideDuplicateClass +
                      ")"
                  )
                  .eq(0)
                  .index()),
                n.nextTick(function () {
                  t.slideTo(o);
                }))
              : t.slideTo(o)
            : o > t.slides.length - r
            ? (t.loopFix(),
              (o = a
                .children(
                  "." +
                    i.slideClass +
                    '[data-swiper-slide-index="' +
                    e +
                    '"]:not(.' +
                    i.slideDuplicateClass +
                    ")"
                )
                .eq(0)
                .index()),
              n.nextTick(function () {
                t.slideTo(o);
              }))
            : t.slideTo(o);
      } else t.slideTo(o);
    },
  };
  var v = {
    loopCreate: function () {
      var t = this,
        i = t.params,
        a = t.$wrapperEl;
      a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
      var r = a.children("." + i.slideClass);
      if (i.loopFillGroupWithBlank) {
        var n = i.slidesPerGroup - (r.length % i.slidesPerGroup);
        if (n !== i.slidesPerGroup) {
          for (var o = 0; o < n; o += 1) {
            var l = s(e.createElement("div")).addClass(
              i.slideClass + " " + i.slideBlankClass
            );
            a.append(l);
          }
          r = a.children("." + i.slideClass);
        }
      }
      "auto" !== i.slidesPerView ||
        i.loopedSlides ||
        (i.loopedSlides = r.length),
        (t.loopedSlides = Math.ceil(
          parseFloat(i.loopedSlides || i.slidesPerView, 10)
        )),
        (t.loopedSlides += i.loopAdditionalSlides),
        t.loopedSlides > r.length && (t.loopedSlides = r.length);
      var d = [],
        h = [];
      r.each(function (e, i) {
        var a = s(i);
        e < t.loopedSlides && h.push(i),
          e < r.length && e >= r.length - t.loopedSlides && d.push(i),
          a.attr("data-swiper-slide-index", e);
      });
      for (var p = 0; p < h.length; p += 1)
        a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
      for (var c = d.length - 1; c >= 0; c -= 1)
        a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
    },
    loopFix: function () {
      this.emit("beforeLoopFix");
      var e,
        t = this.activeIndex,
        i = this.slides,
        s = this.loopedSlides,
        a = this.allowSlidePrev,
        r = this.allowSlideNext,
        n = this.snapGrid,
        o = this.rtlTranslate;
      (this.allowSlidePrev = !0), (this.allowSlideNext = !0);
      var l = -n[t] - this.getTranslate();
      if (t < s)
        (e = i.length - 3 * s + t),
          (e += s),
          this.slideTo(e, 0, !1, !0) &&
            0 !== l &&
            this.setTranslate((o ? -this.translate : this.translate) - l);
      else if (t >= i.length - s) {
        (e = -i.length + t + s),
          (e += s),
          this.slideTo(e, 0, !1, !0) &&
            0 !== l &&
            this.setTranslate((o ? -this.translate : this.translate) - l);
      }
      (this.allowSlidePrev = a),
        (this.allowSlideNext = r),
        this.emit("loopFix");
    },
    loopDestroy: function () {
      var e = this.$wrapperEl,
        t = this.params,
        i = this.slides;
      e
        .children(
          "." +
            t.slideClass +
            "." +
            t.slideDuplicateClass +
            ",." +
            t.slideClass +
            "." +
            t.slideBlankClass
        )
        .remove(),
        i.removeAttr("data-swiper-slide-index");
    },
  };
  var f = {
    setGrabCursor: function (e) {
      if (
        !(
          o.touch ||
          !this.params.simulateTouch ||
          (this.params.watchOverflow && this.isLocked) ||
          this.params.cssMode
        )
      ) {
        var t = this.el;
        (t.style.cursor = "move"),
          (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
          (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
          (t.style.cursor = e ? "grabbing" : "grab");
      }
    },
    unsetGrabCursor: function () {
      o.touch ||
        (this.params.watchOverflow && this.isLocked) ||
        this.params.cssMode ||
        (this.el.style.cursor = "");
    },
  };
  var m,
    g,
    b,
    w,
    y,
    x,
    T,
    E,
    S,
    C,
    M,
    P,
    z,
    k,
    $,
    L = {
      appendSlide: function (e) {
        var t = this.$wrapperEl,
          i = this.params;
        if (
          (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
        )
          for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
        else t.append(e);
        i.loop && this.loopCreate(),
          (i.observer && o.observer) || this.update();
      },
      prependSlide: function (e) {
        var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;
        t.loop && this.loopDestroy();
        var a = s + 1;
        if ("object" == typeof e && "length" in e) {
          for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
          a = s + e.length;
        } else i.prepend(e);
        t.loop && this.loopCreate(),
          (t.observer && o.observer) || this.update(),
          this.slideTo(a, 0, !1);
      },
      addSlide: function (e, t) {
        var i = this.$wrapperEl,
          s = this.params,
          a = this.activeIndex;
        s.loop &&
          ((a -= this.loopedSlides),
          this.loopDestroy(),
          (this.slides = i.children("." + s.slideClass)));
        var r = this.slides.length;
        if (e <= 0) this.prependSlide(t);
        else if (e >= r) this.appendSlide(t);
        else {
          for (var n = a > e ? a + 1 : a, l = [], d = r - 1; d >= e; d -= 1) {
            var h = this.slides.eq(d);
            h.remove(), l.unshift(h);
          }
          if ("object" == typeof t && "length" in t) {
            for (var p = 0; p < t.length; p += 1) t[p] && i.append(t[p]);
            n = a > e ? a + t.length : a;
          } else i.append(t);
          for (var c = 0; c < l.length; c += 1) i.append(l[c]);
          s.loop && this.loopCreate(),
            (s.observer && o.observer) || this.update(),
            s.loop
              ? this.slideTo(n + this.loopedSlides, 0, !1)
              : this.slideTo(n, 0, !1);
        }
      },
      removeSlide: function (e) {
        var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;
        t.loop &&
          ((s -= this.loopedSlides),
          this.loopDestroy(),
          (this.slides = i.children("." + t.slideClass)));
        var a,
          r = s;
        if ("object" == typeof e && "length" in e) {
          for (var n = 0; n < e.length; n += 1)
            (a = e[n]),
              this.slides[a] && this.slides.eq(a).remove(),
              a < r && (r -= 1);
          r = Math.max(r, 0);
        } else
          (a = e),
            this.slides[a] && this.slides.eq(a).remove(),
            a < r && (r -= 1),
            (r = Math.max(r, 0));
        t.loop && this.loopCreate(),
          (t.observer && o.observer) || this.update(),
          t.loop
            ? this.slideTo(r + this.loopedSlides, 0, !1)
            : this.slideTo(r, 0, !1);
      },
      removeAllSlides: function () {
        for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
        this.removeSlide(e);
      },
    },
    I =
      ((m = t.navigator.platform),
      (g = t.navigator.userAgent),
      (b = {
        ios: !1,
        android: !1,
        androidChrome: !1,
        desktop: !1,
        iphone: !1,
        ipod: !1,
        ipad: !1,
        edge: !1,
        ie: !1,
        firefox: !1,
        macos: !1,
        windows: !1,
        cordova: !(!t.cordova && !t.phonegap),
        phonegap: !(!t.cordova && !t.phonegap),
        electron: !1,
      }),
      (w = t.screen.width),
      (y = t.screen.height),
      (x = g.match(/(Android);?[\s\/]+([\d.]+)?/)),
      (T = g.match(/(iPad).*OS\s([\d_]+)/)),
      (E = g.match(/(iPod)(.*OS\s([\d_]+))?/)),
      (S = !T && g.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
      (C = g.indexOf("MSIE ") >= 0 || g.indexOf("Trident/") >= 0),
      (M = g.indexOf("Edge/") >= 0),
      (P = g.indexOf("Gecko/") >= 0 && g.indexOf("Firefox/") >= 0),
      (z = "Win32" === m),
      (k = g.toLowerCase().indexOf("electron") >= 0),
      ($ = "MacIntel" === m),
      !T &&
        $ &&
        o.touch &&
        ((1024 === w && 1366 === y) ||
          (834 === w && 1194 === y) ||
          (834 === w && 1112 === y) ||
          (768 === w && 1024 === y)) &&
        ((T = g.match(/(Version)\/([\d.]+)/)), ($ = !1)),
      (b.ie = C),
      (b.edge = M),
      (b.firefox = P),
      x &&
        !z &&
        ((b.os = "android"),
        (b.osVersion = x[2]),
        (b.android = !0),
        (b.androidChrome = g.toLowerCase().indexOf("chrome") >= 0)),
      (T || S || E) && ((b.os = "ios"), (b.ios = !0)),
      S && !E && ((b.osVersion = S[2].replace(/_/g, ".")), (b.iphone = !0)),
      T && ((b.osVersion = T[2].replace(/_/g, ".")), (b.ipad = !0)),
      E &&
        ((b.osVersion = E[3] ? E[3].replace(/_/g, ".") : null), (b.ipod = !0)),
      b.ios &&
        b.osVersion &&
        g.indexOf("Version/") >= 0 &&
        "10" === b.osVersion.split(".")[0] &&
        (b.osVersion = g.toLowerCase().split("version/")[1].split(" ")[0]),
      (b.webView =
        !(
          !(S || T || E) ||
          (!g.match(/.*AppleWebKit(?!.*Safari)/i) && !t.navigator.standalone)
        ) ||
        (t.matchMedia && t.matchMedia("(display-mode: standalone)").matches)),
      (b.webview = b.webView),
      (b.standalone = b.webView),
      (b.desktop = !(b.ios || b.android) || k),
      b.desktop &&
        ((b.electron = k),
        (b.macos = $),
        (b.windows = z),
        b.macos && (b.os = "macos"),
        b.windows && (b.os = "windows")),
      (b.pixelRatio = t.devicePixelRatio || 1),
      b);
  function D(i) {
    var a = this.touchEventsData,
      r = this.params,
      o = this.touches;
    if (!this.animating || !r.preventInteractionOnTransition) {
      var l = i;
      l.originalEvent && (l = l.originalEvent);
      var d = s(l.target);
      if (
        ("wrapper" !== r.touchEventsTarget ||
          d.closest(this.wrapperEl).length) &&
        ((a.isTouchEvent = "touchstart" === l.type),
        (a.isTouchEvent || !("which" in l) || 3 !== l.which) &&
          !(
            (!a.isTouchEvent && "button" in l && l.button > 0) ||
            (a.isTouched && a.isMoved)
          ))
      )
        if (
          r.noSwiping &&
          d.closest(
            r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass
          )[0]
        )
          this.allowClick = !0;
        else if (!r.swipeHandler || d.closest(r.swipeHandler)[0]) {
          (o.currentX =
            "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
            (o.currentY =
              "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
          var h = o.currentX,
            p = o.currentY,
            c = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
            u = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
          if (!c || !(h <= u || h >= t.screen.width - u)) {
            if (
              (n.extend(a, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0,
              }),
              (o.startX = h),
              (o.startY = p),
              (a.touchStartTime = n.now()),
              (this.allowClick = !0),
              this.updateSize(),
              (this.swipeDirection = void 0),
              r.threshold > 0 && (a.allowThresholdMove = !1),
              "touchstart" !== l.type)
            ) {
              var v = !0;
              d.is(a.formElements) && (v = !1),
                e.activeElement &&
                  s(e.activeElement).is(a.formElements) &&
                  e.activeElement !== d[0] &&
                  e.activeElement.blur();
              var f = v && this.allowTouchMove && r.touchStartPreventDefault;
              (r.touchStartForcePreventDefault || f) && l.preventDefault();
            }
            this.emit("touchStart", l);
          }
        }
    }
  }
  function O(t) {
    var i = this.touchEventsData,
      a = this.params,
      r = this.touches,
      o = this.rtlTranslate,
      l = t;
    if ((l.originalEvent && (l = l.originalEvent), i.isTouched)) {
      if (!i.isTouchEvent || "mousemove" !== l.type) {
        var d =
            "touchmove" === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          h = "touchmove" === l.type ? d.pageX : l.pageX,
          p = "touchmove" === l.type ? d.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
          return (r.startX = h), void (r.startY = p);
        if (!this.allowTouchMove)
          return (
            (this.allowClick = !1),
            void (
              i.isTouched &&
              (n.extend(r, { startX: h, startY: p, currentX: h, currentY: p }),
              (i.touchStartTime = n.now()))
            )
          );
        if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
          if (this.isVertical()) {
            if (
              (p < r.startY && this.translate <= this.maxTranslate()) ||
              (p > r.startY && this.translate >= this.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else if (
            (h < r.startX && this.translate <= this.maxTranslate()) ||
            (h > r.startX && this.translate >= this.minTranslate())
          )
            return;
        if (
          i.isTouchEvent &&
          e.activeElement &&
          l.target === e.activeElement &&
          s(l.target).is(i.formElements)
        )
          return (i.isMoved = !0), void (this.allowClick = !1);
        if (
          (i.allowTouchCallbacks && this.emit("touchMove", l),
          !(l.targetTouches && l.targetTouches.length > 1))
        ) {
          (r.currentX = h), (r.currentY = p);
          var c = r.currentX - r.startX,
            u = r.currentY - r.startY;
          if (
            !(
              this.params.threshold &&
              Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < this.params.threshold
            )
          ) {
            var v;
            if (void 0 === i.isScrolling)
              (this.isHorizontal() && r.currentY === r.startY) ||
              (this.isVertical() && r.currentX === r.startX)
                ? (i.isScrolling = !1)
                : c * c + u * u >= 25 &&
                  ((v = (180 * Math.atan2(Math.abs(u), Math.abs(c))) / Math.PI),
                  (i.isScrolling = this.isHorizontal()
                    ? v > a.touchAngle
                    : 90 - v > a.touchAngle));
            if (
              (i.isScrolling && this.emit("touchMoveOpposite", l),
              void 0 === i.startMoving &&
                ((r.currentX === r.startX && r.currentY === r.startY) ||
                  (i.startMoving = !0)),
              i.isScrolling)
            )
              i.isTouched = !1;
            else if (i.startMoving) {
              (this.allowClick = !1),
                a.cssMode || l.preventDefault(),
                a.touchMoveStopPropagation && !a.nested && l.stopPropagation(),
                i.isMoved ||
                  (a.loop && this.loopFix(),
                  (i.startTranslate = this.getTranslate()),
                  this.setTransition(0),
                  this.animating &&
                    this.$wrapperEl.trigger(
                      "webkitTransitionEnd transitionend"
                    ),
                  (i.allowMomentumBounce = !1),
                  !a.grabCursor ||
                    (!0 !== this.allowSlideNext &&
                      !0 !== this.allowSlidePrev) ||
                    this.setGrabCursor(!0),
                  this.emit("sliderFirstMove", l)),
                this.emit("sliderMove", l),
                (i.isMoved = !0);
              var f = this.isHorizontal() ? c : u;
              (r.diff = f),
                (f *= a.touchRatio),
                o && (f = -f),
                (this.swipeDirection = f > 0 ? "prev" : "next"),
                (i.currentTranslate = f + i.startTranslate);
              var m = !0,
                g = a.resistanceRatio;
              if (
                (a.touchReleaseOnEdges && (g = 0),
                f > 0 && i.currentTranslate > this.minTranslate()
                  ? ((m = !1),
                    a.resistance &&
                      (i.currentTranslate =
                        this.minTranslate() -
                        1 +
                        Math.pow(
                          -this.minTranslate() + i.startTranslate + f,
                          g
                        )))
                  : f < 0 &&
                    i.currentTranslate < this.maxTranslate() &&
                    ((m = !1),
                    a.resistance &&
                      (i.currentTranslate =
                        this.maxTranslate() +
                        1 -
                        Math.pow(
                          this.maxTranslate() - i.startTranslate - f,
                          g
                        ))),
                m && (l.preventedByNestedSwiper = !0),
                !this.allowSlideNext &&
                  "next" === this.swipeDirection &&
                  i.currentTranslate < i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                !this.allowSlidePrev &&
                  "prev" === this.swipeDirection &&
                  i.currentTranslate > i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                a.threshold > 0)
              ) {
                if (!(Math.abs(f) > a.threshold || i.allowThresholdMove))
                  return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove)
                  return (
                    (i.allowThresholdMove = !0),
                    (r.startX = r.currentX),
                    (r.startY = r.currentY),
                    (i.currentTranslate = i.startTranslate),
                    void (r.diff = this.isHorizontal()
                      ? r.currentX - r.startX
                      : r.currentY - r.startY)
                  );
              }
              a.followFinger &&
                !a.cssMode &&
                ((a.freeMode ||
                  a.watchSlidesProgress ||
                  a.watchSlidesVisibility) &&
                  (this.updateActiveIndex(), this.updateSlidesClasses()),
                a.freeMode &&
                  (0 === i.velocities.length &&
                    i.velocities.push({
                      position: r[this.isHorizontal() ? "startX" : "startY"],
                      time: i.touchStartTime,
                    }),
                  i.velocities.push({
                    position: r[this.isHorizontal() ? "currentX" : "currentY"],
                    time: n.now(),
                  })),
                this.updateProgress(i.currentTranslate),
                this.setTranslate(i.currentTranslate));
            }
          }
        }
      }
    } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", l);
  }
  function A(e) {
    var t = this,
      i = t.touchEventsData,
      s = t.params,
      a = t.touches,
      r = t.rtlTranslate,
      o = t.$wrapperEl,
      l = t.slidesGrid,
      d = t.snapGrid,
      h = e;
    if (
      (h.originalEvent && (h = h.originalEvent),
      i.allowTouchCallbacks && t.emit("touchEnd", h),
      (i.allowTouchCallbacks = !1),
      !i.isTouched)
    )
      return (
        i.isMoved && s.grabCursor && t.setGrabCursor(!1),
        (i.isMoved = !1),
        void (i.startMoving = !1)
      );
    s.grabCursor &&
      i.isMoved &&
      i.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    var p,
      c = n.now(),
      u = c - i.touchStartTime;
    if (
      (t.allowClick &&
        (t.updateClickedSlide(h),
        t.emit("tap click", h),
        u < 300 &&
          c - i.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", h)),
      (i.lastClickTime = n.now()),
      n.nextTick(function () {
        t.destroyed || (t.allowClick = !0);
      }),
      !i.isTouched ||
        !i.isMoved ||
        !t.swipeDirection ||
        0 === a.diff ||
        i.currentTranslate === i.startTranslate)
    )
      return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
    if (
      ((i.isTouched = !1),
      (i.isMoved = !1),
      (i.startMoving = !1),
      (p = s.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -i.currentTranslate),
      !s.cssMode)
    )
      if (s.freeMode) {
        if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
        if (p > -t.maxTranslate())
          return void (t.slides.length < d.length
            ? t.slideTo(d.length - 1)
            : t.slideTo(t.slides.length - 1));
        if (s.freeModeMomentum) {
          if (i.velocities.length > 1) {
            var v = i.velocities.pop(),
              f = i.velocities.pop(),
              m = v.position - f.position,
              g = v.time - f.time;
            (t.velocity = m / g),
              (t.velocity /= 2),
              Math.abs(t.velocity) < s.freeModeMinimumVelocity &&
                (t.velocity = 0),
              (g > 150 || n.now() - v.time > 300) && (t.velocity = 0);
          } else t.velocity = 0;
          (t.velocity *= s.freeModeMomentumVelocityRatio),
            (i.velocities.length = 0);
          var b = 1e3 * s.freeModeMomentumRatio,
            w = t.velocity * b,
            y = t.translate + w;
          r && (y = -y);
          var x,
            T,
            E = !1,
            S = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
          if (y < t.maxTranslate())
            s.freeModeMomentumBounce
              ? (y + t.maxTranslate() < -S && (y = t.maxTranslate() - S),
                (x = t.maxTranslate()),
                (E = !0),
                (i.allowMomentumBounce = !0))
              : (y = t.maxTranslate()),
              s.loop && s.centeredSlides && (T = !0);
          else if (y > t.minTranslate())
            s.freeModeMomentumBounce
              ? (y - t.minTranslate() > S && (y = t.minTranslate() + S),
                (x = t.minTranslate()),
                (E = !0),
                (i.allowMomentumBounce = !0))
              : (y = t.minTranslate()),
              s.loop && s.centeredSlides && (T = !0);
          else if (s.freeModeSticky) {
            for (var C, M = 0; M < d.length; M += 1)
              if (d[M] > -y) {
                C = M;
                break;
              }
            y = -(y =
              Math.abs(d[C] - y) < Math.abs(d[C - 1] - y) ||
              "next" === t.swipeDirection
                ? d[C]
                : d[C - 1]);
          }
          if (
            (T &&
              t.once("transitionEnd", function () {
                t.loopFix();
              }),
            0 !== t.velocity)
          ) {
            if (
              ((b = r
                ? Math.abs((-y - t.translate) / t.velocity)
                : Math.abs((y - t.translate) / t.velocity)),
              s.freeModeSticky)
            ) {
              var P = Math.abs((r ? -y : y) - t.translate),
                z = t.slidesSizesGrid[t.activeIndex];
              b = P < z ? s.speed : P < 2 * z ? 1.5 * s.speed : 2.5 * s.speed;
            }
          } else if (s.freeModeSticky) return void t.slideToClosest();
          s.freeModeMomentumBounce && E
            ? (t.updateProgress(x),
              t.setTransition(b),
              t.setTranslate(y),
              t.transitionStart(!0, t.swipeDirection),
              (t.animating = !0),
              o.transitionEnd(function () {
                t &&
                  !t.destroyed &&
                  i.allowMomentumBounce &&
                  (t.emit("momentumBounce"),
                  t.setTransition(s.speed),
                  t.setTranslate(x),
                  o.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd();
                  }));
              }))
            : t.velocity
            ? (t.updateProgress(y),
              t.setTransition(b),
              t.setTranslate(y),
              t.transitionStart(!0, t.swipeDirection),
              t.animating ||
                ((t.animating = !0),
                o.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd();
                })))
            : t.updateProgress(y),
            t.updateActiveIndex(),
            t.updateSlidesClasses();
        } else if (s.freeModeSticky) return void t.slideToClosest();
        (!s.freeModeMomentum || u >= s.longSwipesMs) &&
          (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
      } else {
        for (
          var k = 0, $ = t.slidesSizesGrid[0], L = 0;
          L < l.length;
          L += L < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
        ) {
          var I = L < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== l[L + I]
            ? p >= l[L] && p < l[L + I] && ((k = L), ($ = l[L + I] - l[L]))
            : p >= l[L] && ((k = L), ($ = l[l.length - 1] - l[l.length - 2]));
        }
        var D = (p - l[k]) / $,
          O = k < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (u > s.longSwipesMs) {
          if (!s.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (D >= s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k)),
            "prev" === t.swipeDirection &&
              (D > 1 - s.longSwipesRatio ? t.slideTo(k + O) : t.slideTo(k));
        } else {
          if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (h.target === t.navigation.nextEl || h.target === t.navigation.prevEl)
            ? h.target === t.navigation.nextEl
              ? t.slideTo(k + O)
              : t.slideTo(k)
            : ("next" === t.swipeDirection && t.slideTo(k + O),
              "prev" === t.swipeDirection && t.slideTo(k));
        }
      }
  }
  function G() {
    var e = this.params,
      t = this.el;
    if (!t || 0 !== t.offsetWidth) {
      e.breakpoints && this.setBreakpoint();
      var i = this.allowSlideNext,
        s = this.allowSlidePrev,
        a = this.snapGrid;
      (this.allowSlideNext = !0),
        (this.allowSlidePrev = !0),
        this.updateSize(),
        this.updateSlides(),
        this.updateSlidesClasses(),
        ("auto" === e.slidesPerView || e.slidesPerView > 1) &&
        this.isEnd &&
        !this.params.centeredSlides
          ? this.slideTo(this.slides.length - 1, 0, !1, !0)
          : this.slideTo(this.activeIndex, 0, !1, !0),
        this.autoplay &&
          this.autoplay.running &&
          this.autoplay.paused &&
          this.autoplay.run(),
        (this.allowSlidePrev = s),
        (this.allowSlideNext = i),
        this.params.watchOverflow &&
          a !== this.snapGrid &&
          this.checkOverflow();
    }
  }
  function H(e) {
    this.allowClick ||
      (this.params.preventClicks && e.preventDefault(),
      this.params.preventClicksPropagation &&
        this.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation()));
  }
  function B() {
    var e = this.wrapperEl;
    (this.previousTranslate = this.translate),
      (this.translate = this.isHorizontal() ? -e.scrollLeft : -e.scrollTop),
      -0 === this.translate && (this.translate = 0),
      this.updateActiveIndex(),
      this.updateSlidesClasses();
    var t = this.maxTranslate() - this.minTranslate();
    (0 === t ? 0 : (this.translate - this.minTranslate()) / t) !==
      this.progress && this.updateProgress(this.translate),
      this.emit("setTranslate", this.translate, !1);
  }
  var N = !1;
  function X() {}
  var V = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
    },
    Y = {
      update: h,
      translate: p,
      transition: c,
      slide: u,
      loop: v,
      grabCursor: f,
      manipulation: L,
      events: {
        attachEvents: function () {
          var t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl;
          (this.onTouchStart = D.bind(this)),
            (this.onTouchMove = O.bind(this)),
            (this.onTouchEnd = A.bind(this)),
            t.cssMode && (this.onScroll = B.bind(this)),
            (this.onClick = H.bind(this));
          var r = !!t.nested;
          if (!o.touch && o.pointerEvents)
            s.addEventListener(i.start, this.onTouchStart, !1),
              e.addEventListener(i.move, this.onTouchMove, r),
              e.addEventListener(i.end, this.onTouchEnd, !1);
          else {
            if (o.touch) {
              var n = !(
                "touchstart" !== i.start ||
                !o.passiveListener ||
                !t.passiveListeners
              ) && { passive: !0, capture: !1 };
              s.addEventListener(i.start, this.onTouchStart, n),
                s.addEventListener(
                  i.move,
                  this.onTouchMove,
                  o.passiveListener ? { passive: !1, capture: r } : r
                ),
                s.addEventListener(i.end, this.onTouchEnd, n),
                i.cancel && s.addEventListener(i.cancel, this.onTouchEnd, n),
                N || (e.addEventListener("touchstart", X), (N = !0));
            }
            ((t.simulateTouch && !I.ios && !I.android) ||
              (t.simulateTouch && !o.touch && I.ios)) &&
              (s.addEventListener("mousedown", this.onTouchStart, !1),
              e.addEventListener("mousemove", this.onTouchMove, r),
              e.addEventListener("mouseup", this.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) &&
            s.addEventListener("click", this.onClick, !0),
            t.cssMode && a.addEventListener("scroll", this.onScroll),
            t.updateOnWindowResize
              ? this.on(
                  I.ios || I.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  G,
                  !0
                )
              : this.on("observerUpdate", G, !0);
        },
        detachEvents: function () {
          var t = this.params,
            i = this.touchEvents,
            s = this.el,
            a = this.wrapperEl,
            r = !!t.nested;
          if (!o.touch && o.pointerEvents)
            s.removeEventListener(i.start, this.onTouchStart, !1),
              e.removeEventListener(i.move, this.onTouchMove, r),
              e.removeEventListener(i.end, this.onTouchEnd, !1);
          else {
            if (o.touch) {
              var n = !(
                "onTouchStart" !== i.start ||
                !o.passiveListener ||
                !t.passiveListeners
              ) && { passive: !0, capture: !1 };
              s.removeEventListener(i.start, this.onTouchStart, n),
                s.removeEventListener(i.move, this.onTouchMove, r),
                s.removeEventListener(i.end, this.onTouchEnd, n),
                i.cancel && s.removeEventListener(i.cancel, this.onTouchEnd, n);
            }
            ((t.simulateTouch && !I.ios && !I.android) ||
              (t.simulateTouch && !o.touch && I.ios)) &&
              (s.removeEventListener("mousedown", this.onTouchStart, !1),
              e.removeEventListener("mousemove", this.onTouchMove, r),
              e.removeEventListener("mouseup", this.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) &&
            s.removeEventListener("click", this.onClick, !0),
            t.cssMode && a.removeEventListener("scroll", this.onScroll),
            this.off(
              I.ios || I.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              G
            );
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          var e = this.activeIndex,
            t = this.initialized,
            i = this.loopedSlides;
          void 0 === i && (i = 0);
          var s = this.params,
            a = this.$el,
            r = s.breakpoints;
          if (r && (!r || 0 !== Object.keys(r).length)) {
            var o = this.getBreakpoint(r);
            if (o && this.currentBreakpoint !== o) {
              var l = o in r ? r[o] : void 0;
              l &&
                [
                  "slidesPerView",
                  "spaceBetween",
                  "slidesPerGroup",
                  "slidesPerGroupSkip",
                  "slidesPerColumn",
                ].forEach(function (e) {
                  var t = l[e];
                  void 0 !== t &&
                    (l[e] =
                      "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t)
                        ? "slidesPerView" === e
                          ? parseFloat(t)
                          : parseInt(t, 10)
                        : "auto");
                });
              var d = l || this.originalParams,
                h = s.slidesPerColumn > 1,
                p = d.slidesPerColumn > 1;
              h && !p
                ? a.removeClass(
                    s.containerModifierClass +
                      "multirow " +
                      s.containerModifierClass +
                      "multirow-column"
                  )
                : !h &&
                  p &&
                  (a.addClass(s.containerModifierClass + "multirow"),
                  "column" === d.slidesPerColumnFill &&
                    a.addClass(s.containerModifierClass + "multirow-column"));
              var c = d.direction && d.direction !== s.direction,
                u = s.loop && (d.slidesPerView !== s.slidesPerView || c);
              c && t && this.changeDirection(),
                n.extend(this.params, d),
                n.extend(this, {
                  allowTouchMove: this.params.allowTouchMove,
                  allowSlideNext: this.params.allowSlideNext,
                  allowSlidePrev: this.params.allowSlidePrev,
                }),
                (this.currentBreakpoint = o),
                u &&
                  t &&
                  (this.loopDestroy(),
                  this.loopCreate(),
                  this.updateSlides(),
                  this.slideTo(e - i + this.loopedSlides, 0, !1)),
                this.emit("breakpoint", d);
            }
          }
        },
        getBreakpoint: function (e) {
          if (e) {
            var i = !1,
              s = Object.keys(e).map(function (e) {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  var i = parseFloat(e.substr(1));
                  return { value: t.innerHeight * i, point: e };
                }
                return { value: e, point: e };
              });
            s.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var a = 0; a < s.length; a += 1) {
              var r = s[a],
                n = r.point;
              r.value <= t.innerWidth && (i = n);
            }
            return i || "max";
          }
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          var e = this.params,
            t = this.isLocked,
            i =
              this.slides.length > 0 &&
              e.slidesOffsetBefore +
                e.spaceBetween * (this.slides.length - 1) +
                this.slides[0].offsetWidth * this.slides.length;
          e.slidesOffsetBefore && e.slidesOffsetAfter && i
            ? (this.isLocked = i <= this.size)
            : (this.isLocked = 1 === this.snapGrid.length),
            (this.allowSlideNext = !this.isLocked),
            (this.allowSlidePrev = !this.isLocked),
            t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"),
            t &&
              t !== this.isLocked &&
              ((this.isEnd = !1), this.navigation.update());
        },
      },
      classes: {
        addClasses: function () {
          var e = this.classNames,
            t = this.params,
            i = this.rtl,
            s = this.$el,
            a = [];
          a.push("initialized"),
            a.push(t.direction),
            t.freeMode && a.push("free-mode"),
            t.autoHeight && a.push("autoheight"),
            i && a.push("rtl"),
            t.slidesPerColumn > 1 &&
              (a.push("multirow"),
              "column" === t.slidesPerColumnFill && a.push("multirow-column")),
            I.android && a.push("android"),
            I.ios && a.push("ios"),
            t.cssMode && a.push("css-mode"),
            a.forEach(function (i) {
              e.push(t.containerModifierClass + i);
            }),
            s.addClass(e.join(" "));
        },
        removeClasses: function () {
          var e = this.$el,
            t = this.classNames;
          e.removeClass(t.join(" "));
        },
      },
      images: {
        loadImage: function (e, i, s, a, r, n) {
          var o;
          function l() {
            n && n();
          }
          e.complete && r
            ? l()
            : i
            ? (((o = new t.Image()).onload = l),
              (o.onerror = l),
              a && (o.sizes = a),
              s && (o.srcset = s),
              i && (o.src = i))
            : l();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var i = 0; i < e.imagesToLoad.length; i += 1) {
            var s = e.imagesToLoad[i];
            e.loadImage(
              s,
              s.currentSrc || s.getAttribute("src"),
              s.srcset || s.getAttribute("srcset"),
              s.sizes || s.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    F = {},
    W = (function (e) {
      function t() {
        for (var i, a, r, l = [], d = arguments.length; d--; )
          l[d] = arguments[d];
        1 === l.length && l[0].constructor && l[0].constructor === Object
          ? (r = l[0])
          : ((a = (i = l)[0]), (r = i[1])),
          r || (r = {}),
          (r = n.extend({}, r)),
          a && !r.el && (r.el = a),
          e.call(this, r),
          Object.keys(Y).forEach(function (e) {
            Object.keys(Y[e]).forEach(function (i) {
              t.prototype[i] || (t.prototype[i] = Y[e][i]);
            });
          });
        var h = this;
        void 0 === h.modules && (h.modules = {}),
          Object.keys(h.modules).forEach(function (e) {
            var t = h.modules[e];
            if (t.params) {
              var i = Object.keys(t.params)[0],
                s = t.params[i];
              if ("object" != typeof s || null === s) return;
              if (!(i in r && "enabled" in s)) return;
              !0 === r[i] && (r[i] = { enabled: !0 }),
                "object" != typeof r[i] ||
                  "enabled" in r[i] ||
                  (r[i].enabled = !0),
                r[i] || (r[i] = { enabled: !1 });
            }
          });
        var p = n.extend({}, V);
        h.useModulesParams(p),
          (h.params = n.extend({}, p, F, r)),
          (h.originalParams = n.extend({}, h.params)),
          (h.passedParams = n.extend({}, r)),
          (h.$ = s);
        var c = s(h.params.el);
        if ((a = c[0])) {
          if (c.length > 1) {
            var u = [];
            return (
              c.each(function (e, i) {
                var s = n.extend({}, r, { el: i });
                u.push(new t(s));
              }),
              u
            );
          }
          var v, f, m;
          return (
            (a.swiper = h),
            c.data("swiper", h),
            a && a.shadowRoot && a.shadowRoot.querySelector
              ? ((v = s(
                  a.shadowRoot.querySelector("." + h.params.wrapperClass)
                )).children = function (e) {
                  return c.children(e);
                })
              : (v = c.children("." + h.params.wrapperClass)),
            n.extend(h, {
              $el: c,
              el: a,
              $wrapperEl: v,
              wrapperEl: v[0],
              classNames: [],
              slides: s(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function () {
                return "horizontal" === h.params.direction;
              },
              isVertical: function () {
                return "vertical" === h.params.direction;
              },
              rtl:
                "rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction"),
              rtlTranslate:
                "horizontal" === h.params.direction &&
                ("rtl" === a.dir.toLowerCase() || "rtl" === c.css("direction")),
              wrongRTL: "-webkit-box" === v.css("display"),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: h.params.allowSlideNext,
              allowSlidePrev: h.params.allowSlidePrev,
              touchEvents:
                ((f = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                (m = ["mousedown", "mousemove", "mouseup"]),
                o.pointerEvents &&
                  (m = ["pointerdown", "pointermove", "pointerup"]),
                (h.touchEventsTouch = {
                  start: f[0],
                  move: f[1],
                  end: f[2],
                  cancel: f[3],
                }),
                (h.touchEventsDesktop = { start: m[0], move: m[1], end: m[2] }),
                o.touch || !h.params.simulateTouch
                  ? h.touchEventsTouch
                  : h.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements:
                  "input, select, option, textarea, button, video, label",
                lastClickTime: n.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: h.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            h.useModules(),
            h.params.init && h.init(),
            h
          );
        }
      }
      e && (t.__proto__ = e),
        (t.prototype = Object.create(e && e.prototype)),
        (t.prototype.constructor = t);
      var i = {
        extendedDefaults: { configurable: !0 },
        defaults: { configurable: !0 },
        Class: { configurable: !0 },
        $: { configurable: !0 },
      };
      return (
        (t.prototype.slidesPerViewDynamic = function () {
          var e = this.params,
            t = this.slides,
            i = this.slidesGrid,
            s = this.size,
            a = this.activeIndex,
            r = 1;
          if (e.centeredSlides) {
            for (
              var n, o = t[a].swiperSlideSize, l = a + 1;
              l < t.length;
              l += 1
            )
              t[l] &&
                !n &&
                ((r += 1), (o += t[l].swiperSlideSize) > s && (n = !0));
            for (var d = a - 1; d >= 0; d -= 1)
              t[d] &&
                !n &&
                ((r += 1), (o += t[d].swiperSlideSize) > s && (n = !0));
          } else
            for (var h = a + 1; h < t.length; h += 1)
              i[h] - i[a] < s && (r += 1);
          return r;
        }),
        (t.prototype.update = function () {
          var e = this;
          if (e && !e.destroyed) {
            var t = e.snapGrid,
              i = e.params;
            i.breakpoints && e.setBreakpoint(),
              e.updateSize(),
              e.updateSlides(),
              e.updateProgress(),
              e.updateSlidesClasses(),
              e.params.freeMode
                ? (s(), e.params.autoHeight && e.updateAutoHeight())
                : (("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
              i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
              e.emit("update");
          }
          function s() {
            var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
          }
        }),
        (t.prototype.changeDirection = function (e, t) {
          void 0 === t && (t = !0);
          var i = this.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i || ("horizontal" !== e && "vertical" !== e)
              ? this
              : (this.$el
                  .removeClass("" + this.params.containerModifierClass + i)
                  .addClass("" + this.params.containerModifierClass + e),
                (this.params.direction = e),
                this.slides.each(function (t, i) {
                  "vertical" === e
                    ? (i.style.width = "")
                    : (i.style.height = "");
                }),
                this.emit("changeDirection"),
                t && this.update(),
                this)
          );
        }),
        (t.prototype.init = function () {
          this.initialized ||
            (this.emit("beforeInit"),
            this.params.breakpoints && this.setBreakpoint(),
            this.addClasses(),
            this.params.loop && this.loopCreate(),
            this.updateSize(),
            this.updateSlides(),
            this.params.watchOverflow && this.checkOverflow(),
            this.params.grabCursor && this.setGrabCursor(),
            this.params.preloadImages && this.preloadImages(),
            this.params.loop
              ? this.slideTo(
                  this.params.initialSlide + this.loopedSlides,
                  0,
                  this.params.runCallbacksOnInit
                )
              : this.slideTo(
                  this.params.initialSlide,
                  0,
                  this.params.runCallbacksOnInit
                ),
            this.attachEvents(),
            (this.initialized = !0),
            this.emit("init"));
        }),
        (t.prototype.destroy = function (e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          var i = this,
            s = i.params,
            a = i.$el,
            r = i.$wrapperEl,
            o = i.slides;
          return void 0 === i.params || i.destroyed
            ? null
            : (i.emit("beforeDestroy"),
              (i.initialized = !1),
              i.detachEvents(),
              s.loop && i.loopDestroy(),
              t &&
                (i.removeClasses(),
                a.removeAttr("style"),
                r.removeAttr("style"),
                o &&
                  o.length &&
                  o
                    .removeClass(
                      [
                        s.slideVisibleClass,
                        s.slideActiveClass,
                        s.slideNextClass,
                        s.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              i.emit("destroy"),
              Object.keys(i.eventsListeners).forEach(function (e) {
                i.off(e);
              }),
              !1 !== e &&
                ((i.$el[0].swiper = null),
                i.$el.data("swiper", null),
                n.deleteProps(i)),
              (i.destroyed = !0),
              null);
        }),
        (t.extendDefaults = function (e) {
          n.extend(F, e);
        }),
        (i.extendedDefaults.get = function () {
          return F;
        }),
        (i.defaults.get = function () {
          return V;
        }),
        (i.Class.get = function () {
          return e;
        }),
        (i.$.get = function () {
          return s;
        }),
        Object.defineProperties(t, i),
        t
      );
    })(l),
    R = { name: "device", proto: { device: I }, static: { device: I } },
    q = { name: "support", proto: { support: o }, static: { support: o } },
    j = {
      isEdge: !!t.navigator.userAgent.match(/Edge/g),
      isSafari: (function () {
        var e = t.navigator.userAgent.toLowerCase();
        return (
          e.indexOf("safari") >= 0 &&
          e.indexOf("chrome") < 0 &&
          e.indexOf("android") < 0
        );
      })(),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        t.navigator.userAgent
      ),
    },
    K = { name: "browser", proto: { browser: j }, static: { browser: j } },
    U = {
      name: "resize",
      create: function () {
        var e = this;
        n.extend(e, {
          resize: {
            resizeHandler: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            },
          },
        });
      },
      on: {
        init: function () {
          t.addEventListener("resize", this.resize.resizeHandler),
            t.addEventListener(
              "orientationchange",
              this.resize.orientationChangeHandler
            );
        },
        destroy: function () {
          t.removeEventListener("resize", this.resize.resizeHandler),
            t.removeEventListener(
              "orientationchange",
              this.resize.orientationChangeHandler
            );
        },
      },
    },
    _ = {
      func: t.MutationObserver || t.WebkitMutationObserver,
      attach: function (e, i) {
        void 0 === i && (i = {});
        var s = this,
          a = new (0, _.func)(function (e) {
            if (1 !== e.length) {
              var i = function () {
                s.emit("observerUpdate", e[0]);
              };
              t.requestAnimationFrame
                ? t.requestAnimationFrame(i)
                : t.setTimeout(i, 0);
            } else s.emit("observerUpdate", e[0]);
          });
        a.observe(e, {
          attributes: void 0 === i.attributes || i.attributes,
          childList: void 0 === i.childList || i.childList,
          characterData: void 0 === i.characterData || i.characterData,
        }),
          s.observer.observers.push(a);
      },
      init: function () {
        if (o.observer && this.params.observer) {
          if (this.params.observeParents)
            for (var e = this.$el.parents(), t = 0; t < e.length; t += 1)
              this.observer.attach(e[t]);
          this.observer.attach(this.$el[0], {
            childList: this.params.observeSlideChildren,
          }),
            this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy: function () {
        this.observer.observers.forEach(function (e) {
          e.disconnect();
        }),
          (this.observer.observers = []);
      },
    },
    Z = {
      name: "observer",
      params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
      create: function () {
        n.extend(this, {
          observer: {
            init: _.init.bind(this),
            attach: _.attach.bind(this),
            destroy: _.destroy.bind(this),
            observers: [],
          },
        });
      },
      on: {
        init: function () {
          this.observer.init();
        },
        destroy: function () {
          this.observer.destroy();
        },
      },
    },
    Q = {
      update: function (e) {
        var t = this,
          i = t.params,
          s = i.slidesPerView,
          a = i.slidesPerGroup,
          r = i.centeredSlides,
          o = t.params.virtual,
          l = o.addSlidesBefore,
          d = o.addSlidesAfter,
          h = t.virtual,
          p = h.from,
          c = h.to,
          u = h.slides,
          v = h.slidesGrid,
          f = h.renderSlide,
          m = h.offset;
        t.updateActiveIndex();
        var g,
          b,
          w,
          y = t.activeIndex || 0;
        (g = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
          r
            ? ((b = Math.floor(s / 2) + a + l), (w = Math.floor(s / 2) + a + d))
            : ((b = s + (a - 1) + l), (w = a + d));
        var x = Math.max((y || 0) - w, 0),
          T = Math.min((y || 0) + b, u.length - 1),
          E = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
        function S() {
          t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.lazy && t.params.lazy.enabled && t.lazy.load();
        }
        if (
          (n.extend(t.virtual, {
            from: x,
            to: T,
            offset: E,
            slidesGrid: t.slidesGrid,
          }),
          p === x && c === T && !e)
        )
          return (
            t.slidesGrid !== v && E !== m && t.slides.css(g, E + "px"),
            void t.updateProgress()
          );
        if (t.params.virtual.renderExternal)
          return (
            t.params.virtual.renderExternal.call(t, {
              offset: E,
              from: x,
              to: T,
              slides: (function () {
                for (var e = [], t = x; t <= T; t += 1) e.push(u[t]);
                return e;
              })(),
            }),
            void S()
          );
        var C = [],
          M = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
        else
          for (var P = p; P <= c; P += 1)
            (P < x || P > T) &&
              t.$wrapperEl
                .find(
                  "." +
                    t.params.slideClass +
                    '[data-swiper-slide-index="' +
                    P +
                    '"]'
                )
                .remove();
        for (var z = 0; z < u.length; z += 1)
          z >= x &&
            z <= T &&
            (void 0 === c || e
              ? M.push(z)
              : (z > c && M.push(z), z < p && C.push(z)));
        M.forEach(function (e) {
          t.$wrapperEl.append(f(u[e], e));
        }),
          C.sort(function (e, t) {
            return t - e;
          }).forEach(function (e) {
            t.$wrapperEl.prepend(f(u[e], e));
          }),
          t.$wrapperEl.children(".swiper-slide").css(g, E + "px"),
          S();
      },
      renderSlide: function (e, t) {
        var i = this.params.virtual;
        if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
        var a = i.renderSlide
          ? s(i.renderSlide.call(this, e, t))
          : s(
              '<div class="' +
                this.params.slideClass +
                '" data-swiper-slide-index="' +
                t +
                '">' +
                e +
                "</div>"
            );
        return (
          a.attr("data-swiper-slide-index") ||
            a.attr("data-swiper-slide-index", t),
          i.cache && (this.virtual.cache[t] = a),
          a
        );
      },
      appendSlide: function (e) {
        if ("object" == typeof e && "length" in e)
          for (var t = 0; t < e.length; t += 1)
            e[t] && this.virtual.slides.push(e[t]);
        else this.virtual.slides.push(e);
        this.virtual.update(!0);
      },
      prependSlide: function (e) {
        var t = this.activeIndex,
          i = t + 1,
          s = 1;
        if (Array.isArray(e)) {
          for (var a = 0; a < e.length; a += 1)
            e[a] && this.virtual.slides.unshift(e[a]);
          (i = t + e.length), (s = e.length);
        } else this.virtual.slides.unshift(e);
        if (this.params.virtual.cache) {
          var r = this.virtual.cache,
            n = {};
          Object.keys(r).forEach(function (e) {
            var t = r[e],
              i = t.attr("data-swiper-slide-index");
            i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1),
              (n[parseInt(e, 10) + s] = t);
          }),
            (this.virtual.cache = n);
        }
        this.virtual.update(!0), this.slideTo(i, 0);
      },
      removeSlide: function (e) {
        if (null != e) {
          var t = this.activeIndex;
          if (Array.isArray(e))
            for (var i = e.length - 1; i >= 0; i -= 1)
              this.virtual.slides.splice(e[i], 1),
                this.params.virtual.cache && delete this.virtual.cache[e[i]],
                e[i] < t && (t -= 1),
                (t = Math.max(t, 0));
          else
            this.virtual.slides.splice(e, 1),
              this.params.virtual.cache && delete this.virtual.cache[e],
              e < t && (t -= 1),
              (t = Math.max(t, 0));
          this.virtual.update(!0), this.slideTo(t, 0);
        }
      },
      removeAllSlides: function () {
        (this.virtual.slides = []),
          this.params.virtual.cache && (this.virtual.cache = {}),
          this.virtual.update(!0),
          this.slideTo(0, 0);
      },
    },
    J = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      },
      create: function () {
        n.extend(this, {
          virtual: {
            update: Q.update.bind(this),
            appendSlide: Q.appendSlide.bind(this),
            prependSlide: Q.prependSlide.bind(this),
            removeSlide: Q.removeSlide.bind(this),
            removeAllSlides: Q.removeAllSlides.bind(this),
            renderSlide: Q.renderSlide.bind(this),
            slides: this.params.virtual.slides,
            cache: {},
          },
        });
      },
      on: {
        beforeInit: function () {
          if (this.params.virtual.enabled) {
            this.classNames.push(
              this.params.containerModifierClass + "virtual"
            );
            var e = { watchSlidesProgress: !0 };
            n.extend(this.params, e),
              n.extend(this.originalParams, e),
              this.params.initialSlide || this.virtual.update();
          }
        },
        setTranslate: function () {
          this.params.virtual.enabled && this.virtual.update();
        },
      },
    },
    ee = {
      handle: function (i) {
        var s = this.rtlTranslate,
          a = i;
        a.originalEvent && (a = a.originalEvent);
        var r = a.keyCode || a.charCode;
        if (
          !this.allowSlideNext &&
          ((this.isHorizontal() && 39 === r) ||
            (this.isVertical() && 40 === r) ||
            34 === r)
        )
          return !1;
        if (
          !this.allowSlidePrev &&
          ((this.isHorizontal() && 37 === r) ||
            (this.isVertical() && 38 === r) ||
            33 === r)
        )
          return !1;
        if (
          !(
            a.shiftKey ||
            a.altKey ||
            a.ctrlKey ||
            a.metaKey ||
            (e.activeElement &&
              e.activeElement.nodeName &&
              ("input" === e.activeElement.nodeName.toLowerCase() ||
                "textarea" === e.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            this.params.keyboard.onlyInViewport &&
            (33 === r ||
              34 === r ||
              37 === r ||
              39 === r ||
              38 === r ||
              40 === r)
          ) {
            var n = !1;
            if (
              this.$el.parents("." + this.params.slideClass).length > 0 &&
              0 === this.$el.parents("." + this.params.slideActiveClass).length
            )
              return;
            var o = t.innerWidth,
              l = t.innerHeight,
              d = this.$el.offset();
            s && (d.left -= this.$el[0].scrollLeft);
            for (
              var h = [
                  [d.left, d.top],
                  [d.left + this.width, d.top],
                  [d.left, d.top + this.height],
                  [d.left + this.width, d.top + this.height],
                ],
                p = 0;
              p < h.length;
              p += 1
            ) {
              var c = h[p];
              c[0] >= 0 && c[0] <= o && c[1] >= 0 && c[1] <= l && (n = !0);
            }
            if (!n) return;
          }
          this.isHorizontal()
            ? ((33 !== r && 34 !== r && 37 !== r && 39 !== r) ||
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (((34 !== r && 39 !== r) || s) &&
                ((33 !== r && 37 !== r) || !s)) ||
                this.slideNext(),
              (((33 !== r && 37 !== r) || s) &&
                ((34 !== r && 39 !== r) || !s)) ||
                this.slidePrev())
            : ((33 !== r && 34 !== r && 38 !== r && 40 !== r) ||
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (34 !== r && 40 !== r) || this.slideNext(),
              (33 !== r && 38 !== r) || this.slidePrev()),
            this.emit("keyPress", r);
        }
      },
      enable: function () {
        this.keyboard.enabled ||
          (s(e).on("keydown", this.keyboard.handle),
          (this.keyboard.enabled = !0));
      },
      disable: function () {
        this.keyboard.enabled &&
          (s(e).off("keydown", this.keyboard.handle),
          (this.keyboard.enabled = !1));
      },
    },
    te = {
      name: "keyboard",
      params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
      create: function () {
        n.extend(this, {
          keyboard: {
            enabled: !1,
            enable: ee.enable.bind(this),
            disable: ee.disable.bind(this),
            handle: ee.handle.bind(this),
          },
        });
      },
      on: {
        init: function () {
          this.params.keyboard.enabled && this.keyboard.enable();
        },
        destroy: function () {
          this.keyboard.enabled && this.keyboard.disable();
        },
      },
    };
  var ie = {
      lastScrollTime: n.now(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function () {
        return t.navigator.userAgent.indexOf("firefox") > -1
          ? "DOMMouseScroll"
          : (function () {
              var t = "onwheel" in e;
              if (!t) {
                var i = e.createElement("div");
                i.setAttribute("onwheel", "return;"),
                  (t = "function" == typeof i.onwheel);
              }
              return (
                !t &&
                  e.implementation &&
                  e.implementation.hasFeature &&
                  !0 !== e.implementation.hasFeature("", "") &&
                  (t = e.implementation.hasFeature("Events.wheel", "3.0")),
                t
              );
            })()
          ? "wheel"
          : "mousewheel";
      },
      normalize: function (e) {
        var t = 0,
          i = 0,
          s = 0,
          a = 0;
        return (
          "detail" in e && (i = e.detail),
          "wheelDelta" in e && (i = -e.wheelDelta / 120),
          "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
          "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
          "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
          (s = 10 * t),
          (a = 10 * i),
          "deltaY" in e && (a = e.deltaY),
          "deltaX" in e && (s = e.deltaX),
          e.shiftKey && !s && ((s = a), (a = 0)),
          (s || a) &&
            e.deltaMode &&
            (1 === e.deltaMode
              ? ((s *= 40), (a *= 40))
              : ((s *= 800), (a *= 800))),
          s && !t && (t = s < 1 ? -1 : 1),
          a && !i && (i = a < 1 ? -1 : 1),
          { spinX: t, spinY: i, pixelX: s, pixelY: a }
        );
      },
      handleMouseEnter: function () {
        this.mouseEntered = !0;
      },
      handleMouseLeave: function () {
        this.mouseEntered = !1;
      },
      handle: function (e) {
        var t = e,
          i = this,
          a = i.params.mousewheel;
        i.params.cssMode && t.preventDefault();
        var r = i.$el;
        if (
          ("container" !== i.params.mousewheel.eventsTarged &&
            (r = s(i.params.mousewheel.eventsTarged)),
          !i.mouseEntered && !r[0].contains(t.target) && !a.releaseOnEdges)
        )
          return !0;
        t.originalEvent && (t = t.originalEvent);
        var o = 0,
          l = i.rtlTranslate ? -1 : 1,
          d = ie.normalize(t);
        if (a.forceToAxis)
          if (i.isHorizontal()) {
            if (!(Math.abs(d.pixelX) > Math.abs(d.pixelY))) return !0;
            o = d.pixelX * l;
          } else {
            if (!(Math.abs(d.pixelY) > Math.abs(d.pixelX))) return !0;
            o = d.pixelY;
          }
        else
          o =
            Math.abs(d.pixelX) > Math.abs(d.pixelY) ? -d.pixelX * l : -d.pixelY;
        if (0 === o) return !0;
        if ((a.invert && (o = -o), i.params.freeMode)) {
          var h = {
              time: n.now(),
              delta: Math.abs(o),
              direction: Math.sign(o),
            },
            p = i.mousewheel.lastEventBeforeSnap,
            c =
              p &&
              h.time < p.time + 500 &&
              h.delta <= p.delta &&
              h.direction === p.direction;
          if (!c) {
            (i.mousewheel.lastEventBeforeSnap = void 0),
              i.params.loop && i.loopFix();
            var u = i.getTranslate() + o * a.sensitivity,
              v = i.isBeginning,
              f = i.isEnd;
            if (
              (u >= i.minTranslate() && (u = i.minTranslate()),
              u <= i.maxTranslate() && (u = i.maxTranslate()),
              i.setTransition(0),
              i.setTranslate(u),
              i.updateProgress(),
              i.updateActiveIndex(),
              i.updateSlidesClasses(),
              ((!v && i.isBeginning) || (!f && i.isEnd)) &&
                i.updateSlidesClasses(),
              i.params.freeModeSticky)
            ) {
              clearTimeout(i.mousewheel.timeout),
                (i.mousewheel.timeout = void 0);
              var m = i.mousewheel.recentWheelEvents;
              m.length >= 15 && m.shift();
              var g = m.length ? m[m.length - 1] : void 0,
                b = m[0];
              if (
                (m.push(h),
                g && (h.delta > g.delta || h.direction !== g.direction))
              )
                m.splice(0);
              else if (
                m.length >= 15 &&
                h.time - b.time < 500 &&
                b.delta - h.delta >= 1 &&
                h.delta <= 6
              ) {
                var w = o > 0 ? 0.8 : 0.2;
                (i.mousewheel.lastEventBeforeSnap = h),
                  m.splice(0),
                  (i.mousewheel.timeout = n.nextTick(function () {
                    i.slideToClosest(i.params.speed, !0, void 0, w);
                  }, 0));
              }
              i.mousewheel.timeout ||
                (i.mousewheel.timeout = n.nextTick(function () {
                  (i.mousewheel.lastEventBeforeSnap = h),
                    m.splice(0),
                    i.slideToClosest(i.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (c || i.emit("scroll", t),
              i.params.autoplay &&
                i.params.autoplayDisableOnInteraction &&
                i.autoplay.stop(),
              u === i.minTranslate() || u === i.maxTranslate())
            )
              return !0;
          }
        } else {
          var y = {
              time: n.now(),
              delta: Math.abs(o),
              direction: Math.sign(o),
              raw: e,
            },
            x = i.mousewheel.recentWheelEvents;
          x.length >= 2 && x.shift();
          var T = x.length ? x[x.length - 1] : void 0;
          if (
            (x.push(y),
            T
              ? (y.direction !== T.direction || y.delta > T.delta) &&
                i.mousewheel.animateSlider(y)
              : i.mousewheel.animateSlider(y),
            i.mousewheel.releaseScroll(y))
          )
            return !0;
        }
        return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
      },
      animateSlider: function (e) {
        return (
          (e.delta >= 6 && n.now() - this.mousewheel.lastScrollTime < 60) ||
          (e.direction < 0
            ? (this.isEnd && !this.params.loop) ||
              this.animating ||
              (this.slideNext(), this.emit("scroll", e.raw))
            : (this.isBeginning && !this.params.loop) ||
              this.animating ||
              (this.slidePrev(), this.emit("scroll", e.raw)),
          (this.mousewheel.lastScrollTime = new t.Date().getTime()),
          !1)
        );
      },
      releaseScroll: function (e) {
        var t = this.params.mousewheel;
        if (e.direction < 0) {
          if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
        } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges)
          return !0;
        return !1;
      },
      enable: function () {
        var e = ie.event();
        if (this.params.cssMode)
          return (
            this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0
          );
        if (!e) return !1;
        if (this.mousewheel.enabled) return !1;
        var t = this.$el;
        return (
          "container" !== this.params.mousewheel.eventsTarged &&
            (t = s(this.params.mousewheel.eventsTarged)),
          t.on("mouseenter", this.mousewheel.handleMouseEnter),
          t.on("mouseleave", this.mousewheel.handleMouseLeave),
          t.on(e, this.mousewheel.handle),
          (this.mousewheel.enabled = !0),
          !0
        );
      },
      disable: function () {
        var e = ie.event();
        if (this.params.cssMode)
          return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
        if (!e) return !1;
        if (!this.mousewheel.enabled) return !1;
        var t = this.$el;
        return (
          "container" !== this.params.mousewheel.eventsTarged &&
            (t = s(this.params.mousewheel.eventsTarged)),
          t.off(e, this.mousewheel.handle),
          (this.mousewheel.enabled = !1),
          !0
        );
      },
    },
    se = {
      update: function () {
        var e = this.params.navigation;
        if (!this.params.loop) {
          var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
          s &&
            s.length > 0 &&
            (this.isBeginning
              ? s.addClass(e.disabledClass)
              : s.removeClass(e.disabledClass),
            s[
              this.params.watchOverflow && this.isLocked
                ? "addClass"
                : "removeClass"
            ](e.lockClass)),
            i &&
              i.length > 0 &&
              (this.isEnd
                ? i.addClass(e.disabledClass)
                : i.removeClass(e.disabledClass),
              i[
                this.params.watchOverflow && this.isLocked
                  ? "addClass"
                  : "removeClass"
              ](e.lockClass));
        }
      },
      onPrevClick: function (e) {
        e.preventDefault(),
          (this.isBeginning && !this.params.loop) || this.slidePrev();
      },
      onNextClick: function (e) {
        e.preventDefault(),
          (this.isEnd && !this.params.loop) || this.slideNext();
      },
      init: function () {
        var e,
          t,
          i = this.params.navigation;
        (i.nextEl || i.prevEl) &&
          (i.nextEl &&
            ((e = s(i.nextEl)),
            this.params.uniqueNavElements &&
              "string" == typeof i.nextEl &&
              e.length > 1 &&
              1 === this.$el.find(i.nextEl).length &&
              (e = this.$el.find(i.nextEl))),
          i.prevEl &&
            ((t = s(i.prevEl)),
            this.params.uniqueNavElements &&
              "string" == typeof i.prevEl &&
              t.length > 1 &&
              1 === this.$el.find(i.prevEl).length &&
              (t = this.$el.find(i.prevEl))),
          e && e.length > 0 && e.on("click", this.navigation.onNextClick),
          t && t.length > 0 && t.on("click", this.navigation.onPrevClick),
          n.extend(this.navigation, {
            $nextEl: e,
            nextEl: e && e[0],
            $prevEl: t,
            prevEl: t && t[0],
          }));
      },
      destroy: function () {
        var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;
        t &&
          t.length &&
          (t.off("click", this.navigation.onNextClick),
          t.removeClass(this.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off("click", this.navigation.onPrevClick),
            i.removeClass(this.params.navigation.disabledClass));
      },
    },
    ae = {
      update: function () {
        var e = this.rtl,
          t = this.params.pagination;
        if (
          t.el &&
          this.pagination.el &&
          this.pagination.$el &&
          0 !== this.pagination.$el.length
        ) {
          var i,
            a =
              this.virtual && this.params.virtual.enabled
                ? this.virtual.slides.length
                : this.slides.length,
            r = this.pagination.$el,
            n = this.params.loop
              ? Math.ceil(
                  (a - 2 * this.loopedSlides) / this.params.slidesPerGroup
                )
              : this.snapGrid.length;
          if (
            (this.params.loop
              ? ((i = Math.ceil(
                  (this.activeIndex - this.loopedSlides) /
                    this.params.slidesPerGroup
                )) >
                  a - 1 - 2 * this.loopedSlides &&
                  (i -= a - 2 * this.loopedSlides),
                i > n - 1 && (i -= n),
                i < 0 &&
                  "bullets" !== this.params.paginationType &&
                  (i = n + i))
              : (i =
                  void 0 !== this.snapIndex
                    ? this.snapIndex
                    : this.activeIndex || 0),
            "bullets" === t.type &&
              this.pagination.bullets &&
              this.pagination.bullets.length > 0)
          ) {
            var o,
              l,
              d,
              h = this.pagination.bullets;
            if (
              (t.dynamicBullets &&
                ((this.pagination.bulletSize = h
                  .eq(0)
                  [this.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                r.css(
                  this.isHorizontal() ? "width" : "height",
                  this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px"
                ),
                t.dynamicMainBullets > 1 &&
                  void 0 !== this.previousIndex &&
                  ((this.pagination.dynamicBulletIndex +=
                    i - this.previousIndex),
                  this.pagination.dynamicBulletIndex > t.dynamicMainBullets - 1
                    ? (this.pagination.dynamicBulletIndex =
                        t.dynamicMainBullets - 1)
                    : this.pagination.dynamicBulletIndex < 0 &&
                      (this.pagination.dynamicBulletIndex = 0)),
                (o = i - this.pagination.dynamicBulletIndex),
                (d =
                  ((l = o + (Math.min(h.length, t.dynamicMainBullets) - 1)) +
                    o) /
                  2)),
              h.removeClass(
                t.bulletActiveClass +
                  " " +
                  t.bulletActiveClass +
                  "-next " +
                  t.bulletActiveClass +
                  "-next-next " +
                  t.bulletActiveClass +
                  "-prev " +
                  t.bulletActiveClass +
                  "-prev-prev " +
                  t.bulletActiveClass +
                  "-main"
              ),
              r.length > 1)
            )
              h.each(function (e, a) {
                var r = s(a),
                  n = r.index();
                n === i && r.addClass(t.bulletActiveClass),
                  t.dynamicBullets &&
                    (n >= o &&
                      n <= l &&
                      r.addClass(t.bulletActiveClass + "-main"),
                    n === o &&
                      r
                        .prev()
                        .addClass(t.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(t.bulletActiveClass + "-prev-prev"),
                    n === l &&
                      r
                        .next()
                        .addClass(t.bulletActiveClass + "-next")
                        .next()
                        .addClass(t.bulletActiveClass + "-next-next"));
              });
            else {
              var p = h.eq(i),
                c = p.index();
              if ((p.addClass(t.bulletActiveClass), t.dynamicBullets)) {
                for (var u = h.eq(o), v = h.eq(l), f = o; f <= l; f += 1)
                  h.eq(f).addClass(t.bulletActiveClass + "-main");
                if (this.params.loop)
                  if (c >= h.length - t.dynamicMainBullets) {
                    for (var m = t.dynamicMainBullets; m >= 0; m -= 1)
                      h.eq(h.length - m).addClass(
                        t.bulletActiveClass + "-main"
                      );
                    h.eq(h.length - t.dynamicMainBullets - 1).addClass(
                      t.bulletActiveClass + "-prev"
                    );
                  } else
                    u
                      .prev()
                      .addClass(t.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(t.bulletActiveClass + "-prev-prev"),
                      v
                        .next()
                        .addClass(t.bulletActiveClass + "-next")
                        .next()
                        .addClass(t.bulletActiveClass + "-next-next");
                else
                  u
                    .prev()
                    .addClass(t.bulletActiveClass + "-prev")
                    .prev()
                    .addClass(t.bulletActiveClass + "-prev-prev"),
                    v
                      .next()
                      .addClass(t.bulletActiveClass + "-next")
                      .next()
                      .addClass(t.bulletActiveClass + "-next-next");
              }
            }
            if (t.dynamicBullets) {
              var g = Math.min(h.length, t.dynamicMainBullets + 4),
                b =
                  (this.pagination.bulletSize * g -
                    this.pagination.bulletSize) /
                    2 -
                  d * this.pagination.bulletSize,
                w = e ? "right" : "left";
              h.css(this.isHorizontal() ? w : "top", b + "px");
            }
          }
          if (
            ("fraction" === t.type &&
              (r
                .find("." + t.currentClass)
                .text(t.formatFractionCurrent(i + 1)),
              r.find("." + t.totalClass).text(t.formatFractionTotal(n))),
            "progressbar" === t.type)
          ) {
            var y;
            y = t.progressbarOpposite
              ? this.isHorizontal()
                ? "vertical"
                : "horizontal"
              : this.isHorizontal()
              ? "horizontal"
              : "vertical";
            var x = (i + 1) / n,
              T = 1,
              E = 1;
            "horizontal" === y ? (T = x) : (E = x),
              r
                .find("." + t.progressbarFillClass)
                .transform(
                  "translate3d(0,0,0) scaleX(" + T + ") scaleY(" + E + ")"
                )
                .transition(this.params.speed);
          }
          "custom" === t.type && t.renderCustom
            ? (r.html(t.renderCustom(this, i + 1, n)),
              this.emit("paginationRender", this, r[0]))
            : this.emit("paginationUpdate", this, r[0]),
            r[
              this.params.watchOverflow && this.isLocked
                ? "addClass"
                : "removeClass"
            ](t.lockClass);
        }
      },
      render: function () {
        var e = this.params.pagination;
        if (
          e.el &&
          this.pagination.el &&
          this.pagination.$el &&
          0 !== this.pagination.$el.length
        ) {
          var t =
              this.virtual && this.params.virtual.enabled
                ? this.virtual.slides.length
                : this.slides.length,
            i = this.pagination.$el,
            s = "";
          if ("bullets" === e.type) {
            for (
              var a = this.params.loop
                  ? Math.ceil(
                      (t - 2 * this.loopedSlides) / this.params.slidesPerGroup
                    )
                  : this.snapGrid.length,
                r = 0;
              r < a;
              r += 1
            )
              e.renderBullet
                ? (s += e.renderBullet.call(this, r, e.bulletClass))
                : (s +=
                    "<" +
                    e.bulletElement +
                    ' class="' +
                    e.bulletClass +
                    '"></' +
                    e.bulletElement +
                    ">");
            i.html(s), (this.pagination.bullets = i.find("." + e.bulletClass));
          }
          "fraction" === e.type &&
            ((s = e.renderFraction
              ? e.renderFraction.call(this, e.currentClass, e.totalClass)
              : '<span class="' +
                e.currentClass +
                '"></span> / <span class="' +
                e.totalClass +
                '"></span>'),
            i.html(s)),
            "progressbar" === e.type &&
              ((s = e.renderProgressbar
                ? e.renderProgressbar.call(this, e.progressbarFillClass)
                : '<span class="' + e.progressbarFillClass + '"></span>'),
              i.html(s)),
            "custom" !== e.type &&
              this.emit("paginationRender", this.pagination.$el[0]);
        }
      },
      init: function () {
        var e = this,
          t = e.params.pagination;
        if (t.el) {
          var i = s(t.el);
          0 !== i.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              i.length > 1 &&
              1 === e.$el.find(t.el).length &&
              (i = e.$el.find(t.el)),
            "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
            i.addClass(t.modifierClass + t.type),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (i.addClass("" + t.modifierClass + t.type + "-dynamic"),
              (e.pagination.dynamicBulletIndex = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              i.addClass(t.progressbarOppositeClass),
            t.clickable &&
              i.on("click", "." + t.bulletClass, function (t) {
                t.preventDefault();
                var i = s(this).index() * e.params.slidesPerGroup;
                e.params.loop && (i += e.loopedSlides), e.slideTo(i);
              }),
            n.extend(e.pagination, { $el: i, el: i[0] }));
        }
      },
      destroy: function () {
        var e = this.params.pagination;
        if (
          e.el &&
          this.pagination.el &&
          this.pagination.$el &&
          0 !== this.pagination.$el.length
        ) {
          var t = this.pagination.$el;
          t.removeClass(e.hiddenClass),
            t.removeClass(e.modifierClass + e.type),
            this.pagination.bullets &&
              this.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && t.off("click", "." + e.bulletClass);
        }
      },
    },
    re = {
      setTranslate: function () {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = this.rtlTranslate,
            i = this.progress,
            s = e.dragSize,
            a = e.trackSize,
            r = e.$dragEl,
            n = e.$el,
            o = this.params.scrollbar,
            l = s,
            d = (a - s) * i;
          t
            ? (d = -d) > 0
              ? ((l = s - d), (d = 0))
              : -d + s > a && (l = a + d)
            : d < 0
            ? ((l = s + d), (d = 0))
            : d + s > a && (l = a - d),
            this.isHorizontal()
              ? (r.transform("translate3d(" + d + "px, 0, 0)"),
                (r[0].style.width = l + "px"))
              : (r.transform("translate3d(0px, " + d + "px, 0)"),
                (r[0].style.height = l + "px")),
            o.hide &&
              (clearTimeout(this.scrollbar.timeout),
              (n[0].style.opacity = 1),
              (this.scrollbar.timeout = setTimeout(function () {
                (n[0].style.opacity = 0), n.transition(400);
              }, 1e3)));
        }
      },
      setTransition: function (e) {
        this.params.scrollbar.el &&
          this.scrollbar.el &&
          this.scrollbar.$dragEl.transition(e);
      },
      updateSize: function () {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = e.$dragEl,
            i = e.$el;
          (t[0].style.width = ""), (t[0].style.height = "");
          var s,
            a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = this.size / this.virtualSize,
            o = r * (a / this.size);
          (s =
            "auto" === this.params.scrollbar.dragSize
              ? a * r
              : parseInt(this.params.scrollbar.dragSize, 10)),
            this.isHorizontal()
              ? (t[0].style.width = s + "px")
              : (t[0].style.height = s + "px"),
            (i[0].style.display = r >= 1 ? "none" : ""),
            this.params.scrollbar.hide && (i[0].style.opacity = 0),
            n.extend(e, {
              trackSize: a,
              divider: r,
              moveDivider: o,
              dragSize: s,
            }),
            e.$el[
              this.params.watchOverflow && this.isLocked
                ? "addClass"
                : "removeClass"
            ](this.params.scrollbar.lockClass);
        }
      },
      getPointerPosition: function (e) {
        return this.isHorizontal()
          ? "touchstart" === e.type || "touchmove" === e.type
            ? e.targetTouches[0].clientX
            : e.clientX
          : "touchstart" === e.type || "touchmove" === e.type
          ? e.targetTouches[0].clientY
          : e.clientY;
      },
      setDragPosition: function (e) {
        var t,
          i = this.scrollbar,
          s = this.rtlTranslate,
          a = i.$el,
          r = i.dragSize,
          n = i.trackSize,
          o = i.dragStartPos;
        (t =
          (i.getPointerPosition(e) -
            a.offset()[this.isHorizontal() ? "left" : "top"] -
            (null !== o ? o : r / 2)) /
          (n - r)),
          (t = Math.max(Math.min(t, 1), 0)),
          s && (t = 1 - t);
        var l =
          this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
        this.updateProgress(l),
          this.setTranslate(l),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
      },
      onDragStart: function (e) {
        var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;
        (this.scrollbar.isTouched = !0),
          (this.scrollbar.dragStartPos =
            e.target === r[0] || e.target === r
              ? i.getPointerPosition(e) -
                e.target.getBoundingClientRect()[
                  this.isHorizontal() ? "left" : "top"
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          s.transition(100),
          r.transition(100),
          i.setDragPosition(e),
          clearTimeout(this.scrollbar.dragTimeout),
          a.transition(0),
          t.hide && a.css("opacity", 1),
          this.params.cssMode &&
            this.$wrapperEl.css("scroll-snap-type", "none"),
          this.emit("scrollbarDragStart", e);
      },
      onDragMove: function (e) {
        var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;
        this.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          t.setDragPosition(e),
          i.transition(0),
          s.transition(0),
          a.transition(0),
          this.emit("scrollbarDragMove", e));
      },
      onDragEnd: function (e) {
        var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el;
        this.scrollbar.isTouched &&
          ((this.scrollbar.isTouched = !1),
          this.params.cssMode &&
            (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")),
          t.hide &&
            (clearTimeout(this.scrollbar.dragTimeout),
            (this.scrollbar.dragTimeout = n.nextTick(function () {
              a.css("opacity", 0), a.transition(400);
            }, 1e3))),
          this.emit("scrollbarDragEnd", e),
          t.snapOnRelease && this.slideToClosest());
      },
      enableDraggable: function () {
        if (this.params.scrollbar.el) {
          var t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            r = t.$el[0],
            n = !(!o.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            l = !(!o.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          o.touch
            ? (r.addEventListener(i.start, this.scrollbar.onDragStart, n),
              r.addEventListener(i.move, this.scrollbar.onDragMove, n),
              r.addEventListener(i.end, this.scrollbar.onDragEnd, l))
            : (r.addEventListener(s.start, this.scrollbar.onDragStart, n),
              e.addEventListener(s.move, this.scrollbar.onDragMove, n),
              e.addEventListener(s.end, this.scrollbar.onDragEnd, l));
        }
      },
      disableDraggable: function () {
        if (this.params.scrollbar.el) {
          var t = this.scrollbar,
            i = this.touchEventsTouch,
            s = this.touchEventsDesktop,
            a = this.params,
            r = t.$el[0],
            n = !(!o.passiveListener || !a.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            l = !(!o.passiveListener || !a.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          o.touch
            ? (r.removeEventListener(i.start, this.scrollbar.onDragStart, n),
              r.removeEventListener(i.move, this.scrollbar.onDragMove, n),
              r.removeEventListener(i.end, this.scrollbar.onDragEnd, l))
            : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n),
              e.removeEventListener(s.move, this.scrollbar.onDragMove, n),
              e.removeEventListener(s.end, this.scrollbar.onDragEnd, l));
        }
      },
      init: function () {
        if (this.params.scrollbar.el) {
          var e = this.scrollbar,
            t = this.$el,
            i = this.params.scrollbar,
            a = s(i.el);
          this.params.uniqueNavElements &&
            "string" == typeof i.el &&
            a.length > 1 &&
            1 === t.find(i.el).length &&
            (a = t.find(i.el));
          var r = a.find("." + this.params.scrollbar.dragClass);
          0 === r.length &&
            ((r = s(
              '<div class="' + this.params.scrollbar.dragClass + '"></div>'
            )),
            a.append(r)),
            n.extend(e, { $el: a, el: a[0], $dragEl: r, dragEl: r[0] }),
            i.draggable && e.enableDraggable();
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable();
      },
    },
    ne = {
      setTransform: function (e, t) {
        var i = this.rtl,
          a = s(e),
          r = i ? -1 : 1,
          n = a.attr("data-swiper-parallax") || "0",
          o = a.attr("data-swiper-parallax-x"),
          l = a.attr("data-swiper-parallax-y"),
          d = a.attr("data-swiper-parallax-scale"),
          h = a.attr("data-swiper-parallax-opacity");
        if (
          (o || l
            ? ((o = o || "0"), (l = l || "0"))
            : this.isHorizontal()
            ? ((o = n), (l = "0"))
            : ((l = n), (o = "0")),
          (o =
            o.indexOf("%") >= 0
              ? parseInt(o, 10) * t * r + "%"
              : o * t * r + "px"),
          (l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px"),
          null != h)
        ) {
          var p = h - (h - 1) * (1 - Math.abs(t));
          a[0].style.opacity = p;
        }
        if (null == d) a.transform("translate3d(" + o + ", " + l + ", 0px)");
        else {
          var c = d - (d - 1) * (1 - Math.abs(t));
          a.transform(
            "translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")"
          );
        }
      },
      setTranslate: function () {
        var e = this,
          t = e.$el,
          i = e.slides,
          a = e.progress,
          r = e.snapGrid;
        t
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function (t, i) {
            e.parallax.setTransform(i, a);
          }),
          i.each(function (t, i) {
            var n = i.progress;
            e.params.slidesPerGroup > 1 &&
              "auto" !== e.params.slidesPerView &&
              (n += Math.ceil(t / 2) - a * (r.length - 1)),
              (n = Math.min(Math.max(n, -1), 1)),
              s(i)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                )
                .each(function (t, i) {
                  e.parallax.setTransform(i, n);
                });
          });
      },
      setTransition: function (e) {
        void 0 === e && (e = this.params.speed);
        this.$el
          .find(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function (t, i) {
            var a = s(i),
              r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
            0 === e && (r = 0), a.transition(r);
          });
      },
    },
    oe = {
      getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
      },
      onGestureStart: function (e) {
        var t = this.params.zoom,
          i = this.zoom,
          a = i.gesture;
        if (
          ((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !o.gestures)
        ) {
          if (
            "touchstart" !== e.type ||
            ("touchstart" === e.type && e.targetTouches.length < 2)
          )
            return;
          (i.fakeGestureTouched = !0),
            (a.scaleStart = oe.getDistanceBetweenTouches(e));
        }
        (a.$slideEl && a.$slideEl.length) ||
        ((a.$slideEl = s(e.target).closest("." + this.params.slideClass)),
        0 === a.$slideEl.length &&
          (a.$slideEl = this.slides.eq(this.activeIndex)),
        (a.$imageEl = a.$slideEl.find(
          "img, svg, canvas, picture, .swiper-zoom-target"
        )),
        (a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass)),
        (a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio),
        0 !== a.$imageWrapEl.length)
          ? (a.$imageEl.transition(0), (this.zoom.isScaling = !0))
          : (a.$imageEl = void 0);
      },
      onGestureChange: function (e) {
        var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;
        if (!o.gestures) {
          if (
            "touchmove" !== e.type ||
            ("touchmove" === e.type && e.targetTouches.length < 2)
          )
            return;
          (i.fakeGestureMoved = !0),
            (s.scaleMove = oe.getDistanceBetweenTouches(e));
        }
        s.$imageEl &&
          0 !== s.$imageEl.length &&
          (o.gestures
            ? (i.scale = e.scale * i.currentScale)
            : (i.scale = (s.scaleMove / s.scaleStart) * i.currentScale),
          i.scale > s.maxRatio &&
            (i.scale =
              s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, 0.5)),
          i.scale < t.minRatio &&
            (i.scale =
              t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)),
          s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
      },
      onGestureEnd: function (e) {
        var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;
        if (!o.gestures) {
          if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
          if (
            "touchend" !== e.type ||
            ("touchend" === e.type && e.changedTouches.length < 2 && !I.android)
          )
            return;
          (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
        }
        s.$imageEl &&
          0 !== s.$imageEl.length &&
          ((i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio)),
          s.$imageEl
            .transition(this.params.speed)
            .transform("translate3d(0,0,0) scale(" + i.scale + ")"),
          (i.currentScale = i.scale),
          (i.isScaling = !1),
          1 === i.scale && (s.$slideEl = void 0));
      },
      onTouchStart: function (e) {
        var t = this.zoom,
          i = t.gesture,
          s = t.image;
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          (s.isTouched ||
            (I.android && e.preventDefault(),
            (s.isTouched = !0),
            (s.touchesStart.x =
              "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
            (s.touchesStart.y =
              "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
      },
      onTouchMove: function (e) {
        var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;
        if (
          i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((this.allowClick = !1), s.isTouched && i.$slideEl)
        ) {
          s.isMoved ||
            ((s.width = i.$imageEl[0].offsetWidth),
            (s.height = i.$imageEl[0].offsetHeight),
            (s.startX = n.getTranslate(i.$imageWrapEl[0], "x") || 0),
            (s.startY = n.getTranslate(i.$imageWrapEl[0], "y") || 0),
            (i.slideWidth = i.$slideEl[0].offsetWidth),
            (i.slideHeight = i.$slideEl[0].offsetHeight),
            i.$imageWrapEl.transition(0),
            this.rtl && ((s.startX = -s.startX), (s.startY = -s.startY)));
          var r = s.width * t.scale,
            o = s.height * t.scale;
          if (!(r < i.slideWidth && o < i.slideHeight)) {
            if (
              ((s.minX = Math.min(i.slideWidth / 2 - r / 2, 0)),
              (s.maxX = -s.minX),
              (s.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
              (s.maxY = -s.minY),
              (s.touchesCurrent.x =
                "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (s.touchesCurrent.y =
                "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
              !s.isMoved && !t.isScaling)
            ) {
              if (
                this.isHorizontal() &&
                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                  s.touchesCurrent.x < s.touchesStart.x) ||
                  (Math.floor(s.maxX) === Math.floor(s.startX) &&
                    s.touchesCurrent.x > s.touchesStart.x))
              )
                return void (s.isTouched = !1);
              if (
                !this.isHorizontal() &&
                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                  s.touchesCurrent.y < s.touchesStart.y) ||
                  (Math.floor(s.maxY) === Math.floor(s.startY) &&
                    s.touchesCurrent.y > s.touchesStart.y))
              )
                return void (s.isTouched = !1);
            }
            e.preventDefault(),
              e.stopPropagation(),
              (s.isMoved = !0),
              (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
              (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
              s.currentX < s.minX &&
                (s.currentX =
                  s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
              s.currentX > s.maxX &&
                (s.currentX =
                  s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
              s.currentY < s.minY &&
                (s.currentY =
                  s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
              s.currentY > s.maxY &&
                (s.currentY =
                  s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
              a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
              a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
              a.prevTime || (a.prevTime = Date.now()),
              (a.x =
                (s.touchesCurrent.x - a.prevPositionX) /
                (Date.now() - a.prevTime) /
                2),
              (a.y =
                (s.touchesCurrent.y - a.prevPositionY) /
                (Date.now() - a.prevTime) /
                2),
              Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
              Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
              (a.prevPositionX = s.touchesCurrent.x),
              (a.prevPositionY = s.touchesCurrent.y),
              (a.prevTime = Date.now()),
              i.$imageWrapEl.transform(
                "translate3d(" + s.currentX + "px, " + s.currentY + "px,0)"
              );
          }
        }
      },
      onTouchEnd: function () {
        var e = this.zoom,
          t = e.gesture,
          i = e.image,
          s = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!i.isTouched || !i.isMoved)
            return (i.isTouched = !1), void (i.isMoved = !1);
          (i.isTouched = !1), (i.isMoved = !1);
          var a = 300,
            r = 300,
            n = s.x * a,
            o = i.currentX + n,
            l = s.y * r,
            d = i.currentY + l;
          0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)),
            0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
          var h = Math.max(a, r);
          (i.currentX = o), (i.currentY = d);
          var p = i.width * e.scale,
            c = i.height * e.scale;
          (i.minX = Math.min(t.slideWidth / 2 - p / 2, 0)),
            (i.maxX = -i.minX),
            (i.minY = Math.min(t.slideHeight / 2 - c / 2, 0)),
            (i.maxY = -i.minY),
            (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
            (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
            t.$imageWrapEl
              .transition(h)
              .transform(
                "translate3d(" + i.currentX + "px, " + i.currentY + "px,0)"
              );
        }
      },
      onTransitionEnd: function () {
        var e = this.zoom,
          t = e.gesture;
        t.$slideEl &&
          this.previousIndex !== this.activeIndex &&
          (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          t.$imageWrapEl.transform("translate3d(0,0,0)"),
          (e.scale = 1),
          (e.currentScale = 1),
          (t.$slideEl = void 0),
          (t.$imageEl = void 0),
          (t.$imageWrapEl = void 0));
      },
      toggle: function (e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in: function (e) {
        var t,
          i,
          s,
          a,
          r,
          n,
          o,
          l,
          d,
          h,
          p,
          c,
          u,
          v,
          f,
          m,
          g = this.zoom,
          b = this.params.zoom,
          w = g.gesture,
          y = g.image;
        (w.$slideEl ||
          ((w.$slideEl = this.slides.eq(this.activeIndex)),
          (w.$imageEl = w.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass))),
        w.$imageEl && 0 !== w.$imageEl.length) &&
          (w.$slideEl.addClass("" + b.zoomedSlideClass),
          void 0 === y.touchesStart.x && e
            ? ((t =
                "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
              (i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
            : ((t = y.touchesStart.x), (i = y.touchesStart.y)),
          (g.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio),
          (g.currentScale =
            w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio),
          e
            ? ((f = w.$slideEl[0].offsetWidth),
              (m = w.$slideEl[0].offsetHeight),
              (s = w.$slideEl.offset().left + f / 2 - t),
              (a = w.$slideEl.offset().top + m / 2 - i),
              (o = w.$imageEl[0].offsetWidth),
              (l = w.$imageEl[0].offsetHeight),
              (d = o * g.scale),
              (h = l * g.scale),
              (u = -(p = Math.min(f / 2 - d / 2, 0))),
              (v = -(c = Math.min(m / 2 - h / 2, 0))),
              (r = s * g.scale) < p && (r = p),
              r > u && (r = u),
              (n = a * g.scale) < c && (n = c),
              n > v && (n = v))
            : ((r = 0), (n = 0)),
          w.$imageWrapEl
            .transition(300)
            .transform("translate3d(" + r + "px, " + n + "px,0)"),
          w.$imageEl
            .transition(300)
            .transform("translate3d(0,0,0) scale(" + g.scale + ")"));
      },
      out: function () {
        var e = this.zoom,
          t = this.params.zoom,
          i = e.gesture;
        i.$slideEl ||
          ((i.$slideEl = this.slides.eq(this.activeIndex)),
          (i.$imageEl = i.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass))),
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            ((e.scale = 1),
            (e.currentScale = 1),
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + t.zoomedSlideClass),
            (i.$slideEl = void 0));
      },
      enable: function () {
        var e = this.zoom;
        if (!e.enabled) {
          e.enabled = !0;
          var t = !(
              "touchstart" !== this.touchEvents.start ||
              !o.passiveListener ||
              !this.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            i = !o.passiveListener || { passive: !1, capture: !0 },
            s = "." + this.params.slideClass;
          o.gestures
            ? (this.$wrapperEl.on("gesturestart", s, e.onGestureStart, t),
              this.$wrapperEl.on("gesturechange", s, e.onGestureChange, t),
              this.$wrapperEl.on("gestureend", s, e.onGestureEnd, t))
            : "touchstart" === this.touchEvents.start &&
              (this.$wrapperEl.on(
                this.touchEvents.start,
                s,
                e.onGestureStart,
                t
              ),
              this.$wrapperEl.on(
                this.touchEvents.move,
                s,
                e.onGestureChange,
                i
              ),
              this.$wrapperEl.on(this.touchEvents.end, s, e.onGestureEnd, t),
              this.touchEvents.cancel &&
                this.$wrapperEl.on(
                  this.touchEvents.cancel,
                  s,
                  e.onGestureEnd,
                  t
                )),
            this.$wrapperEl.on(
              this.touchEvents.move,
              "." + this.params.zoom.containerClass,
              e.onTouchMove,
              i
            );
        }
      },
      disable: function () {
        var e = this.zoom;
        if (e.enabled) {
          this.zoom.enabled = !1;
          var t = !(
              "touchstart" !== this.touchEvents.start ||
              !o.passiveListener ||
              !this.params.passiveListeners
            ) && { passive: !0, capture: !1 },
            i = !o.passiveListener || { passive: !1, capture: !0 },
            s = "." + this.params.slideClass;
          o.gestures
            ? (this.$wrapperEl.off("gesturestart", s, e.onGestureStart, t),
              this.$wrapperEl.off("gesturechange", s, e.onGestureChange, t),
              this.$wrapperEl.off("gestureend", s, e.onGestureEnd, t))
            : "touchstart" === this.touchEvents.start &&
              (this.$wrapperEl.off(
                this.touchEvents.start,
                s,
                e.onGestureStart,
                t
              ),
              this.$wrapperEl.off(
                this.touchEvents.move,
                s,
                e.onGestureChange,
                i
              ),
              this.$wrapperEl.off(this.touchEvents.end, s, e.onGestureEnd, t),
              this.touchEvents.cancel &&
                this.$wrapperEl.off(
                  this.touchEvents.cancel,
                  s,
                  e.onGestureEnd,
                  t
                )),
            this.$wrapperEl.off(
              this.touchEvents.move,
              "." + this.params.zoom.containerClass,
              e.onTouchMove,
              i
            );
        }
      },
    },
    le = {
      loadInSlide: function (e, t) {
        void 0 === t && (t = !0);
        var i = this,
          a = i.params.lazy;
        if (void 0 !== e && 0 !== i.slides.length) {
          var r =
              i.virtual && i.params.virtual.enabled
                ? i.$wrapperEl.children(
                    "." +
                      i.params.slideClass +
                      '[data-swiper-slide-index="' +
                      e +
                      '"]'
                  )
                : i.slides.eq(e),
            n = r.find(
              "." +
                a.elementClass +
                ":not(." +
                a.loadedClass +
                "):not(." +
                a.loadingClass +
                ")"
            );
          !r.hasClass(a.elementClass) ||
            r.hasClass(a.loadedClass) ||
            r.hasClass(a.loadingClass) ||
            (n = n.add(r[0])),
            0 !== n.length &&
              n.each(function (e, n) {
                var o = s(n);
                o.addClass(a.loadingClass);
                var l = o.attr("data-background"),
                  d = o.attr("data-src"),
                  h = o.attr("data-srcset"),
                  p = o.attr("data-sizes");
                i.loadImage(o[0], d || l, h, p, !1, function () {
                  if (null != i && i && (!i || i.params) && !i.destroyed) {
                    if (
                      (l
                        ? (o.css("background-image", 'url("' + l + '")'),
                          o.removeAttr("data-background"))
                        : (h &&
                            (o.attr("srcset", h), o.removeAttr("data-srcset")),
                          p && (o.attr("sizes", p), o.removeAttr("data-sizes")),
                          d && (o.attr("src", d), o.removeAttr("data-src"))),
                      o.addClass(a.loadedClass).removeClass(a.loadingClass),
                      r.find("." + a.preloaderClass).remove(),
                      i.params.loop && t)
                    ) {
                      var e = r.attr("data-swiper-slide-index");
                      if (r.hasClass(i.params.slideDuplicateClass)) {
                        var s = i.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            i.params.slideDuplicateClass +
                            ")"
                        );
                        i.lazy.loadInSlide(s.index(), !1);
                      } else {
                        var n = i.$wrapperEl.children(
                          "." +
                            i.params.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]'
                        );
                        i.lazy.loadInSlide(n.index(), !1);
                      }
                    }
                    i.emit("lazyImageReady", r[0], o[0]),
                      i.params.autoHeight && i.updateAutoHeight();
                  }
                }),
                  i.emit("lazyImageLoad", r[0], o[0]);
              });
        }
      },
      load: function () {
        var e = this,
          t = e.$wrapperEl,
          i = e.params,
          a = e.slides,
          r = e.activeIndex,
          n = e.virtual && i.virtual.enabled,
          o = i.lazy,
          l = i.slidesPerView;
        function d(e) {
          if (n) {
            if (
              t.children(
                "." + i.slideClass + '[data-swiper-slide-index="' + e + '"]'
              ).length
            )
              return !0;
          } else if (a[e]) return !0;
          return !1;
        }
        function h(e) {
          return n ? s(e).attr("data-swiper-slide-index") : s(e).index();
        }
        if (
          ("auto" === l && (l = 0),
          e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
          e.params.watchSlidesVisibility)
        )
          t.children("." + i.slideVisibleClass).each(function (t, i) {
            var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
            e.lazy.loadInSlide(a);
          });
        else if (l > 1)
          for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p);
        else e.lazy.loadInSlide(r);
        if (o.loadPrevNext)
          if (l > 1 || (o.loadPrevNextAmount && o.loadPrevNextAmount > 1)) {
            for (
              var c = o.loadPrevNextAmount,
                u = l,
                v = Math.min(r + u + Math.max(c, u), a.length),
                f = Math.max(r - Math.max(u, c), 0),
                m = r + l;
              m < v;
              m += 1
            )
              d(m) && e.lazy.loadInSlide(m);
            for (var g = f; g < r; g += 1) d(g) && e.lazy.loadInSlide(g);
          } else {
            var b = t.children("." + i.slideNextClass);
            b.length > 0 && e.lazy.loadInSlide(h(b));
            var w = t.children("." + i.slidePrevClass);
            w.length > 0 && e.lazy.loadInSlide(h(w));
          }
      },
    },
    de = {
      LinearSpline: function (e, t) {
        var i,
          s,
          a,
          r,
          n,
          o = function (e, t) {
            for (s = -1, i = e.length; i - s > 1; )
              e[(a = (i + s) >> 1)] <= t ? (s = a) : (i = a);
            return i;
          };
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((n = o(this.x, e)),
                (r = n - 1),
                ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                  (this.x[n] - this.x[r]) +
                  this.y[r])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction: function (e) {
        this.controller.spline ||
          (this.controller.spline = this.params.loop
            ? new de.LinearSpline(this.slidesGrid, e.slidesGrid)
            : new de.LinearSpline(this.snapGrid, e.snapGrid));
      },
      setTranslate: function (e, t) {
        var i,
          s,
          a = this,
          r = a.controller.control;
        function n(e) {
          var t = a.rtlTranslate ? -a.translate : a.translate;
          "slide" === a.params.controller.by &&
            (a.controller.getInterpolateFunction(e),
            (s = -a.controller.spline.interpolate(-t))),
            (s && "container" !== a.params.controller.by) ||
              ((i =
                (e.maxTranslate() - e.minTranslate()) /
                (a.maxTranslate() - a.minTranslate())),
              (s = (t - a.minTranslate()) * i + e.minTranslate())),
            a.params.controller.inverse && (s = e.maxTranslate() - s),
            e.updateProgress(s),
            e.setTranslate(s, a),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        if (Array.isArray(r))
          for (var o = 0; o < r.length; o += 1)
            r[o] !== t && r[o] instanceof W && n(r[o]);
        else r instanceof W && t !== r && n(r);
      },
      setTransition: function (e, t) {
        var i,
          s = this,
          a = s.controller.control;
        function r(t) {
          t.setTransition(e, s),
            0 !== e &&
              (t.transitionStart(),
              t.params.autoHeight &&
                n.nextTick(function () {
                  t.updateAutoHeight();
                }),
              t.$wrapperEl.transitionEnd(function () {
                a &&
                  (t.params.loop &&
                    "slide" === s.params.controller.by &&
                    t.loopFix(),
                  t.transitionEnd());
              }));
        }
        if (Array.isArray(a))
          for (i = 0; i < a.length; i += 1)
            a[i] !== t && a[i] instanceof W && r(a[i]);
        else a instanceof W && t !== a && r(a);
      },
    },
    he = {
      makeElFocusable: function (e) {
        return e.attr("tabIndex", "0"), e;
      },
      addElRole: function (e, t) {
        return e.attr("role", t), e;
      },
      addElLabel: function (e, t) {
        return e.attr("aria-label", t), e;
      },
      disableEl: function (e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function (e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterKey: function (e) {
        var t = this.params.a11y;
        if (13 === e.keyCode) {
          var i = s(e.target);
          this.navigation &&
            this.navigation.$nextEl &&
            i.is(this.navigation.$nextEl) &&
            ((this.isEnd && !this.params.loop) || this.slideNext(),
            this.isEnd
              ? this.a11y.notify(t.lastSlideMessage)
              : this.a11y.notify(t.nextSlideMessage)),
            this.navigation &&
              this.navigation.$prevEl &&
              i.is(this.navigation.$prevEl) &&
              ((this.isBeginning && !this.params.loop) || this.slidePrev(),
              this.isBeginning
                ? this.a11y.notify(t.firstSlideMessage)
                : this.a11y.notify(t.prevSlideMessage)),
            this.pagination &&
              i.is("." + this.params.pagination.bulletClass) &&
              i[0].click();
        }
      },
      notify: function (e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function () {
        if (!this.params.loop && this.navigation) {
          var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
          i &&
            i.length > 0 &&
            (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)),
            t &&
              t.length > 0 &&
              (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t));
        }
      },
      updatePagination: function () {
        var e = this,
          t = e.params.a11y;
        e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length &&
          e.pagination.bullets.each(function (i, a) {
            var r = s(a);
            e.a11y.makeElFocusable(r),
              e.a11y.addElRole(r, "button"),
              e.a11y.addElLabel(
                r,
                t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1)
              );
          });
      },
      init: function () {
        this.$el.append(this.a11y.liveRegion);
        var e,
          t,
          i = this.params.a11y;
        this.navigation &&
          this.navigation.$nextEl &&
          (e = this.navigation.$nextEl),
          this.navigation &&
            this.navigation.$prevEl &&
            (t = this.navigation.$prevEl),
          e &&
            (this.a11y.makeElFocusable(e),
            this.a11y.addElRole(e, "button"),
            this.a11y.addElLabel(e, i.nextSlideMessage),
            e.on("keydown", this.a11y.onEnterKey)),
          t &&
            (this.a11y.makeElFocusable(t),
            this.a11y.addElRole(t, "button"),
            this.a11y.addElLabel(t, i.prevSlideMessage),
            t.on("keydown", this.a11y.onEnterKey)),
          this.pagination &&
            this.params.pagination.clickable &&
            this.pagination.bullets &&
            this.pagination.bullets.length &&
            this.pagination.$el.on(
              "keydown",
              "." + this.params.pagination.bulletClass,
              this.a11y.onEnterKey
            );
      },
      destroy: function () {
        var e, t;
        this.a11y.liveRegion &&
          this.a11y.liveRegion.length > 0 &&
          this.a11y.liveRegion.remove(),
          this.navigation &&
            this.navigation.$nextEl &&
            (e = this.navigation.$nextEl),
          this.navigation &&
            this.navigation.$prevEl &&
            (t = this.navigation.$prevEl),
          e && e.off("keydown", this.a11y.onEnterKey),
          t && t.off("keydown", this.a11y.onEnterKey),
          this.pagination &&
            this.params.pagination.clickable &&
            this.pagination.bullets &&
            this.pagination.bullets.length &&
            this.pagination.$el.off(
              "keydown",
              "." + this.params.pagination.bulletClass,
              this.a11y.onEnterKey
            );
      },
    },
    pe = {
      init: function () {
        if (this.params.history) {
          if (!t.history || !t.history.pushState)
            return (
              (this.params.history.enabled = !1),
              void (this.params.hashNavigation.enabled = !0)
            );
          var e = this.history;
          (e.initialized = !0),
            (e.paths = pe.getPathValues()),
            (e.paths.key || e.paths.value) &&
              (e.scrollToSlide(
                0,
                e.paths.value,
                this.params.runCallbacksOnInit
              ),
              this.params.history.replaceState ||
                t.addEventListener(
                  "popstate",
                  this.history.setHistoryPopState
                ));
        }
      },
      destroy: function () {
        this.params.history.replaceState ||
          t.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function () {
        (this.history.paths = pe.getPathValues()),
          this.history.scrollToSlide(
            this.params.speed,
            this.history.paths.value,
            !1
          );
      },
      getPathValues: function () {
        var e = t.location.pathname
            .slice(1)
            .split("/")
            .filter(function (e) {
              return "" !== e;
            }),
          i = e.length;
        return { key: e[i - 2], value: e[i - 1] };
      },
      setHistory: function (e, i) {
        if (this.history.initialized && this.params.history.enabled) {
          var s = this.slides.eq(i),
            a = pe.slugify(s.attr("data-history"));
          t.location.pathname.includes(e) || (a = e + "/" + a);
          var r = t.history.state;
          (r && r.value === a) ||
            (this.params.history.replaceState
              ? t.history.replaceState({ value: a }, null, a)
              : t.history.pushState({ value: a }, null, a));
        }
      },
      slugify: function (e) {
        return e
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");
      },
      scrollToSlide: function (e, t, i) {
        if (t)
          for (var s = 0, a = this.slides.length; s < a; s += 1) {
            var r = this.slides.eq(s);
            if (
              pe.slugify(r.attr("data-history")) === t &&
              !r.hasClass(this.params.slideDuplicateClass)
            ) {
              var n = r.index();
              this.slideTo(n, e, i);
            }
          }
        else this.slideTo(0, e, i);
      },
    },
    ce = {
      onHashCange: function () {
        var t = e.location.hash.replace("#", "");
        if (t !== this.slides.eq(this.activeIndex).attr("data-hash")) {
          var i = this.$wrapperEl
            .children("." + this.params.slideClass + '[data-hash="' + t + '"]')
            .index();
          if (void 0 === i) return;
          this.slideTo(i);
        }
      },
      setHash: function () {
        if (
          this.hashNavigation.initialized &&
          this.params.hashNavigation.enabled
        )
          if (
            this.params.hashNavigation.replaceState &&
            t.history &&
            t.history.replaceState
          )
            t.history.replaceState(
              null,
              null,
              "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""
            );
          else {
            var i = this.slides.eq(this.activeIndex),
              s = i.attr("data-hash") || i.attr("data-history");
            e.location.hash = s || "";
          }
      },
      init: function () {
        if (
          !(
            !this.params.hashNavigation.enabled ||
            (this.params.history && this.params.history.enabled)
          )
        ) {
          this.hashNavigation.initialized = !0;
          var i = e.location.hash.replace("#", "");
          if (i)
            for (var a = 0, r = this.slides.length; a < r; a += 1) {
              var n = this.slides.eq(a);
              if (
                (n.attr("data-hash") || n.attr("data-history")) === i &&
                !n.hasClass(this.params.slideDuplicateClass)
              ) {
                var o = n.index();
                this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
              }
            }
          this.params.hashNavigation.watchState &&
            s(t).on("hashchange", this.hashNavigation.onHashCange);
        }
      },
      destroy: function () {
        this.params.hashNavigation.watchState &&
          s(t).off("hashchange", this.hashNavigation.onHashCange);
      },
    },
    ue = {
      run: function () {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          clearTimeout(e.autoplay.timeout),
          (e.autoplay.timeout = n.nextTick(function () {
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(),
                  e.slidePrev(e.params.speed, !0, !0),
                  e.emit("autoplay"))
                : e.isBeginning
                ? e.params.autoplay.stopOnLastSlide
                  ? e.autoplay.stop()
                  : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0),
                    e.emit("autoplay"))
                : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
              : e.params.loop
              ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? e.autoplay.stop()
                : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
              : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")),
              e.params.cssMode && e.autoplay.running && e.autoplay.run();
          }, i));
      },
      start: function () {
        return (
          void 0 === this.autoplay.timeout &&
          !this.autoplay.running &&
          ((this.autoplay.running = !0),
          this.emit("autoplayStart"),
          this.autoplay.run(),
          !0)
        );
      },
      stop: function () {
        return (
          !!this.autoplay.running &&
          void 0 !== this.autoplay.timeout &&
          (this.autoplay.timeout &&
            (clearTimeout(this.autoplay.timeout),
            (this.autoplay.timeout = void 0)),
          (this.autoplay.running = !1),
          this.emit("autoplayStop"),
          !0)
        );
      },
      pause: function (e) {
        this.autoplay.running &&
          (this.autoplay.paused ||
            (this.autoplay.timeout && clearTimeout(this.autoplay.timeout),
            (this.autoplay.paused = !0),
            0 !== e && this.params.autoplay.waitForTransition
              ? (this.$wrapperEl[0].addEventListener(
                  "transitionend",
                  this.autoplay.onTransitionEnd
                ),
                this.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  this.autoplay.onTransitionEnd
                ))
              : ((this.autoplay.paused = !1), this.autoplay.run())));
      },
    },
    ve = {
      setTranslate: function () {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          var i = this.slides.eq(t),
            s = -i[0].swiperSlideOffset;
          this.params.virtualTranslate || (s -= this.translate);
          var a = 0;
          this.isHorizontal() || ((a = s), (s = 0));
          var r = this.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(i[0].progress), 0)
            : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({ opacity: r }).transform(
            "translate3d(" + s + "px, " + a + "px, 0px)"
          );
        }
      },
      setTransition: function (e) {
        var t = this,
          i = t.slides,
          s = t.$wrapperEl;
        if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
          var a = !1;
          i.transitionEnd(function () {
            if (!a && t && !t.destroyed) {
              (a = !0), (t.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], i = 0;
                i < e.length;
                i += 1
              )
                s.trigger(e[i]);
            }
          });
        }
      },
    },
    fe = {
      setTranslate: function () {
        var e,
          t = this.$el,
          i = this.$wrapperEl,
          a = this.slides,
          r = this.width,
          n = this.height,
          o = this.rtlTranslate,
          l = this.size,
          d = this.params.cubeEffect,
          h = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled,
          c = 0;
        d.shadow &&
          (h
            ? (0 === (e = i.find(".swiper-cube-shadow")).length &&
                ((e = s('<div class="swiper-cube-shadow"></div>')),
                i.append(e)),
              e.css({ height: r + "px" }))
            : 0 === (e = t.find(".swiper-cube-shadow")).length &&
              ((e = s('<div class="swiper-cube-shadow"></div>')), t.append(e)));
        for (var u = 0; u < a.length; u += 1) {
          var v = a.eq(u),
            f = u;
          p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
          var m = 90 * f,
            g = Math.floor(m / 360);
          o && ((m = -m), (g = Math.floor(-m / 360)));
          var b = Math.max(Math.min(v[0].progress, 1), -1),
            w = 0,
            y = 0,
            x = 0;
          f % 4 == 0
            ? ((w = 4 * -g * l), (x = 0))
            : (f - 1) % 4 == 0
            ? ((w = 0), (x = 4 * -g * l))
            : (f - 2) % 4 == 0
            ? ((w = l + 4 * g * l), (x = l))
            : (f - 3) % 4 == 0 && ((w = -l), (x = 3 * l + 4 * l * g)),
            o && (w = -w),
            h || ((y = w), (w = 0));
          var T =
            "rotateX(" +
            (h ? 0 : -m) +
            "deg) rotateY(" +
            (h ? m : 0) +
            "deg) translate3d(" +
            w +
            "px, " +
            y +
            "px, " +
            x +
            "px)";
          if (
            (b <= 1 &&
              b > -1 &&
              ((c = 90 * f + 90 * b), o && (c = 90 * -f - 90 * b)),
            v.transform(T),
            d.slideShadows)
          ) {
            var E = h
                ? v.find(".swiper-slide-shadow-left")
                : v.find(".swiper-slide-shadow-top"),
              S = h
                ? v.find(".swiper-slide-shadow-right")
                : v.find(".swiper-slide-shadow-bottom");
            0 === E.length &&
              ((E = s(
                '<div class="swiper-slide-shadow-' +
                  (h ? "left" : "top") +
                  '"></div>'
              )),
              v.append(E)),
              0 === S.length &&
                ((S = s(
                  '<div class="swiper-slide-shadow-' +
                    (h ? "right" : "bottom") +
                    '"></div>'
                )),
                v.append(S)),
              E.length && (E[0].style.opacity = Math.max(-b, 0)),
              S.length && (S[0].style.opacity = Math.max(b, 0));
          }
        }
        if (
          (i.css({
            "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
            "transform-origin": "50% 50% -" + l / 2 + "px",
          }),
          d.shadow)
        )
          if (h)
            e.transform(
              "translate3d(0px, " +
                (r / 2 + d.shadowOffset) +
                "px, " +
                -r / 2 +
                "px) rotateX(90deg) rotateZ(0deg) scale(" +
                d.shadowScale +
                ")"
            );
          else {
            var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
              M =
                1.5 -
                (Math.sin((2 * C * Math.PI) / 360) / 2 +
                  Math.cos((2 * C * Math.PI) / 360) / 2),
              P = d.shadowScale,
              z = d.shadowScale / M,
              k = d.shadowOffset;
            e.transform(
              "scale3d(" +
                P +
                ", 1, " +
                z +
                ") translate3d(0px, " +
                (n / 2 + k) +
                "px, " +
                -n / 2 / z +
                "px) rotateX(-90deg)"
            );
          }
        var $ = j.isSafari || j.isUiWebView ? -l / 2 : 0;
        i.transform(
          "translate3d(0px,0," +
            $ +
            "px) rotateX(" +
            (this.isHorizontal() ? 0 : c) +
            "deg) rotateY(" +
            (this.isHorizontal() ? -c : 0) +
            "deg)"
        );
      },
      setTransition: function (e) {
        var t = this.$el;
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e),
          this.params.cubeEffect.shadow &&
            !this.isHorizontal() &&
            t.find(".swiper-cube-shadow").transition(e);
      },
    },
    me = {
      setTranslate: function () {
        for (
          var e = this.slides, t = this.rtlTranslate, i = 0;
          i < e.length;
          i += 1
        ) {
          var a = e.eq(i),
            r = a[0].progress;
          this.params.flipEffect.limitRotation &&
            (r = Math.max(Math.min(a[0].progress, 1), -1));
          var n = -180 * r,
            o = 0,
            l = -a[0].swiperSlideOffset,
            d = 0;
          if (
            (this.isHorizontal()
              ? t && (n = -n)
              : ((d = l), (l = 0), (o = -n), (n = 0)),
            (a[0].style.zIndex = -Math.abs(Math.round(r)) + e.length),
            this.params.flipEffect.slideShadows)
          ) {
            var h = this.isHorizontal()
                ? a.find(".swiper-slide-shadow-left")
                : a.find(".swiper-slide-shadow-top"),
              p = this.isHorizontal()
                ? a.find(".swiper-slide-shadow-right")
                : a.find(".swiper-slide-shadow-bottom");
            0 === h.length &&
              ((h = s(
                '<div class="swiper-slide-shadow-' +
                  (this.isHorizontal() ? "left" : "top") +
                  '"></div>'
              )),
              a.append(h)),
              0 === p.length &&
                ((p = s(
                  '<div class="swiper-slide-shadow-' +
                    (this.isHorizontal() ? "right" : "bottom") +
                    '"></div>'
                )),
                a.append(p)),
              h.length && (h[0].style.opacity = Math.max(-r, 0)),
              p.length && (p[0].style.opacity = Math.max(r, 0));
          }
          a.transform(
            "translate3d(" +
              l +
              "px, " +
              d +
              "px, 0px) rotateX(" +
              o +
              "deg) rotateY(" +
              n +
              "deg)"
          );
        }
      },
      setTransition: function (e) {
        var t = this,
          i = t.slides,
          s = t.activeIndex,
          a = t.$wrapperEl;
        if (
          (i
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
          t.params.virtualTranslate && 0 !== e)
        ) {
          var r = !1;
          i.eq(s).transitionEnd(function () {
            if (!r && t && !t.destroyed) {
              (r = !0), (t.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], i = 0;
                i < e.length;
                i += 1
              )
                a.trigger(e[i]);
            }
          });
        }
      },
    },
    ge = {
      setTranslate: function () {
        for (
          var e = this.width,
            t = this.height,
            i = this.slides,
            a = this.$wrapperEl,
            r = this.slidesSizesGrid,
            n = this.params.coverflowEffect,
            l = this.isHorizontal(),
            d = this.translate,
            h = l ? e / 2 - d : t / 2 - d,
            p = l ? n.rotate : -n.rotate,
            c = n.depth,
            u = 0,
            v = i.length;
          u < v;
          u += 1
        ) {
          var f = i.eq(u),
            m = r[u],
            g = ((h - f[0].swiperSlideOffset - m / 2) / m) * n.modifier,
            b = l ? p * g : 0,
            w = l ? 0 : p * g,
            y = -c * Math.abs(g),
            x = n.stretch;
          "string" == typeof x &&
            -1 !== x.indexOf("%") &&
            (x = (parseFloat(n.stretch) / 100) * m);
          var T = l ? 0 : x * g,
            E = l ? x * g : 0;
          Math.abs(E) < 0.001 && (E = 0),
            Math.abs(T) < 0.001 && (T = 0),
            Math.abs(y) < 0.001 && (y = 0),
            Math.abs(b) < 0.001 && (b = 0),
            Math.abs(w) < 0.001 && (w = 0);
          var S =
            "translate3d(" +
            E +
            "px," +
            T +
            "px," +
            y +
            "px)  rotateX(" +
            w +
            "deg) rotateY(" +
            b +
            "deg)";
          if (
            (f.transform(S),
            (f[0].style.zIndex = 1 - Math.abs(Math.round(g))),
            n.slideShadows)
          ) {
            var C = l
                ? f.find(".swiper-slide-shadow-left")
                : f.find(".swiper-slide-shadow-top"),
              M = l
                ? f.find(".swiper-slide-shadow-right")
                : f.find(".swiper-slide-shadow-bottom");
            0 === C.length &&
              ((C = s(
                '<div class="swiper-slide-shadow-' +
                  (l ? "left" : "top") +
                  '"></div>'
              )),
              f.append(C)),
              0 === M.length &&
                ((M = s(
                  '<div class="swiper-slide-shadow-' +
                    (l ? "right" : "bottom") +
                    '"></div>'
                )),
                f.append(M)),
              C.length && (C[0].style.opacity = g > 0 ? g : 0),
              M.length && (M[0].style.opacity = -g > 0 ? -g : 0);
          }
        }
        (o.pointerEvents || o.prefixedPointerEvents) &&
          (a[0].style.perspectiveOrigin = h + "px 50%");
      },
      setTransition: function (e) {
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e);
      },
    },
    be = {
      init: function () {
        var e = this.params.thumbs,
          t = this.constructor;
        e.swiper instanceof t
          ? ((this.thumbs.swiper = e.swiper),
            n.extend(this.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            n.extend(this.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }))
          : n.isObject(e.swiper) &&
            ((this.thumbs.swiper = new t(
              n.extend({}, e.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              })
            )),
            (this.thumbs.swiperCreated = !0)),
          this.thumbs.swiper.$el.addClass(
            this.params.thumbs.thumbsContainerClass
          ),
          this.thumbs.swiper.on("tap", this.thumbs.onThumbClick);
      },
      onThumbClick: function () {
        var e = this.thumbs.swiper;
        if (e) {
          var t = e.clickedIndex,
            i = e.clickedSlide;
          if (
            !(
              (i && s(i).hasClass(this.params.thumbs.slideThumbActiveClass)) ||
              null == t
            )
          ) {
            var a;
            if (
              ((a = e.params.loop
                ? parseInt(
                    s(e.clickedSlide).attr("data-swiper-slide-index"),
                    10
                  )
                : t),
              this.params.loop)
            ) {
              var r = this.activeIndex;
              this.slides.eq(r).hasClass(this.params.slideDuplicateClass) &&
                (this.loopFix(),
                (this._clientLeft = this.$wrapperEl[0].clientLeft),
                (r = this.activeIndex));
              var n = this.slides
                  .eq(r)
                  .prevAll('[data-swiper-slide-index="' + a + '"]')
                  .eq(0)
                  .index(),
                o = this.slides
                  .eq(r)
                  .nextAll('[data-swiper-slide-index="' + a + '"]')
                  .eq(0)
                  .index();
              a = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n;
            }
            this.slideTo(a);
          }
        }
      },
      update: function (e) {
        var t = this.thumbs.swiper;
        if (t) {
          var i =
            "auto" === t.params.slidesPerView
              ? t.slidesPerViewDynamic()
              : t.params.slidesPerView;
          if (this.realIndex !== t.realIndex) {
            var s,
              a = t.activeIndex;
            if (t.params.loop) {
              t.slides.eq(a).hasClass(t.params.slideDuplicateClass) &&
                (t.loopFix(),
                (t._clientLeft = t.$wrapperEl[0].clientLeft),
                (a = t.activeIndex));
              var r = t.slides
                  .eq(a)
                  .prevAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                  .eq(0)
                  .index(),
                n = t.slides
                  .eq(a)
                  .nextAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                  .eq(0)
                  .index();
              s =
                void 0 === r
                  ? n
                  : void 0 === n
                  ? r
                  : n - a == a - r
                  ? a
                  : n - a < a - r
                  ? n
                  : r;
            } else s = this.realIndex;
            t.visibleSlidesIndexes &&
              t.visibleSlidesIndexes.indexOf(s) < 0 &&
              (t.params.centeredSlides
                ? (s =
                    s > a
                      ? s - Math.floor(i / 2) + 1
                      : s + Math.floor(i / 2) - 1)
                : s > a && (s = s - i + 1),
              t.slideTo(s, e ? 0 : void 0));
          }
          var o = 1,
            l = this.params.thumbs.slideThumbActiveClass;
          if (
            (this.params.slidesPerView > 1 &&
              !this.params.centeredSlides &&
              (o = this.params.slidesPerView),
            this.params.thumbs.multipleActiveThumbs || (o = 1),
            (o = Math.floor(o)),
            t.slides.removeClass(l),
            t.params.loop || (t.params.virtual && t.params.virtual.enabled))
          )
            for (var d = 0; d < o; d += 1)
              t.$wrapperEl
                .children(
                  '[data-swiper-slide-index="' + (this.realIndex + d) + '"]'
                )
                .addClass(l);
          else
            for (var h = 0; h < o; h += 1)
              t.slides.eq(this.realIndex + h).addClass(l);
        }
      },
    },
    we = [
      R,
      q,
      K,
      U,
      Z,
      J,
      te,
      {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarged: "container",
          },
        },
        create: function () {
          n.extend(this, {
            mousewheel: {
              enabled: !1,
              enable: ie.enable.bind(this),
              disable: ie.disable.bind(this),
              handle: ie.handle.bind(this),
              handleMouseEnter: ie.handleMouseEnter.bind(this),
              handleMouseLeave: ie.handleMouseLeave.bind(this),
              animateSlider: ie.animateSlider.bind(this),
              releaseScroll: ie.releaseScroll.bind(this),
              lastScrollTime: n.now(),
              lastEventBeforeSnap: void 0,
              recentWheelEvents: [],
            },
          });
        },
        on: {
          init: function () {
            !this.params.mousewheel.enabled &&
              this.params.cssMode &&
              this.mousewheel.disable(),
              this.params.mousewheel.enabled && this.mousewheel.enable();
          },
          destroy: function () {
            this.params.cssMode && this.mousewheel.enable(),
              this.mousewheel.enabled && this.mousewheel.disable();
          },
        },
      },
      {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        },
        create: function () {
          n.extend(this, {
            navigation: {
              init: se.init.bind(this),
              update: se.update.bind(this),
              destroy: se.destroy.bind(this),
              onNextClick: se.onNextClick.bind(this),
              onPrevClick: se.onPrevClick.bind(this),
            },
          });
        },
        on: {
          init: function () {
            this.navigation.init(), this.navigation.update();
          },
          toEdge: function () {
            this.navigation.update();
          },
          fromEdge: function () {
            this.navigation.update();
          },
          destroy: function () {
            this.navigation.destroy();
          },
          click: function (e) {
            var t,
              i = this.navigation,
              a = i.$nextEl,
              r = i.$prevEl;
            !this.params.navigation.hideOnClick ||
              s(e.target).is(r) ||
              s(e.target).is(a) ||
              (a
                ? (t = a.hasClass(this.params.navigation.hiddenClass))
                : r && (t = r.hasClass(this.params.navigation.hiddenClass)),
              !0 === t
                ? this.emit("navigationShow", this)
                : this.emit("navigationHide", this),
              a && a.toggleClass(this.params.navigation.hiddenClass),
              r && r.toggleClass(this.params.navigation.hiddenClass));
          },
        },
      },
      {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock",
          },
        },
        create: function () {
          n.extend(this, {
            pagination: {
              init: ae.init.bind(this),
              render: ae.render.bind(this),
              update: ae.update.bind(this),
              destroy: ae.destroy.bind(this),
              dynamicBulletIndex: 0,
            },
          });
        },
        on: {
          init: function () {
            this.pagination.init(),
              this.pagination.render(),
              this.pagination.update();
          },
          activeIndexChange: function () {
            this.params.loop
              ? this.pagination.update()
              : void 0 === this.snapIndex && this.pagination.update();
          },
          snapIndexChange: function () {
            this.params.loop || this.pagination.update();
          },
          slidesLengthChange: function () {
            this.params.loop &&
              (this.pagination.render(), this.pagination.update());
          },
          snapGridLengthChange: function () {
            this.params.loop ||
              (this.pagination.render(), this.pagination.update());
          },
          destroy: function () {
            this.pagination.destroy();
          },
          click: function (e) {
            this.params.pagination.el &&
              this.params.pagination.hideOnClick &&
              this.pagination.$el.length > 0 &&
              !s(e.target).hasClass(this.params.pagination.bulletClass) &&
              (!0 ===
              this.pagination.$el.hasClass(this.params.pagination.hiddenClass)
                ? this.emit("paginationShow", this)
                : this.emit("paginationHide", this),
              this.pagination.$el.toggleClass(
                this.params.pagination.hiddenClass
              ));
          },
        },
      },
      {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        },
        create: function () {
          n.extend(this, {
            scrollbar: {
              init: re.init.bind(this),
              destroy: re.destroy.bind(this),
              updateSize: re.updateSize.bind(this),
              setTranslate: re.setTranslate.bind(this),
              setTransition: re.setTransition.bind(this),
              enableDraggable: re.enableDraggable.bind(this),
              disableDraggable: re.disableDraggable.bind(this),
              setDragPosition: re.setDragPosition.bind(this),
              getPointerPosition: re.getPointerPosition.bind(this),
              onDragStart: re.onDragStart.bind(this),
              onDragMove: re.onDragMove.bind(this),
              onDragEnd: re.onDragEnd.bind(this),
              isTouched: !1,
              timeout: null,
              dragTimeout: null,
            },
          });
        },
        on: {
          init: function () {
            this.scrollbar.init(),
              this.scrollbar.updateSize(),
              this.scrollbar.setTranslate();
          },
          update: function () {
            this.scrollbar.updateSize();
          },
          resize: function () {
            this.scrollbar.updateSize();
          },
          observerUpdate: function () {
            this.scrollbar.updateSize();
          },
          setTranslate: function () {
            this.scrollbar.setTranslate();
          },
          setTransition: function (e) {
            this.scrollbar.setTransition(e);
          },
          destroy: function () {
            this.scrollbar.destroy();
          },
        },
      },
      {
        name: "parallax",
        params: { parallax: { enabled: !1 } },
        create: function () {
          n.extend(this, {
            parallax: {
              setTransform: ne.setTransform.bind(this),
              setTranslate: ne.setTranslate.bind(this),
              setTransition: ne.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            this.params.parallax.enabled &&
              ((this.params.watchSlidesProgress = !0),
              (this.originalParams.watchSlidesProgress = !0));
          },
          init: function () {
            this.params.parallax.enabled && this.parallax.setTranslate();
          },
          setTranslate: function () {
            this.params.parallax.enabled && this.parallax.setTranslate();
          },
          setTransition: function (e) {
            this.params.parallax.enabled && this.parallax.setTransition(e);
          },
        },
      },
      {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed",
          },
        },
        create: function () {
          var e = this,
            t = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3,
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {},
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0,
              },
            };
          "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
            .split(" ")
            .forEach(function (i) {
              t[i] = oe[i].bind(e);
            }),
            n.extend(e, { zoom: t });
          var i = 1;
          Object.defineProperty(e.zoom, "scale", {
            get: function () {
              return i;
            },
            set: function (t) {
              if (i !== t) {
                var s = e.zoom.gesture.$imageEl
                    ? e.zoom.gesture.$imageEl[0]
                    : void 0,
                  a = e.zoom.gesture.$slideEl
                    ? e.zoom.gesture.$slideEl[0]
                    : void 0;
                e.emit("zoomChange", t, s, a);
              }
              i = t;
            },
          });
        },
        on: {
          init: function () {
            this.params.zoom.enabled && this.zoom.enable();
          },
          destroy: function () {
            this.zoom.disable();
          },
          touchStart: function (e) {
            this.zoom.enabled && this.zoom.onTouchStart(e);
          },
          touchEnd: function (e) {
            this.zoom.enabled && this.zoom.onTouchEnd(e);
          },
          doubleTap: function (e) {
            this.params.zoom.enabled &&
              this.zoom.enabled &&
              this.params.zoom.toggle &&
              this.zoom.toggle(e);
          },
          transitionEnd: function () {
            this.zoom.enabled &&
              this.params.zoom.enabled &&
              this.zoom.onTransitionEnd();
          },
          slideChange: function () {
            this.zoom.enabled &&
              this.params.zoom.enabled &&
              this.params.cssMode &&
              this.zoom.onTransitionEnd();
          },
        },
      },
      {
        name: "lazy",
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        },
        create: function () {
          n.extend(this, {
            lazy: {
              initialImageLoaded: !1,
              load: le.load.bind(this),
              loadInSlide: le.loadInSlide.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            this.params.lazy.enabled &&
              this.params.preloadImages &&
              (this.params.preloadImages = !1);
          },
          init: function () {
            this.params.lazy.enabled &&
              !this.params.loop &&
              0 === this.params.initialSlide &&
              this.lazy.load();
          },
          scroll: function () {
            this.params.freeMode &&
              !this.params.freeModeSticky &&
              this.lazy.load();
          },
          resize: function () {
            this.params.lazy.enabled && this.lazy.load();
          },
          scrollbarDragMove: function () {
            this.params.lazy.enabled && this.lazy.load();
          },
          transitionStart: function () {
            this.params.lazy.enabled &&
              (this.params.lazy.loadOnTransitionStart ||
                (!this.params.lazy.loadOnTransitionStart &&
                  !this.lazy.initialImageLoaded)) &&
              this.lazy.load();
          },
          transitionEnd: function () {
            this.params.lazy.enabled &&
              !this.params.lazy.loadOnTransitionStart &&
              this.lazy.load();
          },
          slideChange: function () {
            this.params.lazy.enabled && this.params.cssMode && this.lazy.load();
          },
        },
      },
      {
        name: "controller",
        params: { controller: { control: void 0, inverse: !1, by: "slide" } },
        create: function () {
          n.extend(this, {
            controller: {
              control: this.params.controller.control,
              getInterpolateFunction: de.getInterpolateFunction.bind(this),
              setTranslate: de.setTranslate.bind(this),
              setTransition: de.setTransition.bind(this),
            },
          });
        },
        on: {
          update: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          resize: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          observerUpdate: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0),
              delete this.controller.spline);
          },
          setTranslate: function (e, t) {
            this.controller.control && this.controller.setTranslate(e, t);
          },
          setTransition: function (e, t) {
            this.controller.control && this.controller.setTransition(e, t);
          },
        },
      },
      {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
          },
        },
        create: function () {
          var e = this;
          n.extend(e, {
            a11y: {
              liveRegion: s(
                '<span class="' +
                  e.params.a11y.notificationClass +
                  '" aria-live="assertive" aria-atomic="true"></span>'
              ),
            },
          }),
            Object.keys(he).forEach(function (t) {
              e.a11y[t] = he[t].bind(e);
            });
        },
        on: {
          init: function () {
            this.params.a11y.enabled &&
              (this.a11y.init(), this.a11y.updateNavigation());
          },
          toEdge: function () {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          fromEdge: function () {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          paginationUpdate: function () {
            this.params.a11y.enabled && this.a11y.updatePagination();
          },
          destroy: function () {
            this.params.a11y.enabled && this.a11y.destroy();
          },
        },
      },
      {
        name: "history",
        params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
        create: function () {
          n.extend(this, {
            history: {
              init: pe.init.bind(this),
              setHistory: pe.setHistory.bind(this),
              setHistoryPopState: pe.setHistoryPopState.bind(this),
              scrollToSlide: pe.scrollToSlide.bind(this),
              destroy: pe.destroy.bind(this),
            },
          });
        },
        on: {
          init: function () {
            this.params.history.enabled && this.history.init();
          },
          destroy: function () {
            this.params.history.enabled && this.history.destroy();
          },
          transitionEnd: function () {
            this.history.initialized &&
              this.history.setHistory(
                this.params.history.key,
                this.activeIndex
              );
          },
          slideChange: function () {
            this.history.initialized &&
              this.params.cssMode &&
              this.history.setHistory(
                this.params.history.key,
                this.activeIndex
              );
          },
        },
      },
      {
        name: "hash-navigation",
        params: {
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
        },
        create: function () {
          n.extend(this, {
            hashNavigation: {
              initialized: !1,
              init: ce.init.bind(this),
              destroy: ce.destroy.bind(this),
              setHash: ce.setHash.bind(this),
              onHashCange: ce.onHashCange.bind(this),
            },
          });
        },
        on: {
          init: function () {
            this.params.hashNavigation.enabled && this.hashNavigation.init();
          },
          destroy: function () {
            this.params.hashNavigation.enabled && this.hashNavigation.destroy();
          },
          transitionEnd: function () {
            this.hashNavigation.initialized && this.hashNavigation.setHash();
          },
          slideChange: function () {
            this.hashNavigation.initialized &&
              this.params.cssMode &&
              this.hashNavigation.setHash();
          },
        },
      },
      {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
          },
        },
        create: function () {
          var e = this;
          n.extend(e, {
            autoplay: {
              running: !1,
              paused: !1,
              run: ue.run.bind(e),
              start: ue.start.bind(e),
              stop: ue.stop.bind(e),
              pause: ue.pause.bind(e),
              onVisibilityChange: function () {
                "hidden" === document.visibilityState &&
                  e.autoplay.running &&
                  e.autoplay.pause(),
                  "visible" === document.visibilityState &&
                    e.autoplay.paused &&
                    (e.autoplay.run(), (e.autoplay.paused = !1));
              },
              onTransitionEnd: function (t) {
                e &&
                  !e.destroyed &&
                  e.$wrapperEl &&
                  t.target === this &&
                  (e.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    e.autoplay.onTransitionEnd
                  ),
                  e.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    e.autoplay.onTransitionEnd
                  ),
                  (e.autoplay.paused = !1),
                  e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
              },
            },
          });
        },
        on: {
          init: function () {
            this.params.autoplay.enabled &&
              (this.autoplay.start(),
              document.addEventListener(
                "visibilitychange",
                this.autoplay.onVisibilityChange
              ));
          },
          beforeTransitionStart: function (e, t) {
            this.autoplay.running &&
              (t || !this.params.autoplay.disableOnInteraction
                ? this.autoplay.pause(e)
                : this.autoplay.stop());
          },
          sliderFirstMove: function () {
            this.autoplay.running &&
              (this.params.autoplay.disableOnInteraction
                ? this.autoplay.stop()
                : this.autoplay.pause());
          },
          touchEnd: function () {
            this.params.cssMode &&
              this.autoplay.paused &&
              !this.params.autoplay.disableOnInteraction &&
              this.autoplay.run();
          },
          destroy: function () {
            this.autoplay.running && this.autoplay.stop(),
              document.removeEventListener(
                "visibilitychange",
                this.autoplay.onVisibilityChange
              );
          },
        },
      },
      {
        name: "effect-fade",
        params: { fadeEffect: { crossFade: !1 } },
        create: function () {
          n.extend(this, {
            fadeEffect: {
              setTranslate: ve.setTranslate.bind(this),
              setTransition: ve.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            if ("fade" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "fade");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              n.extend(this.params, e), n.extend(this.originalParams, e);
            }
          },
          setTranslate: function () {
            "fade" === this.params.effect && this.fadeEffect.setTranslate();
          },
          setTransition: function (e) {
            "fade" === this.params.effect && this.fadeEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
        },
        create: function () {
          n.extend(this, {
            cubeEffect: {
              setTranslate: fe.setTranslate.bind(this),
              setTransition: fe.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            if ("cube" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "cube"),
                this.classNames.push(this.params.containerModifierClass + "3d");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              };
              n.extend(this.params, e), n.extend(this.originalParams, e);
            }
          },
          setTranslate: function () {
            "cube" === this.params.effect && this.cubeEffect.setTranslate();
          },
          setTransition: function (e) {
            "cube" === this.params.effect && this.cubeEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-flip",
        params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
        create: function () {
          n.extend(this, {
            flipEffect: {
              setTranslate: me.setTranslate.bind(this),
              setTransition: me.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            if ("flip" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "flip"),
                this.classNames.push(this.params.containerModifierClass + "3d");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              n.extend(this.params, e), n.extend(this.originalParams, e);
            }
          },
          setTranslate: function () {
            "flip" === this.params.effect && this.flipEffect.setTranslate();
          },
          setTransition: function (e) {
            "flip" === this.params.effect && this.flipEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0,
          },
        },
        create: function () {
          n.extend(this, {
            coverflowEffect: {
              setTranslate: ge.setTranslate.bind(this),
              setTransition: ge.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            "coverflow" === this.params.effect &&
              (this.classNames.push(
                this.params.containerModifierClass + "coverflow"
              ),
              this.classNames.push(this.params.containerModifierClass + "3d"),
              (this.params.watchSlidesProgress = !0),
              (this.originalParams.watchSlidesProgress = !0));
          },
          setTranslate: function () {
            "coverflow" === this.params.effect &&
              this.coverflowEffect.setTranslate();
          },
          setTransition: function (e) {
            "coverflow" === this.params.effect &&
              this.coverflowEffect.setTransition(e);
          },
        },
      },
      {
        name: "thumbs",
        params: {
          thumbs: {
            multipleActiveThumbs: !0,
            swiper: null,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs",
          },
        },
        create: function () {
          n.extend(this, {
            thumbs: {
              swiper: null,
              init: be.init.bind(this),
              update: be.update.bind(this),
              onThumbClick: be.onThumbClick.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            var e = this.params.thumbs;
            e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
          },
          slideChange: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          update: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          resize: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          observerUpdate: function () {
            this.thumbs.swiper && this.thumbs.update();
          },
          setTransition: function (e) {
            var t = this.thumbs.swiper;
            t && t.setTransition(e);
          },
          beforeDestroy: function () {
            var e = this.thumbs.swiper;
            e && this.thumbs.swiperCreated && e && e.destroy();
          },
        },
      },
    ];
  return (
    void 0 === W.use &&
      ((W.use = W.Class.use), (W.installModule = W.Class.installModule)),
    W.use(we),
    W
  );
});
(function (a) {
  (window.ShareLink = function (b, c) {
    var d,
      e = {},
      f = function (a) {
        var b = a.substr(0, e.classPrefixLength);
        return b === e.classPrefix ? a.substr(e.classPrefixLength) : null;
      },
      g = function (a) {
        d.on("click", function () {
          h(a);
        });
      },
      h = function (a) {
        var b = "";
        if (e.width && e.height) {
          var c = screen.width / 2 - e.width / 2,
            d = screen.height / 2 - e.height / 2;
          b =
            "toolbar=0,status=0,width=" +
            e.width +
            ",height=" +
            e.height +
            ",top=" +
            d +
            ",left=" +
            c;
        }
        var f = ShareLink.getNetworkLink(a, e),
          g = /^https?:\/\//.test(f),
          h = g ? "" : "_self";
        open(f, h, b);
      },
      i = function () {
        a.each(b.classList, function () {
          var a = f(this);
          if (a) return g(a), !1;
        });
      },
      j = function () {
        a.extend(e, ShareLink.defaultSettings, c),
          ["title", "text"].forEach(function (a) {
            e[a] = e[a].replace("#", "");
          }),
          (e.classPrefixLength = e.classPrefix.length);
      },
      k = function () {
        d = a(b);
      };
    (function () {
      j(), k(), i();
    })();
  }),
    (ShareLink.networkTemplates = {
      twitter: "https://twitter.com/intent/tweet?text={text}\x20{url}",
      pinterest:
        "https://www.pinterest.com/pin/create/button/?url={url}&media={image}",
      facebook: "https://www.facebook.com/sharer.php?u={url}",
      vk: "https://vkontakte.ru/share.php?url={url}&title={title}&description={text}&image={image}",
      linkedin:
        "https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={text}&source={url}",
      odnoklassniki:
        "https://connect.ok.ru/offer?url={url}&title={title}&imageUrl={image}",
      tumblr: "https://tumblr.com/share/link?url={url}",
      google: "https://plus.google.com/share?url={url}",
      digg: "https://digg.com/submit?url={url}",
      reddit: "https://reddit.com/submit?url={url}&title={title}",
      stumbleupon: "https://www.stumbleupon.com/submit?url={url}",
      pocket: "https://getpocket.com/edit?url={url}",
      whatsapp: "https://api.whatsapp.com/send?text=*{title}*\n{text}\n{url}",
      xing: "https://www.xing.com/app/user?op=share&url={url}",
      print: "javascript:print()",
      email: "mailto:?subject={title}&body={text}\n{url}",
      telegram: "https://telegram.me/share/url?url={url}&text={text}",
      skype: "https://web.skype.com/share?url={url}",
    }),
    (ShareLink.defaultSettings = {
      title: "",
      text: "",
      image: "",
      url: location.href,
      classPrefix: "s_",
      width: 640,
      height: 480,
    }),
    (ShareLink.getNetworkLink = function (a, b) {
      var c = ShareLink.networkTemplates[a].replace(
        /{([^}]+)}/g,
        function (a, c) {
          return b[c] || "";
        }
      );
      if ("email" === a) {
        if (-1 < b.title.indexOf("&") || -1 < b.text.indexOf("&")) {
          var d = {
            text: b.text.replace(/&/g, "%26"),
            title: b.title.replace(/&/g, "%26"),
            url: b.url,
          };
          c = ShareLink.networkTemplates[a].replace(
            /{([^}]+)}/g,
            function (a, b) {
              return d[b];
            }
          );
        }
        return (
          c.indexOf("?subject=&body") && (c = c.replace("subject=&", "")), c
        );
      }
      return c;
    }),
    (a.fn.shareLink = function (b) {
      return this.each(function () {
        a(this).data("shareLink", new ShareLink(this, b));
      });
    });
})(
  jQuery
); /*! dialogs-manager v4.9.0 | (c) Kobi Zaltzberg | https://github.com/kobizz/dialogs-manager/blob/master/LICENSE.txt
 2021-08-15 18:13 */
!(function (p, t) {
  "use strict";
  var y = {
    widgetsTypes: {},
    createWidgetType: function (t, e, n) {
      n = n || this.Widget;
      function i() {
        n.apply(this, arguments);
      }
      var o = (i.prototype = new n(t));
      return (
        (o.types = o.types.concat([t])),
        p.extend(o, e),
        ((o.constructor = i).extend = function (t, e) {
          return y.createWidgetType(t, e, i);
        }),
        i
      );
    },
    addWidgetType: function (t, e, n) {
      return e && e.prototype instanceof this.Widget
        ? (this.widgetsTypes[t] = e)
        : (this.widgetsTypes[t] = this.createWidgetType(t, e, n));
    },
    getWidgetType: function (t) {
      return this.widgetsTypes[t];
    },
  };
  (y.Instance = function () {
    var n = this,
      e = {},
      i = {};
    (this.createWidget = function (t, e) {
      t = new (y.getWidgetType(t))(t);
      return t.init(n, (e = e || {})), t;
    }),
      (this.getSettings = function (t) {
        return t ? i[t] : Object.create(i);
      }),
      (this.init = function (t) {
        return (
          p.extend(
            i,
            {
              classPrefix: "dialog",
              effects: { show: "fadeIn", hide: "fadeOut" },
            },
            t
          ),
          (e.body = p("body")),
          n
        );
      }),
      n.init();
  }),
    (y.Widget = function (n) {
      function e(t, e) {
        var n = u.effects[t],
          t = d.widget;
        if (p.isFunction(n)) n.apply(t, e);
        else {
          if (!t[n]) throw "Reference Error: The effect " + n + " not found";
          t[n].apply(t, e);
        }
      }
      function i(t) {
        if (!f(t)) {
          if (u.hide.onClick) {
            if (p(t.target).closest(u.selectors.preventClose).length) return;
          } else if (t.target !== this) return;
          c.hide();
        }
      }
      function o(t) {
        f(t) || p(t.target).closest(d.widget).length || g(t) || c.hide();
      }
      function s(t, e) {
        (t = p.extend(!0, {}, t.getSettings())),
          (u = {
            headerMessage: "",
            message: "",
            effects: t.effects,
            classes: {
              globalPrefix: t.classPrefix,
              prefix: t.classPrefix + "-" + n,
              preventScroll: t.classPrefix + "-prevent-scroll",
            },
            selectors: { preventClose: "." + t.classPrefix + "-prevent-close" },
            container: "body",
            preventScroll: !1,
            iframe: null,
            closeButton: !1,
            closeButtonOptions: {
              iconClass: t.classPrefix + "-close-button-icon",
              attributes: {},
              iconElement: "<i>",
            },
            position: {
              element: "widget",
              my: "center",
              at: "center",
              enable: !0,
              autoRefresh: !1,
            },
            hide: {
              auto: !1,
              autoDelay: 5e3,
              onClick: !1,
              onOutsideClick: !0,
              onOutsideContextMenu: !1,
              onBackgroundClick: !0,
              onEscKeyPress: !0,
              ignore: "",
            },
          }),
          p.extend(!0, u, c.getDefaultSettings(), e),
          p.each(u, function (t) {
            t = t.match(/^on([A-Z].*)/);
            t &&
              ((t = t[1].charAt(0).toLowerCase() + t[1].slice(1)),
              c.on(t, this));
          });
      }
      function r(t) {
        27 === t.which && c.hide();
      }
      function t() {
        var t = [d.window];
        d.iframe && t.push(jQuery(d.iframe[0].contentWindow)),
          t.forEach(function (t) {
            u.hide.onEscKeyPress && t.off("keyup", r),
              u.hide.onOutsideClick && t[0].removeEventListener("click", o, !0),
              u.hide.onOutsideContextMenu &&
                t[0].removeEventListener("contextmenu", o, !0),
              u.position.autoRefresh && t.off("resize", c.refreshPosition);
          }),
          (u.hide.onClick || u.hide.onBackgroundClick) &&
            d.widget.off("click", i);
      }
      var c = this,
        u = {},
        a = {},
        d = {},
        l = 0,
        h = ["refreshPosition"],
        g = function (t) {
          return !!u.hide.ignore && !!p(t.target).closest(u.hide.ignore).length;
        },
        f = function (t) {
          return "click" === t.type && 2 === t.button;
        };
      (this.addElement = function (t, e, n) {
        (e = d[t] = p(e || "<div>")),
          (t = t.replace(/([a-z])([A-Z])/g, function () {
            return arguments[1] + "-" + arguments[2].toLowerCase();
          }));
        return (
          (n = n ? n + " " : ""),
          (n += u.classes.globalPrefix + "-" + t),
          (n += " " + u.classes.prefix + "-" + t),
          e.addClass(n),
          e
        );
      }),
        (this.destroy = function () {
          return t(), d.widget.remove(), c.trigger("destroy"), c;
        }),
        (this.getElements = function (t) {
          return t ? d[t] : d;
        }),
        (this.getSettings = function (t) {
          var e = Object.create(u);
          return t ? e[t] : e;
        }),
        (this.hide = function () {
          if (c.isVisible())
            return (
              clearTimeout(l),
              e("hide", arguments),
              t(),
              u.preventScroll &&
                c.getElements("body").removeClass(u.classes.preventScroll),
              c.trigger("hide"),
              c
            );
        }),
        (this.init = function (t, e) {
          if (!(t instanceof y.Instance))
            throw (
              "The " +
              c.widgetName +
              " must to be initialized from an instance of DialogsManager.Instance"
            );
          var n;
          return (
            (n = h.concat(c.getClosureMethods())),
            p.each(n, function () {
              var t = c[this];
              c[this] = function () {
                t.apply(c, arguments);
              };
            }),
            c.trigger("init", e),
            s(t, e),
            (function () {
              if (
                (c.addElement("widget"),
                c.addElement("header"),
                c.addElement("message"),
                c.addElement("window", window),
                c.addElement("body", document.body),
                c.addElement("container", u.container),
                u.iframe && c.addElement("iframe", u.iframe),
                u.closeButton)
              ) {
                u.closeButtonClass &&
                  (u.closeButtonOptions.iconClass = u.closeButtonClass);
                const n = p("<div>", u.closeButtonOptions.attributes),
                  i = p(u.closeButtonOptions.iconElement).addClass(
                    u.closeButtonOptions.iconClass
                  );
                n.append(i), c.addElement("closeButton", n);
              }
              var t = c.getSettings("id");
              t && c.setID(t);
              var e = [];
              p.each(c.types, function () {
                e.push(u.classes.globalPrefix + "-type-" + this);
              }),
                e.push(c.getSettings("className")),
                d.widget.addClass(e.join(" "));
            })(),
            c.buildWidget(),
            c.attachEvents(),
            c.trigger("ready"),
            c
          );
        }),
        (this.isVisible = function () {
          return d.widget.is(":visible");
        }),
        (this.on = function (t, e) {
          return (
            "object" == typeof t
              ? p.each(t, function (t) {
                  c.on(t, this);
                })
              : t.split(" ").forEach(function (t) {
                  a[t] || (a[t] = []), a[t].push(e);
                }),
            c
          );
        }),
        (this.off = function (t, e) {
          if (!a[t]) return c;
          if (!e) return delete a[t], c;
          e = a[t].indexOf(e);
          return -1 !== e && a[t].splice(e, 1), c;
        }),
        (this.refreshPosition = function () {
          var t, e, n, i, o, s, r;
          u.position.enable &&
            ((t = p.extend({}, u.position)),
            d[t.of] && (t.of = d[t.of]),
            t.of || (t.of = window),
            u.iframe &&
              (e = t).my &&
              ((n = /([+-]\d+)?$/),
              (i = d.iframe.offset()),
              (o = d.iframe[0].contentWindow),
              (s = e.my.split(" ")),
              (r = []),
              1 === s.length &&
                (/left|right/.test(s[0])
                  ? s.push("center")
                  : s.unshift("center")),
              s.forEach(function (t, e) {
                t = t.replace(n, function (t) {
                  return (
                    (t = +t || 0),
                    (t =
                      0 <= (t += e ? i.top - o.scrollY : i.left - o.scrollX)
                        ? "+" + t
                        : t)
                  );
                });
                r.push(t);
              }),
              (e.my = r.join(" "))),
            d[t.element].position(t));
        }),
        (this.setID = function (t) {
          return d.widget.attr("id", t), c;
        }),
        (this.setHeaderMessage = function (t) {
          return c.getElements("header").html(t), c;
        }),
        (this.setMessage = function (t) {
          return d.message.html(t), c;
        }),
        (this.setSettings = function (t, e) {
          return (
            jQuery.isPlainObject(e) ? p.extend(!0, u[t], e) : (u[t] = e), c
          );
        }),
        (this.show = function () {
          var t;
          return (
            clearTimeout(l),
            d.widget.appendTo(d.container).hide(),
            e("show", arguments),
            c.refreshPosition(),
            u.hide.auto && (l = setTimeout(c.hide, u.hide.autoDelay)),
            (t = [d.window]),
            d.iframe && t.push(jQuery(d.iframe[0].contentWindow)),
            t.forEach(function (t) {
              u.hide.onEscKeyPress && t.on("keyup", r),
                u.hide.onOutsideClick && t[0].addEventListener("click", o, !0),
                u.hide.onOutsideContextMenu &&
                  t[0].addEventListener("contextmenu", o, !0),
                u.position.autoRefresh && t.on("resize", c.refreshPosition);
            }),
            (u.hide.onClick || u.hide.onBackgroundClick) &&
              d.widget.on("click", i),
            u.preventScroll &&
              c.getElements("body").addClass(u.classes.preventScroll),
            c.trigger("show"),
            c
          );
        }),
        (this.trigger = function (t, n) {
          var e = "on" + t[0].toUpperCase() + t.slice(1);
          c[e] && c[e](n);
          t = a[t];
          if (t)
            return (
              p.each(t, function (t, e) {
                e.call(c, n);
              }),
              c
            );
        });
    }),
    (y.Widget.prototype.types = []),
    (y.Widget.prototype.buildWidget = function () {
      var t = this.getElements(),
        e = this.getSettings();
      t.widget.append(t.header, t.message),
        this.setHeaderMessage(e.headerMessage),
        this.setMessage(e.message),
        this.getSettings("closeButton") && t.widget.prepend(t.closeButton);
    }),
    (y.Widget.prototype.attachEvents = function () {
      var t = this;
      t.getSettings("closeButton") &&
        t.getElements("closeButton").on("click", function () {
          t.hide();
        });
    }),
    (y.Widget.prototype.getDefaultSettings = function () {
      return {};
    }),
    (y.Widget.prototype.getClosureMethods = function () {
      return [];
    }),
    (y.Widget.prototype.onHide = function () {}),
    (y.Widget.prototype.onShow = function () {}),
    (y.Widget.prototype.onInit = function () {}),
    (y.Widget.prototype.onReady = function () {}),
    (y.widgetsTypes.simple = y.Widget),
    y.addWidgetType("buttons", {
      activeKeyUp: function (t) {
        9 === t.which && t.preventDefault(),
          this.hotKeys[t.which] && this.hotKeys[t.which](this);
      },
      activeKeyDown: function (t) {
        var e, n;
        !this.focusedButton ||
          (9 === t.which &&
            (t.preventDefault(),
            (e = this.focusedButton.index()),
            t.shiftKey
              ? (n = e - 1) < 0 && (n = this.buttons.length - 1)
              : (n = e + 1) >= this.buttons.length && (n = 0),
            (this.focusedButton = this.buttons[n].focus())));
      },
      addButton: function (t) {
        var e = this,
          n = e.getSettings(),
          i = jQuery.extend(n.button, t),
          o = t.classes ? t.classes + " " : "";
        o += n.classes.globalPrefix + "-button";
        i = e.addElement(t.name, p("<" + i.tag + ">").html(t.text), o);
        e.buttons.push(i);
        o = function () {
          n.hide.onButtonClick && e.hide(),
            p.isFunction(t.callback) && t.callback.call(this, e);
        };
        return (
          i.on("click", o),
          t.hotKey && (this.hotKeys[t.hotKey] = o),
          this.getElements("buttonsWrapper").append(i),
          t.focus && (this.focusedButton = i),
          e
        );
      },
      bindHotKeys: function () {
        this.getElements("window").on({
          keyup: this.activeKeyUp,
          keydown: this.activeKeyDown,
        });
      },
      buildWidget: function () {
        y.Widget.prototype.buildWidget.apply(this, arguments);
        var t = this.addElement("buttonsWrapper");
        this.getElements("widget").append(t);
      },
      getClosureMethods: function () {
        return ["activeKeyUp", "activeKeyDown"];
      },
      getDefaultSettings: function () {
        return { hide: { onButtonClick: !0 }, button: { tag: "button" } };
      },
      onHide: function () {
        this.unbindHotKeys();
      },
      onInit: function () {
        (this.buttons = []), (this.hotKeys = {}), (this.focusedButton = null);
      },
      onShow: function () {
        this.bindHotKeys(),
          this.focusedButton || (this.focusedButton = this.buttons[0]),
          this.focusedButton && this.focusedButton.focus();
      },
      unbindHotKeys: function () {
        this.getElements("window").off({
          keyup: this.activeKeyUp,
          keydown: this.activeKeyDown,
        });
      },
    }),
    y.addWidgetType(
      "lightbox",
      y.getWidgetType("buttons").extend("lightbox", {
        getDefaultSettings: function () {
          var t = y
            .getWidgetType("buttons")
            .prototype.getDefaultSettings.apply(this, arguments);
          return p.extend(!0, t, {
            contentWidth: "auto",
            contentHeight: "auto",
            position: {
              element: "widgetContent",
              of: "widget",
              autoRefresh: !0,
            },
          });
        },
        buildWidget: function () {
          y.getWidgetType("buttons").prototype.buildWidget.apply(
            this,
            arguments
          );
          var t = this.addElement("widgetContent"),
            e = this.getElements();
          t.append(e.header, e.message, e.buttonsWrapper),
            e.widget.html(t),
            e.closeButton && t.prepend(e.closeButton);
        },
        onReady: function () {
          var t = this.getElements(),
            e = this.getSettings();
          "auto" !== e.contentWidth && t.message.width(e.contentWidth),
            "auto" !== e.contentHeight && t.message.height(e.contentHeight);
        },
      })
    ),
    y.addWidgetType(
      "confirm",
      y.getWidgetType("lightbox").extend("confirm", {
        onReady: function () {
          y.getWidgetType("lightbox").prototype.onReady.apply(this, arguments);
          var t = this.getSettings("strings"),
            e = "cancel" === this.getSettings("defaultOption");
          this.addButton({
            name: "cancel",
            text: t.cancel,
            callback: function (t) {
              t.trigger("cancel");
            },
            focus: e,
          }),
            this.addButton({
              name: "ok",
              text: t.confirm,
              callback: function (t) {
                t.trigger("confirm");
              },
              focus: !e,
            });
        },
        getDefaultSettings: function () {
          var t = y
            .getWidgetType("lightbox")
            .prototype.getDefaultSettings.apply(this, arguments);
          return (
            (t.strings = { confirm: "OK", cancel: "Cancel" }),
            (t.defaultOption = "cancel"),
            t
          );
        },
      })
    ),
    y.addWidgetType(
      "alert",
      y.getWidgetType("lightbox").extend("alert", {
        onReady: function () {
          y.getWidgetType("lightbox").prototype.onReady.apply(this, arguments);
          var t = this.getSettings("strings");
          this.addButton({
            name: "ok",
            text: t.confirm,
            callback: function (t) {
              t.trigger("confirm");
            },
          });
        },
        getDefaultSettings: function () {
          var t = y
            .getWidgetType("lightbox")
            .prototype.getDefaultSettings.apply(this, arguments);
          return (t.strings = { confirm: "OK" }), t;
        },
      })
    ),
    (t.DialogsManager = y);
})(
  "undefined" != typeof jQuery
    ? jQuery
    : "function" == typeof require && require("jquery"),
  "undefined" != typeof module && void 0 !== module.exports
    ? module.exports
    : window
); /*! elementor - v3.6.5 - 27-04-2022 */
("use strict");
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([
  [819],
  {
    9220: (e, t, n) => {
      var i = n(7914);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(n(8135));
      class _default extends elementorModules.ViewModule {
        constructor(...e) {
          super(...e),
            (this.documents = {}),
            this.initDocumentClasses(),
            this.attachDocumentsClasses();
        }
        getDefaultSettings() {
          return { selectors: { document: ".elementor" } };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors");
          return { $documents: jQuery(e.document) };
        }
        initDocumentClasses() {
          (this.documentClasses = { base: s.default }),
            elementorFrontend.hooks.doAction(
              "elementor/frontend/documents-manager/init-classes",
              this
            );
        }
        addDocumentClass(e, t) {
          this.documentClasses[e] = t;
        }
        attachDocumentsClasses() {
          this.elements.$documents.each((e, t) =>
            this.attachDocumentClass(jQuery(t))
          );
        }
        attachDocumentClass(e) {
          const t = e.data(),
            n = t.elementorId,
            i = t.elementorType,
            s = this.documentClasses[i] || this.documentClasses.base;
          this.documents[n] = new s({ $element: e, id: n });
        }
      }
      t.default = _default;
    },
    9804: (e, t, n) => {
      var i = n(7914),
        s = i(n(6397)),
        o = i(n(8704)),
        r = i(n(4985)),
        a = i(n(7537)),
        l = i(n(355)),
        d = i(n(2804)),
        c = i(n(3384));
      e.exports = function (e) {
        const t = {};
        this.elementsHandlers = {
          "accordion.default": () => n.e(209).then(n.bind(n, 8470)),
          "alert.default": () => n.e(745).then(n.bind(n, 9269)),
          "counter.default": () => n.e(120).then(n.bind(n, 7884)),
          "progress.default": () => n.e(192).then(n.bind(n, 1351)),
          "tabs.default": () => n.e(520).then(n.bind(n, 9459)),
          "toggle.default": () => n.e(181).then(n.bind(n, 2)),
          "video.default": () => n.e(791).then(n.bind(n, 5363)),
          "image-carousel.default": () => n.e(268).then(n.bind(n, 5914)),
          "text-editor.default": () => n.e(357).then(n.bind(n, 1327)),
          "wp-widget-media_audio.default": () => n.e(52).then(n.bind(n, 7602)),
        };
        const addElementsHandlers = () => {
            (this.elementsHandlers.section = [
              d.default,
              ...o.default,
              l.default,
              c.default,
            ]),
              (this.elementsHandlers.container = [...o.default]),
              elementorFrontend.isEditMode() &&
                this.elementsHandlers.container.push(...r.default),
              (this.elementsHandlers.column = a.default),
              e.each(this.elementsHandlers, (e, t) => {
                const n = e.split(".");
                e = n[0];
                const i = n[1] || null;
                this.attachHandler(e, t, i);
              });
          },
          isClassHandler = (e) => {
            var t;
            return null === (t = e.prototype) || void 0 === t
              ? void 0
              : t.getUniqueHandlerID;
          },
          addHandlerWithHook = (e, t, n = "default") => {
            (n = n ? "." + n : ""),
              elementorFrontend.hooks.addAction(
                `frontend/element_ready/${e}${n}`,
                (e) => {
                  if (isClassHandler(t))
                    this.addHandler(t, { $element: e }, !0);
                  else {
                    const n = t();
                    if (!n) return;
                    n instanceof Promise
                      ? n.then(({ default: t }) => {
                          this.addHandler(t, { $element: e }, !0);
                        })
                      : this.addHandler(n, { $element: e }, !0);
                  }
                }
              );
          };
        (this.addHandler = function (e, n) {
          const i = n.$element.data("model-cid");
          let s;
          if (i) {
            (s = e.prototype.getConstructorID()), t[i] || (t[i] = {});
            const n = t[i][s];
            n && n.onDestroy();
          }
          const o = new e(n);
          i && (t[i][s] = o);
        }),
          (this.attachHandler = (e, t, n) => {
            Array.isArray(t) || (t = [t]),
              t.forEach((t) => addHandlerWithHook(e, t, n));
          }),
          (this.getHandler = function (e) {
            const t = this.elementsHandlers[e];
            return isClassHandler(t)
              ? t
              : new Promise((e) => {
                  t().then(({ default: t }) => {
                    e(t);
                  });
                });
          }),
          (this.getHandlers = function (e) {
            return (
              elementorCommon.helpers.softDeprecated(
                "getHandlers",
                "3.1.0",
                "elementorFrontend.elementsHandler.getHandler"
              ),
              e ? this.getHandler(e) : this.elementsHandlers
            );
          }),
          (this.runReadyTrigger = function (t) {
            if (elementorFrontend.config.is_static) return;
            const n = jQuery(t),
              i = n.attr("data-element_type");
            if (
              i &&
              (elementorFrontend.hooks.doAction(
                "frontend/element_ready/global",
                n,
                e
              ),
              elementorFrontend.hooks.doAction(
                `frontend/element_ready/${i}`,
                n,
                e
              ),
              "widget" === i)
            ) {
              const t = n.attr("data-widget_type");
              elementorFrontend.hooks.doAction(
                `frontend/element_ready/${t}`,
                n,
                e
              );
            }
          }),
          (this.init = () => {
            elementorFrontend.hooks.addAction(
              "frontend/element_ready/global",
              s.default
            ),
              addElementsHandlers();
          });
      };
    },
    5654: (e, t, n) => {
      var i = n(7914);
      n(59);
      var s = i(n(9220)),
        o = i(n(5107)),
        r = i(n(3308)),
        a = i(n(1604)),
        l = i(n(1911)),
        d = i(n(4773)),
        c = i(n(2064)),
        u = i(n(8628)),
        h = i(n(8646)),
        m = i(n(6866)),
        g = i(n(4375)),
        p = i(n(6404)),
        f = i(n(6046)),
        v = n(6028);
      const b = n(9469),
        y = n(9804),
        _ = n(3346);
      class Frontend extends elementorModules.ViewModule {
        constructor(...e) {
          super(...e),
            (this.config = elementorFrontendConfig),
            (this.config.legacyMode = {
              get elementWrappers() {
                return (
                  elementorFrontend.isEditMode() &&
                    elementorCommon.helpers.hardDeprecated(
                      "elementorFrontend.config.legacyMode.elementWrappers",
                      "3.1.0",
                      "elementorFrontend.config.experimentalFeatures.e_dom_optimization"
                    ),
                  !elementorFrontend.config.experimentalFeatures
                    .e_dom_optimization
                );
              },
            }),
            this.populateActiveBreakpointsConfig();
        }
        get Module() {
          return (
            this.isEditMode() &&
              parent.elementorCommon.helpers.hardDeprecated(
                "elementorFrontend.Module",
                "2.5.0",
                "elementorModules.frontend.handlers.Base"
              ),
            elementorModules.frontend.handlers.Base
          );
        }
        getDefaultSettings() {
          return {
            selectors: { elementor: ".elementor", adminBar: "#wpadminbar" },
          };
        }
        getDefaultElements() {
          const e = {
            window,
            $window: jQuery(window),
            $document: jQuery(document),
            $head: jQuery(document.head),
            $body: jQuery(document.body),
            $deviceMode: jQuery("<span>", {
              id: "elementor-device-mode",
              class: "elementor-screen-only",
            }),
          };
          return e.$body.append(e.$deviceMode), e;
        }
        bindEvents() {
          this.elements.$window.on("resize", () => this.setDeviceModeData());
        }
        getElements(e) {
          return this.getItems(this.elements, e);
        }
        getPageSettings(e) {
          const t = this.isEditMode()
            ? elementor.settings.page.model.attributes
            : this.config.settings.page;
          return this.getItems(t, e);
        }
        getGeneralSettings(e) {
          return (
            this.isEditMode() &&
              parent.elementorCommon.helpers.softDeprecated(
                "getGeneralSettings",
                "3.0.0",
                "getKitSettings and remove the `elementor_` prefix"
              ),
            this.getKitSettings(`elementor_${e}`)
          );
        }
        getKitSettings(e) {
          return this.getItems(this.config.kit, e);
        }
        getCurrentDeviceMode() {
          return getComputedStyle(
            this.elements.$deviceMode[0],
            ":after"
          ).content.replace(/"/g, "");
        }
        getDeviceSetting(e, t, n) {
          if ("widescreen" === e) return this.getWidescreenSetting(t, n);
          const i = elementorFrontend.breakpoints.getActiveBreakpointsList({
            largeToSmall: !0,
            withDesktop: !0,
          });
          let s = i.indexOf(e);
          for (; s > 0; ) {
            const e = t[n + "_" + i[s]];
            if (e || 0 === e) return e;
            s--;
          }
          return t[n];
        }
        getWidescreenSetting(e, t) {
          const n = t + "_widescreen";
          let i;
          return (i = e[n] ? e[n] : e[t]), i;
        }
        getCurrentDeviceSetting(e, t) {
          return this.getDeviceSetting(
            elementorFrontend.getCurrentDeviceMode(),
            e,
            t
          );
        }
        isEditMode() {
          return this.config.environmentMode.edit;
        }
        isWPPreviewMode() {
          return this.config.environmentMode.wpPreview;
        }
        initDialogsManager() {
          let e;
          this.getDialogsManager = () => (
            e || (e = new DialogsManager.Instance()), e
          );
        }
        initOnReadyComponents() {
          (this.utils = {
            youtube: new a.default(),
            vimeo: new l.default(),
            baseVideoLoader: new d.default(),
            anchors: new _(),
            get lightbox() {
              return h.default.getLightbox();
            },
            urlActions: new c.default(),
            swiper: u.default,
            environment: r.default,
            assetsLoader: new m.default(),
            escapeHTML: v.escapeHTML,
          }),
            (this.modules = {
              StretchElement: elementorModules.frontend.tools.StretchElement,
              Masonry: elementorModules.utils.Masonry,
            }),
            this.elementsHandler.init(),
            this.isEditMode()
              ? elementor.once("document:loaded", () => this.onDocumentLoaded())
              : this.onDocumentLoaded();
        }
        initOnReadyElements() {
          this.elements.$wpAdminBar = this.elements.$document.find(
            this.getSettings("selectors.adminBar")
          );
        }
        addUserAgentClasses() {
          for (const [e, t] of Object.entries(r.default))
            t && this.elements.$body.addClass("e--ua-" + e);
        }
        setDeviceModeData() {
          this.elements.$body.attr(
            "data-elementor-device-mode",
            this.getCurrentDeviceMode()
          );
        }
        addListenerOnce(e, t, n, i) {
          if ((i || (i = this.elements.$window), this.isEditMode()))
            if ((this.removeListeners(e, t, i), i instanceof jQuery)) {
              const s = t + "." + e;
              i.on(s, n);
            } else i.on(t, n, e);
          else i.on(t, n);
        }
        removeListeners(e, t, n, i) {
          if ((i || (i = this.elements.$window), i instanceof jQuery)) {
            const s = t + "." + e;
            i.off(s, n);
          } else i.off(t, n, e);
        }
        debounce(e, t) {
          let n;
          return function () {
            const i = this,
              s = arguments,
              later = () => {
                (n = null), e.apply(i, s);
              },
              o = !n;
            clearTimeout(n), (n = setTimeout(later, t)), o && e.apply(i, s);
          };
        }
        waypoint(e, t, n) {
          n = jQuery.extend({ offset: "100%", triggerOnce: !0 }, n);
          return e.elementorWaypoint(function () {
            const e = this.element || this,
              i = t.apply(e, arguments);
            return n.triggerOnce && this.destroy && this.destroy(), i;
          }, n);
        }
        muteMigrationTraces() {
          (jQuery.migrateMute = !0), (jQuery.migrateTrace = !1);
        }
        initModules() {
          const e = { shapes: f.default };
          elementorFrontend.trigger("elementor/modules/init:before"),
            elementorFrontend.trigger("elementor/modules/init/before"),
            Object.entries(e).forEach(([e, t]) => {
              this.modulesHandlers[e] = new t();
            });
        }
        populateActiveBreakpointsConfig() {
          (this.config.responsive.activeBreakpoints = {}),
            Object.entries(this.config.responsive.breakpoints).forEach(
              ([e, t]) => {
                t.is_enabled &&
                  (this.config.responsive.activeBreakpoints[e] = t);
              }
            );
        }
        init() {
          (this.hooks = new b()),
            (this.breakpoints = new g.default(this.config.responsive)),
            (this.storage = new o.default()),
            (this.elementsHandler = new y(jQuery)),
            (this.modulesHandlers = {}),
            this.addUserAgentClasses(),
            this.setDeviceModeData(),
            this.initDialogsManager(),
            this.isEditMode() && this.muteMigrationTraces(),
            p.default.dispatch(
              this.elements.$window,
              "elementor/frontend/init"
            ),
            this.initModules(),
            this.initOnReadyElements(),
            this.initOnReadyComponents();
        }
        onDocumentLoaded() {
          (this.documentsManager = new s.default()),
            this.trigger("components:init"),
            new h.default();
        }
      }
      (window.elementorFrontend = new Frontend()),
        elementorFrontend.isEditMode() ||
          jQuery(() => elementorFrontend.init());
    },
    4058: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class BackgroundSlideshow extends elementorModules.frontend.handlers
        .SwiperBase {
        getDefaultSettings() {
          return {
            classes: {
              swiperContainer:
                "elementor-background-slideshow swiper-container",
              swiperWrapper: "swiper-wrapper",
              swiperSlide: "elementor-background-slideshow__slide swiper-slide",
              swiperPreloader: "swiper-lazy-preloader",
              slideBackground: "elementor-background-slideshow__slide__image",
              kenBurns: "elementor-ken-burns",
              kenBurnsActive: "elementor-ken-burns--active",
              kenBurnsIn: "elementor-ken-burns--in",
              kenBurnsOut: "elementor-ken-burns--out",
            },
          };
        }
        getSwiperOptions() {
          const e = this.getElementSettings(),
            t = {
              grabCursor: !1,
              slidesPerView: 1,
              slidesPerGroup: 1,
              loop: "yes" === e.background_slideshow_loop,
              speed: e.background_slideshow_transition_duration,
              autoplay: {
                delay: e.background_slideshow_slide_duration,
                stopOnLastSlide: !e.background_slideshow_loop,
              },
              handleElementorBreakpoints: !0,
              on: {
                slideChange: () => {
                  e.background_slideshow_ken_burns && this.handleKenBurns();
                },
              },
            };
          switch (
            ("yes" === e.background_slideshow_loop &&
              (t.loopedSlides = this.getSlidesCount()),
            e.background_slideshow_slide_transition)
          ) {
            case "fade":
              (t.effect = "fade"), (t.fadeEffect = { crossFade: !0 });
              break;
            case "slide_down":
              t.autoplay.reverseDirection = !0;
            case "slide_up":
              t.direction = "vertical";
          }
          return (
            "yes" === e.background_slideshow_lazyload &&
              (t.lazy = { loadPrevNext: !0, loadPrevNextAmount: 1 }),
            t
          );
        }
        buildSwiperElements() {
          const e = this.getSettings("classes"),
            t = this.getElementSettings(),
            n =
              "slide_left" === t.background_slideshow_slide_transition
                ? "ltr"
                : "rtl",
            i = jQuery("<div>", { class: e.swiperContainer, dir: n }),
            s = jQuery("<div>", { class: e.swiperWrapper }),
            o = t.background_slideshow_ken_burns,
            r = "yes" === t.background_slideshow_lazyload;
          let a = e.slideBackground;
          if (o) {
            a += " " + e.kenBurns;
            const n =
              "in" === t.background_slideshow_ken_burns_zoom_direction
                ? "kenBurnsIn"
                : "kenBurnsOut";
            a += " " + e[n];
          }
          r && (a += " swiper-lazy"),
            (this.elements.$slides = jQuery()),
            t.background_slideshow_gallery.forEach((t) => {
              const n = jQuery("<div>", { class: e.swiperSlide });
              let i;
              if (r) {
                const n = jQuery("<div>", { class: e.swiperPreloader });
                (i = jQuery("<div>", { class: a, "data-background": t.url })),
                  i.append(n);
              } else
                i = jQuery("<div>", {
                  class: a,
                  style: 'background-image: url("' + t.url + '");',
                });
              n.append(i),
                s.append(n),
                (this.elements.$slides = this.elements.$slides.add(n));
            }),
            i.append(s),
            this.$element.prepend(i),
            (this.elements.$backgroundSlideShowContainer = i);
        }
        async initSlider() {
          if (1 >= this.getSlidesCount()) return;
          const e = this.getElementSettings(),
            t = elementorFrontend.utils.swiper;
          (this.swiper = await new t(
            this.elements.$backgroundSlideShowContainer,
            this.getSwiperOptions()
          )),
            this.elements.$backgroundSlideShowContainer.data(
              "swiper",
              this.swiper
            ),
            e.background_slideshow_ken_burns && this.handleKenBurns();
        }
        activate() {
          this.buildSwiperElements(), this.initSlider();
        }
        deactivate() {
          this.swiper &&
            (this.swiper.destroy(),
            this.elements.$backgroundSlideShowContainer.remove());
        }
        run() {
          "slideshow" === this.getElementSettings("background_background")
            ? this.activate()
            : this.deactivate();
        }
        onInit() {
          super.onInit(),
            this.getElementSettings("background_slideshow_gallery") &&
              this.run();
        }
        onDestroy() {
          super.onDestroy(), this.deactivate();
        }
        onElementChange(e) {
          "background_background" === e && this.run();
        }
      }
      t.default = BackgroundSlideshow;
    },
    9501: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class BackgroundVideo extends elementorModules.frontend.handlers.Base {
        getDefaultSettings() {
          return {
            selectors: {
              backgroundVideoContainer: ".elementor-background-video-container",
              backgroundVideoEmbed: ".elementor-background-video-embed",
              backgroundVideoHosted: ".elementor-background-video-hosted",
            },
          };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors"),
            t = {
              $backgroundVideoContainer: this.$element.find(
                e.backgroundVideoContainer
              ),
            };
          return (
            (t.$backgroundVideoEmbed = t.$backgroundVideoContainer.children(
              e.backgroundVideoEmbed
            )),
            (t.$backgroundVideoHosted = t.$backgroundVideoContainer.children(
              e.backgroundVideoHosted
            )),
            t
          );
        }
        calcVideosSize(e) {
          let t = "16:9";
          "vimeo" === this.videoType && (t = e[0].width + ":" + e[0].height);
          const n = this.elements.$backgroundVideoContainer.outerWidth(),
            i = this.elements.$backgroundVideoContainer.outerHeight(),
            s = t.split(":"),
            o = s[0] / s[1],
            r = n / i > o;
          return { width: r ? n : i * o, height: r ? n / o : i };
        }
        changeVideoSize() {
          if ("hosted" !== this.videoType && !this.player) return;
          let e;
          if (
            ("youtube" === this.videoType
              ? (e = jQuery(this.player.getIframe()))
              : "vimeo" === this.videoType
              ? (e = jQuery(this.player.element))
              : "hosted" === this.videoType &&
                (e = this.elements.$backgroundVideoHosted),
            !e)
          )
            return;
          const t = this.calcVideosSize(e);
          e.width(t.width).height(t.height);
        }
        startVideoLoop(e) {
          if (!this.player.getIframe().contentWindow) return;
          const t = this.getElementSettings(),
            n = t.background_video_start || 0,
            i = t.background_video_end;
          if (!t.background_play_once || e) {
            if ((this.player.seekTo(n), i)) {
              setTimeout(() => {
                this.startVideoLoop(!1);
              }, 1e3 * (i - n + 1));
            }
          } else this.player.stopVideo();
        }
        prepareVimeoVideo(e, t) {
          const n = this.getElementSettings(),
            i = {
              url: t,
              width: this.elements.$backgroundVideoContainer.outerWidth().width,
              autoplay: !0,
              loop: !n.background_play_once,
              transparent: !1,
              background: !0,
              muted: !0,
            };
          (this.player = new e.Player(
            this.elements.$backgroundVideoContainer,
            i
          )),
            this.handleVimeoStartEndTimes(n),
            this.player.ready().then(() => {
              jQuery(this.player.element).addClass(
                "elementor-background-video-embed"
              ),
                this.changeVideoSize();
            });
        }
        handleVimeoStartEndTimes(e) {
          e.background_video_start &&
            this.player.on("play", (t) => {
              0 === t.seconds &&
                this.player.setCurrentTime(e.background_video_start);
            }),
            this.player.on("timeupdate", (t) => {
              e.background_video_end &&
                e.background_video_end < t.seconds &&
                (e.background_play_once
                  ? this.player.pause()
                  : this.player.setCurrentTime(e.background_video_start)),
                this.player.getDuration().then((n) => {
                  e.background_video_start &&
                    !e.background_video_end &&
                    t.seconds > n - 0.5 &&
                    this.player.setCurrentTime(e.background_video_start);
                });
            });
        }
        prepareYTVideo(e, t) {
          const n = this.elements.$backgroundVideoContainer,
            i = this.getElementSettings();
          let s = e.PlayerState.PLAYING;
          window.chrome && (s = e.PlayerState.UNSTARTED);
          const o = {
            videoId: t,
            events: {
              onReady: () => {
                this.player.mute(),
                  this.changeVideoSize(),
                  this.startVideoLoop(!0),
                  this.player.playVideo();
              },
              onStateChange: (t) => {
                switch (t.data) {
                  case s:
                    n.removeClass("elementor-invisible elementor-loading");
                    break;
                  case e.PlayerState.ENDED:
                    this.player.seekTo(i.background_video_start || 0),
                      i.background_play_once && this.player.destroy();
                }
              },
            },
            playerVars: { controls: 0, rel: 0, playsinline: 1 },
          };
          i.background_privacy_mode &&
            ((o.host = "https://www.youtube-nocookie.com"),
            (o.origin = window.location.hostname)),
            n.addClass("elementor-loading elementor-invisible"),
            (this.player = new e.Player(
              this.elements.$backgroundVideoEmbed[0],
              o
            ));
        }
        activate() {
          let e,
            t = this.getElementSettings("background_video_link");
          const n = this.getElementSettings("background_play_once");
          if (
            (-1 !== t.indexOf("vimeo.com")
              ? ((this.videoType = "vimeo"),
                (this.apiProvider = elementorFrontend.utils.vimeo))
              : t.match(
                  /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/
                ) &&
                ((this.videoType = "youtube"),
                (this.apiProvider = elementorFrontend.utils.youtube)),
            this.apiProvider)
          )
            (e = this.apiProvider.getVideoIDFromURL(t)),
              this.apiProvider.onApiReady((n) => {
                "youtube" === this.videoType && this.prepareYTVideo(n, e),
                  "vimeo" === this.videoType && this.prepareVimeoVideo(n, t);
              });
          else {
            this.videoType = "hosted";
            const e = this.getElementSettings("background_video_start"),
              i = this.getElementSettings("background_video_end");
            (e || i) && (t += "#t=" + (e || 0) + (i ? "," + i : "")),
              this.elements.$backgroundVideoHosted
                .attr("src", t)
                .one("canplay", this.changeVideoSize.bind(this)),
              n &&
                this.elements.$backgroundVideoHosted.on("ended", () => {
                  this.elements.$backgroundVideoHosted.hide();
                });
          }
          elementorFrontend.elements.$window.on("resize", this.changeVideoSize);
        }
        deactivate() {
          ("youtube" === this.videoType && this.player.getIframe()) ||
          "vimeo" === this.videoType
            ? this.player.destroy()
            : this.elements.$backgroundVideoHosted
                .removeAttr("src")
                .off("ended"),
            elementorFrontend.elements.$window.off(
              "resize",
              this.changeVideoSize
            );
        }
        run() {
          const e = this.getElementSettings();
          (e.background_play_on_mobile ||
            "mobile" !== elementorFrontend.getCurrentDeviceMode()) &&
            ("video" === e.background_background && e.background_video_link
              ? this.activate()
              : this.deactivate());
        }
        onInit(...e) {
          super.onInit(...e),
            (this.changeVideoSize = this.changeVideoSize.bind(this)),
            this.run();
        }
        onElementChange(e) {
          "background_background" === e && this.run();
        }
      }
      t.default = BackgroundVideo;
    },
    8704: (e, t, n) => {
      var i = n(7914);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(n(4058)),
        o = i(n(9501)),
        r = [s.default, o.default];
      t.default = r;
    },
    7537: (e, t, n) => {
      var i = n(7914);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = [i(n(4058)).default];
      t.default = s;
    },
    4985: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = [
        () => n.e(413).then(n.bind(n, 2929)),
        () => n.e(413).then(n.bind(n, 343)),
      ];
      t.default = i;
    },
    6397: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class GlobalHandler extends elementorModules.frontend.handlers.Base {
        getWidgetType() {
          return "global";
        }
        animate() {
          const e = this.$element,
            t = this.getAnimation();
          if ("none" === t) return void e.removeClass("elementor-invisible");
          const n = this.getElementSettings(),
            i = n._animation_delay || n.animation_delay || 0;
          e.removeClass(t),
            this.currentAnimation && e.removeClass(this.currentAnimation),
            (this.currentAnimation = t),
            setTimeout(() => {
              e.removeClass("elementor-invisible").addClass("animated " + t);
            }, i);
        }
        getAnimation() {
          return (
            this.getCurrentDeviceSetting("animation") ||
            this.getCurrentDeviceSetting("_animation")
          );
        }
        onInit(...e) {
          if ((super.onInit(...e), this.getAnimation())) {
            const e = elementorModules.utils.Scroll.scrollObserver({
              callback: (t) => {
                t.isInViewport &&
                  (this.animate(), e.unobserve(this.$element[0]));
              },
            });
            e.observe(this.$element[0]);
          }
        }
        onElementChange(e) {
          /^_?animation/.test(e) && this.animate();
        }
      }
      t.default = (e) => {
        elementorFrontend.elementsHandler.addHandler(GlobalHandler, {
          $element: e,
        });
      };
    },
    355: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class HandlesPosition extends elementorModules.frontend.handlers.Base {
        isActive() {
          return elementorFrontend.isEditMode();
        }
        isFirstSection() {
          return (
            this.$element[0] ===
            document.querySelector(
              ".elementor-edit-mode .elementor-top-section"
            )
          );
        }
        isOverflowHidden() {
          return "hidden" === this.$element.css("overflow");
        }
        getOffset() {
          if ("body" === elementor.config.document.container)
            return this.$element.offset().top;
          const e = jQuery(elementor.config.document.container);
          return this.$element.offset().top - e.offset().top;
        }
        setHandlesPosition() {
          const e = elementor.documents.getCurrent();
          if (!e || !e.container.isEditable()) return;
          const t = "elementor-section--handles-inside",
            n = this.$element.find(
              "> .elementor-element-overlay > .elementor-editor-section-settings"
            );
          if (elementor.settings.page.model.attributes.scroll_snap)
            return void this.$element.addClass(t);
          const i = this.isOverflowHidden();
          if (!i && !this.isFirstSection()) return;
          const s = i ? 0 : this.getOffset();
          s < 25
            ? (this.$element.addClass(t),
              s < -5 ? n.css("top", -s) : n.css("top", ""))
            : this.$element.removeClass(t);
        }
        onInit() {
          this.isActive() &&
            (this.setHandlesPosition(),
            this.$element.on("mouseenter", this.setHandlesPosition.bind(this)));
        }
      }
      t.default = HandlesPosition;
    },
    3384: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class Shapes extends elementorModules.frontend.handlers.Base {
        getDefaultSettings() {
          return {
            selectors: { container: "> .elementor-shape-%s" },
            svgURL: elementorFrontend.config.urls.assets + "shapes/",
          };
        }
        getDefaultElements() {
          const e = {},
            t = this.getSettings("selectors");
          return (
            (e.$topContainer = this.$element.find(
              t.container.replace("%s", "top")
            )),
            (e.$bottomContainer = this.$element.find(
              t.container.replace("%s", "bottom")
            )),
            e
          );
        }
        isActive() {
          return elementorFrontend.isEditMode();
        }
        getSvgURL(e, t) {
          let n = this.getSettings("svgURL") + t + ".svg";
          return (
            elementor.config.additional_shapes &&
              e in elementor.config.additional_shapes &&
              ((n = elementor.config.additional_shapes[e]),
              -1 < t.indexOf("-negative") &&
                (n = n.replace(".svg", "-negative.svg"))),
            n
          );
        }
        buildSVG(e) {
          const t = "shape_divider_" + e,
            n = this.getElementSettings(t),
            i = this.elements["$" + e + "Container"];
          if ((i.attr("data-shape", n), !n)) return void i.empty();
          let s = n;
          this.getElementSettings(t + "_negative") && (s += "-negative");
          const o = this.getSvgURL(n, s);
          jQuery.get(o, (e) => {
            i.empty().append(e.childNodes[0]);
          }),
            this.setNegative(e);
        }
        setNegative(e) {
          this.elements["$" + e + "Container"].attr(
            "data-negative",
            !!this.getElementSettings("shape_divider_" + e + "_negative")
          );
        }
        onInit(...e) {
          this.isActive(this.getSettings()) &&
            (super.onInit(...e),
            ["top", "bottom"].forEach((e) => {
              this.getElementSettings("shape_divider_" + e) && this.buildSVG(e);
            }));
        }
        onElementChange(e) {
          const t = e.match(/^shape_divider_(top|bottom)$/);
          if (t) return void this.buildSVG(t[1]);
          const n = e.match(/^shape_divider_(top|bottom)_negative$/);
          n && (this.buildSVG(n[1]), this.setNegative(n[1]));
        }
      }
      t.default = Shapes;
    },
    2804: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class StretchedSection extends elementorModules.frontend.handlers.Base {
        bindEvents() {
          const e = this.getUniqueHandlerID();
          elementorFrontend.addListenerOnce(e, "resize", this.stretch),
            elementorFrontend.addListenerOnce(
              e,
              "sticky:stick",
              this.stretch,
              this.$element
            ),
            elementorFrontend.addListenerOnce(
              e,
              "sticky:unstick",
              this.stretch,
              this.$element
            ),
            elementorFrontend.isEditMode() &&
              ((this.onKitChangeStretchContainerChange =
                this.onKitChangeStretchContainerChange.bind(this)),
              elementor.channels.editor.on(
                "kit:change:stretchContainer",
                this.onKitChangeStretchContainerChange
              ));
        }
        unbindEvents() {
          elementorFrontend.removeListeners(
            this.getUniqueHandlerID(),
            "resize",
            this.stretch
          ),
            elementorFrontend.isEditMode() &&
              elementor.channels.editor.off(
                "kit:change:stretchContainer",
                this.onKitChangeStretchContainerChange
              );
        }
        isActive(e) {
          return (
            elementorFrontend.isEditMode() ||
            e.$element.hasClass("elementor-section-stretched")
          );
        }
        initStretch() {
          (this.stretch = this.stretch.bind(this)),
            (this.stretchElement =
              new elementorModules.frontend.tools.StretchElement({
                element: this.$element,
                selectors: { container: this.getStretchContainer() },
              }));
        }
        getStretchContainer() {
          return (
            elementorFrontend.getKitSettings("stretched_section_container") ||
            window
          );
        }
        stretch() {
          this.getElementSettings("stretch_section") &&
            this.stretchElement.stretch();
        }
        onInit(...e) {
          this.isActive(this.getSettings()) &&
            (this.initStretch(), super.onInit(...e), this.stretch());
        }
        onElementChange(e) {
          "stretch_section" === e &&
            (this.getElementSettings("stretch_section")
              ? this.stretch()
              : this.stretchElement.reset());
        }
        onKitChangeStretchContainerChange() {
          this.stretchElement.setSettings(
            "selectors.container",
            this.getStretchContainer()
          ),
            this.stretch();
        }
      }
      t.default = StretchedSection;
    },
    3346: (e, t, n) => {
      var i = n(6028);
      e.exports = elementorModules.ViewModule.extend({
        getDefaultSettings: function () {
          return {
            scrollDuration: 500,
            selectors: {
              links: 'a[href*="#"]',
              targets: ".elementor-element, .elementor-menu-anchor",
              scrollable: (0, i.isScrollSnapActive)() ? "body" : "html, body",
            },
          };
        },
        getDefaultElements: function () {
          return {
            $scrollable: jQuery(this.getSettings("selectors").scrollable),
          };
        },
        bindEvents: function () {
          elementorFrontend.elements.$document.on(
            "click",
            this.getSettings("selectors.links"),
            this.handleAnchorLinks
          );
        },
        handleAnchorLinks: function (e) {
          var t,
            n = e.currentTarget,
            s = location.pathname === n.pathname;
          if (location.hostname === n.hostname && s && !(n.hash.length < 2)) {
            try {
              t = jQuery(n.hash).filter(this.getSettings("selectors.targets"));
            } catch (e) {
              return;
            }
            if (t.length) {
              var o = t.offset().top,
                r = elementorFrontend.elements.$wpAdminBar,
                a = jQuery(
                  ".elementor-section.elementor-sticky--active:visible"
                );
              r.length > 0 && (o -= r.height()),
                a.length > 0 &&
                  (o -= Math.max.apply(
                    null,
                    a
                      .map(function () {
                        return jQuery(this).outerHeight();
                      })
                      .get()
                  )),
                e.preventDefault(),
                (o = elementorFrontend.hooks.applyFilters(
                  "frontend/handlers/menu_anchor/scroll_top_distance",
                  o
                )),
                (0, i.isScrollSnapActive)() &&
                  elementorFrontend.elements.$body.css(
                    "scroll-snap-type",
                    "none"
                  ),
                this.elements.$scrollable.animate(
                  { scrollTop: o },
                  this.getSettings("scrollDuration"),
                  "linear",
                  () => {
                    (0, i.isScrollSnapActive)() &&
                      elementorFrontend.elements.$body.css(
                        "scroll-snap-type",
                        ""
                      );
                  }
                );
            }
          }
        },
        onInit: function () {
          elementorModules.ViewModule.prototype.onInit.apply(this, arguments);
        },
      });
    },
    6866: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class AssetsLoader {
        getScriptElement(e) {
          const t = document.createElement("script");
          return (t.src = e), t;
        }
        getStyleElement(e) {
          const t = document.createElement("link");
          return (t.rel = "stylesheet"), (t.href = e), t;
        }
        load(e, t) {
          const n = AssetsLoader.assets[e][t];
          return (
            n.loader ||
              (n.loader = new Promise((t) => {
                const i =
                  "style" === e
                    ? this.getStyleElement(n.src)
                    : this.getScriptElement(n.src);
                i.onload = () => t(!0);
                const s = "head" === n.parent ? n.parent : "body";
                document[s].appendChild(i);
              })),
            n.loader
          );
        }
      }
      t.default = AssetsLoader;
      const n = elementorFrontendConfig.environmentMode.isScriptDebug
        ? ""
        : ".min";
      AssetsLoader.assets = {
        script: {
          dialog: {
            src: `${elementorFrontendConfig.urls.assets}lib/dialog/dialog${n}.js?ver=4.9.0`,
          },
          "share-link": {
            src: `${elementorFrontendConfig.urls.assets}lib/share-link/share-link${n}.js?ver=${elementorFrontendConfig.version}`,
          },
          swiper: {
            src: `${elementorFrontendConfig.urls.assets}lib/swiper/swiper${n}.js?ver=5.3.6`,
          },
        },
        style: {},
      };
    },
    8646: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class LightboxManager extends elementorModules.ViewModule {
        static getLightbox() {
          const e = new Promise((e) => {
              n.e(723)
                .then(n.t.bind(n, 3896, 23))
                .then(({ default: t }) => e(new t()));
            }),
            t = elementorFrontend.utils.assetsLoader.load("script", "dialog"),
            i = elementorFrontend.utils.assetsLoader.load(
              "script",
              "share-link"
            );
          return Promise.all([e, t, i]).then(() => e);
        }
        getDefaultSettings() {
          return { selectors: { links: "a, [data-elementor-lightbox]" } };
        }
        getDefaultElements() {
          return { $links: jQuery(this.getSettings("selectors.links")) };
        }
        isLightboxLink(e) {
          if (
            "a" === e.tagName.toLowerCase() &&
            (e.hasAttribute("download") ||
              !/^[^?]+\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(e.href)) &&
            !e.dataset.elementorLightboxVideo
          )
            return !1;
          const t = elementorFrontend.getKitSettings("global_image_lightbox"),
            n = e.dataset.elementorOpenLightbox;
          return "yes" === n || (t && "no" !== n);
        }
        async onLinkClick(e) {
          const t = e.currentTarget,
            n = jQuery(e.target),
            i = elementorFrontend.isEditMode(),
            s =
              i &&
              elementor.$previewContents
                .find("body")
                .hasClass("elementor-editor__ui-state__color-picker"),
            o = !!n.closest(".elementor-edit-area").length;
          if (!this.isLightboxLink(t))
            return void (i && o && e.preventDefault());
          if (
            (e.preventDefault(),
            i && !elementor.getPreferences("lightbox_in_editor"))
          )
            return;
          if (s) return;
          (this.isOptimizedAssetsLoading()
            ? await LightboxManager.getLightbox()
            : elementorFrontend.utils.lightbox
          ).createLightbox(t);
        }
        isOptimizedAssetsLoading() {
          return elementorFrontend.config.experimentalFeatures
            .e_optimized_assets_loading;
        }
        bindEvents() {
          elementorFrontend.elements.$document.on(
            "click",
            this.getSettings("selectors.links"),
            (e) => this.onLinkClick(e)
          );
        }
        onInit(...e) {
          super.onInit(...e),
            this.isOptimizedAssetsLoading() &&
              !elementorFrontend.isEditMode() &&
              this.elements.$links.each((e, t) => {
                if (this.isLightboxLink(t))
                  return LightboxManager.getLightbox(), !1;
              });
        }
      }
      t.default = LightboxManager;
    },
    8628: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      t.default = class Swiper {
        constructor(e, t) {
          return (
            (this.config = t),
            this.config.breakpoints && (this.config = this.adjustConfig(t)),
            jQuery(e)
              .closest(".elementor-widget-wrap")
              .addClass("e-swiper-container"),
            jQuery(e).closest(".elementor-widget").addClass("e-widget-swiper"),
            new Promise((t) => {
              if (
                !elementorFrontend.config.experimentalFeatures
                  .e_optimized_assets_loading
              )
                return t(this.createSwiperInstance(e, this.config));
              elementorFrontend.utils.assetsLoader
                .load("script", "swiper")
                .then(() => t(this.createSwiperInstance(e, this.config)));
            })
          );
        }
        createSwiperInstance(e, t) {
          const n = window.Swiper;
          return (n.prototype.adjustConfig = this.adjustConfig), new n(e, t);
        }
        adjustConfig(e) {
          if (!e.handleElementorBreakpoints) return e;
          const t = elementorFrontend.config.responsive.activeBreakpoints,
            n = elementorFrontend.breakpoints.getBreakpointValues();
          return (
            Object.keys(e.breakpoints).forEach((i) => {
              const s = parseInt(i);
              let o;
              if (s === t.mobile.value || s + 1 === t.mobile.value) o = 0;
              else if (
                !t.widescreen ||
                (s !== t.widescreen.value && s + 1 !== t.widescreen.value)
              ) {
                const e = n.findIndex((e) => s === e || s + 1 === e);
                o = n[e - 1];
              } else o = s;
              (e.breakpoints[o] = e.breakpoints[i]),
                (e.breakpoints[i] = {
                  slidesPerView: e.slidesPerView,
                  slidesPerGroup: e.slidesPerGroup ? e.slidesPerGroup : 1,
                });
            }),
            e
          );
        }
      };
    },
    2064: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.ViewModule {
        getDefaultSettings() {
          return {
            selectors: {
              links:
                'a[href^="%23elementor-action"], a[href^="#elementor-action"]',
            },
          };
        }
        bindEvents() {
          elementorFrontend.elements.$document.on(
            "click",
            this.getSettings("selectors.links"),
            this.runLinkAction.bind(this)
          );
        }
        initActions() {
          this.actions = {
            lightbox: async (e) => {
              const t = await elementorFrontend.utils.lightbox;
              e.slideshow
                ? t.openSlideshow(e.slideshow, e.url)
                : (e.id && (e.type = "image"), t.showModal(e));
            },
          };
        }
        addAction(e, t) {
          this.actions[e] = t;
        }
        runAction(e, ...t) {
          const n = (e = decodeURIComponent(e)).match(/action=(.+?)&/),
            i = e.match(/settings=(.+)/);
          if (!n) return;
          const s = this.actions[n[1]];
          if (!s) return;
          let o = {};
          i && (o = JSON.parse(atob(i[1]))), s(o, ...t);
        }
        runLinkAction(e) {
          e.preventDefault(),
            this.runAction(jQuery(e.currentTarget).attr("href"), e);
        }
        runHashAction() {
          if (!location.hash) return;
          const e = document.querySelector(
            `[e-action-hash="${location.hash}"], a[href*="${location.hash}"]`
          );
          e && this.runAction(e.getAttribute("e-action-hash"));
        }
        createActionHash(e, t) {
          return encodeURIComponent(
            `#elementor-action:action=${e}&settings=${btoa(JSON.stringify(t))}`
          );
        }
        onInit() {
          super.onInit(),
            this.initActions(),
            elementorFrontend.on(
              "components:init",
              this.runHashAction.bind(this)
            );
        }
      }
      t.default = _default;
    },
    6028: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isScrollSnapActive = t.escapeHTML = void 0);
      t.escapeHTML = (e) => {
        const t = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        };
        return e.replace(/[&<>'"]/g, (e) => t[e] || e);
      };
      t.isScrollSnapActive = () => {
        var e, t;
        return (
          "yes" ===
          (elementorFrontend.isEditMode()
            ? null === (e = elementor.settings.page.model.attributes) ||
              void 0 === e
              ? void 0
              : e.scroll_snap
            : null === (t = elementorFrontend.config.settings.page) ||
              void 0 === t
            ? void 0
            : t.scroll_snap)
        );
      };
    },
    4773: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class BaseLoader extends elementorModules.ViewModule {
        getDefaultSettings() {
          return { isInserted: !1, selectors: { firstScript: "script:first" } };
        }
        getDefaultElements() {
          return {
            $firstScript: jQuery(this.getSettings("selectors.firstScript")),
          };
        }
        insertAPI() {
          this.elements.$firstScript.before(
            jQuery("<script>", { src: this.getApiURL() })
          ),
            this.setSettings("isInserted", !0);
        }
        getVideoIDFromURL(e) {
          const t = e.match(this.getURLRegex());
          return t && t[1];
        }
        onApiReady(e) {
          this.getSettings("isInserted") || this.insertAPI(),
            this.isApiLoaded()
              ? e(this.getApiObject())
              : setTimeout(() => {
                  this.onApiReady(e);
                }, 350);
        }
        getAutoplayURL(e) {
          return e.replace("&autoplay=0", "") + "&autoplay=1";
        }
      }
      t.default = BaseLoader;
    },
    1911: (e, t, n) => {
      var i = n(7914);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(n(4773));
      class VimeoLoader extends s.default {
        getApiURL() {
          return "https://player.vimeo.com/api/player.js";
        }
        getURLRegex() {
          return /^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/;
        }
        isApiLoaded() {
          return window.Vimeo;
        }
        getApiObject() {
          return Vimeo;
        }
        getAutoplayURL(e) {
          const t = (e = super.getAutoplayURL(e)).match(/#t=[^&]*/);
          return e.replace(t[0], "") + t;
        }
      }
      t.default = VimeoLoader;
    },
    1604: (e, t, n) => {
      var i = n(7914);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var s = i(n(4773));
      class YoutubeLoader extends s.default {
        getApiURL() {
          return "https://www.youtube.com/iframe_api";
        }
        getURLRegex() {
          return /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/;
        }
        isApiLoaded() {
          return window.YT && YT.loaded;
        }
        getApiObject() {
          return YT;
        }
      }
      t.default = YoutubeLoader;
    },
    59: (e, t, n) => {
      n.p = elementorFrontendConfig.urls.assets + "js/";
    },
    4375: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class Breakpoints extends elementorModules.Module {
        constructor(e) {
          super(), (this.responsiveConfig = e);
        }
        getActiveBreakpointsList(e = {}) {
          e = { largeToSmall: !1, withDesktop: !1, ...e };
          const t = Object.keys(this.responsiveConfig.activeBreakpoints);
          if (e.withDesktop) {
            const e = -1 === t.indexOf("widescreen") ? t.length : t.length - 1;
            t.splice(e, 0, "desktop");
          }
          return e.largeToSmall && t.reverse(), t;
        }
        getBreakpointValues() {
          const { activeBreakpoints: e } = this.responsiveConfig,
            t = [];
          return (
            Object.values(e).forEach((e) => {
              t.push(e.value);
            }),
            t
          );
        }
        getDesktopPreviousDeviceKey() {
          let e = "";
          const { activeBreakpoints: t } = this.responsiveConfig,
            n = Object.keys(t),
            i = n.length;
          return (e = "min" === t[n[i - 1]].direction ? n[i - 2] : n[i - 1]), e;
        }
        getDesktopMinPoint() {
          const { activeBreakpoints: e } = this.responsiveConfig;
          return e[this.getDesktopPreviousDeviceKey()].value + 1;
        }
        getDeviceMinBreakpoint(e) {
          if ("desktop" === e) return this.getDesktopMinPoint();
          const { activeBreakpoints: t } = this.responsiveConfig,
            n = Object.keys(t);
          let i;
          if (n[0] === e) i = 320;
          else if ("widescreen" === e)
            i = t[e]
              ? t[e].value
              : this.responsiveConfig.breakpoints.widescreen;
          else {
            const s = n.indexOf(e);
            i = t[n[s - 1]].value + 1;
          }
          return i;
        }
        getActiveMatchRegex() {
          return new RegExp(
            this.getActiveBreakpointsList()
              .map((e) => "_" + e)
              .join("|") + "$"
          );
        }
      }
      t.default = Breakpoints;
    },
    6404: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = t.Events = void 0);
      class Events {
        static dispatch(e, t, n = null, i = null) {
          (e = e instanceof jQuery ? e[0] : e),
            i && e.dispatchEvent(new CustomEvent(i, { detail: n })),
            e.dispatchEvent(new CustomEvent(t, { detail: n }));
        }
      }
      t.Events = Events;
      var n = Events;
      t.default = n;
    },
    9469: (e) => {
      e.exports = function () {
        var e,
          t = Array.prototype.slice,
          n = { actions: {}, filters: {} };
        function _removeHook(e, t, i, s) {
          var o, r, a;
          if (n[e][t])
            if (i)
              if (((o = n[e][t]), s))
                for (a = o.length; a--; )
                  (r = o[a]).callback === i &&
                    r.context === s &&
                    o.splice(a, 1);
              else
                for (a = o.length; a--; ) o[a].callback === i && o.splice(a, 1);
            else n[e][t] = [];
        }
        function _addHook(e, t, i, s, o) {
          var r = { callback: i, priority: s, context: o },
            a = n[e][t];
          if (a) {
            var l = !1;
            if (
              (jQuery.each(a, function () {
                if (this.callback === i) return (l = !0), !1;
              }),
              l)
            )
              return;
            a.push(r),
              (a = (function _hookInsertSort(e) {
                for (var t, n, i, s = 1, o = e.length; s < o; s++) {
                  for (
                    t = e[s], n = s;
                    (i = e[n - 1]) && i.priority > t.priority;

                  )
                    (e[n] = e[n - 1]), --n;
                  e[n] = t;
                }
                return e;
              })(a));
          } else a = [r];
          n[e][t] = a;
        }
        function _runHook(e, t, i) {
          var s,
            o,
            r = n[e][t];
          if (!r) return "filters" === e && i[0];
          if (((o = r.length), "filters" === e))
            for (s = 0; s < o; s++) i[0] = r[s].callback.apply(r[s].context, i);
          else for (s = 0; s < o; s++) r[s].callback.apply(r[s].context, i);
          return "filters" !== e || i[0];
        }
        return (
          (e = {
            removeFilter: function removeFilter(t, n) {
              return "string" == typeof t && _removeHook("filters", t, n), e;
            },
            applyFilters: function applyFilters() {
              var n = t.call(arguments),
                i = n.shift();
              return "string" == typeof i ? _runHook("filters", i, n) : e;
            },
            addFilter: function addFilter(t, n, i, s) {
              return (
                "string" == typeof t &&
                  "function" == typeof n &&
                  _addHook("filters", t, n, (i = parseInt(i || 10, 10)), s),
                e
              );
            },
            removeAction: function removeAction(t, n) {
              return "string" == typeof t && _removeHook("actions", t, n), e;
            },
            doAction: function doAction() {
              var n = t.call(arguments),
                i = n.shift();
              return "string" == typeof i && _runHook("actions", i, n), e;
            },
            addAction: function addAction(t, n, i, s) {
              return (
                "string" == typeof t &&
                  "function" == typeof n &&
                  _addHook("actions", t, n, (i = parseInt(i || 10, 10)), s),
                e
              );
            },
          }),
          e
        );
      };
    },
    3308: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      const matchUserAgent = (e) => n.indexOf(e) >= 0,
        n = navigator.userAgent,
        i =
          (!!window.opr && !!opr.addons) ||
          !!window.opera ||
          matchUserAgent(" OPR/"),
        s = matchUserAgent("Firefox"),
        o =
          /^((?!chrome|android).)*safari/i.test(n) ||
          /constructor/i.test(window.HTMLElement) ||
          "[object SafariRemoteNotification]" ===
            (
              !window.safari ||
              ("undefined" != typeof safari && safari.pushNotification)
            ).toString(),
        r = /Trident|MSIE/.test(n) && !!document.documentMode,
        a = (!r && !!window.StyleMedia) || matchUserAgent("Edg"),
        l = !!window.chrome && matchUserAgent("Chrome") && !(a || i),
        d = matchUserAgent("Chrome") && !!window.CSS;
      var c = {
        appleWebkit: matchUserAgent("AppleWebKit") && !d,
        blink: d,
        chrome: l,
        edge: a,
        firefox: s,
        ie: r,
        mac: matchUserAgent("Macintosh"),
        opera: i,
        safari: o,
        webkit: matchUserAgent("AppleWebKit"),
      };
      t.default = c;
    },
    5107: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        get(e, t) {
          let n;
          t = t || {};
          try {
            n = t.session ? sessionStorage : localStorage;
          } catch (t) {
            return e ? void 0 : {};
          }
          let i = n.getItem("elementor");
          (i = i ? JSON.parse(i) : {}), i.__expiration || (i.__expiration = {});
          const s = i.__expiration;
          let o = [];
          e ? s[e] && (o = [e]) : (o = Object.keys(s));
          let r = !1;
          return (
            o.forEach((e) => {
              new Date(s[e]) < new Date() &&
                (delete i[e], delete s[e], (r = !0));
            }),
            r && this.save(i, t.session),
            e ? i[e] : i
          );
        }
        set(e, t, n) {
          n = n || {};
          const i = this.get(null, n);
          if (((i[e] = t), n.lifetimeInSeconds)) {
            const t = new Date();
            t.setTime(t.getTime() + 1e3 * n.lifetimeInSeconds),
              (i.__expiration[e] = t.getTime());
          }
          this.save(i, n.session);
        }
        save(e, t) {
          let n;
          try {
            n = t ? sessionStorage : localStorage;
          } catch (e) {
            return;
          }
          n.setItem("elementor", JSON.stringify(e));
        }
      }
      t.default = _default;
    },
    6046: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class _default extends elementorModules.Module {
        constructor() {
          super(),
            elementorFrontend.elementsHandler.attachHandler("text-path", () =>
              n.e(48).then(n.bind(n, 6468))
            );
        }
      }
      t.default = _default;
    },
  },
  (e) => {
    e.O(0, [354], () => {
      return (t = 5654), e((e.s = t));
      var t;
    });
    e.O();
  },
]); /*! elementor - v3.6.5 - 27-04-2022 */
(self.webpackChunkelementor = self.webpackChunkelementor || []).push([
  [882, 723, 209, 745, 120, 192, 520, 181, 791, 268, 357],
  {
    5526: (e) => {
      (e.exports = function _defineProperty(e, t, s) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: s,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = s),
          e
        );
      }),
        (e.exports.default = e.exports),
        (e.exports.__esModule = !0);
    },
    8470: (e, t, s) => {
      "use strict";
      var n = s(7914);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = n(s(9728));
      class Accordion extends i.default {
        getDefaultSettings() {
          return {
            ...super.getDefaultSettings(),
            showTabFn: "slideDown",
            hideTabFn: "slideUp",
          };
        }
      }
      t.default = Accordion;
    },
    9269: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class Alert extends elementorModules.frontend.handlers.Base {
        getDefaultSettings() {
          return { selectors: { dismissButton: ".elementor-alert-dismiss" } };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors");
          return { $dismissButton: this.$element.find(e.dismissButton) };
        }
        bindEvents() {
          this.elements.$dismissButton.on(
            "click",
            this.onDismissButtonClick.bind(this)
          );
        }
        onDismissButtonClick() {
          this.$element.fadeOut();
        }
      }
      t.default = Alert;
    },
    9728: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class baseTabs extends elementorModules.frontend.handlers.Base {
        getDefaultSettings() {
          return {
            selectors: {
              tablist: '[role="tablist"]',
              tabTitle: ".elementor-tab-title",
              tabContent: ".elementor-tab-content",
            },
            classes: { active: "elementor-active" },
            showTabFn: "show",
            hideTabFn: "hide",
            toggleSelf: !0,
            hidePrevious: !0,
            autoExpand: !0,
            keyDirection: {
              ArrowLeft: elementorFrontendConfig.is_rtl ? 1 : -1,
              ArrowUp: -1,
              ArrowRight: elementorFrontendConfig.is_rtl ? -1 : 1,
              ArrowDown: 1,
            },
          };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors");
          return {
            $tabTitles: this.findElement(e.tabTitle),
            $tabContents: this.findElement(e.tabContent),
          };
        }
        activateDefaultTab() {
          const e = this.getSettings();
          if (!e.autoExpand || ("editor" === e.autoExpand && !this.isEdit))
            return;
          const t = this.getEditSettings("activeItemIndex") || 1,
            s = { showTabFn: e.showTabFn, hideTabFn: e.hideTabFn };
          this.setSettings({ showTabFn: "show", hideTabFn: "hide" }),
            this.changeActiveTab(t),
            this.setSettings(s);
        }
        handleKeyboardNavigation(e) {
          const t = e.currentTarget,
            s = jQuery(t.closest(this.getSettings("selectors").tablist)),
            n = s.find(this.getSettings("selectors").tabTitle),
            i = "vertical" === s.attr("aria-orientation");
          switch (e.key) {
            case "ArrowLeft":
            case "ArrowRight":
              if (i) return;
              break;
            case "ArrowUp":
            case "ArrowDown":
              if (!i) return;
              e.preventDefault();
              break;
            case "Home":
              return e.preventDefault(), void n.first().trigger("focus");
            case "End":
              return e.preventDefault(), void n.last().trigger("focus");
            default:
              return;
          }
          const o = t.getAttribute("data-tab") - 1,
            a = this.getSettings("keyDirection")[e.key],
            r = n[o + a];
          r
            ? r.focus()
            : -1 === o + a
            ? n.last().trigger("focus")
            : n.first().trigger("focus");
        }
        deactivateActiveTab(e) {
          const t = this.getSettings(),
            s = t.classes.active,
            n = e ? '[data-tab="' + e + '"]' : "." + s,
            i = this.elements.$tabTitles.filter(n),
            o = this.elements.$tabContents.filter(n);
          i.add(o).removeClass(s),
            i.attr({
              tabindex: "-1",
              "aria-selected": "false",
              "aria-expanded": "false",
            }),
            o[t.hideTabFn](),
            o.attr("hidden", "hidden");
        }
        activateTab(e) {
          const t = this.getSettings(),
            s = t.classes.active,
            n = this.elements.$tabTitles.filter('[data-tab="' + e + '"]'),
            i = this.elements.$tabContents.filter('[data-tab="' + e + '"]'),
            o = "show" === t.showTabFn ? 0 : 400;
          n.add(i).addClass(s),
            n.attr({
              tabindex: "0",
              "aria-selected": "true",
              "aria-expanded": "true",
            }),
            i[t.showTabFn](o, () =>
              elementorFrontend.elements.$window.trigger(
                "elementor-pro/motion-fx/recalc"
              )
            ),
            i.removeAttr("hidden");
        }
        isActiveTab(e) {
          return this.elements.$tabTitles
            .filter('[data-tab="' + e + '"]')
            .hasClass(this.getSettings("classes.active"));
        }
        bindEvents() {
          this.elements.$tabTitles.on({
            keydown: (e) => {
              jQuery(e.target).is("a") &&
                "Enter" === e.key &&
                e.preventDefault(),
                ["End", "Home", "ArrowUp", "ArrowDown"].includes(e.key) &&
                  this.handleKeyboardNavigation(e);
            },
            keyup: (e) => {
              switch (e.key) {
                case "ArrowLeft":
                case "ArrowRight":
                  this.handleKeyboardNavigation(e);
                  break;
                case "Enter":
                case "Space":
                  e.preventDefault(),
                    this.changeActiveTab(
                      e.currentTarget.getAttribute("data-tab")
                    );
              }
            },
            click: (e) => {
              e.preventDefault(),
                this.changeActiveTab(e.currentTarget.getAttribute("data-tab"));
            },
          });
        }
        onInit(...e) {
          super.onInit(...e), this.activateDefaultTab();
        }
        onEditSettingsChange(e) {
          "activeItemIndex" === e && this.activateDefaultTab();
        }
        changeActiveTab(e) {
          const t = this.isActiveTab(e),
            s = this.getSettings();
          (!s.toggleSelf && t) || !s.hidePrevious || this.deactivateActiveTab(),
            !s.hidePrevious && t && this.deactivateActiveTab(e),
            t || this.activateTab(e);
        }
      }
      t.default = baseTabs;
    },
    7884: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class Counter extends elementorModules.frontend.handlers.Base {
        getDefaultSettings() {
          return { selectors: { counterNumber: ".elementor-counter-number" } };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors");
          return { $counterNumber: this.$element.find(e.counterNumber) };
        }
        onInit() {
          super.onInit(),
            (this.intersectionObserver =
              elementorModules.utils.Scroll.scrollObserver({
                callback: (e) => {
                  if (e.isInViewport) {
                    this.intersectionObserver.unobserve(
                      this.elements.$counterNumber[0]
                    );
                    const e = this.elements.$counterNumber.data(),
                      t = e.toValue.toString().match(/\.(.*)/);
                    t && (e.rounding = t[1].length),
                      this.elements.$counterNumber.numerator(e);
                  }
                },
              })),
            this.intersectionObserver.observe(this.elements.$counterNumber[0]);
        }
      }
      t.default = Counter;
    },
    5914: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class ImageCarousel extends elementorModules.frontend.handlers
        .SwiperBase {
        getDefaultSettings() {
          return {
            selectors: {
              carousel: ".elementor-image-carousel-wrapper",
              slideContent: ".swiper-slide",
            },
          };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors"),
            t = { $swiperContainer: this.$element.find(e.carousel) };
          return (t.$slides = t.$swiperContainer.find(e.slideContent)), t;
        }
        getSwiperSettings() {
          const e = this.getElementSettings(),
            t = +e.slides_to_show || 3,
            s = 1 === t,
            n = elementorFrontend.config.responsive.activeBreakpoints,
            i = { mobile: 1, tablet: s ? 1 : 2 },
            o = {
              slidesPerView: t,
              loop: "yes" === e.infinite,
              speed: e.speed,
              handleElementorBreakpoints: !0,
              breakpoints: {},
            };
          let a = t;
          Object.keys(n)
            .reverse()
            .forEach((t) => {
              const s = i[t] ? i[t] : a;
              (o.breakpoints[n[t].value] = {
                slidesPerView: +e["slides_to_show_" + t] || s,
                slidesPerGroup: +e["slides_to_scroll_" + t] || 1,
              }),
                (a = +e["slides_to_show_" + t] || s);
            }),
            "yes" === e.autoplay &&
              (o.autoplay = {
                delay: e.autoplay_speed,
                disableOnInteraction: "yes" === e.pause_on_interaction,
              }),
            s
              ? ((o.effect = e.effect),
                "fade" === e.effect && (o.fadeEffect = { crossFade: !0 }))
              : (o.slidesPerGroup = +e.slides_to_scroll || 1),
            e.image_spacing_custom &&
              (o.spaceBetween = e.image_spacing_custom.size);
          const r = "arrows" === e.navigation || "both" === e.navigation,
            l = "dots" === e.navigation || "both" === e.navigation;
          return (
            r &&
              (o.navigation = {
                prevEl: ".elementor-swiper-button-prev",
                nextEl: ".elementor-swiper-button-next",
              }),
            l &&
              (o.pagination = {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: !0,
              }),
            "yes" === e.lazyload &&
              (o.lazy = { loadPrevNext: !0, loadPrevNextAmount: 1 }),
            o
          );
        }
        async onInit(...e) {
          super.onInit(...e);
          const t = this.getElementSettings();
          if (
            !this.elements.$swiperContainer.length ||
            2 > this.elements.$slides.length
          )
            return;
          const s = elementorFrontend.utils.swiper;
          (this.swiper = await new s(
            this.elements.$swiperContainer,
            this.getSwiperSettings()
          )),
            this.elements.$swiperContainer.data("swiper", this.swiper),
            "yes" === t.pause_on_hover && this.togglePauseOnHover(!0);
        }
        updateSwiperOption(e) {
          const t = this.getElementSettings()[e],
            s = this.swiper.params;
          switch (e) {
            case "image_spacing_custom":
              s.spaceBetween = t.size || 0;
              break;
            case "autoplay_speed":
              s.autoplay.delay = t;
              break;
            case "speed":
              s.speed = t;
          }
          this.swiper.update();
        }
        getChangeableProperties() {
          return {
            pause_on_hover: "pauseOnHover",
            autoplay_speed: "delay",
            speed: "speed",
            image_spacing_custom: "spaceBetween",
          };
        }
        onElementChange(e) {
          if (this.getChangeableProperties()[e])
            if ("pause_on_hover" === e) {
              const e = this.getElementSettings("pause_on_hover");
              this.togglePauseOnHover("yes" === e);
            } else this.updateSwiperOption(e);
        }
        onEditSettingsChange(e) {
          "activeItemIndex" === e &&
            this.swiper.slideToLoop(
              this.getEditSettings("activeItemIndex") - 1
            );
        }
      }
      t.default = ImageCarousel;
    },
    1351: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class Progress extends elementorModules.frontend.handlers.Base {
        getDefaultSettings() {
          return { selectors: { progressNumber: ".elementor-progress-bar" } };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors");
          return { $progressNumber: this.$element.find(e.progressNumber) };
        }
        onInit() {
          super.onInit(),
            elementorFrontend.waypoint(this.elements.$progressNumber, () => {
              const e = this.elements.$progressNumber;
              e.css("width", e.data("max") + "%");
            });
        }
      }
      t.default = Progress;
    },
    9459: (e, t, s) => {
      "use strict";
      var n = s(7914);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = n(s(9728));
      class Tabs extends i.default {
        getDefaultSettings() {
          return { ...super.getDefaultSettings(), toggleSelf: !1 };
        }
      }
      t.default = Tabs;
    },
    1327: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class TextEditor extends elementorModules.frontend.handlers.Base {
        getDefaultSettings() {
          return {
            selectors: { paragraph: "p:first" },
            classes: {
              dropCap: "elementor-drop-cap",
              dropCapLetter: "elementor-drop-cap-letter",
            },
          };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors"),
            t = this.getSettings("classes"),
            s = jQuery("<span>", { class: t.dropCap }),
            n = jQuery("<span>", { class: t.dropCapLetter });
          return (
            s.append(n),
            {
              $paragraph: this.$element.find(e.paragraph),
              $dropCap: s,
              $dropCapLetter: n,
            }
          );
        }
        wrapDropCap() {
          if (!this.getElementSettings("drop_cap"))
            return void (
              this.dropCapLetter &&
              (this.elements.$dropCap.remove(),
              this.elements.$paragraph.prepend(this.dropCapLetter),
              (this.dropCapLetter = ""))
            );
          const e = this.elements.$paragraph;
          if (!e.length) return;
          const t = e.html().replace(/&nbsp;/g, " "),
            s = t.match(/^ *([^ ] ?)/);
          if (!s) return;
          const n = s[1],
            i = n.trim();
          if ("<" === i) return;
          (this.dropCapLetter = n), this.elements.$dropCapLetter.text(i);
          const o = t
            .slice(n.length)
            .replace(/^ */, (e) => new Array(e.length + 1).join("&nbsp;"));
          e.html(o).prepend(this.elements.$dropCap);
        }
        onInit(...e) {
          super.onInit(...e), this.wrapDropCap();
        }
        onElementChange(e) {
          "drop_cap" === e && this.wrapDropCap();
        }
      }
      t.default = TextEditor;
    },
    2: (e, t, s) => {
      "use strict";
      var n = s(7914);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = n(s(9728));
      class Toggle extends i.default {
        getDefaultSettings() {
          return {
            ...super.getDefaultSettings(),
            showTabFn: "slideDown",
            hideTabFn: "slideUp",
            hidePrevious: !1,
            autoExpand: "editor",
          };
        }
      }
      t.default = Toggle;
    },
    5363: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      class Video extends elementorModules.frontend.handlers.Base {
        getDefaultSettings() {
          return {
            selectors: {
              imageOverlay: ".elementor-custom-embed-image-overlay",
              video: ".elementor-video",
              videoIframe: ".elementor-video-iframe",
              playIcon: ".elementor-custom-embed-play",
            },
          };
        }
        getDefaultElements() {
          const e = this.getSettings("selectors");
          return {
            $imageOverlay: this.$element.find(e.imageOverlay),
            $video: this.$element.find(e.video),
            $videoIframe: this.$element.find(e.videoIframe),
            $playIcon: this.$element.find(e.playIcon),
          };
        }
        handleVideo() {
          this.getElementSettings("lightbox") ||
            ("youtube" === this.getElementSettings("video_type")
              ? this.apiProvider.onApiReady((e) => {
                  this.elements.$imageOverlay.remove(),
                    this.prepareYTVideo(e, !0);
                })
              : (this.elements.$imageOverlay.remove(), this.playVideo()));
        }
        playVideo() {
          if (this.elements.$video.length)
            return void (this.youtubePlayer
              ? this.youtubePlayer.playVideo()
              : this.elements.$video[0].play());
          const e = this.elements.$videoIframe,
            t = e.data("lazy-load");
          t && e.attr("src", t),
            (e[0].src = this.apiProvider.getAutoplayURL(e[0].src));
        }
        async animateVideo() {
          (await elementorFrontend.utils.lightbox).setEntranceAnimation(
            this.getCurrentDeviceSetting("lightbox_content_animation")
          );
        }
        async handleAspectRatio() {
          (await elementorFrontend.utils.lightbox).setVideoAspectRatio(
            this.getElementSettings("aspect_ratio")
          );
        }
        async hideLightbox() {
          (await elementorFrontend.utils.lightbox).getModal().hide();
        }
        prepareYTVideo(e, t) {
          const s = this.getElementSettings(),
            n = {
              videoId: this.videoID,
              events: {
                onReady: () => {
                  s.mute && this.youtubePlayer.mute(),
                    (s.autoplay || t) && this.youtubePlayer.playVideo();
                },
                onStateChange: (t) => {
                  t.data === e.PlayerState.ENDED &&
                    s.loop &&
                    this.youtubePlayer.seekTo(s.start || 0);
                },
              },
              playerVars: {
                controls: s.controls ? 1 : 0,
                rel: s.rel ? 1 : 0,
                playsinline: s.play_on_mobile ? 1 : 0,
                modestbranding: s.modestbranding ? 1 : 0,
                autoplay: s.autoplay ? 1 : 0,
                start: s.start,
                end: s.end,
              },
            };
          s.yt_privacy &&
            ((n.host = "https://www.youtube-nocookie.com"),
            (n.origin = window.location.hostname)),
            (this.youtubePlayer = new e.Player(this.elements.$video[0], n));
        }
        bindEvents() {
          this.elements.$imageOverlay.on("click", this.handleVideo.bind(this)),
            this.elements.$playIcon.on("keydown", (e) => {
              [13, 32].includes(e.keyCode) && this.handleVideo();
            });
        }
        onInit() {
          super.onInit();
          const e = this.getElementSettings();
          if (
            (elementorFrontend.utils[e.video_type]
              ? (this.apiProvider = elementorFrontend.utils[e.video_type])
              : (this.apiProvider = elementorFrontend.utils.baseVideoLoader),
            "youtube" === e.video_type &&
              ((this.videoID = this.apiProvider.getVideoIDFromURL(
                e.youtube_url
              )),
              this.videoID && (!e.show_image_overlay || !e.image_overlay.url)))
          )
            return e.lazy_load
              ? ((this.intersectionObserver =
                  elementorModules.utils.Scroll.scrollObserver({
                    callback: (e) => {
                      e.isInViewport &&
                        (this.intersectionObserver.unobserve(
                          this.elements.$video.parent()[0]
                        ),
                        this.apiProvider.onApiReady((e) =>
                          this.prepareYTVideo(e)
                        ));
                    },
                  })),
                void this.intersectionObserver.observe(
                  this.elements.$video.parent()[0]
                ))
              : void (elementorFrontend.config.experimentalFeatures
                  .e_optimized_assets_loading
                  ? this.apiProvider.onApiReady((e) => this.prepareYTVideo(e))
                  : setTimeout(() => {
                      this.apiProvider.onApiReady((e) =>
                        this.prepareYTVideo(e)
                      );
                    }, 0));
        }
        onElementChange(e) {
          if (0 === e.indexOf("lightbox_content_animation"))
            return void this.animateVideo();
          const t = this.getElementSettings("lightbox");
          "lightbox" !== e || t
            ? "aspect_ratio" === e && t && this.handleAspectRatio()
            : this.hideLightbox();
        }
      }
      t.default = Video;
    },
    1210: (e, t, s) => {
      "use strict";
      var n = s(7914),
        i = n(s(8470)),
        o = n(s(9269)),
        a = n(s(7884)),
        r = n(s(1351)),
        l = n(s(9459)),
        d = n(s(2)),
        c = n(s(5363)),
        h = n(s(5914)),
        u = n(s(1327)),
        m = n(s(3896));
      elementorFrontend.elements.$window.on("elementor/frontend/init", () => {
        (elementorFrontend.elementsHandler.elementsHandlers = {
          "accordion.default": i.default,
          "alert.default": o.default,
          "counter.default": a.default,
          "progress.default": r.default,
          "tabs.default": l.default,
          "toggle.default": d.default,
          "video.default": c.default,
          "image-carousel.default": h.default,
          "text-editor.default": u.default,
        }),
          elementorFrontend.on("components:init", () => {
            delete elementorFrontend.utils.lightbox,
              (elementorFrontend.utils.lightbox = new m.default());
          });
      });
    },
    5626: (e, t, s) => {
      "use strict";
      var n = s(7914);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.zoomOutBold =
          t.zoomInBold =
          t.twitter =
          t.shareArrow =
          t.pinterest =
          t.loading =
          t.frameMinimize =
          t.frameExpand =
          t.facebook =
          t.downloadBold =
          t.close =
          t.chevronRight =
          t.chevronLeft =
            void 0);
      const i = new (n(s(4508)).default)("eicon"),
        o = {
          get element() {
            return i.createSvgElement("chevron-left", {
              path: "M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z",
              width: 1e3,
              height: 1e3,
            });
          },
        };
      t.chevronLeft = o;
      const a = {
        get element() {
          return i.createSvgElement("chevron-right", {
            path: "M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z",
            width: 1e3,
            height: 1e3,
          });
        },
      };
      t.chevronRight = a;
      const r = {
        get element() {
          return i.createSvgElement("close", {
            path: "M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z",
            width: 1e3,
            height: 1e3,
          });
        },
      };
      t.close = r;
      const l = {
        get element() {
          return i.createSvgElement("download-bold", {
            path: "M572 42H428C405 42 385 61 385 85V385H228C197 385 180 424 203 447L475 719C489 732 511 732 524 719L797 447C819 424 803 385 771 385H614V85C615 61 595 42 572 42ZM958 915V715C958 691 939 672 915 672H653L565 760C529 796 471 796 435 760L347 672H85C61 672 42 691 42 715V915C42 939 61 958 85 958H915C939 958 958 939 958 915ZM736 873C736 853 720 837 700 837 681 837 665 853 665 873 665 892 681 908 700 908 720 908 736 892 736 873ZM815 837C835 837 851 853 851 873 851 892 835 908 815 908 795 908 779 892 779 873 779 853 795 837 815 837Z",
            width: 1e3,
            height: 1e3,
          });
        },
      };
      t.downloadBold = l;
      const d = {
        get element() {
          return i.createSvgElement("facebook", {
            path: "M858 42H142C88 42 42 87 42 142V863C42 913 88 958 142 958H421V646H292V500H421V387C421 258 496 192 613 192 667 192 725 200 725 200V325H663C600 325 579 362 579 404V500H721L700 646H583V958H863C917 958 963 913 963 858V142C958 87 913 42 858 42L858 42Z",
            width: 1e3,
            height: 1e3,
          });
        },
      };
      t.facebook = d;
      const c = {
        get element() {
          return i.createSvgElement("frame-expand", {
            path: "M863 583C890 583 914 605 916 632L917 637V863L916 868C914 893 893 914 868 916L863 917H638L632 916C607 914 586 893 584 868L583 863 584 857C586 832 607 811 632 809L638 808H808V637L809 632C811 605 835 583 863 583ZM138 583C165 583 189 605 191 632L192 637V808H363C390 808 414 830 416 857L417 863C417 890 395 914 368 916L363 917H138C110 917 86 895 84 868L83 863V637C83 607 108 583 138 583ZM863 83C890 83 914 105 916 132L917 137V362C917 392 893 417 863 417 835 417 811 395 809 368L808 362V192H638C610 192 586 170 584 143L583 137C583 110 605 86 632 84L638 83H863ZM363 83L368 84C393 86 414 107 416 132L417 137 416 143C414 168 393 189 368 191L363 192H192V362L191 368C189 395 165 417 138 417S86 395 84 368L83 362V137L84 132C86 107 107 86 132 84L138 83H363Z",
            width: 1e3,
            height: 1e3,
          });
        },
      };
      t.frameExpand = c;
      const h = {
        get element() {
          return i.createSvgElement("frame-minimize", {
            path: "M363 583C392 583 413 604 417 633L417 637V863C417 892 392 917 363 917 333 917 313 896 308 867L308 863V692H138C108 692 88 671 83 642L83 637C83 608 104 587 133 583L138 583H363ZM638 583C608 583 588 604 583 633L583 637V863C583 892 608 917 638 917 667 917 688 896 692 867L692 863V692H863C892 692 913 671 917 642L917 637C917 608 896 587 867 583L863 583H638ZM363 417C392 417 413 396 417 367L417 362V137C417 108 392 83 363 83 333 83 313 104 308 133L308 137V308H138C108 308 88 329 83 358L83 362C83 392 104 412 133 417L138 417H363ZM638 417C608 417 588 396 583 367L583 362V137C583 108 608 83 638 83 667 83 688 104 692 133L692 137V308H863C892 308 913 329 917 358L917 362C917 392 896 412 867 417L863 417H638Z",
            width: 1e3,
            height: 1e3,
          });
        },
      };
      t.frameMinimize = h;
      const u = {
        get element() {
          return i.createSvgElement("loading", {
            path: "M500 975V858C696 858 858 696 858 500S696 142 500 142 142 304 142 500H25C25 237 238 25 500 25S975 237 975 500 763 975 500 975Z",
            width: 1e3,
            height: 1e3,
          });
        },
      };
      t.loading = u;
      const m = {
        get element() {
          return i.createSvgElement("pinterest", {
            path: "M950 496C950 746 746 950 496 950 450 950 404 942 363 929 379 900 408 850 421 808 425 787 450 700 450 700 467 729 508 754 554 754 692 754 792 629 792 471 792 321 671 208 513 208 317 208 213 342 213 483 213 550 250 633 304 658 313 662 317 662 321 654 321 650 329 617 333 604 333 600 333 596 329 592 313 567 296 525 296 487 288 387 367 292 496 292 608 292 688 367 688 475 688 600 625 683 546 683 500 683 467 646 479 600 492 546 517 487 517 450 517 417 500 387 458 387 413 387 375 433 375 496 375 537 388 562 388 562S342 754 333 787C325 825 329 883 333 917 163 854 42 687 42 496 42 246 246 42 496 42S950 246 950 496Z",
            width: 1e3,
            height: 1e3,
          });
        },
      };
      t.pinterest = m;
      const p = {
        get element() {
          return i.createSvgElement("share-arrow", {
            path: "M946 383L667 133C642 112 604 129 604 162V292C238 296 71 637 42 812 238 587 363 521 604 517V658C604 692 642 708 667 687L946 442C963 425 963 400 946 383Z",
            width: 1e3,
            height: 1e3,
          });
        },
      };
      t.shareArrow = p;
      const g = {
        get element() {
          return i.createSvgElement("twitter", {
            path: "M863 312C863 321 863 329 863 337 863 587 675 871 329 871 221 871 125 842 42 787 58 787 71 792 88 792 175 792 254 762 321 712 238 712 171 658 146 583 158 583 171 587 183 587 200 587 217 583 233 579 146 562 83 487 83 396V387C108 400 138 408 167 412 117 379 83 321 83 254 83 221 92 187 108 158 200 271 342 346 496 354 492 342 492 325 492 312 492 208 575 125 679 125 733 125 783 146 817 183 858 175 900 158 938 137 925 179 896 217 854 242 892 237 929 229 963 212 933 250 900 283 863 312Z",
            width: 1e3,
            height: 1e3,
          });
        },
      };
      t.twitter = g;
      const f = {
        get element() {
          return i.createSvgElement("zoom-in-bold", {
            path: "M388 383V312C388 283 413 258 442 258 471 258 496 283 496 312V383H567C596 383 621 408 621 437S596 492 567 492H496V562C496 592 471 617 442 617 413 617 388 592 388 562V492H317C288 492 263 467 263 437S288 383 317 383H388ZM654 733C592 779 517 804 438 804 233 804 71 642 71 437S233 71 438 71 804 233 804 437C804 521 779 596 733 654L896 817C917 837 917 871 896 892 875 913 842 913 821 892L654 733ZM438 696C579 696 696 579 696 437S579 179 438 179 179 296 179 437 296 696 438 696Z",
            width: 1e3,
            height: 1e3,
          });
        },
      };
      t.zoomInBold = f;
      const v = {
        get element() {
          return i.createSvgElement("zoom-out-bold", {
            path: "M750 683L946 879C963 896 963 929 946 946 929 963 896 967 879 946L683 750C617 804 533 833 438 833 221 833 42 654 42 437S221 42 438 42 833 221 833 437C833 529 800 612 750 683ZM296 392H575C600 392 621 412 621 442 621 467 600 487 575 487H296C271 487 250 467 250 442 250 412 271 392 296 392ZM438 737C604 737 738 604 738 437S604 137 438 137 138 271 138 437 271 737 438 737Z",
            width: 1e3,
            height: 1e3,
          });
        },
      };
      t.zoomOutBold = v;
    },
    4508: (e, t, s) => {
      "use strict";
      var n = s(7914);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = n(s(5526));
      class IconsManager {
        constructor(e) {
          (this.prefix = `${e}-`), this.createSvgSymbolsContainer();
        }
        createSvgElement(e, { path: t, width: s, height: n }) {
          const i = this.prefix + e,
            o = "#" + this.prefix + e;
          if (!IconsManager.iconsUsageList.includes(i)) {
            if (!IconsManager.symbolsContainer.querySelector(o)) {
              const e = this.createSymbolElement({
                id: i,
                path: t,
                width: s,
                height: n,
              });
              IconsManager.symbolsContainer.appendChild(e);
            }
            IconsManager.iconsUsageList.push(i);
          }
          return this.createSvgIconElement({ iconName: i, iconSelector: o });
        }
        createSvgNode(e, { props: t = {}, attrs: s = {} }) {
          const n = document.createElementNS("http://www.w3.org/2000/svg", e);
          return (
            Object.keys(t).map((e) => (n[e] = t[e])),
            Object.keys(s).map((e) => n.setAttributeNS(null, e, s[e])),
            n
          );
        }
        createSvgIconElement({ iconName: e, iconSelector: t }) {
          return this.createSvgNode("svg", {
            props: { innerHTML: '<use xlink:href="' + t + '" />' },
            attrs: { class: "e-font-icon-svg e-" + e },
          });
        }
        createSvgSymbolsContainer() {
          if (!IconsManager.symbolsContainer) {
            const e = "e-font-icon-svg-symbols";
            (IconsManager.symbolsContainer = document.getElementById(e)),
              IconsManager.symbolsContainer ||
                ((IconsManager.symbolsContainer = this.createSvgNode("svg", {
                  attrs: { style: "display: none;", class: e },
                })),
                document.body.appendChild(IconsManager.symbolsContainer));
          }
        }
        createSymbolElement({ id: e, path: t, width: s, height: n }) {
          return this.createSvgNode("symbol", {
            props: { innerHTML: '<path d="' + t + '"></path>', id: e },
            attrs: { viewBox: "0 0 " + s + " " + n },
          });
        }
      }
      (t.default = IconsManager),
        (0, i.default)(IconsManager, "symbolsContainer", void 0),
        (0, i.default)(IconsManager, "iconsUsageList", []);
    },
    3896: (e, t, s) => {
      "use strict";
      var n = s(7914)(s(3251)),
        i = s(5626);
      e.exports = elementorModules.ViewModule.extend({
        oldAspectRatio: null,
        oldAnimation: null,
        swiper: null,
        player: null,
        isFontIconSvgExperiment:
          elementorFrontend.config.experimentalFeatures.e_font_icon_svg,
        getDefaultSettings: function () {
          return {
            classes: {
              aspectRatio: "elementor-aspect-ratio-%s",
              item: "elementor-lightbox-item",
              image: "elementor-lightbox-image",
              videoContainer: "elementor-video-container",
              videoWrapper: "elementor-fit-aspect-ratio",
              playButton: "elementor-custom-embed-play",
              playButtonIcon: "fa",
              playing: "elementor-playing",
              hidden: "elementor-hidden",
              invisible: "elementor-invisible",
              preventClose: "elementor-lightbox-prevent-close",
              slideshow: {
                container: "swiper-container",
                slidesWrapper: "swiper-wrapper",
                prevButton:
                  "elementor-swiper-button elementor-swiper-button-prev",
                nextButton:
                  "elementor-swiper-button elementor-swiper-button-next",
                prevButtonIcon: "eicon-chevron-left",
                nextButtonIcon: "eicon-chevron-right",
                slide: "swiper-slide",
                header: "elementor-slideshow__header",
                footer: "elementor-slideshow__footer",
                title: "elementor-slideshow__title",
                description: "elementor-slideshow__description",
                counter: "elementor-slideshow__counter",
                iconExpand: "eicon-frame-expand",
                iconShrink: "eicon-frame-minimize",
                iconZoomIn: "eicon-zoom-in-bold",
                iconZoomOut: "eicon-zoom-out-bold",
                iconShare: "eicon-share-arrow",
                shareMenu: "elementor-slideshow__share-menu",
                shareLinks: "elementor-slideshow__share-links",
                hideUiVisibility: "elementor-slideshow--ui-hidden",
                shareMode: "elementor-slideshow--share-mode",
                fullscreenMode: "elementor-slideshow--fullscreen-mode",
                zoomMode: "elementor-slideshow--zoom-mode",
              },
            },
            selectors: {
              image: ".elementor-lightbox-image",
              links: "a, [data-elementor-lightbox]",
              slideshow: {
                activeSlide: ".swiper-slide-active",
                prevSlide: ".swiper-slide-prev",
                nextSlide: ".swiper-slide-next",
              },
            },
            modalOptions: {
              id: "elementor-lightbox",
              entranceAnimation: "zoomIn",
              videoAspectRatio: 169,
              position: { enable: !1 },
            },
          };
        },
        getModal: function () {
          return e.exports.modal || this.initModal(), e.exports.modal;
        },
        initModal: function () {
          const t = {};
          this.isFontIconSvgExperiment
            ? (t.iconElement = i.close.element)
            : (t.iconClass = "eicon-close");
          const s = (e.exports.modal = elementorFrontend
            .getDialogsManager()
            .createWidget("lightbox", {
              className: "elementor-lightbox",
              closeButton: !0,
              closeButtonOptions: {
                ...t,
                attributes: {
                  tabindex: 0,
                  role: "button",
                  "aria-label": elementorFrontend.config.i18n.close + " (Esc)",
                },
              },
              selectors: {
                preventClose: "." + this.getSettings("classes.preventClose"),
              },
              hide: { onClick: !0 },
            }));
          s.on("hide", function () {
            s.setMessage("");
          });
        },
        showModal: function (e) {
          if (e.url && !e.url.startsWith("http")) return;
          (this.elements.$closeButton =
            this.getModal().getElements("closeButton")),
            (this.$buttons = this.elements.$closeButton),
            (this.focusedButton = null);
          const t = this,
            s = t.getDefaultSettings().modalOptions;
          (t.id = e.id),
            t.setSettings("modalOptions", jQuery.extend(s, e.modalOptions));
          const i = t.getModal();
          switch (
            (i.setID(t.getSettings("modalOptions.id")),
            (i.onShow = function () {
              DialogsManager.getWidgetType("lightbox").prototype.onShow.apply(
                i,
                arguments
              ),
                t.setEntranceAnimation();
            }),
            (i.onHide = function () {
              DialogsManager.getWidgetType("lightbox").prototype.onHide.apply(
                i,
                arguments
              ),
                i.getElements("message").removeClass("animated"),
                n.default.isFullscreen && t.deactivateFullscreen(),
                t.unbindHotKeys();
            }),
            e.type)
          ) {
            case "video":
              t.setVideoContent(e);
              break;
            case "image":
              const s = [
                {
                  image: e.url,
                  index: 0,
                  title: e.title,
                  description: e.description,
                  hash: e.hash,
                },
              ];
              e.slideshow = { slides: s, swiper: { loop: !1, pagination: !1 } };
            case "slideshow":
              t.setSlideshowContent(e.slideshow);
              break;
            default:
              t.setHTMLContent(e.html);
          }
          i.show();
        },
        createLightbox: function (e) {
          let t = {};
          if (
            (e.dataset.elementorLightbox &&
              (t = JSON.parse(e.dataset.elementorLightbox)),
            t.type && "slideshow" !== t.type)
          )
            return void this.showModal(t);
          if (!e.dataset.elementorLightboxSlideshow) {
            const t = "single-img";
            return void this.showModal({
              type: "image",
              id: t,
              url: e.href,
              hash: e.getAttribute("e-action-hash"),
              title: e.dataset.elementorLightboxTitle,
              description: e.dataset.elementorLightboxDescription,
              modalOptions: { id: "elementor-lightbox-slideshow-" + t },
            });
          }
          const s = e.dataset.elementorLightboxVideo || e.href;
          this.openSlideshow(e.dataset.elementorLightboxSlideshow, s);
        },
        setHTMLContent: function (e) {
          window.elementorCommon &&
            elementorCommon.helpers.hardDeprecated(
              "elementorFrontend.utils.lightbox.setHTMLContent",
              "3.1.4"
            ),
            this.getModal().setMessage(e);
        },
        setVideoContent: function (e) {
          const t = jQuery,
            s = this.getSettings("classes"),
            n = t("<div>", { class: `${s.videoContainer} ${s.preventClose}` }),
            i = t("<div>", { class: s.videoWrapper }),
            o = this.getModal();
          let a;
          if ("hosted" === e.videoType) {
            const s = t.extend({ src: e.url, autoplay: "" }, e.videoParams);
            a = t("<video>", s);
          } else {
            let s;
            if (-1 !== e.url.indexOf("vimeo.com"))
              s = elementorFrontend.utils.vimeo;
            else {
              if (
                !e.url.match(
                  /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com|youtube-nocookie\.com)/
                )
              )
                return;
              s = elementorFrontend.utils.youtube;
            }
            a = t("<iframe>", {
              src: s.getAutoplayURL(e.url),
              allowfullscreen: 1,
            });
          }
          n.append(i), i.append(a), o.setMessage(n), this.setVideoAspectRatio();
          const r = o.onHide;
          o.onHide = function () {
            r(),
              (this.$buttons = jQuery()),
              (this.focusedButton = null),
              o
                .getElements("message")
                .removeClass("elementor-fit-aspect-ratio");
          };
        },
        getShareLinks: function () {
          const { i18n: e } = elementorFrontend.config,
            t = {
              facebook: { label: e.shareOnFacebook, iconElement: i.facebook },
              twitter: { label: e.shareOnTwitter, iconElement: i.twitter },
              pinterest: { label: e.pinIt, iconElement: i.pinterest },
            },
            s = jQuery,
            n = this.getSettings("classes"),
            o = this.getSettings("selectors"),
            a = s("<div>", { class: n.slideshow.shareLinks }),
            r = this.getSlide("active"),
            l = r.find(o.image),
            d = r.data("elementor-slideshow-video");
          let c;
          if (
            ((c = d || l.attr("src")),
            s.each(t, (e, t) => {
              const n = t.label,
                i = s("<a>", {
                  href: this.createShareLink(e, c, r.attr("e-action-hash")),
                  target: "_blank",
                }).text(n),
                o = this.isFontIconSvgExperiment
                  ? s(t.iconElement.element)
                  : s("<i>", { class: "eicon-" + e });
              i.prepend(o), a.append(i);
            }),
            !d)
          ) {
            const t = this.isFontIconSvgExperiment
              ? s(i.downloadBold.element)
              : s("<i>", { class: "eicon-download-bold" });
            t.attr("aria-label", e.download),
              a.append(
                s("<a>", { href: c, download: "" })
                  .text(e.downloadImage)
                  .prepend(t)
              );
          }
          return a;
        },
        createShareLink: function (e, t, s = null) {
          const n = {};
          return (
            "pinterest" === e
              ? (n.image = encodeURIComponent(t))
              : (n.url = encodeURIComponent(
                  location.href.replace(/#.*/, "") + s
                )),
            ShareLink.getNetworkLink(e, n)
          );
        },
        getSlideshowHeader: function () {
          const { i18n: e } = elementorFrontend.config,
            t = jQuery,
            s =
              "yes" ===
              elementorFrontend.getKitSettings("lightbox_enable_counter"),
            n =
              "yes" ===
              elementorFrontend.getKitSettings("lightbox_enable_fullscreen"),
            o =
              "yes" ===
              elementorFrontend.getKitSettings("lightbox_enable_zoom"),
            a =
              "yes" ===
              elementorFrontend.getKitSettings("lightbox_enable_share"),
            r = this.getSettings("classes"),
            l = r.slideshow,
            d = this.elements;
          if (s || n || o || a) {
            if (
              ((d.$header = t("<header>", {
                class: l.header + " " + r.preventClose,
              })),
              a)
            ) {
              const s = this.isFontIconSvgExperiment
                ? i.shareArrow.element
                : "<i>";
              d.$iconShare = t(s, {
                class: l.iconShare,
                role: "button",
                "aria-label": e.share,
                "aria-expanded": !1,
              }).append(t("<span>"));
              const n = t("<div>");
              n.on("click", (e) => {
                e.stopPropagation();
              }),
                (d.$shareMenu = t("<div>", { class: l.shareMenu }).append(n)),
                d.$iconShare
                  .add(d.$shareMenu)
                  .on("click", this.toggleShareMenu),
                d.$header.append(d.$iconShare, d.$shareMenu),
                (this.$buttons = this.$buttons.add(d.$iconShare));
            }
            if (o) {
              const s = this.isFontIconSvgExperiment
                  ? i.zoomInBold.element
                  : "<i>",
                n = [],
                o = {
                  role: "switch",
                  "aria-checked": !1,
                  "aria-label": e.zoom,
                },
                a = { ...o };
              this.isFontIconSvgExperiment || (a.class = l.iconZoomIn),
                (d.$iconZoom = t(s).attr(a).on("click", this.toggleZoomMode)),
                n.push(d.$iconZoom),
                this.isFontIconSvgExperiment &&
                  ((d.$iconZoomOut = t(i.zoomOutBold.element)
                    .attr(o)
                    .addClass(r.hidden)
                    .on("click", this.toggleZoomMode)),
                  n.push(d.$iconZoomOut)),
                d.$header.append(n),
                (this.$buttons = this.$buttons.add(n));
            }
            if (n) {
              const s = this.isFontIconSvgExperiment
                  ? i.frameExpand.element
                  : "<i>",
                n = [],
                o = {
                  role: "switch",
                  "aria-checked": !1,
                  "aria-label": e.fullscreen,
                },
                a = { ...o };
              this.isFontIconSvgExperiment || (a.class = l.iconExpand),
                (d.$iconExpand = t(s)
                  .append(t("<span>"), t("<span>"))
                  .attr(a)
                  .on("click", this.toggleFullscreen)),
                n.push(d.$iconExpand),
                this.isFontIconSvgExperiment &&
                  ((d.$iconMinimize = t(i.frameMinimize.element)
                    .attr(o)
                    .addClass(r.hidden)
                    .on("click", this.toggleFullscreen)),
                  n.push(d.$iconMinimize)),
                d.$header.append(n),
                (this.$buttons = this.$buttons.add(n));
            }
            return (
              s &&
                ((d.$counter = t("<span>", { class: l.counter })),
                d.$header.append(d.$counter)),
              d.$header
            );
          }
        },
        toggleFullscreen: function () {
          n.default.isFullscreen
            ? this.deactivateFullscreen()
            : n.default.isEnabled && this.activateFullscreen();
        },
        toggleZoomMode: function () {
          1 !== this.swiper.zoom.scale
            ? this.deactivateZoom()
            : this.activateZoom();
        },
        toggleShareMenu: function () {
          this.shareMode
            ? this.deactivateShareMode()
            : (this.elements.$shareMenu.html(this.getShareLinks()),
              this.activateShareMode());
        },
        activateShareMode: function () {
          const e = this.getSettings("classes");
          this.elements.$container.addClass(e.slideshow.shareMode),
            this.elements.$iconShare.attr("aria-expanded", !0),
            this.swiper.detachEvents(),
            (this.$originalButtons = this.$buttons),
            (this.$buttons = this.elements.$iconShare.add(
              this.elements.$shareMenu.find("a")
            )),
            (this.shareMode = !0);
        },
        deactivateShareMode: function () {
          const e = this.getSettings("classes");
          this.elements.$container.removeClass(e.slideshow.shareMode),
            this.elements.$iconShare.attr("aria-expanded", !1),
            this.swiper.attachEvents(),
            (this.$buttons = this.$originalButtons),
            (this.shareMode = !1);
        },
        activateFullscreen: function () {
          const e = this.getSettings("classes");
          n.default.request(
            this.elements.$container.parents(".dialog-widget")[0]
          ),
            this.isFontIconSvgExperiment
              ? (this.elements.$iconExpand
                  .addClass(e.hidden)
                  .attr("aria-checked", "false"),
                this.elements.$iconMinimize
                  .removeClass(e.hidden)
                  .attr("aria-checked", "true"))
              : this.elements.$iconExpand
                  .removeClass(e.slideshow.iconExpand)
                  .addClass(e.slideshow.iconShrink)
                  .attr("aria-checked", "true"),
            this.elements.$container.addClass(e.slideshow.fullscreenMode);
        },
        deactivateFullscreen: function () {
          const e = this.getSettings("classes");
          n.default.exit(),
            this.isFontIconSvgExperiment
              ? (this.elements.$iconExpand
                  .removeClass(e.hidden)
                  .attr("aria-checked", "true"),
                this.elements.$iconMinimize
                  .addClass(e.hidden)
                  .attr("aria-checked", "false"))
              : this.elements.$iconExpand
                  .removeClass(e.slideshow.iconShrink)
                  .addClass(e.slideshow.iconExpand)
                  .attr("aria-checked", "false"),
            this.elements.$container.removeClass(e.slideshow.fullscreenMode);
        },
        activateZoom: function () {
          const e = this.swiper,
            t = this.elements,
            s = this.getSettings("classes");
          e.zoom.in(),
            (e.allowSlideNext = !1),
            (e.allowSlidePrev = !1),
            (e.allowTouchMove = !1),
            t.$container.addClass(s.slideshow.zoomMode),
            this.isFontIconSvgExperiment
              ? (t.$iconZoom.addClass(s.hidden).attr("aria-checked", "false"),
                t.$iconZoomOut
                  .removeClass(s.hidden)
                  .attr("aria-checked", "true"))
              : t.$iconZoom
                  .removeClass(s.slideshow.iconZoomIn)
                  .addClass(s.slideshow.iconZoomOut);
        },
        deactivateZoom: function () {
          const e = this.swiper,
            t = this.elements,
            s = this.getSettings("classes");
          e.zoom.out(),
            (e.allowSlideNext = !0),
            (e.allowSlidePrev = !0),
            (e.allowTouchMove = !0),
            t.$container.removeClass(s.slideshow.zoomMode),
            this.isFontIconSvgExperiment
              ? (t.$iconZoom.removeClass(s.hidden).attr("aria-checked", "true"),
                t.$iconZoomOut.addClass(s.hidden).attr("aria-checked", "false"))
              : t.$iconZoom
                  .removeClass(s.slideshow.iconZoomOut)
                  .addClass(s.slideshow.iconZoomIn);
        },
        getSlideshowFooter: function () {
          const e = jQuery,
            t = this.getSettings("classes"),
            s = e("<footer>", {
              class: t.slideshow.footer + " " + t.preventClose,
            }),
            n = e("<div>", { class: t.slideshow.title }),
            i = e("<div>", { class: t.slideshow.description });
          return s.append(n, i), s;
        },
        setSlideshowContent: function (e) {
          const { i18n: t } = elementorFrontend.config,
            s = jQuery,
            n = 1 === e.slides.length,
            o = "" !== elementorFrontend.getKitSettings("lightbox_title_src"),
            a =
              "" !==
              elementorFrontend.getKitSettings("lightbox_description_src"),
            r = o || a,
            l = this.getSettings("classes"),
            d = l.slideshow,
            c = s("<div>", { class: d.container }),
            h = s("<div>", { class: d.slidesWrapper });
          let u, m;
          if (
            (e.slides.forEach((e) => {
              let n = d.slide + " " + l.item;
              e.video && (n += " " + l.video);
              const o = s("<div>", { class: n });
              if (e.video) {
                o.attr("data-elementor-slideshow-video", e.video);
                const n = this.isFontIconSvgExperiment
                    ? i.loading.element
                    : "<i>",
                  a = s("<div>", { class: l.playButton }).html(
                    s(n)
                      .attr("aria-label", t.playVideo)
                      .addClass(l.playButtonIcon)
                  );
                o.append(a);
              } else {
                const t = s("<div>", { class: "swiper-zoom-container" }),
                  n = s('<div class="swiper-lazy-preloader"></div>'),
                  i = {
                    "data-src": e.image,
                    class: l.image + " " + l.preventClose + " swiper-lazy",
                  };
                e.title && ((i["data-title"] = e.title), (i.alt = e.title)),
                  e.description &&
                    ((i["data-description"] = e.description),
                    (i.alt += " - " + e.description));
                const a = s("<img>", i);
                t.append([a, n]), o.append(t);
              }
              e.hash && o.attr("e-action-hash", e.hash), h.append(o);
            }),
            (this.elements.$container = c),
            (this.elements.$header = this.getSlideshowHeader()),
            c.prepend(this.elements.$header).append(h),
            !n)
          ) {
            const e = this.isFontIconSvgExperiment
                ? s(i.chevronLeft.element)
                : s("<i>", { class: d.prevButtonIcon }),
              n = this.isFontIconSvgExperiment
                ? s(i.chevronRight.element)
                : s("<i>", { class: d.nextButtonIcon });
            (u = s("<div>", {
              class: d.prevButton + " " + l.preventClose,
              "aria-label": t.previous,
            }).html(e)),
              (m = s("<div>", {
                class: d.nextButton + " " + l.preventClose,
                "aria-label": t.next,
              }).html(n)),
              c.append(m, u),
              (this.$buttons = this.$buttons.add(m).add(u));
          }
          r &&
            ((this.elements.$footer = this.getSlideshowFooter()),
            c.append(this.elements.$footer)),
            this.setSettings("hideUiTimeout", ""),
            c.on("click mousemove keypress", this.showLightboxUi);
          const p = this.getModal();
          p.setMessage(c);
          const g = p.onShow;
          p.onShow = async () => {
            g();
            const t = {
              pagination: { el: "." + d.counter, type: "fraction" },
              on: { slideChangeTransitionEnd: this.onSlideChange },
              lazy: { loadPrevNext: !0 },
              zoom: !0,
              spaceBetween: 100,
              grabCursor: !0,
              runCallbacksOnInit: !1,
              loop: !0,
              keyboard: !0,
              handleElementorBreakpoints: !0,
            };
            n || (t.navigation = { prevEl: u, nextEl: m }),
              e.swiper && s.extend(t, e.swiper);
            const i = elementorFrontend.utils.swiper;
            (this.swiper = await new i(c, t)),
              c.data("swiper", this.swiper),
              this.setVideoAspectRatio(),
              this.playSlideVideo(),
              r && this.updateFooterText(),
              this.bindHotKeys(),
              this.makeButtonsAccessible();
          };
        },
        makeButtonsAccessible: function () {
          this.$buttons.attr("tabindex", 0).on("keypress", (e) => {
            (13 !== e.which && 32 !== e.which) ||
              jQuery(e.currentTarget).trigger("click");
          });
        },
        showLightboxUi: function () {
          const e = this.getSettings("classes").slideshow;
          this.elements.$container.removeClass(e.hideUiVisibility),
            clearTimeout(this.getSettings("hideUiTimeout")),
            this.setSettings(
              "hideUiTimeout",
              setTimeout(() => {
                this.shareMode ||
                  this.elements.$container.addClass(e.hideUiVisibility);
              }, 3500)
            );
        },
        bindHotKeys: function () {
          this.getModal()
            .getElements("window")
            .on("keydown", this.activeKeyDown);
        },
        unbindHotKeys: function () {
          this.getModal()
            .getElements("window")
            .off("keydown", this.activeKeyDown);
        },
        activeKeyDown: function (e) {
          this.showLightboxUi();
          if (9 === e.which) {
            const t = this.$buttons;
            let s,
              n = !1,
              i = !1;
            t.each((e) => {
              const o = t[e];
              if (jQuery(o).is(":focus"))
                return (s = o), (n = 0 === e), (i = t.length - 1 === e), !1;
            }),
              e.shiftKey
                ? n && (e.preventDefault(), t.last().trigger("focus"))
                : (!i && s) || (e.preventDefault(), t.first().trigger("focus"));
          }
        },
        setVideoAspectRatio: function (e) {
          e = e || this.getSettings("modalOptions.videoAspectRatio");
          const t = this.getModal().getElements("widgetContent"),
            s = this.oldAspectRatio,
            n = this.getSettings("classes.aspectRatio");
          (this.oldAspectRatio = e),
            s && t.removeClass(n.replace("%s", s)),
            e && t.addClass(n.replace("%s", e));
        },
        getSlide: function (e) {
          return jQuery(this.swiper.slides).filter(
            this.getSettings("selectors.slideshow." + e + "Slide")
          );
        },
        updateFooterText: function () {
          if (!this.elements.$footer) return;
          const e = this.getSettings("classes"),
            t = this.getSlide("active").find(".elementor-lightbox-image"),
            s = t.data("title"),
            n = t.data("description"),
            i = this.elements.$footer.find("." + e.slideshow.title),
            o = this.elements.$footer.find("." + e.slideshow.description);
          i.text(s || ""), o.text(n || "");
        },
        playSlideVideo: function () {
          const e = this.getSlide("active"),
            t = e.data("elementor-slideshow-video");
          if (!t) return;
          const s = this.getSettings("classes"),
            n = jQuery("<div>", {
              class: s.videoContainer + " " + s.invisible,
            }),
            i = jQuery("<div>", { class: s.videoWrapper }),
            o = e.children("." + s.playButton);
          let a, r;
          n.append(i),
            e.append(n),
            -1 !== t.indexOf("vimeo.com")
              ? ((a = "vimeo"), (r = elementorFrontend.utils.vimeo))
              : t.match(
                  /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/
                ) && ((a = "youtube"), (r = elementorFrontend.utils.youtube));
          const l = r.getVideoIDFromURL(t);
          r.onApiReady((e) => {
            "youtube" === a
              ? this.prepareYTVideo(e, l, n, i, o)
              : "vimeo" === a && this.prepareVimeoVideo(e, t, n, i, o);
          }),
            o.addClass(s.playing).removeClass(s.hidden);
        },
        prepareYTVideo: function (e, t, s, n, i) {
          const o = this.getSettings("classes"),
            a = jQuery("<div>");
          let r = e.PlayerState.PLAYING;
          n.append(a),
            window.chrome && (r = e.PlayerState.UNSTARTED),
            s.addClass("elementor-loading " + o.invisible),
            (this.player = new e.Player(a[0], {
              videoId: t,
              events: {
                onReady: () => {
                  i.addClass(o.hidden),
                    s.removeClass(o.invisible),
                    this.player.playVideo();
                },
                onStateChange: (e) => {
                  e.data === r &&
                    s.removeClass("elementor-loading " + o.invisible);
                },
              },
              playerVars: { controls: 0, rel: 0 },
            }));
        },
        prepareVimeoVideo: function (e, t, s, n, i) {
          const o = this.getSettings("classes"),
            a = { url: t, autoplay: !0, transparent: !1, playsinline: !1 };
          (this.player = new e.Player(n, a)),
            this.player.ready().then(() => {
              i.addClass(o.hidden), s.removeClass(o.invisible);
            });
        },
        setEntranceAnimation: function (e) {
          e =
            e ||
            elementorFrontend.getCurrentDeviceSetting(
              this.getSettings("modalOptions"),
              "entranceAnimation"
            );
          const t = this.getModal().getElements("message");
          this.oldAnimation && t.removeClass(this.oldAnimation),
            (this.oldAnimation = e),
            e && t.addClass("animated " + e);
        },
        openSlideshow: function (e, t) {
          const s = jQuery(this.getSettings("selectors.links")).filter(
              (t, s) => {
                const n = jQuery(s);
                return (
                  e === s.dataset.elementorLightboxSlideshow &&
                  !n.parent(".swiper-slide-duplicate").length &&
                  !n.parents(".slick-cloned").length
                );
              }
            ),
            n = [];
          let i = 0;
          s.each(function () {
            const e = this.dataset.elementorLightboxVideo;
            let o = this.dataset.elementorLightboxIndex;
            void 0 === o && (o = s.index(this)),
              (t === this.href || (e && t === e)) && (i = o);
            const a = {
              image: this.href,
              index: o,
              title: this.dataset.elementorLightboxTitle,
              description: this.dataset.elementorLightboxDescription,
              hash: this.getAttribute("e-action-hash"),
            };
            e && (a.video = e), n.push(a);
          }),
            n.sort((e, t) => e.index - t.index),
            this.showModal({
              type: "slideshow",
              id: e,
              modalOptions: { id: "elementor-lightbox-slideshow-" + e },
              slideshow: { slides: n, swiper: { initialSlide: +i } },
            });
        },
        onSlideChange: function () {
          this.getSlide("prev")
            .add(this.getSlide("next"))
            .add(this.getSlide("active"))
            .find("." + this.getSettings("classes.videoWrapper"))
            .remove(),
            this.playSlideVideo(),
            this.updateFooterText();
        },
      });
    },
    3251: (e) => {
      "use strict";
      !(function () {
        var t =
            "undefined" != typeof window && void 0 !== window.document
              ? window.document
              : {},
          s = e.exports,
          n = (function () {
            for (
              var e,
                s = [
                  [
                    "requestFullscreen",
                    "exitFullscreen",
                    "fullscreenElement",
                    "fullscreenEnabled",
                    "fullscreenchange",
                    "fullscreenerror",
                  ],
                  [
                    "webkitRequestFullscreen",
                    "webkitExitFullscreen",
                    "webkitFullscreenElement",
                    "webkitFullscreenEnabled",
                    "webkitfullscreenchange",
                    "webkitfullscreenerror",
                  ],
                  [
                    "webkitRequestFullScreen",
                    "webkitCancelFullScreen",
                    "webkitCurrentFullScreenElement",
                    "webkitCancelFullScreen",
                    "webkitfullscreenchange",
                    "webkitfullscreenerror",
                  ],
                  [
                    "mozRequestFullScreen",
                    "mozCancelFullScreen",
                    "mozFullScreenElement",
                    "mozFullScreenEnabled",
                    "mozfullscreenchange",
                    "mozfullscreenerror",
                  ],
                  [
                    "msRequestFullscreen",
                    "msExitFullscreen",
                    "msFullscreenElement",
                    "msFullscreenEnabled",
                    "MSFullscreenChange",
                    "MSFullscreenError",
                  ],
                ],
                n = 0,
                i = s.length,
                o = {};
              n < i;
              n++
            )
              if ((e = s[n]) && e[1] in t) {
                var a = e.length;
                for (n = 0; n < a; n++) o[s[0][n]] = e[n];
                return o;
              }
            return !1;
          })(),
          i = { change: n.fullscreenchange, error: n.fullscreenerror },
          o = {
            request: function (e) {
              return new Promise(
                function (s, i) {
                  var o = function () {
                    this.off("change", o), s();
                  }.bind(this);
                  this.on("change", o),
                    (e = e || t.documentElement),
                    Promise.resolve(e[n.requestFullscreen]()).catch(i);
                }.bind(this)
              );
            },
            exit: function () {
              return new Promise(
                function (e, s) {
                  if (this.isFullscreen) {
                    var i = function () {
                      this.off("change", i), e();
                    }.bind(this);
                    this.on("change", i),
                      Promise.resolve(t[n.exitFullscreen]()).catch(s);
                  } else e();
                }.bind(this)
              );
            },
            toggle: function (e) {
              return this.isFullscreen ? this.exit() : this.request(e);
            },
            onchange: function (e) {
              this.on("change", e);
            },
            onerror: function (e) {
              this.on("error", e);
            },
            on: function (e, s) {
              var n = i[e];
              n && t.addEventListener(n, s, !1);
            },
            off: function (e, s) {
              var n = i[e];
              n && t.removeEventListener(n, s, !1);
            },
            raw: n,
          };
        n
          ? (Object.defineProperties(o, {
              isFullscreen: {
                get: function () {
                  return Boolean(t[n.fullscreenElement]);
                },
              },
              element: {
                enumerable: !0,
                get: function () {
                  return t[n.fullscreenElement];
                },
              },
              isEnabled: {
                enumerable: !0,
                get: function () {
                  return Boolean(t[n.fullscreenEnabled]);
                },
              },
            }),
            s ? (e.exports = o) : (window.screenfull = o))
          : s
          ? (e.exports = { isEnabled: !1 })
          : (window.screenfull = { isEnabled: !1 });
      })();
    },
  },
  (e) => {
    e.O(0, [819, 354], () => {
      return (t = 1210), e((e.s = t));
      var t;
    });
    e.O();
  },
]);
