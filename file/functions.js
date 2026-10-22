// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

// Smooth, Glitch-Free Typewriter Engine
(function($) {
    $.fn.typewriter = function(callback) {
        return this.each(function() {
            var $ele = $(this);
            var originalHtml = $ele.html();
            $ele.html('').css('visibility', 'visible');

            var $content = $('<span class="typed-content"></span>');
            var $cursor = $('<span class="typed-cursor">|</span>');
            $ele.append($content).append($cursor);

            var progress = 0;
            var len = originalHtml.length;
            var speed = 40;

            function step() {
                if (progress >= len) {
                    setTimeout(function() {
                        $cursor.fadeOut(400, function() {
                            $(this).remove();
                        });
                        if (typeof callback === 'function') {
                            callback();
                        }
                    }, 500);
                    return;
                }

                var char = originalHtml.charAt(progress);
                if (char === '<') {
                    var endTag = originalHtml.indexOf('>', progress);
                    if (endTag !== -1) {
                        progress = endTag + 1;
                    } else {
                        progress++;
                    }
                } else if (char === '&') {
                    var endEntity = originalHtml.indexOf(';', progress);
                    if (endEntity !== -1 && endEntity - progress < 10) {
                        progress = endEntity + 1;
                    } else {
                        progress++;
                    }
                } else {
                    progress++;
                }

                $content.html(originalHtml.substring(0, progress));

                var currentDelay = speed;
                if (char === '.' || char === '!' || char === '?') {
                    currentDelay = 100;
                } else if (char === ',') {
                    currentDelay = 70;
                }

                setTimeout(step, currentDelay);
            }

            step();
        });
    };
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "Days <span class=\"digit\">" + days + "</span> Hours <span class=\"digit\">" + hours + "</span> Minutes <span class=\"digit\">" + minutes; 
	$("#clock").html(result);

	var text = "THE WORLD JUST GOT LUCKIER SINCE ";
	$("#message-box").html(text);
}
