$('.popup-youtube, .popup-text').magnificPopup({
                    disableOn: 320,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: true
});

function clearName() {
  if (document.getElementById("nameField").value == "Name (First & Last)") {
    document.getElementById("nameField").value = "";
  }
}
function resetName() {
  if (document.getElementById("nameField").value == "") {
    document.getElementById("nameField").value = "Name (First & Last)";
  }
}
function clearPhone() {
  if (document.getElementById("phoneField").value == "Phone #") {
    document.getElementById("phoneField").value = "";
  }
}
function resetPhone() {
  if (document.getElementById("phoneField").value == "") {
    document.getElementById("phoneField").value = "Phone #";
  }
}
function clearEmail() {
  if (document.getElementById("emailField").value == "Email") {
    document.getElementById("emailField").value = "";
  }
}
function resetEmail() {
  if (document.getElementById("emailField").value == "") {
    document.getElementById("emailField").value = "Email";
  }
}