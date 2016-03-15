<?php
//Mencegah direct akses
$pathfile='../config/authentication_users.php';
if (!file_exists($pathfile)){
	//echo"<meta http-equiv='refresh' content='0;url=www.domainanda.com/index.php'>";
	echo"<meta http-equiv='refresh' content='0;url=../../../index.php'>";
}
else{

  $aksi="modul/mod_afiliasi/aksi_afiliasi.php";
  $path="modul/mod_afiliasi";
switch($_GET[act]){
  // Tampil Hasil Kunjungan, Penjualan dari afiliasi beserta total komisi
  default:
	  include "$path/tampil_hasil_afiliasi.php";
		 
	break;
  
/*--------------------------------------------------------------------------------------------
								Modul referal yg meminta komisi afilasi
----------------------------------------------------------------------------------------------*/
  case "komisiperreferal":
	include "$path/lihat_komisi_perreferal.php";
		 
  break;  
  
  
  /*----------------------------------------------------------------------------------------------------------------------------------------- 
	------------------------------------>Detail komisi yang akan dibayarkan ke referal<------------------------------------------------------
  ------------------------------------------------------------------------------------------------------------------------------------------*/
  case "detailkomisi";
	include "$path/detail_komisi_perreferal.php";	
  break;
  
  /*---------------------------------------------------------------------------------
							Modul history penuntasan komisi
  -----------------------------------------------------------------------------------*/
  case "historypenuntasan";
	include "$path/history_penuntasan_komisi.php";
  break;
}
}
?>
