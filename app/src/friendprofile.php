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
    <?php include 'friendchecker.php';?>
    <row>
      <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "siteheader">
        <script>console.log(document.cookie);</script>
         <?php
           include 'friendheader.php';
         ?>
         <row>
         <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "profilearea">
           <row>
             <div class = "col-lg-3 col-md-3 col-sm-3 col-xs-3" id = "profilepic">
              <!--<button id = "picbutton" type = "button" onclick="getpiclink();">Click to load image</button>-->
              <figure title = "Update Profile Photo">
              <div id = "profilephotobutton"><img id = "profileimage" class = "profileimage img-responsive img-rounded" alt = "No Image Uploaded"></div>
              <figcaption id = "profilename"></figcaption>
              <script>getfpiclink(parseInt(getCookie("friendid")));</script>
            </figure>
             </div>
             <div class = "col-lg-9 col-md-9 col-sm-9 col-xs-9" id = "shine">
               <?php include 'friendtable.php';?>
             </div>
           </row>
         </div>
         </row>
         <row>
           <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "contentarea">
             <row>
               <div class = "col-lg-3 col-md-3 col-sm-3 col-xs-3" id = "friendspane">
                 <?php include 'friendsfriends.php';?>
               </div>
               <div onload = "keeppulling();" class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" id = "newspane">
                     <button id = "postpuller" type = "button" class = "btn" onclick = "pullfposts(parseInt(getCookie('friendid')));" ><img id = "postrefresh" src = "css/refreshpost.png" width = "50px" height = "50px"></button>
                     <ul id = "posts">

                     </ul>
               </div>
               <div class = "col-lg-3 col-md-3 col-sm-3 col-xs-3" id = "postpane">
               </div>
             </row>
           </div>
         </row>
         <row>
         <?php include 'footer.php';?>
         </row>
         </body>
         </html>
