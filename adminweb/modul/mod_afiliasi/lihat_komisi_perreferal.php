<?php
//Mencegah direct akses
$pathfile='../config/authentication_users.php';
if (!file_exists($pathfile)){
	//echo"<meta http-equiv='refresh' content='0;url=www.domainanda.com/index.php'>";
	echo"<meta http-equiv='refresh' content='0;url=../../../index.php'>";
}
else{
//untuk warna selang seling pada tabel
		$warnaGenap='#a0ffa4';
		$warnaGanjil='#e7ffe8';
		
		//Jumlah total komisi menunda	
		$sqlkomisi=mysql_query("SELECT jumlah * komisi AS subtotal_komisi FROM afiliasi, orders_detail, produk, orders
						 WHERE afiliasi.id_orders = orders_detail.id_orders
						 AND orders_detail.id_produk = produk.id_produk
						 AND orders_detail.id_orders = orders.id_orders
						 AND orders.status_order = 'Dikirim' AND afiliasi.status_komisi='Meminta'");
	   	$total_komisi='';
		while($isi=mysql_fetch_array($sqlkomisi)){
			$total_komisi = $total_komisi + $isi[subtotal_komisi]; 
			$komisi_rupiah=format_rupiah($total_komisi);
		}
		
		//Redirect bila tidak ada penarikan komisi
		if (mysql_num_rows($sqlkomisi) == 0){
			echo "<script></script>";
		}
		
		echo "<div id=greyboxsmall><span class=judul_page>Penuntasan Komisi</span></div>";
		echo "<labeltxt>Total komisi meminta dituntaskan sebesar <b>Rp $komisi_rupiah</b></labeltxt><br/>";
		
		echo "<table class=tablestyle>
			   <tr><th>Tgl Penarikan</th><th>Id Referal</th><th>Produk Terjual</th><th>Total Komisi</th><th>Aksi</th></tr>"; 	
		
		/*--------------------------------------------
		  untuk melihat detail hasil promosi afiliasi
		----------------------------------------------*/
		$sql=mysql_query("SELECT distinct afiliasi.tgl_penarikan, afiliasi.id_kustomer, 
						 orders.status_order, afiliasi.status_komisi,afiliasi.afiliasi_session
						 FROM afiliasi, orders_detail, produk, orders
						 WHERE afiliasi.id_orders = orders_detail.id_orders
						 AND orders_detail.id_produk = produk.id_produk
						 AND orders_detail.id_orders = orders.id_orders
						 AND orders.status_order = 'Dikirim' AND afiliasi.status_komisi='Meminta'
						 ORDER BY tgl_penarikan DESC");
		
		$no=1;
		while ($r=mysql_fetch_array($sql)){
		   $encryptreferal=base64_encode($r[id_kustomer]);
		   $encrypttglpenarikan=base64_encode($r[tgl_penarikan]);
		   if ($no % 2 == 0){
			$warna = $warnaGenap;}
		   else{
			$warna = $warnaGanjil;}
		   
			/*-----------------------------------------------
			  untuk menghitung detail hasil promosi afiliasi
			-------------------------------------------------*/
			//Jumlah total komisi menunda	
			$sqltotalkomisi=mysql_query("SELECT jumlah, jumlah * komisi AS subtotal_komisi FROM afiliasi, orders_detail, produk, orders
							 WHERE afiliasi.id_orders = orders_detail.id_orders
							 AND orders_detail.id_produk = produk.id_produk
							 AND orders_detail.id_orders = orders.id_orders
							 AND afiliasi.id_kustomer= '$r[id_kustomer]'
							 AND afiliasi.tgl_penarikan= '$r[tgl_penarikan]'
							 AND orders.status_order = 'Dikirim' AND afiliasi.status_komisi='Meminta'");
			$komisi='';
			$jmlhproduk='';
			while($isi=mysql_fetch_array($sqltotalkomisi)){
				$jmlhproduk    = $jmlhproduk + $isi[jumlah];
				$komisi        = $komisi + $isi[subtotal_komisi]; 
				$komisi_rupiah = format_rupiah($komisi);
			}
			
		   echo "<tr bgcolor='$warna'>
				 <td>$r[tgl_penarikan]</td>
				 <td align=center>$r[id_kustomer]</td>
				 <td align=center width=30>$jmlhproduk</td>
				 <td align=right width=70>Rp $komisi_rupiah</td>
				 <td align=center width=60><a href='?module=komisiafiliasi&act=detailkomisi&ref=$encryptreferal&id=$encrypttglpenarikan'>Tuntaskan<a></td>
				 </tr>";
		  $no++;
		}
		 echo "</table>";
		 echo "<a href='?module=komisiafiliasi'><img src=images/arrow_left.png border=0><br/>Kembali</a>";
}
?>