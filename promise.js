// Promise computes the success or failure of an asynchronous operation

// const resolvePromise = false;

// const p = new Promise((resolve, reject) => {
//   if (  resolvePromise )
//     resolve("Resolved Promise");
  
//   reject("Rejected the Promise due to some error");

// });

// var age = parseInt(prompt("Enter You age??"));

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (  age >= 18 )
//       resolve("Your Eligible for vaccine");
  
//     reject("Your not eligible for Vaccine");
//     console.log(p2);
//   }, 4000)
// });
// console.log(p2);

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (  age >= 18 )
//       resolve({ code: 1, msg: "Your eligible to vote" });
  
//     reject({ code: 0, errorMsg: 'Sorry, Your not eligible to vote' });
//   }, 4000)
// });


// console.log(p3);


// Accessing the Values of Promise
// p3.then(
//   (response) => console.log(response)
// ).catch(
//   (error) => console.log(error)
// ).finally(() => {
//   console.log("Finally block which will be executed every time")
// })


// promise chaining
// p3.then(
//   (response) => new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(response);
//     }, 3000);
//   })
// ).then((response) => {
//   console.log(response)
// }).catch((error) => console.log(error))
// .finally(() => {
//   console.log("Finally Block")
// })

// Promsie All
const FloorWork = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ code: 1, msg: "Floor work is Done" })
  }, 3000);
});


const OuterPainting = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ code: 1, msg: "Outer Painting is Done" })
  }, 5000);
});



Promise.all([FloorWork, OuterPainting]).then((values) => {
  console.log(values);
});




