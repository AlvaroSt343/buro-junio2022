<?php
session_start();
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Buró Arrendamiento</title>
    <meta name="title" content="Proteja su patrimonio con nuestras pólizas jurídicas">
    <meta name="description" content="Una póliza jurídica le permite proteger su inmueble y patrimonio por medio de la Cobranza Extrajudicial de Rentas y Servicios adeudados como lo son agua, luz, gas y mantenimiento.">
    <meta name="author" content="Eduardo Estévez i360.com.mx + DESING Tiffany Bueno + MKT Sandra O. Arceo + FRONTEND Alvaro Salvador + BACKEND Cesar Serrano" />

    <meta property="og:title" content="Proteja su patrimonio con nuestras pólizas jurídicas" />
    <meta property="og:description" content="Una póliza jurídica le permite proteger su inmueble y patrimonio por medio de la Cobranza Extrajudicial de Rentas y Servicios adeudados como lo son agua, luz, gas y mantenimiento." />
    <meta property="og:image" content="https://buroarrendamiento.com/img/og/Thumbnails-Buró-Arrendamiento-WhatsApp-Pagina-de-Inicio.png" />
    <meta name="url" property="og:url" content="https://buroarrendamiento.com/" />
    <meta property="og:site_name" content="Buró Arrendamiento">
    <meta name="facebook-domain-verification" content="qit9u0kosecnvsxh9ipy5aj8dg1qht" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>

    <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/png">

    <!-- Global site tag (gtag.js) - Google Ads: 10805691253 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10805691253"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'AW-10805691253');
    </script>



    <!-- Facebook Pixel Code -->
    <script>
        ! function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '640173123608114');
        fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=640173123608114&ev=PageView&noscript=1" /></noscript>
    <!-- End Facebook Pixel Code -->



    <!-- framework -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!-- icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css">

    <!-- fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <!-- css -->
    <link rel="stylesheet" href="css/slider.css">
    <link rel="stylesheet" href="css/custom.css">
    <link rel="stylesheet" href="css/index-styles.css">
    <link rel="stylesheet" href="css/slidecustom.css">
    <link rel="stylesheet" href="css/contratapoliza.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />


    <script>
        /*! lazysizes - v4.1.1 */ ! function(a, b) {
            var c = b(a, a.document);
            a.lazySizes = c, "object" == typeof module && module.exports && (module.exports = c)
        }(window, function(a, b) {
            "use strict";
            if (b.getElementsByClassName) {
                var c, d, e = b.documentElement,
                    f = a.Date,
                    g = a.HTMLPictureElement,
                    h = "addEventListener",
                    i = "getAttribute",
                    j = a[h],
                    k = a.setTimeout,
                    l = a.requestAnimationFrame || k,
                    m = a.requestIdleCallback,
                    n = /^picture$/i,
                    o = ["load", "error", "lazyincluded", "_lazyloaded"],
                    p = {},
                    q = Array.prototype.forEach,
                    r = function(a, b) {
                        return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b]
                    },
                    s = function(a, b) {
                        r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b)
                    },
                    t = function(a, b) {
                        var c;
                        (c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " "))
                    },
                    u = function(a, b, c) {
                        var d = c ? h : "removeEventListener";
                        c && u(a, b), o.forEach(function(c) {
                            a[d](c, b)
                        })
                    },
                    v = function(a, d, e, f, g) {
                        var h = b.createEvent("CustomEvent");
                        return e || (e = {}), e.instance = c, h.initCustomEvent(d, !f, !g, e), a.dispatchEvent(h), h
                    },
                    w = function(b, c) {
                        var e;
                        !g && (e = a.picturefill || d.pf) ? (c && c.src && !b[i]("srcset") && b.setAttribute("srcset", c.src), e({
                            reevaluate: !0,
                            elements: [b]
                        })) : c && c.src && (b.src = c.src)
                    },
                    x = function(a, b) {
                        return (getComputedStyle(a, null) || {})[b]
                    },
                    y = function(a, b, c) {
                        for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth;) c = b.offsetWidth, b = b.parentNode;
                        return c
                    },
                    z = function() {
                        var a, c, d = [],
                            e = [],
                            f = d,
                            g = function() {
                                var b = f;
                                for (f = d.length ? e : d, a = !0, c = !1; b.length;) b.shift()();
                                a = !1
                            },
                            h = function(d, e) {
                                a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? k : l)(g)))
                            };
                        return h._lsFlush = g, h
                    }(),
                    A = function(a, b) {
                        return b ? function() {
                            z(a)
                        } : function() {
                            var b = this,
                                c = arguments;
                            z(function() {
                                a.apply(b, c)
                            })
                        }
                    },
                    B = function(a) {
                        var b, c = 0,
                            e = d.throttleDelay,
                            g = d.ricTimeout,
                            h = function() {
                                b = !1, c = f.now(), a()
                            },
                            i = m && g > 49 ? function() {
                                m(h, {
                                    timeout: g
                                }), g !== d.ricTimeout && (g = d.ricTimeout)
                            } : A(function() {
                                k(h)
                            }, !0);
                        return function(a) {
                            var d;
                            (a = a === !0) && (g = 33), b || (b = !0, d = e - (f.now() - c), 0 > d && (d = 0), a || 9 > d ? i() : k(i, d))
                        }
                    },
                    C = function(a) {
                        var b, c, d = 99,
                            e = function() {
                                b = null, a()
                            },
                            g = function() {
                                var a = f.now() - c;
                                d > a ? k(g, d - a) : (m || e)(e)
                            };
                        return function() {
                            c = f.now(), b || (b = k(g, d))
                        }
                    };
                ! function() {
                    var b, c = {
                        lazyClass: "lazyload",
                        loadedClass: "lazyloaded",
                        loadingClass: "lazyloading",
                        preloadClass: "lazypreload",
                        errorClass: "lazyerror",
                        autosizesClass: "lazyautosizes",
                        srcAttr: "data-src",
                        srcsetAttr: "data-srcset",
                        sizesAttr: "data-sizes",
                        minSize: 40,
                        customMedia: {},
                        init: !0,
                        expFactor: 1.5,
                        hFac: .8,
                        loadMode: 2,
                        loadHidden: !0,
                        ricTimeout: 0,
                        throttleDelay: 125
                    };
                    d = a.lazySizesConfig || a.lazysizesConfig || {};
                    for (b in c) b in d || (d[b] = c[b]);
                    a.lazySizesConfig = d, k(function() {
                        d.init && F()
                    })
                }();
                var D = function() {
                        var g, l, m, o, p, y, D, F, G, H, I, J, K, L, M = /^img$/i,
                            N = /^iframe$/i,
                            O = "onscroll" in a && !/(gle|ing)bot/.test(navigator.userAgent),
                            P = 0,
                            Q = 0,
                            R = 0,
                            S = -1,
                            T = function(a) {
                                R--, a && a.target && u(a.target, T), (!a || 0 > R || !a.target) && (R = 0)
                            },
                            U = function(a, c) {
                                var d, f = a,
                                    g = "hidden" == x(b.body, "visibility") || "hidden" != x(a.parentNode, "visibility") && "hidden" != x(a, "visibility");
                                for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != e;) g = (x(f, "opacity") || 1) > 0, g && "visible" != x(f, "overflow") && (d = f.getBoundingClientRect(), g = H > d.left && G < d.right && I > d.top - 1 && F < d.bottom + 1);
                                return g
                            },
                            V = function() {
                                var a, f, h, j, k, m, n, p, q, r = c.elements;
                                if ((o = d.loadMode) && 8 > R && (a = r.length)) {
                                    f = 0, S++, null == K && ("expand" in d || (d.expand = e.clientHeight > 500 && e.clientWidth > 500 ? 500 : 370), J = d.expand, K = J * d.expFactor), K > Q && 1 > R && S > 2 && o > 2 && !b.hidden ? (Q = K, S = 0) : Q = o > 1 && S > 1 && 6 > R ? J : P;
                                    for (; a > f; f++)
                                        if (r[f] && !r[f]._lazyRace)
                                            if (O)
                                                if ((p = r[f][i]("data-expand")) && (m = 1 * p) || (m = Q), q !== m && (y = innerWidth + m * L, D = innerHeight + m, n = -1 * m, q = m), h = r[f].getBoundingClientRect(), (I = h.bottom) >= n && (F = h.top) <= D && (H = h.right) >= n * L && (G = h.left) <= y && (I || H || G || F) && (d.loadHidden || "hidden" != x(r[f], "visibility")) && (l && 3 > R && !p && (3 > o || 4 > S) || U(r[f], m))) {
                                                    if (ba(r[f]), k = !0, R > 9) break
                                                } else !k && l && !j && 4 > R && 4 > S && o > 2 && (g[0] || d.preloadAfterLoad) && (g[0] || !p && (I || H || G || F || "auto" != r[f][i](d.sizesAttr))) && (j = g[0] || r[f]);
                                    else ba(r[f]);
                                    j && !k && ba(j)
                                }
                            },
                            W = B(V),
                            X = function(a) {
                                s(a.target, d.loadedClass), t(a.target, d.loadingClass), u(a.target, Z), v(a.target, "lazyloaded")
                            },
                            Y = A(X),
                            Z = function(a) {
                                Y({
                                    target: a.target
                                })
                            },
                            $ = function(a, b) {
                                try {
                                    a.contentWindow.location.replace(b)
                                } catch (c) {
                                    a.src = b
                                }
                            },
                            _ = function(a) {
                                var b, c = a[i](d.srcsetAttr);
                                (b = d.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c)
                            },
                            aa = A(function(a, b, c, e, f) {
                                var g, h, j, l, o, p;
                                (o = v(a, "lazybeforeunveil", b)).defaultPrevented || (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)), h = a[i](d.srcsetAttr), g = a[i](d.srcAttr), f && (j = a.parentNode, l = j && n.test(j.nodeName || "")), p = b.firesLoad || "src" in a && (h || g || l), o = {
                                    target: a
                                }, p && (u(a, T, !0), clearTimeout(m), m = k(T, 2500), s(a, d.loadingClass), u(a, Z, !0)), l && q.call(j.getElementsByTagName("source"), _), h ? a.setAttribute("srcset", h) : g && !l && (N.test(a.nodeName) ? $(a, g) : a.src = g), f && (h || l) && w(a, {
                                    src: g
                                })), a._lazyRace && delete a._lazyRace, t(a, d.lazyClass), z(function() {
                                    (!p || a.complete && a.naturalWidth > 1) && (p ? T(o) : R--, X(o))
                                }, !0)
                            }),
                            ba = function(a) {
                                var b, c = M.test(a.nodeName),
                                    e = c && (a[i](d.sizesAttr) || a[i]("sizes")),
                                    f = "auto" == e;
                                (!f && l || !c || !a[i]("src") && !a.srcset || a.complete || r(a, d.errorClass) || !r(a, d.lazyClass)) && (b = v(a, "lazyunveilread").detail, f && E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, R++, aa(a, b, f, e, c))
                            },
                            ca = function() {
                                if (!l) {
                                    if (f.now() - p < 999) return void k(ca, 999);
                                    var a = C(function() {
                                        d.loadMode = 3, W()
                                    });
                                    l = !0, d.loadMode = 3, W(), j("scroll", function() {
                                        3 == d.loadMode && (d.loadMode = 2), a()
                                    }, !0)
                                }
                            };
                        return {
                            _: function() {
                                p = f.now(), c.elements = b.getElementsByClassName(d.lazyClass), g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass), L = d.hFac, j("scroll", W, !0), j("resize", W, !0), a.MutationObserver ? new MutationObserver(W).observe(e, {
                                    childList: !0,
                                    subtree: !0,
                                    attributes: !0
                                }) : (e[h]("DOMNodeInserted", W, !0), e[h]("DOMAttrModified", W, !0), setInterval(W, 999)), j("hashchange", W, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(a) {
                                    b[h](a, W, !0)
                                }), /d$|^c/.test(b.readyState) ? ca() : (j("load", ca), b[h]("DOMContentLoaded", W), k(ca, 2e4)), c.elements.length ? (V(), z._lsFlush()) : W()
                            },
                            checkElems: W,
                            unveil: ba
                        }
                    }(),
                    E = function() {
                        var a, c = A(function(a, b, c, d) {
                                var e, f, g;
                                if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), n.test(b.nodeName || ""))
                                    for (e = b.getElementsByTagName("source"), f = 0, g = e.length; g > f; f++) e[f].setAttribute("sizes", d);
                                c.detail.dataAttr || w(a, c.detail)
                            }),
                            e = function(a, b, d) {
                                var e, f = a.parentNode;
                                f && (d = y(a, f, d), e = v(a, "lazybeforesizes", {
                                    width: d,
                                    dataAttr: !!b
                                }), e.defaultPrevented || (d = e.detail.width, d && d !== a._lazysizesWidth && c(a, f, e, d)))
                            },
                            f = function() {
                                var b, c = a.length;
                                if (c)
                                    for (b = 0; c > b; b++) e(a[b])
                            },
                            g = C(f);
                        return {
                            _: function() {
                                a = b.getElementsByClassName(d.autosizesClass), j("resize", g)
                            },
                            checkElems: g,
                            updateElem: e
                        }
                    }(),
                    F = function() {
                        F.i || (F.i = !0, E._(), D._())
                    };
                return c = {
                    cfg: d,
                    autoSizer: E,
                    loader: D,
                    init: F,
                    uP: w,
                    aC: s,
                    rC: t,
                    hC: r,
                    fire: v,
                    gW: y,
                    rAF: z
                }
            }
        });
    </script>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-CRFLJSS6VV"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-CRFLJSS6VV');
    </script>

    <!-- Facebook Pixel Code -->
    <script>
        ! function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '502346267526127');
        fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=502346267526127&ev=PageView&noscript=1" /></noscript>
    <!-- End Facebook Pixel Code -->

