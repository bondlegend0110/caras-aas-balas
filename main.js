$(document).ready(function() {
    var flipbook = $("#flipbook");

    flipbook.turn({
        width: 1000,
        height: 800,
        autoCenter: true
    });

    // Next button
    $("#next-button").click(function() {
        flipbook.turn("next");
    });

    // Previous button
    $("#prev-button").click(function() {
        flipbook.turn("previous");
    });
});

