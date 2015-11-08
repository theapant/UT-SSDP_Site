﻿(function(g, e, b, j, c, i, k) { /*! Jssor */
    new(function() {});
    var d = g.$JssorEasing$ = {
            $EaseSwing: function(a) {
                return -b.cos(a * b.PI) / 2 + .5
            },
            $EaseLinear: function(a) {
                return a
            },
            $EaseInQuad: function(a) {
                return a * a
            },
            $EaseOutQuad: function(a) {
                return -a * (a - 2)
            },
            $EaseInOutQuad: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
            },
            $EaseInCubic: function(a) {
                return a * a * a
            },
            $EaseOutCubic: function(a) {
                return (a -= 1) * a * a + 1
            },
            $EaseInOutCubic: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
            },
            $EaseInQuart: function(a) {
                return a * a * a * a
            },
            $EaseOutQuart: function(a) {
                return -((a -= 1) * a * a * a - 1)
            },
            $EaseInOutQuart: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
            },
            $EaseInQuint: function(a) {
                return a * a * a * a * a
            },
            $EaseOutQuint: function(a) {
                return (a -= 1) * a * a * a * a + 1
            },
            $EaseInOutQuint: function(a) {
                return (a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
            },
            $EaseInSine: function(a) {
                return 1 - b.cos(a * b.PI / 2)
            },
            $EaseOutSine: function(a) {
                return b.sin(a * b.PI / 2)
            },
            $EaseInOutSine: function(a) {
                return -1 / 2 * (b.cos(b.PI * a) - 1)
            },
            $EaseInExpo: function(a) {
                return a == 0 ? 0 : b.pow(2, 10 * (a - 1))
            },
            $EaseOutExpo: function(a) {
                return a == 1 ? 1 : -b.pow(2, -10 * a) + 1
            },
            $EaseInOutExpo: function(a) {
                return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * b.pow(2, 10 * (a - 1)) : 1 / 2 * (-b.pow(2, -10 * --a) + 2)
            },
            $EaseInCirc: function(a) {
                return -(b.sqrt(1 - a * a) - 1)
            },
            $EaseOutCirc: function(a) {
                return b.sqrt(1 - (a -= 1) * a)
            },
            $EaseInOutCirc: function(a) {
                return (a *= 2) < 1 ? -1 / 2 * (b.sqrt(1 - a * a) - 1) : 1 / 2 * (b.sqrt(1 - (a -= 2) * a) + 1)
            },
            $EaseInElastic: function(a) {
                if (!a || a == 1) return a;
                var c = .3,
                    d = .075;
                return -(b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c))
            },
            $EaseOutElastic: function(a) {
                if (!a || a == 1) return a;
                var c = .3,
                    d = .075;
                return b.pow(2, -10 * a) * b.sin((a - d) * 2 * b.PI / c) + 1
            },
            $EaseInOutElastic: function(a) {
                if (!a || a == 1) return a;
                var c = .45,
                    d = .1125;
                return (a *= 2) < 1 ? -.5 * b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) : b.pow(2, -10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) * .5 + 1
            },
            $EaseInBack: function(a) {
                var b = 1.70158;
                return a * a * ((b + 1) * a - b)
            },
            $EaseOutBack: function(a) {
                var b = 1.70158;
                return (a -= 1) * a * ((b + 1) * a + b) + 1
            },
            $EaseInOutBack: function(a) {
                var b = 1.70158;
                return (a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
            },
            $EaseInBounce: function(a) {
                return 1 - d.$EaseOutBounce(1 - a)
            },
            $EaseOutBounce: function(a) {
                return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            },
            $EaseInOutBounce: function(a) {
                return a < 1 / 2 ? d.$EaseInBounce(a * 2) * .5 : d.$EaseOutBounce(a * 2 - 1) * .5 + .5
            },
            $EaseGoBack: function(a) {
                return 1 - b.abs(2 - 1)
            },
            $EaseInWave: function(a) {
                return 1 - b.cos(a * b.PI * 2)
            },
            $EaseOutWave: function(a) {
                return b.sin(a * b.PI * 2)
            },
            $EaseOutJump: function(a) {
                return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
            },
            $EaseInJump: function(a) {
                return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
            }
        },
        f = g.$Jease$ = {
            $Swing: d.$EaseSwing,
            $Linear: d.$EaseLinear,
            $InQuad: d.$EaseInQuad,
            $OutQuad: d.$EaseOutQuad,
            $InOutQuad: d.$EaseInOutQuad,
            $InCubic: d.$EaseInCubic,
            $OutCubic: d.$EaseOutCubic,
            $InOutCubic: d.$EaseInOutCubic,
            $InQuart: d.$EaseInQuart,
            $OutQuart: d.$EaseOutQuart,
            $InOutQuart: d.$EaseInOutQuart,
            $InQuint: d.$EaseInQuint,
            $OutQuint: d.$EaseOutQuint,
            $InOutQuint: d.$EaseInOutQuint,
            $InSine: d.$EaseInSine,
            $OutSine: d.$EaseOutSine,
            $InOutSine: d.$EaseInOutSine,
            $InExpo: d.$EaseInExpo,
            $OutExpo: d.$EaseOutExpo,
            $InOutExpo: d.$EaseInOutExpo,
            $InCirc: d.$EaseInCirc,
            $OutCirc: d.$EaseOutCirc,
            $InOutCirc: d.$EaseInOutCirc,
            $InElastic: d.$EaseInElastic,
            $OutElastic: d.$EaseOutElastic,
            $InOutElastic: d.$EaseInOutElastic,
            $InBack: d.$EaseInBack,
            $OutBack: d.$EaseOutBack,
            $InOutBack: d.$EaseInOutBack,
            $InBounce: d.$EaseInBounce,
            $OutBounce: d.$EaseOutBounce,
            $InOutBounce: d.$EaseInOutBounce,
            $GoBack: d.$EaseGoBack,
            $InWave: d.$EaseInWave,
            $OutWave: d.$EaseOutWave,
            $OutJump: d.$EaseOutJump,
            $InJump: d.$EaseInJump
        };
    var a = new function() {
        var f = this,
            zb = /\S+/g,
            S = 1,
            fb = 2,
            jb = 3,
            ib = 4,
            nb = 5,
            I, s = 0,
            l = 0,
            q = 0,
            J = 0,
            C = 0,
            y = navigator,
            sb = y.appName,
            n = y.userAgent;

        function Ib() {
            if (!I) {
                I = {
                    Sg: "ontouchstart" in g || "createTouch" in e
                };
                var a;
                if (y.pointerEnabled || (a = y.msPointerEnabled)) I.Bd = a ? "msTouchAction" : "touchAction"
            }
            return I
        }

        function t(i) {
            if (!s) {
                s = -1;
                if (sb == "Microsoft Internet Explorer" && !!g.attachEvent && !!g.ActiveXObject) {
                    var f = n.indexOf("MSIE");
                    s = S;
                    q = o(n.substring(f + 5, n.indexOf(";", f))); /*@cc_on J=@_jscript_version@*/ ;
                    l = e.documentMode || q
                } else if (sb == "Netscape" && !!g.addEventListener) {
                    var d = n.indexOf("Firefox"),
                        b = n.indexOf("Safari"),
                        h = n.indexOf("Chrome"),
                        c = n.indexOf("AppleWebKit");
                    if (d >= 0) {
                        s = fb;
                        l = o(n.substring(d + 8))
                    } else if (b >= 0) {
                        var j = n.substring(0, b).lastIndexOf("/");
                        s = h >= 0 ? ib : jb;
                        l = o(n.substring(j + 1, b))
                    } else {
                        var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(n);
                        if (a) {
                            s = S;
                            l = q = o(a[1])
                        }
                    }
                    if (c >= 0) C = o(n.substring(c + 12))
                } else {
                    var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(n);
                    if (a) {
                        s = nb;
                        l = o(a[2])
                    }
                }
            }
            return i == s
        }

        function p() {
            return t(S)
        }

        function N() {
            return p() && (l < 6 || e.compatMode == "BackCompat")
        }

        function hb() {
            return t(jb)
        }

        function mb() {
            return t(nb)
        }

        function ab() {
            return hb() && C > 534 && C < 535
        }

        function L() {
            return p() && l < 9
        }

        function cb(a) {
            var b;
            return function(d) {
                if (!b) {
                    b = a;
                    var c = a.substr(0, 1).toUpperCase() + a.substr(1);
                    m([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(g, f) {
                        var e = a;
                        if (f) e = g + c;
                        if (d.style[e] != k) return b = e
                    })
                }
                return b
            }
        }
        var bb = cb("transform");

        function rb(a) {
            return {}.toString.call(a)
        }
        var H;

        function Fb() {
            if (!H) {
                H = {};
                m(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
                    H["[object " + a + "]"] = a.toLowerCase()
                })
            }
            return H
        }

        function m(a, d) {
            if (rb(a) == "[object Array]") {
                for (var b = 0; b < a.length; b++)
                    if (d(a[b], b, a)) return c
            } else
                for (var e in a)
                    if (d(a[e], e, a)) return c
        }

        function A(a) {
            return a == j ? String(a) : Fb()[rb(a)] || "object"
        }

        function pb(a) {
            for (var b in a) return c
        }

        function x(a) {
            try {
                return A(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
            } catch (b) {}
        }

        function w(a, b) {
            return {
                x: a,
                y: b
            }
        }

        function vb(b, a) {
            setTimeout(b, a || 0)
        }

        function F(b, d, c) {
            var a = !b || b == "inherit" ? "" : b;
            m(d, function(c) {
                var b = c.exec(a);
                if (b) {
                    var d = a.substr(0, b.index),
                        e = a.substr(b.lastIndex + 1, a.length - (b.lastIndex + 1));
                    a = d + e
                }
            });
            a = c + (a.indexOf(" ") != 0 ? " " : "") + a;
            return a
        }

        function eb(b, a) {
            if (l < 9) b.style.filter = a
        }

        function Bb(g, a, i) {
            if (!J || J < 9) {
                var d = a.$ScaleX,
                    e = a.$ScaleY,
                    j = (a.$Rotate || 0) % 360,
                    h = "";
                if (j || d != k || e != k) {
                    if (d == k) d = 1;
                    if (e == k) e = 1;
                    var c = f.Og(j / 180 * b.PI, d || 1, e || 1),
                        i = f.Ng(c, a.$OriginalWidth, a.$OriginalHeight);
                    f.Ad(g, i.y);
                    f.Dd(g, i.x);
                    h = "progid:DXImageTransform.Microsoft.Matrix(M11=" + c[0][0] + ", M12=" + c[0][1] + ", M21=" + c[1][0] + ", M22=" + c[1][1] + ", SizingMethod='auto expand')"
                }
                var m = g.style.filter,
                    n = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
                    l = F(m, [n], h);
                eb(g, l)
            }
        }
        f.Qg = Ib;
        f.Jd = p;
        f.Pg = hb;
        f.yc = mb;
        f.V = L;
        f.rd = function() {
            return l
        };
        f.Kg = function() {
            t();
            return C
        };
        f.$Delay = vb;

        function V(a) {
            a.constructor === V.caller && a.td && a.td.apply(a, V.caller.arguments)
        }
        f.td = V;
        f.qb = function(a) {
            if (f.ud(a)) a = e.getElementById(a);
            return a
        };

        function r(a) {
            return a || g.event
        }
        f.vd = r;
        f.uc = function(a) {
            a = r(a);
            return a.target || a.srcElement || e
        };
        f.Pd = function(a) {
            a = r(a);
            return {
                x: a.pageX || a.clientX || 0,
                y: a.pageY || a.clientY || 0
            }
        };

        function B(c, d, a) {
            if (a !== k) c.style[d] = a == k ? "" : a;
            else {
                var b = c.currentStyle || c.style;
                a = b[d];
                if (a == "" && g.getComputedStyle) {
                    b = c.ownerDocument.defaultView.getComputedStyle(c, j);
                    b && (a = b.getPropertyValue(d) || b[d])
                }
                return a
            }
        }

        function X(b, c, a, d) {
            if (a != k) {
                if (a == j) a = "";
                else d && (a += "px");
                B(b, c, a)
            } else return o(B(b, c))
        }

        function h(c, a) {
            var d = a ? X : B,
                b;
            if (a & 4) b = cb(c);
            return function(e, f) {
                return d(e, b ? b(e) : c, f, a & 2)
            }
        }

        function Cb(b) {
            if (p() && q < 9) {
                var a = /opacity=([^)]*)/.exec(b.style.filter || "");
                return a ? o(a[1]) / 100 : 1
            } else return o(b.style.opacity || "1")
        }

        function Eb(c, a, f) {
            if (p() && q < 9) {
                var h = c.style.filter || "",
                    i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
                    e = b.round(100 * a),
                    d = "";
                if (e < 100 || f) d = "alpha(opacity=" + e + ") ";
                var g = F(h, [i], d);
                eb(c, g)
            } else c.style.opacity = a == 1 ? "" : b.round(a * 100) / 100
        }
        var xb = {
            $Rotate: ["rotate"],
            $RotateX: ["rotateX"],
            $RotateY: ["rotateY"],
            $ScaleX: ["scaleX", 2],
            $ScaleY: ["scaleY", 2],
            $TranslateX: ["translateX", 1],
            $TranslateY: ["translateY", 1],
            $TranslateZ: ["translateZ", 1],
            $SkewX: ["skewX"],
            $SkewY: ["skewY"]
        };

        function Z(e, c) {
            if (p() && l && l < 10) {
                delete c.$RotateX;
                delete c.$RotateY
            }
            var d = bb(e);
            if (d) {
                var b = "";
                a.c(c, function(e, c) {
                    var a = xb[c];
                    if (a) {
                        var d = a[1] || 0;
                        b += (b ? " " : "") + a[0] + "(" + e + (["deg", "px", ""])[d] + ")"
                    }
                });
                e.style[d] = b
            }
        }
        f.ig = function(b, a) {
            if (ab()) vb(f.K(j, Z, b, a));
            else(L() ? Bb : Z)(b, a)
        };
        f.Sc = h("transformOrigin", 4);
        f.kg = h("backfaceVisibility", 4);
        f.mg = h("transformStyle", 4);
        f.lg = h("perspective", 6);
        f.zg = h("perspectiveOrigin", 4);
        f.yg = function(a, c) {
            if (p() && q < 9 || q < 10 && N()) a.style.zoom = c == 1 ? "" : c;
            else {
                var b = bb(a);
                if (b) {
                    var f = "scale(" + c + ")",
                        e = a.style[b],
                        g = new RegExp(/[\s]*scale\(.*?\)/g),
                        d = F(e, [g], f);
                    a.style[b] = d
                }
            }
        };
        f.Jb = function(b, a) {
            return function(c) {
                c = r(c);
                var e = c.type,
                    d = c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
                (!d || d !== a && !f.Cg(a, d)) && b(c)
            }
        };
        f.e = function(a, c, d, b) {
            a = f.qb(a);
            if (a.addEventListener) {
                c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
                a.addEventListener(c, d, b)
            } else if (a.attachEvent) {
                a.attachEvent("on" + c, d);
                b && a.setCapture && a.setCapture()
            }
        };
        f.R = function(a, c, d, b) {
            a = f.qb(a);
            if (a.removeEventListener) {
                c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
                a.removeEventListener(c, d, b)
            } else if (a.detachEvent) {
                a.detachEvent("on" + c, d);
                b && a.releaseCapture && a.releaseCapture()
            }
        };
        f.Xb = function(a) {
            a = r(a);
            a.preventDefault && a.preventDefault();
            a.cancel = c;
            a.returnValue = i
        };
        f.tg = function(a) {
            a = r(a);
            a.stopPropagation && a.stopPropagation();
            a.cancelBubble = c
        };
        f.K = function(d, c) {
            var a = [].slice.call(arguments, 2),
                b = function() {
                    var b = a.concat([].slice.call(arguments, 0));
                    return c.apply(d, b)
                };
            return b
        };
        f.sg = function(a, b) {
            if (b == k) return a.textContent || a.innerText;
            var c = e.createTextNode(b);
            f.vc(a);
            a.appendChild(c)
        };
        f.P = function(d, c) {
            for (var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
            return b
        };

        function qb(a, c, e, b) {
            b = b || "u";
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (R(a, b) == c) return a;
                    if (!e) {
                        var d = qb(a, c, e, b);
                        if (d) return d
                    }
                }
        }
        f.C = qb;

        function P(a, d, f, b) {
            b = b || "u";
            var c = [];
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    R(a, b) == d && c.push(a);
                    if (!f) {
                        var e = P(a, d, f, b);
                        if (e.length) c = c.concat(e)
                    }
                }
            return c
        }

        function kb(a, c, d) {
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    if (a.tagName == c) return a;
                    if (!d) {
                        var b = kb(a, c, d);
                        if (b) return b
                    }
                }
        }
        f.vg = kb;

        function db(a, c, e) {
            var b = [];
            for (a = a ? a.firstChild : j; a; a = a.nextSibling)
                if (a.nodeType == 1) {
                    (!c || a.tagName == c) && b.push(a);
                    if (!e) {
                        var d = db(a, c, e);
                        if (d.length) b = b.concat(d)
                    }
                }
            return b
        }
        f.wg = db;
        f.ug = function(b, a) {
            return b.getElementsByTagName(a)
        };

        function z() {
            var e = arguments,
                d, c, b, a, g = 1 & e[0],
                f = 1 + g;
            d = e[f - 1] || {};
            for (; f < e.length; f++)
                if (c = e[f])
                    for (b in c) {
                        a = c[b];
                        if (a !== k) {
                            a = c[b];
                            var h = d[b];
                            d[b] = g && (x(h) || x(a)) ? z(g, {}, h, a) : a
                        }
                    }
                return d
        }
        f.p = z;

        function W(f, g) {
            var d = {},
                c, a, b;
            for (c in f) {
                a = f[c];
                b = g[c];
                if (a !== b) {
                    var e;
                    if (x(a) && x(b)) {
                        a = W(a, b);
                        e = !pb(a)
                    }!e && (d[c] = a)
                }
            }
            return d
        }
        f.kd = function(a) {
            return A(a) == "function"
        };
        f.Ac = function(a) {
            return A(a) == "array"
        };
        f.ud = function(a) {
            return A(a) == "string"
        };
        f.Zb = function(a) {
            return !isNaN(o(a)) && isFinite(a)
        };
        f.c = m;
        f.xg = x;

        function O(a) {
            return e.createElement(a)
        }
        f.nb = function() {
            return O("DIV")
        };
        f.Ag = function() {
            return O("SPAN")
        };
        f.Wc = function() {};

        function T(b, c, a) {
            if (a == k) return b.getAttribute(c);
            b.setAttribute(c, a)
        }

        function R(a, b) {
            return T(a, b) || T(a, "data-" + b)
        }
        f.B = T;
        f.j = R;

        function u(b, a) {
            if (a == k) return b.className;
            b.className = a
        }
        f.dd = u;

        function ub(b) {
            var a = {};
            m(b, function(b) {
                a[b] = b
            });
            return a
        }

        function wb(b, a) {
            return b.match(a || zb)
        }

        function M(b, a) {
            return ub(wb(b || "", a))
        }
        f.ng = wb;

        function Y(b, c) {
            var a = "";
            m(c, function(c) {
                a && (a += b);
                a += c
            });
            return a
        }

        function E(a, c, b) {
            u(a, Y(" ", z(W(M(u(a)), M(c)), M(b))))
        }
        f.cd = function(a) {
            return a.parentNode
        };
        f.O = function(a) {
            f.Y(a, "none")
        };
        f.A = function(a, b) {
            f.Y(a, b ? "none" : "")
        };
        f.rg = function(b, a) {
            b.removeAttribute(a)
        };
        f.og = function() {
            return p() && l < 10
        };
        f.pg = function(d, c) {
            if (c) d.style.clip = "rect(" + b.round(c.$Top) + "px " + b.round(c.$Right) + "px " + b.round(c.$Bottom) + "px " + b.round(c.$Left) + "px)";
            else {
                var g = d.style.cssText,
                    f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
                    e = F(g, f, "");
                a.Kb(d, e)
            }
        };
        f.Q = function() {
            return +new Date
        };
        f.H = function(b, a) {
            b.appendChild(a)
        };
        f.Mb = function(b, a, c) {
            (c || a.parentNode).insertBefore(b, a)
        };
        f.Hb = function(a, b) {
            (b || a.parentNode).removeChild(a)
        };
        f.Lg = function(a, b) {
            m(a, function(a) {
                f.Hb(a, b)
            })
        };
        f.vc = function(a) {
            f.Lg(f.P(a, c), a)
        };
        f.Oe = function(a, b) {
            var c = f.cd(a);
            b & 1 && f.E(a, (f.k(c) - f.k(a)) / 2);
            b & 2 && f.G(a, (f.m(c) - f.m(a)) / 2)
        };
        f.Nb = function(b, a) {
            return parseInt(b, a || 10)
        };
        var o = parseFloat;
        f.Ic = o;
        f.Cg = function(b, a) {
            var c = e.body;
            while (a && b !== a && c !== a) try {
                a = a.parentNode
            } catch (d) {
                return i
            }
            return b === a
        };

        function U(d, c, b) {
            var a = d.cloneNode(!c);
            !b && f.rg(a, "id");
            return a
        }
        f.X = U;
        f.Db = function(e, g) {
            var a = new Image;

            function b(e, c) {
                f.R(a, "load", b);
                f.R(a, "abort", d);
                f.R(a, "error", d);
                g && g(a, c)
            }

            function d(a) {
                b(a, c)
            }
            if (mb() && l < 11.6 || !e) b(!e);
            else {
                f.e(a, "load", b);
                f.e(a, "abort", d);
                f.e(a, "error", d);
                a.src = e
            }
        };
        f.Xd = function(d, a, e) {
            var c = d.length + 1;

            function b(b) {
                c--;
                if (a && b && b.src == a.src) a = b;
                !c && e && e(a)
            }
            m(d, function(a) {
                f.Db(a.src, b)
            });
            b()
        };
        f.fd = function(b, g, i, h) {
            if (h) b = U(b);
            var c = P(b, g);
            if (!c.length) c = a.ug(b, g);
            for (var f = c.length - 1; f > -1; f--) {
                var d = c[f],
                    e = U(i);
                u(e, u(d));
                a.Kb(e, d.style.cssText);
                a.Mb(e, d);
                a.Hb(d)
            }
            return b
        };

        function Gb(b) {
            var l = this,
                p = "",
                r = ["av", "pv", "ds", "dn"],
                g = [],
                q, j = 0,
                h = 0,
                d = 0;

            function i() {
                E(b, q, g[d || j || h & 2 || h]);
                a.Z(b, "pointer-events", d ? "none" : "")
            }

            function c() {
                j = 0;
                i();
                f.R(e, "mouseup", c);
                f.R(e, "touchend", c);
                f.R(e, "touchcancel", c)
            }

            function o(a) {
                if (d) f.Xb(a);
                else {
                    j = 4;
                    i();
                    f.e(e, "mouseup", c);
                    f.e(e, "touchend", c);
                    f.e(e, "touchcancel", c)
                }
            }
            l.ad = function(a) {
                if (a === k) return h;
                h = a & 2 || a & 1;
                i()
            };
            l.$Enable = function(a) {
                if (a === k) return !d;
                d = a ? 0 : 3;
                i()
            };
            l.$Elmt = b = f.qb(b);
            var n = a.ng(u(b));
            if (n) p = n.shift();
            m(r, function(a) {
                g.push(p + a)
            });
            q = Y(" ", g);
            g.unshift("");
            f.e(b, "mousedown", o);
            f.e(b, "touchstart", o)
        }
        f.ac = function(a) {
            return new Gb(a)
        };
        f.Z = B;
        f.jb = h("overflow");
        f.G = h("top", 2);
        f.E = h("left", 2);
        f.k = h("width", 2);
        f.m = h("height", 2);
        f.Dd = h("marginLeft", 2);
        f.Ad = h("marginTop", 2);
        f.z = h("position");
        f.Y = h("display");
        f.J = h("zIndex", 1);
        f.Bb = function(b, a, c) {
            if (a != k) Eb(b, a, c);
            else return Cb(b)
        };
        f.Kb = function(a, b) {
            if (b != k) a.style.cssText = b;
            else return a.style.cssText
        };
        var Q = {
                $Opacity: f.Bb,
                $Top: f.G,
                $Left: f.E,
                N: f.k,
                T: f.m,
                Cb: f.z,
                Kh: f.Y,
                $ZIndex: f.J
            },
            K;

        function G() {
            if (!K) K = z({
                Mh: f.Ad,
                Lh: f.Dd,
                $Clip: f.pg,
                D: f.ig
            }, Q);
            return K
        }

        function ob() {
            var a = {};
            a.D = a.D;
            a.D = a.$Rotate;
            a.D = a.$RotateX;
            a.D = a.$RotateY;
            a.D = a.$SkewX;
            a.D = a.$SkewY;
            a.D = a.$TranslateX;
            a.D = a.$TranslateY;
            a.D = a.$TranslateZ;
            return G()
        }
        f.oe = G;
        f.Xc = ob;
        f.ye = function(c, b) {
            G();
            var a = {};
            m(b, function(d, b) {
                if (Q[b]) a[b] = Q[b](c)
            });
            return a
        };
        f.bb = function(c, b) {
            var a = G();
            m(b, function(d, b) {
                a[b] && a[b](c, d)
            })
        };
        f.we = function(b, a) {
            ob();
            f.bb(b, a)
        };
        var D = new function() {
            var a = this;

            function b(d, g) {
                for (var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
                    for (var k = f[c] = [], b = 0; b < h; b++) {
                        for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
                        k[b] = e
                    }
                return f
            }
            a.$ScaleX = function(b, c) {
                return a.Rc(b, c, 0)
            };
            a.$ScaleY = function(b, c) {
                return a.Rc(b, 0, c)
            };
            a.Rc = function(a, c, d) {
                return b(a, [
                    [c, 0],
                    [0, d]
                ])
            };
            a.Ub = function(d, c) {
                var a = b(d, [
                    [c.x],
                    [c.y]
                ]);
                return w(a[0][0], a[1][0])
            }
        };
        f.Og = function(d, a, c) {
            var e = b.cos(d),
                f = b.sin(d);
            return [
                [e * a, -f * c],
                [f * a, e * c]
            ]
        };
        f.Ng = function(d, c, a) {
            var e = D.Ub(d, w(-c / 2, -a / 2)),
                f = D.Ub(d, w(c / 2, -a / 2)),
                g = D.Ub(d, w(c / 2, a / 2)),
                h = D.Ub(d, w(-c / 2, a / 2));
            return w(b.min(e.x, f.x, g.x, h.x) + c / 2, b.min(e.y, f.y, g.y, h.y) + a / 2)
        };
        var yb = {
            $Zoom: 1,
            $ScaleX: 1,
            $ScaleY: 1,
            $Rotate: 0,
            $RotateX: 0,
            $RotateY: 0,
            $TranslateX: 0,
            $TranslateY: 0,
            $TranslateZ: 0,
            $SkewX: 0,
            $SkewY: 0
        };
        f.xc = function(b) {
            var c = b || {};
            if (b)
                if (a.kd(b)) c = {
                    kb: c
                };
                else if (a.kd(b.$Clip)) c.$Clip = {
                kb: b.$Clip
            };
            return c
        };

        function tb(c, a) {
            var b = {};
            m(c, function(c, d) {
                var e = c;
                if (a[d] != k)
                    if (f.Zb(c)) e = c + a[d];
                    else e = tb(c, a[d]);
                b[d] = e
            });
            return b
        }
        f.He = tb;
        f.pd = function(h, i, w, n, y, z, o) {
            var c = i;
            if (h) {
                c = {};
                for (var g in i) {
                    var A = z[g] || 1,
                        v = y[g] || [0, 1],
                        e = (w - v[0]) / v[1];
                    e = b.min(b.max(e, 0), 1);
                    e = e * A;
                    var u = b.floor(e);
                    if (e != u) e -= u;
                    var l = n.kb || d.$EaseSwing,
                        m, B = h[g],
                        q = i[g];
                    if (a.Zb(q)) {
                        l = n[g] || l;
                        var x = l(e);
                        m = B + q * x
                    } else {
                        m = a.p({
                            wb: {}
                        }, h[g]);
                        a.c(q.wb || q, function(d, a) {
                            if (n.$Clip) l = n.$Clip[a] || n.$Clip.kb || l;
                            var c = l(e),
                                b = d * c;
                            m.wb[a] = b;
                            m[a] += b
                        })
                    }
                    c[g] = m
                }
                var t, f = {
                    $OriginalWidth: o.$OriginalWidth,
                    $OriginalHeight: o.$OriginalHeight
                };
                a.c(yb, function(d, a) {
                    t = t || i[a];
                    var b = c[a];
                    if (b != k) {
                        if (b != d) f[a] = b;
                        delete c[a]
                    } else if (h[a] != k && h[a] != d) f[a] = h[a]
                });
                if (i.$Zoom && f.$Zoom) {
                    f.$ScaleX = f.$Zoom;
                    f.$ScaleY = f.$Zoom
                }
                c.D = f
            }
            if (i.$Clip && o.$Move) {
                var p = c.$Clip.wb,
                    s = (p.$Top || 0) + (p.$Bottom || 0),
                    r = (p.$Left || 0) + (p.$Right || 0);
                c.$Left = (c.$Left || 0) + r;
                c.$Top = (c.$Top || 0) + s;
                c.$Clip.$Left -= r;
                c.$Clip.$Right -= r;
                c.$Clip.$Top -= s;
                c.$Clip.$Bottom -= s
            }
            if (c.$Clip && a.og() && !c.$Clip.$Top && !c.$Clip.$Left && c.$Clip.$Right == o.$OriginalWidth && c.$Clip.$Bottom == o.$OriginalHeight) c.$Clip = j;
            return c
        }
    };

    function m() {
        var b = this,
            d = [];

        function i(a, b) {
            d.push({
                Ec: a,
                zc: b
            })
        }

        function h(b, c) {
            a.c(d, function(a, e) {
                a.Ec == b && a.zc === c && d.splice(e, 1)
            })
        }
        b.$On = b.addEventListener = i;
        b.$Off = b.removeEventListener = h;
        b.n = function(b) {
            var c = [].slice.call(arguments, 1);
            a.c(d, function(a) {
                a.Ec == b && a.zc.apply(g, c)
            })
        }
    }
    var l = function(y, C, k, P, N, J) {
        y = y || 0;
        var d = this,
            q, n, o, v, z = 0,
            H, I, G, B, x = 0,
            h = 0,
            m = 0,
            D, l, f, e, p, w = [],
            A;

        function O(a) {
            f += a;
            e += a;
            l += a;
            h += a;
            m += a;
            x += a
        }

        function u(n) {
            var g = n;
            if (p && (g >= e || g <= f)) g = ((g - f) % p + p) % p + f;
            if (!D || v || h != g) {
                var i = b.min(g, e);
                i = b.max(i, f);
                if (!D || v || i != m) {
                    if (J) {
                        var j = (i - l) / (C || 1);
                        if (k.$Reverse) j = 1 - j;
                        var o = a.pd(N, J, j, H, G, I, k);
                        a.c(o, function(b, a) {
                            A[a] && A[a](P, b)
                        })
                    }
                    d.Fc(m - l, i - l);
                    m = i;
                    a.c(w, function(b, c) {
                        var a = n < h ? w[w.length - c - 1] : b;
                        a.v(m - x)
                    });
                    var r = h,
                        q = m;
                    h = g;
                    D = c;
                    d.Pb(r, q)
                }
            }
        }

        function E(a, c, d) {
            c && a.$Shift(e);
            if (!d) {
                f = b.min(f, a.Lc() + x);
                e = b.max(e, a.gb() + x)
            }
            w.push(a)
        }
        var r = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.msRequestAnimationFrame;
        if (a.Pg() && a.rd() < 7) r = j;
        r = r || function(b) {
            a.$Delay(b, k.$Interval)
        };

        function K() {
            if (q) {
                var d = a.Q(),
                    e = b.min(d - z, k.Uc),
                    c = h + e * o;
                z = d;
                if (c * o >= n * o) c = n;
                u(c);
                if (!v && c * o >= n * o) L(B);
                else r(K)
            }
        }

        function t(g, i, j) {
            if (!q) {
                q = c;
                v = j;
                B = i;
                g = b.max(g, f);
                g = b.min(g, e);
                n = g;
                o = n < h ? -1 : 1;
                d.Kd();
                z = a.Q();
                r(K)
            }
        }

        function L(a) {
            if (q) {
                v = q = B = i;
                d.Nd();
                a && a()
            }
        }
        d.$Play = function(a, b, c) {
            t(a ? h + a : e, b, c)
        };
        d.Cd = t;
        d.rb = L;
        d.Ne = function(a) {
            t(a)
        };
        d.db = function() {
            return h
        };
        d.Rd = function() {
            return n
        };
        d.yb = function() {
            return m
        };
        d.v = u;
        d.$Move = function(a) {
            u(h + a)
        };
        d.$IsPlaying = function() {
            return q
        };
        d.ue = function(a) {
            p = a
        };
        d.$Shift = O;
        d.I = function(a, b) {
            E(a, 0, b)
        };
        d.lc = function(a) {
            E(a, 1)
        };
        d.Zd = function(a) {
            e += a
        };
        d.Lc = function() {
            return f
        };
        d.gb = function() {
            return e
        };
        d.Pb = d.Kd = d.Nd = d.Fc = a.Wc;
        d.wc = a.Q();
        k = a.p({
            $Interval: 16,
            Uc: 50
        }, k);
        p = k.Vc;
        A = a.p({}, a.oe(), k.tc);
        f = l = y;
        e = y + C;
        I = k.$Round || {};
        G = k.$During || {};
        H = a.xc(k.$Easing)
    };
    var o = g.$JssorSlideshowFormations$ = new function() {
        var h = this,
            d = 0,
            a = 1,
            f = 2,
            e = 3,
            s = 1,
            r = 2,
            t = 4,
            q = 8,
            w = 256,
            x = 512,
            v = 1024,
            u = 2048,
            j = u + s,
            i = u + r,
            o = x + s,
            m = x + r,
            n = w + t,
            k = w + q,
            l = v + t,
            p = v + q;

        function y(a) {
            return (a & r) == r
        }

        function z(a) {
            return (a & t) == t
        }

        function g(b, a, c) {
            c.push(a);
            b[a] = b[a] || [];
            b[a].push(c)
        }
        h.$FormationStraight = function(f) {
            for (var d = f.$Cols, e = f.$Rows, s = f.$Assembly, t = f.gc, r = [], a = 0, b = 0, p = d - 1, q = e - 1, h = t - 1, c, b = 0; b < e; b++)
                for (a = 0; a < d; a++) {
                    switch (s) {
                        case j:
                            c = h - (a * e + (q - b));
                            break;
                        case l:
                            c = h - (b * d + (p - a));
                            break;
                        case o:
                            c = h - (a * e + b);
                        case n:
                            c = h - (b * d + a);
                            break;
                        case i:
                            c = a * e + b;
                            break;
                        case k:
                            c = b * d + (p - a);
                            break;
                        case m:
                            c = a * e + (q - b);
                            break;
                        default:
                            c = b * d + a
                    }
                    g(r, c, [b, a])
                }
            return r
        };
        h.$FormationSwirl = function(q) {
            var x = q.$Cols,
                y = q.$Rows,
                B = q.$Assembly,
                w = q.gc,
                A = [],
                z = [],
                u = 0,
                b = 0,
                h = 0,
                r = x - 1,
                s = y - 1,
                t, p, v = 0;
            switch (B) {
                case j:
                    b = r;
                    h = 0;
                    p = [f, a, e, d];
                    break;
                case l:
                    b = 0;
                    h = s;
                    p = [d, e, a, f];
                    break;
                case o:
                    b = r;
                    h = s;
                    p = [e, a, f, d];
                    break;
                case n:
                    b = r;
                    h = s;
                    p = [a, e, d, f];
                    break;
                case i:
                    b = 0;
                    h = 0;
                    p = [f, d, e, a];
                    break;
                case k:
                    b = r;
                    h = 0;
                    p = [a, f, d, e];
                    break;
                case m:
                    b = 0;
                    h = s;
                    p = [e, d, f, a];
                    break;
                default:
                    b = 0;
                    h = 0;
                    p = [d, f, a, e]
            }
            u = 0;
            while (u < w) {
                t = h + "," + b;
                if (b >= 0 && b < x && h >= 0 && h < y && !z[t]) {
                    z[t] = c;
                    g(A, u++, [h, b])
                } else switch (p[v++ % p.length]) {
                    case d:
                        b--;
                        break;
                    case f:
                        h--;
                        break;
                    case a:
                        b++;
                        break;
                    case e:
                        h++
                }
                switch (p[v % p.length]) {
                    case d:
                        b++;
                        break;
                    case f:
                        h++;
                        break;
                    case a:
                        b--;
                        break;
                    case e:
                        h--
                }
            }
            return A
        };
        h.$FormationZigZag = function(p) {
            var w = p.$Cols,
                x = p.$Rows,
                z = p.$Assembly,
                v = p.gc,
                t = [],
                u = 0,
                b = 0,
                c = 0,
                q = w - 1,
                r = x - 1,
                y, h, s = 0;
            switch (z) {
                case j:
                    b = q;
                    c = 0;
                    h = [f, a, e, a];
                    break;
                case l:
                    b = 0;
                    c = r;
                    h = [d, e, a, e];
                    break;
                case o:
                    b = q;
                    c = r;
                    h = [e, a, f, a];
                    break;
                case n:
                    b = q;
                    c = r;
                    h = [a, e, d, e];
                    break;
                case i:
                    b = 0;
                    c = 0;
                    h = [f, d, e, d];
                    break;
                case k:
                    b = q;
                    c = 0;
                    h = [a, f, d, f];
                    break;
                case m:
                    b = 0;
                    c = r;
                    h = [e, d, f, d];
                    break;
                default:
                    b = 0;
                    c = 0;
                    h = [d, f, a, f]
            }
            u = 0;
            while (u < v) {
                y = c + "," + b;
                if (b >= 0 && b < w && c >= 0 && c < x && typeof t[y] == "undefined") {
                    g(t, u++, [c, b]);
                    switch (h[s % h.length]) {
                        case d:
                            b++;
                            break;
                        case f:
                            c++;
                            break;
                        case a:
                            b--;
                            break;
                        case e:
                            c--
                    }
                } else {
                    switch (h[s++ % h.length]) {
                        case d:
                            b--;
                            break;
                        case f:
                            c--;
                            break;
                        case a:
                            b++;
                            break;
                        case e:
                            c++
                    }
                    switch (h[s++ % h.length]) {
                        case d:
                            b++;
                            break;
                        case f:
                            c++;
                            break;
                        case a:
                            b--;
                            break;
                        case e:
                            c--
                    }
                }
            }
            return t
        };
        h.$FormationStraightStairs = function(q) {
            var u = q.$Cols,
                v = q.$Rows,
                e = q.$Assembly,
                t = q.gc,
                r = [],
                s = 0,
                c = 0,
                d = 0,
                f = u - 1,
                h = v - 1,
                x = t - 1;
            switch (e) {
                case j:
                case m:
                case o:
                case i:
                    var a = 0,
                        b = 0;
                    break;
                case k:
                case l:
                case n:
                case p:
                    var a = f,
                        b = 0;
                    break;
                default:
                    e = p;
                    var a = f,
                        b = 0
            }
            c = a;
            d = b;
            while (s < t) {
                if (z(e) || y(e)) g(r, x - s++, [d, c]);
                else g(r, s++, [d, c]);
                switch (e) {
                    case j:
                    case m:
                        c--;
                        d++;
                        break;
                    case o:
                    case i:
                        c++;
                        d--;
                        break;
                    case k:
                    case l:
                        c--;
                        d--;
                        break;
                    case p:
                    case n:
                    default:
                        c++;
                        d++
                }
                if (c < 0 || d < 0 || c > f || d > h) {
                    switch (e) {
                        case j:
                        case m:
                            a++;
                            break;
                        case k:
                        case l:
                        case o:
                        case i:
                            b++;
                            break;
                        case p:
                        case n:
                        default:
                            a--
                    }
                    if (a < 0 || b < 0 || a > f || b > h) {
                        switch (e) {
                            case j:
                            case m:
                                a = f;
                                b++;
                                break;
                            case o:
                            case i:
                                b = h;
                                a++;
                                break;
                            case k:
                            case l:
                                b = h;
                                a--;
                                break;
                            case p:
                            case n:
                            default:
                                a = 0;
                                b++
                        }
                        if (b > h) b = h;
                        else if (b < 0) b = 0;
                        else if (a > f) a = f;
                        else if (a < 0) a = 0
                    }
                    d = b;
                    c = a
                }
            }
            return r
        };
        h.$FormationSquare = function(i) {
            var a = i.$Cols || 1,
                c = i.$Rows || 1,
                j = [],
                d, e, f, h, k;
            f = a < c ? (c - a) / 2 : 0;
            h = a > c ? (a - c) / 2 : 0;
            k = b.round(b.max(a / 2, c / 2)) + 1;
            for (d = 0; d < a; d++)
                for (e = 0; e < c; e++) g(j, k - b.min(d + 1 + f, e + 1 + h, a - d + f, c - e + h), [e, d]);
            return j
        };
        h.$FormationRectangle = function(f) {
            var d = f.$Cols || 1,
                e = f.$Rows || 1,
                h = [],
                a, c, i;
            i = b.round(b.min(d / 2, e / 2)) + 1;
            for (a = 0; a < d; a++)
                for (c = 0; c < e; c++) g(h, i - b.min(a + 1, c + 1, d - a, e - c), [c, a]);
            return h
        };
        h.$FormationRandom = function(d) {
            for (var e = [], a, c = 0; c < d.$Rows; c++)
                for (a = 0; a < d.$Cols; a++) g(e, b.ceil(1e5 * b.random()) % 13, [c, a]);
            return e
        };
        h.$FormationCircle = function(d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, c = 0; c < e; c++)
                for (a = 0; a < f; a++) g(h, b.round(b.sqrt(b.pow(c - i, 2) + b.pow(a - j, 2))), [a, c]);
            return h
        };
        h.$FormationCross = function(d) {
            for (var e = d.$Cols || 1, f = d.$Rows || 1, h = [], a, i = e / 2 - .5, j = f / 2 - .5, c = 0; c < e; c++)
                for (a = 0; a < f; a++) g(h, b.round(b.min(b.abs(c - i), b.abs(a - j))), [a, c]);
            return h
        };
        h.$FormationRectangleCross = function(f) {
            for (var h = f.$Cols || 1, i = f.$Rows || 1, j = [], a, d = h / 2 - .5, e = i / 2 - .5, k = b.max(d, e) + 1, c = 0; c < h; c++)
                for (a = 0; a < i; a++) g(j, b.round(k - b.max(d - b.abs(c - d), e - b.abs(a - e))) - 1, [a, c]);
            return j
        }
    };
    g.$JssorSlideshowRunner$ = function(n, s, q, t, y) {
        var f = this,
            u, g, e, x = 0,
            w = t.$TransitionsOrder,
            r, h = 8;

        function k(g, f) {
            var e = {
                $Interval: f,
                $Duration: 1,
                $Delay: 0,
                $Cols: 1,
                $Rows: 1,
                $Opacity: 0,
                $Zoom: 0,
                $Clip: 0,
                $Move: i,
                $SlideOut: i,
                $Reverse: i,
                $Formation: o.$FormationRandom,
                $Assembly: 1032,
                $ChessMode: {
                    $Column: 0,
                    $Row: 0
                },
                $Easing: d.$EaseSwing,
                $Round: {},
                Qb: [],
                $During: {}
            };
            a.p(e, g);
            e.gc = e.$Cols * e.$Rows;
            e.$Easing = a.xc(e.$Easing);
            e.be = b.ceil(e.$Duration / e.$Interval);
            e.je = function(b, a) {
                b /= e.$Cols;
                a /= e.$Rows;
                var f = b + "x" + a;
                if (!e.Qb[f]) {
                    e.Qb[f] = {
                        N: b,
                        T: a
                    };
                    for (var c = 0; c < e.$Cols; c++)
                        for (var d = 0; d < e.$Rows; d++) e.Qb[f][d + "," + c] = {
                            $Top: d * a,
                            $Right: c * b + b,
                            $Bottom: d * a + a,
                            $Left: c * b
                        }
                }
                return e.Qb[f]
            };
            if (e.$Brother) {
                e.$Brother = k(e.$Brother, f);
                e.$SlideOut = c
            }
            return e
        }

        function p(A, h, d, v, n, l) {
            var y = this,
                t, u = {},
                j = {},
                m = [],
                f, e, r, p = d.$ChessMode.$Column || 0,
                q = d.$ChessMode.$Row || 0,
                g = d.je(n, l),
                o = B(d),
                C = o.length - 1,
                s = d.$Duration + d.$Delay * C,
                w = v + s,
                k = d.$SlideOut,
                x;
            w += 50;

            function B(a) {
                var b = a.$Formation(a);
                return a.$Reverse ? b.reverse() : b
            }
            y.qd = w;
            y.bc = function(c) {
                c -= v;
                var e = c < s;
                if (e || x) {
                    x = e;
                    if (!k) c = s - c;
                    var f = b.ceil(c / d.$Interval);
                    a.c(j, function(c, e) {
                        var d = b.max(f, c.ve);
                        d = b.min(d, c.length - 1);
                        if (c.Tc != d) {
                            if (!c.Tc && !k) a.A(m[e]);
                            else d == c.me && k && a.O(m[e]);
                            c.Tc = d;
                            a.we(m[e], c[d])
                        }
                    })
                }
            };
            h = a.X(h);
            if (a.V()) {
                var D = !h["no-image"],
                    z = a.wg(h);
                a.c(z, function(b) {
                    (D || b["jssor-slider"]) && a.Bb(b, a.Bb(b), c)
                })
            }
            a.c(o, function(h, m) {
                a.c(h, function(G) {
                    var K = G[0],
                        J = G[1],
                        v = K + "," + J,
                        o = i,
                        s = i,
                        x = i;
                    if (p && J % 2) {
                        if (p & 3) o = !o;
                        if (p & 12) s = !s;
                        if (p & 16) x = !x
                    }
                    if (q && K % 2) {
                        if (q & 3) o = !o;
                        if (q & 12) s = !s;
                        if (q & 16) x = !x
                    }
                    d.$Top = d.$Top || d.$Clip & 4;
                    d.$Bottom = d.$Bottom || d.$Clip & 8;
                    d.$Left = d.$Left || d.$Clip & 1;
                    d.$Right = d.$Right || d.$Clip & 2;
                    var C = s ? d.$Bottom : d.$Top,
                        z = s ? d.$Top : d.$Bottom,
                        B = o ? d.$Right : d.$Left,
                        A = o ? d.$Left : d.$Right;
                    d.$Clip = C || z || B || A;
                    r = {};
                    e = {
                        $Top: 0,
                        $Left: 0,
                        $Opacity: 1,
                        N: n,
                        T: l
                    };
                    f = a.p({}, e);
                    t = a.p({}, g[v]);
                    if (d.$Opacity) e.$Opacity = 2 - d.$Opacity;
                    if (d.$ZIndex) {
                        e.$ZIndex = d.$ZIndex;
                        f.$ZIndex = 0
                    }
                    var I = d.$Cols * d.$Rows > 1 || d.$Clip;
                    if (d.$Zoom || d.$Rotate) {
                        var H = c;
                        if (a.V())
                            if (d.$Cols * d.$Rows > 1) H = i;
                            else I = i;
                        if (H) {
                            e.$Zoom = d.$Zoom ? d.$Zoom - 1 : 1;
                            f.$Zoom = 1;
                            if (a.V() || a.yc()) e.$Zoom = b.min(e.$Zoom, 2);
                            var N = d.$Rotate || 0;
                            e.$Rotate = N * 360 * (x ? -1 : 1);
                            f.$Rotate = 0
                        }
                    }
                    if (I) {
                        var h = t.wb = {};
                        if (d.$Clip) {
                            var w = d.$ScaleClip || 1;
                            if (C && z) {
                                h.$Top = g.T / 2 * w;
                                h.$Bottom = -h.$Top
                            } else if (C) h.$Bottom = -g.T * w;
                            else if (z) h.$Top = g.T * w;
                            if (B && A) {
                                h.$Left = g.N / 2 * w;
                                h.$Right = -h.$Left
                            } else if (B) h.$Right = -g.N * w;
                            else if (A) h.$Left = g.N * w
                        }
                        r.$Clip = t;
                        f.$Clip = g[v]
                    }
                    var L = o ? 1 : -1,
                        M = s ? 1 : -1;
                    if (d.x) e.$Left += n * d.x * L;
                    if (d.y) e.$Top += l * d.y * M;
                    a.c(e, function(b, c) {
                        if (a.Zb(b))
                            if (b != f[c]) r[c] = b - f[c]
                    });
                    u[v] = k ? f : e;
                    var D = d.be,
                        y = b.round(m * d.$Delay / d.$Interval);
                    j[v] = new Array(y);
                    j[v].ve = y;
                    j[v].me = y + D - 1;
                    for (var F = 0; F <= D; F++) {
                        var E = a.pd(f, r, F / D, d.$Easing, d.$During, d.$Round, {
                            $Move: d.$Move,
                            $OriginalWidth: n,
                            $OriginalHeight: l
                        });
                        E.$ZIndex = E.$ZIndex || 1;
                        j[v].push(E)
                    }
                })
            });
            o.reverse();
            a.c(o, function(b) {
                a.c(b, function(c) {
                    var f = c[0],
                        e = c[1],
                        d = f + "," + e,
                        b = h;
                    if (e || f) b = a.X(h);
                    a.bb(b, u[d]);
                    a.jb(b, "hidden");
                    a.z(b, "absolute");
                    A.se(b);
                    m[d] = b;
                    a.A(b, !k)
                })
            })
        }

        function v() {
            var a = this,
                b = 0;
            l.call(a, 0, u);
            a.Pb = function(c, a) {
                if (a - b > h) {
                    b = a;
                    e && e.bc(a);
                    g && g.bc(a)
                }
            };
            a.ab = r
        }
        f.Je = function() {
            var a = 0,
                c = t.$Transitions,
                d = c.length;
            if (w) a = x++ % d;
            else a = b.floor(b.random() * d);
            c[a] && (c[a].mb = a);
            return c[a]
        };
        f.Ke = function(w, x, j, l, a) {
            r = a;
            a = k(a, h);
            var i = l.Yc,
                d = j.Yc;
            i["no-image"] = !l.dc;
            d["no-image"] = !j.dc;
            var m = i,
                o = d,
                v = a,
                c = a.$Brother || k({}, h);
            if (!a.$SlideOut) {
                m = d;
                o = i
            }
            var t = c.$Shift || 0;
            g = new p(n, o, c, b.max(t - c.$Interval, 0), s, q);
            e = new p(n, m, v, b.max(c.$Interval - t, 0), s, q);
            g.bc(0);
            e.bc(0);
            u = b.max(g.qd, e.qd);
            f.mb = w
        };
        f.Eb = function() {
            n.Eb();
            g = j;
            e = j
        };
        f.ce = function() {
            var a = j;
            if (e) a = new v;
            return a
        };
        if (a.V() || a.yc() || y && a.Kg() < 537) h = 16;
        m.call(f);
        l.call(f, -1e7, 1e7)
    };
    var h = g.$JssorSlider$ = function(q, fc) {
        var f = this;

        function Ec() {
            var a = this;
            l.call(a, -1e8, 2e8);
            a.ge = function() {
                var c = a.yb(),
                    d = b.floor(c),
                    f = s(d),
                    e = c - b.floor(c);
                return {
                    mb: f,
                    ke: d,
                    Cb: e
                }
            };
            a.Pb = function(d, a) {
                var e = b.floor(a);
                if (e != a && a > d) e++;
                Ub(e, c);
                f.n(h.$EVT_POSITION_CHANGE, s(a), s(d), a, d)
            }
        }

        function Dc() {
            var b = this;
            l.call(b, 0, 0, {
                Vc: r
            });
            a.c(D, function(a) {
                A & 1 && a.ue(r);
                b.lc(a);
                a.$Shift(gb / bc)
            })
        }

        function Cc() {
            var a = this,
                b = Tb.$Elmt;
            l.call(a, -1, 2, {
                $Easing: d.$EaseLinear,
                tc: {
                    Cb: Zb
                },
                Vc: r
            }, b, {
                Cb: 1
            }, {
                Cb: -2
            });
            a.Ob = b
        }

        function qc(n, m) {
            var a = this,
                d, e, g, k, b;
            l.call(a, -1e8, 2e8, {
                Uc: 100
            });
            a.Kd = function() {
                P = c;
                S = j;
                f.n(h.$EVT_SWIPE_START, s(w.db()), w.db())
            };
            a.Nd = function() {
                P = i;
                k = i;
                var a = w.ge();
                f.n(h.$EVT_SWIPE_END, s(w.db()), w.db());
                !a.Cb && Gc(a.ke, t)
            };
            a.Pb = function(h, f) {
                var a;
                if (k) a = b;
                else {
                    a = e;
                    if (g) {
                        var c = f / g;
                        a = o.$SlideEasing(c) * (e - d) + d
                    }
                }
                w.v(a)
            };
            a.ec = function(b, f, c, h) {
                d = b;
                e = f;
                g = c;
                w.v(b);
                a.v(0);
                a.Cd(c, h)
            };
            a.ie = function(d) {
                k = c;
                b = d;
                a.$Play(d, j, c)
            };
            a.he = function(a) {
                b = a
            };
            w = new Ec;
            w.I(n);
            w.I(m)
        }

        function rc() {
            var c = this,
                b = Xb();
            a.J(b, 0);
            a.Z(b, "pointerEvents", "none");
            c.$Elmt = b;
            c.se = function(c) {
                a.H(b, c);
                a.A(b)
            };
            c.Eb = function() {
                a.O(b);
                a.vc(b)
            }
        }

        function Ac(k, e) {
            var d = this,
                q, H, x, n, y = [],
                w, C, U, G, P, F, g, v, p;
            l.call(d, -u, u + 1, {});

            function E(b) {
                q && q.ib();
                T(k, b, 0);
                F = c;
                q = new I.$Class(k, I, a.Ic(a.j(k, "idle")) || pc);
                q.v(0)
            }

            function Y() {
                q.wc < I.wc && E()
            }

            function N(p, r, m) {
                if (!G) {
                    G = c;
                    if (n && m) {
                        var g = m.width,
                            b = m.height,
                            l = g,
                            k = b;
                        if (g && b && o.$FillMode) {
                            if (o.$FillMode & 3 && (!(o.$FillMode & 4) || g > K || b > J)) {
                                var j = i,
                                    q = K / J * b / g;
                                if (o.$FillMode & 1) j = q > 1;
                                else if (o.$FillMode & 2) j = q < 1;
                                l = j ? g * J / b : K;
                                k = j ? J : b * K / g
                            }
                            a.k(n, l);
                            a.m(n, k);
                            a.G(n, (J - k) / 2);
                            a.E(n, (K - l) / 2)
                        }
                        a.z(n, "absolute");
                        f.n(h.$EVT_LOAD_END, e)
                    }
                }
                a.O(r);
                p && p(d)
            }

            function X(b, c, f, g) {
                if (g == S && t == e && Q)
                    if (!Fc) {
                        var a = s(b);
                        B.Ke(a, e, c, d, f);
                        c.Vd();
                        V.$Shift(a - V.Lc() - 1);
                        V.v(a);
                        z.ec(b, b, 0)
                    }
            }

            function ab(b) {
                if (b == S && t == e) {
                    if (!g) {
                        var a = j;
                        if (B)
                            if (B.mb == e) a = B.ce();
                            else B.Eb();
                        Y();
                        g = new yc(k, e, a, q);
                        g.nd(p)
                    }!g.$IsPlaying() && g.Bc()
                }
            }

            function R(f, c, h) {
                if (f == e) {
                    if (f != c) D[c] && D[c].Be();
                    else !h && g && g.Le();
                    p && p.$Enable();
                    var i = S = a.Q();
                    d.Db(a.K(j, ab, i))
                } else {
                    var l = b.abs(e - f),
                        k = u + o.$LazyLoading - 1;
                    (!P || l <= k) && d.Db()
                }
            }

            function bb() {
                if (t == e && g) {
                    g.rb();
                    p && p.$Quit();
                    p && p.$Disable();
                    g.Md()
                }
            }

            function cb() {
                t == e && g && g.rb()
            }

            function Z(a) {
                !M && f.n(h.$EVT_CLICK, e, a)
            }

            function O() {
                p = v.pInstance;
                g && g.nd(p)
            }
            d.Db = function(d, b) {
                b = b || x;
                if (y.length && !G) {
                    a.A(b);
                    if (!U) {
                        U = c;
                        f.n(h.$EVT_LOAD_START, e);
                        a.c(y, function(b) {
                            if (!a.B(b, "src")) {
                                b.src = a.j(b, "src2");
                                a.Y(b, b["display-origin"])
                            }
                        })
                    }
                    a.Xd(y, n, a.K(j, N, d, b))
                } else N(d, b)
            };
            d.xe = function() {
                var g = e;
                if (o.$AutoPlaySteps < 0) g -= r;
                var c = g + o.$AutoPlaySteps * wc;
                if (A & 2) c = s(c);
                if (!(A & 1)) c = b.max(0, b.min(c, r - u));
                if (c != e) {
                    if (B) {
                        var d = B.Je(r);
                        if (d) {
                            var h = S = a.Q(),
                                f = D[s(c)];
                            return f.Db(a.K(j, X, c, f, d, h), x)
                        }
                    }
                    ob(c)
                }
            };
            d.Cc = function() {
                R(e, e, c)
            };
            d.Be = function() {
                p && p.$Quit();
                p && p.$Disable();
                d.sd();
                g && g.ae();
                g = j;
                E()
            };
            d.Vd = function() {
                a.O(k)
            };
            d.sd = function() {
                a.A(k)
            };
            d.ee = function() {
                p && p.$Enable()
            };

            function T(b, d, e) {
                if (a.B(b, "jssor-slider")) return;
                if (!F) {
                    if (b.tagName == "IMG") {
                        y.push(b);
                        if (!a.B(b, "src")) {
                            P = c;
                            b["display-origin"] = a.Y(b);
                            a.O(b)
                        }
                    }
                    a.V() && a.J(b, (a.J(b) || 0) + 1)
                }
                var f = a.P(b);
                a.c(f, function(f) {
                    var h = f.tagName,
                        j = a.j(f, "u");
                    if (j == "player" && !v) {
                        v = f;
                        if (v.pInstance) O();
                        else a.e(v, "dataavailable", O)
                    }
                    if (j == "caption") {
                        if (d) {
                            a.Sc(f, a.j(f, "to"));
                            a.kg(f, a.j(f, "bf"));
                            a.mg(f, "preserve-3d")
                        } else if (!a.Jd()) {
                            var g = a.X(f, i, c);
                            a.Mb(g, f, b);
                            a.Hb(f, b);
                            f = g;
                            d = c
                        }
                    } else if (!F && !e && !n) {
                        if (h == "A") {
                            if (a.j(f, "u") == "image") n = a.vg(f, "IMG");
                            else n = a.C(f, "image", c);
                            if (n) {
                                w = f;
                                a.Y(w, "block");
                                a.bb(w, W);
                                C = a.X(w, c);
                                a.z(w, "relative");
                                a.Bb(C, 0);
                                a.Z(C, "backgroundColor", "#000")
                            }
                        } else if (h == "IMG" && a.j(f, "u") == "image") n = f;
                        if (n) {
                            n.border = 0;
                            a.bb(n, W)
                        }
                    }
                    T(f, d, e + 1)
                })
            }
            d.Fc = function(c, b) {
                var a = u - b;
                Zb(H, a)
            };
            d.mb = e;
            m.call(d);
            a.lg(k, a.j(k, "p"));
            a.zg(k, a.j(k, "po"));
            var L = a.C(k, "thumb", c);
            if (L) {
                d.Ee = a.X(L);
                a.O(L)
            }
            a.A(k);
            x = a.X(db);
            a.J(x, 1e3);
            a.e(k, "click", Z);
            E(c);
            d.dc = n;
            d.zd = C;
            d.Yc = k;
            d.Ob = H = k;
            a.H(H, x);
            f.$On(203, R);
            f.$On(28, cb);
            f.$On(24, bb)
        }

        function yc(y, g, p, q) {
            var b = this,
                n = 0,
                u = 0,
                j, k, e, d, m, s, r, o = D[g];
            l.call(b, 0, 0);

            function v() {
                a.vc(O);
                dc && m && o.zd && a.H(O, o.zd);
                a.A(O, !m && o.dc)
            }

            function w() {
                b.Bc()
            }

            function x(a) {
                r = a;
                b.rb();
                b.Bc()
            }
            b.Bc = function() {
                var a = b.yb();
                if (!C && !P && !r && t == g) {
                    if (!a) {
                        if (j && !m) {
                            m = c;
                            b.Md(c);
                            f.n(h.$EVT_SLIDESHOW_START, g, n, u, j, d)
                        }
                        v()
                    }
                    var i, p = h.$EVT_STATE_CHANGE;
                    if (a != d)
                        if (a == e) i = d;
                        else if (a == k) i = e;
                    else if (!a) i = k;
                    else i = b.Rd();
                    f.n(p, g, a, n, k, e, d);
                    var l = Q && (!E || F);
                    if (a == d)(e != d && !(E & 12) || l) && o.xe();
                    else(l || a != e) && b.Cd(i, w)
                }
            };
            b.Le = function() {
                e == d && e == b.yb() && b.v(k)
            };
            b.ae = function() {
                B && B.mb == g && B.Eb();
                var a = b.yb();
                a < d && f.n(h.$EVT_STATE_CHANGE, g, -a - 1, n, k, e, d)
            };
            b.Md = function(b) {
                p && a.jb(ib, b && p.ab.$Outside ? "" : "hidden")
            };
            b.Fc = function(b, a) {
                if (m && a >= j) {
                    m = i;
                    v();
                    o.sd();
                    B.Eb();
                    f.n(h.$EVT_SLIDESHOW_END, g, n, u, j, d)
                }
                f.n(h.$EVT_PROGRESS_CHANGE, g, a, n, k, e, d)
            };
            b.nd = function(a) {
                if (a && !s) {
                    s = a;
                    a.$On($JssorPlayer$.Ce, x)
                }
            };
            p && b.lc(p);
            j = b.gb();
            b.lc(q);
            k = j + q.cc;
            e = j + q.Yb;
            d = b.gb()
        }

        function Zb(g, f) {
            var e = x > 0 ? x : hb,
                c = Bb * f * (e & 1),
                d = Cb * f * (e >> 1 & 1);
            c = b.round(c);
            d = b.round(d);
            a.E(g, c);
            a.G(g, d)
        }

        function Pb() {
            qb = P;
            Kb = z.Rd();
            G = w.db()
        }

        function gc() {
            Pb();
            if (C || !F && E & 12) {
                z.rb();
                f.n(h.Ae)
            }
        }

        function ec(e) {
            if (!C && (F || !(E & 12)) && !z.$IsPlaying()) {
                var c = w.db(),
                    a = b.ceil(G);
                if (e && b.abs(H) >= o.$MinDragOffsetToSlide) {
                    a = b.ceil(c);
                    a += fb
                }
                if (!(A & 1)) a = b.min(r - u, b.max(a, 0));
                var d = b.abs(a - c);
                d = 1 - b.pow(1 - d, 5);
                if (!M && qb) z.Ne(Kb);
                else if (c == a) {
                    ub.ee();
                    ub.Cc()
                } else z.ec(c, a, d * Vb)
            }
        }

        function Ib(b) {
            !a.j(a.uc(b), "nodrag") && a.Xb(b)
        }

        function uc(a) {
            Yb(a, 1)
        }

        function Yb(b, d) {
            b = a.vd(b);
            var l = a.uc(b);
            if (!L && !a.j(l, "nodrag") && vc() && (!d || b.touches.length == 1)) {
                C = c;
                Ab = i;
                S = j;
                a.e(e, d ? "touchmove" : "mousemove", Db);
                a.Q();
                M = 0;
                gc();
                if (!qb) x = 0;
                if (d) {
                    var k = b.touches[0];
                    wb = k.clientX;
                    xb = k.clientY
                } else {
                    var g = a.Pd(b);
                    wb = g.x;
                    xb = g.y
                }
                H = 0;
                cb = 0;
                fb = 0;
                f.n(h.$EVT_DRAG_START, s(G), G, b)
            }
        }

        function Db(e) {
            if (C) {
                e = a.vd(e);
                var f;
                if (e.type != "mousemove") {
                    var l = e.touches[0];
                    f = {
                        x: l.clientX,
                        y: l.clientY
                    }
                } else f = a.Pd(e);
                if (f) {
                    var j = f.x - wb,
                        k = f.y - xb;
                    if (b.floor(G) != G) x = x || hb & L;
                    if ((j || k) && !x) {
                        if (L == 3)
                            if (b.abs(k) > b.abs(j)) x = 2;
                            else x = 1;
                        else x = L;
                        if (kb && x == 1 && b.abs(k) - b.abs(j) > 3) Ab = c
                    }
                    if (x) {
                        var d = k,
                            i = Cb;
                        if (x == 1) {
                            d = j;
                            i = Bb
                        }
                        if (!(A & 1)) {
                            if (d > 0) {
                                var g = i * t,
                                    h = d - g;
                                if (h > 0) d = g + b.sqrt(h) * 5
                            }
                            if (d < 0) {
                                var g = i * (r - u - t),
                                    h = -d - g;
                                if (h > 0) d = -g - b.sqrt(h) * 5
                            }
                        }
                        if (H - cb < -2) fb = 0;
                        else if (H - cb > 2) fb = -1;
                        cb = H;
                        H = d;
                        tb = G - H / i / (ab || 1);
                        if (H && x && !Ab) {
                            a.Xb(e);
                            if (!P) z.ie(tb);
                            else z.he(tb)
                        }
                    }
                }
            }
        }

        function nb() {
            sc();
            if (C) {
                C = i;
                a.Q();
                a.R(e, "mousemove", Db);
                a.R(e, "touchmove", Db);
                M = H;
                z.rb();
                var b = w.db();
                f.n(h.$EVT_DRAG_END, s(b), b, s(G), G);
                E & 12 && Pb();
                ec(c)
            }
        }

        function kc(c) {
            if (M) {
                a.tg(c);
                var b = a.uc(c);
                while (b && v !== b) {
                    b.tagName == "A" && a.Xb(c);
                    try {
                        b = b.parentNode
                    } catch (d) {
                        break
                    }
                }
            }
        }

        function oc(a) {
            D[t];
            t = s(a);
            ub = D[t];
            Ub(a);
            return t
        }

        function Gc(a, b) {
            x = 0;
            oc(a);
            f.n(h.$EVT_PARK, s(a), b)
        }

        function Ub(b, c) {
            N = b;
            a.c(T, function(a) {
                a.Hc(s(b), b, c)
            })
        }

        function vc() {
            var b = h.ld || 0,
                a = Z;
            if (kb) a & 1 && (a &= 1);
            h.ld |= a;
            return L = a & ~b
        }

        function sc() {
            if (L) {
                h.ld &= ~Z;
                L = 0
            }
        }

        function Xb() {
            var b = a.nb();
            a.bb(b, W);
            a.z(b, "absolute");
            return b
        }

        function s(a) {
            return (a % r + r) % r
        }

        function lc(d, c) {
            var a = d;
            if (c) {
                if (!A) {
                    a = b.min(b.max(a + N, 0), r - u);
                    c = i
                } else if (A & 2) {
                    a = s(a + N);
                    c = i
                }
            } else if (A) a = f.Zc(a);
            ob(a, o.$SlideDuration, c)
        }

        function zb() {
            a.c(T, function(a) {
                a.Mc(a.Ib.$ChanceToShow <= F)
            })
        }

        function ic() {
            if (!F) {
                F = 1;
                zb();
                if (!C) {
                    E & 12 && ec();
                    E & 3 && D[t].Cc()
                }
            }
        }

        function hc() {
            if (F) {
                F = 0;
                zb();
                C || !(E & 12) || gc()
            }
        }

        function jc() {
            W = {
                N: K,
                T: J,
                $Top: 0,
                $Left: 0
            };
            a.c(U, function(b) {
                a.bb(b, W);
                a.z(b, "absolute");
                a.jb(b, "hidden");
                a.O(b)
            });
            a.bb(db, W)
        }

        function mb(b, a) {
            ob(b, a, c)
        }

        function ob(f, e, j) {
            if (Rb && (!C && (F || !(E & 12)) || o.$NaviQuitDrag)) {
                P = c;
                C = i;
                z.rb();
                if (e == k) e = Vb;
                var d = Eb.yb(),
                    a = f;
                if (j) {
                    a = d + f;
                    if (f > 0) a = b.ceil(a);
                    else a = b.floor(a)
                }
                if (A & 2) a = s(a);
                if (!(A & 1)) a = b.max(0, b.min(a, r - u));
                var h = (a - d) % r;
                a = d + h;
                var g = d == a ? 0 : e * b.abs(h);
                g = b.min(g, e * u * 1.5);
                z.ec(d, a, g || 1)
            }
        }
        f.$PlayTo = ob;
        f.$GoTo = function(a) {
            w.v(a)
        };
        f.$Next = function() {
            mb(1)
        };
        f.$Prev = function() {
            mb(-1)
        };
        f.$Pause = function() {
            Q = i
        };
        f.$Play = function() {
            if (!Q) {
                Q = c;
                D[t] && D[t].Cc()
            }
        };
        f.$SetSlideshowTransitions = function(a) {
            o.$SlideshowOptions.$Transitions = a
        };
        f.$SetCaptionTransitions = function(b) {
            I.$Transitions = b;
            I.wc = a.Q()
        };
        f.$SlidesCount = function() {
            return U.length
        };
        f.$CurrentIndex = function() {
            return t
        };
        f.$IsAutoPlaying = function() {
            return Q
        };
        f.$IsDragging = function() {
            return C
        };
        f.$IsSliding = function() {
            return P
        };
        f.$IsMouseOver = function() {
            return !F
        };
        f.$LastDragSucceded = function() {
            return M
        };

        function Y() {
            return a.k(y || q)
        }

        function jb() {
            return a.m(y || q)
        }
        f.$OriginalWidth = f.$GetOriginalWidth = Y;
        f.$OriginalHeight = f.$GetOriginalHeight = jb;

        function Gb(c, d) {
            if (c == k) return a.k(q);
            if (!y) {
                var b = a.nb(e);
                a.dd(b, a.dd(q));
                a.Kb(b, a.Kb(q));
                a.Y(b, "block");
                a.z(b, "relative");
                a.G(b, 0);
                a.E(b, 0);
                a.jb(b, "visible");
                y = a.nb(e);
                a.z(y, "absolute");
                a.G(y, 0);
                a.E(y, 0);
                a.k(y, a.k(q));
                a.m(y, a.m(q));
                a.Sc(y, "0 0");
                a.H(y, b);
                var h = a.P(q);
                a.H(q, y);
                a.Z(q, "backgroundImage", "");
                a.c(h, function(c) {
                    a.H(a.j(c, "noscale") ? q : b, c);
                    a.j(c, "autocenter") && Lb.push(c)
                })
            }
            ab = c / (d ? a.m : a.k)(y);
            a.yg(y, ab);
            var g = d ? ab * Y() : c,
                f = d ? c : ab * jb();
            a.k(q, g);
            a.m(q, f);
            a.c(Lb, function(b) {
                var c = a.Nb(a.j(b, "autocenter"));
                a.Oe(b, c)
            })
        }
        f.$ScaleHeight = f.$GetScaleHeight = function(b) {
            if (b == k) return a.m(q);
            Gb(b, c)
        };
        f.$ScaleWidth = f.$SetScaleWidth = f.$GetScaleWidth = Gb;
        f.Zc = function(a) {
            var d = b.ceil(s(gb / bc)),
                c = s(a - N + d);
            if (c > u) {
                if (a - N > r / 2) a -= r;
                else if (a - N <= -r / 2) a += r
            } else a = N + c - d;
            return a
        };
        m.call(f);
        f.$Elmt = q = a.qb(q);
        var o = a.p({
            $FillMode: 0,
            $LazyLoading: 1,
            $ArrowKeyNavigation: 1,
            $StartIndex: 0,
            $AutoPlay: i,
            $Loop: 1,
            $NaviQuitDrag: c,
            $AutoPlaySteps: 1,
            $AutoPlayInterval: 3e3,
            $PauseOnHover: 1,
            $SlideDuration: 500,
            $SlideEasing: d.$EaseOutQuad,
            $MinDragOffsetToSlide: 20,
            $SlideSpacing: 0,
            $Cols: 1,
            $Align: 0,
            $UISearchMode: 1,
            $PlayOrientation: 1,
            $DragOrientation: 1
        }, fc);
        if (o.$Idle != k) o.$AutoPlayInterval = o.$Idle;
        if (o.$DisplayPieces != k) o.$Cols = o.$DisplayPieces;
        if (o.$ParkingPosition != k) o.$Align = o.$ParkingPosition;
        var hb = o.$PlayOrientation & 3,
            wc = (o.$PlayOrientation & 4) / -4 || 1,
            eb = o.$SlideshowOptions,
            I = a.p({
                $Class: p,
                $PlayInMode: 1,
                $PlayOutMode: 1
            }, o.$CaptionSliderOptions);
        I.$Transitions = I.$Transitions || I.$CaptionTransitions;
        var rb = o.$BulletNavigatorOptions,
            X = o.$ArrowNavigatorOptions,
            bb = o.$ThumbnailNavigatorOptions,
            R = !o.$UISearchMode,
            y, v = a.C(q, "slides", R),
            db = a.C(q, "loading", R) || a.nb(e),
            Jb = a.C(q, "navigator", R),
            cc = a.C(q, "arrowleft", R),
            ac = a.C(q, "arrowright", R),
            Hb = a.C(q, "thumbnavigator", R),
            nc = a.k(v),
            mc = a.m(v),
            W, U = [],
            xc = a.P(v);
        a.c(xc, function(b) {
            if (b.tagName == "DIV" && !a.j(b, "u")) U.push(b);
            else a.V() && a.J(b, (a.J(b) || 0) + 1)
        });
        var t = -1,
            N, ub, r = U.length,
            K = o.$SlideWidth || nc,
            J = o.$SlideHeight || mc,
            Wb = o.$SlideSpacing,
            Bb = K + Wb,
            Cb = J + Wb,
            bc = hb & 1 ? Bb : Cb,
            u = b.min(o.$Cols, r),
            ib, x, L, Ab, T = [],
            Qb, Sb, Ob, dc, Fc, Q, E = o.$PauseOnHover,
            pc = o.$AutoPlayInterval,
            Vb = o.$SlideDuration,
            sb, vb, gb, Rb = u < r,
            A = Rb ? o.$Loop : 0,
            Z, M, F = 1,
            P, C, S, wb = 0,
            xb = 0,
            H, cb, fb, Eb, w, V, z, Tb = new rc,
            ab, Lb = [];
        Q = o.$AutoPlay;
        f.Ib = fc;
        jc();
        a.B(q, "jssor-slider", c);
        a.J(v, a.J(v) || 0);
        a.z(v, "absolute");
        ib = a.X(v, c);
        a.Mb(ib, v);
        if (eb) {
            dc = eb.$ShowLink;
            sb = eb.$Class;
            vb = u == 1 && r > 1 && sb && (!a.Jd() || a.rd() >= 8)
        }
        gb = vb || u >= r || !(A & 1) ? 0 : o.$Align;
        Z = (u > 1 || gb ? hb : -1) & o.$DragOrientation;
        var yb = v,
            D = [],
            B, O, Fb = a.Qg(),
            kb = Fb.Sg,
            G, qb, Kb, tb;
        Fb.Bd && a.Z(yb, Fb.Bd, ([j, "pan-y", "pan-x", "none"])[Z] || "");
        V = new Cc;
        if (vb) B = new sb(Tb, K, J, eb, kb);
        a.H(ib, V.Ob);
        a.jb(v, "hidden");
        O = Xb();
        a.Z(O, "backgroundColor", "#000");
        a.Bb(O, 0);
        a.Mb(O, yb.firstChild, yb);
        for (var pb = 0; pb < U.length; pb++) {
            var zc = U[pb],
                Bc = new Ac(zc, pb);
            D.push(Bc)
        }
        a.O(db);
        Eb = new Dc;
        z = new qc(Eb, V);
        if (Z) {
            a.e(v, "mousedown", Yb);
            a.e(v, "touchstart", uc);
            a.e(v, "dragstart", Ib);
            a.e(v, "selectstart", Ib);
            a.e(e, "mouseup", nb);
            a.e(e, "touchend", nb);
            a.e(e, "touchcancel", nb);
            a.e(g, "blur", nb)
        }
        E &= kb ? 10 : 5;
        if (Jb && rb) {
            Qb = new rb.$Class(Jb, rb, Y(), jb());
            T.push(Qb)
        }
        if (X && cc && ac) {
            X.$Loop = A;
            X.$Cols = u;
            Sb = new X.$Class(cc, ac, X, Y(), jb());
            T.push(Sb)
        }
        if (Hb && bb) {
            bb.$StartIndex = o.$StartIndex;
            Ob = new bb.$Class(Hb, bb);
            T.push(Ob)
        }
        a.c(T, function(a) {
            a.Dc(r, D, db);
            a.$On(n.ic, lc)
        });
        a.Z(q, "visibility", "visible");
        Gb(Y());
        a.e(v, "click", kc);
        a.e(q, "mouseout", a.Jb(ic, q));
        a.e(q, "mouseover", a.Jb(hc, q));
        zb();
        o.$ArrowKeyNavigation && a.e(e, "keydown", function(a) {
            if (a.keyCode == 37) mb(-o.$ArrowKeyNavigation);
            else a.keyCode == 39 && mb(o.$ArrowKeyNavigation)
        });
        var lb = o.$StartIndex;
        if (!(A & 1)) lb = b.max(0, b.min(lb, r - u));
        z.ec(lb, lb, 0)
    };
    h.$EVT_CLICK = 21;
    h.$EVT_DRAG_START = 22;
    h.$EVT_DRAG_END = 23;
    h.$EVT_SWIPE_START = 24;
    h.$EVT_SWIPE_END = 25;
    h.$EVT_LOAD_START = 26;
    h.$EVT_LOAD_END = 27;
    h.Ae = 28;
    h.$EVT_POSITION_CHANGE = 202;
    h.$EVT_PARK = 203;
    h.$EVT_SLIDESHOW_START = 206;
    h.$EVT_SLIDESHOW_END = 207;
    h.$EVT_PROGRESS_CHANGE = 208;
    h.$EVT_STATE_CHANGE = 209;
    var n = {
        ic: 1
    };
    g.$JssorBulletNavigator$ = function(e, C) {
        var f = this;
        m.call(f);
        e = a.qb(e);
        var s, A, z, r, l = 0,
            d, o, k, w, x, h, g, q, p, B = [],
            y = [];

        function v(a) {
            a != -1 && y[a].ad(a == l)
        }

        function t(a) {
            f.n(n.ic, a * o)
        }
        f.$Elmt = e;
        f.Hc = function(a) {
            if (a != r) {
                var d = l,
                    c = b.floor(a / o);
                l = c;
                r = a;
                v(d);
                v(c)
            }
        };
        f.Mc = function(b) {
            a.A(e, b)
        };
        var u;
        f.Dc = function(E) {
            if (!u) {
                s = b.ceil(E / o);
                l = 0;
                var n = q + w,
                    r = p + x,
                    m = b.ceil(s / k) - 1;
                A = q + n * (!h ? m : k - 1);
                z = p + r * (h ? m : k - 1);
                a.k(e, A);
                a.m(e, z);
                for (var f = 0; f < s; f++) {
                    var C = a.Ag();
                    a.sg(C, f + 1);
                    var i = a.fd(g, "numbertemplate", C, c);
                    a.z(i, "absolute");
                    var v = f % (m + 1);
                    a.E(i, !h ? n * v : f % k * n);
                    a.G(i, h ? r * v : b.floor(f / (m + 1)) * r);
                    a.H(e, i);
                    B[f] = i;
                    d.$ActionMode & 1 && a.e(i, "click", a.K(j, t, f));
                    d.$ActionMode & 2 && a.e(i, "mouseover", a.Jb(a.K(j, t, f), i));
                    y[f] = a.ac(i)
                }
                u = c
            }
        };
        f.Ib = d = a.p({
            $SpacingX: 10,
            $SpacingY: 10,
            $Orientation: 1,
            $ActionMode: 1
        }, C);
        g = a.C(e, "prototype");
        q = a.k(g);
        p = a.m(g);
        a.Hb(g, e);
        o = d.$Steps || 1;
        k = d.$Lanes || 1;
        w = d.$SpacingX;
        x = d.$SpacingY;
        h = d.$Orientation - 1;
        d.$Scale == i && a.B(e, "noscale", c);
        d.$AutoCenter && a.B(e, "autocenter", d.$AutoCenter)
    };
    g.$JssorArrowNavigator$ = function(b, g, h) {
        var d = this;
        m.call(d);
        var r, q, e, f, k;
        a.k(b);
        a.m(b);

        function l(a) {
            d.n(n.ic, a, c)
        }

        function p(c) {
            a.A(b, c || !h.$Loop && e == 0);
            a.A(g, c || !h.$Loop && e >= q - h.$Cols);
            r = c
        }
        d.Hc = function(b, a, c) {
            if (c) e = a;
            else {
                e = b;
                p(r)
            }
        };
        d.Mc = p;
        var o;
        d.Dc = function(d) {
            q = d;
            e = 0;
            if (!o) {
                a.e(b, "click", a.K(j, l, -k));
                a.e(g, "click", a.K(j, l, k));
                a.ac(b);
                a.ac(g);
                o = c
            }
        };
        d.Ib = f = a.p({
            $Steps: 1
        }, h);
        k = f.$Steps;
        if (f.$Scale == i) {
            a.B(b, "noscale", c);
            a.B(g, "noscale", c)
        }
        if (f.$AutoCenter) {
            a.B(b, "autocenter", f.$AutoCenter);
            a.B(g, "autocenter", f.$AutoCenter)
        }
    };
    g.$JssorThumbnailNavigator$ = function(f, C) {
        var l = this,
            z, q, d, w = [],
            A, y, g, r, s, u, t, p, v, e, o;
        m.call(l);
        f = a.qb(f);

        function B(k, e) {
            var f = this,
                b, i, h;

            function m() {
                i.ad(q == e)
            }

            function g(a) {
                (a || !v.$LastDragSucceded()) && l.n(n.ic, e)
            }
            f.mb = e;
            f.id = m;
            h = k.Ee || k.dc || a.nb();
            f.Ob = b = a.fd(o, "thumbnailtemplate", h, c);
            i = a.ac(b);
            d.$ActionMode & 1 && a.e(b, "click", a.K(j, g, 0));
            d.$ActionMode & 2 && a.e(b, "mouseover", a.Jb(a.K(j, g, 1), b))
        }
        l.Hc = function(c, d, e) {
            var a = q;
            q = c;
            a != -1 && w[a].id();
            w[c].id();
            !e && v.$PlayTo(v.Zc(b.floor(d / g)))
        };
        l.Mc = function(b) {
            a.A(f, b)
        };
        var x;
        l.Dc = function(F, C) {
            if (!x) {
                z = F;
                b.ceil(z / g);
                q = -1;
                p = b.min(p, C.length);
                var j = d.$Orientation & 1,
                    m = u + (u + r) * (g - 1) * (1 - j),
                    l = t + (t + s) * (g - 1) * j,
                    o = m + (m + r) * (p - 1) * j,
                    n = l + (l + s) * (p - 1) * (1 - j);
                a.z(e, "absolute");
                a.jb(e, "hidden");
                d.$AutoCenter & 1 && a.E(e, (A - o) / 2);
                d.$AutoCenter & 2 && a.G(e, (y - n) / 2);
                a.k(e, o);
                a.m(e, n);
                var k = [];
                a.c(C, function(l, f) {
                    var h = new B(l, f),
                        d = h.Ob,
                        c = b.floor(f / g),
                        i = f % g;
                    a.E(d, (u + r) * i * (1 - j));
                    a.G(d, (t + s) * i * j);
                    if (!k[c]) {
                        k[c] = a.nb();
                        a.H(e, k[c])
                    }
                    a.H(k[c], d);
                    w.push(h)
                });
                var E = a.p({
                    $AutoPlay: i,
                    $NaviQuitDrag: i,
                    $SlideWidth: m,
                    $SlideHeight: l,
                    $SlideSpacing: r * j + s * (1 - j),
                    $MinDragOffsetToSlide: 12,
                    $SlideDuration: 200,
                    $PauseOnHover: 1,
                    $PlayOrientation: d.$Orientation,
                    $DragOrientation: d.$NoDrag || d.$DisableDrag ? 0 : d.$Orientation
                }, d);
                v = new h(f, E);
                x = c
            }
        };
        l.Ib = d = a.p({
            $SpacingX: 0,
            $SpacingY: 0,
            $Cols: 1,
            $Orientation: 1,
            $AutoCenter: 3,
            $ActionMode: 1
        }, C);
        if (d.$DisplayPieces != k) d.$Cols = d.$DisplayPieces;
        if (d.$Rows != k) d.$Lanes = d.$Rows;
        A = a.k(f);
        y = a.m(f);
        e = a.C(f, "slides", c);
        o = a.C(e, "prototype");
        u = a.k(o);
        t = a.m(o);
        a.Hb(o, e);
        g = d.$Lanes || 1;
        r = d.$SpacingX;
        s = d.$SpacingY;
        p = d.$Cols;
        d.$Scale == i && a.B(f, "noscale", c)
    };

    function p(e, d, c) {
        var b = this;
        l.call(b, 0, c);
        b.ib = a.Wc;
        b.cc = 0;
        b.Yb = c
    }
    g.$JssorCaptionSlider$ = function(h, f, i) {
        var c = this;
        l.call(c, 0, 0);
        var e, d;

        function g(p, h, f) {
            var c = this,
                g, n = f ? h.$PlayInMode : h.$PlayOutMode,
                e = h.$Transitions,
                o = {
                    ab: "t",
                    $Delay: "d",
                    $Duration: "du",
                    x: "x",
                    y: "y",
                    $Rotate: "r",
                    $Zoom: "z",
                    $Opacity: "f",
                    Gb: "b"
                },
                d = {
                    kb: function(b, a) {
                        if (!isNaN(a.sb)) b = a.sb;
                        else b *= a.Kf;
                        return b
                    },
                    $Opacity: function(b, a) {
                        return this.kb(b - 1, a)
                    }
                };
            d.$Zoom = d.$Opacity;
            l.call(c, 0, 0);

            function j(r, m) {
                var l = [],
                    i, k = [],
                    c = [];

                function h(c, d) {
                    var b = {};
                    a.c(o, function(g, h) {
                        var e = a.j(c, g + (d || ""));
                        if (e) {
                            var f = {};
                            if (g == "t") f.sb = e;
                            else if (e.indexOf("%") + 1) f.Kf = a.Ic(e) / 100;
                            else f.sb = a.Ic(e);
                            b[h] = f
                        }
                    });
                    return b
                }

                function p() {
                    return e[b.floor(b.random() * e.length)]
                }

                function g(f) {
                    var h;
                    if (f == "*") h = p();
                    else if (f) {
                        var d = e[a.Nb(f)] || e[f];
                        if (a.Ac(d)) {
                            if (f != i) {
                                i = f;
                                c[f] = 0;
                                k[f] = d[b.floor(b.random() * d.length)]
                            } else c[f]++;
                            d = k[f];
                            if (a.Ac(d)) {
                                d = d.length && d[c[f] % d.length];
                                if (a.Ac(d)) d = d[b.floor(b.random() * d.length)]
                            }
                        }
                        h = d;
                        if (a.ud(h)) h = g(h)
                    }
                    return h
                }
                var q = a.P(r);
                a.c(q, function(b) {
                    var c = [];
                    c.$Elmt = b;
                    var e = a.j(b, "u") == "caption";
                    a.c(f ? [0, 3] : [2], function(l, o) {
                        if (e) {
                            var k, f;
                            if (l != 2 || !a.j(b, "t3")) {
                                f = h(b, l);
                                if (l == 2 && !f.ab) {
                                    f.$Delay = f.$Delay || {
                                        sb: 0
                                    };
                                    f = a.p(h(b, 0), f)
                                }
                            }
                            if (f && f.ab) {
                                k = g(f.ab.sb);
                                if (k) {
                                    var i = a.p({
                                        $Delay: 0
                                    }, k);
                                    a.c(f, function(c, a) {
                                        var b = (d[a] || d.kb).apply(d, [i[a], f[a]]);
                                        if (!isNaN(b)) i[a] = b
                                    });
                                    if (!o)
                                        if (f.Gb) i.Gb = f.Gb.sb || 0;
                                        else if (n & 2) i.Gb = 0
                                }
                            }
                            c.push(i)
                        }
                        if (m % 2 && !o) c.P = j(b, m + 1)
                    });
                    l.push(c)
                });
                return l
            }

            function m(w, c, z) {
                var g = {
                        $Easing: c.$Easing,
                        $Round: c.$Round,
                        $During: c.$During,
                        $Reverse: f && !z
                    },
                    m = w,
                    r = a.cd(w),
                    k = a.k(m),
                    j = a.m(m),
                    y = a.k(r),
                    x = a.m(r),
                    h = {},
                    e = {},
                    i = c.$ScaleClip || 1;
                if (c.$Opacity) e.$Opacity = 1 - c.$Opacity;
                g.$OriginalWidth = k;
                g.$OriginalHeight = j;
                if (c.$Zoom || c.$Rotate) {
                    e.$Zoom = (c.$Zoom || 2) - 2;
                    if (a.V() || a.yc()) e.$Zoom = b.min(e.$Zoom, 1);
                    h.$Zoom = 1;
                    var B = c.$Rotate || 0;
                    e.$Rotate = B * 360;
                    h.$Rotate = 0
                } else if (c.$Clip) {
                    var s = {
                            $Top: 0,
                            $Right: k,
                            $Bottom: j,
                            $Left: 0
                        },
                        v = a.p({}, s),
                        d = v.wb = {},
                        u = c.$Clip & 4,
                        p = c.$Clip & 8,
                        t = c.$Clip & 1,
                        q = c.$Clip & 2;
                    if (u && p) {
                        d.$Top = j / 2 * i;
                        d.$Bottom = -d.$Top
                    } else if (u) d.$Bottom = -j * i;
                    else if (p) d.$Top = j * i;
                    if (t && q) {
                        d.$Left = k / 2 * i;
                        d.$Right = -d.$Left
                    } else if (t) d.$Right = -k * i;
                    else if (q) d.$Left = k * i;
                    g.$Move = c.$Move;
                    e.$Clip = v;
                    h.$Clip = s
                }
                var n = 0,
                    o = 0;
                if (c.x) n -= y * c.x;
                if (c.y) o -= x * c.y;
                if (n || o || g.$Move) {
                    e.$Left = n;
                    e.$Top = o
                }
                var A = c.$Duration;
                h = a.p(h, a.ye(m, e));
                g.tc = a.Xc();
                return new l(c.$Delay, A, g, m, h, e)
            }

            function i(b, d) {
                a.c(d, function(d) {
                    var a, h = d.$Elmt,
                        e = d[0],
                        j = d[1];
                    if (e) {
                        a = m(h, e);
                        e.Gb == k && a.$Shift(b);
                        b = a.gb()
                    }
                    b = i(b, d.P);
                    if (j) {
                        var f = m(h, j, 1);
                        f.$Shift(b);
                        c.I(f);
                        g.I(f)
                    }
                    a && c.I(a)
                });
                return b
            }
            c.ib = function() {
                c.v(c.gb() * (f || 0));
                g.v(0)
            };
            g = new l(0, 0);
            i(0, n ? j(p, 1) : [])
        }
        c.ib = function() {
            d.ib();
            e.ib()
        };
        e = new g(h, f, 1);
        c.cc = e.gb();
        c.Yb = c.cc + i;
        d = new g(h, f);
        d.$Shift(c.Yb);
        c.I(d);
        c.I(e)
    };
    g.$JssorCaptionSlideo$ = function(n, g, m) {
        var b = this,
            o, h = {},
            i = g.$Transitions,
            d = new l(0, 0);
        l.call(b, 0, 0);

        function j(c, d) {
            var b = {};
            a.c(c, function(c, f) {
                var e = h[f];
                if (e) {
                    if (a.xg(c)) c = j(c, f == "e");
                    else if (d)
                        if (a.Zb(c)) c = o[c];
                    b[e] = c
                }
            });
            return b
        }

        function k(e, c) {
            var b = [],
                d = a.P(e);
            a.c(d, function(d) {
                var h = a.j(d, "u") == "caption";
                if (h) {
                    var e = a.j(d, "t"),
                        g = i[a.Nb(e)] || i[e],
                        f = {
                            $Elmt: d,
                            ab: g
                        };
                    b.push(f)
                }
                if (c < 5) b = b.concat(k(d, c + 1))
            });
            return b
        }

        function r(c, e, b) {
            a.c(e, function(f) {
                var e = j(f),
                    g = {
                        $Easing: a.xc(e.$Easing),
                        tc: a.Xc(),
                        $OriginalWidth: b.N,
                        $OriginalHeight: b.T
                    },
                    h = new l(f.b, f.d, g, c, b, e);
                d.I(h);
                b = a.He(b, e)
            });
            return b
        }

        function q(b) {
            a.c(b, function(e) {
                var b = e.$Elmt,
                    d = a.k(b),
                    c = a.m(b),
                    f = {
                        $Left: a.E(b),
                        $Top: a.G(b),
                        $Opacity: 1,
                        $ZIndex: a.J(b) || 0,
                        $Rotate: 0,
                        $RotateX: 0,
                        $RotateY: 0,
                        $ScaleX: 1,
                        $ScaleY: 1,
                        $TranslateX: 0,
                        $TranslateY: 0,
                        $TranslateZ: 0,
                        $SkewX: 0,
                        $SkewY: 0,
                        N: d,
                        T: c,
                        $Clip: {
                            $Top: 0,
                            $Right: d,
                            $Bottom: c,
                            $Left: 0
                        }
                    };
                r(b, e.ab, f)
            })
        }

        function t(g, f, h) {
            var e = g.b - f;
            if (e) {
                var a = new l(f, e);
                a.I(d, c);
                a.$Shift(h);
                b.I(a)
            }
            b.Zd(g.d);
            return e
        }

        function s(f) {
            var c = d.Lc(),
                e = 0;
            a.c(f, function(d, f) {
                d = a.p({
                    d: m
                }, d);
                t(d, c, e);
                c = d.b;
                e += d.d;
                if (!f || d.t == 2) {
                    b.cc = c;
                    b.Yb = c + d.d
                }
            })
        }
        b.ib = function() {
            b.v(-1, c)
        };
        o = [f.$Swing, f.$Linear, f.$InQuad, f.$OutQuad, f.$InOutQuad, f.$InCubic, f.$OutCubic, f.$InOutCubic, f.$InQuart, f.$OutQuart, f.$InOutQuart, f.$InQuint, f.$OutQuint, f.$InOutQuint, f.$InSine, f.$OutSine, f.$InOutSine, f.$InExpo, f.$OutExpo, f.$InOutExpo, f.$InCirc, f.$OutCirc, f.$InOutCirc, f.$InElastic, f.$OutElastic, f.$InOutElastic, f.$InBack, f.$OutBack, f.$InOutBack, f.$InBounce, f.$OutBounce, f.$InOutBounce, f.$GoBack, f.$InWave, f.$OutWave, f.$OutJump, f.$InJump];
        var u = {
            $Top: "y",
            $Left: "x",
            $Bottom: "m",
            $Right: "t",
            $Rotate: "r",
            $RotateX: "rX",
            $RotateY: "rY",
            $ScaleX: "sX",
            $ScaleY: "sY",
            $TranslateX: "tX",
            $TranslateY: "tY",
            $TranslateZ: "tZ",
            $SkewX: "kX",
            $SkewY: "kY",
            $Opacity: "o",
            $Easing: "e",
            $ZIndex: "i",
            $Clip: "c"
        };
        a.c(u, function(b, a) {
            h[b] = a
        });
        q(k(n, 1));
        var p = g.$Breaks || [],
            e = [].concat(p[a.Nb(a.j(n, "b"))] || []);
        e.push({
            b: d.gb(),
            d: e.length ? 0 : m
        });
        s(e);
        b.v(-1)
    }
})(window, document, Math, null, true, false)