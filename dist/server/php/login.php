<?php
	header('Access-Control-Allow-Origin:*');
	header("content-type:text/html;charset=utf-8");
	$password = $_REQUEST["password"];
	$tel = $_REQUEST["telphone"];
	$link = new mysqli("localhost","root","","nubia",3306);
	$link -> query("set character set utf8");
	$sql = "select * from nubia_register";
	//var_dump($sql);
	
	$result = $link -> query($sql);
	while ($res = $result -> fetch_assoc()){
        if ($res["tel"] == $tel&&$res["password"] == $password) {
			echo "true";
            break;
        }else{	
			echo "false";
			echo $password;
			// echo $res["password"];
		}
	}
?>