</head>

<body>
    <!-- navbar -->
    <nav class="navbar navbar-expand-lg navbar-light customnav fixed-top" id="navbar" style="z-index: 10;"></nav>
    <!-- navbar -->

    <div class="navseparator"></div>

    <img src="/img/banners/banner-contrato-poliza.png" alt="..." width="100%">

    <!-- boton desliza -->
    <div class="btn-desliza d-sm-block d-md-none">
        <div class="borde">
            <center>
                <a href="#btn"><i class="bi bi-chevron-down baja"></i></a>
            </center>
        </div>
    </div>
    <!-- boton desliza -->

    <form action="savedata.php" method="post">
        <section class="mt-5">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-12 text-center">
                        <div class="title-1">
                            EMPIEZA AQUÍ
                        </div>
                        <div class="title" id="btn">
                            Selecciona tu póliza
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 text-center">
                        <label class="polizacontainer mb-3" for="basica">
                            <img class="icons-poliza mb-4" src="img/contratopoliza/1.png" alt="...">
                            <div class="labelR">
                                Póliza jurídica básica
                            </div>
                            <input checked type="radio" class="polizas" name="tipopoliza" id="basica" value="basica">
                        </label>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 text-center">
                        <label class="polizacontainer mb-3" for="total">
                            <img class="icons-poliza mb-4" src="img/contratopoliza/2.png" alt="...">
                            <div class="labelR">
                                Póliza jurídica Total
                            </div>
                            <input type="radio" class="polizas" name="tipopoliza" id="total" value="total">
                        </label>
                    </div>
                </div>
                <div class="row d-flex justify-content-center my-4">
                    <div class="col-sm-12 col-md-6 col-lg-4 text-center">
                        <div class="title mb-3">
                            Valor de la renta de la propiedad:
                        </div>
                        <div class="input-group">
                            <span class="input-group-text">$</span>
                            <input type="text" class="form-control" name="importerenta"
                             id="importerenta" onblur="compruebaValidoEntero()" placeholder="6000" required>
                            <span class="input-group-text">.00</span>
                        </div>
                        <div class="mal" style="display: block;"></div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bgc-bw">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-12 text-center mb-4">
                        <div class="title text-center">
                            ¿Quién está realizando la <br> contratación de la póliza?
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 mb-3 text-center">
                        <label class="card-poliza" for="Propietario">
                            <img class="icons-poliza mb-4" src="img/contratopoliza/3.png" alt="...">
                            <div class="labelR" for="Propietario">
                                Propietario
                            </div>
                            <input checked type="radio" class="muestra50" name="tipopropietario" id="Propietario" value="Propietario">
                        </label>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 mb-3 text-center">
                        <label class="card-poliza" for="Inquilino">
                            <img class="icons-poliza mb-4" src="img/contratopoliza/4.png" alt="...">
                            <div class="labelR">
                                Inquilino
                            </div>
                            <input type="radio" class="muestra50" name="tipopropietario" id="Inquilino" value="Inquilino">
                        </label>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 mb-3 text-center">
                        <label class="card-poliza" for="Divide">
                            <img class="icons-poliza mb-4" src="img/contratopoliza/5.png" alt="...">
                            <div class="labelR">
                                50% y 50%
                            </div>
                            <input type="radio" class="muestra50" name="tipopropietario" id="Divide" value="Divide">
                        </label>
                    </div>
                </div>
                <div class="row" id="div1" style="display: none;">
                    <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
                        <label class="optcard" for="50propietario">
                            <input class="me-2" checked type="radio" name="50propietario" id="50propietario" value="50propietario"> Soy
                            propietario
                        </label>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
                        <label class="optcard" for="50inquilino">
                            <input class="me-2" type="radio" name="50propietario" id="50inquilino" value="50inquilino"> Soy
                            inquilino
                        </label>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-4">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-12 text-center mb-4">
                        <div class="title text-center">
                            Duración de la póliza
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3 col-lg-2 col-6 mb-3 text-center">
                        <label class="number-container" for="1">
                            <div class="number">
                                1
                            </div>
                            <div class="labelR">
                                1 Años
                            </div>
                            <input checked type="radio" class="duracion" name="duracion" id="1" value="1">
                        </label>
                    </div>
                    <div class="col-sm-6 col-md-3 col-lg-2 col-6 mb-3 text-center">
                        <label class="number-container" for="2">
                            <div class="number">
                                2
                            </div>
                            <div class="labelR">
                                2 Años
                            </div>
                            <input type="radio" class="duracion" name="duracion" id="2" value="2">
                        </label>
                    </div>
                    <div class="col-sm-6 col-md-3 col-lg-2 col-6 mb-3 text-center">
                        <label class="number-container" for="3">
                            <div class="number">
                                3
                            </div>
                            <div class="labelR">
                                3 Años
                            </div>
                            <input type="radio" class="duracion" name="duracion" id="3" value="3">
                        </label>
                    </div>
                    <div class="col-sm-6 col-md-3 col-lg-2 col-6 mb-3 text-center">
                        <label class="number-container" for="4">
                            <div class="number">
                                4
                            </div>
                            <div class="labelR">
                                4 Años
                            </div>
                            <input type="radio" class="duracion" name="duracion" id="4" value="4">
                        </label>
                    </div>
                    <div class="col-sm-6 col-md-3 col-lg-2 col-6 mb-3 text-center">
                        <label class="number-container" for="5">
                            <div class="number">
                                5
                            </div>
                            <div class="labelR">
                                5 Años
                            </div>
                            <input type="radio" class="duracion" name="duracion" id="5" value="5">
                        </label>
                    </div>
                </div>
            </div>
        </section>

        <section style="margin-top: 5vw; margin-bottom: 5vw;">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-sm-12 col-md-6 col-lg-5 mb-3">
                        <div class="precios1">
                            Total: <span id="totalB" name="totalB">0.00</span>
                            <input class="inputpad1" id="totalBB" name="totalBB" type="text" value="0.00">
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-5 mb-3">
                        <div class="precios2">
                            <div class="animate__animated animate__headShake animate__infinite infinite">
                                Descuento aplicado del 10%
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-10 mb-3">
                        <div class="precios3">
                            Total a pagar: <span id="totalA" name="totalA">0.00</span>
                            <input class="inputpad2" id="totalAA" name="totalAA" type="text">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-12 text-center">
                        <div class="title">
                            Datos de Contacto
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-8 mb-3">
                        <label style="color: #6C6C6C;" for="exampleInputEmail1" class="form-label">Nombre Completo</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                </div>
                <div class="row d justify-content-center">
                    <div class="col-sm-12 col-md-6 col-lg-4 mb-3">
                        <label style="color: #6C6C6C;" for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 mb-3">
                        <label style="color: #6C6C6C;" for="exampleInputEmail1" class="form-label">Teléfono</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    </div>
                    <div class="col-12 text-center my-2">
                        <div class="disclaimer">
                            Verifique que sus datos y la selección de póliza sean correctos antes de continuar.
                        </div>
                    </div>
                    <div class="col-12 my-4 text-center">
                        <button class="nextbtn" type="submit">Siguiente</button>
                    </div>
                </div>
            </div>
        </section>
    </form>






    <!-- Footer -->
    <footer class="text-center text-lg-start" id="footer" style="background-color: #16161B !important;"></footer>
    <!-- Footer -->






    <!-- scripts -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>

    <!-- manejador de radios -->
    <script src="./js/handle-radios.js"></script>

    <script src="assets/js/vendor/modernizr-3.6.0.min.js" rel="preload async media"></script>
    <script src="assets/js/vendor/jquery-3.6.0.min.js" rel="preload async media"></script>
    <!--====== Bootstrap js ======-->
    <script src="assets/js/popper.min.js" rel="preload async media"></script>
    <!--====== Slick js ======-->
    <script src="assets/js/slick.min.js" rel="preload async media"></script>
    <!--====== Magnific Popup js ======-->
    <script src="assets/js/jquery.magnific-popup.min.js" rel="preload async media"></script>
    <!--====== Isotope js ======-->
    <script src="assets/js/isotope.pkgd.min.js" rel="preload async media"></script>
    <!--====== Imagesloaded js ======-->
    <script src="assets/js/imagesloaded.pkgd.min.js" rel="preload async media"></script>
    <!--====== counterup js ======-->
    <script src="assets/js/jquery.counterup.min.js" rel="preload async media"></script>
    <!--====== waypoints js ======-->
    <script src="assets/js/jquery.waypoints.min.js" rel="preload async media"></script>
    <!--====== Nice-select js ======-->
    <script src="assets/js/jquery.nice-select.min.js" rel="preload async media"></script>
    <!--====== Nice-number js ======-->
    <script src="assets/js/jquery.nice-number.min.js" rel="preload async media"></script>
    <!--====== Nice-select js ======-->
    <script src="assets/js/jquery-ui.min.js" rel="preload async media"></script>
    <!--====== Wow js ======-->
    <script src="assets/js/wow.min.js" rel="preload async media"></script>
    <!--====== Main js ======-->
    <script src="assets/js/main.js" rel="preload async media"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11" rel="preload async media"></script>
    <script src="assets/js/custom.js" rel="preload async media"></script>

    <script src="js/navbar.js"></script>
    <script src="js/footer.js"></script>
    <!-- scripts -->
</body>

</html>