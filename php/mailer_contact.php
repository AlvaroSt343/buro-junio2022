<?php
ini_set('display_errors', '1');

use PHPMailer\PHPMailer\PHPMailer;

require '../vendor/autoload.php';
$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'mail.buroarrendamiento.com';
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->Username = 'testsmtp@buroarrendamiento.com';
$mail->Password = 'X.EB$i_El=}Z';
$mail->setFrom('testsmtp@buroarrendamiento.com', 'test smtp');
$mail->addAddress('red.fear@hotmail.com', 'anacleto');
$mail->addAddress('alsato.650cc@gmail.com', 'panfilo');
$mail->addAddress('140300177@ucaribe.com.mx', 'manuel');
if ($mail->addReplyTo($_POST['email'], $_POST['name'])) {
    $mail->Subject = 'PHPMailer contact form';
    $mail->isHTML(true);
    $mail->Body = <<<EOT
Email: {$_POST['email']}
Name: {$_POST['name']}
Message: {$_POST['message']}
EOT;
    if (!$mail->send()) {
        $msg = 'Sorry, something went wrong. Please try again later.';
    } else {
        $msg = 'Message sent! Thanks for contacting us.';
    }
} else {
    $msg = 'Share it with us!';
}
ini_set('display_errors', '1');
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Contact form</title>
</head>

<body>
    <h1>Do You Have Anything in Mind?</h1>
    <?php if (!empty($msg)) {
        echo "<h2>$msg</h2>";
    } ?>