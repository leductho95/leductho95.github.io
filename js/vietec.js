function parallax() { var o = $(window).scrollTop();
    $(".bg").css("top", -(.2 * o) + "px") }(new WOW).init(), $(window).scroll(function(o) { parallax() }), $(document).ready(function() { if (console.log("ok"), $('[data-toggle="tooltip"]').tooltip(), console.log("ok"), $(".owl-carousel").owlCarousel({ loop: !0, autoplay: !1, margin: 30, nav: !0, navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], dots: !0, responsive: { 0: { items: 1 }, 600: { items: 1 }, 1e3: { items: 1 } } }), $("#go_top").length) { var o = 150,
            l = function() { var l = $(window).scrollTop();
                l > o ? $("#go_top").addClass("show") : $("#go_top").removeClass("show") };
        l(), $(window).on("scroll", function() { l() }), $("#go_top").on("click", function(o) { o.preventDefault(), $("html,body").animate({ scrollTop: 0 }, 700) }) } });