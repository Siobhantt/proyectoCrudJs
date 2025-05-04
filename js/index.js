let albumes =[];
let desplegado;

//Esto es un evento
document.querySelector(".mas").addEventListener("click",mas);
document.querySelector(".ampliacion").addEventListener("click",cerrar);

function mas(){
    const nombre = document.querySelector("#album").value.trim();
    if (nombre){
        albumes.push({album:nombre,imagenes:[]});
        escribir();
    }
}

function escribir(){
    document.querySelector(".albumes").innerHTML="";
    albumes.map((valor, indice) =>{
        document.querySelector(".albumes").insertAdjacentHTML("beforeend",`
            <div class="cadaAlbum" onclick="desplegar(this)" luisona="${indice}">
                <div class="nombreAlbum"
                contenteditable="true"
                onfocues="activar(this)"
                onblur="desactivar(this)"
                onkeydown=detectarEnter(this,event)">
                        ${valor.album}
                    </div>
            </div>
            `)
    })
}

function activar(){

}

function desactivar(){
    
}

function detectarEnter(){
    
}

function desplegar(yo){
    document.querySelector(".miAlbum").style.display="block";
    desplegado=(yo.getAttribute("luisona"));
    const datos=albumes[desplegado];
    document.querySelector(".miAlbum").innerHTML=`
    <h1>${datos.album}</h1>
    <div class="imagenes"></div>
    <div class="caja">
        <input type="file" name="fichero" id="fichero" accept="image/*"/>
        <button id="enviar" onclick="enviar()">Subir fichero</button>
    </div>
    `;
    if (datos.imagenes.length>0){
            datos.imagenes.map((valor)=>{
                // dibuje las imagenes
            })
    }

    
}

function enviar(){
        if(fichero.files.length>0){
            let data = new FormData();
            data.append('fichero', fichero.files[0]);
            fetch('php/subir.php',{
                method: 'POST',
                body:data
            })
            .then(response => response.text())
            .then(data => {
                albumes[desplegado].imagenes.push(data.trim());
                codigoHTML(data);
                escribir();
            })
        }
}

function codigoHTML(dato){
        document.querySelector(".imagenes").insertAdjacentHTML("beforeend",`
            <div class="imagen"
                onmouseover="mostrar(this)"
                onmouseout="ocultar(this)"
                onclick="ampliar('${dato}')" alt=""/>
                <img src="${dato}" alt=""/>
                <img class="papelera" src="img/papelera.png" onclick="eliminarImagen(this, '${dato}', event)"/>
                
            </div>
            `)
}

function mostrar(yo){
    if( yo.querySelector(".papelera").style.display==="block"){
        yo.querySelector(".papelera").style.display="none";
    }else{
        yo.querySelector(".papelera").style.display="block";
    }
        
}

function ampliar(miImagen){
        document.querySelector(".ampliacion").style.display="block";
        document.querySelector(".imagenGrande").innerHTML=`
        <img src="${miImagen}"/>
        `;
}

function cerrar(){
    this.style.display="none";
}

function eliminarImagen(yo, miImagen,e){
    
}