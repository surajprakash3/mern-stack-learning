// var a;
// console.log(a)
// a=10 //undefined

// function outerFunction(){
//     let val =10;
//     return function(){
//     console.log(val);
//     }
// }

// for (var i=0; i<5; i++ ){
//     setTimeout(()=>{
//         console.log(i)       // print only 5 fivr time
//     },1000)
// }

// for (let j=0; j<5; j++){
//     setTimeout(()=>{
//         console.log(j)   // print whole no at n-1 
//     },1000)
// }


// for (const j=0; j<5; j++){
//     setTimeout(()=>{
//         console.log(j)   // it is fixed this is showing error
//     },1000)
// }

// for(var i=0; i<10; i++){
//     setTimeout(()=>{
//         console.log("suraj")
//     },100)
// }

// for(let j=0; j<10; j++){
//     setTimeout(()=>{
//         console.log("suraj")
//     },100)
// }


// for (let i=0; i<5; i++ ){
//     setTimeout(()=>{
//         let val= productfun(i);
//         console.log(val)
//     },1000)
// }
// function productfun(i){
//     i++;
//     let prod=10;
//     prod = prod*i;
//     return prod;
// }

// for (let j=0; j<5; j++){
//     setTimeout(()=>{
//         console.log(j)   // print whole no at n-1 
//     },1000)
// }

// let amount = 100;
// function createAccount(initAmount) {
//     let balance = initAmount; // private variable (closure)

//     return {
//         deposit(amount) {
//             balance += amount;
//             return balance;
//         },

//         withdraw(amount) {
//             if (amount > balance) {
//                 return "Insufficient balance";
//             }
//             balance -= amount;
//             return balance;
//         },

//         getBalance() {
//             return balance;
//         }
//     };
// }

// // create account with initial balance
// const account = createAccount(1000);

// console.log(account.deposit(500));   // 1500
// console.log(account.withdraw(300));  // 1200
// console.log(account.getBalance());   // 1200


console.log("start");
setTimeout(()=>{
    console.log("first timeout")
})
console.log("end");