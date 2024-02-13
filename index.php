<?php
session_start();

$error_message = "";

if(isset($_POST["login"])) {

	if($_POST["user_name"] == "Kanure0X" && $_POST["password"] == "Yuji7720") {
		$_SESSION["user_name"] = $_POST["user_name"];
		$login_success_url = "login_success.php";
		header("Location: {$login_success_url}");
		exit;
	}
$error_message = "※ID、もしくはパスワードが間違っています。<br>　もう一度入力して下さい。";
}
?>
