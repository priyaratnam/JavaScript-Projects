function addition_Function(){
    var addition = 2+2;
    document.getElementById("Math").innerHTML="2+2 =" + addition;
}
function subtraction_Function(){
    var subtraction =20 - 10;
    document.getElementById("Math0").innerHTML="20 - 10 =" + subtraction;
}
function multiplication_Function(){
    var multiplication =10 * 5;
    document.getElementById("Math1").innerHTML="10 * 5 =" + multiplication;
}
function division_Function(){
    var division =200 / 5;
    document.getElementById("Math2").innerHTML="200 / 5 =" + division;
}
function modulus_Operator(){
    console.log(13 % 5);
    document.getElementById("Math3").innerHTML="200 % 5 =" + console.log;
}
function random_Function(){
    window.alert=(Math.random() * 100);
    document.getElementById("Math4").innerHTML =Math.floor(Math.random() * 100);
}
