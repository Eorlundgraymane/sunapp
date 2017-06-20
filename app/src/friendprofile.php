<!DOCTYPE html>
<html>
  <head>
    <?php include 'headprereqs.php';?>
    <title>Sunshine | Home</title>
  </head>
  <body class = "outer-container">
    <?php include 'friendchecker.php';?>
    <row>
      <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "siteheader">
         <?php
           include 'friendheader.php';
         ?>
         <row>
             <div class = "col-lg-2 col-md-2 col-sm-2 col-xs-2" id = "profilepic">
              <figure title = "Update Profile Photo">
              <div id = "profilephotobutton"><img id = "profileimage" class = "profileimage img-responsive img-rounded" alt = "No Image Uploaded"></div>
              <figcaption id = "profilename"></figcaption>
              <script>getfpiclink(parseInt(getCookie("friendid")));</script>
            </figure>
             </div>
             <div class = "col-lg-10 col-md-10 col-sm-10 col-xs-10" id = "shinetable">
               <?php include 'friendtable.php';?>
             </div>
         </row>
         <row>
           <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "contentarea">
             <row>
               <div class = "col-lg-3 col-md-3 col-sm-3 col-xs-3" id = "friendspane">
                 <?php include 'friendsfriends.php';?>
               </div>
               <div onload = "keeppulling();" class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" id = "newspane">
                     <button class = "btn" id = "postpuller"  type = "button" onclick = "pullfposts(parseInt(getCookie('friendid')));" ><img id = "postrefresh" src = "css/refreshpost.png" width = "50px" height = "50px"></button>
                     <ul id = "posts">

                     </ul>
               </div>
               <div id = "messages">
                 <div class = "col-xs-3 col-md-3 col-lg-3 col-sm-3 sprite nosprite" id = "postpane">
                     <div id = "message" class = "message"></div>
                     <script>sunshinescroll()</script>
                   </div>
               </div>
             </row>
           </div>
         </row>
         <row>
         <?php include 'footer.php';?>
         </row>
         </body>
         </html>
