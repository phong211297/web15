<?php
function session_set($key,$value){
    $_SESSION[$key] = $value;

}

function session_get($key){
    return (isset($_SESSION[$key]));
}

function session_delete($key){
    if(isset($_SESSION[$key])){
        unset($_SESSION[$key]);
    }
}
?>