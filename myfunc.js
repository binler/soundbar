var sound = new Audio('keysd.mp3');
sound.volume = 1;
var txt = '';
$('body').keydown(function(e) {

    if(e.keyCode >= 65 && e.keyCode <= 90) {
      e.preventDefault();
      if (sound.currentTime) sound.currentTime = 0;
      sound.play();
      txt = txt + e.key;
      $('.container').html(txt);
      showImage(e.key,txt,'a',0);
    }
});

function showImage(key, text, char, index) {
  var firstChar = text.charAt(index);
  if(key == char) {
    if(firstChar == char){
      console.log(txt + txt.length);
      $('.fam').addClass('active');
    }
  } else {
    $('.fam').removeClass('active');
  }
}
