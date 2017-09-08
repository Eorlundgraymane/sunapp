<!DOCTYPE html>
<html>
<head>
    <?php include 'headprereqs.php';?>
  </head>
<body>

    <input type="file" name="fileToUpload" id="ftu">
    <button onclick = "fileup(getCookie('hasura_id'))" type="button" value="Upload Image">Upload Image</button>

    Download
    <img width = "640px" heigh = "320px" id = "img" alt = "No Image Uploaded">

    Delete
    <button onclick = "filedel(getCookie('hasura_id'))" type="button" value="Delete Image">Delete Image</button>
</body>
</html>
