var admintoken = "Bearer nk8vh416e2v2sd1t6rhxmyzntgc8vx1t";

function otpoverlaydropdown(){
  var otpform =  document.getElementById('otpform');
  var signupdiv =  document.getElementById('signupdiv');
  otpform.style.display = "block";
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
  var url  = "https://auth.washtub66.hasura-app.io/mobile/confirm";
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
  var data = {};
  data["mobile"] = mobile;
  data["otp"] = otp;
  jsondata = JSON.stringify(data);
  xhr.send(jsondata);
}

function otpresend() {
  xhr = new XMLHttpRequest();
  var url  = "https://auth.washtub66.hasura-app.io/mobile/resend-otp";
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
  var data = {};
  data["mobile"] = remobile;
  jsondata = JSON.stringify(data);
  console.log("DATA : "+data);
  console.log("JSON DATA : "+jsondata);
  xhr.send(jsondata);
}
function updatemyusers(){
  xhr = new XMLHttpRequest();
  var url = "https://data.washtub66.hasura-app.io/api/1/table/user/insert";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.setRequestHeader("Authentication",admintoken);
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json));
      alert(JSON.stringify(json.message));
    }
    else if(xhr.readyState ==4){
      var json = JSON.parse(xhr.responseText);
      console.log("Consoled Error : "+JSON.stringify(json));
    }
  }
  var objects = {};
  objects["id"]= 101;
  objects["username"] = "username";
  objects["email"] = "email@gmail.com";
  objects["password"] = "newpassword";
  objects["dob"] = "1994-10-23";
  var data = {};
  data["type"] = "insert";
  data["args"] = {};
  data["args"]["table"] = "user";
  data["args"].objects = [{"id":19,"username":"username","email":"email@gmail.com","password":"password","dob":"1994-10-23"}];
  var jsoninsert = JSON.stringify(objects);
  console.log(jsoninsert);
  xhr.send(jsoninsert);
}

function popalert() {
xhr = new XMLHttpRequest();
var url  = "https://auth.washtub66.hasura-app.io/signup";
xhr.open("POST",url,true);
xhr.setRequestHeader("Content-type","application/json");
xhr.setRequestHeader("Authentication",admintoken);
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status == 200){
    var json = JSON.parse(xhr.responseText);
    console.log(JSON.stringify(json));
    alert("Successfully Signed Up. Please Veriy your mobile number");
    //updatemyusers();
    otpoverlaydropdown();
  }
  else if(xhr.readyState == 4) {
    alert("Something went wrong please try again");
  }
}
var fname = document.getElementById("fname").value;
var lname = document.getElementById("lname").value;
var mobile = document.getElementById("mob").value;
var password = document.getElementById("pass").value;
var email = document.getElementById("email").value;
var uname = fname.concat(" ",lname);
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
