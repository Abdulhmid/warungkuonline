<?php

$aksi="modul/mod_member/aksi_member.php";
switch($_GET[act]){
  // Tampil Kategori
  default:
	//untuk warna selang seling pada tabel
	$warnaGenap='#a0ffa4';
	$warnaGanjil='#e7ffe8';
	
    echo "
          <table class=tablestyle>
          <tr><th>no</th><th>username</th><th>nama member</th><th>nama produk</th><th>harga jual</th><th>aksi</th></tr>"; 
    $tampil=mysql_query("SELECT * FROM produk, member WHERE produk.`id_member`=member.`id_member`
ORDER BY username");
    $no=1;
    while ($r=mysql_fetch_array($tampil)){
	  if ($no % 2 == 0){
		$warna = $warnaGenap;}
	  else{
		$warna = $warnaGanjil;}
      
	  echo "<tr bgcolor='$warna'><td>$no</td>
             <td>$r[username]</td>
			 <td>$r[nama]</td>
             <td>$r[nama_produk]</td>
             <td>$r[harga]</td>
             <td><a href=?module=member&act=editmember&id=$r[id_member]><img src=images/edit.png border=0></a> | 
	               <a href=$aksi?module=member&act=hapus&id=$r[id_member]><img src=images/delete.png border=0></a>
             </td></tr>";
      $no++;
    }
    echo "</table>";
    break;
  
// Form Edit 
  case "editmember":
    $edit=mysql_query("SELECT * FROM member WHERE id_member='$_GET[id]'");
    $r=mysql_fetch_array($edit);

    echo "<div id=greyboxsmall><span class=judul_page>Edit Member</span></div>
          <form method=POST action=$aksi?module=member&act=update>
          <input type=hidden name=id value='$r[id_member]'>
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
