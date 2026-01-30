// https://jsonplaceholder.typicode.com/users



// const promise = new Promise((resolve, reject) => {
//   const flag = true;
//   setTimeout(() => {
//     if (flag) {
//       resolve("resolve state");
//     } else {
//       reject("Reject state");
//     }
//   }, 1000);
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// console.log("start")
// setTimeout(()=>{
//     console.log("first setTimeout")
// },100);

// setTimeout(()=>{
//     console.log("second")
// })
// const promise = new Promise((resolve, reject) => {
//   const flag = false;
 
//     if (flag) {
//       resolve("resolve state");
//     } else {
//       reject("Reject state");
//     }
// })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// console.log("end");



// function blockingTask(){
//   const start=Date.now();
//   console.log(start)
//   while(Date.now()-start<3000){
//     console.log("hello",Date.now())
//   }
//   console.log("Blocking task done");

// }
// console.log("start");
// blockingTask();
// console.log("End");

// // console.log("start")

// ;

localStorage.setItem("name","suraj")
let nameval=localStorage.getItem("name")
console.log("hello",nameval)
localStorage.setItem("roll","21")
let rollval=localStorage.getItem('roll')
console.log("rollno.",rollval)