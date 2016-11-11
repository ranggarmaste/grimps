// STARTER CODE
for (var i = 2; i <= 4; i++) {
    $("#log" + i).hide();
}

function changeLog(id, logTitle) {
    for (var i = 1; i <= 4; i++) {
        $("#list" + i).removeClass("verification-selected");
    }
    $("#list" + id).addClass("verification-selected");
    for (var i = 1; i <= 4; i++) {
        $("#log" + i).hide();
    }
    $("#log" + id).show();
    $("#log-title").text("LOG " + logTitle);
}
