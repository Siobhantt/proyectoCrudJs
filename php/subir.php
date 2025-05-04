<?php
    $carpeta="../ficheros/";
    $nombreOriginal=basename($_FILES["fichero"]["name"]);
    $uploadOK=1;
    $formatoImagen=strtolower(pathinfo($nombreOriginal, PATHINFO_EXTENSION));
    $nombreUnico = md5(uniqid());
    $nombreFinal=$carpeta . $nombreUnico . "." . $formatoImagen;
    $imagenAMostrar ="ficheros/" . $nombreUnico . "." . $formatoImagen;

    $check= getimagesize($_FILES["fichero"]["tmp_name"]);
    if($check===false){
        echo "El archivo no es una imagen, solo se pueden subir imagenes";
        $uploadOK=0;
    }

    if($_FILES["fichero"]["size"]>10000000){
        echo "El archivo es demasiado grande, el maximo es 9,5 mb";
        $uploadOK=0;
    }

    if($uploadOK===1){
        if(move_uploaded_file($_FILES["fichero"]["tmp_name"], $nombreFinal)){
            echo $imagenAMostrar;
        }else{
            echo "Lo siento, hubo un error";
        }
    }

?>