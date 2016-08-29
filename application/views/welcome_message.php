<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?><!DOCTYPE html>
<html lang="ru" xmlns="http://www.w3.org/1999/html">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<link href="/assets/css/main.min.css" type="text/css" rel="stylesheet" />
	<script type="text/javascript" src="/assets/js/core.min.js"></script>
	<script type="text/javascript" src="/assets/js/vendor.min.js"></script>
	<script type="text/javascript" src="/assets/js/main.min.js"></script>

	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Welcome to CodeIgniter</title>
	<link rel="icon" href="/assets/favicon.png">
</head>
<body>

<div class="container">
	<div class="page-header">
		<h1>Welcome to CodeIgniter!</h1>
	</div>
	<p class="lead">
		The page you are looking at is being generated dynamically by CodeIgniter.
		<br>
		If you would like to edit this page you'll find it located at:
		<br>
		<code>application/views/welcome_message.php</code>
		<br>
		The corresponding controller for this page is found at:
		<br>
		<code>application/controllers/Welcome.php</code>
		<br>
		If you are exploring CodeIgniter for the very first time, you should start by reading the <a href="https://codeigniter.com/userguide3/index.html" target="_blank">User Guide.</a>
	</p>
	<p>Page rendered in <strong>{elapsed_time}</strong> seconds. <?php echo  (ENVIRONMENT === 'development') ?  'CodeIgniter Version <strong>' . CI_VERSION . '</strong>' : '' ?></p>
</div>

</body>
</html>