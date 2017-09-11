<!DOCTYPE html>
<html>
  <head>
    <?php include 'headprereqs.php';?>
    <title>Sunshine | Home</title>
  </head>
  <div class = "shinelay show" id = "shinelay">
    <figure id = "forcelay">
    <img class = "img-rounded" width = '100%' height = '100%' src = 'css/sunrise.gif'>
    </figure>
  </div>
  <body class = "outer-container">
    <?php include 'loginchecker.php';?>
    <row>
      <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "siteheader">
         <?php
           include 'header.php';
         ?>
         <row>
             <div class = "col-lg-2 col-md-2 col-sm-2 col-xs-2" id = "profilepic">
              <figure>
              <button  title = "Update Profile Photo" type = "button" class = "btn" id = "profilephotobutton" onclick = "updatephoto()"><img id = "profileimage" class = "profileimage img-responsive img-rounded" alt = "No Image Uploaded"></button>
              <figcaption title = "Profile Name" id = "profilename"></figcaption>
              <script>notifyCookie();getpiclink();</script>
            </figure>
             </div>
             <div class = "col-lg-10 col-md-10 col-sm-10 col-xs-10" id = "shinetable">
               <?php include 'shinetable.php';?>
             </div>
         </row>
         <row>
           <div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "contentarea">
             <row>
               <div class = "col-lg-3 col-md-3 col-sm-3 col-xs-3" id = "friendspane">
                 <?php include 'friends.php';?>
               </div>
               <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" id = "newspane">
                     <button title = "Posts will refresh every 5 minutes" class = "btn" id = "postpuller" type = "button" onclick = "gethasurapullpost();" ><img id = "postrefresh" src = "css/refreshpost.png" width = "30px" height = "30px"></button>
                     <ul id = "posts">

                     </ul>
               </div>
               <div class = "col-lg-3 col-md-3 col-sm-3 col-xs-3" id = "postpane">
                 <h3 title = "Share a photo of your dedication to being more human and get likes!!!" id = "uploadpane">Upload New Post</h3>
                   <form id  = "postform" method = "POST" action = "#">
                     <div id = "uploadform" class = "form-group">
                      <button onclick = "addimg();" type = "button" class = "btn" title = "Add Image to your Post"><img width = "30px" height = "30px" src = "/css/imgpost.jpg"></button><button onclick = "addvid();" type = "button" class = "btn" title = "Add Video to your Post"><img width = "30px" height = "30px" src = "/css/vidpost.jpg"></button>
                     </div><br>
                      <div id = "imageuploader" class = "hidden">
                        <label for = "imgup">Add Image</label>
                       <input type = "file" id = "imgup" style = "visibility: hidden;">
                       <input  type = "text" id = "newpostimg" hidden placeholder = "Image URL">
                       <img width = "66px" height = "75px" id = "imgloader">
                     </div>
                     <div id = "videouploader" class = "hidden">
                       <label for = "vidup">Add Video Clip</label>
                      <input type = "file" id = "vidup" style = "visibility: hidden;">
                      <vid id = "vidloader">
                    </div>
                       <input  type = "text" id = "newposttitle" placeholder = "Title"><br>
                       <textarea rows = "5" maxlength = "200" id = "newposttext" placeholder="Post here..."></textarea><br>
                       <div id = "allsmileys"></div>
                       <script>getallsmileys();</script>
                       <input onfocus="showearthhint();" onblur = "hideearthhint();" title = "Claim your Earthshine points to go up in the leaderboards" class = "shineinput" type = "number" min = "0" max = "100" id = "earth" placeholder = "Earth Shine 0-100"><div id = "hintearth">how much you cared for the nature</div><br>
                       <input onfocus="showcharityhint();" onblur = "hidecharityhint();" title = "Claim your Charityshine points to go up in the leaderboards" class = "shineinput" type = "number" min = "0" max = "100" id = "charity" placeholder = "Charity Shine 0-100"><div id = "hintcharity">how much you showed charity</div><br>
                       <input onfocus="showhealthhint();" onblur = "hidehealthhint();" title = "Claim your Healthshine points to go up in the leaderboards" class = "shineinput" type = "number" min = "0" max = "100" id = "health" placeholder = "Health Shine 0-100"><div id = "hinthealth">how much you took care of your body</div><br>
                       <input onfocus="showsocialhint();" onblur = "hidesocialhint();" title = "Claim your Socialshine points to go up in the leaderboards" class = "shineinput" type = "number" min = "0" max = "100" id = "social" placeholder = "Social Shine 0-100"><div id = "hintsocial">how much you fun you had with your family</div><br>
                       <button title = "Post" class = "btn" type = "button" id = "postbutton" onclick = "gethasurapushpost();"><img src = "css/post.png" width = "50px" height = "50px" id = "postbuttonimage"></button>
                       </form>
                     <div id = "siteslogan"><font color = "white" style = "text-decoration:underlined;font-weight:bolder;">Sunshine is a website which gives you the motivation to be more human...<br>make friends...help the needy...plant a tree or feed some birds daily...<br>go to the gym...spend some time with your family...<br>Post and share your activities...claim shine points on your posts...get Likes...shine brighter on the leaderboard</font></div>
                   </div>
               </div>
             </row>
           </div>
         </row>
         <row>
         <?php include 'footer.php';?>
         </row>
         <script>
         </script>
         </body>
         </html>
