// console.log("hello")

// var a=10;
// console.log("first var",a)
// let b=20;
// console.log("Second var",b)
// const c = 0;
// console.log(c)
// let name="Rohit";
// let nameA="A";
 

// question 
// if(a>20){
//     console.log("value of ",a*20)
// }else{
//     console.log(a+30)
// }
// console.log(a)



// function in javascript

// Question 1
// function sum(a,b ){
//     return a+b
// }
// console.log(sum(30,40))

// question 2.
// function evenodd(a){
//     if(a%2==0){
//         console.log("even",a)
//     }else{
//         console.log("odd",a)
//     }

// }
// evenodd(5)


// Array

// let arr=[1,2,3,4,5,6]
// console.log(arr[2])
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
//     console.log(arr[i])

// }
// console.log(sum)


// function in Array={

// function sumarray(arr){
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     console.log(sum)
// }
// let arr=[1,2,3,4,5,6]

// let sum=0;
// sumarray(arr)


// function sumofarray(arr){
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     return sum;
// }
// console.log(sumofarray(arr))



// find the max no of Array

// let arr=[1,2,3,4,5,6]
// let max=0;
// function maxnoarray(){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//     return max;

// }
// console.log(maxnoarray(arr))



//arrow function

// const fun = () =>{
//     // console.log("name")
//     return "name"

// }
// console.log(fun())


// const namefun = (user='gest') =>{
//     return user;
// }
// console.log(namefun())
// console.log(namefun("name"))


// const sumab = (a=10,b=5) => {
//     return a+b;
// }
// console.log(sumab())
// console.log(sumab(8))
// console.log(sumab(0,3))
// console.log(sumab(undefined,5))



// call back function

// const mul=(a,b) =>{
//     return a*b;
// }
// const funcode = (a,b,mul) =>{
//     return mul(a,b);
// }
// console.log(funcode(10,5,mul))



// console.log("first")
// function showmsg(msg,callback){
//     setTimeout(() => {
//         console.log("hell",msg)
//         callback();

//     },2000)
// }


// showmsg("name",()=>{
//     console.log("hi")
// })


// console.log("end")


//array or map 

// let arr=[2,5,10,8]
// const a=arr.map(myfin)
// function myfin(b){
//     return b*10;
// }
// console.log(a)




// let numbers = [1, 2, 3];

// let result = numbers.map(num => num * 2);
// console.log(result);

// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers);


const arr=["rohit","vikash", "ravi"]
arr.map((value)=>{
    console.log(value.toUpperCase(arr));
})

const newarr= arr.map((value)=>{
    console.log(value.toUpperCase())
}

)
console.log(newarr);