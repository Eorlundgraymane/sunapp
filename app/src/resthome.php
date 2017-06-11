
</div>
</row>
<row>
<div class = "col-lg-12 col-md-12 col-sm-12 col-xs-12" id = "profilearea">
<div class = "col-lg-3 col-md-3 col-sm-3 col-xs-3" id = "profilepic">
 <!--<button id = "picbutton" type = "button" onclick="getpiclink();">Click to load image</button>-->
 <img id = "profileimage" class = "profileimage img-responsive img-rounded" alt = "No Image Uploaded">
 <script>getpiclink();</script>
</div>
<div class = "col-lg-9 col-md-9 col-sm-9 col-xs-9" id = "shine">
 <table id = "shinetable">
   <tr>
     <td>0</td><td>0</td><td>0</td><td>0</td><td>0</td>
   </tr>
   <tr>
     <td><img class = "img-responsive" alt ="Friend Icon"></td><td><img class = "img-responsive" alt ="Earth Icon"></td><td><img class = "img-responsive" alt ="Charity Icon"></td><td><img class = "img-responsive" alt ="Health Icon"></td><td><img class = "img-responsive" alt ="Family Icon"></td>
   <tr>
     <th>Friendshine</th><th>Earthshine</th><th>Charityshine</th><th>Healthshine</th><th>Familyshine</th>
   </tr>
 </table>
</div>
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
