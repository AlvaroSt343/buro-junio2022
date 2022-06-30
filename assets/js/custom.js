$(function () {

  
    $("body").on("submit",".susForm", function (e) {
            event.preventDefault();
            sendSusForm();
            return false;
    });
    
      function sendSusForm(){
      
        var email=$(`input[name=emailSus]`).val();
     
        var form_data=new FormData();
        form_data.append("email",email);
        
        $.ajax({
            url: "https://documents.miarrendamiento.com/sendSusForm",
            data: form_data,
            cache:false,
            contentType:false,
            processData:false,
            data:form_data,
            dataType: "JSON",
            type: "POST",
            statusCode: {
                200: function (res) {
                    let type="success";
                    if(res.error){
                        type="error";
                    }
                  Swal.fire({
                      title: res.title,
                      text: res.message,
                      icon: res.color,
                      confirmButtonText: 'Cool'
                    })
                    /*
                    setTimeout(()=>{
                        location.reload();

                    },1500);*/
                }
            },
        });
    }

    $("body").on("submit",".contactForm", function (e) {
            event.preventDefault();
            sendContactForm();
            return false;
    });
    
    function sendContactForm(){
        var nombre=$(`input[name=name]`).val();
        var email=$(`input[name=email]`).val();
        var phone=$(`input[name=phone]`).val();
        var message=$(`textarea[name=message]`).val();
        var form_data=new FormData();
    
        form_data.append("nombre",nombre);
        form_data.append("email",email);
        form_data.append("telefono",phone);
        form_data.append("mensaje",message);
        
        $.ajax({
            url: "https://documents.miarrendamiento.com/sendContactForm",
            data: form_data,
            cache:false,
            contentType:false,
            processData:false,
            data:form_data,
            dataType: "JSON",
            type: "POST",
            statusCode: {
                200: function (res) {
                    let type="success";
                    if(res.error){
                        type="error";
                    }
                  Swal.fire({
                      title: res.title,
                      text: res.message,
                      icon: res.color,
                      confirmButtonText: 'Cool'
                    })
                    /*
                    setTimeout(()=>{
                        location.reload();

                    },1500);*/
                }
            },
        });
    }
});