function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}
function for_loop() {
    let text = "";
    for (let i=0; i<5; i++){
        text += "The favourite number is " + i + "<bt>";
    }
    document.getElementById("loop").innerHTML = text;
}

function for_array() {
    const colors = [];
    colors[0]= "Blue";
    colors[1]= "Pink";
    colors[2]= "Green";
    colors[3]= "Red";
    colors[4]= "Yellow";
    colors[5]= "Brown";

    document.getElementById("array").innerHTML = colors;
}

function for_let() {
    var X = 82;
    document.write(X);
    {
        let X = 33;
        document.write("<br>" + X);
    }
    document.write("<br>" + X);
}