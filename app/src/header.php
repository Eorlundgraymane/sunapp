<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "sitename">
        Sunshine<br>
        <?php
        if(isset($_POST['primarykey'])&& isset($_POST['password'])){
        echo' Checking to see if the post values reached here safely '.$_POST["primarykey"].'is the primaey key and '.$_POST["password"].' is the password';
        }
        else {
          echo' Checking to see if the post values reached here safely ...and nope, it seem\'s the\'re dead';
        }
        ?>
    </div>
  </body>
</html>
