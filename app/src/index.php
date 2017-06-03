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
    <div class = "row">
      <div class = "col-sm-12"><div class = "page-header"><h1><small>.col-sm-12</small> Sunshine Banner</h1></div></div>
    </div>
    <div class = "container">
      <div class = "row">
        <div class = "col-sm-6"><h2><small>.col-sm-6 </small>Sign Up Column</h2>
        <form action = "/" method = "POST">
          <input type = "text" name = "fname" placeholder="First Name"/><br><br>
          <input type = "text" name = "mname" placeholder="Middle Name"/><br><br>
          <input type = "text" name = "lname" placeholder="Last Name"/><br><br>
          <input type = "password" name = "pass" placeholder="Password"/><br><br>
          <input type = "password" name = "confpass" placeholder="Confirm Password"/><br><br>
          <input type = "submit" class = "btn btn-primary btn-block" name = "reg" value = "Start Shining"/><br><br>
        </form></div>
        <div class = "col-sm-6"><h2><small>.col-sm-6</small> Log In Column</h2></div>
    </div>
    <div class = "row">
      <div class = "col-sm-12"><h3><small>.col-sm-12</small> Sunshine Footer</h3></div>
    </div>
  </body>
</html>
