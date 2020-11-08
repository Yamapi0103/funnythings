var countdown, say, sleep;

sleep = function(ms) {
  return new Promise(function(resolve) {
    return window.setTimeout(resolve, ms);
  });
};

say = function(text) {
  window.speechSynthesis.cancel();
  return window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
};

countdown = async function(seconds) {
    var i;
    for(i = 1; i<=seconds; i++){
    say(i);
    await sleep(1000); // wait one second
  }
  return say("三元!");
};

countdown(3);
