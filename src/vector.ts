import { canvas, c, grid } from "./nuqlearViz.js"
import { Matrix } from "./matrix.js"

//vector_2d class
export class Vector_2D {
  x: number;
  y: number;
  x_displacement: number;
  y_displacement: number;

  constructor(options: {x: number, y: number, x_displacement?: number, y_displacement?: number}) {
    this.x = options.x; //set vector x component
    this.y = options.y; //set vector y component
    this.x_displacement = options.x_displacement ?? 0; //set x_displacement
    this.y_displacement = options.y_displacement ?? 0; //set y_displacement
  }

  /*
   ==============
   Static Methods
   ==============
   */

  //static method to add multiple vectors
  static add(...vectors: Vector_2D[]) {
    //create a new zero vector
    let result_vector: Vector_2D = Vector_2D.zero();

    //a loop that successively adds each of the each vector arguments to the current value of result_vector on each iteration
    for (let v = 0; v < vectors.length; v++) {
      result_vector = result_vector.add(vectors[v]);
    }

    return result_vector;
  }

  //static method to find the dot product of two vectors
  static dot(vector_1: Vector_2D, vector_2: Vector_2D) {
    let dot_product: number = vector_1.dot(vector_2);

    return dot_product;
  }

  //static method to create ones vector
  static ones() {
    let ones_vector: Vector_2D = new Vector_2D({x: 1, y: 1});

    return ones_vector;
  }

  //static method to create a zero vector
  static zero() {
    let zero_vector: Vector_2D = new Vector_2D({x: 0, y: 0});

    return zero_vector;
  }

  /*
   ===============
   Regular Methods
   ===============
   */

  //vector add method to add the vector to another vector
  add(vector: Vector_2D) {
    //add the vector components
    let x_result: number = this.x + vector.x;
    let y_result: number = this.y + vector.y;

    //create new vector using result from added components
    let result_vector: Vector_2D = new Vector_2D({x: x_result, y: y_result});

    return result_vector;
  }

  //vector dot method to find the dot product of the vector with another vector
  dot(vector: Vector_2D) {
    //create a variable to store the dot product
    let dot_product: number = this.x * vector.x + this.y * vector.y;

    return dot_product;
  }

  //vector draw method to draw the vector on screen
  draw() {
    c.strokeStyle = "yellow";
    c.lineWidth = 2;
    c.beginPath();
    c.moveTo(this.x_displacement, this.y_displacement);
    c.lineTo(this.x * grid.x_spacing, -this.y * grid.y_spacing);
    c.stroke();
  }

  //vector mag method to calculate and return the magnitude of the vector
  mag() {
    //calculate the magnitude of the vector and store it in a variable
    let vector_magnitude: number = Math.sqrt(this.x * this.x + this.y * this.y);

    return vector_magnitude;
  }

  //vector negate method to negate the vector
  negate() {
    //create a new vector and store it in result_vector
    let result_vector: Vector_2D = Vector_2D.zero();

    //set the components of result_vector such that it becomes the negative of the vector
    result_vector.x = -this.x;
    result_vector.y = -this.y;

    return result_vector;
  }

  //vector project_scalar method to find it's scalar projection unto another vector
  project_scalar(vector: Vector_2D) {
    //create a variable and store in it the scalar projection of the vector on the other vector
    let scalar_projection: number = this.dot(vector) / vector.mag();

    return scalar_projection;
  }

  //vector project_vector method to find it's vector projection unto another vector
  project_vector(vector: Vector_2D) {
    //create a new vector and store it in a variable
    let vector_projection: Vector_2D = Vector_2D.zero();

    //set the components of vector_projection such that it becomes the vector projection of the vector on the other vector
    vector_projection.x = this.project_scalar(vector) * vector.x;
    vector_projection.y = this.project_scalar(vector) * vector.y;

    return vector_projection;
  }

  //vector scale method to scale the vector with a specified scalar
  scale(scalar: number) {
    //create a variable and store in it a new vector
    let result_vector: Vector_2D = Vector_2D.zero();

    //multiply the vector components by the scalar and store the result in the result_vector variable
    result_vector.x = this.x * scalar;
    result_vector.y = this.y * scalar;

    return result_vector;
  }

  //vector toMatrix method to transform vector into it's matrix representation
  toMatrix() {
    //declare a variable to stroke the matrix form of the vector
    let vector_matrix: Matrix = new Matrix([[this.x], [this.y]]);

    return vector_matrix;
  }

  //vector transform method to transform the vector with a matrix
  transform(matrix: Matrix) {
    //multiply the vector's matrix form by the desired matrix and store it in the vector_matrix variable
    let vector_matrix: Matrix = this.toMatrix().multiply(matrix)!;

    //create a variable and store in it a zero vector
    let result_vector: Vector_2D = Vector_2D.zero();

    //set the components of result_vector to the new components of the vector's matrix form
    result_vector.x = vector_matrix.matrix[0][0];
    result_vector.y = vector_matrix.matrix[1][0];

    return result_vector;
  }

  //vector unit method to calculate and return the vector's unit vector
  unit() {
    //create a variable to store a ones vector
    let unit_vector: Vector_2D = Vector_2D.zero();

    //set the components of result_vector through multiplication such that it becomes the unit vector of the vector
    unit_vector.x = this.x / this.mag();
    unit_vector.y = this.y / this.mag();

    return unit_vector;
  }
}

//vector_3d class
class Vector_3D {}
