<!DOCTYPE html>
<?php
/*session_start();
  if(isset($_POST['primarykey'])&& isset($_POST['password'])){
    setcookie('mobilenumber',$_POST['primarykey'],time()+60*60*24*365,'/','sunshine.washtub66.hasura-app.io');
    setcookie('password',$_POST['password']);
    echo '<script>alert("Cookie mobile number = '+$_COOKIE["mobilenumber"]+'is set");';
  }*/
 ?>
<html>
  <head>
    <?php include 'headprereqs.php';?>
    <title>Sunshine | Home</title>
  </head>
  <body class = "outer-container">
    <row>
      <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id  = "sitebanner">
        <?php include 'header.php';?>
      </div>
    </row>
    <row>
    <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <?php
      if(isset($_POST['primarykey'])&& isset($_POST['password'])){
      echo' <button onclick = "changebanner();" type = "button">Click Here</button> to see your name on the Site Banner<br><button type = "button" onclick = "userlogout('.$_POST["primarykey"].');">Click here</button> to logout safely so that you don\'t cause any problems to my programming';
      }
      else {
        echo' You\'re not Logged In and don\'t have permission to access this page. Please <button onclick = "gohome();" type = "button">Click Here</button> to go back to the Welcome Page';
      }
    ?>
  </div>
  </row>
    <row>
      <div class = "col-lg-3 col-md-3 col-sm-3 col-xs-3" id = "profilepic">
        <img onload = "getpiclink();" id = "profileimage" class = "profileimage img-responsive img-rounded" alt = "No Image Uploaded">
      </div>
      <div class = "col-lg-9 col-md-9 col-sm-9 col-xs-9" id = "shine">
        <table id = "shinetable">
          <tr>
            <td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>
          </tr>
          <tr>
            <td><img class = "img-responsive" alt ="Friend Icon"></td><td><img class = "img-responsive" alt ="Earth Icon"></td><td><img class = "img-responsive" alt ="Charity Icon"></td><td><img class = "img-responsive" alt ="Health Icon"></td><td><img class = "img-responsive" alt ="Family Icon"></td>
          <tr>
            <th>Friendshine</th><th>Earthshine</th><th>Charityshine</th><th>Healthshine</th><th>Familyshine</th>
          </tr>
        </table>
      </div>
    </row>
    <row>
      <?php include 'footer.php';?>
    </row>
  </body>
</html>
