  let time=0;
  let count;
function start(){
  
    count = setInterval(()=>{
        time++;
        document.getElementById('a').innerHTML=time;

    },1000)
}
function stop(){
    clearInterval(count);
}
function reset(){
    clearInterval(count);
    time=0;
    
    document.getElementById('a').innerHTML=time;

}