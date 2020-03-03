<?php
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone_number = $_POST["phone_number"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $to = "tudorgalatan@gmail.com";
    $final_message = "Name: ".$name."Phone: ".$phone_number."Message: ".$message;

    if ($name != "" && $email != "")
    {
        mail ($to, $subject, $final_message);
        echo "Email Sent";
    }
?>