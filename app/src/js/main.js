var admintoken = "Bearer nk8vh416e2v2sd1t6rhxmyzntgc8vx1t";
var hasura_id;
var auth_token;
function checklogout(pk)
{
  xhr = new XMLHttpRequest();
  var url  = "https://auth.washtub66.hasura-app.io/user/logout";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.withCredentials = "true";
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json.hasura_id));
      hasura_id = json.hasura_id;
      auth_token = "Bearer "+json.auth_token;
      alert("Successfully Logged Out.");
      loginbutton.innerHTML = "Log In";
      loginbutton.style.disabled = "false";
      loginbutton.style.cursor = "pointer";
      document.getElementById('loginform').reset();
    }
    else if(xhr.readyState == 4) {
      alert("Something went wrong during Logout please try again");
      loginbutton.innerHTML = "Log In";
      loginbutton.style.disabled = "false";
      loginbutton.style.cursor = "pointer";
    }
  }
  var data = {};
  data["username"] = pk;
  console.log(data);
  var jsondata = JSON.stringify(data);
  console.log(jsondata);
  xhr.send(jsondata);
}
function updatemyusersprofile(pk){
  xhr = new XMLHttpRequest();
  var url = "https://data.washtub66.hasura-app.io/v1/query";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.withCredentials = true;
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json));
      alert("Your Sunshine Profile is Ready. Please wait till we Log you out then go ahead and Log In");
      checklogout(pk);
    }
    else if(xhr.readyState ==4){
      var json = JSON.parse(xhr.responseText);
      console.log("Consoled Error : "+JSON.stringify(json));
      alert("Something went wrong during updating user profile");
    }
  }
  var objects = {};
  var data = {};
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var dob = year+"-"+month+"-"+day;
  var uname = fname.concat(" ",lname);
  data["type"] = "insert";
  data["args"] = {};
  data["args"]["table"] = "profile";
  data["args"].objects = [{"user_id":hasura_id,"fname":fname,"lname":lname,"friendshine":0,"earthshine":0,"healthshine":0,"charityshine":0,"familyshine":0}];
  var jsoninsert = JSON.stringify(data);
  console.log(jsoninsert);
  xhr.send(jsoninsert);
  document.getElementById('signup').reset();
}
function updatemyusers(pk,pasw){
  setTimeout(function(){},5000);
  xhr = new XMLHttpRequest();
  var url = "https://data.washtub66.hasura-app.io/v1/query";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.withCredentials = true;
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json));
      alert("Your Sunshine Account is Ready, Setting up initial Profile");
      updatemyusersprofile(pk);
    }
    else if(xhr.readyState ==4){
      var json = JSON.parse(xhr.responseText);
      console.log("Consoled Error : "+JSON.stringify(json));
      alert("Something went wrong during updating user account");
    }
  }
  var objects = {};
  var data = {};
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var mobile = document.getElementById("mob").value;
  var password = document.getElementById("pass").value;
  var email = document.getElementById("email").value;
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var dob = year+"-"+month+"-"+day;
  var uname = fname.concat(" ",lname);
  data["type"] = "insert";
  data["args"] = {};
  data["args"]["table"] = "user";
  data["args"].objects = [{"id":hasura_id,"username":uname,"email":email,"password":password,"dob":dob}];
  var jsoninsert = JSON.stringify(data);
  console.log(jsoninsert);
  xhr.send(jsoninsert);
}
function checklogin(pk,pasw)
{
  xhr = new XMLHttpRequest();
  var loginbutton = document.getElementById('loginbutton');
  loginbutton.innerHTML = "Logging In";
  loginbutton.style.disabled = "true";
  loginbutton.style.curson = "not-allowed";
  var url  = "https://auth.washtub66.hasura-app.io/login";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.withCredentials = "true";
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json.hasura_id));      loginbutton.innerHTML = "Log In";
            loginbutton.style.disabled = "false";
            loginbutton.style.cursor = "pointer";
      hasura_id = json.hasura_id;
      auth_token = "Bearer "+json.auth_token;
      alert("Successfully Logged In. Your user ID is "+hasura_id+" and your Authentication token is "+auth_token+" Sunshine is under construction. Your account is safe. We will be right back");
      updatemyusers();
    }
    else if(xhr.readyState == 4) {
      alert("Something went wrong during Login please try again");
    }
  }
  var data = {};
  data["username"] = pk;
  data["password"] = pasw;
  console.log(data);
  var jsondata = JSON.stringify(data);
  console.log(jsondata);
  xhr.send(jsondata);
}

