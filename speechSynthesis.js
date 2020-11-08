var countdown, say, sleep;

sleep = function(ms) {
  return new Promise(function(resolve) {
    return window.setTimeout(resolve, ms);
  });	
};

say = function(text, pitch=1) {
  window.speechSynthesis.cancel();
  
  var speech = new SpeechSynthesisUtterance();
  speech.text = text;
  speech.pitch = pitch;
  return window.speechSynthesis.speak(speech);
};

countdown = async function(seconds) {
    var i;
    for(i = 1; i<=seconds; i++){
    say(i);
    await sleep(1000); // wait one second
  }
  return say("三元!", 10);
};

countdown(3);
