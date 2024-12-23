
let password_err_msg = document.querySelector("#pwd_err_msg");
// error message objects with ids


let password = document.querySelector("#password");
// objects for type inputs


password.addEventListener('focus', () => {
    password_err_msg.style.visibility = "hidden";
});





// when someone fills the password field and goes to the other field using tab or mouse-click then this event checks that the password is according to the rules or not
password.addEventListener("blur", () => {
    let passwordRegex = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8,20}$");

    if (!passwordRegex.test(password.value)) {

        if (password.value.length < 8) {
            showErr(password_err_msg, "Minimum 8 characters allowed");

        } else if (password.value.length > 15) {
            showErr(password_err_msg, "Maximum 15 characters allowed");

        } else {

            if (password.value.includes(" "))
                showErr(password_err_msg, "Space not allowed in password");

            else if (!new RegExp('[a-z]').test(password.value))
                showErr(password_err_msg, "One lowercase is must");

            else if (!new RegExp('[A-Z]').test(password.value))
                showErr(password_err_msg, "One uppercase is must");

            else if (!new RegExp('[0-9]').test(password.value))
                showErr(password_err_msg, "One digit is must");

            else
                showErr(password_err_msg, "One special character is must");
        }
    }
});

