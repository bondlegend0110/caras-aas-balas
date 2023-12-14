$(document).ready(function() {
    var flipbook = $("#flipbook");

    flipbook.turn({
        width: 800,
        height: 600,
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

flowplayer('#my-player', {
    // configuration options
    src: 'path/to/your/video.mp4',
    // other options...
});