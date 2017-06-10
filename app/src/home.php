<!DOCTYPE html>
<?php
  if(isset($_POST['primarykey'])&& isset($_POST['password'])){
    setcookie('mobilenumber',$_POST['primarykey'],time()+60*60*24*365,'/','sunshine.washtub66.hasura-app.io');
    setcookie('password',$_POST['password']);
  }
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
      <?php include 'footer.php';?>
    </row>
  </body>
</html>
