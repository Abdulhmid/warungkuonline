<?php
//Mencegah direct akses
$pathfile='../config/authentication_users.php';
if (!file_exists($pathfile)){
	//echo"<meta http-equiv='refresh' content='0;url=www.domainanda.com/index.php'>";
	echo"<meta http-equiv='refresh' content='0;url=../../../index.php'>";
}
else{

$aksi="modul/mod_motor/aksi_motor.php";
switch($_GET[act]){
  // Tampil motor
  default:
	//untuk warna selang seling pada tabel
	$warnaGenap='#a0ffa4';
	$warnaGanjil='#e7ffe8';
	
    echo "<div id=greyboxsmall><span class=judul_page>motor</span></div>
		  <div id=bluebox>
		  <input type=button value='Tambah motor' onclick=\"window.location.href='?module=motor&act=tambahmotor';\" class=btnbluestyle><br/><br/>
		  <table class=tablestyle>
          <tr><th>no</th><th>nama motor</th><th>Tarif sewa perhari</th><th>merk</th><th>Plat No.</th><th>Status</th><th>tgl. posting</th><th colspan=3>aksi</th></tr>";

    $p      = new Paging;
    $batas  = 20;
    $posisi = $p->cariPosisi($batas);

    $tampil = mysql_query("SELECT motor.nama_motor,motor.harga,motor.tgl_masuk,merk.merk,motor.id_motor,motor.no_plat,motor.status FROM motor,merk WHERE motor.id_merk=merk.id_merk ORDER BY id_motor DESC LIMIT $posisi,$batas");
    $no = $posisi+1;
    while($r=mysql_fetch_array($tampil)){
      $tanggal=tgl_indo($r[tgl_masuk]);
      $harga=format_rupiah($r[harga]);
	  
	  if ($no % 2 == 0){
		$warna = $warnaGenap;}
	   else{
		$warna = $warnaGanjil;}
		
      echo "<tr bgcolor='$warna'><td>$no</td>
                <td>$r[nama_motor]</td>
                <td>$harga</td>
				<td>$r[merk]</td>
				<td>$r[no_plat]</td>				
				<td>$r[status]</td>
                <td>$tanggal</td>
		        <td><a href=$aksi?module=motor&act=hapus&id=$r[id_motor]><img src=images/delete.png border=0></a></td>

		    </tr>";
      $no++;
    }
    echo "</table></div>";

    $jmldata = mysql_num_rows(mysql_query("SELECT * FROM motor"));
    $jmlhalaman  = $p->jumlahHalaman($jmldata, $batas);
    $linkHalaman = $p->navHalaman($_GET[halaman], $jmlhalaman);

    echo "<div id=paging>Hal: $linkHalaman</div><br>";
 
    break;
 //======================= tambah motor 
  case "tambahmotor":
    echo "<div id=greyboxsmall><span class=judul_page>Tambah motor</span></div>
          <form method=POST action='$aksi?module=motor&act=input' enctype='multipart/form-data' class=form>
          <table class=tableform>
          <tr><td width=70>Nama motor</td>     <td> : <input type=text name='nama_motor' size=60></td></tr>
		  <tr><td width=70>Plat motor</td>     <td> : <input type=text name='no_plat' size=60></td></tr>
		  <tr><td width=70>Harga sewa motor</td>     <td> : <input type=text name='harga' size=60></td></tr>
          <tr><td>merk</td><td> : 
          <select name='merk'>
            <option value=0 selected>- Pilih Merk -</option>";
            $tampil=mysql_query("SELECT * FROM merk ORDER BY merk");
            while($r=mysql_fetch_array($tampil)){
              echo "<option value=$r[id_merk]>$r[merk]</option>";
            }
    echo "</select></td></tr>

          <tr><td colspan=2>Deskripsi<br/><textarea name='deskripsi' style='width: 100%; height: 250px;'></textarea></td></tr>
          <tr><td>Gambar</td>      <td> : <input type=file name='fupload' size=40> 
                                          <br>Tipe gambar harus JPG/JPEG dan ukuran lebar maks: 400 px</td></tr>
          <tr><td colspan=2><input type=submit value=Simpan class=btnbluestyle>
                            <input type=button value=Batal onclick=self.history.back() class=btnbluestyle></td></tr>
          </table></form>";
     break;
	 
	  }
}
?>
