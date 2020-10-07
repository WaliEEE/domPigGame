/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, player, dice, crn1,crn2;

scores = [0, 0];
player=0;
crn1 = 0;
crn2 = 0;

$(".dice").hide();

$(".btn-roll").click(function()
{

  var dice = Math.floor(Math.random()*6)+1;
  $(".dice").attr("src", "dice-"+dice+".png").show();

  if(dice===1)
  {
    player===0 ? player=1 : player=0;
    $("#score-1, #score-2").text("0");
    $(".panel-1, .panel-2").toggleClass("active");
  }
  else
  {
    if(player===0)
    {
      crn1=crn1+dice;
      $("#score-1").text(dice);
      $("#current-1").text(crn1);
    }
    else{
      crn2=crn2+dice;
      $("#score-2").text(dice);
      $("#current-2").text(crn2);
    }
  }
});
