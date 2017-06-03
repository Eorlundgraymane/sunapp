<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="/css/master.css?v=<?php echo '$time()';?>" media="screen" title="no title">
    <meta name = "viewport" content = "width=device-width,initial-scale=1">
    <title>Sunshine | Welcome</title>
  </head>
  <body>
    <row>
      <?php include "loginheader.php";?>
    </row>
    <row>
      <div class = "container">
        <div class = ".col-sm-6">
          <div class = "sneakpeek">
            <img src = "/css/sunshine-min.jpg" alt = "Sneak Peeks of Sunshine">
          </div>
        </div>
        <div class = ".col-sm-6">
          <?php include "signup.php";?>
        </div>        
      </div>
    </row>
    <row>
      <?php include "footer.php";?>
    </row>
  </body>
</html>
