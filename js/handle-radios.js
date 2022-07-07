// muestra oculta al seleccionar 50 50
$(document).ready(function () {
    $(".muestra50").click(function (evento) {
        var valor = $(this).val();
        if (valor == 'Divide') {
            $("#div1").show();
        } else {
            $("#div1").hide();
        }
    });
});



//asigna dato a variables ocultas
$(document).ready(function () {
    const tipopoliza = 'basica';
    $(".polizas").click(function (evento) {
        const tipopoliza = $(this).val();
        console.log('tipo:' + tipopoliza);
    });
});





//validando input
function validarEntero(valor) {
    valor = parseInt(valor)
    if (isNaN(valor)) {
        return ""
    } else {
        return valor
    }
}


//calcula costos segun valor de propiedad
function compruebaValidoEntero() {
    let imp = document.querySelector("#importerenta").value;
    console.log("el valor: " + imp);
    enteroValidado = validarEntero(imp)
    if (enteroValidado == "") {
        document.querySelector("#importerenta").value = '0';
        document.querySelector(".mal").innerHTML = `
        <div display="block" style="color: red;">
            Importe incorrecto
        </div>
        `;
        document.querySelector("#importerenta").focus();
    } else {
        $(".mal").hide();

        switch (expresión) {
            case valor1 > 100 || valor1 < 200 :
                    alert ("alv si jalo");
                break;
            case valor2:

                break;
            case valorN:

                break;
            default:

                break;
        }


    }
} 
