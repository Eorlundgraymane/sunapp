<!DOCTYPE html>
<html>
<head>
    <?php include 'headprereqs.php';?>
  </head>
<body>

<form method="POST" enctype="multipart/form-data">
    Select image to upload:
    <input type="file" name="fileToUpload" id="ftu">
    <button onclick = "fileup()" type="button" value="Upload Image">Upload Image</button>
</form>

</body>
</html>
