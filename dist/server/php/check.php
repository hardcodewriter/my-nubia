<?php
    header('Access-Control-Allow-Origin:*');
  	$tel = $_GET["telphone"];
    $link = new mysqli("localhost","root","","nubia",3306);
    $link -> query("set names utf8");
    $sql = "select tel from nubia_register";
    $result = $link -> query($sql);
    $return = 0;
    while ($res = $result -> fetch_assoc()){
        if ($res["tel"] === $tel) {
            $return=1;
            break;
        }
    }
    echo $return;
?>