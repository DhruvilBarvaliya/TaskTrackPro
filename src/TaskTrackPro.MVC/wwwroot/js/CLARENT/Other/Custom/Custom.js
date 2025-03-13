function handleFirstTab(e) {
    document.body.classList.add('user-is-tabbing');
    document.removeEventListener('keyup', handleFirstTab);
    document.addEventListener('mousedown', handleMouseDownOnce);
}

function handleMouseDownOnce() {
    document.body.classList.remove('user-is-tabbing');
    document.removeEventListener('mousedown', handleMouseDownOnce);
    document.addEventListener('keyup', handleFirstTab);
}

window.addEventListener('keyup', handleFirstTab);

$(document).ready(function () {
    $(".dropdown > a").each(function () {
        $(this).click(function () {
            $(".dropdown").removeClass("open");
            $(this).parent(".dropdown").toggleClass("open");
        });
    });

    $(document).on("click", function (event) {
        var $trigger = $(".dropdown");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $(".dropdown").removeClass("open");
        }
    });


    $(document).on('click', '.dropdown-menu > li > a', function () {
        $('.dropdown, .dropup').removeClass('open');
        $('.menu-dynamic').remove();
    });


    //Alert Dismiss
    $(".msg-top > .close").click(function () {
        $(this).parent(".msg-top").hide();
        $(this).parent(".msg-top").removeClass("msg-top");

    })

    //Alert message dismissable
    $(document).on('click', '.alert > .close', function () {
        $(this).parent('.alert').hide();
    });

    //User Profile
    $('.userprofile').click(function () {
        $(this).addClass('open');
        $(this).addClass('active');
        $('.userprofile-menu.dropdown-menu').addClass('open');
    });

    $('#settings').click(function () {
        $('.settings').addClass('open');
        $('.main-up').addClass('close');
    });

    $('.settings .back').click(function () {
        $('.settings').removeClass('open');
        $('.main-up').removeClass('close');
    });

    $(document).on('click', function (e) {
        if (!$('.userprofile, .userprofile-menu').is(e.target)
            && $('.userprofile, .userprofile-menu').has(e.target).length === 0
            && $('.open').has(e.target).length === 0) {
            closeUserprofile();
        }
    });

    $(document).on('keydown', function (e) {
        if (e.keyCode === 27) { // ESC
            if ($('.userprofile-menu').hasClass('open') || $('.notification-wrapper').hasClass('open')) {
                closeUserprofile();
                closeNotificationDrawer();
            }
        }
    });

    $('.userprofile-menu .close').click(function () {
        closeUserprofile();
    });

    /*kendo tooltip left*/
    $('*[tooltip-left]').kendoTooltip({
        content: function (e) {
            var tooltipText = $(e.target[0]).attr("tooltip-left");
            return '<div>' + tooltipText + '</div>';
        },
        position: "left",
        showAfter: 100,
        show: function (e) { tooltipCallout(); }
    });
    /*kendo tooltip right*/
    $('*[tooltip-right]').kendoTooltip({
        content: function (e) {
            var tooltipText = $(e.target[0]).attr("tooltip-right");
            return '<div>' + tooltipText + '</div>';
        },
        position: "right",
        showAfter: 100,
        show: function (e) { tooltipCallout(); }
    });
    /*kendo tooltip top*/
    $('*[tooltip-top]').kendoTooltip({
        content: function (e) {
            var tooltipText = $(e.target[0]).attr("tooltip-top");
            return '<div>' + tooltipText + '</div>';
        },
        position: "top",
        showAfter: 100,
        show: function (e) { tooltipCallout(); }
    });
    /*kendo tooltip bottom*/
    $('*[tooltip-bottom]').kendoTooltip({
        content: function (e) {
            var tooltipText = $(e.target[0]).attr("tooltip-bottom");
            return '<div>' + tooltipText + '</div>';
        },
        position: "bottom",
        showAfter: 100,
        show: function (e) { tooltipCallout(); }
    });
    /*kendo tooltip common*/
    $('*[tooltip]').kendoTooltip({
        content: function (e) {
            var tooltipText = $(e.target[0]).attr("tooltip");
            return '<div>' + tooltipText + '</div>';
        },
        showAfter: 100,
        show: function (e) { tooltipCallout(); }
    });

    //window close 
    $(".close-window").click(function () {
        $(this).closest("[data-role=window]").data("kendoWindow").close();
    });

    //Clearable input
    $(".clear-input").each(function () {
        var $inp = $(this).find("input:text"),
            $cle = $(this).find(".close");

        $inp.on("input", function () {
            $cle.toggle(!!this.value);
        });

        $cle.on("touchstart click", function (e) {
            e.preventDefault();
            $inp.val("").trigger("input");
        });

    });

    /* Notification Drawer */
    $('.notification-wrapper > a').click(function () {
        closeUserprofile();
        $(".notification-wrapper .notification-drawer").addClass("open");
    });

    $(document).on('click', function (e) {
        if (!$('.notification-wrapper, .notification-drawer').is(e.target)
            && $('.notification-wrapper, .notification-drawer').has(e.target).length === 0) {
            closeNotificationDrawer();
        }
    });

});
function tooltipCallout() {
    try { $(".k-callout-s").parent(".k-tooltip[role='tooltip']").css("margin-top", "-5px"); } catch (e) { }
    try { $(".k-callout-w").parent(".k-tooltip[role='tooltip']").css("margin-right", "5px"); } catch (e) { }
    try { $(".k-callout-n").parent(".k-tooltip[role='tooltip']").css("margin-top", "5px"); } catch (e) { }
    try { $(".k-callout-e").parent(".k-tooltip[role='tooltip']").css("margin-left", "5px"); } catch (e) { }

    try { $(".k-callout-s").parent(".k-tooltip[role='tooltip']").parent().css("margin-top", "-5px"); } catch (e) { }
    try { $(".k-callout-w").parent(".k-tooltip[role='tooltip']").parent().css("margin-left", "10px"); } catch (e) { }
    try { $(".k-callout-n").parent(".k-tooltip[role='tooltip']").parent().css("margin-top", "5px"); } catch (e) { }
    try { $(".k-callout-e").parent(".k-tooltip[role='tooltip']").parent().css("margin-left", "-15px"); } catch (e) { }
}
function closeUserprofile() {
    $('.userprofile-menu').removeClass('open');
    $('.userprofile').removeClass('active');
    $('.main-up').removeClass('close');
    $('.settings').removeClass('open');
}

function closeNotificationDrawer() {
    $(".notification-wrapper").removeClass("open");
    $(".notification-drawer").removeClass("open");
}


