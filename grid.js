//Grid class
class Grid {
  constructor() {
    this.x_spacing = 36;
    this.y_spacing = 36;
    this.x_gridSpacing = 2;
    this.y_gridSpacing = 2;
    this.majorAxisColor = "white";
    this.minorAxisColor = "#21a2d9";
    this.gridLineColor = "white";
  }

  //Grid draw method
  draw() {
    //x-axis
    c.strokeStyle = this.majorAxisColor;
    c.lineWidth = 2;
    c.beginPath();
    c.moveTo(-canvas.width, 0);
    c.lineTo(canvas.width / 2, 0);
    c.stroke();

    //positive x grid lines
    c.lineWidth = 0.5;
    for (let x = 0; x < canvas.width / (this.x_spacing * 2); x++) {
      if ((x + 1) % this.x_gridSpacing === 0) {
        c.strokeStyle = this.minorAxisColor;
        c.lineWidth = 1;
      } else {
        c.strokeStyle = this.gridLineColor;
        c.lineWidth = 0.5;
      }
      c.beginPath();
      c.moveTo(this.x_spacing + this.x_spacing * x, -(canvas.height / 2));
      c.lineTo(this.x_spacing + this.x_spacing * x, canvas.height / 2);
      c.stroke();
    }

    //negative x grid lines
    c.lineWidth = 0.5;
    for (let x = 0; x < canvas.width / (this.x_spacing * 2); x++) {
      if ((x + 1) % this.x_gridSpacing === 0) {
        c.strokeStyle = this.minorAxisColor;
        c.lineWidth = 1;
      } else {
        c.strokeStyle = this.gridLineColor;
        c.lineWidth = 0.5;
      }
      c.beginPath();
      c.moveTo(-(this.x_spacing + this.x_spacing * x), -(canvas.height / 2));
      c.lineTo(-(this.x_spacing + this.x_spacing * x), canvas.height / 2);
      c.stroke();
    }

    //y-axis
    c.strokeStyle = this.majorAxisColor;
    c.lineWidth = 2;
    c.beginPath();
    c.moveTo(0, -(canvas.height / 2));
    c.lineTo(0, canvas.height / 2);
    c.stroke();

    //positive y grid lines
    c.lineWidth = 0.5;
    for (let y = 0; y < canvas.height / (this.y_spacing * 2); y++) {
      if ((y + 1) % this.y_gridSpacing === 0) {
        c.strokeStyle = this.minorAxisColor;
        c.lineWidth = 1;
      } else {
        c.strokeStyle = this.gridLineColor;
        c.lineWidth = 0.5;
      }
      c.beginPath();
      c.moveTo(-(canvas.width / 2), -(this.y_spacing + this.y_spacing * y));
      c.lineTo(canvas.width / 2, -(this.y_spacing + this.y_spacing * y));
      c.stroke();
    }

    //negative y grid lines
    c.lineWidth = 0.5;
    for (let y = 0; y < canvas.height / (this.y_spacing * 2); y++) {
      if ((y + 1) % this.y_gridSpacing === 0) {
        c.strokeStyle = this.minorAxisColor;
        c.lineWidth = 1;
      } else {
        c.strokeStyle = this.gridLineColor;
        c.lineWidth = 0.5;
      }
      c.beginPath();
      c.moveTo(-(canvas.width / 2), this.y_spacing + this.y_spacing * y);
      c.lineTo(canvas.width / 2, this.y_spacing + this.y_spacing * y);
      c.stroke();
    }
  }
}
