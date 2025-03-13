<?php

$conn = new mysqli('localhost','root','','portfolio');

if($conn) {
    echo 'success connection';
} else {
    echo 'failed connection';
    mysqli_error($conn);
}
?>