<?php

$aksi="modul/mod_member/aksi_member.php";
switch($_GET[act]){
  // Tampil Kategori
  default:
	//untuk warna selang seling pada tabel
	$warnaGenap='#a0ffa4';
	$warnaGanjil='#e7ffe8';
	
    echo "
          <table class=tablestyle>
          <tr><th>no</th><th>username</th><th>jkel</th><th>email</th><th>telp</th><th>Premium</th><th>Aktif Sampai</th><th>blokir</th><th>aksi</th></tr>"; 
    $tampil=mysql_query("SELECT member.*, ADDDATE(tanggal, periode) AS lama, email FROM member ORDER BY username");
    $no=1;
    while ($r=mysql_fetch_array($tampil)){
			  //Untuk indikasi warna terhadap Konfirmasi pembayaran dan Proses Segera pengiriman
	  if ($r[pembayaran] != '' AND $r[premium] == 'TIDAK'){
		$warna='#FF5353';//warna merah ketika member melakukan konfirmasi pembayaran
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
      
	  echo "<tr bgcolor='$warna'><td>$no</td>
             <td>$r[username]</td>
             <td>$r[jkel]</td>
             <td>$r[email]</td>
             <td>$r[telp]</td>
             <td><a href=?module=member&act=editmemberpremium&id=$r[username]>$r[premium]</a></td>
			 <td>$r[lama]</td>

             <td><a href=?module=member&act=editmember&id=$r[username]>$r[blokir]</a></td>
             <td><a href=?module=member&act=selengkapnya&id=$r[username]>Selengkapnya</a> | 
	             <a href=$aksi?module=member&act=hapus&id=$r[username]>Hapus</a>
             </td></tr>";
			     $no++;

			}
	  elseif ($r[pembayaran] != '' AND $r[premium] == 'YA'){
	  echo "<tr bgcolor='#FFFF66'><td>$no</td>
	         <td><a href=?module=member&act=iklanmember&id=$r[username]>$r[username]</a></td>
             <td>$r[jkel]</td>
             <td>$r[email]</td>
             <td>$r[telp]</td>
             <td><a href=?module=member&act=editmemberpremium&id=$r[username]>$r[premium]</a></td>
			 <td>$r[lama]</td>
             <td><a href=?module=member&act=editmember&id=$r[username]>$r[blokir]</a></td>
             <td><a href=?module=member&act=selengkapnya&id=$r[username]>Selengkapnya</a> | 
	             <a href=$aksi?module=member&act=hapus&id=$r[username]>Hapus</a>
             </td></tr>";
			 			     $no++;

			}
	  else{
	  echo "<tr bgcolor='$warna'><td>$no</td>
	         <td><a href=?module=member&act=iklanmember&id=$r[username]>$r[username]</a></td>
             <td>$r[jkel]</td>
             <td>$r[email]</td>
             <td>$r[telp]</td>
             <td><a href=?module=member&act=editmemberpremium&id=$r[username]>$r[premium]</a></td>
			 <td>$r[lama]</td>
             <td><a href=?module=member&act=editmember&id=$r[username]>$r[blokir]</a></td>
             <td><a href=?module=member&act=selengkapnya&id=$r[username]>Selengkapnya</a> | 
	             <a href=$aksi?module=member&act=hapus&id=$r[username]>Hapus</a>
             </td></tr>";
			 			     $no++;

			}
	}
	
    echo "</table>";
    break;
  
// Form Edit 
  case "editmember":
    $edit=mysql_query("SELECT * FROM member WHERE username='$_GET[id]'");
    $r=mysql_fetch_array($edit);

    echo "<div id=greyboxsmall><span class=judul_page>Edit Member</span></div>
          <form method=POST action=$aksi?module=member&act=update>
          <input type=hidden name=id value='$r[username]'>
          <table class=tableform>
          <tr><td>Blokir</td><td> : 
		  <select name=blokir id=blokir>
  <option value=Tidak>Tidak</option>
  <option value=Ya>Ya</option>
</select>
          <tr><td colspan=2><input type=submit value='Update' class='btnbluestyle'>
                            <input type=button value='Batal' onclick=self.history.back() class='btnbluestyle'></td></tr>
          </table></form>";
    break;  

// Form Edit 
  case "editmemberpremium":
    $edit=mysql_query("SELECT * FROM member WHERE username='$_GET[id]'");
    $r=mysql_fetch_array($edit);

    echo "<div id=greyboxsmall><span class=judul_page>Edit Member Premium</span></div>
          <form method=POST action=$aksi?module=member&act=updatepremium>
          <input type=hidden name=id value='$r[username]'>
          <table class=tableform>
          <tr><td>Premium</td><td> : 
		  <select name=premium id=premium>
  <option value=TIDAK>Tidak</option>
  <option value=YA>Ya</option>
</select>
          <tr><td colspan=2><input type=submit value='Update' class='btnbluestyle'>
                            <input type=button value='Batal' onclick=self.history.back() class='btnbluestyle'></td></tr>
          </table></form>";
    break;  

// Form Edit 
  case "selengkapnya":
    $edit=mysql_query("SELECT * FROM member WHERE username='$_GET[id]'");
    $r=mysql_fetch_array($edit);

    echo "<div id=greyboxsmall><span class=judul_page>Data Member</span></div>
          <input type=hidden name=id value='$r[username]'>
          <table class=tableform>
          <tr><td>Username</td><td> : $r[username] </td></tr>
          <tr><td>Nama</td><td> : $r[nama] </td></tr>
		  <tr><td>Jenis Kelamin</td><td> : $r[jkel] </td></tr>
          <tr><td>Email</td><td> : $r[email] </td></tr>
          <tr><td>Telp</td><td> : $r[telp] </td></tr>
          <tr><td>Blokir</td><td> : $r[blokir] </td></tr>
          <tr><td>Premium</td><td> : $r[premium] </td></tr>

          </table>";
    break;  
	
	// Form Edit 
  case "iklanmember":
    echo "
          <table class=tablestyle>
          <tr><th>no</th><th>Nama Produk</th><th>Kondisi</th><th>Keterangan</th><th>Harga</th><th>Aksi</th></tr>"; 
    $tampil=mysql_query("SELECT produk.*, member.`email`,member.`username`, member.`bbm`, member.`jkel`, member.`nama`, member.`telp`, member.`username`, kota.`nama_kota` FROM produk,kategori, member, kota WHERE kategori.id_kategori=produk.id_kategori 
	AND produk.username=member.username AND produk.id_kota=kota.id_kota AND member.username='$_GET[id]'");
    $no=1;
    while ($r=mysql_fetch_array($tampil)){
			  //Untuk indikasi warna terhadap Konfirmasi pembayaran dan Proses Segera pengiriman
	  if ($r[pembayaran] != ''){
		$warna='#FF5353';//warna merah ketika member melakukan konfirmasi pembayaran
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
      
	  echo "<tr bgcolor='$warna'><td>$no</td>
             <td>$r[nama_produk]</td>
             <td>$r[kondisi]</td>
             <td>$r[keterangan]</td>
             <td>$r[harga]</td>
             <td> 
	             <a href=$aksi?module=member&act=hapusiklan&id=$r[id_produk]>Hapus</a>
             </td></tr>";
			     $no++;

			}
	  else{
	  echo "<tr bgcolor='$warna'><td>$no</td>
             <td>$r[nama_produk]</td>
             <td>$r[kondisi]</td>
             <td>$r[keterangan]</td>
             <td>$r[harga]</td>
             <td>
	             <a href=$aksi?module=member&act=hapusiklan&id=$r[id_produk]>Hapus</a>
             </td></tr>";
			 			     $no++;

			}
	}
    echo "</table>";
	
    break;  

}

?>
