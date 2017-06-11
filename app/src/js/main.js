var admintoken = "Bearer nk8vh416e2v2sd1t6rhxmyzntgc8vx1t";
var hasura_id;
var auth_token;
var email;
var friendlistflag = 0;
function appfriendslogin(){
  alert("Friend's list function is under construction.");
  document.getElementById('friendslist').innerHTML = "Loading Friend's List";
  xhr = new XMLHttpRequest();
  var url  = "https://auth.washtub66.hasura-app.io/user/account/info";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.withCredentials = "true";
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json.hasura_id));
      hasura_id = json.hasura_id;
      auth_token = "Bearer "+json.auth_token;
      email = json.email;
      getfriendslist();
    }
    else if(xhr.readyState == 4) {
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json));
      alert(JSON.stringify(json));
      alert("Could'nt get your friend's list at the moment");
    }
  }
  xhr.send();
}
function getfriendslist(){
  if(friendlistflag == 0)
    {
    var data = {};
    data["type"] = "select";
    data["args"] = {};
    data["args"]["table"] = "friends";
    data["args"]["columns"] = ["user_id"];
    data["args"]["where"] = {};
    data["args"]["where"]["friend_id"] = hasura_id;
    var query = JSON.stringify(data);
    console.log(query);
    var xhr = new XMLHttpRequest();
    var url = "https://data.washtub66.hasura-app.io/v1/query";
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type","application/json");
    xhr.withCredentials = "true";
    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        document.getElementById('friendslist').innerHTML = "";
        var json = JSON.parse(xhr.responseText);
        console.log(json);
        console.log(JSON.stringify(json));
        var frienddata = {};
        frienddata["type"] = "select";
        frienddata["args"] = {};
        frienddata["args"]["table"] = "profile";
        frienddata["args"]["columns"] = ["fname"];
        for(fid of json)
        {
          frienddata["args"]["where"] = {};
          frienddata["args"]["where"]["user_id"] = fid.user_id;
          var friendquery = JSON.stringify(frienddata);
          var fxhr = new XMLHttpRequest();
          fxhr.open("POST",url,false)
          fxhr.setRequestHeader("Content-type","application/json");
          fxhr.withCredentials = "true";
          fxhr.onreadystatechange = function(){
            if(fxhr.readyState == 4 && fxhr.status == 200){
              var fjson = JSON.parse(fxhr.responseText);
              console.log(JSON.stringify(fjson[0].fname));
              var friendname = fjson[0].fname;
              document.getElementById('friendslist').innerHTML += '<li><figure  id = "friend"><img class = "friendimg img-rounded" alt = "Friend\'s Image" src = "css/friendsprite.jpg"><figcaption>'+friendname+'</figcaption></figure></li>';
            }
            else if(fxhr.readyState === 4){
              var fjson = JSON.parse(fxhr.responseText);
              console.log(JSON.stringify(fjson));
              alert("Could'nt get your friend's list at the moment");
            }
          }
          fxhr.send(friendquery);
          }
        }
        else if(xhr.readyState ==4) {
          alert(JSON.stringify(json));
        }
      }
    xhr.send(query);
    friendlistflag = 1;
  }
  else {
    friendlistflag = 0;
  }
}
function getpiclink(){
  console.log('piclink called');
  var piclink;
  var data = {};
  data["type"] = "select";
  data["args"] = {};
  data["args"]["table"] = "user";
  data["args"]["columns"] = ["email"];
  var query = JSON.stringify(data);
  console.log(query);
  xhr = new XMLHttpRequest();
  var url = "https://data.washtub66.hasura-app.io/v1/query";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.withCredentials = "true";
  xhr.onreadystatechange = function(){
    console.log('xhr readystatechange');
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json));
      var x = new XMLHttpRequest();
      x.onreadystatechange = function(){
        document.getElementById('profileimage').alt = "Loading Image please Wait...";
        console.log('x readystatechange');
        if(x.readyState == 4 && x.status == 200){
          var doc = x.responseText;
          piclink =(((doc.split("<gphoto:thumbnail>")[0]).split("{")[17]).split(":")[1]).concat(":",(((doc.split("<gphoto:thumbnail>")[0]).split("{")[17]).split(":")[2])).replace(/"/g,"").replace(/}/g,"");
          console.log(piclink);
          //document.getElementById('picbutton').display = "none";
          document.getElementById('profileimage').src = piclink;
          document.getElementById('profileimage').classList.remove('profileimage');
          document.getElementById('profileimage').classList.add('profileimageappeared');
          }
          else {
            if(x.readyState === 4){
              console.log(x.responseText);
              alert("Could'nt get your Google pic  ");
            }
          }
        }
          x.open('GET','https://picasaweb.google.com/data/entry/api/user/'.concat((json[0].email).split("@")[0],"?alt=json"),true);
          console.log(json[0].email);
          x.send();

      }
    else if(xhr.readyState ==4) {
      alert(JSON.stringify(json));
    }
    }
  xhr.send(query);
  console.log('hasura call sent' );
}
function updateusername(){
  var fname = document.getElementById('fname').value;
  var lname = document.getElementById('lname').value;
  var uname = fname.concat(" ",lname);
  document.getElementById('uname').value = uname;
}
function checkfeb(){
  if(Boolean(document.getElementById('day').value >29))
  {
    document.getElementById('month').options[2].disabled = true;
  }
  else {
    document.getElementById('month').options[2].disabled = false;
  }
}
function checkleap()
{
  if(Boolean((Boolean(document.getElementById('month').value == 02))&&(Boolean(Boolean(document.getElementById('day').value >28) && (Boolean(document.getElementById('day').value <30)))))){
      for(var i = 1;i<=64;i++)
    {
      if(Boolean((document.getElementsByClassName("yearclass")[i].value % 4)==0))
      {
        if(Boolean(document.getElementsByClassName("yearclass")[i].value % 100)==0)
        {
          if(Boolean(document.getElementsByClassName("yearclass")[i].value % 400)===0)
          {
              document.getElementsByClassName("yearclass")[i].disabled = false;
          }
          else {
            document.getElementsByClassName("yearclass")[i].disabled = true;
          }
        }
        else {
          document.getElementsByClassName("yearclass")[i].disabled = false;
        }
      }
      else {
        document.getElementsByClassName("yearclass")[i].disabled = true;
      }
    }
  }
  else {
    for(var j = 1; j<=64;j++)
    {
      document.getElementsByClassName("yearclass")[j].disabled = false;
    }
  }
}
function comparepass(){
  var pass = document.getElementById('pass').value;
  var confpass = document.getElementById('confpass').value;
  console.log(pass);
  if(pass!=confpass){
    document.getElementById('passlabel').classList.remove("passshow");
    document.getElementById('passlabel').classList.add("passlabel");
    document.getElementById('passlabel').innerHTML = "Password not Matching"
    document.getElementById('passlabel').style.color = "red";
    document.getElementById('passlabel').classList.remove("passlabel");
    document.getElementById('passlabel').classList.add("passshow");
    return 0;
  }
  else if((pass!="")&&(pass == confpass)){
    document.getElementById('passlabel').classList.remove("passshow");
    document.getElementById('passlabel').classList.add("passlabel");
    document.getElementById('passlabel').innerHTML = "Password Matched";
    document.getElementById('passlabel').style.color = "green";
    document.getElementById('passlabel').classList.remove("passlabel");
    document.getElementById('passlabel').classList.add("passshow");
    return 1;
  }
}
function checklogout(pk)
{
  document.getElementById('loginbutton').innerHTML = "Loggin Out...";
  document.getElementById('loginbutton').style.disabled = true;
  document.getElementById('loginbutton').style.cursor = "not-allowed";
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
      loginbutton.style.disabled = false;
      loginbutton.style.cursor = "pointer";
      document.getElementById('loginform').reset();
    }
    else if(xhr.readyState == 4) {
      alert("Something went wrong during Logout please try again");
      loginbutton.innerHTML = "Log In";
      loginbutton.style.disabled = false;
      loginbutton.style.cursor = "pointer";
    }
  }
  var data = {};
  data["mobile"] = pk;
  console.log(data);
  var jsondata = JSON.stringify(data);
  console.log(jsondata);
  xhr.send(jsondata);
}

