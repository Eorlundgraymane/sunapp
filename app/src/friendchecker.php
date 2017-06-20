<script>
if(checkCookie("primarykey")&& checkCookie("friendid")){
}
else if(!checkCookie("primarykey")){
  alert("You're not logged in as a user. Please log in");
  gohome();
}
else if(!checkCookie("friendid")){
  alert("You have not chosen a friend. Please go to the your home page");
  gopro();
}
</script>
