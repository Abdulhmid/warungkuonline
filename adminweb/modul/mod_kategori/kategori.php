<?php

$aksi="modul/mod_kategori/aksi_kategori.php";
switch($_GET[act]){
  // Tampil kategori
  default:
	//untuk warna selang seling pada tabel
	$warnaGenap='#a0ffa4';
	$warnaGanjil='#e7ffe8';
	
    echo "
          <input type=button value='Tambah kategori' 
          onclick=\"window.location.href='?module=kategori&act=tambahkategori';\" class=btnbluestyle><br><br>
          <table class=tablestyle>
          <tr><th>no</th><th>nama kategori</th><th>aksi</th></tr>"; 
    $tampil=mysql_query("SELECT * FROM kategori ORDER BY nama_kategori");
    $no=1;
    while ($r=mysql_fetch_array($tampil)){
	  if ($no % 2 == 0){
		$warna = $warnaGenap;}
	  else{
		$warna = $warnaGanjil;}
      
	  echo "<tr bgcolor='$warna'><td>$no</td>
             <td>$r[nama_kategori]</td>
             <td><a href=?module=kategori&act=editkategori&id=$r[id_kategori]><img src=images/edit.png border=0></a> | 
	               <a href=$aksi?module=kategori&act=hapus&id=$r[id_kategori]><img src=images/delete.png border=0></a>
             </td></tr>";
      $no++;
    }
    echo "</table>";
    break;
  
  // Form Tambah kategori
  case "tambahkategori":
    echo "<div id=greyboxsmall><span class=judul_page>Tambah kategori</span></div>
          <form method=POST action='$aksi?module=kategori&act=input'>
          <table class=tableform>
          <tr><td>Nama kategori</td><td> : <input type=text name='nama_kategori'></td></tr>
          <tr><td colspan=2><input type=submit name=submit value='Simpan' class=btnbluestyle>
                            <input type=button value='Batal' onclick=self.history.back() class=btnbluestyle></td></tr>
          </table></form>";
     break;
  
  // Form Edit kategori
  case "editkategori":
    $edit=mysql_query("SELECT * FROM kategori WHERE id_kategori='$_GET[id]'");
    $r=mysql_fetch_array($edit);

    echo "<div id=greyboxsmall><span class=judul_page>Edit kategori</span></div>
          <form method=POST action=$aksi?module=kategori&act=update>
          <input type=hidden name=id value='$r[id_kategori]'>
          <table class=tableform>
          <tr><td>Nama kategori</td><td> : <input type=text name='nama_kategori' value='$r[nama_kategori]'></td></tr>
          <tr><td colspan=2><input type=submit value='Update' class='btnbluestyle'>
                            <input type=button value='Batal' onclick=self.history.back() class='btnbluestyle'></td></tr>
          </table></form>";
    break;  
}
?>
