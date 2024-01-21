var i = 0;
var txt = 'GymSense: Improving the fitness industry one rep at a time.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    var char = txt.charAt(i);
    document.getElementById("caption").innerHTML += (char === '\n') ? '<br>' : char;
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();