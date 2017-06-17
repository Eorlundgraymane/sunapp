
<script src = "js/main.js" type = "text/javascript"></script>
<script>
if(checkCookie("primarykey")&& checkCookie("friendid")){
  alert("Hello "+getCookie("primarykey")+" This is the profile page of "+getCookie("friendid")+"!");
}
else{
  if(!checkCookie("primarykey")){
    alert("You're not logged in");
  }
  else if(!checkCookie("friendid")){
    alert("You have not chosen a friend");
  }

}

</script>
<button type = "button" onclick = "clearCookies()">Clear All Cookies</button>
