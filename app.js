/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var player, dice, crn1,crn2, str1, str2, flag;

player=0;
crn1 = crn2 = str1 = str2 = flag = 0;

$(".dice").hide();

//clickEvent
$(".btn-roll").click(function()
{
  var dice = Math.floor(Math.random()*6)+1;
  $(".dice").attr("src", "dice-"+dice+".png").show();

  if(dice===1)
  {
    call();
  }
  else
  {
    if(player===0)
    {
      crn1+=dice; $("#score-1").text(dice); $("#curnt-1").text(crn1);
    }
    else
    {
      crn2+=dice; $("#score-2").text(dice); $("#curnt-2").text(crn2);
    }
  }
});

//clickEvent
$(".btn-hold").click(function()
{
  player===0 ? hold1(crn1) : hold2(crn2) ;
  if(flag===0) call();
});


//predefined function to toggle
function call()
{
  $(".dice").hide();
  $(".panel-1, .panel-2").toggleClass("active");
  player===0 ? player=1 : player=0;
  $("#score-1, #score-2, #curnt-1, #curnt-2").text("0");
  crn1=crn2=0;
}

function hold1(crn1)
{
  str1+=crn1;
  $("#total-1").text(str1);
  if(str1>=50)
  {
    $("#name1").text("WINNER!");
    $(".panel-1").removeClass("active");
    $(".pScore1, .cpBox1").hide();
   flag = 1;
  }
}

function hold2(crn2)
{
  str2+=crn2;
  $("#total-2").text(str2);
  if(str2>=50)
  {
    $("#name2").text("WINNER!");
    $(".panel-2").removeClass("active");
    $(".pScore2, .cpBox2").hide();
    flag = 1;
  }
}
