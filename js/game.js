const numDivs = 36;
const maxHits = 11;

let hits = 1;
let firstHitTime = 0;
let total = 0

function round() {
  // FIXME: надо бы убрать "target" прежде чем искать новый
  $('.target').removeClass('target');
  let divSelector = randomDivId();
  $(divSelector).addClass("target");
  // TODO: помечать target текущим номером
  $('.target').text(hits);
  // FIXME: тут надо определять при первом клике firstHitTime

  if (hits === maxHits) {
    endGame();
  }
}

function endGame() {
  // FIXME: спрятать игровое поле сначала
  $('.game-field').addClass('d-none');
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);
  $('#total').text(total);

  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
  // FIXME: убирать текст со старых таргетов. Кажется есть .text?
  $('.target').text('');
  if ($(event.target).hasClass("target")) {
    $('.miss').removeClass('miss');
    hits = hits + 1;
    total = total + 1;
    round();
  }
  else {
    total = total - 1;
    $('.target').addClass('miss');
    $('.miss').text(hits);
  }
  // TODO: как-то отмечать если мы промахнулись? См CSS класс .miss
}

$('#button-reload').click(function () {
  // TODO: заказчик просил отдельную кнопку, запускающую игру а не просто по загрузке
  firstHitTime = getTimestamp();
  round();

  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  });
});