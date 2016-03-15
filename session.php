<?php
session_start();
if(!session_is_registered('id_member')) {
	header("location:login_update.php?error=Maaf, Anda Belum Login");	
}
?>