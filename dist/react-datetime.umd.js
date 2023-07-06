!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("react"), require("moment"), require("react-dom")) : "function" == typeof define && define.amd ? define(["react", "moment", "react-dom"], t) : "object" == typeof exports ? exports.Datetime = t(require("react"), require("moment"), require("react-dom")) : e.Datetime = t(e.react, e.moment, e["react-dom"])
}(window, (function (e, t, n) {
    return function (e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {i: r, l: !1, exports: {}};
            return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }

        return n.m = e, n.c = t, n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
                return e[t]
            }.bind(null, o));
            return r
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 4)
    }([function (t, n) {
        t.exports = e
    }, function (e, n) {
        e.exports = t
    }, function (e, t) {
        e.exports = n
    }, function (e, t, n) {
        e.exports = n(5)()
    }, function (e, t, n) {
        e.exports = n(7)
    }, function (e, t, n) {
        "use strict";
        var r = n(6);

        function o() {
        }

        function i() {
        }

        i.resetWarningCache = o, e.exports = function () {
            function e(e, t, n, o, i, a) {
                if (a !== r) {
                    var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw s.name = "Invariant Violation", s
                }
            }

            function t() {
                return e
            }

            e.isRequired = e;
            var n = {
                array: e,
                bigint: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: i,
                resetWarningCache: o
            };
            return n.PropTypes = n, n
        }
    }, function (e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(3), o = n.n(r), i = n(1), a = n.n(i), s = n(0), u = n.n(s);

        function c() {
            return (c = Object.assign ? Object.assign.bind() : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }).apply(this, arguments)
        }

        function l(e) {
            var t = e.onClickPrev, n = e.onClickSwitch, r = e.onClickNext, o = e.switchContent, i = e.switchColSpan,
                a = e.switchProps;
            return u.a.createElement("tr", null, u.a.createElement("th", {
                className: "rdtPrev",
                onClick: t
            }, u.a.createElement("span", null, "‹")), u.a.createElement("th", c({
                className: "rdtSwitch",
                colSpan: i,
                onClick: n
            }, a), o), u.a.createElement("th", {
                className: "rdtNext",
                onClick: r
            }, u.a.createElement("span", null, "›")))
        }

        function p(e) {
            return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function f(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function d(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, w(r.key), r)
            }
        }

        function m(e, t) {
            return (m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function h(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = b(e);
                if (t) {
                    var o = b(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return y(this, n)
            }
        }

        function y(e, t) {
            if (t && ("object" === p(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return v(e)
        }

        function v(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function b(e) {
            return (b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function g(e, t, n) {
            return (t = w(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function w(e) {
            var t = function (e, t) {
                if ("object" !== p(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== p(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === p(t) ? t : String(t)
        }

        var O = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {writable: !1}), t && m(e, t)
            }(i, e);
            var t, n, r, o = h(i);

            function i() {
                var e;
                f(this, i);
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return g(v(e = o.call.apply(o, [this].concat(n))), "_setDate", (function (t) {
                    e.props.updateDate(t)
                })), e
            }

            return t = i, (n = [{
                key: "render", value: function () {
                    return u.a.createElement("div", {className: "rdtDays"}, u.a.createElement("table", null, u.a.createElement("thead", null, this.renderNavigation(), this.renderDayHeaders()), u.a.createElement("tbody", null, this.renderDays()), this.renderFooter()))
                }
            }, {
                key: "renderNavigation", value: function () {
                    var e = this, t = this.props.viewDate, n = t.localeData();
                    return u.a.createElement(l, {
                        onClickPrev: function () {
                            return e.props.navigate(-1, "months")
                        },
                        onClickSwitch: function () {
                            return e.props.showView("months")
                        },
                        onClickNext: function () {
                            return e.props.navigate(1, "months")
                        },
                        switchContent: n.months(t) + " " + t.year(),
                        switchColSpan: 5,
                        switchProps: {"data-value": this.props.viewDate.month()}
                    })
                }
            }, {
                key: "renderDayHeaders", value: function () {
                    var e = function (e) {
                        var t = e.firstDayOfWeek(), n = [], r = 0;
                        return e._weekdaysMin.forEach((function (e) {
                            n[(7 + r++ - t) % 7] = e
                        })), n
                    }(this.props.viewDate.localeData()).map((function (e, t) {
                        return u.a.createElement("th", {key: e + t, className: "dow"}, e)
                    }));
                    return u.a.createElement("tr", null, e)
                }
            }, {
                key: "renderDays", value: function () {
                    var e = this.props.viewDate, t = e.clone().startOf("month"), n = e.clone().endOf("month"),
                        r = [[], [], [], [], [], []], o = e.clone().subtract(1, "months");
                    o.date(o.daysInMonth()).startOf("week");
                    for (var i = o.clone().add(42, "d"), a = 0; o.isBefore(i);) D(r, a++).push(this.renderDay(o, t, n)), o.add(1, "d");
                    return r.map((function (e, t) {
                        return u.a.createElement("tr", {key: "".concat(i.month(), "_").concat(t)}, e)
                    }))
                }
            }, {
                key: "renderDay", value: function (e, t, n) {
                    var r = this.props.selectedDate, o = {
                        key: e.format("M_D"),
                        "data-value": e.date(),
                        "data-month": e.month(),
                        "data-year": e.year()
                    }, i = "rdtDay";
                    return e.isBefore(t) ? i += " rdtOld" : e.isAfter(n) && (i += " rdtNew"), r && e.isSame(r, "day") && (i += " rdtActive"), e.isSame(this.props.moment(), "day") && (i += " rdtToday"), this.props.isValidDate(e) ? o.onClick = this._setDate : i += " rdtDisabled", o.className = i, this.props.renderDay(o, e.clone(), r && r.clone())
                }
            }, {
                key: "renderFooter", value: function () {
                    var e = this;
                    if (this.props.timeFormat) {
                        var t = this.props.viewDate;
                        return u.a.createElement("tfoot", null, u.a.createElement("tr", null, u.a.createElement("td", {
                            onClick: function () {
                                return e.props.showView("time")
                            }, colSpan: 7, className: "rdtTimeToggle"
                        }, t.format(this.props.timeFormat))))
                    }
                }
            }]) && d(t.prototype, n), r && d(t, r), Object.defineProperty(t, "prototype", {writable: !1}), i
        }(u.a.Component);

        function D(e, t) {
            return e[Math.floor(t / 7)]
        }

        function k(e) {
            return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function C(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function P(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, N(r.key), r)
            }
        }

        function _(e, t) {
            return (_ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function E(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = T(e);
                if (t) {
                    var o = T(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return j(this, n)
            }
        }

        function j(e, t) {
            if (t && ("object" === k(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return S(e)
        }

        function S(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function T(e) {
            return (T = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function V(e, t, n) {
            return (t = N(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function N(e) {
            var t = function (e, t) {
                if ("object" !== k(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== k(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === k(t) ? t : String(t)
        }

        g(O, "defaultProps", {
            isValidDate: function () {
                return !0
            }, renderDay: function (e, t) {
                return u.a.createElement("td", e, t.date())
            }
        });
        var x = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {writable: !1}), t && _(e, t)
            }(i, e);
            var t, n, r, o = E(i);

            function i() {
                var e;
                C(this, i);
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return V(S(e = o.call.apply(o, [this].concat(n))), "_updateSelectedMonth", (function (t) {
                    e.props.updateDate(t)
                })), e
            }

            return t = i, (n = [{
                key: "render", value: function () {
                    return u.a.createElement("div", {className: "rdtMonths"}, u.a.createElement("table", null, u.a.createElement("thead", null, this.renderNavigation())), u.a.createElement("table", null, u.a.createElement("tbody", null, this.renderMonths())))
                }
            }, {
                key: "renderNavigation", value: function () {
                    var e = this, t = this.props.viewDate.year();
                    return u.a.createElement(l, {
                        onClickPrev: function () {
                            return e.props.navigate(-1, "years")
                        }, onClickSwitch: function () {
                            return e.props.showView("years")
                        }, onClickNext: function () {
                            return e.props.navigate(1, "years")
                        }, switchContent: t, switchColSpan: "2"
                    })
                }
            }, {
                key: "renderMonths", value: function () {
                    for (var e = [[], [], []], t = 0; t < 12; t++) F(e, t).push(this.renderMonth(t));
                    return e.map((function (e, t) {
                        return u.a.createElement("tr", {key: t}, e)
                    }))
                }
            }, {
                key: "renderMonth", value: function (e) {
                    var t, n = this.props.selectedDate, r = "rdtMonth";
                    this.isDisabledMonth(e) ? r += " rdtDisabled" : t = this._updateSelectedMonth, n && n.year() === this.props.viewDate.year() && n.month() === e && (r += " rdtActive");
                    var o = {key: e, className: r, "data-value": e, onClick: t};
                    return this.props.renderMonth ? this.props.renderMonth(o, e, this.props.viewDate.year(), this.props.selectedDate && this.props.selectedDate.clone()) : u.a.createElement("td", o, this.getMonthText(e))
                }
            }, {
                key: "isDisabledMonth", value: function (e) {
                    var t = this.props.isValidDate;
                    if (!t) return !1;
                    for (var n = this.props.viewDate.clone().set({month: e}), r = n.endOf("month").date() + 1; r-- > 1;) if (t(n.date(r))) return !1;
                    return !0
                }
            }, {
                key: "getMonthText", value: function (e) {
                    var t, n = this.props.viewDate, r = n.localeData().monthsShort(n.month(e));
                    return (t = r.substring(0, 3)).charAt(0).toUpperCase() + t.slice(1)
                }
            }]) && P(t.prototype, n), r && P(t, r), Object.defineProperty(t, "prototype", {writable: !1}), i
        }(u.a.Component);

        function F(e, t) {
            return t < 4 ? e[0] : t < 8 ? e[1] : e[2]
        }

        function I(e) {
            return (I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function R(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function M(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Z(r.key), r)
            }
        }

        function Y(e, t) {
            return (Y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function L(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = H(e);
                if (t) {
                    var o = H(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return A(this, n)
            }
        }

        function A(e, t) {
            if (t && ("object" === I(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return B(e)
        }

        function B(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function H(e) {
            return (H = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function U(e, t, n) {
            return (t = Z(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Z(e) {
            var t = function (e, t) {
                if ("object" !== I(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== I(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === I(t) ? t : String(t)
        }

        var W = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {writable: !1}), t && Y(e, t)
            }(i, e);
            var t, n, r, o = L(i);

            function i() {
                var e;
                R(this, i);
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return U(B(e = o.call.apply(o, [this].concat(n))), "disabledYearsCache", {}), U(B(e), "_updateSelectedYear", (function (t) {
                    e.props.updateDate(t)
                })), e
            }

            return t = i, (n = [{
                key: "render", value: function () {
                    return u.a.createElement("div", {className: "rdtYears"}, u.a.createElement("table", null, u.a.createElement("thead", null, this.renderNavigation())), u.a.createElement("table", null, u.a.createElement("tbody", null, this.renderYears())))
                }
            }, {
                key: "renderNavigation", value: function () {
                    var e = this, t = this.getViewYear();
                    return u.a.createElement(l, {
                        onClickPrev: function () {
                            return e.props.navigate(-10, "years")
                        }, onClickSwitch: function () {
                            return e.props.showView("years")
                        }, onClickNext: function () {
                            return e.props.navigate(10, "years")
                        }, switchContent: "".concat(t, "-").concat(t + 9)
                    })
                }
            }, {
                key: "renderYears", value: function () {
                    for (var e = this.getViewYear(), t = [[], [], []], n = e - 1; n < e + 11; n++) q(t, n - e).push(this.renderYear(n));
                    return t.map((function (e, t) {
                        return u.a.createElement("tr", {key: t}, e)
                    }))
                }
            }, {
                key: "renderYear", value: function (e) {
                    var t, n = this.getSelectedYear(), r = "rdtYear";
                    this.isDisabledYear(e) ? r += " rdtDisabled" : t = this._updateSelectedYear, n === e && (r += " rdtActive");
                    var o = {key: e, className: r, "data-value": e, onClick: t};
                    return this.props.renderYear(o, e, this.props.selectedDate && this.props.selectedDate.clone())
                }
            }, {
                key: "getViewYear", value: function () {
                    return 10 * parseInt(this.props.viewDate.year() / 10, 10)
                }
            }, {
                key: "getSelectedYear", value: function () {
                    return this.props.selectedDate && this.props.selectedDate.year()
                }
            }, {
                key: "isDisabledYear", value: function (e) {
                    var t = this.disabledYearsCache;
                    if (void 0 !== t[e]) return t[e];
                    var n = this.props.isValidDate;
                    if (!n) return !1;
                    for (var r = this.props.viewDate.clone().set({year: e}), o = r.endOf("year").dayOfYear() + 1; o-- > 1;) if (n(r.dayOfYear(o))) return t[e] = !1, !1;
                    return t[e] = !0, !0
                }
            }]) && M(t.prototype, n), r && M(t, r), Object.defineProperty(t, "prototype", {writable: !1}), i
        }(u.a.Component);

        function q(e, t) {
            return t < 3 ? e[0] : t < 7 ? e[1] : e[2]
        }

        function z(e) {
            return (z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function K(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, ne(r.key), r)
            }
        }

        function X(e, t) {
            return (X = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function G(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = Q(e);
                if (t) {
                    var o = Q(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return J(this, n)
            }
        }

        function J(e, t) {
            if (t && ("object" === z(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        }

        function Q(e) {
            return (Q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function $(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function ee(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? $(Object(n), !0).forEach((function (t) {
                    te(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function te(e, t, n) {
            return (t = ne(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function ne(e) {
            var t = function (e, t) {
                if ("object" !== z(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== z(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === z(t) ? t : String(t)
        }

        U(W, "defaultProps", {
            renderYear: function (e, t) {
                return u.a.createElement("td", e, t)
            }
        });
        var re = {
            hours: {min: 0, max: 23, step: 1},
            minutes: {min: 0, max: 59, step: 1},
            seconds: {min: 0, max: 59, step: 1},
            milliseconds: {min: 0, max: 999, step: 1}
        };
        var oe = function (e) {
            !function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {writable: !1}), t && X(e, t)
            }(i, e);
            var t, n, r, o = G(i);

            function i(e) {
                var t, n, r;
                return function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, i), (t = o.call(this, e)).constraints = (n = e.timeConstraints, r = {}, Object.keys(re).forEach((function (e) {
                    r[e] = ee(ee({}, re[e]), n[e] || {})
                })), r), t.state = t.getTimeParts(e.selectedDate || e.viewDate), t
            }

            return t = i, (n = [{
                key: "render", value: function () {
                    var e = this, t = [], n = this.state;
                    return this.getCounters().forEach((function (r, o) {
                        o && "ampm" !== r && t.push(u.a.createElement("div", {
                            key: "sep".concat(o),
                            className: "rdtCounterSeparator"
                        }, ":")), t.push(e.renderCounter(r, n[r]))
                    })), u.a.createElement("div", {className: "rdtTime"}, u.a.createElement("table", null, this.renderHeader(), u.a.createElement("tbody", null, u.a.createElement("tr", null, u.a.createElement("td", null, u.a.createElement("div", {className: "rdtCounters"}, t))))))
                }
            }, {
                key: "renderCounter", value: function (e, t) {
                    var n = this;
                    return "hours" === e && this.isAMPM() && 0 == (t = (t - 1) % 12 + 1) && (t = 12), "ampm" === e && (t = -1 !== this.props.timeFormat.indexOf(" A") ? this.props.viewDate.format("A") : this.props.viewDate.format("a")), u.a.createElement("div", {
                        key: e,
                        className: "rdtCounter"
                    }, u.a.createElement("span", {
                        className: "rdtBtn", onMouseDown: function (t) {
                            return n.onStartClicking(t, "increase", e)
                        }
                    }, "▲"), u.a.createElement("div", {className: "rdtCount"}, t), u.a.createElement("span", {
                        className: "rdtBtn",
                        onMouseDown: function (t) {
                            return n.onStartClicking(t, "decrease", e)
                        }
                    }, "▼"))
                }
            }, {
                key: "renderHeader", value: function () {
                    var e = this;
                    if (this.props.dateFormat) {
                        var t = this.props.selectedDate || this.props.viewDate;
                        return u.a.createElement("thead", null, u.a.createElement("tr", null, u.a.createElement("td", {
                            className: "rdtSwitch",
                            colSpan: "4",
                            onClick: function () {
                                return e.props.showView("days")
                            }
                        }, t.format(this.props.dateFormat))))
                    }
                }
            }, {
                key: "onStartClicking", value: function (e, t, n) {
                    var r = this;
                    if (!e || !e.button || 0 === e.button) {
                        if ("ampm" === n) return this.toggleDayPart();
                        var o = {}, i = document.body;
                        o[n] = this[t](n), this.setState(o), this.timer = setTimeout((function () {
                            r.increaseTimer = setInterval((function () {
                                o[n] = r[t](n), r.setState(o)
                            }), 70)
                        }), 500), this.mouseUpListener = function () {
                            clearTimeout(r.timer), clearInterval(r.increaseTimer), r.props.setTime(n, parseInt(r.state[n], 10)), i.removeEventListener("mouseup", r.mouseUpListener), i.removeEventListener("touchend", r.mouseUpListener)
                        }, i.addEventListener("mouseup", this.mouseUpListener), i.addEventListener("touchend", this.mouseUpListener)
                    }
                }
            }, {
                key: "toggleDayPart", value: function () {
                    var e = parseInt(this.state.hours, 10);
                    e >= 12 ? e -= 12 : e += 12, this.props.setTime("hours", e)
                }
            }, {
                key: "increase", value: function (e) {
                    var t = this.constraints[e], n = parseInt(this.state[e], 10) + t.step;
                    return n > t.max && (n = t.min + (n - (t.max + 1))), ie(e, n)
                }
            }, {
                key: "decrease", value: function (e) {
                    var t = this.constraints[e], n = parseInt(this.state[e], 10) - t.step;
                    return n < t.min && (n = t.max + 1 - (t.min - n)), ie(e, n)
                }
            }, {
                key: "getCounters", value: function () {
                    var e = [], t = this.props.timeFormat;
                    return -1 !== t.toLowerCase().indexOf("h") && (e.push("hours"), -1 !== t.indexOf("m") && (e.push("minutes"), -1 !== t.indexOf("s") && (e.push("seconds"), -1 !== t.indexOf("S") && e.push("milliseconds")))), this.isAMPM() && e.push("ampm"), e
                }
            }, {
                key: "isAMPM", value: function () {
                    return -1 !== this.props.timeFormat.toLowerCase().indexOf(" a")
                }
            }, {
                key: "getTimeParts", value: function (e) {
                    var t = e.hours();
                    return {
                        hours: ie("hours", t),
                        minutes: ie("minutes", e.minutes()),
                        seconds: ie("seconds", e.seconds()),
                        milliseconds: ie("milliseconds", e.milliseconds()),
                        ampm: t < 12 ? "am" : "pm"
                    }
                }
            }, {
                key: "componentDidUpdate", value: function (e) {
                    this.props.selectedDate ? this.props.selectedDate !== e.selectedDate && this.setState(this.getTimeParts(this.props.selectedDate)) : e.viewDate !== this.props.viewDate && this.setState(this.getTimeParts(this.props.viewDate))
                }
            }]) && K(t.prototype, n), r && K(t, r), Object.defineProperty(t, "prototype", {writable: !1}), i
        }(u.a.Component);

        function ie(e, t) {
            for (var n = {hours: 1, minutes: 2, seconds: 2, milliseconds: 3}, r = t + ""; r.length < n[e];) r = "0" + r;
            return r
        }

        var ae = n(2);

        function se(e, t) {
            return (se = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function ue(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function ce(e, t, n) {
            return e === t || (e.correspondingElement ? e.correspondingElement.classList.contains(n) : e.classList.contains(n))
        }

        var le, pe, fe = (void 0 === le && (le = 0), function () {
            return ++le
        }), de = {}, me = {}, he = ["touchstart", "touchmove"];

        function ye(e, t) {
            var n = null;
            return -1 !== he.indexOf(t) && pe && (n = {passive: !e.props.preventDefault}), n
        }

        var ve = function (e, t) {
            var n, r, o = e.displayName || e.name || "Component";
            return r = n = function (n) {
                var r, i;

                function a(e) {
                    var r;
                    return (r = n.call(this, e) || this).__outsideClickHandler = function (e) {
                        if ("function" != typeof r.__clickOutsideHandlerProp) {
                            var t = r.getInstance();
                            if ("function" != typeof t.props.handleClickOutside) {
                                if ("function" != typeof t.handleClickOutside) throw new Error("WrappedComponent: " + o + " lacks a handleClickOutside(event) function for processing outside click events.");
                                t.handleClickOutside(e)
                            } else t.props.handleClickOutside(e)
                        } else r.__clickOutsideHandlerProp(e)
                    }, r.__getComponentNode = function () {
                        var e = r.getInstance();
                        return t && "function" == typeof t.setClickOutsideRef ? t.setClickOutsideRef()(e) : "function" == typeof e.setClickOutsideRef ? e.setClickOutsideRef() : Object(ae.findDOMNode)(e)
                    }, r.enableOnClickOutside = function () {
                        if ("undefined" != typeof document && !me[r._uid]) {
                            void 0 === pe && (pe = function () {
                                if ("undefined" != typeof window && "function" == typeof window.addEventListener) {
                                    var e = !1, t = Object.defineProperty({}, "passive", {
                                        get: function () {
                                            e = !0
                                        }
                                    }), n = function () {
                                    };
                                    return window.addEventListener("testPassiveEventSupport", n, t), window.removeEventListener("testPassiveEventSupport", n, t), e
                                }
                            }()), me[r._uid] = !0;
                            var e = r.props.eventTypes;
                            e.forEach || (e = [e]), de[r._uid] = function (e) {
                                var t;
                                null !== r.componentNode && (r.props.preventDefault && e.preventDefault(), r.props.stopPropagation && e.stopPropagation(), r.props.excludeScrollbar && (t = e, document.documentElement.clientWidth <= t.clientX || document.documentElement.clientHeight <= t.clientY) || function (e, t, n) {
                                    if (e === t) return !0;
                                    for (; e.parentNode || e.host;) {
                                        if (e.parentNode && ce(e, t, n)) return !0;
                                        e = e.parentNode || e.host
                                    }
                                    return e
                                }(e.composed && e.composedPath && e.composedPath().shift() || e.target, r.componentNode, r.props.outsideClickIgnoreClass) === document && r.__outsideClickHandler(e))
                            }, e.forEach((function (e) {
                                document.addEventListener(e, de[r._uid], ye(ue(r), e))
                            }))
                        }
                    }, r.disableOnClickOutside = function () {
                        delete me[r._uid];
                        var e = de[r._uid];
                        if (e && "undefined" != typeof document) {
                            var t = r.props.eventTypes;
                            t.forEach || (t = [t]), t.forEach((function (t) {
                                return document.removeEventListener(t, e, ye(ue(r), t))
                            })), delete de[r._uid]
                        }
                    }, r.getRef = function (e) {
                        return r.instanceRef = e
                    }, r._uid = fe(), r
                }

                i = n, (r = a).prototype = Object.create(i.prototype), r.prototype.constructor = r, se(r, i);
                var u = a.prototype;
                return u.getInstance = function () {
                    if (e.prototype && !e.prototype.isReactComponent) return this;
                    var t = this.instanceRef;
                    return t.getInstance ? t.getInstance() : t
                }, u.componentDidMount = function () {
                    if ("undefined" != typeof document && document.createElement) {
                        var e = this.getInstance();
                        if (t && "function" == typeof t.handleClickOutside && (this.__clickOutsideHandlerProp = t.handleClickOutside(e), "function" != typeof this.__clickOutsideHandlerProp)) throw new Error("WrappedComponent: " + o + " lacks a function for processing outside click events specified by the handleClickOutside config option.");
                        this.componentNode = this.__getComponentNode(), this.props.disableOnClickOutside || this.enableOnClickOutside()
                    }
                }, u.componentDidUpdate = function () {
                    this.componentNode = this.__getComponentNode()
                }, u.componentWillUnmount = function () {
                    this.disableOnClickOutside()
                }, u.render = function () {
                    var t = this.props;
                    t.excludeScrollbar;
                    var n = function (e, t) {
                        if (null == e) return {};
                        var n, r, o = {}, i = Object.keys(e);
                        for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                        return o
                    }(t, ["excludeScrollbar"]);
                    return e.prototype && e.prototype.isReactComponent ? n.ref = this.getRef : n.wrappedRef = this.getRef, n.disableOnClickOutside = this.disableOnClickOutside, n.enableOnClickOutside = this.enableOnClickOutside, Object(s.createElement)(e, n)
                }, a
            }(s.Component), n.displayName = "OnClickOutside(" + o + ")", n.defaultProps = {
                eventTypes: ["mousedown", "touchstart"],
                excludeScrollbar: t && t.excludeScrollbar || !1,
                outsideClickIgnoreClass: "ignore-react-onclickoutside",
                preventDefault: !1,
                stopPropagation: !1
            }, n.getClass = function () {
                return e.getClass ? e.getClass() : e
            }, r
        };

        function be(e) {
            return (be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function ge(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function we(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ge(Object(n), !0).forEach((function (t) {
                    Te(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ge(Object(n)).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }

        function Oe(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function De(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ve(r.key), r)
            }
        }

        function ke(e, t, n) {
            return t && De(e.prototype, t), n && De(e, n), Object.defineProperty(e, "prototype", {writable: !1}), e
        }

        function Ce(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), Object.defineProperty(e, "prototype", {writable: !1}), t && Pe(e, t)
        }

        function Pe(e, t) {
            return (Pe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function _e(e) {
            var t = function () {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () {
                    }))), !0
                } catch (e) {
                    return !1
                }
            }();
            return function () {
                var n, r = Se(e);
                if (t) {
                    var o = Se(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else n = r.apply(this, arguments);
                return Ee(this, n)
            }
        }

        function Ee(e, t) {
            if (t && ("object" === be(t) || "function" == typeof t)) return t;
            if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
            return je(e)
        }

        function je(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function Se(e) {
            return (Se = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function Te(e, t, n) {
            return (t = Ve(t)) in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }

        function Ve(e) {
            var t = function (e, t) {
                if ("object" !== be(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" !== be(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === be(t) ? t : String(t)
        }

        n.d(t, "default", (function () {
            return Le
        }));
        var Ne = "years", xe = "months", Fe = "days", Ie = "time", Re = o.a, Me = function () {
        }, Ye = Re.oneOfType([Re.instanceOf(a.a), Re.instanceOf(Date), Re.string]), Le = function (e) {
            Ce(n, e);
            var t = _e(n);

            function n(e) {
                var r;
                return Oe(this, n), Te(je(r = t.call(this, e)), "_renderCalendar", (function () {
                    var e = r.props, t = r.state, n = {
                        viewDate: t.viewDate.clone(),
                        selectedDate: r.getSelectedDate(),
                        isValidDate: e.isValidDate,
                        updateDate: r._updateDate,
                        navigate: r._viewNavigate,
                        moment: a.a,
                        showView: r._showView
                    };
                    switch (t.currentView) {
                        case Ne:
                            return n.renderYear = e.renderYear, u.a.createElement(W, n);
                        case xe:
                            return n.renderMonth = e.renderMonth, u.a.createElement(x, n);
                        case Fe:
                            return n.renderDay = e.renderDay, n.timeFormat = r.getFormat("time"), u.a.createElement(O, n);
                        default:
                            return n.dateFormat = r.getFormat("date"), n.timeFormat = r.getFormat("time"), n.timeConstraints = e.timeConstraints, n.setTime = r._setTime, u.a.createElement(oe, n)
                    }
                })), Te(je(r), "_showView", (function (e, t) {
                    var n = (t || r.state.viewDate).clone(), o = r.props.onBeforeNavigate(e, r.state.currentView, n);
                    o && r.state.currentView !== o && (r.props.onNavigate(o), r.setState({currentView: o}))
                })), Te(je(r), "viewToMethod", {
                    days: "date",
                    months: "month",
                    years: "year"
                }), Te(je(r), "nextView", {
                    days: "time",
                    months: "days",
                    years: "months"
                }), Te(je(r), "_updateDate", (function (e) {
                    var t = r.state.currentView, n = r.getUpdateOn(r.getFormat("date")), o = r.state.viewDate.clone();
                    o[r.viewToMethod[t]](parseInt(e.target.getAttribute("data-value"), 10)), "days" === t && (o.month(parseInt(e.target.getAttribute("data-month"), 10)), o.year(parseInt(e.target.getAttribute("data-year"), 10)), o.set("date", parseInt(e.target.getAttribute("data-value"), 10)));
                    var i = {viewDate: o};
                    t === n ? (i.selectedDate = o.clone(), i.inputValue = o.format(r.getFormat("datetime")), void 0 === r.props.open && r.props.input && r.props.closeOnSelect && r._closeCalendar(), r.props.onChange(o.clone())) : r._showView(r.nextView[t], o), r.setState(i)
                })), Te(je(r), "_viewNavigate", (function (e, t) {
                    var n = r.state.viewDate.clone();
                    n.add(e, t), e > 0 ? r.props.onNavigateForward(e, t) : r.props.onNavigateBack(-e, t), r.setState({viewDate: n})
                })), Te(je(r), "_setTime", (function (e, t) {
                    var n = (r.getSelectedDate() || r.state.viewDate).clone();
                    n[e](t), r.props.value || r.setState({
                        selectedDate: n,
                        viewDate: n.clone(),
                        inputValue: n.format(r.getFormat("datetime"))
                    }), r.props.onChange(n)
                })), Te(je(r), "_openCalendar", (function () {
                    r.isOpen() || r.setState({open: !0}, r.props.onOpen)
                })), Te(je(r), "_closeCalendar", (function () {
                    r.isOpen() && r.setState({open: !1}, (function () {
                        r.props.onClose(r.state.selectedDate || r.state.inputValue)
                    }))
                })), Te(je(r), "_handleClickOutside", (function () {
                    var e = r.props;
                    e.input && r.state.open && void 0 === e.open && e.closeOnClickOutside && r._closeCalendar()
                })), Te(je(r), "_onInputFocus", (function (e) {
                    r.callHandler(r.props.inputProps.onFocus, e) && r._openCalendar()
                })), Te(je(r), "_onInputChange", (function (e) {
                    if (r.callHandler(r.props.inputProps.onChange, e)) {
                        var t = e.target ? e.target.value : e, n = r.localMoment(t, r.getFormat("datetime")),
                            o = {inputValue: t};
                        n.isValid() ? (o.selectedDate = n, o.viewDate = n.clone().startOf("month")) : o.selectedDate = null, r.setState(o, (function () {
                            r.props.onChange(n.isValid() ? n : r.state.inputValue)
                        }))
                    }
                })), Te(je(r), "_onInputKeyDown", (function (e) {
                    r.callHandler(r.props.inputProps.onKeyDown, e) && 9 === e.which && r.props.closeOnTab && r._closeCalendar()
                })), Te(je(r), "_onInputClick", (function (e) {
                    r.callHandler(r.props.inputProps.onClick, e) && r._openCalendar()
                })), r.state = r.getInitialState(), r
            }

            return ke(n, [{
                key: "render", value: function () {
                    return u.a.createElement(Be, {
                        className: this.getClassName(),
                        onClickOut: this._handleClickOutside
                    }, this.renderInput(), u.a.createElement("div", {className: "rdtPicker"}, this.renderView()))
                }
            }, {
                key: "renderInput", value: function () {
                    if (this.props.input) {
                        var e = we(we({
                            type: "text",
                            className: "form-control",
                            value: this.getInputValue()
                        }, this.props.inputProps), {}, {
                            onFocus: this._onInputFocus,
                            onChange: this._onInputChange,
                            onKeyDown: this._onInputKeyDown,
                            onClick: this._onInputClick
                        });
                        return this.props.renderInput ? u.a.createElement("div", null, this.props.renderInput(e, this._openCalendar, this._closeCalendar)) : u.a.createElement("input", e)
                    }
                }
            }, {
                key: "renderView", value: function () {
                    return this.props.renderView(this.state.currentView, this._renderCalendar)
                }
            }, {
                key: "getInitialState", value: function () {
                    var e = this.props, t = this.getFormat("datetime"),
                        n = this.parseDate(e.value || e.initialValue, t);
                    return this.checkTZ(), {
                        open: !e.input,
                        currentView: e.initialViewMode || this.getInitialView(),
                        viewDate: this.getInitialViewDate(n),
                        selectedDate: n && n.isValid() ? n : void 0,
                        inputValue: this.getInitialInputValue(n)
                    }
                }
            }, {
                key: "getInitialViewDate", value: function (e) {
                    var t, n = this.props.initialViewDate;
                    if (n) {
                        if ((t = this.parseDate(n, this.getFormat("datetime"))) && t.isValid()) return t;
                        Ae('The initialViewDated given "' + n + '" is not valid. Using current date instead.')
                    } else if (e && e.isValid()) return e.clone();
                    return this.getInitialDate()
                }
            }, {
                key: "getInitialDate", value: function () {
                    var e = this.localMoment();
                    return e.hour(0).minute(0).second(0).millisecond(0), e
                }
            }, {
                key: "getInitialView", value: function () {
                    var e = this.getFormat("date");
                    return e ? this.getUpdateOn(e) : Ie
                }
            }, {
                key: "parseDate", value: function (e, t) {
                    var n;
                    return e && "string" == typeof e ? n = this.localMoment(e, t) : e && (n = this.localMoment(e)), n && !n.isValid() && (n = null), n
                }
            }, {
                key: "getClassName", value: function () {
                    var e = "rdt", t = this.props, n = t.className;
                    return Array.isArray(n) ? e += " " + n.join(" ") : n && (e += " " + n), t.input || (e += " rdtStatic"), this.isOpen() && (e += " rdtOpen", t.overlay && (e += " rdtOverlay")), e
                }
            }, {
                key: "isOpen", value: function () {
                    return !this.props.input || (void 0 === this.props.open ? this.state.open : this.props.open)
                }
            }, {
                key: "getUpdateOn", value: function (e) {
                    return this.props.updateOnView ? this.props.updateOnView : e.match(/[lLD]/) ? Fe : -1 !== e.indexOf("M") ? xe : -1 !== e.indexOf("Y") ? Ne : Fe
                }
            }, {
                key: "getLocaleData", value: function () {
                    var e = this.props;
                    return this.localMoment(e.value || e.defaultValue || new Date).localeData()
                }
            }, {
                key: "getDateFormat", value: function () {
                    var e = this.getLocaleData(), t = this.props.dateFormat;
                    return !0 === t ? e.longDateFormat("L") : t || ""
                }
            }, {
                key: "getTimeFormat", value: function () {
                    var e = this.getLocaleData(), t = this.props.timeFormat;
                    return !0 === t ? e.longDateFormat("LT") : t || ""
                }
            }, {
                key: "getFormat", value: function (e) {
                    if ("date" === e) return this.getDateFormat();
                    if ("time" === e) return this.getTimeFormat();
                    var t = this.getDateFormat(), n = this.getTimeFormat();
                    return t && n ? t + " " + n : t || n
                }
            }, {
                key: "updateTime", value: function (e, t, n, r) {
                    var o = {}, i = r ? "selectedDate" : "viewDate";
                    o[i] = this.state[i].clone()[e](t, n), this.setState(o)
                }
            }, {
                key: "localMoment", value: function (e, t, n) {
                    var r = null;
                    return r = (n = n || this.props).utc ? a.a.utc(e, t, n.strictParsing) : n.displayTimeZone ? a.a.tz(e, t, n.displayTimeZone) : a()(e, t, n.strictParsing), n.locale && r.locale(n.locale), r
                }
            }, {
                key: "checkTZ", value: function () {
                    var e = this.props.displayTimeZone;
                    !e || this.tzWarning || a.a.tz || (this.tzWarning = !0, Ae('displayTimeZone prop with value "' + e + '" is used but moment.js timezone is not loaded.', "error"))
                }
            }, {
                key: "componentDidUpdate", value: function (e) {
                    if (e !== this.props) {
                        var t = !1, n = this.props;
                        ["locale", "utc", "displayZone", "dateFormat", "timeFormat"].forEach((function (r) {
                            e[r] !== n[r] && (t = !0)
                        })), t && this.regenerateDates(), n.value && n.value !== e.value && this.setViewDate(n.value), this.checkTZ()
                    }
                }
            }, {
                key: "regenerateDates", value: function () {
                    var e = this.props, t = this.state.viewDate.clone(),
                        n = this.state.selectedDate && this.state.selectedDate.clone();
                    e.locale && (t.locale(e.locale), n && n.locale(e.locale)), e.utc ? (t.utc(), n && n.utc()) : e.displayTimeZone ? (t.tz(e.displayTimeZone), n && n.tz(e.displayTimeZone)) : (t.locale(), n && n.locale());
                    var r = {viewDate: t, selectedDate: n};
                    n && n.isValid() && (r.inputValue = n.format(this.getFormat("datetime"))), this.setState(r)
                }
            }, {
                key: "getSelectedDate", value: function () {
                    if (void 0 === this.props.value) return this.state.selectedDate;
                    var e = this.parseDate(this.props.value, this.getFormat("datetime"));
                    return !(!e || !e.isValid()) && e
                }
            }, {
                key: "getInitialInputValue", value: function (e) {
                    var t = this.props;
                    return t.inputProps.value ? t.inputProps.value : e && e.isValid() ? e.format(this.getFormat("datetime")) : t.value && "string" == typeof t.value ? t.value : t.initialValue && "string" == typeof t.initialValue ? t.initialValue : ""
                }
            }, {
                key: "getInputValue", value: function () {
                    var e = this.getSelectedDate();
                    return e ? e.format(this.getFormat("datetime")) : this.state.inputValue
                }
            }, {
                key: "setViewDate", value: function (e) {
                    var t, n = function () {
                        return Ae("Invalid date passed to the `setViewDate` method: " + e)
                    };
                    return e && (t = "string" == typeof e ? this.localMoment(e, this.getFormat("datetime")) : this.localMoment(e)) && t.isValid() ? void this.setState({viewDate: t}) : n()
                }
            }, {
                key: "navigate", value: function (e) {
                    this._showView(e)
                }
            }, {
                key: "callHandler", value: function (e, t) {
                    return !e || !1 !== e(t)
                }
            }]), n
        }(u.a.Component);

        function Ae(e, t) {
            var n = "undefined" != typeof window && window.console;
            n && (t || (t = "warn"), n[t]("***react-datetime:" + e))
        }

        Te(Le, "propTypes", {
            value: Ye,
            initialValue: Ye,
            initialViewDate: Ye,
            initialViewMode: Re.oneOf([Ne, xe, Fe, Ie]),
            onOpen: Re.func,
            onClose: Re.func,
            onChange: Re.func,
            onNavigate: Re.func,
            onBeforeNavigate: Re.func,
            onNavigateBack: Re.func,
            onNavigateForward: Re.func,
            updateOnView: Re.string,
            locale: Re.string,
            utc: Re.bool,
            overlay: Re.bool,
            displayTimeZone: Re.string,
            input: Re.bool,
            dateFormat: Re.oneOfType([Re.string, Re.bool]),
            timeFormat: Re.oneOfType([Re.string, Re.bool]),
            inputProps: Re.object,
            timeConstraints: Re.object,
            isValidDate: Re.func,
            open: Re.bool,
            strictParsing: Re.bool,
            closeOnSelect: Re.bool,
            closeOnTab: Re.bool,
            renderView: Re.func,
            renderInput: Re.func,
            renderDay: Re.func,
            renderMonth: Re.func,
            renderYear: Re.func
        }), Te(Le, "defaultProps", {
            onOpen: Me,
            onClose: Me,
            onCalendarOpen: Me,
            onCalendarClose: Me,
            onChange: Me,
            onNavigate: Me,
            onBeforeNavigate: function (e) {
                return e
            },
            onNavigateBack: Me,
            onNavigateForward: Me,
            dateFormat: !0,
            timeFormat: !0,
            utc: !1,
            overlay: !1,
            className: "",
            input: !0,
            inputProps: {},
            timeConstraints: {},
            isValidDate: function () {
                return !0
            },
            strictParsing: !0,
            closeOnSelect: !1,
            closeOnTab: !0,
            closeOnClickOutside: !0,
            renderView: function (e, t) {
                return t()
            }
        }), Te(Le, "moment", a.a);
        var Be = ve(function (e) {
            Ce(n, e);
            var t = _e(n);

            function n() {
                var e;
                Oe(this, n);
                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                return Te(je(e = t.call.apply(t, [this].concat(o))), "container", u.a.createRef()), e
            }

            return ke(n, [{
                key: "render", value: function () {
                    return u.a.createElement("div", {
                        className: this.props.className,
                        ref: this.container
                    }, this.props.children)
                }
            }, {
                key: "handleClickOutside", value: function (e) {
                    this.props.onClickOut(e)
                }
            }, {
                key: "setClickOutsideRef", value: function () {
                    return this.container.current
                }
            }]), n
        }(u.a.Component))
    }]).default
}));
//# sourceMappingURL=react-datetime.umd.js.map
