$(document).ready(function(){
      var pts = 0;

    let showRacks = function(racks){

      $("#bingos").html('');
      racks.map(rack=>{
         $("#bingos").append(`<li>${rack.rack}: 
         <span class="answer hidden" id="therackwords">${rack.words.split("@@")}</span></li>`);
      });
    
      $("#bingos li").on("click", function(evt){
        $(evt.currentTarget).find(".answer").toggleClass("hidden");
      });
        document.getElementById("lengths").innerHTML ="Word Lengths:";

       words = document.getElementById("therackwords").innerHTML.split(",");
       for(var i = 0; i < words.length; i++) {
            var wordlength = words[i].length;
                document.getElementById("lengths").innerHTML += wordlength;
                document.getElementById("lengths").innerHTML += ",";
         }

    }

       //this checks to see if the user input is a possible word
     // if so, give them a point, if not do nothing but let them know its wrong
     let check = function(submission){
         words = document.getElementById("therackwords").innerHTML.split(",");
         var counter = 0;
         for(var i = 0; i < words.length; i++) {
             if(words[i] == submission) {
                counter++;
            }
         }
          if(counter !== 0) {
            alert("match was found!");
            return true;
        } else {
            alert("no match was found!");
            return false;
        }
    }
    // this only gets called if the player is correct anyway...
    // wait its not working yet...
    // it wasnt working because i didnt call the stupid function
    let scoreboard = function() {
         var score = document.getElementById("thescoreboard");
        var number = score.innerHTML;
        pts++;
        score.innerHTML = pts;
        if(pts > 5) {
            alert("YOU WON THE GAME!");
            location.reload(); }
    }
    
    //user submits their answer and checks against the possible words...
    $("#go").on("click", function(){
        var submission = document.getElementById("theanswer").value;
        //alert(submission);
        if(check(submission)) {
            alert("You Are Correct!");
            scoreboard();
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
