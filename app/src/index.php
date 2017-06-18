<!DOCTYPE html>
<html>
  <head>
    <?php include 'headprereqs.php';?>
    <script src = "js/sha.js"></script>
    <script>
    if(checkCookie("primarykey")){
      gopro();
    }
    </script>
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
          <div class = "col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div id = "homemessages">
            <div class = "col-xs-4 col-md-4 col-lg-4 col-sm-4 sprite nosprite ">              
              </div>
              <div id = "message" class = "message"></div>
              <script>homescroll()</script>
            </div>
          </div>
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
