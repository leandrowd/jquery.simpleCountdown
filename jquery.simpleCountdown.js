// SimpleCountDown is a simple form to do a time countdown
// by Leandro Lemos
// Version 0.1
// Source at https://github.com/leandrowd/simpleCountdown
// You can pass a dateFinish & dateNow (to server dates) in common date formats, and a print function;
// You can define a data attribute in html code (time-now & time-end)
// example: <p class="counter" data-time-now="2012-06-05T14:39:08-03:00" data-time-end="2012-07-20 01:00:00 -0300"></p>
// and in your js call:
// $(".counter").simpleCountdown();

;(function($){
    $.fn.simpleCountdown = function(options){
        var target = this,
            _target = $(target),
            timeNow = _target.data("time-now"),
            timeFinish = _target.data("time-end");

        var options = $.extend({
            // default values
            dateFinish : new Date(timeFinish),
            dateNow: new Date(timeNow),
            print: function(time){
                $(this).html(time);
            }
        }, options);

        var days = 24 * 60 * 60,
            hours = 60 * 60,
            minutes = 60;

        var counter = function(){
            var d, h, m, s,
                left = Math.floor((options.dateFinish - (new Date())) / 1000);

            if (left < 0) left = 0;

            // Number of days left
            d = Math.floor(left / days);
            left -= d * days;

            // Number of hours left
            h = Math.floor(left / hours);
            left -= h * hours;

            // Number of minutes left
            m = Math.floor(left / minutes);
            left -= m * minutes;

            // Number of seconds left
            s = left;

            //format the output 30d 21h 35m 24s
            var time = [d,"d ", h, "h ", m, "m ", s, "s "].join("");

            //show in view
            options.print.call(target, time);

        }

        //init timer
        setInterval(counter, 1000);
    }

})(jQuery);

