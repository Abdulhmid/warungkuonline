<?php

$aksi="modul/mod_merk/aksi_merk.php";
switch($_GET[act]){
  // Tampil merk
  default:
	//untuk warna selang seling pada tabel
	$warnaGenap='#a0ffa4';
	$warnaGanjil='#e7ffe8';
	
    echo "<div id=greyboxsmall><span class=judul_page>merk</span></div>
          <input type=button value='Tambah merk' 
          onclick=\"window.location.href='?module=merk&act=tambahmerk';\" class=btnbluestyle><br><br>
          <table class=tablestyle>
          <tr><th>no</th><th>nama merk</th><th>aksi</th></tr>"; 
    $tampil=mysql_query("SELECT * FROM merk ORDER BY merk");
    $no=1;
    while ($r=mysql_fetch_array($tampil)){
	  if ($no % 2 == 0){
		$warna = $warnaGenap;}
	  else{
		$warna = $warnaGanjil;}
      
	  echo "<tr bgcolor='$warna'><td>$no</td>
             <td>$r[merk]</td>
             <td><a href=?module=merk&act=editmerk&id=$r[id_merk]><img src=images/edit.png border=0></a> | 
	               <a href=$aksi?module=merk&act=hapus&id=$r[id_merk]><img src=images/delete.png border=0></a>
             </td></tr>";
      $no++;
    }
    echo "</table>";
    break;
  
  // Form Tambah merk
  case "tambahmerk":
    echo "<div id=greyboxsmall><span class=judul_page>Tambah merk</span></div>
          <form method=POST action='$aksi?module=merk&act=input'>
          <table class=tableform>
          <tr><td>Nama merk</td><td> : <input type=text name='merk'></td></tr>
          <tr><td colspan=2><input type=submit name=submit value='Simpan' class=btnbluestyle>
                            <input type=button value='Batal' onclick=self.history.back() class=btnbluestyle></td></tr>
          </table></form>";
     break;
  
  // Form Edit merk  
  case "editmerk":
    $edit=mysql_query("SELECT * FROM merk WHERE id_merk='$_GET[id]'");
    $r=mysql_fetch_array($edit);

    echo "<div id=greyboxsmall><span class=judul_page>Edit merk</span></div>
          <form method=POST action=$aksi?module=merk&act=update>
          <input type=hidden name=id value='$r[id_merk]'>
          <table class=tableform>
          <tr><td>Nama merk</td><td> : <input type=text name='merk' value='$r[merk]'></td></tr>
          <tr><td colspan=2><input type=submit value='Update' class='btnbluestyle'>
                            <input type=button value='Batal' onclick=self.history.back() class='btnbluestyle'></td></tr>
          </table></form>";
    break;  
}
?>
