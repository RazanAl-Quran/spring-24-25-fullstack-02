<?php

include 'connect.php';
    if(isset($_POST['add-project'])) {
        // get the data from the form/POST
        print_r($_POST);
          
    $projectName = $_POST['projectName'];
    $projectImg = $_POST['projectImg'];

        // insert to DB

        $sql = "INSERT INTO projects (project_name,project_image) VALUES ('$projectName', '$projectImg')";

    $result = mysqli_query($conn,$sql);

        // redirect to index
        if($result) {
            header("Location: Index.php");
        } else {
            mysqli_error($conn);
        }

    }

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

</head>

<body>
    <form style="width: 30rem;" method="post">
        <div class="form-group">
            <label for="projectName">Project Name</label>
            <input type="text" class="form-control" placeholder="Enter Project Name" name="projectName">
        </div>
        <div class="form-group">
            <label for="projectImg">Project Image</label>
            <input type="text" class="form-control" placeholder="Enter Project Image URL" name="projectImg">
        </div>
        <button type="submit" name="add-project" class="btn btn-primary">Add Project</button>
    </form>
</body>

</html>