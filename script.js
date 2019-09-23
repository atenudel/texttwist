$(document).ready(function(){
      
    let showRacks = function(racks){
      $("#bingos").html('');
      racks.map(rack=>{
         $("#bingos").append(`<li>${rack.rack}: 
         <span class="answer hidden">${rack.words.split("@@")}</span></li>`);
      });
      $("#bingos li").on("click", function(evt){
        $(evt.currentTarget).find(".answer").toggleClass("hidden");
      });
    }
    //user submits their answer and checks against the possible words...
    $("#go").on("click", function(){
        var submission = document.getElementById("theanswer").value;
        // if user is correct let them know... else...
        alert(submission);
      });
      
    //get the twist!
    $("#grabmore").on("click", function(){
      $.ajax({
          method: "GET",
          url: "api.php",
          success: data=>{ showRacks(data)}
      });
    });
  });
