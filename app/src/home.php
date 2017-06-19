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
    <script>
    if(checkCookie("primarykey")){
    }
    else{
      alert("You are not logged in. Please go to the home page");
      gohome();
    }
    </script>
    <row>
      <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "siteheader">
        <script>console.log(document.cookie);</script>
         <?php
           include 'header.php';
         ?>
         <row>
         <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "profilearea">
           <row>
             <div class = "col-lg-3 col-md-3 col-sm-3 col-xs-3" id = "profilepic">
              <!--<button id = "picbutton" type = "button" onclick="getpiclink();">Click to load image</button>-->
              <figure title = "Update Profile Photo">
              <button type = "button" class = "btn" id = "profilephotobutton" onclick = "updatephoto()"><img id = "profileimage" class = "profileimage img-responsive img-rounded" alt = "No Image Uploaded"></button>
              <figcaption id = "profilename"></figcaption>
              <script>getpiclink();</script>
            </figure>
             </div>
             <div class = "col-lg-9 col-md-9 col-sm-9 col-xs-9" id = "shine">
               <?php include 'shinetable.php';?>
             </div>
           </row>
         </div>
         </row>
         <row>
           <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "contentarea">
             <row>
               <div class = "col-lg-3 col-md-3 col-sm-3 col-xs-3" id = "friendspane">
                 <?php include 'friends.php';?>
               </div>
               <div onload = "keeppulling();" class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" id = "newspane">
                     <button id = "postpuller" type = "button" class = "btn" onclick = "gethasurapullpost();" ><img id = "postrefresh" src = "css/refreshpost.png" width = "50px" height = "50px"></button>
                     <ul id = "posts">

                     </ul>
               </div>
               <div class = "col-lg-3 col-md-3 col-sm-3 col-xs-3" id = "postpane">
                 <h3 id = "uploadpane">Upload New Post</h3>
                   <form id  = "postform" method = "POST" action = "#">
                     <div id = "uploadform" class = "form-group">
                       <input  type = "text" id = "newposttitle" placeholder = "Title"><br>
                       <input  type = "text" id = "newpostimg" placeholder = "Image URL"><br>
                       <textarea id = "newposttext" placeholder="Post here..."></textarea><br>
                       <div id = "allsmileys"></div>
                       <script>getallsmileys()</script>
                       <input type = "number" id = "earth" placeholder = "Earth Shine"><br>
                       <input type = "number" id = "charity" placeholder = "Charity Shine"><br>
                       <input type = "number" id = "health" placeholder = "Health Shine"><br>
                       <input type = "number" id = "social" placeholder = "Social Shine"><br>
                       <button class = "btn" type = "button" id = "postbutton" onclick = "gethasurapushpost();">Post</button>
                     </div>
                   </form>
               </div>
             </row>
           </div>
         </row>
         <row>
         <?php include 'footer.php';?>
         </row>
         </body>
         </html>
