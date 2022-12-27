function encriptar (){
    var texto = document.getElementById("textoAEncriptar").value.toLowerCase();

    
    var textoEncriptado = texto.replaceAll("e","enter");
    var textoEncriptado = textoEncriptado.replaceAll("i","imes");
    var textoEncriptado = textoEncriptado.replaceAll ("a","ai");
    var textoEncriptado = textoEncriptado.replaceAll("o","ober");
    var textoEncriptado = textoEncriptado.replaceAll("u","uber");

    document.getElementById("textoEncriptado").innerHTML = textoEncriptado;

}

function desencriptar (){
    var texto2 = document.getElementById("textoAEncriptar").value.toLowerCase();

    var textoDesencriptado = texto2.replaceAll("ai", "a");
    var textoDesencriptado = textoDesencriptado.replaceAll("enter","e");
    var textoDesencriptado = textoDesencriptado.replaceAll("imes","i");
    var textoDesencriptado = textoDesencriptado.replaceAll("ober","o");
    var textoDesencriptado = textoDesencriptado.replaceAll("uber","u");

    document.getElementById("textoEncriptado").innerHTML = textoDesencriptado;

}


function copiar (){
    var copiado = document.querySelector("#textoEncriptado");
    copiado.select();
    document.execCommand("copy");
}

function pegar (){
    var pegado = document.querySelector("#textoEncriptado").focus();
    pegado.select();
    document.execCommand("paste");

}
