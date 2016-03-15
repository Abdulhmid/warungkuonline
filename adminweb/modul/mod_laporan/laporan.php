<?php

$aksi="modul/mod_laporan/aksi_laporan.php";
switch($_GET[act]){
  // Tampil Kategori
  default:
	//untuk warna selang seling pada tabel
	$warnaGenap='#a0ffa4';
	$warnaGanjil='#e7ffe8';
	
    echo "
	<b>Laporan Penyalahgunaan Iklan</b>
          <table class=tablestyle>
          <tr><th>no</th><th>nama member</th><th>nama produk</th><th>pelapor</th><th>keterangan</th><th>aksi</th></tr>"; 

    $tampil=mysql_query("SELECT member.*, laporan_iklan.`nama` AS nama_pelapor, laporan_iklan.`id_laporan_iklan`,produk.`nama_produk`, laporan_iklan.`keterangan` 
FROM laporan_iklan, member, produk WHERE produk.`username`=member.`username`
AND produk.`id_produk`=laporan_iklan.`id_produk`");


    $no=1;
    while ($r=mysql_fetch_array($tampil)){
	  if ($no % 2 == 0){
		$warna = $warnaGenap;}
	  else{
		$warna = $warnaGanjil;}
      
	  echo "<tr bgcolor='$warna'><td>$no</td>
             <td>$r[username]</td>
             <td>$r[nama_produk]</td>
			 <td>$r[nama_pelapor]</td>
             <td>$r[keterangan]</td>
             <td><a href=?module=member&act=editlaporan&id=$r[id_laporan_iklan]><img src=images/edit.png border=0></a> | 
	               <a href=$aksi?module=laporan&act=hapus&id=$r[id_laporan_iklan]><img src=images/delete.png border=0></a>
             </td></tr>";
      $no++;
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
}
?>
