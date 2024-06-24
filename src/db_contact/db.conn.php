<?php
    $servername="localhost";
    $username="root";
    $password="";
    $dbname="contact";
    $conn=mysqli_connect($servername,$username,$password,$dbname);
    if(!$conn){
        die("failed".mysqli_connect_error());
}
       echo "connected";


?>
