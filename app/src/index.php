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
          <?php include "loginheader.php";?><br>
        </div>
      </row>
      <row>
        <div class = "regpane col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class = "col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div id = "siteslogan"><font color = "white" style = "text-decoration:underlined;font-weight:bolder;">Sunshine is a website which gives you the motivation to Be More Human<br> Make, Friends, Help the needy,Plant a tree or feed some birds regularly,<br>Go to the Gym, Spend some time with your family,<br>Post and Share your Activities, Get Likes, Shine brighter on the leaderboards</font></div><br><br><br>
            <div id = "homemessages">
            <div class = "col-xs-4 col-md-4 col-lg-4 col-sm-4 sprite nosprite ">
            </div><br><br><br><br><br><br>
              <div id = "message" class = "message"></div>
              <script>homescroll()</script>
            </div>
          </div>
          <?php include 'otpoverlay.php';?>
          <?php include "signup.php";?>
        </div>
      </row>
          <?php include "footer.php";?>
    </body>
</html>
