<?php

include_once('db_class.php');

$mysql = new Db_class('localhost', 'root', '', 'intelcost_bienes');


//
//print_r($_REQUEST);
//die();


// insert post
try {
    $mysql->insert('bienes_guardados', array('bien_id' => $_REQUEST['id'], 'direccion' => $_REQUEST['direccion'], 'ciudad' => $_REQUEST['ciudad'], 'telefono' => $_REQUEST['telefono'], 'codigo_postal' => $_REQUEST['codigo_postal'], 'tipo' => $_REQUEST['tipo'], 'precio' => $_REQUEST['precio']));
    echo $mysql->insert_id(); // id of newly inserted post
    echo json_encode(array("success" => "Bien almacenado!"));
} catch (Exception $e) {
    echo 'Caught exception: ', $e->getMessage();
    echo json_encode(array("error" => "Error al guardar"));
}
//
//
//// get all posts
//try {
//    $posts = $mysql->get('bienes_guardados');
//    print_r($posts);
//    echo $mysql->num_rows(); // number of rows returned
//} catch (Exception $e) {
//    echo 'Caught exception: ', $e->getMessage();
//}
//
//// get all post titles and authors
//try {
////    $posts = $mysql->get('posts', array('title','author');
//    // or
//    $posts = $mysql->get('bienes_guardados', 'direccion,ciudad');
//    print_r($posts);
//    echo $mysql->last_query(); // the raw query that was ran
//} catch (Exception $e) {
//    echo 'Caught exception: ', $e->getMessage();
//}
//
//// get one post
//try {
//    $post = $mysql->limit(1)->get('bienes_guardados');
//    print_r($post);
//} catch (Exception $e) {
//    echo 'Caught exception: ', $e->getMessage();
//}
//
//// get post with an id of 1
//try {
//    $post = $mysql->where('id', 1)->get('bienes_guardados');
//    // or
////    $post = $mysql->where(array('id', 1))->get('bienes_guardados');
//    print_r($post);
//} catch (Exception $e) {
//    echo 'Caught exception: ', $e->getMessage();
//}
//
//// get all posts by the author of "John Doe"
//try {
//    $posts = $mysql->where(array('id' => '1'))->get('bienes_guardados');
//    print_r($posts);
//} catch (Exception $e) {
//    echo 'Caught exception: ', $e->getMessage();
//}
//
//
//
//// update post 1
//try {
//    $mysql->where('id', 1)->update('bienes_guardados', array('direccion' => 'New Title'));
//} catch (Exception $e) {
//    echo 'Caught exception: ', $e->getMessage();
//}
//
//// delete post 1
//try {
//    $mysql->where('id', 1)->delete('bienes_guardados');
//} catch (Exception $e) {
//    echo 'Caught exception: ', $e->getMessage();
//}