function userlogout(pk)
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
      alert("Successfully Logged Out. Bubye, Come back soon");
      window.location = "https://sunshine.washtub66.hasura-app.io/";
    }
    else if(xhr.readyState == 4) {
      alert("Something went wrong during Logout please try again");
    }
  }
  var data = {};
  data["mobile"] = pk;
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
function changebanner()
{
  document.getElementById('siteh1').innerHTML = "Getting your Name friend !!...";
  var data = {};
  data["type"] = "select";
  data["args"] = {};
  data["args"]["table"] = "user";
  data["args"]["columns"] = ["id","username","email","password","dob"];
  var query = JSON.stringify(data);
  console.log(query);
  xhr = new XMLHttpRequest();
  var url = "https://data.washtub66.hasura-app.io/v1/query";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.withCredentials = "true";
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json));
      setTimeout(function(){
        document.getElementById('siteh1').innerHTML = "Sunshine";
      },3000);
      document.getElementById('siteh1').innerHTML =  json[0].username;
    }
    else if(xhr.readyState ==4) {
      alert(JSON.stringify(json));
    }
  }
  xhr.send(query);

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
  var dob = year.concat("-",month,"-",day);
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
  loginbutton.style.cursor = "not-allowed";
  var url  = "https://auth.washtub66.hasura-app.io/login";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.withCredentials = "true";
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json.hasura_id));
            loginbutton.innerHTML = "Logged In";
      hasura_id = json.hasura_id;
      auth_token = "Bearer "+json.auth_token;
      alert("Successfully Logged In. Your user ID is "+hasura_id+" and your Authentication token is "+auth_token+" Sunshine is under construction. Your account is safe. We will be right back");
      updatemyusers(pk,pasw);
    }
    else if(xhr.readyState == 4) {
      alert("Something went wrong during Login please try again");
    }
  }
  var data = {};
  data["mobile"] = pk;
  data["password"] = pasw;
  console.log(data);
  var jsondata = JSON.stringify(data);
  console.log(jsondata);
  xhr.send(jsondata);
}

