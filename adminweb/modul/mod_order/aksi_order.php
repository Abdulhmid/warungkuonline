<?php
include "../../../config/authentication_users.php";
session_start();
include "../../../config/koneksi.php";

$module	= $_GET[module];
$act	= $_GET[act];
$id		= $_POST[id];
$status	= $_POST[status_order];

// Hapus order
if ($module=='order' AND $act=='hapus'){

  mysql_query("DELETE FROM orders WHERE id_orders='$_GET[id]'");
  header('location:../../media.php?module='.$module);
}


// Update status order
if ($module=='order' AND $act=='update'){
  // Baca status order
  $cek = mysql_query("SELECT * FROM orders WHERE id_orders = '$id'");
  $rcek = mysql_fetch_array($cek);
  $rstatus = $rcek[status_order];
  
  $query=mysql_query("UPDATE motor, orders, orders_detail
SET orders.status_order='Lunas',
motor.status='Disewa'
WHERE orders_detail.`id_motor`=motor.`id_motor` AND orders.`id_orders`=orders_detail.`id_orders`
 AND orders.`id_orders`='$id'");
  if (!$query){
	echo "<script>window.alert('Update berhasil');
        window.location=('../../media.php?module=order')</script>";
  }else{
	//Update Jmlh beli dan stok produk dimana status awal = baru dan isi post status <> baru
	if ($rstatus == 'Baru' && $status != 'Baru'){
		//Menghitung Jumlah beli di order detail
		$sql = mysql_query("SELECT * FROM orders_detail WHERE id_orders='$id'");
		
		while($r=mysql_fetch_array($sql)){
			$jumlah = '';
			$jmlhbeli	= '';
			$stok		= '';
			$jumlah = $r[jumlah];
			
			//Tampil produk
			$sql2=mysql_query("SELECT * FROM produk WHERE id_produk='$r[id_produk]'");
			$r2=mysql_fetch_array($sql2);
			
			$jmlhbeli = $r2[dibeli] + $jumlah;
			if ($r2[stok] > 0){
				$stok = $r2[stok] - $jumlah;
			}
			else{
				$stok = 0;}
				
			$query2=mysql_query("UPDATE produk SET stok = '$stok',
											  dibeli 	= '$jmlhbeli'
										WHERE id_produk = '$r2[id_produk]'");
		}
		if (!$query2){
	echo "<script>window.alert('Update berhasil');
        window.location=('../../media.php?module=order')</script>";
}
		else{
			header('location:../../media.php?module='.$module);
		}
		
	}else{
		header('location:../../media.php?module='.$module);
	}
  }
}

?>
