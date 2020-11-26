let canvas;
let c;
let grid;
let backgroundColor = "black";
//let graphColor = "white";

addEventListener("DOMContentLoaded", initiate);

//Initiate function
function initiate() {
  //Canvas instantiation
  canvas = document.querySelector("canvas");
  c = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  grid = new Grid();

  //Resize event listener
  addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  nuqlearViz();
}

function nuqlearViz() {
  //Background
  c.fillStyle = backgroundColor;
  c.fillRect(0, 0, canvas.width, canvas.height);

  c.save();
  c.translate(canvas.width / 2, canvas.height / 2);

  grid.update();

  ////graph
  //c.lineCap = "round";
  //c.lineJoin = "round";
  //c.lineWidth = 0.006;
  //c.beginPath();
  //c.strokeStyle = graphColor;
  //for (f = -(canvas.width / 2); f < canvas.width / 2 + 100; f++) {
  //if (f === 0) {
  //c.moveTo(
  //f,
  //spacing * gridSpacing * Math.sin((1 / (spacing * gridSpacing)) * f)
  //);
  //} else {
  //c.lineTo(
  //f,
  //spacing * gridSpacing * Math.sin((1 / (spacing * gridSpacing)) * f)
  //);
  //}
  //c.stroke();
  //}

  c.restore();

  requestAnimationFrame(nuqlearViz);
}
