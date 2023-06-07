window.onload = function(){
  window.setInterval(function(){
  var now = new Date();
  var clock = document.getElementById("clock");
  clock.innerHTML = now.toLocaleTimeString();
  },1000);
}


function clockTimer()
{
  var date = new Date();
  
  var time = [date.getHours(),date.getMinutes(),date.getSeconds()]; // |[0] = Hours| |[1] = Minutes| |[2] = Seconds|
  var dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  var days = date.getDay();
  
  if(time[0] < 10){time[0] = "0"+ time[0];}
  if(time[1] < 10){time[1] = "0"+ time[1];}
  if(time[2] < 10){time[2] = "0"+ time[2];}
  
  var current_time = [time[0],time[1],time[2]].join(':');
  var clock = document.getElementById("clock");
  var day = document.getElementById("dayOfWeek");
  
  clock.innerHTML = current_time;
  day.innerHTML = dayOfWeek[days];
  
  
  
  setTimeout("clockTimer()", 1000);
}


Resources



{$('#form-submitter').click(function(e){
  e.preventDefault();
  $.ajax({
    url: 'form1.php',
    success: function(){
      window.location.href = "form2.php";
  
    },
    error: function(){
      alert('failure');
    }
  });
  });
 
}
 