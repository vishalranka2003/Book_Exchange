<?php

$email=$_POST['email'];
$password=$_POST['password'];
$userName=$_POST['userName'];

$conn = new mysqli('localhost','root','','book_exchange');
if($conn->connect_error)
{
    die('Connection failed: '.$conn->connect_error);
}
else
{
    $stmt = $conn->prepare("insert into user_ceredentials(userName,email,password)
    values(?, ?, ?)");
    $stmt->bind_param("sss",$userName,$email,$password);
    $stmt->execute();
    // echo "Registration Successful";
    $stmt->close();
    $conn->close();
    header("Refresh: 1; url=/Book_Exchange");
}
?>