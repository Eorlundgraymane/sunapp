
</div>
</row>
<row>
<div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "profilearea">
<div class = "col-lg-3 col-md-3 col-sm-3 col-xs-3" id = "profilepic">
 <!--<button id = "picbutton" type = "button" onclick="getpiclink();">Click to load image</button>-->
 <img id = "profileimage" class = "profileimage img-responsive img-rounded" alt = "No Image Uploaded">
 <script>getpiclink();</script>
</div>
<?php include 'shinetable.php';?>
</div>
</row>
<row>
<div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "contentarea">
<div class = "col-lg-3 col-md-3 col-sm-3 col-xs-3" id = "friendspane">
 <?php include 'friends.php';?>
</div>
<div class = "col-lg-3 col-md-3 col-sm-3 col-xs-6" id = "newspane">
</div>
<div class = "col-lg-3 col-md-3 col-sm-3 col-xs-3" id = "postpane">
</div>
</div>
</row>
<row>
<?php include 'footer.php';?>
</row>
</body>
</html>
