const agregar_nav = document.querySelector("#navbar");
agregar_nav.innerHTML = 

`
    <div class="container">

        <a class="navbar-brand" href="index.html">
            <img class="d-lg-none" src="./img/Buro-Arrendamiento-01.png" alt="mi arrendamiento" width="150px">
            <img class="d-none d-lg-block" src="./img/logo-desk.png" alt="mi arrendamiento">
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-lg-center">
                <li class="nav-item">
                    <a class="nav-link mx-2" href="index.html">Inicio</a>
                </li>
                <li class="nav-item dropdown mx-2">
                    <a 
                        class="nav-link dropdown-toggle" 
                        href="#" id="navbarScrollingDropdown" 
                        role="button" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                    >
                        Pólizas Jurídicas
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li><a class="dropdown-item" href="proteccion-basica.html">Póliza Jurídica Básica</a></li>
                        <li><a class="dropdown-item" href="proteccion-total.html">Póliza Jurídica Total</a></li>
                        <li><a class="dropdown-item" href="requisitos.html">Requisitos</a></li>
                        <li><a class="dropdown-item" href="precios.html">Precios</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown mx-2">
                    <a 
                        class="nav-link dropdown-toggle" 
                        href="#" id="navbarScrollingDropdown" 
                        role="button" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                    >
                        Servicios
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li><a class="dropdown-item" href="investigacion.html">Investigación</a></li>
                        <li><a class="dropdown-item" href="extincion.html">Extinción de Dominio</a></li>
                        <li><a class="dropdown-item" href="firma.html">Firma Electrónica</a></li>
                        <!--<li><a class="dropdown-item" href="https://documents.buroarrendamiento.com/contratos/simple">Contrato Gratis</a></li>-->
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link mx-2" href="contacto.html">Contáctanos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mx-2" href="nueva-poliza.html">CONTRATA POLIZA</a>
                </li>
            </ul>
            
        </div>
    </div> 
`

{/* <div class="my2-sm-4 my-md-0 my-lg-0 my-2">
    <a class="btn-contrato" href="https://documents.buroarrendamiento.com/contratos/simple" >Crear Contrato</a>    
</div> */}