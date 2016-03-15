<?php
//Mencegah direct akses
$pathfile='../config/authentication_users.php';
if (!file_exists($pathfile)){
	//echo"<meta http-equiv='refresh' content='0;url=www.domainanda.com/index.php'>";
	echo"<meta http-equiv='refresh' content='0;url=../../../index.php'>";
}
else{
/*----------------------------------------------------------------------------------------------------------------------------------------- 
------------------------------------>Detail komisi yang akan dibayarkan ke referal<------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------*/
$decryptreferal = base64_decode($_GET[ref]);
$decrypttglpenarikan=base64_decode($_GET[id]);
	//Untuk menampilkan data referal
		 $sqlreferal = mysql_query("SELECT * FROM kustomer, afiliasi
									WHERE kustomer.id_kustomer = afiliasi.id_kustomer
									AND afiliasi.id_kustomer = '$decryptreferal'
									AND afiliasi.tgl_penarikan = '$decrypttglpenarikan'");
		 $record = mysql_fetch_array($sqlreferal);
		 
	/*-----------------------------------
		Detail penjualan hasil referal
	------------------------------------*/  
	  //Tampil id referal
	  
	  
	  //Lihat total komisi
	  $sql=mysql_query("SELECT komisi * jumlah AS subtotal_komisi FROM afiliasi, orders_detail, produk, orders
						 WHERE afiliasi.id_orders = orders_detail.id_orders
						 AND orders_detail.id_produk = produk.id_produk
						 AND orders_detail.id_orders = orders.id_orders
						 AND afiliasi.tgl_penarikan = '$record[tgl_penarikan]'
						 AND afiliasi.id_kustomer = '$record[id_kustomer]'
						 AND orders.status_order = 'Dikirim' AND afiliasi.status_komisi='Meminta'");
	  //menghitung total komisi
	  $total="";
	  while($s=mysql_fetch_array($sql)){
		$total		= $total + $s[subtotal_komisi];
		$total_rp	= format_rupiah($total);
	  }
	  
	  //Lihat total produk
	  $sql=mysql_query("SELECT SUM(jumlah) AS total FROM afiliasi, orders_detail, produk, orders
						 WHERE afiliasi.id_orders = orders_detail.id_orders
						 AND orders_detail.id_produk = produk.id_produk
						 AND orders_detail.id_orders = orders.id_orders
						 AND afiliasi.tgl_penarikan = '$record[tgl_penarikan]'
						 AND afiliasi.id_kustomer = '$record[id_kustomer]'
						 AND orders.status_order = 'Dikirim' AND afiliasi.status_komisi='Meminta'");
	  $totalproduk=mysql_fetch_array($sql);
	  
	  $tgl=tgl_indo($record[tgl_penarikan]);
	  echo "<div id=greyboxsmall><span class=judul_page>Detail Pembayaran Komisi</span></div>";
	  echo "<table class=tableform>
			<tr><td>Tanggal penarikan</td><td>: <b>$tgl</b></td></tr>
			<tr><td>Referal</td><td>: <b>$record[nama_lengkap]</b></td></tr>
			<tr><td>Penarikan komisi sebesar</td><td>: <b>Rp $total_rp</b></td></tr>
			<tr><td>Rekening referal</td><td>: <b>$record[rekening]</b></td></tr>
			</table>";
		
	  //query untuk melihat detail hasil promosi referal
	   $sql=mysql_query("SELECT distinct afiliasi.id_kustomer, orders.id_orders, orders.tgl_order,
						 orders.jam_order, orders.status_order, afiliasi.status_komisi,afiliasi.afiliasi_session
						 FROM afiliasi, orders_detail, produk, orders
						 WHERE afiliasi.id_orders = orders_detail.id_orders
						 AND orders_detail.id_produk = produk.id_produk
						 AND orders_detail.id_orders = orders.id_orders
						 AND afiliasi.tgl_penarikan = '$record[tgl_penarikan]'
						 AND afiliasi.id_kustomer = '$record[id_kustomer]'
						 AND orders.status_order = 'Dikirim' AND afiliasi.status_komisi = 'Meminta'
						 ORDER BY tgl_order AND jam_order DESC");
	   	   
	    //untuk warna selang seling pada tabel
		$warnaGenap='#a0ffa4';
		$warnaGanjil='#e7ffe8';
		
		echo "<table class=tablestyle>
			   <tr><th>Tgl Order</th><th>Jam Order</th><th>Id Referal</th><th>No Order</th><th>Produk Terjual</th><th>Komisi</th></tr>"; 	
		$no=1;
		while ($r=mysql_fetch_array($sql)){
		   $encryptreferal=base64_encode($r[id_kustomer]);
		   $encryptidorder=base64_encode($r[id_orders]);
		   $session=$r[afiliasi_session];
		   if ($no % 2 == 0){
			$warna = $warnaGenap;}
		   else{
			$warna = $warnaGanjil;}
		   
		  /*-----------------------------------------------
			  untuk menghitung komisi promosi afiliasi
			-------------------------------------------------*/
			$sql2=mysql_query("SELECT * FROM afiliasi, orders_detail, produk, orders
						 WHERE afiliasi.id_orders = orders_detail.id_orders
						 AND orders_detail.id_produk = produk.id_produk
						 AND orders_detail.id_orders = orders.id_orders
						 AND orders.id_orders='$r[id_orders]'
						 AND orders.status_order = 'Dikirim'
						 ORDER BY tgl_order AND jam_order DESC");
		    $total="";
			$jmlhproduk="";
			$subtotal="";
			while($r2=mysql_fetch_array($sql2)){
			 $jmlhproduk  = $jmlhproduk + $r2[jumlah];
			 $subtotal    = $r2[komisi] * $r2[jumlah];
			 $total       = $total + $subtotal;
			 $komisi      = format_rupiah($total); 
			}
			
		   echo "<tr bgcolor='$warna'>
				 <td>$r[tgl_order]</td>
				 <td align=center>$r[jam_order]</td>
				 <td>$r[id_kustomer]</td>
				 <td align=center><a href='?module=order&act=detailorder&id=$r[id_orders]'>$r[id_orders]</td>
				 <td align=center width=40>$jmlhproduk</td>";
			echo "<td align=right width=70>Rp $komisi</td>";
			echo "</tr>";
		  $no++;
		}
		 echo "<tr><td colspan=4><b>Total</b></td><td align=center><b>$totalproduk[total]<b></td><td align=right><b>Rp $total_rp</b></td></tr>";
		 echo "</table><br/>";
		 echo "<form method=post action='$aksi?module=komisiafiliasi&act=tuntaskomisi'><input type=hidden name='referal' value='$record[id_kustomer]'><input type=hidden name='tgl_penarikan' value='$record[tgl_penarikan]'>";
		 echo "<input type=submit value='Tuntas' class=btnbluestyle><input type=button value='Batal' onclick='self.history.back()' class=btnbluestyle>";
		 echo "</form>";
}
?>