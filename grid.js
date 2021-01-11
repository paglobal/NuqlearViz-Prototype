//grid class
class Grid {
  constructor() {
    this.x_spacing = 36; //spacing between vertical grid lines (Also acts as one unit on the x-axis)
    this.y_spacing = 36; //spacing between horizontal grid lines (Also acts as one unit on the y-axis)
    this.x_gridSpacing = 2; //number of grid lines after which the next grid line is also a minor axis (for vertical grid lines)
    this.y_gridSpacing = 2; //number of grid lines after which the next grid line is also a minor axis (for horizontal grid lines)
    this.majorAxisColor = "white"; //color of major axes
    this.minorAxisColor = "#21a2d9"; //color of minor axes
    this.gridLineColor = "white"; //color of grid lines
    this.x_angle = 0; //angle horizontal grid lines make with the horizontal
    this.y_angle = 0; //anlge vertical grid lines make with the vertical
    this.gridLineNumber = (canvas.width / (this.x_spacing * 2)) * 4; //determinant of number of grid lines
    this.x_gridLinePseudoLength = 3 * canvas.width; //partial determinant of length of vertical grid lines
    this.y_gridLinePseudoLength = 3 * canvas.height; //partial determinant of length of horizontal grid lines
  }

  //grid draw method
  draw() {
    //draw major horizontal axis
    c.strokeStyle = this.majorAxisColor;
    c.lineWidth = 2;
    c.beginPath();
    c.moveTo(
      -canvas.width * Math.cos(-this.x_angle),
      canvas.height * Math.sin(-this.x_angle)
    );
    c.lineTo(
      canvas.width * Math.cos(this.x_angle),
      canvas.height * Math.sin(this.x_angle)
    );
    c.stroke();

    //top horizontal grid lines
    c.lineWidth = 0.5;
    for (let y = 0; y < this.gridLineNumber; y++) {
      //differentiate between normal grid lines and minor axes
      if ((y + 1) % this.y_gridSpacing === 0) {
        c.strokeStyle = this.minorAxisColor;
        c.lineWidth = 1;
      } else {
        c.strokeStyle = this.gridLineColor;
        c.lineWidth = 0.5;
      }

      //draw grid lines
      c.beginPath();
      c.moveTo(
        -this.x_gridLinePseudoLength * Math.cos(-this.x_angle),
        -(this.y_spacing + this.y_spacing * y) +
          this.y_gridLinePseudoLength * Math.sin(-this.x_angle)
      );
      c.lineTo(
        this.x_gridLinePseudoLength * Math.cos(this.x_angle),
        -(this.y_spacing + this.y_spacing * y) +
          this.y_gridLinePseudoLength * Math.sin(this.x_angle)
      );
      c.stroke();
    }

    //bottom horizontal grid lines
    c.lineWidth = 0.5;
    for (let y = 0; y < this.gridLineNumber; y++) {
      //differentiate between normal grid lines and minor axes
      if ((y + 1) % this.y_gridSpacing === 0) {
        c.strokeStyle = this.minorAxisColor;
        c.lineWidth = 1;
      } else {
        c.strokeStyle = this.gridLineColor;
        c.lineWidth = 0.5;
      }

      //draw grid lines
      c.beginPath();
      c.moveTo(
        -this.x_gridLinePseudoLength * Math.cos(-this.x_angle),
        this.y_spacing +
          this.y_spacing * y +
          this.y_gridLinePseudoLength * Math.sin(-this.x_angle)
      );
      c.lineTo(
        this.x_gridLinePseudoLength * Math.cos(this.x_angle),
        this.y_spacing +
          this.y_spacing * y +
          this.y_gridLinePseudoLength * Math.sin(this.x_angle)
      );
      c.stroke();
    }

    //y-axis
    c.strokeStyle = this.majorAxisColor;
    c.lineWidth = 2;
    c.beginPath();
    c.moveTo(
      canvas.width * Math.sin(this.y_angle),
      -canvas.height * Math.cos(this.y_angle)
    );
    c.lineTo(
      canvas.width * Math.sin(-this.y_angle),
      canvas.height * Math.cos(-this.y_angle)
    );
    c.stroke();

    //rght vertical grid lines
    c.lineWidth = 0.5;
    for (let x = 0; x < this.gridLineNumber; x++) {
      if ((x + 1) % this.x_gridSpacing === 0) {
        c.strokeStyle = this.minorAxisColor;
        c.lineWidth = 1;
      } else {
        c.strokeStyle = this.gridLineColor;
        c.lineWidth = 0.5;
      }
      c.beginPath();
      c.moveTo(
        this.x_spacing +
          this.x_spacing * x +
          this.x_gridLinePseudoLength * Math.sin(this.y_angle),
        -this.y_gridLinePseudoLength * Math.cos(this.y_angle)
      );
      c.lineTo(
        this.x_spacing +
          this.x_spacing * x +
          this.x_gridLinePseudoLength * Math.sin(-this.y_angle),
        this.y_gridLinePseudoLength * Math.cos(-this.y_angle)
      );
      c.stroke();
    }

    //left vertical grid lines
    c.lineWidth = 0.5;
    for (let x = 0; x < this.gridLineNumber; x++) {
      if ((x + 1) % this.x_gridSpacing === 0) {
        c.strokeStyle = this.minorAxisColor;
        c.lineWidth = 1;
      } else {
        c.strokeStyle = this.gridLineColor;
        c.lineWidth = 0.5;
      }
      c.beginPath();
      c.moveTo(
        -(
          this.x_spacing +
          this.x_spacing * x +
          this.x_gridLinePseudoLength * Math.sin(-this.y_angle)
        ),
        -this.y_gridLinePseudoLength * Math.cos(-this.y_angle)
      );
      c.lineTo(
        -(
          this.x_spacing +
          this.x_spacing * x +
          this.x_gridLinePseudoLength * Math.sin(this.y_angle)
        ),
        this.y_gridLinePseudoLength * Math.cos(this.y_angle)
      );
      c.stroke();
    }
  }

  //grid update method
  update() {
    //this.x_angle += 0.005;
    //this.x_spacing += 0.1;

    this.draw();
  }
}
