var admintoken = "Bearer nk8vh416e2v2sd1t6rhxmyzntgc8vx1t";
var hasura_id;
var auth_token;
var email;
var droppeddown = 0;
var friendlistflag = 0;
var friendsuggestflag = 0;
var suggesiondrop = 0;

function SHA256(s){
 var chrsz  = 8;
 var hexcase = 0;
 function safe_add (x, y) {
 var lsw = (x & 0xFFFF) + (y & 0xFFFF);
 var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
 return (msw << 16) | (lsw & 0xFFFF);
 }
 function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
 function R (X, n) { return ( X >>> n ); }
 function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
 function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
 function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
 function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
 function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
 function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }
 function core_sha256 (m, l) {
 var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
 var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
 var W = new Array(64);
 var a, b, c, d, e, f, g, h, i, j;
 var T1, T2;
 m[l >> 5] |= 0x80 << (24 - l % 32);
 m[((l + 64 >> 9) << 4) + 15] = l;
 for ( var i = 0; i<m.length; i+=16 ) {
 a = HASH[0];
 b = HASH[1];
 c = HASH[2];
 d = HASH[3];
 e = HASH[4];
 f = HASH[5];
 g = HASH[6];
 h = HASH[7];
 for ( var j = 0; j<64; j++) {
 if (j < 16) W[j] = m[j + i];
 else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
 T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
 T2 = safe_add(Sigma0256(a), Maj(a, b, c));
 h = g;
 g = f;
 f = e;
 e = safe_add(d, T1);
 d = c;
 c = b;
 b = a;
 a = safe_add(T1, T2);
 }
 HASH[0] = safe_add(a, HASH[0]);
 HASH[1] = safe_add(b, HASH[1]);
 HASH[2] = safe_add(c, HASH[2]);
 HASH[3] = safe_add(d, HASH[3]);
 HASH[4] = safe_add(e, HASH[4]);
 HASH[5] = safe_add(f, HASH[5]);
 HASH[6] = safe_add(g, HASH[6]);
 HASH[7] = safe_add(h, HASH[7]);
 }
 return HASH;
 }
 function str2binb (str) {
 var bin = Array();
 var mask = (1 << chrsz) - 1;
 for(var i = 0; i < str.length * chrsz; i += chrsz) {
 bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);
 }
 return bin;
 }
 function Utf8Encode(string) {
 string = string.replace(/\r\n/g,"\n");
 var utftext = "";
 for (var n = 0; n < string.length; n++) {
 var c = string.charCodeAt(n);
 if (c < 128) {
 utftext += String.fromCharCode(c);
 }
 else if((c > 127) && (c < 2048)) {
 utftext += String.fromCharCode((c >> 6) | 192);
 utftext += String.fromCharCode((c & 63) | 128);
 }
 else {
 utftext += String.fromCharCode((c >> 12) | 224);
 utftext += String.fromCharCode(((c >> 6) & 63) | 128);
 utftext += String.fromCharCode((c & 63) | 128);
 }
 }
 return utftext;
 }
 function binb2hex (binarray) {
 var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
 var str = "";
 for(var i = 0; i < binarray.length * 4; i++) {
 str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
 hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8 )) & 0xF);
 }
 return str;
 }
 s = Utf8Encode(s);
 return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
}



