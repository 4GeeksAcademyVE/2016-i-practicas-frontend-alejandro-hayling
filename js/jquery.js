$(document).ready(function(){
  $('.bxslider').bxSlider();
});



$(document).ready(function () {
var textreg =  /^[a-zA-Z_áéíóúñ\s]*$/ ;
var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
$("#boton").click(function (){
$(".error").remove();
if( $("#email").val() == "" || !emailreg.test($(".email").val()) ){
            $("#email").focus().after("<span class='error'>Ingrese un email correcto</span>");
            return false;
        }else if( $("#name").val() == "" || !textreg.test($(".name").val()))  {
     		$("#name").focus().after("<span class='error'>Ingrese su nombre correcto</span>");
            return false;
        }else if( $("#apellido").val() == ""|| !textreg.test($(".apellido").val())){
            $(".apellido").focus().after("<span class='error'>Ingrese su apellido correcto</span>");
            return false;
        }else if( $("#pais").val() == "" || !textreg.test($(".pais").val())){
            $("#pais").focus().after("<span class='error'>Ingrese su país correcto</span>");
            return false;
        }else if( $("#empresa").val() == "" ){
            $("#empresa").focus().after("<span class='error'>Ingrese su empresa</span>");
            return false;
        }else if( $("#postal").val() == "" ){
            $("#postal").focus().after("<span class='error'>Ingrese su código postal</span>");
            return false;
        }

    });
   
});

