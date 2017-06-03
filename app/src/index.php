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
    <body class = "outer-container">
      <row>
        <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "sitebanner">
          <?php include "loginheader.php";?>
        </div>
      </row>
      <row>
        <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
