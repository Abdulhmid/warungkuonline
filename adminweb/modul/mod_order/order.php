<?php
//Mencegah direct akses
$pathfile='../config/authentication_users.php';
if (!file_exists($pathfile)){
	//echo"<meta http-equiv='refresh' content='0;url=www.domainanda.com/index.php'>";
	$url =$domain.'/index.php';
	echo"<meta http-equiv='refresh' content='0;url=$url'>";
}
else{

$aksi="modul/mod_order/aksi_order.php";
switch($_GET[act]){
  // Tampil Order
  default:
	//untuk warna selang seling pada tabel
	$warnaGenap='#e7ffe8';
	$warnaGanjil='#a0ffa4';
	
    echo "<div id=greyboxsmall><span class=judul_page>Order</span></div>
          <table class=tablestyle>
          <tr><th>no. order</th><th>nama member</th><th>tgl. order</th><th>jam</th><th>Pembayaran</th><th>status</th><th>aksi</th><th>hapus</th></tr>";

    $p      = new Paging;
    $batas  = 10;
    $posisi = $p->cariPosisi($batas);

    $tampil = mysql_query("SELECT * FROM orders ORDER BY id_orders DESC LIMIT $posisi,$batas");
  
	$keterangan=false;
	$warning=false;
    while($r=mysql_fetch_array($tampil)){
      $tanggal=tgl_indo($r[tgl_order]);
	  //Untuk indikasi warna terhadap Konfirmasi pembayaran dan Proses Segera pengiriman
	  if ($r[pembayaran] != '' AND $r[status_order] == 'Baru'){
		$warna='#FF5353';//warna merah ketika konsumen melakukan konfirmasi pembayaran
		$keterangan=true;
		$warning=true;
		}
	  elseif($r[pembayaran] != '' AND $r[status_order] == 'Lunas'){
		$warna='#AA7FFF';//warna biru konsumen telah melakukan konfirmasi pembayaran barang harus segera dikirim
		$keterangan=true;
		$warning=true;
		}
	  else{
		if ($no % 2 == 0){
			$warna = $warnaGenap;}
		else{
			$warna = $warnaGanjil;}
		$warning=false;
	  }
	
	  if ($warning==true){
		echo"<tr bgcolor='$warna'><td align=center>$r[id_orders]</td>
			<td>$r[username]</td>
            <td>$tanggal</td>
            <td>$r[jam_order]</td>
            <td class=warningblink>$r[pembayaran]</td>
			<td class=warningblink>$r[status_order]</td>
		    <td><a href=?module=order&act=detailorder&id=$r[id_orders]><img src=images/detail.png border=0><br>Detail</a></td>
			<td><a href=$aksi?module=order&act=hapus&id=$r[id_orders]><img src=images/delete.png border=0></a></td>

			</tr>";
	  }
	  else{
		echo"<tr bgcolor='$warna'><td align=center>$r[id_orders]</td>
			<td>$r[username]</td>
            <td>$tanggal</td>
            <td>$r[jam_order]</td>
            <td>$r[pembayaran]</td>
			<td>$r[status_order]</td>
		    <td><a href=?module=order&act=detailorder&id=$r[id_orders]><img src=images/detail.png border=0><br>Detail</a></td>
			<td><a href=$aksi?module=order&act=hapus&id=$r[id_orders]><img src=images/delete.png border=0></a></td>

			</tr>";
	  }
      $no++;
    }
    echo "</table>";

    $jmldata = mysql_num_rows(mysql_query("SELECT * FROM orders"));
    $jmlhalaman  = $p->jumlahHalaman($jmldata, $batas);
    $linkHalaman = $p->navHalaman($_GET[halaman], $jmlhalaman);

    echo "<div id=paging>Hal: $linkHalaman</div><br>";
	
	//menapilkan keterangan ketika ada konfirmasi pembayaran
	if ($keterangan==true){
		echo"Keterangan.<br><hr>";
		echo"<b><ketkonfirmasi>Warna Merah dalam tabel. Telah melakukan konfirmasi 
		.</ketkonfirmasi><br>";
		echo"<ketkirim>Warna Biru dalam tabel. Syarat dan ketentuan sudah terpenuhi.</ketkirim></b>";
	}
	break;
  case "detailorder":
    $edit = mysql_query("SELECT * FROM orders, member, kota WHERE
orders.`username`=member.`username` AND
member.`id_kota`=kota.`id_kota` AND id_orders='$_GET[id]'");
    $r    = mysql_fetch_array($edit);
    $tanggal=tgl_indo($r[tgl_order]);

    $pilihan_status = array('Baru', 'Lunas');
    $pilihan_order = '';
    foreach ($pilihan_status as $status) {
	   $pilihan_order .= "<option value=$status";
	   if ($status == $r[status_order]) {
		    $pilihan_order .= " selected";
	   }
	   $pilihan_order .= ">$status</option>\r\n";
    }

    echo "<div id=greyboxsmall><span class=judul_page>Detail Order</span></div>
          <form method=POST action=$aksi?module=order&act=update>
          <input type=hidden name=id value=$r[id_orders]>
          <table class=tableform>
          <tr><td>No. Order</td><td > : $r[id_orders]</td></tr>
          <tr><td>Tgl. & Jam Order</td> <td> : $tanggal & $r[jam_order]</td></tr>
		  <tr><td class=noborder>Pembayaran</td><td> $r[pembayaran]</td></tr>
          <tr><td colspan=2>Status Order</td></tr>
		  <tr><td><select name=status_order class=selectstyle>$pilihan_order</select></td> 
			  <td><input type=submit value='Ubah Status' class=btnbluestyle></td>
		  </tr>
          </table></form>";

  // tampilkan rincian motor yang di order
  $sql2=mysql_query("SELECT * FROM orders_detail, motor , orders
                     WHERE orders_detail.id_motor=motor.id_motor
                     AND orders_detail.`id_orders`=orders.`id_orders` 
                     AND orders_detail.id_orders='$_GET[id]'");
  
  echo "<table border=0 width=500 class=tablestyle>
        <tr><th>Nama motor</th><th>Lama Sewa /hari</th><th>Harga Sewa Perhari</th><th>Sub Total biaya</th></tr>";
  
  while($s=mysql_fetch_array($sql2)){
	   $subtotalberat = $s['berat'] * $s['jumlah']; // total berat per item motor 
       @$totalberat  = $totalberat + $subtotalberat; // grand total berat all motor yang dibeli
     // rumus untuk menghitung subtotal dan total		
    $subtotal    = $s[harga] * $s[jumlah] ;
    $total       = $total + $subtotal;
    $subtotal_rp = format_rupiah($subtotal);    
    $total_rp    = format_rupiah($total);    
    $harga       = format_rupiah($s[harga]);

    echo "<tr><td>$s[nama_motor]</td><td align=center>$s[jumlah]</td><td align=right>Rp. $harga</td><td align=right>Rp. $subtotal_rp</td></tr>";
  }
  echo "
         <tr><td colspan=3 align=right>Total harga sewa</td><td align=right>Rp. <b>$total_rp</b></td></tr>
        </table>";

  // tampilkan data member untuk pengiriman
  if ($r[shipping]== 'akun'){
	echo "<table border=0 width=500 class=tableform>
        <tr><th colspan=2>Data member</th></tr>
        <tr><td>Nama Peminjam</td><td> : $r[id_member]</td></tr>
        <tr><td>Alamat Peminjam</td><td> : $r[alamat]</td></tr>
        <tr><td>Kota</td><td> : $r[nama_kota]</td></tr>
		<tr><td>kode POS</td><td> : $r[kode_pos]</td></tr>
		<tr><td>No. Telpon/HP</td><td> : $r[no_telp]</td></tr>		
		<tr><td>Email</td><td> : $r[email]</td></tr>
		
        </table>";
  }
  else{
	echo"<div id=greenboxsmall><span class=judul_page>Barang dikirim kealamat yang dipilih.</span></div>";
	echo "<table border=0 width=500 class=tableform>
        <tr><th colspan=2>Data member dan Pengiriman </th></tr>
        <tr><td>Nama Pembeli</td><td> : $r[id_member]</td></tr>
        <tr><td>Alamat Pengiriman</td><td> : $r[alamat_kirim]</td></tr>
        <tr><td>Kecamatan</td><td> : $r[nama_kota]</td></tr>
        <tr><td>No. Telpon/HP</td><td> : $r[no_telp]</td></tr>
        <tr><td>Email</td><td> : $r[email]</td></tr>
        </table>";
  }
  echo "<a href='javascript:history.go(-1)'><img src=images/arrow_left.png border=0><br/>Kembali</a>";
    break;  
}
}
?>
