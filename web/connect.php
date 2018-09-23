<?php
//Ham ket noi
function connect(){
    global $conn;
    $conn = mysqli_connect('localhost','root','','web');
    
    if(!$conn){
        echo "Loi ket noi";
    }
    else {
        echo "Ket noi thanh cong";
    }
}

//Ham ngat ket noi
function disconnect(){
    global $conn;
    if($conn){
        mysqli_close($conn);
    }
}
?>