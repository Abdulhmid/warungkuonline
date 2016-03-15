<?php
//Authentication users
include "../../../config/authentication_users.php";
session_start();
include "../../../config/koneksi.php";
include "../../../config/library.php";

$module=$_GET[module];
$act=$_GET[act];
$referal=$_POST[referal];
$tglpenarikan=$_POST[tgl_penarikan];

$sidnow=session_id();

// Update status komisi
if ($module=='komisiafiliasi' AND $act=='tuntaskomisi'){
	$query="UPDATE afiliasi SET status_komisi   = 'Tuntas',
                                tgl_penuntasan    = '$tgl_sekarang',
                                afiliasi_session  = '$sidnow'
                            WHERE  tgl_penarikan = '$tglpenarikan' AND id_kustomer='$referal' AND status_komisi='Meminta'";
	$sql=mysql_query($query);
	
	if(!$sql){
		echo "$referal<br/>
			  $tglpenarikan<br/>
			  $tgl_sekarang";
		echo "<script>alert('Penuntasan Dana Komisi Gagal')</script>";
		echo "<script>document.location.href='javascript:history.go(-1)'</script>";
		
	}
	else{
		header('location:../../media.php?module=komisiafiliasi');
	}
}


?>
