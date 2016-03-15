<?php

$aksi="modul/mod_bank/aksi_bank.php";
switch($_GET[act]){
  // Tampil Bank
  default:
	//untuk warna selang seling pada tabel
	$warnaGenap='#a0ffa4';
	$warnaGanjil='#e7ffe8';
	
    echo "
          <input type=button value='Tambah bank' 
          onclick=\"window.location.href='?module=bank&act=tambahbank';\" class=btnbluestyle><br><br>
          <table class=tablestyle>
          <tr><th>no</th><th>nama bank</th><th>aksi</th></tr>"; 
    $tampil=mysql_query("SELECT * FROM bank ORDER BY nama_bank");
    $no=1;
    while ($r=mysql_fetch_array($tampil)){
	  if ($no % 2 == 0){
		$warna = $warnaGenap;}
	  else{
		$warna = $warnaGanjil;}
      
	  echo "<tr bgcolor='$warna'><td>$no</td>
             <td>$r[nama_bank]</td>
             <td><a href=?module=bank&act=editbank&id=$r[id_bank]><img src=images/edit.png border=0></a> | 
	               <a href=$aksi?module=bank&act=hapus&id=$r[id_bank]><img src=images/delete.png border=0></a>
             </td></tr>";
      $no++;
    }
    echo "</table>";
    break;
  
  // Form Tambah Bank
  case "tambahbank":
    echo "<div id=greyboxsmall><span class=judul_page>Tambah bank</span></div>
          <form method=POST action='$aksi?module=bank&act=input'>
          <table class=tableform>
          <tr><td>Nama bank</td><td> : <input type=text name='nama_bank'></td></tr>
          <tr><td colspan=2><input type=submit name=submit value='Simpan' class=btnbluestyle>
                            <input type=button value='Batal' onclick=self.history.back() class=btnbluestyle></td></tr>
          </table></form>";
     break;
  
  // Form Edit Bank
  case "editbank":
    $edit=mysql_query("SELECT * FROM bank WHERE id_bank='$_GET[id]'");
    $r=mysql_fetch_array($edit);

    echo "<div id=greyboxsmall><span class=judul_page>Edit Bank</span></div>
          <form method=POST action=$aksi?module=bank&act=update>
          <input type=hidden name=id value='$r[id_bank]'>
          <table class=tableform>
          <tr><td>Nama bank</td><td> : <input type=text name='nama_bank' value='$r[nama_bank]'></td></tr>
          <tr><td colspan=2><input type=submit value='Update' class='btnbluestyle'>
                            <input type=button value='Batal' onclick=self.history.back() class='btnbluestyle'></td></tr>
          </table></form>";
    break;  
}
?>
