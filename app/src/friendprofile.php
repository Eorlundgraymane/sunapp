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
      <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "siteheader">

         <?php
           if(isset($_POST['primarykey'])&& isset($_POST['password']&& isset($_POST['friendkey']))){
           include 'header.php';
           }
           else {
             echo' <h1 id = "sitename">You\'re not Logged In and don\'t have permission to access this page. Please <button onclick = "gohome();" type = "button">Click Here</button> to go back to the Welcome Page</sitename>';
           }
         ?>
         <?php
           if(isset($_POST['primarykey'])&& isset($_POST['password'])&& isset($_POST['friendkey'])){
           include 'friendresthome.php';
         }
         else {
          echo '<row>';
            include 'footer.php';
           echo '</row></body>
           </html>';
         }
         ?>
