<?php
//Mencegah direct akses
$pathfile='../config/authentication_users.php';
if (!file_exists($pathfile)){
	//echo"<meta http-equiv='refresh' content='0;url=www.domainanda.com/index.php'>";
	echo"<meta http-equiv='refresh' content='0;url=../../../index.php'>";
}
else{
// Tampil Hasil Kunjungan, Penjualan dari afiliasi beserta total komisi

//jmlah hasil kunjungan
      $sql=mysql_query("SELECT COUNT(*) AS klik FROM klik_afiliasi");
	  $r=mysql_fetch_array($sql);
	 
      //jumlah produk terpesan
	  $sql1=mysql_query("SELECT SUM(jumlah) AS jmlhproduk FROM afiliasi, orders_detail
						 WHERE afiliasi.id_orders=orders_detail.id_orders");
	  $r1=mysql_fetch_array($sql1);	 
	  
	  //jumlah produk terjual
	  $sql=mysql_query("SELECT SUM(jumlah) AS jmlhproduk FROM afiliasi, orders_detail, orders
						 WHERE afiliasi.id_orders = orders_detail.id_orders
						 AND orders_detail.id_orders = orders.id_orders
						 AND orders.status_order='Dikirim'");
	  $r2=mysql_fetch_array($sql);
	  
	  echo "<div id=greyboxsmall><span class=judul_page>Afiliasi</span></div>";
	  echo "<labeltxt>
			Total jumlah kunjungan yang dihasilkan dari afiliasi : <b>$r[klik]</b> Visitor<br/><br/>
			Total jumlah produk yang berhasil terpesan : <b>$r1[jmlhproduk]</b> Produk<br/><br/>
			Total jumlah produk yang berhasil terjual : <b>$r2[jmlhproduk]</b> Produk<br/><br/>
			</labeltxt><br/>";
			
	  /*----------------------------------------------------------
		Komisi yang belum dibayarkan 
	  -----------------------------------------------------------*/
	  $sqlkomisi=mysql_query("SELECT komisi * jumlah AS subtotal_komisi FROM afiliasi, orders_detail, produk, orders
						 WHERE afiliasi.id_orders = orders_detail.id_orders
						 AND orders_detail.id_produk = produk.id_produk
						 AND orders_detail.id_orders = orders.id_orders
						 AND orders.status_order = 'Dikirim' AND afiliasi.status_komisi='Meminta'");
	  
	  //menghitung total komisi yg belum dibayarkan
	  $totalkomisi="";
	  while($s2=mysql_fetch_array($sqlkomisi)){
		$totalkomisi		= $totalkomisi + $s2[subtotal_komisi];
		$total_rp_komisi	=format_rupiah($totalkomisi);
	  }
	  //bila terdapat komisi yg belum dibayarkan maka tampilkan
	  if ($totalkomisi > 0 ){
		echo "<labeltxt>Komisi sebesar <b class=warningblink>Rp $total_rp_komisi</b> meminta dituntaskan.<br/><br/>";
		echo "<input type=button value='Tuntaskan' onclick=\"window.location.href='?module=komisiafiliasi&act=komisiperreferal';\" class=btnbluestyle><br/><br/><br/>";				
		echo "</labeltxt><br/><br/>";
	  }
	  
	  	  
	/*-----------------------------------
		Detail penjualan hasil referal
	------------------------------------*/  
	
	  //Lihat total komisi
	  $sql=mysql_query("SELECT komisi * jumlah AS subtotal_komisi  FROM afiliasi, orders_detail, produk, orders
						 WHERE afiliasi.id_orders = orders_detail.id_orders
						 AND orders_detail.id_produk = produk.id_produk
						 AND orders_detail.id_orders = orders.id_orders
						 AND orders.status_order = 'Dikirim'");
	  //menghitung total komisi
	  $total="";
	  while($s=mysql_fetch_array($sql)){
		$total		= $total + $s[subtotal_komisi];
		$total_rp	= format_rupiah($total);
	  }
	  
	  //untuk melihat detail hasil promosi afiliasi
	   $sql=mysql_query("SELECT distinct afiliasi.id_kustomer, orders.id_orders, orders.tgl_order,
						 orders.jam_order, orders.status_order, afiliasi.status_komisi,afiliasi.afiliasi_session
						 FROM afiliasi, orders_detail, produk, orders
						 WHERE afiliasi.id_orders = orders_detail.id_orders
						 AND orders_detail.id_produk = produk.id_produk
						 AND orders_detail.id_orders = orders.id_orders
						 AND orders.status_order = 'Dikirim'
						 ORDER BY tgl_order AND jam_order DESC");
	   	   
	    //untuk warna selang seling pada tabel
		$warnaGenap='#a0ffa4';
		$warnaGanjil='#e7ffe8';
		
		echo "<span class=judul_page>Detail penjualan hasil referal</span><br/>
			  <hr color=#EBEBEB noshade=noshade />";
		echo "<labeltxt>Total Komisi Afilasi Sebesar : <b>Rp $total_rp</b><br/></labeltxt>";
		echo "<table class=tablestyle>
			   <tr><th>Tgl Order</th><th>Jam Order</th><th>Id Referal</th><th>No Order</th><th>Produk Terjual</th><th>Komisi</th><th>Status</th></tr>"; 	
		$no=1;
		while ($r2=mysql_fetch_array($sql)){
		   $encryptreferal=base64_encode($r2[id_kustomer]);
		   $encryptidorder=base64_encode($r2[id_orders]);
		   $session=$r2[afiliasi_session];
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
						 AND orders.id_orders='$r2[id_orders]'
						 AND orders.status_order = 'Dikirim'
						 ORDER BY tgl_order AND jam_order DESC");
		    $total="";
			$jmlhproduk="";
			$subtotal="";
			while($r3=mysql_fetch_array($sql2)){
			 $jmlhproduk  = $jmlhproduk + $r3[jumlah];
			 $subtotal    = $r3[komisi] * $r3[jumlah];
			 $total       = $total + $subtotal;
			 $komisi      = format_rupiah($total); 
			}
			
		   echo "<tr bgcolor='$warna'>
				 <td>$r2[tgl_order]</td>
				 <td align=center>$r2[jam_order]</td>
				 <td>$r2[id_kustomer]</td>
				 <td align=center><a href='?module=order&act=detailorder&id=$r2[id_orders]'>$r2[id_orders]</td>
				 <td align=center width=40>$jmlhproduk</td>";
			if ($r2[status_komisi] == 'Meminta'){
				echo "<td align=right width=70 class=warningblink>Rp $komisi</td>";
				echo "<td align=center width=60 class=warningblink>$r2[status_komisi]</td>";
			}
			else{
				echo "<td align=right width=70>Rp $komisi</td>";
				echo "<td align=center width=60>$r2[status_komisi]</td>";
			} 
			echo "</tr>";
		  $no++;
		}
		 echo "</table>";
	  //Link ke history pelunasan komisi
	  $sql=mysql_query("SELECT * FROM afiliasi WHERE status_komisi='Tuntas'");
	  if (mysql_num_rows($sql) > 0){
		echo "<p><labeltxt><a href='?module=komisiafiliasi&act=historypenuntasan'>History Pembayaran Komisi</a></labeltxt><br/><p>";
	  }
}
?>