function appfriendslogin(){
  if(droppeddown == 0 && friendlistflag == 0)
    {
      alert("Friend's list function is still experimental. Adding Friends feauture coming soon...");
      document.getElementById('friendslistbutton').innerHTML = "Loading Friend's List <img width = '30px' height = '30px' src = 'css/loader.gif'>";
      xhr = new XMLHttpRequest();
      var url  = "https://auth.unwound15.hasura-app.io/user/account/info";
      xhr.open("POST",url,true);
      xhr.setRequestHeader("Content-type","application/json");
      xhr.withCredentials = "true";
      document.getElementById('friendslistbutton').disabled = true;
      document.getElementById('friendssuggestbutton').disabled = true;
      document.getElementById('friendssuggestbutton').style.cursor = "not-allowed";
      document.getElementById('friendslistbutton').style.cursor = "not-allowed";
      document.getElementById('logoutbutton').disabled = true;
      document.getElementById('logoutbutton').style.cursor = "not-allowed";
      document.getElementById('changebanner').disabled = true;
      document.getElementById('changebanner').style.cursor = "not-allowed";
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
          document.getElementById('friendslistbutton').disabled = true;
          alert("Could'nt get your friend's list at the moment");
          friendlistflag = 0;
        }
      }
      xhr.send();
    }
    else if (droppeddown == 1 && friendlistflag == 1) {
      droppeddown = 0;
    }
    else if(droppeddown == 1 && friendlistflag == 0){
      droppeddown =0;
      friendlistflag = 0;
    }
    else if(droppeddown == 0 && friendlistflag == 1){
      droppeddown = 1;
      friendlistflag = 1;
    }

}
function addlogin(id,name){
  document.getElementById('friendssuggestbutton').innerHTML = "Adding Friend <img width = '30px' height = '30px' src = 'css/loader.gif'>";
  var buttons = document.getElementsByClassName("btn");
  for(i of buttons){
    i.disabled = true;
    i.style.cursor = "not-allowed";
  }
  xhr = new XMLHttpRequest();
  var url  = "https://auth.unwound15.hasura-app.io/user/account/info";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.withCredentials = "true";
  document.getElementById('friendslistbutton').disabled = true;
  document.getElementById('friendssuggestbutton').disabled = true;
  document.getElementById('friendssuggestbutton').style.cursor = "not-allowed";
  document.getElementById('friendslistbutton').style.cursor = "not-allowed";
  document.getElementById('logoutbutton').disabled = true;
  document.getElementById('logoutbutton').style.cursor = "not-allowed";
  document.getElementById('changebanner').disabled = true;
  document.getElementById('changebanner').style.cursor = "not-allowed";
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json.hasura_id));
      hasura_id = json.hasura_id;
      auth_token = "Bearer "+json.auth_token;
      email = JSON.stringify(json.email);
      addfriend(id,name);
    }
    else if(xhr.readyState == 4) {
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json));
      alert(JSON.stringify(json));
      alert("Could'nt add your friend at the moment");
      var buttons = document.getElementsByClassName("btn");
      for(i of buttons){
        i.disabled = false;
        i.style.cursor = "pointer";
      }
      document.getElementById('friendssuggestbutton').innerHTML = "Friend Suggessions";
    }
  }
  xhr.send();
}

var addflag =1;
function applogin(){
  if(addflag == 1 || (suggesiondrop  == 0 && friendsuggestflag == 0))
    {
      document.getElementById('friendssuggestbutton').innerHTML = "Loading Friend Suggessions <img width = '30px' height = '30px' src = 'css/loader.gif'>";
      alert("friend suggession is an experimental feature. Adding new friends will be coming soon");
      xhr = new XMLHttpRequest();
      var url  = "https://auth.unwound15.hasura-app.io/user/account/info";
      xhr.open("POST",url,true);
      xhr.setRequestHeader("Content-type","application/json");
      xhr.withCredentials = "true";
      document.getElementById('friendslistbutton').disabled = true;
      document.getElementById('friendssuggestbutton').disabled = true;
      document.getElementById('friendssuggestbutton').style.cursor = "not-allowed";
      document.getElementById('friendslistbutton').style.cursor = "not-allowed";
      document.getElementById('logoutbutton').disabled = true;
      document.getElementById('logoutbutton').style.cursor = "not-allowed";
      document.getElementById('changebanner').disabled = true;
      document.getElementById('changebanner').style.cursor = "not-allowed";
      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
          var json = JSON.parse(xhr.responseText);
          console.log(JSON.stringify(json.hasura_id));
          hasura_id = json.hasura_id;
          auth_token = "Bearer "+json.auth_token;
          email = JSON.stringify(json.email);
          selectsuggests();
        }
        else if(xhr.readyState == 4) {
          var json = JSON.parse(xhr.responseText);
          console.log(JSON.stringify(json));
          alert(JSON.stringify(json));
          alert("Could'nt get your friend's list at the moment");
          document.getElementById('friendssuggestbutton').innerHTML = "Friend Suggessions";
        }
      }
      xhr.send();
    }

    else if(suggesiondrop  == 1) {
    document.getElementById('friendssuggestbutton').innerHTML = "Friend Suggessions";
    suggesiondrop  = 0;
    }
    else if(friendsuggestflag == 1){
    document.getElementById('friendssuggestbutton').innerHTML = "Friend Suggessions";
    suggesiondrop  =1;
    }
    addflag = 0;
  }


