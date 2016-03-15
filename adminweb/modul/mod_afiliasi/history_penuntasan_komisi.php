<?php
//Mencegah direct akses
$pathfile='../config/authentication_users.php';
if (!file_exists($pathfile)){
	//echo"<meta http-equiv='refresh' content='0;url=www.domainanda.com/index.php'>";
	echo"<meta http-equiv='refresh' content='0;url=../../../index.php'>";
}
else{
 /*---------------------------------------------------------------------------------
							Modul history penuntasan komisi
  -----------------------------------------------------------------------------------*/
//untuk warna selang seling pada tabel
		$warnaGenap='#a0ffa4';
		$warnaGanjil='#e7ffe8';
		
		
		//Jumlah total komisi yang ditarik	
		$sqlkomisi=mysql_query("SELECT jumlah * komisi AS subtotal_komisi FROM afiliasi, orders_detail, produk, orders
						 WHERE afiliasi.id_orders = orders_detail.id_orders
						 AND orders_detail.id_produk = produk.id_produk
						 AND orders_detail.id_orders = orders.id_orders
						 AND orders.status_order = 'Dikirim' AND afiliasi.status_komisi='Tuntas'
						 ORDER BY tgl_penenuntasan DESC");
	   	$total_komisi='';
		$komisi_rupiah='';
		while($isi=mysql_fetch_array($sqlkomisi)){
			$total_komisi = $total_komisi + $isi[subtotal_komisi]; 
			$komisi_rupiah=format_rupiah($total_komisi);
		}
		
		echo "<div id=greyboxsmall><span class=judul_page>History Penuntasan Komisi</span></div>";
		echo "<labeltxt>Total penuntasan komisi kepada para referal sebesar <b>Rp $komisi_rupiah</b></labeltxt><br/>";
		
		echo "<table class=tablestyle>
			   <tr><th>Tgl dituntaskan</th><th>Tgl Penarikan</th><th>No Order</th><th>Komisi</th><th>Status</th></tr>"; 	
		
		/*--------------------------------------------
		  untuk melihat hasil promosi afiliasi
		----------------------------------------------*/
		$sql=mysql_query("SELECT distinct afiliasi.id_kustomer, afiliasi.tgl_penarikan, afiliasi.tgl_penuntasan,
						 orders.id_orders, orders.status_order, afiliasi.status_komisi,afiliasi.afiliasi_session
						 FROM afiliasi, orders_detail, produk, orders
						 WHERE afiliasi.id_orders = orders_detail.id_orders
						 AND orders_detail.id_produk = produk.id_produk
						 AND orders_detail.id_orders = orders.id_orders
						 AND orders.status_order = 'Dikirim' AND afiliasi.status_komisi='Tuntas'
						 ORDER BY tgl_order DESC");
		
		$no=1;
		while ($r=mysql_fetch_array($sql)){
		   $id_orders=base64_encode($r[id_orders]);
		   $session=$r[afiliasi_session];
		   if ($no % 2 == 0){
			$warna = $warnaGenap;}
		   else{
			$warna = $warnaGanjil;}
		   
			/*-----------------------------------------------
			  untuk menghitung detail hasil promosi afiliasi
			-------------------------------------------------*/
			$sql2=mysql_query("SELECT * FROM afiliasi, orders_detail, produk, orders
						 WHERE afiliasi.id_orders = orders_detail.id_orders
						 AND orders_detail.id_produk = produk.id_produk
						 AND orders_detail.id_orders = orders.id_orders
						 AND afiliasi.id_kustomer = '$r[id_kustomer]' AND orders.id_orders='$r[id_orders]'
						 AND orders.status_order = 'Dikirim' AND afiliasi.status_komisi='Tuntas'
						 ORDER BY tgl_order AND jam_order DESC");
		    $total="";
			$jmlhproduk="";
			$subtotal="";
			while($r2=mysql_fetch_array($sql2)){
			 $subtotal    = $r2[komisi] * $r2[jumlah];
			 $total       = $total + $subtotal;
			 $komisi      = format_rupiah($total); 
			}
			
		   echo "<tr bgcolor='$warna'>
				 <td>$r[tgl_penuntasan]</td>
				 <td>$r[tgl_penarikan]</td>
				 <td align=center>$r[id_orders]</td>
				 <td align=right width=70>Rp $komisi</td>
				 <td align=center width=60>$r[status_komisi]</td>
				 </tr>";
		  $no++;
		}
		 echo "</table>";
		 echo "<a href='?module=komisiafiliasi'><img src=images/arrow_left.png border=0><br/>Kembali</a>";
}
?>