function userlogin()
{
  xhr = new XMLHttpRequest();
  var loginbutton = document.getElementById('loginbutton');
  loginbutton.innerHTML = "Logging In";
  loginbutton.style.disabled = "true";
  loginbutton.style.curson = "not-allowed";
  var url  = "https://auth.washtub66.hasura-app.io/login";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.withCredentials = "true";
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json.hasura_id));
      loginbutton.innerHTML = "Log In";
      loginbutton.style.disabled = "false";
      loginbutton.style.cursor = "pointer";
      hasura_id = json.hasura_id;
      auth_token = "Bearer "+json.auth_token;
      alert("Successfully Logged In. Your user ID is "+hasura_id+" and your Authentication token is "+auth_token+" Sunshine is under construction. Your account is safe. We will be right back");
      checklogout(document.getElementById('primarykey').value);
    }
    else if(xhr.readyState == 4) {
      alert("Something went wrong during Login please try again");
    }
  }
  var data = {};
  data["username"] = document.getElementById('primarykey').value;
  data["password"] = document.getElementById('password').value;
  console.log(data);
  var jsondata = JSON.stringify(data);
  console.log(jsondata);
  xhr.send(jsondata);
}

function otpoverlaydropdown(){
  var otpform =  document.getElementById('otpform');
  var signupdiv =  document.getElementById('signupdiv');
  var otpbutton = document.getElementById('otpbutton');
  var otpcancelbutton = document.getElementById('otpcancel');
  var resendotpbutton = document.getElementById('resendotp');
  otpform.style.display = "block";
  var otpbutton = document.getElementById('otpbutton');
  otpbutton.style.cursor = "pointer";
  resendotpbutton.style.cursor = "pointer";
  otpcancelbutton.style.cursor = "pointer";
  otpbutton.innerHTML = "Verify";
  resendotpbutton.innerHTML = "Resent OTP";
  otpbutton.style.disabled = "false";
  resendotpbutton.style.disabled = "false";
  otpcancelbutton.style.disabled = "false";
  otpform.style.opacity = "1";
  otpform.style.zIndex = "2";
  signupdiv.style.opacity = "0.5";
}
function otpoverlayslideup(){
  var otpform =  document.getElementById('otpform');
  var signupdiv =  document.getElementById('signupdiv');
  var otpbutton = document.getElementById('otpbutton');
  var otpcancelbutton = document.getElementById('otpcancel');
  var resendotpbutton = document.getElementById('resendotp');
  otpbutton.style.cursor = "pointer";
  resendotpbutton.style.cursor = "pointer";
  otpcancelbutton.style.cursor = "pointer";
  otpbutton.innerHTML = "Verify";
  resendotpbutton.innerHTML = "Resend OTP";
  otpbutton.style.disabled = "false";
  resendotpbutton.style.disabled = "false";
  otpcancelbutton.style.disabled = "false";
  otpform.style.opacity = "0";
  otpform.style.zIndex = "-2";
  signupdiv.style.opacity = "1";
}
function otpverify(){
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var mobile = document.getElementById("mob").value;
  var password = document.getElementById("pass").value;
  var email = document.getElementById("email").value;
  var uname = fname.concat(" ",lname);
  console.log(uname);
  console.log(password);
  var otpbutton = document.getElementById('otpbutton');
  var otpcancelbutton = document.getElementById('otpcancel');
  var resendotpbutton = document.getElementById('resendotp');
  otpbutton.style.cursor = "not-allowed";
  resendotpbutton.style.cursor = "not-allowed";
  otpcancelbutton.style.cursor = "not-allowed";
  otpbutton.innerHTML = "Verifying....";
  otpbutton.style.disabled = "true";
  resendotpbutton.style.disabled = "true";
  otpcancelbutton.style.disabled = "true";
  xhr = new XMLHttpRequest();
  var url  = "https://auth.washtub66.hasura-app.io/mobile/confirm";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json.message));
      otpbutton.innerHTML = "Verified Successfully";
      setTimeout(function(){},3000);
      alert(JSON.stringify(json.message));
      setTimeout(function(){},3000);
      otpoverlayslideup();
      checklogin(uname,password);
    }
  }
  var otp = document.getElementById('otp').value;
  var mobile = document.getElementById('mobile').value;
  var data = {};
  data["mobile"] = mobile;
  data["otp"] = otp;
  jsondata = JSON.stringify(data);
  xhr.send(jsondata);
}
function otpresend() {
  var otpbutton = document.getElementById('otpbutton');
  var otpcancelbutton = document.getElementById('otpcancel');
  var resendotpbutton = document.getElementById('resendotp');
  var mobile = document.getElementById('mobile').value;
  otpbutton.style.cursor = "not-allowed";
  resendotpbutton.style.cursor = "not-allowed";
  otpcancelbutton.style.cursor = "not-allowed";
  resendotpbutton.innerHTML = "Sending OTP to "+mobile+" ....";
  otpbutton.style.disabled = "true";
  resendotpbutton.style.disabled = "true";
  otpcancelbutton.style.disabled = "true";
  xhr = new XMLHttpRequest();
  var url  = "https://auth.washtub66.hasura-app.io/mobile/resend-otp";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.setRequestHeader("Authentication",admintoken);
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json));
      otpbutton.style.cursor = "pointer";
      resendotpbutton.style.cursor = "pointer";
      otpcancelbutton.style.cursor = "pointer";
      resendotpbutton.innerHTML = "OTP sent to "+mobile+" !";
      setTimeout(function(){},3000);
      resendotpbutton.innerHTML = "Resend OTP";
      setTimeout(function(){},3000);
      otpbutton.style.disabled = "false";
      resendotpbutton.style.disabled = "false";
      otpcancelbutton.style.disabled = "false";
      alert(JSON.stringify(json.message));
    }
  }
  var remobile = document.getElementById('mobile').value;
  var data = {};
  data["mobile"] = remobile;
  jsondata = JSON.stringify(data);
  console.log("DATA : "+data);
  console.log("JSON DATA : "+jsondata);
  xhr.send(jsondata);
}
function popalert() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var mobile = document.getElementById("mob").value;
  var password = document.getElementById("pass").value;
  var email = document.getElementById("email").value;
  var uname = fname.concat(" ",lname);
