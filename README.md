# jquery-counter
JQuery snippet that lets you count up or count down to a number!

You can add options to your .html file.
Delay - will set how fast you want the counter to count.
StartNum - indicates which number you want the counter to start at (if you're counting down).

 jQuery(document).ready(function($) {<br />
    $('.counter').counter({<br />
	delay: 20, <br />
	startNum: 100, <br/>
      });<br/>
  });<br/>
        
        
 In yout html, enter the number you want the counter to end on!       
  <pre><h1 class="counter">3</h1></pre>
