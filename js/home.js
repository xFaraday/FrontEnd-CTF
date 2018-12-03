$(document).ready(function(){
 $('.header').height($(window).height());
})





var typed = new Typed("#typed-text", {
  strings: ["SPOOKED.", "CHALLENGED.", "ENHANCED."],
  smartBackspace: true,
  loop: true,
  typeSpeed: 80,
  backSpeed: 80,
  backDelay: 2000,
  showCursor: false,
  contentType: 'text'
});

var countDownDate = new Date("Oct 31, 2018 15:30:00").getTime();


var x = setInterval(function() {


    var now = new Date().getTime();
    
    
    var distance = countDownDate - now;
    

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
   
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);



