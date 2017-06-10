<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "sitename"><h1 id = "siteh1">
        Sunshine</h1><br>
        <?php
        if(isset($_POST['primarykey'])&& isset($_POST['password'])){
        echo' Checking to see if the post values reached here safely '.$_POST["primarykey"].' is the primary key and '.$_POST["password"].' is the password<br>';
        echo' <button onclick = "changebanner();" type = "button">Click Here</button> to see your name on the Site Banner<br>';
        }
        else {
          echo' Checking to see if the post values reached here safely ...and nope, it seem\'s the\'re dead';
        }
        ?>
        <button type = "button" onclick = "userlogout(<?php echo $_POST["primarykey"];?>);">Click here</button> to logout safely so that you don't cause any problems to my programming
    </div>
  </body>
</html>
