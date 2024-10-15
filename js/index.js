function checkSubmitButton() {
    const check_input = document.querySelector("#termsResp");

    if (check_input.checked) {
        activateButton();
    } else {
        disableButton();
    };

};

function activateButton() {
    const bt_submit = document.querySelector("#submit-button");

    bt_submit.style.border = "2px solid #a202f0";

    bt_submit.style.backgroundColor = "#a202f0";

    bt_submit.style.color = "white";
};

function disableButton() {
    const bt_submit = document.querySelector("#submit-button");

    bt_submit.style.border = "2px solid #a202f0";

    bt_submit.style.backgroundColor = "transparent";

    bt_submit.style.color = "#a202f0";
};

const check_input = document.querySelector("#termsResp");
check_input.addEventListener("click", checkSubmitButton);
