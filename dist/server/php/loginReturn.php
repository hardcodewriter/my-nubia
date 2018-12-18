<?php
/**
 * Created by PhpStorm.
 * User: forever
 * Date: 2018/11/22
 * Time: 10:12
 */
header('Access-Control-Allow-Origin: *');
header("content-type:text/html;charset=utf-8");
$password = $_REQUEST["password"];
$tel = $_REQUEST["telphone"];

$link = new mysqli("localhost","root","","nubia",3306);

$link -> query("set character set utf8");

$sql = "select * from nubia_register";
//var_dump($sql);
$result = $link -> query($sql);

while ($res = $result -> fetch_assoc()){
    if (($res["tel"] == $tel) && ($res["password"] == $password)) {
        echo "<script>  
        location.assign('../../app/shop-mall.html');
        </script>";
    }
}