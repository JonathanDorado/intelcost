<?php

include_once('db_class.php');

$mysql = new Db_class('localhost', 'root', '', 'intelcost_bienes');


try {
    $bienes = $mysql->get('bienes_guardados', 'direccion,ciudad,telefono,codigo_postal,tipo,precio');
//    print_r($bienes);

    for ($i = 0; $i < count($bienes); $i++) {
        echo '<div class="row">
                    <div class="form-group">
                    <b>Dirección:</b> ' . $bienes[$i]['direccion'] .
        '<br><b>Ciudad:</b>' . $bienes[$i]['ciudad'] .
        '<br><b>Teléfono:</b>' . $bienes[$i]['telefono'] .
        '<br><b>Codigo Postal:</b>' . $bienes[$i]['codigo_postal'] .
        '<br><b>Tipo:</b>' . $bienes[$i]['tipo'] .
        '<br><b>Precio:</b>' . $bienes[$i]['precio'] . '</div>
                </div>';
    }
//
//    foreach ($bienes as $bien) {
//        echo '<div class="row">
//                    <div class="form-group">
//                    <b>Dirección:</b> ' + $bien['direccion'] +
//        '<br><b>Ciudad:</b>' + $bien['ciudad'] +
//        '<br><b>Teléfono:</b>' + $bien['telefono'] +
//        '<br><b>Codigo Postal:</b>' + $bien['codigo_postal'] +
//        '<br><b>Tipo:</b>' + $bien['tipo'] +
//        '<br><b>Precio:</b>' + $bien['precio'] + '</div>
//                </div>';
//    }
//    echo $mysql->num_rows(); // number of rows returned
} catch (Exception $e) {
    echo 'Caught exception: ', $e->getMessage();
}
