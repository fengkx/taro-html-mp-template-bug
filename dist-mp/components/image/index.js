require("../../runtime"),
  require("../../taro"),
  require("../../vendors"),
  require("../../common"),
  (wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([
    [8],
    {
      50: function (e, t, r) {
        "use strict";
        r.r(t);
        r(27), r(29);
        var n = r(2),
          i = r(6),
          o = r(17),
          a = r(26),
          c = i["container"].get(i["SERVICE_IDENTIFIER"].Hooks);
        c.initNativeApiImpls = [n["c"].initNativeApi];
        var u = r(51).default,
          s = {};
        Component(Object(i["createNativeComponentConfig"])(u, o, a["a"], s));
      },
      51: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, "default", function () {
            return i;
          });
        var n = r(14);
        function i(e) {
          var t = e.src,
            r = e.alt;
          return Object(n["jsx"])("img", { src: t, alt: r });
        }
      },
    },
    [[50, 0, 2, 3, 1]],
  ]);
