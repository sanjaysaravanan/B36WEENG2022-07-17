// const btnEle = document.createElement('button');
// // btnEle.setAttribute('type', 'button');
// // btnEle.setAttribute('value', 'Click to Add DOM');
// btnEle.innerText = "Click to Add DOM";

// btnEle.addEventListener('mouseover', () => {
//   const h1Ele = document.createElement('h1');
//   // btnEle.setAttribute('type', 'button');
//   // btnEle.setAttribute('value', 'Click to Add DOM');
//   h1Ele.innerText = "H1 Content";
//   document.body.append(h1Ele);
// })

// document.body.append(btnEle);


// const formEle = document.querySelector('form');

// formEle.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log("Submitting")
//   const elements = e.target.elements;

//   const data = {};

//   Array.from(elements).forEach((element) => {
//     if(element.nodeName === "INPUT") {
//       data[element.name] = element.value
//     }
//   });

//   console.log(data);
// })


// const emailEle = document.getElementById('email');
// const topDisp = document.getElementById('top-display');
// emailEle.addEventListener('keypress', (e) => {
//   topDisp.innerText = e.target.value;
// })


// const Add = (a, b) => a + b;

// const Sub = (a, b) => a - b;

// const DisplayResult = (result) => console.log("Result is ", result);

// const Compute = (operation, a, b) => {
//   const result = operation(a, b);

//   DisplayResult(result);
// }

// Compute(Add, 10, 40);


// const userDetails = getDetails("name");// Asyncchronous this returns proper value only after some time


// DisplayResult(undefined || "waitvalue"); // But this won't wait it will print undefined or throw error saying useDetails error
































// Promise computes the success or failure of an asynchronous operation

// const resolvePromise = true;

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if(resolvePromise)
//       resolve("I have resolved the Promise");
//     reject("Sorry, I am not able to do it");
//   }, 5000);
// });


// const customError = new Error("Error");
// console.log(customError);

// try {
//   const num = 'a'.map();
//   console.log(num);
// } catch (error) {
//   console.log(error);
// } finally {
//   console.log("Always executed irrespective error or not");
// }
// console.log('Result After');

const resolvePromise = true;
const pendingState = true;
const basementPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if(resolvePromise)
      resolve({ code: 1, msg: 'Basement Completed Successfully' });
    reject({ code: 0, errorMsg: 'Due to rain basement is pending for Completion' });
  }, 5000);
});

var baseResponse = undefined;


var structure = false;

basementPromise
  .then((response) => {
    console.log(response);
    throw Error("Custom Error");
    const structurePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(structure)
          resolve({ code: 1, msg: 'Structure Created' });
        reject({ code: 0, errorMsg: "Structure Failure" });
      }, 3000);
    });
    return structurePromise;
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Final Block")
  })
  

