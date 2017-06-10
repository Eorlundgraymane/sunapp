<!DOCTYPE html>
<?php
if(isset($_COOKIE['mobilenumber'])&& isset($_COOKIE['password']))
{
  echo '<script>phplogin('+$_COOKIE["mobilenumber"]+','+$_COOKIE["password"]+');</script>';
}
else {
  echo'<script> alert("PHP is running. YOu don\'t seem to have any cookies so this popup came for the dever to know that");</script>';
}
 ?>
<html>
  <head>
    <?php include 'headprereqs.php';?>
    <title>Sunshine | Welcome</title>
  </head>
    <body class = "outer-container">
      <row>
        <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "sitebanner">
          <?php include "loginheader.php";?>
        </div>
      </row>
      <row>
        <div class = "regpane col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <?php include 'otpoverlay.php';?>
          <?php include "signup.php";?>
        </div>
      </row>
      <row>
        <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <?php include "footer.php";?>
        </div>
      </row>
    </body>
</html>
