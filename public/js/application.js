// $(document).ready(function(){
//   var player1_location = 1; 
//   var player2_location = 1;
//   // var startTime = new Date(); 
//   $("body").keyup(function(e) {
//     if (e.which === 81){ 
//       $('#player1_strip > td:nth-child('+player1_location+')').removeClass("active");
//       player1_location = player1_location + 1;
//       $('#player1_strip > td:nth-child('+player1_location+')').addClass("active");
//       if (player1_location === 20) {
//         // var endTime = new Date();
//         // var race_time = endTime.getTime() - startTime.getTime()
//         // $.post('/results', {winner: "winnerID", time: "time"} );
//       };
//     };
//     else if (e.keyCode === 80){
//       $('#player2_strip > td:nth-child('+player2_location+')').removeClass("active");
//       player2_location = player2_location + 1;
//       $('#player2_strip > td:nth-child('+player2_location+')').addClass("active");
//       if (player2_location === 20) {
//         // var endTime = new Date();
//         // var race_time = endTime.getTime() - startTime.getTime()
//         // $.post('/results', {winner: "winnerID", time: "time"} );
//       };
//     };
//   });
// });

$(document).ready(function(){
  var player1_location = 1;  
  var player2_location = 1;   
  $("body").keyup(function(e) {
    if (e.which==81){ 
      $('#player1_strip > td:nth-child('+player1_location+')').removeClass("active");
      player1_location = player1_location + 1;
      $('#player1_strip > td:nth-child('+player1_location+')').addClass("active");
      if (player1_location === 20) {
        var winnerId = $('#player1_strip').attr('data-player');
        $.post('/results', {winner: winnerId} );
        // alert("Player 1 is the winner!")
      };
    }
    else if (e.keyCode==80){
      $('#player2_strip > td:nth-child('+player2_location+')').removeClass("active");
      player2_location = player2_location + 1;
      $('#player2_strip > td:nth-child('+player2_location+')').addClass("active");
      if (player2_location === 20) {
        $.post('/results', {winner: "winnerID", time: "time"} );
        // alert("Player 2 is the winner!")
      }
    };
  });
});
