<?php
//Mencegah direct akses
$pathfile='../config/authentication_users.php';
if (!file_exists($pathfile)){
	//echo"<meta http-equiv='refresh' content='0;url=www.domainanda.com/index.php'>";
	echo"<meta http-equiv='refresh' content='0;url=../../../index.php'>";
}
else{
$aksi="modul/mod_bukutamu/aksi_bukutamu.php";
switch($_GET[act]){
  // Tampil Hubungi Kami
  default:
  $warnaGenap='#a0ffa4';
  $warnaGanjil='#e7ffe8';
  
    echo "<h2>buku tamu</h2>
          <table class=tablestyle>
          <tr><th>no</th><th>nama</th><th>email</th><th>pesan</th><th>tanggal</th><th>aksi</th></tr>";

    $p      = new Paging;
    $batas  = 10;
    $posisi = $p->cariPosisi($batas);

    $tampil=mysql_query("SELECT * FROM bukutamu ORDER BY id DESC LIMIT $posisi, $batas");

    $no = $posisi+1;
    while ($r=mysql_fetch_array($tampil)){
      $tgl=tgl_indo($r[tanggal]);
	  if ($no % 2 == 0){
		$warna = $warnaGenap;}
	  else{
		$warna = $warnaGanjil;}
      echo "<tr bgcolor='$warna'><td>$no</td>
                <td>$r[nama]</td>
                <td><a href=?module=bukutamu&act=balasemail&id=$r[id]>$r[email]</a></td>
                <td>$r[pesan]</td>
                <td>$tgl</a></td>
               <td><a href=$aksi?module=bukutamu&act=hapus&id=$r[id]> Hapus</a>
			                        </td></tr>";
    $no++;
    }
    echo "</table>";
    $jmldata=mysql_num_rows(mysql_query("SELECT * FROM bukutamu"));
    $jmlhalaman  = $p->jumlahHalaman($jmldata, $batas);
    $linkHalaman = $p->navHalaman($_GET[halaman], $jmlhalaman);

    echo "<div id=paging>Hal: $linkHalaman</div><br>";
    break;

  case "balasemail":
    $tampil = mysql_query("SELECT * FROM bukutamu WHERE id='$_GET[id]'");
    $r      = mysql_fetch_array($tampil);

    echo "<h2>Reply Email</h2>
          <form method=POST action='?module=hubungi&act=kirimemail'>
          <table>
          <tr><td>Kepada</td><td> : <input type=text name='email' size=30 value='$r[email]'></td></tr>
          <tr><td>Subjek</td><td> : <input type=text name='pesan' size=50 value='ke: $r[nama]'></td></tr>
          <tr><td>Pesan</td><td> <textarea name='pesan' style='width: 600px; height: 350px;'><br><br><br><br>     
  ----------------------------------------------------------------------------------------------------------------------
  <br>$r[pesan]</textarea></td></tr>
          <tr><td colspan=2><input type=submit value=Kirim>
                            <input type=button value=Batal onclick=self.history.back()></td></tr>
          </table></form>";
     break;
    
  case "kirimemail":
    mail($_POST[email],$_POST[subjek],$_POST[pesan],"From: nova.satrio33@gmail.com.com");
    echo "<h2>Status Email</h2>
          <p>Email telah sukses terkirim ke tujuan</p>
          <p>[ <a href=javascript:history.go(-2)>Kembali</a> ]</p>";	 		  
    break;  
}
}
?>
