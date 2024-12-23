let uname_err_msg = document.querySelector("#unm_err_msg");
        // project root path 

let userName = document.querySelector("#username");

userName.addEventListener('focus', () => {
    uname_err_msg.style.visibility = "hidden";
});


// when someone fills the username field and goes to the other field using tab or mouse-click then this event checks that the username is according to the rules or not
userName.addEventListener('blur', () => {
    let userNameRegex = new RegExp("^[0-9a-zA-Z]{8,15}$");
    let val = userName.value;
    if (val.length < 8) {
        showErr(uname_err_msg, "minimum 8 characters are allowed.");
    } else if (val.length > 15) {
        showErr(uname_err_msg, "maximum 15 chharacters are allowed.");
    } else if (!userNameRegex.test(val)) {
        showErr(uname_err_msg, "Only 0-9, A-Z, a-z allowed.");
    }
});



