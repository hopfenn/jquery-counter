/*
* Author: Marta Chmielowska, 2015
*/
(function( $ ){
  "use strict";

  $.fn.counter = function( options ) {

    // Defaults
    var settings = $.extend({
        'delay': 10,

		'startNum': 1
    }, options);

    return this.each(function(){

        // Store the object
        var $this = $(this);
        var $settings = settings;

        var counterFunction = function() {
            var nums = [];
            var endNum = $this.text();
			var start = parseInt($settings.startNum);
			var reverse;
			if (start > endNum){
				$this.text(start);
				reverse = true;
				
			}
			else {
				 $this.text('0');
				 reverse = false;
			}

            endNum = endNum.replace(/,/g, '');
            var isInt = /^[0-9]+$/.test(endNum);
            var isFloat = /^[0-9]+\.[0-9]+$/.test(endNum);

			// Add numbers to list if counting down
			if (reverse == true){
				for (var j = endNum; j <= start; j++){
				
				//If number was an int, no decimal
					var newNum = parseInt(j);
		
					//If number was a decimal input
					if (isFloat) {
						newNum = parseFloat(endNum / 100 * j).toFixed(1);
					}

					nums.unshift(newNum);
					
				}
			}			
			else {           
            // Add numbers to list if counting up
				for (var i = 100; i >= 1; i--) {

					//If number was an int, no decimal
					var newNum = parseInt(endNum / 100 * i);

					//If number was a decimal input
					if (isFloat) {
						newNum = parseFloat(endNum / 100 * i).toFixed(1);
					}

					nums.unshift(newNum);
				}
			}
            $this.data('countNums', nums);

            //Update the number
            var f = function() {
                $this.text($this.data('countNums').shift());
                if ($this.data('countNums').length) {
                    setTimeout($this.data('counterFunction'), $settings.delay);
                } 
            };
            $this.data('counterFunction', f);

            //Start the count
            setTimeout($this.data('counterFunction'), $settings.delay);
        };

        //Start the count when the element comes into view
        $this.waypoint(counterFunction, { offset: '100%', triggerOnce: true });
    });

  };

})( jQuery );
