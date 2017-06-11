<div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" id = "sitename"><h1 id = "siteh1">
  Sunshine</h1>
</div>
<div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" id = "sessionbutton">
<?php
  if(isset($_POST['primarykey'])&& isset($_POST['password'])){
  echo' <button onclick = "changebanner();" type = "button">Change Banner</button><button type = "button" onclick = "userlogout('.$_POST["primarykey"].');">Log Out</button>';
  }
  else {
    echo' You\'re not Logged In and don\'t have permission to access this page. Please <button onclick = "gohome();" type = "button">Click Here</button> to go back to the Welcome Page';
  }
?>
</div>
