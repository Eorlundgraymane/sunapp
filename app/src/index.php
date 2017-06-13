<!DOCTYPE html>
<html>
  <head>
    <?php include 'headprereqs.php';?>
    <script src = "js/sha.js"></script>
    <title>Sunshine | Home</title>    
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
