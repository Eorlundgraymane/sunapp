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
        <?php include 'header.php';?>
    </row>
    <row>      
      <div class = "col-lg-3 col-md-3 col-sm-3 col-xs-3" id = "profilepic">
        <!--<button id = "picbutton" type = "button" onclick="getpiclink();">Click to load image</button>-->
        <img id = "profileimage" class = "profileimage img-responsive img-rounded" alt = "No Image Uploaded">
        <script>getpiclink();</script>
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
