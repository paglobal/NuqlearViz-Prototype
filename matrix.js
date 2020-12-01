//matrix class
class Matrix {
  constructor(array) {
    //actual matrix
    this.matrix = array;

    //number of rows of matrix
    this.rows = array.length;

    //number of columns of matrix
    this.columns = array[0].length;

    //string representation of size of matrix (eg. "2 x 3")
    this.size = `${this.rows} x ${this.columns}`;
  }

  /*
   ==============
   Static Methods
   ==============
   */

  //static method to add multiple matrices
  static add(...matrices) {
    //create a zero matrix with the specified size
    let result_matrix = Matrix.zero(matrices[0].rows, matrices[0].columns);

    //loop through all the matrix argumennts, adding each successive matrix to the current value of result_matrix on each iteration
    for (let m = 0; m < matrices.length; m++) {
      console.log(result_matrix);
      result_matrix = result_matrix.add(matrices[m]);
    }

    return result_matrix;
  }

  //static method to create an empty matrix
  static empty(rows, columns) {
    //create an empty array
    let result_matrix = [];

    //a composition of two loops that builds an empty matrix with the specified size from the empty array
    for (let r = 0; r < rows; r++) {
      result_matrix[r] = [];
      for (let c = 0; c < columns; c++) {
        result_matrix[r][c] = undefined;
      }
    }

    return new Matrix(result_matrix);
  }

  //static class method that creates a new identity matrix
  static identity(size) {
    //create an empty array
    let result_matrix = [];

    //a composition of two loops that builds an identity matrix from the empty array with the specified size
    for (let r = 0; r < size; r++) {
      result_matrix[r] = [];
      for (let c = 0; c < size; c++) {
        result_matrix[r][c] = r === c ? 1 : 0;
      }
    }

    return new Matrix(result_matrix);
  }

  //static method to multiply multiply matrices
  static multiply(...matrices) {
    //create an identity matrix
    let result_matrix = Matrix.identity(matrices[0].rows, matrices[0].columns);

    //loop through all the matrix argumennts, multiplying each successive matrix with the current value of result_matrix on each iteration
    for (let m = 0; m < matrices.length; m++) {
      console.log(result_matrix);
      result_matrix = matrices[m].multiply(result_matrix);
    }

    return result_matrix;
  }

  //static class method that creates a new 2d reflection matrix
  static reflection_2d(reference) {
    //create an empty array
    let result_matrix = [];

    //a variable to store the matrix size
    let size = 2;

    //an array to help map reference letters to indices
    let reference_array = ["x", "y"];

    //if statement to check whether the reference is the x or y axis
    if (reference === "x" || reference === "y") {
      //a composition of two loops that builds a reflection matrix from the empty array with the specified size
      for (let r = 0; r < size; r++) {
        result_matrix[r] = [];
        for (let c = 0; c < size; c++) {
          if (r === c && r === reference_array.indexOf(reference)) {
            result_matrix[r][c] = 1;
          } else {
            result_matrix[r][c] = r === c ? -1 : 0;
          }
        }
      }
      //if statement to check whether the reference is y = x
    } else if (reference === "y = x") {
      //a composition of two loops that builds a reflection matrix from the empty array with the specified size
      for (let r = 0; r < size; r++) {
        result_matrix[r] = [];
        for (let c = 0; c < size; c++) {
          result_matrix[r][c] = r === c ? 0 : 1;
        }
      }
      //if statement to check whether the reference is y = -x
    } else if (reference === "y = -x") {
      //a composition of two loops that builds a reflection matrix from the empty array with the specified size
      for (let r = 0; r < size; r++) {
        result_matrix[r] = [];
        for (let c = 0; c < size; c++) {
          result_matrix[r][c] = r === c ? 0 : -1;
        }
      }
      //if statement to check whether the reference is the origin
    } else if (reference === "origin") {
      //a composition of two loops that builds a reflection matrix from the empty array with the specified size
      for (let r = 0; r < size; r++) {
        result_matrix[r] = [];
        for (let c = 0; c < size; c++) {
          result_matrix[r][c] = r === c ? -1 : 0;
        }
      }
    }

    return new Matrix(result_matrix);
  }

