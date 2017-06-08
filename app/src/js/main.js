var admintoken = "Bearer l222c4adspko6dzglq39v71nrz618w0m";

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
  url = "https://data.washtubb66.hasura-app.io/v1/query";
  var objects = {};
  /*
  {
"type":"insert",
"args":
{
  "table":"user",
  "objects":[{
      "id": 100,
      "username": "rkmenon235",
      "email": "rkmenon235@gmail.com",
      "password": "password",
      "dob": "1994-10-23"
    }
]

}
}
*/
  var data = {};
  var args = JSON.stringify("table":"user"+objects);
  data["type"] = "insert";
  data["args"] = '{"table":"user"}';
  data["objects"] = {};
  data["objects"]["id"] = "101";
  data["objects"]["username"] = "newuser";
  data["objects"]["email"] = "newmail@gmail.com";
  data["objects"]["password"] = "newpassword";
  data["objects"]["dob"] = "1994-10-23";
  var jsoninsert = JSON.stringify(data);
  console.log(jsoninsert);
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
    updatemyusers();
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
