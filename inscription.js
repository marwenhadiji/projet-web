var formElement=document.getElementById("form")
var nameElement=document.getElementById("Nom")
var prenomElement=document.getElementById("prenom")
var elementdate= document.getElementById("date_naissance")
var elementtel=document.getElementById("telephone")
var MdpElement=document.getElementById("password")
formElement.addEventListener("submit",function(event){
    event.preventDefault()
    validateName() 
    validerDateOfBirth()
    validatePrenom()
    validatetel()
    validatemdp()
})    

var emailElement = document.getElementById("email");
emailElement.addEventListener("keyup", function () {
    validateEmail();
});

function validerDateOfBirth() 
{
    var elementvalue= new Date(elementdate.value)
    const dateAujourdhui=new Date();
    if(elementvalue>=dateAujourdhui)
        dateError.innerHTML="<span style='color :red'>please select a date that is before today</span>"
    else
    dateError.innerHTML="<span style='color :green'>Correct</span>"
}

function validateName()
{
    var NameValue = nameElement.value ;
    var pattern =/^[a-z A-Z]+$/
    if(!NameValue.match(pattern)){
        nameError.innerHTML="<span style='color :red'> nom ne doit contenir que des lettres et doit avoir au minimum 1 lettre </span>"
    }else
    {
        nameError.innerHTML="<span style='color :green'>Correct</span>"
    }
}
function validatePrenom()
{
    var Prenomvalue= prenomElement.value;
    if(Prenomvalue.length< 1){
        prenomError.innerHTML="<span style='color: red'>Prenom doit contenir au minimum 1 caractere</span>";
    }
    else{
        prenomError.innerHTML = "<span style='color: green'>Correct</span>";
    }
}
function validatetel()
{
    var telvalue=elementtel.value
    var pattern=/^[0-9]{8}$/
    if(!telvalue.match(pattern))
    {
        telError.innerHTML="<span style='color: red'>Numero de telephone doit contenir exactement 8 chiffres</span>";
    }else
    {
        telError.innerHTML="<span style='color: green'>Correct</span>";
    }
}
function validatemdp()
{
    var mdpvalue=MdpElement.value
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!mdpvalue.match(pattern)) {
        mdpError.innerHTML = "<span style='color: red'>Le mot de passe doit contenir au moins 8 caracteres, incluant au moins un chiffre, une lettre minuscule et une lettre majuscule.</span>";
    } else {
        mdpError.innerHTML = "<span style='color: green'>Correct</span>";
    }
}

function validateEmail() {
    var emailValue = emailElement.value.trim();

    var pattern = /^[a-zA-Z0-9._-]+@esprit\.tn$/;

    if (!pattern.test(emailValue)) {
        emailError.innerHTML = "<span style='color: red'>L'email doit être valide et contenir @esprit.tn</span>";
    } else {
        emailError.innerHTML = "<span style='color: green'>Correct</span>";
    }
}