  //static class method that creates a new 3d reflection matrix
  static reflection_3d(plane) {
    //create an empty array
    let result_matrix = [];

    //a variable to store the matrix size
    let size = 3;

    //an array to help map planes letters to indices
    let plane_array = ["yz", "xz", "xy"];

    //a composition of two loops that builds a reflection matrix from the empty array with the specified size
    for (let r = 0; r < size; r++) {
      result_matrix[r] = [];
      for (let c = 0; c < size; c++) {
        if (r === c && r === plane_array.indexOf(plane)) {
          result_matrix[r][c] = -1;
        } else {
          result_matrix[r][c] = r === c ? 1 : 0;
        }
      }
    }

    return new Matrix(result_matrix);
  }

  //static class method that creates a new rotation matrix
  static rotation(size, axis, angle) {
    //convert the specified angle to radians
    let radians = angle * (Math.PI / 180);

    //create an empty array
    let result_matrix = [];

    //an array to help map axis letters to indices
    let axis_array = ["x", "y", "z"];

    //variable to store sign of sin of angle
    let sign;
    //a composition of two loops that builds a reflection matrix from the empty array with the specified size
    for (let r = 0; r < size; r++) {
      result_matrix[r] = [];
      for (let c = 0; c < size; c++) {
        if (r !== axis_array.indexOf(axis) && c !== axis_array.indexOf(axis)) {
          sign = r > c ? 1 : -1;
          result_matrix[r][c] =
            r === c
              ? Math.cos(radians)
              : axis_array.indexOf(axis) % 2 === 0
              ? sign * Math.sin(radians)
              : -sign * Math.sin(radians);
        } else {
          result_matrix[r][c] = r === c ? 1 : 0;
        }
      }
    }

    return new Matrix(result_matrix);
  }

  //static class method that creates a new scalar matrix
  static scalar(size, ...axes) {
    //create an empty array
    let result_matrix = [];

    //a composition of two loops that builds a scalar matrix from the empty array with the specified size
    for (let r = 0; r < size; r++) {
      result_matrix[r] = [];
      for (let c = 0; c < size; c++) {
        result_matrix[r][c] = r === c ? axes[r] || 1 : 0;
      }
    }

    return new Matrix(result_matrix);
  }

  //static class method that creates a new shear matrix
  static shear(size, axis, shear_factor) {
    //create an empty array
    let result_matrix = [];

    //an array to help map axis letters to indices
    let axis_array = ["x", "y", "z"];

    //a composition of two loops that builds a shear matrix from the empty array with the specified size
    for (let r = 0; r < size; r++) {
      result_matrix[r] = [];
      for (let c = 0; c < size; c++) {
        if (c === axis_array.indexOf(axis) && r !== c) {
          result_matrix[r][c] = shear_factor;
        } else {
          result_matrix[r][c] = r === c ? 1 : 0;
        }
      }
    }

    return new Matrix(result_matrix);
  }

  //static class method that creates a new matrix filled with ones
  static zero(rows, columns) {
    //create an empty array
    let result_matrix = [];

    //a composition of two loops that builds a zero matrix from the empty array with the specified size
    for (let r = 0; r < rows; r++) {
      result_matrix[r] = [];
      for (let c = 0; c < columns; c++) {
        result_matrix[r][c] = 0;
      }
    }

    return new Matrix(result_matrix);
  }

  /* 
   ===============
   Regular Methods
   ===============
   */

  //matrix add method to add
  add(matrix) {
    //if statement that checks to see whether or not the two matrices can be multiplied before attempting to multiply them
    if (this.rows === matrix.rows && this.columns === matrix.columns) {
      //create an empty array
      let result_matrix = [];

      //a composition of two loops that adds the two matrices and stores the result in result_matrix
      for (let r = 0; r < this.rows; r++) {
        result_matrix[r] = [];
        for (let c = 0; c < this.columns; c++) {
          result_matrix[r][c] = this.matrix[r][c] + matrix.matrix[r][c];
        }
      }

      return new Matrix(result_matrix);
    }
  }

