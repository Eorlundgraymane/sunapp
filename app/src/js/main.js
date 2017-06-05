function popalert() {
xhr = new XMLHttpRequest();
var url  = "http://auth.vcap.me/signup";
xhr.open("POST",url,true);
xhr.setRequestHeader("Content-type","application/json");
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status == 200){
    var json = JSON.parse(xhr.responseText);
    console.log(JSON.stringify(json));
    alert("JSON received");
  }
};
var data = JSON.stringify({"username":"rkmjstester","email":"hey@mail.com","password":"justanotherpassword","mobile":"7025568897"});
xhr.send(data);
}
