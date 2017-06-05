function otpoverlaydropdown(){
  var otpform =  document.getElementById('otpform');
  var signupdiv = document.getElementById('signupdiv');
  signupdiv.style.zIndex = "-999";
  singupdiv.style.opacity - "0";
  singupdiv.style.height = "0";
  otpform.style.height="100%";
  otpform.style.opacity="100%";
  otpform.style.zIndex = "1";
}

function popalert() {

xhr = new XMLHttpRequest();
var url  = "http://auth.vcap.me/signup";
xhr.open("POST",url,true);
xhr.setRequestHeader("Content-type","application/json");
xhr.setRequestHeader("Authentication","Bearer xayto0lj1t0d7zz2ykfqimsv08bo6hze");
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status == 200){
    var json = JSON.parse(xhr.responseText);
    console.log(JSON.stringify(json));
  }
}
var data = JSON.stringify({"username":"rkmjstester","email":"hey@mail.com","password":"justanotherpassword","mobile":"7025568897"});
xhr.send(data);
otpoverlaydropdown();
/*
  Bring up Overlay on reg Pane
  overlay should contain OTP text box
*/
}
