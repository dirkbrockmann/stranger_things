(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-4{gap:calc(var(--tw-spacing)*4)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const vi = {
  id: "stranger_things",
  display_type: "canvas",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 500, height: 500 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-4 tw:px-1 tw:sm:p-0 tw:m-8"
};
function Zt(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function wi(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function mr(t) {
  let e, n, r;
  t.length !== 2 ? (e = Zt, n = (s, u) => Zt(t(s), u), r = (s, u) => t(s) - u) : (e = t === Zt || t === wi ? t : bi, n = t, r = t);
  function i(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (e(u, u) !== 0) return c;
      do {
        const f = l + c >>> 1;
        n(s[f], u) < 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function o(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (e(u, u) !== 0) return c;
      do {
        const f = l + c >>> 1;
        n(s[f], u) <= 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function a(s, u, l = 0, c = s.length) {
    const f = i(s, u, l, c - 1);
    return f > l && r(s[f - 1], u) > -r(s[f], u) ? f - 1 : f;
  }
  return { left: i, center: a, right: o };
}
function bi() {
  return 0;
}
function xi(t) {
  return t === null ? NaN : +t;
}
const Mi = mr(Zt), Ai = Mi.right;
mr(xi).center;
class xn extends Map {
  constructor(e, n = Pi) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), e != null) for (const [r, i] of e) this.set(r, i);
  }
  get(e) {
    return super.get(Mn(this, e));
  }
  has(e) {
    return super.has(Mn(this, e));
  }
  set(e, n) {
    return super.set($i(this, e), n);
  }
  delete(e) {
    return super.delete(Ti(this, e));
  }
}
function Mn({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : n;
}
function $i({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : (t.set(r, n), n);
}
function Ti({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) && (n = t.get(r), t.delete(r)), n;
}
function Pi(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const Si = Math.sqrt(50), Ei = Math.sqrt(10), Ni = Math.sqrt(2);
function te(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= Si ? 10 : o >= Ei ? 5 : o >= Ni ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / a, s = Math.round(t * l), u = Math.round(e * l), s / l < t && ++s, u / l > e && --u, l = -l) : (l = Math.pow(10, i) * a, s = Math.round(t / l), u = Math.round(e / l), s * l < t && ++s, u * l > e && --u), u < s && 0.5 <= n && n < 2 ? te(t, e, n * 2) : [s, u, l];
}
function zi(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, o, a] = r ? te(e, t, n) : te(t, e, n);
  if (!(o >= i)) return [];
  const s = o - i + 1, u = new Array(s);
  if (r)
    if (a < 0) for (let l = 0; l < s; ++l) u[l] = (o - l) / -a;
    else for (let l = 0; l < s; ++l) u[l] = (o - l) * a;
  else if (a < 0) for (let l = 0; l < s; ++l) u[l] = (i + l) / -a;
  else for (let l = 0; l < s; ++l) u[l] = (i + l) * a;
  return u;
}
function Oe(t, e, n) {
  return e = +e, t = +t, n = +n, te(t, e, n)[2];
}
function ki(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? Oe(e, t, n) : Oe(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Ht(t, e) {
  let n;
  for (const r of t)
    r != null && (n < r || n === void 0 && r >= r) && (n = r);
  return n;
}
function Ii(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * n;
  return o;
}
var Ci = { value: () => {
} };
function tn() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Wt(n);
}
function Wt(t) {
  this._ = t;
}
function Oi(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Wt.prototype = tn.prototype = {
  constructor: Wt,
  on: function(t, e) {
    var n = this._, r = Oi(t + "", n), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Ri(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++o < a; )
      if (i = (t = r[o]).type) n[i] = An(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = An(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new Wt(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, o; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(e, n);
  }
};
function Ri(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function An(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = Ci, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Re = "http://www.w3.org/1999/xhtml";
const $n = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Re,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function de(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), $n.hasOwnProperty(e) ? { space: $n[e], local: t } : t;
}
function Fi(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Re && e.documentElement.namespaceURI === Re ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Di(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function vr(t) {
  var e = de(t);
  return (e.local ? Di : Fi)(e);
}
function Li() {
}
function en(t) {
  return t == null ? Li : function() {
    return this.querySelector(t);
  };
}
function Bi(t) {
  typeof t != "function" && (t = en(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = new Array(a), u, l, c = 0; c < a; ++c)
      (u = o[c]) && (l = t.call(u, u.__data__, c, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[c] = l);
  return new k(r, this._parents);
}
function qi(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Hi() {
  return [];
}
function wr(t) {
  return t == null ? Hi : function() {
    return this.querySelectorAll(t);
  };
}
function Xi(t) {
  return function() {
    return qi(t.apply(this, arguments));
  };
}
function Gi(t) {
  typeof t == "function" ? t = Xi(t) : t = wr(t);
  for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o)
    for (var a = e[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new k(r, i);
}
function br(t) {
  return function() {
    return this.matches(t);
  };
}
function xr(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Ui = Array.prototype.find;
function Yi(t) {
  return function() {
    return Ui.call(this.children, t);
  };
}
function Ki() {
  return this.firstElementChild;
}
function Vi(t) {
  return this.select(t == null ? Ki : Yi(typeof t == "function" ? t : xr(t)));
}
var ji = Array.prototype.filter;
function Zi() {
  return Array.from(this.children);
}
function Wi(t) {
  return function() {
    return ji.call(this.children, t);
  };
}
function Ji(t) {
  return this.selectAll(t == null ? Zi : Wi(typeof t == "function" ? t : xr(t)));
}
function Qi(t) {
  typeof t != "function" && (t = br(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new k(r, this._parents);
}
function Mr(t) {
  return new Array(t.length);
}
function to() {
  return new k(this._enter || this._groups.map(Mr), this._parents);
}
function ee(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
ee.prototype = {
  constructor: ee,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function eo(t) {
  return function() {
    return t;
  };
}
function no(t, e, n, r, i, o) {
  for (var a = 0, s, u = e.length, l = o.length; a < l; ++a)
    (s = e[a]) ? (s.__data__ = o[a], r[a] = s) : n[a] = new ee(t, o[a]);
  for (; a < u; ++a)
    (s = e[a]) && (i[a] = s);
}
function ro(t, e, n, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), c = e.length, f = o.length, h = new Array(c), g;
  for (s = 0; s < c; ++s)
    (u = e[s]) && (h[s] = g = a.call(u, u.__data__, s, e) + "", l.has(g) ? i[s] = u : l.set(g, u));
  for (s = 0; s < f; ++s)
    g = a.call(t, o[s], s, o) + "", (u = l.get(g)) ? (r[s] = u, u.__data__ = o[s], l.delete(g)) : n[s] = new ee(t, o[s]);
  for (s = 0; s < c; ++s)
    (u = e[s]) && l.get(h[s]) === u && (i[s] = u);
}
function io(t) {
  return t.__data__;
}
function oo(t, e) {
  if (!arguments.length) return Array.from(this, io);
  var n = e ? ro : no, r = this._parents, i = this._groups;
  typeof t != "function" && (t = eo(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var c = r[l], f = i[l], h = f.length, g = ao(t.call(c, c && c.__data__, l, r)), d = g.length, p = s[l] = new Array(d), b = a[l] = new Array(d), _ = u[l] = new Array(h);
    n(c, f, p, b, _, g, e);
    for (var x = 0, A = 0, y, v; x < d; ++x)
      if (y = p[x]) {
        for (x >= A && (A = x + 1); !(v = b[A]) && ++A < d; ) ;
        y._next = v || null;
      }
  }
  return a = new k(a, r), a._enter = s, a._exit = u, a;
}
function ao(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function so() {
  return new k(this._exit || this._groups.map(Mr), this._parents);
}
function uo(t, e, n) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? o.remove() : n(o), r && i ? r.merge(i).order() : i;
}
function lo(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = n[u], c = r[u], f = l.length, h = s[u] = new Array(f), g, d = 0; d < f; ++d)
      (g = l[d] || c[d]) && (h[d] = g);
  for (; u < i; ++u)
    s[u] = n[u];
  return new k(s, this._parents);
}
function co() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function fo(t) {
  t || (t = ho);
  function e(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = n[o], s = a.length, u = i[o] = new Array(s), l, c = 0; c < s; ++c)
      (l = a[c]) && (u[c] = l);
    u.sort(e);
  }
  return new k(i, this._parents).order();
}
function ho(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function po() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function go() {
  return Array.from(this);
}
function yo() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function _o() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function mo() {
  return !this.node();
}
function vo(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function wo(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function bo(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function xo(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Mo(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Ao(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function $o(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function To(t, e) {
  var n = de(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? bo : wo : typeof e == "function" ? n.local ? $o : Ao : n.local ? Mo : xo)(n, e));
}
function Ar(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Po(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function So(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Eo(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function No(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Po : typeof e == "function" ? Eo : So)(t, e, n ?? "")) : _t(this.node(), t);
}
function _t(t, e) {
  return t.style.getPropertyValue(e) || Ar(t).getComputedStyle(t, null).getPropertyValue(e);
}
function zo(t) {
  return function() {
    delete this[t];
  };
}
function ko(t, e) {
  return function() {
    this[t] = e;
  };
}
function Io(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Co(t, e) {
  return arguments.length > 1 ? this.each((e == null ? zo : typeof e == "function" ? Io : ko)(t, e)) : this.node()[t];
}
function $r(t) {
  return t.trim().split(/^|\s+/);
}
function nn(t) {
  return t.classList || new Tr(t);
}
function Tr(t) {
  this._node = t, this._names = $r(t.getAttribute("class") || "");
}
Tr.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function Pr(t, e) {
  for (var n = nn(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function Sr(t, e) {
  for (var n = nn(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function Oo(t) {
  return function() {
    Pr(this, t);
  };
}
function Ro(t) {
  return function() {
    Sr(this, t);
  };
}
function Fo(t, e) {
  return function() {
    (e.apply(this, arguments) ? Pr : Sr)(this, t);
  };
}
function Do(t, e) {
  var n = $r(t + "");
  if (arguments.length < 2) {
    for (var r = nn(this.node()), i = -1, o = n.length; ++i < o; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Fo : e ? Oo : Ro)(n, e));
}
function Lo() {
  this.textContent = "";
}
function Bo(t) {
  return function() {
    this.textContent = t;
  };
}
function qo(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Ho(t) {
  return arguments.length ? this.each(t == null ? Lo : (typeof t == "function" ? qo : Bo)(t)) : this.node().textContent;
}
function Xo() {
  this.innerHTML = "";
}
function Go(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Uo(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Yo(t) {
  return arguments.length ? this.each(t == null ? Xo : (typeof t == "function" ? Uo : Go)(t)) : this.node().innerHTML;
}
function Ko() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Vo() {
  return this.each(Ko);
}
function jo() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Zo() {
  return this.each(jo);
}
function Wo(t) {
  var e = typeof t == "function" ? t : vr(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Jo() {
  return null;
}
function Qo(t, e) {
  var n = typeof t == "function" ? t : vr(t), r = e == null ? Jo : typeof e == "function" ? e : en(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function ta() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function ea() {
  return this.each(ta);
}
function na() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ra() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ia(t) {
  return this.select(t ? ra : na);
}
function oa(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function aa(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function sa(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function ua(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, o; n < i; ++n)
        o = e[n], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function la(t, e, n) {
  return function() {
    var r = this.__on, i, o = aa(e);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, o, n), i = { type: t.type, name: t.name, value: e, listener: o, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function ca(t, e, n) {
  var r = sa(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, c; u < l; ++u)
        for (i = 0, c = s[u]; i < o; ++i)
          if ((a = r[i]).type === c.type && a.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = e ? la : ua, i = 0; i < o; ++i) this.each(s(r[i], e, n));
  return this;
}
function Er(t, e, n) {
  var r = Ar(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function fa(t, e) {
  return function() {
    return Er(this, t, e);
  };
}
function ha(t, e) {
  return function() {
    return Er(this, t, e.apply(this, arguments));
  };
}
function da(t, e) {
  return this.each((typeof e == "function" ? ha : fa)(t, e));
}
function* pa() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var Nr = [null];
function k(t, e) {
  this._groups = t, this._parents = e;
}
function Dt() {
  return new k([[document.documentElement]], Nr);
}
function ga() {
  return this;
}
k.prototype = Dt.prototype = {
  constructor: k,
  select: Bi,
  selectAll: Gi,
  selectChild: Vi,
  selectChildren: Ji,
  filter: Qi,
  data: oo,
  enter: to,
  exit: so,
  join: uo,
  merge: lo,
  selection: ga,
  order: co,
  sort: fo,
  call: po,
  nodes: go,
  node: yo,
  size: _o,
  empty: mo,
  each: vo,
  attr: To,
  style: No,
  property: Co,
  classed: Do,
  text: Ho,
  html: Yo,
  raise: Vo,
  lower: Zo,
  append: Wo,
  insert: Qo,
  remove: ea,
  clone: ia,
  datum: oa,
  on: ca,
  dispatch: da,
  [Symbol.iterator]: pa
};
function T(t) {
  return typeof t == "string" ? new k([[document.querySelector(t)]], [document.documentElement]) : new k([[t]], Nr);
}
function ya(t) {
  let e;
  for (; e = t.sourceEvent; ) t = e;
  return t;
}
function Fe(t, e) {
  if (t = ya(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect();
      return [t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const _a = { passive: !1 }, Nt = { capture: !0, passive: !1 };
function xe(t) {
  t.stopImmediatePropagation();
}
function gt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function ma(t) {
  var e = t.document.documentElement, n = T(t).on("dragstart.drag", gt, Nt);
  "onselectstart" in e ? n.on("selectstart.drag", gt, Nt) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function va(t, e) {
  var n = t.document.documentElement, r = T(t).on("dragstart.drag", null);
  e && (r.on("click.drag", gt, Nt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const Xt = (t) => () => t;
function De(t, {
  sourceEvent: e,
  subject: n,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: u,
  dy: l,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
De.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function wa(t) {
  return !t.ctrlKey && !t.button;
}
function ba() {
  return this.parentNode;
}
function xa(t, e) {
  return e ?? { x: t.x, y: t.y };
}
function Ma() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Aa() {
  var t = wa, e = ba, n = xa, r = Ma, i = {}, o = tn("start", "drag", "end"), a = 0, s, u, l, c, f = 0;
  function h(y) {
    y.on("mousedown.drag", g).filter(r).on("touchstart.drag", b).on("touchmove.drag", _, _a).on("touchend.drag touchcancel.drag", x).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(y, v) {
    if (!(c || !t.call(this, y, v))) {
      var $ = A(this, e.call(this, y, v), y, v, "mouse");
      $ && (T(y.view).on("mousemove.drag", d, Nt).on("mouseup.drag", p, Nt), ma(y.view), xe(y), l = !1, s = y.clientX, u = y.clientY, $("start", y));
    }
  }
  function d(y) {
    if (gt(y), !l) {
      var v = y.clientX - s, $ = y.clientY - u;
      l = v * v + $ * $ > f;
    }
    i.mouse("drag", y);
  }
  function p(y) {
    T(y.view).on("mousemove.drag mouseup.drag", null), va(y.view, l), gt(y), i.mouse("end", y);
  }
  function b(y, v) {
    if (t.call(this, y, v)) {
      var $ = y.changedTouches, P = e.call(this, y, v), E = $.length, q, Y;
      for (q = 0; q < E; ++q)
        (Y = A(this, P, y, v, $[q].identifier, $[q])) && (xe(y), Y("start", y, $[q]));
    }
  }
  function _(y) {
    var v = y.changedTouches, $ = v.length, P, E;
    for (P = 0; P < $; ++P)
      (E = i[v[P].identifier]) && (gt(y), E("drag", y, v[P]));
  }
  function x(y) {
    var v = y.changedTouches, $ = v.length, P, E;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), P = 0; P < $; ++P)
      (E = i[v[P].identifier]) && (xe(y), E("end", y, v[P]));
  }
  function A(y, v, $, P, E, q) {
    var Y = o.copy(), w = Fe(q || $, v), H, N, O;
    if ((O = n.call(y, new De("beforestart", {
      sourceEvent: $,
      target: h,
      identifier: E,
      active: a,
      x: w[0],
      y: w[1],
      dx: 0,
      dy: 0,
      dispatch: Y
    }), P)) != null)
      return H = O.x - w[0] || 0, N = O.y - w[1] || 0, function qt(tt, it, ht) {
        var I = w, be;
        switch (tt) {
          case "start":
            i[E] = qt, be = a++;
            break;
          case "end":
            delete i[E], --a;
          // falls through
          case "drag":
            w = Fe(ht || it, v), be = a;
            break;
        }
        Y.call(
          tt,
          y,
          new De(tt, {
            sourceEvent: it,
            subject: O,
            target: h,
            identifier: E,
            active: be,
            x: w[0] + H,
            y: w[1] + N,
            dx: w[0] - I[0],
            dy: w[1] - I[1],
            dispatch: Y
          }),
          P
        );
      };
  }
  return h.filter = function(y) {
    return arguments.length ? (t = typeof y == "function" ? y : Xt(!!y), h) : t;
  }, h.container = function(y) {
    return arguments.length ? (e = typeof y == "function" ? y : Xt(y), h) : e;
  }, h.subject = function(y) {
    return arguments.length ? (n = typeof y == "function" ? y : Xt(y), h) : n;
  }, h.touchable = function(y) {
    return arguments.length ? (r = typeof y == "function" ? y : Xt(!!y), h) : r;
  }, h.on = function() {
    var y = o.on.apply(o, arguments);
    return y === o ? h : y;
  }, h.clickDistance = function(y) {
    return arguments.length ? (f = (y = +y) * y, h) : Math.sqrt(f);
  }, h;
}
function rn(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function zr(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Lt() {
}
var zt = 0.7, ne = 1 / zt, yt = "\\s*([+-]?\\d+)\\s*", kt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", X = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", $a = /^#([0-9a-f]{3,8})$/, Ta = new RegExp(`^rgb\\(${yt},${yt},${yt}\\)$`), Pa = new RegExp(`^rgb\\(${X},${X},${X}\\)$`), Sa = new RegExp(`^rgba\\(${yt},${yt},${yt},${kt}\\)$`), Ea = new RegExp(`^rgba\\(${X},${X},${X},${kt}\\)$`), Na = new RegExp(`^hsl\\(${kt},${X},${X}\\)$`), za = new RegExp(`^hsla\\(${kt},${X},${X},${kt}\\)$`), Tn = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
rn(Lt, ut, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Pn,
  // Deprecated! Use color.formatHex.
  formatHex: Pn,
  formatHex8: ka,
  formatHsl: Ia,
  formatRgb: Sn,
  toString: Sn
});
function Pn() {
  return this.rgb().formatHex();
}
function ka() {
  return this.rgb().formatHex8();
}
function Ia() {
  return kr(this).formatHsl();
}
function Sn() {
  return this.rgb().formatRgb();
}
function ut(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = $a.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? En(e) : n === 3 ? new z(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Gt(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Gt(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Ta.exec(t)) ? new z(e[1], e[2], e[3], 1) : (e = Pa.exec(t)) ? new z(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Sa.exec(t)) ? Gt(e[1], e[2], e[3], e[4]) : (e = Ea.exec(t)) ? Gt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Na.exec(t)) ? kn(e[1], e[2] / 100, e[3] / 100, 1) : (e = za.exec(t)) ? kn(e[1], e[2] / 100, e[3] / 100, e[4]) : Tn.hasOwnProperty(t) ? En(Tn[t]) : t === "transparent" ? new z(NaN, NaN, NaN, 0) : null;
}
function En(t) {
  return new z(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Gt(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new z(t, e, n, r);
}
function Ca(t) {
  return t instanceof Lt || (t = ut(t)), t ? (t = t.rgb(), new z(t.r, t.g, t.b, t.opacity)) : new z();
}
function re(t, e, n, r) {
  return arguments.length === 1 ? Ca(t) : new z(t, e, n, r ?? 1);
}
function z(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
rn(z, re, zr(Lt, {
  brighter(t) {
    return t = t == null ? ne : Math.pow(ne, t), new z(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? zt : Math.pow(zt, t), new z(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new z(st(this.r), st(this.g), st(this.b), ie(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Nn,
  // Deprecated! Use color.formatHex.
  formatHex: Nn,
  formatHex8: Oa,
  formatRgb: zn,
  toString: zn
}));
function Nn() {
  return `#${at(this.r)}${at(this.g)}${at(this.b)}`;
}
function Oa() {
  return `#${at(this.r)}${at(this.g)}${at(this.b)}${at((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function zn() {
  const t = ie(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${st(this.r)}, ${st(this.g)}, ${st(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function ie(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function st(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function at(t) {
  return t = st(t), (t < 16 ? "0" : "") + t.toString(16);
}
function kn(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new F(t, e, n, r);
}
function kr(t) {
  if (t instanceof F) return new F(t.h, t.s, t.l, t.opacity);
  if (t instanceof Lt || (t = ut(t)), !t) return new F();
  if (t instanceof F) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), o = Math.max(e, n, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (e === o ? a = (n - r) / s + (n < r) * 6 : n === o ? a = (r - e) / s + 2 : a = (e - n) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new F(a, s, u, t.opacity);
}
function Ra(t, e, n, r) {
  return arguments.length === 1 ? kr(t) : new F(t, e, n, r ?? 1);
}
function F(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
rn(F, Ra, zr(Lt, {
  brighter(t) {
    return t = t == null ? ne : Math.pow(ne, t), new F(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? zt : Math.pow(zt, t), new F(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new z(
      Me(t >= 240 ? t - 240 : t + 120, i, r),
      Me(t, i, r),
      Me(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new F(In(this.h), Ut(this.s), Ut(this.l), ie(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = ie(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${In(this.h)}, ${Ut(this.s) * 100}%, ${Ut(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function In(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Ut(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Me(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const on = (t) => () => t;
function Fa(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Da(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function La(t) {
  return (t = +t) == 1 ? Ir : function(e, n) {
    return n - e ? Da(e, n, t) : on(isNaN(e) ? n : e);
  };
}
function Ir(t, e) {
  var n = e - t;
  return n ? Fa(t, n) : on(isNaN(t) ? e : t);
}
const oe = function t(e) {
  var n = La(e);
  function r(i, o) {
    var a = n((i = re(i)).r, (o = re(o)).r), s = n(i.g, o.g), u = n(i.b, o.b), l = Ir(i.opacity, o.opacity);
    return function(c) {
      return i.r = a(c), i.g = s(c), i.b = u(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Ba(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(o) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - o) + e[i] * o;
    return r;
  };
}
function qa(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Ha(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), o = new Array(n), a;
  for (a = 0; a < r; ++a) i[a] = an(t[a], e[a]);
  for (; a < n; ++a) o[a] = e[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function Xa(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function R(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Ga(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = an(t[i], e[i]) : r[i] = e[i];
  return function(o) {
    for (i in n) r[i] = n[i](o);
    return r;
  };
}
var Le = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ae = new RegExp(Le.source, "g");
function Ua(t) {
  return function() {
    return t;
  };
}
function Ya(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Cr(t, e) {
  var n = Le.lastIndex = Ae.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", e = e + ""; (r = Le.exec(t)) && (i = Ae.exec(e)); )
    (o = i.index) > n && (o = e.slice(n, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: R(r, i) })), n = Ae.lastIndex;
  return n < e.length && (o = e.slice(n), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? Ya(u[0].x) : Ua(e) : (e = u.length, function(l) {
    for (var c = 0, f; c < e; ++c) s[(f = u[c]).i] = f.x(l);
    return s.join("");
  });
}
function an(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? on(e) : (n === "number" ? R : n === "string" ? (r = ut(e)) ? (e = r, oe) : Cr : e instanceof ut ? oe : e instanceof Date ? Xa : qa(e) ? Ba : Array.isArray(e) ? Ha : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Ga : R)(t, e);
}
function Ka(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var Cn = 180 / Math.PI, Be = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Or(t, e, n, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (u = t * n + e * r) && (n -= t * u, r -= e * u), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, u /= s), t * r < e * n && (t = -t, e = -e, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(e, t) * Cn,
    skewX: Math.atan(u) * Cn,
    scaleX: a,
    scaleY: s
  };
}
var Yt;
function Va(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Be : Or(e.a, e.b, e.c, e.d, e.e, e.f);
}
function ja(t) {
  return t == null || (Yt || (Yt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Yt.setAttribute("transform", t), !(t = Yt.transform.baseVal.consolidate())) ? Be : (t = t.matrix, Or(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Rr(t, e, n, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, c, f, h, g, d) {
    if (l !== f || c !== h) {
      var p = g.push("translate(", null, e, null, n);
      d.push({ i: p - 4, x: R(l, f) }, { i: p - 2, x: R(c, h) });
    } else (f || h) && g.push("translate(" + f + e + h + n);
  }
  function a(l, c, f, h) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: R(l, c) })) : c && f.push(i(f) + "rotate(" + c + r);
  }
  function s(l, c, f, h) {
    l !== c ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: R(l, c) }) : c && f.push(i(f) + "skewX(" + c + r);
  }
  function u(l, c, f, h, g, d) {
    if (l !== f || c !== h) {
      var p = g.push(i(g) + "scale(", null, ",", null, ")");
      d.push({ i: p - 4, x: R(l, f) }, { i: p - 2, x: R(c, h) });
    } else (f !== 1 || h !== 1) && g.push(i(g) + "scale(" + f + "," + h + ")");
  }
  return function(l, c) {
    var f = [], h = [];
    return l = t(l), c = t(c), o(l.translateX, l.translateY, c.translateX, c.translateY, f, h), a(l.rotate, c.rotate, f, h), s(l.skewX, c.skewX, f, h), u(l.scaleX, l.scaleY, c.scaleX, c.scaleY, f, h), l = c = null, function(g) {
      for (var d = -1, p = h.length, b; ++d < p; ) f[(b = h[d]).i] = b.x(g);
      return f.join("");
    };
  };
}
var Za = Rr(Va, "px, ", "px)", "deg)"), Wa = Rr(ja, ", ", ")", ")"), mt = 0, Tt = 0, At = 0, Fr = 1e3, ae, Pt, se = 0, lt = 0, pe = 0, It = typeof performance == "object" && performance.now ? performance : Date, Dr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function sn() {
  return lt || (Dr(Ja), lt = It.now() + pe);
}
function Ja() {
  lt = 0;
}
function ue() {
  this._call = this._time = this._next = null;
}
ue.prototype = Lr.prototype = {
  constructor: ue,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? sn() : +n) + (e == null ? 0 : +e), !this._next && Pt !== this && (Pt ? Pt._next = this : ae = this, Pt = this), this._call = t, this._time = n, qe();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, qe());
  }
};
function Lr(t, e, n) {
  var r = new ue();
  return r.restart(t, e, n), r;
}
function Qa() {
  sn(), ++mt;
  for (var t = ae, e; t; )
    (e = lt - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --mt;
}
function On() {
  lt = (se = It.now()) + pe, mt = Tt = 0;
  try {
    Qa();
  } finally {
    mt = 0, es(), lt = 0;
  }
}
function ts() {
  var t = It.now(), e = t - se;
  e > Fr && (pe -= e, se = t);
}
function es() {
  for (var t, e = ae, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : ae = n);
  Pt = t, qe(r);
}
function qe(t) {
  if (!mt) {
    Tt && (Tt = clearTimeout(Tt));
    var e = t - lt;
    e > 24 ? (t < 1 / 0 && (Tt = setTimeout(On, t - It.now() - pe)), At && (At = clearInterval(At))) : (At || (se = It.now(), At = setInterval(ts, Fr)), mt = 1, Dr(On));
  }
}
function Rn(t, e, n) {
  var r = new ue();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var ns = tn("start", "end", "cancel", "interrupt"), rs = [], Br = 0, Fn = 1, He = 2, Jt = 3, Dn = 4, Xe = 5, Qt = 6;
function ge(t, e, n, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (n in a) return;
  is(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: ns,
    tween: rs,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: Br
  });
}
function un(t, e) {
  var n = L(t, e);
  if (n.state > Br) throw new Error("too late; already scheduled");
  return n;
}
function U(t, e) {
  var n = L(t, e);
  if (n.state > Jt) throw new Error("too late; already running");
  return n;
}
function L(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function is(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = Lr(o, 0, n.time);
  function o(l) {
    n.state = Fn, n.timer.restart(a, n.delay, n.time), n.delay <= l && a(l - n.delay);
  }
  function a(l) {
    var c, f, h, g;
    if (n.state !== Fn) return u();
    for (c in r)
      if (g = r[c], g.name === n.name) {
        if (g.state === Jt) return Rn(a);
        g.state === Dn ? (g.state = Qt, g.timer.stop(), g.on.call("interrupt", t, t.__data__, g.index, g.group), delete r[c]) : +c < e && (g.state = Qt, g.timer.stop(), g.on.call("cancel", t, t.__data__, g.index, g.group), delete r[c]);
      }
    if (Rn(function() {
      n.state === Jt && (n.state = Dn, n.timer.restart(s, n.delay, n.time), s(l));
    }), n.state = He, n.on.call("start", t, t.__data__, n.index, n.group), n.state === He) {
      for (n.state = Jt, i = new Array(h = n.tween.length), c = 0, f = -1; c < h; ++c)
        (g = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++f] = g);
      i.length = f + 1;
    }
  }
  function s(l) {
    for (var c = l < n.duration ? n.ease.call(null, l / n.duration) : (n.timer.restart(u), n.state = Xe, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, c);
    n.state === Xe && (n.on.call("end", t, t.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = Qt, n.timer.stop(), delete r[e];
    for (var l in r) return;
    delete t.__transition;
  }
}
function os(t, e) {
  var n = t.__transition, r, i, o = !0, a;
  if (n) {
    e = e == null ? null : e + "";
    for (a in n) {
      if ((r = n[a]).name !== e) {
        o = !1;
        continue;
      }
      i = r.state > He && r.state < Xe, r.state = Qt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[a];
    }
    o && delete t.__transition;
  }
}
function as(t) {
  return this.each(function() {
    os(this, t);
  });
}
function ss(t, e) {
  var n, r;
  return function() {
    var i = U(this, t), o = i.tween;
    if (o !== n) {
      r = n = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === e) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function us(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var o = U(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: e, value: n }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === e) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    o.tween = i;
  };
}
function ls(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = L(this.node(), n).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((e == null ? ss : us)(n, t, e));
}
function ln(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = U(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return L(i, r).value[e];
  };
}
function qr(t, e) {
  var n;
  return (typeof e == "number" ? R : e instanceof ut ? oe : (n = ut(e)) ? (e = n, oe) : Cr)(t, e);
}
function cs(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function fs(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function hs(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function ds(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function ps(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = e(r = a, s)));
  };
}
function gs(t, e, n) {
  var r, i, o;
  return function() {
    var a, s = n(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = e(r = a, s)));
  };
}
function ys(t, e) {
  var n = de(t), r = n === "transform" ? Wa : qr;
  return this.attrTween(t, typeof e == "function" ? (n.local ? gs : ps)(n, r, ln(this, "attr." + t, e)) : e == null ? (n.local ? fs : cs)(n) : (n.local ? ds : hs)(n, r, e));
}
function _s(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function ms(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function vs(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && ms(t, o)), n;
  }
  return i._value = e, i;
}
function ws(t, e) {
  var n, r;
  function i() {
    var o = e.apply(this, arguments);
    return o !== r && (n = (r = o) && _s(t, o)), n;
  }
  return i._value = e, i;
}
function bs(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = de(t);
  return this.tween(n, (r.local ? vs : ws)(r, e));
}
function xs(t, e) {
  return function() {
    un(this, t).delay = +e.apply(this, arguments);
  };
}
function Ms(t, e) {
  return e = +e, function() {
    un(this, t).delay = e;
  };
}
function As(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? xs : Ms)(e, t)) : L(this.node(), e).delay;
}
function $s(t, e) {
  return function() {
    U(this, t).duration = +e.apply(this, arguments);
  };
}
function Ts(t, e) {
  return e = +e, function() {
    U(this, t).duration = e;
  };
}
function Ps(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? $s : Ts)(e, t)) : L(this.node(), e).duration;
}
function Ss(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    U(this, t).ease = e;
  };
}
function Es(t) {
  var e = this._id;
  return arguments.length ? this.each(Ss(e, t)) : L(this.node(), e).ease;
}
function Ns(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    U(this, t).ease = n;
  };
}
function zs(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Ns(this._id, t));
}
function ks(t) {
  typeof t != "function" && (t = br(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var o = e[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new j(r, this._parents, this._name, this._id);
}
function Is(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = e[s], l = n[s], c = u.length, f = a[s] = new Array(c), h, g = 0; g < c; ++g)
      (h = u[g] || l[g]) && (f[g] = h);
  for (; s < r; ++s)
    a[s] = e[s];
  return new j(a, this._parents, this._name, this._id);
}
function Cs(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Os(t, e, n) {
  var r, i, o = Cs(e) ? un : U;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(e, n), a.on = i;
  };
}
function Rs(t, e) {
  var n = this._id;
  return arguments.length < 2 ? L(this.node(), n).on.on(t) : this.each(Os(n, t, e));
}
function Fs(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function Ds() {
  return this.on("end.remove", Fs(this._id));
}
function Ls(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = en(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), c, f, h = 0; h < u; ++h)
      (c = s[h]) && (f = t.call(c, c.__data__, h, s)) && ("__data__" in c && (f.__data__ = c.__data__), l[h] = f, ge(l[h], e, n, h, l, L(c, n)));
  return new j(o, this._parents, e, n);
}
function Bs(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = wr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, c, f = 0; f < l; ++f)
      if (c = u[f]) {
        for (var h = t.call(c, c.__data__, f, u), g, d = L(c, n), p = 0, b = h.length; p < b; ++p)
          (g = h[p]) && ge(g, e, n, p, h, d);
        o.push(h), a.push(c);
      }
  return new j(o, a, e, n);
}
var qs = Dt.prototype.constructor;
function Hs() {
  return new qs(this._groups, this._parents);
}
function Xs(t, e) {
  var n, r, i;
  return function() {
    var o = _t(this, t), a = (this.style.removeProperty(t), _t(this, t));
    return o === a ? null : o === n && a === r ? i : i = e(n = o, r = a);
  };
}
function Hr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Gs(t, e, n) {
  var r, i = n + "", o;
  return function() {
    var a = _t(this, t);
    return a === i ? null : a === r ? o : o = e(r = a, n);
  };
}
function Us(t, e, n) {
  var r, i, o;
  return function() {
    var a = _t(this, t), s = n(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), _t(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = e(r = a, s));
  };
}
function Ys(t, e) {
  var n, r, i, o = "style." + e, a = "end." + o, s;
  return function() {
    var u = U(this, t), l = u.on, c = u.value[o] == null ? s || (s = Hr(e)) : void 0;
    (l !== n || i !== c) && (r = (n = l).copy()).on(a, i = c), u.on = r;
  };
}
function Ks(t, e, n) {
  var r = (t += "") == "transform" ? Za : qr;
  return e == null ? this.styleTween(t, Xs(t, r)).on("end.style." + t, Hr(t)) : typeof e == "function" ? this.styleTween(t, Us(t, r, ln(this, "style." + t, e))).each(Ys(this._id, t)) : this.styleTween(t, Gs(t, r, e), n).on("end.style." + t, null);
}
function Vs(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function js(t, e, n) {
  var r, i;
  function o() {
    var a = e.apply(this, arguments);
    return a !== i && (r = (i = a) && Vs(t, a, n)), r;
  }
  return o._value = e, o;
}
function Zs(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, js(t, e, n ?? ""));
}
function Ws(t) {
  return function() {
    this.textContent = t;
  };
}
function Js(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Qs(t) {
  return this.tween("text", typeof t == "function" ? Js(ln(this, "text", t)) : Ws(t == null ? "" : t + ""));
}
function tu(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function eu(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && tu(i)), e;
  }
  return r._value = t, r;
}
function nu(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, eu(t));
}
function ru() {
  for (var t = this._name, e = this._id, n = Xr(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var c = L(u, e);
        ge(u, t, n, l, a, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new j(r, this._parents, t, n);
}
function iu() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    n.each(function() {
      var l = U(this, r), c = l.on;
      c !== t && (e = (t = c).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(u)), l.on = e;
    }), i === 0 && o();
  });
}
var ou = 0;
function j(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Xr() {
  return ++ou;
}
var K = Dt.prototype;
j.prototype = {
  constructor: j,
  select: Ls,
  selectAll: Bs,
  selectChild: K.selectChild,
  selectChildren: K.selectChildren,
  filter: ks,
  merge: Is,
  selection: Hs,
  transition: ru,
  call: K.call,
  nodes: K.nodes,
  node: K.node,
  size: K.size,
  empty: K.empty,
  each: K.each,
  on: Rs,
  attr: ys,
  attrTween: bs,
  style: Ks,
  styleTween: Zs,
  text: Qs,
  textTween: nu,
  remove: Ds,
  tween: ls,
  delay: As,
  duration: Ps,
  ease: Es,
  easeVarying: zs,
  end: iu,
  [Symbol.iterator]: K[Symbol.iterator]
};
function au(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var su = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: au
};
function uu(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function lu(t) {
  var e, n;
  t instanceof j ? (e = t._id, t = t._name) : (e = Xr(), (n = su).time = sn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && ge(u, t, e, l, a, n || uu(u, e));
  return new j(r, this._parents, t, e);
}
Dt.prototype.interrupt = as;
Dt.prototype.transition = lu;
const Ge = Math.PI, Ue = 2 * Ge, ot = 1e-6, cu = Ue - ot;
function Gr(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function fu(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return Gr;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Ur {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Gr : fu(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, r, i) {
    this._append`Q${+e},${+n},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(e, n, r, i, o, a) {
    this._append`C${+e},${+n},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(e, n, r, i, o) {
    if (e = +e, n = +n, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, u = r - e, l = i - n, c = a - e, f = s - n, h = c * c + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (h > ot) if (!(Math.abs(f * u - l * c) > ot) || !o)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let g = r - a, d = i - s, p = u * u + l * l, b = g * g + d * d, _ = Math.sqrt(p), x = Math.sqrt(h), A = o * Math.tan((Ge - Math.acos((p + h - b) / (2 * _ * x))) / 2), y = A / x, v = A / _;
      Math.abs(y - 1) > ot && this._append`L${e + y * c},${n + y * f}`, this._append`A${o},${o},0,0,${+(f * g > c * d)},${this._x1 = e + v * u},${this._y1 = n + v * l}`;
    }
  }
  arc(e, n, r, i, o, a) {
    if (e = +e, n = +n, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = e + s, c = n + u, f = 1 ^ a, h = a ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${c}` : (Math.abs(this._x1 - l) > ot || Math.abs(this._y1 - c) > ot) && this._append`L${l},${c}`, r && (h < 0 && (h = h % Ue + Ue), h > cu ? this._append`A${r},${r},0,1,${f},${e - s},${n - u}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = c}` : h > ot && this._append`A${r},${r},0,${+(h >= Ge)},${f},${this._x1 = e + r * Math.cos(o)},${this._y1 = n + r * Math.sin(o)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function B() {
  return new Ur();
}
B.prototype = Ur.prototype;
function hu(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function le(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function vt(t) {
  return t = le(Math.abs(t)), t ? t[1] : NaN;
}
function du(t, e) {
  return function(n, r) {
    for (var i = n.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(n.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(e);
  };
}
function pu(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var gu = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ce(t) {
  if (!(e = gu.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new cn({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
ce.prototype = cn.prototype;
function cn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
cn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function yu(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), i = n;
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Yr;
function _u(t, e) {
  var n = le(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], o = i - (Yr = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + le(t, Math.max(0, e + o - 1))[0];
}
function Ln(t, e) {
  var n = le(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const Bn = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: hu,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Ln(t * 100, e),
  r: Ln,
  s: _u,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function qn(t) {
  return t;
}
var Hn = Array.prototype.map, Xn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function mu(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? qn : du(Hn.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? qn : pu(Hn.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(f) {
    f = ce(f);
    var h = f.fill, g = f.align, d = f.sign, p = f.symbol, b = f.zero, _ = f.width, x = f.comma, A = f.precision, y = f.trim, v = f.type;
    v === "n" ? (x = !0, v = "g") : Bn[v] || (A === void 0 && (A = 12), y = !0, v = "g"), (b || h === "0" && g === "=") && (b = !0, h = "0", g = "=");
    var $ = p === "$" ? n : p === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", P = p === "$" ? r : /[%p]/.test(v) ? a : "", E = Bn[v], q = /[defgprs%]/.test(v);
    A = A === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function Y(w) {
      var H = $, N = P, O, qt, tt;
      if (v === "c")
        N = E(w) + N, w = "";
      else {
        w = +w;
        var it = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? u : E(Math.abs(w), A), y && (w = yu(w)), it && +w == 0 && d !== "+" && (it = !1), H = (it ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + H, N = (v === "s" ? Xn[8 + Yr / 3] : "") + N + (it && d === "(" ? ")" : ""), q) {
          for (O = -1, qt = w.length; ++O < qt; )
            if (tt = w.charCodeAt(O), 48 > tt || tt > 57) {
              N = (tt === 46 ? i + w.slice(O + 1) : w.slice(O)) + N, w = w.slice(0, O);
              break;
            }
        }
      }
      x && !b && (w = e(w, 1 / 0));
      var ht = H.length + w.length + N.length, I = ht < _ ? new Array(_ - ht + 1).join(h) : "";
      switch (x && b && (w = e(I + w, I.length ? _ - N.length : 1 / 0), I = ""), g) {
        case "<":
          w = H + w + N + I;
          break;
        case "=":
          w = H + I + w + N;
          break;
        case "^":
          w = I.slice(0, ht = I.length >> 1) + H + w + N + I.slice(ht);
          break;
        default:
          w = I + H + w + N;
          break;
      }
      return o(w);
    }
    return Y.toString = function() {
      return f + "";
    }, Y;
  }
  function c(f, h) {
    var g = l((f = ce(f), f.type = "f", f)), d = Math.max(-8, Math.min(8, Math.floor(vt(h) / 3))) * 3, p = Math.pow(10, -d), b = Xn[8 + d / 3];
    return function(_) {
      return g(p * _) + b;
    };
  }
  return {
    format: l,
    formatPrefix: c
  };
}
var Kt, ye, Kr;
vu({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function vu(t) {
  return Kt = mu(t), ye = Kt.format, Kr = Kt.formatPrefix, Kt;
}
function wu(t) {
  return Math.max(0, -vt(Math.abs(t)));
}
function bu(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(vt(e) / 3))) * 3 - vt(Math.abs(t)));
}
function xu(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, vt(e) - vt(t)) + 1;
}
function Vr(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
const Gn = Symbol("implicit");
function jr() {
  var t = new xn(), e = [], n = [], r = Gn;
  function i(o) {
    let a = t.get(o);
    if (a === void 0) {
      if (r !== Gn) return r;
      t.set(o, a = e.push(o) - 1);
    }
    return n[a % n.length];
  }
  return i.domain = function(o) {
    if (!arguments.length) return e.slice();
    e = [], t = new xn();
    for (const a of o)
      t.has(a) || t.set(a, e.push(a) - 1);
    return i;
  }, i.range = function(o) {
    return arguments.length ? (n = Array.from(o), i) : n.slice();
  }, i.unknown = function(o) {
    return arguments.length ? (r = o, i) : r;
  }, i.copy = function() {
    return jr(e, n).unknown(r);
  }, Vr.apply(i, arguments), i;
}
function Mu(t) {
  return function() {
    return t;
  };
}
function Au(t) {
  return +t;
}
var Un = [0, 1];
function pt(t) {
  return t;
}
function Ye(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Mu(isNaN(e) ? NaN : 0.5);
}
function $u(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function Tu(t, e, n) {
  var r = t[0], i = t[1], o = e[0], a = e[1];
  return i < r ? (r = Ye(i, r), o = n(a, o)) : (r = Ye(r, i), o = n(o, a)), function(s) {
    return o(r(s));
  };
}
function Pu(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++a < r; )
    i[a] = Ye(t[a], t[a + 1]), o[a] = n(e[a], e[a + 1]);
  return function(s) {
    var u = Ai(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function Su(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Eu() {
  var t = Un, e = Un, n = an, r, i, o, a = pt, s, u, l;
  function c() {
    var h = Math.min(t.length, e.length);
    return a !== pt && (a = $u(t[0], t[h - 1])), s = h > 2 ? Pu : Tu, u = l = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? o : (u || (u = s(t.map(r), e, n)))(r(a(h)));
  }
  return f.invert = function(h) {
    return a(i((l || (l = s(e, t.map(r), R)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, Au), c()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (e = Array.from(h), c()) : e.slice();
  }, f.rangeRound = function(h) {
    return e = Array.from(h), n = Ka, c();
  }, f.clamp = function(h) {
    return arguments.length ? (a = h ? !0 : pt, c()) : a !== pt;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, c()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (o = h, f) : o;
  }, function(h, g) {
    return r = h, i = g, c();
  };
}
function Nu() {
  return Eu()(pt, pt);
}
function zu(t, e, n, r) {
  var i = ki(t, e, n), o;
  switch (r = ce(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(o = bu(i, a)) && (r.precision = o), Kr(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = xu(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = wu(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return ye(r);
}
function ku(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return zi(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return zu(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, l, c = 10;
    for (s < a && (l = a, a = s, s = l, l = i, i = o, o = l); c-- > 0; ) {
      if (l = Oe(a, s, n), l === u)
        return r[i] = a, r[o] = s, e(r);
      if (l > 0)
        a = Math.floor(a / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        a = Math.ceil(a * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      u = l;
    }
    return t;
  }, t;
}
function nt() {
  var t = Nu();
  return t.copy = function() {
    return Su(t, nt());
  }, Vr.apply(t, arguments), ku(t);
}
function St(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
St.prototype = {
  constructor: St,
  scale: function(t) {
    return t === 1 ? this : new St(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new St(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
St.prototype;
var Zr = typeof global == "object" && global && global.Object === Object && global, Iu = typeof self == "object" && self && self.Object === Object && self, W = Zr || Iu || Function("return this")(), G = W.Symbol, Wr = Object.prototype, Cu = Wr.hasOwnProperty, Ou = Wr.toString, $t = G ? G.toStringTag : void 0;
function Ru(t) {
  var e = Cu.call(t, $t), n = t[$t];
  try {
    t[$t] = void 0;
    var r = !0;
  } catch {
  }
  var i = Ou.call(t);
  return r && (e ? t[$t] = n : delete t[$t]), i;
}
var Fu = Object.prototype, Du = Fu.toString;
function Lu(t) {
  return Du.call(t);
}
var Bu = "[object Null]", qu = "[object Undefined]", Yn = G ? G.toStringTag : void 0;
function xt(t) {
  return t == null ? t === void 0 ? qu : Bu : Yn && Yn in Object(t) ? Ru(t) : Lu(t);
}
function wt(t) {
  return t != null && typeof t == "object";
}
var Hu = "[object Symbol]";
function Bt(t) {
  return typeof t == "symbol" || wt(t) && xt(t) == Hu;
}
function Jr(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = Array(r); ++n < r; )
    i[n] = e(t[n], n, t);
  return i;
}
var C = Array.isArray, Kn = G ? G.prototype : void 0, Vn = Kn ? Kn.toString : void 0;
function Qr(t) {
  if (typeof t == "string")
    return t;
  if (C(t))
    return Jr(t, Qr) + "";
  if (Bt(t))
    return Vn ? Vn.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
var Xu = /\s/;
function Gu(t) {
  for (var e = t.length; e-- && Xu.test(t.charAt(e)); )
    ;
  return e;
}
var Uu = /^\s+/;
function Yu(t) {
  return t && t.slice(0, Gu(t) + 1).replace(Uu, "");
}
function bt(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var jn = NaN, Ku = /^[-+]0x[0-9a-f]+$/i, Vu = /^0b[01]+$/i, ju = /^0o[0-7]+$/i, Zu = parseInt;
function Wu(t) {
  if (typeof t == "number")
    return t;
  if (Bt(t))
    return jn;
  if (bt(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = bt(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = Yu(t);
  var n = Vu.test(t);
  return n || ju.test(t) ? Zu(t.slice(2), n ? 2 : 8) : Ku.test(t) ? jn : +t;
}
var Ju = 1 / 0, Qu = 17976931348623157e292;
function $e(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = Wu(t), t === Ju || t === -1 / 0) {
    var e = t < 0 ? -1 : 1;
    return e * Qu;
  }
  return t === t ? t : 0;
}
function ti(t) {
  return t;
}
var tl = "[object AsyncFunction]", el = "[object Function]", nl = "[object GeneratorFunction]", rl = "[object Proxy]";
function ei(t) {
  if (!bt(t))
    return !1;
  var e = xt(t);
  return e == el || e == nl || e == tl || e == rl;
}
var Te = W["__core-js_shared__"], Zn = function() {
  var t = /[^.]+$/.exec(Te && Te.keys && Te.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function il(t) {
  return !!Zn && Zn in t;
}
var ol = Function.prototype, al = ol.toString;
function ft(t) {
  if (t != null) {
    try {
      return al.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var sl = /[\\^$.*+?()[\]{}|]/g, ul = /^\[object .+?Constructor\]$/, ll = Function.prototype, cl = Object.prototype, fl = ll.toString, hl = cl.hasOwnProperty, dl = RegExp(
  "^" + fl.call(hl).replace(sl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function pl(t) {
  if (!bt(t) || il(t))
    return !1;
  var e = ei(t) ? dl : ul;
  return e.test(ft(t));
}
function gl(t, e) {
  return t == null ? void 0 : t[e];
}
function Mt(t, e) {
  var n = gl(t, e);
  return pl(n) ? n : void 0;
}
var Ke = Mt(W, "WeakMap");
function yl(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1; )
    ;
  return t;
}
var _l = 9007199254740991, ml = /^(?:0|[1-9]\d*)$/;
function fn(t, e) {
  var n = typeof t;
  return e = e ?? _l, !!e && (n == "number" || n != "symbol" && ml.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function hn(t, e) {
  return t === e || t !== t && e !== e;
}
var vl = 9007199254740991;
function dn(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= vl;
}
function _e(t) {
  return t != null && dn(t.length) && !ei(t);
}
function wl(t, e, n) {
  if (!bt(n))
    return !1;
  var r = typeof e;
  return (r == "number" ? _e(n) && fn(e, n.length) : r == "string" && e in n) ? hn(n[e], t) : !1;
}
var bl = Object.prototype;
function xl(t) {
  var e = t && t.constructor, n = typeof e == "function" && e.prototype || bl;
  return t === n;
}
function Ml(t, e) {
  for (var n = -1, r = Array(t); ++n < t; )
    r[n] = e(n);
  return r;
}
var Al = "[object Arguments]";
function Wn(t) {
  return wt(t) && xt(t) == Al;
}
var ni = Object.prototype, $l = ni.hasOwnProperty, Tl = ni.propertyIsEnumerable, pn = Wn(/* @__PURE__ */ function() {
  return arguments;
}()) ? Wn : function(t) {
  return wt(t) && $l.call(t, "callee") && !Tl.call(t, "callee");
};
function Pl() {
  return !1;
}
var ri = typeof exports == "object" && exports && !exports.nodeType && exports, Jn = ri && typeof module == "object" && module && !module.nodeType && module, Sl = Jn && Jn.exports === ri, Qn = Sl ? W.Buffer : void 0, El = Qn ? Qn.isBuffer : void 0, Ve = El || Pl, Nl = "[object Arguments]", zl = "[object Array]", kl = "[object Boolean]", Il = "[object Date]", Cl = "[object Error]", Ol = "[object Function]", Rl = "[object Map]", Fl = "[object Number]", Dl = "[object Object]", Ll = "[object RegExp]", Bl = "[object Set]", ql = "[object String]", Hl = "[object WeakMap]", Xl = "[object ArrayBuffer]", Gl = "[object DataView]", Ul = "[object Float32Array]", Yl = "[object Float64Array]", Kl = "[object Int8Array]", Vl = "[object Int16Array]", jl = "[object Int32Array]", Zl = "[object Uint8Array]", Wl = "[object Uint8ClampedArray]", Jl = "[object Uint16Array]", Ql = "[object Uint32Array]", M = {};
M[Ul] = M[Yl] = M[Kl] = M[Vl] = M[jl] = M[Zl] = M[Wl] = M[Jl] = M[Ql] = !0;
M[Nl] = M[zl] = M[Xl] = M[kl] = M[Gl] = M[Il] = M[Cl] = M[Ol] = M[Rl] = M[Fl] = M[Dl] = M[Ll] = M[Bl] = M[ql] = M[Hl] = !1;
function tc(t) {
  return wt(t) && dn(t.length) && !!M[xt(t)];
}
function ec(t) {
  return function(e) {
    return t(e);
  };
}
var ii = typeof exports == "object" && exports && !exports.nodeType && exports, Et = ii && typeof module == "object" && module && !module.nodeType && module, nc = Et && Et.exports === ii, Pe = nc && Zr.process, tr = function() {
  try {
    var t = Et && Et.require && Et.require("util").types;
    return t || Pe && Pe.binding && Pe.binding("util");
  } catch {
  }
}(), er = tr && tr.isTypedArray, oi = er ? ec(er) : tc, rc = Object.prototype, ic = rc.hasOwnProperty;
function oc(t, e) {
  var n = C(t), r = !n && pn(t), i = !n && !r && Ve(t), o = !n && !r && !i && oi(t), a = n || r || i || o, s = a ? Ml(t.length, String) : [], u = s.length;
  for (var l in t)
    ic.call(t, l) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    fn(l, u))) && s.push(l);
  return s;
}
function ac(t, e) {
  return function(n) {
    return t(e(n));
  };
}
var sc = ac(Object.keys, Object), uc = Object.prototype, lc = uc.hasOwnProperty;
function cc(t) {
  if (!xl(t))
    return sc(t);
  var e = [];
  for (var n in Object(t))
    lc.call(t, n) && n != "constructor" && e.push(n);
  return e;
}
function gn(t) {
  return _e(t) ? oc(t) : cc(t);
}
var fc = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, hc = /^\w*$/;
function yn(t, e) {
  if (C(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Bt(t) ? !0 : hc.test(t) || !fc.test(t) || e != null && t in Object(e);
}
var Ct = Mt(Object, "create");
function dc() {
  this.__data__ = Ct ? Ct(null) : {}, this.size = 0;
}
function pc(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var gc = "__lodash_hash_undefined__", yc = Object.prototype, _c = yc.hasOwnProperty;
function mc(t) {
  var e = this.__data__;
  if (Ct) {
    var n = e[t];
    return n === gc ? void 0 : n;
  }
  return _c.call(e, t) ? e[t] : void 0;
}
var vc = Object.prototype, wc = vc.hasOwnProperty;
function bc(t) {
  var e = this.__data__;
  return Ct ? e[t] !== void 0 : wc.call(e, t);
}
var xc = "__lodash_hash_undefined__";
function Mc(t, e) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Ct && e === void 0 ? xc : e, this;
}
function ct(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
ct.prototype.clear = dc;
ct.prototype.delete = pc;
ct.prototype.get = mc;
ct.prototype.has = bc;
ct.prototype.set = Mc;
function Ac() {
  this.__data__ = [], this.size = 0;
}
function me(t, e) {
  for (var n = t.length; n--; )
    if (hn(t[n][0], e))
      return n;
  return -1;
}
var $c = Array.prototype, Tc = $c.splice;
function Pc(t) {
  var e = this.__data__, n = me(e, t);
  if (n < 0)
    return !1;
  var r = e.length - 1;
  return n == r ? e.pop() : Tc.call(e, n, 1), --this.size, !0;
}
function Sc(t) {
  var e = this.__data__, n = me(e, t);
  return n < 0 ? void 0 : e[n][1];
}
function Ec(t) {
  return me(this.__data__, t) > -1;
}
function Nc(t, e) {
  var n = this.__data__, r = me(n, t);
  return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this;
}
function J(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
J.prototype.clear = Ac;
J.prototype.delete = Pc;
J.prototype.get = Sc;
J.prototype.has = Ec;
J.prototype.set = Nc;
var Ot = Mt(W, "Map");
function zc() {
  this.size = 0, this.__data__ = {
    hash: new ct(),
    map: new (Ot || J)(),
    string: new ct()
  };
}
function kc(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function ve(t, e) {
  var n = t.__data__;
  return kc(e) ? n[typeof e == "string" ? "string" : "hash"] : n.map;
}
function Ic(t) {
  var e = ve(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Cc(t) {
  return ve(this, t).get(t);
}
function Oc(t) {
  return ve(this, t).has(t);
}
function Rc(t, e) {
  var n = ve(this, t), r = n.size;
  return n.set(t, e), this.size += n.size == r ? 0 : 1, this;
}
function Q(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++e < n; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Q.prototype.clear = zc;
Q.prototype.delete = Ic;
Q.prototype.get = Cc;
Q.prototype.has = Oc;
Q.prototype.set = Rc;
var Fc = "Expected a function";
function _n(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(Fc);
  var n = function() {
    var r = arguments, i = e ? e.apply(this, r) : r[0], o = n.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return n.cache = o.set(i, a) || o, a;
  };
  return n.cache = new (_n.Cache || Q)(), n;
}
_n.Cache = Q;
var Dc = 500;
function Lc(t) {
  var e = _n(t, function(r) {
    return n.size === Dc && n.clear(), r;
  }), n = e.cache;
  return e;
}
var Bc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, qc = /\\(\\)?/g, Hc = Lc(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(Bc, function(n, r, i, o) {
    e.push(i ? o.replace(qc, "$1") : r || n);
  }), e;
});
function Xc(t) {
  return t == null ? "" : Qr(t);
}
function ai(t, e) {
  return C(t) ? t : yn(t, e) ? [t] : Hc(Xc(t));
}
function we(t) {
  if (typeof t == "string" || Bt(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -1 / 0 ? "-0" : e;
}
function si(t, e) {
  e = ai(e, t);
  for (var n = 0, r = e.length; t != null && n < r; )
    t = t[we(e[n++])];
  return n && n == r ? t : void 0;
}
function Gc(t, e, n) {
  var r = t == null ? void 0 : si(t, e);
  return r === void 0 ? n : r;
}
function ui(t, e) {
  for (var n = -1, r = e.length, i = t.length; ++n < r; )
    t[i + n] = e[n];
  return t;
}
var nr = G ? G.isConcatSpreadable : void 0;
function Uc(t) {
  return C(t) || pn(t) || !!(nr && t && t[nr]);
}
function Yc(t, e, n, r, i) {
  var o = -1, a = t.length;
  for (n || (n = Uc), i || (i = []); ++o < a; ) {
    var s = t[o];
    n(s) ? ui(i, s) : i[i.length] = s;
  }
  return i;
}
function li(t) {
  var e = t == null ? 0 : t.length;
  return e ? Yc(t) : [];
}
function Kc() {
  this.__data__ = new J(), this.size = 0;
}
function Vc(t) {
  var e = this.__data__, n = e.delete(t);
  return this.size = e.size, n;
}
function jc(t) {
  return this.__data__.get(t);
}
function Zc(t) {
  return this.__data__.has(t);
}
var Wc = 200;
function Jc(t, e) {
  var n = this.__data__;
  if (n instanceof J) {
    var r = n.__data__;
    if (!Ot || r.length < Wc - 1)
      return r.push([t, e]), this.size = ++n.size, this;
    n = this.__data__ = new Q(r);
  }
  return n.set(t, e), this.size = n.size, this;
}
function V(t) {
  var e = this.__data__ = new J(t);
  this.size = e.size;
}
V.prototype.clear = Kc;
V.prototype.delete = Vc;
V.prototype.get = jc;
V.prototype.has = Zc;
V.prototype.set = Jc;
function Qc(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++n < r; ) {
    var a = t[n];
    e(a, n, t) && (o[i++] = a);
  }
  return o;
}
function tf() {
  return [];
}
var ef = Object.prototype, nf = ef.propertyIsEnumerable, rr = Object.getOwnPropertySymbols, rf = rr ? function(t) {
  return t == null ? [] : (t = Object(t), Qc(rr(t), function(e) {
    return nf.call(t, e);
  }));
} : tf;
function of(t, e, n) {
  var r = e(t);
  return C(t) ? r : ui(r, n(t));
}
function ir(t) {
  return of(t, gn, rf);
}
var je = Mt(W, "DataView"), Ze = Mt(W, "Promise"), We = Mt(W, "Set"), or = "[object Map]", af = "[object Object]", ar = "[object Promise]", sr = "[object Set]", ur = "[object WeakMap]", lr = "[object DataView]", sf = ft(je), uf = ft(Ot), lf = ft(Ze), cf = ft(We), ff = ft(Ke), et = xt;
(je && et(new je(new ArrayBuffer(1))) != lr || Ot && et(new Ot()) != or || Ze && et(Ze.resolve()) != ar || We && et(new We()) != sr || Ke && et(new Ke()) != ur) && (et = function(t) {
  var e = xt(t), n = e == af ? t.constructor : void 0, r = n ? ft(n) : "";
  if (r)
    switch (r) {
      case sf:
        return lr;
      case uf:
        return or;
      case lf:
        return ar;
      case cf:
        return sr;
      case ff:
        return ur;
    }
  return e;
});
var cr = W.Uint8Array, hf = "__lodash_hash_undefined__";
function df(t) {
  return this.__data__.set(t, hf), this;
}
function pf(t) {
  return this.__data__.has(t);
}
function fe(t) {
  var e = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new Q(); ++e < n; )
    this.add(t[e]);
}
fe.prototype.add = fe.prototype.push = df;
fe.prototype.has = pf;
function gf(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length; ++n < r; )
    if (e(t[n], n, t))
      return !0;
  return !1;
}
function yf(t, e) {
  return t.has(e);
}
var _f = 1, mf = 2;
function ci(t, e, n, r, i, o) {
  var a = n & _f, s = t.length, u = e.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(t), c = o.get(e);
  if (l && c)
    return l == e && c == t;
  var f = -1, h = !0, g = n & mf ? new fe() : void 0;
  for (o.set(t, e), o.set(e, t); ++f < s; ) {
    var d = t[f], p = e[f];
    if (r)
      var b = a ? r(p, d, f, e, t, o) : r(d, p, f, t, e, o);
    if (b !== void 0) {
      if (b)
        continue;
      h = !1;
      break;
    }
    if (g) {
      if (!gf(e, function(_, x) {
        if (!yf(g, x) && (d === _ || i(d, _, n, r, o)))
          return g.push(x);
      })) {
        h = !1;
        break;
      }
    } else if (!(d === p || i(d, p, n, r, o))) {
      h = !1;
      break;
    }
  }
  return o.delete(t), o.delete(e), h;
}
function vf(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r, i) {
    n[++e] = [i, r];
  }), n;
}
function wf(t) {
  var e = -1, n = Array(t.size);
  return t.forEach(function(r) {
    n[++e] = r;
  }), n;
}
var bf = 1, xf = 2, Mf = "[object Boolean]", Af = "[object Date]", $f = "[object Error]", Tf = "[object Map]", Pf = "[object Number]", Sf = "[object RegExp]", Ef = "[object Set]", Nf = "[object String]", zf = "[object Symbol]", kf = "[object ArrayBuffer]", If = "[object DataView]", fr = G ? G.prototype : void 0, Se = fr ? fr.valueOf : void 0;
function Cf(t, e, n, r, i, o, a) {
  switch (n) {
    case If:
      if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
        return !1;
      t = t.buffer, e = e.buffer;
    case kf:
      return !(t.byteLength != e.byteLength || !o(new cr(t), new cr(e)));
    case Mf:
    case Af:
    case Pf:
      return hn(+t, +e);
    case $f:
      return t.name == e.name && t.message == e.message;
    case Sf:
    case Nf:
      return t == e + "";
    case Tf:
      var s = vf;
    case Ef:
      var u = r & bf;
      if (s || (s = wf), t.size != e.size && !u)
        return !1;
      var l = a.get(t);
      if (l)
        return l == e;
      r |= xf, a.set(t, e);
      var c = ci(s(t), s(e), r, i, o, a);
      return a.delete(t), c;
    case zf:
      if (Se)
        return Se.call(t) == Se.call(e);
  }
  return !1;
}
var Of = 1, Rf = Object.prototype, Ff = Rf.hasOwnProperty;
function Df(t, e, n, r, i, o) {
  var a = n & Of, s = ir(t), u = s.length, l = ir(e), c = l.length;
  if (u != c && !a)
    return !1;
  for (var f = u; f--; ) {
    var h = s[f];
    if (!(a ? h in e : Ff.call(e, h)))
      return !1;
  }
  var g = o.get(t), d = o.get(e);
  if (g && d)
    return g == e && d == t;
  var p = !0;
  o.set(t, e), o.set(e, t);
  for (var b = a; ++f < u; ) {
    h = s[f];
    var _ = t[h], x = e[h];
    if (r)
      var A = a ? r(x, _, h, e, t, o) : r(_, x, h, t, e, o);
    if (!(A === void 0 ? _ === x || i(_, x, n, r, o) : A)) {
      p = !1;
      break;
    }
    b || (b = h == "constructor");
  }
  if (p && !b) {
    var y = t.constructor, v = e.constructor;
    y != v && "constructor" in t && "constructor" in e && !(typeof y == "function" && y instanceof y && typeof v == "function" && v instanceof v) && (p = !1);
  }
  return o.delete(t), o.delete(e), p;
}
var Lf = 1, hr = "[object Arguments]", dr = "[object Array]", Vt = "[object Object]", Bf = Object.prototype, pr = Bf.hasOwnProperty;
function qf(t, e, n, r, i, o) {
  var a = C(t), s = C(e), u = a ? dr : et(t), l = s ? dr : et(e);
  u = u == hr ? Vt : u, l = l == hr ? Vt : l;
  var c = u == Vt, f = l == Vt, h = u == l;
  if (h && Ve(t)) {
    if (!Ve(e))
      return !1;
    a = !0, c = !1;
  }
  if (h && !c)
    return o || (o = new V()), a || oi(t) ? ci(t, e, n, r, i, o) : Cf(t, e, u, n, r, i, o);
  if (!(n & Lf)) {
    var g = c && pr.call(t, "__wrapped__"), d = f && pr.call(e, "__wrapped__");
    if (g || d) {
      var p = g ? t.value() : t, b = d ? e.value() : e;
      return o || (o = new V()), i(p, b, n, r, o);
    }
  }
  return h ? (o || (o = new V()), Df(t, e, n, r, i, o)) : !1;
}
function mn(t, e, n, r, i) {
  return t === e ? !0 : t == null || e == null || !wt(t) && !wt(e) ? t !== t && e !== e : qf(t, e, n, r, mn, i);
}
var Hf = 1, Xf = 2;
function Gf(t, e, n, r) {
  var i = n.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = n[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = n[i];
    var s = a[0], u = t[s], l = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var c = new V(), f;
      if (!(f === void 0 ? mn(l, u, Hf | Xf, r, c) : f))
        return !1;
    }
  }
  return !0;
}
function fi(t) {
  return t === t && !bt(t);
}
function Uf(t) {
  for (var e = gn(t), n = e.length; n--; ) {
    var r = e[n], i = t[r];
    e[n] = [r, i, fi(i)];
  }
  return e;
}
function hi(t, e) {
  return function(n) {
    return n == null ? !1 : n[t] === e && (e !== void 0 || t in Object(n));
  };
}
function Yf(t) {
  var e = Uf(t);
  return e.length == 1 && e[0][2] ? hi(e[0][0], e[0][1]) : function(n) {
    return n === t || Gf(n, t, e);
  };
}
function Kf(t, e) {
  return t != null && e in Object(t);
}
function Vf(t, e, n) {
  e = ai(e, t);
  for (var r = -1, i = e.length, o = !1; ++r < i; ) {
    var a = we(e[r]);
    if (!(o = t != null && n(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && dn(i) && fn(a, i) && (C(t) || pn(t)));
}
function jf(t, e) {
  return t != null && Vf(t, e, Kf);
}
var Zf = 1, Wf = 2;
function Jf(t, e) {
  return yn(t) && fi(e) ? hi(we(t), e) : function(n) {
    var r = Gc(n, t);
    return r === void 0 && r === e ? jf(n, t) : mn(e, r, Zf | Wf);
  };
}
function Qf(t) {
  return function(e) {
    return e == null ? void 0 : e[t];
  };
}
function th(t) {
  return function(e) {
    return si(e, t);
  };
}
function eh(t) {
  return yn(t) ? Qf(we(t)) : th(t);
}
function vn(t) {
  return typeof t == "function" ? t : t == null ? ti : typeof t == "object" ? C(t) ? Jf(t[0], t[1]) : Yf(t) : eh(t);
}
function nh(t) {
  return function(e, n, r) {
    for (var i = -1, o = Object(e), a = r(e), s = a.length; s--; ) {
      var u = a[++i];
      if (n(o[u], u, o) === !1)
        break;
    }
    return e;
  };
}
var rh = nh();
function ih(t, e) {
  return t && rh(t, e, gn);
}
function oh(t, e) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!_e(n))
      return t(n, r);
    for (var i = n.length, o = -1, a = Object(n); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return n;
  };
}
var di = oh(ih);
function ah(t) {
  return typeof t == "function" ? t : ti;
}
function rt(t, e) {
  var n = C(t) ? yl : di;
  return n(t, ah(e));
}
function sh(t, e) {
  var n = -1, r = _e(t) ? Array(t.length) : [];
  return di(t, function(i, o, a) {
    r[++n] = e(i, o, a);
  }), r;
}
function he(t, e) {
  var n = C(t) ? Jr : sh;
  return n(t, vn(e));
}
function uh(t, e) {
  return t > e;
}
function lh(t, e) {
  return t < e;
}
function pi(t, e, n) {
  for (var r = -1, i = t.length; ++r < i; ) {
    var o = t[r], a = e(o);
    if (a != null && (s === void 0 ? a === a && !Bt(a) : n(a, s)))
      var s = a, u = o;
  }
  return u;
}
function gr(t, e) {
  return t && t.length ? pi(t, vn(e), uh) : void 0;
}
function yr(t, e) {
  return t && t.length ? pi(t, vn(e), lh) : void 0;
}
var ch = Math.ceil, fh = Math.max;
function hh(t, e, n, r) {
  for (var i = -1, o = fh(ch((e - t) / (n || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += n;
  return a;
}
function dh(t) {
  return function(e, n, r) {
    return r && typeof r != "number" && wl(e, n, r) && (n = r = void 0), e = $e(e), n === void 0 ? (n = e, e = 0) : n = $e(n), r = r === void 0 ? e < n ? 1 : -1 : $e(r), hh(e, n, r);
  };
}
var gi = dh();
const ph = (t, e, n = 12, r = 12) => {
  const i = nt().domain([0, n]).range([0, t]), o = nt().domain([0, r]).range([0, e]);
  return {
    points: function() {
      return gi((n + 1) * (r + 1)).map(function(u) {
        return { m: u % (n + 1), n: Math.floor(u / (n + 1)), x: i(u % (n + 1)), y: o(Math.floor(u / (n + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const c = li(he(l, function(f) {
        return he(
          u,
          function(h) {
            return { x: i(h), y: o(f) };
          }
        );
      }));
      return c.length == 1 ? c[0] : c;
    }
  };
}, gh = "_widget_18g36_1", yh = "_label_18g36_19", _h = "_lit_18g36_24", mh = "_button_18g36_29", vh = "_symbol_18g36_29", wh = "_radio_18g36_29", bh = "_radiobutton_18g36_29", xh = "_selected_18g36_35", Mh = "_toggle_18g36_35", Ah = "_slider_18g36_44", $h = "_track_18g36_44", Th = "_track_overlay_18g36_48", Ph = "_handle_18g36_55", m = {
  widget: gh,
  label: yh,
  lit: _h,
  button: mh,
  symbol: vh,
  radio: wh,
  radiobutton: bh,
  selected: xh,
  toggle: Mh,
  slider: Ah,
  track: $h,
  track_overlay: Th,
  handle: Ph
}, wn = () => {
  const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", n = e.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += e[Math.floor(Math.random() * n)];
  return r;
}, bn = (t, e, n) => {
  var r, i, o, a;
  switch (n) {
    case "top":
      r = 0, i = -e / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = e / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = e / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, Sh = (t = 1) => {
  const e = B();
  return e.moveTo(t * 1, t * 0), e.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, Eh = (t = 1) => {
  const e = B(), n = 0.7;
  return e.moveTo(n * t * (1 + 0.75), n * t * 0), e.lineTo(n * t * (-0.5 + 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 + 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.moveTo(n * t * (1 - 0.75), n * t * 0), e.lineTo(n * t * (-0.5 - 0.75), n * t * (Math.sqrt(3) / 2)), e.lineTo(n * t * (-0.5 - 0.75), n * t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, Nh = (t = 1) => {
  const e = B();
  return e.moveTo(-t * 1, t * 0), e.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), e.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), e.closePath(), e.toString();
}, zh = (t = 1) => {
  const e = 0.3333333333333333, n = 0.9;
  var r = B();
  return r.moveTo(t * n, t * n), r.lineTo(t * n, t * -0.9), r.lineTo(t * (n * e), t * -0.9), r.lineTo(t * (n * e), t * n), r.closePath(), r.moveTo(-t * n, t * n), r.lineTo(-t * n, t * -0.9), r.lineTo(-t * (n * e), t * -0.9), r.lineTo(-t * (n * e), t * n), r.closePath(), r.toString();
}, kh = (t = 1) => {
  const e = B(), n = Math.PI / 2.5, r = n / 2, i = 2 * Math.PI - n / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return e.moveTo(t * Math.cos(i), t * Math.sin(i)), e.arc(0, 0, t, i, r, !0), e.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), e.arc(0, 0, t * (1 - o), r, i, !1), e.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), e.lineTo(u[0] + l[0], u[1] + l[1]), e.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), e.closePath(), e.toString();
}, Ih = (t = 1) => {
  const e = B(), n = Math.PI / 10, r = t / 2, i = Math.PI - n, o = n, a = -n, s = Math.PI + n;
  return e.arc(0, 0, r, s, a), e.lineTo(t, r * Math.sin(s)), e.lineTo(t, -t), e.lineTo(-t, -t), e.lineTo(-t, r * Math.sin(s)), e.closePath(), e.arc(0, 0, r, o, i), e.lineTo(-t, r * Math.sin(i)), e.lineTo(-t, t), e.lineTo(t, t), e.lineTo(t, r * Math.sin(i)), e.closePath(), e.toString();
}, Ch = (t = 1) => {
  const e = B(), n = Math.PI / 2.5, r = n / 2 + Math.PI, i = 2 * Math.PI - n / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  e.moveTo(t * Math.cos(r), t * Math.sin(r)), e.arc(0, 0, t, r, i, !1), e.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), e.arc(0, 0, t * (1 - o), i, r, !0), e.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return e.lineTo(u[0] + l[0], u[1] + l[1]), e.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), e.closePath(), e.toString();
}, Oh = (t = 1) => {
  var e = B(), n = 0.9;
  return e.moveTo(t * n, t * n), e.lineTo(t * -0.9, t * n), e.lineTo(t * -0.9, t * -0.9), e.lineTo(t * n, t * -0.9), e.closePath(), e.toString();
}, Rh = (t = 1) => {
  const e = B(), n = 0, r = 2 * Math.PI;
  return e.moveTo(t * Math.cos(n), t * Math.sin(n)), e.arc(0, 0, t, n, r, !0), e.closePath(), e.toString();
}, Je = (t) => {
  switch (t) {
    case "play":
      return Sh;
    case "forward":
      return Eh;
    case "back":
      return Nh;
    case "pause":
      return zh;
    case "reload":
      return kh;
    case "capture":
      return Ih;
    case "rewind":
      return Ch;
    case "stop":
      return Oh;
    case "push":
      return Rh;
  }
}, Fh = () => {
  const t = "button";
  var e = wn(), n = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", u = null, l = function(d) {
  }, c = ["play"], f = 0;
  return {
    type: t,
    id: function(d) {
      return typeof d > "u" ? e : (e = d, this);
    },
    size: function(d) {
      return typeof d > "u" ? n : (n = d, this);
    },
    symbolsize: function(d) {
      return typeof d > "u" ? r : (r = d, this);
    },
    shape: function(d) {
      return typeof d > "u" ? i : (i = d, this);
    },
    position: function(d) {
      return typeof d > "u" ? o : (o = d, this);
    },
    x: function(d) {
      return typeof d > "u" ? o.x : (o.x = d, this);
    },
    y: function(d) {
      return typeof d > "u" ? o.y : (o.y = d, this);
    },
    label: function(d) {
      return typeof d > "u" ? a : (a = d, this);
    },
    labelposition: function(d) {
      return typeof d > "u" ? s : (s = d, this);
    },
    fontsize: function(d) {
      return typeof d > "u" ? u : (u = d, this);
    },
    update: function(d) {
      if (typeof d == "function")
        return l = d, this;
      l(d);
    },
    actions: function(d) {
      return typeof d > "u" ? c : (c = d, this);
    },
    value: function(d) {
      return typeof d > "u" ? f : (f = d, this);
    },
    click: function() {
      f = (f + 1) % c.length, l(), T(this.parentNode).select("." + m.symbol).attr("d", Je(c[f])(r * n));
    },
    press: function(d) {
      f = (f + 1) % c.length, l(), d.select("#button_" + e).select("." + m.symbol).attr("d", Je(c[f])(r * n));
    }
  };
}, Dh = () => {
  const t = "slider", e = ye(".3f");
  var n = wn(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, u = "top-left", l = null, c = function(_) {
  }, f = function(_) {
  }, h = [0, 1], g = 0, d = null, p = nt().domain(h).range([0, r]).clamp(!0);
  const b = function(_, x, A = h) {
    const y = _.select("#slider_" + n);
    p.domain(A), g = x, y.selectAll("." + m.handle).transition().attr("cx", p(x)), a && y.select("." + m.label).text(d + " = " + e(g)), c(), f();
  };
  return {
    type: t,
    scale: p,
    id: function(_) {
      return typeof _ > "u" ? n : (n = _, this);
    },
    label: function(_) {
      return typeof _ > "u" ? d : (d = _, this);
    },
    size: function(_) {
      return typeof _ > "u" ? r : (r = _, this);
    },
    girth: function(_) {
      return typeof _ > "u" ? i : (i = _, this);
    },
    knob: function(_) {
      return typeof _ > "u" ? o : (o = _, this);
    },
    show: function(_) {
      return typeof _ > "u" ? a : (a = _, this);
    },
    position: function(_) {
      return typeof _ > "u" ? s : (s = _, this);
    },
    x: function(_) {
      return typeof _ > "u" ? s.x : (s.x = _, this);
    },
    y: function(_) {
      return typeof _ > "u" ? s.y : (s.y = _, this);
    },
    labelposition: function(_) {
      return typeof _ > "u" ? u : (u = _, this);
    },
    fontsize: function(_) {
      return typeof _ > "u" ? l : (l = _, this);
    },
    update: function(_) {
      if (typeof _ == "function")
        return c = _, this;
      c(_);
    },
    update_end: function(_) {
      if (typeof _ == "function")
        return f = _, this;
      f(_);
    },
    range: function(_) {
      return typeof _ > "u" ? h : (h = _, this);
    },
    value: function(_) {
      return typeof _ > "u" ? g : (g = _, this);
    },
    reset: b,
    click: b
  };
}, Lh = () => {
  const t = "radio";
  var e = wn(), n = 100, r = 20, i = 0.3, o = "round", a = "vertical", s = { x: 0, y: 0 }, u = "right", l = null, c = function(p) {
  }, f = [], h = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    buttonsize: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    buttonpadding: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    orientation: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? s.x : (s.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? s.y : (s.y = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? u : (u = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? l : (l = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return c = p, this;
      c(p);
    },
    choices: function(p) {
      return typeof p > "u" ? f : (f = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? h : (h = p, this);
    },
    click: function(p, b) {
      h = b, T(this.parentNode).selectAll("." + m.symbol).classed(m.selected, (_) => _ == h), c();
    },
    reset: function(p, b) {
      h = b, p.select("#radio_" + e).selectAll("." + m.symbol).classed(m.selected, (_) => _ == h), c();
    }
  };
}, Bh = (t, e) => {
  const n = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = T(o).attr("class", m.widget + " " + m.button).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", m.background).on("click", t.click).on("mouseover", function() {
    T(this).classed(m.lit, !0), T(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    T(this).classed(m.lit, !1), T(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), a.append("path").attr("d", Je(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", m.symbol), r) {
    const u = bn(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, yi = (t, e) => {
  const n = B();
  return n.moveTo(0, e / 2), n.arc(0, 0, e / 2, Math.PI / 2, 3 * Math.PI / 2, !1), n.lineTo(t, -e / 2), n.arc(t, 0, e / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), n.closePath(), n.toString();
}, qh = (t, e) => {
  const n = ye(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = T(u).attr("class", m.widget + " " + m.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", yi(t.size(), t.girth())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", m.track_overlay).on("click", function(d) {
    const p = Fe(d, this)[0];
    t.value(a.invert(p)), t.update(), t.update_end(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + n(t.value()));
  }).call(
    Aa().on("drag", function(d) {
      t.value(a.invert(d.x)), t.update(), s.selectAll("." + m.handle).attr("cx", a(t.value())), t.show() && s.select("." + m.label).text(t.label() + " = " + n(t.value()));
    }).on("end", function(d) {
      t.update_end();
    })
  );
  var c, f, h, g = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? Ht([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -Ht([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? Ht([t.girth() / 2, t.knob()]) + 7 : -Ht([t.girth() / 2, t.knob()]) - 7, c = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, h = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", g = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + n(t.value()) : t.label()).attr("class", m.label).style("text-anchor", h).style("alignment-baseline", g).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + c + "," + f + ")"), u;
}, Hh = (t, e) => {
  const n = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = T(a).attr("class", m.widget + " " + m.toggle).attr("id", n).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(m.selected, t.value() == 1);
  if (s.append("path").attr("d", yi(2 * t.size(), 2 * t.size())).attr("class", m.track), s.append("circle").attr("class", m.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", m.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = bn(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", m.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, Xh = (t, e) => {
  const n = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = Ii(a), u = nt().domain([0, a - 1]).range([0, t.size()]), l = nt().domain([0, a - 1]).range([0, t.size()]), c = document.createElementNS("http://www.w3.org/2000/svg", "g"), h = T(c).attr("class", m.widget + " " + m.radio).attr("id", n).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + m.radiobutton).data(s).enter().append("g").attr("class", m.radiobutton).attr("id", (b) => "b" + b).attr("transform", (b) => t.orientation() == "vertical" ? "translate(0," + l(b) + ")" : "translate(" + u(b) + ",0)");
  var g, d;
  t.shape() == "rect" ? (g = h.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), d = h.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (g = h.append("circle").attr("r", i / 2), d = h.append("circle").attr("r", o / 2)), g.attr("class", m.background).on("mouseover", function() {
    T(this).classed(m.lit, !0), T(this.parentNode).select("." + m.symbol).classed(m.lit, !0);
  }).on("mouseout", function() {
    T(this).classed(m.lit, !1), T(this.parentNode).select("." + m.symbol).classed(m.lit, !1);
  }), d.attr("class", m.symbol), d.filter((b) => b == t.value()).classed(m.selected, !0), h.on("click", t.click);
  const p = bn(t.buttonsize(), t.buttonsize(), r);
  return h.append("text").attr("class", m.label).text(function(b, _) {
    return t.choices()[_];
  }).attr("alignment-baseline", p.valign).attr("transform", "translate(" + p.x + "," + p.y + ")").style("font-size", t.fontsize()).attr("text-anchor", p.anchor), c;
}, Ee = (t, e) => {
  switch (t.type) {
    case "button":
      return Bh(t);
    case "slider":
      return qh(t);
    case "radio":
      return Xh(t);
    case "toggle":
      return Hh(t);
  }
}, Gh = (t, e) => {
  const n = ph(
    e.controls_size.width,
    e.controls_size.height,
    e.controls_grid.nx,
    e.controls_grid.ny
  ), r = T("#" + t).classed(e.id + " " + e.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(e.display_class, !0).classed(e.debug_lattice, e.debug).append(e.display_type).attr("width", e.display_type == "canvas" ? e.display_size.width : null).attr("height", e.display_type == "canvas" ? e.display_size.height : null).attr("viewBox", e.display_type == "canvas" ? null : "0 0 " + e.display_size.width + " " + e.display_size.height).style("width", "100%"), o = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(e.controls_class, !0).classed(e.debug_lattice, e.debug).append("svg").attr("viewBox", "0 0 " + e.controls_size.width + " " + e.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof e.controls_border == "string" && e.controls_border.length > 0 && o.style("border", e.controls_border), typeof e.display_border == "string" && e.display_border.length > 0 && i.style("border", e.display_border), e.debug && o.selectAll(null).data(n.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: i, controls: o, grid: n };
}, S = {
  widgets: {
    //fontsize:20,
    slider_size: 400,
    slider_gap: 1.5,
    slider_girth: 12,
    slider_knob: 14,
    slider_anchor: { x: 1, y: 7 },
    resetbutton_anchor: { x: 2, y: 3 },
    resetbutton_size: 80,
    radio_anchor: { x: 5, y: 1 },
    radio_size: 160,
    radio_orientation: "vertical",
    radio_label_position: "right",
    radio_shape: "circ",
    radio_buttonsize: 30
  }
}, Z = [
  {
    N: 1e4,
    M: 10,
    scale: !1,
    dotsize: 0.5,
    opacity: 0.25,
    color1: "red",
    color2: "black",
    name: "Bedhead Attractor",
    P: [
      { id: "A", name: "α", range: [-1, 1], defv: 0.65343, value: 0.65343 },
      { id: "B", name: "β", range: [-1, 1], defv: 0.7345345, value: 0.7345345 }
    ],
    initial_range_factor: 2,
    xrange: [-5, 5],
    yrange: [-10, 10],
    f: function(t) {
      return [
        t[1] * Math.sin(t[1] * t[0] / this.P[1].widget.value()) + Math.cos(this.P[0].widget.value() * t[0] - t[1]),
        t[0] + Math.sin(t[1]) / this.P[1].widget.value()
      ];
    }
  },
  {
    name: "Clifford Attractor",
    scale: !1,
    N: 1e4,
    M: 10,
    dotsize: 0.5,
    opacity: 0.25,
    color1: "red",
    color2: "black",
    P: [
      { id: "A", name: "α", range: [0, 3], defv: 1.7, value: 1.7 },
      { id: "B", name: "β", range: [0, 3], defv: 1.8, value: 1.8 },
      { id: "C", name: "γ", range: [0, 1.9], defv: 0.9, value: 0.9 },
      { id: "D", name: "δ", range: [0, 1.9], defv: 0.4, value: 0.4 }
    ],
    initial_range_factor: 3,
    xrange: [-3, 3],
    yrange: [-3, 3],
    f: function(t) {
      return [
        Math.sin(this.P[0].widget.value() * t[1]) + this.P[2].widget.value() * Math.cos(this.P[0].widget.value() * t[0]),
        Math.sin(this.P[1].widget.value() * t[0]) + this.P[3].widget.value() * Math.cos(this.P[1].widget.value() * t[1])
      ];
    }
  },
  {
    N: 1e4,
    M: 10,
    dotsize: 0.5,
    opacity: 0.25,
    scale: !1,
    color1: "red",
    color2: "black",
    name: "Fractal Dream Attractor",
    P: [
      { id: "A", name: "α", range: [-3, 3], defv: -0.966918, value: -0.966918 },
      { id: "B", name: "β", range: [-3, 3], defv: 2.879879, value: 2.879879 },
      { id: "C", name: "γ", range: [-3, 3], defv: 0.765145, value: 0.765145 },
      { id: "D", name: "δ", range: [-3, 3], defv: 0.744728, value: 0.744728 }
    ],
    initial_range_factor: 2,
    xrange: [-2.5, 2.5],
    yrange: [-2.5, 2.5],
    f: function(t) {
      return [
        Math.sin(this.P[1].widget.value() * t[1]) + this.P[2].widget.value() * Math.sin(this.P[1].widget.value() * t[0]),
        Math.sin(this.P[0].widget.value() * t[0]) + this.P[3].widget.value() * Math.sin(this.P[0].widget.value() * t[1])
      ];
    }
  },
  {
    N: 1e4,
    M: 10,
    dotsize: 0.5,
    opacity: 0.25,
    scale: !1,
    initial_range_factor: 2,
    color1: "red",
    color2: "black",
    name: "Gumowski-Mira Attractor",
    P: [
      { id: "A", name: "α", range: [-0.3, 0.3], defv: 0.266, value: 0.266 },
      { id: "B", name: "β", range: [0.8, 1], defv: 1, value: 1 }
    ],
    xrange: [-3.5, 3.5],
    yrange: [-3.5, 3.5],
    f: function(t) {
      var e = this.P[0].widget.value() * t[0] + 2 * (1 - this.P[0].widget.value()) * t[0] ** 2 / (1 + t[0] ** 2) / (1 + t[0] ** 2), n = this.P[1].widget.value() * t[1] + e, r = this.P[0].widget.value() * n + 2 * (1 - this.P[0].widget.value()) * n ** 2 / (1 + n ** 2) / (1 + n ** 2);
      return [
        n,
        r - t[0]
      ];
    }
  }
];
rt(Z, (t, e) => {
  t.id = "system" + e, rt(t.P, (n) => {
    n.id = t.id + n.id, n.widget = Dh().id(n.id).label(n.name).range(n.range).value(n.defv).size(S.widgets.slider_size).girth(S.widgets.slider_girth).knob(S.widgets.slider_knob);
  }), t.sliders = he(t.P, (n) => n.widget);
});
const Ne = {
  choices: he(Z, (t) => t.name),
  default: 0,
  id: "attractors"
}, D = Lh().choices(Ne.choices).id(Ne.id).value(Ne.default).orientation(S.widgets.radio_orientation).labelposition(S.widgets.radio_label_position).buttonsize(S.widgets.radio_buttonsize), Rt = Fh().actions(["rewind"]), Uh = [Rt], Yh = (t, e) => {
  const n = e.position(S.widgets.slider_anchor.x, S.widgets.slider_anchor.y), r = t.selectAll(null).data(Z).enter().append("g").attr("id", "attractor").attr("transform", "translate(" + n.x + "," + n.y + ")");
  rt(Z, (o) => {
    const a = e.position(0, gi(o.sliders.length).map((s) => S.widgets.slider_gap * s));
    o.sliders.forEach((s, u) => s.position(a[u]));
  }), r.selectAll("." + m.slider).data((o) => o.sliders).enter().append(Ee);
  const i = e.position(S.widgets.radio_anchor.x, S.widgets.radio_anchor.y);
  D.position(i).size(S.widgets.radio_size).shape(S.widgets.radio_shape), Rt.position(e.position(S.widgets.resetbutton_anchor.x, S.widgets.resetbutton_anchor.y)).size(S.widgets.resetbutton_size), t.selectAll(null).data(Uh).enter().append(Ee), t.selectAll(null).data([D]).enter().append(Ee), t.selectAll("#attractor").filter((o, a) => a == D.value()).transition(1e3).style("opacity", 1).selectAll("." + m.slider).selectAll("*").style("pointer-events", null), t.selectAll("#attractor").filter((o, a) => a != D.value()).transition(1e3).style("opacity", 0).selectAll("." + m.slider).selectAll("*").style("pointer-events", "none");
}, Kh = (t) => {
  rt(Z[D.value()].P, (e) => {
    e.widget.reset(t, e.defv);
  });
};
var Ft = [];
const _i = (t, e, n) => {
  let r = 0;
  for (; r < e; ) {
    let i = [], o = 0, a = [2 * t.initial_range_factor * (Math.random() - 0.5), 2 * t.initial_range_factor * (Math.random() - 0.5)];
    for (i.push(a); o < n; )
      a = t.f(a), i.push(a), o++;
    Ft.push(i), r++;
  }
}, Vh = () => {
  Ft = [];
  const t = D.value(), e = Z[t];
  _i(e, e.M, e.N);
}, jh = () => {
  Ft = [];
  const t = D.value(), e = Z[t];
  _i(e, e.M, e.N / 10);
}, jt = {
  margin: 20
}, ze = nt(), ke = nt(), _r = jr();
var Ie, Ce, dt;
const mi = (t, e) => {
  const n = Z[D.value()];
  Ie = e.display_size.width, Ce = e.display_size.height, ze.range([jt.margin, Ie - jt.margin]), ke.range([jt.margin, Ce - jt.margin]);
  let r = n.xrange, i = n.yrange;
  if (n.scale) {
    const o = li(Ft), a = yr(o, (c) => c[0])[0], s = gr(o, (c) => c[0])[0];
    r = [a, s];
    const u = yr(o, (c) => c[1])[1], l = gr(o, (c) => c[1])[1];
    i = [u, l], r = Math.abs(r[0]) > Math.abs(r[1]) ? [r[0], -r[0]] : [-r[1], r[1]], i = Math.abs(i[0]) > Math.abs(i[1]) ? [i[0], -i[0]] : [-i[1], i[1]];
  }
  ze.domain(r), ke.domain(i), _r.domain([0, n.M - 1]).range([n.color1, n.color2]), dt = t.node().getContext("2d"), dt.clearRect(0, 0, Ie, Ce), rt(Ft, (o, a) => {
    const s = re(_r(a));
    dt.fillStyle = "rgb(" + s.r + "," + s.g + "," + s.b + ")", rt(o, (u) => {
      dt.beginPath(), dt.arc(ze(u[0]), ke(u[1]), n.dotsize, 0, 2 * Math.PI), dt.fill();
    });
  });
}, Zh = (t, e) => {
  mi(t, e);
};
function Qe(t, e) {
  Vh(), mi(t, e);
}
function Wh(t, e) {
  jh(), Zh(t, e);
}
const Jh = (t, e, n) => {
  Rt.update(() => Kh(e)), D.update(() => {
    e.selectAll("#attractor").filter((r, i) => i == D.value()).transition(1e3).style("opacity", 1).selectAll("." + m.slider).selectAll("*").style("pointer-events", null), e.selectAll("#attractor").filter((r, i) => i != D.value()).transition(1e3).style("opacity", 0).selectAll("." + m.slider).selectAll("*").style("pointer-events", "none"), Qe(t, n);
  }), rt(Z, (r) => {
    rt(r.P, (i) => {
      i.widget.update(() => {
        Wh(t, n);
      }), i.widget.update_end(() => {
        Qe(t, n);
      });
    });
  });
}, Qh = {
  name: "@explorables/stranger_things",
  title: "Stranger Things",
  subtitle: "Chaotic attractors of two-dimensional maps",
  description: "This explorable illustrates the beauty of strange attractors of selected two-dimensional chaotic maps. The attractors change shape as a function of their parameters.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function td(t, e = vi) {
  const n = Gh(t, e), r = n.display, i = n.controls, o = n.grid;
  return Yh(i, o), Jh(r, i, e), Qe(r, e), {
    halt() {
    },
    reset() {
      Rt.press(i), Rt.press(i);
    },
    config: e,
    meta: Qh
  };
}
export {
  vi as config,
  td as default,
  td as load,
  Qh as meta
};
