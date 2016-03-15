<?php
//Mencegah direct akses
$pathfile='../config/authentication_users.php';
if (!file_exists($pathfile)){
	//echo"<meta http-equiv='refresh' content='0;url=www.domainanda.com/index.php'>";
	echo"<meta http-equiv='refresh' content='0;url=../../../index.php'>";
}
else{

$aksi="modul/mod_modul/aksi_modul.php";
switch($_GET[act]){
  // Tampil Modul
  default:
	//untuk warna selang seling pada tabel
	$warnaGenap='#a0ffa4';
	$warnaGanjil='#e7ffe8';
	//$warnaGenap='#FFFFFF';
	//$warnaGanjil='#e7ffe8';
	
    echo "<div id=greyboxsmall> <span class=judul_page><img src=foto_banner/89control_panel.png> Modul</span></div>
          <div id=bluebox>
		  <input type=button value='Tambah Modul' onclick=\"window.location.href='?module=modul&act=tambahmodul';\" class=btnbluestyle><br><br>
          <form method=post enctype='multipart/form-data' action='$aksi?module=modul&act=hapus'>
		  <table class=tablestyle>
          <tr><th>no</th><th>nama modul</th><th>link</th><th>publish</th><th>aktif</th><th>status</th><th colspan=2>aksi</th></tr>";
    $tampil=mysql_query("SELECT * FROM modul ORDER BY urutan AND status");
    $no=1;
	while ($r=mysql_fetch_array($tampil)){
	  if ($no % 2 == 0){
	  $warna = $warnaGenap;}
	  else{
	  $warna = $warnaGanjil;}
	  echo"<input type=hidden name='id' value=$r[id_modul]>";
	
      echo "<tr bgcolor='$warna'><td>$no</td>
            <td>$r[nama_modul]</td>
            <td><a href=$r[link]>$r[link]</a></td>
            <td align=center>$r[publish]</td>
            <td align=center>$r[aktif]</td>
            <td>$r[status]</td>
            <td><a href=?module=modul&act=editmodul&id=$r[id_modul]><img src='images/edit.png' border=0></a></td> 
	        <td><input type=image src='images/delete.png'>";
	            
	  $no++;
    }
    echo "</table></form>";
    echo"</div>";
	echo "<div id=paging>*) Apabila PUBLISH bernilai Y, berarti akan ditampilkan pada menu utama di halaman pengunjung</div><br>";
    break;

  case "tambahmodul":
    echo "<div id=greyboxsmall><span class=judul_page>Tambah Modul</span></div>
		  <div id=bluebox>	
          <form method=POST enctype='multipart/form-data' action='$aksi?module=modul&act=input'>
          <label><b>Nama Modul</b></label> <input type=text name='nama_modul' class=inputstyle><br>
          <label><b>Link</b></label> <input type=text name='link' class=inputstyle><br>
          <label><b>Gambar</b></label> <input type=file name='fupload' size=24 class=inputstyle><br> 
                                     <righttxt>Tipe gambar harus JPG/JPEG/GIF/ICO/ICON dan ukuran maks: 100 px</righttxt><br><br>
		  <label><b>Publish</b></label> <righttxt><input type=radio name='publish' value='Y'>Y 
                                 <input type=radio name='publish' value='N' checked>N</righttxt><br><br>
          <label><b>Aktif</b></label> <righttxt><input type=radio name='aktif' value='Y' checked>Y 
                               <input type=radio name='aktif' value='N'>N</righttxt><br><br>
          <label><b>Status</b></label> <righttxt><input type=radio name='status' value='karyawan' checked>karyawan 
                                <input type=radio name='status' value='admin'>admin  
								</righttxt><br><br>
		  <input type=submit value=Simpan class=btnbluestyle>
          <input type=button value=Batal onclick=self.history.back() class=btnbluestyle><br>
          </form>
		  </div>";
		
     break;
 
  case "editmodul":
    $edit = mysql_query("SELECT * FROM modul WHERE id_modul='$_GET[id]'");
    $r    = mysql_fetch_array($edit);

    echo "<div id=greyboxsmall><span class=judul_page>Edit Modul</span></div>
          <form method=POST enctype='multipart/form-data' action=$aksi?module=modul&act=update>
          <input type=hidden name=id value='$r[id_modul]'>
          <table class=tableform>
          <tr><td>Nama Modul</td>     <td> : <input type=text name='nama_modul' value='$r[nama_modul]'></td></tr>
          <tr><td>Link</td>     <td> : <input type=text name='link' size=30 value='$r[link]'></td></tr>
		  <tr><td>Gambar</td>       <td> :  
          <img src='foto_banner/$r[gambar]'></td></tr>
          <tr><td valign=top>Ganti Gbr</td>    <td> : <input type=file name='fupload' size=30> <br/>
		  								   *Tipe gambar harus JPG/JPEG/GIF/ICO/ICON dan ukuran maks: 100 px</td></tr>
          <tr><td>&nbsp;</td><td>*) Apabila gambar tidak diubah, dikosongkan saja.</td></tr>";
    if ($r[publish]=='Y'){
      echo "<tr><td>Publish</td> <td> : <input type=radio name='publish' value='Y' checked>Y  
                                        <input type=radio name='publish' value='N'> N</td></tr>";
    }
    else{
      echo "<tr><td>Publish</td> <td> : <input type=radio name='publish' value='Y'>Y  
                                        <input type=radio name='publish' value='N' checked>N</td></tr>";
    }
    if ($r[aktif]=='Y'){
      echo "<tr><td>Aktif</td> <td> : <input type=radio name='aktif' value='Y' checked>Y  
                                      <input type=radio name='aktif' value='N'> N</td></tr>";
    }
    else{
      echo "<tr><td>Aktif</td> <td> : <input type=radio name='aktif' value='Y'>Y  
                                      <input type=radio name='aktif' value='N' checked>N</td></tr>";
    }
    if ($r[status]=='karyawan'){
      echo "<tr><td>Status</td> <td> : <input type=radio name='status' value='karyawan' checked>karyawan  
                                       <input type=radio name='status' value='admin'> admin </td></tr>";
    }
    else if ($r[status]=='admin'){
      echo "<tr><td>Status</td> <td> : <input type=radio name='status' value='karyawan'>karyawan  
                                       <input type=radio name='status' value='admin' checked>admin</td></tr>";
    }
	else{
      echo "<tr><td>Status</td> <td> : <input type=radio name='status' value='karyawan'>karyawan  
                                       <input type=radio name='status' value='admin'>admin</td></tr>";
	}
    echo "<tr><td>Urutan</td>       <td> : <input type=text name='urutan' size=1 value='$r[urutan]'></td></tr>
          <tr><td colspan=2><input type=submit value=Update class=btnbluestyle>
                            <input type=button value=Batal onclick=self.history.back() class=btnbluestyle></td></tr>
          </table></form>";
    break;  
}
}
?>
