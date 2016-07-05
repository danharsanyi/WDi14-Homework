$.fn.makeGainsboro = function() {
    this.css({
        color: "rebeccapurple"
    });
    this.each(function(i, el) {
        var text = (i + 1) + " Gainsboro";
        $(el).text(text);
        // console.log("I: ",i);
        // console.log("El: ",el);
    });
};

// IIFE - Immediately Invoked Function Expression
(function($) {

     var color_from_hue = function(hue) {
        var h = hue / 60;
        var c = 255;
        var x = (1 - Math.abs(h % 2 - 1)) * 255;
        var color;
        debugger;
        var i = Math.floor(h);
        if (i === 0) color = rgb_to_hex(c, x, 0);
        else if (i == 1) color = rgb_to_hex(x, c, 0);
        else if (i == 2) color = rgb_to_hex(0, c, x);
        else if (i == 3) color = rgb_to_hex(0, x, c);
        else if (i == 4) color = rgb_to_hex(x, 0, c);
        else color = rgb_to_hex(c, 0, x);

        return color;
    };

    function rgb_to_hex(red, green, blue) {
        var h = ((red << 16) | (green << 8) | (blue)).toString(16);
        // add the beginning zeros
        debugger;
        while (h.length < 6) h = '0' + h;
        return '#' + h;
    }
    $.fn.makeRainbowText = function() {
      debugger;
        
        return this.each(function() {
          debugger;
            var rainbowtext = '';
            var hue = 0;
            var step = 0;

            // get the current text inside element
            var text = $(this).text();

            // hue is 360 degrees
            if (text.length > 0)
                step = 360 / (text.length);

            // iterate the whole 360 degrees
            for (var i = 0; i < text.length; i++) {
                rainbowtext = rainbowtext + '<span style="color:' + color_from_hue(hue) + '">' + text.charAt(i) + '</span>';
                hue += step;
            }

            $(this).html(rainbowtext);
        });

    };
}(jQuery));

$(document).ready(function() {
    $("li").makeGainsboro();
    $("h1").makeRainbowText();
});
