<?php
session_start();

$importetotal = $_POST['totalAA'];
//echo('importe segun: '.$importetotal);
$_SESSION['importetotal'] = $importetotal;

header("Location: ./checkout.html");


?>