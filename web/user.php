<?php
function db_user_by_username($username){
    $username = addslashes($username);
$sql = "SELECT * FROM tb_user where username = '{$username}'";
return db_get_row($sql);
} 

function db_user_by_id($id){
    $sql = "SELECT * FROM tb_user where id = $id";
    return db_get_row($sql);
}

function db_user_get_by_username($username){
    $username = addslashes($username);
    $sql = "SELECT * FROM tb_user where username = '{$username}'";
    return db_get_row($sql);
}
?>