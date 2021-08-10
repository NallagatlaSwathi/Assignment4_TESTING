const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const postalcode=  document.getElementById('postalcode');
const phonenumber = document.getElementById('phonenumber');
const address = document.getElementById('address');
const form = document.getElementById('form');
const emailaddress = document.getElementById('emailaddress');
const city = document.getElementById('city');
const province = document.getElementById('province');
const notesfield = document.getElementById('notesfield');

const emailId = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//const postalcodeNumber = /^(?=[^DdFfIiOoQqUu\\d\\s])[A-Za-z]\\d(?=[^DdFfIiOoQqUu\\d\\s])[A-Za-z]\\s{0,1}\\d(?=[^DdFfIiOoQqUu\\d\\s])[A-Za-z]\\d$/;
//const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const postalcodeNumber = /^([0-9][a-zA-Z][0-9]\s[a-zA-Z][0-9][a-zA-Z])$/;
const phoneno = /^\(?\d{3}\)?-\d{3}-\d{4}$/;


//Email validation
function validateEmail(email) {
    return emailId.test(String(email).toLowerCase());
}

//postal code
function checkPostal(postal){
    return postalcodeNumber.test(String(postal).toLowerCase());
}
//check number
function checknumber(phone){
    return phoneno.test(String(phone).toLowerCase());
}
function submitForm(e){
    e.preventDefault();
    e.stopPropagation();
    console.log("Inside submitForm");
    validation();
    //window.location.href = "./display.html";
}

function validation(){
    const firstNameValue = firstname.value;
    const lastnameValue = lastname.value;
    const emailValue = emailaddress.value;
    const postalcodeValue = postalcode.value;
    const phonenumberValue = phonenumber.value;
    const addressValue = address.value;
    const cityValue = city.value;
    const provinceValue = province.value;
    const notesfieldValue = notesfield.value;
    
    if(firstNameValue === ''){
       alert("name cannot be empty");
    }

    if(lastnameValue === ''){
        alert("LastName cannot be empty");
    }

    if(addressValue === ''){
        alert("Address cannot be empty");
    }
    if(cityValue === ''){
        alert("City cannot be empty");
    }

    if(provinceValue === ''){
        alert("province cannot be empty");
    }
    if(emailValue === ''){
        alert("Email cannot be empty");
    }else if(!validateEmail(emailValue)){
        alert("Invalid email address");
    }else {
        validateEmail(emailValue);
    }

    if(postalcode === ''){
        alert("postal code cannot be empty");
    }else if(!checkPostal(postalcodeValue)){
        alert("Invalid postal code");
    } else{
        checkPostal(postalcodeValue);
    }

    if(phonenumberValue === ''){
        alert("phoneNumber cannot be empty");
    } else if(!checknumber(phonenumberValue)){
        alert("Invalid phone number");
    } else {
        checknumber(phonenumberValue);
    }

    if(notesfieldValue === ''){
        alert("Notesfield cannot be empty");
    }

    var generatedLink = document.createElement("a");
        generatedLink.text = "View the contact details";
        generatedLink.href = "./display.html";
        document.getElementById("submitBtn").appendChild(generatedLink);
}
/*
var generatedLink = document.createElement("a");
    generatedLink.text = "View the contact details";
    generatedLink.href = "./display.html";
    document.getElementById("submitBtn").appendChild(myLink);*/