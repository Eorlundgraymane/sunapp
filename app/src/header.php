<div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "sitename"><h1 id = "siteh1">
  Sunshine</h1><br>
  <?php
    if(isset($_POST['primarykey'])&& isset($_POST['password'])){
    echo' <button onclick = "changebanner();" type = "button">Click Here</button> to see your name on the Site Banner<br><button type = "button" onclick = "userlogout('.$_POST["primarykey"].');">Click here</button> to logout safely so that you don\'t cause any problems to my programming';
    }
    else {
      echo' <button onclick = "gohome();" type = "button">Click Here</button> to go back to the Welcome Page';
    }
  ?>
</div>
