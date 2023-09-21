function crearTablaConDatos() {

    let tabla = document.createElement("table")

    /* 1º fila */
    let tr1 = document.createElement("tr") 
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let textoAMeter = document.getElementById("nombre").value
    td1.appendChild(document.createTextNode("Nombre"))
    td2.appendChild(document.createTextNode(textoAMeter))

    tr1.appendChild(td1)
    tr1.appendChild(td2)

    tabla.appendChild(tr1)


    /* 2º fila */
    tr1 = document.createElement("tr") 
    td1 = document.createElement("td")
    td2 = document.createElement("td")
    textoAMeter = document.getElementById("apellidos").value
    td1.appendChild(document.createTextNode("Apellidos"))
    td2.appendChild(document.createTextNode(textoAMeter))

    tr1.appendChild(td1)
    tr1.appendChild(td2)

    tabla.appendChild(tr1)


    /* 3º fila */
    tr1 = document.createElement("tr") 
    td1 = document.createElement("td")
    td2 = document.createElement("td")
    textoAMeter = document.getElementById("dni").value
    td1.appendChild(document.createTextNode("DNI/NIF"))
    td2.appendChild(document.createTextNode(textoAMeter))

    tr1.appendChild(td1)
    tr1.appendChild(td2)

    tabla.appendChild(tr1)


    /* 4º fila */
    tr1 = document.createElement("tr") 
    td1 = document.createElement("td")
    td2 = document.createElement("td")
    textoAMeter = document.getElementById("telefono").value
    td1.appendChild(document.createTextNode("Teléfono"))
    td2.appendChild(document.createTextNode(textoAMeter))
 
    tr1.appendChild(td1)
    tr1.appendChild(td2)
 
    tabla.appendChild(tr1)


    /* 5º fila */
    tr1 = document.createElement("tr") 
    td1 = document.createElement("td")
    td2 = document.createElement("td")
    textoAMeter = document.getElementById("email").value
    td1.appendChild(document.createTextNode("Email"))
    td2.appendChild(document.createTextNode(textoAMeter))
 
    tr1.appendChild(td1)
    tr1.appendChild(td2)
 
    tabla.appendChild(tr1)


    /* 6º fila */
    tr1 = document.createElement("tr") 
    td1 = document.createElement("td")
    td2 = document.createElement("td")
    textoAMeter = document.getElementById("fechaNacimiento").value
    td1.appendChild(document.createTextNode("Fecha de nacimiento"))
    td2.appendChild(document.createTextNode(textoAMeter))
 
    tr1.appendChild(td1)
    tr1.appendChild(td2)
 
    tabla.appendChild(tr1)


    /* 7º fila */
    tr1 = document.createElement("tr") 
    td1 = document.createElement("td")
    td2 = document.createElement("td")
    textoAMeter = document.getElementById("nacionalidad").value
    td1.appendChild(document.createTextNode("Nacionalidad"))
    td2.appendChild(document.createTextNode(textoAMeter))
 
    tr1.appendChild(td1)
    tr1.appendChild(td2)
 
    tabla.appendChild(tr1)


    /* 8º fila */
    tr1 = document.createElement("tr") 
    td1 = document.createElement("td")
    td2 = document.createElement("td")
    textoAMeter = document.getElementById("lugarVivienda").value
    td1.appendChild(document.createTextNode("Lugar donde reside"))
    td2.appendChild(document.createTextNode(textoAMeter))
 
    tr1.appendChild(td1)
    tr1.appendChild(td2)
 
    tabla.appendChild(tr1)


    /* 9º fila */
    tr1 = document.createElement("tr") 
    td1 = document.createElement("td")
    td2 = document.createElement("td")
    textoAMeter = document.querySelector('input[name="estadoCivil"]:checked').value;
    td1.appendChild(document.createTextNode("Estado civil"))
    td2.appendChild(document.createTextNode(textoAMeter))
 
    tr1.appendChild(td1)
    tr1.appendChild(td2)
 
    tabla.appendChild(tr1)


    /* 10º fila */
    tr1 = document.createElement("tr") 
    td1 = document.createElement("td")
    td2 = document.createElement("td")
    textoAMeter = document.querySelector('input[name="hijos"]:checked').value;
    td1.appendChild(document.createTextNode("¿Tiene hijos?"))
    td2.appendChild(document.createTextNode(textoAMeter))
 
    tr1.appendChild(td1)
    tr1.appendChild(td2)
 
    tabla.appendChild(tr1)


    /* 11º fila */
    tr1 = document.createElement("tr") 
    td1 = document.createElement("td")
    td2 = document.createElement("td")
    textoAMeter = document.getElementById("preferencia").value
    td1.appendChild(document.createTextNode("Preferencia en software"))
    td2.appendChild(document.createTextNode(textoAMeter))
 
    tr1.appendChild(td1)
    tr1.appendChild(td2)
 
    tabla.appendChild(tr1)


    /* 12º fila */
    tr1 = document.createElement("tr") 
    td1 = document.createElement("td")
    td2 = document.createElement("td")
    textoAMeter = document.createTextNode("Lo que pone en el cuadro")
    td1.appendChild(document.createTextNode("Descripción del empleo"))
    td2.appendChild(textoAMeter)
 
    tr1.appendChild(td1)
    tr1.appendChild(td2)
 
    tabla.appendChild(tr1)
    

    /*FINAL (lo une a la tabla, y lo pone en la web)*/
    let resultado = document.getElementById("resultado")
    tabla.style.border = "solid"

    resultado.appendChild(tabla)
    resultado.style.textAlign = "center"

    /*Hago desaparecer el botón de creación de tabla, para que
    no se pueda generar más de una*/
    document.getElementById("crearTabla").style.display = "none"
}


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  