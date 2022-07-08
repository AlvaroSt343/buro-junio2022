<?php
session_start();

require 'vendor/autoload.php';

// This is your test secret API key.
\Stripe\Stripe::setApiKey('sk_test_51LJMN0Ircg7fa5cD146ekJhGZpMTqytNgHWTaXLMJimhWEqzm3cZgfpXnvJM8plcLfLWXUd8GPowYNKtNZlOs6Ek00r22aMGMK');

function calculateOrderAmount(array $items): int
{
    $amount = $_SESSION['importetotal'];
    $result = $amount * 100;
    return $result;
}

header('Content-Type: application/json');

try {
    // retrieve JSON from POST body
    $jsonStr = file_get_contents('php://input');
    $jsonObj = json_decode($jsonStr);

    // Create a PaymentIntent with amount and currency
    $paymentIntent = \Stripe\PaymentIntent::create([
        'amount' => calculateOrderAmount($jsonObj->items),
        'currency' => 'mxn',
        'automatic_payment_methods' => [
            'enabled' => true,
        ],
    ]);

    $output = [
        'clientSecret' => $paymentIntent->client_secret,
    ];

    echo json_encode($output);
} catch (Error $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
