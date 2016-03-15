<?php

$aksi="modul/mod_konfirmasi/aksi_konfirmasi.php";
switch($_GET[act]){
  // Tampil konfirmasi
  default:
	//untuk warna selang seling pada tabel
	$warnaGenap='#a0ffa4';
	$warnaGanjil='#e7ffe8';
	
    echo "
          <input type=button value='Tambah konfirmasi' 
          onclick=\"window.location.href='?module=konfirmasi&act=tambahkonfirmasi';\" class=btnbluestyle><br><br>
          <table class=tablestyle>
          <tr><th>no</th><th>id_member</th><th>konfirmasi</th><th>aksi</th></tr>"; 
    $tampil=mysql_query("SELECT * FROM konfirmasi, member WHERE konfirmasi.`id_member`=member.`id_member`");
    $no=1;
    while ($r=mysql_fetch_array($tampil)){
	  if ($no % 2 == 0){
		$warna = $warnaGenap;}
	  else{
		$warna = $warnaGanjil;}
      
	  echo "<tr bgcolor='$warna'><td>$no</td>
             <td>$r[nama]</td>
			 <td>$r[konfirmasi]</td>
             <td><a href=?module=konfirmasi&act=editkonfirmasi&id=$r[id_konfirmasi]><img src=images/edit.png border=0></a> | 
	               <a href=$aksi?module=konfirmasi&act=hapus&id=$r[id_konfirmasi]><img src=images/delete.png border=0></a>
             </td></tr>";
      $no++;
    }
    echo "</table>";
    break;
  
  // Form Tambah konfirmasi
  case "tambahkonfirmasi":
    echo "<div id=greyboxsmall><span class=judul_page>Tambah konfirmasi</span></div>
          <form method=POST action='$aksi?module=konfirmasi&act=input'>
          <table class=tableform>
          <tr><td>Nama konfirmasi</td><td> : <input type=text name='nama_konfirmasi'></td></tr>
          <tr><td colspan=2><input type=submit name=submit value='Simpan' class=btnbluestyle>
                            <input type=button value='Batal' onclick=self.history.back() class=btnbluestyle></td></tr>
          </table></form>";
     break;
  
  // Form Edit konfirmasi
  case "editkonfirmasi":
    $edit=mysql_query("SELECT * FROM konfirmasi WHERE id_konfirmasi='$_GET[id]'");
    $r=mysql_fetch_array($edit);

    echo "<div id=greyboxsmall><span class=judul_page>Edit konfirmasi</span></div>
          <form method=POST action=$aksi?module=konfirmasi&act=update>
          <input type=hidden name=id value='$r[id_konfirmasi]'>
          <table class=tableform>
          <tr><td>Nama konfirmasi</td><td> : <input type=text name='nama_konfirmasi' value='$r[nama_konfirmasi]'></td></tr>
          <tr><td colspan=2><input type=submit value='Update' class='btnbluestyle'>
                            <input type=button value='Batal' onclick=self.history.back() class='btnbluestyle'></td></tr>
          </table></form>";
    break;  
}
?>