function getfriendslist(){
  if(friendlistflag == 0 && droppeddown == 0){
    var data = { "type": "select", "args": { "table": "user", "columns": [ { "name": "profile", "columns": [ "fname", { "name": "mefriend", "columns": [ "friend_id", { "name": "friend_profile", "columns": [ "fname", { "name": "mefriend", "columns": [ "friend_id" ],"where": { "friend_id": hasura_id } } ] } ] } ] } ] } };
    query = JSON.stringify(data);
    console.log(query);
    var xhr = new XMLHttpRequest();
    var url = "https://data.unwound15.hasura-app.io/v1/query";
    xhr.open("POST",url,true);
    xhr.setRequestHeader("Content-type","application/json");
    xhr.withCredentials = "true";
    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
          document.getElementById('friendslist').innerHTML = "";
          var json = JSON.parse(xhr.responseText);
          if(json[0]["profile"][0]["mefriend"].length == 0){
          document.getElementById('friendslist').innerHTML = "<li class = \"list-group\">Send some requests first.</li>";
          document.getElementById('friendslistbutton').innerHTML = "No Friends Yet";
          console.log(json);
          console.log(JSON.stringify(json[0]["profile"][0]["mefriend"].length));
          friendlistflag = 0;
          droppeddown = 0;
        }
        else if(json[0]["profile"][0]["mefriend"].length > 0){
          for(myfid of json[0]["profile"][0]["mefriend"])
          {
            if(myfid["friend_id"] != hasura_id){
              console.log(myfid);
              console.log("JSON RESPONSE: "+JSON.stringify(json));
              console.log(myfid["friend_profile"]["fname"]);
              if(myfid["friend_profile"]["mefriend"].length > 0){
                var friendname = myfid["friend_profile"]["fname"];
                var friendid = myfid["friend_id"];
                var prourl = myfid["friend_profile"]["proimage"];
                document.getElementById('friendslist').innerHTML += "<li class = \"list-group\"><figure  id = \"friend\"><img class = \"friendimg img-rounded\" alt = \"Friend's Image\" src = \""+prourl+"\"><figcaption><button type = \"button\" class = \"btn\"\">"+friendname+"</figcaption></figure></li>";
              }
            }
          }
          friendlistflag = 1;
          droppeddown = 0;
          document.getElementById('friendslistbutton').innerHTML = "Friends List Loaded";
        }
        }
        else if(xhr.readyState ==4) {
          alert(JSON.stringify(json));
          friendlistflag = 0;
          droppeddown = 0;
          document.getElementById('friendslistbutton').innerHTML = "Error";
        }
        document.getElementById('friendslistbutton').disabled = false;
        document.getElementById('friendssuggestbutton').disabled = false;
        document.getElementById('friendssuggestbutton').style.cursor = "pointer";
        document.getElementById('friendslistbutton').style.cursor = "pointer";
        document.getElementById('logoutbutton').disabled = false;
        document.getElementById('logoutbutton').style.cursor = "pointer";
        document.getElementById('changebanner').disabled = false;
        document.getElementById('changebanner').style.cursor = "pointer";
      }
    xhr.send(query);
  }
}
function addpiclink(link){
  var xhr = new XMLHttpRequest();
  var url = "https://data.unwound15.hasura-app.io/v1/query";
  var data = {};
  data["type"] = "update";
  data["args"] = {};
  data["args"]["table"] = "profile";
  data["args"]["$set"] = {"proimage": link};
  data["args"]["where"] = {"user_id":hasura_id};
  var query = JSON.stringify(data);
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.withCredentials = "true";
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var response = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(response));
      console.log("Profile picture updated");
    }
    else if(xhr.readyState ==4) {
      var response = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(response));
      console.log("Profile picture NOT updated");
    }
  }
  xhr.send(query);
}
function getpiclink(){
  console.log('piclink called');
  var piclink;
  var proname;
  var data = {};
  data["type"] = "select";
  data["args"] = {};
  data["args"]["table"] = "user";
  data["args"]["columns"] = ["email","fname"];
  var query = JSON.stringify(data);
  console.log(query);
  xhr = new XMLHttpRequest();
  var url = "https://data.unwound15.hasura-app.io/v1/query";
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
          document.getElementById('profilename').innerHTML = json[0].fname;
          document.getElementById('profileimage').classList.remove('profileimage');
          document.getElementById('profileimage').classList.add('profileimageappeared');

          addpiclink(piclink);

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
  var url  = "https://auth.unwound15.hasura-app.io/user/logout";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.withCredentials = "true";
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(hasura_id));
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
  document.getElementById('logoutbutton').innerHTML = "Logging Out <img width = '30px' height = '30px' src = 'css/loader.gif'>";
  xhr = new XMLHttpRequest();
  var url  = "https://auth.unwound15.hasura-app.io/user/logout";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.withCredentials = "true";
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(hasura_id));
      hasura_id = json.hasura_id;
      auth_token = "Bearer "+json.auth_token;
      alert("Successfully Logged Out. Bubye, Come back soon");
      window.location = "https://sunshine.unwound15.hasura-app.io/";
    }
    else if(xhr.readyState == 4) {
      alert("Something went wrong during Logout please try again");
      document.getElementById('logoutbutton').innerHTML = "Log Out";
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
  var url = "https://data.unwound15.hasura-app.io/v1/query";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.withCredentials = "true";
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
  document.getElementById('changebanner').innerHTML = "Changing Banner <img width = '30px' height = '30px' src = 'css/loader.gif'>";
  var data = {};
  data["type"] = "select";
  data["args"] = {};
  data["args"]["table"] = "user";
  data["args"]["columns"] = ["id","username","email","password","dob"];
  var query = JSON.stringify(data);
  console.log(query);
  xhr = new XMLHttpRequest();
  var url = "https://data.unwound15.hasura-app.io/v1/query";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.withCredentials = "true";
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      document.getElementById('changebanner').innerHTML = "Change Banner";
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json));
      setTimeout(function(){
        document.getElementById('siteh1').innerHTML = "Sunshine";
      },3000);
      document.getElementById('siteh1').innerHTML =  json[0].username;
    }
    else if(xhr.readyState ==4) {
      document.getElementById('siteh1').innerHTML = "Sunshine";
      document.getElementById('changebanner').innerHTML = "Change Banner";
      alert(JSON.stringify(json));
    }
  }
  xhr.send(query);

}
function updatemyusers(pk,pasw){
  xhr = new XMLHttpRequest();
  var url = "https://data.unwound15.hasura-app.io/v1/query";
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
  var url  = "https://auth.unwound15.hasura-app.io/login";
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
  var url  = "https://auth.unwound15.hasura-app.io/login";
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
  window.location = "https://sunshine.unwound15.hasura-app.io/";
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
  var url = "https://data.unwound15.hasura-app.io/v1/query";
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
      var json = JSON.parse(xhr.responseText);
      loginbutton.innerHTML = "Log In";
      loginbutton.style.disabled = false;
      loginbutton.style.cursor= "pointer";
      alert(JSON.stringify(json));
    }
  }
  xhr.send(query);
}
  function userlogin()
{
  xhr = new XMLHttpRequest();
  var loginbutton = document.getElementById('loginbutton');
  loginbutton.innerHTML = "Logging In <img width = '30px' height = '30px' src = 'css/loader.gif'>";
  loginbutton.style.disabled = true;
  loginbutton.style.cursor = "not-allowed";
  var url  = "https://auth.unwound15.hasura-app.io/login";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.withCredentials = "true";
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json.hasura_id));
      loginbutton.style.disabled = true;
      loginbutton.style.cursor = "not-allowed";
      hasura_id = json.hasura_id;
      auth_token = "Bearer "+json.auth_token;
      email = json.email;
      getuser();
    }
    else if(xhr.readyState == 4) {
      loginbutton.innerHTML = "Log In";
      loginbutton.style.disabled = false;
      loginbutton.style.cursor= "pointer";
      var json = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(json));
      alert(JSON.stringify(json));
    }
    console.log("userlog function over");
  }
  var data = {};
  data["mobile"] = document.getElementById('primarykey').value;
  data["password"] = SHA256(document.getElementById('password').value);
  console.log(data);
  var jsondata = JSON.stringify(data);
  console.log(jsondata);
  xhr.send(jsondata);
}
function addfriend(id,name){
  var xhr = new XMLHttpRequest();
  var url = "https://data.unwound15.hasura-app.io/v1/query";
  var data = {};
  data["type"] = "insert";
  data["args"] = {};
  data["args"]["table"] = "friends";
  data["args"].objects = [{"user_id":hasura_id,"friend_id":id}];
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.withCredentials = "true";
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      var response = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(response));
      document.getElementById('friendssuggestbutton').innerHTML = "Friend Suggesions";
      alert(name+" was sent a friend request. When it's accepted, your friend's list will get updated.");
      var buttons = document.getElementsByClassName("btn");
      for(i of buttons){
        i.disabled = false;
        i.style.cursor = "pointer";
      }
      addflag = 1;
      applogin();
    }
    else if(xhr.readyState == 4){
      i.disabled = false;
      i.style.cursor = "pointer";
      var response = JSON.parse(xhr.responseText);
      console.log(JSON.stringify(response));
      document.getElementById('friendssuggestbutton').innerHTML = "Friend Suggesions";
      alert("You already sent a friend request to "+name);
      var buttons = document.getElementsByClassName("btn");
      for(i of buttons){
        i.disabled = false;
        i.style.cursor = "pointer";
      }
      applogin();
    }
  }
  jsondata = JSON.stringify(data);
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
  var password = SHA256(document.getElementById("pass").value);
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
  otpbutton.innerHTML = "Verifying <img width = '30px' height = '30px' src = 'css/loader.gif'>";
  xhr = new XMLHttpRequest();
  var url  = "https://auth.unwound15.hasura-app.io/mobile/confirm";
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
  resendotpbutton.innerHTML = "Sending OTP to "+mobile+" <img width = '30px' height = '30px' src = 'css/loader.gif'>";
  otpbutton.style.disabled = true;
  resendotpbutton.style.disabled = true;
  otpcancelbutton.style.disabled = true;
  xhr = new XMLHttpRequest();
  var url  = "https://auth.unwound15.hasura-app.io/mobile/resend-otp";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
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
    else if (xhr.readyState ==4){
      otpbutton.style.cursor = "pointer";
      resendotpbutton.style.cursor = "pointer";
      otpcancelbutton.style.cursor = "pointer";
      resendotpbutton.style.disabled = false;
      otpcancelbutton.style.disabled = false;
      resendotpbutton.innerHTML = "OTP Failed";
      setTimeout(function(){},3000);
      resendotpbutton.innerHTML = "Resend OTP";
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
function popalert() {
  if(Boolean(comparepass))
  {
    var signupbuttn = document.getElementById("signupbuttn");
    signupbuttn.style.disabled = true;
    signupbuttn.style.cursor = "not-allowed";
    signupbuttn.innerHTML = "Signing Up <img width = '30px' height = '30px' src = 'css/loader.gif'>";
    console.log(Boolean(comparepass));
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var mobile = document.getElementById("mob").value;
    var password = SHA256(document.getElementById("pass").value);
    console.log(password);
    var email = document.getElementById("email").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var dob = year.concat("-",month,"-",day);
    console.log(dob);
    var uname = fname.concat(" ",lname);
  xhr = new XMLHttpRequest();
  var url  = "https://auth.unwound15.hasura-app.io/signup";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.setRequestHeader("Authentication",admintoken);
  xhr.withCredentials = "true";
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
      console.log(JSON.stringify(json.message));
      alert("Sorry User already exists");
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

function selectsuggests(){
  var data = { "type": "select", "args": { "table": "profile", "columns": [ "fname","user_id","proimage", { "name": "youfriend", "columns": [ "friend_id"],"where": { "user_id": hasura_id } } ] } };
  var query = JSON.stringify(data);
  console.log(query);
  xhr = new XMLHttpRequest();
  var url = "https://data.unwound15.hasura-app.io/v1/query";
  xhr.open("POST",url,true);
  xhr.setRequestHeader("Content-type","application/json");
  xhr.withCredentials = "true";
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
      document.getElementById('friendssuggest').innerHTML = "";
      var json = JSON.parse(xhr.responseText);
      console.log(json);
      for(users of json){
        console.log(users["fname"]);
        console.log(users["youfriend"].length);
        if(users["youfriend"].length == 0 && users["user_id"]!= hasura_id){
          suggestid = users["user_id"];
          suggestname = users["fname"];
          propic = users["proimage"];
          document.getElementById('friendssuggest').innerHTML += "<li class = \"list-group\"><figure  id = \"friend\"><img class = \"friendimg img-rounded\" alt = \"Friend's Image\" src =\""+propic+"\"><figcaption>"+suggestname+"<button type = \"button\" class = \"btn\" onclick = \"addlogin("+suggestid+",'"+suggestname+"');\">Add</figcaption></figure></li>";
          }
        }
        document.getElementById('friendssuggestbutton').innerHTML = "Friend Suggessions Loaded";
        var btns = document.getElementsByClassName('btn');
        for(each of btns){
          each.disabled = false;
          each.style.cursor = "pointer";
      }
      friendsuggestflag = 1;
    }
    else if(xhr.readyState ==4) {
      document.getElementById('friendssuggestbutton').innerHTML = "Error";
      var btns = document.getElementsByClassName('btn');
      for(each of btns){
        each.disabled = false;
        each.style.cursor = "pointer";
      }
      var json = JSON.parse(xhr.responseText);
      alert(JSON.stringify(json));
      friendsuggestflag = 0;
    }
  }
  xhr.send(query);
}
