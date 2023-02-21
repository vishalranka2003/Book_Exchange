var user;

function openpopup() {
  console.log("fc");
  document.getElementById("SignIn").style.visibility = "visible";
}
function closepopup() {
  document.getElementById("SignIn").style.visibility = "hidden";
}

function opensignup() {
  document.getElementById("SignUp").style.visibility = "visible";
}

function opensignupfromlogin() {
  document.getElementById("signupform").reset();
  document.getElementById("SignIn").style.visibility = "hidden";
  document.getElementById("SignUp").style.visibility = "visible";
}

function openpopupfromsignup() {
  document.getElementById("loginform").reset();
  document.getElementById("SignUp").style.visibility = "hidden";
  document.getElementById("SignIn").style.visibility = "visible";
}

function closesignup() {
  document.getElementById("SignUp").style.visibility = "hidden";
}

function validatelogin() {
  user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var a = localStorage.getItem(`${user}`);

  if (a === "") {
    swal("Wrong Details", "Invalid Username or Password", "error");
    return false;
  } else {
    if (a === pass) {
      closepopup();
      edit_details();
      $(function () {
        $("#loginsuccess").load("loginsuccess.html");
      });
    } else {
      swal("Wrong Details", "Invalid Username or Password", "error");
    }
  }
}

function callsignup() {
  let usernmame = document.getElementById("usernamesignup").value;
  let password = document.getElementById("passwordsignup").value;
  localStorage.setItem(usernmame, password);
  openpopupfromsignup();
}

function edit_details() {
  document.getElementById("nav1").style.visibility = "hidden";
  document.getElementById("nav2").style.visibility = "visible";
  document.getElementById("name").innerHTML = `${user}`;
}

function signout() {
  swal({
    title: "Are you sure?",
    text: "You will be Logged Out !",
    type: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
  }).then(function () {
    swal("Signed Out!", "Youhave been signed out", "success");
    location.reload();
  });
}

function showpass() {
  var x = document.getElementById("passwordsignup");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function showpasslogin() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

const btn = document.querySelectorAll(".book1");
let e;

btn.forEach(function (x) {
  x.addEventListener("click", function (t) {
    e = t.currentTarget.id;
    ba = parseInt(e);
    localStorage.setItem(ba, ba);
    window.location.href = "descriptionpage.html";
    return false;
  });
});
