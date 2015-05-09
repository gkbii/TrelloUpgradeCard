window.siteDomain = location.origin || /^[^/]+?[/]{2}[^/]+/.exec(location.href)[0];
var e = [],
    t = function(t) {
        e.push(t)
    },
    n = window;
! function e(t, n, r) {
    function i(s, a) {
        if (!n[s]) {
            if (!t[s]) {
                var l = "function" == typeof require && require;
                if (!a && l) return l(s, !0);
                if (o) return o(s, !0);
                var c = new Error("Cannot find module '" + s + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var u = n[s] = {
                exports: {}
            };
            t[s][0].call(u.exports, function(e) {
                var n = t[s][1][e];
                return i(n ? n : e)
            }, u, u.exports, e, t, n, r)
        }
        return n[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < r.length; s++) i(r[s]);
    return i
}({
    1: [function(e) {
        var t, n, r, i, o, s, a, l, c, u, d, p, b, h, m, f = {}.hasOwnProperty;
        t = e("jquery"), n = e(279), r = e(109), i = e(20), o = e(35), s = e(242), a = e(282), l = e(13), c = e(285), u = e(286), d = e(128), p = e(52), m = e("underscore"), h = e(31), b = function() {
            var e, t, n, r;
            t = {}, r = null, e = 0, n = function() {
                var e, n;
                for (n in t) f.call(t, n) && (e = t[n])();
                r = null, t = {}
            }, window.requestAnimationFrame = function(i) {
                var o;
                return o = e++, null == r && (r = setTimeout(n)), t[o] = i, o
            }, window.cancelAnimationFrame = function(e) {
                delete t[e]
            }
        }, t(document).ready(function() {
            var e;
            return "requestAnimationFrame" in window || b(), window.orientationchange = function() {
                return a.calcPos()
            }, o.detectCustomWebkitScrollbars(), t.event.props.push("dataTransfer"), e = function(e, n, r, i) {
                return t(document).on("click", e, function(e) {
                    var t, o;
                    return t = function() {
                        var t, s, a, l;
                        for (a = [n, r, i], l = [], t = 0, s = a.length; s > t; t++) o = a[t], null != o && l.push(m.isFunction(o) ? o.call(this, e) : o);
                        return l
                    }.call(this), h.apply(null, t)
                })
            }, e(".js-home-via-logo", "Header", "Logo", "Home"), e(".header-signup", "Header", "Sign Up"), t(document).on("click", ".js-resend-confirmation-email", m.throttle(function() {
                return function() {
                    return r({
                        type: "POST",
                        url: "/resendValidate",
                        data: {
                            email: i.me().get("email")
                        },
                        success: function() {
                            return n.flash("Email Sent", "confirm")
                        }
                    })
                }
            }(this), 6e4)), t(".window-overlay").click(function(e) {
                if (!(e.button > 0)) {
                    if (t(e.target).is("a") && "#" === t(e.target).attr("href")) return void p.stopPropagation(e);
                    if (!t(e.target).is("a.focus-dummy") && !t(e.target).hasClass("checkbox")) return u.isVisible ? void u.hide() : t(".new-comment").hasClass("focus") ? void t(".new-comment").removeClass("focus").find("textarea").blur() : c.isEditing() ? void c.cancelEdits() : void(t(e.target).closest(".window-wrapper").length > 0 || a.hide())
                }
            }), t("#surface").click(function(e) {
                var n, r;
                if (!(t(e.target).closest(".boards-drawer").length > 0)) return t(e.target).is("input") || t(e.target).is("textarea") ? void p.stopPropagation(e) : (n = s.getCurrentBoard(), r = n && s.getCurrentBoardView(), u.isVisible ? u.hide() : d.getShowSidebar() && !d.getPinSidebar() ? d.hideSidebar() : t(".new-comment").hasClass("focus") ? t(".new-comment").removeClass("focus").find("textarea").blur() : (null != n ? n.viewState.get("listComposerOpen") : void 0) ? null != n ? n.viewState.set("listComposerOpen", !1) : void 0 : (null != n ? n.composer.get("vis") : void 0) && !t(e.target).closest(".card-composer").length > 0 ? n.composer.save("vis", !1) : c.isEditing() ? c.cancelEdits() : s.showingCalendar(r) && 0 === t(e.target).closest(".calendar-day").length ? t(".calendar-day.active").removeClass("active") : t("input, textarea").blur())
            }), t(document).on("click", "a[href=#]", function(e) {
                return p.preventDefault(e)
            }), t(document).keyup(function(e) {
                var n;
                return e.keyCode === l.Escape ? (e.preventDefault(), n = s.getCurrentBoard(), d.getShowSidebar() && !d.getPinSidebar() ? d.hideSidebar() : c.isEditing() ? c.cancelEdits() : t(".new-comment").hasClass("focus") ? t(".new-comment").removeClass("focus").find("textarea").blur() : (t("input").blur(), t("textarea").blur())) : void 0
            }), t(document).bind("dragstart", function(e) {
                return t(e.target).closest(".ui-draggable").length > 0
            }), null != window.fluid ? h("FluidApp") : void 0
        })
    }, {}],
    2: [function(e) {
        var t;
        t = e(20), "function" == typeof window.sp && window.sp("newTracker", "cf", window.snowplowCloudfrontServer, {
            appId: "web",
            cookieDomain: ".trello.com",
            respectDoNotTrack: !0
        }), t.isLoggedIn() && "function" == typeof window.sp && window.sp("setUserId", t.myId())
    }, {}],
    3: [function(e) {
        var t, n;
        t = e("jquery"), n = e(40), t.getScript("https://apis.google.com/js/api.js", function() {
            return n.loadedAuth()
        })
    }, {}],
    4: [function(e) {
        var t, n, r, i;
        n = e(28), i = e("underscore"), t = e(391), r = [], window.onerror = i.debounce(function(e, o, s, a, l) {
            var c;
            return 10 === r.length ? !1 : RegExp("https?://(" + location.host + "|[a-z0-9]+\\.cloudfront\\.net|a.trellocdn.com)/").test(o) ? (c = [e, o, s, a], i.any(r, t(i.isEqual, c)) ? !1 : (null == l && (l = new Error("window.onerror did not supply an error!")), n(l, e, o, s, a), r.push(c), !1)) : !1
        }, 1e3, !0)
    }, {}],
    5: [function() {
        window.knowsHowToLoadChannels = !0
    }, {}],
    6: [function(e) {
        var t, n, r, i, o;
        t = e("jquery"), n = e(35), r = e(13), i = e(52), "safari" === (o = n.browserStr) && t(document).on("keydown", function(e) {
            var n, o, s, a, l, c, u, d;
            e.which !== r.Tab || e.metaKey || e.shiftKey || e.ctrlKey || (l = t(e.target), l.attr("tabindex") && (d = parseInt(l.attr("tabindex"), 10), a = l.closest("body,.js-tab-parent"), s = a.find("[tabindex]"), n = null, o = null, c = 1 / 0, u = 1 / 0, s.each(function() {
                var e, r;
                return r = parseInt(t(this).attr("tabindex"), 10), r > d && c > r && (c = r, n = t(this), e = !0), null == n && u > r ? (u = r, o = t(this)) : void 0
            }), null == n && (n = o), null != n && (i.stop(e), n.focus())))
        })
    }, {}],
    7: [function(e) {
        var n, r, i, o, s, a, l, c, u, d, p, b, h, m, f, g, v;
        n = e("jquery"), i = e(20), r = e(26), o = e(11), s = e(27), a = e(242), l = e(36), c = void 0, t(function() {
            return c = e(23)
        }), u = e(46), p = e(382), b = e(112), d = e(286), h = e(52), m = e(54), v = e("underscore"), g = e(269), n(function() {
            var e;
            return "Production" === s.server.environment && "trello.com" !== location.hostname && v.defer(function() {
                throw new Error("Site proxied as " + location.hostname)
            }), setInterval(function() {
                l.update("body"), l.updateRel("body"), l.trigger("renderInterval")
            }, 1e4), p.init(), b.start(), u.init(), a.start(), o.history.start({
                pushState: !0
            }), m.ensureRun(), r.refreshPercentages(), e = function(e) {
                var t, n, r, o, s, a, l, u;
                if (e = e.replace(/[\?\#].*$/, ""), /\.[a-z]+$/i.test(e)) return !1;
                if (/^([bc]|board|card|org)\//.test(e)) return !0;
                if (/^search(\/|$)/.test(e)) return !0;
                if (i.isLoggedIn()) {
                    if (RegExp("^" + i.myUsername() + "(/|$)").test(e)) return !0;
                    if ("/" === e) return !0
                }
                if (/^shortcuts\/?$/.test(e)) return !0;
                if (n = null != (s = /^[^\/]+/.exec(e)) ? s[0] : void 0, "me" === n || "my" === n || "you" === n || "your" === n || "username" === n) return !0;
                if (/^[a-z0-9_]{3,}$/.test(n))
                    for (a = c.all(), r = 0, o = a.length; o > r; r++)
                        if (t = a[r], null != t.bound) {
                            if (null != (null != (l = t.bound.Member) ? l.findOne("username", n) : void 0)) return !0;
                            if (null != (null != (u = t.bound.Organization) ? u.findOne("name", n) : void 0)) return !0
                        }
                return !1
            }, n("body").delegate("a[href^='/'],a[href^='" + siteDomain + "/']", "click", function(t) {
                var r, i;
                if (!(t.ctrlKey || t.metaKey || t.shiftKey)) return i = n(this).attr("href").replace(RegExp("^" + siteDomain), "").replace(/^\/(?=.)/, ""), r = i !== location.pathname.slice(1), r && d.hide(), e(i) && null == n(this).attr("target") && (h.preventDefault(t), r) ? a.navigate(i, {
                    trigger: !0
                }) : void 0
            }), n("#surface").append(g.fill("surface_base"))
        }), f = i.updateToken(), setInterval(function() {
            var e;
            return e = i.updateToken(), e !== f && window.location.reload(), f = e
        }, 3e3)
    }, {}],
    8: [function(e) {
        var t, n, r, i;
        t = e("jquery"), n = e(58), r = e(52), i = e("underscore"), i.defer(function() {
            var e, i, o, s;
            return o = r.getMs({
                minutes: 10 + 5 * Math.random()
            }), s = null, i = ("function" == typeof document.hasFocus ? document.hasFocus() : void 0) || !0, e = function() {
                return i && (null == s || Date.now() - s > o) ? (n.fetch(), s = Date.now()) : void 0
            }, t(window).on("focus", function() {
                return i = !0, e()
            }), t(window).on("blur", function() {
                return i = !1
            }), setInterval(e, o / 4), e()
        })
    }, {}],
    9: [function(e) {
        var t, n, r = [].slice;
        t = e("async"), n = e("underscore"), t.assembly = function(e, i) {
            var o;
            return o = n.map(e, function(e) {
                return function() {
                    var t, n, i, o;
                    return t = 2 <= arguments.length ? r.call(arguments, 0, o = arguments.length - 1) : (o = 0, []), i = arguments[o++], n = function() {
                        var e, n;
                        return e = arguments[0], n = 2 <= arguments.length ? r.call(arguments, 1) : [], 0 === n.length && (n = t), i.apply(null, [e].concat(r.call(n)))
                    }, e.apply(null, [n].concat(r.call(t)))
                }
            }), t.waterfall(o, i)
        }, n.mixin({
            mapObj: n.compose(n.object, n.map),
            count: function(e, t) {
                var n, r, i, o;
                for (null == t && (t = function() {
                    return !0
                }), n = 0, i = 0, o = e.length; o > i; i++) r = e[i], t(r) && n++;
                return n
            }
        })
    }, {}],
    10: [function(e) {
        var t, n;
        t = e("jquery"), n = e(54), t(function() {
            var e;
            return n.calc(), e = null, t(window).resize(function() {
                clearTimeout(e), e = setTimeout(function() {
                    return n.calc()
                }, 200)
            })
        })
    }, {}],
    11: [function(e, t) {
        var n, r, i, o;
        i = e(119), r = e(20), o = e("underscore"), n = e("jquery"), i.$ = n, i.$ = e("jquery"), i.prepareData = function(e, t, i) {
            var s, a;
            return a = {
                token: r.myToken()
            }, s = function() {
                var n;
                switch (e) {
                    case "create":
                    case "update":
                        return o.extend(null != (n = null != i ? i.requestData : void 0) ? n : t.toJSON(), a);
                    case "delete":
                        return a;
                    default:
                        return {}
                }
            }(), "read" === e && o.isArray(i.fields) && (s.fields = i.fields.join(",")), "read" === e ? n.param(s) : JSON.stringify(s)
        }, i.syncOriginal = i.sync, i.sync = function(e, t, n) {
            var r, s, a;
            switch (e) {
                case "update":
                    return null != n && "function" == typeof n.success ? n.success(t, {}, n) : void 0;
                case "create":
                    n.wait || (r = t.modelCache.lock("Backbone.sync create"), s = o.once(function() {
                        return t.modelCache.unlock(r)
                    }), a = function(e) {
                        return function() {
                            return "function" == typeof e && e.apply(null, arguments), s()
                        }
                    }, setTimeout(a(), 1e4), n.success = a(n.success), n.error = a(n.error));
                    break;
                case "delete":
                    if (/^placeholder/.test(t.id)) return
            }
            return i.syncOriginal.apply(i, arguments)
        }, t.exports = i
    }, {}],
    12: [function(e, t) {
        var n, r;
        r = "http://creativecommons.org/licenses/by/2.0/deed.en", n = {
            photos: {
                name: "Photos"
            },
            patterns: {
                name: "Patterns and Textures"
            }
        }, t.exports = {
            blue: {
                type: "default",
                brightness: "dark",
                color: "#0E74AF"
            },
            green: {
                type: "default",
                brightness: "dark",
                color: "#379E5A"
            },
            orange: {
                type: "default",
                brightness: "dark",
                color: "#CE7822"
            },
            red: {
                type: "default",
                brightness: "dark",
                color: "#BF4040"
            },
            grey: {
                type: "default",
                brightness: "dark",
                color: "#808080"
            },
            purple: {
                type: "default",
                brightness: "dark",
                color: "#8D5C99"
            },
            mountain: {
                type: "premium",
                pack: n.photos,
                brightness: "light",
                fullSizeUrl: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/mountain/171b0c9aea08e21f0020f359408b73e4/full.jpg",
                scaled: [{
                    width: 2400,
                    height: 1696,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/mountain/46616ebeae7245d4a16cf00cf1e21e86/large.jpg"
                }, {
                    width: 1024,
                    height: 724,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/mountain/07627e0760eb74e7109a82057ac86881/medium.jpg"
                }, {
                    width: 320,
                    height: 227,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/mountain/da8d70dd70d666361767b9e30acdba65/small.jpg"
                }],
                attribution: {
                    url: "http://www.flickr.com/photos/62681247@N00/6575973407/",
                    name: "jqmj (Queralt)",
                    license: r
                }
            },
            cosmos: {
                type: "premium",
                pack: n.photos,
                brightness: "dark",
                fullSizeUrl: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/cosmos/92448e055514fdc92923c9b591aa31df/full.jpg",
                scaled: [{
                    width: 2047,
                    height: 1638,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/cosmos/be5121d350dd3e3ac97e209c3a7fce58/large.jpg"
                }, {
                    width: 1600,
                    height: 1280,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/cosmos/f95acce485fc44f9a07853aa15965f90/medium.jpg"
                }, {
                    width: 320,
                    height: 256,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/cosmos/0646808c900b7409dbeb96d36f55e980/small.jpg"
                }],
                attribution: {
                    url: "http://www.flickr.com/photos/gsfc/6945160410/",
                    name: "NASA Goddard Space Flight Center",
                    license: r
                }
            },
            rain: {
                type: "premium",
                pack: n.photos,
                brightness: "dark",
                fullSizeUrl: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/rain/2e8209ee9f21d7147a24cac28ea61358/full.jpg",
                scaled: [{
                    width: 2400,
                    height: 1600,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/rain/9de9b88a694019ab77d129f1729b05b7/large.jpg"
                }, {
                    width: 1024,
                    height: 683,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/rain/b8ac88f9c4e8097c1ef8cc269d66e089/medium.jpg"
                }, {
                    width: 320,
                    height: 213,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/rain/e9147244c93e3990f361bc8123cacca9/small.jpg"
                }],
                attribution: {
                    url: "http://www.flickr.com/photos/vinothchandar/5243641910/",
                    name: "Vinoth Chandar",
                    license: r
                }
            },
            dew: {
                type: "premium",
                pack: n.photos,
                brightness: "light",
                fullSizeUrl: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/dew/1d638bc56d179d5a8c35177305d4ea09/full.jpg",
                scaled: [{
                    width: 2400,
                    height: 1594,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/dew/5b5f4c5cd0d7e144e40168345c8c6075/large.jpg"
                }, {
                    width: 1024,
                    height: 680,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/dew/3c8daf991e3132f453ad0c822175b34d/medium.jpg"
                }, {
                    width: 320,
                    height: 212,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/dew/71633df28ad4038a6fb6f647c1b29b27/small.jpg"
                }],
                attribution: {
                    url: "http://www.flickr.com/photos/jenny-pics/5584430423/",
                    name: "Jenny Downing",
                    license: r
                }
            },
            "snow-bokeh": {
                type: "premium",
                pack: n.photos,
                brightness: "dark",
                fullSizeUrl: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/snow-bokeh/75b2ce11e6652e76ad0d3629d9886ca5/full.jpg",
                scaled: [{
                    width: 2400,
                    height: 1596,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/snow-bokeh/11fc1afae97ec97b3b46b149d701e180/large.jpg"
                }, {
                    width: 1024,
                    height: 681,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/snow-bokeh/9f4c60883dec8b5aa5bc949607081505/medium.jpg"
                }, {
                    width: 320,
                    height: 213,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/snow-bokeh/d74c2d921e28c822e92b881b3e2cb10b/small.jpg"
                }],
                attribution: {
                    url: "http://www.flickr.com/photos/tabor-roeder/5337595458/",
                    name: "Phil Roeder",
                    license: r
                }
            },
            city: {
                type: "premium",
                pack: n.photos,
                brightness: "dark",
                fullSizeUrl: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/city/1bbbf09d491d444d207e5d8b792a86ba/full.jpg",
                scaled: [{
                    width: 2400,
                    height: 1594,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/city/d23508735801f1190b365330eb8ec0a5/large.jpg"
                }, {
                    width: 1024,
                    height: 680,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/city/a7eea5e35c08388ec3da7dbc814f1da2/medium.jpg"
                }, {
                    width: 320,
                    height: 212,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/city/27e00a7bee7a783ae7568a819fa9bb97/small.jpg"
                }],
                attribution: {
                    url: "http://www.flickr.com/photos/nosha/2907855809/",
                    name: "Nathan Siemers",
                    license: r
                }
            },
            canyon: {
                type: "premium",
                pack: n.photos,
                brightness: "light",
                fullSizeUrl: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/canyon/0c35d8049641c307de51cac7d449bf4e/full.jpg",
                scaled: [{
                    width: 2400,
                    height: 1596,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/canyon/ee79179217e377e332d217cbe10405b4/large.jpg"
                }, {
                    width: 1024,
                    height: 681,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/canyon/976ada2d506ebb7c2f8708f2ccc47192/medium.jpg"
                }, {
                    width: 320,
                    height: 213,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/canyon/1478a9382a5ab8c493685223ff36e6f7/small.jpg"
                }],
                attribution: {
                    url: "http://www.flickr.com/photos/wolfgangstaudt/2252688630/",
                    name: "Wolfgang Staudt",
                    license: r
                }
            },
            ocean: {
                type: "premium",
                pack: n.photos,
                brightness: "dark",
                fullSizeUrl: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/ocean/4ce437330ab9d2fe40dd3d8504a143e6/full.jpg",
                scaled: [{
                    width: 2400,
                    height: 1600,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/ocean/ede6927e92b4515102b2d86e919c77fa/large.jpg"
                }, {
                    width: 1024,
                    height: 683,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/ocean/c8a238f606e3288c461fc7ea3daa36d9/medium.jpg"
                }, {
                    width: 320,
                    height: 213,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/ocean/2de3527d131722c66ec5315205d64104/small.jpg"
                }],
                attribution: {
                    url: "http://www.flickr.com/photos/mattphipps/4635112852/",
                    name: "MattJP",
                    license: r
                }
            },
            river: {
                type: "premium",
                pack: n.photos,
                brightness: "dark",
                fullSizeUrl: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/river/b031ec422c9048f4b6fb3b53f80eba3c/full.jpg",
                scaled: [{
                    width: 2400,
                    height: 1600,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/river/801d937c765a9996d4eccf4aee6bfc36/large.jpg"
                }, {
                    width: 1024,
                    height: 683,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/river/67c2c39a74a32f383ffd10dc53ffb535/medium.jpg"
                }, {
                    width: 320,
                    height: 213,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/river/15967f866d002762d13d20d258140418/small.jpg"
                }],
                attribution: {
                    url: "http://www.flickr.com/photos/22746515@N02/3114276532/",
                    name: "Bert Kaufmann",
                    license: r
                }
            },
            fall: {
                type: "premium",
                pack: n.photos,
                discontinued: !0,
                fullSizeUrl: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/fall/72c32b15d265b78e7058896d4bc85c3b/full.jpg",
                scaled: [{
                    width: 2400,
                    height: 1596,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/fall/a42f50fe10ff082519a499a2e86be1dc/large.jpg"
                }, {
                    width: 1024,
                    height: 681,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/fall/a999e10749c6db57a5acd9960324ed6f/medium.jpg"
                }, {
                    width: 320,
                    height: 213,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/fall/8c8e3c5c5eebeac446c7e19ee36d23ae/small.jpg"
                }],
                attribution: {
                    url: "http://www.flickr.com/photos/mendhak/4107993637/",
                    name: "mendhak",
                    license: r
                }
            },
            snow: {
                type: "premium",
                pack: n.photos,
                discontinued: !0,
                fullSizeUrl: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/snow/d5dd0a98d6b0a7ebcaff02dad1535fab/full.jpg",
                scaled: [{
                    width: 2400,
                    height: 1600,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/snow/149d6adb0c746612aa21ec3c46455583/large.jpg"
                }, {
                    width: 1024,
                    height: 683,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/snow/147471be1b6fa8858c40febf9702795b/medium.jpg"
                }, {
                    width: 320,
                    height: 213,
                    url: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/snow/da5f83eace8c3f4e13f1287cefd07956/small.jpg"
                }],
                attribution: {
                    url: "http://www.flickr.com/photos/zachd1_618/5386165480/",
                    name: "Zach Dischner",
                    license: r
                }
            },
            purty_wood_dark: {
                type: "premium",
                pack: n.patterns,
                tile: !0,
                brightness: "dark",
                fullSizeUrl: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/7a14a57fef9435b0def0f613d0114334/purty_wood_dark.png",
                attribution: {
                    url: "http://subtlepatterns.com/purty-wood/",
                    name: "Richard Tabor",
                    license: r
                }
            },
            "subtle-irongrip": {
                type: "premium",
                pack: n.patterns,
                tile: !0,
                brightness: "dark",
                fullSizeUrl: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/c9f15836db29df79c2a0092a6758d81e/subtle-irongrip.png",
                attribution: {
                    url: "http://subtlepatterns.com/iron-grip/",
                    name: "Tony Kinard",
                    license: r
                }
            },
            "red-sweater": {
                type: "premium",
                pack: n.patterns,
                tile: !0,
                brightness: "dark",
                fullSizeUrl: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/17d3a6bc27bdcd05caeae11f67fa46d6/red-sweater.png",
                attribution: {
                    url: "http://subtlepatterns.com/wild-oliva/",
                    name: "Badhon Ebrahim",
                    license: r
                }
            },
            hex: {
                type: "premium",
                pack: n.patterns,
                tile: !0,
                brightness: "dark",
                fullSizeUrl: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/2e2cb18ce229869faec815b4d8fe2770/hex.png"
            },
            wave: {
                type: "premium",
                pack: n.patterns,
                tile: !0,
                brightness: "dark",
                fullSizeUrl: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/bb289a4f00f13e8ca52e67afd11c1648/wave.png"
            },
            bricks: {
                type: "premium",
                pack: n.patterns,
                tile: !0,
                brightness: "dark",
                fullSizeUrl: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/5e21dfb838e99d8a7c540a2b90d36f29/bricks.png"
            },
            "purple-blur": {
                type: "premium",
                pack: n.patterns,
                brightness: "dark",
                fullSizeUrl: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/3a02eab932195316109bd905d3341323/purple-blur.png"
            },
            "orange-blur": {
                type: "premium",
                pack: n.patterns,
                brightness: "dark",
                fullSizeUrl: "https://d78fikflryjgj.cloudfront.net/images/backgrounds/07a3436eabfd187ee94ae8c578584d07/orange-blur.png"
            }
        }
    }, {}],
    13: [function(e, t) {
        var n;
        t.exports = n = {
            Backspace: 8,
            Tab: 9,
            LineFeed: 10,
            Enter: 13,
            Escape: 27,
            Space: 32,
            Delete: 46,
            Shift: 16,
            Control: 17,
            Alt: 18,
            CapsLock: 20,
            PageUp: 33,
            PageDown: 34,
            End: 35,
            Home: 36,
            ArrowUp: 38,
            ArrowRight: 39,
            ArrowDown: 40,
            ArrowLeft: 37,
            QuestionMark: 63,
            Comma: 188,
            Period: 190,
            ForwardSlash: 191,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            _0: 48,
            _1: 49,
            _2: 50,
            _3: 51,
            _4: 52,
            _5: 53,
            _6: 54,
            _7: 55,
            _8: 56,
            _9: 57,
            Numpad_0: 96,
            Numpad_1: 97,
            Numpad_2: 98,
            Numpad_3: 99,
            Numpad_4: 100,
            Numpad_5: 101,
            Numpad_6: 102,
            Numpad_7: 103,
            Numpad_8: 104,
            Numpad_9: 105
        }, n.controlKeys = [n.Shift, n.Control, n.Alt, n.Escape, n.CapsLock], n.arrowKeys = [n.ArrowLeft, n.ArrowRight, n.ArrowUp, n.ArrowDown]
    }, {}],
    14: [function(e, t) {
        var n, r, i, o, s = [].slice;
        n = e(32), o = ["additionalStickers", "customStickers", "additionalBoardBackgrounds", "customBoardBackgrounds", "largeAttachments", "customEmoji", "savedSearches"], i = s.call(o).concat(["crown"]), r = {
            10: {
                shortName: "trelloGoldFromBC",
                name: "Trello Gold from BC",
                features: o
            },
            37: {
                shortName: "trelloGoldMonthly",
                name: "Trello Gold",
                interval: "monthly",
                price: 5,
                features: i
            },
            38: {
                shortName: "trelloGoldYearly",
                name: "Trello Gold",
                interval: "yearly",
                price: 45,
                features: i
            }
        }, t.exports = n.init(r)
    }, {}],
    15: [function(e, t) {
        var n, r, i, o, s = [].slice;
        n = e(32), r = ["export", "logo", "observers", "removal", "activity", "deactivated", "orgCards", "googleApps", "orgMembersPage", "superAdmins", "prefs", "inviteOrg", "restrictVis", "disableExternalMembers"], i = s.call(r).concat(["goldMembers"], ["csvExport"], ["shortExportHistory"]), o = {
            35: {
                shortName: "businessClassMonthly",
                name: "Business Class",
                interval: "monthly",
                price: 25,
                features: r,
                hidden: !0,
                prebill: !1
            },
            36: {
                shortName: "businessClassYearly",
                name: "Business Class",
                interval: "yearly",
                price: 200,
                features: r,
                hidden: !0
            },
            39: {
                shortName: "businessClassMonthly",
                name: "Business Class",
                interval: "monthly",
                price: 50,
                features: r,
                hidden: !0
            },
            40: {
                shortName: "businessClassYearly",
                name: "Business Class",
                interval: "yearly",
                price: 500,
                features: r,
                hidden: !0
            },
            96: {
                shortName: "businessClassMonthly",
                name: "Business Class",
                interval: "monthly",
                price: 5,
                features: i,
                perUser: !0
            },
            97: {
                shortName: "businessClassYearly",
                name: "Business Class",
                interval: "yearly",
                price: 45,
                features: i,
                perUser: !0
            }
        }, t.exports = n.init(o, {
            globalFeatures: ["logo"]
        })
    }, {}],
    16: [function(e, t) {
        t.exports = {
            powerUpNames: {
                voting: "Voting",
                cardAging: "Card Aging",
                calendar: "Calendar"
            },
            cardAgingModes: {
                regular: "regular",
                pirate: "pirate"
            },
            calendarFeedEnabledVerbs: {
                true: "enabled",
                false: "disabled"
            }
        }
    }, {}],
    17: [function(e, t) {
        t.exports = {
            taco: {
                displayName: "Taco Pack"
            },
            pete: {
                displayName: "Pete the Computer"
            }
        }
    }, {}],
    18: [function(e, t) {
        t.exports = 80
    }, {}],
    19: [function(e, t) {
        var n;
        n = e(17), t.exports = {
            check: {
                type: "standard",
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/90e26477b42f93cf816eecc39c9a7067/check.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/90e26477b42f93cf816eecc39c9a7067/check.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/5168d92437a5fc166632f0006879d5ea/check%402x.png"
                }]
            },
            heart: {
                type: "standard",
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/cc9d955a9ae38ff99b641f8e0ab719ed/heart.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/cc9d955a9ae38ff99b641f8e0ab719ed/heart.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/51a19b35bc5092e9e2761b479ce6105d/heart%402x.png"
                }]
            },
            warning: {
                type: "standard",
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/f8832dabce0aabd9a3b550c6f571bbab/warning.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/f8832dabce0aabd9a3b550c6f571bbab/warning.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/e0197b2fb0cbd4a389d4ab5de9e1193a/warning%402x.png"
                }]
            },
            clock: {
                type: "standard",
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/5bd7338f370c3fd7238d40410f200736/clock.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/5bd7338f370c3fd7238d40410f200736/clock.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/b678287abafc2d8c99f3dfa9b8e7a30c/clock%402x.png"
                }]
            },
            smile: {
                type: "standard",
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/90a8856b7465d57b1ac30925181198b4/smile.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/90a8856b7465d57b1ac30925181198b4/smile.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/fa6754c4dd9625bdce765781c5c69635/smile%402x.png"
                }]
            },
            laugh: {
                type: "standard",
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/31ce444242a6f930b52180a2a0d27813/laugh.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/31ce444242a6f930b52180a2a0d27813/laugh.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/6a4570e57d1e3df870143fc016ed2f7d/laugh%402x.png"
                }]
            },
            huh: {
                type: "standard",
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/405fd9e6997ac365e4da29d6e550cd3e/huh.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/405fd9e6997ac365e4da29d6e550cd3e/huh.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/4a513d5705f0f89b365f27ec05784147/huh%402x.png"
                }]
            },
            frown: {
                type: "standard",
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/49afc75f79a5719a3871b3640a4d1e70/frown.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/49afc75f79a5719a3871b3640a4d1e70/frown.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/c414ef32894f9c9873142fc964ec4e08/frown%402x.png"
                }]
            },
            thumbsup: {
                type: "standard",
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/ebab8d33a9e50bfb92724e51254be4fa/thumbsup.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/ebab8d33a9e50bfb92724e51254be4fa/thumbsup.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/6f6cea3566b6fbbc0067561b53f4048a/thumbsup%402x.png"
                }]
            },
            thumbsdown: {
                type: "standard",
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/8accff79fb0229cb8940be8c35aa1838/thumbsdown.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/8accff79fb0229cb8940be8c35aa1838/thumbsdown.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/79d155c5163ee1a67509b789f98a858b/thumbsdown%402x.png"
                }]
            },
            star: {
                type: "standard",
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/4c68ea50e4ffeeb97df52f7849f00845/star.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/4c68ea50e4ffeeb97df52f7849f00845/star.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/27460fa90f9753396db36bf60815e93a/star%402x.png"
                }]
            },
            rocketship: {
                type: "standard",
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/484099c2f7dfcfe5fef9c4245fa2802a/rocketship.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/484099c2f7dfcfe5fef9c4245fa2802a/rocketship.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/5bd888e40e6e27bd733d37015857b218/rocketship%402x.png"
                }]
            },
            "taco-love": {
                type: "premium",
                pack: n.taco,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/c17c5bf93797d71527ee91494fc85e2c/taco-love.png",
                scaled: [{
                    width: 140,
                    height: 140,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/c17c5bf93797d71527ee91494fc85e2c/taco-love.png"
                }, {
                    width: 280,
                    height: 280,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/06ddf78e10598774b89e3264d8e414da/taco-love%402x.png"
                }]
            },
            "taco-confused": {
                type: "premium",
                pack: n.taco,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/511723ee0c932684ca39cdec005bc2c5/taco-confused.png",
                scaled: [{
                    width: 140,
                    height: 140,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/511723ee0c932684ca39cdec005bc2c5/taco-confused.png"
                }, {
                    width: 280,
                    height: 280,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/06668f130b632bf4ba0dc7f492628e00/taco-confused%402x.png"
                }]
            },
            "taco-cool": {
                type: "premium",
                pack: n.taco,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/f41573409925dd066cb509a465f4b3af/taco-cool.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/f41573409925dd066cb509a465f4b3af/taco-cool.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/8f4ac7820629d5aac2e2faca5b013e4c/taco-cool%402x.png"
                }]
            },
            "taco-angry": {
                type: "premium",
                pack: n.taco,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/0787bf33623b40f2263dd9b0194c0066/taco-angry.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/0787bf33623b40f2263dd9b0194c0066/taco-angry.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/88141aecd4c8fbdc3ff11ef292b4526f/taco-angry%402x.png"
                }]
            },
            "taco-celebrate": {
                type: "premium",
                pack: n.taco,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/20b0c2f6c78ca34d7c3d00b658f3b3df/taco-celebrate.png",
                scaled: [{
                    width: 140,
                    height: 140,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/20b0c2f6c78ca34d7c3d00b658f3b3df/taco-celebrate.png"
                }, {
                    width: 280,
                    height: 280,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/905a89b9fb1f867747130360e6cbb4d4/taco-celebrate%402x.png"
                }]
            },
            "taco-robot": {
                type: "premium",
                pack: n.taco,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/c695266748c83f796b9a56ea36f5c2de/taco-robot.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/c695266748c83f796b9a56ea36f5c2de/taco-robot.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/e1ac5a98088053a8b1ae90cd8f3f056e/taco-robot%402x.png"
                }]
            },
            "taco-alert": {
                type: "premium",
                pack: n.taco,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/ccbcd6ce73f50359e71ad36316c3bcfb/taco-alert.png",
                scaled: [{
                    width: 140,
                    height: 140,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/ccbcd6ce73f50359e71ad36316c3bcfb/taco-alert.png"
                }, {
                    width: 280,
                    height: 280,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/60cf2c2b89c387f8c1ed92f301492b28/taco-alert%402x.png"
                }]
            },
            "taco-active": {
                type: "premium",
                pack: n.taco,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/e027fa08f49b43a503a1e1dea1b854ea/taco-active.png",
                scaled: [{
                    width: 140,
                    height: 140,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/e027fa08f49b43a503a1e1dea1b854ea/taco-active.png"
                }, {
                    width: 280,
                    height: 280,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/afe6f31288619ede4f82d516cad6a11e/taco-active%402x.png"
                }]
            },
            "taco-money": {
                type: "premium",
                pack: n.taco,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/60cee75a249b578892938a6a491031e6/taco-money.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/60cee75a249b578892938a6a491031e6/taco-money.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/f0130dd81ed48f6e4626cbdc233b2fda/taco-money%402x.png"
                }]
            },
            "taco-reading": {
                type: "premium",
                pack: n.taco,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/d38e25e615cbc0d15bea3fe3277e4a83/taco-reading.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/d38e25e615cbc0d15bea3fe3277e4a83/taco-reading.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/0c3110a4622a680fd4a9b63de14521da/taco-reading%402x.png"
                }]
            },
            "taco-trophy": {
                type: "premium",
                pack: n.taco,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/77785938bb3566b20d1eccb83001dddc/taco-trophy.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/77785938bb3566b20d1eccb83001dddc/taco-trophy.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/9143546ce5c8a3e43736be79803ead39/taco-trophy%402x.png"
                }]
            },
            "taco-sleeping": {
                type: "premium",
                pack: n.taco,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/42698e61c8b85ce46dd08774536b820e/taco-sleeping.png",
                scaled: [{
                    width: 140,
                    height: 140,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/42698e61c8b85ce46dd08774536b820e/taco-sleeping.png"
                }, {
                    width: 280,
                    height: 280,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/9a51d634e8521dc0e19c09db4df95d8e/taco-sleeping%402x.png"
                }]
            },
            "taco-pixel": {
                type: "premium",
                pack: n.taco,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/9044b8e8153407d9c35176baf4c41780/taco-pixel.png",
                scaled: [{
                    width: 140,
                    height: 140,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/9044b8e8153407d9c35176baf4c41780/taco-pixel.png"
                }, {
                    width: 280,
                    height: 280,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/3751a48869a42911093b6eae9d0a7f8c/taco-pixel%402x.png"
                }]
            },
            "taco-proto": {
                type: "premium",
                pack: n.taco,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/2e050937d34005636192c415252f1b91/taco-proto.png",
                scaled: [{
                    width: 140,
                    height: 140,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/2e050937d34005636192c415252f1b91/taco-proto.png"
                }, {
                    width: 280,
                    height: 280,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/51def85cdcf3c1a58cb1ab2ac3749251/taco-proto%402x.png"
                }]
            },
            "taco-embarrassed": {
                type: "premium",
                pack: n.taco,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/b84cc7c1ff4c870a78afff5645449883/taco-embarrassed.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/b84cc7c1ff4c870a78afff5645449883/taco-embarrassed.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/02663f87e33a2c79828098d1f2d9a086/taco-embarrassed%402x.png"
                }]
            },
            "taco-clean": {
                type: "premium",
                pack: n.taco,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/e6462e51e766dbf494e304ea843856d9/taco-clean.png",
                scaled: [{
                    width: 140,
                    height: 140,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/e6462e51e766dbf494e304ea843856d9/taco-clean.png"
                }, {
                    width: 280,
                    height: 280,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/7c593a77fe481b61a2cad4b74b2f8c1c/taco-clean%402x.png"
                }]
            },
            "pete-happy": {
                type: "premium",
                pack: n.pete,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/ad61d60483a6bdbea53237330ea1183b/pete-happy.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/ad61d60483a6bdbea53237330ea1183b/pete-happy.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/0663bc183a0cf0d039498cd8c5db8043/pete-happy%402x.png"
                }]
            },
            "pete-love": {
                type: "premium",
                pack: n.pete,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/e226d3edc2bc1c9439bc812f96527218/pete-love.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/e226d3edc2bc1c9439bc812f96527218/pete-love.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/6e461f2c1917d10063fb169a33bb1191/pete-love%402x.png"
                }]
            },
            "pete-broken": {
                type: "premium",
                pack: n.pete,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/e0c1fadd8cdf3173a4cf9bc93da81d97/pete-broken.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/e0c1fadd8cdf3173a4cf9bc93da81d97/pete-broken.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/6d84909328bf960bdfcab760e46c886f/pete-broken%402x.png"
                }]
            },
            "pete-alert": {
                type: "premium",
                pack: n.pete,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/90e3c39fb39d5d79e8e2310406620f59/pete-alert.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/90e3c39fb39d5d79e8e2310406620f59/pete-alert.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/3453c1a26ddd1187e56431940c7aedfc/pete-alert%402x.png"
                }]
            },
            "pete-talk": {
                type: "premium",
                pack: n.pete,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/ca098514ef3b83d1e5a736817d3a132b/pete-talk.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/ca098514ef3b83d1e5a736817d3a132b/pete-talk.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/217a5d2b04a6dea23726a7949dae9ac7/pete-talk%402x.png"
                }]
            },
            "pete-vacation": {
                type: "premium",
                pack: n.pete,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/c50c5371bb78862a587a93df287459c0/pete-vacation.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/c50c5371bb78862a587a93df287459c0/pete-vacation.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/060295310e437200bf334ff7322eede1/pete-vacation%402x.png"
                }]
            },
            "pete-confused": {
                type: "premium",
                pack: n.pete,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/0d52a88328d4c0196564b207560e953e/pete-confused.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/0d52a88328d4c0196564b207560e953e/pete-confused.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/7ff61659ad2cd4837aacd999aedcd233/pete-confused%402x.png"
                }]
            },
            "pete-shipped": {
                type: "premium",
                pack: n.pete,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/13b817ebec2282c5a7abb849056edfff/pete-shipped.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/13b817ebec2282c5a7abb849056edfff/pete-shipped.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/0d9ff936d513aae5a67c8f9653a5c49e/pete-shipped%402x.png"
                }]
            },
            "pete-busy": {
                type: "premium",
                pack: n.pete,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/ef0eb59b05378f25bb0cfae516b0615d/pete-busy.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/ef0eb59b05378f25bb0cfae516b0615d/pete-busy.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/35503951628d67da2c8aaabd49aaf769/pete-busy%402x.png"
                }]
            },
            "pete-completed": {
                type: "premium",
                pack: n.pete,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/213df9ec14509a7f06281bba7482ae61/pete-completed.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/213df9ec14509a7f06281bba7482ae61/pete-completed.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/3197b9305f52b722df47abdb84c063f8/pete-completed%402x.png"
                }]
            },
            "pete-space": {
                type: "premium",
                pack: n.pete,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/ee70c40e8a7906f3adf2323d774e8320/pete-space.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/ee70c40e8a7906f3adf2323d774e8320/pete-space.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/aa9cb8354739fb355a4abd1c977d975a/pete-space%402x.png"
                }]
            },
            "pete-sketch": {
                type: "premium",
                pack: n.pete,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/6e17baf06870f4bd1c301ede21bc5add/pete-sketch.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/6e17baf06870f4bd1c301ede21bc5add/pete-sketch.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/3808b148cca5b1ed3da001b7c13d5110/pete-sketch%402x.png"
                }]
            },
            "pete-ghost": {
                type: "premium",
                pack: n.pete,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/fcb349d429bbaaf873eef3ea64eb570c/pete-ghost.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/fcb349d429bbaaf873eef3ea64eb570c/pete-ghost.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/4a28ad313694864c5a661b964a9510ff/pete-ghost%402x.png"
                }]
            },
            "pete-award": {
                type: "premium",
                pack: n.pete,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/eb0782174fdd08d4c76a587db6bc7caf/pete-award.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/eb0782174fdd08d4c76a587db6bc7caf/pete-award.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/43dd35d5e48a876a50fc6c63f53f005e/pete-award%402x.png"
                }]
            },
            "pete-music": {
                type: "premium",
                pack: n.pete,
                url: "https://d78fikflryjgj.cloudfront.net/images/stickers/49ddddf5af19ae49ccc9c7aa9517ba62/pete-music.png",
                scaled: [{
                    width: 100,
                    height: 100,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/49ddddf5af19ae49ccc9c7aa9517ba62/pete-music.png"
                }, {
                    width: 200,
                    height: 200,
                    url: "https://d78fikflryjgj.cloudfront.net/images/stickers/df6a7a7b952e8826916f00e69b503af1/pete-music%402x.png"
                }]
            }
        }
    }, {}],
    20: [function(e, n) {
        var r, i, o, s, a, l, c = [].indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };
        r = e("jquery"), i = void 0, t(function() {
            return i = e(101)
        }), o = void 0, t(function() {
            return o = e(24)
        }), s = void 0, t(function() {
            return s = e(23)
        }), l = e("underscore"), a = void 0, t(function() {
            return a = e(111)
        }), n.exports = new(function() {
            function e() {
                this.check()
            }
            var t, n, u, d;
            return t = "notLoggedIn", n = null, u = null, d = "token" + window.location.port, e.prototype.isLoggedIn = function() {
                return n !== t
            }, e.prototype.myId = function() {
                return n
            }, e.prototype.myUsername = function() {
                var e;
                return null != (e = this.me()) ? e.get("username") : void 0
            }, e.prototype.myToken = function() {
                return u
            }, e.prototype.me = function() {
                var e, r, a, l, u, d;
                if (a = i.get("header", n), null == a && !this.isLoggedIn()) {
                    r = s.for("header"), a = new i({
                        id: t,
                        notLoggedIn: !0
                    }, {
                        modelCache: r
                    }), r.add(a), u = s._caches;
                    for (l in u) e = u[l], d = e.getCacheType(), c.call(o.fullCacheTypes, d) >= 0 && e.add(new i({
                        id: t,
                        notLoggedIn: !0
                    }, {
                        modelCache: e
                    }))
                }
                return a
            }, e.prototype.isMe = function(e) {
                return (null != e ? e.id : void 0) ? this.isMe(e.id) : e === n
            }, e.prototype.confirmed = function() {
                return this.me().get("confirmed")
            }, e.prototype.canLogIn = function() {
                var e, t;
                return !l.isEmpty(null != (e = null != (t = this.me()) ? t.get("loginTypes") : void 0) ? e : [])
            }, e.prototype.check = function() {
                this.updateToken(), null != a && a.handleLogin()
            }, e.prototype.updateToken = function() {
                return u = r.cookie(d) || "", n = u.split("/")[0] || t
            }, e.prototype.logoutPost = function() {
                return r("<form>").attr({
                    method: "post",
                    action: "/logout"
                }).append('<input name="dsc" value="' + r.cookie("dsc") + '">').css({
                    display: "none"
                }).appendTo("body").submit()
            }, e
        }())
    }, {}],
    21: [function(e, t) {
        var n;
        n = e(52), t.exports = window.IdCache = new(function() {
            function e() {
                this._shortLinkToId = {
                    Card: {},
                    Board: {}
                }, this._idCardToIdBoard = {}
            }
            return e.prototype.getId = function(e, t) {
                if (n.checkId(t)) return t;
                if (n.isShortLink(t)) return this._shortLinkToId[e][t];
                throw new Error("Not a shortLink or id: " + t)
            }, e.prototype.setId = function(e, t, r) {
                if (!n.checkId(r)) throw new Error("Not an id: " + r);
                if (!n.isShortLink(t)) throw new Error("Not a shortLink: " + t);
                return this._shortLinkToId[e][t] = r
            }, e.prototype.setCardId = function(e, t) {
                return this.setId("Card", e, t)
            }, e.prototype.setBoardId = function(e, t) {
                return this.setId("Board", e, t)
            }, e.prototype.setBoardIdForCard = function(e, t) {
                return this._idCardToIdBoard[this.getCardId(e)] = this.getBoardId(t)
            }, e.prototype.getCardId = function(e) {
                return this.getId("Card", e)
            }, e.prototype.getBoardId = function(e) {
                return this.getId("Board", e)
            }, e.prototype.getBoardIdForCard = function(e) {
                return this._idCardToIdBoard[this.getCardId(e)]
            }, e
        }())
    }, {}],
    22: [function(e, n) {
        var r, i, o, s, a, l, c = [].slice;
        r = e("jquery"), i = e(21), o = void 0, t(function() {
            return o = e(25)
        }), s = e("trello-markdown"), l = e("underscore"), a = e(269), n.exports = new(function() {
            function e() {}
            return e.prototype._knownUrls = [{
                name: "Trello Board",
                match: /^https:\/\/trello\.com\/b\/([a-zA-Z0-9]{8})(?:$|\/.*)/,
                previewClass: "attachment-thumbnail-preview-trello-logo",
                icon: "https://d78fikflryjgj.cloudfront.net/images/services/e1b7406bd79656fdd26ca46dc8963bee/trello.png",
                text: function(e, t, n) {
                    var s, a, l, c;
                    return s = e[0], c = e[1], a = function() {
                        var e;
                        return null != (e = t.get("Board", i.getBoardId(c))) ? e.get("name") : void 0
                    }, null != (l = a()) ? l : (o.for(t).loadBoardNames([c], function() {
                        var e;
                        return e = r("#" + n), null != (l = a()) ? e.text(l) : void 0
                    }), s)
                }
            }, {
                name: "Trello Card",
                match: /^https:\/\/trello\.com\/c\/([a-zA-Z0-9]{8})(?:$|\/.*)/,
                previewClass: "attachment-thumbnail-preview-trello-logo",
                icon: "https://d78fikflryjgj.cloudfront.net/images/services/e1b7406bd79656fdd26ca46dc8963bee/trello.png",
                text: function(e, t, n) {
                    var s, a, l, c;
                    return s = e[0], c = e[1], a = function() {
                        var e;
                        return null != (e = t.get("Card", i.getCardId(c))) ? e.get("name") : void 0
                    }, null != (l = a()) ? l : (o.for(t).loadCardData(c, function() {
                        var e;
                        return e = r("#" + n), null != (l = a()) ? e.text(l) : void 0
                    }), s)
                }
            }, {
                name: "FogBugz Case",
                match: /^https?:\/\/([^\.]+)\.fogbugz\.com\/(?:f\/cases\/|default\.asp\?)([\d]+)/,
                previewClass: "attachment-thumbnail-preview-fogbugz-logo",
                icon: "https://d78fikflryjgj.cloudfront.net/images/services/a1385c9ce999f8389ec7dc43c1b24b2c/fogbugz.png",
                text: function(e) {
                    var t, n, r;
                    return t = e[0], r = e[1], n = e[2], "Case " + n
                }
            }, {
                name: "Kiln Commit",
                match: /^https?:\/\/([^\.]+)\.(?:fogbugz\.com\/kiln|kilnhg\.com)\/Code\/([^\/]+)\/([^\/]+)\/([^\/]+)\/History\/([^\/]+)/,
                previewClass: "attachment-thumbnail-preview-kiln-logo",
                icon: "https://d78fikflryjgj.cloudfront.net/images/services/6c1d65d72873b01d740adfbb9de22234/kiln.png",
                text: function(e) {
                    var t, n, r, i, o, s;
                    return t = e[0], s = e[1], i = e[2], o = e[3], n = e[4], r = e[5], "Group" === o ? i + " » " + n + ": " + r : i + " » " + o + " » " + n + ": " + r
                },
                dataUrl: function(e) {
                    return e.replace(/\/Code\//, "/trello/Code/")
                },
                _processJSON: function(e, t) {
                    var n, r, i, o, a;
                    if (null != t.reviews)
                        for (a = t.reviews, i = 0, o = a.length; o > i; i++) r = a[i], r.status = function() {
                            switch (r.sStatus) {
                                case "active":
                                    return "In Review";
                                case "rejected":
                                    return "Review Rejected";
                                case "needswork":
                                    return "Review Needs Work";
                                case "abandoned":
                                    return "Review Abandoned";
                                case "approved":
                                    return "Review Approved"
                            }
                        }(), r.url = e.replace(/\/Code\/.*$/, "/Review/" + r.sReview);
                    return t.sAuthor && (t.author = t.sAuthor.replace(/\s<.*$/, "")), t.hash && (t.shortHash = t.hash.substr(0, 6)), t.sDescription && (n = new s({
                        restrict: {
                            block: ["paragraph", "newline"],
                            inline: ["break", "email", "emoji", "url"]
                        }
                    }), t.shortCommitMessage = t.sDescription.split("\n")[0], t.commitMessageHtml = n.format(t.sDescription).output), t.url = e, t