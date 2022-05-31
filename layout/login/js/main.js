
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

// validação do login
const btn = document.querySelector("#enviar")

btn.addEventListener("click" , function(e){

    e.preventDefault()

    const user = document.querySelector("#user")
    const password = document.querySelector("#password")
    
    const value = user.value
    const valuePassword = password.value
    console.log(value)

    if(value == "aluno.victor@gmail.com" && valuePassword == "123" ){
        window.location.replace("../aluno/src/index.html")
    }
    else if(value == "pais.mateus@gmail.com" && valuePassword == "123" ){
        window.location.replace("../aluno/src/index.html")
    }
    else if(value == "financeiro.@gmail.com" && valuePassword == "123" ){
        window.location.replace("../financeiro/src/index.html")
    }
    else if(value == "professor.@gmail.com" && valuePassword == "123" ){
        window.location.replace("../professor/src/index.html")
    }
    else if(value == "secretaria.@gmail.com" && valuePassword == "123" ){
        window.location.replace("../secretaria/src/index.html")
    }
     else{
      alert("Usuario não encontrado")
      location.reload();
     }

})