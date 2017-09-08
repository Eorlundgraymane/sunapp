<!DOCTYPE html>
<html>
<head>
    <?php include 'headprereqs.php';?>
  </head>
<body class = "outer-container">
  <?php
    include 'header.php';
  ?>
    <input type="file" name="fileToUpload" id="ftu">
    <button onclick = "fileup(getCookie('hasura_id'))" type="button" value="Upload Image">Upload Image</button><br><br>

    <button onclick = "filedown(getCookie('hasura_id'))" type = "button" value = "Check Image">Check Image</button><br><br>
    <img width = "640px" heigh = "320px" id = "img" alt = "No Image Uploaded"><br><br>

    <button onclick = "filedel(getCookie('hasura_id'))" type="button" value="Delete Image">Delete Image</button><br><br>
</body>
</html>
