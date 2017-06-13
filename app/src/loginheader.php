<div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" id = "sitename">
    Sunshine
</div>
<div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" id = "loginspace">
  <form method="POST" action = "/home.php" name = "loginform" id = "loginform">
    <div class = "input-group">
      <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i><span>
      <input type = "text" name = "primarykey" id = "primarykey" placeholder="Mobile">
    </div>
    <div class = "input-group">
      <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i><span>
    <input type = "password" name = "password" id = "password" placeholder="Password">
  </div>
    <button class = "btn" type = "button" id = "loginbutton" name = "login" onclick="userlogin();">Log in</button>
  </form>
</div>
