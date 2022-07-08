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
    });

    //ejecuta cuando radios de años cambian
    const dur = '1';
    $(".duracion").click(function (evento) {
        const dur = $(this).val();
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
function calculaprecioporduracion(dato, valortabla) {
    switch (dato) {
        case "1":
            years = valortabla * 1;
            break;
        case "2":
            years = valortabla * 2;
            break;
        case "3":
            years = valortabla * 3;
            break;
        case "4":
            years = valortabla * 4;
            break;
        case "5":
            years = valortabla * 5;
            break;

        default:
            console.log("no entro a ningun case");
            years = 0;
            break;
    }
    return years;
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
            //calcula poliza basica
            if (imp <= 3000) {
                var valortabla = 2650;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 3001 && imp <= 5000) {
                var valortabla = 2800;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 5001 && imp <= 7000) {
                var valortabla = 3000;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 7001 && imp <= 10000) {
                var valortabla = 3300;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 10001 && imp <= 15000) {
                var valortabla = 3650;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 15001 && imp <= 20000) {
                var valortabla = 4200;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 20001 && imp <= 25000) {
                var valortabla = 5250;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 25001 && imp <= 30000) {
                var valortabla = 6300;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 30001 && imp <= 35000) {
                var valortabla = 7350;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 35001 && imp <= 40000) {
                var valortabla = 8400;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 40001 && imp <= 45000) {
                var valortabla = 9450;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 45001 && imp <= 50000) {
                var valortabla = 10500;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 50001 && imp <= 55000) {
                var valortabla = 11550;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 55001 && imp <= 60000) {
                var valortabla = 12600;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 60001 && imp <= 65000) {
                var valortabla = 13650;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 65001 && imp <= 70000) {
                var valortabla = 14700;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 70001 && imp <= 75000) {
                var valortabla = 15750;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 75001 && imp <= 80000) {
                var valortabla = 16800;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 80001 && imp <= 85000) {
                var valortabla = 17850;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 85001 && imp <= 90000) {
                var valortabla = 18900;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 90001 && imp <= 95000) {
                var valortabla = 19950;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 95001 && imp <= 100000) {
                var valortabla = 21000;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 100001 && imp <= 105000) {
                var valortabla = 22050;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
            if (imp >= 105001) {
                var valortabla = imp * 0.30;
                var result = calculaduracion(duracion, valortabla);
                var result1 = calculaprecioporduracion(duracion, valortabla);
                res1 = numberFormat.format(result1);
                document.getElementById("totalBB").value = `
                    ${result1}
                `;
                document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                res = numberFormat.format(result);
                document.getElementById("totalAA").value = `
                    ${result}
                `;
                document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
            }
        } else {
            //calcula poliza total
            if (tipopoliza == 'total') {
                if (imp <= 3000) {
                    var valortabla = 3200;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 3001 && imp <= 5000) {
                    var valortabla = 3850;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 5001 && imp <= 7000) {
                    var valortabla = 4050;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 7001 && imp <= 10000) {
                    var valortabla = 4500;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 10001 && imp <= 15000) {
                    var valortabla = 5600;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 15001 && imp <= 20000) {
                    var valortabla = 6800;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 20001 && imp <= 25000) {
                    var valortabla = 8500;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 25001 && imp <= 30000) {
                    var valortabla = 10200;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 30001 && imp <= 35000) {
                    var valortabla = 11900;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 35001 && imp <= 40000) {
                    var valortabla = 13600;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 40001 && imp <= 45000) {
                    var valortabla = 15300;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 45001 && imp <= 50000) {
                    var valortabla = 17000;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 50001 && imp <= 55000) {
                    var valortabla = 18700;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 55001 && imp <= 60000) {
                    var valortabla = 20400;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 60001 && imp <= 65000) {
                    var valortabla = 22100;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 65001 && imp <= 70000) {
                    var valortabla = 23800;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 70001 && imp <= 75000) {
                    var valortabla = 25500;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 75001 && imp <= 80000) {
                    var valortabla = 27200;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 80001 && imp <= 85000) {
                    var valortabla = 28900;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 85001 && imp <= 90000) {
                    var valortabla = 30600;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 90001 && imp <= 95000) {
                    var valortabla = 32300;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 95001 && imp <= 100000) {
                    var valortabla = 34000;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 100001 && imp <= 105000) {
                    var valortabla = 35700;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
                if (imp >= 105001) {
                    var valortabla = imp * 0.40;
                    var result = calculaduracion(duracion, valortabla);
                    var result1 = calculaprecioporduracion(duracion, valortabla);
                    res1 = numberFormat.format(result1);
                    document.getElementById("totalBB").value = `
                    ${result1}
                `;
                    document.querySelector("#totalB").innerHTML = `
                    ${res1}
                `;
                    res = numberFormat.format(result);
                    document.getElementById("totalAA").value = `
                    ${result}
                `;
                    document.querySelector("#totalA").innerHTML = `
                    ${res}
                `;
                }
            }
        }

    }
} 
