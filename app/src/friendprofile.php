
<script src = "js/main.js" type = "text/javascript"></script>
<script>
if(checkCookie("primarykey")){
  alert("Hello "+getCookie("primarykey")+" !");
}
else{
  var cookie = prompt("Enter yout primary key");
  setCookie("primarykey",cookie,10);
}
</script>
