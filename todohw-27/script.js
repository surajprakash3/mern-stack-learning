function addtask() {
    let date = document.getElementById('date').value;
    let task = document.getElementById('task').value;
    let level = document.getElementById('choose').value;

    if (date === "" || task === "") {
        alert("Please fill all fields");
        return;
    }

    let tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${date}</td>
        <td>${task}</td>
        <td>${level}</td>
        <td><button onclick="taskdone(this)">Done</button></td>
    `;

  
    document.getElementById("atask").appendChild(tr);

    document.getElementById("task").value = "";
}

function taskdone(btn) {

    let row = btn.parentElement.parentElement;

   
    row.removeChild(row.lastElementChild);

   
    document.getElementById("adone").appendChild(row);
}
