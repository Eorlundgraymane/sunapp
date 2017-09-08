<!DOCTYPE html>
<html>
<head>
    <?php include 'headprereqs.php';?>
  </head>
<body>

    <input type="file" name="fileToUpload" id="ftu">
    <button onclick = "fileup()" type="button" value="Upload Image">Upload Image</button>

    Download
    <button onclick = "window.location = 'url = \'https://filestore.animation75.hasura-app.io/v1/file/12345678910abcde\';" type="button" value="Upload Image">Download Image</button>

    Delete
    <button onclick = "filedel()" type="button" value="Delete Image">Delete Image</button>
</body>
</html>
