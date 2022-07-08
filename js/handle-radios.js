$(document).ready(function () {
    // muestra oculta al seleccionar 50 50
    $(".muestra50").click(function (evento) {
        var valor = $(this).val();
        if (valor == 'Divide') {
            $("#div1").show();
        } else {
            $("#div1").hide();
        }
    });

    //ejecuta cuando cambia radio de polizas
    const tipopoliza = 'basica';
    $(".polizas").click(function (evento) {
        const tipopoliza = $(this).val();
        console.log('tipo:' + tipopoliza);
    });

    //ejecuta cuando radios de años cambian
    const dur = '1';
    $(".duracion").click(function (evento) {
        const dur = $(this).val();
        console.log('duracion:' + dur);
        compruebaValidoEntero();
    });
});




//validando input importe de renta
function validarEntero(valor) {
    valor = parseInt(valor)
    if (isNaN(valor)) {
        return ""
    } else {
        return valor
    }
}
//calcula costos
function calculaduracion(dato, valortabla) {
    switch (dato) {
        case "1":
            years = valortabla * 1;
            val = years - (years * 0.10);
            result = val;
            break;
        case "2":
            years = valortabla * 2;
            val = years - (years * 0.10);
            result = val;
            break;
        case "3":
            years = valortabla * 3;
            val = years - (years * 0.10);
            result = val;
            break;
        case "4":
            years = valortabla * 4;
            val = years - (years * 0.10);
            result = val;
            break;
        case "5":
            years = valortabla * 5;
            val = years - (years * 0.10);
            result = val;
            break;

        default:
            console.log("no entro a ningun case");
            result = 0;
            break;
    }
    return result;
}

//calcula costos segun valor de propiedad
function compruebaValidoEntero() {
    let imp = document.querySelector("#importerenta").value;
    let tipopoliza = $('input[name="tipopoliza"]:checked').val();
    //let tipopprop = $('input[name="tipopropietario"]:checked').val();
    let duracion = $('input[name="duracion"]:checked').val();

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
        const options = { style: 'currency', currency: 'USD' };
        const numberFormat = new Intl.NumberFormat('en-US', options);

        if (tipopoliza == 'basica') {
            console.log("poliza basica");
            if (imp <= 3000) {
                var valortabla = 2650;
                var result = calculaduracion(duracion, valortabla);

                // imp = imp + (imp * 0.10);
                // imp = numberFormat.format(imp);
                res = numberFormat.format(result);
                // document.querySelector("#totalB").innerHTML = `
                //     ${imp}
                // `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 3001 && imp <= 5000) {
                var valortabla = 2800;
                var result = calculaduracion(duracion, valortabla);

                // imp = imp + (imp * 0.10);
                // imp = numberFormat.format(imp);
                res = numberFormat.format(result);
                // document.querySelector("#totalB").innerHTML = `
                //     ${imp}
                // `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 5001 && imp <= 7000) {
                var valortabla = 3000;
                var result = calculaduracion(duracion, valortabla);

                // imp = imp + (imp * 0.10);
                // imp = numberFormat.format(imp);
                res = numberFormat.format(result);
                // document.querySelector("#totalB").innerHTML = `
                //     ${imp}
                // `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
        } else {
            if (tipopoliza == 'total') {
                console.log("poliza total");
                if (imp <= 3000) {
                    var valortabla = 3200;
                    var result = calculaduracion(duracion, valortabla);

                    // imp = imp + (imp * 0.10);
                    // imp = numberFormat.format(imp);
                    res = numberFormat.format(result);
                    //     document.querySelector("#totalB").innerHTML = `
                    //     ${imp}
                    // `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 3001 && imp <= 5000) {
                    var valortabla = 3850;
                    var result = calculaduracion(duracion, valortabla);

                    // imp = imp + (imp * 0.10);
                    // imp = numberFormat.format(imp);
                    res = numberFormat.format(result);
                    //     document.querySelector("#totalB").innerHTML = `
                    //     ${imp}
                    // `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 5001 && imp <= 7000) {
                    var valortabla = 4050;
                    var result = calculaduracion(duracion, valortabla);

                    // imp = imp + (imp * 0.10);
                    // imp = numberFormat.format(imp);
                    res = numberFormat.format(result);
                    //     document.querySelector("#totalB").innerHTML = `
                    //     ${imp}
                    // `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
            }
        }

    }
} 
