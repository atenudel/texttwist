$(document).ready(function(){
      
    let showRacks = function(racks){
      $("#possiblewords").html('');
      racks.map(rack=>{
          //rack.rack represents the randomized letters
          //rack.words are the words you can make from those letters
        $("#possiblewords").append(`<li>${rack.rack}: <span class="answer hidden">${rack.words}</span></li>`);
      });
      $("#possiblewords li").on("click", function(evt){
        $(evt.currentTarget).find(".answer").toggleClass("hidden");
      });
    }
    
    $("#start").on("click", function(){
      $.ajax({
          method: "GET",
          url: "api.php",
          success: data=>{showRacks(JSON.stringify(data))}
      });
    });
  });
