<?php
	session_start();
	include "config/koneksi.php";
	
	 $sql=mysql_query("UPDATE produk SET keterangan = '$_POST[keterangan]' WHERE id_produk = '$_POST[produk]'");
  	
	if($sql){
		 echo "<script>alert('Berhasil.')</script>";
  echo "<meta http-equiv='refresh' content='0;url=store'>";		
	}
	else{
  echo "<script>alert('Gagal.')</script>";
  echo "<meta http-equiv='refresh' content='0;url=store'>";

	}
?>