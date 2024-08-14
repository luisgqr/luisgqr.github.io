let menuVisible = false;
//funcion que oculta o muestra el menu
function mostrarOcultarmenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //se oculta el menu cuando se selecciona una opcion
    document.getElementById("nav").classList ="";
    menuVisible = false;
}
//funcion que aplica las animaciones de habilidades
function efectoHabilidades(){
    var habilidades=document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades>=300){
        let habilidades=document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("sql");
        habilidades[4].classList.add("office");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("equipo");
        habilidades[7].classList.add("responsable");
        habilidades[8].classList.add("dedicado");
    }
}

//detecto el scrolling para aplicar la animacion de la barra
window.onscroll = function(){
    efectoHabilidades();
}

//caputarar datos de formulario
function captura(){
    var nombre=document.getElementById("nom").value;
    var celular=document.getElementById("tel").value;
    var correo=document.getElementById("cor").value;
    var asunto=document.getElementById("asu").value;
    var mensaje=document.getElementById("men").value;

    if(nombre==""){
        alert("Ingresar nombre");
        document.getElementById("nom").focus();
    }else{
        if(celular==""){
            alert("Ingresar teléfono");
            document.getElementById("tel").focus();
        }else{
            if(correo==""){
                alert("Ingresar correo");
                document.getElementById("cor").focus();
            }else{
                if(asunto==""){
                    alert("Ingresar asunto");
                    document.getElementById("asu").focus();
                }else{
                    if(mensaje==""){
                        alert("Ingresar mensaje");
                        document.getElementById("men").focus();
                    }else{
                        console.log(nombre +";"+ celular +";"+ correo +";"+ asunto +";"+ mensaje);
                        alert("Enviado");
                        document.getElementById("nom").value="";
                        document.getElementById("tel").value="";
                        document.getElementById("cor").value="";
                        document.getElementById("asu").value="";
                        document.getElementById("men").value="";
                    }          
                }
            }
        }
    }
}