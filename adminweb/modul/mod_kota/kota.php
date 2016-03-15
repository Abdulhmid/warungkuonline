<?php

$aksi="modul/mod_kota/aksi_kota.php";
switch($_GET[act]){
  // Tampil Kategori
  default:
	//untuk warna selang seling pada tabel
	$warnaGenap='#a0ffa4';
	$warnaGanjil='#e7ffe8';
	
    echo "<div id=greyboxsmall><span class=judul_page>Kategori</span></div>
          <input type=button value='Tambah Kota' 
          onclick=\"window.location.href='?module=kota&act=tambahkota';\" class=btnbluestyle><br><br>
          <table class=tablestyle>
          <tr><th>no</th><th>nama kota</th><th>aksi</th></tr>"; 
    $tampil=mysql_query("SELECT * FROM kota ORDER BY nama_kota");
    $no=1;
    while ($r=mysql_fetch_array($tampil)){
	  if ($no % 2 == 0){
		$warna = $warnaGenap;}
	  else{
		$warna = $warnaGanjil;}
      
	  echo "<tr bgcolor='$warna'><td>$no</td>
             <td>$r[nama_kota]</td>
             <td><a href=?module=kota&act=editkota&id=$r[id_kota]><img src=images/edit.png border=0></a> | 
	               <a href=$aksi?module=kota&act=hapus&id=$r[id_kota]><img src=images/delete.png border=0></a>
             </td></tr>";
      $no++;
    }
    echo "</table>";
    break;
  
  // Form Tambah Kategori
  case "tambahkota":
    echo "<div id=greyboxsmall><span class=judul_page>Tambah Kota</span></div>
          <form method=POST action='$aksi?module=kota&act=input'>
          <table class=tableform>
          <tr><td>Nama Kota</td><td> : <input type=text name='nama_kota'></td></tr>
          <tr><td colspan=2><input type=submit name=submit value='Simpan' class=btnbluestyle>
                            <input type=button value='Batal' onclick=self.history.back() class=btnbluestyle></td></tr>
          </table></form>";
     break;
  
  // Form Edit Kategori  
  case "editkota":
    $edit=mysql_query("SELECT * FROM kota WHERE id_kota='$_GET[id]'");
    $r=mysql_fetch_array($edit);

    echo "<div id=greyboxsmall><span class=judul_page>Edit Kategori</span></div>
          <form method=POST action=$aksi?module=kota&act=update>
          <input type=hidden name=id value='$r[id_kota]'>
          <table class=tableform>
          <tr><td>Nama Kota</td><td> : <input type=text name='nama_kota' value='$r[nama_kota]'></td></tr>
          <tr><td colspan=2><input type=submit value='Update' class='btnbluestyle'>
                            <input type=button value='Batal' onclick=self.history.back() class='btnbluestyle'></td></tr>
          </table></form>";
    break;  
}
?>
