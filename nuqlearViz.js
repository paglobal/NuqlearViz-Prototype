let canvas; //declare variable for canvas
let c; //declare variable for context
let grid; //declare variable for grid
let backgroundColor = "black"; //declare variable for background color
//let graphColor = "white";//declare variable for graph color

//call initiate function after DOM content is loaded
addEventListener("DOMContentLoaded", initiate);

//initiate function
function initiate() {
  //canvas instantiation
  //select canvas element and store it in the canvas variable
  canvas = document.querySelector("canvas");

  //store the context in the c variable
  c = canvas.getContext("2d");

  //set up initial canvas width and height to fill the entire viewport
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  //initialize a new grid and store in it the grid variable
  grid = new Grid();

  //event listener to resize the canvas on window resize
  addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  //call nuqlearViz function
  nuqlearViz();
}

//nuqlearViz function
function nuqlearViz() {
  //background color update
  c.fillStyle = backgroundColor;
  c.fillRect(0, 0, canvas.width, canvas.height);

  c.save();
  //translate the canvas with the origin at the center of the viewport
  c.translate(canvas.width / 2, canvas.height / 2);

  //draw and update the grid
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
