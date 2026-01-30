
const inputbox=document.getElementById('input');

inputbox.oninput=power;

function power(){
    let num=Number(inputbox.value);
    document.getElementById("square").value=num*num;
    document.getElementById("cube").value=num*num*num;
    document.getElementById("forth").value=num*num*num*num;
}