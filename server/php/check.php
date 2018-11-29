<?php
  	$tel = $_GET["telphone"];
    $link = new mysqli("localhost","root","","nubia",3306);
    $link -> query("set names utf8");
    $sql = "select tel from nubia_register";
    $result = $link -> query($sql);
    while ($res = $result -> fetch_assoc()){
        if ($res["tel"] === $tel) {
            echo "false";
            break;
        }
//        $res = $result -> fetch_assoc();
    }


?>