// Liams scary shit loadsa potential javascript errors jikes..

Array.prototype.shuffle = function () {
    for (var i = this.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = this[i];
        this[i] = this[j];
        this[j] = tmp;
    }

    return this;
}


$(document).ready(function () {

    objects = "";
    for (x = 0; x < 12; x++) {
        objects += "<div class='month'><span></span></div>";
    }
    $("#progresstable").html(objects);

    $("#progresstable div").each(function () {
        im = $(this).css("backgroundImage");
        im = im.split(",");
        calim = im[0];
        im.splice(0, 1);
        co = $(this).css("backgroundPosition");
        co = co.split(",");
        calco = co[0];
        co.splice(0, 1);
        //		console.log(im+" "+co);
        im = im.shuffle();
        co = co.shuffle();
        for (x = 0; x < co.length; x++) {
            newco = 50 + Math.floor((Math.random() + x) * 250)
            co[x] = newco + "px 68px";
        }
        im.unshift(calim);
        co.unshift(calco);

        $(this).css({ backgroundImage: im.join(","), backgroundPosition: co.join(",") });
    });

    for (x = 0; x < 30; x++) {
        $("#foregroundtrees").append("<div class='tree'>");
    }

    $(".tree").each(function (idx) {
        $(this).css({ marginLeft: 500 + Math.floor(Math.random() * idx * 12000) });
    })

});


animTop = 0;
animWidth = 0;
$(document).ready(function () {
    $("#viewAlternatives").click(function () {
        $("#alternativesPopup").html($("#alternativesPanel").html())
        $("#alternativesPopup").show();
    });
    $("#alternativesPopup").click(function () {
        $(this).hide();
    });
    $("#viewAnimation").click(function () {
        $(".thz-sheet").css({ overflow: "hidden" });
        if ($(".doublewidth").is(".undocked")) {
            $(".doublewidth").animate({ top: animTop, width: animWidth }, function () {
                $(".doublewidth").removeClass("undocked").css({ top: 0 });
                $(".thz-sheet").css({ overflow: "hidden" });
                $("#viewAnimation").val("View Animation »");
            });
        } else {
            animTop = $(".doublewidth").offset().top;
            animWidth = $(".doublewidth").width();
            $(".doublewidth").addClass("undocked");
            $(".doublewidth").css({ top: animTop, width: animWidth });
            $(".doublewidth").animate({ top: 300, width: 1050 }, function () {
                $(".thz-sheet").css({ overflow: "hidden" });
                $("#viewAnimation").val("Close Animation");
            });
        }
    });
});


try { for (var lastpass_iter = 0; lastpass_iter < document.forms.length; lastpass_iter++) { var lastpass_f = document.forms[lastpass_iter]; if (typeof (lastpass_f.lpsubmitorig2) == "undefined") { lastpass_f.lpsubmitorig2 = lastpass_f.submit; lastpass_f.submit = function () { var form = this; var customEvent = document.createEvent("Event"); customEvent.initEvent("lpCustomEvent", true, true); var d = document.getElementById("hiddenlpsubmitdiv"); for (var i = 0; i < document.forms.length; i++) { if (document.forms[i] == form) { d.innerText = i; } } d.dispatchEvent(customEvent); form.lpsubmitorig2(); } } } } catch (e) { }



