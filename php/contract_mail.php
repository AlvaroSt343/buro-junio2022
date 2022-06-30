<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    #Reemplazar este correo por el correo electrónico del destinatario
    $mail_to = "eduardoest@lgc.com.mx, eduardoest@gmail.com, mirentasegura@lgc.com.mx, recepcion@lgc.com.mx, luis.ramirez@lgc.com.mx, jessicarojas@lgc.com.mx, alsato.650cc@gmail.com";
    //$mail_to = "red.fear@hotmail.com, alsato.650cc@gmail.com, 140300177@ucaribe.edu.mx";

    # Envío de datos

    $name = str_replace(array("\r", "\n"), array(" ", " "), strip_tags(trim($_POST["name"])));
    $subject = "Nueva solicitud de PÓLIZA JURÍDICA - BURO ARRENDAMIENTO";
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $phone = filter_var(trim($_POST["phone"], FILTER_SANITIZE_STRING));
    $poliza = $_POST["PolizaOptions"];
    echo "<script>
            alert('s: ' " . $poliza . ");
            </script>";
    $lapoliza = "Poliza";

    if ($poliza == 1) {
        $lapoliza = 'Póliza Jurídica Básica';
    } else {
        $lapoliza = 'Póliza Jurídica Total';
    }

    $monto =$_POST["monto"];
    $fecha = $_POST["fecha"];

    if (empty($name) or !filter_var($email, FILTER_VALIDATE_EMAIL) or empty($phone) or empty($subject) or empty($monto)) {
        # Establecer un código de respuesta y salida.
        http_response_code(400);
        echo "Por favor completa el formulario y vuelve a intentarlo.";
        exit;
    }

    # Contenido del correo
    $content = "<strong>" . "BURÓ ARRENDAMIENTO" . "</strong><br>"
        . "El cliente espera que un ejecutivo lo contacte" . "</strong><br><br><br>"
        . "<b>" . "Cliente: " . "</b>" . $name . "<br>"
        . "<b>" . "Correo: " . "</b>" . $email . "<br>"
        . "<b>" . "Teléfono: " . "</b>" . $phone . "<br>"
        . "<b>" . "Tipo de protección: " . "</b>" . $lapoliza . "<br>"
        . "<b>" . "Monto de renta: $" . "</b>" . $monto . "<br>"
        . "<b>" . "Fecha: " . "</b>" . "<br>" . $fecha;


    # Encabezados de correo electrónico.
    $headers  = 'MIME-Version: 1.0' . "\r\n"
        . 'Content-type: text/html; charset=utf-8' . "\r\n"
        . 'From:' . "No reply buro arrendamiento" . '<' . "noreply@buroarrendamiento.com" . '>';

    # Envía el correo.
    $success = mail($mail_to, $subject, $content, $headers);
    if ($success) {
        # Establece un código de respuesta 200 (correcto).
        // http_response_code(300);
        // echo "¡Gracias! Tu mensaje ha sido enviado, te responderemos a la brevedad posible.";
        echo "<script>
            alert('El correo se envio correctamente');
                window.location= '../contratar-poliza.html'
            </script>";
    } else {
        # Establezce un código de respuesta 500 (error interno del servidor).
        http_response_code(500);
        echo "Oops! Algo salió mal, no pudimos enviar tu mensaje.";
    }
} else {
    # No es una solicitud POST, establezce un código de respuesta 403 (prohibido).
    http_response_code(403);
    echo "Hubo un problema con tu envío, intenta de nuevo.";
}
