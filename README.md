# jquery-counter
JQuery snippet that lets you count up or count down to a number!

You can add options to your .html file.
Delay - will set how fast you want the counter to count.
StartNum - indicates which number you want the counter to start at (if you're counting down).

 jQuery(document).ready(function($) {
    $('.counter').counter({
      delay: 20,
		  startNum: 100,
      });
  });
        
        
 In yout html, enter the number you want the counter to end on!       
  <h1 class="counter">3</h1>
