/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let player, dice, crn1, crn2, str1, str2, flag, isPlaying;

init();
//clickNewEvent(Callback Method)
$(".btn-new").click(function () {
  init();
});

//clickHoldEvent
$(".btn-hold").click(function () {
  if (isPlaying) {
    player === 0 ? hold1(crn1) : hold2(crn2);
    if (flag) call();
  }
});


//clickRollEvent
$(".btn-roll").click(function () {
  if (isPlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;

    $(".dice").fadeOut("fast");
    $(".dice").attr("src", `images/dice-${dice}.png`);
    $(".dice").fadeIn("fast");

    if (dice === 1) {
      call();
    } else {
      if (player === 0) {
        crn1 += dice;
        $("#score-1").text(dice);
        $("#curnt-1").text(crn1);
      } else {
        crn2 += dice;
        $("#score-2").text(dice);
        $("#curnt-2").text(crn2);
      }
    }
  }
});

//predefined function to toggle
function init() {
  player = crn1 = crn2 = str1 = str2 = 0;
  isPlaying = flag = true;
  $(".dice").hide();
  $("#name1").text("Player X");
  $("#name2").text("Player Y");
  $(".pScore1, .pScore2,.cpBox1, .cpBox2").show();
  $("#score-1,#score-2,#curnt-1,#curnt-2,#total-1,#total-2").text("0");
  $(".panel-1").addClass("active");
  $(".panel-2").removeClass("active");
}

function call() {
  $(".dice").hide();
  $(".panel-1, .panel-2").toggleClass("active");
  player === 0 ? (player = 1) : (player = 0);
  $("#score-1, #score-2, #curnt-1, #curnt-2").text("0");
  crn1 = crn2 = 0;
}

function hold1(crn1) {
  str1 += crn1;
  $("#total-1").text(str1);
  if (str1 >= 50) {
    $("#name1").text("WINNER!");
    $(".panel-1, .panel-2").removeClass("active");
    $(".pScore1, .cpBox1").hide();
    isPlaying = flag = false;
  }
}

function hold2(crn2) {
  str2 += crn2;
  $("#total-2").text(str2);
  if (str2 >= 50) {
    $("#name2").text("WINNER!");
    $(".panel-1, .panel-2").removeClass("active");
    $(".pScore2, .cpBox2").hide();
    isPlaying = flag = false;
  }
}
