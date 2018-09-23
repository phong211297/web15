<?php
$module = isset($_GET['m']) ? $_GET['m'] : '';
$action = isset($_GET['a']) ? $_GET['a'] : '';

if(empty($module) || empty($action)){
    $module = 'common';
    $action = 'login';
}

$path = $action.'.php';

if(file_exists($path)){
    include_once('session.php');
    include_once('database.php');
    include_once('helper.php');
    include_once('role.php');
    include_once($path);
}
else{
    include_once('404.php');
}
?>  