<?php

$aksi="modul/mod_status/aksi_status.php";
switch($_GET[act]){
  // Tampil merk
  default:
	//untuk warna selang seling pada tabel
	$warnaGenap='#a0ffa4';
	$warnaGanjil='#e7ffe8';
	
    echo "<div id=greyboxsmall></div>
          <input type=button value='Tambah Status Sewa Motor' 
          onclick=\"window.location.href='?module=merk&act=tambahmerk';\" class=btnbluestyle><br><br>
          <table class=tablestyle>
          <tr><th>no</th><th>nama motor</th><th>merk</th><th>Plat No.</th><th>Status</th><th colspan=3>aksi</th></tr>";

    $tampil=mysql_query("SELECT motor.nama_motor,motor.harga,motor.tgl_masuk,merk.merk,motor.id_motor,motor.no_plat,motor.status FROM motor,merk WHERE motor.id_merk=merk.id_merk ORDER BY id_motor");
    $no=1;
    while ($r=mysql_fetch_array($tampil)){
	  if ($no % 2 == 0){
		$warna = $warnaGenap;}
	  else{
		$warna = $warnaGanjil;}
      
      echo "<tr bgcolor='$warna'><td>$no</td>
                <td>$r[nama_motor]</td>
				<td>$r[merk]</td>
				<td>$r[no_plat]</td>				
				<td>$r[status]</td>
             <td><a href=?module=status&act=editstatus&id=$r[id_motor]><img src=images/edit.png border=0></a> | 
		    </tr>";
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
  
  // Form Edit status  
  case "editstatus":
    $edit=mysql_query("SELECT * FROM motor WHERE id_motor='$_GET[id]'");
    $r=mysql_fetch_array($edit);
	    $pilihan_status = array('Tersedia', 'Disewa');
    $pilihan_order = '';
    foreach ($pilihan_status as $status) {
	   $pilihan_order .= "<option value=$status";
	   if ($status == $r[status_order]) {
		    $pilihan_order .= " selected";
	   }
	   $pilihan_order .= ">$status</option>\r\n";
    }


    echo "<div id=greyboxsmall><span class=judul_page>Edit Kategori</span></div>
          <form method=POST action=$aksi?module=status&act=update>
          <input type=hidden name=id value='$r[id_motor]'>
          <table class=tableform>
		  <tr><td><select name=status class=selectstyle>$pilihan_order</select></td> 
          <tr><td colspan=2><input type=submit value='Update' class='btnbluestyle'>
                            <input type=button value='Batal' onclick=self.history.back() class='btnbluestyle'></td></tr>
          </table></form>";
    break;  
}
?>
