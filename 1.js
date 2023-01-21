let calscreen = document.getElementById("screen");
function display(num){
    calscreen.value +=num;
}
function Ans(){
    try{
        calscreen.value=eval(calscreen.value);
    }
    catch(err){
        alert("Invalid operation")
    }
}
function Clear(){
    calscreen.value="";
}
function Del(){
    calscreen.value=calscreen.value.slice(0,-1)
}