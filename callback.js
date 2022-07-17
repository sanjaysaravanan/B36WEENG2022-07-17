// Callback is a function which is passed as a reference to the other function as a parameter/argument

const list = ['foot', 'volley', 'basket'];

var newList = list.map((val) => val + 'ball');

// Callback function in the above statement is (val) => val + 'ball'
// So in this context the map function accepts a callback function and call the function on each iteration to create a new array

// this can be separated and placed as variable

// const Add = (a, b) => a + b;

// const Sub = (a, b) => a - b;

// const DisplayResult = (result) => console.log("Result is ", result);

// const Compute = (operation, a, b) => {
//   const result = operation(a, b);

//   DisplayResult(result);
// }

// // Compute(Add, 10, 40);

// // Anonymous Callback function
// Compute((a, b) => a + b, 10, 60);

// Consider Building a HOuse

function Innterioe() {
  
}

function Exterior() {
  
}


function BuildStructure() {
  
  Innterioe();
  Exterior();

}

function Basement() {

  BuildStructure();  
}




Basement();
