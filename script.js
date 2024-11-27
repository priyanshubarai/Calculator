
let display = document.querySelector(".display")


document.querySelector(".n0").onclick = () => {
    addToDisplay('0');
}
document.querySelector(".n1").onclick = () => {
    addToDisplay('1');
}
document.querySelector(".n2").onclick = () => {
    addToDisplay('2');
}
document.querySelector(".n3").onclick = () => {
    addToDisplay('3');
}
document.querySelector(".n4").onclick = () => {
    addToDisplay('4');
}
document.querySelector(".n5").onclick = () => {
    addToDisplay('5');
}
document.querySelector(".n6").onclick = () => {
    addToDisplay('6');
}
document.querySelector(".n7").onclick = () => {
    addToDisplay('7');
}
document.querySelector(".n8").onclick = () => {
    addToDisplay('8');
}
document.querySelector(".n9").onclick = () => {
    addToDisplay('9');
}
document.querySelector(".plus").onclick = () => {
    addToDisplay('+');
}
document.querySelector(".minus").onclick = () => {
    addToDisplay('-');
}
document.querySelector(".multiply").onclick = () => {
    addToDisplay('*');
}
document.querySelector(".division").onclick = () => {
    addToDisplay('/');
}
document.querySelector(".modulo").onclick = () => {
    addToDisplay('%');
}
document.querySelector(".dot").onclick = () => {
    addToDisplay(".")
}
document.querySelector(".cancel").onclick = () => {
    display.value = '';
}
document.querySelector(".equals").onclick = () => {
    let result;
    try{
        result = eval(display.value);
    }
    catch(e){
        result = "Error";
    }
    display.value = result;
}




function addToDisplay(input) {
    display.value += input;
}