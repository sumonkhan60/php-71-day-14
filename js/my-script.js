function checkFirstName() {
    var firstNameLength = $('#firstName').val().length;
    if(firstNameLength >= 6 && firstNameLength <= 15) {
        $('#firstNameError').text(' ');
    }else {
        $('#firstNameError').text('First name should be between 6 to 15 characters');
    }
}

$('#firstName').blur(function () {
    checkFirstName();
});

$('#firstName').keyup(function () {
    checkFirstName();
});

function checkLastName() {
    var lastName = $('#lastName').val().length;
    if(lastName>=4 && lastName<=15){
        $('#lastNameError').text(' ');
    }else {
        $('#lastNameError').text('Last name should be between 4 to 15 characters');
    }
}

$('#lastName').blur(function () {
   checkLastName();
});

$('#lastName').keyup(function () {
   checkLastName();
});

function checkEmailAddress() {
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,3}$/i);
    if(pattern.test($('#emailAddress').val())){
        $('#emailAddressError').text(' ');
    }else {
        $('#emailAddressError').text('Email address is invalid');
    }
}

$('#emailAddress').blur(function () {
    checkEmailAddress();
});

$('#emailAddress').keyup(function () {
    checkEmailAddress();
});

function checkPassword() {
    var passwordLength = $('#password').val().length;
    if(passwordLength>=6 && passwordLength<=15){
        $('#passwordError').text(' ');
    }else {
        $('#passwordError').text('password should be at least 6 characters');
    }
}

$('#password').blur(function () {
    checkPassword();
});

$('#password').keyup(function () {
    checkPassword();
});

function checkConfirmPassword() {
    var passwordValue = $('#password').val();
    var confirmPasswordValue = $('#confirmPassword').val();
    if(passwordValue == confirmPasswordValue) {
        $('#confirmPasswordError').text(' ');
    }else {
        $('#confirmPasswordError').text("Password did not matched");
    }
}

$('#confirmPassword').blur(function () {
    checkConfirmPassword();
});

$('#confirmPassword').keyup(function () {
    checkConfirmPassword();
});

function checkDistrictName() {
    var districtNameValue = $('#districtName').val();
}

$('#registrationForm').submit(function () {
   return true;
});