<?php
    $db_host = 'localhost';
    $db_user = 'id18625019_contactdb';
    $db_pass = 'wMh!=Z1dhB0HUh1m';
    $db_name = 'id18625019_contact_information';

    $dbc = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

    if(!$dbc) {
        die('Could not connect to MySQL Database: ' . mysqli_connect_error());
    }  else {
        echo 'Connected successfully <br/>';
    }

    if(isset($_POST['submit'])) {
        $firstName = $_POST['first'];
        $lastName = $_POST['last'];
        $email = $_POST['email'];
        $phoneNumber = $_POST['phone'];
        $description = $_POST['description'];

        $query = "INSERT INTO Contact (FirstName, LastName, Email, PhoneNumber, Description)
                VALUES ('$firstName', '$lastName', '$email', '$phoneNumber', '$description')";
        $result = mysqli_query($dbc, $query);

        if(!$result) {
            echo "Error: Rejected query on query -> '$query'";
        }  else {
            echo 'Successful query!';
            $msg = "Test";
            
            $to = "zgould24@gmail.com";
            $subject = "Someone Visited Your Website!";
            $text = $firstName.' '.$lastName.' left you their information!'."\r\n".
                    'Email: '.$email."\r\n".
                    'Phone Number: '.$phoneNumber."\r\n".
                    'Description: '.$description;
            $header = 'From: ' . $email;

            $message = mail($to, $subject, $text, $header);
            if($message) {
                echo 'Email was sent!';
            }  else {
                echo 'Email did not go through';
            }
        }
    }

?>