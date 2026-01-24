// function adddata() {
//     // get input values
//     let weight = document.getElementById("weight").value;
//     let height = document.getElementById("height").value;

//     // validation
//     if (weight === "" || height === "") {
//         alert("Please enter weight and height");
//         return;
//     }

//     // convert height from cm to meter
//     let heightMeter = height / 100;

//     // calculate BMI
//     let bmi = (weight / (heightMeter * heightMeter)).toFixed(2);

//     // get table body
//     let tableBody = document
//         .getElementById("dataTable")
//         .getElementsByTagName("tbody")[0];

//     // insert new row
//     let newRow = tableBody.insertRow();

//     newRow.insertCell(0).innerText = weight;
//     newRow.insertCell(1).innerText = height;
//     newRow.insertCell(2).innerText = bmi;

//     // clear inputs
//     document.getElementById("weight").value = "";
//     document.getElementById("height").value = "";
// }

function adddata(){
    let weight= document.getElementById("weight").value;
    let height=document.getElementById("height").value;
    if(weight==="" || height===""){
        alert("please enter weight ane height");
        return;
    }
    let heightMeter=height/100;
    let bmi=(weight/(heightMeter*heightMeter)).toFixed(2);

    let tableBody=document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];

    let newRow = tableBody.insertRow();

    newRow.insertCell(0).innerText=weight;
    newRow.insertCell(1).innerText=height;
    newRow.insertCell(2).innerText=bmi;

    document.getElementById("weight").value="";
    document.getElementById("height").value="";
}