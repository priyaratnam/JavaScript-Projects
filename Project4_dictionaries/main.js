function my_Dictionary(){
    var Animal = {
        Species:"Cat",
        Color:"White",
        Breed:"Labrador",
        Age:25,
        Sound:"Meaaaa!"
    }
    document.getElementById("Dictionary").innerHTML=Animal.Sound
}
function my_Dictionarys(){
    var Food = {
        Species:"Rotti",
        Color:"Black",
        Breed:"Sambal",
        Age:50,
        Sound:"Boooooo!"
    }
    delete Food.Sound;
    document.getElementById("Dictionarys").innerHTML=Food.Sound
}