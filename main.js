$(document).ready(function() {
    var flipbook = $("#flipbook");

    flipbook.turn({
        autoCenter: true
    });

    function resizeFlipbook() {
        // Calculate available height (viewport height minus the height of the buttons)
        var availableHeight = $(window).height() - $("#prev-button").outerHeight(true) - $("#next-button").outerHeight(true);
        var availableWidth = $(window).width();

        // Adjust flipbook size
        flipbook.turn('size', availableWidth, availableHeight);
    }

    // Resize the flipbook on window resize
    $(window).resize(resizeFlipbook);

    // Initial resize
    resizeFlipbook();
    // Next button
    $("#next-button").click(function() {
        flipbook.turn("next");
    });

    // Previous button
    $("#prev-button").click(function() {
        flipbook.turn("previous");
    });
});

