/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/videojs-mobile-ui@0.5.0/dist/videojs-mobile-ui.cjs.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
"use strict";

function _interopDefault(e) {
    return e && "object" == typeof e && "default" in e ? e.default : e
}

import videojs from 'video.js';
window.videojs = videojs;
require('https://unpkg.com/video.js@7.5.4/dist/video.js');

/*var videojs = _interopDefault(require("video.js"))*/
    window = _interopDefault(require("global/window")),
    version = "0.5.0",
    classCallCheck = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    },
    inherits = function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    },
    possibleConstructorReturn = function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    },
    Component = videojs.getComponent("Component"),
    dom = videojs.dom || videojs,
    TouchOverlay = function (e) {
        function t(n, o) {
            classCallCheck(this, t);
            var i = possibleConstructorReturn(this, e.call(this, n, o));
            return i.seekSeconds = o.seekSeconds, i.tapTimeout = o.tapTimeout, i.addChild("playToggle", {}), n.on(["playing", "userinactive"], (function (e) {
                i.removeClass("show-play-toggle")
            })), 0 === i.player_.options_.inactivityTimeout && (i.player_.options_.inactivityTimeout = 5e3), i.enable(), i
        }
        return inherits(t, e), t.prototype.createEl = function () {
            return dom.createEl("div", {
                className: "vjs-touch-overlay",
                tabIndex: -1
            })
        }, t.prototype.handleTap = function (e) {
            var t = this;
            e.target === this.el_ && (e.preventDefault(), this.firstTapCaptured ? (this.firstTapCaptured = !1, this.timeout && window.clearTimeout(this.timeout), this.handleDoubleTap(e)) : (this.firstTapCaptured = !0, this.timeout = window.setTimeout((function () {
                t.firstTapCaptured = !1, t.handleSingleTap(e)
            }), this.tapTimeout)))
        }, t.prototype.handleSingleTap = function (e) {
            this.removeClass("skip"), this.toggleClass("show-play-toggle")
        }, t.prototype.handleDoubleTap = function (e) {
            var t = this,
                n = this.el_.getBoundingClientRect(),
                o = e.changedTouches[0].clientX - n.left;
            if (o < .4 * n.width) this.player_.currentTime(Math.max(0, this.player_.currentTime() - this.seekSeconds)), this.addClass("reverse");
            else {
                if (!(o > n.width - .4 * n.width)) return;
                this.player_.currentTime(Math.min(this.player_.duration(), this.player_.currentTime() + this.seekSeconds)), this.removeClass("reverse")
            }
            this.removeClass("show-play-toggle"), this.removeClass("skip"), window.requestAnimationFrame((function () {
                t.addClass("skip")
            }))
        }, t.prototype.enable = function () {
            this.firstTapCaptured = !1, this.on("touchend", this.handleTap)
        }, t.prototype.disable = function () {
            this.off("touchend", this.handleTap)
        }, t
    }(Component);
Component.registerComponent("TouchOverlay", TouchOverlay);
var defaults = {
    fullscreen: {
        enterOnRotate: !0,
        exitOnRotate: !0,
        lockOnRotate: !0,
        iOS: !1
    },
    touchControls: {
        seekSeconds: 10,
        tapTimeout: 300,
        disableOnEnd: !1
    }
},
    screen = window.screen,
    angle = function () {
        return "number" == typeof window.orientation || screen && screen.orientation && screen.orientation.angle ? window.orientation : (videojs.log("angle unknown"), 0)
    },
    registerPlugin = videojs.registerPlugin || videojs.plugin,
    onPlayerReady = function (e, t) {
        e.addClass("vjs-mobile-ui"), (t.touchControls.disableOnEnd || "function" == typeof e.endscreen) && e.addClass("vjs-mobile-ui-disable-end"), t.fullscreen.iOS && videojs.browser.IS_IOS && videojs.browser.IOS_VERSION > 9 && !e.el_.ownerDocument.querySelector(".bc-iframe") && (e.tech_.el_.setAttribute("playsinline", "playsinline"), e.tech_.supportsFullScreen = function () {
            return !1
        });
        var n = void 0,
            o = videojs.VERSION.split("."),
            i = parseInt(o[0], 10),
            r = parseInt(o[1], 10);
        n = i < 7 || 7 === i && r < 7 ? Array.prototype.indexOf.call(e.el_.children, e.getChild("ControlBar").el_) : e.children_.indexOf(e.getChild("ControlBar")), e.addChild("TouchOverlay", t.touchControls, n);
        var s = !1,
            a = function () {
                var n = angle();
                90 !== n && 270 !== n && -90 !== n || !t.enterOnRotate || !1 === e.paused() && (e.requestFullscreen(), t.fullscreen.lockOnRotate && screen.orientation && screen.orientation.lock && screen.orientation.lock("landscape").then((function () {
                    s = !0
                })).catch((function () {
                    videojs.log("orientation lock not allowed")
                }))), 0 !== n && 180 !== n || !t.exitOnRotate || e.isFullscreen() && e.exitFullscreen()
            };
        videojs.browser.IS_IOS ? window.addEventListener("orientationchange", a) : screen.orientation && (screen.orientation.onchange = a), e.on("ended", (function (e) {
            !0 === s && (screen.orientation.unlock(), s = !1)
        }))
    },
    mobileUi = function (e) {
        var t = this;
        (e.forceForTesting || videojs.browser.IS_ANDROID || videojs.browser.IS_IOS) && this.ready((function () {
            onPlayerReady(t, videojs.mergeOptions(defaults, e))
        }))
    };
registerPlugin("mobileUi", mobileUi), mobileUi.VERSION = version, module.exports = mobileUi;
//# sourceMappingURL=/sm/35aadbae8f7bdff51f367e6ea916c94765c930e7027be4645f06b1d2be9f3bc8.map