  //matrix det method to compute the determinant of the matrix
  det() {
    //an if statement that checks to see if the matrix has a determinant before attempting to compute it
    if (this.rows === this.columns) {
      //declare a variable to store the determinant
      let det;

      //computes the determinant if the matrix is a 1 x 1 matrix
      if (this.rows === 1) {
        det = this.matrix[0][0];

        //computes the determinant if the matrix is a 2 x 2 matrix
      } else if (this.rows === 2) {
        det =
          this.matrix[0][0] * this.matrix[1][1] -
          this.matrix[0][1] * this.matrix[1][0];

        //computes the determinant if the matrix is a 3 x 3 matrix
      } else if (this.rows === 3) {
        det =
          this.matrix[0][0] *
            (this.matrix[1][1] * this.matrix[2][2] -
              this.matrix[1][2] * this.matrix[2][1]) -
          this.matrix[0][1] *
            (this.matrix[1][0] * this.matrix[2][2] -
              this.matrix[1][2] * this.matrix[2][0]) +
          this.matrix[0][2] *
            (this.matrix[1][0] * this.matrix[2][1] -
              this.matrix[1][1] * this.matrix[2][0]);
      }

      return det;
    }
  }

  //matrix inverse method to find the inverse of the matrix
  inverse() {
    //if statement to check whether or not the matrix has an inverse
    if (this.rows === this.columns) {
      let I = Matrix.identity(this.rows).matrix;
      let C = this.matrix;
      let e = 0;
      // perform elementary row operations
      for (let i = 0; i < this.rows; i++) {
        // get the element e on the diagonal
        e = C[i][i];

        // if we have a 0 on the diagonal (we'll need to swap with a lower row)
        if (e === 0) {
          //look through every row below the i'th row
          for (let ii = i + 1; ii < this.rows; ii++) {
            //if the ii'th row has a non-0 in the i'th col
            if (C[ii][i] != 0) {
              //it would make the diagonal have a non-0 so swap it
              for (let j = 0; j < dim; j++) {
                e = C[i][j]; //temp store i'th row
                C[i][j] = C[ii][j]; //replace i'th row by ii'th
                C[ii][j] = e; //repace ii'th by temp
                e = I[i][j]; //temp store i'th row
                I[i][j] = I[ii][j]; //replace i'th row by ii'th
                I[ii][j] = e; //repace ii'th by temp
              }
              //don't bother checking other rows since we've swapped
              break;
            }
          }
          //get the new diagonal
          e = C[i][i];
          //if it's still 0, not invertable (error)
          if (e == 0) {
            return;
          }
        }

        // scale this row down by e (so we have a 1 on the diagonal)
        for (let j = 0; j < this.rows; j++) {
          C[i][j] = C[i][j] / e; //apply to original matrix
          I[i][j] = I[i][j] / e; //apply to identity
        }

        // subtract this row (scaled appropriately for each row) from ALL of
        // the other rows so that there will be 0's in this column in the
        // rows above and below this one
        for (let ii = 0; ii < this.rows; ii++) {
          // only apply to other rows (we want a 1 on the diagonal)
          if (ii == i) {
            continue;
          }

          // we want to change this element to 0
          e = C[ii][i];

          // subtract (the row above(or below) scaled by e) from (the
          // current row) but start at the i'th column and assume all the
          // stuff left of diagonal is 0 (which it should be if we made this
          // algorithm correctly)
          for (let j = 0; j < this.rows; j++) {
            C[ii][j] -= e * C[i][j]; //apply to original matrix
            I[ii][j] -= e * I[i][j]; //apply to identity
          }
        }
      }

      //we've done all operations, C should be the identity
      //matrix I should be the inverse:
      return new Matrix(I);
    }
  }

  //matrix multiply method to multiply the matrix with other matrices
  multiply(matrix) {
    //if statement that checks to see whether or not the two matrices can be added before attempting to add them
    if (this.rows === matrix.columns) {
      //create an empty array
      let result_matrix = [];

      //a composition of two loops that multiplies the two matrices and stores the result in result_matrix
      for (let r = 0; r < matrix.rows; r++) {
        result_matrix[r] = [];
        for (let c = 0; c < this.columns; c++) {
          result_matrix[r][c] = 0;
          for (let i = 0; i < this.rows; i++) {
            result_matrix[r][c] += this.matrix[i][c] * matrix.matrix[r][i];
          }
        }
      }

      return new Matrix(result_matrix);
    }
  }

  //matrix transpose method to transpose matrix
  transpose() {
    //create an empty array to store the matix transpose
    let matrix_transpose = [];

    //a composition of two loops that transpose the matrix
    for (let r = 0; r < this.rows; r++) {
      matrix_transpose[r] = [];
      for (let c = 0; c < this.columns; c++) {
        matrix_transpose[r][c] = this.matrix[c][r];
      }
    }

    return new Matrix(matrix_transpose);
  }
}
