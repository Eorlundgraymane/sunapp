<row>
<div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "profilearea">
  <row>
    <div class = "col-lg-3 col-md-3 col-sm-3 col-xs-3" id = "profilepic">
     <!--<button id = "picbutton" type = "button" onclick="getpiclink();">Click to load image</button>-->
     <figure>
     <img id = "profileimage" class = "profileimage img-responsive img-rounded" alt = "No Image Uploaded">
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
      <div class = "col-lg-6 col-md-6 col-sm-6 col-xs-6" id = "newspane">
            <button type = "button" class = "btn" onclick="pullposts()">Pull Latest Post</button>
            <ul id = "posts">

            </ul>
      </div>
      <div class = "col-lg-3 col-md-3 col-sm-3 col-xs-3" id = "postpane">
        <div id = "uploadform">
          <form method = "POST" action = "#">
            <input type = "text" id = "newposttitle" placeholder = "Title"><br>
            <input type = "text" id = "newpostimg" placeholder = "Image URL"><br>
            <input type = "text" id = "newposttext" placeholder = "Post"><br>
            <button class = "btn" type = "button" id = "postbutton" onclick = "pushpost();">Post</button>
          </form>
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
