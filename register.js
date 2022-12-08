function validateName(name){
    if(name.length < 3){
        return false;
    }
    return true;
}
function validatePassword(password){
    if(password.length < 3){
        return false;
    }
    return true;
}
function validateEmail(email){
    if(!email.endsWith("@gmail.com")){
        return false;
    }
    return true;
}
function validateNation(nation){
    if(nation === ""){
        return false;
    }
    return true;
}
function validateDob(dob){
    if(dob === ""){
        return false;
    }
    return true;
}

document.getElementById("submit").addEventListener("click", function(e){
    e.preventDefault();

    let error = document.getElementById("error");

    let input_password = document.getElementById("password");
    let input_name = document.getElementById("name");
    let input_email = document.getElementById("email");
    let input_dob = document.getElementById("dob");
    let input_nation = document.getElementById("nation");
    let check = document.getElementById("agree");

    var success = 0;

    if(!validateNation(input_nation.value)){
        error.innerHTML = "[ ! ] Please enter your nationality";
    }else{
        success += 1;
    }
    if(!validateDob(input_dob.value)){
        error.innerHTML = "[ ! ] Please enter your date of birth";
    }else{
        success += 1;
    }
    if(!validatePassword(input_password.value)){
        error.innerHTML = "[ ! ] Password length must be 3 or more characters";
    }else{
        success += 1;
    }
    if(!validateEmail(input_email.value)){
        error.innerHTML = "[ ! ] Email must end with @gmail.com";
    }else{
        success += 1;
    }
    if(!validateName(input_name.value)){
        error.innerHTML = "[ ! ] Username length must be 3 or more characters";
    }else{
        success += 1;
    }
    if(!check.checked){
        error.innerHTML = "[ ! ] You must agree to our policy";
    }else{
        success += 1;
    }

    if(success == 6){
        alert("Pre-register successful. \nThank you for pre-registering.");
    }
});