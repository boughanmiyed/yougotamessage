$(document).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    // Get reference to the audio element
    var soundtrack = document.getElementById("love-soundtrack");

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        // Play the audio when envelope is opened
        soundtrack.play();

        // Add 'open' class and remove 'close' class to animate envelope opening
        envelope.addClass("open").removeClass("close");
    }

    function close() {
        // Pause the audio when envelope is closed
        soundtrack.pause();

        // Add 'close' class and remove 'open' class to animate envelope closing
        envelope.addClass("close").removeClass("open");
    }

});
