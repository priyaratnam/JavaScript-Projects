function Play_Function() {
    document.write(Bigger = (5 > 1)? "Left number is bigger":"Right number is bigger");
}
function Play_Function() {
    var Height, Can_play;
    Height=document.getElementById("Height").value;
    Can_play = (Height < 30) ? "You are too short " : "You are tall enough ";
    document.getElementById("Play").innerHTML = Can_play + " to play.";
}
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", " Pinto ", 1971, " Mustard ");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Emily drives a " + Emily.Vehicle_Color + "colored" + Emily.Vehicle_Model +
    "manufactured in" + Emily.Vehicle_Year;
}
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
function identifi_Funtion() {
    var X = 10;
    var Y = "Charlie"; 
    document.getElementById("Iden").innerHTML  = X + Y;
}
