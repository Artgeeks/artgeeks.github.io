<?php
    header("Location: https://artgeeksiitmandi.000webhostapp.com/index.html");
//    $Database = $_SESSION["DB"];
//    $Table = $_SESSION["TB"];
    $servername = "localhost";
    $username = "id7118424_artgeeks";
    $password = "artgeeks@iitmandi";
    $rollno1 = $_POST["rollno1"];
    $rollno2 = $_POST["rollno2"];
    $rollno3 = $_POST["rollno3"];
    $rollno4 = $_POST["rollno4"];
    $name1 = $_POST["name1"];
    $name2 = $_POST["name2"];
    $name3 = $_POST["name3"];
    $name4 = $_POST["name4"];
    $competition = $_POST["competition"];
    $email = $_POST["email"];
    $phone1 = $_POST["phone1"];
    $phone2 = $_POST["phone2"];
//    echo "Database name was ".$Database." and table name was ".$Table;
    $connect = new mysqli($servername, $username, $password, "id7118424_registration");
    if($connect->connect_error){
        die("Connection failed" . $connect->connect_error);
    }
    $sql = "INSERT INTO vibgyor_group (Roll_No_1,Participant_1,Roll_No_2,Participant_2,Roll_No_3,Participant_3,Roll_No_4,Participant_4,Competition,Email,Phone_1,Phone_2)
    values('$rollno1','$name1','$rollno2','$name2','$rollno3','$name3','$rollno4','$name4','$competition','$email','$phone1','$phone2')";
    
    if($connect->query($sql) === TRUE) {
    echo "New record created successfully";
    } else {
    echo "Error: " . $sql . "<br>" . $connect->error;
    }  
    $connect->close();
?>