function phplogin(pk,pasw)
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
      loginbutton.innerHTML = "Logged In";
      loginbutton.style.disabled = true;
      loginbutton.style.cursor = "not-allowed";
      hasura_id = json.hasura_id;
      auth_token = "Bearer "+json.auth_token;
      alert("PHP Successfully Logged In. Your user ID is "+hasura_id+" and your Authentication token is "+auth_token+" Sunshine is under construction. Your account is safe. We will be right back");
    }
    else if(xhr.readyState == 4) {
      loginbutton.innerHTML = "Log In";
      loginbutton.style.disabled = "false";
      loginbutton.style.curson = "pointer";
      alert("PHP Something went wrong during Login please try again");
    }
  }
  var data = {};
  data["mobile"] = pk;
  data["password"] = pasw;
  console.log(data);
  var jsondata = JSON.stringify(data);
  console.log(jsondata);
  xhr.send(jsondata);
}
function gohome()
{
  window.location = "https://sunshine.washtub66.hasura-app.io/";
}
function getuser()
{
  var data = {};
  data["type"] = "select";
  data["args"] = {};
  data["args"]["table"] = "user";
  data["args"]["columns"] = ["id","username","email","password","dob"];
  var query = JSON.stringify(data);
  console.log(query);
  xhr = new XMLHttpRequest();
  var url = "https://data.washtub66.hasura-app.io/v1/query";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.withCredentials = "true";
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json));
      alert("Successfully Logged In. Welcome "+JSON.stringify(json[0].username)+" ! Sunshine is under construction. Let's just show you the hallway");
      document.getElementById('loginform').submit();
    }
    else if(xhr.readyState ==4) {
      alert(JSON.stringify(json));
    }
  }
  xhr.send(query);
}

  function userlogin()
{
  xhr = new XMLHttpRequest();
  var loginbutton = document.getElementById('loginbutton');
  loginbutton.innerHTML = "Logging In";
  loginbutton.style.disabled = "true";
  loginbutton.style.cursor = "not-allowed";
  var url  = "https://auth.washtub66.hasura-app.io/login";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.withCredentials = "true";
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json.hasura_id));
      loginbutton.innerHTML = "Logged In";
      loginbutton.style.disabled = true;
      loginbutton.style.cursor = "not-allowed";
      hasura_id = json.hasura_id;
      auth_token = "Bearer "+json.auth_token;
      email = json.email;
      getuser();
    }
    else if(xhr.readyState == 4) {
      loginbutton.innerHTML = "Log In";
      loginbutton.style.disabled = "false";
      loginbutton.style.cursor= "pointer";
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json));
      alert(JSON.stringify(json));
    }
  }
  var data = {};
  data["mobile"] = document.getElementById('primarykey').value;
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
  otpbutton.style.disabled = false;
  resendotpbutton.style.disabled = false;
  otpcancelbutton.style.disabled = false;
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
  otpbutton.style.disabled = false;
  resendotpbutton.style.disabled = false;
  otpcancelbutton.style.disabled = false;
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
  otpbutton.style.disabled = true;
  resendotpbutton.style.cursor = "not-allowed";
  resendotpbutton.style.disabled = true;
  otpcancelbutton.style.cursor = "not-allowed";
  otpcancelbutton.style.disabled = true;
  otpbutton.innerHTML = "Verifying....";
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
      checklogin(mobile,password);
    }
    else if(xhr.readyState == 4){
      otpbutton.style.cursor = "pointer";
      otpbutton.style.disabled = false;
      resendotpbutton.style.cursor = "pointer";
      resendotpbutton.style.disabled = false;
      otpcancelbutton.style.cursor = "pointer";
      otpcancelbutton.style.disabled = false;
      otpbutton.innerHTML = "Verify";
      var json = JSON.parse(xhr.responseText);
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
      otpbutton.style.disabled = false;
      resendotpbutton.style.disabled = false;
      otpcancelbutton.style.disabled = false;
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
  if(Boolean(comparepass))
  {
    console.log(Boolean(comparepass));
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var mobile = document.getElementById("mob").value;
    var password = document.getElementById("pass").value;
    var email = document.getElementById("email").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var dob = year.concat("-",month,"-",day);
    console.log(dob);
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
      signupbuttn.style.disabled = false;
      signupbuttn.style.cursor = "pointer";
      otpoverlaydropdown();
    }
    else if(xhr.readyState == 4) {
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json.code));
      alert(json.code);
      signupbuttn.innerHTML = "Sign Up";
      signupbuttn.style.disabled = false;
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
else {
  alert("passwords don't match");
}
}
