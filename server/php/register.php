<?php
/**
 * Created by PhpStorm.
 * User: forever
 * Date: 2018/11/22
 * Time: 10:12
 */
header("content-type:text/html;charset=utf-8");
$password = $_POST["password"];
$tel = $_POST["telphone"];

$link = new mysqli("localhost","root","","nubia",3306);

$link -> query("set character set utf8");

$sql = "insert into nubia_register (tel,password) values ('$tel','$password')";
//var_dump($sql);
$res = $link -> query($sql);

if ($res == true) {
    echo "<script>alert('注册成功') </script>";
}else {
    echo "<script>alert('注册失败,3秒后返回');
setTimeout(history.back(),3000);
</script>";
}