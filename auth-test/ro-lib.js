var curity = { token: { assistant: [], proxy: [] }, debug: !1 };
curity.token.assistant = function (e) {
    var v = void 0, K = 8E3; "console" in window && (v = console); var h = function () { v && curity.debug && v.log(arguments) }, b = function () { v && v.warn(arguments) }, r = function () { v && v.error(arguments) }, n = function (b, c) { return void 0 === b ? c : b }, L = function (p, c) {
        p instanceof RegExp ? c.push(p) : "string" === typeof p ? 0 >= p.length ? b("Not adding empty regexp to white-list") : ("^" !== p.charAt(0) && (h("Prepending start-of-string check to regexp '" + p + "'; to circumvent this, pass a RegExp object instead."), p = "^" +
            p), "$" !== p.charAt(p.length - 1) && (h("Appending end-of-string check to regexp '" + p + "'; to circumvent this, pass a RegExp object instead."), p += "$"), c.push(new RegExp(p))) : b("Not adding regexp of unknown type to white-list", p)
    }, g = !1, t = void 0, w = 0, u = {}, M = !1, y = []; if (e.hasOwnProperty("autoPrepareJqueryAjaxForOrigins")) { var E = e.autoPrepareJqueryAjaxForOrigins, M = !0; "string" === typeof E ? L(E, y) : Array.isArray(E) ? E.forEach(function (b) { L(b, y) }) : b("'settings.autoPrepareJqueryAjaxForOrigins' was of unknown type; not populating jQuery Ajax origin white-list") } var q =
        curity.token.constants.hostUrl, N = q + curity.token.constants.token_endpoint, X = q + curity.token.constants.revoke_endpoint, S = q + curity.token.constants.logout_endpoint, z = function (b, c) { var d = {}; if (void 0 !== b) for (var a in b) b.hasOwnProperty(a) && (d[a] = b[a]); if (void 0 !== c) for (a in c) c.hasOwnProperty(a) && (d[a] = c[a]); return d }, x = function (b, c) { for (var d in b) { var a = b[d]; Array.isArray(a) ? a.forEach(function (a) { c = O(d, a, c) }) : c = O(d, a, c) } return c }, O = function (b, c, d) {
            d = -1 === d.indexOf("?") ? d + "?" : d + "\x26"; return d + b + "\x3d" +
                c
        }, F = function (b, c) { void 0 !== b.clientId && (c.client_id = b.clientId); c.for_origin = b.for_origin || window.location.origin }, C = function (b) {
            b = z(e, b); var c = {}, d = N; F(b, c); void 0 !== b.reuse && (c.reuse = new Boolean(b.reuse)); if (void 0 !== b.scope) { var a = ""; "string" === typeof b.scope ? a = b.scope : Array.isArray(b.scope) && (a = b.scope.join(" ")); c.scope = a } void 0 !== b.force_auth && (c.forceAuthN = new Boolean(b.force_auth)); if (void 0 !== b.acr) if (a = [], c.acr = a, "string" === typeof b.acr) a.push(b.acr); else if (Array.isArray(b.acr)) for (var f in b.acr) a.push(b.acr[f]);
            void 0 !== b.freshness && (c.auth_refresh = b.freshness); return d = x(c, d)
        }, Y = function (b) { b = z(e, b); var c = {}, d = X; F(b, c); return d = x(c, d) }, T = function (b) { b = z(e, b); var c = {}, d = S; F(b, c); return d = x(c, d) }; e.iframeSettings = void 0 === e.iframeSettings ? {} : e.iframeSettings; var P = {
            style: n(e.iframeSettings.style, "z-index:100;position:fixed;top:20px;left:50%;margin-left:-160px;border:0;overflow:hidden"), width: n(e.iframeSettings.width, "400"), height: n(e.iframeSettings.height, "650"), scrolling: n(e.iframeSettings.scrolling, "no"),
            targetElementId: n(e.iframeSettings.targetElementId, void 0)
        }; e.backdropSettings = void 0 === e.backdropSettings ? {} : e.backdropSettings; e.backdropSettings.visible = n(e.backdropSettings.visible, !0); e.backdropSettings.style = n(e.backdropSettings.style, "width:100%;height:100%;position:fixed;top:0;left:0;z-index:50;background:#000;opacity: 0.4;filter: alpha(opacity\x3d40);"); e.backdropSettings.backdropClass = n(e.backdropSettings.backdropClass, ""); e.for_origin = void 0 === e.for_origin ? window.location.protocol + "//" +
            window.location.host : e.for_origin; e.closeButtonSettings = void 0 === e.closeButtonSettings ? {} : e.closeButtonSettings; e.closeButtonSettings.visible = n(e.closeButtonSettings.visible, !1); e.closeButtonSettings.style = n(e.closeButtonSettings.style, "position: absolute; top: 5px; right: 10px; z-index: 200;"); e.closeButtonSettings.wrapperClass = n(e.closeButtonSettings.wrapperClass, ""); e.closeButtonSettings.wrapperStyle = n(e.closeButtonSettings.wrapperStyle, "width:400px; height:650px; z-index:100;position:fixed;top:20px;left:50%;margin-left:-160px;overflow:hidden");
    e.closeButtonSettings.button = n(e.closeButtonSettings.button, '\x3cbutton type\x3d"button" class\x3d"close" aria-label\x3d"Close"\x3e\u00d7\x3c/button\x3e'); var A = function (b, c, d) {
        var a = z(P, void 0 !== d ? d.iframeSettings : {}); d = document.createElement("iframe"); !0 === c ? (d.width = "0", d.height = "0", d.setAttribute("style", "display:none;")) : (d.width = a.width, d.height = a.height, d.scrolling = a.scrolling, d.setAttribute("style", a.style)); d.setAttribute("src", b); d.setAttribute("id", "authLoginChannel"); return e.closeButtonSettings.visible &&
            !c ? (b = document.createElement("div"), b.setAttribute("id", "authIframeWrapper"), b.setAttribute("style", e.closeButtonSettings.wrapperStyle), b.setAttribute("class", e.closeButtonSettings.wrapperClass), b.innerHTML = e.closeButtonSettings.button, b.firstElementChild.setAttribute("style", e.closeButtonSettings.style), b.appendChild(d), b) : d
    }, G = function (b, c) { var d; d = z(P, void 0 !== c ? c.iframeSettings : {}).targetElementId; d = void 0 !== d ? document.getElementById(d) : document.getElementsByTagName("body")[0]; d.appendChild(b) },
        m = function () { var b = document.createElement("div"); b.setAttribute("style", e.backdropSettings.style); b.setAttribute("id", "authBackDrop"); b.setAttribute("class", e.backdropSettings.backdropClass); return b }, B = function (b) { var c, d, a = {}, f; for (f in b) b.hasOwnProperty(f) && ("access_token" === f ? c = b[f] : "expires_in" === f ? d = b[f] : "status" !== f && (a[f] = b[f])); g = !0; t = c; u = a; w = (new Date).getTime() / 1E3 + parseInt(d); h("Token will expire at: " + w); M && (window.jQuery || "undefined" !== typeof jQuery) && U(jQuery) }, V = function (b) {
            var c =
                Q.defer(), d = A(C(b), !0, b), a = function () { h("Clearing login items"); void 0 !== d && (d.parentNode.removeChild(d), d = void 0); window.removeEventListener("message", k, !1) }, f = setTimeout(function () { a(); h("Timeout occurred, clearing login items"); c.reject({ error_description: "Login timeout", error_code: 1 }) }, K), k = function (b) {
                    a(); clearTimeout(f); h("Received login event: ", b.data); b.origin !== q ? c.reject({ error_description: "Failed to login" }) : "authenticating" === b.data ? c.reject({
                        error_description: "No SSO Session was present, the user needs to authenticate",
                        error_code: 1
                    }) : "success" === b.data.status ? (B(b.data), h("Tokens found, clearing timeout, returning tokens"), c.resolve({ token: t, expires: w })) : "error" === b.data.status ? (b = b.data.error_description, h("Data contained error status, failing..."), c.reject({ error_description: "Error when authenticating." + (void 0 !== b ? " Error from server: " + b : "") })) : (h("Data received did not contain success status, failing..."), c.reject({ error_description: "Error when authenticating." }))
                }; window.addEventListener("message", k, !1); G(d,
                    b); h("Waiting for authentication event from server..."); return c.promise
        }, H = function (b) {
            var c = Q.defer(), d = A(C(b), !1, b), a = m(), f = function (a) { a = a || window.event; 27 === a.keyCode && (l(), c.reject({ error_description: "User aborted login", error_code: 2 })) }, k = function (a) { a = a || window.event; a.target !== document.getElementById("authLoginChannel") && (l(), c.reject({ error_description: "User aborted login", error_code: 2 })) }, l = function () {
                window.removeEventListener("message", g, !1); document.removeEventListener("onkeydown", f,
                    !1); void 0 !== a && a.removeEventListener("onclick", k, !1); h("Clearing login items"); void 0 !== d && (d.parentNode.removeChild(d), d = void 0); e.backdropSettings.visible && void 0 !== a && (a.parentNode.removeChild(a), a = void 0)
            }, g = function (a) {
                h("Received login event: ", a.data); a.origin !== q ? (l(), c.reject({ error_description: "Failed to login, received unexpected event from other event source" })) : "authenticating" !== a.data && ("success" === a.data.status ? (l(), B(a.data), h("Tokens found, clearing login, returning tokens"), c.resolve({
                    token: t,
                    expires: w
                })) : "error" === a.data.status ? (l(), a = a.data.error_description, h("Data contained error status, failing..."), c.reject({ error_description: "Error when authenticating." + (void 0 !== a ? " Error from server: " + a : "") })) : (l(), h("Data received did not contain success status, failing..."), c.reject({ error_description: "Error when authenticating, unexpected event received." })))
            }; window.addEventListener("message", g, !1); e.backdropSettings.visible && (document.body.appendChild(a), "static" !== e.backdropSettings.visible &&
                (a.onclick = k), e.closeButtonSettings.visible && (d.firstElementChild.onclick = k)); G(d, b); document.onkeydown = f; h("Waiting for authentication event from server..."); return c.promise
        }, I = function (g, c) { b("This function is deprecated. The value of 'useFallback' is ignored."); return I(c) }, R = function () { return void 0 === t ? (r("Authentication not performed, or not successful, no token available"), "") : "Bearer " + t }, W = function (b) { b.setRequestHeader("Authorization", R()) }, U = function (b, c) {
            b.ajaxSetup({
                beforeSend: function (b,
                    a) { var f; if ((f = g) && !(f = !!c)) a: { f = a.url; for (var k in y) { var l = y[k]; if (l.test(f)) { h("Origin '" + f + "' found in white-list ('" + l + "')"); f = !0; break a } } h("Origin '" + f + "' not in white-list"); f = !1 } f && (h("Inserting Authorization header: " + R()), W(b)) }
            })
        }, J = function (b) {
            var c = Q.defer(), d = A(Y(b), !0, b); G(d, b); var a = function (b) {
                h("Received begin revocation event: ", b); window.removeEventListener("message", a, !1); b.origin !== q ? c.reject({ error_description: "Failed to revoke tokens, received unexpected event from other event source" }) :
                    "loaded" === b.data ? (h("Tokens to revoke sent"), window.addEventListener("message", f, !1), d.contentWindow.postMessage(t || "", q)) : (h("Data received did not contain expected 'loaded' message, failing..."), c.reject({ error_description: "Error when revoking" }))
            }, f = function (a) {
                h("Received revocation event: ", a); h("Clearing revocation items"); void 0 !== d && (d.parentNode.removeChild(d), d = void 0); window.removeEventListener("message", f, !1); a.origin !== q ? c.reject({ error_description: "Failed to revoke tokens, received unexpected event from other event source" }) :
                    "revoked" === a.data ? (g = !1, t = void 0, w = 0, u = {}, h("Tokens revoked"), c.resolve()) : "error" === a.data.status ? (a = a.data.error_description, h("Data contained error status, failing..."), c.reject({ error_description: "Error when revoking." + (void 0 !== a ? " Error from server: " + a : "") })) : (h("Data received did not contain success status, failing..."), c.reject({ error_description: "Error when revoking" }))
            }; window.addEventListener("message", a, !1); h("Logout sequence initiated"); return c.promise
        }, D = function (b) {
            var c = Q.defer(),
                d = A(T(b), !0, b); G(d, b); var a = function (f) { h("Received logout event: ", f.data); h("Clearing logout items"); void 0 !== d && (d.parentNode.removeChild(d), d = void 0); window.removeEventListener("message", a, !1); f.origin !== q ? c.reject({ error_description: "Failed to logout, received unexpected event from other event source" }) : "logged_out" === f.data ? (g = !1, t = void 0, w = 0, u = {}, h("Session logged out"), c.resolve()) : (h("Data received did not contain success status, failing..."), c.reject({ error_description: "Error when logging out" })) };
            window.addEventListener("message", a, !1); return c.promise
        }; return {
            fetchTokensOrLogin: I, loginIfRequired: function (b) { K = 8E3; var c = Q.defer(), d = V(b); d.fail(function (a) { a = a.error_description; void 0 !== a ? h("First login failed with error description: " + a) : h("First login failed with no error description"); h("Retrying with popup"); a = H(b); a.fail(function (a) { h("Popover login failed, abort"); c.reject(a) }); a.then(function (a) { c.resolve(a) }) }); d.then(function (a) { c.resolve(a) }); h("Login sequence initiated"); return c.promise },
            login: H, fetchTokens: V, isAuthenticated: function () { return void 0 !== t }, isExpired: function () { var b = (new Date).getTime() / 1E3; return w <= b }, getAuthHeader: R, prepareXHR: W, prepareJQuery: U, getAdditionalData: function () { return u }, revokeTokens: J, logout: function (b) { var c = Q.defer(), d = function (a) { c.reject(a) }; J(b).then(function () { D(b).then(function () { c.resolve() }).fail(d) }).fail(d); return c.promise }
        }
};
(function (e) { if ("function" === typeof bootstrap) bootstrap("promise", e); else if ("object" === typeof exports && "object" === typeof module) module.exports = e(); else if ("function" === typeof define && define.amd) define(e); else if ("undefined" !== typeof ses) ses.ok() && (ses.makeQ = e); else if ("undefined" !== typeof self) self.Q = e(); else throw Error("This environment was not anticipated by Q. Please file a bug."); })(function () {
    function e(a) { return function () { return G.apply(a, arguments) } } function v(a, f) {
        if (C && f.stack && "object" ===
            typeof a && null !== a && a.stack && -1 === a.stack.indexOf("From previous event:")) { for (var b = [], l = f; l; l = l.source)l.stack && b.unshift(l.stack); b.unshift(a.stack); for (var b = b.join("\nFrom previous event:\n").split("\n"), l = [], c = 0; c < b.length; ++c) { var g = b[c], e; if (e = K(g)) { var h = e[1]; e = e[0] === T && h >= Y && h <= d } else e = !1; e || (e = g, e = -1 !== e.indexOf("(module.js:") || -1 !== e.indexOf("(node.js:")); e || !g || l.push(g) } b = l.join("\n"); a.stack = b }
    } function K(a) {
        var b = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(a); if (b || (b = /at ([^ ]+):(\d+):(?:\d+)$/.exec(a))) return [b[1],
        Number(b[2])]; if (a = /.*@(.+):(\d+)$/.exec(a)) return [a[1], Number(a[2])]
    } function h() { if (C) try { throw Error(); } catch (b) { var a = b.stack.split("\n"), a = 0 < a[0].indexOf("@") ? a[1] : a[2]; if (a = K(a)) return T = a[0], a[1] } } function b(a) { return a instanceof g ? a : M(a) ? X(a) : N(a) } function r() {
        function a(a) { l = a; d.source = a; B(f, function (f, k) { b.nextTick(function () { a.promiseDispatch.apply(a, k) }) }, void 0); k = f = void 0 } var f = [], k = [], l, c = I(r.prototype), d = I(g.prototype); d.promiseDispatch = function (a, c, d) {
            var e = m(arguments); f ? (f.push(e),
                "when" === c && d[1] && k.push(d[1])) : b.nextTick(function () { l.promiseDispatch.apply(l, e) })
        }; d.valueOf = function () { if (f) return d; var a = w(l); u(a) && (l = a); return a }; d.inspect = function () { return l ? l.inspect() : { state: "pending" } }; if (b.longStackSupport && C) try { throw Error(); } catch (e) { d.stack = e.stack.substring(e.stack.indexOf("\n") + 1) } c.promise = d; c.resolve = function (f) { l || a(b(f)) }; c.fulfill = function (b) { l || a(N(b)) }; c.reject = function (b) { l || a(q(b)) }; c.notify = function (a) {
            l || B(k, function (f, k) { b.nextTick(function () { k(a) }) },
                void 0)
        }; return c
    } function n(a) { if ("function" !== typeof a) throw new TypeError("resolver must be a function."); var b = r(); try { a(b.resolve, b.reject, b.notify) } catch (k) { b.reject(k) } return b.promise } function L(a) { return n(function (f, k) { for (var c = 0, d = a.length; c < d; c++)b(a[c]).then(f, k) }) } function g(a, b, k) {
        void 0 === b && (b = function (a) { return q(Error("Promise does not support operation: " + a)) }); void 0 === k && (k = function () { return { state: "unknown" } }); var c = I(g.prototype); c.promiseDispatch = function (k, d, e) {
            var g; try {
                g =
                    a[d] ? a[d].apply(c, e) : b.call(c, d, e)
            } catch (h) { g = q(h) } k && k(g)
        }; if (c.inspect = k) { var d = k(); "rejected" === d.state && (c.exception = d.reason); c.valueOf = function () { var a = k(); return "pending" === a.state || "rejected" === a.state ? c : a.value } } return c
    } function t(a, f, k, c) { return b(a).then(f, k, c) } function w(a) { if (u(a)) { var b = a.inspect(); if ("fulfilled" === b.state) return b.value } return a } function u(a) { return a instanceof g } function M(a) { return a === Object(a) && "function" === typeof a.then } function y() {
        D.length = 0; p.length = 0; c ||
            (c = !0)
    } function E(a, b) { c && (p.push(a), b && "undefined" !== typeof b.stack ? D.push(b.stack) : D.push("(no stack) " + b)) } function q(a) { var b = g({ when: function (b) { if (b && c) { var f = V(p, this); -1 !== f && (p.splice(f, 1), D.splice(f, 1)) } return b ? b(a) : this } }, function () { return this }, function () { return { state: "rejected", reason: a } }); E(b, a); return b } function N(a) {
        return g({
            when: function () { return a }, get: function (b) { return a[b] }, set: function (b, k) { a[b] = k }, "delete": function (b) { delete a[b] }, post: function (b, k) {
                return null === b || void 0 ===
                    b ? a.apply(void 0, k) : a[b].apply(a, k)
            }, apply: function (b, k) { return a.apply(b, k) }, keys: function () { return W(a) }
        }, void 0, function () { return { state: "fulfilled", value: a } })
    } function X(a) { var f = r(); b.nextTick(function () { try { a.then(f.resolve, f.reject, f.notify) } catch (b) { f.reject(b) } }); return f.promise } function S(a, f, k) { return b(a).spread(f, k) } function z(a, f, k) { return b(a).dispatch(f, k) } function x(a) {
        return t(a, function (a) {
            var b = 0, c = r(); B(a, function (d, e, g) {
                var h; u(e) && "fulfilled" === (h = e.inspect()).state ? a[g] = h.value :
                    (++b, t(e, function (d) { a[g] = d; 0 === --b && c.resolve(a) }, c.reject, function (a) { c.notify({ index: g, value: a }) }))
            }, void 0); 0 === b && c.resolve(a); return c.promise
        })
    } function O(a) { if (0 === a.length) return b.resolve(); var f = b.defer(), k = 0; B(a, function (b, c, d) { b = a[d]; k++; t(b, function (a) { f.resolve(a) }, function () { k--; 0 === k && f.reject(Error("Can't get fulfillment value from any promise, all promises were rejected.")) }, function (a) { f.notify({ index: d, value: a }) }) }, void 0); return f.promise } function F(a) {
        return t(a, function (a) {
            a =
                H(a, b); return t(x(H(a, function (a) { return t(a, P, P) })), function () { return a })
        })
    } var C = !1; try { throw Error(); } catch (a) { C = !!a.stack } var Y = h(), T, P = function () { }, A = function () {
        function a() { for (; b.next;) { b = b.next; var k = b.task; b.task = void 0; var d = b.domain; d && (b.domain = void 0, d.enter()); try { k() } catch (g) { if (e) throw d && d.exit(), setTimeout(a, 0), d && d.enter(), g; setTimeout(function () { throw g; }, 0) } d && d.exit() } c = !1 } var b = { task: void 0, next: null }, k = b, c = !1, d = void 0, e = !1; A = function (a) {
            k = k.next = {
                task: a, domain: e && process.domain,
                next: null
            }; c || (c = !0, d())
        }; if ("undefined" !== typeof process && process.nextTick) e = !0, d = function () { process.nextTick(a) }; else if ("function" === typeof setImmediate) d = "undefined" !== typeof window ? setImmediate.bind(window, a) : function () { setImmediate(a) }; else if ("undefined" !== typeof MessageChannel) { var g = new MessageChannel; g.port1.onmessage = function () { d = h; g.port1.onmessage = a; a() }; var h = function () { g.port2.postMessage(0) }, d = function () { setTimeout(a, 0); h() } } else d = function () { setTimeout(a, 0) }; return A
    }(), G = Function.call,
        m = e(Array.prototype.slice), B = e(Array.prototype.reduce || function (a, b) { var c = 0, d = this.length; if (1 === arguments.length) { do { if (c in this) { b = this[c++]; break } if (++c >= d) throw new TypeError; } while (1) } for (; c < d; c++)c in this && (b = a(b, this[c], c)); return b }), V = e(Array.prototype.indexOf || function (a) { for (var b = 0; b < this.length; b++)if (this[b] === a) return b; return -1 }), H = e(Array.prototype.map || function (a, b) { var c = this, d = []; B(c, function (e, g, h) { d.push(a.call(b, g, h, c)) }, void 0); return d }), I = Object.create || function (a) {
            function b() { }
            b.prototype = a; return new b
        }, R = e(Object.prototype.hasOwnProperty), W = Object.keys || function (a) { var b = [], c; for (c in a) R(a, c) && b.push(c); return b }, U = e(Object.prototype.toString), J; J = "undefined" !== typeof ReturnValue ? ReturnValue : function (a) { this.value = a }; b.resolve = b; b.nextTick = A; b.longStackSupport = !1; "object" === typeof process && process && process.env && process.env.Q_DEBUG && (b.longStackSupport = !0); b.defer = r; r.prototype.makeNodeResolver = function () {
            var a = this; return function (b, c) {
                b ? a.reject(b) : 2 < arguments.length ?
                    a.resolve(m(arguments, 1)) : a.resolve(c)
            }
        }; b.Promise = n; b.promise = n; n.race = L; n.all = x; n.reject = q; n.resolve = b; b.passByCopy = function (a) { return a }; g.prototype.passByCopy = function () { return this }; b.join = function (a, f) { return b(a).join(f) }; g.prototype.join = function (a) { return b([this, a]).spread(function (a, b) { if (a === b) return a; throw Error("Can't join: not the same: " + a + " " + b); }) }; b.race = L; g.prototype.race = function () { return this.then(b.race) }; b.makePromise = g; g.prototype.toString = function () { return "[object Promise]" };
    g.prototype.then = function (a, f, c) {
        function d(b) { try { return "function" === typeof a ? a(b) : b } catch (f) { return q(f) } } function e(a) { if ("function" === typeof f) { v(a, g); try { return f(a) } catch (b) { return q(b) } } return q(a) } var g = this, h = r(), m = !1; b.nextTick(function () { g.promiseDispatch(function (a) { m || (m = !0, h.resolve(d(a))) }, "when", [function (a) { m || (m = !0, h.resolve(e(a))) }]) }); g.promiseDispatch(void 0, "when", [void 0, function (a) {
            var f, d = !1; try { f = "function" === typeof c ? c(a) : a } catch (e) {
                if (d = !0, b.onerror) b.onerror(e); else throw e;
            } d || h.notify(f)
        }]); return h.promise
    }; b.tap = function (a, f) { return b(a).tap(f) }; g.prototype.tap = function (a) { a = b(a); return this.then(function (b) { return a.fcall(b).thenResolve(b) }) }; b.when = t; g.prototype.thenResolve = function (a) { return this.then(function () { return a }) }; b.thenResolve = function (a, f) { return b(a).thenResolve(f) }; g.prototype.thenReject = function (a) { return this.then(function () { throw a; }) }; b.thenReject = function (a, f) { return b(a).thenReject(f) }; b.nearer = w; b.isPromise = u; b.isPromiseAlike = M; b.isPending =
        function (a) { return u(a) && "pending" === a.inspect().state }; g.prototype.isPending = function () { return "pending" === this.inspect().state }; b.isFulfilled = function (a) { return !u(a) || "fulfilled" === a.inspect().state }; g.prototype.isFulfilled = function () { return "fulfilled" === this.inspect().state }; b.isRejected = function (a) { return u(a) && "rejected" === a.inspect().state }; g.prototype.isRejected = function () { return "rejected" === this.inspect().state }; var D = [], p = [], c = !0; b.resetUnhandledRejections = y; b.getUnhandledReasons = function () { return D.slice() };
    b.stopUnhandledRejectionTracking = function () { y(); c = !1 }; y(); b.reject = q; b.fulfill = N; b.master = function (a) { return g({ isDef: function () { } }, function (b, c) { return z(a, b, c) }, function () { return b(a).inspect() }) }; b.spread = S; g.prototype.spread = function (a, b) { return this.all().then(function (b) { return a.apply(void 0, b) }, b) }; b.async = function (a) {
        return function () {
            function f(a, f) {
                var g; if ("undefined" === typeof StopIteration) { try { g = c[a](f) } catch (h) { return q(h) } return g.done ? b(g.value) : t(g.value, d, e) } try { g = c[a](f) } catch (h) {
                    return "[object StopIteration]" ===
                        U(h) || h instanceof J ? b(h.value) : q(h)
                } return t(g, d, e)
            } var c = a.apply(this, arguments), d = f.bind(f, "next"), e = f.bind(f, "throw"); return d()
        }
    }; b.spawn = function (a) { b.done(b.async(a)()) }; b["return"] = function (a) { throw new J(a); }; b.promised = function (a) { return function () { return S([this, x(arguments)], function (b, c) { return a.apply(b, c) }) } }; b.dispatch = z; g.prototype.dispatch = function (a, f) { var c = this, d = r(); b.nextTick(function () { c.promiseDispatch(d.resolve, a, f) }); return d.promise }; b.get = function (a, f) {
        return b(a).dispatch("get",
            [f])
    }; g.prototype.get = function (a) { return this.dispatch("get", [a]) }; b.set = function (a, f, c) { return b(a).dispatch("set", [f, c]) }; g.prototype.set = function (a, b) { return this.dispatch("set", [a, b]) }; b.del = b["delete"] = function (a, f) { return b(a).dispatch("delete", [f]) }; g.prototype.del = g.prototype["delete"] = function (a) { return this.dispatch("delete", [a]) }; b.mapply = b.post = function (a, f, c) { return b(a).dispatch("post", [f, c]) }; g.prototype.mapply = g.prototype.post = function (a, b) { return this.dispatch("post", [a, b]) }; b.send =
        b.mcall = b.invoke = function (a, f) { return b(a).dispatch("post", [f, m(arguments, 2)]) }; g.prototype.send = g.prototype.mcall = g.prototype.invoke = function (a) { return this.dispatch("post", [a, m(arguments, 1)]) }; b.fapply = function (a, f) { return b(a).dispatch("apply", [void 0, f]) }; g.prototype.fapply = function (a) { return this.dispatch("apply", [void 0, a]) }; b["try"] = b.fcall = function (a) { return b(a).dispatch("apply", [void 0, m(arguments, 1)]) }; g.prototype.fcall = function () { return this.dispatch("apply", [void 0, m(arguments)]) }; b.fbind =
            function (a) { var f = b(a), c = m(arguments, 1); return function () { return f.dispatch("apply", [this, c.concat(m(arguments))]) } }; g.prototype.fbind = function () { var a = this, b = m(arguments); return function () { return a.dispatch("apply", [this, b.concat(m(arguments))]) } }; b.keys = function (a) { return b(a).dispatch("keys", []) }; g.prototype.keys = function () { return this.dispatch("keys", []) }; b.all = x; g.prototype.all = function () { return x(this) }; b.any = O; g.prototype.any = function () { return O(this) }; b.allResolved = function (a, b, c) {
                return function () {
                    "undefined" !==
                        typeof console && "function" === typeof console.warn && console.warn(b + " is deprecated, use " + c + " instead.", Error("").stack); return a.apply(a, arguments)
                }
            }(F, "allResolved", "allSettled"); g.prototype.allResolved = function () { return F(this) }; b.allSettled = function (a) { return b(a).allSettled() }; g.prototype.allSettled = function () { return this.then(function (a) { return x(H(a, function (a) { function c() { return a.inspect() } a = b(a); return a.then(c, c) })) }) }; b.fail = b["catch"] = function (a, c) { return b(a).then(void 0, c) }; g.prototype.fail =
                g.prototype["catch"] = function (a) { return this.then(void 0, a) }; b.progress = function (a, c) { return b(a).then(void 0, void 0, c) }; g.prototype.progress = function (a) { return this.then(void 0, void 0, a) }; b.fin = b["finally"] = function (a, c) { return b(a)["finally"](c) }; g.prototype.fin = g.prototype["finally"] = function (a) { a = b(a); return this.then(function (b) { return a.fcall().then(function () { return b }) }, function (b) { return a.fcall().then(function () { throw b; }) }) }; b.done = function (a, c, d, e) { return b(a).done(c, d, e) }; g.prototype.done =
                    function (a, c, d) { var e = function (a) { b.nextTick(function () { v(a, g); if (b.onerror) b.onerror(a); else throw a; }) }, g = a || c || d ? this.then(a, c, d) : this; "object" === typeof process && process && process.domain && (e = process.domain.bind(e)); g.then(void 0, e) }; b.timeout = function (a, c, d) { return b(a).timeout(c, d) }; g.prototype.timeout = function (a, b) {
                        var c = r(), d = setTimeout(function () { b && "string" !== typeof b || (b = Error(b || "Timed out after " + a + " ms"), b.code = "ETIMEDOUT"); c.reject(b) }, a); this.then(function (a) { clearTimeout(d); c.resolve(a) },
                            function (a) { clearTimeout(d); c.reject(a) }, c.notify); return c.promise
                    }; b.delay = function (a, c) { void 0 === c && (c = a, a = void 0); return b(a).delay(c) }; g.prototype.delay = function (a) { return this.then(function (b) { var c = r(); setTimeout(function () { c.resolve(b) }, a); return c.promise }) }; b.nfapply = function (a, c) { return b(a).nfapply(c) }; g.prototype.nfapply = function (a) { var b = r(); a = m(a); a.push(b.makeNodeResolver()); this.fapply(a).fail(b.reject); return b.promise }; b.nfcall = function (a) { var c = m(arguments, 1); return b(a).nfapply(c) };
    g.prototype.nfcall = function () { var a = m(arguments), b = r(); a.push(b.makeNodeResolver()); this.fapply(a).fail(b.reject); return b.promise }; b.nfbind = b.denodeify = function (a) { var c = m(arguments, 1); return function () { var d = c.concat(m(arguments)), e = r(); d.push(e.makeNodeResolver()); b(a).fapply(d).fail(e.reject); return e.promise } }; g.prototype.nfbind = g.prototype.denodeify = function () { var a = m(arguments); a.unshift(this); return b.denodeify.apply(void 0, a) }; b.nbind = function (a, c) {
        var d = m(arguments, 2); return function () {
            var e =
                d.concat(m(arguments)), g = r(); e.push(g.makeNodeResolver()); b(function () { return a.apply(c, arguments) }).fapply(e).fail(g.reject); return g.promise
        }
    }; g.prototype.nbind = function () { var a = m(arguments, 0); a.unshift(this); return b.nbind.apply(void 0, a) }; b.nmapply = b.npost = function (a, c, d) { return b(a).npost(c, d) }; g.prototype.nmapply = g.prototype.npost = function (a, b) { var c = m(b || []), d = r(); c.push(d.makeNodeResolver()); this.dispatch("post", [a, c]).fail(d.reject); return d.promise }; b.nsend = b.nmcall = b.ninvoke = function (a,
        c) { var d = m(arguments, 2), e = r(); d.push(e.makeNodeResolver()); b(a).dispatch("post", [c, d]).fail(e.reject); return e.promise }; g.prototype.nsend = g.prototype.nmcall = g.prototype.ninvoke = function (a) { var b = m(arguments, 1), c = r(); b.push(c.makeNodeResolver()); this.dispatch("post", [a, b]).fail(c.reject); return c.promise }; b.nodeify = function (a, c) { return b(a).nodeify(c) }; g.prototype.nodeify = function (a) { if (a) this.then(function (c) { b.nextTick(function () { a(null, c) }) }, function (c) { b.nextTick(function () { a(c) }) }); else return this };
    var d = h(); return b
}); curity.token.constants = {
    "hostUrl": "https://idp.lio.se",
    "token_endpoint": "/oauth/v2/assisted-token/token",
    "revoke_endpoint": "/oauth/v2/assisted-token/revoke",
    "logout_endpoint": "/authn/authenticate/logout?serviceProviderId=Oauth",
    "authentication_endpoint": "/authn/authenticate?serviceProviderId=Oauth"
};