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
    
       //this checks to see if the user input is a possible word
     // if so, give them a point, if not do nothing but let them know its wrong
     let check = function(submission){
        return false;
    }
    
    
    //user submits their answer and checks against the possible words...
    $("#go").on("click", function(){
        var submission = document.getElementById("theanswer").value;
        if(check(submission)) {
            alert("You Are Correct!");

        } else {
            alert("Wrong Answer, Try Again!");
        }
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
