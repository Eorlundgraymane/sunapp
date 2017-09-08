<!DOCTYPE html>
<html>
<head>
    <?php include 'headprereqs.php';?>
  </head>
<body>

    <input type="file" name="fileToUpload" id="ftu">
    <button onclick = "fileup(getCookie('hasura_id'))" type="button" value="Upload Image">Upload Image</button>

    Download
    <button onclick = "filedown(getCookie('hasura_id'))" type="button" value="Upload Image">Upload Image</button>

    Delete
    <button onclick = "filedel(getCookie('hasura_id'))" type="button" value="Delete Image">Delete Image</button>
</body>
</html>
