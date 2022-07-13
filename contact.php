<?php
    $db_host = 'localhost';
    $db_user = 'id18625019_contactdb';
    $db_pass = 'lS-G!g6rOsgogq/f';
    $db_name = 'id18625019_contact_information';

    $dbc = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

    if(!$dbc) {
        die('Could not connect to MySQL Database: ' . mysqli_connect_error());
    }

    if(isset($_POST['submit'])) {
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $query = "INSERT INTO Contact (FirstName, LastName, Email, Message)
        VALUES ('$firstname', '$lastname', '$email', '$message')";
        $result = mysqli_query($dbc, $query);

        $subject = 'Someone Visited Your Website!';
        $body = "First Name: $firstname\nLast Name: $lastname\nMessage: $message";
        $sender = "From: $email";

        if(!$result) {
            echo "An error has occurred with a connection to the Database. Please contact the website owner for assistance.";
        }  else {
            $message = mail('zgould24@gmail.com', $subject, $body, $sender);
            if($message) {
                echo 'Email was sent!';
                echo "<script> 
                        window.setTimeout(function() {
                            window.location.href='index.html';
                        }, 2000);
                        
                      </script>";
                exit;
            }  else {
                echo 'The email was not sent successfully. Please contact the website owner for assistance.';
            }
        }
    }
    
    
?>