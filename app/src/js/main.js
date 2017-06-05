var admintoken = "Bearer xayto0lj1t0d7zz2ykfqimsv08bo6hze";

function otpoverlaydropdown(){
  var otpform =  document.getElementById('otpform');
  var signupdiv =  document.getElementById('signupdiv');
  otpform.style.opacity = "1";
  otpform.style.zIndex = "2";
  signupdiv.style.opacity = "0.5";

}
function otpoverlayslideup(){
  var otpform =  document.getElementById('otpform');
  var signupdiv =  document.getElementById('signupdiv');
  otpform.style.opacity = "0";
  otpform.style.zIndex = "-2";
  signupdiv.style.opacity = "1";
}

function otpverify(){
  xhr = new XMLHttpRequest();
  var url  = "http://auth.vcap.me/mobile/confirm";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.setRequestHeader("Authentication",admintoken);
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json.message));
      alert(JSON.stringify(json.message));
    }
  }
  var otp = document.getElementById('otp').value;
  var mobile = document.getElementById('mobile').value;
  var data = JSON.stringify({"mobile":mobile,"otp":otp});
  xhr.send(data);
}
function resendotp(){
  xhr = new XMLHttpRequest();
  var url  = "http://auth.vcap.me/mobile/resend-otp";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.setRequestHeader("Authentication",admintoken);
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json));
      alert(JSON.stringify(json.message));
    }
  }
  var remobile = document.getElementById('mobile').value;
  var data = JSON.stringify({"mobile":remobile});
  xhr.send(data);
}
function popalert() {
xhr = new XMLHttpRequest();
var url  = "http://auth.vcap.me/signup";
xhr.open("POST",url,true);
xhr.setRequestHeader("Content-type","application/json");
xhr.setRequestHeader("Authentication",admintoken);
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status == 200){
    var json = JSON.parse(xhr.responseText);
    console.log(JSON.stringify(json));
  }
}
var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var mobile = document.getElementById("mobile").value;
var password = document.getElementById("password").value;
var email = document.getElementById("email").value;
var uname = fname.concat(lname);
var data = JSON.stringify({"username":uname,"email":email,"password":password,"mobile":mobile});
xhr.send(data);
otpoverlaydropdown();
/*
  Bring up Overlay on reg Pane
  overlay should contain OTP text box
*/
}
