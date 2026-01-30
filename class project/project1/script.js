function addData() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let contact = document.getElementById("contact").value;

    if (name === "" || age === "" || contact === "") {
        alert("Please fill all fields");
        return;
    }

    let tableBody = document
        .getElementById("dataTable")
        .getElementsByTagName("tbody")[0];

    let newRow = tableBody.insertRow();

    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = age;
    newRow.insertCell(2).innerText = contact;

    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("contact").value = "";
}
// Callback function (task to perform)
// const insertRow = (name, age, course) => {
//     let tableBody = document
//         .getElementById("dataTable")
//         .getElementsByTagName("tbody")[0];

//     let newRow = tableBody.insertRow();

//     newRow.insertCell(0).innerText = name;
//     newRow.insertCell(1).innerText = age;
//     newRow.insertCell(2).innerText = course;
// };

// Higher-order function
// const processForm = (name, age, course, callback) => {
//     callback(name, age, course);
// };

// Function triggered by button click
// function addData() {
//     let name = document.getElementById("name").value;
//     let age = document.getElementById("age").value;
//     let course = document.getElementById("course").value;

//     if (name === "" || age === "" || course === "") {
//         alert("Please fill all fields");
//         return;
//     }

//     // Passing function as callback
//     processForm(name, age, course, insertRow);

//     // Clear inputs
//     document.getElementById("name").value = "";
//     document.getElementById("age").value = "";
//     document.getElementById("course").value = "";
// }
