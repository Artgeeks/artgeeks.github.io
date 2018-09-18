<?php
    header("Location: https://artgeeksiitmandi.000webhostapp.com/index.html");
//    $Database = $_SESSION["DB"];
//    $Table = $_SESSION["TB"];
    $servername = "localhost";
    $username = "id7118424_artgeeks";
    $password = "artgeeks@iitmandi";
    $rollno = $_POST["rollno"];
    $name = $_POST["name"];
    $competition = $_POST["competition"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];

//    echo "Database name was ".$Database." and table name was ".$Table;
    $connect = new mysqli($servername, $username, $password, "id7118424_registration");
    if($connect->connect_error){
        die("Connection failed" . $connect->connect_error);
    }
    $sql = "INSERT INTO vibgyor_single (Roll_No,Name,Competition,Email,Phone)
    values('$rollno','$name','$competition','$email','$phone')";
    
    if($connect->query($sql) === TRUE) {
    echo "New record created successfully";
    } else {
    echo "Error: " . $sql . "<br>" . $connect->error;
    }  
    $connect->close();
?>
