<!DOCTYPE html>
<html>
<head>
    <?php include 'headprereqs.php';?>
  </head>
<body>

<form method="POST" enctype="multipart/form-data">
    Select image to upload:
    <input type="file" name="fileToUpload" id="fileToUpload">
    <button onclick = "fileup()" type="button" value="Upload Image" name="Upload">
</form>

</body>
</html>