var signupbuttn = document.getElementById("signupbuttn");
signupbuttn.innerHTML ="Signing Up...";
signupbuttn.style.disabled = "true";
signupbuttn.style.cursor = "not-allowed";
xhr = new XMLHttpRequest();
var url  = "https://auth.washtub66.hasura-app.io/signup";
xhr.open("POST",url,true);
xhr.setRequestHeader("Content-type","application/json");
xhr.setRequestHeader("Authentication",admintoken);
xhr.withCredentials = true;
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status == 200){
    var json = JSON.parse(xhr.responseText);
    console.log(JSON.stringify(json.hasura_id));
    hasura_id = json.hasura_id;
    alert("Successfully Signed Up. Please Veriy your mobile number while we set up your Sunshine Account");
    console.log(uname);
    console.log(password);
    signupbuttn.innerHTML = "Signed Up!!";
    setTimeout(function(){},3000);
    signupbuttn.innerHTML = "Sign Up";
    signupbuttn.style.disabled = "false";
    signupbuttn.style.cursor = "pointer";
    otpoverlaydropdown();
  }
  else if(xhr.readyState == 4) {
    var json = JSON.parse(xhr.responseText);
    console.log(JSON.stringify(json.code))
    alert(json.code);
    signupbuttn.innerHTML = "Sign Up";
    signupbuttn.style.disabled = "false";
    signupbuttn.style.cursor = "pointer";
  }
}
console.log(uname);
var data = {};
data["username"] = uname;
data["email"] = email;
data["mobile"] = mobile;
data["password"] = password;
console.log(data);
var jsondata = JSON.stringify(data);
console.log(jsondata);
xhr.send(jsondata);
/*
  Bring up Overlay on reg Pane
  overlay should contain OTP text box
*/
}
