// // console.log("hello")

// // SyntaxError
// // type module= require("module")

// const express= require('express')

// // import express from 'express'

// const app=express();
// const port=8080;

// console.log("first line code")

// app.listen(port,()=>{
//     console.log("server running")
// })
// console.log("Second line code")

// let students = ["Suraj", "Amit", "Ravi"];
// students.push("Neha");
// students.map(name => console.log(name));

// let numbers = [10, 20, 30, 40];
// for(let i=0;i<numbers.length;i++){
//   console.log(numbers[i]);
// }

// const express = require("express");
// const app = express();
// const port = 8080;
// app.use(express.json()); // allows reading JSON from request body
// console.log("first line code");

// const studentData = [];
// app.post("/post-data", (req, res) => {
//   try {
//     const { name, rollNum, email } = req.body;
//     studentData.push({ name, rollNum, email });
//     res.status(201).json({
//       data: studentData,
//       msg: "Data created",
//     });
//   } catch (err) {
//     res.status(500).json({
//       error: err,
//       msg: "Internal server error",
//     });
//   }
// });

// app.get("/get-data", (req, res) => {
//   try {
//     res.status(200).json({ data: studentData, msg: "success" });
//   } catch (err) {
//     res.status(500).json({ error: err, msg: "Internal" });
//   }
// });

// const product = [];
// app.post("/product", (req, res) => {
//   try {
//     const { productname, price, stack } = req.body;
//     product.push({ productname, price, stack });
//     res.status(201).json({
//       data: product,
//       msg: "Data created2",
//     });
//   } catch (err) {
//     res.status(500).json({
//       error: err,
//       msg: "Internal server error",
//     });
//   }
// });

// app.listen(port, () => {
//   console.log("server running on port", port);
// });

const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

const employees = [];

app.post("/add-employee", (req, res) => {
  try {
    const { emp_name, emp_code, emp_email } = req.body;

    if (!emp_name || !emp_code || !emp_email) {
      return res.status(400).json({ msg: "All fields required" });
    }

    const newEmployee = {
      emp_name,
      emp_code,
      emp_email,
    };

    employees.push(newEmployee);

    res.status(201).json({
      msg: "Employee added successfully",
      data: newEmployee,
    });
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
  }
});

app.get("/employees", (req, res) => {
  res.json({
    total: employees.length,
    data: employees,
  });
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
